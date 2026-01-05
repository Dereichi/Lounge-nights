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
    return await db.select().from(drinks);
  }

  async createDrink(insertDrink: InsertDrink): Promise<Drink> {
    const [drink] = await db.insert(drinks).values(insertDrink).returning();
    return drink;
  }

  async updateDrink(id: number, updateData: Partial<InsertDrink>): Promise<Drink | undefined> {
    const [drink] = await db.update(drinks).set(updateData).where(eq(drinks.id, id)).returning();
    return drink;
  }

  async deleteDrink(id: number): Promise<boolean> {
    const result = await db.delete(drinks).where(eq(drinks.id, id));
    return (result.rowCount ?? 0) > 0;
  }

  async getEvents(): Promise<Event[]> {
    return await db.select().from(events);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const [event] = await db.insert(events).values(insertEvent).returning();
    return event;
  }
}

export const storage = new DatabaseStorage();
