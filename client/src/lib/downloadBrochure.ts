import { toast } from "sonner";

/**
 * Downloads the official Vibgyor Print N Pack brochure directly to the user's device.
 * Works seamlessly across Mobile (Android / iOS) and Desktop (Chrome, Safari, Edge, Firefox).
 */
export async function downloadBrochure(e?: React.MouseEvent) {
  if (e) {
    e.preventDefault();
  }

  const brochureUrl = "/brochure/vibgyor-print-n-pack-brochure.pdf";
  const filename = "Vibgyor-Print-N-Pack-Brochure.pdf";

  try {
    toast.info("Downloading Vibgyor Brochure...", {
      description: "Your PDF download has started.",
      duration: 3000,
    });

    // Fetch the file as blob to force binary attachment download
    const response = await fetch(brochureUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Revoke after a short delay
    setTimeout(() => {
      window.URL.revokeObjectURL(blobUrl);
    }, 1500);

    toast.success("Brochure downloaded successfully!");
  } catch (err) {
    console.warn("Direct blob download fallback to native anchor:", err);
    // Fallback: standard anchor download
    const fallbackLink = document.createElement("a");
    fallbackLink.href = brochureUrl;
    fallbackLink.download = filename;
    fallbackLink.target = "_self";
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    document.body.removeChild(fallbackLink);
  }
}
