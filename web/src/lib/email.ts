/**
 * Thin wrapper around Resend. Used by the contact + quote API routes.
 * If RESEND_API_KEY isn't set yet (dev), this no-ops and logs to console.
 */
import { Resend } from "resend";
import { env } from "./env";

const client = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

export type EmailPayload = {
  subject: string;
  /** Plain text body */
  text: string;
  /** Optional HTML body */
  html?: string;
};

export async function sendEmail(payload: EmailPayload) {
  if (!client) {
    console.warn("[email] RESEND_API_KEY not set — skipping send. Payload:", payload);
    return { skipped: true as const };
  }
  return client.emails.send({
    from: env.CONTACT_FROM_EMAIL,
    to: env.CONTACT_RECIPIENT_EMAIL,
    subject: payload.subject,
    text: payload.text,
    html: payload.html,
  });
}
