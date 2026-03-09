import { Request, Response, NextFunction } from "express";
import helmet from "helmet";

/**
 * Middleware to add security headers to responses.
 *
 * Uses Helmet for standard security headers while providing a custom
 * Content Security Policy to support Vite HMR and required external resources.
 */
export function securityHeaders(req: Request, res: Response, next: NextFunction) {
  const isDev = process.env.NODE_ENV === "development";

  const scriptSrc = isDev
    ? ["'self'", "'unsafe-inline'", "'unsafe-eval'"]
    : ["'self'"];

  const styleSrc = ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"];
  const fontSrc = ["'self'", "data:", "https://fonts.gstatic.com"];
  const imgSrc = ["'self'", "data:", "https:", "blob:"];
  const connectSrc = ["'self'", "https:", "ws:", "wss:"];

  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc,
        styleSrc,
        fontSrc,
        imgSrc,
        connectSrc,
        upgradeInsecureRequests: [],
      },
    },
    // Prevent the site from being embedded in iframes (clickjacking protection)
    frameguard: { action: 'deny' },
    // Control how much referrer information is sent
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
  })(req, res, next);
}
