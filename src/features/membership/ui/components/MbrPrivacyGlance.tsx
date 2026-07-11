import Link from "next/link";
import { Reveal } from "@shared/components/Reveal";
import { IconCheck, IconArrow } from "@shared/components/icons";
import { route } from "@shared/navigation/routes";
import { MEMBERSHIP_PAGE } from "../../domain/content";

// §7 Privacy At a Glance — a ticked checklist + link to the full FAQ privacy.
export function MbrPrivacyGlance() {
  const d = MEMBERSHIP_PAGE.privacy;
  return (
    <section className="pm-section pm-glance">
      <div className="pm-glance__inner">
        <Reveal className="pm-glance__head" as="div">
          <p className="pm-eyebrow pm-glance__kicker">{d.kicker}</p>
          <h2 className="pm-glance__heading">{d.heading}</h2>
        </Reveal>
        <ul className="pm-glance__list">
          {d.points.map((p, i) => (
            <Reveal as="li" className="pm-glance__item" delay={i * 50} key={i}>
              <IconCheck className="pm-glance__ci" />
              <span>{p}</span>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <Link href={route("faqs")} className="pm-btn pm-btn--link pm-glance__link">
            {d.link} <IconArrow className="pm-btn__i" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
