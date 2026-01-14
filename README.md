[![zread](https://img.shields.io/badge/Ask_Zread-_.svg?style=for-the-badge&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff)](https://zread.ai/neronlux/ntek-app-website)
# NTEK App Website

A modern, responsive website built with React 19, TypeScript, and Express.js 5, featuring a contact form with email integration via Resend. Showcasing self-hosted infrastructure solutions with a focus on Docker containers, Coolify, Hetzner Cloud, Cloudflare, and Netdata.

## 🚀 Features

- **Modern UI**: Built with React 19, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Contact Form**: Integrated email sending via Resend API
- **Technology Stack Showcase**: Displays modern infrastructure technologies
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Production Ready**: Configured for deployment on Coolify with Nixpacks
- **Self-Hosted Focus**: Emphasizes Docker containers and infrastructure management

## 🌟 Website Content

The website showcases Ntek's self-hosted infrastructure platform with:

### Key Sections
- **Hero Section**: "Self-Hosted Infrastructure Made Simple" with data center imagery
- **Benefits**: Deploy with confidence, scale with ease, monitor everything
- **Technology Stack**: Coolify, Hetzner Cloud, Cloudflare, Netdata
- **Features**: One-click deployments, auto-scaling, real-time monitoring
- **Contact Form**: Integrated with Resend for lead generation

### Technology Focus
- **Coolify**: Application deployment and management
- **Hetzner Cloud**: Infrastructure hosting
- **Cloudflare**: CDN and security
- **Netdata**: Real-time monitoring
- **Docker**: Containerization

## 🛠️ Tech Stack

### Frontend
- **React 19.2.3** with TypeScript
- **Vite 7.1.11** for build tooling
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Framer Motion 12.24.11** for animations
- **React Hook Form** with Zod validation
- **@tanstack/react-query 5.90.6** for server state management

### Backend
- **Express 5.2.1** with TypeScript
- **Resend 6.6.0** for email functionality
- **Zod 4.1.13** for request validation
- **Drizzle ORM** with PostgreSQL support
- **Passport** for authentication
- **WebSocket support** via ws package

### Development & Deployment
- **Nixpacks** for Coolify deployment
- **ESBuild 0.25.10** for server bundling
- **TypeScript 5.9.3** for type safety
- **Node.js 20.19.0 or 22.12.0+** for runtime compatibility

## 📁 Project Structure

```
ntek-app-website/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utility functions
│   └── public/             # Static assets
├── server/                 # Express backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── resend.ts          # Email configuration
│   ├── vite.ts            # Vite integration
│   ├── storage.ts         # Database/storage layer
│   └── middleware/        # Security and rate limiting middleware
│       ├── rateLimit.ts   # Rate limiting configuration
│       └── security.ts    # Security headers
├── shared/                 # Shared types and schemas
│   └── schema.ts          # Zod validation schemas
├── attached_assets/        # Images and static assets
├── nixpacks.toml          # Coolify deployment config
└── package.json           # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20.19.0 or 22.12.0+ (recommended for React 19 compatibility)
- npm (use only-allow@1.2.1 enforced)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/neronlux/ntek-app-website.git
   cd ntek-app-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file (optional for development)
   RESEND_API_KEY=your_resend_api_key
   RESEND_FROM_EMAIL=your_from_email
   RESEND_TO_EMAIL=your_to_email
   DATABASE_URL=your_database_url  # Required for Drizzle ORM
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5000`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema (if using Drizzle)

## 🌐 Deployment

### Coolify Deployment

This project is configured for easy deployment on Coolify using Nixpacks.

#### Prerequisites
- Coolify instance running
- Git repository accessible by Coolify
- Resend API key

#### Deployment Steps

1. **Create New Resource** in Coolify:
   - Go to Project → Environment → Resources → New
   - Select "Public Repository" or connect your Git provider

2. **Configure Build Pack**:
   - Build Pack: **Nixpacks** (auto-detected)
   - Base Directory: `/` (root)
   - Port: `5000`

3. **Set Environment Variables**:
   ```
   RESEND_API_KEY=your_resend_api_key
   RESEND_FROM_EMAIL=your_from_email@domain.com
   RESEND_TO_EMAIL=your_to_email@domain.com
   NODE_ENV=production
   ```

4. **Deploy**:
   - Click "Deploy" button
   - Monitor build logs for any issues

#### Build Process

Nixpacks will automatically:
1. Detect Node.js project from `package.json`
2. Clean existing dependencies: `rm -rf package-lock.json node_modules`
3. Install dependencies with `npm install --no-audit --legacy-peer-deps` (for React 19 compatibility)
4. Rebuild native modules: `npm rebuild`
5. Run `npm run build` which:
   - Builds the frontend with Vite
   - Bundles the backend with esbuild
6. Start the app with `npm start`

#### React 19 Compatibility

This project uses React 19.2.3 with the following compatibility measures:
- Updated `react-day-picker` to version 9.11.1 for React 19 support
- Added `--legacy-peer-deps` flag to handle peer dependency conflicts
- All major dependencies updated to React 19 compatible versions
- Enforces npm usage via `only-allow@1.2.1` in preinstall hook

## 📚 Documentation

The repository is fully documented with JSDoc comments for all components, hooks, and utility functions.

- **UI Components**: Located in [`client/src/components/ui/`](client/src/components/ui/), these are accessible, reusable components built on Radix UI.
- **Custom Components**: Located in [`client/src/components/`](client/src/components/), these are specific to the website sections (Hero, Features, etc.).
- **Server Logic**: Located in [`server/`](server/), handles API routes and email integration.
- **Middleware**: Located in [`server/middleware/`](server/middleware/), provides security headers and rate limiting.
- **Shared Schemas**: Located in [`shared/schema.ts`](shared/schema.ts), contains Zod validation schemas.

For detailed information on a specific function or component, refer to the inline documentation within the source files.

## 📧 Contact Form Configuration

The contact form uses Resend for email delivery. To set up:

1. **Get Resend API Key**:
   - Sign up at [resend.com](https://resend.com)
   - Create an API key in your dashboard

2. **Configure Environment Variables**:
   - `RESEND_API_KEY`: Your Resend API key
   - `RESEND_FROM_EMAIL`: Email address to send from (must be verified)
   - `RESEND_TO_EMAIL`: Email address to receive submissions
   - `DATABASE_URL`: PostgreSQL connection string (for Drizzle ORM)

3. **Verify Email Domain** (optional):
   - Add and verify your domain in Resend for better deliverability

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for custom design tokens
- Update components in `client/src/components/`
- Add new pages in `client/src/pages/`

### Content
- Update hero section in `client/src/components/Hero.tsx`
- Modify technology stack in `client/src/components/TechnologyStack.tsx`
- Customize features in `client/src/components/Features.tsx`

### API Endpoints
- Add new routes in [`server/routes.ts`](server/routes.ts)
- Update validation schemas in [`shared/schema.ts`](shared/schema.ts)
- Configure middleware in [`server/middleware/`](server/middleware/)

## 🔧 Development

### Code Style
- TypeScript 5.9.3 for type safety
- ESLint for code quality
- Prettier for code formatting

### Component Structure
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow accessibility best practices with Radix UI

### State Management
- @tanstack/react-query for server state
- Local state with useState/useReducer
- Form state with React Hook Form

### Security Features
- Security headers middleware (CSP, HSTS, X-Frame-Options, etc.)
- Rate limiting on API endpoints
- XSS protection via HTML escaping
- X-Powered-By header disabled
- Trust proxy configuration for accurate IP detection

## 📦 Dependencies

### Production Dependencies
- **React 19.2.3** - UI framework
- **Express 5.2.1** - Backend framework
- **Resend 6.6.0** - Email service
- **Radix UI** - Accessible components
- **Tailwind CSS** - Styling
- **Framer Motion 12.24.11** - Animations
- **@tanstack/react-query 5.90.6** - Server state management
- **Drizzle ORM** - Database ORM
- **Zod 4.1.13** - Schema validation
- **Passport** - Authentication
- **ws** - WebSocket support

### Development Dependencies
- **Vite 7.1.11** - Build tool
- **TypeScript 5.9.3** - Type safety
- **ESBuild 0.25.10** - Fast bundling
- **@tailwindcss/vite 4.1.18** - Tailwind integration
- **tsx** - TypeScript execution
- **Drizzle Kit** - Database migrations

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js version is 20.19.0 or 22.12.0+ for React 19 compatibility
- Clear `node_modules` and reinstall if needed: `rm -rf node_modules package-lock.json && npm install --legacy-peer-deps`
- Check TypeScript errors with `npm run check`
- The project enforces npm usage via `only-allow` - do not use yarn or pnpm
- Run `npm rebuild` after installing if native modules fail

### Deployment Issues
- Verify environment variables are set correctly (RESEND_API_KEY, RESEND_FROM_EMAIL, RESEND_TO_EMAIL, DATABASE_URL)
- Check build logs in Coolify dashboard
- Ensure port 5000 is configured in Coolify
- Verify trust proxy is set correctly if behind a reverse proxy

### Email Issues
- Verify Resend API key is correct
- Check email addresses are valid and verified
- Review Resend dashboard for delivery status
- Ensure rate limiting is not blocking requests

### Database Issues
- Verify DATABASE_URL is correctly formatted
- Run `npm run db:push` to sync schema changes
- Check Drizzle configuration in [`drizzle.config.ts`](drizzle.config.ts)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, create an issue in the GitHub repository.

## 🔗 Links

- [Live Demo](https://ntek.app)
- [Deployment Guide](DEPLOYMENT.md)
- [Design Guidelines](design_guidelines.md)

---

Built with ❤️ using modern web technologies
