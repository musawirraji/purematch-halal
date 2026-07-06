// Style-guide specimen — the sign-off gate. Renders the whole visual system:
// colour, type (in BOTH candidate pairings), spacing/radius/motion tokens, and
// every core component in all states, plus one assembled hero.
// Server component — the accordion uses native <details> (a11y + no JS).

const COLOUR_PRIMITIVES: { name: string; token: string; hex: string }[] = [
  { name: "Terracotta 100", token: "--pm-pink-100", hex: "#F6E7DD" },
  { name: "Terracotta 300", token: "--pm-pink-500", hex: "#D8A784" },
  { name: "Terracotta 500", token: "--pm-pink-500", hex: "#B4795A" },
  { name: "Terracotta 700", token: "--pm-pink-600", hex: "#8F5B41" },
  { name: "Rose 500", token: "--pm-pink-500", hex: "#D64550" },
  { name: "Cream", token: "--pm-paper", hex: "#FAF6F1" },
  { name: "Sand", token: "--pm-paper-2", hex: "#F0E6DB" },
  { name: "Shell", token: "--pm-line", hex: "#E7DACB" },
  { name: "Ink", token: "--pm-ink", hex: "#22201E" },
];

const SEMANTIC_ROLES: { role: string; token: string }[] = [
  { role: "Background", token: "--pm-bg" },
  { role: "Background alt", token: "--pm-bg-alt" },
  { role: "Surface", token: "--pm-surface" },
  { role: "Ink strong", token: "--pm-ink-strong" },
  { role: "Ink body", token: "--pm-ink-body" },
  { role: "Ink muted", token: "--pm-ink-muted" },
  { role: "Primary", token: "--pm-primary" },
  { role: "Primary deep", token: "--pm-primary-deep" },
  { role: "Accent", token: "--pm-accent" },
  { role: "Hairline", token: "--pm-hairline" },
];

const TYPE_SCALE: { label: string; cls: string; sample: string }[] = [
  { label: "Display / Hero (step 7)", cls: "pm-sg-t7", sample: "The one you'll make your nikkah with." },
  { label: "H1 (step 6)", cls: "pm-sg-t6", sample: "Halal, from salaam to nikkah" },
  { label: "H2 (step 5)", cls: "pm-sg-t5", sample: "A considered journey" },
  { label: "H3 (step 3)", cls: "pm-sg-t3", sample: "Matchmaking, the way it was always done" },
  { label: "Lead (step 1)", cls: "pm-sg-t1", sample: "You'll speak to a person, not a profile." },
  { label: "Body (step 0)", cls: "pm-sg-t0", sample: "One match at a time. Never a queue. Discretion is the premium feature — the Mini Profile keeps your details private until there is mutual consent." },
];

const HEART_SVG = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 20.5C12 20.5 3.5 15.2 3.5 9.2C3.5 6.5 5.6 4.5 8.2 4.5C9.9 4.5 11.3 5.4 12 6.7C12.7 5.4 14.1 4.5 15.8 4.5C18.4 4.5 20.5 6.5 20.5 9.2C20.5 15.2 12 20.5 12 20.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const UPLOAD_SVG = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 15V4M12 4L8 8M12 4L16 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 15V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

function TypeSpecimen({ variant, title }: { variant: "bricolage" | "clash"; title: string }) {
  return (
    <div className={`pm-sg-type pm-sg-type--${variant}`}>
      <div className="pm-sg-type__tag">{title}</div>
      {TYPE_SCALE.map((t) => (
        <div className="pm-sg-type__row" key={t.label}>
          <span className="pm-sg-type__meta">{t.label}</span>
          <p className={t.cls}>{t.sample}</p>
        </div>
      ))}
    </div>
  );
}

export function StyleGuideScreen() {
  return (
    <main className="pm-sg">
      <header className="pm-sg__masthead pm-container">
        <p className="pm-eyebrow">Pure Match Halal · Design System</p>
        <h1 className="pm-sg__title">Style Guide</h1>
        <p className="pm-lead pm-prose">
          The visual system for sign-off — colour, type in both candidate pairings,
          spacing &amp; motion tokens, and every core component in all states.
          Approve the <em>system</em> here; pages build from it.
        </p>
      </header>

      {/* COLOUR */}
      <section className="pm-sg__section pm-container">
        <div className="pm-sg__head">
          <span className="pm-sg__num">01</span>
          <h2 className="pm-h3">Colour</h2>
        </div>
        <h3 className="pm-sg__sub">Primitive ramps</h3>
        <div className="pm-sg-swatches">
          {COLOUR_PRIMITIVES.map((c) => (
            <figure className="pm-sg-swatch" key={c.token}>
              <span className="pm-sg-swatch__chip" style={{ background: `var(${c.token})` }} />
              <figcaption>
                <strong>{c.name}</strong>
                <code>{c.hex}</code>
              </figcaption>
            </figure>
          ))}
        </div>
        <h3 className="pm-sg__sub">Semantic roles</h3>
        <div className="pm-sg-roles">
          {SEMANTIC_ROLES.map((r) => (
            <div className="pm-sg-role" key={r.token}>
              <span className="pm-sg-role__chip" style={{ background: `var(${r.token})` }} />
              <span className="pm-sg-role__name">{r.role}</span>
              <code>{r.token}</code>
            </div>
          ))}
        </div>
      </section>

      {/* TYPE */}
      <section className="pm-sg__section pm-container">
        <div className="pm-sg__head">
          <span className="pm-sg__num">02</span>
          <h2 className="pm-h3">Typography — pick a pairing</h2>
        </div>
        <p className="pm-muted pm-prose" style={{ marginBottom: "2rem" }}>
          Same content, two systems. <strong>A</strong> is the recommended default
          (warmth against terracotta); <strong>B</strong> is the fashion-editorial
          alternative. Body face is used for eyebrow labels and UI.
        </p>
        <div className="pm-sg-type-grid">
          <TypeSpecimen variant="bricolage" title="A · Bricolage Grotesque + Instrument Sans" />
          <TypeSpecimen variant="clash" title="B · Clash Display + General Sans" />
        </div>
      </section>

      {/* TOKENS */}
      <section className="pm-sg__section pm-container">
        <div className="pm-sg__head">
          <span className="pm-sg__num">03</span>
          <h2 className="pm-h3">Spacing · Radius · Motion</h2>
        </div>
        <div className="pm-sg-tokrow">
          <div>
            <h3 className="pm-sg__sub">Spacing scale</h3>
            <div className="pm-sg-spacing">
              {["1rem", "1.5rem", "2rem", "3rem", "4rem", "6rem"].map((s, i) => (
                <div className="pm-sg-spacing__item" key={s}>
                  <span className="pm-sg-spacing__bar" style={{ width: s }} />
                  <code>space-{i + 4} · {s}</code>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="pm-sg__sub">Radius</h3>
            <div className="pm-sg-radii">
              {[
                ["sm", "6px"],
                ["base", "12px"],
                ["lg", "22px"],
                ["pill", "999px"],
              ].map(([n, v]) => (
                <div className="pm-sg-radius" key={n}>
                  <span className="pm-sg-radius__box" style={{ borderRadius: v }} />
                  <code>{n}</code>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="pm-sg__sub">Motion</h3>
            <ul className="pm-sg-motion">
              <li><code>ease</code> — cubic-bezier(.22,1,.36,1)</li>
              <li><code>dur-fast</code> — 0.28s</li>
              <li><code>dur</code> — 0.6s</li>
              <li><code>dur-slow</code> — 0.9s</li>
              <li className="pm-muted">All collapse to instant fades under prefers-reduced-motion.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="pm-sg__section pm-container">
        <div className="pm-sg__head">
          <span className="pm-sg__num">04</span>
          <h2 className="pm-h3">Components — all states</h2>
        </div>

        <h3 className="pm-sg__sub">Buttons</h3>
        <div className="pm-sg-row">
          <button className="pm-btn">{HEART_SVG}Begin Application</button>
          <button className="pm-btn pm-btn--ghost">Learn more</button>
          <button className="pm-btn pm-btn--dark">Join the waitlist</button>
          <button className="pm-btn pm-btn--link">Read her letter</button>
          <button className="pm-btn" disabled>Disabled</button>
          <button className="pm-btn pm-btn--sm">Small</button>
          <button className="pm-btn pm-btn--lg">Large</button>
        </div>

        <h3 className="pm-sg__sub">Inputs</h3>
        <div className="pm-sg-forms">
          <div className="pm-field">
            <label className="pm-label" htmlFor="sg-name">Full name</label>
            <input className="pm-input" id="sg-name" placeholder="Aisha Bello" />
          </div>
          <div className="pm-field">
            <label className="pm-label" htmlFor="sg-focus">Focused</label>
            <input className="pm-input" id="sg-focus" defaultValue="focused@example.com" />
          </div>
          <div className="pm-field">
            <label className="pm-label" htmlFor="sg-err">Error</label>
            <input className="pm-input" id="sg-err" aria-invalid="true" defaultValue="not-an-email" />
            <span className="pm-field__error">Please enter a valid email.</span>
          </div>
          <div className="pm-field">
            <label className="pm-label" htmlFor="sg-dis">Disabled</label>
            <input className="pm-input" id="sg-dis" disabled defaultValue="Locked" />
          </div>
          <div className="pm-field">
            <label className="pm-label" htmlFor="sg-sel">Select</label>
            <select className="pm-select" id="sg-sel" defaultValue="">
              <option value="" disabled>Choose one…</option>
              <option>Diaspora</option>
              <option>Nigeria</option>
            </select>
          </div>
          <div className="pm-field">
            <label className="pm-label" htmlFor="sg-ta">Message</label>
            <textarea className="pm-textarea" id="sg-ta" placeholder="Tell us a little about your intention…" />
          </div>
        </div>

        <h3 className="pm-sg__sub">File drop &amp; checkbox</h3>
        <div className="pm-sg-forms">
          <div className="pm-filedrop">
            {UPLOAD_SVG}
            <span><strong>Upload a photo</strong> or drag it here</span>
            <span className="pm-field__hint">JPG or PNG · max 5MB</span>
          </div>
          <label className="pm-check">
            <input type="checkbox" defaultChecked />
            <span>I have read and agree to the Terms &amp; the halal matchmaking process.</span>
          </label>
        </div>

        <h3 className="pm-sg__sub">Badges</h3>
        <div className="pm-sg-row">
          <span className="pm-badge">Wali-friendly</span>
          <span className="pm-badge pm-badge--accent">ID verified</span>
          <span className="pm-badge pm-badge--outline">Waitlist · Open</span>
        </div>

        <h3 className="pm-sg__sub">Card</h3>
        <div className="pm-sg-row">
          <article className="pm-card">
            <span className="pm-card__num">01</span>
            <h4 className="pm-h4">Mini Profile privacy</h4>
            <p>Your details stay private until there is mutual consent. Discretion is the premium feature.</p>
          </article>
          <article className="pm-card pm-card--sand">
            <span className="pm-card__num">02</span>
            <h4 className="pm-h4">ID verified, never photographed</h4>
            <p>We confirm who you are without putting your face on a grid.</p>
          </article>
        </div>

        <h3 className="pm-sg__sub">Nav bar</h3>
        <nav className="pm-sg-nav">
          <span className="pm-sg-nav__brand">Pure Match Halal</span>
          <span className="pm-sg-nav__links">
            <a href="#">Home</a><a href="#">About</a><a href="#">Services</a><a href="#">Events</a>
          </span>
          <button className="pm-btn pm-btn--sm">Register</button>
        </nav>

        <h3 className="pm-sg__sub">Accordion</h3>
        <div className="pm-accordion">
          <details className="pm-accordion__item" open>
            <summary className="pm-accordion__q">
              <span className="pm-accordion__num">01</span>
              Is this a dating app?
              <span className="pm-accordion__icon" aria-hidden="true" />
            </summary>
            <div className="pm-accordion__a">
              <p>No. Pure Match is a human, one-to-one matchmaking practice. You speak to a person, not a profile — and every introduction is made with your marriage intention at the centre.</p>
            </div>
          </details>
          <details className="pm-accordion__item">
            <summary className="pm-accordion__q">
              <span className="pm-accordion__num">02</span>
              Is the process wali-friendly?
              <span className="pm-accordion__icon" aria-hidden="true" />
            </summary>
            <div className="pm-accordion__a">
              <p>Yes — the process is built around a halal, wali-inclusive approach from the very first conversation.</p>
            </div>
          </details>
        </div>
      </section>

      {/* ASSEMBLED HERO */}
      <section className="pm-sg__section pm-container">
        <div className="pm-sg__head">
          <span className="pm-sg__num">05</span>
          <h2 className="pm-h3">Assembled — Hero</h2>
        </div>
        <div className="pm-sg-hero">
          <div className="pm-sg-hero__inner">
            <p className="pm-eyebrow">Halal Matchmaking · Lagos &amp; Worldwide</p>
            <h2 className="pm-sg-hero__title">The one you'll make your nikkah with.</h2>
            <p className="pm-sg-hero__dek">
              A boutique faith-centred practice. Human, one-to-one, wali-friendly —
              from salaam to nikkah. One match at a time. Never a queue.
            </p>
            <div className="pm-sg-row">
              <button className="pm-btn pm-btn--lg">{HEART_SVG}Begin Your Application</button>
              <button className="pm-btn pm-btn--link">How it works</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
