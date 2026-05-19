'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Preloader from '@/components/effects/Preloader'

const PaintedCanvas = dynamic(() => import('@/components/effects/PaintedCanvas'), {
  ssr: false,
})
const SmoothScroll = dynamic(() => import('@/components/effects/SmoothScroll'), {
  ssr: false,
})
const CustomCursor = dynamic(() => import('@/components/effects/CustomCursor'), {
  ssr: false,
})

export default function Home() {
  const [ready, setReady] = useState(false)
  const onLoaded = useCallback(() => setReady(true), [])

  return (
    <>
      {!ready && <Preloader onDone={onLoaded} />}
      <SmoothScroll>
        <PaintedCanvas />
        <div className="grain" aria-hidden />
        <CustomCursor />
        <Navigation />
        <main className={ready ? 'opacity-100' : 'opacity-0'} style={{ transition: 'opacity 0.6s ease' }}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  )
}
