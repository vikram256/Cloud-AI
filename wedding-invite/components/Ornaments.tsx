"use client";

export function MadhubaniDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, #B8860B, transparent)" }} />
      <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
        <path d="M30 4 L34 12 L30 20 L26 12 Z" fill="#B8860B" opacity="0.8" />
        <path d="M10 12 Q20 4 30 12 Q20 20 10 12Z" fill="#7A1F1F" opacity="0.5" />
        <path d="M50 12 Q40 4 30 12 Q40 20 50 12Z" fill="#7A1F1F" opacity="0.5" />
        <circle cx="30" cy="12" r="3" fill="#D4A017" />
        <circle cx="6" cy="12" r="2" fill="#B8860B" opacity="0.6" />
        <circle cx="54" cy="12" r="2" fill="#B8860B" opacity="0.6" />
      </svg>
      <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, #B8860B, transparent)" }} />
    </div>
  );
}

export function LotusIcon({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M16 28 Q8 20 8 14 Q8 8 16 6 Q24 8 24 14 Q24 20 16 28Z" fill="#C0392B" opacity="0.7" />
      <path d="M16 26 Q10 19 10 14 Q10 9 16 8 Q22 9 22 14 Q22 19 16 26Z" fill="#E74C3C" opacity="0.8" />
      <path d="M16 24 Q12 18 12 14 Q12 10 16 9 Q20 10 20 14 Q20 18 16 24Z" fill="#F1948A" />
      <circle cx="16" cy="14" r="3" fill="#D4A017" />
      <path d="M4 14 Q10 8 16 12" stroke="#C0392B" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M28 14 Q22 8 16 12" stroke="#C0392B" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  );
}

export function KalashIcon({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 56" fill="none">
      {/* Leaves */}
      <path d="M24 8 Q16 4 14 10 Q18 14 24 12" fill="#2E7D32" opacity="0.8" />
      <path d="M24 8 Q32 4 34 10 Q30 14 24 12" fill="#388E3C" opacity="0.8" />
      <path d="M24 8 Q24 2 24 8" stroke="#2E7D32" strokeWidth="1.5" />
      {/* Coconut */}
      <circle cx="24" cy="10" r="6" fill="#8D6E63" />
      <circle cx="24" cy="10" r="4" fill="#A1887F" />
      {/* Neck */}
      <rect x="20" y="16" width="8" height="4" rx="2" fill="#B8860B" />
      {/* Body */}
      <path d="M14 20 Q10 30 12 40 Q14 48 24 48 Q34 48 36 40 Q38 30 34 20Z" fill="#D4A017" />
      <path d="M14 20 Q10 30 12 40 Q14 48 24 48 Q34 48 36 40 Q38 30 34 20Z" fill="none" stroke="#B8860B" strokeWidth="1" />
      {/* Pattern on kalash */}
      <path d="M16 30 Q24 26 32 30" stroke="#7A1F1F" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M15 36 Q24 32 33 36" stroke="#7A1F1F" strokeWidth="1" fill="none" opacity="0.5" />
      <circle cx="24" cy="34" r="3" fill="#7A1F1F" opacity="0.3" />
      {/* Base */}
      <ellipse cx="24" cy="48" rx="10" ry="3" fill="#B8860B" opacity="0.6" />
    </svg>
  );
}

export function DiyaIcon({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 40" fill="none">
      {/* Flame */}
      <path d="M18 8 Q15 12 15 16 Q15 20 18 22 Q21 20 21 16 Q21 12 18 8Z" fill="#FF6B35" opacity="0.9" />
      <path d="M18 10 Q16 13 16 16 Q16 19 18 21 Q20 19 20 16 Q20 13 18 10Z" fill="#FFB300" />
      <path d="M18 12 Q17 14 17 16 Q17 18 18 20 Q19 18 19 16 Q19 14 18 12Z" fill="#FFEE58" />
      {/* Wick */}
      <line x1="18" y1="20" x2="18" y2="24" stroke="#5D4037" strokeWidth="1.5" />
      {/* Oil/ghee in diya */}
      <ellipse cx="18" cy="27" rx="7" ry="3" fill="#D4A017" opacity="0.6" />
      {/* Diya bowl */}
      <path d="M8 26 Q8 34 18 36 Q28 34 28 26 Q24 22 18 22 Q12 22 8 26Z" fill="#D4A017" />
      <path d="M8 26 Q8 34 18 36 Q28 34 28 26" stroke="#B8860B" strokeWidth="1" fill="none" />
      {/* Diya spout */}
      <path d="M26 28 Q30 27 31 30 Q28 32 26 30Z" fill="#C49010" />
    </svg>
  );
}

export function MadhubaniFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Corner decorations */}
      <svg className="absolute top-0 left-0" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M2 2 L20 2 L2 20Z" fill="#B8860B" opacity="0.3" />
        <path d="M2 2 L14 2 L2 14Z" fill="#7A1F1F" opacity="0.4" />
        <circle cx="8" cy="8" r="3" fill="#B8860B" opacity="0.5" />
        <circle cx="2" cy="2" r="2" fill="#D4A017" opacity="0.6" />
      </svg>
      <svg className="absolute top-0 right-0" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M38 2 L20 2 L38 20Z" fill="#B8860B" opacity="0.3" />
        <path d="M38 2 L26 2 L38 14Z" fill="#7A1F1F" opacity="0.4" />
        <circle cx="32" cy="8" r="3" fill="#B8860B" opacity="0.5" />
        <circle cx="38" cy="2" r="2" fill="#D4A017" opacity="0.6" />
      </svg>
      <svg className="absolute bottom-0 left-0" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M2 38 L20 38 L2 20Z" fill="#B8860B" opacity="0.3" />
        <path d="M2 38 L14 38 L2 26Z" fill="#7A1F1F" opacity="0.4" />
        <circle cx="8" cy="32" r="3" fill="#B8860B" opacity="0.5" />
        <circle cx="2" cy="38" r="2" fill="#D4A017" opacity="0.6" />
      </svg>
      <svg className="absolute bottom-0 right-0" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M38 38 L20 38 L38 20Z" fill="#B8860B" opacity="0.3" />
        <path d="M38 38 L26 38 L38 26Z" fill="#7A1F1F" opacity="0.4" />
        <circle cx="32" cy="32" r="3" fill="#B8860B" opacity="0.5" />
        <circle cx="38" cy="38" r="2" fill="#D4A017" opacity="0.6" />
      </svg>
      {children}
    </div>
  );
}

export function DoliIcon({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={Math.round(size * 0.7)} viewBox="0 0 100 70" fill="none">
      {/* Poles */}
      <line x1="10" y1="30" x2="10" y2="60" stroke="#8B4513" strokeWidth="3" strokeLinecap="round" />
      <line x1="90" y1="30" x2="90" y2="60" stroke="#8B4513" strokeWidth="3" strokeLinecap="round" />
      <line x1="10" y1="60" x2="90" y2="60" stroke="#8B4513" strokeWidth="3" />
      <line x1="10" y1="30" x2="90" y2="30" stroke="#8B4513" strokeWidth="3" />
      {/* Palanquin body */}
      <rect x="20" y="20" width="60" height="40" rx="4" fill="#C0392B" />
      <rect x="22" y="22" width="56" height="36" rx="3" fill="#E74C3C" opacity="0.5" />
      {/* Curtain */}
      <path d="M20 20 Q50 28 80 20 Q80 60 50 58 Q20 60 20 20Z" fill="#B71C1C" opacity="0.4" />
      {/* Decorative patterns */}
      <path d="M25 35 Q50 30 75 35" stroke="#D4A017" strokeWidth="1.5" fill="none" />
      <path d="M25 45 Q50 40 75 45" stroke="#D4A017" strokeWidth="1.5" fill="none" />
      <circle cx="50" cy="40" r="4" fill="#D4A017" opacity="0.7" />
      {/* Fringe */}
      {[25,30,35,40,45,50,55,60,65,70,75].map((x,i) => (
        <line key={i} x1={x} y1="60" x2={x-1} y2="66" stroke="#D4A017" strokeWidth="1.2" opacity="0.8" />
      ))}
      {/* Carrying poles extending */}
      <line x1="0" y1="30" x2="20" y2="30" stroke="#8B4513" strokeWidth="3" strokeLinecap="round" />
      <line x1="80" y1="30" x2="100" y2="30" stroke="#8B4513" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
