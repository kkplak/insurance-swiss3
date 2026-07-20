import React from "react";
import { useTranslation } from "react-i18next";

const CarInsurance: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='health-insurance'>
      <div className='health-header'>
        <div className='section-wrapper-hero'>
          <div className='section-text-wrapper-hero'>
            <h1 className='main-title'>{t("CAR.title")}</h1>
            <div>
              <p className='info-list-title'>{t("CAR.infoList")}</p>

              <ol className='list-arab'>
                <li>{t("CAR.infoListItem1")}</li>
                <li>
                  {t("CAR.infoListItem2")}
                  <ul className='info-list'>
                    <li>{t("CAR.infoListItem3")}</li>
                    <li>{t("CAR.infoListItem4")}</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
          <div className='img-section-container'>
            <img className='img-section' src='/media/image-broken-car.png' alt="" />
          </div>
        </div>
      </div>
      <div className='insurance-page container'>
        <div className='insurance-section'>
          <div className='subsection-wrapper'>
            <div>
              <h3 className='subsection-title'>{t("CAR.intro.p1")}</h3>
              <ul className='info-check'>
                <li>{t("CAR.intro.l1")}</li>
                <li>{t("CAR.intro.l2")}</li>
                <li>{t("CAR.intro.l3")}</li>
                <li>{t("CAR.intro.l4")}</li>
                <li>{t("CAR.intro.l5")}</li>
              </ul>
            </div>
            <div className='img-section-container-1'>
              <img className='img-section' src='/media/image-gold.png' alt="" loading="lazy" />
            </div>
          </div>
          <h2 className='section-title divider'>{t("CAR.OC.title")}</h2>
          <div className='section-wrapper'>
            <div className='section-text-wrapper left'>
              <div>
                <p dangerouslySetInnerHTML={{ __html: t("CAR.OC.p") }}></p>
                <ul className='info-check'>
                  <li>{t("CAR.OC.i1")}</li>
                  <li>{t("CAR.OC.i2")}</li>
                  <li>{t("CAR.OC.i3")}</li>
                  <li>{t("CAR.OC.i4")}</li>
                </ul>
              </div>
            </div>
            <div className='img-section-container'>
              <img className='img-section' src='/media/image-sun.png' alt="" loading="lazy" />
            </div>
          </div>
          <h2 className='section-title divider'>{t("CAR.casco.title")}</h2>
          <div className='section-wrapper'>
            <div className='section-text-wrapper left'>
              <div>
                <p dangerouslySetInnerHTML={{ __html: t("CAR.casco.p") }}></p>
              </div>
            </div>
            <div className='img-section-container'>
              <img className='img-section' src='/media/image-grad.png' alt="" loading="lazy" />
            </div>
          </div>

          <h3 className='subsection-title centered'>{t("CAR.casco.p2")}</h3>

          <div className='section-collumn'>
            <div className='column'>
              <h3 className='column-title'>{t("CAR.teilkasko.title")}</h3>
              <p dangerouslySetInnerHTML={{ __html: t("CAR.teilkasko.p") }}></p>
              <ul className='info-check'>
                <li>{t("CAR.teilkasko.i1")}</li>
                <li>{t("CAR.teilkasko.i2")}</li>
                <li>{t("CAR.teilkasko.i3")}</li>
                <li>{t("CAR.teilkasko.i4")}</li>
                <li>{t("CAR.teilkasko.i5")}</li>
                <li>{t("CAR.teilkasko.i6")}</li>
                <li>{t("CAR.teilkasko.i7")}</li>
              </ul>
            </div>
            <div className='column'>
              <h3 className='column-title'>{t("CAR.vollkasko.title")}</h3>
              <p dangerouslySetInnerHTML={{ __html: t("CAR.vollkasko.p") }}></p>
              <ul className='info-check'>
                <li>{t("CAR.vollkasko.li1")}</li>
              </ul>
            </div>
          </div>
          <div className='subsection-wrapper'>
            <div>
              <h3 className='subsection-title'>{t("CAR.kask.p2")}</h3>
              <ul className='info-check'>
                <li>{t("CAR.kask.li2")}</li>
                <li>{t("CAR.kask.li3")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInsurance;
