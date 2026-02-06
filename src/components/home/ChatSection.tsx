import { AIChatWidget } from "./AIChatWidget";
import { Bot, Sparkles } from "lucide-react";

export function ChatSection() {
  return (
    <section id="chat-section" className="py-16 lg:py-24 enterprise-section relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 mb-6">
            <Bot className="h-4 w-4 text-primary" />
            <span className="text-sm text-white/80">Experience AI in action</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight">
            Talk to APEX AI
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Ask anything about automating your business. Get instant answers.
          </p>
        </div>
        
        <div className="flex justify-center">
          <AIChatWidget />
        </div>
        
        {/* Trust signal */}
        <div className="flex items-center justify-center gap-2 mt-6 text-white/40 text-sm">
          <Sparkles className="h-4 w-4" />
          <span>Powered by APEX AI • 2,400+ businesses trust us</span>
        </div>
      </div>
    </section>
  );
}
