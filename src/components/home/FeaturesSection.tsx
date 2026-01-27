import { Headphones, Calendar, RefreshCw, TrendingUp, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Headphones,
    title: "Reduce communication overload",
    description: "Your team stays focused on complex work while APEX handles routine questions and requests.",
  },
  {
    icon: Calendar,
    title: "Let customers book without staff",
    description: "Self-service booking that works 24/7. No phone tag, no waiting — just seamless scheduling.",
  },
  {
    icon: RefreshCw,
    title: "Eliminate repetitive follow-ups",
    description: "Automatic reminders and task tracking free your team to focus on what matters most.",
  },
  {
    icon: TrendingUp,
    title: "Scale without burning out your team",
    description: "Grow your customer base with reviews, referrals, and affiliates — no extra headcount needed.",
  },
  {
    icon: BarChart3,
    title: "See your efficiency gains clearly",
    description: "Your dashboard shows real numbers — time saved, response improvements, and business growth.",
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
            Let your team focus on what<br />humans do best
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            APEX handles the routine work, so your people can focus on customers, creativity, and growth.
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
