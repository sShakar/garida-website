"use client";

import { useState } from "react";
import { MailCheckIcon, MailIcon, MailWarningIcon, SendIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONTACT } from "@/lib/site";

const MESSAGE_MAX_LENGTH = 1000;
// Some mail apps (notably on Windows) drop or cut mailto: links longer than about 2,000 characters.
const MAILTO_MAX_LENGTH = 1800;

// There is no mail backend yet, so the form hands the message to the visitor's own email app
// (a prefilled mailto: link) instead of pretending it was sent.
export default function ContactForm() {
  // `id` changes on every submit so the live region re-renders (and is re-announced) even when the outcome repeats.
  const [status, setStatus] = useState({ id: 0, outcome: null });
  const [messageLength, setMessageLength] = useState(0);

  const fieldLabelClass = "font-mono text-xs tracking-[0.18em] text-stone-600 uppercase";
  const fieldClass =
    "h-12 rounded-xl border-stone-300 bg-paper/60 px-4 text-base text-ink shadow-none placeholder:text-stone-500 focus-visible:bg-white md:text-base";

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const subject = String(formData.get("subject")).trim();
    const message = String(formData.get("message")).trim();

    // mailto: bodies need CRLF line breaks (RFC 6068) or some mail apps run the lines together.
    const body = (message + "\n\n— " + name + " (" + email + ")").replace(/\r?\n/g, "\r\n");
    const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const outcome = mailtoUrl.length > MAILTO_MAX_LENGTH ? "too-long" : "opened";
    if (outcome === "opened") window.location.href = mailtoUrl;

    setStatus((previous) => ({ id: previous.id + 1, outcome }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2.5">
            <Label htmlFor="contact-name" className={fieldLabelClass}>
              Full name
            </Label>
            <Input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="John Doe"
              required
              className={fieldClass}
            />
          </div>
          <div className="space-y-2.5">
            <Label htmlFor="contact-email" className={fieldLabelClass}>
              Email
            </Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="john@example.com"
              required
              className={fieldClass}
            />
          </div>
        </div>

        <div className="space-y-2.5">
          <Label htmlFor="contact-subject" className={fieldLabelClass}>
            Subject
          </Label>
          <Input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="How can we help you?"
            required
            className={fieldClass}
          />
        </div>

        <div className="space-y-2.5">
          <div className="flex items-baseline justify-between gap-4">
            <Label htmlFor="contact-message" className={fieldLabelClass}>
              Message
            </Label>
            <p
              id="contact-message-count"
              className={`font-mono text-xs tabular-nums ${
                messageLength >= MESSAGE_MAX_LENGTH ? "font-semibold text-red-700" : "text-stone-600"
              }`}
            >
              {messageLength}
              <span aria-hidden="true">/</span>
              <span className="sr-only"> of </span>
              {MESSAGE_MAX_LENGTH}
              <span className="sr-only"> characters</span>
            </p>
          </div>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            maxLength={MESSAGE_MAX_LENGTH}
            onChange={(event) => setMessageLength(event.target.value.length)}
            aria-describedby="contact-message-count"
            placeholder="Tell us more about your inquiry..."
            required
            className="bg-paper/60 text-ink focus-visible:border-ring focus-visible:ring-ring/50 block min-h-40 w-full resize-y rounded-xl border border-stone-300 px-4 py-3 text-base transition-[color,box-shadow] outline-none placeholder:text-stone-500 focus-visible:bg-white focus-visible:ring-[3px]"
          />
        </div>

        <div className="space-y-3 pt-1">
          <Button
            type="submit"
            size="xl"
            className="group shadow-primary/30 w-full shadow-lg"
            aria-describedby="contact-submit-note"
          >
            Send message
            <SendIcon
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Button>
          <p
            id="contact-submit-note"
            className="flex items-center justify-center gap-2 font-mono text-xs tracking-[0.15em] text-stone-600 uppercase"
          >
            <MailIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Opens your email app
          </p>
        </div>
      </div>

      <div aria-live="polite">
        {status.outcome && (
          <p
            key={status.id}
            className="bg-paper text-ink mt-6 flex gap-3 rounded-2xl border border-dashed border-stone-300 p-4 text-sm leading-relaxed"
          >
            {status.outcome === "too-long" ? (
              <MailWarningIcon className="text-primary mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            ) : (
              <MailCheckIcon className="text-primary mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            )}
            <span>
              {status.outcome === "too-long"
                ? "Your message is too long to hand over to your email app. Please shorten it, or email us directly at "
                : "Your email app should open with your message ready to send. If it doesn't, email us directly at "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-semibold text-red-700 underline underline-offset-4 hover:text-red-800"
              >
                {CONTACT.email}
              </a>
              .
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
