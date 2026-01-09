// lib/paths.ts

// For production (GitHub Pages)
const PRODUCTION_BASE = '/prexis-turbines'

export const getBasePath = (): string => {
  if (typeof window === 'undefined') {
    // Build time or server-side
    console.log('Build time - NODE_ENV:', process.env.NODE_ENV)
    return process.env.NODE_ENV === 'production' ? PRODUCTION_BASE : ''
  }

  // Client-side
  console.log('Client-side - hostname:', window.location.hostname)
  console.log('Client-side - pathname:', window.location.pathname)
  return window.location.hostname.includes('github.io') ? PRODUCTION_BASE : ''
}

export const withBasePath = (path: string): string => {
  const base = getBasePath()
  // Don't add base path if it's already there or if it's an external URL
  if (path.startsWith('http') || path.startsWith('//') || path.startsWith(base)) {
    return path
  }
  console.log('withBasePath called:', { path, base, result: `${base}${path}` })
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}

// Special function for images in public folder
export const getImagePath = (imageName: string): string => {
  return withBasePath(`/${imageName}`)
}