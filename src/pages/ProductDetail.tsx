import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, AlertTriangle, Zap, Network, ChevronDown, Shield, Crown } from "lucide-react";
import { productData } from "@/data/productData";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;
  const isEnterprise = slug === "executive-intelligence";

  if (!product) {
    return <Navigate to="/product" replace />;
  }

  return (
    <Layout>
      {/* HERO */}
      <section
        className={`hero-gradient ${isEnterprise ? "py-36 lg:py-48" : "py-28 lg:py-40"}`}
        style={isEnterprise ? { background: "linear-gradient(180deg, hsl(215 32% 5%) 0%, hsl(215 28% 9%) 100%)" } : undefined}
      >
        <div className="section-container relative z-10">
          <div className={isEnterprise ? "max-w-3xl mx-auto text-center" : "max-w-3xl"}>
            <Link
              to="/product"
              className="inline-flex items-center text-sm text-[hsl(var(--hero-text-muted))] hover:text-[hsl(var(--hero-text))] mb-12 transition-colors"
            >
              ← Back to Products
            </Link>
            <p className="text-primary font-medium mb-5 text-sm tracking-widest uppercase">
              {product.tagline}
            </p>
            <h1 className={`font-bold text-[hsl(var(--hero-text))] mb-8 leading-[1.08] ${isEnterprise ? "text-4xl md:text-5xl lg:text-[4rem]" : "text-4xl md:text-5xl lg:text-[3.5rem]"}`}>
              {product.headline}
            </h1>
            <p className={`text-[hsl(var(--hero-text-muted))] mb-6 leading-relaxed ${isEnterprise ? "text-lg lg:text-xl max-w-2xl mx-auto" : "text-lg lg:text-xl max-w-2xl"}`}>
              {product.subtext}
            </p>
            {product.heroExtra && (
              <p className="text-base text-primary font-medium mb-14">
                {product.heroExtra}
              </p>
            )}
            {!product.heroExtra && <div className="mb-14" />}
            <div className={`flex flex-col sm:flex-row gap-4 ${isEnterprise ? "justify-center" : ""}`}>
              <Button size="lg" asChild>
                <Link to="/contact">
                  {product.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="heroOutline" asChild>
                <Link to="/pricing">{product.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* THE OPERATIONAL EXPOSURE */}
      <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 7%)" }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
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

      {/* OPERATIONAL SCENARIO (conditional) */}
      {product.operationalScenario && (
        <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 8%)" }}>
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))] mb-6">
              {product.operationalScenario.headline}
            </h2>
            <p className="text-lg text-[hsl(var(--hero-text-muted))] leading-relaxed max-w-3xl mb-14">
              {product.operationalScenario.intro}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Without */}
              <div className="p-8 lg:p-10 rounded-2xl" style={{ background: "hsl(215 28% 10%)", border: "1px solid hsl(215 20% 16%)" }}>
                <p className="text-sm font-semibold tracking-widest uppercase mb-8" style={{ color: "hsl(0 84% 60%)" }}>
                  {product.operationalScenario.withoutTitle}
                </p>
                <ul className="space-y-5">
                  {product.operationalScenario.withoutItems.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ background: "hsl(0 84% 60% / 0.6)" }} />
                      <span className="text-[hsl(var(--hero-text-muted))] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* With APEX */}
              <div className="p-8 lg:p-10 rounded-2xl" style={{ background: "hsl(215 28% 10%)", border: "1px solid hsl(var(--primary) / 0.15)" }}>
                <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-8">
                  {product.operationalScenario.withTitle}
                </p>
                <ul className="space-y-5">
                  {product.operationalScenario.withItems.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-[hsl(var(--hero-text))] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-primary font-medium mt-10 text-lg">
              {product.operationalScenario.closing}
            </p>
          </div>
        </section>
      )}

      {/* EXECUTIVE CLARITY / DIGITAL BOARD (conditional) */}
      {product.executiveClarity && (
        <section className="py-32 lg:py-40" style={{ background: "hsl(215 28% 7%)" }}>
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                  <Crown className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))]">
                  {product.executiveClarity.title}
                </h2>
              </div>
              <p className="text-[hsl(var(--hero-text-muted))] leading-relaxed text-lg mb-14">
                A board-level interface that turns operational activity into structured oversight — with defined roles, clear questions, and actionable outputs.
              </p>
              <div className="space-y-6">
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
              <p className="text-sm text-[hsl(var(--hero-text-muted))] mt-10 opacity-60">
                Executive Intelligence advises and governs. Operational modules execute.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS / SAAS CLARITY (conditional) */}
      {product.saasClarity && (
        <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 7%)" }}>
          <div className="section-container">
            <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))] mb-6">
              {product.saasClarity.headline}
            </h2>
            <p className="text-[hsl(var(--hero-text-muted))] mb-12 text-lg leading-relaxed">
             {slug === "communication-infrastructure"
                ? "APEX operates as a subscription-based communication layer:"
                : slug === "operational-automation"
                ? "APEX operates as a subscription-based operational coordination layer:"
                : slug === "reputation-retention"
                ? "APEX operates as a subscription-based reputation and retention layer:"
                : slug === "executive-intelligence"
                ? "Executive Intelligence is activated after operational modules are running:"
                : "APEX operates as a subscription-based scheduling layer:"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {product.saasClarity.steps.map((step, i) => (
                <div
                  key={step}
                  className="p-6 rounded-2xl"
                  style={{ background: "hsl(215 28% 10%)", border: "1px solid hsl(215 20% 16%)" }}
                >
                  <span className="text-primary font-bold text-2xl mb-3 block">{i + 1}</span>
                  <p className="text-[hsl(var(--hero-text))] text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-1">
              {product.saasClarity.closing.map((line) => (
                <p key={line} className="text-primary font-medium text-base">{line}</p>
              ))}
            </div>
            {slug === "revenue-capture" && (
              <p className="text-sm text-[hsl(var(--hero-text-muted))] mt-6 opacity-70">
                Powered by Google Calendar. Appointments are written directly to your calendar.
              </p>
            )}
          </div>
        </section>
      )}

      {/* GOVERNANCE / CAPABILITIES */}
      <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 6%)" }}>
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))] mb-16">{product.capabilitiesTitle}</h2>
          <div className={`grid grid-cols-1 md:grid-cols-2 ${isEnterprise ? "" : "lg:grid-cols-3"} gap-8`}>
            {product.capabilities.map((cap) => (
              <div
                key={cap.title}
                className={`rounded-2xl ${isEnterprise ? "p-10" : "p-8"}`}
                style={{ background: "hsl(215 28% 10%)", border: "1px solid hsl(215 20% 16%)" }}
              >
                <h3 className="font-semibold text-[hsl(var(--hero-text))] mb-3">{cap.title}</h3>
                <p className="text-sm text-[hsl(var(--hero-text-muted))] leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY & PRIVACY POSTURE (conditional) */}
      {product.securityPosture && (
        <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 8%)" }}>
          <div className="section-container">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))]">
                  {product.securityPosture.title}
                </h2>
              </div>
              <p className="text-[hsl(var(--hero-text-muted))] leading-relaxed text-lg mb-10">
                {product.securityPosture.intro}
              </p>
              <ul className="space-y-5">
                {product.securityPosture.points.map((point) => (
                  <li key={point} className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-[hsl(var(--hero-text))] leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[hsl(var(--hero-text-muted))] mt-8 opacity-60">
                Compliance depends on configuration and customer processes. Security details available on request.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* SYSTEM ARCHITECTURE */}
      <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 8%)" }}>
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))] mb-4 text-center">
            System Architecture
          </h2>
          <p className="text-[hsl(var(--hero-text-muted))] text-center mb-16 max-w-xl mx-auto leading-relaxed">
            How {slug === "revenue-capture" ? "scheduling flows" : slug === "operational-automation" ? "execution flows" : slug === "reputation-retention" ? "retention flows" : slug === "executive-intelligence" ? "executive oversight flows" : "data flows"} through the APEX intelligence layer.
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
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
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
          {product.whoClosing && (
            <p className="text-primary font-medium mt-10 text-lg">{product.whoClosing}</p>
          )}
        </div>
      </section>

      {/* STABILITY SECTION (conditional) */}
      {product.stabilitySection && (
        <section className="py-28 lg:py-36" style={{ background: "hsl(215 28% 8%)" }}>
          <div className="section-container">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[hsl(var(--hero-text))] mb-6">
                {product.stabilitySection.title}
              </h2>
              {product.stabilitySection.intro.split('\n').map((line) => (
                <p key={line} className="text-[hsl(var(--hero-text-muted))] leading-relaxed text-lg mb-2">{line}</p>
              ))}
              {product.stabilitySection.points.length > 0 && (
                <ul className="mt-8 space-y-4">
                  {product.stabilitySection.points.map((point) => (
                    <li key={point} className="flex items-start gap-4">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-[hsl(var(--hero-text))] leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* SYSTEM CONNECTION */}
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

      {/* FINAL CTA */}
      <section className="py-32 lg:py-40 hero-gradient">
        <div className="section-container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[hsl(var(--hero-text))] mb-4 leading-[1.1]">
              {product.finalHeadline}
            </h2>
            {product.finalSubtext && (
              <p className="text-lg text-[hsl(var(--hero-text-muted))] mb-10 leading-relaxed max-w-lg mx-auto">
                {product.finalSubtext}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button size="lg" asChild>
                <Link to="/contact">
                  {product.primaryCta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="heroOutline" asChild>
                <Link to="/pricing">{product.secondaryCta}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
