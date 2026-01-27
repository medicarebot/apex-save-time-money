import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-28 lg:py-36 bg-foreground text-background relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="section-container relative text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight max-w-3xl mx-auto">
          Ready to save time and money every month?
        </h2>
        <p className="text-lg md:text-xl text-background/60 mb-10 max-w-2xl mx-auto">
          Most customers recover the monthly cost in 7–14 days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="xl" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link to="/pricing">
              View Pricing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="xl" 
            className="border-background/20 text-background hover:bg-background/10"
            asChild
          >
            <Link to="/contact">
              Talk to Sales
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
