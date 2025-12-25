import React from 'react';

// Memoized nightlife icons - moved outside component to prevent recreation
export const getNightlifeIcon = (index: number) => {
  const icons = [
      // Speaker for card 1
      <svg key="speaker" className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        <circle cx="8" cy="12" r="1.5"/>
        <circle cx="16" cy="12" r="1.5"/>
        <path d="M7 8h2v8H7zm8 0h2v8h-2z"/>
      </svg>,
      
      // Cocktail Glass for card 2
      <svg key="cocktail" className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}>
        <path d="M12 2l-4 7h8l-4-7zm0 3.5L13.5 8h-3L12 5.5zM7 10v2h10v-2H7zm2 4v6h6v-6H9z"/>
        <circle cx="12" cy="18" r="1"/>
        <path d="M8 12l8 4v-4H8z"/>
      </svg>,
      
      // Vinyl Record for card 3
      <svg key="vinyl" className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}>
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3"/>
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      </svg>,
      
      // Disco Ball for card 4
      <svg key="disco" className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}>
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2l2 4-2 2-2-2 2-4zm0 20l-2-4 2-2 2 2-2 4zm10-10l-4 2-2-2 2-2 4 2zm-20 0l4-2 2 2-2 2-4-2z" fill="white" opacity="0.3"/>
        <circle cx="12" cy="12" r="2" fill="white" opacity="0.5"/>
      </svg>,
      
      // Champagne Glass for card 5
      <svg key="champagne" className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}>
        <path d="M12 2l-3 6v8h6V8l-3-6zm0 4l1.5 3h-3L12 6zM9 16v2h6v-2H9zm2 4v2h2v-2h-2z"/>
        <circle cx="12" cy="10" r="1" fill="white" opacity="0.6"/>
      </svg>,
      
      // DJ Headphones for card 6
      <svg key="headphones" className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}>
        <path d="M12 2C6.48 2 2 6.48 2 12v4h4v-4c0-3.31 2.69-6 6-6s6 2.69 6 6v4h4v-4c0-5.52-4.48-10-10-10zM7 14v6h3v-6H7zm7 0v6h3v-6h-3z"/>
        <circle cx="8.5" cy="17" r="1.5"/>
        <circle cx="15.5" cy="17" r="1.5"/>
      </svg>,
      
      // Microphone for card 7
      <svg key="mic" className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}>
        <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
        <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
      </svg>,
      
      // Dance Floor for card 8
      <svg key="dance" className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}>
        <rect x="2" y="2" width="20" height="20" rx="2"/>
        <rect x="6" y="6" width="4" height="4" fill="white" opacity="0.8"/>
        <rect x="14" y="6" width="4" height="4" fill="white" opacity="0.8"/>
        <rect x="6" y="14" width="4" height="4" fill="white" opacity="0.8"/>
        <rect x="14" y="14" width="4" height="4" fill="white" opacity="0.8"/>
        <circle cx="12" cy="12" r="2" fill="white" opacity="0.9"/>
      </svg>,
      
      // VIP Lounge for card 9
      <svg key="vip" className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}>
        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        <path d="M12 5l-6 3v6c0 3.31 2.69 6 6 6s6-2.69 6-6V8l-6-3z" fill="white" opacity="0.3"/>
        <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">VIP</text>
      </svg>,
      
      // Nightclub Sign for card 10
      <svg key="club" className="w-12 h-12 md:w-16 md:h-16 text-white" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))' }}>
        <rect x="4" y="4" width="16" height="16" rx="2"/>
        <circle cx="8" cy="8" r="2" fill="white" opacity="0.8"/>
        <circle cx="16" cy="8" r="2" fill="white" opacity="0.8"/>
        <rect x="10" y="12" width="4" height="6" fill="white" opacity="0.8"/>
        <text x="12" y="20" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">CLUB</text>
      </svg>
  ];
  return icons[index % icons.length];
};
