import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 lg:py-32 enterprise-section relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-white/80">Start a conversation—literally</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
            Ready to see what APEX can do for you?
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto">
            Talk to our AI right now—or book a demo with our team. 
            Either way, you'll see results within minutes.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="xl" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              asChild
            >
              <Link to="/pricing">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="xl" 
              className="bg-white/10 border border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <Link to="/contact">
                <MessageSquare className="mr-2 h-4 w-4" />
                Request Demo
              </Link>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-white/50">
            <span>✓ No setup fees</span>
            <span>✓ Live in 15 minutes</span>
            <span>✓ Human support always available</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
