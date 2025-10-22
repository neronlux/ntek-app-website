import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-cta-title">
          Ready to Deploy Faster?
        </h2>
        <p className="text-xl text-muted-foreground mb-8" data-testid="text-cta-description">
          Join hundreds of developers hosting their N-Tech projects on ntek.app. 
          Experience the speed and savings today.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => window.location.href = "mailto:info@ntek.app"}
            className="text-base"
            data-testid="button-cta-contact"
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
}
