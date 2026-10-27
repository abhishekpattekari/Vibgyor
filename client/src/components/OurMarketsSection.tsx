import { Link } from "wouter";
import { ArrowUpRight, CheckCircle2, Download, Layers } from "lucide-react";
import { downloadBrochure } from "@/lib/downloadBrochure";

export interface MarketSector {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  keyPoints: string[];
  recommendedStructures: string;
}

export const OUR_MARKETS_DATA: MarketSector[] = [
  {
    id: "snack-food",
    num: "01",
    title: "Snack Food Packaging",
    tagline: "High-barrier solutions tailored for snacks & extruded foods",
    description:
      "Vibgyor provides high-performance solutions tailored for the snack food industry. High-barrier metalized films preserve crispness, prevent oil oxidation, and retain nitrogen flush integrity with vibrant rotogravure print brilliance.",
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
    title: "Confectionery & Biscuits Packaging",
    tagline: "Moisture-proof barriers locking crunch & aroma",
    description:
      "Our packaging for confectioneries and biscuits integrates protective barriers that maintain crispness, buttery aroma, and chocolate fat stability, guarding against humidity, melting, and ambient light exposure.",
    image: "/images/biscuits-packaging.jpg",
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
    title: "Frozen Food Packaging",
    tagline: "Engineered to withstand extreme sub-zero temperatures",
    description:
      "Designed to withstand extreme temperatures, our frozen food packaging solutions offer exceptional puncture resistance, drop durability, and hermetic seals from -18°C down to -40°C for green peas, sweet corn, and frozen snacks.",
    image: "/images/frozen-sweetcorn.jpg",
    keyPoints: [
      "Sub-zero cold crack & drop impact resistance",
      "Zero pinholes and moisture migration",
      "Stand-up pouches with zip & freeze-grade laminates",
    ],
    recommendedStructures: "Co-ex Polyamide (Nylon) / Specialized Cold PE",
  },
  {
    id: "tea-coffee-spices",
    num: "04",
    title: "Tea, Coffee, Flour, Pulses & Spices Packaging",
    tagline: "Aroma-shield & heavy-gauge durability for staples",
    description:
      "For tea and coffee, preserving aroma and freshness is paramount. Our high-barrier laminates with degassing valve compatibility protect against oxidation, while our heavy-duty pouches for atta, pulses, and ground spices ensure transit endurance.",
    image: "/images/tea-coffee-packaging.jpg",
    keyPoints: [
      "Aroma preservation & degassing valve integration",
      "Heavyweight 5kg/10kg tear-proof atta pouches",
      "Transparent window pouches for pulses & lentils",
    ],
    recommendedStructures: "Matte PET / Foil / Heavy-Duty PE & Gusset Film",
  },
  {
    id: "personal-care-medical",
    num: "05",
    title: "Home & Personal Care, Medical Devices Packaging",
    tagline: "Hygienic barrier solutions for liquids & healthcare",
    description:
      "From personal care products to sensitive medical devices, our packaging meets stringent hygiene, seal integrity, and chemical resistance requirements for spouted refill pouches, cosmetic sachets, and sterile medical items.",
    image: "/images/medical-personal-care.jpg",
    keyPoints: [
      "Chemical resistance to aggressive surfactants",
      "Spout fitment for liquid refill pouches",
      "Clean-room grade sterile barrier laminates",
    ],
    recommendedStructures: "Multi-barrier PET / Nylon / Chemical-Resistant PE",
  },
];

export default function OurMarketsSection() {
  return (
    <section className="our-markets-section" id="markets">
      <div className="page-width">
        {/* Section Header */}
        <div className="our-markets-header">
          <div className="eyebrow">
            <span className="eyebrow-rule" />
            <span>Target Industry Sectors</span>
          </div>
          <div className="markets-title-row">
            <div>
              <h2 className="section-title">
                Our Markets: <em>Engineered for Purpose</em>
              </h2>
              <p className="lead-text">
                Explore customized flexible packaging laminates and pouches designed around the unique shelf-life, barrier, and filling needs of your industry.
              </p>
            </div>
            <div className="markets-header-actions">
              <button onClick={downloadBrochure} className="button button-outline">
                <Download size={16} /> Download Brochure PDF
              </button>
            </div>
          </div>
        </div>

        {/* Markets Cards Grid */}
        <div className="our-markets-grid">
          {OUR_MARKETS_DATA.map((market) => (
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
                    Get Quote for {market.title} <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Quick List & Discussion Box */}
        <div className="market-discuss-box" style={{ marginTop: "40px" }}>
          <div className="market-discuss-content">
            <span className="market-discuss-kicker">Extensive Food & Non-Food Applications</span>
            <h3>Catering to Meats, Dairy, Confectionery, Personal Care, Medical & More</h3>
            <p>
              We manufacture flexible barrier packaging for fresh & frozen meats, fish, cheeses, sauces & liquids, bakery, dry foods, nutrition supplements, cold cuts, fruits & vegetables, ready meals, coffee & tea, pet foods, automotive products, perfumery, medical supplies, hardware, cleaning products, agrochemicals, and more.
            </p>
          </div>
          <div className="market-discuss-actions">
            <Link href="/markets" className="button button-primary">
              View All Market Sectors <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact" className="button button-secondary">
              Discuss with Vibgyor Print N Pack <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
