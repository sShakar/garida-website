import Link from "next/link";
import { PackageIcon, UsersIcon, GlobeIcon, AwardIcon } from "lucide-react";

import WebNavbar from "@/components/layout/WebNavbar";
import WebFooter from "@/components/layout/WebFooter";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "About Us - Garida Express",
  description: "Learn about Garida Express and our commitment to worldwide shipping excellence",
};

export default function AboutPage() {
  const values = [
    {
      icon: PackageIcon,
      title: "Reliability",
      description: "We deliver on our promises with 99.9% on-time delivery rate.",
    },
    {
      icon: UsersIcon,
      title: "Customer First",
      description: "Your success is our priority. We're here 24/7 to support you.",
    },
    {
      icon: GlobeIcon,
      title: "Global Network",
      description: "Extensive worldwide coverage to reach every corner of the globe.",
    },
    {
      icon: AwardIcon,
      title: "Excellence",
      description: "Award-winning service with industry-leading standards.",
    },
  ];

  const storyStats = [
    { value: "1M+", label: "Packages Delivered" },
    { value: "200+", label: "Countries Served" },
    { value: "99.9%", label: "On-Time Delivery" },
    { value: "24/7", label: "Customer Support" },
  ];

  const ctaButtons = [
    {
      label: "Get started",
      link: "https://admin.garidaexpress.com/sign-up",
      variant: "secondary",
      className: "bg-white px-8 text-base text-slate-900 hover:bg-slate-100",
    },
    {
      label: "Contact us",
      link: "/contact",
      variant: "outline",
      className: "bg-primary border-white px-8 text-base text-white hover:bg-white/10",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <WebNavbar activePage="about" />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">About Garida Express</h1>
            <p className="text-lg text-slate-600">
              We're on a mission to make worldwide shipping simple, reliable, and accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
                <p className="text-slate-600">
                  Founded with a vision to revolutionize the shipping industry, Garida Express has grown from a small
                  local courier service to a global shipping powerhouse.
                </p>
                <p className="text-slate-600">
                  Our commitment to excellence, innovation, and customer satisfaction has helped us build lasting
                  relationships with thousands of businesses worldwide.
                </p>
                <p className="text-slate-600">
                  Today, we deliver over 1 million packages annually to more than 200 countries, maintaining our promise
                  of fast, reliable, and secure shipping.
                </p>
              </div>
              <div className="space-y-4 rounded-lg bg-slate-100 p-8">
                {storyStats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="text-primary text-4xl font-bold">{stat.value}</div>
                    <div className="text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide everything we do</p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="text-center transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <value.icon className="text-primary h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{value.description}</p>
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
            <h2 className="text-3xl font-bold md:text-4xl">Ready to ship with us?</h2>
            <p className="text-lg text-white/90">
              Join thousands of businesses that trust Garida Express for their shipping needs
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              {ctaButtons.map((button, index) => (
                <Button key={index} size="lg" variant={button.variant} asChild className={button.className}>
                  <Link href={button.link}>{button.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WebFooter />
    </div>
  );
}
