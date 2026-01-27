import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plug, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect your business",
    description: "Link your website, calendar, and communication channels. Takes 5 minutes.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Train AI in minutes",
    description: "No technical skills needed. Just describe your services and preferences.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "See time & money saved",
    description: "Your dashboard shows exactly how much you're saving compared to manual work.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes, not months. No technical skills required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {/* Connector line (hidden on mobile, visible on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              {/* Step content */}
              <div className="relative">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-accent rounded-2xl mb-6 relative z-10">
                  <step.icon className="h-10 w-10 text-primary" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </span>
                </div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/how-it-works">See detailed walkthrough</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
