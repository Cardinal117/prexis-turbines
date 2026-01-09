'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './button'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { getBasePath } from '@/lib/paths'

interface NavbarProps {
  currentPage?: string
}

export function Navbar({ currentPage }: NavbarProps) {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  const basePath = getBasePath()
  const currentPath = pathname.replace(basePath, '') || '/'

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/'
    }
    return currentPath === href || currentPath.startsWith(href + '/')
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200"
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href='/'>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src='/Logo.png'
                  alt="Prexis Turbines"
                  width={280}
                  height={88}
                  className="h-14 sm:h-16 w-auto max-w-[140px] sm:max-w-[180px] lg:max-w-[220px] object-contain cursor-pointer"
                />
              </motion.div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors ${
                    isActive(item.href) 
                      ? 'text-yellow-600 font-semibold' 
                      : 'text-slate-600 hover:text-yellow-600'
                  }`}
                >
                  <motion.span whileHover={{ y: -2 }}>
                    {item.name}
                  </motion.span>
                </Link>
              ))}
              <Link href='/contact'>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 sm:px-6 text-sm sm:text-base">
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-600" />
              ) : (
                <Menu className="h-6 w-6 text-slate-600" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/20 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-xl z-50 pt-20"
            >
              <div className="p-4 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold text-slate-900">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6 text-slate-600" />
                  </button>
                </div>
                
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive(item.href) 
                          ? 'bg-yellow-50 text-yellow-600 font-semibold border-l-4 border-yellow-500' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  <div className="pt-4 mt-4 border-t border-slate-200">
                    <Link
                      href='/contact'
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block"
                    >
                      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}