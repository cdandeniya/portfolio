'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, FileText, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const currentYear = new Date().getFullYear()

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
            className="mb-16 md:mb-20 text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-1 h-12 bg-gradient-to-b from-sky-400 to-blue-500" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
                Get In Touch
              </h2>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-sky-400 via-blue-500 to-yellow-400 mt-2 mx-auto" />
            <p className="text-lg md:text-xl font-light text-black/50 max-w-2xl mx-auto mt-8 studio-text">
              Open to new opportunities, projects, and collaborations.
            </p>
          </motion.div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {/* Email */}
            <motion.a
              href="mailto:cdandeniya1@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group border-b-2 border-black/10 hover:border-sky-400 transition-all duration-300 pb-6"
            >
              <div className="flex items-start justify-between mb-4">
                <Mail size={24} className="text-black/40 group-hover:text-sky-400 transition-colors duration-300" />
                <ArrowRight size={18} className="text-black/30 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h4 className="text-xs font-light tracking-[0.2em] uppercase text-black/40 mb-2">Email</h4>
              <p className="text-base font-light text-black/70 group-hover:text-black transition-colors duration-300">
                cdandeniya1@gmail.com
              </p>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              viewport={{ once: true }}
              className="border-b-2 border-black/10 pb-6"
            >
              <div className="flex items-start justify-between mb-4">
                <MapPin size={24} className="text-black/40" />
              </div>
              <h4 className="text-xs font-light tracking-[0.2em] uppercase text-black/40 mb-2">Location</h4>
              <p className="text-base font-light text-black/70">NYC</p>
            </motion.div>

            {/* Resume */}
            <motion.a
              href="/Chanul Dandeniya Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group border-b-2 border-black/10 hover:border-sky-400 transition-all duration-300 pb-6"
            >
              <div className="flex items-start justify-between mb-4">
                <FileText size={24} className="text-black/40 group-hover:text-sky-400 transition-colors duration-300" />
                <ArrowRight size={18} className="text-black/30 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h4 className="text-xs font-light tracking-[0.2em] uppercase text-black/40 mb-2">Resume</h4>
              <p className="text-base font-light text-black/70 group-hover:text-black transition-colors duration-300">
                Download PDF
              </p>
            </motion.a>
          </div>

          {/* Footer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-black/10 pt-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Left - Name & Copyright */}
              <div className="text-center md:text-left">
                <div className="text-lg font-bold text-black mb-2">Chanul Dandeniya</div>
                <div className="text-sm font-light text-black/50">
                  © {currentYear} All rights reserved.
                </div>
              </div>

              {/* Right - Social Links */}
              <div className="flex gap-6">
                <motion.a
                  href="https://github.com/cdandeniya"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black/50 hover:text-black transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/cdandeniya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black/50 hover:text-black transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </motion.a>
                <motion.a
                  href="https://x.com/cdandeniya7"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black/50 hover:text-black transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                </motion.a>
                <motion.a
                  href="mailto:cdandeniya1@gmail.com"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-black/50 hover:text-black transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail size={22} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
