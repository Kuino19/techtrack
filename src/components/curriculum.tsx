"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Clock, CheckCircle2, Code2, Bot, Wrench, Sparkles, MonitorPlay } from "lucide-react"

const week1Topics = [
  { title: "Introduction to Computers", duration: "1 Hour", icon: MonitorPlay },
  { title: "What is Artificial Intelligence?", duration: "1.5 Hours", icon: Sparkles },
  { title: "Logic & Computational Thinking", duration: "2 Hours", icon: CheckCircle2 },
  { title: "Scratch Programming", duration: "3 Hours", icon: Code2 },
  { title: "Basic Electronics", duration: "2 Hours", icon: Wrench },
  { title: "Robotics Components", duration: "1.5 Hours", icon: Bot },
]

const week2Topics = [
  { title: "Sensors", duration: "1.5 Hours", icon: Sparkles },
  { title: "Motors", duration: "1.5 Hours", icon: Wrench },
  { title: "Robot Assembly", duration: "3 Hours", icon: Bot },
  { title: "Programming Robots", duration: "3 Hours", icon: Code2 },
  { title: "Team Project", duration: "4 Hours", icon: MonitorPlay },
  { title: "Project Presentation", duration: "2 Hours", icon: CheckCircle2 },
  { title: "Graduation Ceremony", duration: "2 Hours", icon: Sparkles },
]

export function Curriculum() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] aspect-square rounded-full bg-blue-100 blur-[100px]"></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] aspect-square rounded-full bg-indigo-100 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#002b5e] tracking-tight mb-6">
            Comprehensive <span className="text-blue-600">Curriculum</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            A carefully crafted two-week journey taking students from absolute beginners to building and programming their own functional robots.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 mb-24">
          
          {/* Week 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <span className="text-8xl font-black text-slate-400">01</span>
            </div>
            
            <div className="relative z-10 mb-8">
              <div className="inline-block bg-blue-100 text-blue-700 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
                WEEK ONE
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Foundations of Tech</h3>
            </div>

            <div className="space-y-4 relative z-10">
              {week1Topics.map((topic, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center p-4 rounded-2xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100"
                >
                  <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <topic.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 text-sm">{topic.title}</h4>
                  </div>
                  <div className="flex items-center text-slate-400 text-xs font-medium bg-slate-100 px-3 py-1 rounded-full">
                    <Clock className="h-3 w-3 mr-1" />
                    {topic.duration}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 relative h-48 rounded-2xl overflow-hidden">
               <Image 
                  src="/images/06_coding.png" 
                  alt="Student coding on laptop"
                  fill
                  className="object-cover"
                />
            </div>
          </motion.div>

          {/* Week 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <span className="text-8xl font-black text-slate-400">02</span>
            </div>
            
            <div className="relative z-10 mb-8">
              <div className="inline-block bg-indigo-100 text-indigo-700 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
                WEEK TWO
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Advanced Robotics</h3>
            </div>

            <div className="space-y-4 relative z-10">
              {week2Topics.map((topic, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center p-4 rounded-2xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100"
                >
                  <div className="h-10 w-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mr-4 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <topic.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 text-sm">{topic.title}</h4>
                  </div>
                  <div className="flex items-center text-slate-400 text-xs font-medium bg-slate-100 px-3 py-1 rounded-full">
                    <Clock className="h-3 w-3 mr-1" />
                    {topic.duration}
                  </div>
                </motion.div>
              ))}
            </div>

             <div className="mt-8 relative h-48 rounded-2xl overflow-hidden">
               <Image 
                  src="/images/03_curriculum_image.png" 
                  alt="Students in robotics classroom"
                  fill
                  className="object-cover"
                />
            </div>
          </motion.div>
        </div>

        {/* What your child will build */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0b1221] rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Circuit background overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image 
              src="/images/10_hero_background.png" 
              alt="Background pattern" 
              fill 
              className="object-cover" 
            />
          </div>

          <div className="grid md:grid-cols-2 relative z-10">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-[#fcdb44] font-bold text-sm tracking-widest uppercase mb-4">
                <Sparkles className="h-4 w-4" />
                Project Showcase
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                What Your Child Will Build
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                By the end of the programme, students will have built and programmed a fully functional smart robot capable of obstacle avoidance, line tracking, and remote control.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 shrink-0" />
                  <span className="text-blue-50 font-medium">Fully programmable microcontroller</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 shrink-0" />
                  <span className="text-blue-50 font-medium">Integrated ultrasonic and line-tracking sensors</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-400 shrink-0" />
                  <span className="text-blue-50 font-medium">Bluetooth remote control integration</span>
                </li>
              </ul>
            </div>
            
            <div className="relative h-[300px] md:h-auto min-h-[400px]">
               <Image 
                  src="/images/05_robotics_kit.png" 
                  alt="Robotics kit components and completed build"
                  fill
                  className="object-cover"
                />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
