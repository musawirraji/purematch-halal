import { Reveal } from "@shared/components/Reveal";
import { REGISTER_PAGE } from "../../domain/content";

// §2 Payment Details — reuses the pm-pay account cards, adds a compact price
// strip and the receipt note.
export function RegisterPay() {
  const d = REGISTER_PAGE.pay;
  return (
    <section className="pm-section pm-pay">
      <div className="pm-pay__inner">
        <Reveal className="pm-pay__head" as="div">
          <p className="pm-eyebrow pm-pay__kicker">{d.kicker}</p>
          <h2 className="pm-pay__heading">{d.heading}</h2>
        </Reveal>

        <div className="pm-pay__cards">
          {d.accounts.map((a, i) => (
            <Reveal className="pm-pay__card" as="div" delay={i * 80} key={a.region}>
              <p className="pm-pay__region">{a.region}</p>
              <ul className="pm-pay__lines">
                {a.lines.map((l) => (
                  <li className="pm-pay__line" key={l.bank}>
                    <span className="pm-pay__bank">
                      {l.bank}
                      {l.alt && <span className="pm-pay__alt"> · alternative</span>}
                    </span>
                    <span className="pm-pay__detail">{l.detail}</span>
                    <span className="pm-pay__name">{l.name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="pm-pay__prices">
          {d.prices.map((p) => (
            <div className="pm-pay__price" key={p.region}>
              <span>{p.region} · 3 months</span>
              <strong>{p.amount}</strong>
            </div>
          ))}
        </div>

        <div className="pm-pay__notes">
          <Reveal>
            <p className="pm-pay__note">{d.note}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
