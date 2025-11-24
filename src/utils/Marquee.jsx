import React from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const Marquee = ({ items, speed = 40 }) => {
  // Duplicate items multiple times to ensure seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items]
  
  return (
    <div className="marquee-container overflow-hidden relative">
      <motion.div
        className="marquee-content flex"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <motion.div
            key={`${item}-${index}`}
            className={`marquee-item flex-shrink-0 px-8 py-5 mx-3 text-xl font-medium tracking-tight transition-all duration-500 rounded-lg backdrop-blur-sm border ${
              index % 2 === 0
                ? 'bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20'
                : 'bg-white/95 text-gray-800 border-white/20 hover:bg-white hover:border-white/30 shadow-lg'
            }`}
            whileHover={{ 
              scale: 1.02,
              y: -2
            }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
            style={{
              boxShadow: index % 2 === 0 
                ? '0 8px 32px rgba(255, 255, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                : '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
            }}
          >
            {/* <MapPin className="w-5 h-5 mr-1 flex-shrink-0 ali" /> */}
            <span className="whitespace-nowrap relative">
              {item}
              {/* Subtle highlight effect */}
              <div className={`absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 ${
                index % 2 === 0 
                  ? 'bg-gradient-to-r from-white/0 via-white/5 to-white/0'
                  : 'bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0'
              }`} />
            </span>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Enhanced gradient overlays for premium fade effect */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#141414] via-[#141414]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#141414] via-[#141414]/80 to-transparent pointer-events-none z-10" />
      
      {/* Subtle top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}

export default Marquee