import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import GaridaLogoLong from "@/assets/img/garida-logo-long.png";
import DeveloperCredit from "@/components/layout/DeveloperCredit";
import StoreButtons from "@/components/marketing/StoreButtons";
import { CONTACT, SOCIAL_LINKS } from "@/lib/site";

const SOCIAL_ICONS = { Facebook: FacebookIcon, Instagram: InstagramIcon, LinkedIn: LinkedinIcon };

// showAppBand: set to false on pages whose last section already shows the store buttons (e.g. /download).
export default function WebFooter({ showAppBand = true }) {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Download the app", href: "/download" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Express delivery", href: "/#services" },
        { label: "How it works", href: "/#how-it-works" },
        { label: "Track in the app", href: "/download" },
      ],
    },
  ];

  const contactItems = [
    { icon: MailIcon, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: PhoneIcon, label: CONTACT.phone, href: CONTACT.phoneHref },
    { icon: MapPinIcon, label: CONTACT.address },
  ];

  return (
    <footer className="bg-ink grain relative overflow-hidden pb-12 text-stone-400">
      <div className="relative container mx-auto px-4">
        {/* App band */}
        {showAppBand && (
          <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 py-14 text-center lg:flex-row lg:text-left">
            <div>
              <p className="font-display text-3xl font-extrabold text-white md:text-4xl">
                Ship it with <span className="text-primary">Garida Express.</span>
              </p>
              <p className="mt-3 text-stone-400">Book, track and pay for deliveries from your phone.</p>
            </div>
            <StoreButtons tone="dark" />
          </div>
        )}

        {/* Columns */}
        <div className="grid gap-10 py-12 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Image
              src={GaridaLogoLong}
              alt="Garida Express"
              width={140}
              height={48}
              className="mx-auto h-[48px] w-[140px] object-contain brightness-0 invert sm:mx-0"
            />
            <p className="mt-4 text-sm">Worldwide express delivery services you can trust.</p>
            {SOCIAL_LINKS.length > 0 && (
              <ul className="mt-6 flex justify-center gap-2 sm:justify-start">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.label];
                  return (
                    <li key={social.label}>
                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${social.label} (opens in a new tab)`}
                        className="hover:bg-primary flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-stone-300 ring-1 ring-white/10 transition-colors hover:text-white hover:ring-transparent"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-4 font-mono text-xs tracking-[0.2em] text-white uppercase">{section.title}</h2>
              <ul className="space-y-3 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="mb-4 font-mono text-xs tracking-[0.2em] text-white uppercase">Contact</h2>
            <ul className="space-y-3 text-sm">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-start justify-center gap-3 sm:justify-start">
                  <item.icon className="text-primary mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {item.href ? (
                    <a href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-center text-sm md:flex-row md:justify-between">
          <p>© {currentYear} Garida Express. All rights reserved.</p>
          <DeveloperCredit />
        </div>
      </div>
    </footer>
  );
}
