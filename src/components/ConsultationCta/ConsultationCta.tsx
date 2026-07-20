import React from "react";
import { ArrowRight, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "./ConsultationCta.css";

const ConsultationCta: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const pathLanguage = location.pathname.split("/")[1];
  const language = ["en", "de", "pl"].includes(pathLanguage)
    ? pathLanguage
    : i18n.resolvedLanguage || "pl";
  const phone = t("GENERAL.lukaszPhone");

  return (
    <section className="consultation-cta" aria-labelledby="consultation-title">
      <div className="consultation-cta__inner">
        <div>
          <p className="eyebrow consultation-cta__eyebrow">{t("CTA.eyebrow")}</p>
          <h2 id="consultation-title">{t("CTA.title")}</h2>
          <p>{t("CTA.text")}</p>
        </div>
        <div className="consultation-cta__actions">
          <Link className="button button--light" to={`/${language}/contact`}>
            {t("CTA.button")}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <a className="consultation-cta__phone" href={`tel:${phone.replace(/\s/g, "")}`}>
            <Phone size={18} aria-hidden="true" />
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCta;
