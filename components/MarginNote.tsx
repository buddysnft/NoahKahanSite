interface MarginNoteProps {
  text: string;
  position?: 'top-right' | 'bottom-left' | 'top-left' | 'bottom-right';
  rotation?: number;
}

export default function MarginNote({ 
  text, 
  position = 'top-right',
  rotation = -5 
}: MarginNoteProps) {
  
  const positionClasses = {
    'top-right': 'top-2 right-2',
    'top-left': 'top-2 left-2',
    'bottom-right': 'bottom-2 right-2',
    'bottom-left': 'bottom-2 left-2',
  };

  return (
    <div 
      className={`absolute ${positionClasses[position]} pointer-events-none select-none`}
      style={{
        transform: `rotate(${rotation}deg)`,
        opacity: 0.6,
      }}
    >
      <p 
        className="text-sm text-brown-900"
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontSize: '15px',
          letterSpacing: '0.02em',
        }}
      >
        {text}
      </p>
    </div>
  );
}
