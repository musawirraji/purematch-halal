import { Reveal } from "@shared/components/Reveal";
import { ABOUT } from "../../domain/content";

// Section 6 — the amanah. A quiet, full-bleed dark section: privacy is treated
// with the gravity of a trust, so it gets its own ink chapter.
export function AboutPrivacy() {
  const p = ABOUT.privacy;
  return (
    <section className="pm-section pm-aprivacy">
      <div className="pm-aprivacy__inner">
        <Reveal>
          <p className="pm-eyebrow pm-aprivacy__kicker">{p.kicker}</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="pm-aprivacy__head">{p.heading}</h2>
        </Reveal>
        <div className="pm-aprivacy__body">
          {p.body.map((t, i) => (
            <Reveal delay={120 + i * 70} key={i}>
              <p className={`pm-aprivacy__p ${i === p.body.length - 1 ? "pm-aprivacy__p--close" : ""}`}>{t}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
