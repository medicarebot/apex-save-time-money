import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  Check, 
  ArrowRight, 
  Zap, 
  Globe, 
  Mail, 
  Calendar, 
  Instagram, 
  Smartphone,
  Bot,
  Crown,
  MessageSquare
} from "lucide-react";

interface AgentTier {
  name: string;
  icon: React.ElementType;
  price: string;
  priceNote: string;
  description: string;
}

const agents: AgentTier[] = [
  {
    name: "Website Chat",
    icon: Globe,
    price: "49,990 Ft",
    priceNote: "/month",
    description: "24/7 AI chat on your website",
  },
  {
    name: "WhatsApp",
    icon: Smartphone,
    price: "59,990 Ft",
    priceNote: "/month",
    description: "Handle customer messages at scale",
  },
  {
    name: "Instagram DM",
    icon: Instagram,
    price: "59,990 Ft",
    priceNote: "/month",
    description: "Auto-reply and lead capture",
  },
  {
    name: "Email Agent",
    icon: Mail,
    price: "69,990 Ft",
    priceNote: "/month",
    description: "AI-powered email automation",
  },
  {
    name: "Booking Agent",
    icon: Calendar,
    price: "9,990 Ft",
    priceNote: "/month",
    description: "Self-service scheduling",
  },
  {
    name: "Messenger",
    icon: MessageSquare,
    price: "59,990 Ft",
    priceNote: "/month",
    description: "Facebook message automation",
  },
];

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
              Start simple. Scale as you grow.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              No setup fees. No hidden costs. Add agents as you need them.
            </p>
            <p className="text-base text-muted-foreground">
              All prices in Hungarian Forint (HUF) + VAT
            </p>
          </div>
        </div>
      </section>

      {/* Self-Service Agents */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="section-container">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-primary" />
              </div>
              <h2 className="text-lg font-semibold">AI Agents</h2>
            </div>
            <p className="text-muted-foreground">Choose the channels where you need AI support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.name}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <agent.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{agent.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{agent.description}</p>
                    <div>
                      <span className="text-2xl font-bold">{agent.price}</span>
                      <span className="text-sm text-muted-foreground">{agent.priceNote}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              All agents include: No setup fees • Human handover • Analytics dashboard
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Start with any agent
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Master Bot */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-xl">Master Bot</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Required</span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      The central brain that coordinates all agents, maintains conversation memory, 
                      and ensures every customer interaction is context-aware.
                    </p>
                    <ul className="grid grid-cols-2 gap-2">
                      {[
                        "Cross-channel memory",
                        "Orchestration layer",
                        "Human handoff logic",
                        "Customer profiles",
                      ].map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-shrink-0 text-center md:text-right">
                  <div className="mb-2">
                    <span className="text-3xl font-bold">from 39,990 Ft</span>
                    <span className="text-sm text-muted-foreground block mt-1">/month + VAT</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Scales with team size
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Credits */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <div className="border border-border rounded-2xl p-8 md:p-10 text-center bg-card">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-accent rounded-xl mb-4">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-2xl mb-2">AI Credits</h3>
              <p className="text-muted-foreground mb-6">
                Pay only for what the AI does. Credits fuel conversations, responses, and automated tasks.
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-muted rounded-xl p-4 flex justify-between items-center">
                  <span className="text-sm">200 credits</span>
                  <span className="font-semibold">4,990 Ft</span>
                </div>
                <div className="bg-muted rounded-xl p-4 flex justify-between items-center">
                  <span className="text-sm">1,000 credits</span>
                  <span className="font-semibold">19,990 Ft</span>
                </div>
                <div className="bg-muted rounded-xl p-4 flex justify-between items-center">
                  <span className="text-sm">3,000 credits</span>
                  <span className="font-semibold">49,990 Ft</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Most businesses use 500-1,500 credits/month • Volume discounts available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise / Executive Command */}
      <section className="py-16 lg:py-20 enterprise-section">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center border border-white/10">
                    <Crown className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl text-white">Executive Command</h3>
                    <p className="text-xs font-medium text-primary">For enterprise leadership</p>
                  </div>
                </div>
                <p className="text-white/60 mb-6">
                  Strategic AI for leadership teams. Digital executive advisors that monitor operations, 
                  detect patterns humans miss, and support board-level decision-making.
                </p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {[
                    "AI CEO / CFO / COO advisors",
                    "Company-wide visibility",
                    "Executive insights dashboard",
                    "Strategic recommendations",
                    "Decision support AI",
                    "Priority support & SLA",
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/80">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-white/40">
                  Tailored onboarding and pricing based on organization size
                </p>
              </div>
              <div className="flex-shrink-0 text-center md:text-right">
                <Button 
                  variant="hero" 
                  size="lg" 
                  asChild
                >
                  <Link to="/contact">
                    Request Executive Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Contact */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure where to start?</h2>
            <p className="text-muted-foreground mb-8">
              Talk to our AI or our team—we'll help you find the right setup for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Talk to Sales</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Chat with APEX AI
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
