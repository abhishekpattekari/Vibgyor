import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions, { WhatsAppOriginalIcon } from "@/components/FloatingActions";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ArrowUpRight } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    format: "Printed Laminated Rolls",
    volume: "Trial / Pilot run",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Thank you! Your quotation enquiry has been sent.", {
      description: "Our packaging technical team will review your specifications and get in touch promptly.",
    });
  };

  return (
    <div className="site-shell">
      <Navbar />

      <main className="page-main">
        {/* Hero */}
        <section className="page-hero-banner" style={{ backgroundImage: `url('/images/hero-industrial.jpg')` }}>
          <div className="page-hero-overlay" />
          <div className="page-width page-hero-content">
            <div className="eyebrow light">
              <span className="eyebrow-rule" />
              <span>Contact & Request a Quote</span>
            </div>
            <h1>
              Let's Make Your <em>Next Pack Work Harder.</em>
            </h1>
            <p className="page-hero-sub">
              Share your product specifications, structure, or filling requirements. Our technical team is ready to discuss pilot runs, custom barriers, and volume pricing.
            </p>
          </div>
        </section>

        {/* Contact Grid Section */}
        <section className="section-pad page-width" id="quote">
          <div className="contact-main-grid">
            {/* Left: Contact Details & Direct Actions */}
            <div className="contact-info-panel">
              <div className="section-kicker">
                <span>01</span>
                <div />
                <span>Direct Contact</span>
              </div>
              <h2 className="section-title">Get in Touch Directly</h2>
              <p className="lead-text">
                Need immediate pricing, technical substrate consultation, or emergency dispatch? Reach our plant team via phone or WhatsApp.
              </p>

              {/* Action Cards */}
              <div className="contact-cards-stack">
                <a href="tel:+917558381231" className="contact-action-card call-card">
                  <div className="c-card-icon call-bg">
                    <Phone size={22} />
                  </div>
                  <div className="c-card-info">
                    <small>Direct Line / Call</small>
                    <strong>+91 75583 81231</strong>
                    <span>Available Mon – Sat, 9:00 AM – 7:00 PM</span>
                  </div>
                  <ArrowUpRight size={18} className="c-card-arrow" />
                </a>

                <a
                  href="https://wa.me/917558381231?text=Hello%20Vibgyor%20Print%20N%20Pack%2C%20I%20would%20like%20to%20request%20a%20packaging%20quote."
                  target="_blank"
                  rel="noreferrer"
                  className="contact-action-card wa-card"
                >
                  <div className="c-card-icon wa-bg">
                    <WhatsAppOriginalIcon size={28} />
                  </div>
                  <div className="c-card-info">
                    <small>Instant Messaging</small>
                    <strong>WhatsApp: +91 75583 81231</strong>
                    <span>Send artwork, specs, or ask questions</span>
                  </div>
                  <ArrowUpRight size={18} className="c-card-arrow" />
                </a>

                <a href="mailto:vibgyorprintnpack@gmail.com" className="contact-action-card email-card">
                  <div className="c-card-icon email-bg">
                    <Mail size={22} />
                  </div>
                  <div className="c-card-info">
                    <small>Official Email</small>
                    <strong>vibgyorprintnpack@gmail.com</strong>
                    <span>Send detailed RFQ tenders and specs</span>
                  </div>
                  <ArrowUpRight size={18} className="c-card-arrow" />
                </a>
              </div>

              {/* Plant Location */}
              <div className="plant-address-box">
                <div className="p-addr-header">
                  <MapPin size={20} className="pin-icon" />
                  <h4>Manufacturing Plant Location</h4>
                </div>
                <p>
                  Plot No. B-26/1, MIDC, Shingave Tukai, Tal. Newasa, Dist. Ahmednagar – 414607, Maharashtra, India
                </p>
                <div className="p-addr-meta">
                  <span>Industrial Zone: MIDC Shingave Tukai</span>
                  <span>State: Maharashtra (Western India Hub)</span>
                </div>
              </div>
            </div>

            {/* Right: RFQ Form */}
            <div className="contact-form-panel">
              <div className="rfq-form-card">
                <div className="rfq-header">
                  <h3>Project Specification Brief</h3>
                  <p>Complete this form for a prompt technical proposal and commercial quote.</p>
                </div>

                {submitted ? (
                  <div className="rfq-success-message">
                    <CheckCircle2 size={48} className="success-icon" />
                    <h4>Enquiry Submitted Successfully!</h4>
                    <p>
                      Thank you, <strong>{formData.name}</strong>. Our technical packaging team has received your details and will get back to you shortly at <strong>{formData.phone || formData.email}</strong>.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="button button-secondary"
                      style={{ marginTop: "16px" }}
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="rfq-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Your Name *</label>
                        <input
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Patil"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">Company / Brand *</label>
                        <input
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Patil Agro Foods Pvt Ltd"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone / WhatsApp Number *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Work Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="format">Packaging Format Needed *</label>
                        <select
                          id="format"
                          name="format"
                          value={formData.format}
                          onChange={handleChange}
                        >
                          <option value="Printed Laminated Rolls">Printed Laminated Rolls (Gravure)</option>
                          <option value="Plain Laminated Rolls">Plain & Metallic Laminated Rolls</option>
                          <option value="Stand-Up Zipper Pouches">Stand-Up Zipper Pouches</option>
                          <option value="Three-Side Seal Pouches">Three-Side Seal Pouches</option>
                          <option value="Centre-Seal Pillow Pouches">Centre-Seal Pillow Pouches</option>
                          <option value="Aluminium Foil Barrier Rolls">Aluminium Foil Barrier Rolls</option>
                          <option value="Other / Need Recommendation">Other / Need Recommendation</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="volume">Estimated Volume *</label>
                        <select
                          id="volume"
                          name="volume"
                          value={formData.volume}
                          onChange={handleChange}
                        >
                          <option value="Trial / Pilot run (500 - 1,000 kg)">Trial / Pilot run (500 - 1,000 kg)</option>
                          <option value="Medium Volume (1,000 - 5,000 kg)">Medium Volume (1,000 - 5,000 kg)</option>
                          <option value="Commercial High Volume (5,000+ kg)">Commercial High Volume (5,000+ kg)</option>
                          <option value="Pouch Units: 10,000 - 50,000 pcs">Pouch Units: 10,000 - 50,000 pcs</option>
                          <option value="Pouch Units: 100,000+ pcs">Pouch Units: 100,000+ pcs</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Product & Structure Details</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your product (e.g. potato chips, spice powder, seed pack), required size/width, barrier structure if known, or existing challenges..."
                      />
                    </div>

                    <button type="submit" className="button button-primary rfq-submit-btn">
                      <Send size={16} /> Submit Project Brief
                    </button>
                    <small className="form-privacy-note">
                      Your information is kept strictly confidential and used solely to prepare your technical quotation.
                    </small>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
