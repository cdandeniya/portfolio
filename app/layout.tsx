import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cdandeniya.vercel.app'),
  title: 'Chanul Dandeniya — Backend Engineer',
  description:
    'Backend engineer with a product mindset. Distributed systems, AWS, and full-stack delivery. Stony Brook CS, graduating 2027.',
  keywords: [
    'Backend Engineer',
    'Distributed Systems',
    'AWS',
    'Software Engineer',
    'Stony Brook',
  ],
  authors: [{ name: 'Chanul Dandeniya' }],
  openGraph: {
    title: 'Chanul Dandeniya — Backend Engineer',
    description:
      'Backend engineer with a product mindset. Distributed systems, AWS, and full-stack delivery.',
    url: 'https://cdandeniya.vercel.app',
    siteName: 'Chanul Dandeniya',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
