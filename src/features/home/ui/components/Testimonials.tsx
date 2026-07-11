"use client";

import { Fragment, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mobileReveal } from "@shared/lib/scrollReveal";
import { TESTIMONIALS, SOCIAL } from "../../domain/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Daylight S6 — a giant heading whose characters flip in/out on the Y axis in
// 3D (perspective + transform-origin 100% 50%), with the story cards layered
// below it. It flips IN as the section arrives. Gated lg + motion-safe; static
// heading + cards below. Heading + cards are sized to fit one 100vh stack card.
const HEAD = SOCIAL.head;

export function Testimonials() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Mobile: no char-flip — reveal the heading and cards in view.
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () =>
        mobileReveal(root.current, ".pm-testi__head, .pm-testi__sub, .pm-testi__card", { stagger: 0.12 })
      );

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".pm-testi__char",
          { rotateY: -92, z: -260, opacity: 0 },
          {
            rotateY: 0, z: 0, opacity: 1, ease: "none", stagger: 0.035,
            scrollTrigger: { trigger: root.current, start: "top 82%", end: "top 32%", scrub: 1 },
          }
        );
        gsap.fromTo(
          ".pm-testi__card",
          { opacity: 0, y: 70 },
          {
            opacity: 1, y: 0, ease: "none", stagger: 0.14,
            scrollTrigger: { trigger: root.current, start: "top 60%", end: "top 18%", scrub: 1 },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section className="pm-section pm-testi" ref={root}>
      <p className="pm-eyebrow pm-testi__kicker">{SOCIAL.kicker}</p>
      {/* Per-word wrappers so the heading only ever breaks at spaces; each
          character still flips individually (GSAP targets .pm-testi__char). */}
      <h2 className="pm-testi__head" aria-label={SOCIAL.head}>
        {HEAD.split(" ").map((word, w, arr) => (
          <Fragment key={w}>
            <span className="pm-testi__word" aria-hidden="true">
              {[...word].map((ch, i) => (
                <span className="pm-testi__char" key={i}>
                  {ch}
                </span>
              ))}
            </span>
            {w < arr.length - 1 ? " " : null}
          </Fragment>
        ))}
      </h2>
      <p className="pm-testi__sub">{SOCIAL.sub}</p>

      <div className="pm-testi__cards">
        {TESTIMONIALS.map((t, i) => (
          <figure className={`pm-testi__card pm-testi__card--${i + 1}`} key={i}>
            <blockquote className="pm-testi__quote">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="pm-testi__cap">
              <span className="pm-testi__names">{t.names}</span>
              <span className="pm-testi__meta">{t.meta}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
