import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, AlertTriangle, Zap, Network } from "lucide-react";
import { productData } from "@/data/productData";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return <Navigate to="/product" replace />;
  }

  const Icon = product.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient py-24 lg:py-32">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <Link
              to="/product"
              className="inline-flex items-center text-sm text-[hsl(var(--hero-text-muted))] hover:text-[hsl(var(--hero-text))] mb-8 transition-colors"
            >
              ← Back to Products
            </Link>
            <p className="text-primary font-medium mb-3 text-sm tracking-wide uppercase">
              {product.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--hero-text))] mb-6 leading-tight">
              {product.headline}
            </h1>
            <p className="text-lg text-[hsl(var(--hero-text-muted))] mb-10 leading-relaxed max-w-2xl">
              {product.subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/pricing">
                  {product.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="heroOutline" asChild>
                <Link to="/contact">{product.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Problem */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold">{product.problemTitle}</h2>
              </div>
              <ul className="space-y-4">
                {product.problems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 mt-2.5 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{product.afterTitle}</h2>
              </div>
              <ul className="space-y-4">
                {product.afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-container">
        <div className="h-px bg-border" />
      </div>

      {/* Capabilities */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <h2 className="text-2xl font-bold mb-10">{product.capabilitiesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.capabilities.map((cap) => (
              <div
                key={cap}
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium leading-relaxed">{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-container">
        <div className="h-px bg-border" />
      </div>

      {/* Who This Is For */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold mb-8">{product.whoTitle}</h2>
            <ul className="space-y-4">
              {product.whoItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Master Bot Integration */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Network className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              How It Connects to the APEX System
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              All modules operate under the Master Bot — ensuring memory, context continuity, and structured orchestration across the entire system.
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

export default ProductDetail;
