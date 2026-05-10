"use client";

export default function Mandala({ className = "" }: { className?: string }) {
  const petals8 = Array.from({ length: 8 }, (_, i) => i * 45);
  const petals16 = Array.from({ length: 16 }, (_, i) => i * 22.5);

  return (
    <svg
      className={className}
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g transform="translate(250,250)">
        {/* Outer ring */}
        <circle r="240" stroke="#C9A84C" strokeWidth="0.6" strokeDasharray="3 5" opacity="0.4" />
        <circle r="228" stroke="#C9A84C" strokeWidth="0.3" opacity="0.2" />

        {/* Outer 16 lotus petals */}
        {petals16.map((angle) => (
          <g key={`op${angle}`} transform={`rotate(${angle})`}>
            <ellipse cx="0" cy="-200" rx="14" ry="36" fill="#C9A84C" opacity="0.12" />
            <ellipse cx="0" cy="-200" rx="8" ry="22" fill="#E8C84A" opacity="0.1" />
          </g>
        ))}

        {/* Mid ring */}
        <circle r="180" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
        <circle r="168" stroke="#B8860B" strokeWidth="0.3" strokeDasharray="2 4" opacity="0.25" />

        {/* 8 large mid petals */}
        {petals8.map((angle) => (
          <g key={`mp${angle}`} transform={`rotate(${angle})`}>
            <ellipse cx="0" cy="-150" rx="22" ry="50" fill="#C9A84C" opacity="0.14" />
            <ellipse cx="0" cy="-150" rx="12" ry="32" fill="#FFD700" opacity="0.1" />
            {/* Petal vein */}
            <line x1="0" y1="-124" x2="0" y2="-175" stroke="#C9A84C" strokeWidth="0.5" opacity="0.3" />
          </g>
        ))}

        {/* Inner 16 geometric */}
        {petals16.map((angle) => (
          <g key={`ig${angle}`} transform={`rotate(${angle})`}>
            <polygon
              points="0,-120 6,-105 0,-90 -6,-105"
              fill="#C9A84C"
              opacity="0.18"
            />
          </g>
        ))}

        {/* Inner ring */}
        <circle r="110" stroke="#C9A84C" strokeWidth="0.8" opacity="0.35" />
        <circle r="98" stroke="#C9A84C" strokeWidth="0.3" opacity="0.2" />

        {/* 8 inner lotus petals */}
        {petals8.map((angle) => (
          <g key={`ip${angle}`} transform={`rotate(${angle})`}>
            <ellipse cx="0" cy="-84" rx="16" ry="30" fill="#C9A84C" opacity="0.2" />
            <ellipse cx="0" cy="-84" rx="8" ry="18" fill="#E8C84A" opacity="0.15" />
          </g>
        ))}

        {/* Star ring */}
        <circle r="68" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.3" />

        {/* 8-pointed star */}
        {petals8.map((angle) => (
          <g key={`st${angle}`} transform={`rotate(${angle})`}>
            <polygon points="0,-64 4,-50 0,-44 -4,-50" fill="#C9A84C" opacity="0.25" />
          </g>
        ))}

        {/* Crosshatch lines */}
        {petals8.map((angle) => (
          <g key={`ch${angle}`} transform={`rotate(${angle})`}>
            <line x1="0" y1="-68" x2="0" y2="-110" stroke="#C9A84C" strokeWidth="0.4" opacity="0.2" />
          </g>
        ))}

        {/* Center lotus */}
        <circle r="44" stroke="#C9A84C" strokeWidth="0.8" opacity="0.4" />
        {petals8.map((angle) => (
          <g key={`cl${angle}`} transform={`rotate(${angle})`}>
            <ellipse cx="0" cy="-32" rx="9" ry="18" fill="#C9A84C" opacity="0.25" />
          </g>
        ))}

        {/* Inner decorative rings */}
        <circle r="20" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
        <circle r="14" stroke="#E8C84A" strokeWidth="0.5" opacity="0.4" />
        <circle r="8"  stroke="#FFD700" strokeWidth="0.5" opacity="0.6" />

        {/* Center dot */}
        <circle r="4" fill="#C9A84C" opacity="0.8" />
        <circle r="2" fill="#FFD700" opacity="1" />

        {/* Corner ornaments between petals */}
        {petals8.map((angle) => (
          <g key={`co${angle}`} transform={`rotate(${angle + 22.5})`}>
            <circle cx="0" cy="-175" r="3" fill="none" stroke="#C9A84C" strokeWidth="0.6" opacity="0.3" />
            <circle cx="0" cy="-175" r="1" fill="#C9A84C" opacity="0.3" />
          </g>
        ))}
      </g>
    </svg>
  );
}
