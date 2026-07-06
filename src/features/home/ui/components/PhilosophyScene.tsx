"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Daylight-style pinned scene (Home section 2). A tall runway holds a sticky
// stage; as you scroll, a pink wash rises (their cream→amber) and the conviction
// statement resolves from line A → line B — scrubbed 1:1 to scroll. Gated behind
// lg + motion-safe via gsap.matchMedia(); below that it's a static statement.
// Works under Lenis because SmoothScroll bridges lenis → ScrollTrigger.
export function PhilosophyScene() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
        tl.fromTo(".pm-phil__wash", { opacity: 0 }, { opacity: 0.6, duration: 1 }, 0)
          .fromTo(".pm-phil__line--a", { opacity: 0, yPercent: 16 }, { opacity: 1, yPercent: 0, duration: 0.42 }, 0)
          .to(".pm-phil__line--a", { opacity: 0, yPercent: -12, duration: 0.34 }, 0.5)
          .fromTo(".pm-phil__line--b", { opacity: 0, yPercent: 16 }, { opacity: 1, yPercent: 0, duration: 0.42 }, 0.56)
          .fromTo(".pm-phil__eyebrow", { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.02);
      });
    },
    { scope: root }
  );

  return (
    <section className="pm-phil" ref={root}>
      <div className="pm-phil__stage">
        <span className="pm-phil__wash" aria-hidden="true" />
        <p className="pm-eyebrow pm-phil__eyebrow">Our philosophy</p>
        <h2 className="pm-phil__line pm-phil__line--a">
          You&rsquo;ll speak to a person, not a profile.
        </h2>
        <h2 className="pm-phil__line pm-phil__line--b">
          Matchmaking, the way it was always done.
        </h2>
      </div>
    </section>
  );
}
