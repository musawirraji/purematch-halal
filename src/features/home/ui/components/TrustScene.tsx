"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconShield, IconCheck, IconConsent, IconRings } from "@shared/components/icons";
import { mobileReveal } from "@shared/lib/scrollReveal";
import { TRUST } from "../../domain/content";
import type { TrustFeature } from "../../domain/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// "Built for your deen & your dignity" rebuilt as Daylight's amber-glow → goodbye-
// blue-light cinematic (adapted to b/w + pink): intro reveals over a pink wash →
// bg transitions to ink → a girih pattern draws in + hands hold a glowing card →
// the card slides left and the safeguards resolve on the right. Scrubbed, gated
// lg + motion-safe; static stacked fallback below.

const ICON: Record<TrustFeature["icon"], React.ComponentType<{ className?: string }>> = {
  shield: IconShield,
  check: IconCheck,
  consent: IconConsent,
  rings: IconRings,
};

function Girih({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1" />
      <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="1" transform="rotate(45 50 50)" />
      <circle cx="50" cy="50" r="37" stroke="currentColor" strokeWidth="1" />
      <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function TrustScene() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Mobile: stacked + static bg — reveal the intro and each safeguard in view.
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () =>
        mobileReveal(
          root.current,
          ".pm-tx__intro, .pm-tx__fkicker, .pm-tx__fhead, .pm-tx__fdesc, .pm-tx__feature",
          { stagger: 0.08 }
        )
      );

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1 },
        });
        // 1) intro reveals over the pink wash
        tl.fromTo(".pm-tx__line--1", { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.1 }, 0.02)
          .fromTo(".pm-tx__line--2", { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.1 }, 0.09)
          // 2) background transitions pink → ink
          .to(".pm-tx__intro", { opacity: 0, y: -20, duration: 0.08 }, 0.24)
          .to(".pm-tx__pink", { opacity: 0, duration: 0.12 }, 0.22)
          .fromTo(".pm-tx__ink", { opacity: 0 }, { opacity: 1, duration: 0.12 }, 0.22)
          // 3) hands/card fade in + girih draws in, line sits on the card
          .fromTo(".pm-tx__object", { opacity: 0, scale: 0.92, y: 24 }, { opacity: 1, scale: 1, y: 0, duration: 0.12 }, 0.3)
          .fromTo(".pm-tx__girih", { opacity: 0, scale: 0.55, rotate: -25 }, { opacity: 0.9, scale: 1, rotate: 0, duration: 0.12 }, 0.36)
          .fromTo(".pm-tx__cardline", { opacity: 0 }, { opacity: 1, duration: 0.07 }, 0.4)
          // 4) card slides left; safeguards resolve on the right
          .to(".pm-tx__object", { xPercent: -60, duration: 0.22 }, 0.48)
          .to(".pm-tx__cardline, .pm-tx__girih", { opacity: 0, duration: 0.08 }, 0.5)
          .fromTo(".pm-tx__fhead", { opacity: 0, x: 44 }, { opacity: 1, x: 0, duration: 0.1 }, 0.56)
          .fromTo(".pm-tx__fdesc", { opacity: 0, x: 44 }, { opacity: 1, x: 0, duration: 0.1 }, 0.6)
          .fromTo(".pm-tx__feature", { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 0.1, stagger: 0.06 }, 0.66);
      });
    },
    { scope: root }
  );

  return (
    <section className="pm-tx" ref={root} aria-label="Built for your deen and your dignity">
      <div className="pm-tx__stage">
        <span className="pm-tx__pink" aria-hidden="true" />
        <span className="pm-tx__ink" aria-hidden="true" />

        {/* Beat 1 — intro statement */}
        <div className="pm-tx__intro">
          <p className="pm-tx__line pm-tx__line--1">When it&rsquo;s this personal,</p>
          <p className="pm-tx__line pm-tx__line--2">discretion is everything.</p>
        </div>

        {/* Beat 3 — hands holding the glowing card */}
        <div className="pm-tx__object">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="pm-tx__cardimg" src="/img/held-card.jpg" alt="" />
          <span className="pm-tx__glow" aria-hidden="true" />
          <Girih className="pm-tx__girih" />
          <span className="pm-tx__cardline">discretion is everything.</span>
        </div>

        {/* Beat 4 — safeguards on the right */}
        <div className="pm-tx__features">
          <p className="pm-eyebrow pm-tx__fkicker">Built for your deen &amp; your dignity</p>
          <h2 className="pm-tx__fhead">Guarded, from the first salaam.</h2>
          <p className="pm-tx__fdesc">
            Privacy isn&rsquo;t a setting we bolt on — it&rsquo;s the practice. Here&rsquo;s how we
            guard yours.
          </p>
          <ul className="pm-tx__flist">
            {TRUST.map((f) => {
              const Icon = ICON[f.icon];
              return (
                <li className="pm-tx__feature" key={f.title}>
                  <span className="pm-tx__ficon">
                    <Icon />
                  </span>
                  <h3 className="pm-tx__ftitle">{f.title}</h3>
                  <p className="pm-tx__fbody">{f.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
