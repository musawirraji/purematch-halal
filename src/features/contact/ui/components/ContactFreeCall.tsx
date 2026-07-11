import { Reveal } from "@shared/components/Reveal";
import { SITE } from "@shared/constants/site";
import { CONTACT_PAGE } from "../../domain/content";

// Free-call reminder — reuses the shared free-call panel with a single WhatsApp
// CTA (number pending; links to wa.me until confirmed).
export function ContactFreeCall() {
  const d = CONTACT_PAGE.freecall;
  return (
    <section className="pm-section pm-freecall">
      <Reveal className="pm-freecall__panel" as="div">
        <span className="pm-freecall__frame" aria-hidden="true" />
        <p className="pm-eyebrow pm-freecall__kicker">{d.kicker}</p>
        <h2 className="pm-freecall__head">{d.heading}</h2>
        <p className="pm-freecall__body">{d.body}</p>
        <div className="pm-freecall__actions">
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="pm-btn pm-btn--pink">
            {d.cta}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
