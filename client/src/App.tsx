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

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/capabilities" component={CapabilitiesPage} />
      <Route path="/markets" component={MarketsPage} />
      <Route path="/industries" component={MarketsPage} />
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
      canonical.href = `https://vibgyorprintnpack.com${location}`;
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
