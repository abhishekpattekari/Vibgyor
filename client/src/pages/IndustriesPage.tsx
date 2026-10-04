import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Link } from "wouter";
import { ArrowUpRight, Apple, Sprout, Snowflake, Sparkles, HeartPulse, Check } from "lucide-react";

const SECTORS = [
  {
    icon: Apple,
    title: "Food & Beverages",
    subtitle: "Aroma retention, moisture barrier, crisp shelf appeal",
    desc: "Food packaging requires uncompromising barrier protection against humidity, oxygen, and UV light to preserve crunch, flavor, and freshness.",
    products: ["Namkeen & Potato Chips", "Dry Fruits & Nuts", "Spices, Masalas & Seasonings", "Biscuits & Confectionery", "Tea, Coffee & Beverage Powders"],
    structure: "BOPP / Met-BOPP, PET / Met-PET / Poly, Matte BOPP / Foil / Poly",
    image: "/images/printed-rolls.jpg",
  },
  {
    icon: Sprout,
    title: "Agriculture & Agro-Chemicals",
    subtitle: "Durable barrier plies for aggressive active ingredients",
    desc: "Agricultural products require heavy-duty laminate structures with superior dart-impact resistance and chemical-inert sealant films.",
    products: ["Hybrid Crop & Vegetable Seeds", "Agrochemicals & Pesticides", "Bio-fertilizers & Micro-nutrients", "Animal Feeds & Supplements"],
    structure: "PET / Foil / Special Heavy Gauge Poly, PET / Poly / Met-PET",
    image: "/images/plain-metallic-rolls.jpg",
  },
  {
    icon: Snowflake,
    title: "Frozen Foods & Ready-to-Eat",
    subtitle: "Sub-zero durability, leakproof hermetic seal integrity",
    desc: "Cold chain handling subjects pouches to extreme thermal shock and handling drops. Our low-temperature sealant layers prevent brittleness.",
    products: ["Frozen Peas, Corn & Vegetables", "Ready-to-Cook Curries & Parathas", "Ice Creams & Frozen Desserts", "Meat & Seafood Products"],
    structure: "Co-ex Nylon / Poly, PET / Poly, High-Impact EVOH Barrier Laminates",
    image: "/images/pouch-formats.jpg",
  },
  {
    icon: Sparkles,
    title: "Personal Care & Home Care",
    subtitle: "Chemical resistance, attractive gloss, easy dispensing",
    desc: "Household liquids and personal care powders require laminate barriers resistant to surfactants, essential oils, and fragrances.",
    products: ["Detergent Powders & Liquid Refills", "Shampoo & Conditioner Sachets", "Face Creams, Body Lotions & Powders", "Wet Wipes & Cleaning Cloths"],
    structure: "PET / Met-PET / Special Sealant Poly, BOPP / Foil / PE",
    image: "/images/product-detail.jpg",
  },
  {
    icon: HeartPulse,
    title: "Wellness & Nutraceuticals",
    subtitle: "Ultra-pure pharmaceutical-grade moisture protection",
    desc: "Nutritional supplements and health formulations demand high-barrier protection to prevent oxidation and active ingredient degradation.",
    products: ["Whey Protein & Gym Supplements", "Ayurvedic & Herbal Extracts", "Vitamin Powders & Effervescent Tablets", "Dietary Fiber & Health Mixes"],
    structure: "PET / Pure Aluminium Foil / Poly, Stand-Up Zipper Pouches",
    image: "/images/quality-detail.jpg",
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
        <section className="page-hero-banner" style={{ backgroundImage: `url('/images/pouch-formats.jpg')` }}>
          <div className="page-hero-overlay" />
          <div className="page-width page-hero-content">
            <div className="eyebrow light">
              <span className="eyebrow-rule" />
              <span>Markets We Serve</span>
            </div>
            <h1>
              Packaging that Knows <em>Its Job.</em>
            </h1>
            <p className="page-hero-sub">
              Different products ask different things of a laminate. We start with the chemical and physical demands of your product, then engineer the exact barrier structure.
            </p>
          </div>
        </section>

        {/* Sectors Grid */}
        <section className="section-pad page-width">
          <div className="section-kicker">
            <span>01</span>
            <div />
            <span>Target Industries</span>
          </div>
          <h2 className="section-title">Specialized Packaging Solutions by Category</h2>

          <div className="sectors-stack">
            {SECTORS.map((sec, i) => {
              const IconComp = sec.icon;
              return (
                <div key={i} className="sector-card">
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
                    <strong>Recommended Laminate:</strong>
                    <code>{sec.structure}</code>
                  </div>

                  <div className="sector-action">
                    <Link href="/contact" className="inline-link dark">
                      Enquire for {sec.title} →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Custom brief callout */}
        <section className="section-pad dark-surface">
          <div className="page-width text-center">
            <h2 className="section-title light">Need a Custom Laminate Trial for Your Line?</h2>
            <p className="section-sub light" style={{ margin: "0 auto 24px", maxWidth: "600px" }}>
              Send us your product sample, target shelf-life, and filling machine specifications. Our packaging team will evaluate the optimum film structure and provide sample rolls or pouches.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link href="/contact" className="button button-primary">
                Discuss Your Category <ArrowUpRight size={16} />
              </Link>
              <a href="https://wa.me/917558381231" target="_blank" rel="noreferrer" className="button button-whatsapp">
                Chat on WhatsApp
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
