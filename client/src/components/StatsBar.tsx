import { Clock, DollarSign, TrendingUp } from "lucide-react";

/**
 * Statistics to be displayed in the StatsBar.
 * Each statistic includes an icon, label, value, and test ID.
 */
const stats = [
  { icon: TrendingUp, label: "Uptime", value: "99.9%", testId: "stat-uptime" },
  { icon: DollarSign, label: "Cost Savings", value: "60%+", testId: "stat-savings" },
  { icon: Clock, label: "Deploy Time", value: "<5min", testId: "stat-deploy" },
];

/**
 * StatsBar Component
 *
 * Displays key statistics about the service (Uptime, Cost Savings, Deploy Time) in a horizontal bar.
 * Designed to provide quick, impactful information to the user.
 *
 * @returns {JSX.Element} The rendered StatsBar section.
 */
export default function StatsBar() {
  return (
    <section className="py-12 bg-card border-y border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center" data-testid={stat.testId}>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/10 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1" data-testid={`text-${stat.testId}-value`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground" data-testid={`text-${stat.testId}-label`}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
