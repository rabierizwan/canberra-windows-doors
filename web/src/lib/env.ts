/**
 * Runtime-validated env vars. Throws at startup if a required var is missing,
 * so we never deploy a broken build.
 */
import { z } from "zod";

const schema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  RESEND_API_KEY: z.string().optional(),
  CONTACT_RECIPIENT_EMAIL: z.string().email().default("info@actwindowsdoors.com"),
  CONTACT_FROM_EMAIL: z.string().email().default("onboarding@resend.dev"),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
});

export const env = schema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_RECIPIENT_EMAIL: process.env.CONTACT_RECIPIENT_EMAIL,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
});
