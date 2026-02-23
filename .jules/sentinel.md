## 2026-01-26 - Content Security Policy & External Resources
**Vulnerability:** The application relied on Google Fonts but the manual CSP configuration blocked them, breaking the UI. The CSP also allowed `unsafe-inline` and `unsafe-eval` for scripts unnecessarily in production.
**Learning:** Defaulting to a strict CSP is good, but external resources (fonts, analytics) must be explicitly allowed. Vite requires `unsafe-eval`/`unsafe-inline` in development, necessitating environment-aware CSP generation.
**Prevention:** Use environment variables (`NODE_ENV`) to toggle loose CSP directives for development, while enforcing strict policies in production. Explicitly list trusted CDNs in `style-src` and `font-src`.

## 2026-02-02 - Express 5 Routing & Error Handling
**Vulnerability:** API routes lacked a specific 404 handler, causing the SPA catch-all to return HTML for API requests (200 OK). Additionally, the global error handler suppressed stack traces in logs but exposed error messages in responses, potentially leaking sensitive info.
**Learning:** Express 5 removed support for the `*` wildcard in routing (e.g., `app.all('/api/*')` fails). Instead, `app.use('/api', ...)` or regex/parameters must be used for catch-all behavior.
**Prevention:** Implement a dedicated API 404 handler using `app.use('/prefix', handler)` placed after API routes but before the frontend catch-all. Secure the global error handler to log stack traces server-side while returning generic messages in production.

## 2026-02-23 - DoS Prevention via Input Length Limits
**Vulnerability:** The contact form lacked maximum length constraints on `name`, `email`, and `message` fields, allowing potentially unlimited input size which could lead to Denial of Service (DoS).
**Learning:** Zod schemas should always include `.max()` constraints for string inputs to prevent resource exhaustion. Frontend `maxLength` attributes improve UX but backend validation is the primary defense.
**Prevention:** Always add `.max()` to Zod string schemas and `maxLength` to HTML inputs.
