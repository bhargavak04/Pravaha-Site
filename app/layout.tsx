import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pravāha | Automation Services',
  description: 'Flow-based automation solutions for modern teams.',
  icons: {
    icon: 'https://cdn.jsdelivr.net/gh/bhargavak04/Pravaha-Site@main/public/logos/Pravahaicon2.png', // or .ico/.png
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
