"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background base */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50/50"></div>
      
      {/* Glowing Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[40vw] h-[40vw] min-w-[500px] min-h-[500px] bg-blue-300/30 rounded-full blur-[100px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[20%] w-[30vw] h-[30vw] min-w-[400px] min-h-[400px] bg-indigo-300/20 rounded-full blur-[100px]"
      />
      
      {/* Particles (Client-side only to prevent hydration mismatch) */}
      {mounted && [...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-blue-500/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 5 + 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Subtle Circuit Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03] text-blue-900" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M 20 20 L 80 20 L 100 40 L 100 80" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="20" cy="20" r="2.5" fill="currentColor" />
            <circle cx="100" cy="80" r="2.5" fill="currentColor" />
            
            <path d="M 120 150 L 120 120 L 160 80 L 190 80" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="120" cy="150" r="2.5" fill="currentColor" />
            <circle cx="190" cy="80" r="2.5" fill="currentColor" />
            
            <path d="M 180 180 L 150 180 L 130 160" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="180" cy="180" r="2.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  )
}
