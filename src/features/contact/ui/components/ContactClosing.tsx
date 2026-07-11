import { CONTACT_PAGE } from "../../domain/content";

// A quiet salaam sign-off to close the page.
export function ContactClosing() {
  return (
    <section className="pm-section pm-cclose">
      <p className="pm-cclose__line">{CONTACT_PAGE.closing}</p>
    </section>
  );
}
