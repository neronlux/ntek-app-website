import { Github, Twitter, Mail } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features", testId: "link-features" },
    { label: "Pricing", href: "#pricing", testId: "link-pricing" },
    { label: "Documentation", href: "#docs", testId: "link-docs" },
  ],
  company: [
    { label: "About", href: "#about", testId: "link-about" },
    { label: "Blog", href: "#blog", testId: "link-blog" },
    { label: "Contact", href: "mailto:info@ntek.app", testId: "link-contact" },
  ],
  support: [
    { label: "Help Center", href: "#help", testId: "link-help" },
    { label: "Status", href: "#status", testId: "link-status" },
    { label: "Community", href: "#community", testId: "link-community" },
  ],
};

const socialLinks = [
  { icon: Github, href: "#github", label: "GitHub", testId: "link-github" },
  { icon: Twitter, href: "#twitter", label: "Twitter", testId: "link-twitter" },
  { icon: Mail, href: "mailto:info@ntek.app", label: "Email", testId: "link-email" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
          
          <div>
            <h4 className="text-sm font-semibold text-card-foreground mb-4" data-testid="text-footer-product">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={link.testId}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-card-foreground mb-4" data-testid="text-footer-company">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={link.testId}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-card-foreground mb-4" data-testid="text-footer-support">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={link.testId}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
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
