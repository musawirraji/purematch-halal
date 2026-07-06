"use client";

import { useEffect, useRef } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Fade+rise reveal on scroll. Adds `.is-in` once the element enters the
 * viewport. Reduced-motion → reveals immediately. Pair with `.pm-reveal`.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced()) {
      el.classList.add("is-in");
      return;
    }
    if (options?.delay) el.style.transitionDelay = `${options.delay}ms`;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? "0px 0px -8% 0px",
      }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [options?.threshold, options?.rootMargin, options?.delay]);

  return ref;
}

/**
 * Staggered reveal for a group: children with `.pm-reveal` get `.is-in`
 * added one after another when the container enters view.
 */
export function useRevealGroup<T extends HTMLElement = HTMLDivElement>(step = 90) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>(".pm-reveal"));

    if (prefersReduced()) {
      items.forEach((i) => i.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          items.forEach((item, i) => {
            item.style.transitionDelay = `${i * step}ms`;
            item.classList.add("is-in");
          });
          io.disconnect();
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [step]);

  return ref;
}
