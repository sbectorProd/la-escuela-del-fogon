import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'

const degheest = localFont ({ src:'./fonts/Director-Regular.woff2' })


export const metadata: Metadata = {
  title: 'La escuela del fogón',
  description: 'Cocinando la revolución en américa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-amber-50'>
      <body className={degheest.className}>{children}</body>
    </html>
  )
}
