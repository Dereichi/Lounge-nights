// Memoized trending themes - moved outside component to prevent recreation
export const getTrendingSvg = (index: number) => {
  const themes = [
    { id: 1, name: "Neon Sunset", description: "Vodka, Peach Schnapps, Cranberry, Orange", price: 1200, category: "Cocktail" },
    { id: 2, name: "Midnight Blue", description: "Blue Curacao, Gin, Lemon, Soda", price: 1400, category: "Cocktail" },
    { id: 3, name: "Crimson King", description: "Whiskey, Cherry Liqueur, Bitters", price: 1600, category: "Whiskey" },
    { id: 4, name: "Velvet Rope", description: "Champagne, Raspberry Puree", price: 1800, category: "Sparkling" },
    { id: 5, name: "Dark & Stormy", description: "Dark Rum, Ginger Beer, Lime", price: 1300, category: "Rum" },
    { id: 6, name: "Emerald City", description: "Melon Liqueur, Vodka, Sprite", price: 1100, category: "Cocktail" },
    { id: 7, name: "Golden Hour", description: "Tequila, Agave, Lime, Salt", price: 1500, category: "Tequila" },
    { id: 8, name: "Purple Haze", description: "Gin, Blackberry Liqueur, Tonic", price: 1350, category: "Gin" },
    { id: 9, name: "Old Fashioned", description: "Bourbon, Sugar Cube, Angostura", price: 1450, category: "Classic" },
    { id: 10, name: "Mojito", description: "White Rum, Mint, Lime, Soda", price: 1250, category: "Classic" },
  ];

  const trendingImages = [
    "https://images.unsplash.com/photo-1536935338218-8412ef137257?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1593587310042-7c5d0c95b9f0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1536935338218-8412ef137257?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=800&q=80",
  ];
  
  const theme = themes[index % themes.length];
  return {
    ...theme,
    image: trendingImages[index % trendingImages.length]
  };
};

// Example drinks if database is empty for visual demo
export const demoDrinks = [
  { id: 1, name: "Neon Nightmare", description: "Vodka, Peach Schnapps, Cranberry, Orange", price: 1200, image: "https://images.unsplash.com/photo-1536935338218-8412ef137257?auto=format&fit=crop&w=800&q=80", category: "Cocktail" },
  { id: 3, name: "Midnight Mule", description: "Whiskey, Cherry Liqueur, Bitters", price: 1600, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80", category: "Whiskey" },
  { id: 4, name: "Velvet Rope", description: "Champagne, Raspberry Puree", price: 1800, image: "https://images.unsplash.com/photo-1598155523122-38423bd4d6bc?auto=format&fit=crop&w=800&q=80", category: "Sparkling" },
  { id: 5, name: "Dark & Stormy", description: "Dark Rum, Ginger Beer, Lime", price: 1300, image: "https://images.unsplash.com/photo-1455621481073-d5bc1c40e3cb?auto=format&fit=crop&w=800&q=80", category: "Rum" },
  { id: 6, name: "Emerald City", description: "Melon Liqueur, Vodka, Sprite", price: 1100, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80", category: "Cocktail" },
  { id: 7, name: "Golden Hour", description: "Tequila, Agave, Lime, Salt", price: 1500, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80", category: "Tequila" },
  { id: 8, name: "Purple Haze", description: "Gin, Blackberry Liqueur, Tonic", price: 1350, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80", category: "Gin" },
  { id: 9, name: "Old Fashioned", description: "Bourbon, Sugar Cube, Angostura", price: 1450, image: "https://images.unsplash.com/photo-1595981266686-0cf387d0a608?auto=format&fit=crop&w=800&q=80", category: "Classic" },
  { id: 10, name: "Mojito", description: "White Rum, Mint, Lime, Soda", price: 1250, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=80", category: "Classic" },
];
