import Link from "next/link";

import { APP_LINKS } from "@/lib/site";

const STORES = [
  { name: "App Store", caption: "Download on the", link: APP_LINKS.appStore, icon: AppleLogo },
  { name: "Google Play", caption: "GET IT ON", link: APP_LINKS.googlePlay, icon: GooglePlayLogo },
];

// App Store + Google Play buttons. Use tone="dark" on ink/red backgrounds so the focus outline stays visible.
export default function StoreButtons({ tone = "light", className = "" }) {
  const focusOutline = tone === "dark" ? "focus-visible:outline-white" : "focus-visible:outline-ink";

  return (
    <div className={`flex flex-col items-center gap-3 sm:flex-row ${className}`}>
      {STORES.map((store) => (
        <Link
          key={store.name}
          href={store.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex h-14 w-52 items-center gap-3 rounded-xl bg-black px-4 text-white ring-1 ring-white/20 transition hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 motion-safe:hover:-translate-y-0.5 ${focusOutline}`}
        >
          <store.icon className="h-7 w-7 shrink-0" />
          <span className="flex flex-col items-start leading-none">
            <span className="text-[11px] font-medium">{store.caption}</span>
            <span className="mt-1 text-xl font-semibold tracking-tight">{store.name}</span>
          </span>
          <span className="sr-only">(opens in a new tab)</span>
        </Link>
      ))}
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
