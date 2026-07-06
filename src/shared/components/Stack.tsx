"use client";

import { Children } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Scroll-stacking cards. Each child becomes a full-height card that sticks at
// the top; the next card rises up and overlays it while the outgoing card
// scales back + dims for depth (a deck stacking). Gated lg + motion-safe; below
// that the cards just flow as normal full-bleed sections.
export function Stack({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".pm-stack__card", ref.current);
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return; // last card doesn't recede
          // ONLY a whisper of scale for depth — no darkening (that read as a
          // black flash), and it eases in over the LATTER half of the cover so
          // the active section never dims while you're looking at it.
          gsap.fromTo(
            card,
            { scale: 1 },
            {
              scale: 0.965,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top top",
                end: "+=90%",
                scrub: true,
              },
            }
          );
        });
      });
    },
    { scope: ref }
  );

  return (
    <div className="pm-stack" ref={ref}>
      {Children.map(children, (child, i) => (
        <div className="pm-stack__card" style={{ zIndex: i + 1 }}>
          {child}
        </div>
      ))}
    </div>
  );
}
