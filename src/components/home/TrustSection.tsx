import { Clock, PhoneOff, CalendarCheck, Coins } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "120+",
    label: "Hours saved per month",
    description: "Average time saved on customer communication",
  },
  {
    icon: PhoneOff,
    value: "75%",
    label: "Fewer missed calls",
    description: "AI answers when you can't",
  },
  {
    icon: CalendarCheck,
    value: "3x",
    label: "More bookings",
    description: "24/7 availability means more appointments",
  },
  {
    icon: Coins,
    value: "500K+ Ft",
    label: "Saved monthly",
    description: "Average savings vs hiring staff",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="section-container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-background">
            Real Results, Real Savings
          </h2>
          <p className="text-lg text-background/70">
            Businesses using APEX see measurable improvements from day one.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-background/10 rounded-xl mb-4">
                <stat.icon className="h-7 w-7 text-primary" />
              </div>
              <p className="text-4xl font-bold text-background mb-2">{stat.value}</p>
              <p className="font-medium text-background mb-1">{stat.label}</p>
              <p className="text-sm text-background/60">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial preview */}
        <div className="mt-16 pt-16 border-t border-background/10">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl text-background/90 italic mb-6">
              "We cut our phone time in half and doubled our bookings. The dashboard showing our savings is incredible — my team finally sees the ROI."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-background/20 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold text-background">MK</span>
              </div>
              <div className="text-left">
                <p className="font-medium text-background">Márta K.</p>
                <p className="text-sm text-background/60">Owner, Budapest Hair Studio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
