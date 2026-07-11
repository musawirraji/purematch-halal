import { Fragment } from "react";
import Link from "next/link";
import { MediaFrame } from "@shared/components/MediaFrame";
import { IconArrowDown } from "@shared/components/icons";
import { route } from "@shared/navigation/routes";
import { HERO } from "../../domain/content";

// Full-bleed editorial hero (Keeper structure): thin frame to the viewport
// edges, a huge headline split around a centred portrait plate. The headline
// TYPES in character-by-character — left block first, then the right.
const LINE_A = HERO.titleA;
const LINE_B = HERO.titleB;
const STEP = 46; // ms per character
const GAP = 6; // characters of pause between the two blocks

// Per-word so text still wraps; per-char inside so it types in. `step` = ms per
// char, `base` = start delay (used to type the dek in after the headline).
function Typed({ text, offset = 0, step = STEP, base = 0 }: { text: string; offset?: number; step?: number; base?: number }) {
  const words = text.split(" ");
  let idx = offset;
  return (
    <>
      {words.map((word, w) => {
        const chars = [...word].map((ch, i) => (
          <span className="pm-hero__char" key={i} style={{ animationDelay: `${base + idx++ * step}ms` }}>
            {ch}
          </span>
        ));
        idx += 1; // count the space in the typing cadence
        return (
          <Fragment key={w}>
            <span className="pm-hero__word">{chars}</span>
            {w < words.length - 1 ? " " : null}
          </Fragment>
        );
      })}
    </>
  );
}

export function Hero() {
  return (
    <section className="pm-hero">
      <span className="pm-hero__frame" aria-hidden="true">
        <i className="pm-hero__corner pm-hero__corner--tl" />
        <i className="pm-hero__corner pm-hero__corner--tr" />
        <i className="pm-hero__corner pm-hero__corner--bl" />
        <i className="pm-hero__corner pm-hero__corner--br" />
      </span>

      <div className="pm-hero__top">
        <p className="pm-eyebrow pm-hero__kicker">
          Halal Matchmaking <span className="pm-hero__kicker-loc">· Lagos &amp; Worldwide</span>
        </p>
        <p className="pm-hero__meta">Est. 2019 — One at a time</p>
      </div>

      <div className="pm-hero__stage">
        <h1 className="pm-hero__title" aria-label={`${LINE_A} ${LINE_B} ${HERO.subline}`}>
          <span className="pm-hero__line pm-hero__line--a" aria-hidden="true">
            <Typed text={LINE_A} offset={0} />
          </span>
          <span className="pm-hero__portrait" aria-hidden="true">
            <MediaFrame ratio="3 / 4" file={HERO.file} label={HERO.label} plate="01" tone="ink" kenBurns />
          </span>
          <span className="pm-hero__line pm-hero__line--b" aria-hidden="true">
            <Typed text={LINE_B} offset={LINE_A.length + GAP} />
          </span>
        </h1>
        <p className="pm-hero__subline" aria-hidden="true">
          {HERO.subline}
        </p>
      </div>

      <div className="pm-hero__foot">
        <p className="pm-hero__dek" aria-label={HERO.dek}>
          <Typed text={HERO.dek} step={12} base={1400} />
        </p>
        <div className="pm-hero__side">
          <div className="pm-hero__ctas">
            <Link href={route("register")} className="pm-btn">
              {HERO.primaryCta}
            </Link>
            <Link href={route("membership")} className="pm-btn pm-btn--link">
              {HERO.secondaryCta}
            </Link>
          </div>
          <ul className="pm-hero__trust">
            {HERO.trust.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pm-hero__scroll" aria-hidden="true">
        <IconArrowDown className="pm-hero__scroll-icon" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
