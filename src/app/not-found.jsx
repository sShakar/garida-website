import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, MailIcon, PackageXIcon, SmartphoneIcon, TruckIcon, XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import WebNavbar from "@/components/layout/WebNavbar";
import WebFooter from "@/components/layout/WebFooter";
import SectionLabel from "@/components/marketing/SectionLabel";
import Barcode from "@/components/marketing/Barcode";
import GaridaLogoLong from "@/assets/img/garida-logo-long.png";

export const metadata = {
  title: "Page not found - Garida Express",
  description: "The page you are looking for does not exist or has moved.",
};

export default function NotFound() {
  const statusLines = [
    { label: "Status", value: "Address not found", isAlert: true },
    { label: "Error code", value: "404" },
    { label: "Next step", value: "Reroute" },
  ];

  const tapeItems = ["Address not found", "Return to sender", "Delivery exception", "Error 404"];

  return (
    <div className="min-h-screen">
      <WebNavbar />

      <main>
        <section aria-labelledby="not-found-title" className="bg-grid relative overflow-hidden">
          <div
            aria-hidden="true"
            className="bg-primary bg-speed absolute top-0 -right-24 hidden h-full w-[40%] -skew-x-12 text-white lg:block"
          />

          <div className="relative container mx-auto grid items-center gap-14 px-4 pt-14 pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20 lg:pb-20">
            {/* Message */}
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 text-center motion-safe:duration-700 lg:text-left">
              <SectionLabel>Error 404 · Delivery exception</SectionLabel>

              <p
                aria-hidden="true"
                className="font-display text-ink mt-4 text-[8.5rem] leading-[0.85] font-black sm:text-[11rem] xl:text-[13rem]"
              >
                4<span className="text-primary">0</span>4
              </p>

              <h1
                id="not-found-title"
                className="font-display text-ink mt-6 text-[2.6rem] leading-[0.95] font-black text-balance sm:text-6xl"
              >
                This parcel took a <span className="whitespace-nowrap">wrong turn.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg text-stone-600 md:text-xl lg:mx-0">
                We couldn&apos;t find the page you were looking for. It may have moved, or the address may be mistyped.
                Let&apos;s get you back on route.
              </p>

              <nav aria-labelledby="reroute-title" className="mt-9">
                <h2 id="reroute-title" className="font-mono text-xs tracking-[0.2em] text-stone-600 uppercase">
                  Reroute to
                </h2>
                <ul className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                  <li>
                    <Button size="xl" asChild className="group shadow-primary/30 shadow-lg">
                      <Link href="/">
                        <ArrowLeftIcon className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                        Back to home
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button size="xl" variant="ink" asChild>
                      <Link href="/download">
                        <SmartphoneIcon aria-hidden="true" />
                        Download the app
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Button size="xl" variant="outline" asChild className="border-ink/15 bg-white/70">
                      <Link href="/contact">
                        <MailIcon aria-hidden="true" />
                        Contact us
                      </Link>
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Undeliverable waybill (decorative) */}
            <div
              aria-hidden="true"
              className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-8 motion-safe:fill-mode-both relative mx-auto w-full max-w-md motion-safe:delay-150 motion-safe:duration-700"
            >
              <div className="bg-primary/20 absolute inset-12 rounded-full blur-3xl" />

              <div className="ring-ink/10 relative rotate-2 rounded-2xl bg-white shadow-[0_40px_80px_-24px_rgba(12,12,14,0.45)] ring-1 transition-transform duration-500 motion-safe:hover:rotate-0">
                {/* Label header */}
                <div className="bg-ink flex items-center justify-between gap-4 rounded-t-2xl px-6 py-4">
                  <Image
                    src={GaridaLogoLong}
                    alt=""
                    width={110}
                    height={38}
                    className="h-[38px] w-[110px] object-contain brightness-0 invert"
                  />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-stone-400 uppercase">
                    Exception report
                  </span>
                </div>

                {/* From / to */}
                <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-4 px-6 pt-6">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">From</p>
                    <p className="font-display text-ink text-2xl leading-tight font-extrabold">Erbil</p>
                    <p className="text-xs text-stone-500">Kurdistan, IQ</p>
                  </div>
                  <TruckIcon className="text-primary mb-6 h-6 w-6" />
                  <div className="text-right">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">To</p>
                    <p className="font-display text-2xl leading-tight font-extrabold text-stone-300">???</p>
                    <p className="text-xs text-stone-500">Unknown address</p>
                  </div>
                </div>

                {/* Route that stops short */}
                <div className="px-6 pt-5">
                  <div className="relative h-5">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-stone-300" />
                    <div className="bg-primary absolute top-1/2 left-0 h-0.5 w-[56%] -translate-y-1/2" />
                    <span className="bg-ink absolute top-1/2 left-0 h-3 w-3 -translate-y-1/2 rounded-full" />
                    <span className="bg-primary absolute top-1/2 left-[56%] flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full ring-4 ring-white">
                      <XIcon className="h-3 w-3 text-white" strokeWidth={3} />
                    </span>
                    <span className="absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-stone-300 bg-white" />
                  </div>
                </div>

                {/* Status block */}
                <dl className="bg-paper mx-6 mt-6 space-y-2 rounded-xl p-4 font-mono text-xs tracking-[0.12em] uppercase ring-1 ring-stone-200">
                  {statusLines.map((line) => (
                    <div key={line.label} className="flex items-center justify-between gap-4">
                      <dt className="text-stone-500">{line.label}</dt>
                      <dd className={line.isAlert ? "font-semibold text-red-700" : "text-ink font-semibold"}>
                        {line.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Tracking number + barcode */}
                <div className="px-6 py-5">
                  <p className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">Tracking no.</p>
                  <p className="text-ink mt-1 font-mono text-lg font-semibold tracking-[0.18em]">GX 0404 0000 IQ</p>
                  <Barcode className="text-ink mt-3 h-14 w-full" />
                </div>

                {/* Exception footer */}
                <div className="bg-paper flex items-center justify-between rounded-b-2xl border-t border-stone-200 px-6 py-3">
                  <span className="text-ink flex items-center gap-2 text-sm font-semibold">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-signal bg-primary absolute inset-0 rounded-full" />
                      <span className="bg-primary relative h-2.5 w-2.5 rounded-full" />
                    </span>
                    Delivery exception
                  </span>
                  <span className="font-mono text-xs text-stone-500">ERR 404</span>
                </div>

                {/* Rubber stamp */}
                <span className="border-primary text-primary font-display absolute right-4 bottom-[5.5rem] -rotate-[10deg] rounded-lg border-4 bg-white/90 px-3 py-1 text-xl font-black tracking-wide uppercase shadow-sm">
                  Return to sender
                </span>
              </div>

              {/* Floating status chip */}
              <div className="animate-float absolute -top-5 right-4 flex items-center gap-2 rounded-full bg-white py-2 pr-4 pl-2 shadow-lg ring-1 ring-stone-200 sm:right-6">
                <span className="bg-primary flex h-7 w-7 items-center justify-center rounded-full text-white">
                  <PackageXIcon className="h-4 w-4" />
                </span>
                <span className="text-ink text-xs font-semibold">
                  Address not found <span className="font-mono font-normal text-stone-500">404</span>
                </span>
              </div>
            </div>
          </div>

          {/* Crossed parcel tape */}
          <div aria-hidden="true" className="relative h-40">
            {/* The tapes only cross near the right edge, so the ink tape never covers the red tape's text */}
            <div className="bg-primary absolute -inset-x-4 top-2 rotate-3 py-2.5 text-white sm:rotate-2 xl:rotate-1">
              <div className="mask-fade-x overflow-hidden">
                <div className="animate-marquee flex w-max [animation-direction:reverse]">
                  {[0, 1].map((copy) => (
                    <ul key={copy} className="flex shrink-0 items-center">
                      {[...tapeItems, ...tapeItems].map((item, index) => (
                        <li
                          key={`${item}-${index}`}
                          className="flex items-center gap-6 pr-6 font-mono text-xs font-semibold tracking-[0.3em] whitespace-nowrap uppercase"
                        >
                          {item}
                          <span className="opacity-70">{"///"}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-ink absolute -inset-x-4 top-16 -rotate-2 py-4 text-white sm:-rotate-1">
              <div className="mask-fade-x overflow-hidden">
                <div className="animate-marquee flex w-max">
                  {[0, 1].map((copy) => (
                    <ul key={copy} className="flex shrink-0 items-center">
                      {[...tapeItems, ...tapeItems].map((item, index) => (
                        <li
                          key={`${item}-${index}`}
                          className="font-display flex items-center gap-8 pr-8 text-lg font-extrabold whitespace-nowrap uppercase md:text-xl"
                        >
                          {item}
                          <PackageXIcon className="text-primary h-5 w-5" />
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <WebFooter />
    </div>
  );
}
