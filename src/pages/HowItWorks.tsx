import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plug, Sparkles, TrendingUp, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Plug,
    title: "Connect Your Business",
    description: "Link your website, calendar, and communication channels. The setup takes about 5 minutes and doesn't require any technical skills.",
    details: [
      "Connect your Google or Outlook calendar",
      "Add your website chat widget with one line of code",
      "Link WhatsApp, Messenger, or email",
      "Import your service list and pricing",
    ],
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Train AI in Minutes",
    description: "Tell AI about your business in plain language. No coding, no complex setup — just describe what you do and how you want to respond.",
    details: [
      "Describe your services and policies",
      "Set your availability and booking rules",
      "Add common questions and answers",
      "Review and approve AI responses",
    ],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "See Time & Money Saved",
    description: "Your dashboard shows exactly how much time AI saved and what that means in money. Watch the ROI grow every day.",
    details: [
      "Track conversations handled by AI",
      "See appointments booked automatically",
      "Calculate cost savings vs manual work",
      "Monitor customer satisfaction",
    ],
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How APEX Works
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Get started in minutes, not months. No technical skills required.
            </p>
            <Button size="lg" asChild>
              <Link to="/pricing">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-border" />
                )}
                
                <div className="flex gap-8 mb-16">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center relative">
                      <step.icon className="h-8 w-8 text-primary" />
                      <span className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                    <p className="text-muted-foreground mb-6">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Result */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-background">The Result?</h2>
            <p className="text-xl text-background/80 mb-8">
              More time, more bookings, happier customers — and a dashboard that shows exactly how much money you're saving every month.
            </p>
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div>
                <p className="text-4xl font-bold text-primary">5 min</p>
                <p className="text-sm text-background/60">to set up</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">24/7</p>
                <p className="text-sm text-background/60">availability</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">Day 1</p>
                <p className="text-sm text-background/60">see results</p>
              </div>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/pricing">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
