## 2026-01-26 - Content Security Policy & External Resources
**Vulnerability:** The application relied on Google Fonts but the manual CSP configuration blocked them, breaking the UI. The CSP also allowed `unsafe-inline` and `unsafe-eval` for scripts unnecessarily in production.
**Learning:** Defaulting to a strict CSP is good, but external resources (fonts, analytics) must be explicitly allowed. Vite requires `unsafe-eval`/`unsafe-inline` in development, necessitating environment-aware CSP generation.
**Prevention:** Use environment variables (`NODE_ENV`) to toggle loose CSP directives for development, while enforcing strict policies in production. Explicitly list trusted CDNs in `style-src` and `font-src`.
