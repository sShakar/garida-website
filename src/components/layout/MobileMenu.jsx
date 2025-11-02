"use client";

import { useState } from "react";
import { MenuIcon, FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import GaridaLogoLong from "@/assets/img/garida-logo-long.png";

export function MobileMenu({ activePage = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "/", page: "" },
    { label: "About", link: "/about", page: "about" },
    { label: "Contact", link: "/contact", page: "contact" },
  ];

  const socialMediaItems = [
    { icon: FacebookIcon, link: "https://facebook.com" },
    { icon: InstagramIcon, link: "https://instagram.com" },
    { icon: LinkedinIcon, link: "https://linkedin.com" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="flex flex-col p-0 [&>button]:hidden">
        {/* Header with Logo and Close Button */}
        <div className="border-b bg-white px-4 py-3">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src={GaridaLogoLong}
                alt="Garida Express"
                width={120}
                height={36}
                className="object-contain"
              />
            </Link>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 cursor-pointer">
                <XIcon className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetClose>
          </div>
        </div>

        {/* Menu Content - Centered */}
        <div className="flex flex-1 items-center justify-center overflow-y-auto">
          <div className="container mx-auto max-w-md px-4 py-8">
            <div className="flex flex-col gap-8">
              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 text-center">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`cursor-pointer text-2xl font-semibold transition-colors ${
                      activePage === item.page
                        ? "text-primary"
                        : "hover:text-primary text-slate-900"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Social Media Links */}
              <div className="flex items-center justify-center gap-4 border-t border-b py-8">
                {socialMediaItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 transition-colors hover:text-white"
                  >
                    <item.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>

              {/* Auth Buttons */}
              <div className="flex flex-col gap-4">
                <Button variant="outline" asChild className="h-12 w-full justify-center text-lg">
                  <Link href="/coming-soon" onClick={() => setIsOpen(false)}>
                    Sign in
                  </Link>
                </Button>
                <Button asChild className="h-12 w-full justify-center text-lg">
                  <Link href="/coming-soon" onClick={() => setIsOpen(false)}>
                    Get started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
