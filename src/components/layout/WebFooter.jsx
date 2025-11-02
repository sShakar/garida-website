import Image from "next/image";
import Link from "next/link";
import GaridaLogoLong from "@/assets/img/garida-logo-long.png";

export default function WebFooter() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Express Shipping", href: "#" },
        { label: "International", href: "#" },
        { label: "Same Day", href: "#" },
        { label: "Tracking", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Careers", href: "#" },
        { label: "Partners", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Cookie Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div className="text-center md:text-left">
            <Image
              src={GaridaLogoLong}
              alt="Garida Express"
              width={140}
              height={42}
              className="mx-auto mb-4 object-contain brightness-0 invert md:mx-0"
            />
            <p className="text-sm">Worldwide express delivery services you can trust.</p>
          </div>
          {footerSections.map((section, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="mb-4 font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>© {currentYear} Garida Express. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
