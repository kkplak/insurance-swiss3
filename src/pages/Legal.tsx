import React from "react";
import { useTranslation } from "react-i18next";

const Legal: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container legal-page">
      <h1>{t("LEGAL.title")}</h1>
      <p>{t("LEGAL.intro")}</p>
      <h2>{t("LEGAL.cookieUseTitle")}</h2>
      <ul>
        <li>{t("LEGAL.cookieUse1")}</li>
        <li>{t("LEGAL.cookieUse2")}</li>
        <li>{t("LEGAL.cookieUse3")}</li>
      </ul>
      <h2>{t("LEGAL.contactTitle")}</h2>
      <p>{t("LEGAL.contactText")}</p>
    </div>
  );
};

export default Legal;
