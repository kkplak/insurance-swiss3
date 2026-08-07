import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Handshake,
  Languages,
  MapPin,
  MessagesSquare,
  ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import ButtonBox from "../components/ButtonBox/ButtonBox";
import LogoLine from "../components/LogoLine/LogoLine";
import InsuranceData from "../components/InsuranceData/InsuranceData";
import ConsultationCta from "../components/ConsultationCta/ConsultationCta";

interface ClientStory {
  name: string;
  focus: string;
  body: string;
  value: string;
}

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { lang = "pl" } = useParams<{ lang: string }>();
  const heroImages = [
    "/media/hero-3.jpg",
    "/media/hero-4.jpg",
    "/media/hero-1.jpg",
    "/media/hero-2.jpg",
    "/media/hero-5.jpg",
  ];
  const [activeHeroIndex, setActiveHeroIndex] = React.useState(0);

  const clientStoriesRaw = t("HOME.clientStories.cases", {
    returnObjects: true,
  }) as unknown;
  const clientStories: ClientStory[] = Array.isArray(clientStoriesRaw)
    ? (clientStoriesRaw as ClientStory[])
    : [];

  const logos = [
    { src: "/media/helsana.png", name: "Helsana" },
    { src: "/media/visana.png", name: "Visana" },
    { src: "/media/css.png", name: "CSS" },
    { src: "/media/swica.png", name: "Swica" },
    { src: "/media/groupemutuel.png", name: "Groupe Mutuel" },
    { src: "/media/sanitas.svg", name: "Sanitas" },
    { src: "/media/concordia.png", name: "Concordia" },
    { src: "/media/l-life.png", name: "Liechtenstein Life" },
    { src: "/media/axa.png", name: "Axa" },
    { src: "/media/Allianz.png", name: "Allianz" },
  ];

  const trustItems = [
    { icon: ShieldCheck, title: t("HOME.trust.experience"), text: t("HOME.trust.experienceText") },
    { icon: Languages, title: t("HOME.trust.languages"), text: t("HOME.trust.languagesText") },
    { icon: MapPin, title: t("HOME.trust.location"), text: t("HOME.trust.locationText") },
  ];

  const processSteps = [
    { icon: MessagesSquare, title: t("HOME.process.step1Title"), text: t("HOME.process.step1Text") },
    { icon: FileSearch, title: t("HOME.process.step2Title"), text: t("HOME.process.step2Text") },
    { icon: Handshake, title: t("HOME.process.step3Title"), text: t("HOME.process.step3Text") },
  ];

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroIndex((current) => (current + 1) % heroImages.length);
    }, 6500);

    return () => window.clearInterval(intervalId);
  }, [heroImages.length]);

  return (
    <div className="homepage">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-media" aria-hidden="true">
          {heroImages.map((imageSrc, index) => (
            <img
              key={imageSrc}
              src={imageSrc}
              alt=""
              className={`hero-slide${index === activeHeroIndex ? " hero-slide--active" : ""}`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        <div className="hero-overlay">
          <div className="hero-content">
            <div className="hero-card">
              {/* <p className="hero-badge">
                <span aria-hidden="true" />
                {t("HOME.heroBadge")}
              </p> */}
              <h1 id="hero-title" className="hero-title">{t("HOME.heroTitle")}</h1>
              <p className="hero-lead">{t("HOME.heroLead")}</p>
              <p className="hero-subcopy">{t("HOME.heroSubcopy")}</p>

              <div className="hero-actions">
                <Link to={`/${lang}/contact`} className="button button--primary">
                  {t("HOME.heroCta")}
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <Link to={`/${lang}/about-me`} className="button button--ghost-light">
                  {t("HOME.secondaryCta")}
                </Link>
              </div>

              <p className="hero-assurance">
                <CheckCircle2 size={18} aria-hidden="true" />
                {t("HOME.heroAssurance")}
              </p>
            </div>

            <div className="hero-dots" aria-label={t("HOME.heroGalleryLabel")}>
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={index === activeHeroIndex ? "hero-dot hero-dot--active" : "hero-dot"}
                  onClick={() => setActiveHeroIndex(index)}
                  aria-label={`${t("HOME.heroSlideLabel")} ${index + 1}`}
                  aria-current={index === activeHeroIndex ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label={t("HOME.trust.label")}>
        <div className="trust-strip__inner">
          {trustItems.map(({ icon: Icon, title, text }) => (
            <div className="trust-item" key={title}>
              <span className="trust-item__icon"><Icon size={21} aria-hidden="true" /></span>
              <span><strong>{title}</strong><small>{text}</small></span>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="products-section section-shell">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">{t("HOME.productsEyebrow")}</p>
          <h2>{t("HOME.productsHeading")}</h2>
          <p>{t("HOME.productsIntro")}</p>
        </div>
        <div className="button-box-row">
          <ButtonBox icon="/media/image-one.png" titleKey="GENERAL.healthInsurance" descriptionKey="GENERAL.healthInsuranceDescription" link={`/${lang}/health-insurance`} />
          <ButtonBox icon="/media/image-home.png" titleKey="GENERAL.houseInsurance" descriptionKey="GENERAL.houseInsuranceDescription" link={`/${lang}/house-insurance`} />
          <ButtonBox icon="/media/image-car.jpeg" titleKey="GENERAL.carInsurance" descriptionKey="GENERAL.carInsuranceDescription" link={`/${lang}/car-insurance`} />
          <ButtonBox icon="/media/image-law.jpeg" titleKey="GENERAL.lawProtection" descriptionKey="GENERAL.lawProtectionDescription" link={`/${lang}/law-protection`} />
          <ButtonBox icon="/media/image-liability.jpeg" titleKey="GENERAL.lifeInsurance" descriptionKey="GENERAL.lifeInsuranceDescription" link={`/${lang}/life-insurance`} />
          <ButtonBox icon="/media/image-switzerland.png" titleKey="GENERAL.swissInsurance" descriptionKey="GENERAL.swissInsuranceDescription" link={`/${lang}/swiss-insurance`} />
        </div>
      </section>

      <section className="process-section">
        <div className="section-shell">
          <div className="section-heading process-heading">
            <p className="eyebrow">{t("HOME.process.eyebrow")}</p>
            <h2>{t("HOME.process.title")}</h2>
            <p>{t("HOME.process.intro")}</p>
          </div>
          <div className="process-grid">
            {processSteps.map(({ icon: Icon, title, text }, index) => (
              <article className="process-card" key={title}>
                <div className="process-card__top">
                  <span className="process-card__icon"><Icon size={24} aria-hidden="true" /></span>
                  <span className="process-card__number">0{index + 1}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InsuranceData />

      <section className="client-stories section-shell" aria-labelledby="client-stories-heading">
        <div className="section-heading section-heading--center">
          <p className="eyebrow">{t("HOME.clientStories.kicker")}</p>
          <h2 id="client-stories-heading">{t("HOME.clientStories.title")}</h2>
          <p>{t("HOME.clientStories.lead")}</p>
        </div>
        <div className="client-stories-grid">
          {clientStories.map((story, index) => (
            <article className="client-story-card" key={story.name}>
              <span className="client-story-card__index" aria-hidden="true">0{index + 1}</span>
              <h3 className="client-story-title">
                <span className="client-story-name">{story.name}</span>
                <span className="client-story-focus">{story.focus}</span>
              </h3>
              <p className="client-story-body">{story.body}</p>
              <p className="client-story-value"><CheckCircle2 size={17} aria-hidden="true" />{story.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="partner-section" aria-labelledby="partner-heading">
        <div className="section-heading section-heading--center partner-heading">
          <p className="eyebrow">{t("HOME.partnersEyebrow")}</p>
          <h2 id="partner-heading">{t("HOME.partnersTitle")}</h2>
        </div>
        <LogoLine logos={logos} mobileBreakpoint={900} marqueeSpeed={28} />
      </section>

      <ConsultationCta />
    </div>
  );
};

export default Home;
