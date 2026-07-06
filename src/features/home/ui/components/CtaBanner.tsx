import Link from "next/link";
import { Reveal } from "@shared/components/Reveal";
import { IconHeart, IconArrow } from "@shared/components/icons";
import { route } from "@shared/navigation/routes";
import { CTA_BANNER } from "../../domain/content";

// Final stacking card — a full-bleed dark "invitation" finale that bookends the
// hero (pink corner marks + a living pink glow) and flows into the dark footer.
// Centred composition fits within one viewport (the stacking card clips past
// 100svh). Blocks reveal in view.
export function CtaBanner() {
  return (
    <section className="pm-section pm-cta">
      <div className="pm-cta__bg" aria-hidden="true">
        <span className="pm-cta__glow pm-cta__glow--1" />
        <span className="pm-cta__glow pm-cta__glow--2" />
      </div>
      <span className="pm-cta__frame" aria-hidden="true">
        <i className="pm-cta__corner pm-cta__corner--tl" />
        <i className="pm-cta__corner pm-cta__corner--tr" />
        <i className="pm-cta__corner pm-cta__corner--bl" />
        <i className="pm-cta__corner pm-cta__corner--br" />
      </span>

      <div className="pm-cta__inner">
        <span className="pm-cta__index">{CTA_BANNER.index}</span>
        <Reveal>
          <p className="pm-eyebrow pm-cta__kicker">{CTA_BANNER.kicker}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="pm-cta__headline">{CTA_BANNER.headline}</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="pm-cta__body">{CTA_BANNER.body}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className="pm-cta__actions">
            <Link href={route("register")} className="pm-btn pm-btn--pink pm-btn--lg">
              <IconHeart className="pm-btn__i" /> {CTA_BANNER.cta}
            </Link>
            <a href="#journey" className="pm-cta__more">
              {CTA_BANNER.secondary} <IconArrow className="pm-cta__more-i" />
            </a>
          </div>
        </Reveal>
        <Reveal delay={320} as="ul" className="pm-cta__trust">
          {CTA_BANNER.trust.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
