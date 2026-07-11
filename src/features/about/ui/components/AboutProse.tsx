import { Reveal } from "@shared/components/Reveal";

// Reusable editorial prose section: a sticky ruled kicker + heading on the left,
// a measured column of prose on the right (drop-cap lede). Used for the Story
// and Who-This-Is-For sections; `alt` flips the background tone for rhythm.
export function AboutProse({
  data,
  alt = false,
}: {
  data: { kicker: string; heading: string; body: readonly string[] };
  alt?: boolean;
}) {
  return (
    <section className={`pm-section pm-aprose ${alt ? "pm-aprose--alt" : ""}`}>
      <div className="pm-aprose__inner">
        <div className="pm-aprose__head">
          <Reveal>
            <p className="pm-eyebrow pm-aprose__kicker">{data.kicker}</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="pm-aprose__heading">{data.heading}</h2>
          </Reveal>
        </div>
        <div className="pm-aprose__body">
          {data.body.map((p, i) => (
            <Reveal delay={100 + i * 60} key={i}>
              <p className={`pm-aprose__p ${i === 0 ? "pm-aprose__p--lede" : ""}`}>{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
