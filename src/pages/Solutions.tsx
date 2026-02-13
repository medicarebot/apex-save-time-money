import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Sparkles, Building2, Scale, Calculator, Car, GraduationCap } from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    name: "Private Clinics & Medical Centers",
    slug: "private-clinics",
    description: "Reduce administrative load with automated scheduling, patient inquiries, and follow-ups.",
    problem: "Administrative overload takes time away from patient care.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Sparkles,
    name: "Aesthetic & Cosmetic Clinics",
    slug: "aesthetic-clinics",
    description: "Convert consultation inquiries into booked appointments with structured, multi-channel communication.",
    problem: "High-value inquiries go unanswered outside business hours.",
    color: "bg-pink-50 text-pink-600",
  },
  {
    icon: Building2,
    name: "Real Estate Agencies",
    slug: "real-estate",
    description: "Qualify leads automatically and schedule viewings without phone tag.",
    problem: "Too many inquiries, not enough hours to respond to all.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Scale,
    name: "Legal & Law Firms",
    slug: "legal",
    description: "Automate client intake, inquiry routing, and appointment scheduling to focus on billable work.",
    problem: "Repetitive inquiries drain time from high-value legal work.",
    color: "bg-slate-50 text-slate-600",
  },
  {
    icon: Calculator,
    name: "Accounting & Tax Firms",
    slug: "accounting",
    description: "Automate client communication during tax season and beyond.",
    problem: "Repetitive questions drain time from billable work.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Car,
    name: "Automotive Dealerships",
    slug: "automotive",
    description: "Manage test drive bookings, vehicle inquiries, and service appointments automatically.",
    problem: "Slow response times lose high-intent buyers to competitors.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: GraduationCap,
    name: "Private Education & Training",
    slug: "education",
    description: "Handle enrollment inquiries, scheduling, and student communication at scale.",
    problem: "Manual coordination limits enrollment capacity and student experience.",
    color: "bg-orange-50 text-orange-600",
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
              See how organizations like yours use APEX to scale operations, reduce administrative load, and improve response performance.
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
              APEX works for any organization that handles client conversations. Let's talk about your needs.
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
