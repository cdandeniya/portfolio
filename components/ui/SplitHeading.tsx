'use client'

import { useEffect, useRef } from 'react'

type SplitHeadingProps = {
  as?: 'h1' | 'h2' | 'h3'
  children: string
  className?: string
}

export default function SplitHeading({
  as: Tag = 'h2',
  children,
  className = '',
}: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!ref.current) return

    import('splitting').then(({ default: Splitting }) => {
      if (ref.current) {
        Splitting({ target: ref.current, by: 'words' })
      }
    })
  }, [children])

  return (
    <Tag ref={ref} data-split-heading className={`split-heading font-serif ${className}`}>
      {children}
    </Tag>
  )
}
