"use client";

import { useId, useState } from "react";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/site";

// Early-access sign-up. There is no mailing-list backend yet, so the request goes out as an email from the visitor's own mail app.
export default function NotifyForm() {
  const [email, setEmail] = useState("");
  // Counts submits so the status message remounts (and is re-announced) on every submit, not only the first.
  const [submitCount, setSubmitCount] = useState(0);
  const inputId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = "Notify me when Garida Express launches";
    const body = `Hello Garida Express team,\n\nPlease let me know when Garida Express launches.\n\nMy email: ${email.trim()}`;

    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitCount((count) => count + 1);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <label htmlFor={inputId} className="font-mono text-xs tracking-[0.2em] text-stone-600 uppercase">
        Email address
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <input
          id={inputId}
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="text-ink focus-visible:border-primary focus-visible:ring-primary/20 h-12 w-full min-w-0 rounded-full border border-stone-300 bg-white px-5 text-base outline-hidden transition-[border-color,box-shadow] placeholder:text-stone-500 focus-visible:ring-4 sm:flex-1"
        />
        <Button type="submit" size="xl" className="group shadow-primary/25 cursor-pointer shadow-lg">
          Notify Me
          <ArrowRightIcon className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Button>
      </div>

      <p aria-live="polite" className="text-sm text-stone-600">
        {submitCount > 0 && (
          <span key={submitCount} className="mt-4 flex items-start gap-2 rounded-xl bg-stone-100 px-4 py-3">
            <span className="bg-primary mt-1.5 h-2 w-2 shrink-0 rounded-full" aria-hidden="true" />
            <span>
              Your email app should open with your request ready to send. If it doesn&apos;t, email us at{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-ink font-semibold underline decoration-stone-400 underline-offset-4 hover:decoration-current"
              >
                {CONTACT.email}
              </a>
              .
            </span>
          </span>
        )}
      </p>
    </form>
  );
}
