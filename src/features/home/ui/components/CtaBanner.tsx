import Link from "next/link";
import { Reveal } from "@shared/components/Reveal";
import { IconHeart } from "@shared/components/icons";
import { route } from "@shared/navigation/routes";
import { CTA_BANNER } from "../../domain/content";

export function CtaBanner() {
  return (
    <section className="pm-section pm-ctabanner">
      <div className="pm-container">
        <Reveal className="pm-ctabanner__card">
          <p className="pm-eyebrow pm-ctabanner__kicker">{CTA_BANNER.kicker}</p>
          <h2 className="pm-ctabanner__headline">{CTA_BANNER.headline}</h2>
          <p className="pm-ctabanner__body">{CTA_BANNER.body}</p>
          <Link href={route("register")} className="pm-btn pm-btn--lg">
            <IconHeart className="pm-btn__i" />
            {CTA_BANNER.cta}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
