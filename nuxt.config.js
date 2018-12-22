module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Geek4Geek',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'deion', name: 'deion', content: 'Nuxt.js project' }
    ],
    : [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' },
      { src: 'https://code.jquery.com/ui/1.12.1/jquery-ui.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.jquery.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.proto.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /**
   * Global CSS
   */
  css: [
  ],
  
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: {
      allChunks: true
    },
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

