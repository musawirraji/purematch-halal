// Site-wide constants. Contact details, socials, brand copy anchors.
// Placeholder values (phone, some stats) are flagged — swap when Oba confirms.

export const SITE = {
  name: "Pure Match Halal",
  shortName: "Pure Match",
  tagline: "Halal, from salaam to nikkah.",
  description:
    "A boutique faith-centred matchmaking practice. Human, one-to-one, wali-friendly — for Muslims seeking marriage in Lagos and across the diaspora.",
  location: "Lagos & Worldwide",
  email: "Admin@purematchhalal.com",
  // TODO(oba): WhatsApp number not yet confirmed. `whatsapp` points at wa.me
  // once the number lands; until then CTAs fall back to email where sensible.
  phone: "",
  whatsappConfirmed: false,
  whatsapp: "https://wa.me/",
  instagram: "https://www.instagram.com/purematch01",
  instagramHandle: "@purematch01",
  hours: [
    { day: "Mon – Fri", time: "9:00 – 18:00 WAT" },
    { day: "Saturday", time: "10:00 – 16:00 WAT" },
    { day: "Sunday", time: "Closed" },
  ],
} as const;

export const STATS = [
  { value: 59, suffix: "%", label: "Event success rate", note: "HOD Live" },
  { value: 5, suffix: "", label: "Countries served" },
  { value: 1, suffix: "", label: "Match at a time", prefix: "" },
  { value: 100, suffix: "%", label: "Human-vetted" },
] as const;

export const MEMBERSHIP = {
  diaspora: { amount: "£100", region: "Diaspora" },
  nigeria: { amount: "₦100,000", region: "Nigeria" },
  termMonths: 3,
} as const;
