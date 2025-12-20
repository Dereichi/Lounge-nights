import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

// GET /api/drinks
export function useDrinks() {
  return useQuery({
    queryKey: [api.drinks.list.path],
    queryFn: async () => {
      const res = await fetch(api.drinks.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch drinks");
      return api.drinks.list.responses[200].parse(await res.json());
    },
  });
}

// GET /api/events
export function useEvents() {
  return useQuery({
    queryKey: [api.events.list.path],
    queryFn: async () => {
      const res = await fetch(api.events.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch events");
      return api.events.list.responses[200].parse(await res.json());
    },
  });
}
