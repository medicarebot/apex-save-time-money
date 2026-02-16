import { useParams, Navigate, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Check,
  AlertTriangle,
  Target,
  GitBranch,
  Users,
  BarChart3,
  Rocket,
} from "lucide-react";
import {
  industries,
  globalSubheadline,
  goLiveSteps,
} from "@/data/industryData";

const stepIcons = [GitBranch, Target, Users, Rocket];

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return <Navigate to="/" replace />;
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden py-20 lg:py-28">
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              {industry.eyebrow}
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              {industry.headline}
            </h1>
            <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
              {globalSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="hero" asChild className="group">
                <Link to="/pricing">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="heroOutline" asChild>
                <Link to="/contact">
                  <Play className="mr-2 h-4 w-4" />
                  Book a Demo
                </Link>
              </Button>
            </div>

            {/* Micro bullets */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {["No setup fees", "No credit card required", "Human handover built-in"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/70">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
          <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full opacity-50" />
        </div>
      </section>

      {/* The operational leak */}
      <section className="py-16 lg:py-24 enterprise-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                The operational leak
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Where inquiries fall through the cracks
            </h2>
            <ul className="space-y-4">
              {industry.operationalLeak.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-white/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What structured looks like */}
      <section className="py-16 lg:py-24" style={{ background: "hsl(215 28% 7%)" }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                What structured looks like
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              From scattered to systematic
            </h2>
            <ul className="space-y-4">
              {industry.structured.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-white/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Common workflows */}
      <section className="py-16 lg:py-24 enterprise-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <GitBranch className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Common workflows
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
              How it works in practice
            </h2>
            <div className="space-y-6">
              {industry.workflows.map((wf, idx) => (
                <div
                  key={wf.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      {idx + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {wf.title}
                    </h3>
                  </div>
                  <p className="text-white/60 leading-relaxed pl-10">
                    {wf.steps}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What your team gets */}
      <section className="py-16 lg:py-24" style={{ background: "hsl(215 28% 7%)" }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                What your team gets
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Structured handover, full visibility
            </h2>
            <ul className="space-y-4">
              {industry.teamGets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-white/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What to measure */}
      <section className="py-16 lg:py-24 enterprise-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <BarChart3 className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                What to measure
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              KPIs that matter
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {industry.kpis.map((kpi) => (
                <div
                  key={kpi}
                  className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl"
                >
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-white">{kpi}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Go live */}
      <section className="py-16 lg:py-24" style={{ background: "hsl(215 28% 7%)" }}>
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                Go live
              </p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
              Four steps to operational
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {goLiveSteps.map((step, idx) => {
                const Icon = stepIcons[idx];
                return (
                  <div
                    key={step}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary">
                        Step {idx + 1}
                      </span>
                      <p className="text-white font-medium mt-1">{step}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 enterprise-section">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to structure your operations?
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              See how APEX works for {industry.eyebrow.toLowerCase()}. Start a free trial or book a walkthrough with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" variant="hero" asChild className="group">
                <Link to="/pricing">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="heroOutline" asChild>
                <Link to="/contact">
                  <Play className="mr-2 h-4 w-4" />
                  Book a Demo
                </Link>
              </Button>
            </div>

            {/* Footer note */}
            <p className="text-xs text-white/40 mt-8">
              {industry.footerNote}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndustryDetail;
