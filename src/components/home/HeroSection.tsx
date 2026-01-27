import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-gradient min-h-[90vh] flex items-center">
      <div className="section-container-lg py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in border border-white/10 bg-white/5 text-white/80">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              Trusted by 500+ businesses
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 animate-fade-in tracking-tight">
              Automate customer communication, bookings, and operations —{" "}
              <span className="gradient-text">save real money every month.</span>
            </h1>

            {/* Proof line */}
            <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto lg:mx-0 mb-10 animate-fade-in delay-100">
              Most businesses replace 1 part-time employee within the first month.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center animate-fade-in delay-200">
              <Button variant="hero" size="xl" asChild>
                <Link to="/pricing">
                  Start Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/how-it-works">
                  <Play className="mr-2 h-5 w-5" />
                  See How It Works
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative animate-fade-in delay-300">
            <div className="dashboard-mock p-1 animate-float">
              <div className="rounded-lg overflow-hidden">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="w-48 h-5 rounded-full bg-white/10 mx-auto" />
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="p-6 bg-gradient-to-br from-white/[0.03] to-transparent">
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                      <p className="text-xs text-white/40 mb-1">Hours Saved</p>
                      <p className="text-2xl font-bold text-white">127</p>
                      <p className="text-xs text-primary mt-1">+23% this month</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                      <p className="text-xs text-white/40 mb-1">Money Saved</p>
                      <p className="text-2xl font-bold text-white">543K</p>
                      <p className="text-xs text-white/40 mt-1">Ft this month</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                      <p className="text-xs text-white/40 mb-1">Bookings</p>
                      <p className="text-2xl font-bold text-white">89</p>
                      <p className="text-xs text-primary mt-1">+15% this week</p>
                    </div>
                  </div>
                  
                  {/* Chart placeholder */}
                  <div className="rounded-lg bg-white/5 p-4 border border-white/10">
                    <p className="text-xs text-white/40 mb-3">Cost Comparison</p>
                    <div className="flex items-end gap-2 h-24">
                      <div className="flex-1 bg-white/10 rounded-t h-full" />
                      <div className="flex-1 bg-white/10 rounded-t h-3/4" />
                      <div className="flex-1 bg-primary/60 rounded-t h-2/4" />
                      <div className="flex-1 bg-primary/60 rounded-t h-1/3" />
                      <div className="flex-1 bg-primary rounded-t h-1/4" />
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-white/30">
                      <span>Manual</span>
                      <span>With APEX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute -inset-20 bg-primary/20 blur-3xl rounded-full -z-10 opacity-50" />
          </div>
        </div>

        {/* Trust stats */}
        <div className="mt-24 pt-12 border-t border-white/10 animate-fade-in delay-400">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">120+</p>
              <p className="text-sm text-white/40 mt-1">Hours saved monthly</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">75%</p>
              <p className="text-sm text-white/40 mt-1">Fewer missed calls</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">3x</p>
              <p className="text-sm text-white/40 mt-1">More bookings</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">500K+</p>
              <p className="text-sm text-white/40 mt-1">Ft saved avg/month</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
