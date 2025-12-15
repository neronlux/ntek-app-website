## 2025-12-15 - [Rate Limiting Contact Form]
**Vulnerability:** The `/api/contact` endpoint had no rate limiting, allowing for potential abuse (spam, DoS, resource exhaustion on Resend).
**Learning:** Security dependencies (like `express-rate-limit`) are standard, but sometimes a lightweight, dependency-free solution is preferred for simple needs or to avoid dependency bloat/conflicts. Implementing a simple Token Bucket or Fixed Window in memory is straightforward for single-instance apps.
**Prevention:** Always identify public unauthenticated endpoints and apply rate limiting. Use `app.disable("x-powered-by")` as a default for Express apps.
