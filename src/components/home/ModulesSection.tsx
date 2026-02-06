import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, ClipboardCheck, Rocket } from "lucide-react";

const modules = [
  {
    icon: MessageSquare,
    title: "Customer Chat & Sales",
    description: "AI responds to inquiries across all channels in seconds. Qualifies leads, answers questions, and hands off to humans when needed.",
    href: "/product/chat",
    highlight: "Most popular",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "24/7 self-service booking. Smart availability, automatic reminders, and no-show reduction built in.",
    href: "/product/scheduling",
  },
  {
    icon: ClipboardCheck,
    title: "Operations & Tasks",
    description: "Automate internal workflows, task assignments, and team coordination. Eliminate spreadsheets and sticky notes.",
    href: "/product/operations",
  },
  {
    icon: Rocket,
    title: "Growth Pack",
    description: "Turn satisfied customers into reviews, referrals, and repeat business. Build your reputation on autopilot.",
    href: "/product/growth",
  },
];

export function ModulesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Platform
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            One platform. Every tool you need.
          </h2>
          <p className="text-lg text-muted-foreground">
            Start with one module. Add more as you grow. Everything works together seamlessly.
          </p>
        </div>

        {/* Modules grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {modules.map((module) => (
            <Link
              key={module.title}
              to={module.href}
              className="group relative bg-card border border-border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5 hover:border-primary/30"
            >
              {/* Highlight badge */}
              {module.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="inline-flex px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {module.highlight}
                  </span>
                </div>
              )}

              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <module.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {module.description}
                  </p>
                  <span className="inline-flex items-center text-primary font-medium text-sm">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link to="/pricing">
              View All Features & Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
