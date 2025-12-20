import { db } from "./db";
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

  async getEvents(): Promise<Event[]> {
    return await db.select().from(events);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const [event] = await db.insert(events).values(insertEvent).returning();
    return event;
  }
}

export const storage = new DatabaseStorage();
