import {
  ArrowRightIcon,
  BellRingIcon,
  CalendarClockIcon,
  CheckIcon,
  DownloadIcon,
  MapPinIcon,
  PackagePlusIcon,
  WalletIcon,
} from "lucide-react";

import WebNavbar from "@/components/layout/WebNavbar";
import WebFooter from "@/components/layout/WebFooter";
import Barcode from "@/components/marketing/Barcode";
import PhoneMockup from "@/components/marketing/PhoneMockup";
import SectionLabel from "@/components/marketing/SectionLabel";
import StoreButtons from "@/components/marketing/StoreButtons";
import { APP_LINKS } from "@/lib/site";

export const metadata = {
  title: "Download the App - Garida Express",
  description:
    "Get the Garida Express app for iPhone and Android. Create shipments, schedule pickups and track every package live.",
  itunes: { appId: APP_LINKS.appStoreId },
};

export default function DownloadPage() {
  const features = [
    {
      icon: PackagePlusIcon,
      title: "Ship in seconds",
      description: "Create a shipment and schedule a pickup whenever it suits you.",
      tags: ["Create shipment", "Schedule pickup"],
    },
    {
      icon: MapPinIcon,
      title: "Live tracking",
      description: "Follow your packages on the map with live GPS updates.",
      tags: ["Live GPS", "Map view"],
    },
    {
      icon: BellRingIcon,
      title: "Instant notifications",
      description: "Get an alert when your package is picked up, in transit and delivered.",
      tags: ["Picked up", "In transit", "Delivered"],
    },
    {
      icon: WalletIcon,
      title: "Pay with FIB",
      description: "Top up and pay securely through First Iraqi Bank.",
      tags: ["Top up", "First Iraqi Bank"],
    },
  ];

  const steps = [
    {
      icon: DownloadIcon,
      title: "Download",
      description: "Get the free app for iPhone or Android from the App Store or Google Play.",
    },
    {
      icon: CalendarClockIcon,
      title: "Book a pickup",
      description: "Create a shipment and schedule a pickup whenever it suits you.",
    },
    {
      icon: MapPinIcon,
      title: "Track it live",
      description: "Follow your package on the map and get an alert at every step until it is delivered.",
    },
  ];

  const rings = ["size-[340px] border-white/25", "size-[480px] border-white/15", "size-[620px] border-white/10"];

  return (
    <div className="min-h-screen">
      <WebNavbar />

      <main>
        {/* Hero Section */}
        <section aria-labelledby="download-hero-title" className="bg-ink grain relative overflow-hidden text-white">
          <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-70" />

          <div className="relative container mx-auto grid items-center gap-16 px-4 pt-14 pb-24 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20 lg:pb-28">
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 text-center motion-safe:duration-700 lg:text-left">
              <SectionLabel tone="dark">On iPhone and Android</SectionLabel>

              <h1
                id="download-hero-title"
                className="font-display mt-6 text-[2.6rem] leading-[0.95] font-black text-white sm:text-6xl xl:text-7xl"
              >
                Every delivery, <span className="text-primary block">in your pocket</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg text-stone-300 md:text-xl lg:mx-0">
                Create shipments, schedule pickups and follow every package live with the Garida Express app. Fast
                delivery across Iraq, right from your phone.
              </p>

              <StoreButtons tone="dark" className="mt-10 justify-center lg:justify-start" />

              <p className="mt-6 flex items-center justify-center gap-2.5 font-mono text-xs tracking-[0.15em] text-stone-300 uppercase lg:justify-start">
                <span className="bg-primary flex h-5 w-5 items-center justify-center rounded-full text-white">
                  <CheckIcon className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                </span>
                Free to download
              </p>
            </div>

            {/* Phone on a GPS "radar" */}
            <div className="relative mx-auto w-full max-w-md">
              <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2">
                <span className="bg-primary/30 absolute top-0 left-0 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
                {rings.map((ring, index) => (
                  <span
                    key={ring}
                    className={`absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed ${ring}`}
                  >
                    {index === 1 && (
                      <span className="absolute top-[14.6%] left-[14.6%] flex h-3 w-3 -translate-x-1/2 -translate-y-1/2">
                        <span className="animate-signal bg-primary absolute inset-0 rounded-full" />
                        <span className="bg-primary relative h-3 w-3 rounded-full" />
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <PhoneMockup className="motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:fill-mode-both motion-safe:delay-150 motion-safe:duration-700" />

              {/* Floating app moments (decorative) */}
              <div
                aria-hidden="true"
                className="animate-float text-ink absolute top-[6%] right-0 flex items-center gap-2 rounded-full bg-white py-2 pr-4 pl-2 shadow-xl ring-1 ring-stone-200 [animation-delay:-2s] sm:-right-6 lg:right-0 xl:-right-6"
              >
                <span className="bg-ink flex h-7 w-7 items-center justify-center rounded-full text-white">
                  <CalendarClockIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold">Pickup scheduled</span>
              </div>
              <div
                aria-hidden="true"
                className="animate-float bg-primary absolute right-0 bottom-[16%] flex items-center gap-2 rounded-full py-2 pr-4 pl-2 text-white shadow-xl shadow-black/30 [animation-delay:-4.5s] sm:-right-10 lg:right-0 xl:-right-10"
              >
                <span className="text-primary flex h-7 w-7 items-center justify-center rounded-full bg-white">
                  <WalletIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold">Paid with FIB</span>
              </div>
            </div>
          </div>

          {/* Tear-off label edge */}
          <div aria-hidden="true" className="perforation absolute inset-x-0 bottom-0 h-3.5 translate-y-1/2" />
        </section>

        {/* Features Section */}
        <section id="app-features" aria-labelledby="app-features-title" className="py-20 lg:py-28">
          <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="text-center lg:sticky lg:top-28 lg:self-start lg:text-left">
              <SectionLabel index="01">Inside the app</SectionLabel>
              <h2
                id="app-features-title"
                className="font-display text-ink mt-5 text-4xl leading-[1.02] font-extrabold text-balance md:text-5xl"
              >
                Everything you need to ship
              </h2>
              <p className="mx-auto mt-5 max-w-md text-lg text-stone-600 lg:mx-0">
                One app to send, track and pay for your deliveries.
              </p>

              {/* Decorative app label */}
              <div
                aria-hidden="true"
                className="mt-10 hidden max-w-sm rounded-2xl border border-dashed border-stone-300 bg-white/60 p-5 lg:block"
              >
                <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-stone-600 uppercase">
                  <span>Garida Express app</span>
                  <span>iOS · Android</span>
                </div>
                <Barcode className="text-ink mt-4 h-12 w-full" />
              </div>
            </div>

            {/* Subgrid rows keep the dashed tag rows aligned across cards that sit side by side */}
            <ul className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <li key={feature.title} className="reveal row-span-2 grid grid-rows-subgrid gap-y-0">
                  <article className="group row-span-2 grid grid-rows-subgrid gap-y-0 rounded-3xl border border-stone-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_20px_40px_-20px_rgba(12,12,14,0.25)]">
                    <div>
                      <div className="flex items-start justify-between">
                        <span className="bg-paper text-ink group-hover:bg-primary flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-stone-200 transition-colors group-hover:text-white group-hover:ring-transparent">
                          <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="font-mono text-xs tracking-[0.2em] text-stone-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-display text-ink mt-8 text-xl font-extrabold">{feature.title}</h3>
                      <p className="mt-2 text-stone-600">{feature.description}</p>
                    </div>
                    <ul
                      aria-hidden="true"
                      className="mt-6 flex flex-wrap content-start gap-2 border-t border-dashed border-stone-300 pt-5"
                    >
                      {feature.tags.map((tag) => (
                        <li
                          key={tag}
                          className="bg-paper rounded-full px-3 py-1 font-mono text-[11px] tracking-[0.12em] text-stone-600 uppercase ring-1 ring-stone-200"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Get Started Section */}
        <section
          id="get-started"
          aria-labelledby="get-started-title"
          className="border-y border-stone-200 bg-white py-20 lg:py-28"
        >
          <div className="container mx-auto px-4">
            <div className="mb-14 grid items-end gap-6 text-center lg:grid-cols-2 lg:text-left">
              <div>
                <SectionLabel index="02">Get started</SectionLabel>
                <h2
                  id="get-started-title"
                  className="font-display text-ink mt-5 text-4xl leading-[1.02] font-extrabold text-balance md:text-5xl"
                >
                  From download to doorstep
                </h2>
              </div>
              <p className="mx-auto max-w-md text-lg text-stone-600 lg:mx-0 lg:justify-self-end">
                Download the app, book a pickup and follow your package all the way.
              </p>
            </div>

            <ol className="grid gap-6 lg:grid-cols-3">
              {steps.map((step, index) => {
                const isLast = index === steps.length - 1;

                return (
                  <li key={step.title} className="relative">
                    <div className="reveal bg-paper relative h-full overflow-hidden rounded-3xl border border-stone-200 p-7 lg:p-8">
                      <div className="flex items-start justify-between">
                        <span
                          aria-hidden="true"
                          className="font-display text-7xl leading-none font-black text-transparent [-webkit-text-stroke:1.5px_var(--ink)]"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${
                            isLast ? "bg-primary" : "bg-ink"
                          }`}
                        >
                          <step.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="font-display text-ink mt-10 text-2xl font-extrabold">{step.title}</h3>
                      <p className="mt-2 text-stone-600">{step.description}</p>
                    </div>

                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="reveal bg-primary absolute -bottom-[34px] left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-white ring-8 ring-white lg:top-1/2 lg:-right-[34px] lg:bottom-auto lg:left-auto lg:translate-x-0 lg:-translate-y-1/2"
                      >
                        <ArrowRightIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* CTA Section */}
        <section aria-labelledby="download-cta-title" className="bg-primary relative overflow-hidden text-white">
          {/* Stripes only behind the store buttons (lg+), so the copy and the notice always sit on solid red */}
          <div
            aria-hidden="true"
            className="bg-speed absolute inset-0 hidden [mask-image:linear-gradient(to_left,black_15%,transparent_40%)] text-white lg:block"
          />
          <div className="relative container mx-auto px-4 py-20 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div className="text-center lg:text-left">
                <h2
                  id="download-cta-title"
                  className="font-display text-4xl leading-[0.98] font-black text-balance md:text-6xl"
                >
                  Ready to send your next package?
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg text-white lg:mx-0">
                  Download Garida Express for free and start shipping today.
                </p>
              </div>
              <StoreButtons tone="dark" className="justify-center lg:flex-col" />
            </div>

            <div className="mt-12 border-t border-white/30 pt-6">
              <p className="mx-auto max-w-2xl text-center text-xs text-white lg:mx-0 lg:max-w-xl lg:text-left">
                Apple and the Apple logo are trademarks of Apple Inc. App Store is a service mark of Apple Inc. Google
                Play and the Google Play logo are trademarks of Google LLC.
              </p>
            </div>
          </div>
        </section>
      </main>

      <WebFooter showAppBand={false} />
    </div>
  );
}
