"use client"

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
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
          <Button className="hidden sm:flex bg-[#0f62fe] hover:bg-[#0f62fe]/90 text-white font-semibold px-4 sm:px-6 rounded-md shadow-md text-xs sm:text-sm">
            Register
          </Button>
          <button className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </header>
  )
}
