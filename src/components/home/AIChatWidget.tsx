import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Send, 
  Mic, 
  MicOff, 
  Bot, 
  User, 
  Sparkles,
  ArrowRight,
  Volume2
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: "welcome",
    role: "assistant",
    content: "Hi! I'm APEX AI. I can help you understand how automation can work for your business. What industry are you in?",
  },
];

const quickQuestions = [
  "How does APEX work?",
  "What's the pricing?",
  "Book a consultation",
  "I need human support",
];

export function AIChatWidget() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      let response = "";
      
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes("pricing") || lowerMessage.includes("cost") || lowerMessage.includes("price")) {
        response = "Great question! Our self-service AI agents start from **49,990 Ft/month** with no setup fees. You only pay for what you use with our credit system. Would you like me to help you estimate costs for your specific business, or would you prefer to talk to our team?";
      } else if (lowerMessage.includes("salon") || lowerMessage.includes("spa") || lowerMessage.includes("hair")) {
        response = "Salons use APEX for **24/7 booking, automated reminders**, and review collection. Your team stays focused on clients while APEX handles scheduling and follow-ups. Want me to walk you through a typical salon setup?";
      } else if (lowerMessage.includes("clinic") || lowerMessage.includes("doctor") || lowerMessage.includes("health") || lowerMessage.includes("medical")) {
        response = "APEX handles **patient inquiries, appointment scheduling, and follow-ups** with HIPAA-ready infrastructure and human handover when needed. Your staff focuses on care, not admin. Should I explain our healthcare-specific features?";
      } else if (lowerMessage.includes("how") && lowerMessage.includes("work")) {
        response = "APEX deploys AI agents across your communication channels—**website chat, WhatsApp, Instagram, email**—all connected to a central brain that remembers every conversation. Your customers get instant responses 24/7, and your team only handles what truly needs a human. Want to see a demo?";
      } else if (lowerMessage.includes("book") || lowerMessage.includes("consultation") || lowerMessage.includes("demo")) {
        response = "I can help arrange that. Our team is available for a guided walkthrough of APEX tailored to your business. You can **book a consultation directly** through our contact page, or I can answer specific questions here first. What would you prefer?";
      } else if (lowerMessage.includes("human") || lowerMessage.includes("support") || lowerMessage.includes("person") || lowerMessage.includes("agent")) {
        response = "Of course. APEX always includes **human handover** — you're never stuck with AI alone. I'm connecting you to our team now. In the meantime, feel free to ask me anything or visit our contact page to schedule a call directly.";
      } else if (lowerMessage.includes("enterprise") || lowerMessage.includes("large") || lowerMessage.includes("executive")) {
        response = "For enterprise teams, we offer **Executive Command** — a strategic AI layer for leadership with company-wide visibility and decision support. I'd recommend speaking directly with our enterprise team. Shall I arrange that?";
      } else {
        response = "I can help you explore APEX. We work with businesses across industries — salons, clinics, real estate, and service companies. What type of business do you run? That will help me show you the most relevant capabilities.";
      }
      
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: "assistant",
        content: response,
      }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    simulateResponse(input);
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: question,
    };
    
    setMessages(prev => [...prev, userMessage]);
    simulateResponse(question);
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Voice input would be implemented with Web Speech API
    // For now, this is a visual indicator
    if (!isListening) {
      setTimeout(() => setIsListening(false), 3000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      {/* Chat container */}
      <div className="bg-card border border-border rounded-2xl shadow-2xl shadow-foreground/5 overflow-hidden">
        {/* Header */}
        <div className="bg-primary/5 border-b border-border px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm">APEX AI</p>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-xs text-muted-foreground">Online • Ask me anything</span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[280px] overflow-y-auto p-4 space-y-4 bg-background/50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3",
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                message.role === "user" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-primary/10"
              )}>
                {message.role === "user" ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4 text-primary" />
                )}
              </div>
              <div className={cn(
                "max-w-[75%] rounded-2xl px-4 py-2.5 text-sm",
                message.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-muted rounded-bl-md"
              )}>
                <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick questions */}
        {messages.length <= 2 && (
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleQuickQuestion(q)}
                className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input area */}
        <div className="p-4 border-t border-border bg-card">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="pr-12 bg-muted/50 border-0 focus-visible:ring-1"
              />
              <button
                onClick={toggleListening}
                className={cn(
                  "absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-colors",
                  isListening 
                    ? "bg-destructive text-destructive-foreground animate-pulse" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
              </button>
            </div>
            <Button 
              onClick={handleSend} 
              size="icon"
              disabled={!input.trim()}
              className="flex-shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-[10px] text-muted-foreground text-center mt-2">
            You're chatting with AI • Human help available anytime
          </p>
        </div>
      </div>
    </div>
  );
}
