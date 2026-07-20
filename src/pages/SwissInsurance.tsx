import React from "react";
import { useTranslation } from "react-i18next";

const SwissInsurance: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="insurance-page container newcomer-page">
      <h1>{t("GENERAL.swissInsurance")}</h1>
      <section className="insurance-section newcommer">
        <div className="text-center newcomer-alert">
          <p
            className="bgcolor"
            dangerouslySetInnerHTML={{ __html: t("HEALTH.newcommers.p") }}
          />
        </div>

        <h2 className="newcomer-title">{t("HEALTH.newcommers.p2")}</h2>
        <ul className="documents-list">
          <li>
            <strong>{t("HEALTH.newcommers.item1")}</strong>
            <p>{t("HEALTH.newcommers.p3")}</p>
            <ul className="info-check">
              <li>{t("HEALTH.newcommers.p3item1")}</li>
              <li>{t("HEALTH.newcommers.p3item2")}</li>
              <li>{t("HEALTH.newcommers.p3item3")}</li>
            </ul>
          </li>
          <li><strong>{t("HEALTH.newcommers.item2")}</strong></li>
          <li><strong>{t("HEALTH.newcommers.item3")}</strong></li>
          <li><strong>{t("HEALTH.newcommers.item4")}</strong></li>
        </ul>

        <p className="indent-swiss">{t("HEALTH.newcommers.p4")}</p>
      </section>
    </div>
  );
};

export default SwissInsurance;
