## 2024-05-23 - Rate Limiting Implementation
**Vulnerability:** The `/api/contact` endpoint lacked rate limiting, making it vulnerable to DoS attacks and resource exhaustion (email quota).
**Learning:** Custom in-memory rate limiters using `req.headers['x-forwarded-for']` directly are vulnerable to IP spoofing. Always use established libraries like `express-rate-limit` and configure `app.set('trust proxy', 1)` when behind a proxy.
**Prevention:** Use `express-rate-limit` for all sensitive public endpoints. Ensure `trust proxy` is configured correctly for the deployment environment.
