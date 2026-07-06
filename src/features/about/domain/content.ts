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
} as const;
