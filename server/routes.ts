import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getResendClient } from "./resend";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
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
          <p><strong>Name:</strong> ${validated.name}</p>
          <p><strong>Email:</strong> ${validated.email}</p>
          <p><strong>Message:</strong></p>
          <p>${validated.message.replace(/\n/g, '<br>')}</p>
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
