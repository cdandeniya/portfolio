'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let frameId = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }

    const animate = () => {
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      frameId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    frameId = requestAnimationFrame(animate)

    const onEnter = () => {
      ring.style.width = '48px'
      ring.style.height = '48px'
      ring.style.opacity = '0.5'
    }
    const onLeave = () => {
      ring.style.width = '32px'
      ring.style.height = '32px'
      ring.style.opacity = '0.35'
    }

    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[var(--fg)] pointer-events-none z-[90] mix-blend-difference hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 -ml-4 -mt-4 rounded-full border border-[var(--fg)]/30 pointer-events-none z-[89] hidden md:block transition-[width,height,opacity] duration-300"
        style={{ opacity: 0.35 }}
      />
    </>
  )
}
