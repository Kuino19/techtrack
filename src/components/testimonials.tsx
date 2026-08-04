"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent of 10-year-old",
    content: "This programme completely changed my son's perspective on computers. He used to just play games, but now he's building them! The robotics kit provided was excellent.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Adebayo",
    role: "Parent of 14-year-old",
    content: "A&I Tech struck the perfect balance between fun and rigorous education. Seeing my daughter present her obstacle-avoidance robot at graduation was a proud moment.",
    rating: 5,
  },
  {
    id: 3,
    name: "Grace Eze",
    role: "Parent of 12-year-old",
    content: "The facilitators were incredibly patient and knowledgeable. I appreciate how they integrated faith and technology seamlessly. Highly recommended!",
    rating: 5,
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection
      if (nextIndex < 0) nextIndex = testimonials.length - 1
      if (nextIndex >= testimonials.length) nextIndex = 0
      return nextIndex
    })
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      paginate(1)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, paginate])

  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Background Accent - Graduation Image as requested */}
      <div className="absolute top-0 right-0 w-full md:w-[60%] h-full opacity-5 pointer-events-none">
        <Image 
          src="/images/07_graduation.png" 
          alt="Graduation background"
          fill
          className="object-cover object-right"
        />
        {/* Gradient fade to white */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div>
            <div className="inline-flex items-center gap-2 text-amber-500 font-bold text-sm tracking-widest uppercase mb-4">
              <Star className="h-4 w-4 fill-amber-500" />
              Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002b5e] tracking-tight mb-6">
              Hear from our <span className="text-blue-600">Parents</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Don't just take our word for it. Discover how the A&I Tech Academy VBS technology track has impacted children across the community, inspiring the next generation of engineers.
            </p>
            
            <div className="flex gap-4">
              <button 
                onClick={() => { paginate(-1); setIsAutoPlaying(false); }}
                className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button 
                onClick={() => { paginate(1); setIsAutoPlaying(false); }}
                className="h-12 w-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Right Carousel */}
          <div 
            className="relative h-[350px] sm:h-[300px]"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 h-full flex flex-col relative overflow-hidden">
                  
                  <Quote className="absolute top-6 right-6 h-24 w-24 text-slate-50 opacity-50 -rotate-12" />

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed italic mb-8 relative z-10 flex-1">
                    "{testimonials[currentIndex].content}"
                  </p>
                  
                  <div className="mt-auto relative z-10">
                    <h4 className="font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-slate-500 text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
