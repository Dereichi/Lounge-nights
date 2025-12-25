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
          zIndex: 50,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '28px 60px'
        }}
      >
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="tracking-wide uppercase text-shadow-cinematic"
          aria-label="Balkaz"
          style={{
            position: 'absolute !important',
            top: '28px !important',
            left: '60px !important',
            margin: '0 !important',
            zIndex: '100 !important',
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900,
            color: "#E50914",
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
        className="relative z-20 container mx-auto px-4 text-center"
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
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light" style={{ marginTop: '24px' }}>
            Experience the ultimate nightlife atmosphere. Exclusive drinks,
            electric beats, and memories that last forever.
          </p>

          <div style={{ marginTop: '40px' }}>
            <Button
              size="lg"
              className="text-lg px-10 py-8 bg-[#e50914] hover:bg-[#b20710] text-white font-bold rounded-md shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                document
                  .getElementById("events")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              BOOK YOUR EVENT NOW
            </Button>
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
