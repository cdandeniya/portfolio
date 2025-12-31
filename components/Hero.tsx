'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  // Shine effect based on scroll
  const shinePosition = useTransform(scrollYProgress, [0, 1], ['-100%', '200%'])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 gradient-bg"
        style={{ y }}
      />
      
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative container-studio py-20 md:py-32 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 xl:gap-24"
        >
          {/* Profile Photo - Left Side */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.8, x: -50 },
              visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="flex-shrink-0 w-64 md:w-80 lg:w-96"
          >
            <motion.div
              className="w-full aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/profile-photo.jpg"
                alt="Chanul Dandeniya"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Content - Right Side */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
            }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Main Heading */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } },
              }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-black mb-8 leading-[1.1]"
            >
              Hi, my name is{' '}
              <br />
              <span 
                ref={nameRef}
                className="relative inline-block"
              >
                <span className="gradient-text">Chanul Dandeniya</span>
                <motion.span
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 45%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.6) 55%, transparent 100%)`,
                    backgroundSize: '60% 100%',
                    backgroundPosition: shinePosition,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    mixBlendMode: 'screen',
                  }}
                >
                  Chanul Dandeniya
                </motion.span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
              }}
              className="text-lg md:text-xl lg:text-2xl font-light text-black/60 mb-10 studio-text max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Scroll down to explore my work, experience, and projects.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } },
              }}
              className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start"
            >
              <motion.a
                href="/Chanul Dandeniya Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-black text-white text-sm font-medium tracking-wider uppercase hover:bg-black/90 transition-all duration-300 shadow-lg"
              >
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delay: 0.8 } },
              }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com/cdandeniya' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/cdandeniya/' },
                { icon: Twitter, href: 'https://x.com/cdandeniya7' },
                { icon: Mail, href: 'mailto:cdandeniya1@gmail.com' },
              ].map(({ icon: Icon, href }, idx) => (
                <motion.a
                  key={href}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1, transition: { type: 'spring', duration: 0.5 } },
                  }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/80 backdrop-blur-sm rounded-full text-black/60 hover:text-black hover:bg-white transition-colors duration-300 shadow-md"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{ opacity }}
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.2 }}
            className="text-black/40 hover:text-black transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
