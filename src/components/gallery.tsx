"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

const categories = ["All", "Classroom", "Projects", "Graduation"]

const galleryImages = [
  { id: 1, src: "/images/03_curriculum_image.png", category: "Classroom", alt: "Students in robotics classroom", span: "md:col-span-2 md:row-span-2" },
  { id: 2, src: "/images/06_coding.png", category: "Classroom", alt: "Student coding on laptop", span: "md:col-span-1 md:row-span-1" },
  { id: 3, src: "/images/05_robotics_kit.png", category: "Projects", alt: "Robotics kit components", span: "md:col-span-1 md:row-span-1" },
  { id: 4, src: "/images/04_ai_learning.png", category: "Classroom", alt: "AI learning session", span: "md:col-span-1 md:row-span-2" },
  { id: 5, src: "/images/07_graduation.png", category: "Graduation", alt: "Graduation ceremony", span: "md:col-span-2 md:row-span-1" },
]

export function Gallery() {
  const [filter, setFilter] = useState("All")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter)

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-[#002b5e] tracking-tight mb-4">
            Experience the <span className="text-blue-600">Action</span>
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Take a look at what our students build, learn, and experience during the VBS technology track.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid Simulation using CSS Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${image.span || "col-span-1 row-span-1"}`}
                onClick={() => setSelectedImage(image.src)}
              >
                <Image 
                  src={image.src} 
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#002b5e]/0 group-hover:bg-[#002b5e]/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 h-10 w-10" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0b1221]/95 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={selectedImage} 
                alt="Fullscreen view"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
