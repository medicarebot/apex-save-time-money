import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Clock, Calendar, BarChart3, Heart } from "lucide-react";

const valueProofs = [
  { icon: Clock, text: "Faster responses" },
  { icon: Calendar, text: "More bookings" },
  { icon: BarChart3, text: "Clear ROI dashboard" },
  { icon: Heart, text: "Less operational stress" },
];

export function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Automate customer communication, bookings, and operations — 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70"> without losing the human touch.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0">
              APEX handles repetitive conversations, scheduling, and follow-ups so your team can focus on customers, growth, and quality.
            </p>

            {/* Value proof points */}
            <div className="grid grid-cols-2 gap-4 mb-10 max-w-md mx-auto lg:mx-0">
              {valueProofs.map((proof) => (
                <div key={proof.text} className="flex items-center gap-2 text-white/80">
                  <proof.icon className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{proof.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="hero" asChild>
                <Link to="/pricing">
                  Start Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="heroOutline" asChild>
                <Link to="/how-it-works">
                  <Play className="mr-2 h-4 w-4" />
                  See How It Works
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - Dashboard mockup */}
          <div className="relative">
            <div className="dashboard-mock rounded-2xl p-6 md:p-8">
              {/* Mock dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-white font-medium">This Month</p>
                    <p className="text-white/50 text-sm">Team efficiency overview</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">47 hrs</p>
                  <p className="text-primary text-sm">saved this week</p>
                </div>
              </div>

              {/* Mock metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/50 text-xs mb-1">Conversations</p>
                  <p className="text-xl font-bold text-white">1,247</p>
                  <p className="text-primary text-xs">handled automatically</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/50 text-xs mb-1">Bookings</p>
                  <p className="text-xl font-bold text-white">89</p>
                  <p className="text-primary text-xs">this week</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-white/50 text-xs mb-1">Response time</p>
                  <p className="text-xl font-bold text-white">&lt;2s</p>
                  <p className="text-primary text-xs">average</p>
                </div>
              </div>

              {/* Mock activity */}
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-white/50 text-xs mb-3">Recent activity</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-white/80 text-sm">New booking confirmed — Dental cleaning</p>
                    <span className="text-white/40 text-xs ml-auto">2m ago</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <p className="text-white/80 text-sm">Customer inquiry resolved</p>
                    <span className="text-white/40 text-xs ml-auto">5m ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10 opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
