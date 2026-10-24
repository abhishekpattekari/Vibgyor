import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Link } from "wouter";
import {
  ArrowUpRight,
  CheckCircle2,
  Download,
  Layers,
  Sparkles,
  ShieldCheck,
  Package,
} from "lucide-react";
import { downloadBrochure } from "@/lib/downloadBrochure";

export interface MarketSector {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  secondaryImage?: string;
  keyPoints: string[];
  recommendedStructures: string;
}

export const MARKETS_LIST: MarketSector[] = [
  {
    id: "snack-food",
    num: "01",
    title: "1. Snack Food Packaging",
    tagline: "High-barrier solutions tailored for snacks & extruded foods",
    description:
      "RPPL provides high-performance solutions tailored for the snack food industry. High-barrier metalized films preserve crispness, prevent oil oxidation, and retain nitrogen flush integrity with vibrant rotogravure print brilliance.",
    image: "/images/potato-chips.jpg",
    keyPoints: [
      "Nitrogen flushing for zero pack collapse",
      "Superior moisture and oxygen barrier",
      "Pillow pouches, center-seal & nitrogen pouches",
    ],
    recommendedStructures: "Printed PET / Met-PET / Polyethylene (PE)",
  },
  {
    id: "confectionery-biscuits",
    num: "02",
    title: "2. Confectionery & Biscuits Packaging",
    tagline: "Moisture-proof barriers locking crunch & aroma",
    description:
      "Our packaging for confectioneries and biscuits integrates protective barriers that maintain crispness, buttery aroma, and chocolate fat stability, guarding against humidity, melting, and ambient light exposure.",
    image: "/images/biscuits-packaging.jpg",
    secondaryImage: "/images/chocolates-packaging.jpg",
    keyPoints: [
      "Crunch retention & low moisture transmission",
      "Flow-wrap webs and stand-up zipper pouches",
      "Foil and cold-seal barrier combinations",
    ],
    recommendedStructures: "BOPP / Met-BOPP / Cast Polypropylene (CPP) or Foil",
  },
  {
    id: "frozen-food",
    num: "03",
    title: "3. Frozen Food Packaging",
    tagline: "Engineered to withstand extreme sub-zero temperatures down to -40°C",
    description:
      "Designed to withstand extreme temperatures, our frozen food packaging solutions offer exceptional puncture resistance, drop durability, and hermetic seals from -18°C down to -40°C for green peas, sweet corn, and frozen snacks.",
    image: "/images/frozen-sweetcorn.jpg",
    secondaryImage: "/images/frozen-greenpeas.jpg",
    keyPoints: [
      "Sub-zero cold crack & drop impact resistance",
      "Zero pinholes and moisture migration",
      "Stand-up pouches with zip & freeze-grade laminates",
    ],
    recommendedStructures: "Co-ex Polyamide (Nylon) / Specialized Cold PE",
  },
  {
    id: "tea-coffee",
    num: "04",
    title: "4. Tea & Coffee Packaging",
    tagline: "Aroma-shield & degassing valve compatibility",
    description:
      "For tea and coffee, preserving aroma and freshness is paramount. Our high-barrier laminates with degassing valve compatibility protect against oxidation and moisture, locking in volatile aromatic compounds and essential roast oils.",
    image: "/images/tea-coffee-packaging.jpg",
    keyPoints: [
      "100% aroma & essential oil retention",
      "Degassing valve compatibility for whole roasted beans",
      "Light blackout pure aluminium foil structures",
    ],
    recommendedStructures: "Matte PET / Pure Aluminium Foil / PE with Valve",
  },
  {
    id: "flour-pulses-spices",
    num: "05",
    title: "5. Flour, Pulses & Spices Packaging",
    tagline: "Heavy-gauge durability & taste-preserving barriers for staples",
    description:
      "RPPL ensures that the natural taste and texture of products like flour, pulses, and spices are preserved through advanced multi-layer barrier laminates. Engineered to endure heavy bulk filling (5kg–10kg), transit drop impacts, aroma retention for ground spices, and transparent window visibility for grains and lentils.",
    image: "/images/atta-packaging.jpg",
    secondaryImage: "/images/dal-pulses-packaging.jpg",
    keyPoints: [
      "Heavyweight 5kg/10kg drop-tested load-bearing atta pouches with D-punch handle",
      "Crystal-clear transparent viewing windows for whole dals and pulses",
      "Aroma-lock multi-layer barrier preventing flavor dissipation in ground masalas & spices",
      "High seal integrity preventing dust seepage and powder migration",
    ],
    recommendedStructures: "Multi-layer Heavy PE / High-Tensile PET Gusset Film & Clear Window Laminates",
  },
  {
    id: "personal-care-medical",
    num: "06",
    title: "6. Home & Personal Care, Medical Devices Packaging",
    tagline: "Hygienic barrier solutions for liquids & healthcare",
    description:
      "From personal care products to sensitive medical devices, our packaging meets stringent hygiene, hermetic sealing, and chemical resistance requirements for spouted refill pouches, cosmetic sachets, and sterile medical items.",
    image: "/images/medical-personal-care.jpg",
    keyPoints: [
      "Chemical resistance to aggressive surfactants and oils",
      "Spout fitment for liquid refill pouches",
      "Clean-room grade sterile barrier laminates",
    ],
    recommendedStructures: "Multi-barrier PET / Nylon / Chemical-Resistant PE",
  },
];

export default function MarketsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell">
      <Navbar />

      <main className="page-main">
        {/* Hero */}
        <section
          className="page-hero-banner"
          style={{ backgroundImage: `url('/images/potato-chips.jpg')` }}
        >
          <div className="page-hero-overlay" />
          <div className="page-width page-hero-content">
            <div className="eyebrow light">
              <span className="eyebrow-rule" />
              <span>Target Industry Sectors</span>
            </div>
            <h1>
              Our Markets: <em>Engineered for Purpose</em>
            </h1>
            <p className="page-hero-sub">
              Explore specialized flexible packaging laminates and pouches engineered around the unique shelf-life, barrier, and filling needs of your industry.
            </p>
            <div style={{ marginTop: "24px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button onClick={downloadBrochure} className="button button-primary">
                <Download size={16} /> Download Market Brochure PDF
              </button>
              <Link href="/contact" className="button button-secondary">
                Request a Custom Quote <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="section-pad page-width">
          <div className="section-kicker">
            <span>01</span>
            <div />
            <span>Specialized Market Segments</span>
          </div>
          <div className="markets-title-row" style={{ marginBottom: "36px" }}>
            <div>
              <h2 className="section-title">
                Six Focused Packaging <em>Market Solutions</em>
              </h2>
              <p className="lead-text">
                Every market sector has distinctive preservation needs. We formulate tailored barrier film combinations to maximize line performance and shelf impact.
              </p>
            </div>
            <button onClick={downloadBrochure} className="button button-outline">
              <Download size={16} /> Download Full Brochure PDF
            </button>
          </div>

          <div className="our-markets-grid">
            {MARKETS_LIST.map((market) => (
              <div key={market.id} className="market-sector-card">
                <div className="market-card-img-wrap">
                  <img
                    src={market.image}
                    alt={market.title}
                    className="market-card-img"
                    loading="lazy"
                  />
                  <span className="market-num-badge">{market.num}</span>
                  <span className="market-tag-overlay">{market.tagline}</span>
                </div>

                <div className="market-card-body">
                  <h3 className="market-card-title">{market.title}</h3>
                  <p className="market-card-desc">{market.description}</p>

                  {market.secondaryImage && (
                    <div style={{ display: "flex", gap: "8px", marginBottom: "14px", alignItems: "center" }}>
                      <span style={{ fontSize: "11px", fontWeight: "700", color: "var(--ink-soft)", textTransform: "uppercase" }}>
                        Format Preview:
                      </span>
                      <img
                        src={market.secondaryImage}
                        alt="Secondary format"
                        style={{ width: "48px", height: "36px", objectFit: "cover", borderRadius: "3px" }}
                      />
                    </div>
                  )}

                  <div className="market-points-list">
                    {market.keyPoints.map((pt, i) => (
                      <div key={i} className="market-point-item">
                        <CheckCircle2 size={16} className="point-icon" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="market-structure-tag">
                    <Layers size={14} />
                    <span>Structure: {market.recommendedStructures}</span>
                  </div>

                  <div className="market-card-footer">
                    <Link href="/contact" className="market-rfq-link">
                      Get Quote for {market.title.replace(/^[0-9]\.\s*/, "")} <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dedicated Highlight Section for Flour, Pulses & Spices Packaging */}
        <section className="section-pad dark-surface" id="flour-pulses-spices-spotlight">
          <div className="page-width">
            <div className="section-kicker light">
              <span>02</span>
              <div />
              <span>Dedicated Sector Spotlight</span>
            </div>
            <div className="markets-title-row">
              <div>
                <h2 className="section-title light">
                  Flour, Pulses & Spices Packaging: <em>Preserving Natural Taste & Texture</em>
                </h2>
                <p className="lead-text light" style={{ color: "rgba(255,255,255,0.75)" }}>
                  RPPL ensures that the natural taste and texture of products like flour, pulses, and spices are protected against ambient moisture, transit stresses, and aroma loss.
                </p>
              </div>
            </div>

            <div className="spotlight-dual-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px", marginTop: "32px" }}>
              {/* Card 1: Atta & Flour */}
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ height: "260px", overflow: "hidden" }}>
                  <img src="/images/atta-packaging.jpg" alt="Chakki Fresh Atta 5kg packaging pouch" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <span style={{ color: "#e4932d", fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Heavyweight Staples
                  </span>
                  <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "700", margin: "8px 0 10px" }}>
                    Chakki Fresh Atta & Flour (5kg & 10kg)
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.6", marginBottom: "16px" }}>
                    Engineered with reinforced multi-layer sealant plies and ergonomic D-punch handles to withstand 1.5-meter drop testing and high-speed filling line friction.
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: "8px", color: "rgba(255,255,255,0.85)", fontSize: "13px" }}>
                    <li>• Puncture-resistant heavy gauge polyethylene laminate</li>
                    <li>• Side-gusset format with flat bottom presentation</li>
                    <li>• Integrated D-punch handle for convenient consumer carrying</li>
                  </ul>
                  <Link href="/contact" className="button button-primary" style={{ display: "inline-flex", width: "100%", justifyContent: "center" }}>
                    Enquire for Flour Packs <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Card 2: Pulses & Spices */}
              <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ height: "260px", overflow: "hidden" }}>
                  <img src="/images/dal-pulses-packaging.jpg" alt="Indian toor and moong dal window packaging" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <span style={{ color: "#e4932d", fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Lentils & Masalas
                  </span>
                  <h3 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "700", margin: "8px 0 10px" }}>
                    Dals, Pulses & Ground Spices
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", lineHeight: "1.6", marginBottom: "16px" }}>
                    Crystal-clear transparent viewing windows allow consumers to inspect grain purity, while high-barrier foil layers preserve volatile aromatic essential oils in ground spices.
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: "8px", color: "rgba(255,255,255,0.85)", fontSize: "13px" }}>
                    <li>• Transparent high-clarity viewing window</li>
                    <li>• Resealable press-to-close zipper lock</li>
                    <li>• Zero flavor loss & oxidation protection for masalas</li>
                  </ul>
                  <Link href="/contact" className="button button-primary" style={{ display: "inline-flex", width: "100%", justifyContent: "center" }}>
                    Enquire for Pulses & Spices <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RFQ CTA Section */}
        <section className="section-pad page-width">
          <div className="quote-banner">
            <div>
              <div className="eyebrow light">
                <span className="eyebrow-rule" />
                <span>Custom Substrate Engineering</span>
              </div>
              <h2>Have a Specific Product or Barrier Challenge?</h2>
              <p>
                Our technical team is ready to evaluate your product chemistry and design custom multi-ply laminate structures with trial rolls.
              </p>
            </div>
            <div className="quote-banner-actions">
              <button onClick={downloadBrochure} className="button button-primary">
                <Download size={16} /> Download Brochure PDF
              </button>
              <Link href="/contact" className="button button-ghost">
                Discuss Your Requirements <ArrowUpRight size={16} />
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
