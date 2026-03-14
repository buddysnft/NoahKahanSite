interface EntrancePhotoProps {
  venueName: string;
  gateInfo?: string;
}

export default function EntrancePhoto({ venueName, gateInfo }: EntrancePhotoProps) {
  return (
    <div className="mb-6 flex justify-center">
      {/* Polaroid-style photo frame */}
      <div 
        className="bg-white p-3 pb-8 shadow-warm-lg relative"
        style={{ 
          maxWidth: '280px',
          transform: 'rotate(-1deg)'
        }}
      >
        {/* Photo placeholder */}
        <div className="relative bg-cream-200 aspect-[4/3] flex items-center justify-center overflow-hidden">
          {/* Venue silhouette icon */}
          <svg 
            className="w-24 h-24 opacity-20" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={1}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
            />
          </svg>

          {/* Arrow overlay pointing to entrance */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 200 150"
          >
            {/* Curved arrow */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon 
                  points="0 0, 10 3, 0 6" 
                  fill="#d4834f"
                />
              </marker>
            </defs>
            
            {/* Arrow path - curves from top right to center bottom */}
            <path
              d="M 160,30 Q 140,60 110,90"
              fill="none"
              stroke="#d4834f"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
              opacity="0.9"
            />

            {/* "Main entrance" text */}
            <text
              x="165"
              y="20"
              fontSize="11"
              fontFamily="Courier Prime"
              fontWeight="bold"
              fill="#d4834f"
              transform="rotate(-5, 165, 20)"
            >
              Main
            </text>
            <text
              x="160"
              y="32"
              fontSize="11"
              fontFamily="Courier Prime"
              fontWeight="bold"
              fill="#d4834f"
              transform="rotate(-5, 160, 32)"
            >
              entrance
            </text>
          </svg>

          {/* "Photo coming soon" badge */}
          <div className="absolute bottom-2 right-2 bg-brown-900/80 text-cream-50 text-xs px-2 py-1 rounded font-typewriter-tight">
            Photo soon
          </div>
        </div>

        {/* Polaroid caption */}
        <div className="mt-3 text-center">
          <p 
            className="font-typewriter text-sm text-brown-900"
            style={{ 
              transform: 'rotate(1deg)',
              letterSpacing: '0.02em'
            }}
          >
            {gateInfo || `${venueName} entrance`}
          </p>
        </div>

        {/* Tape detail (top) */}
        <div 
          className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-5 bg-cream-100 opacity-60"
          style={{ 
            transform: 'translateX(-50%) rotate(2deg)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}
        />
      </div>
    </div>
  );
}
