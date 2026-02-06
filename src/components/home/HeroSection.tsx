import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Check, Zap } from "lucide-react";
import { AIChatWidget } from "./AIChatWidget";

const trustedBy = [
  "Premium Dental",
  "Urban Salon Group",
  "MedCare Clinics",
  "Elite Properties",
  "ServicePro Network",
];

export function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="section-container-lg relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Messaging */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-white/80">AI that works for your team</span>
            </div>

            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-5 tracking-tight leading-[1.15]">
              Every customer conversation.
              <br />
              <span className="gradient-text">Handled instantly.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl text-white/60 mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              APEX deploys AI agents across your channels—website, WhatsApp, Instagram, email—so your team can focus on what matters.
            </p>

            {/* Value props */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 mb-8">
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
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

            {/* Stats inline */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-5 border-t border-white/10">
              <div>
                <p className="text-xl font-bold text-white">2,400+</p>
                <p className="text-xs text-white/50">Active businesses</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">47hrs</p>
                <p className="text-xs text-white/50">Recovered weekly</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">&lt;2s</p>
                <p className="text-xs text-white/50">Response time</p>
              </div>
            </div>
          </div>

          {/* Right: AI Chat Widget */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            <AIChatWidget />
          </div>
        </div>

        {/* Trusted by logos */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/40 mb-5">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3">
            {trustedBy.map((company) => (
              <span key={company} className="text-white/30 font-medium text-sm tracking-wide">
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
