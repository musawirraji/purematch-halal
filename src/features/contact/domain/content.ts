// Contact page content — copy spine from the brief. Pure data, no I/O.

export const CONTACT_PAGE = {
  intro: {
    kicker: "Contact",
    title: "We would love to hear from you.",
    dek: "A question, a concern, or just not sure where to start — reach out. You will always speak to a person.",
  },

  details: {
    kicker: "Get in touch",
    heading: "Reach us directly.",
    items: [
      { icon: "mail" as const, label: "Email", value: "Admin@purematchhalal.com" },
      { icon: "whatsapp" as const, label: "WhatsApp", value: "Message us directly" },
      { icon: "instagram" as const, label: "Instagram", value: "@purematch01" },
    ],
  },

  form: {
    kicker: "Send a message",
    heading: "Send us a message directly.",
    sub: "We respond to every message personally, within 1–2 working days.",
    subjects: [
      "I have a question about the process",
      "I'd like to book a free introductory call",
      "I'm an existing member",
      "Something else",
    ],
    submit: "Send Your Message",
  },

  success: {
    title: "Jazakumullahu khairan — your message has been received. 🤍",
    body: [
      "We will be in touch personally within 1–2 working days.",
      "All responses go to: Admin@purematchhalal.com",
    ],
  },

  freecall: {
    kicker: "No pressure",
    heading: "Not sure if Pure Match Halal is right for you?",
    body: "Before you commit to anything, book a free introductory call. It costs nothing. There is no pressure. Just an honest conversation, at your pace, on your terms.",
    cta: "Book a Free Call on WhatsApp",
  },

  closing: "Wishing you barakah on the path to your nikkah. السلام عليكم 🤍",
} as const;
