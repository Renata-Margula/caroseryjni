import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { loadGoogleAnalytics } from "./utils/analytics.js";

import Header from "./components/Header.jsx";
import AnimatedLightEffect from "./components/AnimatedLightEffect.jsx";
import IntroAnimation from "./components/IntroAnimation.jsx";
import CookieBanner from "./components/CookieBanner.jsx";
import CookieSettingsModal from "./components/CookieSettingsModal.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// Wrapper do animacji przejść stron
function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/o_nas" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [showCookies, setShowCookies] = useState(false);
  const [showCookieSettings, setShowCookieSettings] = useState(false);

  useEffect(() => {
    loadGoogleAnalytics();

    const isReload =
      typeof window !== "undefined" &&
      performance?.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      setTimeout(() => setShowApp(true), 300);
    } else {
      setShowApp(true);
    }
  }, []);

  return (
    <Router>
      <AnimatedLightEffect />

      {showApp && <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}

      <IntroAnimation />

      {showApp && (
        <div className="relative z-0">
          <AnimatedRoutes />
        </div>
      )}

      <CookieBanner setShowCookies={setShowCookieSettings} />

      <CookieSettingsModal
        open={showCookieSettings}
        onClose={() => setShowCookieSettings(false)}
      />

      <Footer
        showCookies={showCookies}
        setShowCookies={setShowCookies}
        showPolicy={showPolicy}
        setShowPolicy={setShowPolicy}
      />
    </Router>
  );
}
