import { PageIntro } from "@shared/components/PageIntro";
import { FaqAccordion } from "../components/FaqAccordion";
import { FaqCta } from "../components/FaqCta";
import { FAQS_PAGE } from "../../domain/content";

// FAQs — page header, accordion, closing prompt.
export function FaqsScreen() {
  const { intro } = FAQS_PAGE;
  return (
    <>
      <PageIntro kicker={intro.kicker} title={intro.title} dek={intro.dek} />
      <FaqAccordion />
      <FaqCta />
    </>
  );
}
