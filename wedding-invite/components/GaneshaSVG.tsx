"use client";
export default function GaneshaSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Lord Ganesha"
    >
      {/* Halo / glow ring */}
      <circle cx="100" cy="72" r="52" stroke="#B8860B" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
      <circle cx="100" cy="72" r="44" stroke="#D4A017" strokeWidth="0.8" opacity="0.5" />

      {/* Crown / Mukut */}
      <path d="M72 40 L100 18 L128 40" stroke="#B8860B" strokeWidth="2" fill="none" />
      <path d="M80 40 L100 24 L120 40" fill="#B8860B" opacity="0.6" />
      <circle cx="100" cy="18" r="4" fill="#D4A017" />
      <circle cx="80" cy="36" r="2.5" fill="#B8860B" />
      <circle cx="120" cy="36" r="2.5" fill="#B8860B" />
      {/* Crown jewels */}
      <rect x="95" y="30" width="10" height="6" rx="1" fill="#7A1F1F" opacity="0.7" />

      {/* Head */}
      <ellipse cx="100" cy="72" rx="32" ry="30" fill="#F5D4A0" />

      {/* Ears */}
      <ellipse cx="64" cy="70" rx="14" ry="18" fill="#F5C880" />
      <ellipse cx="64" cy="70" rx="9" ry="12" fill="#E8B870" />
      <ellipse cx="136" cy="70" rx="14" ry="18" fill="#F5C880" />
      <ellipse cx="136" cy="70" rx="9" ry="12" fill="#E8B870" />

      {/* Ear ornaments */}
      <circle cx="52" cy="66" r="3" fill="#B8860B" />
      <circle cx="148" cy="66" r="3" fill="#B8860B" />

      {/* Eyes */}
      <ellipse cx="90" cy="68" rx="6" ry="7" fill="white" />
      <ellipse cx="110" cy="68" rx="6" ry="7" fill="white" />
      <circle cx="91" cy="69" r="4" fill="#3D0C0C" />
      <circle cx="111" cy="69" r="4" fill="#3D0C0C" />
      <circle cx="92.5" cy="67.5" r="1.2" fill="white" />
      <circle cx="112.5" cy="67.5" r="1.2" fill="white" />

      {/* Third eye / Tilak */}
      <ellipse cx="100" cy="60" rx="4" ry="3" fill="#7A1F1F" />
      <ellipse cx="100" cy="60" rx="2" ry="1.5" fill="#B8860B" />

      {/* Eyebrows */}
      <path d="M84 62 Q90 59 96 62" stroke="#3D0C0C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M104 62 Q110 59 116 62" stroke="#3D0C0C" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Trunk */}
      <path d="M100 82 Q88 92 84 102 Q80 112 88 118 Q96 124 104 118 Q112 112 116 104 Q120 94 108 86 Q104 83 100 82Z"
        fill="#F5C880" stroke="#E8B050" strokeWidth="0.8" />
      {/* Trunk rings */}
      <path d="M93 95 Q96 93 103 95" stroke="#E8A040" strokeWidth="1" fill="none" />
      <path d="M90 104 Q94 102 104 104" stroke="#E8A040" strokeWidth="1" fill="none" />
      <path d="M92 113 Q96 111 106 113" stroke="#E8A040" strokeWidth="1" fill="none" />

      {/* Modak in trunk tip */}
      <circle cx="100" cy="120" r="7" fill="#D4A017" />
      <path d="M96 118 Q100 122 104 118" stroke="#B8860B" strokeWidth="1" fill="none" />

      {/* Body */}
      <ellipse cx="100" cy="168" rx="40" ry="38" fill="#F5D4A0" />

      {/* Necklace */}
      <path d="M72 90 Q100 102 128 90" stroke="#B8860B" strokeWidth="2" fill="none" />
      <circle cx="100" cy="100" r="3" fill="#B8860B" />
      <circle cx="84" cy="95" r="2" fill="#7A1F1F" />
      <circle cx="116" cy="95" r="2" fill="#7A1F1F" />

      {/* Upavit / sacred thread */}
      <path d="M76 100 Q68 140 76 175" stroke="#F5F5DC" strokeWidth="1.5" fill="none" opacity="0.8" />

      {/* Arms */}
      {/* Left arm (upper) */}
      <ellipse cx="62" cy="140" rx="14" ry="26" fill="#F5C880" transform="rotate(-15 62 140)" />
      {/* Right arm (upper) */}
      <ellipse cx="138" cy="140" rx="14" ry="26" fill="#F5C880" transform="rotate(15 138 140)" />
      {/* Left arm (lower) */}
      <ellipse cx="52" cy="170" rx="10" ry="20" fill="#F5C880" transform="rotate(-25 52 170)" />
      {/* Right arm (lower) */}
      <ellipse cx="148" cy="170" rx="10" ry="20" fill="#F5C880" transform="rotate(25 148 170)" />

      {/* Hands with attributes */}
      {/* Axe (Parashu) - top left */}
      <path d="M44 148 L38 140 L50 136 Z" fill="#B8860B" />
      <line x1="47" y1="142" x2="52" y2="155" stroke="#8B6914" strokeWidth="2" />

      {/* Lotus - top right */}
      <circle cx="156" cy="138" r="8" fill="#C0392B" opacity="0.7" />
      <circle cx="156" cy="138" r="5" fill="#E74C3C" opacity="0.8" />
      <circle cx="156" cy="138" r="3" fill="#F1948A" />

      {/* Ankush (goad) - bottom left */}
      <path d="M42 182 L36 172 L44 170" stroke="#7A1F1F" strokeWidth="1.5" fill="none" />
      <line x1="40" y1="176" x2="46" y2="190" stroke="#8B4513" strokeWidth="2" />

      {/* Modak - bottom right */}
      <circle cx="158" cy="175" r="9" fill="#D4A017" />
      <path d="M153 173 Q158 178 163 173" stroke="#B8860B" strokeWidth="1" fill="none" />

      {/* Belly / Udara */}
      <ellipse cx="100" cy="168" rx="22" ry="20" fill="#F0C878" opacity="0.5" />
      {/* Navel jewel */}
      <circle cx="100" cy="168" r="4" fill="#B8860B" />
      <circle cx="100" cy="168" r="2" fill="#D4A017" />

      {/* Belt ornament */}
      <path d="M66 188 Q100 196 134 188" stroke="#B8860B" strokeWidth="2" fill="none" />
      <rect x="93" y="185" width="14" height="8" rx="2" fill="#B8860B" opacity="0.7" />

      {/* Legs / Padmasana */}
      <ellipse cx="82" cy="210" rx="20" ry="14" fill="#F5C880" />
      <ellipse cx="118" cy="210" rx="20" ry="14" fill="#F5C880" />

      {/* Feet ornaments */}
      <path d="M68 216 Q82 220 96 216" stroke="#B8860B" strokeWidth="1.5" fill="none" />
      <path d="M104 216 Q118 220 132 216" stroke="#B8860B" strokeWidth="1.5" fill="none" />

      {/* Lotus seat */}
      <path d="M60 225 Q100 235 140 225 Q100 240 60 225Z" fill="#E8A030" opacity="0.5" />
      <path d="M70 228 Q100 236 130 228" stroke="#B8860B" strokeWidth="1" fill="none" />

      {/* Decorative border dots */}
      <g opacity="0.5">
        <circle cx="60" cy="42" r="2" fill="#7A1F1F" />
        <circle cx="140" cy="42" r="2" fill="#7A1F1F" />
        <circle cx="50" cy="100" r="1.5" fill="#B8860B" />
        <circle cx="150" cy="100" r="1.5" fill="#B8860B" />
      </g>
    </svg>
  );
}
