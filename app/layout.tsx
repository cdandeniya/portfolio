import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chanul Dandeniya - Software Engineer & Entrepreneur',
  description: 'Computer Science student at Stony Brook University passionate about software development, technology, and entrepreneurship. Seeking software development internships and building innovative startups.',
  keywords: ['Software Engineer', 'Computer Science', 'Internship', 'Entrepreneurship', 'Startup', 'React', 'Node.js', 'AWS'],
  authors: [{ name: 'Chanul Dandeniya' }],
  creator: 'Chanul Dandeniya',
  openGraph: {
    title: 'Chanul Dandeniya - Software Engineer & Entrepreneur',
    description: 'Computer Science student at Stony Brook University passionate about software development, technology, and entrepreneurship.',
    url: 'https://chanuldandeniya.com',
    siteName: 'Chanul Dandeniya Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chanul Dandeniya Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chanul Dandeniya - Software Engineer & Entrepreneur',
    description: 'Computer Science student at Stony Brook University passionate about software development, technology, and entrepreneurship.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 