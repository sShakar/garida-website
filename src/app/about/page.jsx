import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, AwardIcon, GlobeIcon, MailIcon, PackageIcon, TruckIcon, UsersIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import WebNavbar from "@/components/layout/WebNavbar";
import WebFooter from "@/components/layout/WebFooter";
import SectionLabel from "@/components/marketing/SectionLabel";
import Barcode from "@/components/marketing/Barcode";
import GaridaLogo from "@/assets/img/garida-logo.png";
import { AUTH_LINKS } from "@/lib/site";

export const metadata = {
  title: "About Us - Garida Express",
  description: "Learn about Garida Express and our commitment to worldwide shipping excellence",
};

export default function AboutPage() {
  const companyFacts = [
    { label: "Office", value: "Erbil, Kurdistan" },
    { label: "Service", value: "Express courier" },
    { label: "App", value: "iPhone & Android" },
  ];

  const values = [
    {
      icon: PackageIcon,
      title: "Reliability",
      description: "We deliver on our promises with 99.9% on‑time delivery rate.",
    },
    {
      icon: UsersIcon,
      title: "Customer First",
      description: "Your success is our priority. We’re here 24/7 to support you.",
    },
    {
      icon: GlobeIcon,
      title: "Global Network",
      description: "Extensive worldwide coverage to reach every corner of the globe.",
    },
    {
      icon: AwardIcon,
      title: "Excellence",
      description: "Award-winning service with industry‑leading standards.",
    },
  ];

  const storyStats = [
    { value: "1M+", label: "Packages Delivered" },
    { value: "200+", label: "Countries Served" },
    { value: "99.9%", label: "On-Time Delivery" },
    { value: "24/7", label: "Customer Support" },
  ];

  const [featuredValue, ...otherValues] = values;

  return (
    <div className="min-h-screen">
      <WebNavbar />

      <main>
        {/* Hero Section */}
        <section aria-labelledby="about-title" className="bg-grid relative overflow-hidden border-b border-stone-200">
          <div
            aria-hidden="true"
            className="bg-primary bg-speed absolute top-0 -right-24 hidden h-full w-[36%] -skew-x-12 text-white lg:block"
          />

          <div className="relative container mx-auto grid items-center gap-14 px-4 pt-14 pb-20 lg:grid-cols-[1.25fr_0.75fr] lg:pt-24 lg:pb-28">
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 text-center motion-safe:duration-700 lg:text-left">
              <SectionLabel>About us · Express courier</SectionLabel>

              <h1
                id="about-title"
                className="font-display text-ink mt-6 text-[2.6rem] leading-[0.95] font-black sm:text-6xl xl:text-7xl"
              >
                About <span className="text-primary block">Garida Express</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg text-stone-600 md:text-xl lg:mx-0">
                We&rsquo;re on a mission to make worldwide shipping simple, reliable, and accessible for everyone.
              </p>

              <dl className="mx-auto mt-10 grid max-w-xl grid-cols-1 rounded-2xl border border-dashed border-stone-300 bg-white/70 sm:grid-cols-3 lg:mx-0">
                {companyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 border-t border-dashed border-stone-300 px-5 py-3.5 first:border-t-0 sm:block sm:border-t-0 sm:border-l sm:py-4 sm:first:border-l-0"
                  >
                    <dt className="font-mono text-xs tracking-[0.2em] text-stone-600 uppercase">{fact.label}</dt>
                    <dd className="text-ink text-right text-sm font-semibold sm:mt-1.5 sm:text-center sm:text-base lg:text-left">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <Postmark className="motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:delay-150 motion-safe:duration-700" />
          </div>
        </section>

        {/* Our Story Section */}
        <section id="our-story" aria-labelledby="story-title" className="py-20 lg:py-28">
          <div className="container mx-auto grid items-start gap-14 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="reveal">
              <SectionLabel index="01">Who we are</SectionLabel>
              <h2
                id="story-title"
                className="font-display text-ink mt-5 text-4xl leading-[1.02] font-extrabold md:text-5xl"
              >
                Our Story
              </h2>

              <p className="text-ink first-letter:font-display first-letter:text-primary mt-8 text-xl leading-relaxed first-letter:float-left first-letter:mt-1 first-letter:mr-2 first-letter:text-7xl first-letter:leading-[0.8] first-letter:font-black md:text-2xl md:leading-relaxed">
                Founded with a vision to revolutionize the shipping industry, Garida Express has grown from a small
                local courier service to a global shipping powerhouse.
              </p>

              <div className="mt-10 grid gap-8 border-t border-dashed border-stone-300 pt-8 sm:grid-cols-2">
                <p className="text-stone-600">
                  <span aria-hidden="true" className="mb-3 block font-mono text-xs tracking-[0.2em] text-red-700">
                    — 02
                  </span>
                  Our commitment to excellence, innovation, and customer satisfaction has helped us build lasting
                  relationships with thousands of businesses worldwide.
                </p>
                <p className="text-stone-600">
                  <span aria-hidden="true" className="mb-3 block font-mono text-xs tracking-[0.2em] text-red-700">
                    — 03
                  </span>
                  Today, we deliver over 1 million packages annually to more than 200 countries, maintaining our promise
                  of fast, reliable, and secure shipping.
                </p>
              </div>
            </div>

            {/* Stats as a shipping manifest */}
            <div className="reveal mx-auto w-full max-w-lg lg:mt-4">
              <div className="ring-ink/10 relative overflow-hidden rounded-3xl bg-white shadow-[0_40px_80px_-28px_rgba(12,12,14,0.4)] ring-1 transition-transform duration-500 lg:rotate-1 motion-safe:lg:hover:rotate-0">
                <div aria-hidden="true" className="bg-ink flex items-center justify-between gap-4 px-6 py-4 text-white">
                  <span className="font-mono text-xs tracking-[0.2em] uppercase">Manifest</span>
                  <span className="border-primary text-primary font-display -rotate-6 rounded-md border-2 px-2.5 py-0.5 text-sm font-black tracking-wider uppercase">
                    Express
                  </span>
                </div>

                <dl className="px-6">
                  {storyStats.map((stat, index) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between gap-4 border-b border-dashed border-stone-300 py-5 last:border-b-0"
                    >
                      <dt className="flex items-center gap-3 font-mono text-xs tracking-[0.15em] text-stone-600 uppercase sm:tracking-[0.2em]">
                        <span aria-hidden="true" className="text-red-700">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {stat.label}
                      </dt>
                      <dd className="font-display text-ink text-4xl font-black md:text-5xl">{stat.value}</dd>
                    </div>
                  ))}
                </dl>

                {/* Tear-off stub */}
                <div aria-hidden="true">
                  <div className="relative h-3.5">
                    <div className="perforation absolute inset-x-6 inset-y-0 [--paper:var(--color-stone-300)]" />
                    <span className="bg-paper ring-ink/15 absolute top-1/2 -left-3 h-6 w-6 -translate-y-1/2 rounded-full ring-1" />
                    <span className="bg-paper ring-ink/15 absolute top-1/2 -right-3 h-6 w-6 -translate-y-1/2 rounded-full ring-1" />
                  </div>
                  <div className="px-6 pt-4 pb-6">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">
                      Garida Express · Erbil, Kurdistan
                    </p>
                    <Barcode className="text-ink mt-3 h-12 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section
          id="values"
          aria-labelledby="values-title"
          className="border-y border-stone-200 bg-white py-20 lg:py-28"
        >
          <div className="container mx-auto px-4">
            <div className="mb-12 grid items-end gap-6 lg:grid-cols-2">
              <div>
                <SectionLabel index="02">What drives us</SectionLabel>
                <h2
                  id="values-title"
                  className="font-display text-ink mt-5 text-4xl leading-[1.02] font-extrabold md:text-5xl"
                >
                  Our Core Values
                </h2>
              </div>
              <p className="text-lg text-stone-600 lg:max-w-md lg:justify-self-end">
                The principles that guide everything we do.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Featured value */}
              <article className="bg-ink grain reveal relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 text-white sm:min-h-72">
                <div aria-hidden="true" className="bg-speed absolute inset-0 text-white" />
                <div className="relative flex items-start justify-between">
                  <span className="bg-primary flex h-12 w-12 items-center justify-center rounded-xl">
                    <featuredValue.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs tracking-[0.2em] text-stone-400">01</span>
                </div>
                <div className="relative mt-8 sm:mt-10">
                  <h3 className="font-display text-2xl font-extrabold">{featuredValue.title}</h3>
                  <p className="mt-2 text-pretty text-stone-300">{featuredValue.description}</p>
                </div>
              </article>

              {otherValues.map((value, index) => (
                <article
                  key={value.title}
                  className="group bg-paper reveal relative flex flex-col justify-between rounded-3xl border border-stone-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:bg-white hover:shadow-[0_20px_40px_-20px_rgba(12,12,14,0.25)] sm:min-h-72"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-ink group-hover:bg-primary flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-stone-200 transition-colors group-hover:text-white group-hover:ring-transparent">
                      <value.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-stone-600">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-8 sm:mt-10">
                    <h3 className="font-display text-ink text-xl font-extrabold">{value.title}</h3>
                    <p className="mt-2 text-pretty text-stone-600">{value.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="cta-title" className="bg-primary relative overflow-hidden text-white">
          <div
            aria-hidden="true"
            className="bg-speed absolute inset-0 hidden [mask-image:linear-gradient(to_left,black_6rem,transparent_16rem)] text-white lg:block"
          />
          <div className="relative container mx-auto grid items-center gap-10 px-4 py-20 lg:grid-cols-[1fr_auto] lg:py-24">
            <div className="text-center lg:text-left">
              <Barcode className="mx-auto h-9 w-44 text-white lg:mx-0" />
              <h2 id="cta-title" className="font-display mt-6 text-4xl leading-[0.98] font-black md:text-6xl">
                Ready to ship with us?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-pretty text-white lg:mx-0">
                Join thousands of businesses that trust Garida Express for their shipping needs.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:flex-col lg:items-stretch">
              <Button size="xl" variant="paper" asChild className="group focus-visible:outline-solid">
                <Link href={AUTH_LINKS.signUp} target="_blank" rel="noopener noreferrer">
                  Get started
                  <ArrowRightIcon className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </Link>
              </Button>
              <Button size="xl" variant="ink" asChild className="focus-visible:outline-solid">
                <Link href="/contact">
                  <MailIcon aria-hidden="true" />
                  Contact us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <WebFooter />
    </div>
  );
}

// Decorative postmark for the hero: a rotating ring of text around the Garida mark. Hidden from assistive tech.
function Postmark({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`relative mx-auto w-full max-w-[15rem] sm:max-w-[21rem] lg:max-w-[19rem] xl:max-w-[21rem] ${className}`}
    >
      <div className="bg-primary/25 absolute inset-8 rounded-full blur-3xl" />

      <div className="ring-ink/10 relative aspect-square rounded-full bg-white shadow-[0_40px_80px_-24px_rgba(12,12,14,0.45)] ring-1">
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full motion-safe:animate-spin"
          style={{ animationDuration: "48s" }}
        >
          <defs>
            {/* Rotated so the first ✦ rests under the floating chip when the ring is static (reduced motion). */}
            <path
              id="about-postmark-ring"
              d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
              transform="rotate(141 100 100)"
            />
          </defs>
          <text className="fill-ink font-mono text-[11px] font-semibold uppercase">
            <textPath href="#about-postmark-ring" textLength="486" lengthAdjust="spacing">
              Garida Express ✦ Express courier ✦ Erbil, Kurdistan ✦
            </textPath>
          </text>
        </svg>

        <div className="border-primary absolute inset-[21%] flex flex-col items-center justify-center rounded-full border-2 border-dashed">
          <Image src={GaridaLogo} alt="" width={96} height={56} className="h-auto w-[42%]" />
          <span className="text-ink mt-2 font-mono text-[10px] tracking-[0.25em] uppercase">Door to door</span>
        </div>
      </div>

      {/* Rubber "Express" stamp */}
      <span className="border-primary text-primary font-display absolute -top-2 -left-2 -rotate-12 rounded-md border-2 bg-white px-3 py-1 text-base font-black tracking-wider uppercase shadow-lg sm:-left-6">
        Express
      </span>

      {/* Floating service chip */}
      <div className="animate-float bg-ink absolute -right-2 bottom-6 flex items-center gap-2 rounded-full py-2 pr-4 pl-2 text-white shadow-lg sm:-right-6">
        <span className="bg-primary flex h-7 w-7 items-center justify-center rounded-full">
          <TruckIcon className="h-3.5 w-3.5" />
        </span>
        <span className="text-xs font-semibold">Same-day &amp; next-day</span>
      </div>
    </div>
  );
}
