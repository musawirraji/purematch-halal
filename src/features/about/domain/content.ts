// About page content. Pure data, no I/O.

export const ABOUT = {
  // Showreel hero (Exo Ape converge/expand): two words pinned left + right, a
  // centre video that starts small; on scroll the words slide inward while the
  // video expands to fill the screen. The two words are the brand-name reveal.
  reel: {
    label: "The practice, in motion",
    wordLeft: "Pure",
    wordRight: "Match",
    video: "about-reel.mp4", // generated brand film (join 6s Grok clips in CapCut)
    poster: "love-couple.jpg", // shown until the video is dropped in
    note: "Some things can't be swiped. Put on your headphones.",
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
  // What we believe — the practice's principles
  believe: {
    kicker: "What we believe",
    heading: "Marriage is worth doing properly.",
    items: [
      { n: "01", title: "One at a time", body: "No queue, no batching — our full attention until there's someone right for you." },
      { n: "02", title: "A person, not an algorithm", body: "Every introduction is made by a human who knows your intention, never a match score." },
      { n: "03", title: "Wali-friendly by default", body: "Your family is welcome from the very first conversation — the way it should be." },
      { n: "04", title: "Discreet, always", body: "No public profiles, no browsing. What you share stays between us." },
    ],
  },
  // Closing CTA
  cta: {
    kicker: "Begin",
    index: "§ — The invitation",
    headline: "Ready when you are.",
    body: "Tell us who you are and what you're looking for, in confidence. We'll take it from there — gently, and at your pace.",
    cta: "Begin Your Application",
    secondary: "See how it works",
    trust: ["Wali-friendly", "Human-vetted", "Discreet by design"],
  },
} as const;
