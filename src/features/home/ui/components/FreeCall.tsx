import Link from "next/link";
import { Reveal } from "@shared/components/Reveal";
import { IconArrow } from "@shared/components/icons";
import { route } from "@shared/navigation/routes";
import { SITE } from "@shared/constants/site";
import { FREE_CALL } from "../../domain/content";

// Section 6 — the free-call banner. A calm, bordered invitation on the alt paper
// tone (deliberately lighter than the dark finale) so it reads as reassurance,
// not a hard sell. "Book a Free Call" routes to Contact (WhatsApp lives there,
// number pending); "Send Us a Message" opens email.
export function FreeCall() {
  return (
    <section className="pm-section pm-freecall">
      <Reveal className="pm-freecall__panel" as="div">
        <span className="pm-freecall__frame" aria-hidden="true" />
        <p className="pm-eyebrow pm-freecall__kicker">{FREE_CALL.kicker}</p>
        <h2 className="pm-freecall__head">{FREE_CALL.headline}</h2>
        <p className="pm-freecall__body">{FREE_CALL.body}</p>
        <div className="pm-freecall__actions">
          <Link href={route("contact")} className="pm-btn pm-btn--pink">
            {FREE_CALL.primaryCta}
          </Link>
          <a href={`mailto:${SITE.email}`} className="pm-btn pm-btn--link">
            {FREE_CALL.secondaryCta} <IconArrow className="pm-btn__i" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
