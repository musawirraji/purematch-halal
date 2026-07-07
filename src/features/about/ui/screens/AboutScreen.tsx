import { AboutShowreel } from "../components/AboutShowreel";
import { AboutStory } from "../components/AboutStory";
import { AboutBeliefs } from "../components/AboutBeliefs";
import { AboutCta } from "../components/AboutCta";

// About composition: showreel hero → founder's letter → what we believe → CTA.
export function AboutScreen() {
  return (
    <>
      <AboutShowreel />
      <AboutStory />
      <AboutBeliefs />
      <AboutCta />
    </>
  );
}
