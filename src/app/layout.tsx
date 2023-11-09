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
      <body className={`${inter.className} bg-black`}>
        
        <div className="sm:w-max sm:flex sm:flex-row w-full bg-black" role='main'>
          
          <div className='lg:w-1/5 sm:w-1/3 w-full'>
            <SideNav />
          </div>
          
          <div className="lg:w-4/5 sm:w-2/3 w-full flex flex-col">
          
            <Header />
            
            {children}
            
            <Footer />

          </div>
        </div>

      </body>
    </html>
  )
}
