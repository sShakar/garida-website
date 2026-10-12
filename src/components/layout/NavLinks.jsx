"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_ITEMS } from "@/lib/site";

// Desktop navigation pill. The active route comes from the URL, so pages don't pass any props.
export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="ring-ink/10 flex items-center gap-1 rounded-full bg-white/70 p-1 ring-1">
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`block rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap transition-colors ${
                isActive ? "bg-ink text-white" : "hover:text-ink text-stone-600 hover:bg-stone-100"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
