import { Hero } from "@/components/hero";
import { DrinkCard } from "@/components/drink-card";
import { EventsSection } from "@/components/events-section";
import { Section } from "@/components/ui/section";
import { useDrinks } from "@/hooks/use-data";
import { Loader2, Instagram, Facebook, Twitter, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { getNightlifeIcon } from "@/components/Icons";
import { getTrendingSvg, demoDrinks } from "@/components/TrendingData";

export default function Home() {
  const { data: drinks, isLoading: isLoadingDrinks } = useDrinks();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps" 
  });

  const [emblaRefTrending, emblaApiTrending] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1
  });

  // Scroll refs: outer container (for mouse events) + inner scroll element (overflow)
  const trendingContainerRef = useRef<HTMLDivElement | null>(null);
  const trendingScrollRef = useRef<HTMLDivElement | null>(null);
  const drinksContainerRef = useRef<HTMLDivElement | null>(null);
  const drinksScrollRef = useRef<HTMLDivElement | null>(null);
  const [trendingShowLeft, setTrendingShowLeft] = useState(false);
  const [trendingShowRight, setTrendingShowRight] = useState(false);
  const [drinksShowLeft, setDrinksShowLeft] = useState(false);
  const [drinksShowRight, setDrinksShowRight] = useState(false);

// Memoized SVG themes outside component to prevent recreation
const getTrendingSvg = (index: number) => {
  const themes = [
    { id: 1, name: "Neon Sunset", description: "Vodka, Peach Schnapps, Cranberry, Orange", price: 1200, image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=800&auto=format&fit=crop&q=60", category: "Cocktail" },
    { id: 2, name: "Midnight Blue", description: "Blue Curacao, Gin, Lemon, Soda", price: 1400, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=60", category: "Cocktail" },
    { id: 3, name: "Crimson King", description: "Whiskey, Cherry Liqueur, Bitters", price: 1600, image: "https://images.unsplash.com/photo-1536935338725-8f319ac643d3?w=800&auto=format&fit=crop&q=60", category: "Whiskey" },
    { id: 4, name: "Velvet Rope", description: "Champagne, Raspberry Puree", price: 1800, image: "https://images.unsplash.com/photo-1598155523122-38423bd4d6bc?w=800&auto=format&fit=crop&q=60", category: "Sparkling" },
    { id: 5, name: "Dark & Stormy", description: "Dark Rum, Ginger Beer, Lime", price: 1300, image: "https://images.unsplash.com/photo-1455621481073-d5bc1c40e3cb?w=800&auto=format&fit=crop&q=60", category: "Rum" },
    { id: 6, name: "Emerald City", description: "Melon Liqueur, Vodka, Sprite", price: 1100, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=60", category: "Cocktail" },
    { id: 7, name: "Golden Hour", description: "Tequila, Agave, Lime, Salt", price: 1500, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop&q=60", category: "Tequila" },
    { id: 8, name: "Purple Haze", description: "Gin, Blackberry Liqueur, Tonic", price: 1350, image: "https://images.unsplash.com/photo-1605218427368-35b861269b2a?w=800&auto=format&fit=crop&q=60", category: "Gin" },
    { id: 9, name: "Old Fashioned", description: "Bourbon, Sugar Cube, Angostura", price: 1450, image: "https://images.unsplash.com/photo-1595981266686-0cf387d0a608?w=800&auto=format&fit=crop&q=60", category: "Classic" },
    { id: 10, name: "Mojito", description: "White Rum, Mint, Lime, Soda", price: 1250, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&auto=format&fit=crop&q=60", category: "Classic" },
  ];

  const trendingImages = [
    "https://images.unsplash.com/photo-1514432324607-2e467f4af445?w=400&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1447702341674-5f1f0c14e6d7?w=400&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=400&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516594915650-c5b8e6d8e6f5?w=400&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504681869696-d977e0531cf1?w=400&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514821985223-2f8714e4c92a?w=400&h=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516575334481-f410295afbc1?w=400&h=600&auto=format&fit=crop",
  ];
  return themes[index % themes.length];
};

// Memoized nightlife icons
const getNightlifeIcon = (index: number) => {
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

// Example drinks if database is empty for visual demo
const demoDrinks = [
  { id: 1, name: "Neon Sunset", description: "Vodka, Peach Schnapps, Cranberry, Orange", price: 1200, image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=800&auto=format&fit=crop&q=60", category: "Cocktail" },
  { id: 2, name: "Midnight Blue", description: "Blue Curacao, Gin, Lemon, Soda", price: 1400, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=60", category: "Cocktail" },
  { id: 3, name: "Crimson King", description: "Whiskey, Cherry Liqueur, Bitters", price: 1600, image: "https://images.unsplash.com/photo-1536935338725-8f319ac643d3?w=800&auto=format&fit=crop&q=60", category: "Whiskey" },
  { id: 4, name: "Velvet Rope", description: "Champagne, Raspberry Puree", price: 1800, image: "https://images.unsplash.com/photo-1598155523122-38423bd4d6bc?w=800&auto=format&fit=crop&q=60", category: "Sparkling" },
  { id: 5, name: "Dark & Stormy", description: "Dark Rum, Ginger Beer, Lime", price: 1300, image: "https://images.unsplash.com/photo-1455621481073-d5bc1c40e3cb?w=800&auto=format&fit=crop&q=60", category: "Rum" },
  { id: 6, name: "Emerald City", description: "Melon Liqueur, Vodka, Sprite", price: 1100, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=60", category: "Cocktail" },
  { id: 7, name: "Golden Hour", description: "Tequila, Agave, Lime, Salt", price: 1500, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&auto=format&fit=crop&q=60", category: "Tequila" },
  { id: 8, name: "Purple Haze", description: "Gin, Blackberry Liqueur, Tonic", price: 1350, image: "https://images.unsplash.com/photo-1605218427368-35b861269b2a?w=800&auto=format&fit=crop&q=60", category: "Gin" },
  { id: 9, name: "Old Fashioned", description: "Bourbon, Sugar Cube, Angostura", price: 1450, image: "https://images.unsplash.com/photo-1595981266686-0cf387d0a608?w=800&auto=format&fit=crop&q=60", category: "Classic" },
  { id: 10, name: "Mojito", description: "White Rum, Mint, Lime, Soda", price: 1250, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=800&auto=format&fit=crop&q=60", category: "Classic" },
];

export default function Home() {
  const { data: drinks, isLoading: isLoadingDrinks } = useDrinks();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps" 
  });

  const [emblaRefTrending, emblaApiTrending] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
    slidesToScroll: 1
  });

  // Scroll refs: outer container (for mouse events) + inner scroll element (overflow)
  const trendingContainerRef = useRef<HTMLDivElement | null>(null);
  const trendingScrollRef = useRef<HTMLDivElement | null>(null);
  const drinksContainerRef = useRef<HTMLDivElement | null>(null);
  const drinksScrollRef = useRef<HTMLDivElement | null>(null);
  const [trendingShowLeft, setTrendingShowLeft] = useState(false);
  const [trendingShowRight, setTrendingShowRight] = useState(false);
  const [drinksShowLeft, setDrinksShowLeft] = useState(false);
  const [drinksShowRight, setDrinksShowRight] = useState(false);
