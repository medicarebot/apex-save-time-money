import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check, Zap } from "lucide-react";

const trustedBy = [
  "Premium Dental",
  "Urban Salon Group",
  "MedCare Clinics",
  "Elite Properties",
  "ServicePro Network",
];

export function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden py-20 lg:py-28">
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-white/80">AI that works for your team</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Every customer conversation.
            <br />
            <span className="gradient-text">Handled instantly.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            APEX deploys AI agents across your channels—website, WhatsApp, Instagram, email—so your team can focus on what matters.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
            <div className="flex items-center gap-2 text-white/70">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">No setup fees</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Live in 15 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Human handover built-in</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="hero" asChild className="group">
              <Link to="/pricing">
                Start Free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="heroOutline" asChild>
              <Link to="/contact">
                <Play className="mr-2 h-4 w-4" />
                Book a Demo
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 pb-8">
            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-white">2,400+</p>
              <p className="text-sm text-white/50">Active businesses</p>
            </div>
            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-white">47hrs</p>
              <p className="text-sm text-white/50">Recovered weekly</p>
            </div>
            <div className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-white">&lt;2s</p>
              <p className="text-sm text-white/50">Response time</p>
            </div>
          </div>
        </div>

        {/* Trusted by logos - more emphasized */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-sm font-medium text-white/60 mb-6 uppercase tracking-widest">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
            {trustedBy.map((company) => (
              <span key={company} className="text-white/50 font-semibold text-base tracking-wide hover:text-white/70 transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full opacity-50" />
      </div>
    </section>
  );
}
