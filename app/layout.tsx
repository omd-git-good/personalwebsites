import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Om Dhomne',
  description: 'Personal website and portfolio of Om Dhomne',
  metadataBase: new URL('https://omdhomne.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${inter.className} bg-black min-h-screen`}>{children}</body>
    </html>
  )
}

