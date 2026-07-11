import { Reveal } from "@shared/components/Reveal";
import { REGISTER_PAGE } from "../../domain/content";

// "Before You Begin" — three numbered notes on a ruled grid.
export function RegisterBefore() {
  const d = REGISTER_PAGE.before;
  return (
    <section className="pm-section pm-regbefore">
      <div className="pm-regbefore__inner">
        <Reveal className="pm-regbefore__head" as="div">
          <p className="pm-eyebrow pm-regbefore__kicker">{d.kicker}</p>
          <h2 className="pm-regbefore__heading">{d.heading}</h2>
        </Reveal>
        <ul className="pm-regbefore__list">
          {d.items.map((it, i) => (
            <Reveal as="li" className="pm-regbefore__item" delay={i * 70} key={it.title}>
              <span className="pm-regbefore__n">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="pm-regbefore__title">{it.title}</h3>
              <p className="pm-regbefore__body">{it.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
