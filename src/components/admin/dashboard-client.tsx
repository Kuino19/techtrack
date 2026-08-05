"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import { 
  Users, QrCode, FileBadge, Settings, Search, 
  Download, Filter, ChevronDown, MoreHorizontal, ArrowUpRight,
  Activity, Shirt, Plus, Calendar, Bell
} from "lucide-react"

export type StudentData = {
  id: string
  fullName: string
  age: number
  tShirtSize?: string
  createdAt: Date
  parent: {
    name: string | null
    email: string | null
  }
  registrations: {
    status: string
    receivesFreeShirt: boolean
  }[]
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export function DashboardClient({ students }: { students: StudentData[] }) {
  const [activeTab, setActiveTab] = useState("overview")
  const [searchQuery, setSearchQuery] = useState("")

  const totalRegistrations = students.length
  
  const recentStudents = [...students].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, 5)

  const filteredStudents = students.filter(s => 
    s.fullName.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (s.parent?.name || "").toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Chart data calculation
  const chartData = [12, 18, 15, 25, 22, 35, 42, 38, 50, 45, 60, totalRegistrations];
  const maxChartValue = Math.max(...chartData, 1);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-indigo-500/30">
      
      {/* Premium Header (Linear/Vercel inspired) */}
      <header className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-4">
            <div className="relative w-7 h-7 filter invert brightness-0 opacity-90">
               <Image src="/images/ai_logo.png" alt="A&I Tech" fill className="object-contain" />
            </div>
            <div className="w-[1px] h-5 bg-white/10 transform rotate-12"></div>
            <div className="font-medium text-white flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer">
              <div className="h-5 w-5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded flex items-center justify-center text-[10px] font-bold shadow-lg shadow-indigo-500/20">
                A
              </div>
              Acme Corp
              <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
            </div>
            <div className="hidden sm:flex items-center ml-4 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
              Live Data
            </div>
          </div>

          <div className="flex items-center gap-5">
            <button className="text-slate-400 hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <div className="h-8 w-8 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center font-medium text-sm text-white overflow-hidden relative cursor-pointer hover:border-white/30 transition-colors">
              <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 flex gap-8 text-sm font-medium pt-2">
          {[
            { id: "overview", label: "Overview", icon: Activity },
            { id: "students", label: "Students", icon: Users },
            { id: "attendance", label: "Attendance", icon: QrCode },
            { id: "certificates", label: "Certificates", icon: FileBadge },
            { id: "settings", label: "Settings", icon: Settings },
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 pb-3 relative transition-colors ${
                activeTab === tab.id 
                  ? "text-white" 
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              {tab.icon && <tab.icon className={`h-4 w-4 ${activeTab === tab.id ? 'text-indigo-400' : ''}`} />}
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-t-full shadow-[0_-2px_8px_rgba(99,102,241,0.5)]" 
                />
              )}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto p-6 md:p-8 space-y-8">
        
        <motion.div 
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white mb-1">Dashboard</h1>
            <p className="text-sm text-slate-500">Monitor registrations and event metrics.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2 shadow-sm">
              <Download className="h-4 w-4" /> Export CSV
            </button>
            <Link href="/admin/scanner" className="px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <QrCode className="h-4 w-4" /> Scan Attendance
            </Link>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Metric Card 1 */}
          <motion.div variants={itemVariants} className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-2 mb-4">
              <Users className="h-4 w-4" /> Total Registrations
            </div>
            <div className="flex items-end justify-between">
              <span className="text-5xl font-bold tracking-tighter text-white">{totalRegistrations}</span>
              <span className="text-emerald-400 text-xs font-bold flex items-center bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +12%
              </span>
            </div>
          </motion.div>
          
          {/* Metric Card 2 */}
          <motion.div variants={itemVariants} className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-2 mb-4">
              <Activity className="h-4 w-4" /> Avg. Attendance
            </div>
            <div className="flex items-end justify-between">
              <span className="text-5xl font-bold tracking-tighter text-white">0</span>
              <span className="text-slate-500 text-sm font-medium">/ {totalRegistrations} Students</span>
            </div>
          </motion.div>

          {/* Metric Card 3 */}
          <motion.div variants={itemVariants} className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            <div className="text-sm font-medium text-slate-400 flex items-center gap-2 mb-4">
              <FileBadge className="h-4 w-4" /> Certificates
            </div>
            <div className="flex items-end justify-between">
              <span className="text-5xl font-bold tracking-tighter text-white">0</span>
              <button className="text-xs font-bold bg-white/10 text-white px-3 py-1.5 rounded-lg hover:bg-white/20 transition-colors border border-white/5">
                Generate
              </button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 gap-6"
        >
          {/* Main Chart */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-white/[0.02] rounded-2xl border border-white/5 p-6 relative overflow-hidden">
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h3 className="font-semibold text-white tracking-wide">Registration Velocity</h3>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1">
                <button className="text-xs px-3 py-1 rounded-md bg-white/10 text-white font-medium shadow-sm">30D</button>
                <button className="text-xs px-3 py-1 rounded-md text-slate-400 hover:text-white font-medium transition-colors">7D</button>
                <button className="text-xs px-3 py-1 rounded-md text-slate-400 hover:text-white font-medium transition-colors">24H</button>
              </div>
            </div>
            
            {/* Dynamic CSS Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-1 sm:gap-2 relative z-10">
              {/* Horizontal grid lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                <div className="w-full h-[1px] bg-white"></div>
                <div className="w-full h-[1px] bg-white"></div>
                <div className="w-full h-[1px] bg-white"></div>
                <div className="w-full h-[1px] bg-white"></div>
              </div>

              {chartData.map((val, i) => (
                <div key={i} className="w-full relative group h-full flex items-end">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${(val / maxChartValue) * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                    className="w-full relative rounded-t-md cursor-pointer"
                  >
                    {/* Gradient Bar */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/50 to-indigo-400/80 rounded-t-md group-hover:to-indigo-300 transition-colors border-t border-x border-indigo-300/30"></div>
                    
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap shadow-xl transform scale-95 group-hover:scale-100 z-20">
                      {val} students
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div variants={itemVariants} className="bg-white/[0.02] rounded-2xl border border-white/5 p-6 flex flex-col">
            <h3 className="font-semibold text-white tracking-wide mb-6">Latest Signups</h3>
            <div className="space-y-1 flex-1">
              {recentStudents.length === 0 ? (
                <div className="text-sm text-slate-500 text-center py-10">No recent activity.</div>
              ) : (
                recentStudents.map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    key={i} 
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center text-sm font-bold text-white border border-white/10 shadow-inner">
                        {item.fullName.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">{item.fullName}</div>
                        <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {new Date(item.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className={`h-2 w-2 rounded-full ${
                        item.registrations[0]?.status === 'CONFIRMED' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]'
                      }`}></div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
            <button className="w-full mt-4 py-2 bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 rounded-lg transition-colors border border-transparent hover:border-white/5">
              View All Activity
            </button>
          </motion.div>
        </motion.div>

        {/* Data Table */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/[0.02] rounded-2xl border border-white/5 shadow-2xl overflow-hidden"
        >
          <div className="p-5 border-b border-white/5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-white/[0.01]">
            <h3 className="font-semibold text-white tracking-wide">Student Roster</h3>
            <div className="flex gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search roster..." 
                  className="pl-9 pr-4 py-2 bg-[#050505] border border-white/10 rounded-lg text-sm text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500/50 outline-none w-full sm:w-64 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="px-3 py-2 bg-[#050505] border border-white/10 text-sm font-medium rounded-lg hover:bg-white/5 transition-colors flex items-center gap-2 text-slate-300">
                <Filter className="h-4 w-4" /> <span className="hidden sm:inline">Filter</span>
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[11px] text-slate-400 uppercase tracking-widest bg-white/[0.02] border-b border-white/5">
                <tr>
                  <th className="px-6 py-4 font-semibold">Student Name</th>
                  <th className="px-6 py-4 font-semibold">Age / Grade</th>
                  <th className="px-6 py-4 font-semibold">Parent Info</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-[#050505]/50">
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                      <div className="flex flex-col items-center justify-center">
                        <Search className="h-8 w-8 mb-3 opacity-20" />
                        <p>No students found matching your criteria.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-white/[0.03] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xs border border-indigo-500/20">
                            {student.fullName.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium text-slate-200 group-hover:text-white transition-colors">{student.fullName}</div>
                            {student.registrations[0]?.receivesFreeShirt && (
                              <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-amber-400/80 mt-1">
                                <Shirt className="h-3 w-3" />
                                Free Shirt: {student.tShirtSize}
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-slate-400 font-medium">{student.age} yrs</td>
                      <td className="px-6 py-4">
                        <div className="text-slate-300">{student.parent?.name || "N/A"}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{student.parent?.email || "N/A"}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                          student.registrations[0]?.status === 'CONFIRMED' 
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        }`}>
                          {student.registrations[0]?.status || 'PENDING'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-slate-500 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 bg-white/[0.01]">
            <div>Showing {filteredStudents.length} of {totalRegistrations} results</div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors disabled:opacity-50" disabled>Previous</button>
              <button className="px-3 py-1.5 bg-white/10 text-white rounded-md">1</button>
              <button className="px-3 py-1.5 rounded-md hover:bg-white/5 transition-colors disabled:opacity-50">Next</button>
            </div>
          </div>
        </motion.div>

      </main>
    </div>
  )
}
