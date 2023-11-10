import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { SEO_TITLE, SEO_DESCRIPTION } from '@/utils/config'
import BaseHead from '@/components/headers/BaseHead'
import SideNav from '@/components/nav/SideNav'
import Header from '@/components/headers/Header'
import Footer from '@/components/footer/Footer'
import Login from '@/components/modals/Login'

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
      <body className={`${inter.className}`}>
        
        <div className="sm:w-max sm:flex sm:flex-row w-full bg-black" role='main'>
          
          <div className='sm:w-1/4 w-full'>
            <SideNav />
          </div>
          
          <div className="sm:w-3/4 w-full flex flex-col">
          
            <Header />

            {children}
            
            <Footer />

          </div>
        </div>

      </body>
    </html>
  )
}
