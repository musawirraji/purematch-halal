"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MediaFrame } from "@shared/components/MediaFrame";
import { IconArrowDown } from "@shared/components/icons";
import { ABOUT } from "../../domain/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// About hero — adapted from Exo Ape's "showreel" section. A full-bleed dark
// stage with an oversized LINE-MASK title (each line sits in an overflow:hidden
// mask and slides up from below on load) and a wide media plate that expands
// (clip-path) as it scrolls in. Lenis owns the smooth scroll. Reduced-motion →
// everything static.
export function AboutShowreel() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // hide the masked lines up front (before paint → no flash)
        gsap.set(".pm-reel__line", { yPercent: 116 });

        // title reveals on load (it's the top of the page)
        const tl = gsap.timeline({ delay: 0.2 });
        tl.to(".pm-reel__line", { yPercent: 0, duration: 1.1, ease: "power4.out", stagger: 0.14 })
          .from(".pm-reel__label", { opacity: 0, y: 20, duration: 0.7, ease: "power3.out" }, 0.15)
          .from(".pm-reel__body", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.55");

        // media plate expands as you scroll into it
        gsap.fromTo(
          ".pm-reel__media",
          { clipPath: "inset(9% 7% 9% 7%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: { trigger: ".pm-reel__media", start: "top 88%", end: "top 32%", scrub: 1 },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section className="pm-reel" ref={root} aria-label="About Pure Match Halal">
      <div className="pm-reel__head">
        <p className="pm-eyebrow pm-reel__label">{ABOUT.reel.label}</p>
        <h1 className="pm-reel__title" aria-label={ABOUT.reel.lines.join(" ")}>
          {ABOUT.reel.lines.map((line) => (
            <span className="pm-reel__mask" key={line} aria-hidden="true">
              <span className="pm-reel__line">{line}</span>
            </span>
          ))}
        </h1>
        <p className="pm-reel__body">{ABOUT.reel.body}</p>
      </div>

      <div className="pm-reel__media">
        <MediaFrame file={ABOUT.reel.media} alt={ABOUT.reel.mediaAlt} tone="ink" fill kenBurns />
      </div>

      <div className="pm-reel__scroll" aria-hidden="true">
        <IconArrowDown className="pm-reel__scroll-i" />
        <span>{ABOUT.reel.scrollHint}</span>
      </div>
    </section>
  );
}
