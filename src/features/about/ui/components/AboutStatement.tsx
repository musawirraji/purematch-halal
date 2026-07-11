import { Reveal } from "@shared/components/Reveal";
import { ABOUT } from "../../domain/content";

// Section 1 — the hero statement that lands right after the showreel: a single,
// unhurried line of intent, then the subheading. The page's real <h1>.
export function AboutStatement() {
  const h = ABOUT.hero;
  return (
    <section className="pm-section pm-astate">
      <div className="pm-astate__inner">
        <Reveal>
          <h1 className="pm-astate__head">{h.headline}</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="pm-astate__sub">{h.sub}</p>
        </Reveal>
      </div>
    </section>
  );
}
