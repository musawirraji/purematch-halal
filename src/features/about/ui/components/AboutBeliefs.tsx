import { Reveal } from "@shared/components/Reveal";
import { ABOUT } from "../../domain/content";

// "What we believe" — the practice's principles as a ruled, numbered editorial
// list beside a sticky heading. Blocks reveal in view.
export function AboutBeliefs() {
  const b = ABOUT.believe;
  return (
    <section className="pm-section pm-believe">
      <div className="pm-believe__inner">
        <div className="pm-believe__head">
          <Reveal>
            <p className="pm-eyebrow pm-believe__kicker">{b.kicker}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="pm-believe__heading">{b.heading}</h2>
          </Reveal>
        </div>

        <ul className="pm-believe__list">
          {b.items.map((it, i) => (
            <Reveal as="li" className="pm-believe__item" key={it.n} delay={i * 80}>
              <span className="pm-believe__n">{it.n}</span>
              <h3 className="pm-believe__title">{it.title}</h3>
              <p className="pm-believe__body">{it.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
