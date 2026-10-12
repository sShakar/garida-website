// Mono "eyebrow" label used above section headings, e.g. "— 02 Services".
export default function SectionLabel({ index, children, tone = "light", className = "" }) {
  return (
    <p
      className={`inline-flex items-center gap-3 font-mono text-xs font-medium tracking-[0.2em] uppercase ${
        tone === "dark" ? "text-stone-400" : "text-stone-600"
      } ${className}`}
    >
      <span className="bg-primary h-px w-8" aria-hidden="true" />
      {index && <span className={tone === "dark" ? "text-red-400" : "text-red-700"}>{index}</span>}
      {children}
    </p>
  );
}
