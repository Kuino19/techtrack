"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Target, Rocket, Heart, BookOpen, Building2, Users } from "lucide-react"

export function AboutSections() {
  return (
    <div className="bg-white">
      {/* About A&I Tech */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm tracking-widest uppercase mb-4">
                <Building2 className="h-4 w-4" />
                About A&I Tech LTD
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-6">
                Pioneering Technology Education in Africa
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                A&I Tech LTD is a premier engineering and technology education firm dedicated to equipping the next generation with the tools to innovate. Our mission is to demystify complex technologies like Artificial Intelligence and Robotics.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <Target className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Our Mission</h4>
                    <p className="text-slate-500 text-sm">To raise world-class innovators capable of solving global challenges.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center shrink-0">
                    <Rocket className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Our Vision</h4>
                    <p className="text-slate-500 text-sm">A continent empowered by indigenous technological advancement.</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-slate-100">
                <div>
                  <div className="text-3xl font-black text-blue-600 mb-1">500+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Students Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-blue-600 mb-1">15+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Schools Reached</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-blue-600 mb-1">50+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Robot Models</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-50 rounded-[2.5rem] p-8 flex items-center justify-center border border-slate-100 shadow-xl overflow-hidden">
                 {/* Robot Mascot as per rule */}
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100 via-white to-white opacity-50"></div>
                 <div className="relative w-[80%] h-[80%]">
                   <Image 
                    src="/images/09_robot_mascot.png" 
                    alt="A&I Tech Robot Mascot"
                    fill
                    className="object-contain"
                  />
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Foursquare Isheri */}
      <section className="py-24 relative bg-[#002b5e]">
        {/* Background circuit pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Image src="/images/10_hero_background.png" alt="Pattern" fill className="object-cover" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative hidden lg:flex justify-center"
            >
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 max-w-md w-full">
                <div className="w-full h-32 relative mb-8">
                  <Image src="/images/foursquare_logo.png" alt="Foursquare Isheri Logo" fill className="object-contain brightness-0 invert" />
                </div>
                <div className="space-y-4">
                   <div className="flex items-center gap-3 text-blue-100">
                     <Heart className="h-5 w-5 text-red-400" />
                     <span>Spiritual Growth & Foundation</span>
                   </div>
                   <div className="flex items-center gap-3 text-blue-100">
                     <BookOpen className="h-5 w-5 text-amber-400" />
                     <span>Biblical Principles in Action</span>
                   </div>
                   <div className="flex items-center gap-3 text-blue-100">
                     <Users className="h-5 w-5 text-emerald-400" />
                     <span>Community Development</span>
                   </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 text-blue-300 font-bold text-sm tracking-widest uppercase mb-4">
                <Heart className="h-4 w-4" />
                In Partnership With
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
                Foursquare Gospel Church, Isheri
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                We believe in raising a generation of children who are not only spiritually sound but also equipped with the skills needed to thrive in a rapidly changing world.
              </p>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                By hosting the VBS technology track, Foursquare Isheri is demonstrating its commitment to holistic community impact—ensuring our children lead the future of innovation with strong moral convictions.
              </p>
              
              <div className="lg:hidden w-48 h-16 relative">
                 <Image src="/images/foursquare_logo.png" alt="Foursquare Isheri Logo" fill className="object-contain brightness-0 invert object-left" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
