import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const drinks = pgTable("drinks", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  price: integer("price").notNull(), // stored in cents
  image: text("image").notNull(),
  category: text("category").notNull(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  date: timestamp("date").notNull(),
  description: text("description").notNull(),
  isBooked: boolean("is_booked").default(true),
});

export const insertDrinkSchema = createInsertSchema(drinks).omit({ id: true });
export const insertEventSchema = createInsertSchema(events).omit({ id: true });

export type Drink = typeof drinks.$inferSelect;
export type InsertDrink = z.infer<typeof insertDrinkSchema>;
export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
