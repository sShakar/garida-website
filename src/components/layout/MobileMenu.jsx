"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import StoreButtons from "@/components/marketing/StoreButtons";
import GaridaLogoLong from "@/assets/img/garida-logo-long.png";
import { AUTH_LINKS, CONTACT, NAV_ITEMS } from "@/lib/site";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full lg:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-paper w-full gap-0 border-l-0 p-0 sm:max-w-sm [&>button]:hidden">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">Site navigation, app downloads and account links</SheetDescription>

        {/* Header with logo and close button */}
        <div className="border-ink/10 flex h-16 items-center justify-between border-b px-4">
          <Link href="/" onClick={() => setIsOpen(false)} aria-label="Garida Express home">
            <Image
              src={GaridaLogoLong}
              alt="Garida Express"
              width={124}
              height={43}
              className="h-[43px] w-[124px] object-contain"
            />
          </Link>
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
              <XIcon className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </SheetClose>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto px-6 py-8">
          {/* Navigation links */}
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {NAV_ITEMS.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`group flex items-baseline gap-4 border-b border-stone-200 py-4 transition-colors ${
                        isActive ? "text-primary" : "text-ink hover:text-primary"
                      }`}
                    >
                      <span aria-hidden="true" className="font-mono text-xs text-stone-600">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl font-extrabold">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Account */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            <Button variant="outline" size="xl" asChild>
              <Link href={AUTH_LINKS.signIn} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                Sign in
                <span className="sr-only">(opens in a new tab)</span>
              </Link>
            </Button>
            <Button size="xl" asChild>
              <Link href={AUTH_LINKS.signUp} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                Get started
                <span className="sr-only">(opens in a new tab)</span>
              </Link>
            </Button>
          </div>

          {/* App */}
          <div className="mt-auto pt-10">
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-stone-600 uppercase">Get the app</p>
            <StoreButtons className="items-start" />
            <a
              href={CONTACT.phoneHref}
              className="hover:text-ink mt-6 block font-mono text-sm text-stone-600 transition-colors"
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
