import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageSquare, ClipboardCheck, Rocket, Users } from "lucide-react";

const products = [
  {
    icon: Calendar,
    name: "Smart Scheduling",
    slug: "scheduling",
    tagline: "Never miss a booking again",
    description: "AI-powered appointment booking that works 24/7.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: MessageSquare,
    name: "Customer Chat & Sales",
    slug: "chat",
    tagline: "Answer every customer instantly",
    description: "Multi-channel AI support with human handover.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: ClipboardCheck,
    name: "Operations & Tasks",
    slug: "operations",
    tagline: "Run your business on autopilot",
    description: "Automate internal workflows and task management.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Rocket,
    name: "Growth Pack",
    slug: "growth",
    tagline: "Grow without hiring",
    description: "Affiliates and reviews bring customers automatically.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Users,
    name: "Digital Board",
    slug: "digital-board",
    tagline: "AI advisors for leadership",
    description: "C-level AI support for enterprise decisions.",
    badge: "Enterprise",
    color: "bg-purple-50 text-purple-600",
  },
];

const Product = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              One Platform, Every Tool You Need
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the modules that fit your business. Start with one, add more as you grow.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                to={`/product/${product.slug}`}
                className="group bg-card border border-border rounded-2xl p-8 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${product.color}`}>
                    <product.icon className="h-7 w-7" />
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
                <p className="text-primary font-medium text-sm mb-2">{product.tagline}</p>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-accent">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-6">
              See our simple, transparent pricing and start automating today.
            </p>
            <Button size="lg" asChild>
              <Link to="/pricing">
                View Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
