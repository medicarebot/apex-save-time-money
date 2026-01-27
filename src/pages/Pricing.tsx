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
  label: string;
  features: string[];
  cta: string;
  category: "core" | "growth" | "enterprise";
}

const coreTiers: PricingTier[] = [
  {
    name: "Smart Scheduling",
    icon: Calendar,
    price: "12,990 Ft",
    priceNote: "+ VAT / user / month",
    description: "AI-powered appointment booking for your business.",
    label: "Best for service businesses",
    features: [
      "AI appointment booking",
      "Smart service durations",
      "Calendar integration",
      "Automatic reminders",
      "Follow-up messages",
      "Online booking page",
    ],
    cta: "Start Smart Scheduling",
    category: "core",
  },
  {
    name: "Customer Chat & Sales",
    icon: MessageSquare,
    price: "From 49,990 Ft",
    priceNote: "+ VAT / month",
    description: "24/7 AI responses across all your channels.",
    label: "Best for customer-facing teams",
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
    category: "core",
  },
];

const growthTier: PricingTier = {
  name: "Growth Pack",
  icon: Rocket,
  price: "9,990 – 19,990 Ft",
  priceNote: "+ VAT / month",
  description: "Build your reputation and grow through reviews, referrals, and affiliates.",
  label: "For businesses ready to scale",
  features: [
    "Affiliate management",
    "Commission tracking",
    "Google review automation",
    "Review request campaigns",
    "Growth performance insights",
    "Referral link generation",
  ],
  cta: "View Growth Pack",
  category: "growth",
};

const enterpriseTier: PricingTier = {
  name: "Digital Board",
  icon: Users,
  price: "Custom",
  priceNote: "pricing",
  description: "AI advisors that help leadership teams see clearly, decide faster, and align the business.",
  label: "For enterprise leadership",
  features: [
    "AI CEO / CFO / COO advisors",
    "Executive insights dashboard",
    "Company-wide visibility",
    "Decision support AI",
    "Strategic recommendations",
    "Priority support",
  ],
  cta: "Request Executive Demo",
  category: "enterprise",
};

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Simple, transparent pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              No hidden fees. No long-term contracts. Start with one module and grow as you need.
            </p>
            <p className="text-base font-medium text-primary">
              Most customers see clear efficiency gains within the first month.
            </p>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="section-container">
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Core Modules</h2>
            <p className="text-muted-foreground">Start with the essentials for your business</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreTiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-card border border-border rounded-2xl p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <tier.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>

                <h3 className="font-semibold text-xl mb-1">{tier.name}</h3>
                <p className="text-xs font-medium text-primary mb-3">{tier.label}</p>
                <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold">{tier.price}</span>
                  {tier.priceNote && (
                    <span className="text-sm text-muted-foreground block mt-1">{tier.priceNote}</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="lg" className="w-full" asChild>
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

      {/* Growth Add-on */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Growth Add-on</h2>
            <p className="text-muted-foreground">Scale your customer acquisition</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                    <growthTier.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl">{growthTier.name}</h3>
                    <p className="text-xs font-medium text-primary">{growthTier.label}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{growthTier.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {growthTier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-shrink-0 text-center md:text-right">
                <div className="mb-4">
                  <span className="text-3xl font-bold">{growthTier.price}</span>
                  {growthTier.priceNote && (
                    <span className="text-sm text-muted-foreground block mt-1">{growthTier.priceNote}</span>
                  )}
                </div>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/product/growth">
                    {growthTier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-16 lg:py-20 enterprise-section">
        <div className="section-container">
          <div className="mb-10">
            <h2 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-2">Enterprise</h2>
            <p className="text-white/60">For leadership teams</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                  <enterpriseTier.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-2xl text-white">{enterpriseTier.name}</h3>
                  <p className="text-xs font-medium text-primary">{enterpriseTier.label}</p>
                </div>
              </div>
              <p className="text-white/60 mb-6">{enterpriseTier.description}</p>
              <ul className="grid grid-cols-2 gap-2">
                {enterpriseTier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 text-center md:text-right">
              <div className="mb-4">
                <span className="text-3xl font-bold text-white">{enterpriseTier.price}</span>
                {enterpriseTier.priceNote && (
                  <span className="text-sm text-white/60 block mt-1">{enterpriseTier.priceNote}</span>
                )}
              </div>
              <Button 
                variant="heroOutline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link to="/contact">
                  {enterpriseTier.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Credits */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6 text-center">
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Usage-based</h2>
            </div>
            <div className="border border-border rounded-2xl p-8 md:p-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent rounded-xl mb-4">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl mb-2">AI Credits</h3>
              <p className="text-muted-foreground mb-6">
                Transparent usage tracking. Pay only when AI works for you.
              </p>
              <div className="inline-block bg-muted rounded-xl p-6">
                <span className="text-3xl font-bold">100,000 words</span>
                <span className="text-muted-foreground mx-3">→</span>
                <span className="text-2xl font-semibold text-primary">19,990 Ft + VAT</span>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Average business uses 50,000-80,000 words per month
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Questions about pricing?</h2>
            <p className="text-muted-foreground mb-8">
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
