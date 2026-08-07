import React from "react";
import { ArrowRight, CheckCircle2, Languages, MapPin, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const pathLanguage = location.pathname.split("/")[1];
  const language = ["en", "de", "pl"].includes(pathLanguage)
    ? pathLanguage
    : i18n.resolvedLanguage || "pl";

  const facts = [
    { icon: ShieldCheck, value: t("ABOUT.experienceValue"), label: t("ABOUT.experienceLabel") },
    { icon: Languages, value: t("ABOUT.languagesValue"), label: t("ABOUT.languagesLabel") },
    { icon: MapPin, value: t("ABOUT.locationValue"), label: t("ABOUT.locationLabel") },
  ];

  const principles = [
    { title: t("ABOUT.principle1Title"), text: t("ABOUT.principle1Text") },
    { title: t("ABOUT.principle2Title"), text: t("ABOUT.principle2Text") },
    { title: t("ABOUT.principle3Title"), text: t("ABOUT.principle3Text") },
  ];

  return (
    <div className="about-page">
      <header className="page-hero page-hero--centered">
        <div className="page-hero__content">
          <p className="eyebrow">{t("ABOUT.eyebrow")}</p>
          <h1>{t("GENERAL.aboutUs")}</h1>
          <p className="page-intro">{t("GENERAL.aboutUsContent")}</p>
        </div>
      </header>

      <section className="about-profile section-shell" aria-labelledby="about-profile-title">
        <div className="about-portrait-card">
          <img src="/media/lukasz.png" alt={t("GENERAL.lukaszBergel")} />
          <div className="about-portrait-caption">
            <span>{t("ABOUT.advisorLabel")}</span>
            <strong>{t("GENERAL.lukaszBergel")}</strong>
          </div>
        </div>

        <div className="about-copy-card">
          <p className="eyebrow">{t("ABOUT.profileEyebrow")}</p>
          <h2 id="about-profile-title">{t("ABOUT.profileTitle")}</h2>
          <p className="about-copy">{t("GENERAL.aboutLukasz")}</p>

          <div className="about-facts">
            {facts.map(({ icon: Icon, value, label }) => (
              <div className="about-fact" key={label}>
                <Icon size={20} aria-hidden="true" />
                <span><strong>{value}</strong><small>{label}</small></span>
              </div>
            ))}
          </div>

          <Link className="button button--primary" to={`/${language}/contact`}>
            {t("ABOUT.contactButton")}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="about-principles">
        <div className="section-shell">
          <div className="section-heading section-heading--center">
            <p className="eyebrow">{t("ABOUT.principlesEyebrow")}</p>
            <h2>{t("ABOUT.principlesTitle")}</h2>
            <p>{t("ABOUT.principlesIntro")}</p>
          </div>
          <div className="principles-grid">
            {principles.map((principle) => (
              <article className="principle-card" key={principle.title}>
                <CheckCircle2 size={22} aria-hidden="true" />
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
