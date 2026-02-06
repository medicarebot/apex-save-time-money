import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  MessageSquare, 
  Bot, 
  Crown,
  Globe,
  Mail,
  Calendar,
  Instagram,
  Smartphone
} from "lucide-react";

const channelAgents = [
  { name: "Website Chat", icon: Globe, price: "49,990 Ft" },
  { name: "WhatsApp", icon: Smartphone, price: "59,990 Ft" },
  { name: "Instagram DM", icon: Instagram, price: "59,990 Ft" },
  { name: "Email Agent", icon: Mail, price: "69,990 Ft" },
  { name: "Booking Agent", icon: Calendar, price: "9,990 Ft" },
];

export function ModulesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Three layers. One platform.
          </h2>
          <p className="text-lg text-muted-foreground">
            From customer-facing agents to executive intelligence—APEX grows with you.
          </p>
        </div>

        {/* Layer 1: Self-Service Agents */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Layer 1: AI Agents</h3>
              <p className="text-sm text-muted-foreground">Self-service • No setup fees • From 49,990 Ft/Mo</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {channelAgents.map((agent) => (
              <div 
                key={agent.name}
                className="bg-card border border-border rounded-xl p-4 text-center hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mx-auto mb-3">
                  <agent.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium text-sm mb-1">{agent.name}</p>
                <p className="text-xs text-muted-foreground">from {agent.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Link 
              to="/pricing" 
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
            >
              See all channels & pricing
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Layer 2: Master Bot */}
        <div className="mb-12">
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">Layer 2: Master Bot</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">Required Core</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    The central intelligence that coordinates all agents, maintains memory across every conversation, 
                    and ensures context-aware responses. Every interaction updates your customer profiles automatically.
                  </p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <li className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Orchestration & memory
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Cross-channel context
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Human handoff
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:text-right flex-shrink-0">
                <p className="text-2xl font-bold">from 39,990 Ft</p>
                <p className="text-xs text-muted-foreground">+ VAT / month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 3: Executive Command */}
        <div className="mb-12">
          <div className="enterprise-section rounded-2xl p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg text-white">Layer 3: Executive Command</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/70">Enterprise</span>
                  </div>
                  <p className="text-white/60 text-sm mb-3">
                    Strategic AI for leadership teams. Digital CEO, CFO, COO advisors that monitor operations, 
                    detect inefficiencies, analyze patterns, and support board-level decision-making.
                  </p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/50">
                    <li className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Executive insights
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Company-wide visibility
                    </li>
                    <li className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Decision support AI
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Button variant="heroOutline" asChild className="border-white/20 text-white hover:bg-white/10">
                  <Link to="/contact">
                    Request Executive Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Credits explainer */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted mb-4">
            <span className="text-sm text-muted-foreground">
              💡 All plans use <strong className="text-foreground">AI Credits</strong>—pay only for what the AI does
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Credits fuel AI conversations, responses, and tasks. Start with included credits, add more as you grow.
          </p>
        </div>
      </div>
    </section>
  );
}
