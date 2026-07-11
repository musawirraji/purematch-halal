import { Stack } from "@shared/components/Stack";
import { Hero } from "../components/Hero";
import { ProblemSection } from "../components/ProblemSection";
import { Pillars } from "../components/Pillars";
import { JourneyPinned } from "@features/services";
import { CinematicScene } from "../components/CinematicScene";
import { Testimonials } from "../components/Testimonials";
import { FreeCall } from "../components/FreeCall";
import { AboutIntro } from "../components/AboutIntro";
import { CtaBanner } from "../components/CtaBanner";

// Home is pure composition, following the brief's eight sections:
//   1 Hero → 2 The Problem We Solve → 3 The Three Pillars → 4 The Journey
//   (6-step pinned scroller) → 5 Social Proof (love-story cinematic + kind
//   words) → 6 Free-Call banner → 7 About teaser → 8 Final CTA.
// (5–8 live in the scroll-stacking deck.)
export function HomeScreen() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <Pillars />
      <JourneyPinned />
      <CinematicScene />
      <Stack>
        <Testimonials />
        <FreeCall />
        <AboutIntro />
        <CtaBanner />
      </Stack>
    </>
  );
}
