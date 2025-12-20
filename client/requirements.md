## Packages
framer-motion | Complex animations for the party atmosphere and transitions
embla-carousel-react | Horizontal scrolling for the drinks grid
lucide-react | Icons for UI elements (already in base, but confirming usage)
clsx | Utility for constructing className strings conditionally
tailwind-merge | Utility for merging tailwind classes

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  display: ["var(--font-display)"],
  body: ["var(--font-body)"],
  poppins: ["Poppins", "sans-serif"],
}
API Endpoints:
GET /api/drinks - Returns list of drinks
GET /api/events - Returns list of weekly events
