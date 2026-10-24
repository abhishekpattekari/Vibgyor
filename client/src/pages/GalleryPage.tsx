import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Link } from "wouter";
import { ZoomIn, ZoomOut, X, ArrowUpRight, Download } from "lucide-react";
import { downloadBrochure } from "@/lib/downloadBrochure";

const GALLERY_ITEMS = [
  // Machinery Section
  {
    id: 1,
    category: "Machinery",
    title: "1. Rotogravure Printing Machine (Up to 8 Colours)",
    src: "/images/machine-printing-rotogravure.jpg",
    desc: "State-of-the-art 8-station high-speed rotogravure printing press with touchscreen consoles and automatic registration.",
  },
  {
    id: 2,
    category: "Machinery",
    title: "2. Solventless Lamination Machine",
    src: "/images/machine-lamination-solventless.jpg",
    desc: "Precision solventless laminator combining barrier films, aluminum foils, and polymer sealant webs with zero bubble entrapment.",
  },
  {
    id: 3,
    category: "Machinery",
    title: "3. High-Speed Slitting & Rewinding Machine",
    src: "/images/machine-slitting-rewinding.jpg",
    desc: "Rotary shear slitter with tension taper control, dividing master printed rolls into finished narrow reels within ±0.5 mm.",
  },
  {
    id: 4,
    category: "Machinery",
    title: "4. Automated Pouch Making Machine",
    src: "/images/machine-pouch-making.jpg",
    desc: "Continuous automated pouch converting line fabricating stand-up zipper pouches, 3-side seal, and tear-notch bags.",
  },
  {
    id: 5,
    category: "Factory",
    title: "Small Production Floor Lineup (5-6 Machines)",
    src: "/images/production-floor-shop.jpg",
    desc: "Clean, organized manufacturing bay featuring our compact lineup of 5 to 6 industrial converting machines on pristine epoxy flooring.",
  },

  // Products & Packet Section
  {
    id: 6,
    category: "Products",
    title: "Potato Chips & Snacks Packaging Packets",
    src: "/images/potato-chips.jpg",
    desc: "Nitrogen-flushed glossy foil potato chips pouches engineered for crunch retention, light blackout, and shelf impact.",
  },
  {
    id: 7,
    category: "Products",
    title: "Artisan Biscuits & Cookies Pouches",
    src: "/images/biscuits-packaging.jpg",
    desc: "Moisture-barrier stand-up pouches with clear window display, preserving oven-baked crispness and aroma.",
  },
  {
    id: 8,
    category: "Products",
    title: "Frozen Sweet Corn Puncture-Proof Pouches",
    src: "/images/frozen-sweetcorn.jpg",
    desc: "Sub-zero cold resistant flexible pouches maintaining seal hermeticity at -40°C freezer temperatures.",
  },
  {
    id: 9,
    category: "Products",
    title: "Frozen Green Peas Freshness Pouches",
    src: "/images/frozen-greenpeas.jpg",
    desc: "Specialized freezer-grade co-extruded packaging locking in hydration and vibrant emerald green color.",
  },
  {
    id: 10,
    category: "Products",
    title: "Luxury Chocolate & Confectionery Foil Packets",
    src: "/images/chocolates-packaging.jpg",
    desc: "Low-permeability foil flow-wraps and chocolate truffle pouches guarding against cocoa fat bloom and light.",
  },
  {
    id: 11,
    category: "Products",
    title: "Chakki Fresh Atta 5kg Heavy-Duty Pouches",
    src: "/images/atta-packaging.jpg",
    desc: "Tear-proof heavy-gauge multi-layer flexible packaging with reinforced side gusset and D-punch carry handle.",
  },
  {
    id: 12,
    category: "Products",
    title: "Indian Dals & Pulses Window Stand-Up Pouches",
    src: "/images/dal-pulses-packaging.jpg",
    desc: "Crystal-clear transparent window pouches with resealable zipper for toor dal, moong dal, and whole pulses.",
  },
  {
    id: 13,
    category: "Products",
    title: "Artisan Tea & Coffee Aroma-Shield Pouches",
    src: "/images/tea-coffee-packaging.jpg",
    desc: "Matte-finish multi-layer foil pouches equipped with one-way degassing valves to preserve freshly roasted coffee aroma.",
  },
  {
    id: 14,
    category: "Products",
    title: "Personal Care Spouted & Medical Pouches",
    src: "/images/medical-personal-care.jpg",
    desc: "Liquid refill spouted pouches and sterile medical barrier packets for healthcare and personal hygiene products.",
  },

  // Pouches & Formats
  {
    id: 15,
    category: "Pouches",
    title: "Various Stand-Up Zipper & Specialty Pouches",
    src: "/images/pouch-formats.jpg",
    desc: "Assortment of pre-formed pouch styles: Doyen bottom, K-seal, center-seal pillow, and customized retail formats.",
  },
  {
    id: 16,
    category: "Substrates",
    title: "Printed Laminated Master Rolls",
    src: "/images/printed-rolls.jpg",
    desc: "High-density rotogravure printed rolls on shipping pallets, ready for automatic form-fill-seal lines.",
  },
  {
    id: 17,
    category: "Substrates",
    title: "Plain & Metallic Multi-Ply Barrier Reels",
    src: "/images/plain-metallic-rolls.jpg",
    desc: "Shimmering aluminum foil and metalized barrier film master rolls organized in climate-controlled plant storage.",
  },
  {
    id: 18,
    category: "Quality",
    title: "Plant Quality Testing & Seal Inspection Lab",
    src: "/images/quality-detail.jpg",
    desc: "In-house quality laboratory equipped with digital micrometers, seal burst testers, and tensile strength machines.",
  },
];

const CATEGORIES = ["All", "Machinery", "Products", "Pouches", "Substrates", "Factory", "Quality"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="site-shell">
      <Navbar />

      <main className="page-main">
        {/* Hero */}
        <section
          className="page-hero-banner"
          style={{ backgroundImage: `url('/images/machine-printing-rotogravure.jpg')` }}
        >
          <div className="page-hero-overlay" />
          <div className="page-width page-hero-content">
            <div className="eyebrow light">
              <span className="eyebrow-rule" />
              <span>Plant & Product Visual Gallery</span>
            </div>
            <h1>
              Machinery, Products <em>& Converting Floor.</em>
            </h1>
            <p className="page-hero-sub">
              A comprehensive photographic showcase of our 4 converting machinery lines (Printing, Lamination, Slitting, Pouching), production floor, and diverse packaging packets.
            </p>
            <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button onClick={downloadBrochure} className="button button-primary">
                <Download size={16} /> Download Full Plant Brochure
              </button>
              <Link href="/contact" className="button button-secondary">
                Request a Quote <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-pad page-width">
          {/* Category Filter */}
          <div className="gallery-filter-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-tab-btn ${activeCategory === cat ? "is-active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-photo-grid">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="gallery-card"
                onClick={() => {
                  setLightboxItem(item);
                  setZoom(1);
                }}
              >
                <div className="gallery-card-img-wrap">
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <div className="gallery-card-hover-overlay">
                    <ZoomIn size={24} />
                    <span>View Detail</span>
                  </div>
                </div>
                <div className="gallery-card-info">
                  <span className="gallery-badge">{item.category}</span>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxItem && (
          <div className="lightbox-overlay" onClick={() => setLightboxItem(null)}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="lightbox-close-btn"
                onClick={() => setLightboxItem(null)}
                aria-label="Close detail view"
              >
                <X size={24} />
              </button>

              <div className="lightbox-media-box">
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  style={{ transform: `scale(${zoom})` }}
                  className="lightbox-img"
                />
              </div>

              <div className="lightbox-caption-bar">
                <div className="lb-text">
                  <span className="lb-cat">{lightboxItem.category}</span>
                  <h3>{lightboxItem.title}</h3>
                  <p>{lightboxItem.desc}</p>
                </div>
                <div className="lb-controls">
                  <button
                    onClick={() => setZoom((z) => Math.min(z + 0.25, 2.5))}
                    className="zoom-btn"
                    title="Zoom in"
                  >
                    <ZoomIn size={18} />
                  </button>
                  <button
                    onClick={() => setZoom((z) => Math.max(z - 0.25, 0.75))}
                    className="zoom-btn"
                    title="Zoom out"
                  >
                    <ZoomOut size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
