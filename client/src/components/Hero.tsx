import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import heroImage from "@assets/generated_images/Data_center_hero_background_bde5ac41.png";

export default function Hero() {
  const handleLearnMore = () => {
    console.log("Learn more clicked");
    const featuresSection = document.getElementById("features");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground" data-testid="text-hero-badge">Powered by Coolify, Hetzner & Cloudflare</span>
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6" data-testid="text-hero-title">
          Hosting Sites
          <br />
          <span className="text-primary">Faster, Safer & Cheaper</span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12" data-testid="text-hero-description">
          Deploy your projects with lightning-fast Coolify automation on Hetzner's 
          premium infrastructure, protected by Cloudflare's global network. Superior performance at a fraction of the cost.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg" 
            variant="outline" 
            onClick={handleLearnMore}
            className="text-base bg-background/50 backdrop-blur-sm"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
