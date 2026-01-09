export const getBasePath = (): string => {
  return '' // Always empty on Cloudflare
}

export const withBasePath = (path: string): string => {
  return path // Just return the path as-is
}