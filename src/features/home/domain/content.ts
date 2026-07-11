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

export interface Pillar {
  num: string;
  title: string;
  body: string;
}

// -----------------------------------------------------------------------------
// Section 1 — Hero
// -----------------------------------------------------------------------------
export const HERO = {
  kicker: "Halal Matchmaking · Lagos & Worldwide",
  // Split around the centred portrait plate, then a subline beneath.
  titleA: "From salaam",
  titleB: "to nikkah.",
  subline: "Let’s help you find your partner, the right way.",
  dek: "The Prophet ﷺ said: “There is nothing like marriage for two who love each other.” Pure Match Halal exists to make that journey possible — with dignity, with faith, and with the care it deserves.",
  primaryCta: "Begin Your Application",
  secondaryCta: "See How It Works",
  file: "hero-couple.jpg",
  label: "Silhouetted Muslim couple by an arched window, late Lagos light",
  trust: ["Wali-friendly", "Human-vetted", "Discreet by design"],
} as const;

// -----------------------------------------------------------------------------
// Section 2 — The Problem We Solve
// -----------------------------------------------------------------------------
export const PROBLEM = {
  label: "Why Pure Match Halal Exists",
  headline: "The halal options were not good enough. So we built something better.",
  body: [
    "For too many Muslims, the search for a spouse has become one of the most quietly painful parts of adult life. The options feel wrong: apps that blur Islamic boundaries, informal matchmaking that stalls before it starts, or putting yourself forward in ways that feel beneath the sanctity of what you are seeking.",
    "Pure Match Halal was built for the Muslims who refused to accept that. The ones who know their worth, take their deen seriously, and believe that the path to nikkah should feel as intentional as the commitment itself.",
  ],
  close: "This is that path. Alhamdulillah.",
} as const;

// -----------------------------------------------------------------------------
// Section 3 — The Three Pillars
// -----------------------------------------------------------------------------
export const PILLARS_INTRO = {
  label: "What Makes Us Different",
  headline: "Personal. Private. Purposeful.",
} as const;

export const PILLARS: Pillar[] = [
  {
    num: "01",
    title: "Personal",
    body: "Every member has a real 1-2-1 consultation with a real person. We learn who you are — your faith, your values, your story, your expectations — before we ever begin searching. You are not a profile. You are a person created by Allah with a unique story, and we treat you as such.",
  },
  {
    num: "02",
    title: "Private",
    body: "Your photograph, your details, your intentions — never on public display. Nothing is shared without your knowledge and consent. Your Mini Profile is approved by you before anyone sees it. When you leave, everything is deleted.",
  },
  {
    num: "03",
    title: "Purposeful",
    body: "We introduce one match at a time. Not a list. Not a batch. One carefully considered introduction, with our full attention, so that every connection is given a real chance to grow.",
  },
];

// -----------------------------------------------------------------------------
// Section 5 — Social Proof (heading for the testimonials block)
// -----------------------------------------------------------------------------
export const SOCIAL = {
  kicker: "Real Stories",
  // Kept short so the char-flip heading + quote cards fit inside one stack card
  // (a long headline pushed the quotes below the fold and the next card covered
  // them). The fuller sentiment lives in the sub-line.
  head: "Journeys we’ve walked.",
  sub: "Some we’ve had the honour of walking alongside.",
} as const;

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We never expected to find each other this way, but Pure Match Halal made the process feel safe, respected, and truly halal. We are grateful every single day. Alhamdulillah.",
    names: "A. & I.",
    meta: "Matched March 2025",
  },
  {
    quote:
      "From the very first conversation, I knew this was different. There was no pressure, no awkwardness — just a thoughtful, careful process that led me to my husband.",
    names: "S. & Y.",
    meta: "Matched 2024",
  },
];

// -----------------------------------------------------------------------------
// Section 6 — Free Call Banner
// -----------------------------------------------------------------------------
export const FREE_CALL = {
  kicker: "No payment · No pressure",
  headline: "Not ready to commit? That is completely fine.",
  body: "We offer introductory calls with no payment, no pressure, and no obligation. Just an honest conversation about how Pure Match Halal works — so that you can make the right decision for yourself, in your own time.",
  primaryCta: "Book a Free Call",
  secondaryCta: "Send Us a Message",
} as const;

// -----------------------------------------------------------------------------
// Section 7 — About Teaser
// -----------------------------------------------------------------------------
export const ABOUT_INTRO = {
  kicker: "Who We Are",
  index: "§ 01 — The founder",
  quote: "Built by someone who saw the gap and refused to ignore it.",
  body: [
    "Pure Match Halal was founded by Hoyin Oba, a Muslim woman who spent years watching serious, marriage-ready Muslims cycle through options that consistently let them down.",
    "She built the service that should have already existed. Personal. Dignified. Fully halal. Rooted in genuine care for the Muslim community she serves.",
  ],
  cta: "Read Our Story",
  signature: "Hoyin Oba",
  role: "Founder · Pure Match Halal",
  principles: ["One match at a time", "Wali-friendly", "Discreet by design"],
  file: "founder-portrait.jpg",
  label: "Founder portrait — Hoyin Oba",
} as const;

// -----------------------------------------------------------------------------
// Section 8 — Final CTA
// -----------------------------------------------------------------------------
export const CTA_BANNER = {
  kicker: "Your nikkah starts here",
  index: "§ — The invitation",
  headline: "Your nikkah starts with one step. Are you ready to take it?",
  body: "Allah does not change the condition of a people until they change what is within themselves. You have already decided you are ready — let us help you move forward.",
  cta: "Begin Your Application",
  secondary: "Talk to Us First",
  trust: ["Wali-friendly", "Human-vetted", "Discreet by design"],
} as const;

// -----------------------------------------------------------------------------
// Retained for the standalone privacy cinematic (TrustScene) — kept out of the
// home composition for now; reusable on /membership + /about privacy sections.
// -----------------------------------------------------------------------------
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
