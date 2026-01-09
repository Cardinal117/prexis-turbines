export const getBasePath = (): string => {
  if (typeof window !== 'undefined') {
    // Client-side: check current URL
    const isProduction = window.location.hostname.includes('github.io')
    return isProduction ? '/prexis-turbines' : ''
  }
  // Server-side or build time
  return process.env.NODE_ENV === 'production' ? '/prexis-turbines' : ''
}

export const withBasePath = (path: string): string => {
  const base = getBasePath()
  return `${base}${path}`
}