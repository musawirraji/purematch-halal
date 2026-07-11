import { Reveal } from "@shared/components/Reveal";
import { MEMBERSHIP_PAGE } from "../../domain/content";

// §1 What This Is — reuses the shared editorial prose layout (pm-aprose).
export function MbrWhat() {
  const d = MEMBERSHIP_PAGE.what;
  return (
    <section className="pm-section pm-aprose">
      <div className="pm-aprose__inner">
        <div className="pm-aprose__head">
          <Reveal>
            <p className="pm-eyebrow pm-aprose__kicker">{d.kicker}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="pm-aprose__heading">{d.heading}</h2>
          </Reveal>
        </div>
        <div className="pm-aprose__body">
          {d.body.map((p, i) => (
            <Reveal delay={100 + i * 60} key={i}>
              <p className={`pm-aprose__p ${i === 0 ? "pm-aprose__p--lede" : ""}`}>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
