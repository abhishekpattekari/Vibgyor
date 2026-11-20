import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import CapabilitiesPage from "./pages/CapabilitiesPage";
import IndustriesPage from "./pages/IndustriesPage";
import MarketsPage from "./pages/MarketsPage";
import QualityPage from "./pages/QualityPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

// Some copied product links have accidentally included the closing XML tag
// from the sitemap (for example, /products</loc>). Clean those URLs before
// wouter reads the initial location so direct loads work on every browser.
function normalizeSitemapUrl() {
  if (typeof window === "undefined") return;

  let pathname: string;
  try {
    pathname = decodeURIComponent(window.location.pathname);
  } catch {
    return;
  }

  const normalizedPath = pathname.replace(/<\\/loc>\\/?$/i, "");
  const validRoutes = new Set([
    "/",
    "/about",
    "/products",
    "/capabilities",
    "/markets",
    "/industries",
    "/quality",
    "/gallery",
    "/contact",
  ]);

  if (normalizedPath !== pathname && validRoutes.has(normalizedPath)) {
    const cleanUrl = `${normalizedPath}${window.location.search}${window.location.hash}`;
    window.history.replaceState(window.history.state, "", cleanUrl);
  }
}

normalizeSitemapUrl();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/capabilities" component={CapabilitiesPage} />
      <Route path="/markets" component={MarketsPage} />
      <Route path="/industries" component={IndustriesPage} />
      <Route path="/quality" component={QualityPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();

  useEffect(() => {
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      canonical.href = `https://www.vibgyorprintnpack.com${location}`;
    }
  }, [location]);

  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
