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
      "Vibgyor Print N Pack provides high-performance solutions tailored for the snack food industry. High-barrier metalized films preserve crispness, prevent oil oxidation, and retain nitrogen flush integrity with vibrant rotogravure print brilliance.",
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
      "Vibgyor Print N Pack ensures that the natural taste and texture of products like flour, pulses, and spices are preserved through advanced multi-layer barrier laminates. Engineered to endure heavy bulk filling (5kg–10kg), transit drop impacts, aroma retention for ground spices, and transparent window visibility for grains and lentils.",
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

export const FOOD_MARKETS = [
  {
    title: "Meats",
    desc: "Fresh, chilled & frozen meats, bone-guard puncture resistance, hermetic vacuum pouches.",
    tag: "High Puncture Barrier",
  },
  {
    title: "Fish and shellfish",
    desc: "Seafood, prawns, frozen fish fillets, anti-frost moisture barrier with odor confinement.",
    tag: "Sub-Zero Moisture Seal",
  },
  {
    title: "Cheeses",
    desc: "Blocks, shredded & sliced cheeses, dairy-grade barriers balancing gas & moisture equilibrium.",
    tag: "Gas Permeability Control",
  },
  {
    title: "Sauces and liquids",
    desc: "Pastes, ketchups, mayonnaise, liquid condiments in spouted stand-up pouches and sachets.",
    tag: "Leak-Proof Seal Integrity",
  },
  {
    title: "Confectionary and Bakery",
    desc: "Chocolates, biscuits, cookies, cakes, wafers with aroma-lock and moisture-proof crunch retention.",
    tag: "Aroma & Crunch Shield",
  },
  {
    title: "Dry Foods",
    desc: "Cereals, pasta, noodles, ready-to-cook mixes, grains with transparent viewing windows.",
    tag: "Clarity & Shelf Appeal",
  },
  {
    title: "Diet and Nutrition Supplements",
    desc: "Whey protein, dietary formulations, vitamin powders with press-to-close airtight zipper locks.",
    tag: "Hermetic Powder Seal",
  },
  {
    title: "Cold cuts and Cured Sausages",
    desc: "Sliced salami, pepperoni, cured meats with thermoforming vacuum laminates.",
    tag: "Oxygen Barrier (OTR)",
  },
  {
    title: "Fruit and vegetables",
    desc: "IQF frozen green peas, sweet corn, fresh-cut produce, breathable and anti-fog laminates.",
    tag: "Anti-Fog & Freeze Grade",
  },
  {
    title: "Ready meals",
    desc: "Retortable flexible packaging, heat-and-eat meals, microwaveable retort pouches.",
    tag: "Retort & Thermal Resistance",
  },
  {
    title: "Coffee, tea and cocoa",
    desc: "Whole roasted beans, tea leaves, cocoa powder with degassing valves and light blackout pure foil.",
    tag: "Degassing Valve & Foil",
  },
  {
    title: "Nuts, pickles and condiments",
    desc: "Roasted cashews, almonds, oil-rich pickles, high-acidity resistance preventing delamination.",
    tag: "Oil & Acidity Resistant",
  },
  {
    title: "Pet food",
    desc: "Dry kibble, pet treats, wet food chunks in heavy-load zipper pouches with aroma containment.",
    tag: "Drop & Odor Containment",
  },
  {
    title: "Custom Food Packaging (etc.)",
    desc: "Have a specialized recipe or food application? We engineer bespoke barrier structures tailored to your exact shelf-life needs.",
    tag: "Custom Engineered Barrier",
  },
];

export const NON_FOOD_MARKETS = [
  {
    title: "Automotive Products",
    desc: "Greases, motor oils, engine lubricants, mechanical spare parts wrap with oil and tear resistance.",
    tag: "Hydrocarbon & Puncture Barrier",
  },
  {
    title: "Perfumery",
    desc: "Scented wipes, fragrance sachets, cosmetic aroma-lock foil barriers preventing volatile dissipation.",
    tag: "Zero Volatile Loss",
  },
  {
    title: "Personal Care and Hygiene",
    desc: "Shampoos, conditioners, liquid soaps, lotions, body wash spouted refill pouches and sachets.",
    tag: "Surfactant & Chemical Resistance",
  },
  {
    title: "Medical Supplies",
    desc: "Sterile medical devices, surgical gloves, diagnostic kits, clean-room compliant hermetic barrier.",
    tag: "Clean-Room Grade Barrier",
  },
  {
    title: "Hardware",
    desc: "Fasteners, screws, precision metal parts with puncture-proof and rust-preventive (VCI) films.",
    tag: "Heavy-Duty & Rust Preventive",
  },
  {
    title: "Cleaning products",
    desc: "Detergent powders, dishwasher tabs, surface cleaner refills with aggressive surfactant resistance.",
    tag: "Chemical & Moisture Proof",
  },
  {
    title: "Chemical and biological products",
    desc: "Agrochemicals, fertilizers, lab reagents, bio-cultures with certified multi-layer barrier films.",
    tag: "Hazard-Safe Multi-Ply Barrier",
  },
  {
    title: "Specialized Non-Food Applications (etc.)",
    desc: "Need packaging for industrial, electronic, or specialty chemical items? Discuss your custom specifications with our team.",
    tag: "Tailored Industrial Solutions",
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
        <section className="section-pad page-width" style={{ padding: "72px 0" }}>
          <div className="section-kicker">
            <span>01</span>
            <div />
            <span>Specialized Market Segments</span>
          </div>
          <div className="markets-title-row" style={{ marginBottom: "36px" }}>
            <div>
              <h2 className="section-title">
                Market Solutions <em>by Industry</em>
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
        <section className="section-pad dark-surface" id="flour-pulses-spices-spotlight" style={{ padding: "72px 0" }}>
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
                  Vibgyor Print N Pack ensures that the natural taste and texture of products like flour, pulses, and spices are protected against ambient moisture, transit stresses, and aroma loss.
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

        {/* Comprehensive Market Directory: Food & Non-Food Packaged Products */}
        <section className="section-pad page-width" id="market-directory" style={{ padding: "72px 0" }}>
          <div className="section-kicker">
            <span>03</span>
            <div />
            <span>Market Directory & Sector Applications</span>
          </div>
          <div className="markets-title-row" style={{ marginBottom: "32px" }}>
            <div>
              <h2 className="section-title">
                Comprehensive Market Sectors: <em>Food & Non-Food Products</em>
              </h2>
              <p className="lead-text" style={{ maxWidth: "860px" }}>
                Whether you need high-barrier vacuum films for meats and dairy, spouted pouches for liquid personal care, or heavy-duty puncture-resistant wraps for automotive and medical parts — Vibgyor Print N Pack provides certified, line-ready packaging for every sector.
              </p>
            </div>
          </div>

          {/* Group 1: Food Packaging Solutions */}
          <div className="market-group-block">
            <div className="market-group-header">
              <div className="market-group-title-wrap">
                <span className="market-group-badge">Category 01</span>
                <h3>FOOD PACKAGING SOLUTIONS</h3>
              </div>
              <p>
                Engineered with controlled gas transmission, aroma-lock barriers, nitrogen-flush stability, and grease-proof multi-layer laminates.
              </p>
            </div>

            <div className="market-sub-grid">
              {FOOD_MARKETS.map((item, idx) => (
                <div key={idx} className="market-sub-card">
                  <div className="market-sub-card-top">
                    <span className="market-sub-index">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="market-sub-tag">{item.tag}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <Link href="/contact" className="market-sub-link">
                    Discuss packaging for {item.title} →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Other Non-Food Packaged Products */}
          <div className="market-group-block" style={{ marginTop: "48px" }}>
            <div className="market-group-header non-food-header">
              <div className="market-group-title-wrap">
                <span className="market-group-badge non-food-badge">Category 02</span>
                <h3>OTHER NON-FOOD PACKAGED PRODUCTS</h3>
              </div>
              <p>
                Engineered for aggressive surfactant resistance, chemical containment, puncture protection, and sterile medical-grade barriers.
              </p>
            </div>

            <div className="market-sub-grid">
              {NON_FOOD_MARKETS.map((item, idx) => (
                <div key={idx} className="market-sub-card">
                  <div className="market-sub-card-top">
                    <span className="market-sub-index">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="market-sub-tag non-food-tag">{item.tag}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <Link href="/contact" className="market-sub-link">
                    Discuss packaging for {item.title} →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Dedicated Discussion & Custom Substrate Engineering Callout */}
          <div className="market-discuss-box">
            <div className="market-discuss-content">
              <span className="market-discuss-kicker">Custom Formulation &amp; Substrate Engineering</span>
              <h3>Don’t See Your Specific Product Listed? Have a Barrier Challenge?</h3>
              <p>
                Whatever is not listed above, our engineering laboratory can formulate, laminate, and test customized barrier structures for your exact product specifications. Our technical team is ready to evaluate your product chemistry and design custom multi-ply laminate structures with trial rolls. <strong>Discuss it with Vibgyor Print N Pack</strong> to get trial rolls, barrier calculations, and custom factory quotes.
              </p>
            </div>
            <div className="market-discuss-actions">
              <Link href="/contact" className="button button-primary">
                Discuss with Vibgyor Print N Pack <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://wa.me/917558381231?text=Hello%20Vibgyor%20Print%20N%20Pack%2C%20I%20would%20like%20to%20discuss%20custom%20packaging%20for%20my%20product%20requirements."
                target="_blank"
                rel="noreferrer"
                className="button button-whatsapp"
              >
                Chat on WhatsApp
              </a>
              <button onClick={downloadBrochure} className="button button-brochure">
                <Download size={16} /> Download Full Brochure PDF
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
