import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prexis Turbines - Advanced Energy Solutions',
  description: 'Prexis Turbines, a division of Prexis (Pty) Ltd., is Africa\'s leading gas turbine manufacturer, providing innovative energy solutions for power generation.',
  keywords: 'gas turbines, steam turbines, wind turbines, hydro turbines, power generation, renewable energy, Africa',
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
