import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { downloadBrochure } from "@/lib/downloadBrochure";

interface NavbarProps {
  initialScrolled?: boolean;
}

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Our Markets", href: "/markets" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Quality", href: "/quality" },
  { label: "About", href: "/about" },
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
      {/* Brand / Logo */}
      <Link href="/" className="brand" aria-label="Vibgyor Print N Pack home">
        <img
          src="/images/logo.png"
          alt="Vibgyor Print N Pack logo"
          className="brand-mark"
        />
        <span className="brand-type">
          <strong className="brand-title">Vibgyor Print N Pack</strong>
        </span>
      </Link>

      {/* Desktop & Mobile Navigation */}
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

        {/* Mobile-only action buttons inside menu */}
        <div className="mobile-menu-actions">
          <button
            onClick={downloadBrochure}
            className="header-brochure-btn mobile-brochure"
          >
            <Download size={15} /> Download Brochure
          </button>
          <Link href="/contact" className="header-cta mobile-cta">
            Request a quote <ArrowUpRight size={16} />
          </Link>
        </div>
      </nav>

      {/* Header CTA Buttons */}
      <div className="header-actions-group">
        <button
          onClick={downloadBrochure}
          className="header-brochure-btn"
          title="Download Official Vibgyor Brochure PDF"
        >
          <Download size={15} />
          <span>Download Brochure</span>
        </button>

        <Link href="/contact" className="header-cta">
          Request a quote <ArrowUpRight size={16} />
        </Link>
      </div>

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
