import { Check, X } from "lucide-react";

const comparisons = [
  {
    category: "Simple Chatbots",
    limitations: [
      "Script-based, breaks on edge cases",
      "No booking or CRM integration",
      "No human handover options",
    ],
    apex: "Context-aware AI that handles routine queries and seamlessly escalates to your team when needed",
  },
  {
    category: "CRM Tools",
    limitations: [
      "Manual data entry",
      "Passive—waits for you to act",
      "Siloed from customer communication",
    ],
    apex: "Auto-captures leads from every channel, keeps your team informed, and syncs with your operation",
  },
  {
    category: "Booking Software",
    limitations: [
      "Just calendars with forms",
      "No conversation handling",
      "No team coordination features",
    ],
    apex: "Smart scheduling with AI pre-qualification, automatic reminders, and seamless handoff to your team",
  },
];

export function DifferentiationSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/30">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why APEX
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Not another chatbot.
            <br />
            Not another CRM.
          </h2>
          <p className="text-lg text-muted-foreground">
            APEX replaces 3-4 tools with one unified platform that actually works together.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {comparisons.map((item) => (
            <div
              key={item.category}
              className="bg-card border border-border rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-border">
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  vs {item.category}
                </p>
              </div>

              {/* Limitations */}
              <div className="p-6 border-b border-border bg-muted/30">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Common limitations
                </p>
                <ul className="space-y-3">
                  {item.limitations.map((limitation) => (
                    <li key={limitation} className="flex items-start gap-3">
                      <X className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{limitation}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* APEX solution */}
              <div className="p-6">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">
                  With APEX
                </p>
                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground font-medium">{item.apex}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
