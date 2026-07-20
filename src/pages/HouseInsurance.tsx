import React from "react";
import { useTranslation } from "react-i18next";
import "./HouseInsurance.css";

const HouseInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='house-insurance'>
      <div className='health-header'>
        <div className='section-wrapper-hero'>
          <div className='section-text-wrapper-hero'>
            <h1 className='main-title'>{t("HOUSE.title")}</h1>
            <p className='intro-text'>{t("HOUSE.info")}</p>
          </div>
          <div className='img-section-container'>
            <img className='img-section' src='/media/image-flat.png' alt="" />
          </div>
        </div>
      </div>
      <div className='insurance-page container rows'>
        <div className='insurance-section'>
          <div className='section-collumn'>
            <div className='column'>
              <div className='row-text'>
                <h3 className='column-title'>{t("HOUSE.infoList")}</h3>
                <ul className='info-check'>
                  <li>{t("HOUSE.infoListItem1")}</li>
                  <li>{t("HOUSE.infoListItem2")}</li>
                  <li>{t("HOUSE.infoListItem3")}</li>
                  <li>{t("HOUSE.infoListItem4")}</li>
                </ul>
              </div>
              <div className='img-section-container'>
                <img className='img-section' src='/media/image-flood.png' alt="" loading="lazy" />
              </div>
            </div>
            <div className='column'>
              <div className='img-section-container'>
                <img className='img-section' src='/media/image-bike.png' alt="" loading="lazy" />
              </div>
              <div className='row-text'>
                <h3 className='column-title'>{t("HOUSE.what.title")}</h3>
                <ul className='info-check'>
                  <li>{t("HOUSE.what.il1")}</li>
                  <li>{t("HOUSE.what.il2")}</li>
                  <li>{t("HOUSE.what.il3")}</li>
                  <li>{t("HOUSE.what.il4")}</li>
                  <li>{t("HOUSE.what.il5")}</li>
                  <li>{t("HOUSE.what.il6")}</li>
                </ul>
              </div>
            </div>

            <div className='column'>
              <div className='row-text'>
                <h3 className='column-title'>{t("HOUSE.where.title")}</h3>
                <ul className='info-check'>
                  <li>{t("HOUSE.where.il1")}</li>
                  <li>{t("HOUSE.where.il2")}</li>
                  <li>{t("HOUSE.where.il3")}</li>
                </ul>
              </div>

              <div className='img-section-container'>
                <img className='img-section' src='/media/image-move.png' alt="" loading="lazy" />
              </div>
            </div>

            <div className='column'>
              <div className='img-section-container'>
                <img className='img-section' src='/media/image-mirror.png' alt="" loading="lazy" />
              </div>
              <div className='row-text'>
                <h3 className='column-title'>{t("HOUSE.additional.title")}</h3>
                <ul className='info-check'>
                  <li>{t("HOUSE.additional.il1")}</li>
                  <li>{t("HOUSE.additional.il2")}</li>
                  <li>{t("HOUSE.additional.il3")}</li>
                  <li>{t("HOUSE.additional.il4")}</li>
                  <li>{t("HOUSE.additional.il5")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='subsection-wrapper'>
          <div>
            <h3 className='subsection-title'>{t("HOUSE.important.title")}</h3>
            <ul className='info-check'>
              <li>{t("HOUSE.important.li1")}</li>
              <li>{t("HOUSE.important.li2")}</li>
            </ul>
          </div>
        </div>
        <h2 className='section-title divider'>{t("HOUSE.casco.title")}</h2>
        <div className='section-wrapper'>
          <div className='section-text-wrapper left'>
            <div>
              <p>{t("HOUSE.casco.p")}</p>
              <p>{t("HOUSE.casco.p1")}</p>
              <ul className='info-check'>
                <li>{t("HOUSE.casco.i1")}</li>
                <li>{t("HOUSE.casco.i2")}</li>
                <li>{t("HOUSE.casco.i3")}</li>
                <li>{t("HOUSE.casco.i4")}</li>
                <li>{t("HOUSE.casco.i5")}</li>
                <li>{t("HOUSE.casco.i6")}</li>
              </ul>
            </div>
          </div>
          <div className='img-section-container'>
            <img className='img-section' src='/media/image-computer.png' alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HouseInsurance;
