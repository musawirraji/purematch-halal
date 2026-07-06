import { SITE } from "@shared/constants/site";
import { IconMail, IconInstagram, IconWhatsapp } from "./icons";

// Quiet cream strip above the nav — collapses on scroll (handled by Header state).
export function AnnouncementBar() {
  return (
    <div className="pm-annbar">
      <div className="pm-annbar__inner">
        <a href={`mailto:${SITE.email}`} className="pm-annbar__link">
          <IconMail className="pm-annbar__icon" />
          <span>{SITE.email}</span>
        </a>
        <p className="pm-annbar__note">One match at a time · Never a queue</p>
        <span className="pm-annbar__socials">
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <IconInstagram className="pm-annbar__icon" />
          </a>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <IconWhatsapp className="pm-annbar__icon" />
          </a>
        </span>
      </div>
    </div>
  );
}
