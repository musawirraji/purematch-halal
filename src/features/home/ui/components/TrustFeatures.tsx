import { Reveal } from "@shared/components/Reveal";
import { IconShield, IconRings, IconConsent, IconCheck } from "@shared/components/icons";
import { TRUST } from "../../domain/content";
import type { TrustFeature } from "../../domain/content";

const ICON: Record<TrustFeature["icon"], React.ComponentType<{ className?: string }>> = {
  shield: IconShield,
  rings: IconRings,
  consent: IconConsent,
  check: IconCheck,
};

export function TrustFeatures() {
  return (
    <section className="pm-section pm-trust">
      <div className="pm-container">
        <Reveal className="pm-trust__head">
          <p className="pm-eyebrow">Built for your deen &amp; your dignity</p>
          <h2 className="pm-h2 pm-trust__title">Discretion is the premium feature.</h2>
        </Reveal>

        <div className="pm-trust__grid">
          {TRUST.map((f, i) => {
            const Icon = ICON[f.icon];
            return (
              <Reveal className="pm-trust__card" delay={i * 70} key={f.title}>
                <span className="pm-trust__icon">
                  <Icon />
                </span>
                <h3 className="pm-h4">{f.title}</h3>
                <p>{f.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
