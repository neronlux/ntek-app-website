import { Github, Twitter, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "#github", label: "GitHub", testId: "link-github" },
  { icon: Twitter, href: "#twitter", label: "Twitter", testId: "link-twitter" },
  { icon: Mail, href: "mailto:info@ntek.app", label: "Email", testId: "link-email" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-card-foreground mb-4" data-testid="text-footer-brand">
              ntek.app
            </h3>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-tagline">
              Faster, cheaper hosting for N-Tech projects powered by Coolify and Hetzner.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                    data-testid={social.testId}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-end">
            <Button 
              variant="outline"
              onClick={() => window.open('https://luxford.xyz', '_blank')}
              data-testid="button-all-my-links"
            >
              All My Links
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-card-border pt-8">
          <p className="text-sm text-muted-foreground text-center" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} ntek.app. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
