import React from "react";
import { useTranslation } from "react-i18next";
import "./LawProtection.css";

const LawProtection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='law-protection'>
      <div className='health-header'>
        <div className='section-wrapper-hero'>
          <div className='section-text-wrapper-hero'>
            <h1 className='main-title'>{t("LAW.title")}</h1>
            <p
              className='intro-text'
              dangerouslySetInnerHTML={{ __html: t("LAW.info") }}
            ></p>
          </div>
          <div className='img-section-container'>
            <img className='img-section' src='/media/image-lawyer.png' alt="" />
          </div>
        </div>
      </div>
      <div className='insurance-page container'>
        <div className='insurance-section'>
          <div className='section-collumn'>
            <div className='column'>
              <h3 className='column-title'>{t("LAW.costs.title")}</h3>
              <ul className='info-check'>
                <li>{t("LAW.costs.il1")}</li>
                <li>{t("LAW.costs.il2")}</li>
                <li>{t("LAW.costs.il3")}</li>
                <li>{t("LAW.costs.il4")}</li>
                <li>{t("LAW.costs.il5")}</li>
                <li>{t("LAW.costs.il6")}</li>
                <li>{t("LAW.costs.il7")}</li>
                <li>{t("LAW.costs.il8")}</li>
              </ul>
            </div>

            <div className='column'>
              <h3 className='column-title'>{t("LAW.priv.title")}</h3>
              <ul className='info-check'>
                <li>{t("LAW.priv.il1")}</li>
                <li>{t("LAW.priv.il2")}</li>
                <li>{t("LAW.priv.il3")}</li>
                <li>{t("LAW.priv.il4")}</li>
                <li>{t("LAW.priv.il5")}</li>
                <li>{t("LAW.priv.il6")}</li>
                <li>{t("LAW.priv.il7")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawProtection;
