import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    // { label: "About", href: "/#about" },
    // { label: "Community", href: "/#community" },
    // { label: "Gatherings", href: "/#gatherings" },
    // { label: "Blog", href: "/#blog" },
    // { label: "Products", href: "/products" },
  ];

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.substring(1);
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="techKoodaram Logo" className="w-[230px]" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              item.href.startsWith("/#") ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${isActive(item.href) ? "text-accent" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${isActive(item.href) ? "text-accent" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.label}
                </Link>
              )
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://github.com/techkoodaram", "_blank")}
              className="gap-2 font-secondary"
            >
              <Github size={16} />
              GitHub
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.href.startsWith("/#") ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Button
                variant="outline"
                className="mt-2 gap-2"
                onClick={() => window.open("https://github.com/techkoodaram", "_blank")}
              >
                <Github size={16} />
                GitHub
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
