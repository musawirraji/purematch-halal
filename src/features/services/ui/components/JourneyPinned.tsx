"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MediaFrame } from "@shared/components/MediaFrame";
import { IconArrow } from "@shared/components/icons";
import { route } from "@shared/navigation/routes";
import { mobileReveal } from "@shared/lib/scrollReveal";
import { JOURNEY, SERVICES_INTRO, SERVICES_CTA } from "../../domain/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// Daylight S3 horizontal scroller → our 6-step journey. A pinned viewport holds
// a wide track; vertical scroll translates the track left so the steps slide in
// from the right. The track opens on a title panel ("The Process") and closes on
// a CTA panel to the full process + pricing. translateX = -(trackWidth -
// viewportWidth), scrubbed 1:1. Gated lg + motion-safe; below that the panels
// stack vertically (no pin).
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
          <article className="pm-journey__panel pm-journey__panel--intro">
            <p className="pm-eyebrow pm-journey__introkicker">{SERVICES_INTRO.kicker}</p>
            <h2 className="pm-journey__introtitle">{SERVICES_INTRO.title}</h2>
            <p className="pm-journey__introdek">{SERVICES_INTRO.dek}</p>
          </article>

          {JOURNEY.map((step) => (
            <article className="pm-journey__panel" key={step.num}>
              <span className="pm-journey__num">{step.num}</span>
              <div className="pm-journey__plate">
                <MediaFrame ratio="4 / 5" file={step.file} tone="ink" />
              </div>
              <h3 className="pm-journey__title">{step.title}</h3>
              <p className="pm-journey__body">{step.body}</p>
            </article>
          ))}

          <article className="pm-journey__panel pm-journey__panel--cta">
            <p className="pm-journey__ctalabel">One outcome, in sha Allah.</p>
            <Link href={route("membership")} className="pm-btn">
              {SERVICES_CTA.label} <IconArrow className="pm-btn__i" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
