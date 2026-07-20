import React from "react";
import { useTranslation } from "react-i18next";
import "./LifeInsurance.css";

const LifeInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='oc law-protection'>
      <div className='health-header'>
        <div className='section-wrapper-hero'>
          <div className='section-text-wrapper-hero'>
            <h1 className='main-title'>{t("OC.title")}</h1>
            <p
              className='intro-text'
              dangerouslySetInnerHTML={{ __html: t("OC.info") }}
            ></p>
          </div>
          <div className='img-section-container'>
            <img className='img-section' src='/media/image-dog.png' alt="" />
          </div>
        </div>
      </div>
      <div className='insurance-page container'>
        <div className='insurance-section'>
          <div className='section-collumn'>
            <div className='wrapper-oc'>
              <div className='column'>
                <h3 className='column-title'>{t("OC.what.title")}</h3>
                <ul className='info-check'>
                  <li>{t("OC.what.il1")}</li>
                  <li>{t("OC.what.il2")}</li>
                  <li>{t("OC.what.il3")}</li>
                  <li>{t("OC.what.il4")}</li>
                  <li>{t("OC.what.il5")}</li>
                </ul>
              </div>
            </div>

            <div className='column'>
              <h3 className='column-title'>{t("OC.example.title")}</h3>
              <ul className='info-check custom-padding'>
                <li
                  dangerouslySetInnerHTML={{ __html: t("OC.example.il1") }}
                ></li>
                <p className='oc-covers'>{t("OC.example.i1")}</p>
                <li
                  dangerouslySetInnerHTML={{ __html: t("OC.example.il2") }}
                ></li>
                <p className='oc-covers'>{t("OC.example.i1")}</p>
                <li
                  dangerouslySetInnerHTML={{ __html: t("OC.example.il3") }}
                ></li>
                <p className='oc-covers'>{t("OC.example.i1")}</p>
                <li
                  dangerouslySetInnerHTML={{ __html: t("OC.example.il4") }}
                ></li>
                <p className='oc-covers'>{t("OC.example.i1")}</p>
                <li
                  dangerouslySetInnerHTML={{ __html: t("OC.example.il5") }}
                ></li>
                <p className='oc-covers'>{t("OC.example.i1")}</p>
                <li
                  dangerouslySetInnerHTML={{ __html: t("OC.example.il6") }}
                ></li>
                <p className='oc-covers'>{t("OC.example.i1")}</p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LifeInsurance;
