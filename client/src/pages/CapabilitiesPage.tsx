import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Link } from "wouter";
import { ArrowUpRight, Gauge, Cpu, Layers, Scissors, Box, CheckCircle } from "lucide-react";

const STAGES = [
  {
    step: "01",
    title: "Rotogravure Printing",
    subtitle: "High-definition cylinder-based web printing",
    desc: "Capable of printing up to 9 colours with micro-register accuracy. Our rotogravure printing line handles reverse and surface printing on diverse substrates like BOPP, PET, and metallized films at high web speeds with consistent tonal density.",
    specs: ["Up to 9-colour printing capability", "Electronic automatic registration system", "High-opacity white printing for transparent films", "Special matte, gloss, and registered coating stations"],
    image: "/images/hero-industrial.jpg",
  },
  {
    step: "02",
    title: "Solventless & Adhesive Lamination",
    subtitle: "Multi-ply composite barrier bonding",
    desc: "Combining films, foils, and sealant plies into unified composite barriers. We utilize advanced adhesives formulated for maximum green tack, optical clarity, zero solvent retention, and superior peel strength across demanding thermal conditions.",
    specs: ["2-ply, 3-ply, and 4-ply foil combinations", "Food-grade certified adhesive systems", "Controlled adhesive laydown across web width", "Optically clear bonding with zero bubble entrapment"],
    image: "/images/product-detail.jpg",
  },
  {
    step: "03",
    title: "Precision Slitting & Rewinding",
    subtitle: "Accurate width tolerances and tight roll geometry",
    desc: "Our slitting section features razor and rotary shear blades combined with dynamic load-cell web tension control. We ensure straight edges, uniform roll hardness, clean core alignment, and slit widths tuned directly to your filling machinery.",
    specs: ["Width tolerances within ±0.5 mm", "Automatic edge and line web guiding (EPC)", "Controlled tension taper to prevent telescoping", "Dual differential rewind shafts for uniform winding"],
    image: "/images/plain-metallic-rolls.jpg",
  },
  {
    step: "04",
    title: "Pouch Making & Conversion",
    subtitle: "Pre-formed standing and flat pouches",
    desc: "Dedicated pouch converting machines produce stand-up zip pouches, 3-side seal flat packs, and custom-notched formats. Equipped with temperature-controlled heating and cooling jaws to ensure hermetic, leak-free perimeter seals.",
    specs: ["Doyen, K-seal, and plough bottom stand-up pouches", "Inline zipper insertion and ultrasonic crush", "Easy-tear V-notches and euro-punches", "Continuous pressure and temperature monitoring"],
    image: "/images/pouch-formats.jpg",
  },
];

export default function CapabilitiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell">
      <Navbar />

      <main className="page-main">
        {/* Hero */}
        <section className="page-hero-banner" style={{ backgroundImage: `url('/images/factory-detail.jpg')` }}>
          <div className="page-hero-overlay" />
          <div className="page-width page-hero-content">
            <div className="eyebrow light">
              <span className="eyebrow-rule" />
              <span>Plant Capabilities & Converting</span>
            </div>
            <h1>
              From Artwork <em>to Output.</em>
            </h1>
            <p className="page-hero-sub">
              Our Ahmednagar plant is built for repeatable excellence: synchronized rotogravure printing, multi-layer lamination, precision slitting, and automated pouch fabrication.
            </p>
          </div>
        </section>

        {/* 4 Stages */}
        <section className="section-pad page-width">
          <div className="section-kicker">
            <span>01</span>
            <div />
            <span>The Production Flow</span>
          </div>
          <h2 className="section-title">Four Connected Converting Disciplines</h2>

          <div className="stages-stack">
            {STAGES.map((st, i) => (
              <div key={i} className={`stage-row ${i % 2 === 1 ? "is-reversed" : ""}`}>
                <div className="stage-copy">
                  <span className="stage-number">{st.step}</span>
                  <h3>{st.title}</h3>
                  <p className="stage-sub">{st.subtitle}</p>
                  <p className="stage-body">{st.desc}</p>
                  <ul className="stage-specs-list">
                    {st.specs.map((sp, idx) => (
                      <li key={idx}>
                        <CheckCircle size={15} className="check-icon" />
                        <span>{sp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="stage-media">
                  <img src={st.image} alt={st.title} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Infrastructure Highlights */}
        <section className="section-pad dark-surface">
          <div className="page-width">
            <div className="section-kicker light">
              <span>02</span>
              <div />
              <span>Operational Metrics</span>
            </div>
            <h2 className="section-title light">Built for Industrial Scale & Precision</h2>

            <div className="capabilities-metrics-grid">
              <div className="cap-metric-card">
                <strong>Up to 9 Colours</strong>
                <h4>Rotogravure Printing</h4>
                <p>Wide color gamut, reverse/surface print, spot lacquering for striking shelf presence.</p>
              </div>

              <div className="cap-metric-card">
                <strong>±0.5 mm</strong>
                <h4>Slit Width Tolerance</h4>
                <p>Razor-sharp edges with zero telescoping for high-speed automated form-fill-seal lines.</p>
              </div>

              <div className="cap-metric-card">
                <strong>100% Hermetic</strong>
                <h4>Seal Integrity</h4>
                <p>Optimized dwell time and temperature control ensuring leakproof packaging across all climates.</p>
              </div>

              <div className="cap-metric-card">
                <strong>MIDC Plant</strong>
                <h4>Ahmednagar, Maharashtra</h4>
                <p>Strategically situated in western India for rapid logistics to Mumbai, Pune, and pan-India destinations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-pad page-width text-center">
          <h2 className="section-title">Have a Complex Packaging Requirement?</h2>
          <p className="section-sub">
            Speak directly with our technical production team to review web widths, barrier requirements, and trial runs.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: "24px" }}>
            <Link href="/contact" className="button button-primary">
              Initiate a Project Brief <ArrowUpRight size={16} />
            </Link>
            <a href="https://wa.me/917558381231" target="_blank" rel="noreferrer" className="button button-whatsapp">
              WhatsApp Technical Team
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
