import { HeroBackground } from "./hero-background";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative w-full h-[90vh] min-h-[600px] flex flex-col justify-between bg-[#141414] pt-0">
      <HeroBackground />
      
      {/* Header Area */}
      <header className="absolute top-0 left-0 w-full z-[100]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between w-full" style={{ padding: '25px 50px' }}>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="tracking-wide uppercase"
            aria-label="Balkaz"
            style={{ fontFamily: '"Bebas Neue", "Righteous", Impact, sans-serif', fontSize: '42px', fontWeight: 800, color: '#E50914', textShadow: '0 0 10px rgba(229,9,20,0.4)' }}
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
              style={{ padding: '8px 20px', borderRadius: '4px' }}
              onClick={() => console.log("Sign up clicked")}
              aria-label="Sign up"
            >
              Sign Up
            </Button>
          </motion.div>
        </div>
      </header>
      
      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 flex-1 flex flex-col items-center justify-center text-center pb-12 md:pb-16" style={{ marginTop: '15vh' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.02] drop-shadow-2xl" style={{ letterSpacing: '0.05em', overflow: 'visible' }}>
            <span style={{ marginRight: '12px' }}>VIBE.</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600" style={{ marginRight: '20px', overflow: 'visible' }}>PARTY.</span>
            <span className="inline-block">LIVE.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
            Experience the ultimate nightlife atmosphere. 
            Exclusive drinks, electric beats, and memories that last forever.
          </p>
          
          <div className="pt-8">
            <Button 
              size="lg"
              className="text-lg px-10 py-8 bg-[#e50914] hover:bg-[#b20710] text-white font-bold rounded-md shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              BOOK YOUR EVENT NOW
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Netflix-style curved divider with gradient border */}
      <div className="relative w-full overflow-visible pointer-events-none z-10" aria-hidden>
        <svg className="w-full block h-36 md:h-44 lg:h-56" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroGradientBorder" x1="0" x2="1">
              <stop offset="0%" stopColor="#210d16" />
              <stop offset="25%" stopColor="#b82869" />
              <stop offset="50%" stopColor="#e50914" />
              <stop offset="75%" stopColor="#b82869" />
              <stop offset="100%" stopColor="#210d16" />
            </linearGradient>
          </defs>

          {/* Soft fill to blend hero into the section below. Use exact Netflix black to avoid gaps */}
          <path d="M0,190 C360,230 1080,150 1440,190 L1440,320 L0,320 Z" fill="#141414" />

          {/* Gradient stroke to act like Netflix borderline */}
          <path d="M0,190 C360,230 1080,150 1440,190" fill="none" stroke="url(#heroGradientBorder)" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
