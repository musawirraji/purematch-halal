import { Reveal } from "@shared/components/Reveal";
import { MEMBERSHIP_PAGE } from "../../domain/content";

// §6 Our Standards — two columns: from our members / from us.
export function MbrStandards() {
  const d = MEMBERSHIP_PAGE.standards;
  return (
    <section className="pm-section pm-standards">
      <div className="pm-standards__inner">
        <Reveal className="pm-standards__head" as="div">
          <p className="pm-eyebrow pm-standards__kicker">{d.kicker}</p>
          <h2 className="pm-standards__heading">{d.heading}</h2>
        </Reveal>
        <div className="pm-standards__grid">
          {d.groups.map((g, i) => (
            <Reveal className="pm-standards__col" as="div" delay={i * 80} key={g.title}>
              <h3 className="pm-standards__title">{g.title}</h3>
              {g.body.map((p, j) => (
                <p className="pm-standards__p" key={j}>{p}</p>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
