import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, AlertTriangle, Zap, Network, ChevronDown, Shield } from "lucide-react";
import { productData } from "@/data/productData";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return <Navigate to="/product" replace />;
  }

  return (
    <Layout>
      {/* SECTION 1 — DARK HERO */}
      <section className="hero-gradient py-28 lg:py-40">
        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <Link
              to="/product"
              className="inline-flex items-center text-sm text-[hsl(var(--hero-text-muted))] hover:text-[hsl(var(--hero-text))] mb-12 transition-colors"
            >
              ← Back to Products
            </Link>
            <p className="text-primary font-medium mb-5 text-sm tracking-widest uppercase">
              {product.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[hsl(var(--hero-text))] mb-8 leading-[1.08]">
              {product.headline}
            </h1>
            <p className="text-lg lg:text-xl text-[hsl(var(--hero-text-muted))] mb-14 leading-relaxed max-w-2xl">
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

      {/* SECTION 2 — THE COST OF OPERATING WITHOUT STRUCTURE */}
      <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 7%)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Problem */}
            <div className="p-8 lg:p-12 rounded-2xl" style={{ background: "hsl(215 28% 10%)", border: "1px solid hsl(215 20% 16%)" }}>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "hsl(0 84% 60% / 0.1)" }}>
                  <AlertTriangle className="h-5 w-5" style={{ color: "hsl(0 84% 60%)" }} />
                </div>
                <h2 className="text-2xl lg:text-[1.7rem] font-bold text-[hsl(var(--hero-text))]">{product.problemTitle}</h2>
              </div>
              <ul className="space-y-6">
                {product.problems.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ background: "hsl(0 84% 60% / 0.6)" }} />
                    <span className="text-[hsl(var(--hero-text-muted))] leading-relaxed text-[0.95rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="p-8 lg:p-12 rounded-2xl" style={{ background: "hsl(215 28% 10%)", border: "1px solid hsl(215 20% 16%)" }}>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-[1.7rem] font-bold text-[hsl(var(--hero-text))]">{product.afterTitle}</h2>
              </div>
              <ul className="space-y-6">
                {product.afterItems.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-[hsl(var(--hero-text))] leading-relaxed text-[0.95rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2.5 — EXECUTIVE CLARITY (conditional) */}
      {product.executiveClarity && (
        <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 8%)" }}>
          <div className="section-container">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))]">
                {product.executiveClarity.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
              {product.executiveClarity.blocks.map((block) => (
                <div
                  key={block.title}
                  className="p-8 lg:p-10 rounded-2xl"
                  style={{ background: "hsl(215 28% 10%)", border: "1px solid hsl(215 20% 16%)" }}
                >
                  <h3 className="font-semibold text-lg text-[hsl(var(--hero-text))] mb-3">{block.title}</h3>
                  <p className="text-[hsl(var(--hero-text-muted))] leading-relaxed">{block.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3 — SYSTEM ARCHITECTURE */}
      <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 6%)" }}>
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))] mb-4 text-center">
            System Architecture
          </h2>
          <p className="text-[hsl(var(--hero-text-muted))] text-center mb-16 max-w-xl mx-auto leading-relaxed">
            How data flows through the APEX intelligence layer.
          </p>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-5">
              <div className="w-full p-8 rounded-2xl text-center" style={{ background: "hsl(215 28% 10%)", border: "1px solid hsl(215 20% 18%)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">Input</p>
                <p className="text-[hsl(var(--hero-text))] font-medium text-lg">{product.architectureFlow.input}</p>
              </div>
              <ChevronDown className="h-6 w-6 text-primary" />
              <div className="w-full p-8 rounded-2xl text-center premium-card">
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">Intelligence Layer</p>
                <p className="text-[hsl(var(--hero-text))] font-medium text-lg">{product.architectureFlow.intelligence}</p>
              </div>
              <ChevronDown className="h-6 w-6 text-primary" />
              <div className="w-full p-8 rounded-2xl text-center" style={{ background: "hsl(var(--primary) / 0.08)", border: "1px solid hsl(var(--primary) / 0.2)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-4">Outcome</p>
                <p className="text-[hsl(var(--hero-text))] font-medium text-lg">{product.architectureFlow.outcome}</p>
              </div>
            </div>

            {/* Infrastructure Characteristics */}
            {product.infrastructureCharacteristics && (
              <div className="mt-14 p-8 rounded-2xl" style={{ background: "hsl(215 28% 10%)", border: "1px solid hsl(215 20% 16%)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-6">Infrastructure Characteristics</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.infrastructureCharacteristics.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-[hsl(var(--hero-text-muted))] text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4 — BUSINESS IMPACT */}
      <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 8%)" }}>
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))] mb-16">{product.capabilitiesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-8 lg:p-10 rounded-2xl"
                style={{ background: "hsl(215 28% 10%)", border: "1px solid hsl(215 20% 16%)" }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-[hsl(var(--hero-text))] mb-3">{cap.title}</h3>
                <p className="text-[hsl(var(--hero-text-muted))] leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHO THIS IS FOR */}
      <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 6%)" }}>
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))] mb-16">{product.whoTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.whoBlocks.map((block) => (
              <div
                key={block.title}
                className="p-8 lg:p-10 rounded-2xl"
                style={{ background: "hsl(215 28% 10%)", border: "1px solid hsl(215 20% 16%)" }}
              >
                <h3 className="font-semibold text-lg text-[hsl(var(--hero-text))] mb-3">{block.title}</h3>
                <p className="text-[hsl(var(--hero-text-muted))] leading-relaxed">{block.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — SYSTEM CONNECTION */}
      <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 8%)" }}>
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-8" style={{ background: "hsl(var(--primary) / 0.1)" }}>
              <Network className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))] mb-6">
              How This Connects to the APEX System
            </h2>
            <p className="text-[hsl(var(--hero-text-muted))] leading-relaxed max-w-lg mx-auto text-lg">
              All modules operate under the Master Bot core — ensuring memory continuity, cross-channel context, and centralized intelligence. APEX is unified infrastructure, not separate tools.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6.5 — BUILT FOR OPERATIONAL STABILITY (conditional) */}
      {product.stabilitySection && (
        <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 6%)" }}>
          <div className="section-container">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))] mb-6">
                {product.stabilitySection.title}
              </h2>
              <p className="text-[hsl(var(--hero-text-muted))] leading-relaxed text-lg mb-10">
                {product.stabilitySection.intro}
              </p>
              <div className="space-y-4">
                {product.stabilitySection.points.map((point) => (
                  <div key={point} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-[hsl(var(--hero-text))] text-[0.95rem]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7 — STRATEGIC CTA */}
      <section className="py-32 lg:py-40 hero-gradient">
        <div className="section-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[hsl(var(--hero-text))] mb-8 leading-[1.1]">
              {product.finalHeadline}
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/pricing">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="heroOutline" asChild>
                <Link to="/contact">Request Executive Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
