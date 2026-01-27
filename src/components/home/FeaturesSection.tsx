import { PhoneOff, Calendar, Bell, TrendingUp, Coins } from "lucide-react";

const values = [
  {
    icon: PhoneOff,
    title: "Replace missed calls",
    description: "No more unanswered messages or lost leads. Every customer gets a response.",
  },
  {
    icon: Calendar,
    title: "Let customers book without staff",
    description: "Self-service booking that works 24/7. No phone tag, no waiting.",
  },
  {
    icon: Bell,
    title: "Stop manual follow-ups",
    description: "Automatic reminders and task tracking. Never forget a customer again.",
  },
  {
    icon: TrendingUp,
    title: "Grow with affiliates & reviews",
    description: "Turn happy customers into your marketing team. Automatically.",
  },
  {
    icon: Coins,
    title: "See exactly how much you save",
    description: "Your dashboard shows real numbers — time saved, costs reduced, growth measured.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-28 lg:py-36 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Why businesses choose APEX
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Replace manual work,<br />not just automate it
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every hour you spend on routine tasks is an hour lost to growing your business.
          </p>
        </div>

        {/* Values - alternating layout */}
        <div className="space-y-16 lg:space-y-24">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-accent flex items-center justify-center">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
              </div>
              
              {/* Content */}
              <div className={`flex-1 text-center lg:text-left ${index % 2 === 1 ? "lg:text-right" : ""}`}>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
