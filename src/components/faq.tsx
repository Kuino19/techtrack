"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MessageCircleQuestion } from "lucide-react"

const faqs = [
  {
    question: "Who can register?",
    answer: "Any child with an interest in technology, computers, or robotics can register. Prior experience is not required as we start from the absolute basics."
  },
  {
    question: "What age groups are accepted?",
    answer: "Our curriculum is currently tailored for children and teenagers between the ages of 8 and 16 years old."
  },
  {
    question: "Do students need prior experience?",
    answer: "No, prior coding or robotics experience is not necessary. We have designed the programme to accommodate complete beginners."
  },
  {
    question: "Will robotics kits be provided?",
    answer: "Yes, all necessary robotics kits, microcontrollers, sensors, and laptops will be provided during class hours. However, students are welcome to bring their own laptops if preferred."
  },
  {
    question: "What should students bring?",
    answer: "Students should bring a notebook, a pen, and a packed lunch/snacks. Laptops are optional but encouraged if they want to practice at home."
  },
  {
    question: "Will certificates be awarded?",
    answer: "Yes! Every student who successfully completes the programme and their final project will receive a verifiable Certificate of Completion during graduation."
  },
  {
    question: "Can parents attend graduation?",
    answer: "Absolutely! We encourage parents to attend the project presentation and graduation ceremony on the final day to see what their children have built."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6">
            <MessageCircleQuestion className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#002b5e] tracking-tight mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to know about the A&I Tech Academy VBS technology track.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={index} 
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-slate-800 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180 text-blue-600" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
