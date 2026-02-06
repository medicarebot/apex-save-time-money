import { MessageSquare, Calendar, ClipboardList, TrendingUp } from "lucide-react";

const problems = [
  {
    problem: "Your inbox is overflowing",
    solution: "AI handles routine queries instantly",
    icon: MessageSquare,
  },
  {
    problem: "Phone tag kills productivity",
    solution: "Customers self-book online, 24/7",
    icon: Calendar,
  },
  {
    problem: "Follow-ups slip through cracks",
    solution: "Automated reminders keep nothing missed",
    icon: ClipboardList,
  },
  {
    problem: "Growth means more stress",
    solution: "Scale without overloading your team",
    icon: TrendingUp,
  },
];

export function ProblemSolutionSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Your team deserves better
            <br />
            <span className="text-muted-foreground">than endless admin work.</span>
          </h2>
        </div>

        {/* Problem → Solution grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {problems.map((item) => (
            <div
              key={item.problem}
              className="relative bg-card border border-border rounded-2xl p-6 lg:p-8 group hover:border-primary/30 transition-colors"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <item.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Problem */}
              <p className="text-muted-foreground text-sm mb-2 line-through decoration-muted-foreground/40">
                {item.problem}
              </p>

              {/* Solution */}
              <p className="text-lg font-semibold text-foreground">
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
      </div>
    </section>
  );
}
