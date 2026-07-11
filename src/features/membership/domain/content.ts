// Membership (How It Works + Pricing) content — copy spine from the brief.
// Pure data, no I/O. Bank details are shown publicly on purpose (members pay by
// transfer) and mirror the register page.

export const MEMBERSHIP_PAGE = {
  intro: {
    kicker: "How It Works",
    title: "No surprises. No small print. Just the full picture.",
    dek: "Everything you need to know about the Pure Match Halal process, laid out honestly, upfront.",
  },

  what: {
    kicker: "What This Is",
    heading: "This is not an app. This is a practice.",
    body: [
      "Pure Match Halal is a personal, faith-centred matchmaking service. That means a real person sits with you, learns your story, and searches for your match by hand — weighing deen, character, values, and family with the seriousness this decision deserves.",
      "There is no swiping. No public profile. No algorithm deciding the most important relationship of your life.",
      "What there is, is someone who takes your search for a spouse as seriously as you do. Alhamdulillah.",
    ],
  },

  process: {
    kicker: "The Process",
    heading: "How it works, step by step.",
    steps: [
      { n: "01", title: "You Register", body: "Complete your registration form with your personal details, a photograph, and your payment receipt. Once submitted, your journey with Pure Match Halal begins." },
      { n: "02", title: "We Review & Reach Out", body: "We review every application personally and get in touch within 2–3 working days. You will speak to a real person, not receive an automated reply." },
      { n: "03", title: "Your 1-2-1 Consultation", body: "We schedule a video call on a day that works for you. This is where we really get to know you — your deen, your values, your expectations, what you are looking for, and how your wali will be involved. We will also ask you to briefly show your means of identification on the call. We do not photograph it. It is shown once, for the safety and peace of mind of all our members." },
      { n: "04", title: "Your Mini Profile", body: "Based on your form and consultation, we write your Mini Profile — a considered, respectful summary of who you are, without sensitive personal details. You review and approve it before it is ever shown to anyone." },
      { n: "05", title: "We Search", body: "We go to work, searching our network by hand — weighing deen, values, personality, life stage, and family. This is not a database query. It is a considered, human search." },
      { n: "06", title: "The Introduction", body: "When we find a potential match, we share both Mini Profiles — with both sides' knowledge and consent. If both agree to move forward, contact is exchanged. Your wali is involved from this point in whatever way you have agreed. From here, you take it at your own pace, with tawakkul and Allah's guidance." },
      { n: "07", title: "Ongoing Support", body: "We check in every week. We are a phone call or email away. If a match does not work out, we gather feedback, refine our search, and introduce another — at no extra cost, as many times as needed within your active membership. You are never on your own." },
    ],
  },

  pricing: {
    kicker: "Pricing",
    heading: "No hidden fees.",
    columns: ["", "Nigeria", "Diaspora (UK)"],
    rows: [
      { label: "3-month membership", nigeria: "₦100,000", diaspora: "£100" },
      { label: "Renewal (per 3 months)", nigeria: "₦50,000", diaspora: "£50" },
    ],
    includesTitle: "What your membership includes",
    includes: [
      "Full 1-2-1 consultation",
      "Identity verification",
      "Your Mini Profile — written, reviewed, and approved by you",
      "Unlimited match introductions within your 3-month membership",
      "Weekly check-ins throughout the process",
      "Ongoing support — a real person, always available",
    ],
    note: "The membership fee is non-refundable once your registration is processed. This reflects the individual time and care invested in your journey from day one. We do not take on members we are not committed to, and we ask the same in return.",
  },

  pay: {
    kicker: "How to Pay",
    heading: "How to make your payment.",
    accounts: [
      {
        region: "Nigeria",
        lines: [
          { bank: "Access Bank", detail: "Account Number: 08016303134", name: "Hoyin Oba", alt: false },
          { bank: "Sterling Bank", detail: "Account Number: 0090726856", name: "Hoyin Oba", alt: true },
        ],
      },
      {
        region: "Diaspora (UK)",
        lines: [
          { bank: "Revolut", detail: "Sort Code: 04-29-09 · Account: 03328656", name: "Hoyin Oba", alt: false },
        ],
      },
    ],
    notes: [
      "Keep your payment receipt — you will need to upload it as part of your registration form.",
      "Diaspora members: payment must be made in GBP. Naira payments from diaspora accounts will be declined and are non-refundable if rejected.",
    ],
  },

  freecall: {
    kicker: "No payment · No pressure",
    heading: "Take your time. We mean that.",
    body: "We offer a free introductory call for anyone who wants to ask questions, understand the process, or simply figure out if Pure Match Halal feels right for them — before spending a penny. No pressure. No pitch. Just an honest conversation.",
    primary: "Book a Free Call",
    secondary: "Send Us a Message",
  },

  standards: {
    kicker: "Our Standards",
    heading: "What we expect. What you can expect.",
    groups: [
      {
        title: "From our members",
        body: [
          "We ask for respectful, dignified behaviour towards other members and our team at all times. Abusive behaviour will not be tolerated and may result in immediate removal without refund.",
          "We also ask that you inform us of any changes to your circumstances, contact details, life situation, and preferences during the process. Accurate information is what makes a good match possible.",
        ],
      },
      {
        title: "From us",
        body: [
          "We commit to treating every member with equal care and discretion. To be honest with you throughout the process. To never rush an introduction. And to staying close, every step of the way.",
        ],
      },
    ],
  },

  privacy: {
    kicker: "Privacy At a Glance",
    heading: "Your privacy, in short.",
    points: [
      "Your details are never public",
      "Your Mini Profile is approved by you before anyone sees it",
      "No contact is exchanged without mutual consent",
      "Your wali is welcome at every stage",
      "Your data is permanently deleted when you leave",
    ],
    link: "Read the full privacy section",
  },

  cta: {
    kicker: "Ready to begin",
    index: "§ — The invitation",
    headline: "Ready to begin?",
    body: "One considered introduction at a time — human, wali-friendly, discreet. When you're ready, so are we.",
    cta: "Begin Your Application",
    secondary: "I Still Have Questions",
    trust: ["Wali-friendly", "Human-vetted", "Discreet by design"],
  },
} as const;
