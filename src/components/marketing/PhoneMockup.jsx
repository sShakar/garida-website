import { BellRingIcon, CheckIcon, HomeIcon, MapPinIcon, PackagePlusIcon, UserIcon } from "lucide-react";

// Decorative phone showing a tracked shipment. Illustrative only; hidden from assistive tech.
export default function PhoneMockup({ className = "" }) {
  const steps = [
    { label: "Picked up", time: "9:24 AM", status: "done" },
    { label: "In transit", time: "11:02 AM", status: "done" },
    { label: "Out for delivery", time: "1:15 PM", status: "current" },
    { label: "Delivered", time: "", status: "pending" },
  ];

  const tabs = [HomeIcon, MapPinIcon, PackagePlusIcon, UserIcon];

  return (
    <div aria-hidden="true" className={`relative mx-auto w-full max-w-[280px] ${className}`}>
      <div className="bg-primary/25 absolute inset-10 rounded-full blur-3xl" />

      {/* Device */}
      <div className="bg-ink relative rounded-[2.75rem] p-3 shadow-2xl ring-1 ring-white/10">
        <div className="relative flex aspect-[9/18.5] flex-col overflow-hidden rounded-[2.25rem] bg-white">
          <div className="bg-ink absolute top-2 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rounded-full" />

          {/* Status header */}
          <div className="bg-primary px-5 pt-12 pb-5 text-white">
            <p className="font-mono text-[10px] tracking-wider text-white/80 uppercase">Shipment GX-20481</p>
            <p className="font-display mt-1 text-lg font-extrabold">Out for delivery</p>
            <p className="text-[11px] text-white/85">Arriving today, 2:00 - 4:00 PM</p>
          </div>

          {/* Map */}
          <svg viewBox="0 0 260 120" className="w-full shrink-0 bg-stone-100">
            <rect x="82" y="50" width="96" height="40" rx="6" className="fill-emerald-100" />
            <path d="M0 36H260M0 100H260M64 0V120M196 0V120" className="stroke-white" strokeWidth="10" fill="none" />
            <path
              d="M28 100H64V36H232"
              className="stroke-primary animate-route"
              strokeWidth="4"
              strokeDasharray="10 14"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <circle cx="28" cy="100" r="6" className="fill-ink" />
            <circle cx="140" cy="36" r="9" className="stroke-primary fill-white" strokeWidth="4" />
            <path d="M232 36c0-9-7-15-14-15s-14 6-14 15c0 8 14 22 14 22s14-14 14-22z" className="fill-primary" />
            <circle cx="218" cy="35" r="5" className="fill-white" />
          </svg>

          {/* Timeline */}
          <ol className="flex-1 space-y-4 px-5 py-5">
            {steps.map((step) => (
              <li key={step.label} className="flex items-center gap-3">
                {step.status === "done" && (
                  <span className="bg-primary flex h-5 w-5 items-center justify-center rounded-full">
                    <CheckIcon className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                )}
                {step.status === "current" && (
                  <span className="bg-primary ring-primary/20 h-5 w-5 rounded-full ring-4" />
                )}
                {step.status === "pending" && <span className="h-5 w-5 rounded-full bg-stone-200" />}
                <span
                  className={`flex-1 text-sm ${step.status === "pending" ? "text-stone-400" : "text-ink font-medium"}`}
                >
                  {step.label}
                </span>
                <span className="font-mono text-[10px] text-stone-500">{step.time}</span>
              </li>
            ))}
          </ol>

          {/* Tab bar */}
          <div className="flex items-center justify-around border-t border-stone-100 px-4 pt-3 pb-5">
            {tabs.map((Icon, index) => (
              <Icon key={index} className={`h-5 w-5 ${index === 1 ? "text-primary" : "text-stone-400"}`} />
            ))}
          </div>
          <div className="bg-ink absolute bottom-1.5 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full" />
        </div>
      </div>

      {/* Floating notification */}
      <div className="animate-float absolute top-[30%] -left-4 flex w-56 items-center gap-3 rounded-2xl bg-white p-3 text-left shadow-xl ring-1 ring-stone-200 sm:-left-16">
        <div className="bg-primary/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
          <BellRingIcon className="text-primary h-4 w-4" />
        </div>
        <div>
          <p className="text-ink text-xs font-semibold">Your package is on its way</p>
          <p className="text-[11px] text-stone-500">Arriving in about 15 minutes</p>
        </div>
      </div>
    </div>
  );
}
