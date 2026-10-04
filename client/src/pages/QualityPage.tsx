import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Link } from "wouter";
import { ArrowUpRight, ShieldCheck, Microscope, Gauge, CheckSquare2, FileCheck, RefreshCw } from "lucide-react";

const TESTS = [
  {
    icon: Gauge,
    title: "Bond & Peel Strength",
    standard: "ASTM D903 / ASTM F904",
    desc: "Evaluates the adhesive bonding force between laminated plies to ensure zero delamination during aggressive filling, retort, or temperature variations.",
  },
  {
    icon: ShieldCheck,
    title: "Heat Seal Integrity & Burst Test",
    standard: "ASTM F88 / ASTM F1140",
    desc: "Measures the maximum seal strength and burst resistance under pressure, ensuring airtight and leakproof performance during shipping and handling.",
  },
  {
    icon: RefreshCw,
    title: "Coefficient of Friction (COF)",
    standard: "ASTM D1894",
    desc: "Measures kinetic and static friction of the outer and inner sealant layers. Tuned precisely to ensure smooth feeding on high-speed automated packaging lines.",
  },
  {
    icon: Microscope,
    title: "Optical Spectrophotometry & Registration",
    standard: "Delta-E Color Tolerance < 2.0",
    desc: "Digital densitometers and spectrophotometers measure ink pigment density and exact Pantone matching across roll-to-roll and batch-to-batch runs.",
  },
  {
    icon: CheckSquare2,
    title: "Tensile Strength & Elongation",
    standard: "ASTM D882",
    desc: "Tests film mechanical durability across machine direction (MD) and transverse direction (TD) to withstand high web pulling tension without stretching.",
  },
  {
    icon: FileCheck,
    title: "Dart Impact & Puncture Resistance",
    standard: "ASTM D1709",
    desc: "Free-fall dart impact tests simulate harsh freight drops and puncture hazards from sharp dried goods or granular particles.",
  },
];

export default function QualityPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell">
      <Navbar />

      <main className="page-main">
        {/* Hero */}
        <section className="page-hero-banner" style={{ backgroundImage: `url('/images/quality-detail.jpg')` }}>
          <div className="page-hero-overlay" />
          <div className="page-width page-hero-content">
            <div className="eyebrow light">
              <span className="eyebrow-rule" />
              <span>Quality Assurance & Testing</span>
            </div>
            <h1>
              Consistency is the <em>Spec.</em>
            </h1>
            <p className="page-hero-sub">
              We treat quality as an ingrained production habit, not a post-facto inspection. Every master roll and pouch conversion run is verified under strict laboratory control.
            </p>
          </div>
        </section>

        {/* Quality Philosophy Section */}
        <section className="section-pad page-width">
          <div className="about-split-grid">
            <div>
              <div className="section-kicker">
                <span>01</span>
                <div />
                <span>Our Quality Protocol</span>
              </div>
              <h2 className="section-title">Pre-Press to Pallet Dispatch Discipline</h2>
              <p className="lead-text">
                Packaging failures cost brands dearly in product recalls, line jams, and brand damage. That is why our quality framework spans raw film verification, cylinder proofing, inline web inspection, and post-cure bond audits.
              </p>
              <div className="quality-checklist">
                <div className="q-check-item">
                  <strong>Raw Material COA Verification:</strong>
                  <span>Every batch of virgin resin, polyester film, aluminium foil, and food-grade ink is verified against manufacturer certificates of analysis.</span>
                </div>
                <div className="q-check-item">
                  <strong>Online Registration Tracking:</strong>
                  <span>Automatic electronic register controllers continuously scan register marks and correct cylinder alignment within fractions of a millimeter.</span>
                </div>
                <div className="q-check-item">
                  <strong>Post-Curing Delamination Audits:</strong>
                  <span>Laminated rolls undergo controlled curing followed by peel tests before entering high-speed slitting lines.</span>
                </div>
              </div>
            </div>

            <div className="about-media-card">
              <img
                src="/images/quality-detail.jpg"
                alt="Quality Testing Laboratory at Vibgyor"
                className="about-image"
              />
              <div className="about-image-caption">
                <strong>Quality Testing Laboratory</strong>
                <span>Precision micrometer, seal tester, and tensile testing station in Ahmednagar</span>
              </div>
            </div>
          </div>
        </section>

        {/* Lab Tests Grid */}
        <section className="section-pad surface-tinted">
          <div className="page-width">
            <div className="section-kicker">
              <span>02</span>
              <div />
              <span>Testing Capabilities</span>
            </div>
            <h2 className="section-title">Standardized Laboratory Testing Procedures</h2>
            <p className="section-sub">
              Every production lot is sampled and tested according to internationally recognized ASTM packaging test standards.
            </p>

            <div className="tests-grid">
              {TESTS.map((t, idx) => {
                const IconComp = t.icon;
                return (
                  <div key={idx} className="test-card">
                    <div className="test-icon-row">
                      <div className="test-icon">
                        <IconComp size={22} />
                      </div>
                      <span className="test-standard">{t.standard}</span>
                    </div>
                    <h4>{t.title}</h4>
                    <p>{t.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad dark-surface">
          <div className="page-width text-center">
            <h2 className="section-title light">Need a Quality Audit or COA for Your Compliance?</h2>
            <p className="section-sub light" style={{ margin: "0 auto 24px", maxWidth: "600px" }}>
              Our QA team supplies batch test certificates, migration reports, and raw material declarations with every delivery.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="button button-primary">
                Contact QA Department <ArrowUpRight size={16} />
              </Link>
              <a href="tel:+917558381231" className="button button-secondary">
                Call Direct: +91 75583 81231
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
