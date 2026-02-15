import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BarChart3, Users, Lock } from "lucide-react";

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "Enterprise Governance",
    description: "Role-based access, audit-friendly logging, and configurable data retention policies.",
  },
  {
    icon: BarChart3,
    title: "Executive Insights",
    description: "AI-powered intelligence that supports strategic decisions.",
  },
  {
    icon: Users,
    title: "Human Oversight",
    description: "Full visibility, audit trails, and escalation controls at every level.",
  },
  {
    icon: Lock,
    title: "Dedicated Support",
    description: "Named account manager, custom onboarding, and priority SLA.",
  },
];

export function EnterpriseSection() {
  return (
    <section className="py-24 lg:py-32 enterprise-section">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Enterprise
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Built for scale.
              <br />
              <span className="text-white/60">Designed for control.</span>
            </h2>
            <p className="text-lg text-white/60 mb-8 max-w-lg">
              APEX Enterprise gives leadership teams real-time visibility, human-in-the-loop controls, 
              and the governance and security controls that responsible organizations require.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="hero" asChild className="group">
                <Link to="/contact">
                  Request Executive Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {enterpriseFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/[0.07] transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/50">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
