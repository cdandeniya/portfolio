'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Hammer } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        </motion.div>

        <div className="space-y-12">
          {/* Currently */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <GraduationCap size={24} className="text-gray-300 mt-1" />
            <div>
              <div className="uppercase text-xs font-semibold text-gray-400 tracking-widest mb-1">Currently</div>
              <div className="text-gray-900 font-medium">
                Computer Science & Applied Math student at Stony Brook University (GPA: 3.82/4.0).<br />
                Lead Solutions Architect at OuterLabs Studio.
              </div>
            </div>
          </motion.div>

          {/* Previously */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <Briefcase size={24} className="text-gray-300 mt-1" />
            <div>
              <div className="uppercase text-xs font-semibold text-gray-400 tracking-widest mb-1">Previously</div>
              <div className="text-gray-900 font-medium">
                Experience at Amazon and Sai AI. Built scalable systems, led technical solutions, and delivered award-winning products for 15,000+ users.
              </div>
            </div>
          </motion.div>

          {/* What I Love Solving For / Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-start gap-4"
          >
            <Hammer size={24} className="text-gray-300 mt-1" />
            <div>
              <div className="uppercase text-xs font-semibold text-blue-400 tracking-widest mb-1">What I Love Solving For</div>
              <div className="text-gray-900 font-medium">
                Product, UX, and strategy—especially building things from scratch, architecting systems, and collaborating on innovative technology and entrepreneurship.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 