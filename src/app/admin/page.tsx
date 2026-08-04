"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  BarChart3, Users, QrCode, FileBadge, Settings, Search, 
  Download, Filter, ChevronDown, MoreHorizontal, ArrowUpRight,
  CalendarDays, Activity
} from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans">
      
      {/* Vercel-like Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-4">
            <div className="relative w-8 h-8">
               <Image src="/images/ai_logo.png" alt="A&I Tech" fill className="object-contain" />
            </div>
            <div className="w-[1px] h-6 bg-slate-200 transform rotate-12"></div>
            <div className="font-semibold flex items-center gap-2">
              <div className="h-5 w-5 bg-slate-100 rounded flex items-center justify-center text-xs border border-slate-200">
                A
              </div>
              Acme Corp
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search students..." 
                className="pl-9 pr-4 py-1.5 bg-slate-100 border-none rounded-md text-sm focus:ring-2 focus:ring-slate-200 outline-none w-64 transition-all"
              />
            </div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              AD
            </div>
          </div>
        </div>

        {/* Vercel-like Tabs */}
        <div className="px-6 flex gap-6 text-sm font-medium border-t border-slate-100">
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
              className={`flex items-center gap-2 py-3 border-b-2 transition-colors ${
                activeTab === tab.id 
                  ? "border-black text-black" 
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 md:p-10 space-y-8">
        
        {/* Top Actions */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-slate-200 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors flex items-center gap-2">
              <Download className="h-4 w-4" /> Export CSV
            </button>
            <Link href="/admin/scanner" className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-sm">
              <QrCode className="h-4 w-4" /> Scan Attendance
            </Link>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
            <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
              Total Registrations
            </div>
            <div className="flex items-end justify-between">
              <span className="text-4xl font-bold tracking-tight">42</span>
              <span className="text-emerald-500 text-sm font-medium flex items-center bg-emerald-50 px-2 py-0.5 rounded-full">
                <ArrowUpRight className="h-3 w-3 mr-1" /> +12%
              </span>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
            <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
              Avg. Daily Attendance
            </div>
            <div className="flex items-end justify-between">
              <span className="text-4xl font-bold tracking-tight">38</span>
              <span className="text-slate-400 text-sm">/ 42 Students</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-32">
            <div className="text-sm font-medium text-slate-500 flex items-center gap-2">
              Certificates Generated
            </div>
            <div className="flex items-end justify-between">
              <span className="text-4xl font-bold tracking-tight">0</span>
              <button className="text-xs font-medium bg-black text-white px-3 py-1.5 rounded-md hover:bg-slate-800 transition-colors">
                Bulk Generate
              </button>
            </div>
          </div>
        </div>

        {/* Charts & Tables Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold">Registration Trend</h3>
              <select className="text-sm border-none bg-slate-50 rounded-md px-2 py-1 outline-none cursor-pointer">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
              </select>
            </div>
            
            {/* CSS Mock Chart */}
            <div className="h-64 flex items-end justify-between gap-2 md:gap-4 pt-10">
              {[4, 7, 5, 12, 8, 15, 20, 24, 30, 28, 35, 42].map((val, i) => (
                <div key={i} className="w-full relative group">
                  <div 
                    className="bg-blue-500 rounded-t-sm w-full transition-all group-hover:bg-blue-600"
                    style={{ height: `${(val / 42) * 100}%` }}
                  ></div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                    {val} students
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-semibold mb-6">Recent Registrations</h3>
            <div className="space-y-6">
              {[
                { name: "Sarah Johnson", time: "2 hours ago", status: "Paid" },
                { name: "Michael Adebayo", time: "5 hours ago", status: "Paid" },
                { name: "David Emmanuel", time: "1 day ago", status: "Pending" },
                { name: "Grace Eze", time: "2 days ago", status: "Paid" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{item.name}</div>
                      <div className="text-xs text-slate-500">{item.time}</div>
                    </div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                    item.status === 'Paid' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                  }`}>
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Filter by name..." 
                  className="pl-9 pr-4 py-1.5 bg-white border border-slate-200 rounded-md text-sm focus:ring-2 focus:ring-slate-200 outline-none w-48 sm:w-64"
                />
              </div>
              <button className="px-3 py-1.5 bg-white border border-slate-200 text-sm font-medium rounded-md hover:bg-slate-50 flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 uppercase bg-slate-50/50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 font-medium">Student Name</th>
                  <th className="px-6 py-3 font-medium">Age</th>
                  <th className="px-6 py-3 font-medium">Parent Email</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { name: "Daniel Johnson", age: "12", email: "sarah.j@example.com", status: "Confirmed" },
                  { name: "Chloe Adebayo", age: "14", email: "mike.a@example.com", status: "Confirmed" },
                  { name: "Samuel Emmanuel", age: "10", email: "david.e@example.com", status: "Pending" },
                ].map((student, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-900">{student.name}</td>
                    <td className="px-6 py-4 text-slate-500">{student.age}</td>
                    <td className="px-6 py-4 text-slate-500">{student.email}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        student.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreHorizontal className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  )
}
