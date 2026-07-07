"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { IconHeart, IconArrow } from "./icons";

export type CtaContent = {
  kicker: string;
  index?: string;
  headline: string;
  body: string;
  cta: string;
  ctaHref: string;
  secondary?: string;
  secondaryHref?: string;
  trust?: readonly string[];
};

// Shared CTA panel — full-bleed dark invitation. The headline reveals per-word
// out of line-masks when it enters view (IntersectionObserver, reliable on
// mobile), and the primary button is magnetic (drifts toward the cursor).
export function CtaPanel({ content }: { content: CtaContent }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = root.current!;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(".pm-cta__line", { yPercent: 105 });
        const io = new IntersectionObserver(
          (entries) => {
            if (!entries.some((e) => e.isIntersecting)) return;
            gsap.to(".pm-cta__line", { yPercent: 0, duration: 0.9, ease: "power4.out", stagger: 0.07 });
            gsap.from([".pm-cta__body", ".pm-cta__actions", ".pm-cta__trust"], {
              opacity: 0, y: 22, duration: 0.7, ease: "power3.out", stagger: 0.1, delay: 0.28,
            });
            io.disconnect();
          },
          { threshold: 0.3, rootMargin: "0px 0px -8% 0px" }
        );
        io.observe(el);

        // magnetic primary button (desktop pointers)
        const btn = el.querySelector<HTMLElement>(".pm-cta__btn");
        let cleanup = () => {};
        if (btn && window.matchMedia("(pointer: fine)").matches) {
          const xTo = gsap.quickTo(btn, "x", { duration: 0.45, ease: "power3" });
          const yTo = gsap.quickTo(btn, "y", { duration: 0.45, ease: "power3" });
          const move = (e: MouseEvent) => {
            const r = btn.getBoundingClientRect();
            xTo((e.clientX - (r.left + r.width / 2)) * 0.32);
            yTo((e.clientY - (r.top + r.height / 2)) * 0.32);
          };
          const reset = () => { xTo(0); yTo(0); };
          btn.addEventListener("mousemove", move);
          btn.addEventListener("mouseleave", reset);
          cleanup = () => {
            btn.removeEventListener("mousemove", move);
            btn.removeEventListener("mouseleave", reset);
          };
        }
        return () => { io.disconnect(); cleanup(); };
      });
    },
    { scope: root }
  );

  return (
    <section className="pm-section pm-cta" ref={root}>
      <div className="pm-cta__bg" aria-hidden="true">
        <span className="pm-cta__glow pm-cta__glow--1" />
        <span className="pm-cta__glow pm-cta__glow--2" />
      </div>
      <span className="pm-cta__frame" aria-hidden="true">
        <i className="pm-cta__corner pm-cta__corner--tl" />
        <i className="pm-cta__corner pm-cta__corner--tr" />
        <i className="pm-cta__corner pm-cta__corner--bl" />
        <i className="pm-cta__corner pm-cta__corner--br" />
      </span>

      <div className="pm-cta__inner">
        {content.index && <span className="pm-cta__index">{content.index}</span>}
        <p className="pm-eyebrow pm-cta__kicker">{content.kicker}</p>
        <h2 className="pm-cta__headline">
          <span className="pm-cta__mask">
            <span className="pm-cta__line">{content.headline}</span>
          </span>
        </h2>
        <p className="pm-cta__body">{content.body}</p>
        <div className="pm-cta__actions">
          <Link href={content.ctaHref} className="pm-btn pm-btn--pink pm-btn--lg pm-cta__btn">
            <IconHeart className="pm-btn__i" /> {content.cta}
          </Link>
          {content.secondary && (
            <Link href={content.secondaryHref ?? "#"} className="pm-cta__more">
              {content.secondary} <IconArrow className="pm-cta__more-i" />
            </Link>
          )}
        </div>
        {content.trust && (
          <ul className="pm-cta__trust">
            {content.trust.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
