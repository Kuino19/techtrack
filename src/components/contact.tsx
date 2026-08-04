"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Phone, Mail, MapPin, MessageSquare, Send } from "lucide-react"

export function Contact() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-[#002b5e] tracking-tight mb-4">
            Get in <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Have questions about the VBS technology track? We are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-4 space-y-4">
            <motion.a 
              href="tel:+2340000000000"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform text-blue-600">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Call Us</h4>
                <p className="text-slate-500 text-sm mt-1">+234 (0) 800 000 0000</p>
              </div>
            </motion.a>

            <motion.a 
              href="https://wa.me/2340000000000"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-green-200 hover:bg-green-50/50 transition-colors group"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform text-green-600">
                <MessageSquare className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">WhatsApp</h4>
                <p className="text-slate-500 text-sm mt-1">Chat with our support team</p>
              </div>
            </motion.a>

            <motion.a 
              href="mailto:hello@goanitech.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors group"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform text-indigo-600">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Email</h4>
                <p className="text-slate-500 text-sm mt-1">hello@goanitech.com</p>
              </div>
            </motion.a>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100"
            >
              <div className="bg-white p-3 rounded-xl shadow-sm text-rose-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">Location</h4>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                  Foursquare Gospel Church,<br />
                  Isheri, Lagos State, Nigeria.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden"
          >
            {/* Mascot Accent */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 opacity-10 pointer-events-none">
              <Image 
                src="/images/09_robot_mascot.png" 
                alt="Robot Mascot" 
                fill 
                className="object-contain" 
              />
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-8">Send us a message</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-2 w-full sm:w-auto transition-colors">
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Google Maps Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 w-full h-[400px] bg-slate-100 rounded-3xl border border-slate-200 overflow-hidden relative"
        >
           {/* In a real scenario, this would be an iframe */}
           <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
             <MapPin className="h-12 w-12 mb-4 opacity-50" />
             <p className="font-semibold">Interactive Map Placeholder</p>
             <p className="text-sm">Embed Google Maps iframe here</p>
           </div>
        </motion.div>
      </div>
    </section>
  )
}
