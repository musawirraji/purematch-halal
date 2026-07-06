import Link from "next/link";
import { SITE } from "@shared/constants/site";
import { navRoutes, route } from "@shared/navigation/routes";
import { IconMail, IconInstagram, IconWhatsapp, IconArrow } from "./icons";

// Deep-ink footer with a LIVE background: a slow-drifting girih (Islamic
// geometric) pattern + breathing pink/ember glows (the Daylight living-footer
// feel). Full-bleed. Oversized wordmark, link columns, salaam sign-off.
export function Footer() {
  const year = 2026;

  return (
    <footer className="pm-footer">
      {/* live animated background — CSS pattern/glows are the fallback that show
          while the video loads or if it can't play; the looping video covers them */}
      <div className="pm-footer__bg" aria-hidden="true">
        <span className="pm-footer__glow pm-footer__glow--1" />
        <span className="pm-footer__glow pm-footer__glow--2" />
        <svg className="pm-footer__pattern" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pm-girih" width="94" height="94" patternUnits="userSpaceOnUse">
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <rect x="22" y="22" width="50" height="50" />
                <rect x="22" y="22" width="50" height="50" transform="rotate(45 47 47)" />
                <circle cx="47" cy="47" r="9" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pm-girih)" />
        </svg>
        <video
          className="pm-footer__video"
          src="/img/footer-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>

      <div className="pm-footer__inner">
        <div className="pm-footer__top">
          <div className="pm-footer__brandcol">
            <p className="pm-eyebrow pm-footer__kicker">Halal Matchmaking · Lagos &amp; Worldwide</p>
            <p className="pm-footer__wordmark">Pure Match Halal</p>
            <Link href={route("register")} className="pm-btn pm-footer__cta">
              Begin Your Application <IconArrow className="pm-btn__i" />
            </Link>
          </div>

          <nav className="pm-footer__links" aria-label="Footer">
            <p className="pm-footer__colhead">Explore</p>
            {navRoutes.map((r) => (
              <Link key={r.key} href={r.path} className="pm-footer__link">
                {r.label}
              </Link>
            ))}
            <Link href={route("policy")} className="pm-footer__link">
              Membership
            </Link>
          </nav>

          <div className="pm-footer__contact">
            <p className="pm-footer__colhead">Get in touch</p>
            <a href={`mailto:${SITE.email}`} className="pm-footer__link">
              <IconMail className="pm-footer__icon" /> {SITE.email}
            </a>
            <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="pm-footer__link">
              <IconWhatsapp className="pm-footer__icon" /> WhatsApp
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="pm-footer__link">
              <IconInstagram className="pm-footer__icon" /> Instagram
            </a>
            <div className="pm-footer__hours">
              {SITE.hours.map((h) => (
                <p key={h.day}>
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="pm-footer__salaam">
          Wishing you barakah on the path to your nikkah. السلام عليكم
        </p>

        <div className="pm-footer__fine">
          <p>© {year} Pure Match Halal. All rights reserved.</p>
          <p>Faith-centred, human matchmaking — from salaam to nikkah.</p>
        </div>
      </div>
    </footer>
  );
}
