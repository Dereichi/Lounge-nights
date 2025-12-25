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

  // Memoized scroll handlers
  const handleTrendingScroll = useCallback((direction: 'left' | 'right') => {
    const container = trendingScrollRef.current;
    if (!container) return;
    const cardWidth = window.innerWidth >= 768 ? 220 : 180;
    const visibleCards = Math.floor(container.clientWidth / cardWidth);
    const scrollAmount = cardWidth * Math.max(1, Math.floor(visibleCards * 0.5));
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  }, []);

  const handleDrinksScroll = useCallback((direction: 'left' | 'right') => {
    const container = drinksScrollRef.current;
    if (!container) return;
    const cardWidth = window.innerWidth >= 768 ? 280 : 240;
    const visibleCards = Math.floor(container.clientWidth / cardWidth);
    const scrollAmount = cardWidth * Math.max(1, Math.floor(visibleCards * 0.5));
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  }, []);

  // Memoized trending cards
  const trendingCards = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => {
      const theme = getTrendingSvg(i);
      return (
        <div key={i} className="flex-none w-44 md:w-52 relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 rounded-lg"/>
          <div className="absolute top-4 left-4 z-20">
            {getNightlifeIcon(i)}
          </div>
          <img 
            src={`https://images.unsplash.com/photo-${1514432324607 + i}-2e467f4af445?w=400&h=600&auto=format&fit=crop`}
            alt={theme.name}
            className="w-full h-64 object-cover rounded-lg"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              {theme.name}
            </h3>
            <p className="text-white/80 text-sm">{theme.description}</p>
            <p className="text-red-500 font-bold mt-2">${theme.price / 100}</p>
          </div>
        </div>
      );
    });
  }, []);

  // Memoized drink cards
  const drinkCards = useMemo(() => {
    const drinksToShow = drinks && drinks.length > 0 ? drinks : demoDrinks;
    return drinksToShow.slice(0, 8).map((drink) => (
      <DrinkCard key={drink.id} drink={drink} />
    ));
  }, [drinks]);

  // Scroll visibility effects
  useEffect(() => {
    const updateTrendingArrows = () => {
      const container = trendingScrollRef.current;
      if (!container) return;
      setTrendingShowLeft(container.scrollLeft > 0);
      setTrendingShowRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    };

    const updateDrinksArrows = () => {
      const container = drinksScrollRef.current;
      if (!container) return;
      setDrinksShowLeft(container.scrollLeft > 0);
      setDrinksShowRight(container.scrollLeft < container.scrollWidth - container.clientWidth);
    };

    const trendingContainer = trendingScrollRef.current;
    const drinksContainer = drinksScrollRef.current;
    
    trendingContainer?.addEventListener('scroll', updateTrendingArrows);
    drinksContainer?.addEventListener('scroll', updateDrinksArrows);
    
    updateTrendingArrows();
    updateDrinksArrows();

    return () => {
      trendingContainer?.removeEventListener('scroll', updateTrendingArrows);
      drinksContainer?.removeEventListener('scroll', updateDrinksArrows);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      
      {/* Trending Now Section */}
      <Section className="py-16">
        <div className="mb-8 px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#E50914' }}>
            TRENDING NOW
          </h2>
          <p className="text-gray-400 text-lg">Hot tonight & always in demand</p>
        </div>
        
        <div className="relative px-4 md:px-8 lg:px-16">
          {trendingShowLeft && (
            <button
              onClick={() => handleTrendingScroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/80 rounded-full p-2 hover:bg-black/60 transition-colors"
              style={{ marginLeft: '-20px' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          
          <div 
            ref={trendingScrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {trendingCards}
          </div>
          
          {trendingShowRight && (
            <button
              onClick={() => handleTrendingScroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/80 rounded-full p-2 hover:bg-black/60 transition-colors"
              style={{ marginRight: '-20px' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </Section>

      {/* Signature Drinks Section */}
      <Section className="py-16">
        <div className="mb-8 px-4 md:px-8 lg:px-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#E50914' }}>
            SIGNATURE DRINKS
          </h2>
          <p className="text-gray-400 text-lg">Crafted by our expert mixologists</p>
        </div>
        
        <div className="relative px-4 md:px-8 lg:px-16">
          {drinksShowLeft && (
            <button
              onClick={() => handleDrinksScroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/80 rounded-full p-2 hover:bg-black/60 transition-colors"
              style={{ marginLeft: '-20px' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          
          <div 
            ref={drinksScrollRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-x-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {drinkCards}
          </div>
          
          {drinksShowRight && (
            <button
              onClick={() => handleDrinksScroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/80 rounded-full p-2 hover:bg-black/60 transition-colors"
              style={{ marginRight: '-20px' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      </Section>

      <EventsSection />
      
      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#E50914' }}>
              LOUNGE NIGHTS
            </h3>
            <p className="text-gray-400">Experience the night life at its finest</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reservations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                123 Night Street, City
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@loungenights.com
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Lounge Nights. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
