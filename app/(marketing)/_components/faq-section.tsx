"use client"

import React, { useState } from "react"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion" // Changed from "motion/react" to "framer-motion" (Standard import)
import { faqItems } from "@/lib/constants/shared-data"

// 1. ADD THIS DEFINITION HERE
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } 
  },
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="FAQs" className="w-full py-16 font-chakra">
      {/* Container */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8">
        
        {/* Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp} 
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-extrabold text-white uppercase tracking-wider sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent pb-2">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm text-gray-400 uppercase tracking-widest sm:text-base">
            Everything you need to know about Digidrops
          </p>
        </motion.div>

        {/* Divider */}
        <div className="mb-4 h-px w-full bg-white/10" />

        {/* FAQ List */}
        <div className="space-y-4">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-black/50 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-purple-500/30"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left transition sm:px-8"
              >
                <span className={`text-lg font-medium sm:text-xl font-chakra transition-colors duration-300 ${
                  openIndex === index ? "text-purple-400" : "text-white"
                }`}>
                  {faq.question}
                </span>

                <ChevronRight
                  className={`mt-1 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-90 text-[#CB6CE6]" : ""
                  }`}
                />
              </button>

              {/* Inner Divider */}
              <div className="h-px w-full bg-white/5" />

              {/* Accordion Body */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-8 pt-2 text-base leading-relaxed text-gray-300 sm:px-8 sm:text-lg font-chakra">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ