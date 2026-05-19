'use client'

import { createContext, useContext } from 'react'

type ScrollContextValue = {
  scrollTo: (selector: string) => void
}

export const ScrollContext = createContext<ScrollContextValue | null>(null)

export function useScrollTo() {
  const ctx = useContext(ScrollContext)
  return ctx?.scrollTo ?? ((selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  })
}
