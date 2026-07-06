import { Reveal } from "@shared/components/Reveal";
import { MediaFrame } from "@shared/components/MediaFrame";
import { ABOUT } from "../../domain/content";

// The founder's letter — an editorial two-column spread: a sticky portrait on
// the left, the letter (drop-cap lede + signature) on the right. Blocks reveal
// in view. Full-bleed.
export function AboutStory() {
  const s = ABOUT.story;
  return (
    <section className="pm-section pm-astory">
      <div className="pm-astory__inner">
        <Reveal className="pm-astory__portrait" as="figure">
          <div className="pm-astory__frame">
            <MediaFrame file={s.file} label={s.label} tone="sand" fill />
          </div>
          <figcaption className="pm-astory__cap">
            <span className="pm-astory__capname">{s.signature}</span>
            <span className="pm-astory__caprole">{s.role}</span>
          </figcaption>
        </Reveal>

        <div className="pm-astory__text">
          <Reveal>
            <p className="pm-eyebrow pm-astory__kicker">{s.kicker}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="pm-astory__heading">{s.heading}</h2>
          </Reveal>
          {s.body.map((p, i) => (
            <Reveal delay={120 + i * 70} key={i}>
              <p className={`pm-astory__p ${i === 0 ? "pm-astory__p--lede" : ""}`}>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={120 + s.body.length * 70}>
            <p className="pm-astory__sign">— {s.signature}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
