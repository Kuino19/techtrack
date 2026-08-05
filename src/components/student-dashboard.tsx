"use client"

import { Bot, PlayCircle, BookOpen, Trophy, Settings, LogOut, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface StudentDashboardProps {
  studentName: string;
}

export function StudentDashboard({ studentName }: StudentDashboardProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
           <div className="bg-blue-600 rounded-lg p-2 flex items-center justify-center">
             <Bot className="h-6 w-6 text-white" />
           </div>
           <span className="font-black text-[#002b5e] text-lg tracking-tight">Student Portal</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-medium">
            <BookOpen className="h-5 w-5" />
            Modules
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
            <PlayCircle className="h-5 w-5" />
            Live Sessions
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
            <Bot className="h-5 w-5" />
            My Robot
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
            <Trophy className="h-5 w-5" />
            Badges
          </Link>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors w-full">
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto">
        <header className="mb-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Welcome, {studentName}!</h1>
            <p className="text-slate-500 mt-1">Let's build something amazing today.</p>
          </div>
          <div className="bg-[#fcdb44] text-[#0b1221] px-4 py-2 rounded-lg font-bold text-sm shadow-sm flex items-center gap-2">
            <Bot className="h-4 w-4" /> VBS Tech Track 2026
          </div>
        </header>

        {/* Dashboard Content */}
        <h2 className="text-xl font-bold text-slate-800 mb-6">Today's Modules</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Module 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-300 hover:shadow-md transition-all">
            <div className="absolute top-0 right-0 p-4">
               <CheckCircle2 className="h-6 w-6 text-emerald-500 opacity-20 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="bg-blue-100 text-blue-700 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <span className="font-bold text-lg">1</span>
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">What is AI?</h3>
            <p className="text-sm text-slate-500 mb-6 line-clamp-2">Learn the basics of Artificial Intelligence and how machines learn to think.</p>
            
            <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
              <div className="bg-emerald-500 h-2 rounded-full w-full"></div>
            </div>
            <p className="text-xs font-medium text-emerald-600 text-right">100% Completed</p>
          </div>

          {/* Module 2 */}
          <div className="bg-white p-6 rounded-2xl border border-blue-500 shadow-md relative overflow-hidden ring-4 ring-blue-500/10">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-blue-600/30">
              <span className="font-bold text-lg">2</span>
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Building Your First Robot</h3>
            <p className="text-sm text-slate-500 mb-6 line-clamp-2">Assemble the hardware components for your robotic chassis.</p>
            
            <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
              <div className="bg-blue-600 h-2 rounded-full w-[45%]"></div>
            </div>
            <p className="text-xs font-medium text-blue-600 text-right">45% In Progress</p>
            
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
              <PlayCircle className="h-4 w-4" /> Continue Module
            </button>
          </div>

          {/* Module 3 */}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative overflow-hidden opacity-70">
            <div className="bg-slate-200 text-slate-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <span className="font-bold text-lg">3</span>
            </div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">Programming Logic</h3>
            <p className="text-sm text-slate-500 mb-6 line-clamp-2">Learn block coding to make your robot move.</p>
            
            <div className="w-full bg-slate-200 rounded-full h-2 mb-2"></div>
            <p className="text-xs font-medium text-slate-500 text-right">Locked</p>
          </div>
        </div>

        {/* Resources & Announcements */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
               <Trophy className="h-5 w-5 text-amber-500" /> Recent Achievements
             </h3>
             <div className="flex gap-4">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-amber-50 border-2 border-amber-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <span className="text-xs font-bold text-slate-600">Early Bird</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-blue-50 border-2 border-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <span className="text-xs font-bold text-slate-600">Assembler</span>
                </div>
                <div className="flex flex-col items-center gap-2 opacity-30">
                  <div className="w-16 h-16 bg-slate-100 border-2 border-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl">❓</span>
                  </div>
                  <span className="text-xs font-bold text-slate-600">Locked</span>
                </div>
             </div>
          </div>

          <div className="bg-[#0b1221] text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
             <div className="absolute -right-4 -bottom-4 opacity-20">
               <Bot className="w-32 h-32" />
             </div>
             <h3 className="font-bold text-amber-400 mb-4">Announcements</h3>
             <div className="space-y-4 relative z-10">
                <div>
                  <h4 className="font-bold text-sm">Robotics Kit Distribution</h4>
                  <p className="text-xs text-blue-200 mt-1">Make sure you pick up your hardware kit from the front desk during break time.</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Tomorrow's Challenge</h4>
                  <p className="text-xs text-blue-200 mt-1">We will be programming our robots to navigate a maze. Be prepared!</p>
                </div>
             </div>
          </div>
        </div>

      </main>
    </div>
  )
}
