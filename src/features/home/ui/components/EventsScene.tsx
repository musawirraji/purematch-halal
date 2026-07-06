"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { route } from "@shared/navigation/routes";
import { IconArrow } from "@shared/components/icons";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// HOD Live / Half Deen — a pinned cinematic (like the Trust scene): dark stage,
// intro reveals → the stats COUNT UP as you scroll (scrubbed) → badges +
// partnership + waitlist resolve. Gated lg + motion-safe; static fallback shows
// final numbers + content stacked.
export function EventsScene() {
  const root = useRef<HTMLElement>(null);
  const a = useRef<HTMLSpanElement>(null);
  const b = useRef<HTMLSpanElement>(null);
  const c = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const set = (el: HTMLSpanElement | null, v: number) => {
          if (el) el.textContent = String(Math.round(v));
        };
        const n = { a: 0, b: 0, c: 0 };
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1 },
        });
        tl.fromTo(".pm-ev__kicker", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.1 }, 0.02)
          .fromTo(".pm-ev__intro", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.12 }, 0.06)
          .fromTo(".pm-ev__stat", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.12, stagger: 0.05 }, 0.24)
          .to(n, {
            a: 400, b: 80, c: 59, duration: 0.4,
            onUpdate: () => { set(a.current, n.a); set(b.current, n.b); set(c.current, n.c); },
          }, 0.26)
          .fromTo(".pm-ev__badges", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.1 }, 0.66)
          .fromTo(".pm-ev__partner", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.1 }, 0.72)
          .fromTo(".pm-ev__cta", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.1 }, 0.78);
      });
    },
    { scope: root }
  );

  return (
    <section className="pm-ev" id="events" ref={root} aria-label="HOD Live events">
      <div className="pm-ev__stage">
        <p className="pm-eyebrow pm-ev__kicker">HOD Live · in partnership with Half Deen</p>
        <h2 className="pm-ev__intro">Where 400 apply. 80 are chosen.</h2>

        <div className="pm-ev__stats">
          <div className="pm-ev__stat">
            <span className="pm-ev__num" ref={a}>400</span>
            <span className="pm-ev__label">Applied</span>
          </div>
          <div className="pm-ev__stat">
            <span className="pm-ev__num" ref={b}>80</span>
            <span className="pm-ev__label">Chosen</span>
          </div>
          <div className="pm-ev__stat">
            <span className="pm-ev__num">
              <span ref={c}>59</span>%
            </span>
            <span className="pm-ev__label">Success rate</span>
          </div>
        </div>

        <div className="pm-ev__outro">
          <div className="pm-ev__badges">
            <span className="pm-badge pm-badge--outline">No speed dating</span>
            <span className="pm-badge pm-badge--outline">Equal men &amp; women</span>
            <span className="pm-badge pm-badge--outline">Private location</span>
          </div>
          <p className="pm-ev__partner">
            A considered, halal gathering with Half Deen — a private location, equal numbers, and
            not a single speed-dating buzzer. Our next cohort is forming now.
          </p>
          <Link href={route("register")} className="pm-btn pm-btn--onink pm-ev__cta">
            Join the waitlist <IconArrow className="pm-btn__i" />
          </Link>
        </div>
      </div>
    </section>
  );
}
