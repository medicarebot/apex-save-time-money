import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check, Zap } from "lucide-react";

const industries = [
  "Private Clinics & Medical Centers",
  "Aesthetic & Cosmetic Clinics",
  "Real Estate Agencies",
  "Legal & Law Firms",
  "Accounting & Tax Firms",
  "Automotive Dealerships",
  "Private Education & Training",
];

export function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden py-20 lg:py-28">
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-white/80">Efficiency and growth — without the stress.</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Every customer conversation —
            <br />
            <span className="gradient-text">structured, automated, and tracked.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            APEX deploys AI agents across your channels — website, WhatsApp, Instagram, and email — so no inquiry is missed, follow-ups run automatically, and your team stays focused on high-value work.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-10">
            <div className="flex items-center gap-2 text-white/70">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">No setup fees</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm">No credit card required</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="hero" asChild className="group">
              <Link to="/pricing">
                Start Free Trial
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

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 pb-8">
            <div className="flex items-center gap-2 text-white/70">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Live in 15 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Human handover built-in</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <Check className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Multi-channel AI agents</span>
            </div>
          </div>
        </div>

        {/* Built for */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-sm font-medium text-white/60 mb-6 uppercase tracking-widest">
            Built for high-value service operations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
            {industries.map((industry) => (
              <span key={industry} className="text-white/50 font-medium text-sm tracking-wide px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
                {industry}
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
