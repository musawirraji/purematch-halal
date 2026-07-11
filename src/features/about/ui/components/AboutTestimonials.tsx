import { Reveal } from "@shared/components/Reveal";
import { ABOUT } from "../../domain/content";

// Section 7 — the journeys we've walked alongside. Two quiet quote cards on a
// ruled masthead. Blocks reveal in view.
export function AboutTestimonials() {
  const t = ABOUT.testimonials;
  return (
    <section className="pm-section pm-atesti">
      <div className="pm-atesti__inner">
        <Reveal className="pm-atesti__head" as="div">
          <p className="pm-eyebrow pm-atesti__kicker">{t.kicker}</p>
          <h2 className="pm-atesti__heading">{t.heading}</h2>
        </Reveal>
        <div className="pm-atesti__cards">
          {t.items.map((it, i) => (
            <Reveal className="pm-atesti__card" as="figure" delay={i * 100} key={i}>
              <blockquote className="pm-atesti__quote">&ldquo;{it.quote}&rdquo;</blockquote>
              <figcaption className="pm-atesti__cap">
                <span className="pm-atesti__names">{it.names}</span>
                <span className="pm-atesti__meta">{it.meta}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
