// Editorial media plate. Renders the final grayscale art from /img/<file> (or a
// seeded placeholder link as a fallback while art is pending). Clean image + a
// faint film grain — no caption/plate/registration overlays. `plate`/`label` are
// kept as accepted metadata (label doubles as the img alt). AI-atmosphere note:
// NEVER a face-as-client.

type MediaFrameProps = {
  ratio?: string;
  /** target filename in /public/img — also used as the placeholder seed */
  file?: string;
  label?: string;
  /** final image src; when set, the placeholder link is replaced */
  src?: string;
  alt?: string;
  className?: string;
  kenBurns?: boolean;
  tone?: "ink" | "paper" | "terracotta" | "sand";
  plate?: string;
};

// Reliable grayscale placeholder link at the right orientation (fallback when
// no local file is named). Self-hosted /img/<file> is preferred — see below.
function placeholder(seed: string, ratio: string): string {
  const [a, b] = ratio.split("/").map((n) => parseFloat(n.trim()) || 1);
  const long = 1200;
  const w = a >= b ? long : Math.round((long * a) / b);
  const h = a >= b ? Math.round((long * b) / a) : long;
  return `https://picsum.photos/seed/pmh-${encodeURIComponent(seed)}/${w}/${h}?grayscale`;
}

export function MediaFrame({
  ratio = "3 / 2",
  file,
  label,
  src,
  alt,
  className,
  kenBurns,
  tone = "ink",
}: MediaFrameProps) {
  const light = tone === "paper" || tone === "sand";
  // Prefer a self-hosted /img/<file> placeholder (reliable + drop-in swap by
  // filename); fall back to the image-link service if only a label is given.
  const imgSrc = src ?? (file ? `/img/${file}` : placeholder(label ?? "pmh", ratio));

  return (
    <figure
      className={`pm-plate ${light ? "pm-plate--light" : "pm-plate--ink"} ${kenBurns ? "pm-plate--kb" : ""} ${className ?? ""}`}
      style={{ aspectRatio: ratio }}
      data-file={file}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imgSrc} alt={alt ?? label ?? ""} className="pm-plate__img" />
      <span className="pm-plate__grain" aria-hidden="true" />
    </figure>
  );
}
