import { AIChatWidget } from "./AIChatWidget";

export function ChatSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30 relative">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Talk to APEX AI
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ask anything about automating your business. Get instant answers.
          </p>
        </div>
        
        <div className="flex justify-center">
          <AIChatWidget />
        </div>
      </div>
    </section>
  );
}
