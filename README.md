[![zread](https://img.shields.io/badge/Ask_Zread-_.svg?style=for-the-badge&color=00b0aa&labelColor=000000&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuOTYxNTYgMS42MDAxSDIuMjQxNTZDMS44ODgxIDEuNjAwMSAxLjYwMTU2IDEuODg2NjQgMS42MDE1NiAyLjI0MDFWNC45NjAxQzEuNjAxNTYgNS4zMTM1NiAxLjg4ODEgNS42MDAxIDIuMjQxNTYgNS42MDAxSDQuOTYxNTZDNS4zMTUwMiA1LjYwMDEgNS42MDE1NiA1LjMxMzU2IDUuNjAxNTYgNC45NjAxVjIuMjQwMUM1LjYwMTU2IDEuODg2NjQgNS4zMTUwMiAxLjYwMDEgNC45NjE1NiAxLjYwMDFaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00Ljk2MTU2IDEwLjM5OTlIMi4yNDE1NkMxLjg4ODEgMTAuMzk5OSAxLjYwMTU2IDEwLjY4NjQgMS42MDE1NiAxMS4wMzk5VjEzLjc1OTlDMS42MDE1NiAxNC4xMTM0IDEuODg4MSAxNC4zOTk5IDIuMjQxNTYgMTQuMzk5OUg0Ljk2MTU2QzUuMzE1MDIgMTQuMzk5OSA1LjYwMTU2IDE0LjExMzQgNS42MDE1NiAxMy43NTk5VjExLjAzOTlDNS42MDE1NiAxMC42ODY0IDUuMzE1MDIgMTAuMzk5OSA0Ljk2MTU2IDEwLjM5OTlaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik0xMy43NTg0IDEuNjAwMUgxMS4wMzg0QzEwLjY4NSAxLjYwMDEgMTAuMzk4NCAxLjg4NjY0IDEwLjM5ODQgMi4yNDAxVjQuOTYwMUMxMC4zOTg0IDUuMzEzNTYgMTAuNjg1IDUuNjAwMSAxMS4wMzg0IDUuNjAwMUgxMy43NTg0QzE0LjExMTkgNS42MDAxIDE0LjM5ODQgNS4zMTM1NiAxNC4zOTg0IDQuOTYwMVYyLjI0MDFDMTQuMzk4NCAxLjg4NjY0IDE0LjExMTkgMS42MDAxIDEzLjc1ODQgMS42MDAxWiIgZmlsbD0iI2ZmZiIvPgo8cGF0aCBkPSJNNCAxMkwxMiA0TDQgMTJaIiBmaWxsPSIjZmZmIi8%2BCjxwYXRoIGQ9Ik00IDEyTDEyIDQiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K&logoColor=ffffff)](https://zread.ai/neronlux/ntek-app-website)
# NTEK App Website

A modern, responsive website built with React 19, TypeScript, and Express.js, featuring a contact form with email integration via Resend. Showcasing self-hosted infrastructure solutions with a focus on Docker containers, Coolify, Hetzner Cloud, Cloudflare, and Netdata.

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
- **React 19** with TypeScript
- **Vite 7.1.11** for build tooling
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Framer Motion 12** for animations
- **React Hook Form** with Zod validation
- **React Query** for server state management

### Backend
- **Express.js** with TypeScript
- **Resend** for email functionality
- **Zod** for request validation

### Development & Deployment
- **Nixpacks** for Coolify deployment
- **ESBuild** for server bundling
- **TypeScript** for type safety
- **Node.js 20.19.0** for runtime compatibility

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
│   └── vite.ts            # Vite integration
├── shared/                 # Shared types and schemas
├── attached_assets/        # Images and static assets
├── nixpacks.toml          # Coolify deployment config
└── package.json           # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 20.19.0 or higher (recommended for React 19 compatibility)
- npm or yarn

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
2. Install dependencies with `npm install --legacy-peer-deps` (for React 19 compatibility)
3. Run `npm run build` which:
   - Builds the frontend with Vite
   - Bundles the backend with esbuild
4. Start the app with `npm start`

#### React 19 Compatibility

This project uses React 19 with the following compatibility measures:
- Updated `react-day-picker` to version 9.11.1 for React 19 support
- Added `--legacy-peer-deps` flag to handle peer dependency conflicts
- All major dependencies updated to React 19 compatible versions

## 📚 Documentation

The repository is fully documented with JSDoc comments for all components, hooks, and utility functions.

- **UI Components**: Located in `client/src/components/ui/`, these are accessible, reusable components built on Radix UI.
- **Custom Components**: Located in `client/src/components/`, these are specific to the website sections (Hero, Features, etc.).
- **Server Logic**: Located in `server/`, handles API routes and email integration.

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
- Add new routes in `server/routes.ts`
- Update validation schemas in `shared/schema.ts`

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting

### Component Structure
- Use functional components with hooks
- Implement proper TypeScript interfaces
- Follow accessibility best practices with Radix UI

### State Management
- React Query for server state
- Local state with useState/useReducer
- Form state with React Hook Form

## 📦 Dependencies

### Production Dependencies
- **React 19** - UI framework
- **Express** - Backend framework
- **Resend** - Email service
- **Radix UI** - Accessible components
- **Tailwind CSS** - Styling
- **Framer Motion 12** - Animations
- **React Query** - Server state management

### Development Dependencies
- **Vite 7.1.11** - Build tool
- **TypeScript** - Type safety
- **ESBuild** - Fast bundling
- **@tailwindcss/vite** - Tailwind integration

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js version is 20.19.0 or higher for React 19 compatibility
- Clear `node_modules` and reinstall if needed
- Check TypeScript errors with `npm run check`
- For React 19 peer dependency warnings, use `npm install --legacy-peer-deps`

### Deployment Issues
- Verify environment variables are set correctly
- Check build logs in Coolify dashboard
- Ensure port 5000 is configured in Coolify

### Email Issues
- Verify Resend API key is correct
- Check email addresses are valid and verified
- Review Resend dashboard for delivery status

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

---

Built with ❤️ using modern web technologies
