import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check, Zap, Clock, Users } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const stats = [
  { value: "2,400+", label: "Active businesses" },
  { value: "47hrs", label: "Recovered weekly" },
  { value: "<2s", label: "Response time" },
  { value: "98%", label: "Team satisfaction" },
];

const trustedBy = [
  "Premium Dental",
  "Urban Salon Group",
  "MedCare Clinics",
  "Elite Properties",
  "ServicePro Network",
];

export function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="section-container-lg">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-white/80">Trusted by 2,400+ service businesses</span>
          </div>

          {/* Main headline - Human-First Version */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Give your team superpowers.
            <br />
            <span className="gradient-text">Not more busywork.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            APEX handles the repetitive tasks—conversations, scheduling, follow-ups—so your team 
            can focus on the high-value work that actually grows your business.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            <div className="flex items-center gap-2 text-white/70">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">No credit card required</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Setup in 15 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">ROI in 7 days</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="xl" variant="hero" asChild className="group">
              <Link to="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="xl" variant="heroOutline" asChild>
              <Link to="/contact">
                <Play className="mr-2 h-4 w-4" />
                Book a Demo
              </Link>
            </Button>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted by logos */}
      <div className="section-container-lg mt-16">
        <p className="text-center text-sm text-white/40 mb-6">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
          {trustedBy.map((company) => (
            <span key={company} className="text-white/30 font-medium text-sm tracking-wide">
              {company}
            </span>
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full opacity-50" />
      </div>
    </section>
  );
}
