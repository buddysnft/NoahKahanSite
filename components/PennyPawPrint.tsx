interface PennyPawPrintProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  rotation?: number;
  size?: number;
}

export default function PennyPawPrint({ 
  position = 'top-right', 
  rotation = -15,
  size = 45 
}: PennyPawPrintProps) {
  
  const positionClasses = {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6',
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} pointer-events-none`}
      style={{
        transform: `rotate(${rotation}deg)`,
        opacity: 0.12,
      }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 120" 
        fill="none"
      >
        {/* Paw pad (bottom) */}
        <ellipse 
          cx="50" 
          cy="85" 
          rx="22" 
          ry="18" 
          fill="#3d3427"
        />
        
        {/* Toe 1 (leftmost) */}
        <ellipse 
          cx="25" 
          cy="45" 
          rx="10" 
          ry="14" 
          fill="#3d3427"
          transform="rotate(-15, 25, 45)"
        />
        
        {/* Toe 2 (left-center) */}
        <ellipse 
          cx="38" 
          cy="30" 
          rx="10" 
          ry="15" 
          fill="#3d3427"
          transform="rotate(-5, 38, 30)"
        />
        
        {/* Toe 3 (right-center) */}
        <ellipse 
          cx="62" 
          cy="30" 
          rx="10" 
          ry="15" 
          fill="#3d3427"
          transform="rotate(5, 62, 30)"
        />
        
        {/* Toe 4 (rightmost) */}
        <ellipse 
          cx="75" 
          cy="45" 
          rx="10" 
          ry="14" 
          fill="#3d3427"
          transform="rotate(15, 75, 45)"
        />
      </svg>
    </div>
  );
}
