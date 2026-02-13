import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import logoLight from "@/assets/logo-light.png";

const productItems = [
  { name: "Communication Infrastructure", href: "/product/communication-infrastructure", description: "Structured communication across every channel" },
  { name: "Revenue Capture", href: "/product/revenue-capture", description: "Automated scheduling that protects revenue" },
  { name: "Operational Automation", href: "/product/operational-automation", description: "AI coordination for internal workflows" },
  { name: "Reputation & Retention", href: "/product/reputation-retention", description: "Systemized reputation and retention management" },
  { name: "Executive Intelligence", href: "/product/executive-intelligence", description: "Real-time operational visibility for leadership", enterprise: true },
];

const industryItems = [
  { name: "Private Clinics & Medical Centers", href: "/solutions/private-clinics" },
  { name: "Aesthetic & Cosmetic Clinics", href: "/solutions/aesthetic-clinics" },
  { name: "Real Estate Agencies", href: "/solutions/real-estate" },
  { name: "Legal & Law Firms", href: "/solutions/legal" },
  { name: "Accounting & Tax Firms", href: "/solutions/accounting" },
  { name: "Automotive Dealerships", href: "/solutions/automotive" },
  { name: "Private Education & Training", href: "/solutions/education" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(215,28%,8%)]/90 backdrop-blur-lg border-b border-[hsl(215,20%,16%)]">
      <nav className="section-container" aria-label="Global">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <img src={logoLight} alt="APEX RoboTech" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Product dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link-dark bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-gray-300 hover:text-white">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4">
                      {productItems.map((item, index) => (
                        <li key={item.name}>
                          {item.enterprise && index > 0 && (
                            <div className="border-t border-border/50 my-1" />
                          )}
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="flex items-center gap-2">
                                <div className="text-sm font-medium leading-none">{item.name}</div>
                                {item.enterprise && (
                                  <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded text-primary" style={{ background: "hsl(var(--primary) / 0.1)" }}>
                                    Enterprise
                                  </span>
                                )}
                              </div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Solutions dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link-dark bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-gray-300 hover:text-white">
                    Industries
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-1 p-4">
                      {industryItems.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm font-medium"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Enterprise */}
                <NavigationMenuItem>
                  <Link
                    to="/product/executive-intelligence"
                    className={`px-4 py-2 text-sm font-medium transition-colors text-gray-300 hover:text-white ${isActive("/product/executive-intelligence") ? "text-white" : ""}`}
                  >
                    Enterprise
                  </Link>
                </NavigationMenuItem>

                {/* Pricing */}
                <NavigationMenuItem>
                  <Link
                    to="/pricing"
                    className={`px-4 py-2 text-sm font-medium transition-colors text-gray-300 hover:text-white ${isActive("/pricing") ? "text-white" : ""}`}
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
            <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white hover:bg-white/10" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-[hsl(187,85%,45%)] to-[hsl(187,85%,55%)] text-[hsl(215,28%,8%)] font-semibold shadow-md shadow-[hsl(187,85%,48%)]/20 hover:brightness-110 transition-all" asChild>
              <Link to="/pricing">Start Free Trial</Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[hsl(215,20%,16%)]">
            <div className="space-y-1">
              {/* Product section */}
              <div className="px-3 py-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Product</p>
                {productItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Solutions section */}
              <div className="px-3 py-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Industries</p>
                {industryItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-white/10"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/product/executive-intelligence"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive("/product/executive-intelligence")
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:bg-white/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Enterprise
              </Link>
              <Link
                to="/pricing"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive("/pricing")
                    ? "bg-white/10 text-white"
                    : "text-gray-300 hover:bg-white/10"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <div className="pt-4 space-y-2 px-3">
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-white/10" asChild>
                  <Link to="/login">Log in</Link>
                </Button>
                <Button className="w-full bg-gradient-to-r from-[hsl(187,85%,45%)] to-[hsl(187,85%,55%)] text-[hsl(215,28%,8%)] font-semibold" asChild>
                  <Link to="/pricing">Start Free Trial</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
