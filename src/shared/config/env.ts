import { z } from "zod";

// Public (browser-safe) env. Parsed defensively: a missing var warns and falls
// back to a sensible default — it never crashes the build, so the shell renders
// during setup. Server secrets (Supabase service role, Resend key) are added to
// a separate server-only schema when the backend is wired; never read here.
const publicSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://www.purematchhalal.com"),
});

const parsed = publicSchema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

if (!parsed.success) {
  console.warn(
    "[env] Public env failed validation; using defaults.",
    parsed.error.flatten().fieldErrors
  );
}

export const env = parsed.success
  ? parsed.data
  : publicSchema.parse({});
