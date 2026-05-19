'use client'

import { useState, useCallback, memo } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollTo } from '@/contexts/ScrollContext'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navigation() {
  const [open, setOpen] = useState(false)
  const scrollTo = useScrollTo()

  const go = useCallback(
    (href: string) => {
      scrollTo(href)
      setOpen(false)
    },
    [scrollTo]
  )

  return (
    <header className="fixed top-0 inset-x-0 z-40 mix-blend-difference">
      <div className="page flex items-center justify-between h-20 md:h-24">
        <button
          type="button"
          onClick={() => go('#home')}
          className="text-[11px] uppercase tracking-[0.25em] text-[var(--fg)] hover:opacity-70 transition-opacity"
        >
          Chanul Dandeniya
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l.href}
              type="button"
              onClick={() => go(l.href)}
              className="text-[11px] uppercase tracking-[0.2em] text-[var(--fg)]/70 hover:text-[var(--fg)] transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-[var(--fg)]"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden page pb-8 pt-2 flex flex-col gap-5 bg-[var(--bg)]/95 backdrop-blur-md border-t border-[var(--line)]">
          {links.map((l) => (
            <button
              key={l.href}
              type="button"
              onClick={() => go(l.href)}
              className="text-left text-2xl font-serif text-[var(--fg)]"
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}

export default memo(Navigation)
