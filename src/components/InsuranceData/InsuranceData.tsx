import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./InsuranceData.css";

type RecordItem = {
  Pramie?: string;
  Tarif?: string;
  Geschaftsjahr?: string;
  Hoheitsgebiet?: string;
  Altersklasse?: string;
  Kanton?: string;
};

interface Stats {
  averagePremium: number;
  minPremium: number;
  maxPremium: number;
  variationPercent: number;
  potentialSavings: number;
  sampleCount: number;
  dataYear: number;
  lowestCanton: string;
  highestCanton: string;
}

interface YearStats {
  year: number;
  averagePremium: number;
  minPremium: number;
  maxPremium: number;
  lowestCanton: string;
  highestCanton: string;
  sampleCount: number;
}

const RESOURCE_ID = "0b9f074d-d457-4ec0-807d-bcf5596ac60a";
const DATASET_URL = "https://opendata.swiss/en/dataset/health-insurance-premiums";
const DATA_SOURCE_NAME = "Federal Office of Public Health FOPH / BAG";

const parsePremium = (value?: string) => {
  if (!value) {
    return NaN;
  }
  const parsed = parseFloat(value.replace(",", "."));
  return Number.isFinite(parsed) ? parsed : NaN;
};

const getDefaultStats = (): Stats => ({
  averagePremium: 486.7,
  minPremium: 416.7,
  maxPremium: 545,
  variationPercent: 23.5,
  potentialSavings: 128.3,
  sampleCount: 6,
  dataYear: 2025,
  lowestCanton: "ZH",
  highestCanton: "AG",
});

const InsuranceData: React.FC = () => {
  const { t } = useTranslation();
  const [stats, setStats] = useState<Stats>(getDefaultStats());
  const [stats2025, setStats2025] = useState<YearStats | null>(null);
  const [stats2026, setStats2026] = useState<YearStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchYear = async (year: string): Promise<YearStats | null> => {
      const filters = {
        Geschaftsjahr: year,
        Hoheitsgebiet: "CH",
        Altersklasse: "AKL-ERW",
        Tarif: "BASE",
      };
      const endpoint = `https://ckan.opendata.swiss/api/3/action/datastore_search?resource_id=${RESOURCE_ID}&limit=1000&filters=${encodeURIComponent(
        JSON.stringify(filters)
      )}`;

      const response = await fetch(endpoint, { signal: controller.signal });
      const data = await response.json();
      if (!data.success || !data.result?.records) {
        return null;
      }

      const records: RecordItem[] = data.result.records;
      const validRecords = records
        .map((record) => ({
          premium: parsePremium(record.Pramie),
          canton: record.Kanton ?? "CH",
        }))
        .filter((item) => !Number.isNaN(item.premium));

      if (validRecords.length === 0) {
        return null;
      }

      const premiums = validRecords.map((item) => item.premium);
      const sum = premiums.reduce((total, value) => total + value, 0);
      const minPremium = Math.min(...premiums);
      const maxPremium = Math.max(...premiums);
      const averagePremium = sum / premiums.length;
      const lowestCanton = validRecords.find((item) => item.premium === minPremium)?.canton ?? "CH";
      const highestCanton = validRecords.find((item) => item.premium === maxPremium)?.canton ?? "CH";

      return {
        year: Number(year),
        averagePremium,
        minPremium,
        maxPremium,
        lowestCanton,
        highestCanton,
        sampleCount: validRecords.length,
      };
    };

    const loadData = async () => {
      const [year2026, year2025] = await Promise.all([fetchYear("2026"), fetchYear("2025")]);

      if (year2026) {
        setStats2026(year2026);
      }
      if (year2025) {
        setStats2025(year2025);
      }

      const fallbackStats = year2026 ?? year2025;
      if (!fallbackStats) {
        throw new Error("No official records found for 2026 or 2025");
      }

      setStats({
        averagePremium: fallbackStats.averagePremium,
        minPremium: fallbackStats.minPremium,
        maxPremium: fallbackStats.maxPremium,
        variationPercent: fallbackStats.maxPremium
          ? ((fallbackStats.maxPremium - fallbackStats.minPremium) / fallbackStats.maxPremium) * 100
          : 0,
        potentialSavings: Math.max(0, fallbackStats.maxPremium - fallbackStats.minPremium),
        sampleCount: fallbackStats.sampleCount,
        dataYear: fallbackStats.year,
        lowestCanton: fallbackStats.lowestCanton,
        highestCanton: fallbackStats.highestCanton,
      });

      setHasError(false);
      setIsLoading(false);
    };

    loadData().catch((error) => {
      if (error instanceof DOMException && error.name === "AbortError") return;
      console.error("InsuranceData fetch error", error);
      setHasError(true);
      setIsLoading(false);
    });

    return () => controller.abort();
  }, []);

  const fallbackStats = { ...stats, year: stats.dataYear };
  const currentYearStats = stats2026 ?? stats2025 ?? fallbackStats;
  const dataYearLabel = `${currentYearStats.year}`;

  const chartValues = [
    {
      name: t("INSURANCE_DATA.chart.highestBenchmark"),
      value: 100,
      color: "#0c3c74",
      label: `CHF ${currentYearStats.maxPremium.toFixed(0)}`,
    },
    {
      name: t("INSURANCE_DATA.chart.averageRate"),
      value: (currentYearStats.averagePremium / currentYearStats.maxPremium) * 100,
      color: "#1f66a8",
      label: `CHF ${currentYearStats.averagePremium.toFixed(0)}`,
    },
    {
      name: t("INSURANCE_DATA.chart.lowestBenchmark"),
      value: (currentYearStats.minPremium / currentYearStats.maxPremium) * 100,
      color: "#22a19c",
      label: `CHF ${currentYearStats.minPremium.toFixed(0)}`,
    },
  ];

  const metrics = [
    {
      label: t("INSURANCE_DATA.metrics.savings.label"),
      value: t("INSURANCE_DATA.metrics.savings.value"),
      detail: t("INSURANCE_DATA.metrics.savings.detail"),
    },
    {
      label: t("INSURANCE_DATA.metrics.missOut.label"),
      value: t("INSURANCE_DATA.metrics.missOut.value"),
      detail: t("INSURANCE_DATA.metrics.missOut.detail"),
    },
    {
      label: t("INSURANCE_DATA.metrics.supplemental.label"),
      value: t("INSURANCE_DATA.metrics.supplemental.value"),
      detail: t("INSURANCE_DATA.metrics.supplemental.detail"),
    },
  ];

  return (
    <section className="insurance-data-section">
      <div className="insurance-data-panel">
        <div className="insurance-data-intro">
          <p className="insurance-data-eyebrow">{t("INSURANCE_DATA.eyebrow")}</p>
          <h2>{t("INSURANCE_DATA.title")}</h2>
          <p>{t("INSURANCE_DATA.subtitle")}</p>

          <div className="insurance-data-source-intro">
            <span>{t("INSURANCE_DATA.officialSource", { source: DATA_SOURCE_NAME })}</span>
            <a href={DATASET_URL} target="_blank" rel="noreferrer">{t("INSURANCE_DATA.viewSource")}</a>
          </div>

          {isLoading && <p className="insurance-data-status">{t("INSURANCE_DATA.loading")}</p>}
          {hasError && <p className="insurance-data-status">{t("INSURANCE_DATA.fallback")}</p>}

        </div>

        <div className="insurance-data-grid">
          {metrics.map((metric) => (
            <article key={metric.label} className="insurance-metric-card">
              <span className="metric-value">{metric.value}</span>
              <h3>{metric.label}</h3>
              <p>{metric.detail}</p>
            </article>
          ))}
        </div>

        <div className="insurance-data-chart-card">
          <div className="chart-card-header">
            <div>
              <p className="chart-eyebrow">{t("INSURANCE_DATA.chart.eyebrow")}</p>
              <h3>{t("INSURANCE_DATA.chart.title")}</h3>
            </div>
            <p className="chart-note">
              {t("INSURANCE_DATA.chart.sourceLabel")} <a href={DATASET_URL} target="_blank" rel="noreferrer">{DATA_SOURCE_NAME}</a>
            </p>
          </div>

          <div className="chart-bars">
            {chartValues.map((item) => (
              <div key={item.name} className="chart-bar-row">
                <span className="chart-label">{item.name}</span>
                <div className="chart-bar-track">
                  <div
                    className="chart-bar-fill"
                    style={{
                      width: `${Math.max(8, item.value)}%`,
                      background: item.color,
                    }}
                  />
                </div>
                <span className="chart-bar-value">{item.label}</span>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default InsuranceData;
