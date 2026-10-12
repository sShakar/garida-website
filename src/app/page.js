import Link from "next/link";
import {
  ArrowRightIcon,
  BellRingIcon,
  CheckIcon,
  ClockIcon,
  GlobeIcon,
  MapPinIcon,
  PackageCheckIcon,
  PackageIcon,
  PlaneIcon,
  QuoteIcon,
  ShieldCheckIcon,
  StarIcon,
  TruckIcon,
  WalletIcon,
  ZapIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import WebNavbar from "@/components/layout/WebNavbar";
import WebFooter from "@/components/layout/WebFooter";
import SectionLabel from "@/components/marketing/SectionLabel";
import Waybill from "@/components/marketing/Waybill";
import PhoneMockup from "@/components/marketing/PhoneMockup";
import StoreButtons from "@/components/marketing/StoreButtons";
import TrackingTicker from "@/components/marketing/TrackingTicker";
import { AUTH_LINKS } from "@/lib/site";

export default function Home() {
  const trustPoints = ["Free pickup", "Real-time tracking", "Insurance included"];

  const appHighlights = [
    { icon: MapPinIcon, text: "Live GPS tracking for every package" },
    { icon: BellRingIcon, text: "Instant alerts from pickup to doorstep" },
    { icon: WalletIcon, text: "Top up and pay securely with FIB" },
  ];

  const features = [
    {
      icon: TruckIcon,
      title: "Fast Delivery",
      description: "Express shipping with same-day and next-day delivery options available worldwide.",
    },
    {
      icon: GlobeIcon,
      title: "Global Reach",
      description: "Ship to over 200 countries and territories with our extensive network.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Secure Shipping",
      description: "Full insurance coverage and real-time tracking for peace of mind.",
    },
    {
      icon: ClockIcon,
      title: "24/7 Support",
      description: "Round-the-clock customer service to assist with all your shipping needs.",
    },
    {
      icon: PackageIcon,
      title: "Easy Packaging",
      description: "Free packaging materials and pickup services for your convenience.",
    },
    {
      icon: ZapIcon,
      title: "Instant Quotes",
      description: "Get instant shipping quotes and book your shipment in minutes.",
    },
  ];

  const stats = [
    { value: "200+", label: "Countries served" },
    { value: "1M+", label: "Packages delivered" },
    { value: "99.9%", label: "On-time delivery" },
    { value: "24/7", label: "Customer support" },
  ];

  const shippingProcessSteps = [
    {
      icon: PackageCheckIcon,
      title: "Package & Book",
      description: "Pack your items and create a shipment online in just a few clicks.",
    },
    {
      icon: TruckIcon,
      title: "We Collect",
      description: "Our driver picks up your package from your doorstep at your convenience.",
    },
    {
      icon: PlaneIcon,
      title: "Express Transit",
      description: "Your package travels via our global network of shipping routes.",
    },
    {
      icon: MapPinIcon,
      title: "Delivered",
      description: "Safe delivery to the destination with real-time tracking updates.",
    },
  ];

  const testimonials = [
    {
      quote: "Garida Express has transformed our international shipping. Fast, reliable, and affordable.",
      author: "Sarah Johnson",
      role: "E-commerce Business Owner",
      rating: 5,
    },
    {
      quote: "The tracking system is excellent. I always know exactly where my packages are.",
      author: "Michael Chen",
      role: "Import/Export Manager",
      rating: 5,
    },
    {
      quote: "24/7 customer support is a game-changer. They resolved my urgent shipping issue instantly.",
      author: "Emma Williams",
      role: "Small Business Owner",
      rating: 5,
    },
  ];

  const [featuredService, ...otherServices] = features;

  return (
    <div className="min-h-screen">
      <WebNavbar />

      <main>
        {/* Hero Section */}
        <section className="bg-grid relative overflow-hidden">
          <div
            aria-hidden="true"
            className="bg-primary bg-speed absolute top-0 -right-24 hidden h-full w-[42%] -skew-x-12 text-white lg:block"
          />

          <div className="relative container mx-auto grid items-center gap-14 px-4 pt-14 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:pt-20 lg:pb-28">
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 text-center motion-safe:duration-700 lg:text-left">
              <SectionLabel>
                <span className="hidden sm:inline">Express courier · </span>Same-day &amp; next-day
              </SectionLabel>

              <h1 className="font-display text-ink mt-6 text-[2.6rem] leading-[0.95] font-black sm:text-6xl xl:text-7xl">
                Express delivery, <span className="text-primary whitespace-nowrap">door to door.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-lg text-stone-600 md:text-xl lg:mx-0">
                Ship packages with Garida Express. Track your shipments in real-time, get competitive rates, and deliver
                with confidence.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button size="xl" asChild className="group shadow-primary/30 shadow-lg">
                  <Link href={AUTH_LINKS.signUp} target="_blank" rel="noopener noreferrer">
                    Start shipping now
                    <ArrowRightIcon className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </Link>
                </Button>
                <Button size="xl" variant="outline" asChild className="border-ink/15 bg-white/70">
                  <Link href="#get-the-app">
                    <MapPinIcon aria-hidden="true" />
                    Track in the app
                  </Link>
                </Button>
              </div>

              <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start">
                {trustPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 font-mono text-xs tracking-[0.12em] text-stone-600 uppercase"
                  >
                    <span className="bg-ink flex h-5 w-5 items-center justify-center rounded-full text-white">
                      <CheckIcon className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <Waybill className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-8 motion-safe:fill-mode-both mx-auto w-full max-w-md motion-safe:delay-150 motion-safe:duration-700" />
          </div>

          {/* Parcel-tape ticker */}
          <div className="bg-ink relative -mx-4 -rotate-1 py-4 text-white">
            <TrackingTicker />
          </div>
        </section>

        {/* App Download Section */}
        <section id="get-the-app" aria-labelledby="get-the-app-title" className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="bg-ink grain relative overflow-hidden rounded-[2rem] px-6 pt-12 sm:px-12 lg:px-16 lg:pt-0">
              <div aria-hidden="true" className="bg-grid-dark absolute inset-0 opacity-70" />
              <div
                aria-hidden="true"
                className="bg-primary/35 absolute -bottom-40 -left-24 h-96 w-96 rounded-full blur-3xl"
              />

              <div className="relative grid items-center gap-12 lg:grid-cols-2">
                <div className="reveal text-center lg:py-20 lg:text-left">
                  <SectionLabel tone="dark" index="01">
                    The Garida Express app
                  </SectionLabel>
                  <h2
                    id="get-the-app-title"
                    className="font-display mt-5 text-4xl leading-[1.02] font-extrabold text-white md:text-5xl"
                  >
                    Ship and track from your phone.
                  </h2>
                  <p className="mx-auto mt-5 max-w-lg text-lg text-stone-300 lg:mx-0">
                    Create shipments, schedule pickups and follow every package live. Free on iPhone and Android.
                  </p>

                  <ul className="mx-auto mt-8 inline-flex flex-col gap-3 text-left lg:mx-0">
                    {appHighlights.map((highlight) => (
                      <li key={highlight.text} className="flex items-center gap-3 text-stone-200">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15">
                          <highlight.icon className="h-4 w-4 text-red-400" aria-hidden="true" />
                        </span>
                        {highlight.text}
                      </li>
                    ))}
                  </ul>

                  <StoreButtons tone="dark" className="mt-10 justify-center lg:justify-start" />

                  <Link
                    href="/download"
                    className="group mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-medium text-stone-300 transition-colors hover:text-white"
                  >
                    Learn more about the app
                    <ArrowRightIcon
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>

                <div className="relative -mb-24 self-end lg:mb-0 lg:pt-16">
                  <PhoneMockup className="lg:translate-y-16" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" aria-labelledby="services-title" className="pb-20 lg:pb-28">
          <div className="container mx-auto px-4">
            <div className="mb-12 grid items-end gap-6 lg:grid-cols-2">
              <div>
                <SectionLabel index="02">Our services</SectionLabel>
                <h2
                  id="services-title"
                  className="font-display text-ink mt-5 text-4xl leading-[1.02] font-extrabold md:text-5xl"
                >
                  Why choose Garida Express?
                </h2>
              </div>
              <p className="text-lg text-stone-600 lg:max-w-md lg:justify-self-end">
                We provide comprehensive shipping solutions tailored to your business needs.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {/* Featured service */}
              <article className="bg-ink grain reveal relative flex min-h-80 flex-col justify-between overflow-hidden rounded-3xl p-8 text-white md:col-span-2 lg:col-span-1 lg:row-span-2">
                <div aria-hidden="true" className="bg-speed absolute inset-0 text-white" />
                <div className="relative flex items-start justify-between">
                  <span className="bg-primary flex h-14 w-14 items-center justify-center rounded-2xl">
                    <featuredService.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs tracking-[0.2em] text-stone-400">01</span>
                </div>
                <div className="relative">
                  <h3 className="font-display text-3xl font-extrabold md:text-4xl">{featuredService.title}</h3>
                  <p className="mt-3 max-w-sm text-stone-300">{featuredService.description}</p>
                </div>
              </article>

              {otherServices.map((feature, index) => (
                <article
                  key={feature.title}
                  className={`group reveal relative rounded-3xl border border-stone-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-stone-300 hover:shadow-[0_20px_40px_-20px_rgba(12,12,14,0.25)] ${
                    index === otherServices.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="bg-paper text-ink group-hover:bg-primary flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-stone-200 transition-colors group-hover:text-white group-hover:ring-transparent">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-stone-500">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-ink mt-6 text-xl font-extrabold">{feature.title}</h3>
                  <p className="mt-2 text-stone-600">{feature.description}</p>
                </article>
              ))}

              {/* Stats */}
              <dl className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-stone-200 bg-stone-200 sm:grid-cols-4 md:col-span-2 lg:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col justify-between bg-white p-6">
                    <dt className="font-mono text-xs tracking-[0.15em] text-stone-600 uppercase">{stat.label}</dt>
                    <dd className="font-display text-ink mt-3 text-4xl font-black md:text-5xl">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          id="how-it-works"
          aria-labelledby="how-it-works-title"
          className="border-y border-stone-200 bg-white py-20 lg:py-28"
        >
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <SectionLabel index="03">Simple process</SectionLabel>
              <h2
                id="how-it-works-title"
                className="font-display text-ink mt-5 text-4xl leading-[1.02] font-extrabold md:text-5xl"
              >
                How it works
              </h2>
              <p className="mt-4 text-lg text-stone-600">Ship your packages in four simple steps.</p>
            </div>

            <div className="relative">
              {/* Route line linking the stops */}
              <svg
                aria-hidden="true"
                className="absolute top-8 right-[12.5%] left-[12.5%] hidden h-1 w-[75%] overflow-visible lg:block"
                preserveAspectRatio="none"
                viewBox="0 0 100 2"
              >
                <line
                  x1="0"
                  y1="1"
                  x2="100"
                  y2="1"
                  className="stroke-primary animate-route"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                {shippingProcessSteps.map((step, index) => (
                  <li key={step.title} className="reveal relative text-center">
                    <span className="border-primary bg-paper text-primary relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-[0_0_0_8px_white]">
                      <step.icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <p className="mt-6 font-mono text-xs tracking-[0.2em] text-stone-500 uppercase">
                      Stop {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-display text-ink mt-2 text-xl font-extrabold">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-xs text-stone-600">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section aria-labelledby="testimonials-title" className="py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-12 grid items-end gap-6 lg:grid-cols-2">
              <div>
                <SectionLabel index="04">Testimonials</SectionLabel>
                <h2
                  id="testimonials-title"
                  className="font-display text-ink mt-5 text-4xl leading-[1.02] font-extrabold md:text-5xl"
                >
                  What our customers say
                </h2>
              </div>
              <p className="text-lg text-stone-600 lg:max-w-md lg:justify-self-end">
                Join thousands of satisfied customers worldwide.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <figure
                  key={testimonial.author}
                  className="reveal relative flex flex-col rounded-3xl border border-stone-200 bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <QuoteIcon className="text-primary h-8 w-8" aria-hidden="true" />
                    <span className="font-mono text-xs tracking-[0.2em] text-stone-500">
                      REF-{String(index + 1).padStart(3, "0")}
                    </span>
                  </div>
                  <blockquote className="text-ink mt-5 flex-1 text-lg leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex gap-0.5" aria-hidden="true">
                    {Array.from({ length: testimonial.rating }, (_, starIndex) => (
                      <StarIcon key={starIndex} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="sr-only">Rated {testimonial.rating} out of 5</p>
                  <figcaption className="mt-4 border-t border-dashed border-stone-300 pt-4">
                    <p className="text-ink font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-stone-600">{testimonial.role}</p>
                  </figcaption>
                </figure>
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
              <h2 id="cta-title" className="font-display text-4xl leading-[0.98] font-black md:text-6xl">
                Ready to start shipping?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-balance text-white lg:mx-0">
                Join thousands of businesses that trust Garida Express for their shipping needs.
              </p>
              <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-xs tracking-[0.12em] uppercase lg:justify-start">
                {["Free pickup", "Real-time tracking", "24/7 support"].map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <Button size="xl" variant="paper" asChild className="group">
                <Link href={AUTH_LINKS.signUp} target="_blank" rel="noopener noreferrer">
                  Create free account
                  <ArrowRightIcon className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  <span className="sr-only">(opens in a new tab)</span>
                </Link>
              </Button>
              <Button size="xl" variant="ink" asChild>
                <Link href={AUTH_LINKS.signIn} target="_blank" rel="noopener noreferrer">
                  Sign in to dashboard
                  <span className="sr-only">(opens in a new tab)</span>
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
