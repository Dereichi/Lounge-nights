import { Hero } from "@/components/hero";
import { DrinkCard } from "@/components/drink-card";
import { EventsSection } from "@/components/events-section";
import { Section } from "@/components/ui/section";
import { useDrinks } from "@/hooks/use-data";
import { Loader2, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

export default function Home() {
  const { data: drinks, isLoading: isLoadingDrinks } = useDrinks();
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: false, 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps" 
  });

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

  const displayDrinks = (drinks && drinks.length > 0) ? drinks : demoDrinks;

  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Hero />

      {/* Drinks Grid Section */}
      <Section className="border-t border-white/5">
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
          <div className="relative" ref={emblaRef}>
            <div className="flex touch-pan-y cursor-grab active:cursor-grabbing py-4">
              {displayDrinks.map((drink) => (
                <DrinkCard key={drink.id} drink={drink} />
              ))}
            </div>
          </div>
        )}
      </Section>

      <EventsSection />

      {/* Footer */}
      <footer className="w-full bg-[#141414] border-t border-white/10 py-16">
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
