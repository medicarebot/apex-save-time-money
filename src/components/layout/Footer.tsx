import { Link } from "react-router-dom";

const footerNavigation = {
  product: [
    { name: "Smart Scheduling", href: "/product/scheduling" },
    { name: "Customer Chat & Sales", href: "/product/chat" },
    { name: "Operations & Tasks", href: "/product/operations" },
    { name: "Growth Pack", href: "/product/growth" },
    { name: "Digital Board", href: "/product/digital-board" },
  ],
  solutions: [
    { name: "Hairdressers & Salons", href: "/solutions/salons" },
    { name: "Clinics & Healthcare", href: "/solutions/healthcare" },
    { name: "E-commerce", href: "/solutions/ecommerce" },
    { name: "Real Estate", href: "/solutions/real-estate" },
    { name: "Service Businesses", href: "/solutions/services" },
    { name: "Accountants", href: "/solutions/accountants" },
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
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-xl text-background">APEX RoboTech</span>
            </div>
            <p className="text-sm text-background/70 max-w-xs">
              Automate customer communication, bookings, and operations. Save real money every month.
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
                        className="text-sm text-background/70 hover:text-background transition-colors"
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
                        className="text-sm text-background/70 hover:text-background transition-colors"
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
                        className="text-sm text-background/70 hover:text-background transition-colors"
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
                        className="text-sm text-background/70 hover:text-background transition-colors"
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
          <p className="text-xs text-background/50">
            &copy; {new Date().getFullYear()} APEX RoboTech. All rights reserved.
          </p>
          <p className="text-xs text-background/50">
            Made for businesses that value their time
          </p>
        </div>
      </div>
    </footer>
  );
}
