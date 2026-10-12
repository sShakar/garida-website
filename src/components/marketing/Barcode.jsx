// Decorative Code-128-style barcode. The pattern is fixed so server and client render the same markup.
const BAR_WIDTHS = [
  3, 1, 2, 1, 1, 3, 2, 1, 1, 2, 3, 1, 2, 2, 1, 1, 3, 1, 2, 1, 1, 2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 1, 2, 1, 3, 2, 1, 1, 2,
  1, 1, 3, 1, 2, 2, 1, 1, 2, 3, 1, 2, 1, 3, 1, 1, 2, 1, 1, 3, 2,
];

const TOTAL_WIDTH = BAR_WIDTHS.reduce((sum, width) => sum + width, 0);

const BARS = BAR_WIDTHS.reduce((bars, width, index) => {
  const x = BAR_WIDTHS.slice(0, index).reduce((sum, w) => sum + w, 0);
  if (index % 2 === 0) bars.push({ x, width });
  return bars;
}, []);

export default function Barcode({ className = "" }) {
  return (
    <svg
      viewBox={`0 0 ${TOTAL_WIDTH} 40`}
      preserveAspectRatio="none"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {BARS.map((bar) => (
        <rect key={bar.x} x={bar.x} y="0" width={bar.width} height="40" />
      ))}
    </svg>
  );
}
