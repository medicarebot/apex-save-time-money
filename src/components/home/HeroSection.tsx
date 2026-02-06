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
    <section className="hero-gradient relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="section-container-lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Messaging */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm text-white/80">AI that works for your team</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Every customer conversation.
              <br />
              <span className="gradient-text">Handled instantly.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              APEX deploys AI agents across your channels—website, WhatsApp, Instagram, email—so your team can focus on what matters.
            </p>

            {/* Value props */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mb-10">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="xl" variant="hero" asChild className="group">
                <Link to="/pricing">
                  Start Free
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

            {/* Stats inline */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-6 border-t border-white/10">
              <div>
                <p className="text-2xl font-bold text-white">2,400+</p>
                <p className="text-xs text-white/50">Active businesses</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">47hrs</p>
                <p className="text-xs text-white/50">Recovered weekly</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">&lt;2s</p>
                <p className="text-xs text-white/50">Response time</p>
              </div>
            </div>
          </div>

          {/* Right: AI Chat Widget */}
          <div className="lg:pl-8">
            <AIChatWidget />
          </div>
        </div>
      </div>

      {/* Trusted by logos */}
      <div className="section-container-lg mt-20">
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
