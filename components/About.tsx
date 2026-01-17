'use client'

import { motion } from 'framer-motion'
import { memo } from 'react'

function About() {
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

          {/* Narrative About Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="max-w-3xl relative"
          >
            {/* Decorative element */}
            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-blue-500 to-yellow-400 opacity-30 hidden md:block" />
            
            <div className="pl-0 md:pl-12 space-y-6 md:space-y-8">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl lg:text-3xl font-light text-black/80 studio-text leading-relaxed"
              >
                Driven problem solver with experience in{' '}
                <span className="font-medium text-black">full-stack development</span>,{' '}
                <span className="font-medium text-black">backend systems</span>, and{' '}
                <span className="font-medium text-black">technical project leadership</span>.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl lg:text-3xl font-light text-black/80 studio-text leading-relaxed"
              >
                I love building{' '}
                <span className="font-medium text-black">impactful products</span>, working on{' '}
                <span className="font-medium text-black">fast-moving teams</span>, and solving{' '}
                <span className="font-medium text-black">real problems</span> through technology.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl lg:text-3xl font-light text-black/80 studio-text leading-relaxed"
              >
                Currently exploring{' '}
                <span className="font-medium text-black">software engineering</span> and{' '}
                <span className="font-medium text-black">project management</span> opportunities in{' '}
                <span className="font-medium text-black">big tech</span> and{' '}
                <span className="font-medium text-black">startup environments</span>.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default memo(About)
