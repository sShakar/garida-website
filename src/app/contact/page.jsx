import { ArrowDownIcon, ArrowUpRightIcon, ClockIcon, HeadsetIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import WebNavbar from "@/components/layout/WebNavbar";
import WebFooter from "@/components/layout/WebFooter";
import ContactForm from "@/components/contact/ContactForm";
import SectionLabel from "@/components/marketing/SectionLabel";
import Barcode from "@/components/marketing/Barcode";
import { CONTACT } from "@/lib/site";

export const metadata = {
  title: "Contact Us - Garida Express",
  description: "Get in touch with Garida Express by email, phone or at our office in Erbil.",
};

export default function ContactPage() {
  const contactChannels = [
    {
      icon: MailIcon,
      title: "Email",
      description: "Send us an email anytime",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      description: "Call us during business hours",
      value: CONTACT.phone,
      href: CONTACT.phoneHref,
    },
    {
      icon: ClockIcon,
      title: "Hours",
      description: "We're available",
      value: "24/7 Customer Support",
    },
  ];

  return (
    <div className="min-h-screen">
      <WebNavbar />

      <main>
        {/* Hero Section */}
        <section className="bg-grid relative overflow-hidden border-b border-stone-200">
          <div
            aria-hidden="true"
            className="bg-primary bg-speed absolute top-0 -right-24 hidden h-full w-[36%] -skew-x-12 text-white lg:block"
          />

          <div className="relative container mx-auto grid items-center gap-12 px-4 pt-14 pb-16 lg:grid-cols-[1fr_auto] lg:pt-20 lg:pb-24">
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 text-center motion-safe:duration-700 lg:text-left">
              <SectionLabel>Contact · 24/7 customer support</SectionLabel>

              <h1 className="font-display text-ink mt-6 text-[2.6rem] leading-[0.95] font-black sm:text-6xl xl:text-7xl">
                Get in <span className="text-primary">touch.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg text-balance text-stone-600 md:text-xl lg:mx-0">
                Have a question or need help? We&apos;re here for you 24/7.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button size="xl" asChild className="group shadow-primary/30 shadow-lg">
                  <a href="#send-message">
                    Send a message
                    <ArrowDownIcon className="transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                  </a>
                </Button>
                <Button size="xl" variant="outline" asChild className="border-ink/15 bg-white/70">
                  <a href={CONTACT.phoneHref}>
                    <PhoneIcon aria-hidden="true" />
                    Call {CONTACT.phone}
                  </a>
                </Button>
              </div>
            </div>

            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:fill-mode-both relative flex justify-center motion-safe:delay-150 motion-safe:duration-700">
              {/* Parcel-tape band behind the stamp on small screens (the skewed red stripe takes over on lg) */}
              <div
                aria-hidden="true"
                className="bg-primary bg-speed absolute top-1/2 left-1/2 h-24 w-[150vw] -translate-x-1/2 -translate-y-1/2 -rotate-6 text-white lg:hidden"
              />
              <SupportStamp />
            </div>
          </div>
        </section>

        <div className="container mx-auto grid gap-14 px-4 py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10 lg:py-28 xl:gap-16">
          {/* Contact details */}
          <section aria-labelledby="contact-details-title" className="min-w-0">
            <SectionLabel index="01">Dispatch desk</SectionLabel>
            <h2
              id="contact-details-title"
              className="font-display text-ink mt-5 text-4xl leading-[1.02] font-extrabold md:text-5xl"
            >
              Reach us directly
            </h2>
            <p className="mt-4 text-lg text-stone-600">Email, call or visit our office in Erbil.</p>

            <ul className="mt-10 space-y-4">
              {contactChannels.map((channel, index) => (
                <li
                  key={channel.title}
                  className={`reveal relative flex items-stretch overflow-hidden rounded-2xl border border-stone-200 bg-white transition-all duration-300 ${
                    channel.href
                      ? "group has-[a:focus-visible]:border-primary has-[a:focus-visible]:ring-ring/50 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_20px_40px_-20px_rgba(12,12,14,0.25)] has-[a:focus-visible]:ring-[3px]"
                      : ""
                  }`}
                >
                  {/* Ticket stub */}
                  <div className="bg-paper text-primary group-hover:bg-primary flex w-16 shrink-0 flex-col items-center justify-center gap-2 border-r border-dashed border-stone-300 py-5 transition-colors group-hover:text-white sm:w-20">
                    <channel.icon className="h-6 w-6" aria-hidden="true" />
                    <span
                      aria-hidden="true"
                      className="font-mono text-[11px] tracking-[0.2em] text-stone-600 transition-colors group-hover:text-white"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1 py-4 pr-4 pl-4 sm:pr-5 sm:pl-5">
                    <h3 className="font-mono text-xs tracking-[0.2em] text-stone-600 uppercase">{channel.title}</h3>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="font-display text-ink mt-1.5 block text-base font-extrabold [overflow-wrap:anywhere] outline-none after:absolute after:inset-0 sm:text-lg"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="font-display text-ink mt-1.5 text-base font-extrabold sm:text-lg">
                        {channel.value}
                      </p>
                    )}
                    <p className="mt-0.5 text-sm text-stone-600">{channel.description}</p>
                  </div>

                  {/* Corner marker: arrow for links, live signal for the always-on support line */}
                  {channel.href ? (
                    <ArrowUpRightIcon
                      className="group-hover:text-primary pointer-events-none absolute top-4 right-4 h-5 w-5 text-stone-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  ) : (
                    <span aria-hidden="true" className="absolute top-5 right-5 flex h-2.5 w-2.5">
                      <span className="animate-signal bg-primary absolute inset-0 rounded-full" />
                      <span className="bg-primary relative h-2.5 w-2.5 rounded-full" />
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* Office, styled as the "ship to" block of a waybill */}
            <div className="bg-ink grain reveal relative mt-4 overflow-hidden rounded-3xl text-white">
              <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-70" />
              <div
                aria-hidden="true"
                className="bg-primary/35 absolute -top-24 -right-20 h-64 w-64 rounded-full blur-3xl"
              />

              <div className="relative p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p aria-hidden="true" className="font-mono text-xs tracking-[0.2em] text-stone-400 uppercase">
                      Ship to
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-extrabold">Visit our office</h3>
                  </div>
                  <span className="bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                    <MapPinIcon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <address className="mt-5 text-lg leading-snug text-stone-200 not-italic sm:text-xl">
                  {CONTACT.address}
                </address>
              </div>

              {/* Tear-off line */}
              <div aria-hidden="true" className="relative flex items-center">
                <span className="bg-paper -ml-3 h-6 w-6 shrink-0 rounded-full" />
                <span className="flex-1 border-t-2 border-dashed border-white/15" />
                <span className="bg-paper -mr-3 h-6 w-6 shrink-0 rounded-full" />
              </div>

              <div className="relative flex items-center justify-between gap-4 p-6 sm:px-7">
                <Button
                  size="xl"
                  variant="paper"
                  asChild
                  className="group focus-visible:ring-ink focus-visible:outline-white focus-visible:outline-solid"
                >
                  <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                    <ArrowUpRightIcon
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </Button>
                <Barcode className="h-10 max-w-28 min-w-0 flex-1 text-white/70" />
              </div>
            </div>
          </section>

          {/* Contact form */}
          <section
            id="send-message"
            aria-labelledby="send-message-title"
            className="min-w-0 self-start overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_30px_60px_-30px_rgba(12,12,14,0.25)]"
          >
            <div className="bg-ink flex items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
              <p className="min-w-0 truncate font-mono text-xs text-stone-400">
                <span className="tracking-[0.2em] uppercase">To</span>{" "}
                <span className="text-stone-200">{CONTACT.email}</span>
              </p>
              <span
                aria-hidden="true"
                className="border-primary text-primary font-display hidden shrink-0 -rotate-6 rounded-md border-2 px-2.5 py-0.5 text-sm font-black tracking-wider uppercase sm:inline-block"
              >
                Express
              </span>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <SectionLabel index="02">Write to us</SectionLabel>
              <h2
                id="send-message-title"
                className="font-display text-ink mt-5 text-4xl leading-[1.02] font-extrabold md:text-5xl"
              >
                Send us a message
              </h2>
              <p className="mt-3 text-stone-600">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <div className="mt-8 border-t border-dashed border-stone-300 pt-8">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </main>

      <WebFooter />
    </div>
  );
}

// Decorative rubber stamp for the hero. Hidden from assistive tech; the same facts are in the page text.
function SupportStamp({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-60 w-60 sm:h-72 sm:w-72 lg:h-80 lg:w-80 xl:h-[22rem] xl:w-[22rem] ${className}`}
    >
      <div className="ring-ink/10 absolute inset-0 rounded-full bg-white shadow-[0_40px_80px_-24px_rgba(12,12,14,0.45)] ring-1" />

      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full motion-safe:animate-spin"
        style={{ animationDuration: "40s" }}
      >
        <defs>
          <path id="support-stamp-ring" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" fill="none" />
        </defs>
        <text className="fill-ink font-mono text-[10px] font-medium">
          {/* The ring is 2 × π × 80 ≈ 502.65 long. lengthAdjust="spacing" adds no step after the last glyph, so
              textLength is one letter step (~6.1) shorter; with the trailing no-break space the seam gap then
              matches the other " • " gaps. */}
          <textPath href="#support-stamp-ring" textLength="496.5" lengthAdjust="spacing">
            {"CUSTOMER SUPPORT • 24/7 • ERBIL, KURDISTAN •\u00A0"}
          </textPath>
        </text>
      </svg>

      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <circle cx="100" cy="100" r="94" fill="none" className="stroke-ink/15" strokeWidth="1" />
        <circle
          cx="100"
          cy="100"
          r="66"
          fill="none"
          className="stroke-primary"
          strokeWidth="1.5"
          strokeDasharray="3 5"
        />
      </svg>

      <div className="bg-ink absolute inset-[24%] flex flex-col items-center justify-center rounded-full text-white">
        <HeadsetIcon className="text-primary h-7 w-7" />
        <span className="font-display mt-1 text-4xl font-black">24/7</span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-stone-400 uppercase">Support</span>
      </div>

      {/* Sits below-left of the ring text, with room for the 10px float, so it never covers the rotating letters */}
      <div className="animate-float bg-ink absolute -bottom-9 -left-12 flex items-center gap-2 rounded-full py-2 pr-4 pl-2 text-white shadow-lg sm:-bottom-7 lg:-bottom-4">
        <span className="bg-primary flex h-7 w-7 items-center justify-center rounded-full">
          <MapPinIcon className="h-3.5 w-3.5" />
        </span>
        <span className="text-xs font-semibold">Erbil, Kurdistan</span>
      </div>
    </div>
  );
}
