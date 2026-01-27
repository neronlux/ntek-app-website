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

  // Content Security Policy
  const isDev = process.env.NODE_ENV === "development";

  // In development, we need 'unsafe-inline' and 'unsafe-eval' for Vite HMR
  const scriptSrc = isDev
    ? "'self' 'unsafe-inline' 'unsafe-eval'"
    : "'self'";

  // We allow 'unsafe-inline' in style-src because:
  // 1. Certain UI components (like Charts) inject dynamic styles
  // 2. Google Fonts compatibility
  const styleSrc = "'self' 'unsafe-inline' https://fonts.googleapis.com";

  const fontSrc = "'self' data: https://fonts.gstatic.com";

  const imgSrc = "'self' data: https: blob:";

  const connectSrc = "'self' https: ws: wss:";

  const csp = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    `style-src ${styleSrc}`,
    `font-src ${fontSrc}`,
    `img-src ${imgSrc}`,
    `connect-src ${connectSrc}`,
    "upgrade-insecure-requests"
  ].join("; ");

  res.setHeader("Content-Security-Policy", csp);

  next();
}
