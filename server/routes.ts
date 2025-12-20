import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.drinks.list.path, async (req, res) => {
    const drinks = await storage.getDrinks();
    res.json(drinks);
  });

  app.get(api.events.list.path, async (req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  // Seed data function
  async function seedData() {
    const existingDrinks = await storage.getDrinks();
    if (existingDrinks.length === 0) {
      const drinksData = [
        { name: "Neon Nightmare", description: "A glowing blue cocktail", price: 1200, category: "Cocktail", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&auto=format&fit=crop" },
        { name: "Crimson Crush", description: "Red berry mix with vodka", price: 1400, category: "Cocktail", image: "https://images.unsplash.com/photo-1536935338788-843bb52887f8?w=400&auto=format&fit=crop" },
        { name: "Midnight Mule", description: "Dark rum ginger beer", price: 1100, category: "Cocktail", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&auto=format&fit=crop" },
        { name: "Electric Lemonade", description: "Blue curacao and lemonade", price: 1300, category: "Cocktail", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&auto=format&fit=crop" },
        { name: "Sunset Spritz", description: "Aperol and prosecco", price: 1500, category: "Cocktail", image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&auto=format&fit=crop" },
        { name: "Velvet Void", description: "Blackberry liqueur mix", price: 1600, category: "Cocktail", image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=400&auto=format&fit=crop" },
        { name: "Cyber Sour", description: "Whiskey sour with a twist", price: 1250, category: "Cocktail", image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400&auto=format&fit=crop" },
        { name: "Plasma Punch", description: "Tropical fruit blend", price: 1150, category: "Cocktail", image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?w=400&auto=format&fit=crop" },
        { name: "Galaxy Gin", description: "Infused gin tonic", price: 1350, category: "Cocktail", image: "https://images.unsplash.com/photo-1609951651556-5334e2706168?w=400&auto=format&fit=crop" },
        { name: "Quantum Quench", description: "Refreshing cucumber lime", price: 1000, category: "Mocktail", image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&auto=format&fit=crop" },
      ];

      for (const drink of drinksData) {
        await storage.createDrink(drink);
      }
    }

    const existingEvents = await storage.getEvents();
    if (existingEvents.length === 0) {
      const today = new Date();
      const eventsData = [
        { title: "Private Birthday Bash", date: new Date(today.getTime() + 86400000 * 1), description: "Exclusive party", isBooked: true },
        { title: "Corporate Mixer", date: new Date(today.getTime() + 86400000 * 3), description: "Networking event", isBooked: true },
        { title: "Tech Launch Party", date: new Date(today.getTime() + 86400000 * 5), description: "Product reveal", isBooked: true },
      ];

      for (const event of eventsData) {
        await storage.createEvent(event);
      }
    }
  }

  seedData();

  return httpServer;
}
