import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, ClipboardCheck, Rocket, Users } from "lucide-react";

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
  tagline: "Turn happy customers into your growth engine",
  description: "Grow through reviews, referrals, and affiliates. Build your reputation automatically and let satisfied customers bring in new business.",
  href: "/product/growth",
};

const enterpriseModule = {
  icon: Users,
  title: "Digital Board",
  tagline: "For enterprise leadership",
  description: "AI advisors that help leadership teams see clearly, decide faster, and align the business.",
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

        {/* Core Modules Header */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Core Modules</h3>
        </div>

        {/* Standard Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
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

        {/* Growth Section */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Growth</h3>
          </div>
          <Link
            to={growthModule.href}
            className="group block bg-card border border-border rounded-2xl p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center">
                  <growthModule.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-2xl mb-2 group-hover:text-primary transition-colors">
                  {growthModule.title}
                </h3>
                <p className="text-primary font-medium text-sm mb-2">
                  {growthModule.tagline}
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {growthModule.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button variant="outline" className="group-hover:border-primary group-hover:text-primary">
                  View Growth Pack <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Link>
        </div>

        {/* Enterprise Section */}
        <div>
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Enterprise</h3>
          </div>
          <Link
            to={enterpriseModule.href}
            className="group enterprise-section block rounded-2xl p-8 md:p-12 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  <enterpriseModule.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-2xl text-white mb-2 group-hover:text-primary transition-colors">
                  {enterpriseModule.title}
                </h3>
                <p className="text-white/50 text-sm mb-2">
                  {enterpriseModule.tagline}
                </p>
                <p className="text-lg text-white/70 max-w-2xl">
                  {enterpriseModule.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button variant="heroOutline" className="border-white/20 text-white hover:bg-white/10 hover:border-white/30">
                  Request Executive Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
