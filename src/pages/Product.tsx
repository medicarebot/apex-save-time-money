import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, ClipboardCheck, Rocket, Users, Network } from "lucide-react";

const products = [
  {
    icon: MessageSquare,
    name: "Communication Infrastructure",
    slug: "communication-infrastructure",
    tagline: "Structured communication across every channel",
    description: "Centralize, qualify, and route every customer interaction with AI-powered intelligence and seamless human escalation.",
  },
  {
    icon: Calendar,
    name: "Revenue Capture",
    slug: "revenue-capture",
    tagline: "Automated scheduling that protects revenue",
    description: "Automate booking, confirmations, reminders, and calendar coordination — capturing revenue around the clock.",
  },
  {
    icon: ClipboardCheck,
    name: "Operational Automation",
    slug: "operational-automation",
    tagline: "AI coordination for internal workflows",
    description: "Structure repetitive coordination tasks, automate routing, and maintain clear audit trails across teams.",
  },
  {
    icon: Rocket,
    name: "Reputation & Retention",
    slug: "reputation-retention",
    tagline: "Systemized reputation and retention management",
    description: "Automate review collection, referral flows, and re-engagement campaigns for measurable growth.",
  },
  {
    icon: Users,
    name: "Executive Intelligence",
    slug: "executive-intelligence",
    tagline: "Real-time operational visibility for leadership",
    description: "AI-powered dashboards, pattern detection, and strategic recommendations for data-informed decisions.",
    badge: "Enterprise",
  },
];

const Product = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-36">
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--hero-text))] mb-6 leading-[1.1]">
              AI infrastructure for every layer of your operations
            </h1>
            <p className="text-lg lg:text-xl text-[hsl(var(--hero-text-muted))] max-w-2xl mx-auto">
              Choose the modules that match your operational needs. Start with one, scale as your organization grows.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28" style={{ background: "hsl(215 28% 7%)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/product/${product.slug}`}
                className="group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                style={{ background: "hsl(215 28% 10%)", border: "1px solid hsl(215 20% 16%)" }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  {product.badge && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-primary" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-xl mb-2 text-[hsl(var(--hero-text))] group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-primary/80 font-medium text-sm mb-2">{product.tagline}</p>
                <p className="text-[hsl(var(--hero-text-muted))] mb-6 leading-relaxed">{product.description}</p>
                <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Master Bot Section */}
      <section className="py-20 lg:py-28" style={{ background: "hsl(215 28% 6%)" }}>
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ background: "hsl(var(--primary) / 0.1)" }}>
              <Network className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--hero-text))] mb-5">
              Unified Under the Master Bot
            </h2>
            <p className="text-[hsl(var(--hero-text-muted))] mb-10 leading-relaxed">
              All modules operate under a single orchestration layer — ensuring memory, context continuity, and structured coordination across your entire operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/pricing">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="heroOutline" asChild>
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
