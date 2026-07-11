import { Reveal } from "@shared/components/Reveal";
import { MEMBERSHIP_PAGE } from "../../domain/content";

// §4 How to Pay — the bank/transfer details (shown publicly on purpose) + notes.
export function MbrPay() {
  const d = MEMBERSHIP_PAGE.pay;
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

        <div className="pm-pay__notes">
          {d.notes.map((n, i) => (
            <Reveal delay={i * 60} key={i}>
              <p className="pm-pay__note">{n}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
