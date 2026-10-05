import Link from "next/link";
import {
  BellRingIcon,
  CheckIcon,
  HomeIcon,
  MapPinIcon,
  PackagePlusIcon,
  SmartphoneIcon,
  UserIcon,
  WalletIcon,
} from "lucide-react";

import WebNavbar from "@/components/layout/WebNavbar";
import WebFooter from "@/components/layout/WebFooter";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata = {
  title: "Download the App - Garida Express",
  description:
    "Get the Garida Express app for iPhone and Android. Create shipments, schedule pickups and track every package live.",
  itunes: { appId: "6757619138" },
};

export default function DownloadPage() {
  const stores = [
    {
      name: "App Store",
      caption: "Download on the",
      link: "https://apps.apple.com/iq/app/garida-express/id6757619138",
      icon: AppleLogo,
    },
    {
      name: "Google Play",
      caption: "GET IT ON",
      link: "https://play.google.com/store/apps/details?id=com.garida.express",
      icon: GooglePlayLogo,
    },
  ];

  const features = [
    {
      icon: PackagePlusIcon,
      title: "Ship in seconds",
      description: "Create a shipment and schedule a pickup whenever it suits you.",
    },
    {
      icon: MapPinIcon,
      title: "Live tracking",
      description: "Follow your packages on the map with live GPS updates.",
    },
    {
      icon: BellRingIcon,
      title: "Instant notifications",
      description: "Get an alert when your package is picked up, in transit and delivered.",
    },
    {
      icon: WalletIcon,
      title: "Pay with FIB",
      description: "Top up and pay securely through First Iraqi Bank.",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <WebNavbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="bg-primary/10 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-slate-200/60 blur-3xl" />
          </div>

          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
              <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 space-y-8 text-center motion-safe:duration-700 lg:text-left">
                <Badge className="bg-primary/10 gap-1.5 border-transparent px-4 py-1.5 text-red-700 [&>svg]:size-3.5">
                  <SmartphoneIcon />
                  Available on iPhone and Android
                </Badge>

                <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                  Every delivery, <span className="text-primary">in your pocket</span>
                </h1>

                <p className="mx-auto max-w-xl text-lg text-slate-600 md:text-xl lg:mx-0">
                  Create shipments, schedule pickups and follow every package live with the Garida Express app. Fast
                  delivery across Iraq, right from your phone.
                </p>

                <StoreButtons stores={stores} className="justify-center lg:justify-start" />

                <p className="text-sm text-slate-500">Free to download.</p>
              </div>

              <PhoneMockup />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Everything you need to ship</h2>
              <p className="text-lg text-slate-600">One app to send, track and pay for your deliveries.</p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <Card key={index} className="transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="bg-primary/10 mb-2 flex h-12 w-12 items-center justify-center rounded-full">
                      <feature.icon className="text-primary h-6 w-6" />
                    </div>
                    <h3 className="text-lg leading-tight font-semibold text-slate-900">{feature.title}</h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Ready to send your next package?</h2>
              <p className="text-lg text-white">Download Garida Express for free and start shipping today.</p>
              <StoreButtons stores={stores} className="justify-center pt-4" />
              <p className="pt-4 text-xs text-white">
                Apple and the Apple logo are trademarks of Apple Inc. App Store is a service mark of Apple Inc. Google
                Play and the Google Play logo are trademarks of Google LLC.
              </p>
            </div>
          </div>
        </section>
      </main>

      <WebFooter />
    </div>
  );
}

function StoreButtons({ stores, className = "" }) {
  return (
    <div className={`flex flex-col items-center gap-3 sm:flex-row ${className}`}>
      {stores.map((store) => (
        <Link
          key={store.name}
          href={store.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-14 w-52 items-center gap-3 rounded-xl bg-black px-4 text-white ring-1 ring-white/25 transition hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black motion-safe:hover:-translate-y-0.5"
        >
          <store.icon className="h-7 w-7 shrink-0" />
          <span className="flex flex-col items-start leading-none">
            <span className="text-[11px] font-medium">{store.caption}</span>
            <span className="mt-1 text-xl font-semibold">{store.name}</span>
          </span>
          <span className="sr-only">(opens in a new tab)</span>
        </Link>
      ))}
    </div>
  );
}

function PhoneMockup() {
  const steps = [
    { label: "Picked up", time: "9:24 AM", status: "done" },
    { label: "In transit", time: "11:02 AM", status: "done" },
    { label: "Out for delivery", time: "1:15 PM", status: "current" },
    { label: "Delivered", time: "", status: "pending" },
  ];

  const tabs = [HomeIcon, MapPinIcon, PackagePlusIcon, UserIcon];

  return (
    <div
      aria-hidden="true"
      className="motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-95 motion-safe:fill-mode-both relative mx-auto w-full max-w-[280px] motion-safe:delay-150 motion-safe:duration-700"
    >
      <div className="bg-primary/20 absolute inset-10 rounded-full blur-3xl" />

      {/* Device */}
      <div className="relative rounded-[2.75rem] bg-slate-900 p-3 shadow-2xl ring-1 ring-slate-700">
        <div className="relative flex aspect-[9/18.5] flex-col overflow-hidden rounded-[2.25rem] bg-white">
          <div className="absolute top-2 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-900" />

          {/* Status header */}
          <div className="bg-primary px-5 pt-12 pb-5 text-white">
            <p className="text-[11px] text-white/80">Shipment GX-20481</p>
            <p className="mt-1 text-lg font-semibold">Out for delivery</p>
            <p className="text-[11px] text-white/80">Arriving today, 2:00 - 4:00 PM</p>
          </div>

          {/* Map */}
          <svg viewBox="0 0 260 120" className="w-full shrink-0 bg-slate-100">
            <rect x="82" y="50" width="96" height="40" rx="6" className="fill-emerald-100" />
            <path d="M0 36H260M0 100H260M64 0V120M196 0V120" className="stroke-white" strokeWidth="10" fill="none" />
            <path
              d="M28 100H64V36H232"
              className="stroke-primary"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="28" cy="100" r="6" className="fill-slate-900" />
            <circle cx="140" cy="36" r="9" className="stroke-primary fill-white" strokeWidth="4" />
            <path d="M232 36c0-9-7-15-14-15s-14 6-14 15c0 8 14 22 14 22s14-14 14-22z" className="fill-primary" />
            <circle cx="218" cy="35" r="5" className="fill-white" />
          </svg>

          {/* Timeline */}
          <ol className="flex-1 space-y-4 px-5 py-5">
            {steps.map((step) => (
              <li key={step.label} className="flex items-center gap-3">
                {step.status === "done" && (
                  <span className="bg-primary flex h-5 w-5 items-center justify-center rounded-full">
                    <CheckIcon className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                )}
                {step.status === "current" && (
                  <span className="bg-primary ring-primary/20 h-5 w-5 rounded-full ring-4" />
                )}
                {step.status === "pending" && <span className="h-5 w-5 rounded-full bg-slate-200" />}
                <span
                  className={`flex-1 text-sm ${step.status === "pending" ? "text-slate-400" : "font-medium text-slate-900"}`}
                >
                  {step.label}
                </span>
                <span className="text-[11px] text-slate-500">{step.time}</span>
              </li>
            ))}
          </ol>

          {/* Tab bar */}
          <div className="flex items-center justify-around border-t border-slate-100 px-4 pt-3 pb-5">
            {tabs.map((Icon, index) => (
              <Icon key={index} className={`h-5 w-5 ${index === 1 ? "text-primary" : "text-slate-400"}`} />
            ))}
          </div>
          <div className="absolute bottom-1.5 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-slate-900" />
        </div>
      </div>

      {/* Floating notification */}
      <div className="absolute top-[30%] -left-4 flex w-56 items-center gap-3 rounded-2xl bg-white p-3 text-left shadow-xl ring-1 ring-slate-200 sm:-left-16">
        <div className="bg-primary/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
          <BellRingIcon className="text-primary h-4 w-4" />
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-900">Your package is on its way</p>
          <p className="text-[11px] text-slate-500">Arriving in about 15 minutes</p>
        </div>
      </div>
    </div>
  );
}

function AppleLogo({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function GooglePlayLogo({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924z"
      />
      <path fill="#34A853" d="M13.544 10.989l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973z" />
      <path
        fill="#FBBC04"
        d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594z"
      />
      <path fill="#EA4335" d="M13.544 13.056l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  );
}
