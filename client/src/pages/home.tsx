import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import TechnologyStack from "@/components/TechnologyStack";
import NetdataSection from "@/components/NetdataSection";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/**
 * Home Page Component
 *
 * The main landing page of the application.
 * Composes various sections to present the product features, benefits, technology stack, and call to action.
 *
 * Sections included:
 * - Hero: Main introduction and tagline.
 * - StatsBar: Key metrics (uptime, cost savings, etc.).
 * - Features: Core features overview.
 * - TechnologyStack: Technologies used (Coolify, Hetzner, Cloudflare).
 * - NetdataSection: Monitoring capabilities.
 * - Benefits: Additional benefits for developers and businesses.
 * - CTASection: Contact form.
 * - Footer: Site footer.
 *
 * @returns {JSX.Element} The rendered Home page.
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <StatsBar />
      <Features />
      <TechnologyStack />
      <NetdataSection />
      <Benefits />
      <CTASection />
      <Footer />
    </div>
  );
}
