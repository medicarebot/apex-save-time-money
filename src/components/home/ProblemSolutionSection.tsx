import { MessageSquare, Calendar, Users, Clock, ArrowRight } from "lucide-react";

const problems = [
  {
    problem: "Missed messages = lost revenue",
    solution: "AI responds in seconds, 24/7, on every channel",
    icon: MessageSquare,
  },
  {
    problem: "Phone tag kills your day",
    solution: "Customers self-book—no back-and-forth needed",
    icon: Calendar,
  },
  {
    problem: "Follow-ups fall through cracks",
    solution: "Every customer gets the right message at the right time",
    icon: Clock,
  },
  {
    problem: "Growing means burning out",
    solution: "Scale your capacity without scaling your stress",
    icon: Users,
  },
];

export function ProblemSolutionSection() {
  const scrollToChat = () => {
    const chatSection = document.getElementById('chat-section');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 lg:py-32 enterprise-section relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Sound familiar?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-white">
            You're not short on work.
            <br />
            <span className="text-white/60">You're short on capacity.</span>
          </h2>
        </div>

        {/* Problem → Solution grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="relative bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 group hover:border-primary/30 transition-colors backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
                <item.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Problem */}
              <p className="text-white/40 text-sm mb-2 line-through decoration-white/30">
                {item.problem}
              </p>

              {/* Solution */}
              <p className="text-lg font-semibold text-white">
                {item.solution}
              </p>

              {/* Decorative arrow */}
              <div className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - scrolls to chat section */}
        <div className="text-center mt-12">
          <button 
            onClick={scrollToChat}
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Talk to APEX AI about your business
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
