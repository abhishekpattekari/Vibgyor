/**
 * Utility to send formatted enquiries directly to Vibgyor Print N Pack official WhatsApp.
 * Official WhatsApp Number: +91 75583 81231
 */

export interface EnquiryData {
  source?: string;
  name: string;
  company?: string;
  mobile: string;
  email?: string;
  format?: string;
  product?: string;
  structure?: string;
  quantity?: string;
  printing?: string;
  message?: string;
}

export function sendWhatsAppEnquiry(data: EnquiryData): string {
  const WHATSAPP_NUMBER = "917558381231";

  const lines: string[] = [
    "🏭 *NEW PACKAGING ENQUIRY - VIBGYOR PRINT N PACK*",
    "━━━━━━━━━━━━━━━━━━━━━━",
  ];

  if (data.source) {
    lines.push(`📋 *Requirement Source:* ${data.source}`);
  }

  lines.push(`👤 *Contact Name:* ${data.name.trim()}`);

  if (data.company && data.company.trim()) {
    lines.push(`🏢 *Company / Brand:* ${data.company.trim()}`);
  }

  lines.push(`📱 *Mobile / WhatsApp:* ${data.mobile.trim()}`);

  if (data.email && data.email.trim()) {
    lines.push(`✉️ *Email Address:* ${data.email.trim()}`);
  }

  if (data.product && data.product.trim()) {
    lines.push(`🏷️ *Product / Application:* ${data.product.trim()}`);
  }

  if (data.format && data.format.trim()) {
    lines.push(`📦 *Packaging Format:* ${data.format.trim()}`);
  }

  if (data.structure && data.structure.trim()) {
    lines.push(`🔬 *Material / Structure:* ${data.structure.trim()}`);
  }

  if (data.quantity && data.quantity.trim()) {
    lines.push(`📊 *Estimated Volume / Quantity:* ${data.quantity.trim()}`);
  }

  if (data.printing && data.printing.trim()) {
    lines.push(`🖨️ *Printing Requirement:* ${data.printing.trim()}`);
  }

  if (data.message && data.message.trim()) {
    lines.push("━━━━━━━━━━━━━━━━━━━━━━");
    lines.push("💬 *Specifications & Notes:*");
    lines.push(data.message.trim());
  }

  lines.push("━━━━━━━━━━━━━━━━━━━━━━");
  lines.push("🌐 _Sent via Vibgyor Print N Pack Website_");

  const messageText = lines.join("\n");
  const encoded = encodeURIComponent(messageText);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

  // Direct redirection to WhatsApp
  const isMobile = typeof navigator !== "undefined" && /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = whatsappUrl;
  } else {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return whatsappUrl;
}
