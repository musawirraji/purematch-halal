import { AboutShowreel } from "../components/AboutShowreel";
import { AboutStatement } from "../components/AboutStatement";
import { AboutStory } from "../components/AboutStory";
import { AboutWho } from "../components/AboutWho";
import { AboutFounder } from "../components/AboutFounder";
import { AboutBeliefs } from "../components/AboutBeliefs";
import { AboutPrivacy } from "../components/AboutPrivacy";
import { AboutTestimonials } from "../components/AboutTestimonials";
import { AboutCta } from "../components/AboutCta";

// About composition — the brief's eight sections:
//   showreel hero → 1 statement → 2 story → 3 who this is for → 4 founder
//   → 5 values → 6 privacy (amanah) → 7 testimonials → 8 CTA.
export function AboutScreen() {
  return (
    <>
      <AboutShowreel />
      <AboutStatement />
      <AboutStory />
      <AboutWho />
      <AboutFounder />
      <AboutBeliefs />
      <AboutPrivacy />
      <AboutTestimonials />
      <AboutCta />
    </>
  );
}
