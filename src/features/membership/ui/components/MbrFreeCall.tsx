import Link from "next/link";
import { Reveal } from "@shared/components/Reveal";
import { IconArrow } from "@shared/components/icons";
import { route } from "@shared/navigation/routes";
import { SITE } from "@shared/constants/site";
import { MEMBERSHIP_PAGE } from "../../domain/content";

// §5 Not Ready to Pay Yet — reuses the shared free-call panel (pm-freecall).
export function MbrFreeCall() {
  const d = MEMBERSHIP_PAGE.freecall;
  return (
    <section className="pm-section pm-freecall">
      <Reveal className="pm-freecall__panel" as="div">
        <span className="pm-freecall__frame" aria-hidden="true" />
        <p className="pm-eyebrow pm-freecall__kicker">{d.kicker}</p>
        <h2 className="pm-freecall__head">{d.heading}</h2>
        <p className="pm-freecall__body">{d.body}</p>
        <div className="pm-freecall__actions">
          <Link href={route("contact")} className="pm-btn pm-btn--pink">
            {d.primary}
          </Link>
          <a href={`mailto:${SITE.email}`} className="pm-btn pm-btn--link">
            {d.secondary} <IconArrow className="pm-btn__i" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
