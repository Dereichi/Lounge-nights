// Memoized trending themes - moved outside component to prevent recreation
export const getTrendingSvg = (index: number) => {
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

// Example drinks if database is empty for visual demo
export const demoDrinks = [
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
