'use client'

import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  theme: string
  className?: string
  children: ReactNode
}

export default function Section({ id, theme, className = '', children }: SectionProps) {
  return (
    <section
      id={id}
      data-section={theme}
      className={`section-chapter py-14 md:py-24 lg:py-[5.5rem] ${className}`}
    >
      <div className="section-reveal container-studio">{children}</div>
    </section>
  )
}
