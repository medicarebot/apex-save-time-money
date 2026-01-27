import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="section-container relative py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary-foreground/90 rounded-full px-4 py-1.5 text-sm font-medium mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-primary" />
            Trusted by 500+ businesses
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in">
            Automate customer communication, bookings, and operations —{" "}
            <span className="text-primary">save real money every month.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in delay-100">
            APEX uses AI to answer customers, book appointments, automate tasks, and show exactly how much you save in Ft.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-200">
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

          {/* Trust indicators */}
          <div className="mt-16 pt-16 border-t border-primary-foreground/10">
            <p className="text-sm text-primary-foreground/60 mb-6">Saving businesses time and money across industries</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">120+</p>
                <p className="text-sm text-primary-foreground/60">Hours saved monthly</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">75%</p>
                <p className="text-sm text-primary-foreground/60">Fewer missed calls</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">3x</p>
                <p className="text-sm text-primary-foreground/60">More bookings</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary-foreground">500K+</p>
                <p className="text-sm text-primary-foreground/60">Ft saved avg/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
