interface PickleballIconProps {
  size?: number;
  className?: string;
}

// 10 holes arranged realistically on a pickleball face
const HOLES = [
  { cx: 50, cy: 26 },
  { cx: 68, cy: 34 },
  { cx: 74, cy: 53 },
  { cx: 64, cy: 70 },
  { cx: 46, cy: 76 },
  { cx: 29, cy: 66 },
  { cx: 24, cy: 47 },
  { cx: 34, cy: 31 },
  { cx: 53, cy: 50 },
  { cx: 38, cy: 53 },
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
        {/* Main ball — warm yellow-green, light from top-left */}
        <radialGradient id="ballGrad" cx="35%" cy="28%" r="70%">
          <stop offset="0%"   stopColor="#F6FF7A" />
          <stop offset="30%"  stopColor="#D4E832" />
          <stop offset="75%"  stopColor="#9DB81A" />
          <stop offset="100%" stopColor="#637808" />
        </radialGradient>

        {/* Deep hole — dark center, lighter rim to sell depth */}
        <radialGradient id="holeDepth" cx="30%" cy="30%" r="70%">
          <stop offset="0%"   stopColor="#2a3d04" />
          <stop offset="60%"  stopColor="#1a2602" />
          <stop offset="100%" stopColor="#0f1801" />
        </radialGradient>

        {/* Hole rim highlight — simulates light catching the edge */}
        <radialGradient id="holeRim" cx="30%" cy="25%" r="70%">
          <stop offset="0%"   stopColor="#E8F552" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#E8F552" stopOpacity="0" />
        </radialGradient>

        {/* Broad ambient occlusion around each hole */}
        <filter id="holeAO" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Gloss overlay on ball surface */}
        <radialGradient id="gloss" cx="38%" cy="25%" r="55%">
          <stop offset="0%"   stopColor="white" stopOpacity="0.55" />
          <stop offset="50%"  stopColor="white" stopOpacity="0.1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        {/* Rim darkening — makes the edge look spherical */}
        <radialGradient id="rimDark" cx="50%" cy="50%" r="50%">
          <stop offset="60%"  stopColor="black" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.45" />
        </radialGradient>

        <clipPath id="ballClip">
          <circle cx="50" cy="50" r="46" />
        </clipPath>
      </defs>

      {/* Cast shadow beneath */}
      <ellipse cx="52" cy="98" rx="32" ry="3.5" fill="black" opacity="0.22" />

      {/* Ball base */}
      <circle cx="50" cy="50" r="46" fill="url(#ballGrad)" />

      {/* Holes */}
      <g clipPath="url(#ballClip)">
        {HOLES.map((h, i) => (
          <g key={i}>
            {/* Soft AO shadow ring around hole */}
            <circle cx={h.cx} cy={h.cy} r="8.5" fill="black" opacity="0.18" filter="url(#holeAO)" />
            {/* Hole body */}
            <circle cx={h.cx} cy={h.cy} r="6.2" fill="url(#holeDepth)" />
            {/* Inner rim catch-light — tiny crescent top-left */}
            <circle cx={h.cx} cy={h.cy} r="6.2" fill="url(#holeRim)" opacity="0.5" />
          </g>
        ))}
      </g>

      {/* Rim darkening for spherical feel */}
      <circle cx="50" cy="50" r="46" fill="url(#rimDark)" clipPath="url(#ballClip)" />

      {/* Primary gloss highlight */}
      <ellipse
        cx="37"
        cy="31"
        rx="14"
        ry="9"
        fill="white"
        opacity="0.38"
        transform="rotate(-30 37 31)"
        clipPath="url(#ballClip)"
      />

      {/* Secondary small specular dot */}
      <ellipse
        cx="42"
        cy="27"
        rx="5"
        ry="3"
        fill="white"
        opacity="0.55"
        transform="rotate(-30 42 27)"
        clipPath="url(#ballClip)"
      />

      {/* Outline */}
      <circle cx="50" cy="50" r="46" fill="none" stroke="#5a7a0a" strokeWidth="1.2" />
    </svg>
  );
}
