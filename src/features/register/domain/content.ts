// Register page content — copy spine from the brief. Pure data, no I/O.

export const REGISTER_PAGE = {
  intro: {
    kicker: "Begin Your Application",
    title: "Begin your application.",
    dek: "The first step toward finding your spouse, the halal way. Take it with intention.",
  },

  before: {
    kicker: "Before You Begin",
    heading: "A few things to know before you apply.",
    items: [
      { title: "Make your payment first", body: "Your registration is only complete once your receipt is uploaded. Payment details are directly below." },
      { title: "Be honest", body: "The more truthfully you fill in this form, the better we can serve you. Everything shared is kept in the strictest confidence." },
      { title: "What happens next", body: "Once submitted, we will review your application and reach out to you personally within 2–3 working days, in sha Allah." },
    ],
  },

  pay: {
    kicker: "Step 1",
    heading: "Make your payment.",
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
        lines: [{ bank: "Revolut", detail: "Sort Code: 04-29-09 · Account: 03328656", name: "Hoyin Oba", alt: false }],
      },
    ],
    prices: [
      { region: "Nigeria", amount: "₦100,000" },
      { region: "Diaspora (UK)", amount: "£100" },
    ],
    note: "Keep your receipt — you will upload it in Step 3 of the form below. Diaspora members: pay in GBP only.",
  },

  form: {
    kicker: "Step 2",
    heading: "Complete your application.",
    stepLabels: ["The Basics", "About You & What You're Looking For", "Your Documents & Payment"],
    stepIntros: [
      "Let us start with the essentials.",
      "This is the most important part. Be as open and honest as you can — everything shared is held in the strictest confidence.",
      "Almost done. Please upload your photo and payment receipt to complete your application.",
    ],
    genders: ["Male", "Female"],
    maritals: ["Single", "Divorced", "Widowed"],
    memberships: [
      { value: "Nigeria", label: "Nigeria — ₦100,000" },
      { value: "Diaspora", label: "Diaspora UK — £100" },
    ],
    submit: "Submit My Application",
  },

  success: {
    title: "Bismillah — your application has been received. 🤍",
    body: [
      "Jazakumullahu khairan for trusting Pure Match Halal with this step. We will review your application and reach out to you personally within 2–3 working days, in sha Allah.",
      "Please keep your WhatsApp open so we can reach you easily. We look forward to speaking with you.",
      "May Allah make this journey easy and full of barakah for you. آمين",
    ],
  },
} as const;
