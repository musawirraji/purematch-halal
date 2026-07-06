import Link from "next/link";
import { Reveal } from "@shared/components/Reveal";
import { IconArrow } from "@shared/components/icons";
import { route } from "@shared/navigation/routes";
import { EVENT_TEASER } from "../../domain/content";

// Dark-ink editorial teaser — a taste of the Events chapter contrast.
export function EventTeaser() {
  return (
    <section className="pm-eventteaser" data-bg="#0E0E0F" data-ink="#FAFAF8">
      <div className="pm-container pm-eventteaser__inner">
        <Reveal>
          <p className="pm-eyebrow pm-eventteaser__kicker">{EVENT_TEASER.kicker}</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="pm-eventteaser__headline">{EVENT_TEASER.headline}</h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="pm-eventteaser__body">{EVENT_TEASER.body}</p>
        </Reveal>
        <Reveal delay={200}>
          <div className="pm-eventteaser__badges">
            <span className="pm-badge pm-badge--outline">No speed dating</span>
            <span className="pm-badge pm-badge--outline">Equal men &amp; women</span>
            <span className="pm-badge pm-badge--outline">Private location</span>
          </div>
        </Reveal>
        <Reveal delay={260}>
          <Link href={route("events")} className="pm-btn pm-eventteaser__cta">
            {EVENT_TEASER.cta} <IconArrow className="pm-btn__i" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
