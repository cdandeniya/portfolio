'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Cursor from '@/components/Cursor'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2500)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 gradient-bg flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 text-center"
          >
            <h1 className="text-2xl md:text-3xl font-light text-black/50 select-none tracking-wide">
              Loading Portfolio
            </h1>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="h-1 w-[80vw] max-w-4xl bg-gradient-to-r from-sky-400 via-blue-500 to-yellow-400 mb-4 origin-center"
            style={{ transformOrigin: 'center' }}
          />
        </motion.div>
      </div>
    )
  }

  return (
    <main className="min-h-screen relative">
      <Cursor mousePosition={mousePosition} />
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </motion.div>
    </main>
  )
} 