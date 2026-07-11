"use client";

import Link from "next/link";
import { route } from "@shared/navigation/routes";
import { useRegisterForm } from "../../application/useRegisterForm";
import { REGISTER_PAGE } from "../../domain/content";
import { MIN_WORDS } from "../../domain/schema";

const f = REGISTER_PAGE.form;

// Small hand-drawn upload glyph (no icon library).
function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 15V4M12 4L8 8M12 4l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Field({ label, htmlFor, hint, error, children }: {
  label: string; htmlFor?: string; hint?: string; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="pm-field">
      <label className="pm-label" htmlFor={htmlFor}>{label}</label>
      {hint && <span className="pm-field__hint">{hint}</span>}
      {children}
      {error && <span className="pm-field__error">{error}</span>}
    </div>
  );
}

export function RegisterForm() {
  const { step, submitted, form, next, back, onSubmit, aboutWords, lookingWords } = useRegisterForm();
  const { register, watch, formState: { errors } } = form;

  if (submitted) {
    const s = REGISTER_PAGE.success;
    return (
      <section className="pm-section pm-regdone" id="apply">
        <div className="pm-regdone__inner">
          <span className="pm-regdone__mark" aria-hidden="true">🤍</span>
          <h2 className="pm-regdone__title">{s.title}</h2>
          {s.body.map((p, i) => (
            <p className="pm-regdone__p" key={i}>{p}</p>
          ))}
          <Link href={route("home")} className="pm-btn pm-btn--ghost pm-regdone__btn">
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  const photoName = watch("photo")?.[0]?.name;
  const receiptName = watch("receipt")?.[0]?.name;

  return (
    <section className="pm-section pm-reg" id="apply">
      <div className="pm-reg__inner">
        <header className="pm-reg__head">
          <p className="pm-eyebrow pm-reg__kicker">{f.kicker}</p>
          <h2 className="pm-reg__heading">{f.heading}</h2>
        </header>

        <div className="pm-reg__progress" aria-hidden="true">
          {f.stepLabels.map((label, i) => (
            <div className={`pm-reg__pstep ${i === step ? "is-active" : ""} ${i < step ? "is-done" : ""}`} key={label}>
              <span className="pm-reg__pnum">{i < step ? "✓" : `0${i + 1}`}</span>
              <span className="pm-reg__plabel">{label}</span>
            </div>
          ))}
        </div>

        <form className="pm-reg__form" onSubmit={onSubmit} noValidate>
          <p className="pm-reg__stepcount">Step {step + 1} of 3</p>
          <p className="pm-reg__intro">{f.stepIntros[step]}</p>

          {step === 0 && (
            <div className="pm-reg__grid">
              <Field label="First name *" htmlFor="firstName" error={errors.firstName?.message}>
                <input id="firstName" className="pm-input" aria-invalid={!!errors.firstName} {...register("firstName")} />
              </Field>
              <Field label="Last name *" htmlFor="lastName" error={errors.lastName?.message}>
                <input id="lastName" className="pm-input" aria-invalid={!!errors.lastName} {...register("lastName")} />
              </Field>
              <Field label="Email address *" htmlFor="email" error={errors.email?.message}>
                <input id="email" type="email" className="pm-input" aria-invalid={!!errors.email} {...register("email")} />
              </Field>
              <Field label="WhatsApp number (with country code) *" htmlFor="whatsapp" error={errors.whatsapp?.message}>
                <input id="whatsapp" type="tel" placeholder="+44 …" className="pm-input" aria-invalid={!!errors.whatsapp} {...register("whatsapp")} />
              </Field>
              <Field label="Country of residence *" htmlFor="country" error={errors.country?.message}>
                <input id="country" className="pm-input" aria-invalid={!!errors.country} {...register("country")} />
              </Field>
              <Field label="Date of birth *" htmlFor="dob" error={errors.dob?.message}>
                <input id="dob" type="date" className="pm-input" aria-invalid={!!errors.dob} {...register("dob")} />
              </Field>
              <div className="pm-field">
                <span className="pm-label">Gender *</span>
                <div className="pm-seg">
                  {f.genders.map((g) => (
                    <label className="pm-seg__opt" key={g}>
                      <input type="radio" value={g} {...register("gender")} />
                      <span>{g}</span>
                    </label>
                  ))}
                </div>
                {errors.gender && <span className="pm-field__error">{errors.gender.message}</span>}
              </div>
              <div className="pm-field">
                <span className="pm-label">Marital status *</span>
                <div className="pm-seg">
                  {f.maritals.map((m) => (
                    <label className="pm-seg__opt" key={m}>
                      <input type="radio" value={m} {...register("marital")} />
                      <span>{m}</span>
                    </label>
                  ))}
                </div>
                {errors.marital && <span className="pm-field__error">{errors.marital.message}</span>}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="pm-reg__stack">
              <Field
                label="Tell us about yourself *"
                htmlFor="about"
                hint="Your deen, your values, your personality, and your life — how you practise your faith, what your daily life looks like, what matters most to you."
                error={errors.about?.message}
              >
                <textarea id="about" rows={8} className="pm-textarea" aria-invalid={!!errors.about} {...register("about")} />
                <span className={`pm-reg__count ${aboutWords >= MIN_WORDS ? "is-met" : ""}`}>{aboutWords} / {MIN_WORDS} words</span>
              </Field>
              <Field
                label="What are you looking for in a spouse? *"
                htmlFor="looking"
                hint="Be specific. The more clearly you describe who you are hoping to find, the better we can search for them."
                error={errors.looking?.message}
              >
                <textarea id="looking" rows={8} className="pm-textarea" aria-invalid={!!errors.looking} {...register("looking")} />
                <span className={`pm-reg__count ${lookingWords >= MIN_WORDS ? "is-met" : ""}`}>{lookingWords} / {MIN_WORDS} words</span>
              </Field>
              <Field
                label="Any specific preferences or requirements? (optional)"
                htmlFor="preferences"
                hint="e.g. age range, location, profession, cultural background."
              >
                <textarea id="preferences" rows={4} className="pm-textarea" {...register("preferences")} />
              </Field>
            </div>
          )}

          {step === 2 && (
            <div className="pm-reg__stack">
              <div className="pm-field">
                <span className="pm-label">Membership type *</span>
                <div className="pm-seg pm-seg--wide">
                  {f.memberships.map((m) => (
                    <label className="pm-seg__opt" key={m.value}>
                      <input type="radio" value={m.value} {...register("membership")} />
                      <span>{m.label}</span>
                    </label>
                  ))}
                </div>
                {errors.membership && <span className="pm-field__error">{errors.membership.message}</span>}
              </div>

              <div className="pm-field">
                <span className="pm-label">Your photograph *</span>
                <label className="pm-filedrop">
                  <UploadIcon />
                  <span><strong>Upload your photograph</strong></span>
                  <span className="pm-field__hint">JPG or PNG, max 5MB — for our reference only, never shared without your prior knowledge and consent.</span>
                  {photoName && <span className="pm-filedrop__file">{photoName}</span>}
                  <input type="file" accept="image/jpeg,image/png" className="pm-visually-hidden" {...register("photo")} />
                </label>
                {errors.photo && <span className="pm-field__error">{errors.photo.message as string}</span>}
              </div>

              <div className="pm-field">
                <span className="pm-label">Payment receipt *</span>
                <label className="pm-filedrop">
                  <UploadIcon />
                  <span><strong>Upload your payment receipt</strong></span>
                  <span className="pm-field__hint">JPG, PNG or PDF, max 5MB.</span>
                  {receiptName && <span className="pm-filedrop__file">{receiptName}</span>}
                  <input type="file" accept="image/jpeg,image/png,application/pdf" className="pm-visually-hidden" {...register("receipt")} />
                </label>
                {errors.receipt && <span className="pm-field__error">{errors.receipt.message as string}</span>}
              </div>

              <label className="pm-check">
                <input type="checkbox" {...register("agree")} />
                <span>
                  I have read and agree to the Pure Match Halal{" "}
                  <Link href={route("membership")} className="pm-reg__termslink">membership terms and privacy policy</Link>.
                </span>
              </label>
              {errors.agree && <span className="pm-field__error">{errors.agree.message}</span>}
            </div>
          )}

          <div className="pm-reg__nav">
            {step > 0 ? (
              <button type="button" className="pm-btn pm-btn--ghost" onClick={back}>← Back</button>
            ) : (
              <span />
            )}
            {step < 2 ? (
              <button type="button" className="pm-btn" onClick={next}>Next →</button>
            ) : (
              <button type="submit" className="pm-btn pm-btn--pink">{f.submit} →</button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
