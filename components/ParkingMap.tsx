interface ParkingMapProps {
  venueName: string;
  parkingOptions: Array<{
    name: string;
    price: string;
    walkTime: string;
    notes?: string;
  }>;
}

export default function ParkingMap({ venueName, parkingOptions }: ParkingMapProps) {
  // Only show map if we have parking data
  if (!parkingOptions || parkingOptions.length === 0) {
    return null;
  }

  // Take up to 3 parking lots for the map
  const lotsToShow = parkingOptions.slice(0, 3);

  return (
    <div className="mb-6 bg-cream-100 rounded-lg p-4 border-2 border-brown-900/20">
      <h3 className="heading-notebook-section mb-4 text-center">Parking Map</h3>
      
      <svg
        viewBox="0 0 300 300"
        className="w-full max-w-xs mx-auto"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}
      >
        {/* Paper background */}
        <rect x="0" y="0" width="300" height="300" fill="#faf8f5" />
        
        {/* Hand-drawn border */}
        <path
          d="M 10,10 L 290,12 L 288,290 L 12,288 Z"
          fill="none"
          stroke="#3d3427"
          strokeWidth="1.5"
          strokeDasharray="5,3"
          opacity="0.3"
        />

        {/* North arrow (top right) */}
        <g transform="translate(260, 30)">
          <path
            d="M 0,-15 L 3,5 L 0,0 L -3,5 Z"
            fill="#3d3427"
            opacity="0.6"
          />
          <text
            x="0"
            y="18"
            textAnchor="middle"
            fontSize="10"
            fontFamily="Courier Prime"
            fill="#3d3427"
            opacity="0.6"
          >
            N
          </text>
        </g>

        {/* Venue (center star) */}
        <g transform="translate(150, 120)">
          {/* Star icon */}
          <path
            d="M 0,-12 L 3,-3 L 12,-3 L 5,3 L 8,12 L 0,6 L -8,12 L -5,3 L -12,-3 L -3,-3 Z"
            fill="#d4834f"
            stroke="#3d3427"
            strokeWidth="1.5"
          />
          {/* Venue label */}
          <text
            x="0"
            y="25"
            textAnchor="middle"
            fontSize="11"
            fontFamily="Courier Prime"
            fontWeight="bold"
            fill="#3d3427"
          >
            VENUE
          </text>
        </g>

        {/* Parking Lot 1 (top left) */}
        {lotsToShow[0] && (
          <g transform="translate(60, 60)">
            {/* P icon in circle */}
            <circle cx="0" cy="0" r="18" fill="#8b7355" stroke="#3d3427" strokeWidth="2" />
            <text
              x="0"
              y="6"
              textAnchor="middle"
              fontSize="16"
              fontFamily="Courier Prime"
              fontWeight="bold"
              fill="#faf8f5"
            >
              P
            </text>
            {/* Label */}
            <text
              x="0"
              y="35"
              textAnchor="middle"
              fontSize="9"
              fontFamily="Courier Prime"
              fill="#3d3427"
              transform="rotate(-2, 0, 35)"
            >
              {lotsToShow[0].name.length > 15 
                ? lotsToShow[0].name.substring(0, 15) + '...' 
                : lotsToShow[0].name}
            </text>
            {lotsToShow[0].walkTime && (
              <text
                x="0"
                y="47"
                textAnchor="middle"
                fontSize="8"
                fontFamily="Courier Prime"
                fill="#5d4e3e"
                fontStyle="italic"
              >
                {lotsToShow[0].walkTime}
              </text>
            )}
            {/* Dotted path to venue */}
            <path
              d="M 18,8 Q 60,40 88,60"
              fill="none"
              stroke="#3d3427"
              strokeWidth="1.5"
              strokeDasharray="3,3"
              opacity="0.4"
            />
          </g>
        )}

        {/* Parking Lot 2 (top right) */}
        {lotsToShow[1] && (
          <g transform="translate(240, 60)">
            <circle cx="0" cy="0" r="18" fill="#8b7355" stroke="#3d3427" strokeWidth="2" />
            <text
              x="0"
              y="6"
              textAnchor="middle"
              fontSize="16"
              fontFamily="Courier Prime"
              fontWeight="bold"
              fill="#faf8f5"
            >
              P
            </text>
            <text
              x="0"
              y="35"
              textAnchor="middle"
              fontSize="9"
              fontFamily="Courier Prime"
              fill="#3d3427"
              transform="rotate(2, 0, 35)"
            >
              {lotsToShow[1].name.length > 15 
                ? lotsToShow[1].name.substring(0, 15) + '...' 
                : lotsToShow[1].name}
            </text>
            {lotsToShow[1].walkTime && (
              <text
                x="0"
                y="47"
                textAnchor="middle"
                fontSize="8"
                fontFamily="Courier Prime"
                fill="#5d4e3e"
                fontStyle="italic"
              >
                {lotsToShow[1].walkTime}
              </text>
            )}
            <path
              d="M -18,8 Q -60,40 -88,60"
              fill="none"
              stroke="#3d3427"
              strokeWidth="1.5"
              strokeDasharray="3,3"
              opacity="0.4"
            />
          </g>
        )}

        {/* Parking Lot 3 (bottom) */}
        {lotsToShow[2] && (
          <g transform="translate(150, 220)">
            <circle cx="0" cy="0" r="18" fill="#8b7355" stroke="#3d3427" strokeWidth="2" />
            <text
              x="0"
              y="6"
              textAnchor="middle"
              fontSize="16"
              fontFamily="Courier Prime"
              fontWeight="bold"
              fill="#faf8f5"
            >
              P
            </text>
            <text
              x="0"
              y="35"
              textAnchor="middle"
              fontSize="9"
              fontFamily="Courier Prime"
              fill="#3d3427"
              transform="rotate(-1, 0, 35)"
            >
              {lotsToShow[2].name.length > 15 
                ? lotsToShow[2].name.substring(0, 15) + '...' 
                : lotsToShow[2].name}
            </text>
            {lotsToShow[2].walkTime && (
              <text
                x="0"
                y="47"
                textAnchor="middle"
                fontSize="8"
                fontFamily="Courier Prime"
                fill="#5d4e3e"
                fontStyle="italic"
              >
                {lotsToShow[2].walkTime}
              </text>
            )}
            <path
              d="M 0,-18 L 0,-100"
              fill="none"
              stroke="#3d3427"
              strokeWidth="1.5"
              strokeDasharray="3,3"
              opacity="0.4"
            />
          </g>
        )}

        {/* Hand-drawn "roads" - curved lines */}
        <path
          d="M 30,140 Q 80,145 150,140"
          fill="none"
          stroke="#75604a"
          strokeWidth="3"
          opacity="0.3"
        />
        <path
          d="M 150,140 Q 220,135 270,140"
          fill="none"
          stroke="#75604a"
          strokeWidth="3"
          opacity="0.3"
        />
      </svg>

      <p className="text-center text-xs text-brown-700 mt-3 font-typewriter-tight italic">
        Hand-drawn map • Not to scale
      </p>
    </div>
  );
}
