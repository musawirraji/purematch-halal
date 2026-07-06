import { gsap } from "gsap";

// Mobile reveals use IntersectionObserver (NOT ScrollTrigger). On phones Lenis
// falls back to native touch scroll, so ScrollTrigger.batch timing is unreliable
// and can leave near-viewport elements stuck hidden. IO fires for whatever is
// already on screen too, so nothing is ever left invisible. Matches the proven
// useReveal() behaviour, just driving a GSAP tween instead of a CSS class.

const REVEAL_MARGIN = "0px 0px -8% 0px";

/**
 * Fade+rise the matched elements as they enter the viewport. Elements are
 * queried WITHIN `root` (scoped to the instance), hidden up front, then revealed
 * once. Elements entering together in the same observer tick are staggered.
 * Returns a disposer that disconnects the observer. Call from a
 * `gsap.matchMedia()` mobile branch and return its result.
 */
export function mobileReveal(
  root: HTMLElement | null,
  selector: string,
  opts: { y?: number; stagger?: number; duration?: number; threshold?: number } = {}
): () => void {
  if (!root) return () => {};
  const items = Array.from(root.querySelectorAll<HTMLElement>(selector));
  if (!items.length) return () => {};

  const { y = 28, stagger = 0.08, duration = 0.7, threshold = 0.15 } = opts;
  gsap.set(items, { opacity: 0, y });

  const io = new IntersectionObserver(
    (entries) => {
      const entering = entries.filter((e) => e.isIntersecting);
      entering.forEach((entry, k) => {
        gsap.to(entry.target, {
          opacity: 1,
          y: 0,
          duration,
          ease: "power3.out",
          delay: k * stagger, // stagger only within this tick's batch
          overwrite: true,
        });
        io.unobserve(entry.target);
      });
    },
    { threshold, rootMargin: REVEAL_MARGIN }
  );

  items.forEach((el) => io.observe(el));
  return () => io.disconnect();
}

/**
 * Run `cb` once, when `el` scrolls into view (via IntersectionObserver). Used
 * for one-shot effects like the stat counter on mobile. Returns a disposer.
 */
export function onInView(
  el: Element | null,
  cb: () => void,
  opts: { threshold?: number } = {}
): () => void {
  if (!el) return () => {};
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        cb();
        io.disconnect();
      }
    },
    { threshold: opts.threshold ?? 0.35, rootMargin: REVEAL_MARGIN }
  );
  io.observe(el);
  return () => io.disconnect();
}
