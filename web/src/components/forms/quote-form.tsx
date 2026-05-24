"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Quote-request form. Submits to Web3Forms via fetch (no API route required
 * on our side). Access key lives in NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY — when
 * the env var is missing the form falls back to a "please email us" message
 * instead of silently failing.
 */

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const schema = z.object({
  name: z.string().min(2, "Please tell us your name").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number").max(20),
  message: z
    .string()
    .min(10, "Tell us a bit about your project (at least 10 characters)")
    .max(2000, "Message is too long — please trim under 2000 characters"),
  // Honeypot — bots fill anything, humans never see this field.
  botcheck: z.string().optional(),
});

type FormData = z.infer<typeof schema>;
type SubmitStatus = "idle" | "sending" | "success" | "error";

export function QuoteForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Bot caught — pretend success and bail.
    if (data.botcheck) {
      setStatus("success");
      reset();
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMsg(
        `Form isn't configured yet — please email ${site.contact.email} or call ${site.contact.phonePrimary} and we'll come back to you the same business day.`,
      );
      return;
    }

    setStatus("sending");
    setErrorMsg(null);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New quote request — ${data.name}`,
          from_name: "Canberra Windows & Doors website",
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
        setErrorMsg(
          result.message ||
            `Couldn't send the form. Please email ${site.contact.email} directly.`,
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        `Couldn't reach the form service. Check your connection or email ${site.contact.email} directly.`,
      );
    }
  };

  // ── Field styling — hairline bottom border for the editorial brand voice
  const fieldShell = cn(
    "block w-full bg-transparent text-green text-base",
    "border-0 border-b border-rule",
    "px-0 py-3",
    "placeholder:text-green/35",
    "focus:border-bronze focus:outline-none focus:ring-0",
    "transition-colors duration-200 ease-out",
  );

  const labelShell = "block eyebrow eyebrow-muted not-italic mb-1";
  const errorShell = "mt-1.5 text-xs text-bronze-deep";

  // ── Success state — replaces the form once submitted
  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border-t border-bronze pt-8"
      >
        <span className="eyebrow text-bronze">Received</span>
        <h2 className="mt-4 font-display text-3xl md:text-4xl text-green leading-snug">
          Thanks — we&apos;ll be in touch shortly.
        </h2>
        <p className="mt-4 text-green/75 leading-relaxed max-w-md">
          We aim to respond within one business day. If your project is
          time-sensitive, feel free to also call us on{" "}
          <a
            href={site.contact.phonePrimaryHref}
            className="text-bronze hover:underline"
          >
            {site.contact.phonePrimary}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 eyebrow text-green hover:text-bronze transition-colors inline-flex items-center gap-2"
        >
          Send another <span aria-hidden>→</span>
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      {/* Honeypot — visually hidden, only bots see it */}
      <div className="hidden" aria-hidden>
        <label>
          Don&apos;t fill this out:
          <input type="text" tabIndex={-1} autoComplete="off" {...register("botcheck")} />
        </label>
      </div>

      {/* Name + Phone — side by side on desktop */}
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
        <div>
          <label htmlFor="name" className={labelShell}>
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            disabled={sending}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldShell}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className={errorShell}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelShell}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder="0400 000 000"
            disabled={sending}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldShell}
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className={errorShell}>
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      {/* Email — full width */}
      <div>
        <label htmlFor="email" className={labelShell}>
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="you@example.com"
          disabled={sending}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={fieldShell}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className={errorShell}>
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message + file attachment note */}
      <div>
        <label htmlFor="message" className={labelShell}>
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          placeholder="Tell us about your project — rooms, sizes, timing, whether it's a new build or renovation…"
          disabled={sending}
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "message-error attach-note" : "attach-note"
          }
          className={cn(fieldShell, "resize-y")}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className={errorShell}>
            {errors.message.message}
          </p>
        )}
        <p
          id="attach-note"
          className="mt-3 text-xs text-green/55 leading-relaxed"
        >
          Need to share floor plans, drawings or photos?{" "}
          <a
            href={site.contact.emailHref}
            className="text-bronze hover:underline"
          >
            Email them to {site.contact.email}
          </a>{" "}
          — we&apos;ll match them to your enquiry.
        </p>
      </div>

      {/* Submit + error message */}
      <div className="space-y-4 pt-2">
        {status === "error" && errorMsg && (
          <div
            role="alert"
            className="border-t border-bronze-deep pt-4 text-sm text-bronze-deep leading-relaxed"
          >
            {errorMsg}
          </div>
        )}

        <Button type="submit" variant="primary" size="lg" withArrow={!sending}>
          {sending ? "Sending…" : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}
