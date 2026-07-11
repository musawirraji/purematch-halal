import { FAQS_PAGE } from "../../domain/content";

// Accessible accordion built on native <details>/<summary> — no client JS. The
// plus turns to a minus on open (CSS), and the answer fades in.
export function FaqAccordion() {
  return (
    <section className="pm-section pm-faqs">
      <div className="pm-faqs__inner">
        {FAQS_PAGE.items.map((f, i) => (
          <details className="pm-faq" key={i}>
            <summary className="pm-faq__q">
              <span className="pm-faq__qtext">{f.q}</span>
              <span className="pm-faq__icon" aria-hidden="true" />
            </summary>
            <div className="pm-faq__a">
              {f.a.map((p, j) => (
                <p className="pm-faq__p" key={j}>{p}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
