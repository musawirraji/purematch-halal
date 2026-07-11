// About page content — copy spine from the brief. Pure data, no I/O.

export interface Belief {
  n: string;
  title: string;
  body: string;
}
export interface Story {
  quote: string;
  names: string;
  meta: string;
}

export const ABOUT = {
  // Showreel hero (Exo Ape converge/expand): two words pinned left + right, a
  // centre video that starts small; on scroll the words slide inward while the
  // video expands to fill the screen. The two words are the brand-name reveal.
  reel: {
    label: "The practice, in motion",
    wordLeft: "Pure",
    wordRight: "Match",
    video: "about-reel.mp4",
    poster: "love-couple.jpg",
    note: "Some things can't be swiped. Put on your headphones.",
  },

  // Section 1 — Hero statement
  hero: {
    headline: "We exist because the right option did not.",
    sub: "Pure Match Halal is not a pivot. It is the answer to a gap that should never have existed — and a commitment to filling it with something worthy of the Muslims who need it.",
  },

  // Section 2 — The Story
  story: {
    kicker: "Our Story",
    heading: "It started with observation. It became a calling.",
    body: [
      "Hoyin Oba did not build Pure Match Halal out of personal frustration. She built it out of professional clarity.",
      "Working closely within the Muslim community, she watched a pattern repeat itself: serious, faith-driven Muslims who genuinely wanted to get married, cycling through options that consistently let them down. Apps that felt misaligned with their values. Informal community matchmaking that began with enthusiasm and ended with silence. A process that rarely felt dignified, for something that deserved to be treated with the utmost care.",
      "The gap was undeniable. A structured, trustworthy, fully halal matchmaking service — one that treated the search for a spouse with the seriousness it deserved — simply did not exist the way it should.",
      "So she built one.",
      "Pure Match Halal launched with a clear and uncompromising vision: to give Muslims a matchmaking experience that felt worthy of the commitment they were making. Personal. Private. Purposeful. Rooted in faith. Backed by real human attention.",
      "That vision has not changed.",
    ],
  },

  // Section 3 — Who This Is For
  who: {
    kicker: "Our Members",
    heading: "For every Muslim who is serious about marriage.",
    body: [
      "Pure Match Halal is not for everyone, and we mean that as a promise, not a limitation.",
      "We are for the Muslim who is genuinely ready. Who takes their deen seriously and expects the process of finding a spouse to reflect that. Who is tired of options that feel like compromises and is willing to invest in something that is done properly.",
      "We are for the single professional navigating a community where introductions are rare. For the divorcee who deserves a fresh start without judgment. For the widower who is ready to love again and needs a process that treats their history with respect.",
      "Young or older. Anywhere in the world. Whatever your story, you are welcome here — and you will be treated with equal dignity, equal attention, and equal care.",
    ],
  },

  // Section 4 — Meet the Founder (portrait + letter)
  founder: {
    kicker: "The Founder",
    heading: "Meet Hoyin Oba.",
    body: [
      "Hoyin Oba is the founder of Pure Match Halal and the person behind every consultation, every match, and every member's journey through this process.",
      "She brings to this work not just professional experience, but a deep personal commitment to the Muslim community she serves. She understands what is at stake when someone trusts a matchmaking service with something as sacred as their search for a spouse — and she takes that responsibility seriously.",
      "At Pure Match Halal, you will always know who you are speaking to. You will always be heard. And you will always be treated as the individual you are.",
    ],
    signature: "Hoyin Oba",
    role: "Founder · Pure Match Halal",
    file: "founder-portrait.jpg",
    label: "Founder portrait — Hoyin Oba",
  },

  // Section 5 — What We Believe (five values)
  believe: {
    kicker: "Our Values",
    heading: "The beliefs that shape everything we do.",
    items: [
      { n: "01", title: "Marriage is half of our deen", body: "We do not treat it casually. Every decision we make — from how we conduct consultations to how we make introductions — reflects the weight and beauty of what marriage means in Islam." },
      { n: "02", title: "Everyone deserves dignity", body: "Regardless of age, background, or marital history, every member is treated with the same respect. There is no judgment here. Only care." },
      { n: "03", title: "There is someone for everyone", body: "We believe this fully. Whether you are single for the first time, divorced, or widowed, your past does not determine your future. We are here to help you find it." },
      { n: "04", title: "Quality over quantity, always", body: "We will never rush an introduction for the sake of appearing busy. We would rather take the time to get it right than move fast and get it wrong." },
      { n: "05", title: "People, not profiles", body: "You are not a data point. You are a person with a story, a faith, and a future. We treat you accordingly." },
    ] as Belief[],
  },

  // Section 6 — Our Promise on Privacy (an amanah)
  privacy: {
    kicker: "Your Privacy",
    heading: "What you share with us is an amanah. We treat it as one.",
    body: [
      "We understand that trusting a matchmaking service with your photograph, your personal details, and your intentions is not a small thing. It requires a level of trust that is not easily given, and we do not take it lightly.",
      "Your information is never public. Your photograph is never displayed to anyone without your knowledge. Your Mini Profile — a careful, considered summary written and approved by you — is the only thing shared with a potential match. When you leave Pure Match Halal, your data is permanently deleted.",
      "No exceptions. No grey areas. Your privacy is a foundation, not a feature.",
    ],
  },

  // Section 7 — Testimonials (same journeys as the homepage)
  testimonials: {
    kicker: "Real Stories",
    heading: "The journeys we have had the honour of walking alongside.",
    items: [
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
    ] as Story[],
  },

  // Section 8 — Closing CTA
  cta: {
    kicker: "Begin",
    index: "§ — The invitation",
    headline: "If this feels like what you have been looking for, it probably is.",
    body: "Take the first step. We will take care of the rest.",
    cta: "Begin Your Application",
    secondary: "Book a Free Call First",
    trust: ["Wali-friendly", "Human-vetted", "Discreet by design"],
  },
} as const;
