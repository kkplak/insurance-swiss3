import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./CookieConsent.css";

const STORAGE_KEY = "site-cookie-consent";
const GA_ID = "G-ND8465JNMM";

type ConsentChoice = "accepted" | "essential";

const enableAnalytics = () => {
  if (document.querySelector(`script[data-analytics-id="${GA_ID}"]`)) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.dataset.analyticsId = GA_ID;
  document.head.appendChild(script);

  const analyticsWindow = window as typeof window & {
    dataLayer?: unknown[][];
    gtag?: (...args: unknown[]) => void;
  };
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  analyticsWindow.gtag = (...args: unknown[]) => analyticsWindow.dataLayer?.push(args);
  analyticsWindow.gtag("js", new Date());
  analyticsWindow.gtag("config", GA_ID, { anonymize_ip: true });
};

const CookieConsent: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "accepted") {
      enableAnalytics();
    } else if (!saved) {
      setVisible(true);
    }
  }, []);

  const handleAccept = (value: ConsentChoice) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    if (value === "accepted") enableAnalytics();
    setVisible(false);
  };

  const currentLang = i18n.resolvedLanguage?.split("-")[0] || "en";

  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label={t("COOKIE.ariaLabel")}>
      <div className="cookie-banner__content">
        <div>
          <h3>{t("COOKIE.title")}</h3>
          <p>{t("COOKIE.description")}</p>
        </div>
        <div className="cookie-banner__actions">
          <button type="button" className="cookie-banner__button cookie-banner__button--secondary" onClick={() => handleAccept("essential")}>
            {t("COOKIE.acceptEssential")}
          </button>
          <button type="button" className="cookie-banner__button" onClick={() => handleAccept("accepted")}>
            {t("COOKIE.acceptAll")}
          </button>
        </div>
      </div>
      <p className="cookie-banner__legal">
        <Link to={`/${currentLang}/legal`}>{t("COOKIE.readNotice")}</Link>
      </p>
    </div>
  );
};

export default CookieConsent;
