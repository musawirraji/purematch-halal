"use client";

import { useReveal } from "@shared/hooks/useReveal";

// Presentational scroll-reveal primitive. Wrap any block; it fades+rises once
// in view (reduced-motion → instant). Feature components stay render-only and
// delegate the animation behaviour here.
export function Reveal({
  children,
  className = "",
  delay,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "figure" | "span" | "ul";
}) {
  const ref = useReveal<HTMLElement>({ delay });
  const Tag = as as keyof React.JSX.IntrinsicElements;
  return (
    // @ts-expect-error — ref type across the dynamic tag union is safe here
    <Tag ref={ref} className={`pm-reveal ${className}`}>
      {children}
    </Tag>
  );
}
