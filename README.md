# NTEK App Website

A modern, responsive website built with React, TypeScript, and Express.js, featuring a contact form with email integration via Resend.

## 🚀 Features

- **Modern UI**: Built with React 18, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Contact Form**: Integrated email sending via Resend API
- **Technology Stack Showcase**: Displays modern web technologies
- **Performance Optimized**: Built with Vite for fast development and production builds
- **Production Ready**: Configured for deployment on Coolify with Nixpacks

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite 7.1.11** for build tooling
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Framer Motion** for animations
- **React Hook Form** with Zod validation

### Backend
- **Express.js** with TypeScript
- **Resend** for email functionality
- **Zod** for request validation

### Development & Deployment
- **Nixpacks** for Coolify deployment
- **ESBuild** for server bundling
- **TypeScript** for type safety

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

- Node.js 20.x or higher
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
2. Install dependencies with `npm ci`
3. Run `npm run build` which:
   - Builds the frontend with Vite
   - Bundles the backend with esbuild
4. Start the app with `npm start`

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
- **React 18** - UI framework
- **Express** - Backend framework
- **Resend** - Email service
- **Radix UI** - Accessible components
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

### Development Dependencies
- **Vite 7.1.11** - Build tool
- **TypeScript** - Type safety
- **ESBuild** - Fast bundling
- **@tailwindcss/vite** - Tailwind integration

## 🐛 Troubleshooting

### Build Issues
- Ensure Node.js version is 20.x or higher
- Clear `node_modules` and reinstall if needed
- Check TypeScript errors with `npm run check`

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

For support, email your-email@domain.com or create an issue in the GitHub repository.

## 🔗 Links

- [Live Demo](https://ntek.app)

---

Built with ❤️ using modern web technologies
