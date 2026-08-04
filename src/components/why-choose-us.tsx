"use client"

import { motion } from "framer-motion"
import { Users, Cross, Cpu, Wrench, Award, Lightbulb } from "lucide-react"

const features = [
  {
    title: "Hands-on Learning",
    description: "Every student builds, programs, and tests their own robot. Theory is immediately put into practice.",
    icon: Wrench,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Small Class Sizes",
    description: "A low student-to-teacher ratio ensures personalized attention and focused guidance for every child.",
    icon: Users,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Christian Values",
    description: "Technology taught through the lens of faith, emphasizing innovation for a higher purpose.",
    icon: Cross,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Future Tech Skills",
    description: "Foundational knowledge in AI, coding, and robotics preparing them for the jobs of tomorrow.",
    icon: Cpu,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Practical Problem Solving",
    description: "Students are challenged to think critically and creatively to overcome real-world engineering hurdles.",
    icon: Lightbulb,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Certificate of Completion",
    description: "A verifiable, cryptographically secure certificate awarded upon successful graduation.",
    icon: Award,
    color: "bg-rose-50 text-rose-600",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#002b5e] tracking-tight mb-4">
            Why Parents Choose <span className="text-blue-600">This Programme</span>
          </h2>
          <p className="text-slate-600 text-lg">
            We offer more than just a coding class. This is a comprehensive, faith-integrated engineering experience designed to spark lifelong curiosity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${feature.color}`}>
                <feature.icon className="h-6 w-6 stroke-[2]" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
