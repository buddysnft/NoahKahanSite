interface TimelineEvent {
  time: string;
  label: string;
  icon: 'sun' | 'fork' | 'ticket' | 'music' | 'star';
}

interface DayTimelineProps {
  events?: TimelineEvent[];
}

export default function DayTimeline({ events }: DayTimelineProps) {
  // Default timeline if no events provided
  const defaultEvents: TimelineEvent[] = [
    { time: 'Morning', label: 'Arrive in city', icon: 'sun' },
    { time: 'Afternoon', label: 'Explore + grab food', icon: 'fork' },
    { time: '6:00 PM', label: 'Head to venue', icon: 'ticket' },
    { time: '7:00 PM', label: 'Doors open', icon: 'ticket' },
    { time: '8:30 PM', label: 'Noah Kahan performs', icon: 'music' },
    { time: 'After', label: 'Celebrate!', icon: 'star' },
  ];

  const timelineEvents = events || defaultEvents;

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'sun':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'fork':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        );
      case 'ticket':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
        );
      case 'music':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        );
      case 'star':
        return (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative py-4">
      {/* Vertical timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brown-900/20" 
           style={{ borderLeft: '2px dashed #3d3427', opacity: 0.3 }}
      />

      {/* Timeline events */}
      <div className="space-y-6">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative flex items-start gap-4">
            {/* Icon node */}
            <div className="relative z-10 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gold-500/20 border-2 border-gold-600 flex items-center justify-center text-brown-900">
                {getIcon(event.icon)}
              </div>
            </div>

            {/* Event content */}
            <div className="flex-1 pt-2">
              <div className="bg-cream-100 rounded-lg p-3 border-l-4 border-gold-500">
                <div className="font-bold text-brown-900 text-sm mb-1 font-typewriter">
                  {event.time}
                </div>
                <div className="text-brown-800 font-typewriter-tight text-sm">
                  {event.label}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom note */}
      <div className="mt-6 text-center">
        <p className="text-xs text-brown-700 italic font-typewriter-tight">
          Times are approximate • Plan ahead for traffic
        </p>
      </div>
    </div>
  );
}
