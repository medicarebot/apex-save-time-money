import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, ClipboardCheck, Rocket, Users, Sparkles } from "lucide-react";

const standardModules = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered booking that works 24/7. Customers book themselves, you focus on delivery.",
    href: "/product/scheduling",
  },
  {
    icon: MessageSquare,
    title: "Customer Chat & Sales",
    description: "Instant responses across all channels. Human handover when needed.",
    href: "/product/chat",
  },
  {
    icon: ClipboardCheck,
    title: "Operations & Tasks",
    description: "Automate internal workflows. Assign tasks, track completion, eliminate spreadsheets.",
    href: "/product/operations",
  },
];

const growthModule = {
  icon: Rocket,
  title: "Growth Pack",
  tagline: "Grow without hiring",
  description: "Turn customers into affiliates. Automate review collection. Scale your marketing with zero headcount.",
  href: "/product/growth",
};

const enterpriseModule = {
  icon: Users,
  title: "Digital Board",
  tagline: "Enterprise / Invite-only",
  description: "AI C-level advisors that support leadership decisions. Company-wide visibility and strategic insights.",
  href: "/product/digital-board",
};

export function ModulesSection() {
  return (
    <section className="py-28 lg:py-36 bg-muted/30">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Modular Platform
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Start with one, add as you grow
          </h2>
          <p className="text-lg text-muted-foreground">
            Each module works standalone or together. No forced bundles.
          </p>
        </div>

        {/* Standard Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {standardModules.map((module) => (
            <Link
              key={module.title}
              to={module.href}
              className="group bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <module.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                {module.title}
              </h3>
              <p className="text-muted-foreground mb-6">{module.description}</p>
              <span className="inline-flex items-center text-primary font-medium text-sm">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        {/* Growth Module - Highlighted */}
        <div className="mb-12">
          <Link
            to={growthModule.href}
            className="group growth-card block bg-card rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-warning/10 flex items-center justify-center">
                  <growthModule.icon className="h-8 w-8 text-warning" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-2xl group-hover:text-primary transition-colors">
                    {growthModule.title}
                  </h3>
                  <span className="badge-growth">
                    <Sparkles className="h-3 w-3" />
                    {growthModule.tagline}
                  </span>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {growthModule.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button variant="outline" className="group-hover:border-primary group-hover:text-primary">
                  Explore <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Link>
        </div>

        {/* Enterprise Module - Premium Dark */}
        <div>
          <Link
            to={enterpriseModule.href}
            className="group premium-card block rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                  <enterpriseModule.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-2xl text-white group-hover:text-primary transition-colors">
                    {enterpriseModule.title}
                  </h3>
                  <span className="badge-enterprise">
                    {enterpriseModule.tagline}
                  </span>
                </div>
                <p className="text-lg text-white/60 max-w-2xl">
                  {enterpriseModule.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button variant="heroOutline" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30">
                  Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
