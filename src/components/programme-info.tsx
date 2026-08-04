"use client"

import { motion } from "framer-motion"
import { CalendarDays, Clock, MapPin, Users, Info, Laptop, AlertCircle, Award } from "lucide-react"

const infoItems = [
  {
    icon: CalendarDays,
    label: "Duration",
    value: "2 Weeks",
    description: "August 12th - 23rd, 2026",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Clock,
    label: "Schedule",
    value: "9:00 AM - 1:00 PM",
    description: "Monday to Friday",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: Users,
    label: "Age Group",
    value: "8 - 16 Years",
    description: "Grouped by age for tailored learning",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: MapPin,
    label: "Venue",
    value: "Foursquare Gospel Church",
    description: "Isheri, Lagos",
    color: "bg-rose-50 text-rose-600"
  },
  {
    icon: Laptop,
    label: "Requirements",
    value: "No Prior Experience",
    description: "Laptops provided (optional to bring yours)",
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: AlertCircle,
    label: "Registration Deadline",
    value: "August 5th, 2026",
    description: "Late registration subject to availability",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Info,
    label: "Capacity",
    value: "50 Students Max",
    description: "Strictly limited to maintain student-to-teacher ratio",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Award,
    label: "Certification",
    value: "Provided",
    description: "Verifiable digital & printed certificate on graduation",
    color: "bg-cyan-50 text-cyan-600"
  }
]

export function ProgrammeInfo() {
  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#002b5e] tracking-tight mb-4">
            Programme <span className="text-blue-600">Information</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to know about the logistics of the VBS technology track.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${item.color}`}>
                <item.icon className="h-6 w-6 stroke-[2]" />
              </div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="text-xl font-bold text-slate-800 mb-2">
                {item.value}
              </div>
              <div className="text-sm text-slate-500">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
