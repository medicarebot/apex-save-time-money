import { Link } from "react-router-dom";
import logoLight from "@/assets/logo-light.png";

const footerNavigation = {
  product: [
    { name: "Customer Chat & Sales", href: "/product/chat" },
    { name: "Smart Scheduling", href: "/product/scheduling" },
    { name: "Operations & Tasks", href: "/product/operations" },
    { name: "Growth Pack", href: "/product/growth" },
    { name: "Digital Board", href: "/product/digital-board" },
  ],
  solutions: [
    { name: "Salons & Spas", href: "/solutions/salons" },
    { name: "Clinics & Healthcare", href: "/solutions/healthcare" },
    { name: "Real Estate", href: "/solutions/real-estate" },
    { name: "Service Businesses", href: "/solutions/services" },
  ],
  company: [
    { name: "Pricing", href: "/pricing" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="section-container py-16 lg:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoLight} alt="APEX RoboTech" className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-background/60 max-w-xs leading-relaxed">
              The AI platform that handles customer conversations, bookings, and operations—so your team can focus on growth.
            </p>
            <p className="text-xs text-background/40 mt-2">
              APEX AI agents support your team but do not replace professional judgment. For medical or emergency decisions, always consult qualified staff.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-background">Product</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-background/60 hover:text-background transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-background">Solutions</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-background/60 hover:text-background transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-background">Company</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-background/60 hover:text-background transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold text-background">Legal</h3>
                <ul role="list" className="mt-4 space-y-3">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm text-background/60 hover:text-background transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            &copy; {new Date().getFullYear()} APEX RoboTech. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-background/40">
            <span>SOC 2 Type II</span>
            <span>HIPAA Ready</span>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
