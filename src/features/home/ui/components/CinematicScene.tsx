"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { route } from "@shared/navigation/routes";
import { IconArrow } from "@shared/components/icons";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ONE continuous pinned scene (Daylight S0 hero, extended):
//  1) the centre object rotates + zooms to face-on ("Considered, not swiped.")
//  2) the SAME object keeps zooming until it FILLS the screen (UI fades out)
//  3) at full-screen it switches to a different image + the love story resolves
// No new section / no restart — it's the same image element throughout.
// Scrubbed 1:1, gated lg + motion-safe; static fallback stacks the two panels.
const BEATS = [
  "They were introduced with such care that both families felt at ease from the very first conversation.",
  "No apps. No endless swiping — one considered introduction, made with intention.",
  "Six months later, they made their nikkah.",
];

function Girih({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <rect x="22" y="22" width="56" height="56" stroke="currentColor" strokeWidth="1.2" />
      <rect x="22" y="22" width="56" height="56" stroke="currentColor" strokeWidth="1.2" transform="rotate(45 50 50)" />
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function CinematicScene() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1 },
        });

        // 1) Considered reveal — object rotates to face-on, decor + UI in
        tl.fromTo(".pm-cine__object", { rotateY: -22, rotateX: 9, scale: 0.78, yPercent: 8 },
            { rotateY: 0, rotateX: 0, scale: 1, yPercent: 0, duration: 0.22 }, 0)
          .fromTo(".pm-cine__spot", { opacity: 0.35, scale: 1.3 }, { opacity: 1, scale: 1, duration: 0.22 }, 0)
          .fromTo(".pm-cine__tint", { opacity: 0 }, { opacity: 0.6, duration: 0.14 }, 0.1)
          .fromTo(".pm-cine__motif--1", { opacity: 0, scale: 0.6, rotate: -30 }, { opacity: 0.9, scale: 1, rotate: 0, duration: 0.1 }, 0.08)
          .fromTo(".pm-cine__motif--2", { opacity: 0, scale: 0.6, rotate: 30 }, { opacity: 0.8, scale: 1, rotate: 0, duration: 0.1 }, 0.13)
          .fromTo(".pm-cine__motif--3", { opacity: 0, scale: 0.6 }, { opacity: 0.7, scale: 1, duration: 0.1 }, 0.17)
          .fromTo(".pm-cine__copy", { opacity: 0, yPercent: 10 }, { opacity: 1, yPercent: 0, duration: 0.14 }, 0.03)
          .fromTo(".pm-cine__badge, .pm-cine__card", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.12 }, 0.08)

          // 2) the SAME object keeps zooming to fill the screen; UI + decor fade out
          .to(".pm-cine__copy, .pm-cine__badge, .pm-cine__card", { opacity: 0, duration: 0.1 }, 0.36)
          .to(".pm-cine__tint, .pm-cine__oframe, .pm-cine__motif--1, .pm-cine__motif--2, .pm-cine__motif--3", { opacity: 0, duration: 0.1 }, 0.4)
          .to(".pm-cine__object", { scale: 4.6, duration: 0.3, ease: "power1.in" }, 0.34)
          .to(".pm-cine__spot", { opacity: 0, duration: 0.15 }, 0.42)

          // 3) at full-screen → switch to the different image + love story
          .fromTo(".pm-cine__lovebg", { opacity: 0 }, { opacity: 1, duration: 0.06 }, 0.58)
          .to(".pm-cine__object", { opacity: 0, duration: 0.08 }, 0.6)
          .fromTo(".pm-cine__lovescrim", { opacity: 0 }, { opacity: 0.78, duration: 0.1 }, 0.62)
          .fromTo(".pm-cine__lk", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.1 }, 0.68)
          .fromTo(".pm-cine__ln", { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: 0.1 }, 0.72)
          .fromTo(".pm-cine__lb", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.1, stagger: 0.08 }, 0.77)
          .fromTo(".pm-cine__lm", { opacity: 0 }, { opacity: 1, duration: 0.08 }, 0.95);
      });
    },
    { scope: root }
  );

  return (
    <section className="pm-cine" ref={root}>
      <div className="pm-cine__stage">
        <span className="pm-cine__spot" aria-hidden="true" />

        {/* love-story layer (revealed after the zoom fills the screen) */}
        <div className="pm-cine__love">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="pm-cine__lovebg" src="/img/love-couple.jpg" alt="" />
          <span className="pm-cine__lovescrim" aria-hidden="true" />
          <div className="pm-cine__story">
            <p className="pm-eyebrow pm-cine__lk">A love story</p>
            <h2 className="pm-cine__ln">Aisha &amp; Ibrahim</h2>
            {BEATS.map((b, i) => (
              <p className="pm-cine__lb" key={i}>
                {b}
              </p>
            ))}
            <p className="pm-cine__lm">
              Matched March 2025 · Lagos <span>— names changed, shared with permission</span>
            </p>
          </div>
        </div>

        {/* the object that rotates, then zooms to full-screen */}
        <div className="pm-cine__scene">
          <div className="pm-cine__object">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="pm-cine__img" src="/img/cine-object.jpg" alt="A considered introduction" />
            <span className="pm-cine__tint" aria-hidden="true" />
            <span className="pm-cine__oframe" aria-hidden="true" />
            <Girih className="pm-cine__motif pm-cine__motif--1" />
            <Girih className="pm-cine__motif pm-cine__motif--2" />
            <Girih className="pm-cine__motif pm-cine__motif--3" />
          </div>
        </div>

        {/* "Considered" copy / badge / card (fade out as it zooms) */}
        <div className="pm-cine__copy">
          <p className="pm-eyebrow pm-cine__kicker">The practice</p>
          <h2 className="pm-cine__title">Considered, not swiped.</h2>
          <p className="pm-cine__sub">
            Not an algorithm — a person who learns your intention and introduces you, with
            discretion. One at a time.
          </p>
          <Link href={route("services")} className="pm-btn pm-btn--onink pm-cine__cta">
            See the journey <IconArrow className="pm-btn__i" />
          </Link>
        </div>

        <div className="pm-cine__badge" aria-hidden="true">
          <span className="pm-cine__badge-dot" /> In good company · human-vetted
        </div>

        <Link href={route("gallery")} className="pm-cine__card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/how-03-match.jpg" alt="" className="pm-cine__card-img" />
          <span className="pm-cine__card-label">Take a peek</span>
        </Link>
      </div>
    </section>
  );
}
