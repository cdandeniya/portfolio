'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Linkedin, FileText } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="container-studio">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mb-16 md:mb-24 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-1 h-12 bg-gradient-to-b from-sky-400 to-blue-500" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
                Contact
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-sky-400 via-blue-500 to-yellow-400 mt-2 mx-auto" />
            <p className="text-lg font-light text-black/50 max-w-2xl mx-auto mt-8 studio-text">
              Open to new opportunities, projects, and collaborations.
            </p>
          </motion.div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
            {/* Email Card */}
            <motion.a
              href="mailto:cdandeniya1@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full">
                  <Mail size={24} className="text-white" />
                </div>
              </div>
              <h4 className="text-xs font-light tracking-[0.2em] uppercase text-black/40 mb-3">Email</h4>
              <span className="text-base font-light text-black/60 group-hover:text-black transition-colors duration-300">
                cdandeniya1@gmail.com
              </span>
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white shadow-lg p-8 text-center"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full">
                  <MapPin size={24} className="text-white" />
                </div>
              </div>
              <h4 className="text-xs font-light tracking-[0.2em] uppercase text-black/40 mb-3">Location</h4>
              <p className="text-base font-light text-black/60">NYC</p>
            </motion.div>

            {/* Resume Card */}
            <motion.a
              href="/Chanul Dandeniya Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-500"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full">
                  <FileText size={24} className="text-white" />
                </div>
              </div>
              <h4 className="text-xs font-light tracking-[0.2em] uppercase text-black/40 mb-3">Resume</h4>
              <span className="text-base font-light text-black/60 group-hover:text-black transition-colors duration-300">
                Download PDF
              </span>
            </motion.a>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center border-t border-black/10 pt-12"
          >
            <h4 className="text-xs font-light tracking-[0.2em] uppercase text-black/40 mb-8">Follow</h4>
            <div className="flex justify-center gap-8">
              <motion.a
                href="https://github.com/cdandeniya"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -4, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-white shadow-md rounded-full text-black/60 hover:text-black hover:shadow-lg transition-all duration-300"
              >
                <Github size={24} />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/cdandeniya/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -4, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 bg-white shadow-md rounded-full text-black/60 hover:text-black hover:shadow-lg transition-all duration-300"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
