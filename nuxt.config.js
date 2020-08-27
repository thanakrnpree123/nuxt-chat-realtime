export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['ant-design-vue/dist/antd.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/antd-ui', '@/plugins/firebase.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  firebase: {
    config: {
      apiKey: 'AIzaSyDgCHhm23UXnnmGoFBXU_BY2OWRob9ODVU',
      authDomain: 'nuxt-chat-1c586.firebaseapp.com',
      databaseURL: 'https://nuxt-chat-1c586.firebaseio.com',
      projectId: 'nuxt-chat-1c586',
      storageBucket: 'nuxt-chat-1c586.appspot.com',
      messagingSenderId: '138805743401',
      appId: '1:138805743401:web:467a233e0d0d5d495f3138',
      measurementId: 'G-MBE6VH7CPB',
    },
    services: {
      auth: true,
      firestore: true,
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
