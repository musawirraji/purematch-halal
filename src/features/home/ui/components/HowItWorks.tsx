import { Reveal } from "@shared/components/Reveal";
import { MediaFrame } from "@shared/components/MediaFrame";
import { HOW_IT_WORKS } from "../../domain/content";

export function HowItWorks() {
  return (
    <section className="pm-section pm-how">
      <div className="pm-container">
        <Reveal className="pm-how__head">
          <p className="pm-eyebrow">How it works</p>
          <h2 className="pm-h2 pm-how__title">A considered journey, not an endless swipe.</h2>
        </Reveal>

        <ol className="pm-how__list">
          {HOW_IT_WORKS.map((step, i) => (
            <Reveal as="li" className="pm-how__step" delay={i * 90} key={step.num}>
              <span className="pm-how__num">{step.num}</span>
              <div className="pm-how__media">
                <MediaFrame ratio="3 / 2" file={step.file} label={step.label} tone={i === 1 ? "sand" : "terracotta"} />
              </div>
              <h3 className="pm-how__steptitle">{step.title}</h3>
              <p className="pm-how__stepbody">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
