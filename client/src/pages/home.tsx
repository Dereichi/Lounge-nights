import { Hero } from "@/components/hero";
import { DrinkCard } from "@/components/drink-card";
import { EventsSection } from "@/components/events-section";
import { Section } from "@/components/ui/section";
import { useDrinks } from "@/hooks/use-data";
import { Loader2, Instagram, Facebook, Twitter, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef, useState } from "react";

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

  const placeholder = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='600'><rect width='100%' height='100%' fill='%230b0b0b'/></svg>";

  // Netflix-style navigation with improved scroll behavior
  useEffect(() => {
    const container = trendingContainerRef.current;
    const scroller = trendingScrollRef.current;
    if (!container || !scroller) return;

    let scrollTimeout: NodeJS.Timeout;
    let isScrolling = false;

    const updateArrowVisibility = () => {
      const canScroll = scroller.scrollWidth > scroller.clientWidth + 10;
      const left = scroller.scrollLeft;
      const maxRight = scroller.scrollWidth - scroller.clientWidth - left;

      setTrendingShowLeft(canScroll && left > 10);
      setTrendingShowRight(canScroll && maxRight > 10);
    };

    const onScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        updateArrowVisibility();
      }

      // Debounce scroll updates
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        updateArrowVisibility();
      }, 100);
    };

    const onMouseMove = (ev: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const canScroll = scroller.scrollWidth > scroller.clientWidth + 10;

      // Show arrows based on mouse position and scroll state
      const showLeft = canScroll && scroller.scrollLeft > 10 && x < 80;
      const showRight = canScroll && (scroller.scrollWidth - scroller.clientWidth - scroller.scrollLeft) > 10 && x > rect.width - 80;

      setTrendingShowLeft(showLeft);
      setTrendingShowRight(showRight);
    };

    const onMouseEnter = () => {
      updateArrowVisibility();
    };

    const onMouseLeave = () => {
      // Keep arrows visible briefly after mouse leaves for better UX
      setTimeout(() => {
      setTrendingShowLeft(false);
      setTrendingShowRight(false);
      }, 300);
    };

    // Initial check
    updateArrowVisibility();

    scroller.addEventListener('scroll', onScroll, { passive: true });
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseenter', onMouseEnter);
    container.addEventListener('mouseleave', onMouseLeave);

    return () => {
      clearTimeout(scrollTimeout);
      scroller.removeEventListener('scroll', onScroll as EventListener);
      container.removeEventListener('mousemove', onMouseMove as EventListener);
      container.removeEventListener('mouseenter', onMouseEnter as EventListener);
      container.removeEventListener('mouseleave', onMouseLeave as EventListener);
    };
  }, [trendingContainerRef.current, trendingScrollRef.current]);

  // Mouse-based visibility and scroll state for drinks
  useEffect(() => {
    const container = drinksContainerRef.current;
    const scroller = drinksScrollRef.current;
    if (!container || !scroller) return;

    const onScroll = () => {
      const left = scroller.scrollLeft;
      const maxRight = scroller.scrollWidth - scroller.clientWidth - left;
      const canScroll = scroller.scrollWidth > scroller.clientWidth + 1;
      setDrinksShowLeft(canScroll && left > 8);
      setDrinksShowRight(canScroll && maxRight > 8);
    };

    const onMove = (ev: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const canScroll = scroller.scrollWidth > scroller.clientWidth + 1;
      setDrinksShowLeft(canScroll && scroller.scrollLeft > 0 && x > 8);
      setDrinksShowRight(canScroll && (scroller.scrollWidth - scroller.clientWidth - scroller.scrollLeft) > 0 && x < rect.width - 8);
    };

    const onLeave = () => {
      setDrinksShowLeft(false);
      setDrinksShowRight(false);
    };

    onScroll();
    scroller.addEventListener('scroll', onScroll, { passive: true });
    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);
    return () => {
      scroller.removeEventListener('scroll', onScroll as EventListener);
      container.removeEventListener('mousemove', onMove as EventListener);
      container.removeEventListener('mouseleave', onLeave as EventListener);
    };
  }, [drinksContainerRef.current, drinksScrollRef.current]);

  const displayDrinks = (drinks && drinks.length > 0) ? drinks : demoDrinks;

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Hero />

      {/* Trending Now Section */}
      <Section className="bg-black">
        <div className="mb-8 px-2">
          <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
          <p className="text-gray-400">The hottest moments at Balkaz</p>
        </div>

        <div className="relative hide-scrollbar group" ref={trendingContainerRef}>
          {/* Netflix-style navigation arrows */}
          {trendingShowLeft && (
            <button
              aria-label="Previous"
              onClick={() => {
                const container = trendingScrollRef.current;
                if (!container) return;
                const cardWidth = window.innerWidth >= 768 ? 200 + 20 : 160 + 20; // responsive card width + gap
                const visibleCards = Math.floor(container.clientWidth / cardWidth);
                const scrollAmount = cardWidth * Math.max(1, Math.floor(visibleCards * 0.5));
                container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="bg-black/60 hover:bg-black/80 rounded-full p-2 md:p-3 transition-all duration-200 hover:scale-110">
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </button>
          )}

          {trendingShowRight && (
            <button
              aria-label="Next"
              onClick={() => {
                const container = trendingScrollRef.current;
                if (!container) return;
                const cardWidth = window.innerWidth >= 768 ? 200 + 20 : 160 + 20; // responsive card width + gap
                const visibleCards = Math.floor(container.clientWidth / cardWidth);
                const scrollAmount = cardWidth * Math.max(1, Math.floor(visibleCards * 0.5));
                container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="bg-black/60 hover:bg-black/80 rounded-full p-2 md:p-3 transition-all duration-200 hover:scale-110">
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </button>
          )}

          <div
            ref={trendingScrollRef}
            className="flex touch-pan-y cursor-grab active:cursor-grabbing gap-5 py-4 select-none hide-scrollbar"
            style={{
              scrollBehavior: 'smooth',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {trendingImages.map((image, index) => {
              // Different nightlife-themed SVG illustrations
              const getTrendingSvg = (index: number) => {
                const themes = [
                  // Dance Floor Theme
                  `<defs>
                    <linearGradient id="dance-floor-${index}" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ff0080" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#00ffff" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dance-floor-${index})" opacity="0.3"/>
                  <circle cx="100" cy="150" r="40" fill="#ff0080" opacity="0.6"/>
                  <circle cx="60" cy="120" r="15" fill="#00ffff" opacity="0.8"/>
                  <circle cx="140" cy="180" r="20" fill="#8b5cf6" opacity="0.7"/>
                  <rect x="80" y="200" width="40" height="80" fill="#1a1a1a" rx="20"/>
                  <circle cx="100" cy="220" r="8" fill="#ff0080"/>
                  <circle cx="100" cy="240" r="8" fill="#00ffff"/>
                  <circle cx="100" cy="260" r="8" fill="#8b5cf6"/>`,

                  // VIP Lounge Theme
                  `<defs>
                    <linearGradient id="vip-lounge-${index}" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ffd700" />
                      <stop offset="50%" stopColor="#ff6b35" />
                      <stop offset="100%" stopColor="#8b4513" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#vip-lounge-${index})" opacity="0.2"/>
                  <rect x="40" y="120" width="120" height="80" fill="#8b4513" rx="10"/>
                  <circle cx="70" cy="140" r="8" fill="#ffd700"/>
                  <circle cx="100" cy="140" r="8" fill="#ffd700"/>
                  <circle cx="130" cy="140" r="8" fill="#ffd700"/>
                  <rect x="60" y="170" width="80" height="20" fill="#654321" rx="10"/>
                  <circle cx="100" cy="250" r="30" fill="#ff6b35" opacity="0.8"/>
                  <text x="100" y="260" text-anchor="middle" fill="#fff" font-size="16" font-weight="bold">VIP</text>`,

                  // Bar Counter Theme
                  `<defs>
                    <linearGradient id="bar-counter-${index}" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#8b4513" />
                      <stop offset="50%" stopColor="#daa520" />
                      <stop offset="100%" stopColor="#654321" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#bar-counter-${index})" opacity="0.3"/>
                  <rect x="30" y="180" width="140" height="40" fill="#8b4513" rx="5"/>
                  <rect x="40" y="160" width="20" height="60" fill="#daa520"/>
                  <rect x="70" y="160" width="20" height="60" fill="#daa520"/>
                  <rect x="100" y="160" width="20" height="60" fill="#daa520"/>
                  <rect x="130" y="160" width="20" height="60" fill="#daa520"/>
                  <circle cx="50" cy="140" r="12" fill="#ff4500"/>
                  <circle cx="80" cy="140" r="12" fill="#ff6347"/>
                  <circle cx="110" cy="140" r="12" fill="#ff7f50"/>
                  <circle cx="140" cy="140" r="12" fill="#ffa500"/>
                  <text x="100" y="205" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">BAR</text>`,

                  // DJ Booth Theme
                  `<defs>
                    <linearGradient id="dj-booth-${index}" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#000000" />
                      <stop offset="50%" stopColor="#ff1493" />
                      <stop offset="100%" stopColor="#00bfff" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dj-booth-${index})" opacity="0.3"/>
                  <rect x="50" y="140" width="100" height="60" fill="#1a1a1a" rx="8"/>
                  <circle cx="80" cy="170" r="15" fill="#ff1493"/>
                  <circle cx="120" cy="170" r="15" fill="#00bfff"/>
                  <rect x="75" y="155" width="10" height="30" fill="#333"/>
                  <rect x="115" y="155" width="10" height="30" fill="#333"/>
                  <rect x="60" y="200" width="80" height="20" fill="#333" rx="10"/>
                  <circle cx="100" cy="210" r="6" fill="#ff1493"/>
                  <path d="M70 220 Q100 240 130 220" stroke="#00bfff" stroke-width="3" fill="none"/>
                  <text x="100" y="235" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">DJ</text>`,

                  // Party Lights Theme
                  `<defs>
                    <linearGradient id="party-lights-${index}" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ff0000" />
                      <stop offset="50%" stopColor="#ffff00" />
                      <stop offset="100%" stopColor="#0000ff" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#party-lights-${index})" opacity="0.2"/>
                  <circle cx="50" cy="80" r="8" fill="#ff0000" opacity="0.8"/>
                  <circle cx="150" cy="100" r="8" fill="#ffff00" opacity="0.8"/>
                  <circle cx="80" cy="250" r="8" fill="#0000ff" opacity="0.8"/>
                  <circle cx="120" cy="60" r="8" fill="#ff00ff" opacity="0.8"/>
                  <circle cx="30" cy="180" r="8" fill="#00ffff" opacity="0.8"/>
                  <circle cx="170" cy="220" r="8" fill="#ffa500" opacity="0.8"/>
                  <path d="M20 120 L180 120" stroke="#fff" stroke-width="2" opacity="0.3"/>
                  <path d="M20 160 L180 160" stroke="#fff" stroke-width="2" opacity="0.3"/>
                  <path d="M20 200 L180 200" stroke="#fff" stroke-width="2" opacity="0.3"/>`,

                  // Champagne Theme
                  `<defs>
                    <linearGradient id="champagne-${index}" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#e6e6fa" />
                      <stop offset="50%" stopColor="#daa520" />
                      <stop offset="100%" stopColor="#ffd700" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#champagne-${index})" opacity="0.2"/>
                  <rect x="85" y="120" width="30" height="120" fill="#e6e6fa" rx="15"/>
                  <rect x="90" y="100" width="20" height="25" fill="#daa520"/>
                  <path d="M90 100 L100 85 L110 100 Z" fill="#daa520"/>
                  <circle cx="100" cy="240" r="25" fill="#daa520" opacity="0.8"/>
                  <path d="M75 240 Q100 260 125 240" stroke="#daa520" stroke-width="2" fill="#daa520" opacity="0.6"/>
                  <circle cx="95" cy="210" r="3" fill="#fff"/>
                  <circle cx="105" cy="215" r="3" fill="#fff"/>
                  <circle cx="100" cy="225" r="3" fill="#fff"/>
                  <text x="100" y="245" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">POP!</text>`,

                  // Nightclub Theme
                  `<defs>
                    <linearGradient id="nightclub-${index}" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#800080" />
                      <stop offset="50%" stopColor="#ff0000" />
                      <stop offset="100%" stopColor="#000000" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#nightclub-${index})" opacity="0.3"/>
                  <rect x="40" y="140" width="120" height="100" fill="#1a1a1a" rx="20"/>
                  <circle cx="70" cy="170" r="12" fill="#ff0000" opacity="0.8"/>
                  <circle cx="100" cy="170" r="12" fill="#00ff00" opacity="0.8"/>
                  <circle cx="130" cy="170" r="12" fill="#0000ff" opacity="0.8"/>
                  <circle cx="70" cy="200" r="12" fill="#ffff00" opacity="0.8"/>
                  <circle cx="100" cy="200" r="12" fill="#ff00ff" opacity="0.8"/>
                  <circle cx="130" cy="200" r="12" fill="#00ffff" opacity="0.8"/>
                  <text x="100" y="235" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">CLUB</text>`,

                  // Cocktail Theme
                  `<defs>
                    <linearGradient id="cocktail-${index}" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ff69b4" />
                      <stop offset="50%" stopColor="#32cd32" />
                      <stop offset="100%" stopColor="#ffd700" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cocktail-${index})" opacity="0.2"/>
                  <rect x="85" y="140" width="30" height="80" fill="#e6e6fa" rx="15"/>
                  <rect x="90" y="120" width="20" height="25" fill="#daa520"/>
                  <path d="M90 120 L100 105 L110 120 Z" fill="#daa520"/>
                  <circle cx="100" cy="160" r="15" fill="#ff69b4" opacity="0.8"/>
                  <circle cx="100" cy="180" r="12" fill="#32cd32" opacity="0.8"/>
                  <circle cx="100" cy="195" r="10" fill="#ffd700" opacity="0.8"/>
                  <circle cx="85" cy="170" r="3" fill="#fff"/>
                  <circle cx="115" cy="175" r="3" fill="#fff"/>
                  <text x="100" y="225" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">COCKTAIL</text>`,

                  // Music Festival Theme
                  `<defs>
                    <linearGradient id="music-fest-${index}" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ff4500" />
                      <stop offset="50%" stopColor="#ff6347" />
                      <stop offset="100%" stopColor="#ffd700" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#music-fest-${index})" opacity="0.3"/>
                  <circle cx="100" cy="150" r="40" fill="#ff4500" opacity="0.4"/>
                  <path d="M60 100 L100 130 L140 100 L100 160 Z" fill="#ff6347" opacity="0.6"/>
                  <circle cx="100" cy="130" r="20" fill="#ffd700" opacity="0.8"/>
                  <circle cx="85" cy="125" r="3" fill="#fff"/>
                  <circle cx="95" cy="120" r="3" fill="#fff"/>
                  <circle cx="105" cy="125" r="3" fill="#fff"/>
                  <circle cx="100" cy="135" r="3" fill="#fff"/>
                  <text x="100" y="250" text-anchor="middle" fill="#fff" font-size="12" font-weight="bold">FESTIVAL</text>`,

                  // Luxury Lounge Theme
                  `<defs>
                    <linearGradient id="luxury-${index}" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#daa520" />
                      <stop offset="50%" stopColor="#ffd700" />
                      <stop offset="100%" stopColor="#b8860b" />
                    </linearGradient>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#luxury-${index})" opacity="0.2"/>
                  <rect x="50" y="140" width="100" height="80" fill="#daa520" rx="15"/>
                  <circle cx="75" cy="160" r="8" fill="#ffd700"/>
                  <circle cx="100" cy="160" r="8" fill="#ffd700"/>
                  <circle cx="125" cy="160" r="8" fill="#ffd700"/>
                  <rect x="70" y="185" width="60" height="20" fill="#b8860b" rx="10"/>
                  <circle cx="100" cy="195" r="5" fill="#fff"/>
                  <rect x="40" y="240" width="120" height="15" fill="#daa520" rx="7"/>
                  <text x="100" y="252" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold">LUXURY</text>`
                ];

                return themes[index % themes.length];
              };

              return (
                <div key={index} className="flex-shrink-0 w-[160px] h-[240px] md:w-[200px] md:h-[300px] relative group cursor-pointer transition-all duration-300 hover:scale-110 hover:z-10" style={index === trendingImages.length - 1 ? { marginRight: '-60px' } : undefined}>
                  {/* Card shadow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Detailed SVG nightlife illustrations */}
                  <svg viewBox="0 0 200 300" className="w-full h-full block rounded-lg transition-all duration-300 group-hover:brightness-110" role="img" aria-label={`Trending nightlife moment ${index + 1}`} preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
                    {getTrendingSvg(index)}
                </svg>

                  {/* Dark overlay with hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg transition-all duration-300 group-hover:from-black/60" />

                  {/* Number at bottom-left with Netflix-style animation */}
                  <div
                    className="absolute bottom-4 left-4 text-5xl font-black transition-all duration-300 group-hover:scale-110 group-hover:text-red-500"
                  style={{
                    WebkitTextStroke: "2px white",
                    color: "#141414",
                    lineHeight: "1",
                      textShadow: "0 0 10px rgba(229,9,20,0.3)"
                  }}
                >
                  {index + 1}
                </div>

                  {/* Hover play button effect (Netflix style) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-red-600/90 rounded-full p-4 hover:bg-red-600 transition-colors duration-200">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Drinks Grid Section */}
      <Section className="bg-black">
        <div className="flex justify-between items-end mb-8 px-2">
          <div>
            <h2 className="text-3xl font-bold mb-2">Signature Drinks</h2>
            <p className="text-gray-400">Handcrafted cocktails and premium spirits</p>
          </div>
          {/* Scroll indicators could go here */}
        </div>
        
        {isLoadingDrinks ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="animate-spin w-8 h-8 text-primary" />
          </div>
        ) : (
          <div className="relative" ref={drinksContainerRef}>
              {drinksShowLeft && (
                <button
                  aria-label="Prev drinks"
                  onClick={() => drinksScrollRef.current?.scrollBy({ left: -(drinksScrollRef.current.clientWidth * 0.7), behavior: 'smooth' })}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 rounded-full p-2 pointer-events-auto"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
              )}

              {drinksShowRight && (
                <button
                  aria-label="Next drinks"
                  onClick={() => drinksScrollRef.current?.scrollBy({ left: drinksScrollRef.current.clientWidth * 0.7, behavior: 'smooth' })}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 rounded-full p-2 pointer-events-auto"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              )}

              <div ref={drinksScrollRef} className="flex touch-pan-y cursor-grab active:cursor-grabbing py-4" style={{ scrollBehavior: 'smooth', overflowX: 'auto' }}>
                {displayDrinks.map((drink, idx) => (
                  <div key={drink.id} style={idx === displayDrinks.length - 1 ? { marginRight: '-60px' } : undefined}>
                    <DrinkCard key={drink.id} drink={drink} />
                  </div>
                ))}
              </div>
            </div>
        )}
      </Section>

      <EventsSection />

      {/* Footer */}
      <footer className="w-full bg-black py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
            
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h3 className="font-poppins text-2xl font-bold text-white tracking-wide">
                BALKAZ
              </h3>
              <p className="text-gray-500 text-sm max-w-xs">
                The premier nightlife destination. Elevating the standard of party culture since 2023.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h4 className="text-lg font-bold">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="w-4 h-4 mr-2 text-primary" />
                  <span>123 Party Avenue, Downtown</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="w-4 h-4 mr-2 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  <span>vip@balkaz.com</span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h4 className="text-lg font-bold">Opening Hours</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex justify-between w-full max-w-[150px]"><span>Mon - Wed</span> <span>Closed</span></li>
                <li className="flex justify-between w-full max-w-[150px]"><span>Thu - Fri</span> <span>10PM - 4AM</span></li>
                <li className="flex justify-between w-full max-w-[150px]"><span>Saturday</span> <span>10PM - 5AM</span></li>
                <li className="flex justify-between w-full max-w-[150px]"><span>Sunday</span> <span>9PM - 2AM</span></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <h4 className="text-lg font-bold">Stay Updated</h4>
              <p className="text-xs text-gray-500">Get on the guest list for upcoming events.</p>
              <div className="flex w-full max-w-xs">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-white/5 border border-white/10 rounded-l px-3 py-2 text-sm w-full focus:outline-none focus:border-primary"
                />
                <button className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-r text-white text-sm font-bold transition-colors">
                  JOIN
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
            <p>&copy; 2024 Balkaz Lounge Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
