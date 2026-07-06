import Link from "next/link";
import { route } from "@shared/navigation/routes";

// Wordmark set in the display face + a small hand-drawn crescent mark.
// (Dancing Script retired; logotype redrawn per the brief.)
export function Logo({ className }: { className?: string }) {
  return (
    <Link href={route("home")} className={`pm-logo ${className ?? ""}`} aria-label="Pure Match Halal — home">
      <svg className="pm-logo__mark" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M16.5 4.5C13 4.8 10.2 7.8 10.2 11.5C10.2 15.2 13 18.2 16.5 18.5C14.9 19.6 12.9 20.2 10.8 20C6.6 19.6 3.4 16 3.6 11.7C3.8 7.6 7 4.4 11 4.2C12.9 4.1 14.8 4.6 16.5 4.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M18.2 8.4L19 10.2L20.8 11L19 11.8L18.2 13.6L17.4 11.8L15.6 11L17.4 10.2L18.2 8.4Z" fill="currentColor" />
      </svg>
      <span className="pm-logo__word">
        Pure Match <span className="pm-logo__word-accent">Halal</span>
      </span>
    </Link>
  );
}
