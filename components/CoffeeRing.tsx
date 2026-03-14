export default function CoffeeRing() {
  return (
    <div 
      className="absolute top-4 right-4 pointer-events-none"
      style={{
        width: '100px',
        height: '100px',
        transform: 'rotate(15deg)',
        opacity: 0.12,
      }}
    >
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
        {/* Main ring - darker outer edge */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="#6b4423"
          strokeWidth="3"
          opacity="0.8"
        />
        
        {/* Inner ring - lighter */}
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="#8b6333"
          strokeWidth="2"
          opacity="0.5"
        />
        
        {/* Overlapping second ring (from cup moving slightly) */}
        <circle
          cx="48"
          cy="52"
          r="36"
          fill="none"
          stroke="#6b4423"
          strokeWidth="2.5"
          opacity="0.4"
        />
        
        {/* Drip mark 1 - top right */}
        <path
          d="M 68 42 Q 70 45 69 48"
          stroke="#6b4423"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        
        {/* Drip mark 2 - bottom left */}
        <path
          d="M 32 60 Q 30 63 31 66"
          stroke="#6b4423"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
        
        {/* Small splatter marks */}
        <circle cx="72" cy="38" r="1.5" fill="#6b4423" opacity="0.4" />
        <circle cx="28" cy="65" r="1" fill="#6b4423" opacity="0.3" />
        <circle cx="55" cy="25" r="1" fill="#6b4423" opacity="0.35" />
        
        {/* Inner stain (coffee that seeped) */}
        <ellipse
          cx="50"
          cy="50"
          rx="28"
          ry="26"
          fill="#6b4423"
          opacity="0.08"
          style={{ filter: 'blur(3px)' }}
        />
        
        {/* Bottom lip of cup left slight impression */}
        <path
          d="M 20 50 Q 50 48 80 50"
          stroke="#6b4423"
          strokeWidth="1"
          opacity="0.25"
          fill="none"
        />
      </svg>
    </div>
  );
}
