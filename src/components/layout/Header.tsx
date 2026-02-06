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
import logoDark from "@/assets/logo-dark.png";

const productItems = [
  { name: "Customer Chat & Sales", href: "/product/chat", description: "AI-powered responses across all channels" },
  { name: "Smart Scheduling", href: "/product/scheduling", description: "24/7 self-service booking" },
  { name: "Operations & Tasks", href: "/product/operations", description: "Automate internal workflows" },
  { name: "Growth Pack", href: "/product/growth", description: "Reviews, referrals, and reputation" },
];

const solutionItems = [
  { name: "Salons & Spas", href: "/solutions/salons" },
  { name: "Clinics & Healthcare", href: "/solutions/healthcare" },
  { name: "Real Estate", href: "/solutions/real-estate" },
  { name: "Service Businesses", href: "/solutions/services" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="section-container" aria-label="Global">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <img src={logoDark} alt="APEX RoboTech" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground"
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
                  <NavigationMenuTrigger className="nav-link bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Product
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4">
                      {productItems.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{item.name}</div>
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
                  <NavigationMenuTrigger className="nav-link bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-4">
                      {solutionItems.map((item) => (
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
                    to="/product/digital-board"
                    className={`nav-link px-4 py-2 ${isActive("/product/digital-board") ? "nav-link-active" : ""}`}
                  >
                    Enterprise
                  </Link>
                </NavigationMenuItem>

                {/* Pricing */}
                <NavigationMenuItem>
                  <Link
                    to="/pricing"
                    className={`nav-link px-4 py-2 ${isActive("/pricing") ? "nav-link-active" : ""}`}
                  >
                    Pricing
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button size="sm" asChild>
              <Link to="/pricing">Start Free Trial</Link>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-1">
              {/* Product section */}
              <div className="px-3 py-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Product</p>
                {productItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Solutions section */}
              <div className="px-3 py-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Solutions</p>
                {solutionItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-secondary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/product/digital-board"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive("/product/digital-board")
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Enterprise
              </Link>
              <Link
                to="/pricing"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive("/pricing")
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              
              <div className="pt-4 space-y-2 px-3">
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/login">Log in</Link>
                </Button>
                <Button className="w-full" asChild>
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
