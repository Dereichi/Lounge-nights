// Memoized trending themes - moved outside component to prevent recreation
export const getTrendingSvg = (index: number) => {
  const themes = [
    { id: 1, name: "Neon Sunset", description: "Vodka, Peach Schnapps, Cranberry, Orange", price: 120000, category: "Cocktail" },
    { id: 2, name: "Midnight Blue", description: "Blue Curacao, Gin, Lemon, Soda", price: 140000, category: "Cocktail" },
    { id: 3, name: "Crimson King", description: "Whiskey, Cherry Liqueur, Bitters", price: 160000, category: "Whiskey" },
    { id: 4, name: "Velvet Rope", description: "Champagne, Raspberry Puree", price: 180000, category: "Sparkling" },
    { id: 5, name: "Dark & Stormy", description: "Dark Rum, Ginger Beer, Lime", price: 130000, category: "Rum" },
    { id: 6, name: "Emerald City", description: "Melon Liqueur, Vodka, Sprite", price: 110000, category: "Cocktail" },
    { id: 7, name: "Golden Hour", description: "Tequila, Agave, Lime, Salt", price: 150000, category: "Tequila" },
    { id: 8, name: "Purple Haze", description: "Gin, Blackberry Liqueur, Tonic", price: 135000, category: "Gin" },
    { id: 9, name: "Old Fashioned", description: "Bourbon, Sugar Cube, Angostura", price: 145000, category: "Classic" },
    { id: 10, name: "Mojito", description: "White Rum, Mint, Lime, Soda", price: 125000, category: "Classic" },
  ];

  const trendingImages = [
    "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1609951651556-5334e2706168?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1609951651556-5334e2706168?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=400&h=600&fit=crop",
  ];
  
  const theme = themes[index % themes.length];
  return {
    ...theme,
    image: trendingImages[index % trendingImages.length]
  };
};

// Example drinks if database is empty for visual demo
export const demoDrinks = [
  { id: 1, name: "Neon Nightmare", description: "Vodka, Peach Schnapps, Cranberry, Orange", price: 120000, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop", category: "Cocktail" },
  { id: 3, name: "Midnight Mule", description: "Whiskey, Cherry Liqueur, Bitters", price: 160000, image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=600&fit=crop", category: "Whiskey" },
  { id: 4, name: "Velvet Rope", description: "Champagne, Raspberry Puree", price: 180000, image: "https://images.unsplash.com/photo-1598155523122-38423bd4d6bc?w=400&h=600&fit=crop", category: "Sparkling" },
  { id: 5, name: "Dark & Stormy", description: "Dark Rum, Ginger Beer, Lime", price: 130000, image: "https://images.unsplash.com/photo-1455621481073-d5bc1c40e3cb?w=400&h=600&fit=crop", category: "Rum" },
  { id: 6, name: "Emerald City", description: "Melon Liqueur, Vodka, Sprite", price: 110000, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=600&fit=crop", category: "Cocktail" },
  { id: 7, name: "Golden Hour", description: "Tequila, Agave, Lime, Salt", price: 150000, image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=600&fit=crop", category: "Tequila" },
  { id: 8, name: "Purple Haze", description: "Gin, Blackberry Liqueur, Tonic", price: 135000, image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop", category: "Gin" },
  { id: 9, name: "Old Fashioned", description: "Bourbon, Sugar Cube, Angostura", price: 145000, image: "https://images.unsplash.com/photo-1595981266686-0cf387d0a608?w=400&h=600&fit=crop", category: "Classic" },
  { id: 10, name: "Mojito", description: "White Rum, Mint, Lime, Soda", price: 125000, image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=600&fit=crop", category: "Classic" },
];
