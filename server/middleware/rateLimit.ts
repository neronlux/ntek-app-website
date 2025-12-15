import { Request, Response, NextFunction } from "express";

interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  max: number; // Max requests per window
  message?: string;
}

interface ClientData {
  count: number;
  resetTime: number;
}

export class RateLimiter {
  private clients: Map<string, ClientData>;
  private windowMs: number;
  private max: number;
  private message: string;

  constructor(config: RateLimitConfig) {
    this.clients = new Map();
    this.windowMs = config.windowMs;
    this.max = config.max;
    this.message = config.message || "Too many requests, please try again later.";

    // Cleanup interval to prevent memory leaks
    setInterval(() => this.cleanup(), 60000); // Run every minute
  }

  public middleware = (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip || req.socket.remoteAddress || "unknown";
    const now = Date.now();

    let client = this.clients.get(ip);

    if (!client || now > client.resetTime) {
      client = { count: 0, resetTime: now + this.windowMs };
      this.clients.set(ip, client);
    }

    client.count++;

    if (client.count > this.max) {
      res.status(429).json({ success: false, message: this.message });
      return;
    }

    next();
  };

  private cleanup() {
    const now = Date.now();
    // Using Array.from to avoid iteration issues if downlevelIteration is not set
    Array.from(this.clients.entries()).forEach(([ip, client]) => {
      if (now > client.resetTime) {
        this.clients.delete(ip);
      }
    });
  }
}

// Create a standard limiter: 5 requests per 15 minutes for contact form
export const contactLimiter = new RateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: "Too many contact requests from this IP, please try again after 15 minutes.",
});
