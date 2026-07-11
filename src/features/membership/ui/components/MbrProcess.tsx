import { Reveal } from "@shared/components/Reveal";
import { MEMBERSHIP_PAGE } from "../../domain/content";

// §2 The Full Process — the seven steps, reusing the sticky-heading numbered
// list layout (pm-believe).
export function MbrProcess() {
  const d = MEMBERSHIP_PAGE.process;
  return (
    <section className="pm-section pm-believe">
      <div className="pm-believe__inner">
        <div className="pm-believe__head">
          <Reveal>
            <p className="pm-eyebrow pm-believe__kicker">{d.kicker}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="pm-believe__heading">{d.heading}</h2>
          </Reveal>
        </div>
        <ul className="pm-believe__list">
          {d.steps.map((s, i) => (
            <Reveal as="li" className="pm-believe__item" key={s.n} delay={i * 50}>
              <span className="pm-believe__n">{s.n}</span>
              <h3 className="pm-believe__title">{s.title}</h3>
              <p className="pm-believe__body">{s.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
