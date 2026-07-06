"use client";

import { useCounter } from "@shared/hooks/useCounter";
import { STATS } from "@shared/constants/site";

function Stat({ value, suffix, label, note }: { value: number; suffix: string; label: string; note?: string }) {
  const [ref, current] = useCounter(value);
  return (
    <div className="pm-stat">
      <span className="pm-stat__value" ref={ref}>
        {current}
        <span className="pm-stat__suffix">{suffix}</span>
      </span>
      <span className="pm-stat__label">{label}</span>
      {note && <span className="pm-stat__note">{note}</span>}
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="pm-statsband">
      <div className="pm-container pm-statsband__grid">
        {STATS.map((s) => (
          <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} note={"note" in s ? s.note : undefined} />
        ))}
      </div>
    </section>
  );
}
