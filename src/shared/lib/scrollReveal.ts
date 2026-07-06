import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Mobile in-view reveal. The pinned/scrubbed desktop scenes are gated to
 * `min-width: 1024px` and fall back to fully-static on small screens — this
 * gives those same blocks a light, non-scrubbed fade+rise as each enters the
 * viewport (no pinning, no scroll-scrubbing). Call it from inside a
 * `gsap.matchMedia()` mobile branch and return its cleanup.
 *
 * Elements are queried WITHIN `root` (so it's scoped to the instance) and
 * revealed once on enter. Returns a disposer that kills the batch triggers.
 */
export function mobileReveal(
  root: HTMLElement | null,
  selector: string,
  opts: { y?: number; stagger?: number; start?: string; duration?: number } = {}
): () => void {
  if (!root) return () => {};
  const items = Array.from(root.querySelectorAll<HTMLElement>(selector));
  if (!items.length) return () => {};

  gsap.set(items, { opacity: 0, y: opts.y ?? 28 });
  const triggers = ScrollTrigger.batch(items, {
    start: opts.start ?? "top 88%",
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: opts.duration ?? 0.7,
        stagger: opts.stagger ?? 0.1,
        ease: "power3.out",
        overwrite: true,
      }),
  });

  return () => triggers.forEach((t) => t.kill());
}
