module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Geek4Geek - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'deion', name: 'deion', content: 'Geek4Geek o melhor ecommerce geek do Brasil!' }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.min.js",
        type: "text/javascript"
      },
      {
        src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js',
        type: "text/javascript"
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.png' },
      {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      }
    ],
  },
  plugins: [
    { src: 'plugins/vue-carousel.js', ssr: false },
    { src: 'plugins/vue-notifications.js', ssr: false },
    { src: 'plugins/vue-loading-spinner.js', ssr: false },
    { src: 'plugins/vue-content-placeholders.js', ssr: false },
  ],
  /**
   * Add modules extern
   */
  modules: [
    'nuxt-client-init-module',
    '@nuxtjs/apollo'
  ],

  /**
   * Apollo Configuration
   */
  apollo: {
    tokenName: 'yourApolloTokenName', // optional, default: apollo-token
    // tokenExpires: 10, // optional, default: 7 (days)
    includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    // authenticationType: 'Basic', // optional, default: 'Bearer'
    // optional
    errorHandler(error) {
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    },
    // required
    clientConfigs: {
      default: {
        // required  
        httpEndpoint: 'http://localhost:3000',
        // optional
        // See https://www.apollographql.com/docs/link/links/http.html#options
        httpLinkOptions: {
          credentials: 'same-origin'
        },
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        wsEndpoint: 'ws://localhost:4000', // optional
        // LocalStorage token
        tokenName: 'apollo-token', // optional
        // Enable Automatic Query persisting with Apollo Engine
        persisting: false, // Optional
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        websocketsOnly: false // Optional
      },
      // test: {
        // httpEndpoint: 'http://localhost:5000',
        // wsEndpoint: 'ws://localhost:5000',
        // tokenName: 'apollo-token'
      // },
      // alternative: user path to config which returns exact same config options
      // test2: '~/plugins/my-alternative-apollo-config.js'
    }
  },

  /**
   * Global CSS
   */
  css: ['~assets/main.css', '~assets/responsive.css', '~assets/icons.css'],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /**
   * Set position scrol after link
   * Router Config
   */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

