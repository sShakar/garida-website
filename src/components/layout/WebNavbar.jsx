import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, PhoneIcon, SmartphoneIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import NavLinks from "@/components/layout/NavLinks";
import GaridaLogoLong from "@/assets/img/garida-logo-long.png";
import { AUTH_LINKS, CONTACT } from "@/lib/site";

export default function WebNavbar() {
  return (
    <>
      {/* Dispatch strip */}
      <div className="bg-ink hidden text-stone-300 md:block">
        <div className="container mx-auto flex h-9 items-center justify-between px-4 font-mono text-[11px] tracking-[0.15em] uppercase">
          <p className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-signal bg-primary absolute inset-0 rounded-full" />
              <span className="bg-primary relative h-2 w-2 rounded-full" />
            </span>
            Express courier · Erbil, Kurdistan
          </p>
          <div className="flex items-center gap-6">
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 transition-colors hover:text-white">
              <PhoneIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {CONTACT.phone}
            </a>
            <Link href="/download" className="flex items-center gap-2 text-white transition-colors hover:text-red-400">
              <SmartphoneIcon className="h-3.5 w-3.5" aria-hidden="true" />
              Get the app
            </Link>
          </div>
        </div>
      </div>

      <header className="border-ink/10 bg-paper/80 sticky top-0 z-50 border-b backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-4">
          <Link href="/" className="shrink-0 rounded-sm" aria-label="Garida Express home">
            <Image
              src={GaridaLogoLong}
              alt="Garida Express"
              width={124}
              height={43}
              priority
              className="h-[43px] w-[124px] object-contain"
            />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild className="hidden rounded-full lg:inline-flex">
              <Link href={AUTH_LINKS.signIn} target="_blank" rel="noopener noreferrer">
                Sign in
                <span className="sr-only">(opens in a new tab)</span>
              </Link>
            </Button>
            <Button asChild className="group hidden rounded-full lg:inline-flex">
              <Link href={AUTH_LINKS.signUp} target="_blank" rel="noopener noreferrer">
                Get started
                <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}
