# Design Guidelines for ntek.app Promotional Website

## Design Approach
**Reference-Based Strategy**: Drawing inspiration from modern hosting platforms (Vercel, Railway, Render) with a tech-forward aesthetic that balances professionalism with approachability. Emphasis on speed, efficiency, and modern developer experience.

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
**Hero Section**: Full-width with background image showing server infrastructure/data center aesthetics, overlaid gradient (from primary/20% to transparent), large headline, supporting text, dual CTA buttons (primary solid, secondary outline with blur backdrop)

**Feature Cards**: 3-column grid with gradient borders, icons from Heroicons, title, description, hover lift effect

**Stats/Metrics Bar**: 4-column horizontal showcase displaying key numbers (uptime %, cost savings, deployment speed, sites hosted)

**Technology Stack**: 2-column asymmetric layout - left side with Coolify + Hetzner logos/descriptions, right side with benefits list

**Testimonial/Trust Section**: Single column centered quotes with subtle borders

**CTA Section**: Full-width with gradient background, centered content, primary action button

**Footer**: 3-column layout (About, Quick Links, Contact) with subtle top border

### Images
**Hero Image**: Required - Modern server room, cloud infrastructure visualization, or abstract tech pattern. Should convey speed, reliability, and modern infrastructure. Full-width background with dark overlay (40% opacity) for text legibility.

**Technology Logos**: Coolify and Hetzner official logos displayed prominently in technology stack section

**Decorative Elements**: Abstract geometric patterns or grid overlays as subtle background accents in feature sections

### Animations
**Minimal and Purpose-Driven**:
- Smooth scroll behavior
- Subtle hover lift on cards (translateY -2px)
- Fade-in on scroll for sections (use Intersection Observer)
- No distracting parallax or continuous animations

## Page Structure (6-7 Sections)

1. **Hero**: Full viewport (90vh), background image, headline "Host N-Tech Sites Faster & Cheaper", subheadline about Coolify + Hetzner, dual CTAs
2. **Stats Bar**: Horizontal metrics showcase immediately below hero
3. **Features Grid**: 3-column highlighting speed, cost-effectiveness, and ease of deployment
4. **Technology Stack**: Asymmetric 2-column showcasing Coolify automation + Hetzner infrastructure
5. **Benefits Deep Dive**: 2-column alternating layout with detailed explanations and visual icons
6. **Final CTA**: Gradient background section with compelling invitation to try ntek.app
7. **Footer**: Comprehensive 3-column with social links, documentation, support contact

## Key Design Principles
- **Tech-Forward Minimalism**: Clean layouts with purposeful use of color
- **Performance Emphasis**: Visual hierarchy that reinforces speed messaging
- **Developer-Focused**: Technical credibility through typography and color choices
- **Trust Building**: Professional aesthetics with clear information architecture
- **Conversion-Optimized**: Strategic CTA placement without overwhelming the user