// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = 'https://www.emanuelegian.com'
const baseURL = process.env.NUXT_APP_BASE_URL || '/'
const defaultTitle =
  'Emanuele Gian — E-commerce, web development & electronic craft'
const defaultDescription =
  'Emanuele Gian (EG-Lab): e-commerce and web development (PHP, Laravel, Magento / Adobe Commerce) and electronics. Italian, based in Poland.'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  app: {
    baseURL,
    head: {
      title: defaultTitle,
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: defaultDescription },
        {
          name: 'keywords',
          content:
            'Emanuele Gian, EG-Lab, Magento, Adobe Commerce, Laravel, PHP, e-commerce, electronics, Poland',
        },
        { name: 'author', content: 'Emanuele Gian' },
        { name: 'theme-color', content: '#f2f2f0' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:title', content: defaultTitle },
        { property: 'og:description', content: defaultDescription },
        { property: 'og:site_name', content: 'Emanuele Gian' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:locale:alternate', content: 'it_IT' },
        { property: 'og:locale:alternate', content: 'pl_PL' },

        // Twitter
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: defaultTitle },
        { name: 'twitter:description', content: defaultDescription },
      ],
      link: [
        { rel: 'canonical', href: siteUrl },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&display=swap',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Emanuele Gian',
            url: siteUrl,
            email: 'mailto:emanuele@emanuelegian.com',
            jobTitle: 'E-commerce & web developer',
            description: defaultDescription,
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'PL',
            },
            nationality: 'Italian',
            knowsAbout: [
              'E-commerce',
              'Magento',
              'Adobe Commerce',
              'Laravel',
              'PHP',
              'Electronics',
              'RF',
            ],
            sameAs: ['https://www.linkedin.com/in/emanuelegian'],
            worksFor: {
              '@type': 'Organization',
              name: 'EG-Lab',
            },
          }),
        },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'static',
  },

  // Avoid EMFILE watching agent skill trees / lockfiles
  watch: ['!~/../.agents/**', '!~/../skills-lock.json'],

  vite: {
    server: {
      watch: {
        ignored: ['**/.agents/**', '**/skills-lock.json', '**/.git/**'],
      },
    },
  },
})
