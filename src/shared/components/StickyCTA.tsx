"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { route, routes } from "@shared/navigation/routes";
import { IconHeart } from "./icons";

// Mobile-only sticky bottom CTA. Appears after the hero; hidden on /register.
export function StickyCTA() {
  const [shown, setShown] = useState(false);
  const pathname = usePathname();

  useLenis((lenis) => {
    setShown(lenis.scroll > 620);
  });

  if (pathname === routes.register.path) return null;

  return (
    <Link
      href={route("register")}
      className={`pm-sticky-cta ${shown ? "is-shown" : ""}`}
      aria-hidden={!shown}
    >
      <IconHeart className="pm-sticky-cta__icon" />
      Begin Application
    </Link>
  );
}
