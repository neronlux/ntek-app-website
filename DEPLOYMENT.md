# Coolify Deployment Guide

This project is configured to deploy to Coolify using Nixpacks.

## Prerequisites

- Coolify instance running
- Git repository accessible by Coolify
- Resend API key configured
- PostgreSQL database (for Drizzle ORM)

## Deployment Configuration

The [`nixpacks.toml`](nixpacks.toml) file configures the build process:

- **Node.js Version**: 20.19.0 (also supports 22.12.0+)
- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Port**: Application serves on port 5000

## Coolify Setup Steps

1. **Create New Resource** in Coolify:
   - Go to Project → Environment → Resources → New
   - Select "Public Repository" or connect your Git provider

2. **Configure Build Pack**:
   - Build Pack: **Nixpacks** (should be auto-detected)
   - Base Directory: `/` (root)
   - Port: `5000`

3. **Set Environment Variables** (set in Coolify UI):
   
   Required:
   - `RESEND_API_KEY` - Your Resend API key (get from https://resend.com/api-keys)
   - `RESEND_FROM_EMAIL` - Email address to send from (e.g., "onboarding@resend.dev" or your verified domain)
   - `RESEND_TO_EMAIL` - Email address to receive contact form submissions (defaults to RESEND_FROM_EMAIL if not set)
   - `DATABASE_URL` - PostgreSQL connection string (for Drizzle ORM)
   
   Optional:
   - `NODE_ENV` = `production` (auto-set by nixpacks.toml)
   - `PORT` = `5000` (default, can be customized)

4. **Deploy**:
   - Click the "Deploy" button
   - Monitor build logs for any issues

## Build Process

Nixpacks will automatically:
1. Detect Node.js project from [`package.json`](package.json)
2. Clean existing dependencies: `rm -rf package-lock.json node_modules`
3. Install dependencies with `npm install --no-audit --legacy-peer-deps` (for React 19 compatibility)
4. Rebuild native modules: `npm rebuild`
5. Run `npm run build` which:
   - Builds the frontend with Vite
   - Bundles the backend with esbuild
6. Start the app with `npm start` → `node dist/index.js`

## Project Structure

```
.
├── nixpacks.toml          # Nixpacks build configuration
├── package.json           # Dependencies and scripts
├── dist/                  # Generated build output (created during build)
│   ├── public/           # Frontend assets
│   └── index.js          # Server bundle
├── client/               # React frontend source
├── server/               # Express backend source
│   ├── middleware/       # Security and rate limiting
│   ├── storage.ts        # Database/storage layer
│   └── routes.ts         # API endpoints
├── shared/               # Shared types and schemas
└── attached_assets/      # Static assets (logos, images)
```

## Troubleshooting

### Build fails during npm install
- Check that all dependencies are listed in [`package.json`](package.json)
- Verify Node.js version is 20.19.0 or 22.12.0+
- The project enforces npm usage - do not use yarn or pnpm
- Check for peer dependency warnings (handled with `--legacy-peer-deps`)

### Port binding issues
- Ensure Coolify is configured to use port 5000
- Check that your firewall allows the configured port
- Verify trust proxy is set correctly if behind a reverse proxy

### Resend API not working
- Verify environment variables are set correctly in Coolify
- Check that email addresses are verified in Resend dashboard
- Review rate limiting configuration in [`server/middleware/rateLimit.ts`](server/middleware/rateLimit.ts)

### Database connection issues
- Verify `DATABASE_URL` is correctly formatted
- Ensure PostgreSQL database is accessible from Coolify
- Run `npm run db:push` to sync schema changes
- Check Drizzle configuration in [`drizzle.config.ts`](drizzle.config.ts)

## Local Testing

Test the production build locally:

```bash
# Build the application
npm run build

# Start production server
npm start
```

The app will be available at http://localhost:5000

## Additional Information

### React 19 Compatibility

This project uses React 19.2.3 with the following compatibility measures:
- Updated `react-day-picker` to version 9.11.1 for React 19 support
- Added `--legacy-peer-deps` flag to handle peer dependency conflicts
- All major dependencies updated to React 19 compatible versions
- Enforces npm usage via `only-allow@1.2.1` in preinstall hook

### Security Features

The application includes several security features:
- Security headers middleware (CSP, HSTS, X-Frame-Options, etc.)
- Rate limiting on API endpoints
- XSS protection via HTML escaping
- X-Powered-By header disabled
- Trust proxy configuration for accurate IP detection

For more information, see the [`README.md`](README.md) and [`design_guidelines.md`](design_guidelines.md).
