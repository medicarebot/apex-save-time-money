import { Check, X, ArrowRight, Sparkles } from "lucide-react";
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
    <section className="py-24 lg:py-32 enterprise-section relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why APEX?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
            Beyond chat.
            <br />
            <span className="text-white/60">Built for operations.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Most tools solve one problem. APEX handles the entire customer journey—from first message to repeat business.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {/* Competitors */}
          {competitors.map((comp) => (
            <div 
              key={comp.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="font-semibold mb-4 text-white/60">{comp.name}</h3>
              <ul className="space-y-3">
                {comp.limitations.map((limitation) => (
                  <li key={limitation} className="flex items-start gap-2 text-sm">
                    <X className="h-4 w-4 text-destructive/70 mt-0.5 flex-shrink-0" />
                    <span className="text-white/50">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* APEX */}
          <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 backdrop-blur-sm">
            <h3 className="font-semibold mb-4 text-primary">APEX RoboTech</h3>
            <ul className="space-y-3">
              {apexBenefits.slice(0, 4).map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional benefits - More emphasized */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-8 text-center backdrop-blur-sm">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-white">What others can't offer</span>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {apexBenefits.slice(4).map((benefit) => (
                <div 
                  key={benefit}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-white font-medium text-left">{benefit}</span>
                </div>
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
