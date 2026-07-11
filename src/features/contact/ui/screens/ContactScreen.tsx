import { PageIntro } from "@shared/components/PageIntro";
import { ContactDetails } from "../components/ContactDetails";
import { ContactForm } from "../components/ContactForm";
import { ContactFreeCall } from "../components/ContactFreeCall";
import { ContactClosing } from "../components/ContactClosing";
import { CONTACT_PAGE } from "../../domain/content";

// Contact — header, details + CTAs, message form, free-call reminder, sign-off.
export function ContactScreen() {
  const { intro } = CONTACT_PAGE;
  return (
    <>
      <PageIntro kicker={intro.kicker} title={intro.title} dek={intro.dek} />
      <ContactDetails />
      <ContactForm />
      <ContactFreeCall />
      <ContactClosing />
    </>
  );
}
