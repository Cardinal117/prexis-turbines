export const getBasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/prexis-turbines' : ''
}

export const withBasePath = (path: string) => {
  const base = getBasePath()
  return `${base}${path}`
}