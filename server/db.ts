import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// For production deployments, make DATABASE_URL optional during build
// The actual connection will be tested when the app starts
if (!process.env.DATABASE_URL && process.env.NODE_ENV === "production") {
  console.warn("DATABASE_URL not set in production. Database features will be disabled.");
}

export const pool = process.env.DATABASE_URL ? new Pool({
  connectionString: process.env.DATABASE_URL,
  // Add connection timeout for production
  connectionTimeoutMillis: 5000,
  query_timeout: 10000,
}) : null;

export const db = pool ? drizzle(pool, { schema }) : null;
