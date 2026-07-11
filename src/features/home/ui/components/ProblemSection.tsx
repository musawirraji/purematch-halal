import { Reveal } from "@shared/components/Reveal";
import { PROBLEM } from "../../domain/content";

// Section 2 — "Why Pure Match Halal Exists". A quiet, editorial statement: a
// ruled label rail on the left, an oversized headline and measured prose on the
// right, closing on an accented line of tasbih. Blocks reveal in view.
export function ProblemSection() {
  return (
    <section className="pm-section pm-problem">
      <div className="pm-problem__inner">
        <Reveal className="pm-problem__aside" as="div">
          <p className="pm-eyebrow pm-problem__label">{PROBLEM.label}</p>
          <span className="pm-problem__rule" aria-hidden="true" />
        </Reveal>

        <div className="pm-problem__body">
          <Reveal>
            <h2 className="pm-problem__head">{PROBLEM.headline}</h2>
          </Reveal>
          {PROBLEM.body.map((p, i) => (
            <Reveal delay={120 + i * 80} key={i}>
              <p className={`pm-problem__p ${i === 0 ? "pm-problem__p--lede" : ""}`}>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={120 + PROBLEM.body.length * 80}>
            <p className="pm-problem__close">{PROBLEM.close}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
