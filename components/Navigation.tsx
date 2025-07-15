'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const rippleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.name.toLowerCase())
      const scrollPosition = window.scrollY + 100
      setScrolled(window.scrollY > 10)
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

  // Ripple effect for logo
  const handleLogoClick = (e: React.MouseEvent) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    const ripple = rippleRef.current
    if (ripple) {
      ripple.classList.remove('animate-ripple')
      void ripple.offsetWidth // trigger reflow
      ripple.classList.add('animate-ripple')
    }
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-16 lg:px-24">
        <div className="flex justify-between items-center h-20 md:h-24">
          <motion.div
            whileHover={{ rotate: 8, scale: 1.08 }}
            whileTap={{ scale: 0.95, rotate: -8 }}
            className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 pr-8 select-none cursor-pointer relative overflow-hidden"
            onClick={handleLogoClick}
          >
            CD
            <span
              ref={rippleRef}
              className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full bg-blue-200 opacity-40 animate-none"
              style={{ zIndex: 0 }}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-base font-semibold transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 bg-transparent ${
                  activeSection === item.name.toLowerCase()
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600 rounded-full"
                  initial={false}
                  animate={{
                    opacity: activeSection === item.name.toLowerCase() ? 1 : 0,
                    y: activeSection === item.name.toLowerCase() ? 0 : 4,
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="overflow-hidden md:hidden"
        >
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
              className="py-6 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-6">
                {navItems.map((item, idx) => (
                  <motion.button
                    key={item.name}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 },
                    }}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left text-lg font-semibold transition-colors duration-200 px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 bg-transparent ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
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
    </motion.nav>
  )
} 