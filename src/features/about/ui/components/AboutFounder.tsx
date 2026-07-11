import { Reveal } from "@shared/components/Reveal";
import { MediaFrame } from "@shared/components/MediaFrame";
import { ABOUT } from "../../domain/content";

// Section 4 — Meet the Founder. Editorial two-column: a sticky portrait on the
// left, a short letter (drop-cap lede + signature) on the right.
export function AboutFounder() {
  const f = ABOUT.founder;
  return (
    <section className="pm-section pm-astory">
      <div className="pm-astory__inner">
        <Reveal className="pm-astory__portrait" as="figure">
          <div className="pm-astory__frame">
            <MediaFrame file={f.file} label={f.label} tone="sand" fill />
          </div>
          <figcaption className="pm-astory__cap">
            <span className="pm-astory__capname">{f.signature}</span>
            <span className="pm-astory__caprole">{f.role}</span>
          </figcaption>
        </Reveal>

        <div className="pm-astory__text">
          <Reveal>
            <p className="pm-eyebrow pm-astory__kicker">{f.kicker}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="pm-astory__heading">{f.heading}</h2>
          </Reveal>
          {f.body.map((p, i) => (
            <Reveal delay={120 + i * 70} key={i}>
              <p className={`pm-astory__p ${i === 0 ? "pm-astory__p--lede" : ""}`}>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={120 + f.body.length * 70}>
            <p className="pm-astory__sign">— {f.signature}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
