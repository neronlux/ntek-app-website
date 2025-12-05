import { Card } from "@/components/ui/card";
import { Activity, BarChart3, Eye, Zap } from "lucide-react";

/**
 * List of Netdata features displayed in the section.
 * Each feature includes an icon, title, description, and test ID.
 */
const netdataFeatures = [
  {
    icon: Activity,
    title: "Real-Time Metrics",
    description: "Monitor CPU, memory, disk I/O, and network usage with per-second granularity.",
    testId: "netdata-realtime"
  },
  {
    icon: BarChart3,
    title: "Beautiful Dashboards",
    description: "Interactive charts and graphs that visualize your infrastructure performance instantly.",
    testId: "netdata-dashboards"
  },
  {
    icon: Eye,
    title: "Complete Visibility",
    description: "Track every aspect of your applications, databases, and web servers in one place.",
    testId: "netdata-visibility"
  },
  {
    icon: Zap,
    title: "Zero Configuration",
    description: "Auto-detection of running services with thousands of metrics out of the box.",
    testId: "netdata-zero-config"
  },
];

/**
 * Netdata Section Component
 *
 * Highlights the integration with Netdata for monitoring.
 * Displays a grid of features provided by Netdata and a descriptive highlight block.
 *
 * @returns {JSX.Element} The rendered Netdata section.
 */
export default function NetdataSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4" data-testid="text-netdata-title">
            Powered by Netdata Monitoring
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-netdata-description">
            Every ntek.app deployment includes Netdata for comprehensive real-time infrastructure monitoring
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {netdataFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="p-6 text-center hover-elevate"
                data-testid={`card-${feature.testId}`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-accent/20 mb-4">
                  <Icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-base font-bold text-card-foreground mb-2" data-testid={`text-${feature.testId}-title`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-${feature.testId}-description`}>
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-background/50 rounded-md p-8 border border-card-border">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-netdata-highlight-title">
              Industry-Leading Observability
            </h3>
            <p className="text-muted-foreground mb-4" data-testid="text-netdata-highlight-description">
              Netdata collects thousands of metrics per server with minimal overhead. Get instant insights 
              into application performance, resource utilization, and system health without complex setup 
              or expensive monitoring tools.
            </p>
            <p className="text-sm text-muted-foreground" data-testid="text-netdata-highlight-note">
              All monitoring data is collected and visualized in real-time, helping you identify and 
              resolve issues before they impact your users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
