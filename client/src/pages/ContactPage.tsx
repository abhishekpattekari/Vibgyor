import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions, { WhatsAppOriginalIcon } from "@/components/FloatingActions";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, ArrowUpRight, Download } from "lucide-react";
import { downloadBrochure } from "@/lib/downloadBrochure";
import { sendWhatsAppEnquiry } from "@/lib/sendWhatsAppEnquiry";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string>("");
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = sendWhatsAppEnquiry({
      source: "Contact Page - Technical RFQ Form",
      name: formData.name,
      company: formData.company,
      mobile: formData.phone,
      email: formData.email,
      format: formData.format,
      quantity: formData.volume,
      message: formData.message,
    });
    setSubmittedWhatsAppUrl(url);
    setSubmitted(true);
    toast.success("Enquiry ready! Opening WhatsApp...", {
      description: "Your quotation specifications have been formatted and opened directly in WhatsApp.",
    });
  };

  return (
    <div className="site-shell">
      <Navbar />

      <main className="page-main">
        {/* Hero */}
        <section
          className="page-hero-banner"
          style={{ backgroundImage: `url('/images/machine-printing-rotogravure.jpg')` }}
        >
          <div className="page-hero-overlay" />
          <div className="page-width page-hero-content">
            <div className="eyebrow light">
              <span className="eyebrow-rule" />
              <span>Contact & Plant Location</span>
            </div>
            <h1>
              Let's Make Your <em>Next Pack Work Harder.</em>
            </h1>
            <p className="page-hero-sub">
              Share your product specifications, structure, or filling requirements. Our technical team is ready to discuss pilot runs, custom barriers, and volume pricing.
            </p>
            <div style={{ marginTop: "20px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <button onClick={downloadBrochure} className="button button-primary">
                <Download size={16} /> Download Official Brochure PDF
              </button>
            </div>
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

                <a
                  href="mailto:vibgyorprintnpack@gmail.com"
                  className="contact-action-card email-card"
                >
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
                  <a
                    href="https://maps.app.goo.gl/yWSN8N8n1H4SEje57?g_st=iw"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    title="Open Vibgyor Print N Pack on Google Maps"
                  >
                    Plot No. B-26/1, MIDC, Shingave Tukai, Tal. Newasa, Dist. Ahmednagar – 414607, Maharashtra, India
                  </a>
                </p>
                <div className="p-addr-meta">
                  <span>Industrial Zone: MIDC Shingave Tukai</span>
                  <span>State: Maharashtra (Western India Hub)</span>
                </div>
                <div style={{ marginTop: "14px", display: "grid", gap: "8px" }}>
                  <a
                    href="https://maps.app.goo.gl/yWSN8N8n1H4SEje57?g_st=iw"
                    target="_blank"
                    rel="noreferrer"
                    className="button button-outline"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    <MapPin size={15} /> Open in Google Maps <ArrowUpRight size={14} />
                  </a>
                  <button onClick={downloadBrochure} className="button button-secondary" style={{ width: "100%" }}>
                    <Download size={15} /> Download Plant Brochure PDF
                  </button>
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
                    <h4>Enquiry Sent to WhatsApp!</h4>
                    <p>
                      Thank you, <strong>{formData.name}</strong>. Your enquiry details have been formatted and directed to our official WhatsApp (+91 75583 81231).
                    </p>
                    <div style={{ marginTop: "16px", display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                      {submittedWhatsAppUrl && (
                        <a
                          href={submittedWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button button-primary"
                          style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                        >
                          <WhatsAppOriginalIcon size={18} /> Open WhatsApp Chat
                        </a>
                      )}
                      <button
                        onClick={() => setSubmitted(false)}
                        className="button button-secondary"
                      >
                        Submit Another Requirement
                      </button>
                    </div>
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
                        <label htmlFor="email">Email Address</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="name@company.com"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="format">Required Packaging Format *</label>
                        <select
                          id="format"
                          name="format"
                          value={formData.format}
                          onChange={handleChange}
                        >
                          <option value="Printed Laminated Rolls">Printed Laminated Rolls</option>
                          <option value="Plain & Metallic Barrier Rolls">Plain & Metallic Barrier Rolls</option>
                          <option value="Stand-Up Zipper Pouches">Stand-Up Zipper Pouches</option>
                          <option value="Three-Side Seal Pouches">Three-Side Seal Pouches</option>
                          <option value="Frozen Food Packaging Pouches">Frozen Food Packaging Pouches</option>
                          <option value="Spouted Liquid Pouches">Spouted Liquid Pouches</option>
                          <option value="Atta / Grain Heavy Pouch">Atta / Grain Heavy Pouch</option>
                          <option value="Custom Laminate Development">Custom Laminate Development</option>
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
                      Your enquiry details will be opened directly in WhatsApp (+91 75583 81231) for an instant quotation and technical review.
                    </small>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Professional Google Map */}
        <section className="section-pad page-width" style={{ paddingTop: 0 }}>
          <GoogleMapEmbed
            title="Locate Our Manufacturing Plant"
            subtitle="Visit our plant or coordinate freight dispatches at MIDC Shingave Tukai, Newasa, Ahmednagar."
          />
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
}
