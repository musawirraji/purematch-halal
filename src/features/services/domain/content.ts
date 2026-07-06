// Services content — the 6-step journey. Pure data, no I/O.

export interface JourneyStep {
  num: string;
  title: string;
  body: string;
  file: string;
  /** step 6 gets the dua treatment */
  dua?: boolean;
}

export const SERVICES_INTRO = {
  kicker: "The journey",
  title: "A considered journey, not an endless swipe.",
  dek: "Six steps, taken with care — from your first application to the words we most hope to say: matchmade in heaven, in sha Allah.",
} as const;

export const JOURNEY: JourneyStep[] = [
  {
    num: "01",
    title: "Registration",
    body: "Begin your application in confidence. Tell us who you are, your intention, and what matters to you in a spouse.",
    file: "journey-1.jpg",
  },
  {
    num: "02",
    title: "Initial contact",
    body: "We reach out personally — a warm first conversation, not an automated reply. You speak to a person from the very start.",
    file: "journey-2.jpg",
  },
  {
    num: "03",
    title: "Finding your match",
    body: "We search our considered network by hand, weighing deen, values and family — never an algorithm, never a queue.",
    file: "journey-3.jpg",
  },
  {
    num: "04",
    title: "One-to-one consultation",
    body: "We sit with you properly — about intention, expectations and your wali. This is a conversation, not a questionnaire.",
    file: "journey-4.jpg",
  },
  {
    num: "05",
    title: "Keeping in touch",
    body: "When there is mutual consent we introduce you — the wali-friendly, halal way — and stay close through every step.",
    file: "journey-5.jpg",
  },
  {
    num: "06",
    title: "Matchmade in heaven",
    body: "In sha Allah, a nikkah made with barakah. Ameen.",
    file: "journey-6.jpg",
    dua: true,
  },
];

export const SERVICES_CTA = {
  kicker: "Complete half your deen",
  headline: "Begin your application.",
  body: "One considered introduction at a time. Never a queue. Begin the journey to your nikkah.",
  cta: "Begin Your Application",
} as const;
