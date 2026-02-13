import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, ClipboardCheck, Rocket, Users, Network } from "lucide-react";

const products = [
  {
    icon: MessageSquare,
    name: "Customer Chat & Sales",
    slug: "chat",
    tagline: "Structured communication across every channel",
    description: "Centralize, track, and manage every customer inquiry with AI-powered routing and human escalation.",
  },
  {
    icon: Calendar,
    name: "Smart Scheduling",
    slug: "scheduling",
    tagline: "Automated booking without administrative overhead",
    description: "Automate booking, confirmations, reminders, and calendar coordination across your organization.",
  },
  {
    icon: ClipboardCheck,
    name: "Operations & Tasks",
    slug: "operations",
    tagline: "AI coordination for internal workflows",
    description: "Structure repetitive coordination tasks, automate routing, and maintain clear audit trails.",
  },
  {
    icon: Rocket,
    name: "Growth Pack",
    slug: "growth",
    tagline: "Systemized reputation and retention",
    description: "Automate review collection, referral flows, and re-engagement campaigns.",
  },
  {
    icon: Users,
    name: "Digital Board",
    slug: "digital-board",
    tagline: "Executive-level operational intelligence",
    description: "AI-powered dashboards, pattern detection, and strategic recommendations for leadership.",
    badge: "Enterprise",
  },
];

const Product = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--hero-text))] mb-6 leading-tight">
              AI infrastructure for every layer of your operations
            </h1>
            <p className="text-lg text-[hsl(var(--hero-text-muted))] max-w-2xl mx-auto">
              Choose the modules that match your operational needs. Start with one, scale as your organization grows.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/product/${product.slug}`}
                className="group bg-card border border-border rounded-2xl p-8 card-hover"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  {product.badge && (
                    <span className="text-xs font-semibold bg-foreground text-background px-2.5 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-primary/80 font-medium text-sm mb-2">{product.tagline}</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">{product.description}</p>
                <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Master Bot Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Network className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Unified Under the Master Bot
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              All modules operate under a single orchestration layer — ensuring memory, context continuity, and structured coordination across your entire operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/pricing">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
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
