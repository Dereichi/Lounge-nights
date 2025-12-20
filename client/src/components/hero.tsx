import { HeroBackground } from "./hero-background";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative w-full h-[90vh] min-h-[600px] flex flex-col justify-between border-b border-[#333]/30 bg-[#141414]">
      <HeroBackground />
      
      {/* Header Area */}
      <header className="relative z-20 w-full p-6 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-poppins text-2xl md:text-3xl font-bold text-white tracking-wide"
        >
          BALKAZ LOUNGE <span className="text-primary text-sm font-normal tracking-widest block md:inline md:ml-2 opacity-80">LIMITED</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button 
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 rounded shadow-[0_0_15px_rgba(229,9,20,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(229,9,20,0.7)] hover:-translate-y-0.5"
            onClick={() => console.log("Sign up clicked")}
          >
            Sign Up
          </Button>
        </motion.div>
      </header>
      
      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-4 flex-1 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter drop-shadow-2xl">
            VIBE. <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">PARTY.</span> LIVE.
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
    </div>
  );
}
