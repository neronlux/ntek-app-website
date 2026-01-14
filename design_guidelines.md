# Design Guidelines for ntek.app Promotional Website

## Design Approach
**Reference-Based Strategy**: Drawing inspiration from modern hosting platforms (Vercel, Railway, Render) with a tech-forward aesthetic that balances professionalism with approachability. Emphasis on speed, efficiency, and modern developer experience.

This document provides comprehensive design guidelines for the ntek.app website, ensuring consistency across all components and sections.

## Core Design Elements

### Color Palette
**Dark Mode Primary** (main theme):
- Background: 222 14% 8%
- Surface: 222 14% 12%
- Primary Brand: 210 100% 60% (vibrant blue - trust and technology)
- Accent: 165 80% 55% (teal - innovation and speed)
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 70%

**Light Mode** (optional toggle):
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 210 90% 50%
- Text: 222 14% 12%

### Typography
- **Headings**: Inter (700-800 weight) - clean, modern, tech-appropriate
- **Body**: Inter (400-500 weight)
- **Code/Tech**: JetBrains Mono for technical references
- **Scale**: Hero (text-5xl to text-7xl), H2 (text-4xl), H3 (text-2xl), Body (text-base to text-lg)

### Layout System
- **Container**: max-w-7xl for main content, max-w-6xl for text-heavy sections
- **Spacing Units**: Consistently use p-2, p-4, p-8, p-12, p-20, p-32 (vertical rhythm)
- **Grid**: 3-column on desktop (lg:grid-cols-3), 2-column tablet (md:grid-cols-2), single mobile

### Component Library

#### Hero Section
- **Layout**: Full-width with background image showing server infrastructure/data center aesthetics
- **Background**: Gradient overlay from `background/60` via `background/80` to `background`
- **Height**: `min-h-[90vh]` with centered content
- **Badge**: "Powered by Coolify, Hetzner & Cloudflare" with Zap icon
- **Headline**: "Hosting Sites Faster, Safer & Cheaper" (text-5xl to text-7xl, bold)
- **Description**: Paragraph about Coolify automation on Hetzner infrastructure protected by Cloudflare
- **CTA**: Single "Learn More" button with outline variant and backdrop blur

#### Stats Bar
- **Layout**: Horizontal showcase displaying key metrics
- **Components**: [`StatsBar.tsx`](client/src/components/StatsBar.tsx)

#### Feature Cards
- **Layout**: 3-column grid (responsive: 1-column mobile, 2-column tablet, 3-column desktop)
- **Card Component**: Uses [`Card`](client/src/components/ui/card.tsx) with `hover-elevate` class
- **Icons**: Lucide React icons (Rocket, Shield, Wrench)
- **Content**: Title and description per card
- **Background**: Primary color icon containers with `bg-primary/10`

#### Technology Stack
- **Layout**: 3-column grid (responsive: 1-column mobile, 2-column tablet, 3-column desktop)
- **Technologies**: Coolify, Hetzner, Cloudflare
- **Card Component**: Uses [`Card`](client/src/components/ui/card.tsx) with logos and benefits
- **Icons**: CheckCircle2 from Lucide React for benefit items
- **Badges**: Secondary variant badges for technology labels
- **Benefits**: List of 4 benefits per technology

#### Netdata Section
- **Layout**: Showcasing Netdata monitoring capabilities
- **Components**: [`NetdataSection.tsx`](client/src/components/NetdataSection.tsx)

#### Benefits Section
- **Layout**: Highlighting key benefits of the platform
- **Components**: [`Benefits.tsx`](client/src/components/Benefits.tsx)

#### CTA Section
- **Layout**: Full-width with centered content
- **Components**: [`CTASection.tsx`](client/src/components/CTASection.tsx)

#### Footer
- **Layout**: Multi-column layout with links and information
- **Components**: [`Footer.tsx`](client/src/components/Footer.tsx)

### Images

#### Hero Image
- **Location**: [`attached_assets/generated_images/Data_center_hero_background_bde5ac41.png`](attached_assets/generated_images/Data_center_hero_background_bde5ac41.png)
- **Style**: Modern server room, cloud infrastructure visualization
- **Purpose**: Convey speed, reliability, and modern infrastructure
- **Overlay**: Gradient from `background/60` via `background/80` to `background` for text legibility

#### Technology Logos
- **Coolify**: [`attached_assets/coolify_logo_official.jpg`](attached_assets/coolify_logo_official.jpg)
- **Hetzner**: [`attached_assets/hetzner-logo-png_seeklogo-502608_1761157062650.png`](attached_assets/hetzner-logo-png_seeklogo-502608_1761157062650.png)
- **Cloudflare**: [`attached_assets/cloudflare-logo-png_seeklogo-294312_1761157100117.png`](attached_assets/cloudflare-logo-png_seeklogo-294312_1761157100117.png)
- **Stock Images**: Available in [`attached_assets/stock_images/`](attached_assets/stock_images/)

#### Decorative Elements
- Abstract geometric patterns or grid overlays as subtle background accents in feature sections

### Animations

**Minimal and Purpose-Driven**:
- Smooth scroll behavior for anchor links
- Subtle hover lift on cards (`hover-elevate` class)
- Fade-in on scroll for sections (can use Intersection Observer)
- No distracting parallax or continuous animations

#### Custom Animation Classes
- `hover-elevate`: Subtle lift effect on card hover

## Page Structure

The website consists of the following sections (in order):

1. **Hero** ([`Hero.tsx`](client/src/components/Hero.tsx))
   - Full viewport (90vh) with background image
   - Headline: "Hosting Sites Faster, Safer & Cheaper"
   - Badge: "Powered by Coolify, Hetzner & Cloudflare"
   - Subheadline about Coolify automation on Hetzner infrastructure protected by Cloudflare
   - Single "Learn More" CTA button

2. **Stats Bar** ([`StatsBar.tsx`](client/src/components/StatsBar.tsx))
   - Horizontal metrics showcase immediately below hero
   - Displays key performance metrics

3. **Features Grid** ([`Features.tsx`](client/src/components/Features.tsx))
   - Title: "Why Choose ntek.app?"
   - 3-column grid highlighting:
     - Lightning Fast Deployment
     - Premium Infrastructure
     - Cost Effective

4. **Technology Stack** ([`TechnologyStack.tsx`](client/src/components/TechnologyStack.tsx))
   - Title: "Built on the Best Technology"
   - 3-column grid showcasing:
     - Coolify (Deployment Platform)
     - Hetzner (Cloud Infrastructure)
     - Cloudflare (Security & CDN)
   - Each technology includes logo, description, and 4 benefits

5. **Benefits Section** ([`Benefits.tsx`](client/src/components/Benefits.tsx))
   - Detailed benefits of the platform

6. **Netdata Section** ([`NetdataSection.tsx`](client/src/components/NetdataSection.tsx))
   - Showcasing real-time monitoring capabilities

7. **CTA Section** ([`CTASection.tsx`](client/src/components/CTASection.tsx))
   - Final call-to-action with compelling invitation

8. **Footer** ([`Footer.tsx`](client/src/components/Footer.tsx))
   - Comprehensive footer with links and information

## Key Design Principles

- **Tech-Forward Minimalism**: Clean layouts with purposeful use of color
- **Performance Emphasis**: Visual hierarchy that reinforces speed messaging
- **Developer-Focused**: Technical credibility through typography and color choices
- **Trust Building**: Professional aesthetics with clear information architecture
- **Conversion-Optimized**: Strategic CTA placement without overwhelming the user
- **Accessibility**: Proper use of semantic HTML, ARIA labels, and keyboard navigation
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop

## Component References

All components are located in [`client/src/components/`](client/src/components/) and include:

- **UI Components**: Reusable components in [`client/src/components/ui/`](client/src/components/ui/) built on Radix UI
- **Page Components**: Section-specific components in [`client/src/components/`](client/src/components/)
- **Example Components**: Reference implementations in [`client/src/components/examples/`](client/src/components/examples/)

## Implementation Notes

### Tailwind CSS Configuration
- Design tokens are configured in [`tailwind.config.ts`](tailwind.config.ts)
- Custom colors and spacing are defined using HSL values
- Responsive breakpoints follow mobile-first approach

### Icon Library
- Uses Lucide React for consistent iconography
- Icons are imported from `lucide-react` package

### Testing
- All components include `data-testid` attributes for testing
- Test IDs follow a consistent naming convention

## Related Documentation

- [`README.md`](README.md) - Project overview and setup instructions
- [`DEPLOYMENT.md`](DEPLOYMENT.md) - Coolify deployment guide
