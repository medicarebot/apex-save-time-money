import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect your business",
    description: "Link your website, calendar, and communication channels. Takes about 10 minutes.",
  },
  {
    number: "02",
    title: "Train AI in minutes",
    description: "No technical skills needed. Just answer a few questions about your services.",
  },
  {
    number: "03",
    title: "See savings immediately",
    description: "Your dashboard shows exactly how much time and money you save every week.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent pointer-events-none" />
      
      <div className="section-container relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Up and running in an afternoon
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex items-start gap-8 md:gap-12 ${
                index !== steps.length - 1 ? "mb-16 pb-16 border-b border-border" : ""
              }`}
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="text-5xl md:text-6xl font-bold text-muted-foreground/20">
                  {step.number}
                </span>
              </div>
              
              {/* Content */}
              <div className="pt-2">
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Button size="lg" asChild>
            <Link to="/pricing">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
