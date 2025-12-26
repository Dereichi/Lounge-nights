import { HeroBackground } from "./hero-background";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative w-full min-h-[100vh] bg-[#141414]">
      <HeroBackground />

      {/* Header Area */}
      <header 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '28px 60px'
        }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          aria-label="Balkaz"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            color: "#E50914",
            margin: 0,
          }}
        >
          <span className="sr-only">Balkaz</span>
          BALKAZ
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button
            className="bg-[#E50914] hover:bg-[#b20710] text-white font-semibold text-sm focus:outline-none focus:ring-0 border-0 shadow-none"
            style={{ padding: "6px 16px", fontSize: "14px", borderRadius: "4px" }}
            onClick={() => console.log("Sign up clicked")}
            aria-label="Sign up"
          >
            Sign Up
          </Button>
        </motion.div>
      </header>

      {/* Hero Content */}
      <div
        className="relative z-20 px-4 text-center"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6"
        >
          <h2
            className="font-black text-white leading-[1.1] text-shadow-cinematic text-center"
            style={{ 
              fontFamily: 'var(--font-display)', 
              letterSpacing: '0.03em',
              fontSize: 'clamp(5rem, 8vw, 8rem)'
            }}
          >
            <span>VIBE.</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 mx-4">PARTY.</span>
            <span>LIVE.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-[600px] mx-auto font-light" style={{ marginTop: '24px' }}>
            Experience the ultimate nightlife atmosphere. Exclusive drinks,
            electric beats, and memories that last forever.
          </p>

          <div style={{ marginTop: '40px' }}>
            <div className="flex flex-col md:flex-row items-center justify-center max-w-[600px] mx-auto gap-0 md:gap-2" style={{ boxShadow: '0 0 20px rgba(0,0,0,0.5)' }}>
              <input
                type="text"
                placeholder="Enter your phone number to get on the list..."
                className="w-full md:flex-1 px-4 py-4 text-white bg-black/50 border border-gray-400 rounded-t-md md:rounded-l-md md:rounded-tr-none focus:outline-none focus:border-white placeholder-gray-400"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontSize: '16px',
                  height: '56px'
                }}
              />
              <button
                className="w-full md:w-auto px-8 py-4 text-white font-semibold bg-[#E50914] hover:bg-[#b20710] border-0 rounded-b-md md:rounded-r-md md:rounded-bl-none transition-all duration-300 hover:brightness-90 flex items-center justify-center gap-3"
                style={{
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontSize: '16px',
                  height: '56px'
                }}
                onClick={() => {
                  document
                    .getElementById("events")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                BOOK NOW
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Netflix-style curved divider with gradient border */}
      <div
        className="relative w-full overflow-hidden -mb-1 pointer-events-none translate-y-[6px] z-10"
        aria-hidden
      >
        <svg
          className="w-full h-36 md:h-44 lg:h-56"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroGradientBorder" x1="0" x2="1">
              <stop offset="0%" stopColor="#210d16" />
              <stop offset="25%" stopColor="#b82869" />
              <stop offset="50%" stopColor="#e50914" />
              <stop offset="75%" stopColor="#b82869" />
              <stop offset="100%" stopColor="#210d16" />
            </linearGradient>
          </defs>

          {/* Soft fill to blend hero into the section below. Lowered curve to avoid intersecting headline */}
          <path
            d="M0,190 C360,230 1080,150 1440,190 L1440,320 L0,320 Z"
            fill="rgba(20,20,20,0.95)"
          />

          {/* Gradient stroke to act like Netflix borderline */}
          <path
            d="M0,190 C360,230 1080,150 1440,190"
            fill="none"
            stroke="url(#heroGradientBorder)"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
