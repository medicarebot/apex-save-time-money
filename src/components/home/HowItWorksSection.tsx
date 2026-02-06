import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect in 15 minutes",
    description: "Link your website, calendar, and communication channels. Our guided setup makes it effortless.",
    checks: ["No coding required", "Works with your existing tools"],
  },
  {
    number: "02",
    title: "Train your AI assistant",
    description: "Answer a few questions about your business. APEX learns your services, policies, and tone of voice.",
    checks: ["Custom to your business", "Human handover built-in"],
  },
  {
    number: "03",
    title: "Your team gets time back",
    description: "Watch your dashboard as APEX handles routine tasks—while your team stays in control of what matters.",
    checks: ["Full visibility & oversight", "Escalation to humans anytime"],
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Live in an afternoon.
            <br />
            <span className="text-muted-foreground">ROI in a week.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative flex gap-8 lg:gap-12 ${
                index !== steps.length - 1 ? "pb-12 mb-12 border-b border-border" : ""
              }`}
            >
              {/* Number */}
              <div className="flex-shrink-0 w-16 lg:w-20">
                <span className="text-4xl lg:text-5xl font-bold text-muted-foreground/20">
                  {step.number}
                </span>
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-1">
                <h3 className="text-xl lg:text-2xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4 max-w-lg">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {step.checks.map((check) => (
                    <div key={check} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{check}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" asChild className="group">
            <Link to="/pricing">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
