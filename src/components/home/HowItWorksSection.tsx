import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Settings, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Talk to APEX AI",
    description: "Tell us about your business. Our AI helps you choose the right channels and setup.",
    highlight: "Takes 5 minutes",
  },
  {
    number: "02",
    icon: Settings,
    title: "Configure your agents",
    description: "Customize responses, connect your channels, and set your business rules.",
    highlight: "Assisted setup available",
  },
  {
    number: "03",
    icon: Users,
    title: "Train your team",
    description: "Show your team how handoffs work and when to step in. We make it simple.",
    highlight: "Human oversight built-in",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "Go live",
    description: "Your AI agents start handling conversations. Monitor, adjust, and scale as needed.",
    highlight: "Live in 15 minutes",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 enterprise-section relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Getting Started
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
            From first message to live AI
            <br />
            <span className="text-white/60">in 15 minutes.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-white/10 -translate-x-1/2 z-0" />
              )}
              
              <div className="relative z-10">
                {/* Number */}
                <div className="text-6xl font-bold text-white/10 mb-4">{step.number}</div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-lg mb-2 text-white">{step.title}</h3>
                <p className="text-sm text-white/50 mb-3">{step.description}</p>
                
                {/* Highlight */}
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                  <CheckCircle className="h-3 w-3" />
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" asChild className="group">
            <Link to="/pricing">
              Start Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <p className="text-sm text-white/50 mt-4">
            No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
