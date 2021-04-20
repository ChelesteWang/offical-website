export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '北京凿山人科技',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '专注于新一代软件与商业模式' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  router: {
    middleware: 'i18n'
  },

  plugins: [
    '@/plugins/i18n.js',
    { src: '~/plugins/ElementUI', ssr: true },
    { src: '~/plugins/Carousel3d', ssr: false }
  ],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/static/css/font.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)


  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    vendor: ['element-ui']
  }
}
