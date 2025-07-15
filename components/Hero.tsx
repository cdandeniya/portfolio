'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const resumeRippleRef = useRef<HTMLSpanElement>(null)
  const contactRippleRef = useRef<HTMLSpanElement>(null)

  const handleRipple = (ref: React.RefObject<HTMLSpanElement>) => {
    const ripple = ref.current
    if (ripple) {
      ripple.classList.remove('animate-ripple')
      void ripple.offsetWidth
      ripple.classList.add('animate-ripple')
    }
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-8 md:py-14">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14"
        >
          {/* Profile Photo - Left Side */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, x: -50 },
              visible: { opacity: 1, scale: 1, x: 0, transition: { type: 'spring', duration: 0.8 } },
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: '0 8px 32px 0 rgba(59,130,246,0.25)',
            }}
            className="flex-shrink-0 group"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-xl">
              <img
                src="/profile-photo.jpg"
                alt="Chanul Dandeniya"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { type: 'spring', duration: 0.8 } },
            }}
            className="flex-1 text-center lg:text-left space-y-6"
          >
            {/* Greeting */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="text-xl text-gray-600 font-semibold tracking-wide mb-1"
            >
              Hello, my name is
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-1"
            >
              Chanul{' '}
              <span className="gradient-text">Dandeniya</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="text-xl md:text-2xl text-gray-700 font-semibold mb-2"
            >
              Software Developer & Startup Enthusiast
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="text-base text-gray-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 mb-4"
            >
              Computer Science student at Stony Brook University with experience in full-stack development, 
              machine learning, and cloud architecture. 
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-2"
            >
              <motion.a
                href="/Chanul Dandeniya Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.07, background: 'linear-gradient(90deg,#2563eb,#1e40af)' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold text-base hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Download Resume
              </motion.a>
              <motion.a
                href="mailto:cdandeniya1@gmail.com"
                whileHover={{ scale: 1.07, background: 'linear-gradient(90deg,#fff,#dbeafe)' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg font-semibold text-base hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
              }}
              className="flex justify-center lg:justify-start space-x-5 pt-4"
            >
              <motion.a
                href="https://github.com/cdandeniya"
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.5 } },
                }}
                whileHover={{ scale: 1.18, rotate: -8, boxShadow: '0 2px 16px 0 #dbeafe' }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors duration-200"
              >
                <Github size={22} className="text-gray-700" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/cdandeniya/"
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.5 } },
                }}
                whileHover={{ scale: 1.18, rotate: 8, boxShadow: '0 2px 16px 0 #dbeafe' }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors duration-200"
              >
                <Linkedin size={22} className="text-gray-700" />
              </motion.a>
              <motion.a
                href="mailto:cdandeniya1@gmail.com"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 0.5 } },
                }}
                whileHover={{ scale: 1.18, rotate: 0, boxShadow: '0 2px 16px 0 #dbeafe' }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors duration-200"
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
            animate={{ y: [0, 10, 0], boxShadow: ['0 0 0 0 #3b82f6', '0 0 16px 4px #3b82f6', '0 0 0 0 #3b82f6'] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.2, boxShadow: '0 0 24px 8px #3b82f6' }}
            className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200 rounded-full"
          >
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
        <style jsx>{`
          .animate-ripple {
            animation: ripple 0.5s linear;
          }
          @keyframes ripple {
            0% {
              transform: scale(0.2);
              opacity: 0.6;
            }
            70% {
              transform: scale(1);
              opacity: 0.3;
            }
            100% {
              transform: scale(1.2);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </section>
  )
} 