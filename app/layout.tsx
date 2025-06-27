import type { Metadata } from 'next'
import './globals.css'
import '@/styles/scroll-animations.css'
import ScrollAnimationInitializer from '@/components/scroll-animation-initializer'

export const metadata: Metadata = {
  title: 'Pravāha | Automation Services',
  description: 'Flow-based automation solutions for modern teams.',
  icons: {
    icon: 'https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Pravahaicon2.png', // or .ico/.png
  },
  other: {
    'google-site-verification': 'tGcAIDiJRujvKvKOytSe1vsPK4sUnJ-ZFAblVyugNZ8'
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollAnimationInitializer />
      </body>
    </html>
  )
}
