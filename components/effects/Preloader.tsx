'use client'

import { useEffect, useState } from 'react'

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    const duration = 1400

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setProgress(p)
      if (p < 1) {
        requestAnimationFrame(tick)
      } else {
        setTimeout(onDone, 200)
      }
    }
    requestAnimationFrame(tick)
  }, [onDone])

  if (progress >= 1) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a]">
      <div className="w-[min(280px,70vw)]">
        <div className="h-px bg-[var(--line)] relative overflow-hidden mb-4">
          <div
            className="absolute inset-y-0 left-0 bg-[var(--fg)] transition-none"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <p className="text-center text-[10px] uppercase tracking-[0.35em] text-[var(--muted)]">
          Loading
        </p>
      </div>
    </div>
  )
}
