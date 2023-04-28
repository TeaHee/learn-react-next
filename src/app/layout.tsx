import './globals.css'

// import font from lib next 
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['vietnamese'] })
const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin']})

// metadata setting cho <meta>
export const metadata = {
  title: 'Learn ReactJs with NextJs',
  description: 'lorem ipsum dolor sit amet, consectetur adip',
  // keywords dùng cho SEO
  keywords: 'web development, web design, typescript, reactjs, nextjs'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
