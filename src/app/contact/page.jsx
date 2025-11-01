"use client";

import { useState } from "react";
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from "lucide-react";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { WebNavbar } from "@/components/layout/WebNavbar";
import { WebFooter } from "@/components/layout/WebFooter";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Contact form data:", formData);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsLoading(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email",
      description: "Send us an email anytime",
      value: "info@garidaexpress.com",
      link: "mailto:info@garidaexpress.com",
    },
    {
      icon: PhoneIcon,
      title: "Phone",
      description: "Call us during business hours",
      value: "+964 (750) 666 9290",
      link: "tel:+9647506669290",
    },
    {
      icon: MapPinIcon,
      title: "Office",
      description: "Visit our office",
      value: "Zanko Bank, Adala, Erbil-Kurdistan, Iraq",
      link: "#",
    },
    {
      icon: ClockIcon,
      title: "Hours",
      description: "We're available",
      value: "24/7 Customer Support",
      link: "#",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <WebNavbar activePage="contact" />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">Get in Touch</h1>
            <p className="text-lg text-slate-600">Have a question or need help? We're here for you 24/7.</p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="bg-primary/10 mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                    <info.icon className="text-primary h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                  <CardDescription className="text-xs">{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {info.link.startsWith("#") ? (
                    <p className="text-sm font-medium text-slate-900">{info.value}</p>
                  ) : (
                    <Link href={info.link} className="text-primary text-sm font-medium hover:underline">
                      {info.value}
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isLoading}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="How can we help you?"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={isLoading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="focus-visible:border-primary focus-visible:ring-primary/20 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus-visible:ring-2 disabled:bg-slate-50 disabled:opacity-50"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                        Sending message...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WebFooter />
    </div>
  );
}
