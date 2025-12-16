import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getResendClient } from "./resend";
import { z } from "zod";
import { contactRateLimit } from "./middleware/rateLimit";

/**
 * Escapes HTML characters in a string to prevent XSS.
 * @param {string} unsafe - The string to escape.
 * @returns {string} The escaped string.
 */
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Zod schema for validating contact form submissions.
 * Requires a name, a valid email, and a message of at least 10 characters.
 */
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

/**
 * Registers API routes and middleware on the Express application.
 *
 * @param {Express} app - The Express application instance.
 * @returns {Promise<Server>} A Promise that resolves to the created HTTP server instance.
 */
export async function registerRoutes(app: Express): Promise<Server> {
  /**
   * POST /api/contact
   * Handles contact form submissions.
   * Validates the request body using `contactFormSchema` and sends an email using Resend.
   *
   * Expected Body:
   * - name: string
   * - email: string
   * - message: string
   *
   * Returns:
   * - 200: { success: true, message: "Message sent successfully!" }
   * - 400: { success: false, message: <validation error> }
   * - 429: { success: false, message: "Too many requests" }
   * - 500: { success: false, message: "Failed to send message. Please try again." }
   */
  app.post("/api/contact", contactRateLimit, async (req, res) => {
    try {
      const validated = contactFormSchema.parse(req.body);
      
      const resend = getResendClient();
      
      // You'll need to set RESEND_FROM_EMAIL in your environment variables
      // For example: "onboarding@resend.dev" or your verified domain email
      const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
      const toEmail = process.env.RESEND_TO_EMAIL || fromEmail;
      
      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: `Contact Form: ${validated.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(validated.name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(validated.email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(validated.message).replace(/\n/g, '<br>')}</p>
        `,
      });

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error: any) {
      console.error("Contact form error:", error);
      
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          success: false, 
          message: error.errors[0].message 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
