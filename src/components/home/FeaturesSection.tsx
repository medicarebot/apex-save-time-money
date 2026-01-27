import { MessageSquare, Calendar, ClipboardList, TrendingUp, Coins } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Answer customers 24/7",
    description: "On web, WhatsApp, Messenger, and email — never miss a message.",
  },
  {
    icon: Calendar,
    title: "Automatic booking",
    description: "Let customers book appointments without calling or waiting.",
  },
  {
    icon: ClipboardList,
    title: "Automate follow-ups",
    description: "Reminders, internal tasks, and workflows run on autopilot.",
  },
  {
    icon: TrendingUp,
    title: "Grow faster",
    description: "Affiliates and Google reviews bring more customers automatically.",
  },
  {
    icon: Coins,
    title: "See money saved",
    description: "Your dashboard shows exactly how much you save vs hiring staff.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What APEX Does For Your Business
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop losing customers to slow responses. Start saving time and money today.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-2xl p-6 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="feature-icon mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
