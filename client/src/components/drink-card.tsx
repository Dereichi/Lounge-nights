import { Drink } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface DrinkCardProps {
  drink: Drink;
}

export function DrinkCard({ drink }: DrinkCardProps) {
  // Cocktail-themed SVG illustrations based on drink name/category
  const getCocktailSvg = (drinkName: string, drinkId: number) => {
    const cocktailThemes = {
      // Neon Sunset - Tropical/Vibrant
      "Neon Sunset": `<defs>
        <linearGradient id="neon-sunset-${drinkId}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ff6b35" />
          <stop offset="50%" stopColor="#f7931e" />
          <stop offset="100%" stopColor="#ff0080" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#neon-sunset-${drinkId})" opacity="0.2"/>
      <rect x="150" y="150" width="100" height="200" fill="#e6e6fa" rx="50"/>
      <rect x="160" y="130" width="80" height="30" fill="#daa520"/>
      <path d="M160 130 L200 110 L240 130 Z" fill="#daa520"/>
      <circle cx="200" cy="200" r="30" fill="#ff6b35" opacity="0.8"/>
      <circle cx="200" cy="240" r="25" fill="#f7931e" opacity="0.8"/>
      <circle cx="200" cy="275" r="20" fill="#ff0080" opacity="0.8"/>
      <circle cx="180" cy="190" r="4" fill="#fff"/>
      <circle cx="220" cy="210" r="4" fill="#fff"/>
      <circle cx="190" cy="230" r="4" fill="#fff"/>
      <circle cx="210" cy="250" r="4" fill="#fff"/>
      <circle cx="200" cy="270" r="4" fill="#fff"/>`,

      // Midnight Blue - Dark/Mysterious
      "Midnight Blue": `<defs>
        <linearGradient id="midnight-blue-${drinkId}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#000080" />
          <stop offset="50%" stopColor="#4169e1" />
          <stop offset="100%" stopColor="#00bfff" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#midnight-blue-${drinkId})" opacity="0.3"/>
      <rect x="150" y="150" width="100" height="200" fill="#191970" rx="50"/>
      <rect x="160" y="130" width="80" height="30" fill="#daa520"/>
      <path d="M160 130 L200 110 L240 130 Z" fill="#daa520"/>
      <circle cx="200" cy="200" r="30" fill="#000080" opacity="0.9"/>
      <circle cx="200" cy="240" r="25" fill="#4169e1" opacity="0.8"/>
      <circle cx="200" cy="275" r="20" fill="#00bfff" opacity="0.7"/>
      <circle cx="180" cy="190" r="3" fill="#fff" opacity="0.8"/>
      <circle cx="220" cy="210" r="3" fill="#fff" opacity="0.8"/>
      <circle cx="190" cy="230" r="3" fill="#fff" opacity="0.8"/>
      <circle cx="210" cy="250" r="3" fill="#fff" opacity="0.8"/>
      <circle cx="200" cy="270" r="3" fill="#fff" opacity="0.8"/>
      <circle cx="200" cy="180" r="8" fill="#ffd700" opacity="0.6"/>`,

      // Crimson King - Rich/Regal
      "Crimson King": `<defs>
        <linearGradient id="crimson-king-${drinkId}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#8b0000" />
          <stop offset="50%" stopColor="#dc143c" />
          <stop offset="100%" stopColor="#b22222" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#crimson-king-${drinkId})" opacity="0.3"/>
      <rect x="150" y="150" width="100" height="200" fill="#722f37" rx="50"/>
      <rect x="160" y="130" width="80" height="30" fill="#daa520"/>
      <path d="M160 130 L200 110 L240 130 Z" fill="#daa520"/>
      <circle cx="200" cy="200" r="30" fill="#8b0000" opacity="0.9"/>
      <circle cx="200" cy="240" r="25" fill="#dc143c" opacity="0.8"/>
      <circle cx="200" cy="275" r="20" fill="#b22222" opacity="0.7"/>
      <circle cx="180" cy="190" r="4" fill="#ffd700"/>
      <circle cx="220" cy="210" r="4" fill="#daa520"/>
      <circle cx="190" cy="230" r="4" fill="#fff"/>
      <circle cx="210" cy="250" r="4" fill="#daa520"/>
      <circle cx="200" cy="270" r="4" fill="#fff"/>
      <rect x="185" y="160" width="30" height="8" fill="#daa520" rx="4"/>`,

      // Velvet Rope - Premium/Luxury
      "Velvet Rope": `<defs>
        <linearGradient id="velvet-rope-${drinkId}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#800080" />
          <stop offset="50%" stopColor="#daa520" />
          <stop offset="100%" stopColor="#ffd700" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#velvet-rope-${drinkId})" opacity="0.2"/>
      <rect x="150" y="150" width="100" height="200" fill="#e6e6fa" rx="50"/>
      <rect x="160" y="130" width="80" height="30" fill="#daa520"/>
      <path d="M160 130 L200 110 L240 130 Z" fill="#daa520"/>
      <circle cx="200" cy="200" r="30" fill="#800080" opacity="0.8"/>
      <circle cx="200" cy="240" r="25" fill="#daa520" opacity="0.8"/>
      <circle cx="200" cy="275" r="20" fill="#ffd700" opacity="0.8"/>
      <circle cx="180" cy="190" r="4" fill="#fff"/>
      <circle cx="220" cy="210" r="4" fill="#fff"/>
      <circle cx="190" cy="230" r="4" fill="#fff"/>
      <circle cx="210" cy="250" r="4" fill="#fff"/>
      <circle cx="200" cy="270" r="4" fill="#fff"/>
      <circle cx="200" cy="180" r="12" fill="#daa520" opacity="0.7"/>
      <text x="200" y="187" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold">*</text>`,

      // Dark & Stormy - Bold/Classic
      "Dark & Stormy": `<defs>
        <linearGradient id="dark-stormy-${drinkId}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#2f4f4f" />
          <stop offset="50%" stopColor="#556b2f" />
          <stop offset="100%" stopColor="#daa520" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#dark-stormy-${drinkId})" opacity="0.3"/>
      <rect x="150" y="150" width="100" height="200" fill="#654321" rx="50"/>
      <rect x="160" y="130" width="80" height="30" fill="#daa520"/>
      <path d="M160 130 L200 110 L240 130 Z" fill="#daa520"/>
      <circle cx="200" cy="200" r="30" fill="#2f4f4f" opacity="0.9"/>
      <circle cx="200" cy="240" r="25" fill="#556b2f" opacity="0.8"/>
      <circle cx="200" cy="275" r="20" fill="#daa520" opacity="0.8"/>
      <circle cx="180" cy="190" r="4" fill="#fff"/>
      <circle cx="220" cy="210" r="4" fill="#fff"/>
      <circle cx="190" cy="230" r="4" fill="#fff"/>
      <circle cx="210" cy="250" r="4" fill="#fff"/>
      <circle cx="200" cy="270" r="4" fill="#fff"/>
      <path d="M175 170 Q200 190 225 170" stroke="#daa520" stroke-width="3" fill="none" opacity="0.8"/>`,

      // Emerald City - Fresh/Green
      "Emerald City": `<defs>
        <linearGradient id="emerald-city-${drinkId}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#006400" />
          <stop offset="50%" stopColor="#32cd32" />
          <stop offset="100%" stopColor="#90ee90" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#emerald-city-${drinkId})" opacity="0.3"/>
      <rect x="150" y="150" width="100" height="200" fill="#e6e6fa" rx="50"/>
      <rect x="160" y="130" width="80" height="30" fill="#daa520"/>
      <path d="M160 130 L200 110 L240 130 Z" fill="#daa520"/>
      <circle cx="200" cy="200" r="30" fill="#006400" opacity="0.8"/>
      <circle cx="200" cy="240" r="25" fill="#32cd32" opacity="0.8"/>
      <circle cx="200" cy="275" r="20" fill="#90ee90" opacity="0.8"/>
      <circle cx="180" cy="190" r="4" fill="#fff"/>
      <circle cx="220" cy="210" r="4" fill="#fff"/>
      <circle cx="190" cy="230" r="4" fill="#fff"/>
      <circle cx="210" cy="250" r="4" fill="#fff"/>
      <circle cx="200" cy="270" r="4" fill="#fff"/>
      <circle cx="200" cy="180" r="8" fill="#daa520" opacity="0.7"/>
      <rect x="190" y="175" width="20" height="4" fill="#daa520" rx="2"/>`,

      // Golden Hour - Warm/Sunset
      "Golden Hour": `<defs>
        <linearGradient id="golden-hour-${drinkId}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="50%" stopColor="#ffa500" />
          <stop offset="100%" stopColor="#ff8c00" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#golden-hour-${drinkId})" opacity="0.3"/>
      <rect x="150" y="150" width="100" height="200" fill="#e6e6fa" rx="50"/>
      <rect x="160" y="130" width="80" height="30" fill="#daa520"/>
      <path d="M160 130 L200 110 L240 130 Z" fill="#daa520"/>
      <circle cx="200" cy="200" r="30" fill="#ffd700" opacity="0.8"/>
      <circle cx="200" cy="240" r="25" fill="#ffa500" opacity="0.8"/>
      <circle cx="200" cy="275" r="20" fill="#ff8c00" opacity="0.8"/>
      <circle cx="180" cy="190" r="4" fill="#fff"/>
      <circle cx="220" cy="210" r="4" fill="#fff"/>
      <circle cx="190" cy="230" r="4" fill="#fff"/>
      <circle cx="210" cy="250" r="4" fill="#fff"/>
      <circle cx="200" cy="270" r="4" fill="#fff"/>
      <circle cx="200" cy="180" r="10" fill="#daa520" opacity="0.6"/>
      <circle cx="185" cy="175" r="3" fill="#daa520"/>
      <circle cx="215" cy="175" r="3" fill="#daa520"/>`,

      // Purple Haze - Mystic/Purple
      "Purple Haze": `<defs>
        <linearGradient id="purple-haze-${drinkId}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#4b0082" />
          <stop offset="50%" stopColor="#8a2be2" />
          <stop offset="100%" stopColor="#dda0dd" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#purple-haze-${drinkId})" opacity="0.3"/>
      <rect x="150" y="150" width="100" height="200" fill="#e6e6fa" rx="50"/>
      <rect x="160" y="130" width="80" height="30" fill="#daa520"/>
      <path d="M160 130 L200 110 L240 130 Z" fill="#daa520"/>
      <circle cx="200" cy="200" r="30" fill="#4b0082" opacity="0.8"/>
      <circle cx="200" cy="240" r="25" fill="#8a2be2" opacity="0.8"/>
      <circle cx="200" cy="275" r="20" fill="#dda0dd" opacity="0.8"/>
      <circle cx="180" cy="190" r="4" fill="#fff"/>
      <circle cx="220" cy="210" r="4" fill="#fff"/>
      <circle cx="190" cy="230" r="4" fill="#fff"/>
      <circle cx="210" cy="250" r="4" fill="#fff"/>
      <circle cx="200" cy="270" r="4" fill="#fff"/>
      <circle cx="200" cy="180" r="8" fill="#daa520" opacity="0.7"/>
      <path d="M185 175 Q200 165 215 175" stroke="#daa520" stroke-width="2" fill="none"/>`,

      // Old Fashioned - Classic/Brown
      "Old Fashioned": `<defs>
        <linearGradient id="old-fashioned-${drinkId}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#654321" />
          <stop offset="50%" stopColor="#8b4513" />
          <stop offset="100%" stopColor="#daa520" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#old-fashioned-${drinkId})" opacity="0.3"/>
      <rect x="150" y="150" width="100" height="200" fill="#654321" rx="50"/>
      <rect x="160" y="130" width="80" height="30" fill="#daa520"/>
      <path d="M160 130 L200 110 L240 130 Z" fill="#daa520"/>
      <circle cx="200" cy="200" r="30" fill="#654321" opacity="0.9"/>
      <circle cx="200" cy="240" r="25" fill="#8b4513" opacity="0.8"/>
      <circle cx="200" cy="275" r="20" fill="#daa520" opacity="0.8"/>
      <circle cx="180" cy="190" r="4" fill="#fff"/>
      <circle cx="220" cy="210" r="4" fill="#fff"/>
      <circle cx="190" cy="230" r="4" fill="#fff"/>
      <circle cx="210" cy="250" r="4" fill="#fff"/>
      <circle cx="200" cy="270" r="4" fill="#fff"/>
      <rect x="185" y="160" width="30" height="6" fill="#daa520" rx="3"/>
      <circle cx="195" cy="168" r="2" fill="#fff"/>
      <circle cx="205" cy="168" r="2" fill="#fff"/>`,

      // Mojito - Fresh/Mint
      "Mojito": `<defs>
        <linearGradient id="mojito-${drinkId}" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#90ee90" />
          <stop offset="50%" stopColor="#32cd32" />
          <stop offset="100%" stopColor="#006400" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#mojito-${drinkId})" opacity="0.3"/>
      <rect x="150" y="150" width="100" height="200" fill="#e6e6fa" rx="50"/>
      <rect x="160" y="130" width="80" height="30" fill="#daa520"/>
      <path d="M160 130 L200 110 L240 130 Z" fill="#daa520"/>
      <circle cx="200" cy="200" r="30" fill="#90ee90" opacity="0.8"/>
      <circle cx="200" cy="240" r="25" fill="#32cd32" opacity="0.8"/>
      <circle cx="200" cy="275" r="20" fill="#006400" opacity="0.8"/>
      <circle cx="180" cy="190" r="4" fill="#fff"/>
      <circle cx="220" cy="210" r="4" fill="#fff"/>
      <circle cx="190" cy="230" r="4" fill="#fff"/>
      <circle cx="210" cy="250" r="4" fill="#fff"/>
      <circle cx="200" cy="270" r="4" fill="#fff"/>
      <circle cx="200" cy="180" r="8" fill="#daa520" opacity="0.7"/>
      <path d="M185 175 L195 165 L205 175 L215 165" stroke="#32cd32" stroke-width="2" fill="none"/>
      <path d="M185 180 L195 170 L205 180 L215 170" stroke="#32cd32" stroke-width="2" fill="none"/>`
    };

    // Find matching cocktail or use a default
    const drinkKey = Object.keys(cocktailThemes).find(key => drinkName.includes(key)) || "Neon Sunset";
    return cocktailThemes[drinkKey as keyof typeof cocktailThemes] || cocktailThemes["Neon Sunset"];
  };

  return (
    <div className="group relative flex-shrink-0 w-[180px] h-[250px] bg-[#1a1a1a] rounded-md overflow-hidden transition-colors duration-300 mx-3 first:ml-0 last:mr-0">
      {/* Image Container */}
      <div className="relative h-[65%] w-full overflow-hidden">
        {/* Real cocktail image */}
        <img
          src={drink.image}
          alt={drink.name}
          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 w-full p-5 flex flex-col h-[45%] justify-between bg-[#1a1a1a]">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white leading-tight hover:text-primary transition-colors">
              {drink.name}
            </h3>
            <span className="text-lg font-mono font-bold" style={{ color: '#E50914' }}>
              ₦{drink.price.toLocaleString()}
            </span>
          </div>
          <p className="text-sm text-gray-400 line-clamp-2">
            {drink.description}
          </p>
        </div>

        <Button
          className="w-full mt-4 bg-[#E50914] hover:bg-[#b20710] text-white hover:text-white transition-all duration-300 font-semibold focus:outline-none focus:ring-0 border-0"
          onClick={() => console.log(`Bought ${drink.name}`)}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Buy Now
        </Button>
      </div>
    </div>
  );
}
