import { useEffect, useState } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import {
  ArrowUpRight,
  Check,
  CircleDot,
  ChevronDown,
  ChevronRight,
  FileText,
  Factory,
  Gauge,
  Mail,
  MapPin,
  Menu,
  MoveRight,
  Package,
  Phone,
  PlayCircle,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  ZoomIn,
  ZoomOut,
  X,
} from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "917558381231";
const WHATSAPP_MESSAGE = "Hello, I am interested in your flexible packaging solutions. I would like to discuss my packaging requirement.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const ASSETS = {
  hero: "/images/hero-industrial.jpg",
  rolls: "/images/printed-rolls.jpg",
  pouches: "/images/pouch-formats.jpg",
  factory: "/images/factory-detail.jpg",
  gallery: "/images/product-detail.jpg",
  quality: "/images/quality-detail.jpg",
  printedRolls: "/images/printed-rolls.jpg",
  plainMetallic: "/images/plain-metallic-rolls.jpg",
  pouchFormats: "/images/pouch-formats.jpg",
  materials: "/images/materials-bg.jpg",
  mark: "/images/logo.png",
};

const companySnapshot = [
  ["Industry", "Flexible Laminated Packaging"],
  ["Printing", "Rotogravure"],
  ["Printing capability", "Up to 9 Colours"],
  ["Manufacturing", "Printing • Lamination • Slitting • Pouch Making"],
  ["Markets", "Food • Agriculture • Frozen Food • Personal Care • Wellness"],
];

const products = [
  {
    id: "printed",
    index: "01",
    title: "Printed laminated rolls",
    short: "Gravure-led packaging webs",
    description:
      "Custom-printed flexible laminated rolls for brands that need shelf-ready presentation paired with controlled converting.",
    image: ASSETS.printedRolls,
    specs: [
      "Gravure / rotogravure print capability",
      "Custom artwork and finish direction",
      "Structures selected around the product need",
    ],
  },
  {
    id: "plain",
    index: "02",
    title: "Plain & metallic laminated rolls",
    short: "Clean, versatile substrate formats",
    description:
      "Plain, silver, and metallic laminate options for businesses looking for a clean format or a foundation for further conversion.",
    image: ASSETS.plainMetallic,
    specs: [
      "PET / MET PET / PE combinations",
      "Plain and metallic appearances",
      "Slit-to-width supply for customer requirements",
    ],
  },
  {
    id: "pouches",
    index: "03",
    title: "Flexible packaging pouches",
    short: "Formats made for finished products",
    description:
      "Flexible pouches and customized packaging formats produced around your product, process, and brand presentation.",
    image: ASSETS.pouchFormats,
    specs: [
      "Stand-up, three-side-seal and custom pouch options",
      "Printed and unprinted packaging formats",
      "Customer-specific pack development",
    ],
  },
];

const industries = [
  {
    name: "Food & food processing",
    note: "Flexible packaging formats for product presentation and practical handling",
  },
  {
    name: "Hotels, restaurants & catering",
    note: "Pack formats for businesses that prepare, serve, or supply food products",
  },
  {
    name: "FMCG",
    note: "Custom print and packaging options for high-visibility consumer products",
  },
  {
    name: "Agriculture & agro products",
    note: "Durable flexible packaging for supply-chain-facing product categories",
  },
  {
    name: "Industrial products",
    note: "Practical laminates and pouches for relevant industrial applications",
  },
  {
    name: "Retail & consumer products",
    note: "Format and finish choices designed around brand communication",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Gravure printing",
    text: "Engraved-cylinder print capability for controlled detail, colour, and repeatability.",
  },
  {
    number: "02",
    title: "Lamination",
    text: "Flexible structures brought together around the product and packaging application.",
  },
  {
    number: "03",
    title: "Slitting",
    text: "Rolls prepared to customer-specific width and conversion requirements.",
  },
  {
    number: "04",
    title: "Pouch making",
    text: "Finished pouch formats produced where the final pack format calls for them.",
  },
];

const materials = [
  {
    code: "PET",
    name: "Polyethylene Terephthalate",
    description:
      "Often selected as an outer layer where a crisp appearance and print presentation are required.",
  },
  {
    code: "BOPP",
    name: "Biaxially Oriented Polypropylene",
    description:
      "A versatile film option commonly used where clarity, appearance, and a lightweight pack feel matter.",
  },
  {
    code: "CPP",
    name: "Cast Polypropylene",
    description:
      "Used in suitable structures where a smooth film layer and pack functionality are needed.",
  },
  {
    code: "LDPE",
    name: "Low-Density Polyethylene",
    description:
      "A flexible polyethylene option used in selected laminated packaging combinations.",
  },
  {
    code: "LLDPE",
    name: "Linear Low-Density Polyethylene",
    description:
      "A packaging film material considered for flexible structures based on the required pack application.",
  },
  {
    code: "HDPE",
    name: "High-Density Polyethylene",
    description:
      "A polyethylene option used where the intended packaging construction calls for its properties.",
  },
  {
    code: "MET PET",
    name: "Metallized PET",
    description:
      "A metallic-looking layer used in suitable laminates to create a distinctive visual finish.",
  },
  {
    code: "AL FOIL",
    name: "Aluminium Foil",
    description:
      "A material layer considered for applicable packaging structures when product and format requirements call for it.",
  },
];

const productionFlow = [
  "Enquiry",
  "Specification",
  "Printing",
  "Lamination",
  "Slitting",
  "Pouch making",
  "Quality check",
  "Dispatch",
];

const qualityChecks = [
  "Raw material inspection",
  "Printing quality control",
  "Colour & shade matching",
  "Lamination inspection",
  "Slitting accuracy",
  "Pouch dimension & seal checks",
  "Final inspection",
  "Packing & dispatch",
];

const lightboxImages = [
  { src: ASSETS.printedRolls, alt: "Printed laminated packaging rolls", label: "Printed laminated rolls" },
  { src: ASSETS.plainMetallic, alt: "Plain and metallic laminated rolls", label: "Plain & metallic rolls" },
  { src: ASSETS.pouchFormats, alt: "Flexible packaging pouches", label: "Flexible packaging pouches" },
  { src: ASSETS.gallery, alt: "Laminated packaging materials and finished pouch detail", label: "Print web detail" },
];

const galleryItems = [
  { number: "01", category: "Factory", title: "The production floor", src: ASSETS.factory, alt: "Flexible packaging manufacturing factory floor" },
  { number: "02", category: "Machinery", title: "Built for repeatability", src: ASSETS.hero, alt: "Flexible packaging printing and converting machinery" },
  { number: "03", category: "Production", title: "Print. Laminate. Convert.", src: ASSETS.rolls, alt: "Printed laminated film rolls in production" },
  { number: "04", category: "Products", title: "Finished pack formats", src: ASSETS.pouchFormats, alt: "Finished flexible packaging pouches" },
  { number: "05", category: "Quality", title: "Every detail checked", src: ASSETS.quality, alt: "Quality inspection of laminated packaging film" },
  { number: "06", category: "Dispatch", title: "Ready for the next process", src: ASSETS.gallery, alt: "Packed finished flexible packaging goods" },
];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="none">
      <path d="M20.5 3.5A11.8 11.8 0 0 0 12.08 0C5.55 0 .23 5.32.23 11.87c0 2.09.55 4.13 1.59 5.93L.13 24l6.35-1.66a11.84 11.84 0 0 0 5.59 1.42h.01c6.54 0 11.87-5.32 11.87-11.87 0-3.18-1.24-6.16-3.45-8.39Z" fill="currentColor" />
      <path d="M17.48 13.72c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" fill="white" />
    </svg>
  );
}

function scrollToId(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<(typeof lightboxImages)[number] | null>(null);
  const [lightboxZoom, setLightboxZoom] = useState(1);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!lightboxImage) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxImage]);

  const go = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  const openLightbox = (image: (typeof lightboxImages)[number]) => {
    setLightboxImage(image);
    setLightboxZoom(1);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setLightboxZoom(1);
  };

  const handleContactChannel = (channel: "call" | "whatsapp") => {
    if (channel === "whatsapp") {
      window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
      return;
    }
    window.location.href = "tel:+917558381231";
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    toast.success("Thanks — your enquiry is ready for the Vibgyor team.", {
      description:
        "We’ll review your structure and respond with the next step.",
    });
  };

  return (
    <div className="site-shell">
      <Navbar />

      <main id="top">
        <section className="hero-section">
          <div
            className="hero-media"
            style={{ backgroundImage: `url(${ASSETS.hero})` }}
          />
          <div className="hero-overlay" />
          <div className="hero-content page-width">
            <div className="hero-main-col">
              <p className="eyebrow light">
                <span className="eyebrow-rule" /> Protect · Decorate · Communicate
              </p>
              <h1>
                Flexible Packaging Solutions <em>Engineered for Performance</em>
              </h1>
              <p className="hero-copy">
                High-quality printed and laminated flexible packaging solutions for food, agriculture, frozen food, personal care and other growing industries.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="button button-primary">
                  Request a quote <MoveRight size={17} />
                </Link>
                <Link href="/products" className="text-link light">
                  <PlayCircle size={18} /> Explore products
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-bottom page-width">
            <div className="hero-note">
              <span className="status-dot" /> Shingve Tukai Industrial Area · MIDC
            </div>
            <p>Plot No. B-26/1 · Ahmednagar · Maharashtra · India</p>
          </div>
        </section>

        <section className="intro-section page-width section-pad" id="about">
          <div className="section-kicker">
            <span>01</span>
            <div /> About Vibgyor
          </div>
          <div className="intro-layout">
            <h2>
              A manufacturing partner built for the{" "}
                <em>Driven by Quality.</em>
            </h2>
            <div className="intro-copy">
              <p className="lead">
                Vibgyor Print N Pack is a flexible laminated packaging manufacturer based in Maharashtra, India. We create dependable printed and laminated packaging for businesses that need consistency from first specification to final dispatch.
              </p>
              <p>
                Our customer-focused approach brings rotogravure printing, lamination, slitting, and pouch making together for food, agriculture, frozen food, personal care, wellness, and other growing industries.
              </p>
              <button
                className="text-link dark"
                onClick={() => go("capabilities")}
              >
                Our manufacturing focus <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
          <div className="snapshot-grid" aria-label="Company snapshot">
            {companySnapshot.map(([label, value]) => (
              <div className="snapshot-item" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="credibility-strip" aria-label="Manufacturing capabilities">
            <span>Rotogravure Printing</span><i /> <span>Lamination</span><i /> <span>Slitting</span><i /> <span>Pouch Making</span><i /> <span>Quality Control</span>
          </div>
          <div className="stat-strip">
            <div className="stat-item">
              <span>01</span>
              <strong>Protect</strong>
              <small>the product</small>
            </div>
            <div className="stat-item">
              <span>02</span>
              <strong>Decorate</strong>
              <small>the presentation</small>
            </div>
            <div className="stat-item">
              <span>03</span>
              <strong>Communicate</strong>
              <small>the brand</small>
            </div>
            <div className="stat-item stat-accent">
              <span>VP</span>
              <strong>Made in India</strong>
              <small>for B2B supply</small>
            </div>
          </div>
        </section>

        <section className="products-section section-pad" id="products">
          <div className="page-width">
            <div className="section-heading-row">
              <div>
                <div className="section-kicker">
                  <span>02</span>
                  <div /> Product range
                </div>
                <h2>
                  One material language.
                  <br />
                  <em>Many pack formats.</em>
                </h2>
              </div>
              <p>
                Explore plain laminated rolls, printed laminated rolls, flexible
                packaging pouches, silver or metallic formats, and customized
                solutions developed around a specific customer requirement.
              </p>
            </div>
            <div className="product-stage">
              <div
                className="product-tabs"
                role="tablist"
                aria-label="Product range"
              >
                {products.map(product => (
                  <button
                    key={product.id}
                    className={`product-tab ${activeProduct.id === product.id ? "active" : ""}`}
                    onClick={() => setActiveProduct(product)}
                    role="tab"
                    aria-selected={activeProduct.id === product.id}
                  >
                    <span className="product-tab-thumb">
                      <img src={product.image} alt="" loading="lazy" decoding="async" />
                    </span>
                    <span className="tab-index">{product.index}</span>
                    <span>
                      <strong>{product.title}</strong>
                      <small>{product.short}</small>
                    </span>
                    <ChevronRight size={18} />
                  </button>
                ))}
              </div>
              <div className="product-feature">
                <button
                  className="product-image-wrap"
                  type="button"
                  onClick={() => openLightbox(lightboxImages.find(image => image.src === activeProduct.image) ?? lightboxImages[0])}
                  aria-label={`View ${activeProduct.title} in detail`}
                >
                  <img
                    key={activeProduct.id}
                    src={activeProduct.image}
                    alt={activeProduct.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="image-expand-hint"><ZoomIn size={16} /> View detail</span>
                </button>
                <div className="product-details">
                  <div className="detail-top">
                    <span className="material-label">
                      Vibgyor / {activeProduct.index}
                    </span>
                    <span className="detail-arrow">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <h3>{activeProduct.title}</h3>
                  <p>{activeProduct.description}</p>
                  <ul>
                    {activeProduct.specs.map(spec => (
                      <li key={spec}>
                        <Check size={15} /> {spec}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="text-link dark"
                    onClick={() => go("contact")}
                  >
                    Discuss this format <MoveRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="materials-section section-pad" id="materials">
          <div className="page-width">
            <div className="section-heading-row materials-heading">
              <div>
                <div className="section-kicker">
                  <span>03</span>
                  <div /> Materials
                </div>
                <h2>
                  Build the structure
                  <br />
                  from the <em>right layer.</em>
                </h2>
              </div>
              <p>
                Each material has a different role in a flexible packaging
                structure. The final combination should be selected around the
                product, pack format, and customer-specific requirements.
              </p>
            </div>
            <div className="materials-grid">
              {materials.map(material => (
                <article className="material-card" key={material.code}>
                  <span>{material.code}</span>
                  <h3>{material.name}</h3>
                  <p>{material.description}</p>
                </article>
              ))}
            </div>
            <div className="materials-note">
              <ShieldCheck size={18} />
              <p>
                Technical specifications, dimensions, sealant grades, barrier
                values, and minimum quantities are discussed for the relevant
                packaging application rather than published as generic claims.
              </p>
            </div>
          </div>
        </section>

        <section className="capabilities-section section-pad" id="capabilities">
          <div className="page-width">
            <div className="section-kicker light">
              <span>04</span>
              <div /> Manufacturing & capabilities
            </div>
            <div className="capabilities-head">
              <h2>
                From artwork
                <br />
                to <em>output.</em>
              </h2>
              <p>
                Vibgyor brings printing, lamination, slitting, and pouch making
                together in one connected manufacturing flow.
              </p>
            </div>
            <div className="process-grid">
              {processSteps.map(step => (
                <article className="process-card" key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <div className="process-icon">
                    <CircleDot size={20} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <button
                    className="process-link"
                    onClick={() => go("contact")}
                  >
                    Discuss capability <ArrowUpRight size={15} />
                  </button>
                </article>
              ))}
            </div>
            <div className="capability-foot">
              <span>Customer-specific requirements</span>
              <div className="capability-rule" />
              <strong>Print · laminate · slit · pouch</strong>
            </div>
          </div>
        </section>

        <section className="flow-section section-pad" id="production-flow">
          <div className="page-width">
            <div className="flow-intro">
              <div>
                <div className="section-kicker">
                  <span>05</span>
                  <div /> Production flow
                </div>
                <h2>
                  One clear path from
                  <br />
                  <em>enquiry to dispatch.</em>
                </h2>
              </div>
              <p>
                We begin by understanding the packaging requirement, then
                connect the right production stages through to final quality
                review and dispatch.
              </p>
            </div>
            <ol className="flow-rail">
              {productionFlow.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                  {index !== productionFlow.length - 1 && (
                    <MoveRight size={17} />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="industries-section section-pad" id="industries">
          <div className="page-width industries-layout">
            <div className="industries-intro">
              <div className="section-kicker">
                <span>06</span>
                <div /> Industries we serve
              </div>
              <h2>
                Packaging that knows its <em>job.</em>
              </h2>
              <p>
                We work with businesses across a range of product categories
                where flexible laminated packaging can support product
                protection, presentation, and brand communication.
              </p>
              <button
                className="button button-outline"
                onClick={() => go("contact")}
              >
                Talk to a packaging specialist <ArrowUpRight size={16} />
              </button>
            </div>
            <div className="industry-list">
              {industries.map((industry, index) => (
                <button
                  className="industry-item"
                  key={industry.name}
                  onClick={() => go("contact")}
                >
                  <span className="industry-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong>{industry.name}</strong>
                    <small>{industry.note}</small>
                  </span>
                  <ArrowUpRight size={18} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="quality-section section-pad" id="quality">
          <div className="page-width quality-layout">
            <div className="quality-visual">
              <img
                src={ASSETS.quality}
                alt="Laminated packaging film moving across polished quality-control rollers"
                loading="lazy"
                decoding="async"
              />
              <div className="quality-stamp">
                <ShieldCheck size={20} />
                <span>
                  Quality
                  <br />
                  <b>is built in</b>
                </span>
              </div>
            </div>
            <div className="quality-copy">
              <div className="section-kicker">
                <span>07</span>
                <div /> Quality & assurance
              </div>
              <h2>
                Consistency is the <em>spec.</em>
              </h2>
              <p className="lead">
                Quality is built through material awareness, controlled
                production, and the final attention given before dispatch.
              </p>
              <div className="quality-points">
                <div>
                  <Gauge size={19} />
                  <span>
                    <strong>Material & production controls</strong>
                    <small>
                      Material selection and production steps considered around
                      the relevant packaging brief.
                    </small>
                  </span>
                </div>
                <div>
                  <SlidersHorizontal size={19} />
                  <span>
                    <strong>Print, laminate & conversion checks</strong>
                    <small>
                      Attention to print quality, lamination consistency, and
                      slitting or pouching accuracy.
                    </small>
                  </span>
                </div>
                <div>
                  <Package size={19} />
                  <span>
                    <strong>Final review before dispatch</strong>
                    <small>
                      Finished rolls and pouches prepared for a clean handover
                      to the customer’s next process.
                    </small>
                  </span>
                </div>
              </div>
              <div className="quality-rail" aria-label="Quality infrastructure sequence">
                {qualityChecks.map((check, index) => (
                  <span key={check}>
                    <b>{String(index + 1).padStart(2, "0")}</b>{check}
                    {index !== qualityChecks.length - 1 && <MoveRight size={13} />}
                  </span>
                ))}
              </div>
              <button className="text-link dark" onClick={() => go("contact")}>
                Ask about your packaging requirement <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </section>

        <section className="factory-section" id="factory">
          <div
            className="factory-image"
            style={{ backgroundImage: `url(${ASSETS.factory})` }}
          />
          <div className="factory-panel">
            <div className="section-kicker light">
              <span>08</span>
              <div /> Factory & infrastructure
            </div>
            <h2>
              Built for the
              <br />
              <em>next repeat.</em>
            </h2>
            <p>
              Our manufacturing location in the Shingve Tukai Industrial Area /
              MIDC, Ahilyanagar, brings together the equipment, workflow, and
              production discipline required for flexible laminated packaging
              conversion.
            </p>
            <div className="factory-metrics">
              <div>
                <strong>01</strong>
                <span>
                  Gravure-led
                  <br />
                  print capability
                </span>
              </div>
              <div>
                <strong>02</strong>
                <span>
                  Integrated
                  <br />
                  conversion flow
                </span>
              </div>
              <div>
                <strong>03</strong>
                <span>
                  Responsive
                  <br />
                  B2B support
                </span>
              </div>
            </div>
            <button
              className="button button-light"
              onClick={() => go("contact")}
            >
              Plan a factory conversation <ArrowUpRight size={16} />
            </button>
          </div>
        </section>

        <section className="gallery-section section-pad" id="gallery">
          <div className="page-width">
            <div className="section-heading-row gallery-heading">
              <div>
                <div className="section-kicker">
                  <span>09</span>
                  <div /> Gallery
                </div>
                <h2>
                  See the work, <em>not just the words.</em>
                </h2>
              </div>
              <p>
                A visual look at the spaces, equipment, production stages, finished
                packaging, quality checks, and dispatch flow behind every order.
              </p>
            </div>
            <div className="gallery-grid">
              {galleryItems.map(item => (
                <button
                  className="gallery-card gallery-image-button"
                  type="button"
                  key={item.number}
                  onClick={() => openLightbox({ src: item.src, alt: item.alt, label: item.title })}
                  aria-label={`View ${item.category}: ${item.title}`}
                >
                  <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                  <figcaption>
                    <span>{item.number} / {item.category}</span>
                    <strong>{item.title}</strong>
                  </figcaption>
                  <span className="image-expand-hint"><ZoomIn size={16} /> View detail</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="quote-section section-pad" id="quote">
          <div className="page-width quote-page-layout">
            <div>
              <div className="section-kicker light"><span>10</span><div /> Request a quote</div>
              <h2>Let’s Build the Right Packaging Solution <em>for Your Product</em></h2>
              <p className="quote-page-copy">Share the essential details of your packaging requirement and our team can start the conversation around the right format, structure, and quantity.</p>
            </div>
            <form className="quote-form quote-page-form" onSubmit={handleSubmit}>
              <div className="form-two-column">
                <label>Name *<input name="quote-name" placeholder="Your name" required /></label>
                <label>Company *<input name="quote-company" placeholder="Company name" required /></label>
              </div>
              <div className="form-two-column">
                <label>Mobile *<input type="tel" name="quote-mobile" placeholder="Mobile number" required /></label>
                <label>Email *<input type="email" name="quote-email" placeholder="you@company.com" required /></label>
              </div>
              <label>Product *<input name="quote-product" placeholder="What are you packaging?" required /></label>
              <label>Packaging type *
                <select name="quote-format" defaultValue="" required>
                  <option value="" disabled>Select a packaging type</option>
                  <option>Laminated Roll</option><option>Pouch</option><option>Stand-Up Pouch</option><option>3-Side Seal Pouch</option><option>Other</option>
                </select>
              </label>
              <label>Approximate quantity<input name="quote-quantity" placeholder="Quantity or expected volume" /></label>
              <button className="button button-primary form-submit" type="submit">Submit enquiry <Send size={16} /></button>
            </form>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="page-width contact-layout">
            <div className="contact-intro">
              <div className="section-kicker light">
                <span>11</span>
                <div /> Contact us
              </div>
              <h2>
                Talk to the team behind your <em>next pack.</em>
              </h2>
              <p>
                Tell us what you need to manufacture. Share the packaging type,
                material direction, printing requirement, required size,
                quantity, or an artwork/specification file if available.
              </p>
              <div className="contact-details">
                <span>
                  <MapPin size={17} /> Plot No. B-26/1, MIDC, Shingave Tukai, Tal. Newasa, Dist. Ahmednagar – 414607, Maharashtra, India
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Plot+No.+B-26%2F1%2C+MIDC%2C+Shingave+Tukai%2C+Tal.+Newasa%2C+Dist.+Ahmednagar%2C+Maharashtra+414607%2C+India"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin size={17} /> Open location in Google Maps{" "}
                  <ArrowUpRight size={14} />
                </a>
                <button
                  className="contact-channel"
                  onClick={() => handleContactChannel("call")}
                >
                  <Phone size={17} /> +91 75583 81231
                </button>
                <button
                  className="contact-channel"
                  onClick={() => handleContactChannel("whatsapp")}
                >
                  <WhatsAppIcon size={17} /> WhatsApp: +91 75583 81231
                </button>
                <span>
                  <Mail size={17} /> vibgyorprintnpack@gmail.com
                </span>
              </div>
              <div className="contact-map-wrap">
                <div className="contact-map-heading">
                  <span>Factory location</span>
                  <small>Ahmednagar · Maharashtra · India</small>
                </div>
                <iframe
                  className="contact-map"
                  title="Vibgyor Print N Pack factory location map"
                  src="https://www.google.com/maps?q=Plot+No.+B-26%2F1%2C+MIDC%2C+Shingave+Tukai%2C+Tal.+Newasa%2C+Dist.+Ahmednagar%2C+Maharashtra+414607%2C+India&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <span>Project brief</span>
                <small>Fields marked * are required</small>
              </div>
              <div className="form-two-column">
                <label>
                  Your name *<input name="name" placeholder="Name" required />
                </label>
                <label>
                  Company *
                  <input name="company" placeholder="Company name" required />
                </label>
              </div>
              <div className="form-two-column">
                <label>
                  Mobile *
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile number"
                    required
                  />
                </label>
                <label>
                  Work email *
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>
              <label>
                Product / packaging type *
                <select name="format" defaultValue="" required>
                  <option value="" disabled>
                    Select a format
                  </option>
                  <option>Printed laminated rolls</option>
                  <option>Plain / metallic laminated rolls</option>
                  <option>Flexible packaging pouches</option>
                  <option>Customized packaging requirement</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <div className="form-two-column">
                <label>
                  Material / structure
                  <input
                    name="structure"
                    placeholder="Example: PET / MET PET / PE"
                  />
                </label>
                <label>
                  Required size / quantity
                  <input
                    name="quantity"
                    placeholder="Size, quantity or MOQ discussion"
                  />
                </label>
              </div>
              <label>
                Printing requirement
                <input
                  name="printing"
                  placeholder="Printed, plain, metallic or to be discussed"
                />
              </label>
              <label>
                Artwork / specification file{" "}
                <span className="optional-label">optional</span>
                <input
                  className="file-input"
                  type="file"
                  name="attachment"
                  accept=".pdf,.jpg,.jpeg,.png,.ai"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Product, application, format, volume, timing or any other detail…"
                  rows={4}
                />
              </label>
              <button
                className="button button-primary form-submit"
                type="submit"
              >
                {submitted ? "Enquiry noted" : "Send enquiry"}{" "}
                <Send size={16} />
              </button>
              <p className="form-note">
                <FileText size={13} /> This demo form confirms the enquiry in
                the browser. Add an official email, CRM, or form endpoint before
                launch.
              </p>
            </form>
          </div>
        </section>
      </main>

      {lightboxImage && (
        <div
          className="lightbox-backdrop"
          role="presentation"
          onMouseDown={event => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <div className="lightbox-dialog" role="dialog" aria-modal="true" aria-label={`${lightboxImage.label} detail`}>
            <div className="lightbox-toolbar">
              <div>
                <span className="material-label">Product detail</span>
                <strong>{lightboxImage.label}</strong>
              </div>
              <div className="lightbox-actions">
                <button type="button" onClick={() => setLightboxZoom(value => Math.max(1, value - 0.5))} aria-label="Zoom out" disabled={lightboxZoom === 1}>
                  <ZoomOut size={18} />
                </button>
                <span>{Math.round(lightboxZoom * 100)}%</span>
                <button type="button" onClick={() => setLightboxZoom(value => Math.min(2.5, value + 0.5))} aria-label="Zoom in" disabled={lightboxZoom === 2.5}>
                  <ZoomIn size={18} />
                </button>
                <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close product detail">
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="lightbox-stage">
              <img src={lightboxImage.src} alt={lightboxImage.alt} style={{ transform: `scale(${lightboxZoom})` }} />
            </div>
            <p className="lightbox-caption">Use the controls to inspect the material and finish. Press Escape to close.</p>
          </div>
        </div>
      )}

      <FloatingActions />
      <Footer />
    </div>
  );
}
