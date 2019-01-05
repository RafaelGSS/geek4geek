module.exports = {
  /**
   * Router config
   */
  // router: {
  //   middleware: 'cart-shopping',
  // },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: 'Geek4Geek - %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'deion', name: 'deion', content: 'Nuxt.js project' }
    ],
    script  : [
      {
        src: "https://code.jquery.com/jquery-3.3.1.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      },
      { src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href:
        "https://unpkg.com/ionicons@4.5.0/dist/css/ionicons.min.css"
      }
    ],
  },
  plugins:[
    {src: 'plugins/vue-carousel.js', ssr: false},
    {src: 'plugins/vue-notifications.js', ssr: false}
  ],
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
    extend (config, { isDev, isClient }) {
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

