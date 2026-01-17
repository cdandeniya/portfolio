'use client'

import { useEffect, useRef, memo } from 'react'

interface CursorProps {
  mousePosition: { x: number; y: number }
}

function Cursor({ mousePosition }: CursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!cursorRef.current) return

    const updatePosition = () => {
      if (cursorRef.current) {
        // Use CSS transform for better performance than framer-motion animate
        cursorRef.current.style.transform = `translate3d(${mousePosition.x - 4}px, ${mousePosition.y - 4}px, 0)`
      }
      rafRef.current = null
    }

    // Use requestAnimationFrame for smooth updates
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(updatePosition)
    }

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [mousePosition.x, mousePosition.y])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75 ease-out"
      style={{ willChange: 'transform' }}
    />
  )
}

export default memo(Cursor) 