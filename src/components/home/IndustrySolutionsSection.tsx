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
    description: "APEX books appointments 24/7, sends automated reminders to reduce no-shows, and helps you grow through reviews and referrals.",
    outcomes: [
      "More consistent booking flow",
      "Reduced no-shows through automation",
      "Improved customer satisfaction",
    ],
    href: "/solutions/salons",
  },
  {
    id: "healthcare",
    name: "Clinics & Healthcare",
    icon: Stethoscope,
    headline: "Your front desk shouldn't be your bottleneck.",
    description: "Handle patient inquiries, appointment scheduling, and follow-ups automatically. HIPAA-ready, human when it matters.",
    outcomes: [
      "Less time on the phone",
      "Improved patient satisfaction",
      "More time per patient interaction",
    ],
    href: "/solutions/healthcare",
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building2,
    headline: "Never miss a lead. Ever.",
    description: "Qualify leads instantly, schedule viewings automatically, and keep buyers engaged throughout their journey.",
    outcomes: [
      "Faster lead response times",
      "Better qualified pipeline",
      "Higher conversion through follow-up",
    ],
    href: "/solutions/real-estate",
  },
  {
    id: "services",
    name: "Service Businesses",
    icon: Wrench,
    headline: "Quote faster. Close more. Stress less.",
    description: "From initial inquiry to job completion, APEX keeps customers informed and your team coordinated.",
    outcomes: [
      "Faster quoting and response",
      "Stronger customer retention",
      "Hours recovered every week",
    ],
    href: "/solutions/services",
  },
];

export function IndustrySolutionsSection() {
  const [activeTab, setActiveTab] = useState("salons");
  const activeIndustry = industries.find((i) => i.id === activeTab)!;

  return (
    <section className="py-24 lg:py-32 enterprise-section relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Built for your industry
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Designed to improve operational performance
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
                  : "bg-white/10 text-white/60 hover:text-white hover:bg-white/20"
              }`}
            >
              <industry.icon className="h-4 w-4" />
              {industry.name}
            </button>
          ))}
        </div>

        {/* Active industry content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                  {activeIndustry.headline}
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  {activeIndustry.description}
                </p>
                <Button asChild className="group">
                  <Link to={activeIndustry.href}>
                    See {activeIndustry.name} Solutions
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>

              {/* Outcomes */}
              <div className="space-y-3">
                {activeIndustry.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-sm font-medium text-white">{outcome}</p>
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
