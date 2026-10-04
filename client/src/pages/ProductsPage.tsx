import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Link } from "wouter";
import { ArrowUpRight, Check, Sparkles, Layers, Box, FileText } from "lucide-react";

const PRODUCTS = [
  {
    id: "printed",
    index: "01",
    title: "Printed Laminated Rolls",
    badge: "Rotogravure up to 9 Colours",
    subtitle: "High-speed rotogravure printed rolls for continuous FFS packaging lines",
    image: "/images/printed-rolls.jpg",
    description:
      "Engineered for high-volume automated form-fill-seal (FFS) lines. We print on flexible web substrates with electronic register control, razor-sharp micro-dot fidelity, and specialized heat-resistant lacquers.",
    features: [
      "Up to 9-colour rotogravure printing capability",
      "Reverse and surface printing options",
      "Uniform web tension and precision slit roll edges",
      "Tuned COF (Coefficient of Friction) for smooth filling speed",
      "Available with gloss, matte, metallic, and registered spot varnishes",
    ],
    applications: "Chips, snacks, dry fruits, biscuits, spices, pulses, confectionery, milk powder, agrochemicals.",
    substrates: "PET / PE, BOPP / Met-BOPP, PET / Met-PET / Poly, Matte BOPP / Met-PET / PE",
  },
  {
    id: "plain",
    index: "02",
    title: "Plain & Metallic Laminated Rolls",
    badge: "High Barrier Substrates",
    subtitle: "Clean, non-printed silver and multi-ply metallic barrier rolls",
    image: "/images/plain-metallic-rolls.jpg",
    description:
      "Precision-laminated plain films and aluminium foil composite rolls for businesses requiring dependable barrier protection, secondary over-wrapping, vacuum packaging, or blank substrate converting.",
    features: [
      "Aluminium foil barrier and metalized PET structures",
      "Exceptional moisture vapor (MVTR) & oxygen (OTR) protection",
      "Puncture-resistant high-tack sealant layers",
      "Slit-to-width precision tolerances (±0.5 mm)",
      "Standard and custom core inner diameters (3-inch / 6-inch)",
    ],
    applications: "Tea, coffee, pharmaceutical sachets, agro seeds, chemical powders, vacuum bricks.",
    substrates: "PET / AL Foil / Poly, Met-PET / Poly, PET / CPP, Poly / Poly laminate",
  },
  {
    id: "pouches",
    index: "03",
    title: "Flexible Packaging Pouches",
    badge: "Ready-to-Fill Formats",
    subtitle: "Stand-up pouches, zipper pouches, three-side seal and customized shapes",
    image: "/images/pouch-formats.jpg",
    description:
      "Custom-converted pre-formed pouches built for shelf prominence and consumer convenience. Finished with resealable press-to-close zippers, easy-tear notches, hanging euro-slots, and rounded corners.",
    features: [
      "Stand-Up Pouches (Doyen & K-seal bottoms) with self-standing base",
      "Resealable press-to-close zipper locks for repeat consumer usage",
      "Three-side-seal & center-seal / pillow pouch configurations",
      "High burst seal strength for leakproof liquid and powder handling",
      "Matte finish, metallic sheen, transparent windows, and kraft paper look",
    ],
    applications: "Gourmet snacks, dry fruits, protein powders, coffee beans, pet foods, detergent powders, liquid refill packs.",
    substrates: "Custom tailored 2-ply, 3-ply, and 4-ply barrier laminate structures",
  },
];

const SUBSTRATES = [
  { name: "BOPP", type: "Biaxially Oriented Polypropylene", barrier: "Moisture & Clarity", role: "Excellent clarity, stiffness, and print surface for snack packaging." },
  { name: "PET", type: "Polyethylene Terephthalate", barrier: "Tension & Thermal Stability", role: "High mechanical strength, thermal resistance for hot seal processes." },
  { name: "MET-PET", type: "Metalized Polyester", barrier: "High Oxygen & Light Barrier", role: "Vibrant metallic luster with strong light and aroma protection." },
  { name: "ALUMINIUM FOIL", type: "Pure Aluminium Foil (7-9 Micron)", barrier: "Absolute Total Barrier", role: "Zero light, oxygen, or moisture penetration for premium shelf life." },
  { name: "CPP", type: "Cast Polypropylene", barrier: "High Seal Strength & Clarity", role: "Low seal initiation temperature, crisp transparent window pouches." },
  { name: "POLY / PE", type: "Polyethylene (LDPE / LLDPE)", barrier: "Sealant & Impact Resistance", role: "Hermetic heat sealing layer with high drop and puncture resistance." },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell">
      <Navbar />

      <main className="page-main">
        {/* Hero */}
        <section className="page-hero-banner" style={{ backgroundImage: `url('/images/printed-rolls.jpg')` }}>
          <div className="page-hero-overlay" />
          <div className="page-width page-hero-content">
            <div className="eyebrow light">
              <span className="eyebrow-rule" />
              <span>Product Catalogue</span>
            </div>
            <h1>
              One Material Language. <em>Many Pack Formats.</em>
            </h1>
            <p className="page-hero-sub">
              Explore our full spectrum of rotogravure printed rolls, plain barrier webs, and pre-formed flexible pouches custom-engineered for your product line.
            </p>
          </div>
        </section>

        {/* Product Format Tabs & Showcase */}
        <section className="section-pad page-width" id="formats">
          <div className="section-kicker">
            <span>01</span>
            <div />
            <span>Product Formats</span>
          </div>
          <h2 className="section-title">Engineered Substrates & Finished Packs</h2>

          {/* Interactive Navigation */}
          <div className="product-tab-buttons">
            {PRODUCTS.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setSelectedProduct(prod)}
                className={`product-nav-btn ${selectedProduct.id === prod.id ? "is-active" : ""}`}
              >
                <span className="prod-btn-index">{prod.index}</span>
                <span className="prod-btn-info">
                  <strong>{prod.title}</strong>
                  <small>{prod.badge}</small>
                </span>
              </button>
            ))}
          </div>

          {/* Detailed Product Card */}
          <div className="product-showcase-box">
            <div className="showcase-visual">
              <img src={selectedProduct.image} alt={selectedProduct.title} />
              <div className="showcase-badge">{selectedProduct.badge}</div>
            </div>

            <div className="showcase-details">
              <span className="showcase-kicker">Format {selectedProduct.index} / 03</span>
              <h3>{selectedProduct.title}</h3>
              <p className="showcase-subtitle">{selectedProduct.subtitle}</p>
              <p className="showcase-desc">{selectedProduct.description}</p>

              <div className="showcase-features">
                <h4>Key Capabilities & Highlights</h4>
                <ul>
                  {selectedProduct.features.map((feat, idx) => (
                    <li key={idx}>
                      <Check size={16} className="check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="showcase-meta">
                <div>
                  <strong>Common Applications:</strong>
                  <span>{selectedProduct.applications}</span>
                </div>
                <div>
                  <strong>Available Laminate Structures:</strong>
                  <span>{selectedProduct.substrates}</span>
                </div>
              </div>

              <div className="showcase-actions">
                <Link href="/contact" className="button button-primary">
                  Request Specifications & Quote <ArrowUpRight size={16} />
                </Link>
                <a href="https://wa.me/917558381231" target="_blank" rel="noreferrer" className="button button-whatsapp">
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Substrate Library */}
        <section className="section-pad surface-tinted" id="substrates">
          <div className="page-width">
            <div className="section-kicker">
              <span>02</span>
              <div />
              <span>Material Science</span>
            </div>
            <h2 className="section-title">The Substrate Library</h2>
            <p className="section-sub">
              Every package is built from calibrated film combinations selected around gas permeability, moisture barrier, optical clarity, seal initiation temperature, and drop impact strength.
            </p>

            <div className="substrates-grid">
              {SUBSTRATES.map((sub, i) => (
                <div key={i} className="substrate-card">
                  <div className="sub-header">
                    <h4>{sub.name}</h4>
                    <span className="sub-badge">{sub.barrier}</span>
                  </div>
                  <strong className="sub-type">{sub.type}</strong>
                  <p className="sub-role">{sub.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
