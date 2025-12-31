'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.name.toLowerCase())
      const scrollPosition = window.scrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 bg-transparent"
    >
      <div className="container-studio">
        <div className="flex justify-end items-center h-20 md:h-24">
          {/* Desktop Navigation - Minimal */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(1, -1).map((item) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-xs font-light tracking-[0.2em] uppercase transition-colors duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-black'
                    : 'text-black/50 hover:text-black'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-2 bg-black text-white text-xs font-medium tracking-wider uppercase hover:bg-black/90 transition-colors duration-300"
            >
              CONTACT
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-black focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden md:hidden bg-white/95 backdrop-blur-sm"
        >
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
              }}
              className="py-8"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.name}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -10 },
                    }}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left text-sm font-light tracking-wider uppercase transition-colors duration-200 px-2 py-2 ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-black'
                        : 'text-black/50'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.nav>
  )
} 