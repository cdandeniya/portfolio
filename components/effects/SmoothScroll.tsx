'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollContext } from '@/contexts/ScrollContext'

import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger)

type SmoothScrollProps = {
  children: ReactNode
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollToRef = useRef<(selector: string) => void>(() => {})

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })

    scrollToRef.current = (selector: string) => {
      const el = document.querySelector(selector)
      if (el instanceof HTMLElement) {
        lenis.scrollTo(el, { offset: -88, duration: 1.2 })
      }
    }

    lenis.on('scroll', ScrollTrigger.update)

    const ticker = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    gsap.utils.toArray<HTMLElement>('[data-line]').forEach((el) => {
      gsap.fromTo(
        el,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        }
      )
    })

    return () => {
      gsap.ticker.remove(ticker)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollTo: (s) => scrollToRef.current(s) }}>
      {children}
    </ScrollContext.Provider>
  )
}
