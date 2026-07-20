import React from "react";
import { useTranslation } from "react-i18next";
import ToggleDescription from "../components/Toggle/Toggle";

const HealthInsurance: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='health-insurance'>
      <div className='health-header'>
        <div className='section-wrapper-hero'>
          <div className='section-text-wrapper-hero'>
            <h1 className='main-title'>{t("HEALTH.title")}</h1>
            <p className='intro-text'>{t("HEALTH.info")}</p>
            <div>
              <p className='info-list-title'>{t("HEALTH.infoList")}</p>

              <ol className='list-arab'>
                <li>{t("HEALTH.infoListItem1")}</li>
                <li>{t("HEALTH.infoListItem2")}</li>
              </ol>
            </div>
          </div>
          <div className='img-section-container'>
            <img className='img-section' src='/media/image-health.png' alt="" />
          </div>
        </div>
      </div>
      <div className='insurance-page container'>
        <div className='insurance-section'>
          <h2 className='section-title'>{t("HEALTH.basic.title")}</h2>
          <p dangerouslySetInnerHTML={{ __html: t("HEALTH.basic.p") }}></p>
          <div className='subsection-wrapper'>
            <div>
              <h3 className='subsection-title'>{t("HEALTH.basic.p1")}</h3>
              <ul className='info-check'>
                <li>{t("HEALTH.basic.l1")}</li>
                <li>{t("HEALTH.basic.l2")}</li>
                <li>{t("HEALTH.basic.l3")}</li>
                <li>{t("HEALTH.basic.l4")}</li>
                <li>{t("HEALTH.basic.l5")}</li>
              </ul>
            </div>
            <div className='img-section-container-1'>
              <img className='img-section' src='/media/image-gold.png' alt="" loading="lazy" />
            </div>
          </div>
          <h3 className='subsection-title centered'>{t("HEALTH.basic.p2")}</h3>

          <div className='section-collumn'>
            <div className='column'>
              <h3 className='column-title'>{t("HEALTH.fran.title")}</h3>
              <p dangerouslySetInnerHTML={{ __html: t("HEALTH.fran.p") }}></p>
              <h4 className='subsection-title h4'>{t("HEALTH.fran.p1")}</h4>
              <div className='table-column'>
                <div className='table-wrapper'>
                  <h5 className='h5'>{t("HEALTH.fran.p2")}</h5>{" "}
                  <p
                    dangerouslySetInnerHTML={{ __html: t("HEALTH.fran.p3") }}
                  ></p>
                </div>

                <div className='table-wrapper'>
                  <h5 className='h5'>{t("HEALTH.fran.p5")}</h5>{" "}
                  <p
                    dangerouslySetInnerHTML={{ __html: t("HEALTH.fran.p6") }}
                  ></p>
                </div>
              </div>
              <p>{t("HEALTH.fran.p7")}</p>
              <ToggleDescription
                title={t("HEALTH.fran.p8")}
                description={
                  <>
                    <p
                      dangerouslySetInnerHTML={{ __html: t("HEALTH.fran.p9") }}
                    ></p>
                    <ul className='list-arab'>
                      <li
                        dangerouslySetInnerHTML={{
                          __html: t("HEALTH.fran.p10"),
                        }}
                      ></li>
                      <li
                        dangerouslySetInnerHTML={{
                          __html: t("HEALTH.fran.p11"),
                        }}
                      ></li>
                      <li
                        dangerouslySetInnerHTML={{
                          __html: t("HEALTH.fran.p12"),
                        }}
                      ></li>
                      <li
                        dangerouslySetInnerHTML={{
                          __html: t("HEALTH.fran.p13"),
                        }}
                      ></li>
                    </ul>
                  </>
                }
              />
            </div>
            <div className='column'>
              <h3 className='column-title'>{t("HEALTH.model.title")}</h3>
              <p dangerouslySetInnerHTML={{ __html: t("HEALTH.model.p") }}></p>
              <ul className='info-check-old'>
                <li
                  dangerouslySetInnerHTML={{ __html: t("HEALTH.model.p2") }}
                ></li>
                <li
                  dangerouslySetInnerHTML={{ __html: t("HEALTH.model.p3") }}
                ></li>
                <li
                  dangerouslySetInnerHTML={{ __html: t("HEALTH.model.p4") }}
                ></li>
                <li
                  dangerouslySetInnerHTML={{ __html: t("HEALTH.model.p5") }}
                ></li>
              </ul>
            </div>
          </div>
        </div>
        <h2 className='section-title divider'>{t("HEALTH.add.title")}</h2>
        <div className='section-wrapper'>
          <div className='section-text-wrapper left'>
            <div>
              <p>{t("HEALTH.add.p")}</p>
              <ul className='info-check'>
                <li>{t("HEALTH.add.i1")}</li>
                <li>{t("HEALTH.add.i2")}</li>
                <li>{t("HEALTH.add.i3")}</li>
                <li>{t("HEALTH.add.i4")}</li>
                <li>{t("HEALTH.add.i5")}</li>
              </ul>
            </div>
          </div>
          <div className='img-section-container'>
            <img className='img-section' src='/media/image-gym.png' alt="" loading="lazy" />
          </div>
        </div>
        <p dangerouslySetInnerHTML={{ __html: t("HEALTH.add.p2") }}></p>
      </div>
      <div className='insurance-section extra-section'>
        <h2 className='section-title'>{t("HEALTH.extra.title")}</h2>
        <div className='toggles-wrapper'>
          <ToggleDescription
            title={t("HEALTH.extra.p1")}
            description={<p>{t("HEALTH.extra.i1")}</p>}
          />
          <ToggleDescription
            title={t("HEALTH.extra.p2")}
            description={<p>{t("HEALTH.extra.i2")}</p>}
          />
          <ToggleDescription
            title={t("HEALTH.extra.p3")}
            description={<p>{t("HEALTH.extra.i3")}</p>}
          />
          <ToggleDescription
            title={t("HEALTH.extra.p4")}
            description={<p>{t("HEALTH.extra.i4")}</p>}
          />
          <ToggleDescription
            title={t("HEALTH.extra.p5")}
            description={<p>{t("HEALTH.extra.i5")}</p>}
          />
          <ToggleDescription
            title={t("HEALTH.extra.p6")}
            description={
              <div>
                <p>{t("HEALTH.extra.i6")}</p>
                <ul className='info-list'>
                  <li>{t("HEALTH.extra.il1")}</li>
                  <li>{t("HEALTH.extra.il2")}</li>
                  <li>{t("HEALTH.extra.il3")}</li>
                  <li>{t("HEALTH.extra.il4")}</li>
                  <li>{t("HEALTH.extra.il5")}</li>
                </ul>
                <p>{t("HEALTH.extra.p7")}</p>
              </div>
            }
          />
          <ToggleDescription
            title={t("HEALTH.extra.p8")}
            description={
              <div>
                <p>{t("HEALTH.extra.i8")}</p>
                <p>{t("HEALTH.extra.i9")}</p>
              </div>
            }
          />
          <ToggleDescription
            title={t("HEALTH.extra.p9")}
            description={
              <div>
                {" "}
                <p>{t("HEALTH.extra.i10")}</p>
                <p>{t("HEALTH.extra.i11")}</p>
                <p>{t("HEALTH.extra.i12")}</p>{" "}
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HealthInsurance;
