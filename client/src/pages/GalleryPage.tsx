import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Link } from "wouter";
import { ZoomIn, ZoomOut, X, ArrowUpRight } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Machinery",
    title: "High-Speed Rotogravure Printing Press",
    src: "/images/hero-industrial.jpg",
    desc: "State-of-the-art multi-colour rotogravure press in operation with automatic register control and inline drying hoods.",
  },
  {
    id: 2,
    category: "Products",
    title: "Printed Laminated Rolls on Pallet",
    src: "/images/printed-rolls.jpg",
    desc: "Vibrant multi-colour printed flexible packaging film rolls wound tightly on cores, ready for food packaging dispatch.",
  },
  {
    id: 3,
    category: "Substrates",
    title: "Plain & Metallic Foil Barrier Reels",
    src: "/images/plain-metallic-rolls.jpg",
    desc: "Shimmering aluminium foil and metalized barrier film master rolls organized cleanly in climate-controlled warehouse.",
  },
  {
    id: 4,
    category: "Pouches",
    title: "Custom Converted Flexible Pouches",
    src: "/images/pouch-formats.jpg",
    desc: "Stand-up pouches, zipper pouches, matte finish and kraft paper pouches converted for retail consumer shelf prominence.",
  },
  {
    id: 5,
    category: "Factory",
    title: "Plant Infrastructure & Slitting Floor",
    src: "/images/factory-detail.jpg",
    desc: "Modern plant floor equipped with high-speed slitter rewinders, pouch machines, and pristine epoxy walkways.",
  },
  {
    id: 6,
    category: "Quality",
    title: "Quality Testing & Tensile Inspection Lab",
    src: "/images/quality-detail.jpg",
    desc: "In-house quality laboratory equipped with digital micrometers, seal burst testers, and tensile strength machines.",
  },
  {
    id: 7,
    category: "Machinery",
    title: "Printed Web Running Over Chrome Rollers",
    src: "/images/product-detail.jpg",
    desc: "Macro close-up of high-speed flexible packaging web running with pinpoint tension over polished steel rollers.",
  },
  {
    id: 8,
    category: "Substrates",
    title: "Multi-Layer Barrier Laminate Texture",
    src: "/images/materials-bg.jpg",
    desc: "Composite polymer barrier layers designed for maximum seal hermeticity and moisture barrier performance.",
  },
];

const CATEGORIES = ["All", "Machinery", "Products", "Substrates", "Pouches", "Factory", "Quality"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxItem, setLightboxItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="site-shell">
      <Navbar />

      <main className="page-main">
        {/* Hero */}
        <section className="page-hero-banner" style={{ backgroundImage: `url('/images/product-detail.jpg')` }}>
          <div className="page-hero-overlay" />
          <div className="page-width page-hero-content">
            <div className="eyebrow light">
              <span className="eyebrow-rule" />
              <span>Visual Showcase</span>
            </div>
            <h1>
              Material, <em>in Motion.</em>
            </h1>
            <p className="page-hero-sub">
              A photographic tour of our manufacturing plant in Ahmednagar, state-of-the-art machinery, converted rolls, and finished pouches.
            </p>
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
          <div className="lightbox-backdrop" onClick={() => setLightboxItem(null)}>
            <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-toolbar">
                <div>
                  <span className="material-label">{lightboxItem.category}</span>
                  <strong>{lightboxItem.title}</strong>
                </div>
                <div className="lightbox-actions">
                  <button
                    onClick={() => setZoom((z) => Math.max(0.75, z - 0.25))}
                    disabled={zoom <= 0.75}
                    title="Zoom Out"
                  >
                    <ZoomOut size={16} />
                  </button>
                  <span>{Math.round(zoom * 100)}%</span>
                  <button
                    onClick={() => setZoom((z) => Math.min(2.5, z + 0.25))}
                    disabled={zoom >= 2.5}
                    title="Zoom In"
                  >
                    <ZoomIn size={16} />
                  </button>
                  <button
                    onClick={() => setLightboxItem(null)}
                    className="lightbox-close"
                    title="Close"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              <div className="lightbox-stage">
                <img
                  src={lightboxItem.src}
                  alt={lightboxItem.title}
                  style={{ transform: `scale(${zoom})` }}
                />
              </div>

              <div className="lightbox-caption">
                <p>{lightboxItem.desc}</p>
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
