import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Stethoscope, Building2, Wrench } from "lucide-react";

const industries = [
  {
    id: "salons",
    name: "Salons & Spas",
    icon: Scissors,
    headline: "Stop losing bookings to voicemail.",
    description: "APEX books appointments 24/7, sends reminders that reduce no-shows by 40%, and helps you grow through reviews and referrals.",
    metrics: [
      { value: "32%", label: "More bookings" },
      { value: "40%", label: "Fewer no-shows" },
      { value: "4.8★", label: "Avg rating boost" },
    ],
    href: "/solutions/salons",
  },
  {
    id: "healthcare",
    name: "Clinics & Healthcare",
    icon: Stethoscope,
    headline: "Your front desk shouldn't be your bottleneck.",
    description: "Handle patient inquiries, appointment scheduling, and follow-ups automatically. HIPAA-ready, human when it matters.",
    metrics: [
      { value: "67%", label: "Less phone time" },
      { value: "89%", label: "Patient satisfaction" },
      { value: "15min", label: "Saved per patient" },
    ],
    href: "/solutions/healthcare",
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building2,
    headline: "Never miss a lead. Ever.",
    description: "Qualify leads instantly, schedule viewings automatically, and keep buyers engaged throughout their journey.",
    metrics: [
      { value: "3x", label: "Faster response" },
      { value: "45%", label: "More qualified leads" },
      { value: "28%", label: "Higher conversion" },
    ],
    href: "/solutions/real-estate",
  },
  {
    id: "services",
    name: "Service Businesses",
    icon: Wrench,
    headline: "Quote faster. Close more. Stress less.",
    description: "From initial inquiry to job completion, APEX keeps customers informed and your team coordinated.",
    metrics: [
      { value: "50%", label: "Faster quotes" },
      { value: "35%", label: "More repeat customers" },
      { value: "12hrs", label: "Saved weekly" },
    ],
    href: "/solutions/services",
  },
];

export function IndustrySolutionsSection() {
  const [activeTab, setActiveTab] = useState("salons");
  const activeIndustry = industries.find((i) => i.id === activeTab)!;

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Built for your industry
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Results that speak for themselves
          </h2>
        </div>

        {/* Industry tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === industry.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              <industry.icon className="h-4 w-4" />
              {industry.name}
            </button>
          ))}
        </div>

        {/* Active industry content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {activeIndustry.headline}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {activeIndustry.description}
                </p>
                <Button asChild className="group">
                  <Link to={activeIndustry.href}>
                    See {activeIndustry.name} Solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {activeIndustry.metrics.map((metric) => (
                  <div key={metric.label} className="text-center p-4 bg-accent/50 rounded-xl">
                    <p className="text-2xl lg:text-3xl font-bold text-primary">{metric.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
