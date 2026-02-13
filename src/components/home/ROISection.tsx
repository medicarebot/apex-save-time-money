import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, MessageSquare, Users } from "lucide-react";

const roiStats = [
  {
    icon: Clock,
    value: "Recover operational hours",
    label: "every week",
    description: "Free your team from repetitive coordination work.",
  },
  {
    icon: MessageSquare,
    value: "24/7 structured intake",
    label: "across all channels",
    description: "Every inquiry logged, tracked, and routed correctly.",
  },
  {
    icon: TrendingUp,
    value: "Higher conversion rates",
    label: "through faster responses",
    description: "Faster responses increase booking and consultation rates.",
  },
  {
    icon: Users,
    value: "Improved client experience",
    label: "at every step",
    description: "Consistent, professional communication at every step.",
  },
];

export function ROISection() {
  return (
    <section className="py-24 lg:py-32 enterprise-section relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Real Results
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
            Operational performance. Measurable results.
          </h2>
          <p className="text-lg text-white/60">
            What high-value service organizations experience when communication becomes structured and automated.
          </p>
        </div>

        {/* ROI stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {roiStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm font-medium text-primary mb-2">{stat.label}</p>
              <p className="text-sm text-white/50">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="heroOutline" asChild className="group border-white/20 text-white hover:bg-white/10">
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
