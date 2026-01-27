import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Scissors, Stethoscope, ShoppingCart, Home, Wrench, Calculator } from "lucide-react";

const solutionData: Record<string, {
  icon: React.ElementType;
  name: string;
  headline: string;
  description: string;
  problem: string;
  solutions: string[];
  savings: { label: string; value: string }[];
  color: string;
}> = {
  salons: {
    icon: Scissors,
    name: "Hairdressers & Salons",
    headline: "Never miss another booking",
    description: "Let customers book appointments 24/7 while you focus on what you do best — making clients look amazing.",
    problem: "You're styling hair while the phone rings. Missed calls mean missed bookings and frustrated customers who go elsewhere.",
    solutions: [
      "24/7 online booking without phone calls",
      "Automatic appointment reminders reduce no-shows by 80%",
      "AI answers common questions about services and pricing",
      "Follow-up messages encourage rebooking",
      "Google review requests boost your online reputation",
    ],
    savings: [
      { label: "Hours saved weekly", value: "15+" },
      { label: "Fewer no-shows", value: "80%" },
      { label: "More bookings", value: "2.5x" },
    ],
    color: "bg-pink-50 text-pink-600",
  },
  healthcare: {
    icon: Stethoscope,
    name: "Clinics & Healthcare",
    headline: "More time for patients, less for admin",
    description: "Reduce administrative burden and no-shows while improving patient communication.",
    problem: "Staff spend hours on phone calls, appointment reminders, and answering the same questions. Patients get frustrated with long hold times.",
    solutions: [
      "Patients book and reschedule appointments online",
      "Automatic reminders via SMS, email, and WhatsApp",
      "AI handles FAQs about opening hours, services, and preparation",
      "Human handover for complex medical questions",
      "GDPR-compliant data handling",
    ],
    savings: [
      { label: "Admin hours saved", value: "20+" },
      { label: "Fewer no-shows", value: "75%" },
      { label: "Patient satisfaction", value: "+40%" },
    ],
    color: "bg-blue-50 text-blue-600",
  },
  ecommerce: {
    icon: ShoppingCart,
    name: "E-commerce",
    headline: "Convert browsers into buyers",
    description: "Answer product questions instantly and guide customers to purchase — 24/7.",
    problem: "Customers have questions before buying. If they can't get quick answers, they leave and buy elsewhere.",
    solutions: [
      "Instant answers to product questions",
      "Order status and shipping updates",
      "Returns and exchange assistance",
      "Product recommendations based on preferences",
      "Multi-channel support: web, WhatsApp, Messenger",
    ],
    savings: [
      { label: "Response time", value: "<30s" },
      { label: "Conversion boost", value: "+35%" },
      { label: "Support tickets reduced", value: "60%" },
    ],
    color: "bg-orange-50 text-orange-600",
  },
  "real-estate": {
    icon: Home,
    name: "Real Estate & Rentals",
    headline: "Qualify leads while you sleep",
    description: "Stop playing phone tag. Automate inquiry responses and viewing schedules.",
    problem: "Too many inquiries, not enough time. Hot leads go cold while you're busy with showings.",
    solutions: [
      "Instant response to property inquiries",
      "Automatic lead qualification questions",
      "Self-service viewing scheduling",
      "Property matching based on requirements",
      "Follow-up sequences for nurturing leads",
    ],
    savings: [
      { label: "Lead response time", value: "<2min" },
      { label: "Qualified leads", value: "+50%" },
      { label: "Viewings scheduled", value: "3x" },
    ],
    color: "bg-green-50 text-green-600",
  },
  services: {
    icon: Wrench,
    name: "Service Businesses",
    headline: "From chaos to calendar control",
    description: "Plumbers, cleaners, electricians — automate bookings and never double-book again.",
    problem: "Managing schedules on paper or in your head leads to missed appointments, double bookings, and unhappy customers.",
    solutions: [
      "Customers book available time slots online",
      "Automatic travel time consideration",
      "Job reminders for your team",
      "Customer follow-up for reviews and rebooking",
      "Quote requests handled automatically",
    ],
    savings: [
      { label: "Scheduling time saved", value: "10h/week" },
      { label: "Double bookings", value: "0" },
      { label: "Customer reviews", value: "+200%" },
    ],
    color: "bg-amber-50 text-amber-600",
  },
  accountants: {
    icon: Calculator,
    name: "Accountants",
    headline: "Focus on numbers, not questions",
    description: "Automate repetitive client communication, especially during busy seasons.",
    problem: "Tax season means endless calls about deadlines, documents, and status updates — taking you away from billable work.",
    solutions: [
      "Automatic deadline reminders to clients",
      "Document request and collection automation",
      "Status updates without phone calls",
      "Meeting scheduling for consultations",
      "FAQ handling for common tax questions",
    ],
    savings: [
      { label: "Hours saved in tax season", value: "30+" },
      { label: "Client response rate", value: "+60%" },
      { label: "Fewer missed deadlines", value: "90%" },
    ],
    color: "bg-slate-50 text-slate-600",
  },
};

const SolutionDetail = () => {
  const { industry } = useParams<{ industry: string }>();
  const solution = industry ? solutionData[industry] : null;

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const Icon = solution.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Link 
              to="/solutions" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
            >
              ← Back to Solutions
            </Link>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${solution.color}`}>
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {solution.headline}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {solution.description}
            </p>
            <Button size="lg" asChild>
              <Link to="/pricing">
                See Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
            <p className="text-lg text-muted-foreground bg-muted/50 p-6 rounded-xl border-l-4 border-primary">
              {solution.problem}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">How APEX Helps</h2>
            <ul className="space-y-4">
              {solution.solutions.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Savings */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Expected Results</h2>
            <div className="grid grid-cols-3 gap-6">
              {solution.savings.map((stat) => (
                <div key={stat.label} className="text-center bg-card border border-border rounded-xl p-6">
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-foreground text-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-background">
              Ready to transform your {solution.name.toLowerCase()}?
            </h2>
            <p className="text-background/70 mb-8">
              Join hundreds of businesses already saving time and money with APEX.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/pricing">
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-background/30 text-background hover:bg-background/10" asChild>
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionDetail;
