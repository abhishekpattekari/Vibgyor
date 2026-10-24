import React from "react";
import { MapPin, Navigation, Phone, Clock, ExternalLink } from "lucide-react";

interface GoogleMapEmbedProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showOverlayCard?: boolean;
}

export default function GoogleMapEmbed({
  title = "Plant Location & Coordinates",
  subtitle = "Strategically located at MIDC Shingave Tukai, Newasa, Ahmednagar – serving Maharashtra and pan-India supply chains.",
  className = "",
  showOverlayCard = true,
}: GoogleMapEmbedProps) {
  const fullAddress =
    "Plot No. B-26/1, MIDC, Shingave Tukai, Tal. Newasa, Dist. Ahmednagar – 414607, Maharashtra, India";

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "Plot No. B-26/1, MIDC, Shingave Tukai, Tal. Newasa, Dist. Ahmednagar 414607"
  )}`;

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    "Plot No. B-26/1, MIDC, Shingave Tukai, Newasa, Ahmednagar 414607"
  )}&t=m&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className={`plant-map-container ${className}`}>
      {(title || subtitle) && (
        <div className="map-section-header">
          <div className="eyebrow">
            <span className="eyebrow-rule" />
            <span>Industrial Location</span>
          </div>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="lead-text">{subtitle}</p>}
        </div>
      )}

      <div className="map-frame-wrapper">
        <iframe
          title="Vibgyor Print N Pack Plant Location Map"
          src={embedUrl}
          className="map-iframe"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />

        {showOverlayCard && (
          <div className="map-info-floating-card">
            <div className="map-card-header">
              <span className="map-live-dot" />
              <span className="map-card-tag">Manufacturing Facility</span>
            </div>
            <h3 className="map-card-title">Vibgyor Print N Pack</h3>
            <div className="map-card-row">
              <MapPin size={18} className="map-card-icon" />
              <p className="map-card-address">{fullAddress}</p>
            </div>
            <div className="map-card-meta">
              <div className="map-meta-item">
                <Clock size={15} />
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </div>
              <div className="map-meta-item">
                <Phone size={15} />
                <a href="tel:+917558381231">+91 75583 81231</a>
              </div>
            </div>
            <div className="map-card-actions">
              <a
                href={googleMapsDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="map-directions-btn"
              >
                <Navigation size={16} /> Get Directions in Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
