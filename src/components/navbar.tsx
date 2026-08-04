"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        
        {/* Logos */}
        <div className="flex items-center gap-3 sm:gap-6">
          <Link href="/" className="flex items-center gap-2">
            {/* Foursquare Logo */}
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image 
                  src="/images/foursquare_logo.png" 
                  alt="Foursquare Logo" 
                  fill 
                  className="object-contain" 
                />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-[#1f2856] font-bold text-sm tracking-wide">FOURSQUARE</span>
                <span className="text-[#1f2856] font-bold text-sm tracking-wide">ISHERI</span>
              </div>
            </div>
          </Link>
          
          <div className="h-8 sm:h-10 w-px bg-slate-200"></div>

          <Link href="/" className="flex items-center">
            {/* A&I Tech Logo */}
            <div className="relative w-28 h-10 sm:w-48 sm:h-16">
              <Image 
                src="/images/ai_logo.png" 
                alt="A&I Tech LTD" 
                fill 
                className="object-contain object-left" 
              />
            </div>
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="#" className="text-sm font-semibold text-slate-800 hover:text-blue-600">Home</Link>
          <Link href="#" className="text-sm font-semibold text-slate-800 hover:text-blue-600">About</Link>
          <Link href="#" className="text-sm font-semibold text-slate-800 hover:text-blue-600">Program</Link>
          <Link href="#" className="text-sm font-semibold text-slate-800 hover:text-blue-600">Gallery</Link>
          <Link href="#" className="text-sm font-semibold text-slate-800 hover:text-blue-600">FAQ</Link>
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Link href="/register" className={cn(buttonVariants({ variant: "default" }), "hidden sm:flex bg-[#0f62fe] hover:bg-[#0f62fe]/90 text-white font-semibold px-4 sm:px-6 rounded-md shadow-md text-xs sm:text-sm")}>
            Register
          </Link>
          <button 
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none" 
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-20 left-0 w-full bg-white border-b shadow-lg lg:hidden overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              <Link href="#" className="text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link href="#" className="text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link href="#" className="text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Program</Link>
              <Link href="#" className="text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
              <Link href="#" className="text-base font-semibold text-slate-800 hover:text-blue-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              
              <div className="border-t border-slate-100 pt-5 mt-2">
                <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className={cn(buttonVariants({ variant: "default" }), "w-full bg-[#0f62fe] hover:bg-[#0f62fe]/90 text-white font-semibold h-12 text-base")}>
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
