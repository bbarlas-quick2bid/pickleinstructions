interface PickleballIconProps {
  size?: number;
  className?: string;
}

// Holes: { cx, cy, r } — distributed to match real pickleball layout
// Shadow crescent rendered per-hole by overlapping an offset dark circle
const HOLES = [
  // Top cluster
  { cx: 48, cy: 13, r: 6.5 },
  { cx: 64, cy: 13, r: 5.0 },
  { cx: 33, cy: 18, r: 5.0 },
  // Upper left
  { cx: 18, cy: 30, r: 6.0 },
  { cx: 30, cy: 25, r: 5.0 },
  // Upper right
  { cx: 74, cy: 24, r: 6.0 },
  { cx: 84, cy: 37, r: 5.5 },
  // Center-upper
  { cx: 41, cy: 37, r: 8.0 },
  { cx: 58, cy: 35, r: 6.5 },
  // Left side
  { cx: 13, cy: 46, r: 5.5 },
  { cx: 16, cy: 61, r: 5.0 },
  // Center
  { cx: 29, cy: 50, r: 7.0 },
  { cx: 53, cy: 51, r: 9.0 },
  { cx: 72, cy: 47, r: 6.5 },
  // Right side
  { cx: 83, cy: 58, r: 5.5 },
  // Center-lower
  { cx: 42, cy: 65, r: 7.5 },
  { cx: 63, cy: 63, r: 7.0 },
  // Lower left
  { cx: 21, cy: 72, r: 6.0 },
  // Lower
  { cx: 35, cy: 78, r: 5.5 },
  { cx: 52, cy: 76, r: 6.5 },
  { cx: 69, cy: 75, r: 5.5 },
  // Lower right
  { cx: 80, cy: 67, r: 5.0 },
  // Bottom
  { cx: 43, cy: 87, r: 5.0 },
  { cx: 59, cy: 85, r: 5.0 },
];

export default function PickleballIcon({ size = 48, className = "" }: PickleballIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Pickleball"
      role="img"
    >
      <defs>
        {/* Ball body — warm lime green, bright at upper-left */}
        <radialGradient id="ballGrad" cx="33%" cy="28%" r="72%">
          <stop offset="0%"   stopColor="#D9EE6A" />
          <stop offset="25%"  stopColor="#B8D93A" />
          <stop offset="65%"  stopColor="#96C020" />
          <stop offset="100%" stopColor="#5E8008" />
        </radialGradient>

        {/* Rim shadow — darkens the outer edge for spherical feel */}
        <radialGradient id="rimShadow" cx="50%" cy="50%" r="50%">
          <stop offset="58%"  stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.38" />
        </radialGradient>

        {/* Soft blur filter for the large highlight blob */}
        <filter id="highlightBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4.5" />
        </filter>

        {/* Clip to ball boundary */}
        <clipPath id="ballClip">
          <circle cx="50" cy="50" r="46" />
        </clipPath>
      </defs>

      {/* ── Ball base ── */}
      <circle cx="50" cy="50" r="46" fill="url(#ballGrad)" />

      {/* ── Holes ── */}
      <g clipPath="url(#ballClip)">
        {HOLES.map((h, i) => (
          <g key={i}>
            {/* White hole opening */}
            <circle cx={h.cx} cy={h.cy} r={h.r} fill="white" />
            {/* Dark crescent shadow — offset down+right, overlapping lower portion of hole */}
            <circle
              cx={h.cx + h.r * 0.22}
              cy={h.cy + h.r * 0.35}
              r={h.r * 0.82}
              fill="#3a5a06"
              opacity="0.38"
            />
          </g>
        ))}
      </g>

      {/* ── Rim shadow for spherical depth ── */}
      <circle
        cx="50" cy="50" r="46"
        fill="url(#rimShadow)"
        clipPath="url(#ballClip)"
      />

      {/* ── Large soft highlight (upper-left) ── */}
      <ellipse
        cx="36" cy="34"
        rx="22" ry="16"
        fill="white"
        opacity="0.28"
        filter="url(#highlightBlur)"
        clipPath="url(#ballClip)"
        transform="rotate(-15 36 34)"
      />

      {/* ── Sharp specular glint ── */}
      <ellipse
        cx="34" cy="27"
        rx="9" ry="5.5"
        fill="white"
        opacity="0.55"
        clipPath="url(#ballClip)"
        transform="rotate(-20 34 27)"
      />
    </svg>
  );
}
