import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Stethoscope, ShoppingCart, Home, Wrench, Calculator } from "lucide-react";

const industries = [
  {
    icon: Scissors,
    name: "Hairdressers & Salons",
    slug: "salons",
    description: "Stop missing calls. Let customers book 24/7 while you focus on styling.",
    problem: "Missed calls mean missed appointments and lost revenue.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Stethoscope,
    name: "Clinics & Healthcare",
    slug: "healthcare",
    description: "Reduce no-shows with automatic reminders and easy rescheduling.",
    problem: "Administrative overload takes time away from patient care.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: ShoppingCart,
    name: "E-commerce",
    slug: "ecommerce",
    description: "Answer product questions instantly and boost conversion rates.",
    problem: "Customers leave when they can't get quick answers.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Home,
    name: "Real Estate & Rentals",
    slug: "real-estate",
    description: "Qualify leads automatically and schedule viewings without phone tag.",
    problem: "Too many inquiries, not enough hours to respond to all.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Wrench,
    name: "Service Businesses",
    slug: "services",
    description: "From plumbers to cleaners — automate bookings and follow-ups.",
    problem: "Managing schedules manually leads to double-bookings and chaos.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Calculator,
    name: "Accountants",
    slug: "accountants",
    description: "Automate client communication during tax season and beyond.",
    problem: "Repetitive questions drain time from billable work.",
    color: "bg-slate-50 text-slate-600",
  },
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Built for Your Industry
            </h1>
            <p className="text-lg text-muted-foreground">
              See how businesses like yours use APEX to save time, reduce costs, and grow faster.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                to={`/solutions/${industry.slug}`}
                className="group bg-card border border-border rounded-2xl p-8 card-hover"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${industry.color}`}>
                  <industry.icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                  {industry.name}
                </h3>
                <p className="text-muted-foreground mb-4">{industry.description}</p>
                <p className="text-sm text-muted-foreground/80 italic mb-4">
                  Problem: {industry.problem}
                </p>
                <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  See how it works <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-accent">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don't see your industry?
            </h2>
            <p className="text-muted-foreground mb-6">
              APEX works for any business that handles customer conversations. Let's talk about your needs.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
