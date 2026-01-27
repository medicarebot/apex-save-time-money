import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, ClipboardCheck, Rocket, Users } from "lucide-react";

const modules = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered appointment booking that understands real service durations and sends reminders automatically.",
    href: "/product/scheduling",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MessageSquare,
    title: "Customer Chat & Sales",
    description: "AI handles customer service and sales conversations across multiple channels with human handover when needed.",
    href: "/product/chat",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: ClipboardCheck,
    title: "Operations & Tasks",
    description: "Automate internal tasks, assign work to staff, and track completion without spreadsheets.",
    href: "/product/operations",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Rocket,
    title: "Growth Pack",
    description: "Affiliate management and Google review automation to bring more customers without hiring.",
    href: "/product/growth",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Users,
    title: "Digital Board",
    description: "AI C-level advisors that support leadership decisions. For enterprise teams ready to scale.",
    href: "/product/digital-board",
    badge: "Enterprise",
    color: "bg-purple-50 text-purple-600",
  },
];

export function ModulesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose the Modules You Need
          </h2>
          <p className="text-lg text-muted-foreground">
            Start with one, add more as you grow. Each module works standalone or together.
          </p>
        </div>

        {/* Modules grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <div
              key={module.title}
              className="bg-card border border-border rounded-2xl p-8 card-hover flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${module.color}`}>
                  <module.icon className="h-6 w-6" />
                </div>
                {module.badge && (
                  <span className="text-xs font-medium bg-foreground text-background px-2.5 py-1 rounded-full">
                    {module.badge}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-xl mb-3">{module.title}</h3>
              <p className="text-muted-foreground mb-6 flex-1">{module.description}</p>
              <Button variant="ghost" className="justify-start p-0 h-auto font-medium text-primary hover:bg-transparent" asChild>
                <Link to={module.href}>
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
