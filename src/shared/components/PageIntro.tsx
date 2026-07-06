// Editorial page intro (replaces the legacy light-blue banner strips):
// kicker + huge display title + one-line dek, revealed on load via CSS.
// Server component — no JS dependency, clears the fixed header.

export function PageIntro({
  kicker,
  title,
  dek,
  align = "left",
}: {
  kicker: string;
  title: string;
  dek?: string;
  align?: "left" | "center";
}) {
  return (
    <section className={`pm-pageintro pm-pageintro--${align}`}>
      <div className="pm-container">
        <p className="pm-eyebrow pm-pageintro__kicker">{kicker}</p>
        <h1 className="pm-pageintro__title">{title}</h1>
        {dek && <p className="pm-pageintro__dek">{dek}</p>}
      </div>
      <div className="pm-container">
        <hr className="pm-hairline pm-pageintro__rule" />
      </div>
    </section>
  );
}
