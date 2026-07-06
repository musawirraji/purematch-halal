// About page content. Pure data, no I/O.

export const ABOUT = {
  // Showreel-style hero (adapted from Exo Ape): oversized line-mask title + media
  reel: {
    label: "The practice · est. 2019",
    lines: ["Not an app.", "A person."],
    body: "Pure Match Halal is a boutique, faith-centred matchmaking practice — one considered introduction at a time. Human, wali-friendly, and discreet from the very first salaam.",
    media: "love-couple.jpg",
    mediaAlt: "A couple at golden hour, seen from behind",
    scrollHint: "Read her letter",
  },
  // Founder's letter — editorial two-column with a sticky portrait
  story: {
    kicker: "The founder's letter",
    heading: "Matchmaking the way it was always done.",
    body: [
      "I started Pure Match Halal because I watched good people — serious about their deen — worn down by apps that treat marriage like a game of chance.",
      "So we do the opposite. No swiping, no queue, no algorithm. I sit with you, learn your intention, and introduce you to one person chosen with care — with your wali welcome from the very first conversation.",
      "It is slower. It is meant to be. Because the one you'll make your nikkah with is worth far more than a match rate.",
    ],
    signature: "Hoyin Oba",
    role: "Founder · Pure Match Halal",
    file: "founder-portrait.jpg",
    label: "Founder portrait — Hoyin Oba",
  },
} as const;
