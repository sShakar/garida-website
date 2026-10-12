import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, MapPinIcon, ShieldCheckIcon, TruckIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import WebNavbar from "@/components/layout/WebNavbar";
import WebFooter from "@/components/layout/WebFooter";
import SectionLabel from "@/components/marketing/SectionLabel";
import Barcode from "@/components/marketing/Barcode";
import TrackingTicker from "@/components/marketing/TrackingTicker";
import NotifyForm from "@/components/coming-soon/NotifyForm";
import GaridaLogoLong from "@/assets/img/garida-logo-long.png";

export const metadata = {
  title: "Coming Soon - Garida Express",
  description: "Garida Express is launching soon. Sign up to be notified when we go live.",
};

export default function ComingSoonPage() {
  const features = [
    {
      icon: TruckIcon,
      title: "Fast Delivery",
      description: "Lightning-fast delivery to your doorstep",
    },
    {
      icon: MapPinIcon,
      title: "Real-time Tracking",
      description: "Track your packages in real-time",
    },
    {
      icon: ShieldCheckIcon,
      title: "Reliable Service",
      description: "Trusted by thousands of customers",
    },
  ];

  return (
    <div className="min-h-screen">
      <WebNavbar />

      <main className="pb-12 lg:pb-16">
        <section aria-labelledby="coming-soon-title" className="bg-grid relative overflow-hidden">
          <div
            aria-hidden="true"
            className="bg-primary bg-speed absolute top-0 -right-24 hidden h-full w-[40%] -skew-x-12 text-white lg:block"
          />

          {/* Below lg the order is intro, form card, then Back to Home; from lg the card spans both rows on the right */}
          <div className="relative container mx-auto grid items-center gap-14 px-4 pt-14 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-y-8 lg:pt-20 lg:pb-28">
            {/* Intro */}
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 text-center motion-safe:duration-700 lg:col-start-1 lg:row-start-1 lg:self-end lg:text-left">
              <SectionLabel>Status · In preparation</SectionLabel>

              <h1
                id="coming-soon-title"
                className="font-display text-ink mt-6 text-[2.6rem] leading-[0.95] font-black sm:text-6xl xl:text-7xl"
              >
                Coming <span className="text-primary">Soon.</span>
              </h1>

              {/* Route with a parcel on its way */}
              <div aria-hidden="true" className="relative mx-auto mt-8 h-3 max-w-sm lg:mx-0">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-stone-300" />
                <div className="bg-primary absolute top-1/2 left-0 h-0.5 w-[72%] -translate-y-1/2" />
                <span className="bg-ink absolute top-1/2 left-0 h-3 w-3 -translate-y-1/2 rounded-full" />
                <span className="border-ink absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 rounded-full border-2 bg-white" />
                <div className="absolute inset-y-0 left-0 w-[72%]">
                  <span className="animate-travel bg-primary absolute top-1/2 left-full flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md shadow-md ring-2 ring-white">
                    <span className="h-1.5 w-1.5 rounded-sm bg-white" />
                  </span>
                </div>
              </div>

              <p className="mx-auto mt-8 max-w-xl text-lg text-stone-600 md:text-xl lg:mx-0">
                We&apos;re working hard to bring you the best express delivery service. Get ready for something amazing!
              </p>

              {/* Rows below md, three tiles from md, compact rows in the narrower lg column, tiles again from xl (keeps every title on one line) */}
              <ul className="mt-10 grid gap-3 text-left md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {features.map((feature, index) => (
                  <li
                    key={feature.title}
                    className="group flex items-start gap-4 rounded-2xl border border-stone-200 bg-white/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_20px_40px_-20px_rgba(12,12,14,0.25)] md:flex-col lg:flex-row lg:items-center lg:p-4 xl:flex-col xl:items-start xl:p-5"
                  >
                    <div className="flex shrink-0 items-start justify-between md:w-full lg:w-auto xl:w-full">
                      <span className="bg-paper text-ink group-hover:bg-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ring-stone-200 transition-colors group-hover:text-white group-hover:ring-transparent">
                        <feature.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span
                        className="hidden font-mono text-xs tracking-[0.2em] text-stone-500 md:block lg:hidden xl:block"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <p className="font-display text-ink text-lg leading-tight font-extrabold lg:text-base">
                        {feature.title}
                      </p>
                      <p className="mt-1 text-sm text-balance text-stone-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Early-access label */}
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-8 motion-safe:fill-mode-both relative mx-auto w-full max-w-md motion-safe:delay-150 motion-safe:duration-700 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-[25rem] xl:max-w-md">
              <div aria-hidden="true" className="bg-primary/20 absolute inset-12 rounded-full blur-3xl" />
              <div
                aria-hidden="true"
                className="ring-ink/10 absolute inset-0 translate-x-1.5 translate-y-2 rotate-2 rounded-2xl bg-white shadow-lg ring-1 sm:translate-x-3 sm:translate-y-3 sm:rotate-3"
              />

              <div className="ring-ink/10 relative rounded-2xl bg-white shadow-[0_40px_80px_-24px_rgba(12,12,14,0.45)] ring-1">
                <div
                  aria-hidden="true"
                  className="bg-ink flex items-center justify-between gap-4 rounded-t-2xl px-6 py-4"
                >
                  <Image
                    src={GaridaLogoLong}
                    alt=""
                    width={110}
                    height={38}
                    className="h-[38px] w-[110px] object-contain brightness-0 invert"
                  />
                  <span className="border-primary text-primary font-display -rotate-6 rounded-md border-2 px-2.5 py-0.5 text-sm font-black tracking-wider uppercase">
                    Pre-launch
                  </span>
                </div>

                <div className="px-6 pt-7 pb-6">
                  <p aria-hidden="true" className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">
                    Early access · Pre-launch list
                  </p>
                  <h2 className="font-display text-ink mt-2 text-3xl leading-tight font-extrabold">Get Early Access</h2>
                  <p className="mt-2 text-stone-600">Be the first to know when we launch. Sign up for early access!</p>

                  <NotifyForm />
                </div>

                <div aria-hidden="true" className="perforation h-3" />

                <div className="bg-paper flex items-center justify-between gap-4 rounded-b-2xl border-t border-dashed border-stone-300 px-6 py-4">
                  <p className="flex items-center gap-2 text-sm text-stone-600">
                    <ShieldCheckIcon className="text-ink h-4 w-4 shrink-0" aria-hidden="true" />
                    We&apos;ll never share your email. Unsubscribe anytime.
                  </p>
                  <Barcode className="text-ink hidden h-8 w-20 shrink-0 sm:block" />
                </div>
              </div>
            </div>

            {/* Back to home (after the form on small screens, under the intro from lg) */}
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 text-center motion-safe:duration-700 lg:col-start-1 lg:row-start-2 lg:self-start lg:text-left">
              <Button size="xl" variant="outline" asChild className="group border-ink/15 bg-white/70">
                <Link href="/">
                  <ArrowLeftIcon className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>

          {/* Parcel-tape ticker */}
          <div className="bg-ink relative -mx-4 -rotate-1 py-4 text-white">
            <TrackingTicker />
          </div>
        </section>
      </main>

      <WebFooter />
    </div>
  );
}
