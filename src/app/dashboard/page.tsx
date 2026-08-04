"use client"

import Image from "next/image"
import Link from "next/link"
import { LogOut, LayoutDashboard, User, FileText, CalendarCheck, Award, Download, CheckCircle2, Clock } from "lucide-react"

export default function ParentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center gap-3">
           <div className="relative w-8 h-8">
             <Image src="/images/ai_logo.png" alt="A&I Tech" fill className="object-contain" />
           </div>
           <span className="font-black text-[#002b5e] text-lg tracking-tight">Parent Portal</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-xl font-medium">
            <LayoutDashboard className="h-5 w-5" />
            Overview
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
            <User className="h-5 w-5" />
            Student Profile
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
            <CalendarCheck className="h-5 w-5" />
            Attendance
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-slate-50 rounded-xl font-medium transition-colors">
            <Award className="h-5 w-5" />
            Certificate
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
        <header className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">Welcome, Sarah</h1>
          <p className="text-slate-500 mt-1">Manage your child's VBS technology track journey.</p>
        </header>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Status Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-700">Registration Status</h3>
              <div className="bg-emerald-100 text-emerald-700 p-2 rounded-lg">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-1">Confirmed</div>
            <p className="text-sm text-slate-500">Ref: VBS-26-A9F4K</p>
          </div>

          {/* Attendance Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-700">Attendance</h3>
              <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                <CalendarCheck className="h-5 w-5" />
              </div>
            </div>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-2xl font-bold text-slate-800">0</span>
              <span className="text-slate-500 mb-1">/ 10 Days</span>
            </div>
            <p className="text-sm text-slate-500">Programme starts Aug 12th</p>
          </div>

          {/* Certificate Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-700">Certificate</h3>
              <div className="bg-amber-100 text-amber-700 p-2 rounded-lg">
                <Award className="h-5 w-5" />
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-1">Pending</div>
            <p className="text-sm text-slate-500">Available after graduation</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mb-6">Recent Documents</h2>
        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100">
            
            <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-rose-50 text-rose-600 p-3 rounded-xl">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Registration Slip</h4>
                  <p className="text-sm text-slate-500">Generated on Aug 3, 2026</p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                <Download className="h-4 w-4" />
                Download
              </button>
            </div>

            <div className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors opacity-60">
              <div className="flex items-center gap-4">
                <div className="bg-slate-100 text-slate-500 p-3 rounded-xl">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Certificate of Completion</h4>
                  <p className="text-sm text-slate-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> Locked until Aug 23, 2026
                  </p>
                </div>
              </div>
              <button disabled className="flex items-center gap-2 px-4 py-2 bg-slate-100 border border-transparent rounded-lg text-sm font-medium text-slate-400 cursor-not-allowed">
                <Download className="h-4 w-4" />
                Download
              </button>
            </div>

          </div>
        </div>

      </main>
    </div>
  )
}
