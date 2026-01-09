'use client'

import { Suspense, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    // Handle redirects from 404 page
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const redirectPath = urlParams.get('p')
      
      if (redirectPath && pathname === '/') {
        window.history.replaceState({}, '', redirectPath)
      }
    }
  }, [pathname])

  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  )
}