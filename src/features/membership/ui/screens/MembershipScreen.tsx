import { PageIntro } from "@shared/components/PageIntro";
import { MbrWhat } from "../components/MbrWhat";
import { MbrProcess } from "../components/MbrProcess";
import { MbrPricing } from "../components/MbrPricing";
import { MbrPay } from "../components/MbrPay";
import { MbrFreeCall } from "../components/MbrFreeCall";
import { MbrStandards } from "../components/MbrStandards";
import { MbrPrivacyGlance } from "../components/MbrPrivacyGlance";
import { MbrCta } from "../components/MbrCta";
import { MEMBERSHIP_PAGE } from "../../domain/content";

// How It Works + Pricing — the brief's eight sections.
export function MembershipScreen() {
  const { intro } = MEMBERSHIP_PAGE;
  return (
    <>
      <PageIntro kicker={intro.kicker} title={intro.title} dek={intro.dek} />
      <MbrWhat />
      <MbrProcess />
      <MbrPricing />
      <MbrPay />
      <MbrFreeCall />
      <MbrStandards />
      <MbrPrivacyGlance />
      <MbrCta />
    </>
  );
}
