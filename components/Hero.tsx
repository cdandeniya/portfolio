'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14"
        >
          {/* Profile Photo - Left Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-gray-200 shadow-xl">
              <img
                src="/profile-photo.jpg"
                alt="Chanul Dandeniya"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl text-gray-600 font-semibold tracking-wide mb-1"
            >
              Hello, my name is
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-1"
            >
              Chanul{' '}
              <span className="gradient-text">Dandeniya</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-700 font-semibold mb-2"
            >
              Software Developer & Startup Enthusiast
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-base text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 mb-4"
            >
              Computer Science student at Stony Brook University with experience in full-stack development, 
              machine learning, and cloud architecture. 
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2"
            >
              <motion.a
                href="/Chanul Dandeniya Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold text-base hover:bg-gray-800 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Download Resume
              </motion.a>
              
              <motion.a
                href="mailto:cdandeniya1@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold text-base hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-5 pt-4"
            >
              <motion.a
                href="https://github.com/cdandeniya"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                <Github size={22} className="text-gray-700" />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/cdandeniya/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                <Linkedin size={22} className="text-gray-700" />
              </motion.a>
              
              <motion.a
                href="mailto:cdandeniya1@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                <Mail size={22} className="text-gray-700" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
          >
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 