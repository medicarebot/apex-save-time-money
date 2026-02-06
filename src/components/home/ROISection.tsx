import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, MessageSquare, Users } from "lucide-react";

const roiStats = [
  {
    icon: Clock,
    value: "47 hours",
    label: "recovered weekly",
    description: "Average time your team gets back for high-value work.",
  },
  {
    icon: MessageSquare,
    value: "1,247",
    label: "conversations/month",
    description: "Handled automatically—without adding to your workload.",
  },
  {
    icon: TrendingUp,
    value: "32%",
    label: "more bookings",
    description: "When customers can book 24/7, more of them do.",
  },
  {
    icon: Users,
    value: "98%",
    label: "satisfaction rate",
    description: "Teams love having capacity back for meaningful work.",
  },
];

export function ROISection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Real Results
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            The numbers speak for themselves
          </h2>
          <p className="text-lg text-muted-foreground">
            Across 2,400+ businesses using APEX every day.
          </p>
        </div>

        {/* ROI stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {roiStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm font-medium text-primary mb-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" asChild className="group">
            <Link to="/contact">
              See how APEX works for your industry
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
