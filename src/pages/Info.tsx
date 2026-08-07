import React from "react";
import { useTranslation } from "react-i18next";
// import LogoSlider from "../components/LogoSlider/LogoSlider";
import { useParams } from "react-router-dom";
const Info: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lang } = useParams();

  React.useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <div className='container info'>
      <p className="eyebrow">MyHealth</p>
      <h1>{t("GENERAL.homeH1")}</h1>
      <p>{t("GENERAL.heroP2")}</p>
    </div>
  );
};
export default Info;
