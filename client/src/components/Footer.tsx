import { Link } from "wouter";
import { ArrowUpRight, MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="page-width footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand Info */}
          <div className="footer-col footer-col-brand">
            <Link href="/" className="brand footer-brand" aria-label="Vibgyor Print N Pack home">
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
            <p className="footer-tagline">
              Flexible laminated packaging solutions engineered for performance, shelf impact, and line runnability.
            </p>
            <div className="footer-meta-badge">
              <span>Rotogravure up to 9 Colours</span>
              <span>•</span>
              <span>MIDC Shingave Tukai</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="footer-col footer-col-nav">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-link-list">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products & Formats</Link></li>
              <li><Link href="/capabilities">Plant Capabilities</Link></li>
              <li><Link href="/industries">Markets & Industries</Link></li>
              <li><Link href="/quality">Quality & Assurance</Link></li>
              <li><Link href="/gallery">Plant Gallery</Link></li>
              <li><Link href="/contact">Contact & RFQ</Link></li>
            </ul>
          </div>

          {/* Col 3: Products */}
          <div className="footer-col footer-col-products">
            <h4 className="footer-heading">Our Range</h4>
            <ul className="footer-link-list">
              <li><Link href="/products#printed">Printed Laminated Rolls</Link></li>
              <li><Link href="/products#plain">Plain & Metallic Rolls</Link></li>
              <li><Link href="/products#pouches">Stand-Up Zipper Pouches</Link></li>
              <li><Link href="/products#pouches">Three-Side Seal Pouches</Link></li>
              <li><Link href="/products#substrates">Barrier Substrate Films</Link></li>
              <li><Link href="/capabilities#printing">Gravure Cylinder Printing</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-heading">Manufacturing Plant</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-icon" />
              <span>
                Plot No. B-26/1, MIDC, Shingave Tukai, Tal. Newasa, Dist. Ahmednagar – 414607, Maharashtra, India
              </span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} className="footer-icon" />
              <a href="tel:+917558381231">+91 75583 81231</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} className="footer-icon" />
              <a href="mailto:vibgyorprintnpack@gmail.com">vibgyorprintnpack@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <MessageSquare size={16} className="footer-icon" />
              <a href="https://wa.me/917558381231" target="_blank" rel="noreferrer">
                WhatsApp Business: +91 75583 81231
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-row">
          <span>© {new Date().getFullYear()} Vibgyor Print N Pack. All rights reserved.</span>
          <span className="footer-origin">Printed • Laminated • Converted in India</span>
          <button onClick={scrollToTop} className="footer-back-to-top">
            Back to top <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
