import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Zap, Calendar, MessageSquare, Rocket, Users } from "lucide-react";

interface PricingTier {
  name: string;
  icon: React.ElementType;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  cta: string;
  ctaVariant: "pricing" | "pricingOutline";
  popular?: boolean;
  badge?: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Smart Scheduling",
    icon: Calendar,
    price: "12,990 Ft",
    priceNote: "+ VAT / user / month",
    description: "AI-powered appointment booking for your business.",
    features: [
      "AI appointment booking",
      "Smart service durations",
      "Calendar integration",
      "Automatic reminders",
      "Follow-up messages",
      "Online booking page",
    ],
    cta: "Start Smart Scheduling",
    ctaVariant: "pricing",
  },
  {
    name: "Customer Chat & Sales",
    icon: MessageSquare,
    price: "From 49,990 Ft",
    priceNote: "+ VAT / month",
    description: "24/7 AI responses across all your channels.",
    features: [
      "Web chat widget",
      "WhatsApp integration",
      "Messenger integration",
      "Email automation",
      "24/7 AI responses",
      "Lead collection & qualification",
      "Human handover when needed",
      "Performance analytics",
    ],
    cta: "Start Customer Chat",
    ctaVariant: "pricing",
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "Growth Pack",
    icon: Rocket,
    price: "9,990 – 19,990 Ft",
    priceNote: "+ VAT / month",
    description: "Grow without hiring with affiliates and reviews.",
    features: [
      "Affiliate management",
      "Commission tracking",
      "Google review automation",
      "Review request campaigns",
      "Growth performance insights",
      "Referral link generation",
    ],
    cta: "Add Growth Pack",
    ctaVariant: "pricingOutline",
    badge: "Add-On",
  },
  {
    name: "Digital Board",
    icon: Users,
    price: "Custom",
    priceNote: "pricing",
    description: "AI C-level advisors for enterprise leadership.",
    features: [
      "AI CEO / CFO / COO advisors",
      "Executive insights dashboard",
      "Company-wide visibility",
      "Decision support AI",
      "Strategic recommendations",
      "Priority support",
    ],
    cta: "Request Demo",
    ctaVariant: "pricingOutline",
    badge: "Enterprise",
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, transparent pricing.
              <br />
              <span className="text-primary">Pay only for what you use.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              No hidden fees. No long-term contracts. Start with one module and grow as you need.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-card border rounded-2xl p-6 flex flex-col ${
                  tier.popular ? "pricing-highlight" : "border-border"
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="feature-icon">
                    <tier.icon className="h-6 w-6" />
                  </div>
                  {tier.badge && (
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      tier.popular 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {tier.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-semibold text-xl mb-2">{tier.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.priceNote && (
                    <span className="text-sm text-muted-foreground block mt-1">
                      {tier.priceNote}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant={tier.ctaVariant} size="lg" asChild>
                  <Link to="/contact">
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Credits */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent rounded-xl mb-4">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl mb-2">AI Credits</h3>
              <p className="text-muted-foreground mb-6">
                Pay only when AI works for you. Transparent usage tracking in your dashboard.
              </p>
              <div className="inline-block bg-muted rounded-xl p-6">
                <span className="text-3xl font-bold">100,000 words</span>
                <span className="text-muted-foreground mx-2">→</span>
                <span className="text-2xl font-semibold text-primary">19,990 Ft + VAT</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Average business uses 50,000-80,000 words per month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Questions about pricing?</h2>
            <p className="text-muted-foreground mb-6">
              We're here to help you find the right plan for your business.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
