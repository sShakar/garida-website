import Link from "next/link";
import {
  PackageIcon,
  TruckIcon,
  GlobeIcon,
  ClockIcon,
  ShieldIcon,
  ZapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  MapPinIcon,
  PackageCheckIcon,
  PlaneIcon,
  SparklesIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WebNavbar from "@/components/layout/WebNavbar";
import WebFooter from "@/components/layout/WebFooter";

export default function Home() {
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
      icon: ShieldIcon,
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
    { value: "200+", label: "Countries Served" },
    { value: "1M+", label: "Packages Delivered" },
    { value: "99.9%", label: "On-Time Delivery" },
    { value: "24/7", label: "Customer Support" },
  ];

  const heroButtons = [
    {
      label: "Start shipping now",
      link: "/coming-soon",
      variant: "default",
      icon: ArrowRightIcon,
    },
    {
      label: "Track a package",
      link: "/coming-soon",
      variant: "outline",
    },
  ];

  const ctaButtons = [
    {
      label: "Create free account",
      link: "/coming-soon",
      variant: "secondary",
      className: "bg-white px-8 text-base text-slate-900 hover:bg-slate-100",
    },
    {
      label: "Sign in to dashboard",
      link: "/coming-soon",
      variant: "outline",
      className: "bg-primary border-white px-8 text-base text-white hover:bg-white/10",
    },
  ];

  const shippingProcessSteps = [
    {
      stepNumber: "01",
      icon: PackageCheckIcon,
      title: "Package & Book",
      description: "Pack your items and create a shipment online in just a few clicks",
    },
    {
      stepNumber: "02",
      icon: TruckIcon,
      title: "We Collect",
      description: "Our driver picks up your package from your doorstep at your convenience",
    },
    {
      stepNumber: "03",
      icon: PlaneIcon,
      title: "Express Transit",
      description: "Your package travels via our global network of shipping routes",
    },
    {
      stepNumber: "04",
      icon: MapPinIcon,
      title: "Delivered",
      description: "Safe delivery to the destination with real-time tracking updates",
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

  return (
    <div className="bg-background min-h-screen">
      <WebNavbar />

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-4 h-72 w-72 animate-pulse rounded-full bg-blue-200/20 blur-3xl" />
          <div className="animation-delay-2000 bg-primary/10 absolute -right-4 bottom-20 h-96 w-96 animate-pulse rounded-full blur-3xl" />
          <div className="animation-delay-4000 absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-purple-200/20 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="mx-auto max-w-5xl space-y-8 text-center">
            {/* Badge */}
            <div className="animate-fadeIn flex justify-center">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 gap-1.5 px-4 py-1.5">
                <SparklesIcon className="h-3.5 w-3.5" />
                Trusted by 10,000+ businesses worldwide
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="animate-fadeIn animation-delay-200 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-7xl">
              Fast, Reliable,{" "}
              <span className="from-primary bg-gradient-to-r to-blue-600 bg-clip-text text-transparent">
                Global Delivery
              </span>
            </h1>

            {/* Subheading */}
            <p className="animate-fadeIn animation-delay-400 mx-auto max-w-3xl text-lg text-slate-600 md:text-xl lg:text-2xl">
              Ship packages worldwide with Garida Express. Track your shipments in real-time, get competitive rates, and
              deliver with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fadeIn animation-delay-600 flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
              {heroButtons.map((button, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={button.variant}
                  asChild
                  className="group px-8 text-base shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  <Link href={button.link}>
                    {button.label}
                    {button.icon && (
                      <button.icon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    )}
                  </Link>
                </Button>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="animate-fadeIn animation-delay-800 flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-slate-600 md:gap-8">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <span>Free pickup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <span>Real-time tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5 text-green-600" />
                <span>Insurance included</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center transition-transform duration-300 hover:scale-110">
                <div className="text-primary mb-2 text-4xl font-bold transition-colors group-hover:text-blue-400 md:text-5xl lg:text-6xl">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-300 md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative bg-gradient-to-b from-white to-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Our Services</Badge>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Why Choose Garida Express?
            </h2>
            <p className="text-lg text-slate-600 md:text-xl">
              We provide comprehensive shipping solutions tailored to your business needs
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:border-primary/20 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="from-primary/10 group-hover:from-primary/20 mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br to-blue-500/10 transition-transform duration-300 group-hover:scale-110 group-hover:to-blue-500/20">
                    <feature.icon className="text-primary h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Simple Process</Badge>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">How It Works</h2>
            <p className="text-lg text-slate-600 md:text-xl">Ship your packages in four simple steps</p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {shippingProcessSteps.map((step, index) => (
                <div key={index} className="group relative">
                  {/* Connector line - hidden on mobile, shown on larger screens */}
                  {index < shippingProcessSteps.length - 1 && (
                    <div className="via-primary absolute top-16 left-1/2 hidden h-1 w-full translate-x-4 bg-gradient-to-r from-transparent to-transparent lg:block" />
                  )}

                  <div className="relative text-center">
                    {/* Step number */}
                    <div className="mb-4 flex justify-center">
                      <div className="border-primary/20 text-primary group-hover:border-primary group-hover:bg-primary flex h-16 w-16 items-center justify-center rounded-full border-4 bg-white text-2xl font-bold transition-all duration-300 group-hover:scale-110 group-hover:text-white">
                        {step.stepNumber}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-4 flex justify-center">
                      <div className="from-primary/10 group-hover:from-primary/20 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br to-blue-500/10 transition-all duration-300 group-hover:scale-110 group-hover:to-blue-500/20">
                        <step.icon className="text-primary h-8 w-8" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-xl font-bold text-slate-900">{step.title}</h3>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-4">Testimonials</Badge>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">What Our Customers Say</h2>
            <p className="text-lg text-slate-600 md:text-xl">Join thousands of satisfied customers worldwide</p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:border-primary/20 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <CardHeader>
                  {/* Star rating */}
                  <div className="mb-3 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="h-5 w-5 text-yellow-400 transition-transform duration-300 group-hover:scale-110"
                      >
                        ⭐
                      </div>
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed text-slate-700 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-primary via-primary relative overflow-hidden bg-gradient-to-br to-blue-600 py-24 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 -left-4 h-72 w-72 animate-pulse rounded-full bg-white/5 blur-3xl" />
          <div className="animation-delay-2000 absolute -right-4 bottom-20 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Ready to start shipping?</h2>
            <p className="text-lg text-white/90 md:text-xl lg:text-2xl">
              Join thousands of businesses that trust Garida Express for their shipping needs
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
              {ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={button.variant}
                  asChild
                  className={`${button.className} group shadow-xl transition-all hover:scale-105 hover:shadow-2xl`}
                >
                  <Link href={button.link}>
                    {button.label}
                    <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon className="h-5 w-5" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WebFooter />
    </div>
  );
}
