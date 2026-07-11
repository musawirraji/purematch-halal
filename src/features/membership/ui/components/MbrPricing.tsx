import { Reveal } from "@shared/components/Reveal";
import { IconCheck } from "@shared/components/icons";
import { MEMBERSHIP_PAGE } from "../../domain/content";

// §3 Pricing — a two-region table, the includes checklist, and the
// non-refundable note.
export function MbrPricing() {
  const d = MEMBERSHIP_PAGE.pricing;
  return (
    <section className="pm-section pm-price">
      <div className="pm-price__inner">
        <Reveal className="pm-price__head" as="div">
          <p className="pm-eyebrow pm-price__kicker">{d.kicker}</p>
          <h2 className="pm-price__heading">{d.heading}</h2>
        </Reveal>

        <Reveal className="pm-price__table" as="div">
          <div className="pm-price__row pm-price__row--head">
            <span className="pm-price__label" />
            <span className="pm-price__region">Nigeria</span>
            <span className="pm-price__region">Diaspora (UK)</span>
          </div>
          {d.rows.map((r) => (
            <div className="pm-price__row" key={r.label}>
              <span className="pm-price__label">{r.label}</span>
              <span className="pm-price__amt">{r.nigeria}</span>
              <span className="pm-price__amt">{r.diaspora}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className="pm-price__includes" as="div">
          <p className="pm-price__inclhead">{d.includesTitle}</p>
          <ul className="pm-price__list">
            {d.includes.map((it) => (
              <li className="pm-price__item" key={it}>
                <IconCheck className="pm-price__ci" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className="pm-price__note">{d.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
