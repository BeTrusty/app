function defineNextConfig (config) {
  return config
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  // Next.js i18n docs: https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    locales: ['es-419'],
    defaultLocale: 'es-419'
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'pbs.twimg.com']
  }
})
