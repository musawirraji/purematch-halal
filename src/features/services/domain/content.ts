// Services content — the 6-step journey. Pure data, no I/O.
// Order + copy follow the brief's homepage "Journey" sequence.

export interface JourneyStep {
  num: string;
  title: string;
  body: string;
  file: string;
}

export const SERVICES_INTRO = {
  kicker: "The Process",
  title: "Few steps. One outcome, in sha Allah.",
  dek: "A considered journey, taken with care — from your first application to a nikkah made with barakah.",
} as const;

export const JOURNEY: JourneyStep[] = [
  {
    num: "01",
    title: "You Apply",
    body: "Fill out your registration form and submit your payment. This is the first step in a process that takes your search for a spouse seriously.",
    file: "journey-1.jpg",
  },
  {
    num: "02",
    title: "We Reach Out",
    body: "We review your application and contact you personally for a warm, unhurried conversation. Not an automated email. A real person, from day one.",
    file: "journey-2.jpg",
  },
  {
    num: "03",
    title: "Your Consultation",
    body: "We sit with you properly — a 1-2-1 video call where we get to know your deen, your values, your expectations, and your wali. This is the foundation on which everything else is built.",
    file: "journey-4.jpg",
  },
  {
    num: "04",
    title: "We Search",
    body: "We go to work. By hand, not algorithm — searching our network for someone whose faith, values, personality, and family feel like a genuine match for yours.",
    file: "journey-3.jpg",
  },
  {
    num: "05",
    title: "The Introduction",
    body: "We share both Mini Profiles. If both sides are willing to move forward, contact details are exchanged — respectfully, with wali involvement, the halal way.",
    file: "journey-5.jpg",
  },
  {
    num: "06",
    title: "We Stay Close",
    body: "We check in every week. If it does not work out, we go again — at no extra cost, as many times as it takes within your membership. You are never left on your own.",
    file: "journey-6.jpg",
  },
];

export const SERVICES_CTA = {
  label: "See the Full Process & Pricing",
} as const;
