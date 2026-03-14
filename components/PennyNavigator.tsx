"use client";

interface PennyNavigatorProps {
  onClick: () => void;
}

export default function PennyNavigator({ onClick }: PennyNavigatorProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 
                 hover:scale-105 transition-transform duration-300 
                 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 rounded-full"
      aria-label="Navigate to tour dates"
    >
      {/* Penny - German Shepherd Line Art (based on photo reference) */}
      <svg
        width="128"
        height="128"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-[160px] md:h-[160px]"
      >
        {/* Alert Left Ear - Standing Tall */}
        <path
          d="M 42 22 L 38 10 L 45 18 Z"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Alert Right Ear - Standing Tall */}
        <path
          d="M 58 22 L 62 10 L 55 18 Z"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Head - Classic GSD Shape */}
        <path
          d="M 42 22 Q 40 25 40 30 L 40 35 Q 42 38 50 40 Q 58 38 60 35 L 60 30 Q 60 25 58 22 Z"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Snout/Muzzle */}
        <path
          d="M 45 35 Q 47 40 50 41 Q 53 40 55 35"
          stroke="#3d3427"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Nose */}
        <circle cx="50" cy="41" r="2" fill="#3d3427" />
        
        {/* Eyes - Alert and Happy */}
        <circle cx="45" cy="28" r="2" fill="#3d3427" />
        <circle cx="55" cy="28" r="2" fill="#3d3427" />
        
        {/* Neck to Body */}
        <path
          d="M 44 40 L 42 48"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 56 40 L 58 48"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Body - Strong GSD Build */}
        <path
          d="M 42 48 L 38 58 L 38 70 L 42 75 L 58 75 L 62 70 L 62 58 L 58 48 Z"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Front Left Leg */}
        <path
          d="M 44 70 L 43 85 L 45 87"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Front Right Leg */}
        <path
          d="M 56 70 L 57 85 L 55 87"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Back Left Leg */}
        <path
          d="M 40 65 L 36 80 L 38 82"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Back Right Leg */}
        <path
          d="M 60 65 L 64 80 L 62 82"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Tail - Constant Wag Animation */}
        <path
          d="M 38 58 Q 28 54 24 58"
          stroke="#3d3427"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-tail-wag"
          style={{
            transformOrigin: "38px 58px"
          }}
        />
        
        {/* Tongue Out (Happy!) - Optional Detail */}
        <path
          d="M 50 41 L 50 45"
          stroke="#d4834f"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
