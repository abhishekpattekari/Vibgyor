import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Link } from "wouter";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Factory, Award, Clock, Users } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell">
      <Navbar />

      <main className="page-main">
        {/* Page Hero */}
        <section className="page-hero-banner" style={{ backgroundImage: `url('/images/factory-detail.jpg')` }}>
          <div className="page-hero-overlay" />
          <div className="page-width page-hero-content">
            <div className="eyebrow light">
              <span className="eyebrow-rule" />
              <span>About Vibgyor Print N Pack</span>
            </div>
            <h1>
              Engineered with Intent. <em>Driven by Quality.</em>
            </h1>
            <p className="page-hero-sub">
              A specialized flexible laminated packaging manufacturer based in MIDC Shingave Tukai, Ahmednagar (Maharashtra), delivering precision rolls and pouches to growing brands across India.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-pad page-width">
          <div className="about-split-grid">
            <div className="about-intro-copy">
              <div className="section-kicker">
                <span>01</span>
                <div />
                <span>Our Philosophy</span>
              </div>
              <h2 className="section-title">
                Packaging that holds up twice: on the shelf and on the filling line.
              </h2>
              <p className="lead-text">
                At Vibgyor Print N Pack, we treat flexible packaging as an exact engineering discipline. Every film combination, cylinder engraving, ink formulation, and seal temperature is calibrated to ensure seamless filling and dependable shelf life.
              </p>
              <p>
                Founded to bridge the gap between high-volume industrial converting and responsive, customer-first service, our modern plant in Ahmednagar brings rotogravure printing up to 9 colours, solventless and solvent-based lamination, precision slitting, and pouch fabrication together under one roof.
              </p>
              <div className="about-stats-row">
                <div className="about-stat-box">
                  <strong>Up to 9</strong>
                  <span>Colours Rotogravure</span>
                </div>
                <div className="about-stat-box">
                  <strong>100%</strong>
                  <span>Custom Laminates</span>
                </div>
                <div className="about-stat-box">
                  <strong>MIDC</strong>
                  <span>Modern Factory</span>
                </div>
              </div>
            </div>

            <div className="about-media-card">
              <img
                src="/images/hero-industrial.jpg"
                alt="Vibgyor Print N Pack Manufacturing Line"
                className="about-image"
              />
              <div className="about-image-caption">
                <strong>Modern Shop Floor</strong>
                <span>Rotogravure printing & precision converting facility in Maharashtra, India</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars of Excellence */}
        <section className="section-pad dark-surface">
          <div className="page-width">
            <div className="section-kicker light">
              <span>02</span>
              <div />
              <span>Core Strengths</span>
            </div>
            <h2 className="section-title light">Why Industry Leaders Choose Vibgyor</h2>
            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <Factory size={24} />
                </div>
                <h3>Integrated Manufacturing</h3>
                <p>
                  From artwork pre-press and cylinder proofing to gravure printing, lamination, high-speed slitting, and pouch making, every step is completed in-house for end-to-end quality control.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <ShieldCheck size={24} />
                </div>
                <h3>Stringent Quality Testing</h3>
                <p>
                  Every production lot undergoes rigorous laboratory testing for bond strength, seal integrity, coefficient of friction (COF), dart impact, and visual registration accuracy.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <Award size={24} />
                </div>
                <h3>Tailored Barrier Engineering</h3>
                <p>
                  We don’t believe in one-size-fits-all. We map substrate choices (PET, BOPP, MET-PET, CPP, PE, Aluminium Foil) specifically around your product’s barrier, moisture, and light requirements.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-box">
                  <Clock size={24} />
                </div>
                <h3>Responsive Turnaround</h3>
                <p>
                  Located in MIDC Shingave Tukai, Newasa, we provide agile turnaround, reliable repeat scheduling, and transparent dispatch communication for growing brands and enterprise lines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Factory Callout */}
        <section className="section-pad page-width">
          <div className="plant-callout-banner">
            <div className="plant-callout-text">
              <h3>Visit Our Manufacturing Facility</h3>
              <p>
                We invite brand owners, procurement managers, and packaging engineers to tour our shop floor in MIDC Shingave Tukai, Newasa (Ahmednagar) and evaluate our machinery and process control in person.
              </p>
              <div className="plant-callout-actions">
                <Link href="/contact" className="button button-primary">
                  Plan a Factory Visit <ArrowUpRight size={16} />
                </Link>
                <a href="tel:+917558381231" className="button button-secondary">
                  Call Plant Team: +91 75583 81231
                </a>
              </div>
            </div>
            <div className="plant-callout-image-wrap">
              <img src="/images/quality-detail.jpg" alt="Vibgyor Quality Lab" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
