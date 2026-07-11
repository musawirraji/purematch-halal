import { AboutProse } from "./AboutProse";
import { ABOUT } from "../../domain/content";

// Section 2 — the Story.
export function AboutStory() {
  return <AboutProse data={ABOUT.story} />;
}
