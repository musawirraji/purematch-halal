// FAQs content — copy spine from the brief. Pure data, no I/O.

export interface Faq {
  q: string;
  a: string[];
}

export const FAQS_PAGE = {
  intro: {
    kicker: "FAQs",
    title: "Questions we are glad you are asking.",
    dek: "Honest answers, nothing hidden. If something is not here, we are a message away.",
  },
  items: [
    {
      q: "Is Pure Match Halal an app?",
      a: [
        "No — and that is intentional. Pure Match Halal is a personal matchmaking practice. Every introduction is made by a human being who has sat with you, learned your story, and chosen with care. There is no swiping, no public profile, no algorithm.",
      ],
    },
    {
      q: "Who is this service for?",
      a: [
        "Any Muslim who is serious about marriage — whether you are single for the first time, divorced, or widowed. We serve members worldwide. Age, background, and marital history do not disqualify you. Genuine intention does.",
      ],
    },
    {
      q: "Is the process completely halal?",
      a: [
        "Yes. There are no public profiles, no unsupervised browsing, and no contact exchanged without mutual consent. Your wali is welcome and accommodated, from the very first conversation. The entire process is structured around Islamic values — not adapted to fit them.",
      ],
    },
    {
      q: "Is using a matchmaking service permissible in Islam?",
      a: [
        "Yes. Seeking a spouse through a trusted intermediary is not only permissible — it has a long and honoured history in Islamic tradition. The role of the matchmaker (khātib) in Muslim cultures goes back centuries. Pure Match Halal simply brings that tradition into the modern world with structure, safety, and sincerity.",
      ],
    },
    {
      q: "How much does membership cost?",
      a: [
        "Nigeria — ₦100,000 for a 3-month membership; ₦50,000 to renew per 3 months.",
        "Diaspora (UK) — £100 for a 3-month membership; £50 to renew per 3 months.",
        "The fee is non-refundable once your registration is processed.",
      ],
    },
    {
      q: "Can I speak to someone before I pay?",
      a: [
        "Yes — and we encourage it. We offer a free introductory call for anyone who wants to understand the process before committing. No cost, no pressure, no obligation.",
        "Reach us on WhatsApp, or at Admin@purematchhalal.com.",
      ],
    },
    {
      q: "How do I pay?",
      a: [
        "Nigeria: Access Bank — 08016303134 · Hoyin Oba. Sterling Bank — 0090726856 · Hoyin Oba (alternative).",
        "Diaspora (UK): Revolut — Sort Code 04-29-09 · Account 03328656 · Hoyin Oba.",
        "Keep your receipt; you will upload it during registration. Diaspora members must pay in GBP — Naira payments will be declined and are non-refundable.",
      ],
    },
    {
      q: "How many matches will I receive?",
      a: [
        "As many as it takes — one at a time. There is no cap on introductions within your active 3-month membership. If a match does not work out, we learn from it, adjust, and try again, at no additional cost.",
      ],
    },
    {
      q: "What is a Mini Profile?",
      a: [
        "A Mini Profile is a short, carefully written summary of who you are — your values, personality, faith, and what you are looking for — without sensitive personal details. You read it, approve it, and only then does anyone else see it.",
      ],
    },
    {
      q: "How does identity verification work?",
      a: [
        "During your consultation, we ask you to briefly show your ID on the video call. We do not photograph it, store it, or share it. It is seen once, to protect the safety of every member in our practice.",
      ],
    },
    {
      q: "What happens if a match does not work out?",
      a: [
        "We ask both sides for brief, honest feedback so we can refine our search. Then we introduce another match, at no extra cost, within your active membership period. This continues for as long as your membership is active.",
      ],
    },
    {
      q: "Can I leave the service at any time?",
      a: [
        "Yes. At any point, you are free to leave. Your personal information and photographs will be permanently deleted. We may ask for optional feedback, but there is absolutely no obligation.",
      ],
    },
  ] as Faq[],
  cta: {
    kicker: "Still here?",
    heading: "Still have a question?",
    body: "Ask us directly — you will always get a real answer from a real person.",
    primary: "WhatsApp Us",
    secondary: "Send an Email",
  },
} as const;
