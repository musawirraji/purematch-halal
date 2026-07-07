// Home content — copy spine from the brief. Pure data, no I/O.

export interface Step {
  num: string;
  title: string;
  body: string;
  file: string;
  label: string;
}

export interface TrustFeature {
  icon: "shield" | "rings" | "consent" | "check";
  title: string;
  body: string;
}

export interface Testimonial {
  quote: string;
  names: string;
  meta: string;
}

export const HERO = {
  kicker: "Halal Matchmaking · Lagos & Worldwide",
  title: "The one you'll make your nikkah with.",
  dek: "A boutique, faith-centred matchmaking practice. Human, one-to-one, wali-friendly — from salaam to nikkah. One match at a time. Never a queue.",
  primaryCta: "Begin Your Application",
  secondaryCta: "How it works",
  file: "hero-couple.jpg",
  label: "Silhouetted Muslim couple by an arched window, late Lagos light",
} as const;

export const ABOUT_INTRO = {
  kicker: "Our practice",
  index: "§ 01 — The founder",
  quote: "Matchmaking the way it was always done — one family at a time.",
  body: [
    "Pure Match Halal is not an app and not an algorithm. It is a person who sits with you, learns your intention, and introduces you — with discretion — to someone chosen with care.",
    "You'll speak to a person, not a profile. Every introduction is made with your marriage, your deen, and your dignity at the centre.",
  ],
  cta: "Read the founder's letter",
  signature: "Hoyin Oba",
  role: "Founder · Pure Match Halal",
  principles: ["One match at a time", "Wali-friendly", "Discreet by design"],
  file: "founder-portrait.jpg",
  label: "Founder portrait — Hoyin Oba (placeholder until shoot)",
} as const;

export const HOW_IT_WORKS: Step[] = [
  {
    num: "01",
    title: "Get in touch",
    body: "Begin your application. Tell us who you are and what you are looking for — in confidence.",
    file: "how-01-register.jpg",
    label: "Fountain pen on cream paper, prayer beads, morning light",
  },
  {
    num: "02",
    title: "A one-to-one consultation",
    body: "We speak properly — about your intention, your values, your family. This is a conversation, not a questionnaire.",
    file: "how-02-consult.jpg",
    label: "Video call on a stack of books, warm bokeh living room",
  },
  {
    num: "03",
    title: "One match at a time",
    body: "When there is someone considered right, we introduce you — the wali-friendly, halal way. Never a queue.",
    file: "how-03-match.jpg",
    label: "Two teacups set for two, soft interior",
  },
];

export const TRUST: TrustFeature[] = [
  {
    icon: "shield",
    title: "Mini Profile privacy",
    body: "Your details stay private until there is mutual consent. Discretion is the premium feature — not an afterthought.",
  },
  {
    icon: "check",
    title: "ID verified, never photographed",
    body: "We confirm who you are without putting your face on a public grid.",
  },
  {
    icon: "consent",
    title: "Mutual consent before contact",
    body: "No one is introduced to anyone without both sides — and where you wish, both walis — agreeing first.",
  },
  {
    icon: "rings",
    title: "Data deleted on exit",
    body: "When your search ends, your information leaves with you. Nothing lingers.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We were introduced with such care that our families felt at ease from the very first conversation. Six months later, we made our nikkah.",
    names: "A. & I.",
    meta: "Matched March 2025 · Lagos",
  },
  {
    quote:
      "I was tired of apps that made marriage feel like shopping. Here, someone actually understood what I meant by the right person.",
    names: "S. & Y.",
    meta: "Matched 2024 · London & Abuja",
  },
];

export const EVENT_TEASER = {
  kicker: "HOD Live · in partnership with Half Deen",
  headline: "400 applied. 80 were chosen.",
  body: "A considered, halal gathering — equal men and women, a private location, and not a single speed-dating buzzer. Our next cohort is forming now.",
  cta: "Join the waitlist",
} as const;

export const CTA_BANNER = {
  kicker: "Complete half your deen",
  index: "§ — The invitation",
  headline: "Let's introduce you to the one.",
  body: "One considered introduction at a time — human, wali-friendly, discreet. When you're ready, so are we.",
  cta: "Begin Your Application",
  secondary: "See how it works",
  trust: ["Wali-friendly", "Human-vetted", "Discreet by design"],
} as const;
