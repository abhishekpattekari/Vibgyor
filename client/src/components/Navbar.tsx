import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  initialScrolled?: boolean;
}

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({ initialScrolled = false }: NavbarProps) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(initialScrolled);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link href="/" className="brand" aria-label="Vibgyor Print N Pack home">
        <img
          src="/images/logo.png"
          alt="Vibgyor Print N Pack logo"
          className="brand-mark"
        />
        <span className="brand-type">
          <strong>Vibgyor</strong>
          <small>PRINT N PACK</small>
        </span>
      </Link>

      <nav
        className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`}
        aria-label="Primary navigation"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = location === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link-btn ${isActive ? "is-active" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link href="/contact" className="header-cta">
        Request a quote <ArrowUpRight size={16} />
      </Link>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((val) => !val)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}
