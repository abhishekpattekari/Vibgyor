import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Link } from "wouter";
import { ArrowUpRight, Check, Download, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { downloadBrochure } from "@/lib/downloadBrochure";

const PRODUCTS = [
  {
    id: "printed",
    index: "01",
    title: "Printed Laminated Rolls",
    badge: "Rotogravure up to 8 Colours",
    subtitle: "High-speed rotogravure printed rolls for continuous FFS packaging lines",
    image: "/images/printed-rolls.jpg",
    description:
      "Engineered for high-volume automated form-fill-seal (FFS) lines. We print on flexible web substrates with electronic register control, razor-sharp micro-dot fidelity, and specialized heat-resistant lacquers.",
    features: [
      "Up to 8-colour rotogravure printing capability",
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

const PACKET_GALLERY = [
  {
    title: "Biscuits & Cookies Packets",
    category: "Confectionery",
    image: "/images/biscuits-packaging.jpg",
    desc: "Crisp-lock moisture barrier flow-wraps and stand-up pouches with transparent preview windows.",
  },
  {
    title: "Frozen Sweet Corn Pouches",
    category: "Frozen Foods",
    image: "/images/frozen-sweetcorn.jpg",
    desc: "Sub-zero cold resistance down to -40°C with frost proofing and high puncture resistance.",
  },
  {
    title: "Frozen Green Peas Pouches",
    category: "Frozen Foods",
    image: "/images/frozen-greenpeas.jpg",
    desc: "Drop-tested freezer grade co-extruded barrier locking in natural pea freshness.",
  },
  {
    title: "Potato Chips & Snack Packs",
    category: "Snack Foods",
    image: "/images/potato-chips.jpg",
    desc: "High-barrier metallic foil with nitrogen flushing integrity for maximum crunch.",
  },
  {
    title: "Chocolates & Premium Confectionery",
    category: "Confectionery",
    image: "/images/chocolates-packaging.jpg",
    desc: "Cocoa fat and aroma protection barrier with metallic and matte foil finish.",
  },
  {
    title: "Chakki Fresh Atta 5kg Pouches",
    category: "Flour & Staples",
    image: "/images/atta-packaging.jpg",
    desc: "Heavy-gauge load-bearing multi-layer laminates with ergonomic D-punch handle.",
  },
  {
    title: "Indian Dals & Pulses Pouches",
    category: "Pulses & Grains",
    image: "/images/dal-pulses-packaging.jpg",
    desc: "Resealable zipper stand-up pouches with clear transparent viewing window.",
  },
  {
    title: "Artisan Tea & Coffee Aroma Pouches",
    category: "Beverages",
    image: "/images/tea-coffee-packaging.jpg",
    desc: "Oxygen-barrier laminates equipped with one-way aroma degassing valve.",
  },
  {
    title: "Personal Care & Medical Barrier Packs",
    category: "Hygienic & Medical",
    image: "/images/medical-personal-care.jpg",
    desc: "Liquid-tight spouted refill pouches and sterile medical barrier packaging.",
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
              <span>Product Catalogue & Range</span>
            </div>
            <h1>
              One Material Language. <em>Many Pack Formats.</em>
            </h1>
            <p className="page-hero-sub">
              Explore our full spectrum of rotogravure printed rolls up to 8 colours, plain barrier webs, and customized flexible pouches engineered for your filling line.
            </p>
            <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button onClick={downloadBrochure} className="button button-primary">
                <Download size={16} /> Download Brochure PDF
              </button>
              <Link href="/contact" className="button button-secondary">
                Request Specifications <ArrowUpRight size={16} />
              </Link>
            </div>
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
          <p className="lead-text" style={{ maxWidth: "780px", marginBottom: "20px" }}>
            Explore our complete product formats below. All three product lines are engineered in-house for seamless high-speed filling line runnability, shelf appeal, and maximum barrier protection.
          </p>


          {/* 3 Products In Line (Scroll Stream) */}
          <div className="products-stream-container">
            {PRODUCTS.map((prod) => (
              <div key={prod.id} id={`format-${prod.index}`} className="product-showcase-box product-stream-item">
                <div className="showcase-visual">
                  <img src={prod.image} alt={prod.title} loading="lazy" />
                  <div className="showcase-badge">{prod.badge}</div>
                </div>

                <div className="showcase-details">
                  <span className="showcase-kicker">Format {prod.index} / 03</span>
                  <h3>{prod.title}</h3>
                  <p className="showcase-subtitle">{prod.subtitle}</p>
                  <p className="showcase-desc">{prod.description}</p>

                  <div className="showcase-features">
                    <h4>Key Capabilities & Highlights</h4>
                    <ul>
                      {prod.features.map((feat, idx) => (
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
                      <span>{prod.applications}</span>
                    </div>
                    <div>
                      <strong>Available Laminate Structures:</strong>
                      <span>{prod.substrates}</span>
                    </div>
                  </div>

                  <div className="showcase-actions">
                    <Link href="/contact" className="button button-primary">
                      Request Specifications & Quote <ArrowUpRight size={16} />
                    </Link>
                    <button onClick={downloadBrochure} className="button button-secondary">
                      <Download size={16} /> Download Brochure PDF
                    </button>
                    <a
                      href={`https://wa.me/917558381231?text=Hello%20Vibgyor%20Print%20N%20Pack%2C%20I%20am%20interested%20in%20Format%20${prod.index}%20-%20${encodeURIComponent(prod.title)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-whatsapp"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Real Packets & Pouches Showcase Gallery */}
        <section className="section-pad dark-surface" id="packets-showcase">
          <div className="page-width">
            <div className="section-kicker light">
              <span>02</span>
              <div />
              <span>Packets & Pouches In Practice</span>
            </div>
            <div className="markets-title-row">
              <div>
                <h2 className="section-title light">
                  Packaging Categories: <em>Real-World Applications</em>
                </h2>
                <p className="section-sub light" style={{ color: "rgba(255,255,255,0.75)" }}>
                  From nitrogen-flushed chips and frozen foods to atta, pulses, confectionery, and medical pouches.
                </p>
              </div>
              <button onClick={downloadBrochure} className="button button-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
                <Download size={16} /> Download Complete Catalog PDF
              </button>
            </div>

            <div className="packet-cards-grid">
              {PACKET_GALLERY.map((pkt, idx) => (
                <div key={idx} className="packet-item-card">
                  <div className="packet-img-box">
                    <img src={pkt.image} alt={pkt.title} loading="lazy" />
                    <span className="packet-cat-tag">{pkt.category}</span>
                  </div>
                  <div className="packet-body">
                    <h4>{pkt.title}</h4>
                    <p>{pkt.desc}</p>
                    <Link href="/contact" className="packet-action-link">
                      Order / Sample Enquire <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Substrate Library */}
        <section className="section-pad surface-tinted" id="substrates">
          <div className="page-width">
            <div className="section-kicker">
              <span>03</span>
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
