export default defineNuxtConfig({
    ssr: false,
    modules: [
        "@kevinmarrec/nuxt-pwa",
        "@nuxtjs/i18n",
        "@pinia/nuxt",
        "nuxt-snackbar",
        "vue3-carousel-nuxt",
        "@nuxtjs/google-fonts",
    ],
    // plugins: [{ src: "~/plugins/chart.js", mode: "client" }],

    pwa: {
        manifest: {
            name: "Lynk",
            description:
                "The safest way to transfer and manage decentralized assets",
            theme_color: "#ffffff",
            background_color: "#fafafa",
        },
    },
    runtimeConfig: {
        public: {
            BASE_API_URL: process.env.BASE_API_URL,
            BASE_APP_URL: process.env.BASE_APP_URL,
        },
    },
    components: [
        { path: "~/components/chartjs", pathPrefix: false },
        "~/components",
    ],
    snackbar: {
        top: true,
        right: true,
        duration: 5000,
    },
    i18n: {
        vueI18n: "./i18n.config.ts", // if you are using custom path, default
        locales: ["en", "zh", "ja", "ko", "id", "vn", "es"], // used in URL path prefix
        defaultLocale: "en", // default locale of your project for Nuxt pages and routings
    },
    devtools: { enabled: true },
    app: {
        head: {
            script: [
                {
                    src: "https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js",
                    type: "text/javascript",
                },
                {
                    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
                    type: "text/javascript",
                },
                {
                    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
                    type: "text/javascript",
                },
            ],
            title: "Lynk Website",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    hid: "description",
                    name: "description",
                    content:
                        "The safest way to transfer and manage decentralized assets ",
                },
                {
                    hid: "og:site_name",
                    property: "og:site_name",
                    content:
                        "The safest way to transfer and manage decentralized assets ",
                },
                { hid: "og:type", property: "og:type", content: "website" },
                {
                    hid: "og:title",
                    property: "og:title",
                    content: "Lynk ",
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content:
                        "The safest way to transfer and manage decentralized assets ",
                },
                {
                    hid: "og:image",
                    property: "og:image",
                    content: "/lynk-share.svg",
                },
                {
                    hid: "og:image:secure_url",
                    property: "og:image:secure_url",
                    content: "/lynk-share.svg",
                },
                {
                    hid: "og:image:alt",
                    property: "og:image:alt",
                    content: "Lynk",
                },
                {
                    name: "theme-color",
                    content: "#ffffff",
                },
            ],
            link: [
                { rel: "preconnect", href: "https://fonts.googleapis.com" },
                { rel: "preconnect", href: "https://fonts.gstatic.com" },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Antonio:wght@100;200;300;400;500;600;700&family=Bebas+Neue&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap",
                },
            ],
        },
    },
    css: ["~/assets/style/main.scss"],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/style/media-queries.scss"; @import "@/assets/style/settings/_setting.global.scss";`,
                },
            },
        },
    },
});
