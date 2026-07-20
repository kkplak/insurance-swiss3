import React, { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathLanguage = location.pathname.split("/")[1];
  const language = ["en", "de", "pl"].includes(pathLanguage)
    ? pathLanguage
    : i18n.resolvedLanguage || "pl";
  const phone = t("GENERAL.lukaszPhone");

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `nav-link${isActive ? " nav-link--active" : ""}`;

  return (
    <header className="site-header">
      <nav className="nav-bar" aria-label={t("NAV.primaryLabel")}>
        <Link className="brand" to={`/${language}/home`} aria-label="Protegos home">
          <span className="brand-mark" aria-hidden="true">
            <img src="/media/icon-new.png" alt="" />
          </span>
          <span className="brand-copy">
            <span className="brand-name">Protegos</span>
            <span className="brand-tagline">{t("NAV.tagline")}</span>
          </span>
        </Link>

        <button
          type="button"
          className="nav-menu-button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? t("NAV.closeMenu") : t("NAV.openMenu")}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <div
          id="primary-navigation"
          className={`nav-content${menuOpen ? " nav-content--open" : ""}`}
        >
          <div className="nav-links">
            <NavLink to={`/${language}/home`} className={navLinkClass}>
              {t("GENERAL.home")}
            </NavLink>
            <NavLink to={`/${language}/about-me`} className={navLinkClass}>
              {t("GENERAL.aboutUs")}
            </NavLink>
            <NavLink to={`/${language}/contact`} className={navLinkClass}>
              {t("GENERAL.contact")}
            </NavLink>
          </div>

          <div className="nav-actions">
            <a
              className="nav-phone"
              href={`tel:${phone.replace(/\s/g, "")}`}
              aria-label={`${t("NAV.callLabel")} ${phone}`}
            >
              <Phone size={17} aria-hidden="true" />
              <span>{phone}</span>
            </a>
            <LanguageSwitcher />
            <Link className="button button--small nav-cta" to={`/${language}/contact`}>
              {t("NAV.consultation")}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
