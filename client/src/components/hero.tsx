import { HeroBackground } from "./hero-background";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative w-full min-h-[100vh] bg-[#141414] flex items-center justify-center">
      <HeroBackground />

      {/* Header Area */}
      <header
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          paddingTop: '10px',
          paddingLeft: '60px',
          paddingRight: '60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: '80px',
          zIndex: 30
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
            marginLeft: '90px'
          }}
        >
          <span className="sr-only">Balkaz</span>
          BALKAZ
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            marginRight: '92px'
          }}
        >
          <Button
            className="bg-[#E50914] hover:bg-[#b20710] text-white font-semibold focus:outline-none focus:ring-0 border-0 shadow-none"
            style={{ padding: "1px 20px", fontSize: "13px", fontWeight: 500, borderRadius: "4px", display: "flex", alignItems: "center", lineHeight: 1 }}
            onClick={() => console.log("Sign up clicked")}
            aria-label="Sign up"
          >
            Sign Up
          </Button>
        </motion.div>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center space-y-8 text-center w-full"
        >
          <h2
            className="text-white text-center"
            style={{
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.03em',
              fontSize: 'clamp(5rem, 8vw, 8rem)',
              lineHeight: 1.1
            }}
          >
            <span className="font-bold mx-4">VIBE.</span>
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 mx-4 font-black" style={{ textShadow: '0 0 10px rgba(229, 9, 20, 0.3)' }}>PARTY.</span>
            <span className="font-bold mx-4">LIVE.</span>
          </h2>
           <p className="text-lg md:text-xl text-gray-300 max-w-[600px] mx-auto font-light" style={{ lineHeight: '1.7', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
             Experience the ultimate nightlife atmosphere. Exclusive drinks,
             electric beats, and memories that last forever.
           </p>

          <motion.button
            className="bg-[#E50914] hover:bg-[#E50914] text-white font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3"
            style={{
              fontFamily: 'Inter',
              fontWeight: '500',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontSize: '18px',
              padding: '16px 24px',
              border: 'none',
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(229, 9, 20, 0.4)' }}
            onClick={() => {
              document
                .getElementById("events")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Reserve Your Spot
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>

    </div>
  );
}
