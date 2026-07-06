"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MediaFrame } from "@shared/components/MediaFrame";
import { mobileReveal } from "@shared/lib/scrollReveal";
import { JOURNEY } from "../../domain/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Daylight S3 horizontal scroller → our 6-step journey. A pinned viewport holds
// a wide track; vertical scroll translates the track left so the steps slide in
// from the right. translateX = -(trackWidth - viewportWidth), scrubbed 1:1.
// Gated lg + motion-safe; below that the steps stack vertically (no pin).
export function JourneyPinned() {
  const section = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Mobile: the steps stack vertically — reveal each panel as it enters view.
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () =>
        mobileReveal(section.current, ".pm-journey__panel", { stagger: 0 })
      );

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const amount = () => Math.max(0, el.scrollWidth - window.innerWidth);
        const tween = gsap.to(el, {
          x: () => -amount(),
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: () => "+=" + amount(),
            pin: pin.current,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
        return () => tween.kill();
      });
    },
    { scope: section }
  );

  return (
    <section className="pm-journey" id="journey" ref={section} aria-label="The six-step journey">
      <div className="pm-journey__pin" ref={pin}>
        <div className="pm-journey__track" ref={track}>
          {JOURNEY.map((step) => (
            <article className={`pm-journey__panel ${step.dua ? "pm-journey__panel--dua" : ""}`} key={step.num}>
              <span className="pm-journey__num">{step.num}</span>
              {step.dua ? (
                <div className="pm-journey__dua">
                  <p className="pm-journey__duatitle">{step.title}</p>
                  <p className="pm-journey__duatext">In sha Allah&hellip; Ameen.</p>
                  <p className="pm-journey__body pm-journey__body--dua">{step.body}</p>
                </div>
              ) : (
                <>
                  <div className="pm-journey__plate">
                    <MediaFrame ratio="4 / 5" file={step.file} tone="ink" />
                  </div>
                  <h3 className="pm-journey__title">{step.title}</h3>
                  <p className="pm-journey__body">{step.body}</p>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
