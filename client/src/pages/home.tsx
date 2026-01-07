import { Hero } from "@/components/hero";
import { EventsSection } from "@/components/events-section";
import { Instagram, Facebook, MapPin, Phone, Mail, ShoppingCart } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [lastScrollLeft, setLastScrollLeft] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [selectedDrink, setSelectedDrink] = useState<typeof trendingDrinks[0] | null>(null);
  const [isDrinkModalOpen, setIsDrinkModalOpen] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isModalHovered, setIsModalHovered] = useState(false);
  const [isChevronHovered, setIsChevronHovered] = useState(false);

  const handleDrinkClick = (drink: typeof trendingDrinks[0]) => {
    setSelectedDrink(drink);
    setIsDrinkModalOpen(true);
    // Reset scroll states
    setIsScrolledDown(false);
    setHasScrolled(false);
    setIsModalHovered(false);
    setIsChevronHovered(false);
  };

  const checkScrollChevron = () => {
    if (modalContentRef.current) {
      const element = modalContentRef.current;
      const isScrollable = element.scrollHeight > element.clientHeight;
      const isAtTop = element.scrollTop <= 10;

      setIsScrolledDown(!isAtTop);
      if (!isAtTop) {
        setHasScrolled(true);
      }
    }
  };

  const handleChevronClick = () => {
    if (modalContentRef.current) {
      const element = modalContentRef.current;
      if (hasScrolled && isScrolledDown) {
        // Scroll to top
        element.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        setHasScrolled(false);
      } else {
        // Scroll down
        const scrollAmount = element.clientHeight * 0.8; // Scroll 80% of visible height
        element.scrollTo({
          top: element.scrollTop + scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  // Function to check carousel scroll position and direction
  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const isAtStartPos = scrollLeft <= 10;
      const isAtEndPos = Math.ceil(scrollLeft + clientWidth) >= scrollWidth - 10;

      // Detect scroll direction
      const scrollingRight = scrollLeft > lastScrollLeft;
      const scrollingLeft = scrollLeft < lastScrollLeft;

      // Update states
      setShowLeftArrow(!isAtStartPos);
      setShowRightArrow(!isAtEndPos);

      // Update last scroll position for direction detection
      setLastScrollLeft(scrollLeft);

      // Set scrolling state for animations
      if (scrollingRight || scrollingLeft) {
        setIsScrolling(true);
        const timer = setTimeout(() => setIsScrolling(false), 150);
        return () => clearTimeout(timer);
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      // Dynamic card width based on screen size
      const cardWidth = window.innerWidth < 640 ? 192 : // w-48 (192px)
                        window.innerWidth < 768 ? 224 : // w-56 (224px)
                        window.innerWidth < 1024 ? 256 : // w-64 (256px)
                        288; // w-72 (288px)

      // Dynamic gap based on screen size
      const gap = window.innerWidth < 640 ? 12 : // gap-3
                 window.innerWidth < 768 ? 16 : // gap-4
                 24; // gap-6

      const cardWithGap = cardWidth + gap;
      const visibleCards = Math.max(1, Math.floor(container.clientWidth / cardWithGap));
      const scrollAmount = direction === 'left' ? -cardWithGap * visibleCards : cardWithGap * visibleCards;

      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      // Trigger immediate scroll check for responsive arrow updates
      setTimeout(() => checkScroll(), 100);
    }
  };

  // Check for scroll chevron when modal content changes
  useEffect(() => {
    if (isDrinkModalOpen && modalContentRef.current) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        checkScrollChevron();
      }, 100);
    }
  }, [isDrinkModalOpen, selectedDrink]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Monitor both scroll events and container size changes
    const resizeObserver = new ResizeObserver(() => checkScroll());
    resizeObserver.observe(carousel);
    carousel.addEventListener('scroll', checkScroll);

    // Add touch/swipe support
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartX || !touchStartY || !touchStartTime) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      const deltaX = touchStartX - touchEndX;
      const deltaY = touchStartY - touchEndY;
      const deltaTime = touchEndTime - touchStartTime;

      // More sensitive detection for mobile devices
      const minSwipeDistance = window.innerWidth < 768 ? 30 : 50; // Shorter distance on mobile
      const maxVerticalMovement = window.innerWidth < 768 ? 60 : 50; // More forgiving vertical movement on mobile

      // Only handle horizontal swipes (ignore vertical scrolls)
      if (Math.abs(deltaX) > minSwipeDistance &&
          Math.abs(deltaX) > Math.abs(deltaY) &&
          Math.abs(deltaY) < maxVerticalMovement &&
          deltaTime < 500) { // Fast swipe
        if (deltaX > 0) {
          // Swiped left - scroll right
          scroll('right');
        } else {
          // Swiped right - scroll left
          scroll('left');
        }
      }

      // Reset touch values
      touchStartX = 0;
      touchStartY = 0;
      touchStartTime = 0;
    };

    carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
    carousel.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Initial check
    checkScroll();

    return () => {
      resizeObserver.disconnect();
      carousel.removeEventListener('scroll', checkScroll);
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, [lastScrollLeft]);




  const trendingDrinks = [
    { id: 1, name: "Velvet Rope", description: "Champagne, Raspberry Puree", price: 180000, image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=400&h=600&fit=crop" },
    { id: 2, name: "Crimson King", description: "Whiskey, Cherry Liqueur, Bitters", price: 160000, image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?w=400&h=600&fit=crop" },
    { id: 3, name: "Golden Hour", description: "Tequila, Agave, Lime, Salt", price: 150000, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=600&fit=crop" },
    { id: 4, name: "Old Fashioned", description: "Bourbon, Sugar Cube, Angostura", price: 145000, image: "https://images.unsplash.com/photo-1595981266686-0cf387d0a608?w=400&h=600&fit=crop" },
    { id: 5, name: "Midnight Blue", description: "Blue Curacao, Gin, Lemon, Soda", price: 140000, image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=600&fit=crop" },
    { id: 6, name: "Dark & Stormy", description: "Dark Rum, Ginger Beer, Lime", price: 130000, image: "https://images.unsplash.com/photo-1455621481073-d5bc1c40e3cb?w=400&h=600&fit=crop" },
    { id: 7, name: "Neon Sunset", description: "Vodka, Peach Schnapps, Cranberry, Orange", price: 120000, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop" },
    { id: 8, name: "Emerald City", description: "Melon Liqueur, Vodka, Sprite", price: 110000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=600&fit=crop" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
      <div className="relative" style={{ overflow: 'visible', paddingBottom: '20px' }}>
        <Hero />
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-visible z-50 pointer-events-none" style={{
            marginBottom: '-20px'
          }}>
          {/* Purple gradient fill - positioned behind the line */}
          <svg viewBox="0 0 1440 300" fill="none" className="w-full h-auto absolute inset-0" preserveAspectRatio="none" style={{ zIndex: 1 }}>
            <defs>
              {/* Enhanced gradient with radial blending effect */}
              <radialGradient id="purple-radial-blend" cx="50%" cy="0%" r="80%">
                <stop offset="0%" stopColor="#7e22ce" stopOpacity="0.8" />
                <stop offset="20%" stopColor="#7e22ce" stopOpacity="0.6" />
                <stop offset="40%" stopColor="#7e22ce" stopOpacity="0.3" />
                <stop offset="60%" stopColor="#7e22ce" stopOpacity="0.1" />
                <stop offset="80%" stopColor="#7e22ce" stopOpacity="0.03" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              {/* Additional feathered edge effect */}
              <filter id="feather-blend">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0" result="feather" />
                <feComposite in="SourceGraphic" in2="feather" operator="over" />
              </filter>
            </defs>

            {/* Primary gradient fill with extended area for blending */}
            <path d="M0 300 L0 100 C 360 0, 1080 0, 1440 100 L1440 300 Z" fill="url(#purple-radial-blend)" />

            {/* Secondary feathered edge for ultra-smooth blending */}
            <path d="M-50 350 L-50 80 C 360 -20, 1080 -20, 1490 80 L1490 350 Z" fill="url(#purple-radial-blend)" opacity="0.3" filter="url(#feather-blend)" />
          </svg>

          {/* Magenta curved line - positioned above the fill */}
          <svg viewBox="-5 -5 1450 110" fill="none" className="w-full h-auto translate-y-[1px] relative" preserveAspectRatio="none" style={{ zIndex: 2 }}>
            <path d="M0 100 C 360 0, 1080 0, 1440 100" stroke="url(#gradient-line)" strokeWidth="3" fill="none" />
            <defs>
              <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E91E63" />
                <stop offset="50%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <path d="M0 100 C 360 0, 1080 0, 1440 100" stroke="#E91E63" strokeWidth="6" fill="none" filter="url(#glow)" opacity="0.3" />
          </svg>
        </div>
      </div>

      <section className="relative py-16 sm:py-20 md:py-24 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#050505' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#E50914' }}>
              SIGNATURE DRINKS
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">Discover our most popular cocktails crafted by experts.</p>
          </div>

          {/* Group wrapper for hover detection */}
          <div className="relative group px-2 sm:px-4 md:px-8 lg:px-12">


            {/* Left Arrow - Shows when scrolled past start, hides when back at start */}
            <button
              onClick={() => scroll('left')}
                className={`absolute left-4 top-1/2 -translate-y-1/2 z-40 w-6 h-16 sm:w-6 sm:h-20 md:w-6 md:h-24 bg-[#333333]/95 hover:bg-[#444444] active:bg-[#555555] text-white rounded-lg flex items-center justify-center transition-all duration-500 shadow-2xl backdrop-blur-sm touch-manipulation
                  ${showLeftArrow ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-x-2 scale-95 pointer-events-none'}`}
              style={{
                transform: `translateY(-50%) ${showLeftArrow ? 'translateX(0px) scale(1)' : 'translateX(-8px) scale(0.95)'}`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow - Shows when not at end, hides when scrolled to end */}
            <button
              onClick={() => scroll('right')}
                className={`absolute right-4 top-1/2 -translate-y-1/2 z-40 w-6 h-16 sm:w-6 sm:h-20 md:w-6 md:h-24 bg-[#333333]/95 hover:bg-[#444444] active:bg-[#555555] text-white rounded-lg flex items-center justify-center transition-all duration-500 shadow-2xl backdrop-blur-sm touch-manipulation
                  ${showRightArrow ? 'opacity-100 translate-x-0 scale-100 pointer-events-auto' : 'opacity-0 translate-x-2 scale-95 pointer-events-none'}`}
              style={{
                transform: `translateY(-50%) ${showRightArrow ? 'translateX(0px) scale(1)' : 'translateX(8px) scale(0.95)'}`,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Content */}
            <div
              ref={carouselRef}
              className="flex gap-[50px] overflow-x-auto scrollbar-hide scroll-smooth pb-6 sm:pb-8"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch', // Better iOS scrolling
                padding: '50px 50px 50px 60px'
              }}
            >
              {trendingDrinks.map((drink, index) => (
                <div key={drink.id} className="flex-none w-32 sm:w-40 md:w-44 lg:w-52 relative overflow-visible cursor-pointer" onClick={() => handleDrinkClick(drink)}>
                  {/* Top 8 style number overlay - positioned on wrapper */}
                  <div className="absolute top-[-10px] z-10" style={{ position: 'absolute', top: '-10px', left: '-30px' }}>
                    <span style={{
                      fontFamily: 'Arial Black, Impact, sans-serif',
                      fontSize: '5rem',
                      fontWeight: '900',
                      color: '#000000',
                      WebkitTextStroke: '2px #fff',
                      textShadow: '4px 4px 10px rgba(0,0,0,0.8)',
                      lineHeight: '1'
                    }}>
                      {index + 1}
                    </span>
                  </div>

                  {/* Card image container */}
                  <div className="relative overflow-hidden mb-3 sm:mb-4 border border-white/5 shadow-xl group transition-transform duration-300 ease-out hover:scale-[1.1] hover:z-[100]" style={{ aspectRatio: '3/4', borderRadius: '15px', zIndex: 1 }}>
                    <img src={drink.image} alt={drink.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                      <h3 className="text-white font-bold text-lg sm:text-xl mb-1 sm:mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>{drink.name}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2 sm:line-clamp-1">{drink.description}</p>
                      <p className="font-bold text-base sm:text-lg" style={{ color: '#E50914' }}>₦{drink.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ marginBottom: '76px' }}>
      <EventsSection />
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#000000' }} className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Ready for the next vibe? Don't miss out on the upcoming events.
          </p>

          <div className="flex justify-center">
            <motion.button
              className="bg-[#E50914] hover:bg-[#E50914] text-white font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3"
            style={{
              fontFamily: 'Inter',
              fontWeight: '500',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontSize: '18px',
              padding: '16px 24px',
              border: 'none',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(229, 9, 20, 0.4)' }}
            onClick={() => {
              document
                .getElementById("events")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Reserve Your Spot
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pl-8 md:pl-16 lg:pl-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/frequently-asked-questions" className="hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Jobs</Link>
              </li>
              <li>
                <Link href="/contact-support" className="hover:text-white transition-colors">Help Center</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms and Conditions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact</h4>
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
                <Mail style={{ width: '20px', height: '20px', color: '#9CA3AF' }} />
                info@balkazlounge.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 mb-8 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" style={{ color: '#E50914' }}>
                BALKAZ LOUNGE LIMITED
              </h3>
              <p className="text-gray-400 text-base md:text-lg">
                Experience the night life at its finest
              </p>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 pt-8">
          <p>&copy; 2025 Balkaz Lounge Limited. All rights reserved.</p>
        </div>
      </footer>

      {/* Drink Detail Modal */}
      <Dialog open={isDrinkModalOpen} onOpenChange={setIsDrinkModalOpen}>
        <DialogContent className="w-[95vw] max-w-[380px] sm:max-w-[380px] bg-black border-gray-800 overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white text-center">
              {selectedDrink?.name}
            </DialogTitle>
          </DialogHeader>
          <div
            ref={modalContentRef}
            className="space-y-6 overflow-y-auto max-h-[65vh] [&::-webkit-scrollbar]:hidden"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onScroll={checkScrollChevron}
            onMouseEnter={() => setIsModalHovered(true)}
            onMouseLeave={() => setIsModalHovered(false)}
          >
            {/* Drink Image */}
            <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '3/4' }}>
              <img
                src={selectedDrink?.image}
                alt={selectedDrink?.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Drink Details */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Ingredients</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{selectedDrink?.description}</p>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                <span className="text-lg font-semibold text-white">Price</span>
                <span className="text-xl font-bold text-red-500">
                  ₦{selectedDrink?.price?.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <button
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                onClick={() => setIsDrinkModalOpen(false)}
              >
                Add to Cart
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Scroll Chevron - Appears on modal hover */}
          <div className="flex justify-center mb-4">
            <button
              onClick={handleChevronClick}
              className={`bg-gray-800/90 hover:bg-gray-700/90 text-white rounded-full p-2 transition-all duration-200 backdrop-blur-sm border border-gray-600 ${
                (isModalHovered || isChevronHovered) ? 'opacity-100' : 'opacity-0'
              }`}
              onMouseEnter={() => setIsChevronHovered(true)}
              onMouseLeave={() => setIsChevronHovered(false)}
              aria-label={hasScrolled && isScrolledDown ? "Scroll to top" : "Scroll down to see more"}
            >
              <svg
                className="w-5 h-5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {hasScrolled && isScrolledDown ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                )}
              </svg>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}