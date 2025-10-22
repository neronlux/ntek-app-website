import { Card } from "@/components/ui/card";
import { Rocket, Shield, Wrench } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Lightning Fast Deployment",
    description: "Deploy in minutes with Coolify's automated workflows. No complex configurations, just push and deploy.",
    testId: "feature-deployment"
  },
  {
    icon: Shield,
    title: "Premium Infrastructure",
    description: "Hosted on Hetzner's enterprise-grade servers with guaranteed uptime and top-tier performance.",
    testId: "feature-infrastructure"
  },
  {
    icon: Wrench,
    title: "Cost Effective",
    description: "Save up to 60% compared to traditional hosting. Pay only for what you use with transparent pricing.",
    testId: "feature-cost"
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-features-title">
            Why Choose ntek.app?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-description">
            Experience the perfect combination of speed, reliability, and affordability
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="p-8 hover-elevate" 
                data-testid={`card-${feature.testId}`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-primary/10 mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3" data-testid={`text-${feature.testId}-title`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-${feature.testId}-description`}>
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
