'use client'

import { motion } from 'framer-motion'

interface CursorProps {
  mousePosition: { x: number; y: number }
}

export default function Cursor({ mousePosition }: CursorProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 4,
        y: mousePosition.y - 4,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    />
  )
} 