import Link from "next/link";
import { Reveal } from "@shared/components/Reveal";
import { MediaFrame } from "@shared/components/MediaFrame";
import { IconArrow } from "@shared/components/icons";
import { route } from "@shared/navigation/routes";
import { ABOUT_INTRO } from "../../domain/content";

export function AboutIntro() {
  return (
    <section className="pm-section pm-aboutintro">
      <div className="pm-container pm-aboutintro__grid">
        <Reveal className="pm-aboutintro__media">
          <MediaFrame ratio="4 / 5" file={ABOUT_INTRO.file} label={ABOUT_INTRO.label} tone="sand" />
        </Reveal>

        <div className="pm-aboutintro__body">
          <Reveal>
            <p className="pm-eyebrow">{ABOUT_INTRO.kicker}</p>
          </Reveal>
          <Reveal delay={80}>
            <blockquote className="pm-aboutintro__quote">{ABOUT_INTRO.quote}</blockquote>
          </Reveal>
          {ABOUT_INTRO.body.map((p, i) => (
            <Reveal delay={140 + i * 60} key={i}>
              <p className="pm-aboutintro__p">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={260}>
            <Link href={route("about")} className="pm-btn pm-btn--link pm-aboutintro__cta">
              {ABOUT_INTRO.cta} <IconArrow className="pm-btn__i" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
