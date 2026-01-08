'use client'

import { motion } from 'framer-motion'
import { Button } from './button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavbarProps {
  currentPage?: string
}

export function Navbar({ currentPage }: NavbarProps) {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/Logo.png"
                alt="Prexis Turbines"
                width={320}
                height={100}
                className="h-20 w-auto object-contain cursor-pointer"
              />
            </motion.div>
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  isActive(item.href) 
                    ? 'text-yellow-600 font-semibold' 
                    : 'text-slate-600 hover:text-yellow-600'
                }`}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <Link href="/contact">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
