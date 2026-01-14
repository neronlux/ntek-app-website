import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { securityHeaders } from "./middleware/security";

const app = express();

// Trust the first proxy to ensure accurate IP detection for rate limiting
app.set('trust proxy', 1);

// Disable the X-Powered-By header to reduce fingerprinting
app.disable('x-powered-by');

// Add security headers to all responses
app.use(securityHeaders);

// Extend the http module to include a rawBody property on IncomingMessage
declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}

// Middleware to parse JSON bodies and capture raw body buffer
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));

// Logging middleware to track API requests and responses
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

/**
 * Initializes and starts the Express server.
 *
 * This IIFE (Immediately Invoked Function Expression) performs the following steps:
 * 1. Registers API routes.
 * 2. Sets up global error handling middleware.
 * 3. Configures Vite for development or serves static files for production.
 * 4. Starts the server on the specified port (default 5000) and host (0.0.0.0).
 */
(async () => {
  const server = await registerRoutes(app);

  // Global error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    // Do not throw err here; the request is handled.
    // Logging is handled by the logging middleware or console.error in routes.
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || '5000', 10);
  const host = '0.0.0.0';
  
  server.listen(port, host, () => {
    log(`serving on port ${port}`);
  });
})();
