import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import "./LanguageSwitcher.css";

const languages = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "de", label: "Deutsch", shortLabel: "DE" },
  { code: "pl", label: "Polski", shortLabel: "PL" },
];

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const currentPath = pathParts.slice(2).join("/") || "home";
  const activeLanguage = pathParts[1] || i18n.resolvedLanguage;

  const handleLanguageChange = (language) => {
    if (language === activeLanguage) return;
    void i18n.changeLanguage(language);
    navigate(`/${language}/${currentPath}${location.search}${location.hash}`);
  };

  return (
    <div className="language-switcher" aria-label={t("NAV.languageLabel")}>
      {languages.map((language) => (
        <button
          key={language.code}
          type="button"
          className={`language-option${
            activeLanguage === language.code ? " language-option--active" : ""
          }`}
          onClick={() => handleLanguageChange(language.code)}
          aria-label={language.label}
          aria-pressed={activeLanguage === language.code}
        >
          {language.shortLabel}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
