import { CtaPanel } from "@shared/components/CtaPanel";
import { route } from "@shared/navigation/routes";
import { ABOUT } from "../../domain/content";

// About closer — the shared CTA panel with the About copy.
export function AboutCta() {
  return <CtaPanel content={{ ...ABOUT.cta, ctaHref: route("register"), secondaryHref: route("contact") }} />;
}
