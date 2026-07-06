import { AboutShowreel } from "../components/AboutShowreel";
import { AboutStory } from "../components/AboutStory";

// About is pure composition: the showreel-style hero → the founder's letter.
export function AboutScreen() {
  return (
    <>
      <AboutShowreel />
      <AboutStory />
    </>
  );
}
