import React from "react";
import { Mail, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  const pathLanguage = location.pathname.split("/")[1];
  const language = ["en", "de", "pl"].includes(pathLanguage)
    ? pathLanguage
    : i18n.resolvedLanguage || "pl";
  const phone = t("GENERAL.lukaszPhone");
  const email = t("GENERAL.lukaszMail").replace(/^mail:\s*/i, "").trim();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link className="footer-logo" to={`/${language}/home`}>
            <span className="footer-logo__mark"><img src="/media/icon-new.png" alt="" /></span>
            <span>Protegos</span>
          </Link>
          <p className="footer-copy">{t("GENERAL.aboutUsContent")}</p>
          <p className="footer-advisor">{t("FOOTER.advisor")}: <strong>{t("GENERAL.lukaszBergel")}</strong></p>
        </div>

        <div className="footer-column">
          <p className="footer-heading">{t("FOOTER.navigation")}</p>
          <Link to={`/${language}/home`}>{t("GENERAL.home")}</Link>
          <Link to={`/${language}/about-me`}>{t("GENERAL.aboutUs")}</Link>
          <Link to={`/${language}/contact`}>{t("GENERAL.contact")}</Link>
          <Link to={`/${language}/legal`}>{t("LEGAL.title")}</Link>
        </div>

        <div className="footer-column footer-contact">
          <p className="footer-heading">{t("FOOTER.contact")}</p>
          <a className="footer-link" href={`tel:${phone.replace(/\s/g, "")}`}>
            <Phone size={17} aria-hidden="true" />{phone}
          </a>
          <a className="footer-link" href={`mailto:${email}`}>
            <Mail size={17} aria-hidden="true" />{email}
          </a>
          <p className="footer-availability">{t("FOOTER.availability")}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} Protegos. {t("FOOTER.rights")}</p>
        <p>{t("FOOTER.disclaimer")}</p>
      </div>
    </footer>
  );
};

export default Footer;
