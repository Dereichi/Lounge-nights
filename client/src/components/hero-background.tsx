import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#0a0a0a]">
      {/* Abstract Party Shapes SVG */}
      <svg
        className="absolute w-full h-full opacity-60"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="neonGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#e50914" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#800020" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated Light Beams */}
        <motion.path
          d="M0 100 L40 0 L60 0 L100 100 Z"
          fill="url(#neonGradient)"
          className="mix-blend-screen"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Shapes */}
        <motion.circle 
          cx="20" cy="30" r="15" 
          fill="#4b0082" 
          fillOpacity="0.2" 
          filter="url(#glow)"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.circle 
          cx="80" cy="60" r="20" 
          fill="#8b0000" 
          fillOpacity="0.2" 
          filter="url(#glow)"
          animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </svg>
      
      {/* Party Silhouettes */}
      <div className="absolute bottom-0 w-full h-[60%] z-10 opacity-40">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full text-black fill-current">
             <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
             {/* Simple silhouettes represented as abstract crowd shapes */}
             <path fill="#050505" d="M100,320 C120,250 160,240 180,320 Z M300,320 C330,220 380,230 400,320 Z M600,320 C620,200 680,190 700,320 Z M900,320 C920,240 980,230 1000,320 Z" />
        </svg>
      </div>

      {/* Red Light Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent pointer-events-none mix-blend-overlay" />
    </div>
  );
}
