import { db } from "./db";
import { eq } from "drizzle-orm";
import {
  drinks,
  events,
  type InsertDrink,
  type InsertEvent,
  type Drink,
  type Event
} from "@shared/schema";

export interface IStorage {
  getDrinks(): Promise<Drink[]>;
  createDrink(drink: InsertDrink): Promise<Drink>;
  updateDrink(id: number, drink: Partial<InsertDrink>): Promise<Drink | undefined>;
  deleteDrink(id: number): Promise<boolean>;
  getEvents(): Promise<Event[]>;
  createEvent(event: InsertEvent): Promise<Event>;
}

export class DatabaseStorage implements IStorage {
  async getDrinks(): Promise<Drink[]> {
    if (!db) {
      console.warn("Database not available, returning empty drinks list");
      return [];
    }
    return await db.select().from(drinks);
  }

  async createDrink(insertDrink: InsertDrink): Promise<Drink> {
    if (!db) {
      throw new Error("Database not available");
    }
    const [drink] = await db.insert(drinks).values(insertDrink).returning();
    return drink;
  }

  async updateDrink(id: number, updateData: Partial<InsertDrink>): Promise<Drink | undefined> {
    if (!db) {
      throw new Error("Database not available");
    }
    const [drink] = await db.update(drinks).set(updateData).where(eq(drinks.id, id)).returning();
    return drink;
  }

  async deleteDrink(id: number): Promise<boolean> {
    if (!db) {
      throw new Error("Database not available");
    }
    const result = await db.delete(drinks).where(eq(drinks.id, id));
    return (result.rowCount ?? 0) > 0;
  }

  async getEvents(): Promise<Event[]> {
    if (!db) {
      console.warn("Database not available, returning empty events list");
      return [];
    }
    return await db.select().from(events);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    if (!db) {
      throw new Error("Database not available");
    }
    const [event] = await db.insert(events).values(insertEvent).returning();
    return event;
  }
}

export const storage = new DatabaseStorage();
