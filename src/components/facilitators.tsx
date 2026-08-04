"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Mail } from "lucide-react"

export function Facilitators() {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#002b5e] tracking-tight mb-4">
            Meet Your <span className="text-blue-600">Facilitators</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Our program is led by industry professionals and experienced educators who are passionate about raising the next generation of tech leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/08_facilitator.png" 
              alt="Lead Facilitator"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002b5e]/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full text-white">
              <h3 className="text-2xl font-bold mb-1">David O.</h3>
              <p className="text-blue-200 font-medium mb-4">Lead AI & Robotics Engineer</p>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:text-[#fcdb44] transition-colors" aria-label="LinkedIn">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                </a>
                <a href="#" className="text-white hover:text-[#fcdb44] transition-colors" aria-label="Twitter">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Expertise meets mentorship.</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              David brings over a decade of experience in mechatronics and software engineering to the classroom. Having built enterprise automation systems, he now dedicates his time to breaking down complex engineering concepts for young minds.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              "My goal is not just to teach children how to write code, but to show them how technology can be a powerful tool to solve problems in their communities and glorify God."
            </p>
            
            <div className="space-y-4">
              <h4 className="font-bold text-slate-800 uppercase text-sm tracking-wider">Areas of Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {["Machine Learning", "Embedded Systems", "Python", "C++", "STEM Education"].map((tag) => (
                  <span key={tag} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium border border-blue-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
