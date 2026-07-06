"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ABOUT } from "../../domain/content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// About hero — Exo Ape "PlayReel" converge/expand, adapted. Full-black stage:
// "Pure" pinned left, "Match" pinned right, a centre video that starts small.
// The section pins and, scrubbed by scroll, the two words slide INWARD toward
// each other while the video SCALES UP to fill the screen — ending with the
// brand name reading over the full-bleed film. A "Play" cursor follows the mouse
// across the section. Desktop-only pin; mobile stacks.
export function AboutShowreel() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const el = root.current!;
        const wl = el.querySelector<HTMLElement>(".pm-reel__word--l")!;
        const wr = el.querySelector<HTMLElement>(".pm-reel__word--r")!;
        const stage = el.querySelector<HTMLElement>(".pm-reel__stage")!;
        // End positions: converge the words into a centred "Pure  Match" with a
        // small gap. offset* are transform-independent → recompute on refresh.
        const targets = () => {
          const edge = parseFloat(getComputedStyle(stage).paddingLeft) || 0;
          const gap = wl.offsetHeight * 0.18;
          const pairW = wl.offsetWidth + gap + wr.offsetWidth;
          const pairLeft = (window.innerWidth - pairW) / 2;
          return {
            xL: pairLeft - edge,
            xR: pairLeft + wl.offsetWidth + gap - (window.innerWidth - edge - wr.offsetWidth),
          };
        };

        gsap.set(".pm-reel__media", { scale: 0.36 });
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: el, start: "top top", end: "+=190%", pin: true, scrub: 1, invalidateOnRefresh: true,
          },
        });
        tl.to(".pm-reel__media", { scale: 1 }, 0)
          .fromTo(".pm-reel__scrim", { opacity: 0 }, { opacity: 0.55 }, 0)
          .to(wl, { x: () => targets().xL }, 0)
          .to(wr, { x: () => targets().xR }, 0);

        // "Play" cursor — follows the mouse across the section
        const cursor = el.querySelector<HTMLElement>(".pm-reel__cursor")!;
        gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0, scale: 0.6 });
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.5, ease: "power3" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.5, ease: "power3" });
        const move = (e: MouseEvent) => { xTo(e.clientX); yTo(e.clientY); };
        const enter = () => gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });
        const leave = () => gsap.to(cursor, { opacity: 0, scale: 0.6, duration: 0.3, ease: "power2.out" });
        el.addEventListener("mousemove", move);
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        return () => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        };
      });
    },
    { scope: root }
  );

  return (
    <section className="pm-reel" ref={root} aria-label="Pure Match — the practice in motion">
      <p className="pm-reel__eyebrow">
        <span className="pm-reel__spark" aria-hidden="true">✦</span> {ABOUT.reel.label}
      </p>

      <div className="pm-reel__media">
        {/* eslint-disable-next-line @next/next/no-img-element -- <video> */}
        <video
          className="pm-reel__video"
          src={`/img/${ABOUT.reel.video}`}
          poster={`/img/${ABOUT.reel.poster}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <span className="pm-reel__scrim" aria-hidden="true" />
      </div>

      <div className="pm-reel__stage">
        <span className="pm-reel__word pm-reel__word--l">{ABOUT.reel.wordLeft}</span>
        <span className="pm-reel__word pm-reel__word--r">{ABOUT.reel.wordRight}</span>
      </div>

      <p className="pm-reel__note">{ABOUT.reel.note}</p>

      <div className="pm-reel__cursor" aria-hidden="true">
        <span>Play</span>
      </div>
    </section>
  );
}
