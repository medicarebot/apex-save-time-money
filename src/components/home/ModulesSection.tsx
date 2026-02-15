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
  { name: "Website Chat", icon: Globe, price: "49,990 Ft", subtitle: "" },
  { name: "WhatsApp", icon: Smartphone, price: "59,990 Ft", subtitle: "" },
  { name: "Instagram DM", icon: Instagram, price: "59,990 Ft", subtitle: "" },
  { name: "Email Agent", icon: Mail, price: "69,990 Ft", subtitle: "" },
  { name: "Booking Agent", icon: Calendar, price: "9,990 Ft", subtitle: "Scheduling + reminders (Lite)" },
];

export function ModulesSection() {
  return (
    <section className="py-24 lg:py-32 enterprise-section relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
            Three layers. One platform.
          </h2>
          <p className="text-lg text-white/60">
            From customer-facing agents to executive intelligence—APEX grows with you.
          </p>
        </div>

        {/* Layer 1: Self-Service Agents */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">Layer 1: AI Agents</h3>
              <p className="text-sm text-white/50">Self-service • No setup fees • From 49,990 Ft/Mo</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {channelAgents.map((agent) => (
              <div 
                key={agent.name}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-primary/30 transition-colors group backdrop-blur-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <agent.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-medium text-sm text-white mb-1">{agent.name}</p>
                <p className="text-xs text-white/50">from {agent.price}</p>
                {agent.subtitle && <p className="text-xs text-white/30 mt-0.5">{agent.subtitle}</p>}
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
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg text-white">Layer 2: Master Bot</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Required Core</span>
                  </div>
                  <p className="text-white/50 text-sm mb-3">
                    The central intelligence that coordinates all agents, maintains memory across every conversation, 
                    and ensures context-aware responses. Every interaction updates your customer profiles automatically.
                  </p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/40">
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
                <p className="text-2xl font-bold text-white">from 39,990 Ft</p>
                <p className="text-xs text-white/50">+ VAT / month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 3: Executive Command */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 lg:p-8 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg text-white">Layer 3: Executive Intelligence</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Enterprise</span>
                  </div>
                  <p className="text-white/50 text-sm mb-3">
                    Strategic AI for leadership teams. Digital CEO, CFO, COO advisors that monitor operations, 
                    detect inefficiencies, analyze patterns, and support board-level decision-making.
                  </p>
                  <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-white/40">
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
                <Button variant="heroOutline" asChild className="border-primary/50 text-white hover:bg-primary/10">
                  <Link to="/contact">
                    Request Executive Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Credits explainer - More emphasized */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  AI Credits — Pay only for what the AI does
                </h3>
                <p className="text-white/50">
                  Credits fuel AI conversations, responses, and tasks. Every plan includes credits to get started.
                  Add more as you grow—no hidden fees, no surprises.
                </p>
              </div>
              <Link 
                to="/pricing" 
                className="inline-flex items-center gap-1 text-sm text-primary hover:underline whitespace-nowrap"
              >
                View credit packages
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
