'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container-studio">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-12 bg-gradient-to-b from-sky-400 to-blue-500" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
                About Me
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-sky-400 via-blue-500 to-yellow-400 mt-2" />
          </motion.div>

          <div className="space-y-16 md:space-y-24">
            {/* Currently */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true }}
              className="border-l-4 border-sky-400 pl-8 md:pl-12"
            >
              <div className="uppercase text-xs font-light tracking-[0.3em] text-black/40 mb-4">Currently</div>
              <div className="text-xl md:text-2xl font-light text-black/80 studio-text">
                Computer Science & Applied Math student at Stony Brook University (GPA: 3.82/4.0).
              </div>
            </motion.div>

            {/* Previously */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true }}
              className="border-l-4 border-blue-500 pl-8 md:pl-12"
            >
              <div className="uppercase text-xs font-light tracking-[0.3em] text-black/40 mb-4">Previously</div>
              <div className="text-xl md:text-2xl font-light text-black/80 studio-text">
                Experience at Amazon and OuterLabs. Built scalable systems, led technical solutions, and delivered award-winning products for 15,000+ users.
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              viewport={{ once: true }}
              className="border-l-4 border-yellow-400 pl-8 md:pl-12"
            >
              <div className="uppercase text-xs font-light tracking-[0.3em] text-black/40 mb-4">Interests</div>
              <div className="text-xl md:text-2xl font-light text-black/80 studio-text">
                Full-stack development, entrepreneurship, project management, product, UX, and building things from scratch.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
