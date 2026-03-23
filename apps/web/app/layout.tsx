import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClawRead — Books That Speak',
  description:
    'Upload any ebook and get a studio-quality audiobook in minutes — powered by AI voices that understand the language, tone, and rhythm of your text.',
  keywords: ['audiobook', 'TTS', 'Cantonese', 'ebook converter', 'AI voice'],
  openGraph: {
    title: 'ClawRead — Books That Speak',
    description: 'Upload any ebook and get a studio-quality audiobook in minutes.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
