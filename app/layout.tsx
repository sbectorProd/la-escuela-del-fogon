import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import Header from './_components/Header'
import HeaderMobile from './_components/Header-mobile'
import Nav from './_components/Nav'
import PageWrapper from './_components/Page-wrapper'
import MarginWidthWrapper from './_components/Margin-width-wrapper'

const degheest = localFont({ src: './fonts/Director-Regular.woff2' })


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
    <html lang="es" className='relative'>
      <body className={`bg-white ${degheest.className}`}>
        <div className='flex'>
          <Nav />
          <main className='flex-1'>
            <MarginWidthWrapper>
              <HeaderMobile />
              <PageWrapper>
                {children}
              </PageWrapper>
            </MarginWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  )
}
