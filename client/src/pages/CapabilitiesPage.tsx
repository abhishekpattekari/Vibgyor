import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Link } from "wouter";
import { ArrowUpRight, Gauge, Cpu, Layers, Scissors, Box, CheckCircle, Download } from "lucide-react";
import { downloadBrochure } from "@/lib/downloadBrochure";

const STAGES = [
  {
    step: "01",
    title: "Rotogravure Printing Machine",
    subtitle: "High-definition cylinder-based web printing up to 8 colours",
    desc: "Capable of printing up to 8 colours with micro-register accuracy. Our rotogravure printing line handles reverse and surface printing on diverse substrates like BOPP, PET, and metallized films at high web speeds with consistent tonal density.",
    specs: [
      "Up to 8-colour rotogravure printing capability",
      "Electronic automatic registration system",
      "High-opacity white printing for transparent films",
      "Special matte, gloss, and registered coating stations",
    ],
    image: "/images/machine-printing-rotogravure.jpg",
  },
  {
    step: "02",
    title: "Solventless & Adhesive Lamination Machine",
    subtitle: "Multi-ply composite barrier bonding",
    desc: "Combining films, foils, and sealant plies into unified composite barriers. We utilize advanced solventless laminating technology formulated for maximum green tack, optical clarity, zero solvent retention, and superior peel strength across demanding thermal conditions.",
    specs: [
      "2-ply, 3-ply, and 4-ply foil barrier combinations",
      "Food-grade certified solventless adhesive systems",
      "Controlled adhesive laydown across web width",
      "Optically clear bonding with zero bubble entrapment",
    ],
    image: "/images/machine-lamination-solventless.jpg",
  },
  {
    step: "03",
    title: "Precision Slitting & Rewinding Machine",
    subtitle: "Accurate width tolerances and tight roll geometry",
    desc: "Our slitting section features razor and rotary shear blades combined with dynamic load-cell web tension control. We ensure straight edges, uniform roll hardness, clean core alignment, and slit widths tuned directly to your filling machinery.",
    specs: [
      "Width tolerances within ±0.5 mm",
      "Automatic edge and line web guiding (EPC)",
      "Controlled tension taper to prevent telescoping",
      "Dual differential rewind shafts for uniform winding",
    ],
    image: "/images/machine-slitting-rewinding.jpg",
  },
  {
    step: "04",
    title: "Automated Pouch Making & Conversion Machine",
    subtitle: "Pre-formed standing and flat pouches with zipper integration",
    desc: "Dedicated automated pouch converting machines produce stand-up zip pouches, 3-side seal flat packs, and custom-notched formats. Equipped with temperature-controlled heating and cooling jaws to ensure hermetic, leak-free perimeter seals.",
    specs: [
      "Doyen, K-seal, and plough bottom stand-up pouches",
      "Inline zipper insertion and ultrasonic seal crush",
      "Easy-tear V-notches and euro-punches",
      "Continuous pressure and temperature monitoring",
    ],
    image: "/images/machine-pouch-making.jpg",
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
        <section className="page-hero-banner" style={{ backgroundImage: `url('/images/machine-printing-rotogravure.jpg')` }}>
          <div className="page-hero-overlay" />
          <div className="page-width page-hero-content">
            <div className="eyebrow light">
              <span className="eyebrow-rule" />
              <span>Plant Capabilities & Machinery</span>
            </div>
            <h1>
              From Artwork <em>to High-Speed Output.</em>
            </h1>
            <p className="page-hero-sub">
              Our Ahmednagar plant is built for repeatable industrial excellence: synchronized rotogravure printing up to 8 colours, solventless multi-layer lamination, precision slitting, and automated pouch fabrication.
            </p>
            <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button onClick={downloadBrochure} className="button button-primary">
                <Download size={16} /> Download Plant Brochure PDF
              </button>
              <Link href="/contact" className="button button-secondary">
                Request a Quote <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 4 Stages */}
        <section className="section-pad page-width">
          <div className="section-kicker">
            <span>01</span>
            <div />
            <span>The Machinery & Converting Disciplines</span>
          </div>
          <h2 className="section-title">Four Precision Converting Machinery Lines</h2>

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
                <strong>Up to 8 Colours</strong>
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
                <p>Plot No. B-26/1, MIDC Shingave Tukai, Tal. Newasa, Dist. Ahmednagar – 414607.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="section-pad page-width">
          <div className="quote-banner">
            <div>
              <div className="eyebrow light">
                <span className="eyebrow-rule" />
                <span>Ready to Print</span>
              </div>
              <h2>Have a Custom Structure or New Pack Requirement?</h2>
              <p>
                Our technical team is ready to assist with cylinder planning, substrate barrier matching, and sample trials.
              </p>
            </div>
            <div className="quote-banner-actions">
              <button onClick={downloadBrochure} className="button button-primary">
                <Download size={16} /> Download Brochure PDF
              </button>
              <Link href="/contact" className="button button-ghost">
                Discuss Your Specs <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
