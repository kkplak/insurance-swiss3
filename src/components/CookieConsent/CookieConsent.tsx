import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Analytics } from "@vercel/analytics/react";
import "./CookieConsent.css";

const STORAGE_KEY = "site-cookie-consent";

type ConsentChoice = "accepted" | "essential" | "rejected";

const enableVercelAnalytics = () => {
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") return;
  if (document.querySelector('script[data-vercel-analytics="true"]')) return;

  const script = document.createElement("script");
  script.defer = true;
  script.src = "/_vercel/insights/script.js";
  script.dataset.vercelAnalytics = "true";
  document.head.appendChild(script);
};

export const ConsentAnalytics: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      const shouldEnable = saved === "accepted";

      setEnabled(shouldEnable);
      if (shouldEnable) {
        enableVercelAnalytics();
      }
    };

    syncConsent();
    window.addEventListener("storage", syncConsent);

    return () => window.removeEventListener("storage", syncConsent);
  }, []);

  return enabled ? <Analytics /> : null;
};

const CookieConsent: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "accepted") {
      enableVercelAnalytics();
    } else if (!saved) {
      setVisible(true);
    }
  }, []);

  const handleAccept = (value: ConsentChoice) => {
    window.localStorage.setItem(STORAGE_KEY, value);
    if (value === "accepted") {
      enableVercelAnalytics();
    }
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
          <button type="button" className="cookie-banner__button cookie-banner__button--secondary" onClick={() => handleAccept("rejected")}>
            {t("COOKIE.rejectAll")}
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
