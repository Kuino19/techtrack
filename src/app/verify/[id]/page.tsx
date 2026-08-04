"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ShieldCheck, Search, Calendar, User, BookOpen } from "lucide-react"

export default function VerificationPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const isValid = true // Simulated DB check

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-6">
        <div className="container mx-auto px-4 max-w-4xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <div className="relative w-24 h-10">
               <Image src="/images/ai_logo.png" alt="A&I Tech" fill className="object-contain object-left" />
            </div>
          </Link>
          <div className="flex items-center gap-2 text-emerald-600 font-semibold bg-emerald-50 px-3 py-1.5 rounded-full text-sm">
            <ShieldCheck className="h-4 w-4" />
            Official Verification Portal
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Search / Scan Box */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input 
                type="text" 
                defaultValue={resolvedParams.id}
                placeholder="Enter Certificate ID"
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 font-mono text-lg transition-all"
              />
            </div>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
              Verify
            </button>
          </div>
        </div>

        {/* Results */}
        {isValid ? (
          <div className="grid md:grid-cols-2 gap-8 items-start">
            
            {/* Details Card */}
            <div className="bg-white rounded-3xl border border-emerald-200 shadow-lg shadow-emerald-900/5 overflow-hidden">
              <div className="bg-emerald-50 p-8 border-b border-emerald-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-black text-emerald-800">Authentic Certificate</h2>
                <p className="text-emerald-600 font-medium mt-1 font-mono text-sm">ID: {resolvedParams.id}</p>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <User className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Student Name</p>
                    <p className="text-lg font-bold text-slate-900">Sarah Johnson</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <BookOpen className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Programme</p>
                    <p className="text-lg font-bold text-slate-900">AI & Robotics Fundamentals</p>
                    <p className="text-slate-500">VBS Technology Track</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Calendar className="h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Date of Issue</p>
                    <p className="text-lg font-bold text-slate-900">August 23, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificate Preview */}
            <div className="space-y-4">
              <h3 className="font-bold text-slate-800 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-500" />
                Certificate Preview
              </h3>
              <div className="w-full aspect-[1.414/1] relative rounded-lg overflow-hidden border border-slate-200 shadow-md">
                 <Image src="/images/11_certificate_background.png" alt="Certificate Background" fill className="object-cover" />
                 {/* Simplified visual overlay just for preview */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                    <p className="text-[10px] sm:text-xs font-bold text-[#002b5e] uppercase tracking-widest opacity-80">A&I Tech Academy</p>
                    <h2 className="text-lg sm:text-2xl font-black text-slate-900 mt-2 text-center">Sarah Johnson</h2>
                    <p className="text-[10px] sm:text-xs text-slate-600 mt-1 text-center max-w-[80%]">Completed AI & Robotics Fundamentals</p>
                 </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="bg-white p-12 rounded-3xl border border-red-200 shadow-sm flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-black text-red-800 mb-2">Certificate Not Found</h2>
            <p className="text-slate-600 max-w-md">The certificate ID you entered could not be found in our database. Please ensure you typed it correctly.</p>
          </div>
        )}

      </main>
    </div>
  )
}
