"use client";

// Decorative imagery components inspired by The Great Divide album aesthetic

export function FireflyGlow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Firefly body */}
      <ellipse cx="12" cy="12" rx="3" ry="4" fill="#c9a55f" opacity="0.8" />
      {/* Wings */}
      <path
        d="M9 10c-2-1-3-2-3-3 0-1 1-1 2 0 1 1 1 2 1 3z"
        fill="#f9f6ef"
        opacity="0.6"
      />
      <path
        d="M15 10c2-1 3-2 3-3 0-1-1-1-2 0-1 1-1 2-1 3z"
        fill="#f9f6ef"
        opacity="0.6"
      />
      {/* Glow */}
      <circle cx="12" cy="14" r="6" fill="#ddb16f" opacity="0.2" />
      <circle cx="12" cy="14" r="4" fill="#ddb16f" opacity="0.3" />
      <circle cx="12" cy="14" r="2" fill="#ddb16f" opacity="0.5" />
    </svg>
  );
}

export function GrassSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grass blades */}
      <path
        d="M0 60 Q10 30 5 0 L8 0 Q15 35 10 60 Z"
        fill="#75604a"
        opacity="0.4"
      />
      <path
        d="M15 60 Q25 25 20 0 L23 0 Q30 32 25 60 Z"
        fill="#8b7355"
        opacity="0.5"
      />
      <path
        d="M30 60 Q40 35 35 5 L38 5 Q45 40 40 60 Z"
        fill="#75604a"
        opacity="0.3"
      />
      <path
        d="M50 60 Q60 28 55 2 L58 2 Q65 34 60 60 Z"
        fill="#8b7355"
        opacity="0.4"
      />
      <path
        d="M70 60 Q80 32 75 0 L78 0 Q85 38 80 60 Z"
        fill="#75604a"
        opacity="0.5"
      />
      <path
        d="M90 60 Q100 26 95 3 L98 3 Q105 33 100 60 Z"
        fill="#8b7355"
        opacity="0.3"
      />
      <path
        d="M110 60 Q120 30 115 1 L118 1 Q125 36 120 60 Z"
        fill="#75604a"
        opacity="0.4"
      />
      <path
        d="M130 60 Q140 34 135 4 L138 4 Q145 39 140 60 Z"
        fill="#8b7355"
        opacity="0.5"
      />
      <path
        d="M150 60 Q160 27 155 0 L158 0 Q165 35 160 60 Z"
        fill="#75604a"
        opacity="0.3"
      />
      <path
        d="M170 60 Q180 31 175 2 L178 2 Q185 37 180 60 Z"
        fill="#8b7355"
        opacity="0.4"
      />
      <path
        d="M190 60 Q200 29 195 1 L198 1 Q205 34 200 60 Z"
        fill="#75604a"
        opacity="0.5"
      />
    </svg>
  );
}

export function KidSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simple kid silhouette */}
      {/* Head */}
      <circle cx="50" cy="25" r="15" fill="#3d3427" opacity="0.6" />
      {/* Body */}
      <rect x="40" y="40" width="20" height="40" rx="3" fill="#3d3427" opacity="0.6" />
      {/* Arms */}
      <rect
        x="25"
        y="45"
        width="15"
        height="8"
        rx="4"
        fill="#3d3427"
        opacity="0.6"
        transform="rotate(-20 32.5 49)"
      />
      <rect
        x="60"
        y="45"
        width="15"
        height="8"
        rx="4"
        fill="#3d3427"
        opacity="0.6"
        transform="rotate(20 67.5 49)"
      />
      {/* Legs */}
      <rect x="42" y="80" width="8" height="35" rx="4" fill="#3d3427" opacity="0.6" />
      <rect x="50" y="80" width="8" height="35" rx="4" fill="#3d3427" opacity="0.6" />
    </svg>
  );
}

export function TreeSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Trunk */}
      <rect x="35" y="60" width="10" height="60" fill="#4a3d30" opacity="0.7" />
      {/* Foliage - triangular layers */}
      <path d="M40 60 L10 80 L70 80 Z" fill="#75604a" opacity="0.5" />
      <path d="M40 45 L15 65 L65 65 Z" fill="#8b7355" opacity="0.6" />
      <path d="M40 30 L20 50 L60 50 Z" fill="#75604a" opacity="0.7" />
      <path d="M40 15 L25 35 L55 35 Z" fill="#8b7355" opacity="0.8" />
    </svg>
  );
}

export function MothSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <ellipse cx="30" cy="20" rx="4" ry="12" fill="#8b7355" opacity="0.7" />
      {/* Wings - left */}
      <path
        d="M26 14 Q10 8 8 20 Q10 28 20 26 Q24 24 26 20 Z"
        fill="#c9a55f"
        opacity="0.4"
      />
      {/* Wings - right */}
      <path
        d="M34 14 Q50 8 52 20 Q50 28 40 26 Q36 24 34 20 Z"
        fill="#c9a55f"
        opacity="0.4"
      />
      {/* Wing patterns */}
      <circle cx="16" cy="18" r="3" fill="#3d3427" opacity="0.3" />
      <circle cx="44" cy="18" r="3" fill="#3d3427" opacity="0.3" />
    </svg>
  );
}
