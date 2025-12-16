import { Request, Response, NextFunction } from "express";

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5; // Limit to 5 requests per window

interface RateLimitInfo {
  count: number;
  resetTime: number;
}

const ipRequestMap = new Map<string, RateLimitInfo>();

// Cleanup interval (every 10 minutes) to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, info] of Array.from(ipRequestMap.entries())) {
    if (now > info.resetTime) {
      ipRequestMap.delete(ip);
    }
  }
}, 10 * 60 * 1000).unref();

/**
 * Rate limiting middleware for contact form.
 * Limits usage to 5 requests per 15 minutes per IP.
 */
export function contactRateLimit(req: Request, res: Response, next: NextFunction) {
  // Use req.ip which works with 'trust proxy' setting
  const ip = req.ip || "unknown";
  const now = Date.now();

  const info = ipRequestMap.get(ip);

  if (info && now < info.resetTime) {
    if (info.count >= MAX_REQUESTS) {
      res.status(429).json({
        success: false,
        message: "Too many requests, please try again later."
      });
      return;
    }
    info.count++;
  } else {
    ipRequestMap.set(ip, {
      count: 1,
      resetTime: now + WINDOW_MS
    });
  }

  next();
}
