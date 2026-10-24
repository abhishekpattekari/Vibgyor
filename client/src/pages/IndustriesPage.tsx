import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Link } from "wouter";
import { ArrowUpRight, Apple, Sprout, Snowflake, Sparkles, HeartPulse, Check, Download, Layers } from "lucide-react";
import { downloadBrochure } from "@/lib/downloadBrochure";

const SECTORS = [
  {
    icon: Apple,
    title: "1. Snack Food Packaging",
    subtitle: "High-performance solutions tailored for the snack food industry",
    desc: "Vibgyor provides high-performance solutions tailored for the snack food industry. High-barrier metalized films preserve crispness, prevent oil oxidation, and retain nitrogen flush integrity with vibrant rotogravure print brilliance.",
    products: ["Potato Chips & Crisps", "Extruded Snacks & Namkeen", "Roasted Nuts & Dry Fruits", "Popcorn & Fryums"],
    structure: "BOPP / Met-BOPP, PET / Met-PET / Poly, Gloss & Matte Foil Laminates",
    image: "/images/potato-chips.jpg",
  },
  {
    icon: Sparkles,
    title: "2. Confectionery & Biscuits Packaging",
    subtitle: "Protective barriers maintaining moisture resistance and crunch",
    desc: "Our packaging for confectioneries and biscuits integrates protective barriers that maintain moisture resistance, crisp texture, aroma preservation, and long shelf life against humidity and thermal variation.",
    products: ["Artisan Biscuits & Cookies", "Chocolates & Truffles", "Hard Candies & Gums", "Wafers & Bakery Products"],
    structure: "BOPP / Met-BOPP / Cast Polypropylene (CPP), Printed PET / Foil / Cold-Seal",
    image: "/images/biscuits-packaging.jpg",
  },
  {
    icon: Snowflake,
    title: "3. Frozen Food Packaging",
    subtitle: "Designed to withstand extreme temperatures down to -40°C",
    desc: "Designed to withstand extreme temperatures, our frozen food packaging solutions offer high puncture resistance, drop durability, and hermetic seals from -18°C down to -40°C for green peas, sweet corn, and frozen snacks.",
    products: ["Frozen Sweet Corn & Green Peas", "Ready-to-Cook Snacks & Parathas", "Frozen Seafood & Poultry", "Ice Creams & Frozen Desserts"],
    structure: "Co-ex Polyamide (Nylon) / Low-Temperature Linear Polyethylene (PE)",
    image: "/images/frozen-sweetcorn.jpg",
  },
  {
    icon: Sprout,
    title: "4. Tea, Coffee, Flour, Pulses & Spices Packaging",
    subtitle: "Aroma-shield & heavy-gauge durability for staples and beverages",
    desc: "For tea and coffee, preserving aroma and freshness is paramount. Our high-barrier laminates with degassing valve compatibility protect against oxidation, while our heavy-duty pouches for atta, pulses, and ground spices ensure transit endurance.",
    products: ["Roasted Coffee Beans & Instant Coffee", "Specialty Green & Assam Teas", "Chakki Fresh Atta (5kg & 10kg)", "Indian Dals & Pulses (Window Pouches)", "Ground Spices & Masalas"],
    structure: "Matte PET / Foil / PE, High-Tensile Heavy Gauge PE Gussets with D-Punch Handle",
    image: "/images/tea-coffee-packaging.jpg",
  },
  {
    icon: HeartPulse,
    title: "5. Home & Personal Care, Medical Devices Packaging",
    subtitle: "Hygienic barrier solutions for liquids, wipes & healthcare",
    desc: "From personal care products to sensitive medical devices, our packaging meets stringent hygiene, hermetic sealing, and chemical resistance requirements for spouted refill pouches, cosmetic sachets, and sterile medical items.",
    products: ["Liquid Soap & Lotion Refill Pouches (with Spout)", "Disinfectant & Wet Wipes Sachets", "Sterile Medical Gauze & Device Pouches", "Shampoo & Cosmetic Barrier Sachets"],
    structure: "Multi-barrier PET / Nylon / Chemical-Resistant PE, Clean-room Compatible",
    image: "/images/medical-personal-care.jpg",
  },
];

export default function IndustriesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="site-shell">
      <Navbar />

      <main className="page-main">
        {/* Hero */}
        <section className="page-hero-banner" style={{ backgroundImage: `url('/images/potato-chips.jpg')` }}>
          <div className="page-hero-overlay" />
          <div className="page-width page-hero-content">
            <div className="eyebrow light">
              <span className="eyebrow-rule" />
              <span>Target Industry Sectors</span>
            </div>
            <h1>
              Packaging that Knows <em>Its Job.</em>
            </h1>
            <p className="page-hero-sub">
              Different products ask different things of a laminate. From snacks and confectionery to frozen foods, beverages, staples, and medical devices, we engineer the exact barrier structure for your market.
            </p>
            <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
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
            <span>Our Market Categories</span>
          </div>
          <h2 className="section-title">Specialized Packaging Solutions by Sector</h2>

          <div className="sectors-stack">
            {SECTORS.map((sec, i) => {
              const IconComp = sec.icon;
              return (
                <div key={i} className="sector-card">
                  <div className="sector-grid-layout">
                    <div className="sector-info-side">
                      <div className="sector-top">
                        <div className="sector-icon-wrap">
                          <IconComp size={24} />
                        </div>
                        <div>
                          <h3>{sec.title}</h3>
                          <p className="sector-sub">{sec.subtitle}</p>
                        </div>
                      </div>
                      <p className="sector-desc">{sec.desc}</p>

                      <div className="sector-products-box">
                        <strong>Typical Applications:</strong>
                        <ul>
                          {sec.products.map((p, idx) => (
                            <li key={idx}>
                              <Check size={14} className="check-icon" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="sector-structure-box">
                        <Layers size={15} />
                        <div>
                          <small>RECOMMENDED SUBSTRATE STRUCTURE</small>
                          <p>{sec.structure}</p>
                        </div>
                      </div>

                      <div className="sector-action-row">
                        <Link href="/contact" className="sector-quote-link">
                          Enquire for this Market <ArrowUpRight size={15} />
                        </Link>
                      </div>
                    </div>

                    <div className="sector-image-side">
                      <img src={sec.image} alt={sec.title} loading="lazy" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
