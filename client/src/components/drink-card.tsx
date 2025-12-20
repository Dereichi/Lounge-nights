import { Drink } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface DrinkCardProps {
  drink: Drink;
}

export function DrinkCard({ drink }: DrinkCardProps) {
  // Use placeholder if no image provided
  const imageUrl = drink.image || "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=60";

  return (
    <div className="group relative flex-shrink-0 w-[280px] h-[400px] bg-[#1a1a1a] rounded-md overflow-hidden border border-white/5 hover:border-white/20 transition-colors duration-300 mx-3 first:ml-0 last:mr-0">
      {/* Image Container */}
      <div className="relative h-[65%] w-full overflow-hidden">
        {/* Descriptive alt for Unsplash fallback */}
        {/* cocktail drink dark lighting */}
        <img 
          src={imageUrl} 
          alt={drink.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 w-full p-5 flex flex-col h-[45%] justify-between bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a] to-transparent">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white leading-tight group-hover:text-primary transition-colors">
              {drink.name}
            </h3>
            <span className="text-lg font-mono text-primary font-bold">
              ${(drink.price / 100).toFixed(2)}
            </span>
          </div>
          <p className="text-sm text-gray-400 line-clamp-2">
            {drink.description}
          </p>
        </div>

        <Button 
          className="w-full mt-4 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 transition-all duration-300 font-semibold"
          onClick={() => console.log(`Bought ${drink.name}`)}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Buy Now
        </Button>
      </div>
    </div>
  );
}
