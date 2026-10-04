import { Phone } from "lucide-react";

const WHATSAPP_NUMBER = "917558381231";
const WHATSAPP_MESSAGE = "Hello Vibgyor Print N Pack, I would like to enquire about flexible packaging solutions.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const CALL_URL = "tel:+917558381231";

export function WhatsAppOriginalIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="23" fill="#25D366" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 10C16.27 10 10 16.27 10 24C10 26.68 10.75 29.19 12.06 31.33L10.5 37.5L16.85 35.88C18.91 37.07 21.36 37.78 24 37.78C31.73 37.78 38 31.51 38 23.78C38 16.27 31.73 10 24 10ZM31.85 28.52C31.53 29.41 30.25 30.17 29.28 30.38C28.62 30.52 27.76 30.63 24.87 29.43C21.17 27.89 18.79 24.13 18.61 23.89C18.43 23.65 17.13 21.92 17.13 20.14C17.13 18.36 18.04 17.48 18.41 17.12C18.7 16.83 19.18 16.7 19.64 16.7C19.79 16.7 19.92 16.71 20.04 16.71C20.39 16.73 20.57 16.75 20.8 17.3C21.09 18 21.79 19.72 21.88 19.9C21.97 20.08 22.04 20.31 21.92 20.55C21.8 20.79 21.72 20.89 21.54 21.1C21.36 21.31 21.17 21.57 21 21.73C20.8 21.93 20.59 22.14 20.82 22.53C21.05 22.92 21.84 24.21 23 25.24C24.5 26.58 25.73 27 26.17 27.18C26.54 27.33 26.76 27.3 26.98 27.05C27.26 26.73 28.18 25.66 28.5 25.21C28.79 24.79 29.13 24.85 29.56 25.01C29.99 25.17 32.29 26.31 32.76 26.54C33.23 26.77 33.54 26.88 33.66 27.08C33.78 27.28 33.78 28.23 31.85 28.52Z"
        fill="white"
      />
    </svg>
  );
}

export default function FloatingActions() {
  return (
    <div className="floating-actions-dock" role="complementary" aria-label="Quick contact actions">
      <a
        className="floating-action-btn floating-call-btn"
        href={CALL_URL}
        aria-label="Call Vibgyor Print N Pack: +91 75583 81231"
        title="Call +91 75583 81231"
      >
        <Phone size={22} className="fab-phone-icon" />
      </a>

      <a
        className="floating-action-btn floating-whatsapp-btn"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vibgyor Print N Pack on WhatsApp"
        title="WhatsApp: +91 75583 81231"
      >
        <WhatsAppOriginalIcon size={30} />
      </a>
    </div>
  );
}
