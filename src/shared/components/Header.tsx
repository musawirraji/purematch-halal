"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { Logo } from "./Logo";
import { MediaFrame } from "./MediaFrame";
import { IconInstagram, IconWhatsapp, IconMail, IconArrow } from "./icons";
import { navRoutes, route } from "@shared/navigation/routes";
import { SITE } from "@shared/constants/site";

// Sticky pill nav + Keeper-style immersive full-screen menu (image left, big
// links right). Hamburger opens it at all sizes.
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useLenis((lenis) => setScrolled(lenis.scroll > 24));

  // Close on route change + Escape
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className={`pm-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="pm-header__bar">
          <Logo />
          <div className="pm-header__actions">
            <Link href={route("register")} className="pm-btn pm-btn--sm pm-header__cta">
              Begin Your Application
            </Link>
            <button
              className={`pm-burger ${open ? "is-open" : ""}`}
              aria-expanded={open}
              aria-controls="pm-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="pm-burger__leaf">
                <span>Menu</span>
                <span>Close</span>
              </span>
              <span className="pm-burger__lines" aria-hidden="true"><i /><i /></span>
            </button>
          </div>
        </div>
      </header>

      {/* Immersive full-screen menu */}
      <div id="pm-menu" className={`pm-menu ${open ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open}>
        <div className="pm-menu__visual">
          <MediaFrame ratio="4 / 5" file="menu-atmosphere.jpg" tone="ink" className="pm-menu__media" />
          <div className="pm-menu__brand">
            <span className="pm-menu__wordmark">Pure Match Halal</span>
            <span className="pm-menu__tagline">Complete half your deen.</span>
          </div>
        </div>

        <div className="pm-menu__panel">
          <button className="pm-menu__close" onClick={() => setOpen(false)}>
            <span className="pm-menu__esc">Esc</span>
            <span className="pm-menu__x" aria-hidden="true" />
            <span className="pm-visually-hidden">Close menu</span>
          </button>

          <div className="pm-menu__cols">
            <nav className="pm-menu__col" aria-label="Menu primary">
              {navRoutes.map((r, i) => (
                <Link key={r.key} href={r.path} className="pm-menu__link" onClick={() => setOpen(false)} style={{ transitionDelay: `${open ? 120 + i * 40 : 0}ms` }}>
                  {r.label}
                </Link>
              ))}
            </nav>
            <nav className="pm-menu__col" aria-label="Menu secondary">
              <Link href={route("register")} className="pm-menu__link pm-menu__link--accent" onClick={() => setOpen(false)} style={{ transitionDelay: `${open ? 340 : 0}ms` }}>
                Begin Your Application
              </Link>
              <a href={`mailto:${SITE.email}`} className="pm-menu__contact" style={{ transitionDelay: `${open ? 380 : 0}ms` }}>
                <IconMail className="pm-menu__ci" /> {SITE.email}
              </a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="pm-menu__contact" style={{ transitionDelay: `${open ? 420 : 0}ms` }}>
                <IconWhatsapp className="pm-menu__ci" /> WhatsApp
              </a>
            </nav>
          </div>

          <div className="pm-menu__foot">
            <span className="pm-menu__hint">One match at a time · Never a queue</span>
            <div className="pm-menu__socials">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><IconInstagram /></a>
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><IconWhatsapp /></a>
              <Link href={route("register")} className="pm-menu__footcta" aria-label="Begin application" onClick={() => setOpen(false)}><IconArrow /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
