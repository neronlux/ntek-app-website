# Coolify Deployment Guide

This project is configured to deploy to Coolify using Nixpacks.

## Prerequisites

- Coolify instance running
- Git repository accessible by Coolify
- Resend API configured in Coolify (already set up via Replit integration)

## Deployment Configuration

The `nixpacks.toml` file configures the build process:

- **Node.js Version**: 20.x
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

3. **Set Port**:
   - Port: `5000`

4. **Environment Variables** (set in Coolify UI):
   
   Required:
   - `RESEND_API_KEY` - Your Resend API key (get from https://resend.com/api-keys)
   - `RESEND_FROM_EMAIL` - Email address to send from (e.g., "onboarding@resend.dev" or your verified domain)
   - `RESEND_TO_EMAIL` - Email address to receive contact form submissions (defaults to RESEND_FROM_EMAIL if not set)
   
   Optional:
   - `NODE_ENV` = `production` (auto-set by nixpacks.toml)

5. **Deploy**:
   - Click the "Deploy" button
   - Monitor build logs for any issues

## Build Process

Nixpacks will automatically:
1. Detect Node.js project from `package.json`
2. Install dependencies with `npm ci`
3. Run `npm run build` which:
   - Builds the frontend with Vite
   - Bundles the backend with esbuild
4. Start the app with `npm start` → `node dist/index.js`

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
└── attached_assets/      # Static assets (logos, images)
```

## Troubleshooting

### Build fails during npm install
- Check that all dependencies are listed in `package.json`
- Verify Node.js version compatibility

### Port binding issues
- Ensure Coolify is configured to use port 5000
- Check that your firewall allows the configured port

### Resend API not working
- Verify environment variables are set correctly in Coolify
- Check Resend connection configuration in Replit

## Local Testing

Test the production build locally:

```bash
# Build the application
npm run build

# Start production server
npm start
```

The app will be available at http://localhost:5000
