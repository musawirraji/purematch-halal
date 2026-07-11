import { AboutProse } from "./AboutProse";
import { ABOUT } from "../../domain/content";

// Section 3 — Who This Is For (alt background tone).
export function AboutWho() {
  return <AboutProse data={ABOUT.who} alt />;
}
