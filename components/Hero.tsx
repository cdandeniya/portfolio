'use client'

import { useScrollTo } from '@/contexts/ScrollContext'

const RESUME = '/Chanul Dandeniya Resume.pdf'

export default function Hero() {
  const scrollTo = useScrollTo()

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-32"
    >
      <div className="page flex-1 flex flex-col justify-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--muted)] mb-8 md:mb-12">
          Backend Engineer · Product
        </p>

        <h1 className="display text-[var(--fg)] mb-8 md:mb-10">
          Chanul
          <br />
          Dandeniya
        </h1>

        <p className="max-w-lg text-[var(--muted)] text-base md:text-lg leading-relaxed mb-12">
          I build distributed systems at scale — and I care about what ships.
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--fg)] border-b border-[var(--fg)]/40 pb-0.5 hover:border-[var(--fg)] transition-colors"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => scrollTo('#contact')}
            className="link-hover uppercase text-[11px] tracking-[0.2em]"
          >
            Get in touch
          </button>
        </div>
      </div>

      <div className="page flex items-center justify-between mt-16">
        <button
          type="button"
          onClick={() => scrollTo('#about')}
          className="text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
        >
          Scroll
        </button>
        <span className="text-[10px] text-[var(--muted)] tracking-widest">NYC · 2027</span>
      </div>

      <div
        data-line
        className="absolute bottom-0 left-0 right-0 h-px bg-[var(--line)] origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </section>
  )
}
