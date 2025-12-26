import { z } from 'zod';
import { insertDrinkSchema, insertEventSchema, drinks, events } from './schema';

export const errorSchemas = {
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

// Custom drink schema with price validation
const drinkSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  category: z.string(),
});

// Create drink schema with price limit validation
const createDrinkSchema = insertDrinkSchema.refine(
  (data) => data.price <= 135000,
  {
    message: "Price cannot exceed ₦135,000",
  }
);

// Update drink schema (partial) with price validation
const updateDrinkSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().max(135000, "Price cannot exceed ₦135,000").optional(),
  image: z.string().optional(),
  category: z.string().optional(),
});

export const api = {
  drinks: {
    list: {
      method: 'GET' as const,
      path: '/api/drinks',
      responses: {
        200: z.array(drinkSchema),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/drinks',
      body: createDrinkSchema,
      responses: {
        201: drinkSchema,
        400: errorSchemas.notFound,
      },
    },
    update: {
      method: 'PATCH' as const,
      path: '/api/drinks/:id',
      params: z.object({ id: z.string() }),
      body: updateDrinkSchema,
      responses: {
        200: drinkSchema,
        404: errorSchemas.notFound,
      },
    },
    delete: {
      method: 'DELETE' as const,
      path: '/api/drinks/:id',
      params: z.object({ id: z.string() }),
      responses: {
        204: z.null(),
        404: errorSchemas.notFound,
      },
    },
  },
  events: {
    list: {
      method: 'GET' as const,
      path: '/api/events',
      responses: {
        200: z.array(z.custom<typeof events.$inferSelect>()),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
