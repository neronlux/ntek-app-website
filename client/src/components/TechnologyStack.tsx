import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import coolifyLogo from "@assets/stock_images/coolify_logo_c5712296.jpg";
import hetznerLogo from "@assets/stock_images/hetzner_cloud_logo_c43d307e.jpg";

const coolifyBenefits = [
  "One-click deployments",
  "Automatic SSL certificates",
  "Built-in monitoring",
  "Docker-based workflow"
];

const hetznerBenefits = [
  "Enterprise SSD storage",
  "99.9% uptime guarantee",
  "Global CDN network",
  "DDoS protection"
];

export default function TechnologyStack() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4" data-testid="text-tech-title">
            Built on the Best Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-tech-description">
            Combining industry-leading tools for unmatched performance
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-8" data-testid="card-coolify">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={coolifyLogo} 
                alt="Coolify" 
                className="w-16 h-16 rounded-md object-cover"
                data-testid="img-coolify-logo"
              />
              <div>
                <h3 className="text-2xl font-bold text-card-foreground" data-testid="text-coolify-title">Coolify</h3>
                <Badge variant="secondary" data-testid="badge-coolify">Deployment Platform</Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-6" data-testid="text-coolify-description">
              Open-source self-hosting platform that simplifies deployments with powerful automation and intuitive management.
            </p>
            <ul className="space-y-3">
              {coolifyBenefits.map((benefit, index) => (
                <li key={benefit} className="flex items-center gap-3" data-testid={`item-coolify-benefit-${index}`}>
                  <CheckCircle2 className="w-5 h-5 text-accent-foreground flex-shrink-0" />
                  <span className="text-card-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="p-8" data-testid="card-hetzner">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={hetznerLogo} 
                alt="Hetzner" 
                className="w-16 h-16 rounded-md object-cover"
                data-testid="img-hetzner-logo"
              />
              <div>
                <h3 className="text-2xl font-bold text-card-foreground" data-testid="text-hetzner-title">Hetzner</h3>
                <Badge variant="secondary" data-testid="badge-hetzner">Cloud Infrastructure</Badge>
              </div>
            </div>
            <p className="text-muted-foreground mb-6" data-testid="text-hetzner-description">
              German engineering meets cloud computing with exceptional reliability, performance, and competitive pricing.
            </p>
            <ul className="space-y-3">
              {hetznerBenefits.map((benefit, index) => (
                <li key={benefit} className="flex items-center gap-3" data-testid={`item-hetzner-benefit-${index}`}>
                  <CheckCircle2 className="w-5 h-5 text-accent-foreground flex-shrink-0" />
                  <span className="text-card-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
