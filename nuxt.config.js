const Sass = require('sass')
const Fiber = require('fibers')

export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'tatsumi-akahori',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            // Montserrat（Italic）
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' }
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "~assets/css/global.css"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module', ['@nuxtjs/fontawesome', { component: 'fontAwesome', suffix: true }],
    ],

    fontawesome: {
        icons: {
            solid: [
                'faEnvelope',
                'faCaretUp'
            ]
        }
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        'nuxt-webfontloader'
    ],

    webfontloader: {
        google: {
            families: [
                'Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap' // Montserrat
            ]
        }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            scss: {
                implementation: Sass,
                sassOptions: {
                    fiber: Fiber
                }
            }
        },
        transpile: ['curtainsjs'],
    }
}