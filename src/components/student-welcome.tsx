"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Bot, Calendar, Clock, Rocket } from "lucide-react"

interface StudentWelcomeProps {
  studentName: string;
  startDate: Date;
}

export function StudentWelcome({ studentName, startDate }: StudentWelcomeProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = startDate.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        // Refresh the page when the countdown hits zero to load the actual dashboard
        window.location.reload()
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [startDate])

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#0b1221] text-white flex flex-col items-center justify-center p-4 sm:p-6 overflow-hidden relative">
      
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full text-center relative z-10"
      >
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-blue-600/20 rounded-full flex items-center justify-center border-4 border-blue-500/30">
            <Bot className="h-12 w-12 text-[#fcdb44]" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#fcdb44] mb-4">
          Welcome, {studentName}!
        </h1>
        
        <p className="text-lg sm:text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Your spot in the AI & Robotics Fundamentals track is secure. The portal will automatically unlock when the program begins.
        </p>

        <div className="bg-[#060b14] border border-[#1e293b] rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Rocket className="h-6 w-6 text-blue-400" />
            <h2 className="text-2xl font-bold uppercase tracking-widest text-slate-200">Mission Starts In</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-[#0f172a] rounded-2xl p-4 border border-blue-500/20 flex flex-col items-center justify-center shadow-inner">
              <span className="text-4xl sm:text-5xl font-black text-white mb-1 tabular-nums">{String(timeLeft.days).padStart(2, '0')}</span>
              <span className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-wider">Days</span>
            </div>
            <div className="bg-[#0f172a] rounded-2xl p-4 border border-blue-500/20 flex flex-col items-center justify-center shadow-inner">
              <span className="text-4xl sm:text-5xl font-black text-white mb-1 tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-wider">Hours</span>
            </div>
            <div className="bg-[#0f172a] rounded-2xl p-4 border border-blue-500/20 flex flex-col items-center justify-center shadow-inner">
              <span className="text-4xl sm:text-5xl font-black text-white mb-1 tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="text-xs sm:text-sm font-bold text-blue-400 uppercase tracking-wider">Minutes</span>
            </div>
            <div className="bg-[#0f172a] rounded-2xl p-4 border border-blue-500/20 flex flex-col items-center justify-center shadow-inner">
              <span className="text-4xl sm:text-5xl font-black text-[#fcdb44] mb-1 tabular-nums animate-pulse">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="text-xs sm:text-sm font-bold text-[#fcdb44]/80 uppercase tracking-wider">Seconds</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-[#1e293b]">
            <div className="flex items-center gap-2 text-slate-400">
              <Calendar className="h-5 w-5" />
              <span className="text-sm font-medium">August 17, 2026</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-600"></div>
            <div className="flex items-center gap-2 text-slate-400">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">09:00 AM (WAT)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
