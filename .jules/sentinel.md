## 2026-01-26 - Content Security Policy & External Resources
**Vulnerability:** The application relied on Google Fonts but the manual CSP configuration blocked them, breaking the UI. The CSP also allowed `unsafe-inline` and `unsafe-eval` for scripts unnecessarily in production.
**Learning:** Defaulting to a strict CSP is good, but external resources (fonts, analytics) must be explicitly allowed. Vite requires `unsafe-eval`/`unsafe-inline` in development, necessitating environment-aware CSP generation.
**Prevention:** Use environment variables (`NODE_ENV`) to toggle loose CSP directives for development, while enforcing strict policies in production. Explicitly list trusted CDNs in `style-src` and `font-src`.

## 2026-02-02 - Express 5 Routing & Error Handling
**Vulnerability:** API routes lacked a specific 404 handler, causing the SPA catch-all to return HTML for API requests (200 OK). Additionally, the global error handler suppressed stack traces in logs but exposed error messages in responses, potentially leaking sensitive info.
**Learning:** Express 5 removed support for the `*` wildcard in routing (e.g., `app.all('/api/*')` fails). Instead, `app.use('/api', ...)` or regex/parameters must be used for catch-all behavior.
**Prevention:** Implement a dedicated API 404 handler using `app.use('/prefix', handler)` placed after API routes but before the frontend catch-all. Secure the global error handler to log stack traces server-side while returning generic messages in production.

## 2026-02-09 - Zod Schema Validation & Input Length Limits
**Vulnerability:** The `contactFormSchema` validated for minimum lengths but lacked `.max()` constraints, creating a potential Denial of Service (DoS) vector via extremely large payload submissions that could exhaust memory or processing resources.
**Learning:** Input validation must restrict both the lower and upper bounds of inputs. Without upper bounds, applications are vulnerable to resource exhaustion.
**Prevention:** Always enforce `.max()` limits on string inputs in validation schemas. Specifically, limit standard text fields (e.g., Names, Emails) and establish sensible bounds for larger fields (e.g., Messages).

## 2026-03-23 - express-rate-limit & HSTS
**Vulnerability:** The application was using an older version of `express-rate-limit` (8.2.1) which has a high-severity vulnerability (GHSA-46wh-pxpv-q5gq) allowing IPv4-mapped IPv6 addresses to bypass rate limiting. Additionally, the custom security middleware was missing the crucial `Strict-Transport-Security` (HSTS) header.
**Learning:** Security middleware and dependencies need regular audits. Relying on reverse proxies for IPv4/IPv6 translation can sometimes misalign with rate limiters if not properly patched. HSTS is a fundamental requirement for enforcing HTTPS that was missing from the otherwise robust manual security headers.
**Prevention:** Regularly audit and update security dependencies, specifically monitoring for CVEs affecting middleware. Ensure all standard security headers, including HSTS, are explicitly defined in custom security implementations.

## 2026-04-20 - API Response Caching
**Vulnerability:** The application was missing `Cache-Control: no-store, max-age=0` headers for `/api` routes, potentially allowing browsers and intermediary proxies to cache sensitive API responses.
**Learning:** By default, browsers and proxies may cache HTTP responses unless explicitly instructed not to. This can lead to sensitive data exposure if a user shares a device or an intermediary caches the data.
**Prevention:** Always apply `Cache-Control: no-store, max-age=0` headers specifically to API endpoints (like `/api`) to ensure responses are never cached, regardless of the HTTP method or caching heuristic of the client.
