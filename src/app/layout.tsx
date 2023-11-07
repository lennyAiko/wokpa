import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { SEO_TITLE, SEO_DESCRIPTION } from '@/utils/config'
import BaseHead from '@/components/headers/BaseHead'
import SideNav from '@/components/nav/SideNav'
import Header from '@/components/headers/Header'
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wokpa Podcast App',
  description: 'Podcast owned by Wokpa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <BaseHead 
        title={SEO_TITLE}
        description={SEO_DESCRIPTION}
      />
      <body className={`${inter.className} flex flex-row w-full flex-auto`}>
        
        <div className='lg:w-1/5 md:w-1/3 sm:2/3'>
          <SideNav />
        </div>

        <div className="lg:w-4/5 md:w-2/3 sm:w-1/3 flex flex-col h-screen">
          
          <Header />

          {children}

          <Footer />

        </div> 

      </body>
    </html>
  )
}
