import '../globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Navbar from '../../components/Navbar'
import Providers from '../../components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chandrashekhar Marella | Coder, Blogger',
  description: 'Chandrashekhar Marella | Coder, Blogger',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html>    
      <body className ='flex flex-col min-h-screen h-auto justify-between'>
        <Providers>
          <Navbar/>
          <main className ='my-auto flex-grow'>
            { children }            
          </main>             
        </Providers>
      </body>
    </html>
  )
}
