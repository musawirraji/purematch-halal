import { z } from "zod";

// Contact form schema. Client-only validation for now (UI-first).
export const contactSchema = z.object({
  name: z.string().min(1, "Please enter your full name."),
  email: z.string().min(1, "Please enter your email.").email("Please enter a valid email address."),
  whatsapp: z.string().optional(),
  subject: z.string().min(1, "Please choose a subject."),
  message: z.string().min(10, "Please write your message."),
});

export type ContactValues = z.infer<typeof contactSchema>;
