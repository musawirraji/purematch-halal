import { z } from "zod";

// Registration form schema. Client-only validation (the form is UI-first; wiring
// a real submission + storage comes later). File checks run in the browser.
export const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5MB
export const MIN_WORDS = 100;

export const wordCount = (s: string): number =>
  s.trim().split(/\s+/).filter(Boolean).length;

const minWords = (s: string) => wordCount(s) >= MIN_WORDS;

// <input type="file"> yields a FileList; validate the first entry.
const fileField = (accept: string[], label: string) =>
  z
    .custom<FileList>()
    .refine((f) => f && f.length > 0, `Please upload your ${label}.`)
    .refine((f) => !f?.[0] || f[0].size <= MAX_FILE_BYTES, "File must be 5MB or smaller.")
    .refine((f) => !f?.[0] || accept.includes(f[0].type), "Sorry, that file type isn't supported.");

export const registerSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  lastName: z.string().min(1, "Please enter your last name."),
  email: z.string().min(1, "Please enter your email.").email("Please enter a valid email address."),
  whatsapp: z.string().min(6, "Please enter your WhatsApp number with country code."),
  country: z.string().min(1, "Please enter your country of residence."),
  dob: z.string().min(1, "Please enter your date of birth."),
  gender: z.string().min(1, "Please select."),
  marital: z.string().min(1, "Please select."),
  about: z.string().refine(minWords, `Please write at least ${MIN_WORDS} words.`),
  looking: z.string().refine(minWords, `Please write at least ${MIN_WORDS} words.`),
  preferences: z.string().optional(),
  membership: z.string().min(1, "Please choose your membership."),
  photo: fileField(["image/jpeg", "image/png"], "photograph"),
  receipt: fileField(["image/jpeg", "image/png", "application/pdf"], "payment receipt"),
  agree: z.boolean().refine((v) => v === true, "Please accept the terms to continue."),
});

export type RegisterValues = z.infer<typeof registerSchema>;

// The fields validated at each step (so "Next" only checks the current step).
export const STEP_FIELDS: (keyof RegisterValues)[][] = [
  ["firstName", "lastName", "email", "whatsapp", "country", "dob", "gender", "marital"],
  ["about", "looking", "preferences"],
  ["membership", "photo", "receipt", "agree"],
];
