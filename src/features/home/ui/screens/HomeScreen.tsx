import { Stack } from "@shared/components/Stack";
import { Hero } from "../components/Hero";
import { CinematicScene } from "../components/CinematicScene";
import { JourneyPinned } from "@features/services";
import { TrustScene } from "../components/TrustScene";
import { EventsScene } from "../components/EventsScene";
import { AboutIntro } from "../components/AboutIntro";
import { Testimonials } from "../components/Testimonials";
import { CtaBanner } from "../components/CtaBanner";

// Home is pure composition. Sequence: Hero → cinematic (considered + love story)
// → the 6-step Journey → the Trust cinematic (Daylight amber-glow style) → the
// scroll-stacking deck (About, Testimonials, Events, CTA).
export function HomeScreen() {
  return (
    <>
      <Hero />
      <CinematicScene />
      <JourneyPinned />
      <TrustScene />
      <EventsScene />
      <Stack>
        <AboutIntro />
        <Testimonials />
        <CtaBanner />
      </Stack>
    </>
  );
}
