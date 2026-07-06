import Link from "next/link";
import { Reveal } from "@shared/components/Reveal";
import { MediaFrame } from "@shared/components/MediaFrame";
import { IconArrow } from "@shared/components/icons";
import { route } from "@shared/navigation/routes";
import { ABOUT_INTRO } from "../../domain/content";

// Editorial-grid "About": a ruled masthead, an oversized pull-quote, the founder
// portrait as a captioned plate, a lede column with a drop-cap + signature, and
// a numbered principles rail. Full-bleed; a 12-column grid places the pieces on
// desktop and collapses to a single stacked column on mobile. Blocks reveal in
// view (IO-based Reveal).
export function AboutIntro() {
  return (
    <section className="pm-section pm-about">
      <div className="pm-about__inner">
        <Reveal className="pm-about__top">
          <p className="pm-eyebrow pm-about__kicker">{ABOUT_INTRO.kicker}</p>
          <span className="pm-about__index">{ABOUT_INTRO.index}</span>
        </Reveal>

        <Reveal className="pm-about__lead" delay={60}>
          <h2 className="pm-about__quote">{ABOUT_INTRO.quote}</h2>
        </Reveal>

        <Reveal className="pm-about__portrait" as="figure" delay={120}>
          <MediaFrame ratio="4 / 5" file={ABOUT_INTRO.file} label={ABOUT_INTRO.label} tone="sand" />
          <figcaption className="pm-about__cap">
            <span className="pm-about__capname">{ABOUT_INTRO.signature}</span>
            <span className="pm-about__caprole">{ABOUT_INTRO.role}</span>
          </figcaption>
        </Reveal>

        <div className="pm-about__col">
          {ABOUT_INTRO.body.map((p, i) => (
            <Reveal delay={160 + i * 70} key={i}>
              <p className={`pm-about__p ${i === 0 ? "pm-about__p--lede" : ""}`}>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={160 + ABOUT_INTRO.body.length * 70}>
            <div className="pm-about__sign">
              <span className="pm-about__signmark">— {ABOUT_INTRO.signature}</span>
              <Link href={route("about")} className="pm-btn pm-btn--link pm-about__cta">
                {ABOUT_INTRO.cta} <IconArrow className="pm-btn__i" />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal className="pm-about__principles" as="ul" delay={220}>
          {ABOUT_INTRO.principles.map((p, i) => (
            <li className="pm-about__principle" key={p}>
              <span className="pm-about__pn">{String(i + 1).padStart(2, "0")}</span>
              <span className="pm-about__ptxt">{p}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
