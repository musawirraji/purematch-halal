import { CtaPanel } from "@shared/components/CtaPanel";
import { route } from "@shared/navigation/routes";
import { CTA_BANNER } from "../../domain/content";

// Home finale — the shared CTA panel with the home copy. Lives as the last card
// in the scroll-stacking deck.
export function CtaBanner() {
  return <CtaPanel content={{ ...CTA_BANNER, ctaHref: route("register"), secondaryHref: "/#journey" }} />;
}
