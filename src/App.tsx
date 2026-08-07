import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationDE from "./locales/de.json";
import translationPL from "./locales/pl.json";

import Home from "./pages/Home";
import Info from "./pages/Info";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import HealthInsurance from "./pages/HealthInsurance";
import LifeInsurance from "./pages/LifeInsurance";
import HouseInsurance from "./pages/HouseInsurance";
import LawProtection from "./pages/LawProtection";
import CarInsurance from "./pages/CarInsurance";
import SwissInsurance from "./pages/SwissInsurance";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CookieConsent from "./components/CookieConsent/CookieConsent";
import ConsultationCta from "./components/ConsultationCta/ConsultationCta";

import "./App.css";
import "./styles/insurance-pages.css";

const resources = {
  en: { translation: translationEN },
  de: { translation: translationDE },
  pl: { translation: translationPL },
};

const supportedLanguages = ["en", "de", "pl"] as const;
type SupportedLanguage = (typeof supportedLanguages)[number];
const LANGUAGE_STORAGE_KEY = "myhealth-language";

const isSupportedLanguage = (value?: string | null): value is SupportedLanguage =>
  Boolean(value && supportedLanguages.includes(value as SupportedLanguage));

const getPreferredLanguage = (): SupportedLanguage => {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (isSupportedLanguage(savedLanguage)) return savedLanguage;

  return "pl";
};

i18next.use(initReactI18next).init({
  resources,
  lng: getPreferredLanguage(),
  fallbackLng: "pl",
  supportedLngs: supportedLanguages,
  interpolation: { escapeValue: false },
});

const LanguageRouteSync: React.FC = () => {
  const location = useLocation();
  const languageFromPath = location.pathname.split("/")[1];

  useEffect(() => {
    if (!isSupportedLanguage(languageFromPath)) return;

    if (i18next.resolvedLanguage !== languageFromPath) {
      void i18next.changeLanguage(languageFromPath);
    }

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, languageFromPath);
    document.documentElement.lang = languageFromPath;
  }, [languageFromPath]);

  return null;
};

const RedirectToDefaultLanguage: React.FC = () => (
  <Navigate to={`/${getPreferredLanguage()}/home`} replace />
);

const ProductPageCta: React.FC = () => {
  const location = useLocation();
  const productRoutes = [
    "health-insurance",
    "life-insurance",
    "house-insurance",
    "law-protection",
    "car-insurance",
    "swiss-insurance",
  ];
  const isProductPage = productRoutes.some((route) =>
    location.pathname.endsWith(`/${route}`)
  );

  return isProductPage ? <ConsultationCta /> : null;
};

const UnknownRoute: React.FC = () => {
  const location = useLocation();
  const languageFromPath = location.pathname.split("/")[1];
  const language = isSupportedLanguage(languageFromPath)
    ? languageFromPath
    : getPreferredLanguage();

  return <Navigate to={`/${language}/home`} replace />;
};

const App: React.FC = () => (
  <I18nextProvider i18n={i18next}>
    <Router>
      <LanguageRouteSync />
      <ScrollToTop />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <NavBar />
      <main id="main-content" className="site-main">
        <Routes>
          <Route path="/" element={<RedirectToDefaultLanguage />} />
          <Route path="/:lang/home" element={<Home />} />
          <Route path="/:lang/info" element={<Info />} />
          <Route path="/:lang/contact" element={<Contact />} />
          <Route path="/:lang/legal" element={<Legal />} />
          <Route path="/:lang/about-me" element={<AboutUs />} />
          <Route path="/:lang/health-insurance" element={<HealthInsurance />} />
          <Route path="/:lang/life-insurance" element={<LifeInsurance />} />
          <Route path="/:lang/house-insurance" element={<HouseInsurance />} />
          <Route path="/:lang/law-protection" element={<LawProtection />} />
          <Route path="/:lang/car-insurance" element={<CarInsurance />} />
          <Route path="/:lang/swiss-insurance" element={<SwissInsurance />} />
          <Route path="*" element={<UnknownRoute />} />
        </Routes>
        <ProductPageCta />
      </main>
      <Footer />
      <CookieConsent />
    </Router>
  </I18nextProvider>
);

export default App;
