import React from "react";
import { ArrowRight } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import "./ContactForm.css";

function ContactForm() {
  const { t, i18n } = useTranslation();
  const [state, handleSubmit] = useForm("xkgwndnd");

  if (state.succeeded) {
    return <p className="form-thank-you">{t("CONTACT.formThanks")}</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="hidden" name="language" value={i18n.resolvedLanguage || "pl"} />
      <div className="contact-form-grid">
        <div className="form-field">
          <label className="form-label" htmlFor="name">{t("CONTACT.formName")}</label>
          <input id="name" type="text" name="name" required autoComplete="name" className="form-input" />
          <ValidationError prefix={t("CONTACT.validationName")} field="name" errors={state.errors} className="form-error" />
        </div>

        <div className="form-field">
          <label className="form-label" htmlFor="phone">{t("CONTACT.formNumber")}</label>
          <input id="phone" type="tel" name="phone" required autoComplete="tel" className="form-input" />
          <ValidationError prefix={t("CONTACT.validationPhone")} field="phone" errors={state.errors} className="form-error" />
        </div>

        <div className="form-field form-field--full">
          <label className="form-label" htmlFor="email">{t("CONTACT.formEmail")}</label>
          <input id="email" type="email" name="email" required autoComplete="email" className="form-input" />
          <ValidationError prefix={t("CONTACT.validationEmail")} field="email" errors={state.errors} className="form-error" />
        </div>

        <div className="form-field form-field--full">
          <label className="form-label" htmlFor="message">{t("CONTACT.formMessage")}</label>
          <textarea id="message" name="message" rows={5} className="form-textarea" />
          <ValidationError prefix={t("CONTACT.validationMessage")} field="message" errors={state.errors} className="form-error" />
        </div>
      </div>

      <button type="submit" disabled={state.submitting} className="button button--primary form-button">
        {state.submitting ? t("CONTACT.formSubmitting") : t("CONTACT.formSubmit")}
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}

export default ContactForm;
