import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// metadata setting cho <meta>
export const metadata = {
  title: 'Learn ReactJs with NextJs',
  description: 'lorem ipsum dolor sit amet, consectetur adip',
  keywords: 'lorem ipsum dolor sit amet'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
