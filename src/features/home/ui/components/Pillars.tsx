import { Reveal } from "@shared/components/Reveal";
import { PILLARS, PILLARS_INTRO } from "../../domain/content";

// Section 3 — "Personal. Private. Purposeful." Three numbered pillars on a
// hairline grid; each column lifts and its number turns pink on hover. Stacks to
// one column on mobile. Blocks reveal in view.
export function Pillars() {
  return (
    <section className="pm-section pm-pillars">
      <div className="pm-pillars__inner">
        <Reveal className="pm-pillars__head" as="div">
          <p className="pm-eyebrow pm-pillars__label">{PILLARS_INTRO.label}</p>
          <h2 className="pm-pillars__title">{PILLARS_INTRO.headline}</h2>
        </Reveal>

        <ul className="pm-pillars__grid">
          {PILLARS.map((p, i) => (
            <Reveal className="pm-pillars__item" as="li" delay={120 + i * 90} key={p.num}>
              <span className="pm-pillars__num" aria-hidden="true">
                {p.num}
              </span>
              <h3 className="pm-pillars__name">{p.title}</h3>
              <p className="pm-pillars__body">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
