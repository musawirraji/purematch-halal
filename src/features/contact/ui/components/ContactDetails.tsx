import { Reveal } from "@shared/components/Reveal";
import { IconMail, IconWhatsapp, IconInstagram } from "@shared/components/icons";
import { SITE } from "@shared/constants/site";
import { CONTACT_PAGE } from "../../domain/content";

const ICON = { mail: IconMail, whatsapp: IconWhatsapp, instagram: IconInstagram };
const HREF: Record<string, string> = {
  mail: `mailto:${SITE.email}`,
  whatsapp: SITE.whatsapp,
  instagram: SITE.instagram,
};

// Contact details grid + the two primary CTAs.
export function ContactDetails() {
  const d = CONTACT_PAGE.details;
  return (
    <section className="pm-section pm-cdetails">
      <div className="pm-cdetails__inner">
        <Reveal className="pm-cdetails__head" as="div">
          <p className="pm-eyebrow pm-cdetails__kicker">{d.kicker}</p>
          <h2 className="pm-cdetails__heading">{d.heading}</h2>
        </Reveal>

        <ul className="pm-cdetails__list">
          {d.items.map((it, i) => {
            const Icon = ICON[it.icon];
            return (
              <Reveal as="li" className="pm-cdetails__item" delay={i * 70} key={it.label}>
                <a
                  href={HREF[it.icon]}
                  target={it.icon === "mail" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="pm-cdetails__link"
                >
                  <span className="pm-cdetails__icon"><Icon /></span>
                  <span className="pm-cdetails__label">{it.label}</span>
                  <span className="pm-cdetails__value">{it.value}</span>
                </a>
              </Reveal>
            );
          })}
        </ul>

        <div className="pm-cdetails__ctas">
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="pm-btn pm-btn--pink">
            WhatsApp Us Now
          </a>
          <a href={`mailto:${SITE.email}`} className="pm-btn pm-btn--ghost">
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}
