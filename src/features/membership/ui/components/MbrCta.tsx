import { CtaPanel } from "@shared/components/CtaPanel";
import { route } from "@shared/navigation/routes";
import { MEMBERSHIP_PAGE } from "../../domain/content";

// §8 CTA — shared dark invitation panel.
export function MbrCta() {
  return <CtaPanel content={{ ...MEMBERSHIP_PAGE.cta, ctaHref: route("register"), secondaryHref: route("faqs") }} />;
}
