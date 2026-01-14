import { Request, Response, NextFunction } from "express";

/**
 * Middleware to add security headers to responses.
 *
 * - X-Content-Type-Options: Prevents MIME-sniffing.
 * - X-Frame-Options: Prevents clickjacking.
 * - X-XSS-Protection: Activates browser XSS filtering.
 * - Referrer-Policy: Controls referrer information.
 * - Content-Security-Policy: Restricts resources to trusted sources.
 */
export function securityHeaders(_req: Request, res: Response, next: NextFunction) {
  // Prevent the browser from trying to guess the content type
  res.setHeader("X-Content-Type-Options", "nosniff");

  // Prevent the site from being embedded in iframes (clickjacking protection)
  res.setHeader("X-Frame-Options", "DENY");

  // Enable the browser's XSS filter
  res.setHeader("X-XSS-Protection", "1; mode=block");

  // Control how much referrer information is sent
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  // Basic Content Security Policy
  // allowing 'unsafe-inline' and 'unsafe-eval' for now to ensure compatibility
  // with Vite and existing scripts, but restricting sources to 'self' and common ones.
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: https: blob:; connect-src 'self' https: ws: wss:;"
  );

  next();
}
