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
              <span>Established 2017 · Maharashtra, India</span>
            </div>
            <h1>
              About Vibgyor <em>Print N Pack</em>
            </h1>
            <p className="page-hero-sub">
              Formerly known as Atharva Industries — a reputed manufacturer of multi-layer, multi-colour laminated flexible packaging materials and pouches operating from MIDC, Ahmednagar-Sambhajinagar Road, Maharashtra.
            </p>
          </div>
        </section>

        {/* Story Section: About Vibgyor */}
        <section className="section-pad page-width" id="about-vibgyor">
          <div className="about-split-grid">
            <div className="about-intro-copy">
              <div className="section-kicker">
                <span>01</span>
                <div />
                <span>Company Overview & Heritage</span>
              </div>
              <h2 className="section-title">About Vibgyor</h2>

              <div className="heritage-badge-row" style={{ display: "flex", gap: "10px", flexWrap: "wrap", margin: "12px 0 20px" }}>
                <span style={{ background: "var(--cobalt)", color: "#fff", padding: "5px 12px", borderRadius: "4px", fontSize: "11px", fontWeight: "800", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  Est. 2017
                </span>
                <span style={{ background: "var(--paper-deep)", border: "1px solid var(--line)", padding: "5px 12px", borderRadius: "4px", fontSize: "11px", fontWeight: "700", color: "var(--ink)" }}>
                  Formerly Known as Atharva Industries
                </span>
                <span style={{ background: "#fef3c7", border: "1px solid #fde68a", padding: "5px 12px", borderRadius: "4px", fontSize: "11px", fontWeight: "700", color: "#92400e" }}>
                  MIDC Ahmednagar-Sambhajinagar Road
                </span>
              </div>

              <p className="lead-text" style={{ fontSize: "16px", lineHeight: "1.7", color: "var(--ink)", marginBottom: "16px" }}>
                <strong>VIBGYOR PRINT N PACK</strong>, formerly known as <strong>Atharva Industries</strong>, is a reputed manufacturer of multi-layer, multi-colour laminated flexible packaging materials and pouches. Established in 2017, the company operates from a modern, fully-equipped facility located at MIDC, Ahmednagar-Sambhajinagar Road, Maharashtra.
              </p>

              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--ink-soft)", margin: "0 0 16px" }}>
                Our strategic location provides excellent connectivity to major industrial hubs such as Ahilyanagar, Chhatrapati Sambhajinagar, Pune, Mumbai, Solapur and Nashik, all within a 30-minute to 5-hour drive radius, offering excellent connectivity through air, rail, and road transport networks.
              </p>

              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--ink-soft)", margin: "0 0 16px" }}>
                We cater to diverse sectors by offering solutions in both roll and pouch formats using a wide variety of films, including products for agriculture, food processing, health and wellness, personal care, frozen foods, and more.
              </p>

              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--ink-soft)", margin: "0 0 16px" }}>
                Vibgyor Print N Pack is committed to meeting customer needs through high-quality, end-to-end packaging solutions. Our in-house capabilities include printing, lamination, slitting, and pouch making, all supported by advanced finishing techniques and high-resolution printing technology.
              </p>

              <p style={{ fontSize: "15px", lineHeight: "1.7", color: "var(--ink-soft)", margin: "0 0 16px" }}>
                Materials are supplied either in rolls or as pouches made from PET, BOPP, CPP, co-extruded multi-layer films of LDPE, LLDPE, and HDPE blends — available in both plain and metallised forms — as well as aluminium foil.
              </p>

              <div style={{ background: "var(--paper-deep)", borderLeft: "4px solid var(--saffron)", padding: "14px 18px", borderRadius: "4px", margin: "20px 0" }}>
                <p style={{ margin: 0, fontWeight: 700, color: "var(--ink)", fontSize: "14.5px" }}>
                  Vibgyor Print N Pack operates with a robust production capacity to efficiently meet large-scale demands throughout the year.
                </p>
              </div>

              <div className="about-stats-row">
                <div className="about-stat-box">
                  <strong>2017</strong>
                  <span>Established Year</span>
                </div>
                <div className="about-stat-box">
                  <strong>End-to-End</strong>
                  <span>In-House Setup</span>
                </div>
                <div className="about-stat-box">
                  <strong>Year-Round</strong>
                  <span>Large-Scale Capacity</span>
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
                <strong>Modern Shop Floor & Facility</strong>
                <span>Fully-equipped plant at MIDC, Ahmednagar-Sambhajinagar Road, Maharashtra</span>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Location & Connectivity Hubs */}
        <section className="section-pad" style={{ background: "var(--paper-deep)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
          <div className="page-width">
            <div className="section-kicker">
              <span>02</span>
              <div />
              <span>Strategic Connectivity</span>
            </div>
            <div className="markets-title-row" style={{ marginBottom: "28px" }}>
              <div>
                <h2 className="section-title">
                  Strategic Location: <em>Fast Connectivity to Major Industrial Hubs</em>
                </h2>
                <p className="lead-text">
                  Located on the Ahmednagar-Sambhajinagar industrial corridor, Vibgyor Print N Pack connects quickly to Maharashtra's prime manufacturing and commercial centers within 30 minutes to 5 hours.
                </p>
              </div>
            </div>

            <div className="connectivity-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "24px" }}>
              {[
                { city: "Ahilyanagar (Ahmednagar)", time: "~30 Minutes", mode: "Direct Highway & Rail", note: "Immediate local delivery, plant visits, and expedited same-day dispatch." },
                { city: "Chhatrapati Sambhajinagar", time: "~1 to 1.5 Hours", mode: "Four-Lane Expressway", note: "Rapid access to Marathwada manufacturing, FMCG, and industrial zones." },
                { city: "Pune Industrial Belt", time: "~2.5 to 3 Hours", mode: "Direct Industrial Highway", note: "Connected to Ranjangaon, Chakan, Talegaon, and Hadapsar packaging hubs." },
                { city: "Nashik Region", time: "~3 Hours", mode: "Highway & Transport Line", note: "Agro-processing, wineries, pharmaceuticals, and fast retail distribution." },
                { city: "Solapur Hub", time: "~4 Hours", mode: "Highway Freight Corridor", note: "Serving south Maharashtra food clusters, textiles, and agro-industries." },
                { city: "Mumbai & JNPT Port", time: "~4.5 to 5 Hours", mode: "Expressway & Air Cargo", note: "Seamless access to domestic corporate headquarters and port export channels." },
              ].map((hub, idx) => (
                <div key={idx} style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: "8px", padding: "20px 22px", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "17px", fontWeight: "800", margin: 0, color: "var(--ink)" }}>{hub.city}</h3>
                    <span style={{ fontSize: "11px", fontWeight: "800", color: "var(--cobalt)", background: "rgba(23,60,117,0.08)", padding: "3px 8px", borderRadius: "3px" }}>
                      {hub.time}
                    </span>
                  </div>
                  <span style={{ fontSize: "11.5px", fontWeight: "700", color: "var(--saffron)", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "8px" }}>
                    {hub.mode}
                  </span>
                  <p style={{ fontSize: "13px", color: "var(--ink-soft)", lineHeight: "1.5", margin: 0 }}>
                    {hub.note}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap", marginTop: "24px", padding: "16px 20px", background: "var(--white)", border: "1px solid var(--line)", borderRadius: "8px", fontSize: "13px", fontWeight: "700", color: "var(--ink)" }}>
              <span style={{ color: "var(--cobalt)", textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.08em" }}>Connected via:</span>
              <span>✈ Air Network (Pune, Mumbai, Sambhajinagar Airports)</span>
              <span>•</span>
              <span>🚆 Rail Freight Network</span>
              <span>•</span>
              <span>🚚 Arterial Highway Express Corridors</span>
            </div>
          </div>
        </section>

        {/* Materials & In-House Capabilities Summary */}
        <section className="section-pad page-width">
          <div className="section-kicker">
            <span>03</span>
            <div />
            <span>End-to-End Capabilities & Substrates</span>
          </div>
          <h2 className="section-title">
            Versatile Substrates. <em>Complete In-House Flow.</em>
          </h2>
          <p className="lead-text" style={{ maxWidth: "800px", marginBottom: "32px" }}>
            Materials are supplied either in rolls or as pouches made from PET, BOPP, CPP, co-extruded multi-layer films of LDPE, LLDPE, and HDPE blends — available in both plain and metallised forms — as well as aluminium foil.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {[
              { title: "Rotogravure Printing", desc: "Up to 8/9 colours high-resolution printing with electronic register control and spot finishes." },
              { title: "Multi-Ply Lamination", desc: "Solventless and solvent-based bonding for plain, metallised, and aluminium foil combinations." },
              { title: "Precision Slitting", desc: "High-speed web slitting with uniform tension and slit-edge accuracy (±0.5mm)." },
              { title: "Pouch Making & Converting", desc: "Center seal, 3-side seal, stand-up zipper pouches, and customized pre-formed formats." },
            ].map((cap, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--line)", borderRadius: "8px", padding: "22px", borderTop: "3px solid var(--cobalt)" }}>
                <span style={{ fontSize: "11px", fontWeight: "800", color: "var(--saffron)", textTransform: "uppercase" }}>Capability 0{i + 1}</span>
                <h3 style={{ fontSize: "17px", fontWeight: "800", color: "var(--ink)", margin: "8px 0" }}>{cap.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--ink-soft)", lineHeight: "1.55", margin: 0 }}>{cap.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "28px", padding: "18px 22px", background: "var(--paper-deep)", borderRadius: "8px", border: "1px solid var(--line)" }}>
            <span style={{ fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--cobalt)", display: "block", marginBottom: "8px" }}>
              Supplied Substrates & Film Combinations:
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {["PET", "BOPP", "CPP", "Co-extruded LDPE", "LLDPE", "HDPE Blends", "Plain Laminated Films", "Metallised Films (Met-PET / Met-BOPP)", "Pure Aluminium Foil"].map((film, idx) => (
                <span key={idx} style={{ background: "var(--white)", border: "1px solid var(--line)", padding: "6px 12px", borderRadius: "4px", fontSize: "12px", fontWeight: "700", color: "var(--ink)" }}>
                  {film}
                </span>
              ))}
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
