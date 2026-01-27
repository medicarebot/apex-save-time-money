import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We replaced our receptionist with APEX scheduling. Same quality bookings, a fraction of the cost.",
    author: "Dr. Anna Kovács",
    role: "Dental Clinic Owner",
  },
  {
    quote: "Our stylists used to spend hours on the phone. Now they focus on clients while APEX handles bookings.",
    author: "Márk Tóth",
    role: "Salon Director",
  },
];

export function TrustSection() {
  return (
    <section className="py-28 lg:py-36 bg-muted/30">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Results that matter
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Real savings, real businesses
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 relative"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-8 right-8" />
              <p className="text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust metrics */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground">500+</p>
              <p className="text-muted-foreground mt-2">Businesses using APEX</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground">2M+</p>
              <p className="text-muted-foreground mt-2">Customer conversations</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground">150K+</p>
              <p className="text-muted-foreground mt-2">Hours saved monthly</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground">98%</p>
              <p className="text-muted-foreground mt-2">Customer satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
