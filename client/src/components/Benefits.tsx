import { Card } from "@/components/ui/card";
import { Activity, Code, Database, GitBranch, Globe, Lock } from "lucide-react";

/**
 * List of benefits displayed in the section.
 * Each benefit includes an icon, title, description, and test ID.
 */
const benefits = [
  {
    icon: Code,
    title: "Developer Friendly",
    description: "Support for all major frameworks and languages. Deploy Node.js, Python, PHP, Ruby, Go, and more with zero configuration.",
    testId: "benefit-developer"
  },
  {
    icon: GitBranch,
    title: "Git Integration",
    description: "Connect your GitHub, GitLab, or Bitbucket repositories for automatic deployments on every push.",
    testId: "benefit-git"
  },
  {
    icon: Database,
    title: "Database Support",
    description: "Managed PostgreSQL, MySQL, MongoDB, and Redis instances with automatic backups and scaling.",
    testId: "benefit-database"
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SSL/TLS encryption, automatic security updates, and isolated environments for your applications.",
    testId: "benefit-security"
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Track performance metrics, resource usage, and application health with built-in monitoring dashboards.",
    testId: "benefit-monitoring"
  },
  {
    icon: Globe,
    title: "Custom Domains",
    description: "Use your own domain names with automatic SSL certificates and DNS management included.",
    testId: "benefit-domains"
  },
];

/**
 * Benefits Section Component
 *
 * Displays a grid of cards highlighting the key features and benefits of the platform.
 * Used on the landing page to showcase capabilities like Git integration, database support, etc.
 *
 * @returns {JSX.Element} The rendered Benefits section.
 */
export default function Benefits() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-benefits-title">
            Everything You Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-benefits-description">
            Complete hosting solution with all the tools and features for modern web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={benefit.title} 
                className="p-6 hover-elevate"
                data-testid={`card-${benefit.testId}`}
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-2" data-testid={`text-${benefit.testId}-title`}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-${benefit.testId}-description`}>
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
