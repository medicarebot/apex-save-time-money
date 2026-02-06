import { Check, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const competitors = [
  {
    name: "Basic Chatbots",
    limitations: [
      "Scripted responses only",
      "No memory between sessions", 
      "Can't handle complex questions",
      "No human handover",
    ],
  },
  {
    name: "CRM Tools",
    limitations: [
      "You still do the work manually",
      "No AI-powered responses",
      "Doesn't reduce workload",
      "Expensive for what you get",
    ],
  },
  {
    name: "Booking Software",
    limitations: [
      "Just scheduling—nothing else",
      "No customer communication",
      "No follow-up automation",
      "Doesn't grow with you",
    ],
  },
];

const apexBenefits = [
  "Full AI conversations across all channels",
  "Persistent memory—knows every customer's history",
  "Seamlessly escalates to your team when needed",
  "One platform: chat, booking, follow-ups, growth",
  "Central intelligence coordinates everything",
  "Scales from solo business to enterprise",
];

export function DifferentiationSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why APEX?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Not another chatbot.
            <br />
            <span className="text-muted-foreground">A complete operating system.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Most tools solve one problem. APEX handles the entire customer journey—from first message to repeat business.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {/* Competitors */}
          {competitors.map((comp) => (
            <div 
              key={comp.name}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <h3 className="font-semibold mb-4 text-muted-foreground">{comp.name}</h3>
              <ul className="space-y-3">
                {comp.limitations.map((limitation) => (
                  <li key={limitation} className="flex items-start gap-2 text-sm">
                    <X className="h-4 w-4 text-destructive/60 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* APEX */}
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6">
            <h3 className="font-semibold mb-4 text-primary">APEX RoboTech</h3>
            <ul className="space-y-3">
              {apexBenefits.slice(0, 4).map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional benefits */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6 text-center">
            <p className="text-sm text-muted-foreground mb-4">Plus what others can't offer:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {apexBenefits.slice(4).map((benefit) => (
                <span 
                  key={benefit}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-sm"
                >
                  <Check className="h-3 w-3 text-primary" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link 
            to="/pricing" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            See how APEX compares
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
