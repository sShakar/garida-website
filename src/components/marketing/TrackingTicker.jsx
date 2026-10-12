import { PackageIcon } from "lucide-react";

const SERVICES = [
  "Express delivery",
  "Doorstep pickup",
  "Real-time tracking",
  "Insured shipments",
  "24/7 support",
  "Pay with FIB",
];

// Endless "parcel tape" ticker. The second copy of the list only exists for the seamless loop.
export default function TrackingTicker({ className = "" }) {
  return (
    <div className={`mask-fade-x overflow-hidden ${className}`}>
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {[false, true].map((isCopy) => (
          <ul key={String(isCopy)} aria-hidden={isCopy || undefined} className="flex shrink-0 items-center">
            {SERVICES.map((service) => (
              <li
                key={service}
                className="font-display flex items-center gap-8 pr-8 text-lg font-extrabold whitespace-nowrap uppercase md:text-xl"
              >
                {service}
                <PackageIcon className="text-primary h-5 w-5" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
