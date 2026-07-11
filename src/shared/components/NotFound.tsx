import Link from "next/link";
import { route } from "@shared/navigation/routes";
import { IconArrow } from "./icons";

// Self-contained, branded 404 (the root not-found renders without site chrome).
// Full-bleed ink stage with pink glow + corner frame, an oversized 404, a warm
// halal line, and the ways back.
export function NotFound() {
  return (
    <main className="pm-404">
      <div className="pm-404__bg" aria-hidden="true">
        <span className="pm-404__glow pm-404__glow--1" />
        <span className="pm-404__glow pm-404__glow--2" />
      </div>
      <span className="pm-404__frame" aria-hidden="true">
        <i className="pm-404__corner pm-404__corner--tl" />
        <i className="pm-404__corner pm-404__corner--tr" />
        <i className="pm-404__corner pm-404__corner--bl" />
        <i className="pm-404__corner pm-404__corner--br" />
      </span>

      <Link href={route("home")} className="pm-404__wordmark">Pure Match Halal</Link>

      <div className="pm-404__inner">
        <p className="pm-eyebrow pm-404__kicker">Error 404 · Page not found</p>
        <p className="pm-404__code" aria-hidden="true">404</p>
        <h1 className="pm-404__headline">This path doesn&rsquo;t exist — but yours still does.</h1>
        <p className="pm-404__body">
          The page you were looking for has moved, or was never here. Let&rsquo;s get you back on the
          road to your nikkah, in sha Allah.
        </p>
        <div className="pm-404__actions">
          <Link href={route("home")} className="pm-btn pm-btn--onink">Back to home</Link>
          <Link href={route("register")} className="pm-btn pm-btn--pink">Begin Your Application</Link>
          <Link href={route("contact")} className="pm-404__more">
            Talk to us <IconArrow />
          </Link>
        </div>
      </div>
    </main>
  );
}
