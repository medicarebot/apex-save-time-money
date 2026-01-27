import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const productItems = [
  { name: "Smart Scheduling", href: "/product/scheduling", description: "AI-powered appointment booking" },
  { name: "Customer Chat & Sales", href: "/product/chat", description: "24/7 AI responses across channels" },
  { name: "Operations & Tasks", href: "/product/operations", description: "Automate internal workflows" },
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
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="font-bold text-xl text-foreground">APEX RoboTech</span>
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

                {/* Growth */}
                <NavigationMenuItem>
                  <Link
                    to="/product/growth"
                    className={`nav-link px-4 py-2 ${isActive("/product/growth") ? "nav-link-active" : ""}`}
                  >
                    Growth
                  </Link>
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

                {/* Solutions */}
                <NavigationMenuItem>
                  <Link
                    to="/solutions"
                    className={`nav-link px-4 py-2 ${isActive("/solutions") ? "nav-link-active" : ""}`}
                  >
                    Solutions
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
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Button variant="ghost" asChild>
              <Link to="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/pricing">Start Now</Link>
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
              
              <Link
                to="/product/growth"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive("/product/growth")
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Growth
              </Link>
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
                to="/solutions"
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive("/solutions")
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
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
                  <Link to="/pricing">Start Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
