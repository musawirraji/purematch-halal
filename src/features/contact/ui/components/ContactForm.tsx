"use client";

import { useContactForm } from "../../application/useContactForm";
import { CONTACT_PAGE } from "../../domain/content";

const f = CONTACT_PAGE.form;

function Field({ label, htmlFor, error, children }: {
  label: string; htmlFor?: string; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="pm-field">
      <label className="pm-label" htmlFor={htmlFor}>{label}</label>
      {children}
      {error && <span className="pm-field__error">{error}</span>}
    </div>
  );
}

export function ContactForm() {
  const { submitted, form, onSubmit } = useContactForm();
  const { register, formState: { errors } } = form;

  return (
    <section className="pm-section pm-cform" id="contact-form">
      <div className="pm-cform__inner">
        {submitted ? (
          <div className="pm-cform__done">
            <span className="pm-cform__mark" aria-hidden="true">🤍</span>
            <h2 className="pm-cform__donetitle">{CONTACT_PAGE.success.title}</h2>
            {CONTACT_PAGE.success.body.map((p, i) => (
              <p className="pm-cform__donep" key={i}>{p}</p>
            ))}
          </div>
        ) : (
          <>
            <header className="pm-cform__head">
              <p className="pm-eyebrow pm-cform__kicker">{f.kicker}</p>
              <h2 className="pm-cform__heading">{f.heading}</h2>
              <p className="pm-cform__sub">{f.sub}</p>
            </header>

            <form className="pm-cform__form" onSubmit={onSubmit} noValidate>
              <div className="pm-cform__grid">
                <Field label="Full name *" htmlFor="name" error={errors.name?.message}>
                  <input id="name" className="pm-input" aria-invalid={!!errors.name} {...register("name")} />
                </Field>
                <Field label="Email address *" htmlFor="cemail" error={errors.email?.message}>
                  <input id="cemail" type="email" className="pm-input" aria-invalid={!!errors.email} {...register("email")} />
                </Field>
                <Field label="WhatsApp number (optional)" htmlFor="cwhatsapp">
                  <input id="cwhatsapp" type="tel" placeholder="+44 …" className="pm-input" {...register("whatsapp")} />
                </Field>
                <Field label="Subject *" htmlFor="subject" error={errors.subject?.message}>
                  <select id="subject" className="pm-select" aria-invalid={!!errors.subject} {...register("subject")}>
                    <option value="">Choose one…</option>
                    {f.subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Your message *" htmlFor="message" error={errors.message?.message}>
                <textarea id="message" rows={6} className="pm-textarea" aria-invalid={!!errors.message} {...register("message")} />
              </Field>

              <button type="submit" className="pm-btn pm-btn--pink pm-cform__submit">{f.submit} →</button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
