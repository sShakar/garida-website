import Image from "next/image";
import { CheckIcon, ShieldCheckIcon, TruckIcon } from "lucide-react";

import Barcode from "@/components/marketing/Barcode";
import GaridaLogoLong from "@/assets/img/garida-logo-long.png";

// Decorative shipping label for the home hero. Illustrative only; hidden from assistive tech.
export default function Waybill({ className = "" }) {
  const details = [
    { label: "Service", value: "Express" },
    { label: "Weight", value: "2.4 kg" },
    { label: "Pieces", value: "1 / 1" },
  ];

  return (
    <div aria-hidden="true" className={`relative ${className}`}>
      <div className="bg-primary/20 absolute inset-12 rounded-full blur-3xl" />

      <div className="ring-ink/10 relative -rotate-2 rounded-2xl bg-white shadow-[0_40px_80px_-24px_rgba(12,12,14,0.45)] ring-1 transition-transform duration-500 motion-safe:hover:rotate-0">
        {/* Label header */}
        <div className="bg-ink flex items-center justify-between gap-4 rounded-t-2xl px-6 py-4">
          <Image
            src={GaridaLogoLong}
            alt=""
            loading="eager"
            width={110}
            height={38}
            className="h-[38px] w-[110px] object-contain brightness-0 invert"
          />
          <span className="border-primary text-primary font-display -rotate-6 rounded-md border-2 px-2.5 py-0.5 text-sm font-black tracking-wider uppercase">
            Express
          </span>
        </div>

        {/* From / to */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-4 px-6 pt-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">From</p>
            <p className="font-display text-ink text-2xl leading-tight font-extrabold">Erbil</p>
            <p className="text-xs text-stone-500">Kurdistan, IQ</p>
          </div>
          <TruckIcon className="text-primary mb-6 h-6 w-6" />
          <div className="text-right">
            <p className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">To</p>
            <p className="font-display text-ink text-2xl leading-tight font-extrabold">Your door</p>
            <p className="text-xs text-stone-500">Door to door</p>
          </div>
        </div>

        {/* Route progress with a parcel travelling along it */}
        <div className="px-6 pt-5">
          <div className="relative h-3">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-stone-300" />
            <div className="bg-primary absolute top-1/2 left-0 h-0.5 w-[68%] -translate-y-1/2" />
            <span className="bg-ink absolute top-1/2 left-0 h-3 w-3 -translate-y-1/2 rounded-full" />
            <span className="border-ink absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 rounded-full border-2 bg-white" />
            <div className="absolute inset-y-0 left-0 w-[68%]">
              <span className="animate-travel bg-primary absolute top-1/2 left-full flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md shadow-md ring-2 ring-white">
                <span className="h-1.5 w-1.5 rounded-sm bg-white" />
              </span>
            </div>
          </div>
        </div>

        {/* Shipment details */}
        <div className="mx-6 mt-6 grid grid-cols-3 gap-4 border-y border-dashed border-stone-300 py-4">
          {details.map((detail) => (
            <div key={detail.label}>
              <p className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">{detail.label}</p>
              <p className="text-ink mt-1 text-sm font-semibold">{detail.value}</p>
            </div>
          ))}
        </div>

        {/* Tracking number + barcode */}
        <div className="px-6 py-5">
          <p className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase">Tracking no.</p>
          <p className="text-ink mt-1 font-mono text-lg font-semibold tracking-[0.18em]">GX 2048 1937 IQ</p>
          <Barcode className="text-ink mt-3 h-14 w-full" />
        </div>

        {/* Live status */}
        <div className="bg-paper flex items-center justify-between rounded-b-2xl border-t border-stone-200 px-6 py-3">
          <span className="text-ink flex items-center gap-2 text-sm font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-signal bg-primary absolute inset-0 rounded-full" />
              <span className="bg-primary relative h-2.5 w-2.5 rounded-full" />
            </span>
            Out for delivery
          </span>
          <span className="font-mono text-xs text-stone-500">ETA 14:30</span>
        </div>
      </div>

      {/* Floating status chips */}
      <div className="animate-float absolute -top-5 left-[28%] flex items-center gap-2 rounded-full bg-white py-2 pr-4 pl-2 shadow-lg ring-1 ring-stone-200">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
          <CheckIcon className="h-4 w-4" strokeWidth={3} />
        </span>
        <span className="text-ink text-xs font-semibold">
          Picked up <span className="font-mono font-normal text-stone-500">09:24</span>
        </span>
      </div>
      <div className="animate-float bg-ink absolute -right-3 bottom-24 flex items-center gap-2 rounded-full py-2 pr-4 pl-2 text-white shadow-lg [animation-delay:-3.5s] sm:-right-8 lg:-right-3 xl:-right-8">
        <span className="bg-primary flex h-7 w-7 items-center justify-center rounded-full">
          <ShieldCheckIcon className="h-3.5 w-3.5" />
        </span>
        <span className="text-xs font-semibold">Insurance included</span>
      </div>
    </div>
  );
}
