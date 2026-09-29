import { useId } from "react";

/*
 * Concept render of the Guardian+ wristband prototype, drawn as vector art so it
 * stays sharp at any size. The screen shows the resting "everything is fine" state.
 */
function WristbandIllustration({ className = "", title = "Prototipo de la pulsera Guardian+" }) {
  const id = useId().replace(/:/g, "");
  const ref = (name) => `url(#${name}-${id})`;

  return (
    <svg className={className} viewBox="0 0 260 580" role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`strap-${id}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#6f9f8d" />
          <stop offset="0.22" stopColor="#a9d2c1" />
          <stop offset="0.5" stopColor="#cfeadf" />
          <stop offset="0.78" stopColor="#a4cdbc" />
          <stop offset="1" stopColor="#648f7f" />
        </linearGradient>
        <linearGradient id={`strap-depth-top-${id}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#123128" stopOpacity="0.45" />
          <stop offset="0.7" stopColor="#123128" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`strap-depth-bottom-${id}`} x1="0" x2="0" y1="1" y2="0">
          <stop offset="0" stopColor="#123128" stopOpacity="0.45" />
          <stop offset="0.7" stopColor="#123128" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`body-${id}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#6d7a76" />
          <stop offset="0.35" stopColor="#323d3a" />
          <stop offset="0.7" stopColor="#1b2422" />
          <stop offset="1" stopColor="#3b4744" />
        </linearGradient>
        <radialGradient id={`glass-${id}`} cx="0.4" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#173029" />
          <stop offset="0.6" stopColor="#0b1714" />
          <stop offset="1" stopColor="#050a09" />
        </radialGradient>
        <linearGradient id={`glare-${id}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="0.45" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`sos-${id}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#8f2525" />
          <stop offset="0.5" stopColor="#e05a5a" />
          <stop offset="1" stopColor="#a52e2e" />
        </linearGradient>
        <radialGradient id={`pulse-${id}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#4fc3a1" stopOpacity="0.35" />
          <stop offset="1" stopColor="#4fc3a1" stopOpacity="0" />
        </radialGradient>
        <filter id={`shadow-${id}`} x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#0b1f19" floodOpacity="0.35" />
        </filter>
        <filter id={`floor-${id}`} x="-50%" y="-200%" width="200%" height="500%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      <ellipse cx="130" cy="560" rx="92" ry="9" fill="#0b1f19" opacity="0.22" filter={ref("floor")} />

      <g className="wristband__strap">
        <path d="M70 200 L80 44 Q81 16 130 14 Q179 16 180 44 L190 200 Z" fill={ref("strap")} />
        <path d="M70 200 L80 44 Q81 16 130 14 Q179 16 180 44 L190 200 Z" fill={ref("strap-depth-top")} />
        <path d="M92 190 L99 40" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M168 190 L161 40" stroke="#123128" strokeOpacity="0.18" strokeWidth="1.5" strokeLinecap="round" />

        <path d="M70 380 L80 520 Q81 548 130 550 Q179 548 180 520 L190 380 Z" fill={ref("strap")} />
        <path d="M70 380 L80 520 Q81 548 130 550 Q179 548 180 520 L190 380 Z" fill={ref("strap-depth-bottom")} />
        <path d="M92 392 L99 524" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="1.5" strokeLinecap="round" />
        {[430, 454, 478, 502].map((y) => (
          <g key={y}>
            <rect x="123" y={y} width="14" height="8" rx="4" fill="#3f6c5d" />
            <rect x="124.5" y={y + 1} width="11" height="3" rx="1.5" fill="#123128" opacity="0.45" />
          </g>
        ))}
      </g>

      <g filter={ref("shadow")}>
        <rect x="50" y="150" width="160" height="280" rx="68" fill={ref("body")} />
        <rect x="50.75" y="150.75" width="158.5" height="278.5" rx="67.25" fill="none" stroke="#ffffff" strokeOpacity="0.28" strokeWidth="1.5" />
        <rect x="208" y="252" width="9" height="52" rx="4.5" fill={ref("sos")} />
        <rect x="209.5" y="256" width="2" height="44" rx="1" fill="#ffffff" opacity="0.35" />
      </g>

      <rect x="59" y="159" width="142" height="262" rx="60" fill="#0a1210" />
      <rect x="66" y="166" width="128" height="248" rx="54" fill={ref("glass")} />

      <circle cx="130" cy="262" r="46" fill={ref("pulse")} />
      <text x="130" y="206" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#8fb3a6" letterSpacing="1">
        10:24
      </text>
      <path
        d="M144.5 240.8a9.6 9.6 0 0 0-13.6 0l-.9.9-.9-.9a9.6 9.6 0 1 0-13.6 13.6l.9.9 13.6 13.6 13.6-13.6.9-.9a9.6 9.6 0 0 0 0-13.6Z"
        fill="none"
        stroke="#4fc3a1"
        strokeWidth="3.2"
        strokeLinejoin="round"
        transform="translate(0 2)"
      />
      <text x="130" y="318" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="44" fontWeight="500" fill="#ffffff">
        72
      </text>
      <text x="130" y="336" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="#8fb3a6">
        lpm
      </text>
      <rect x="84" y="352" width="92" height="24" rx="12" fill="#4fc3a1" fillOpacity="0.16" />
      <circle cx="95" cy="364" r="3" fill="#4fc3a1" />
      <text x="103" y="367.5" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="600" fill="#7de0c0">
        Todo en orden
      </text>

      <path d="M66 220 Q66 166 120 166 L170 166 Q108 230 66 330 Z" fill={ref("glare")} />

      <text x="130" y="408" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="8" fontWeight="600" fill="#ffffff" opacity="0.35" letterSpacing="1.5">
        GUARDIAN+
      </text>
    </svg>
  );
}

export default WristbandIllustration;
