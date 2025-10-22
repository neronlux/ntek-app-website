import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Features from "@/components/Features";
import TechnologyStack from "@/components/TechnologyStack";
import NetdataSection from "@/components/NetdataSection";
import Benefits from "@/components/Benefits";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
