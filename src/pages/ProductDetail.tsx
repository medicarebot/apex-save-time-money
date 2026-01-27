import { Link, useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Calendar, MessageSquare, ClipboardCheck, Rocket, Users } from "lucide-react";

const productData: Record<string, {
  icon: React.ElementType;
  name: string;
  tagline: string;
  description: string;
  features: { title: string; description: string }[];
  benefits: string[];
  price: string;
  priceNote: string;
  color: string;
}> = {
  scheduling: {
    icon: Calendar,
    name: "Smart Scheduling",
    tagline: "AI-powered appointment booking",
    description: "Let customers book appointments 24/7 without phone calls. AI understands your services, manages availability, and sends automatic reminders.",
    features: [
      { title: "Smart Duration Estimation", description: "AI learns how long each service takes and schedules accordingly." },
      { title: "Calendar Sync", description: "Integrates with Google Calendar, Outlook, and more." },
      { title: "Automatic Reminders", description: "Reduce no-shows with SMS, email, and WhatsApp reminders." },
      { title: "Online Booking Page", description: "Beautiful, branded booking page for your customers." },
      { title: "Buffer Time", description: "Automatically add travel or prep time between appointments." },
      { title: "Multi-Staff Support", description: "Manage schedules for your entire team." },
    ],
    benefits: [
      "24/7 booking without staff",
      "80% reduction in no-shows",
      "Zero double-bookings",
      "More time for actual work",
    ],
    price: "12,990 Ft",
    priceNote: "+ VAT / user / month",
    color: "bg-blue-50 text-blue-600",
  },
  chat: {
    icon: MessageSquare,
    name: "Customer Chat & Sales",
    tagline: "24/7 AI-powered customer support",
    description: "Never leave a customer waiting. AI handles inquiries across web, WhatsApp, Messenger, and email — with seamless human handover when needed.",
    features: [
      { title: "Multi-Channel Support", description: "Web chat, WhatsApp, Messenger, and email in one dashboard." },
      { title: "AI-Powered Responses", description: "Instant, accurate answers based on your business knowledge." },
      { title: "Lead Collection", description: "Capture contact info and qualify leads automatically." },
      { title: "Human Handover", description: "AI escalates complex issues to your team seamlessly." },
      { title: "Conversation Analytics", description: "Understand what customers ask and how AI performs." },
      { title: "Custom Training", description: "Train AI on your products, services, and policies." },
    ],
    benefits: [
      "Instant responses 24/7",
      "60% fewer support tickets",
      "Higher customer satisfaction",
      "More leads captured",
    ],
    price: "From 49,990 Ft",
    priceNote: "+ VAT / month",
    color: "bg-teal-50 text-teal-600",
  },
  operations: {
    icon: ClipboardCheck,
    name: "Operations & Tasks",
    tagline: "Automate your internal workflows",
    description: "Stop using spreadsheets and sticky notes. Automate task assignment, track completion, and keep your team aligned.",
    features: [
      { title: "Task Automation", description: "Create tasks automatically based on triggers and events." },
      { title: "Team Assignment", description: "Assign work to the right staff member automatically." },
      { title: "Progress Tracking", description: "See what's done, what's pending, and what's overdue." },
      { title: "Deadline Reminders", description: "Never miss a deadline with automatic notifications." },
      { title: "Workflow Templates", description: "Create reusable workflows for common processes." },
      { title: "Integration", description: "Connect with your existing tools and calendars." },
    ],
    benefits: [
      "No more forgotten tasks",
      "Clear accountability",
      "Faster completion",
      "Less management overhead",
    ],
    price: "Contact us",
    priceNote: "for pricing",
    color: "bg-amber-50 text-amber-600",
  },
  growth: {
    icon: Rocket,
    name: "Growth Pack",
    tagline: "Grow without hiring",
    description: "Turn happy customers into promoters. Automate affiliate management and Google review collection to bring in more business.",
    features: [
      { title: "Affiliate Management", description: "Create and manage an affiliate program easily." },
      { title: "Commission Tracking", description: "Automatic tracking and payout calculations." },
      { title: "Referral Links", description: "Generate unique links for each affiliate." },
      { title: "Review Automation", description: "Request Google reviews at the perfect moment." },
      { title: "Performance Insights", description: "See which channels bring the best customers." },
      { title: "Campaign Management", description: "Run targeted growth campaigns." },
    ],
    benefits: [
      "More customers from referrals",
      "Higher Google rankings",
      "Lower acquisition costs",
      "Automated word-of-mouth",
    ],
    price: "9,990 – 19,990 Ft",
    priceNote: "+ VAT / month",
    color: "bg-rose-50 text-rose-600",
  },
  "digital-board": {
    icon: Users,
    name: "Digital Board",
    tagline: "AI advisors for leadership",
    description: "Enterprise-grade AI assistants that support C-level decision making with data-driven insights and strategic recommendations.",
    features: [
      { title: "AI CEO Advisor", description: "Strategic insights and business performance analysis." },
      { title: "AI CFO Advisor", description: "Financial analysis and forecasting support." },
      { title: "AI COO Advisor", description: "Operational efficiency and process optimization." },
      { title: "Executive Dashboard", description: "Real-time visibility across your organization." },
      { title: "Decision Support", description: "Data-driven recommendations for key decisions." },
      { title: "Priority Support", description: "Dedicated account manager and support team." },
    ],
    benefits: [
      "Faster, better decisions",
      "360° business visibility",
      "Proactive insights",
      "Enterprise-grade security",
    ],
    price: "Custom",
    priceNote: "pricing",
    color: "bg-purple-50 text-purple-600",
  },
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return <Navigate to="/product" replace />;
  }

  const Icon = product.icon;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <Link 
              to="/product" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
            >
              ← Back to Products
            </Link>
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${product.color}`}>
              <Icon className="h-8 w-8" />
            </div>
            <p className="text-primary font-medium mb-2">{product.tagline}</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              {product.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/pricing">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Talk to Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <h2 className="text-2xl font-bold mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature) => (
              <div key={feature.title} className="bg-card border border-border rounded-xl p-6">
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose {product.name}</h2>
            <ul className="space-y-4">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 bg-card border border-border rounded-xl p-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-16 lg:py-20">
        <div className="section-container">
          <div className="max-w-xl mx-auto bg-card border border-border rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
            <p className="text-3xl font-bold mb-1">{product.price}</p>
            <p className="text-sm text-muted-foreground mb-6">{product.priceNote}</p>
            <Button size="lg" className="w-full" asChild>
              <Link to="/pricing">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
