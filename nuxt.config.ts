// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    css: [
        'bootstrap/dist/css/bootstrap.min.css'
    ],
    dir: {
        'middleware': 'middlewares',
    },
    hooks: {
        'pages:extend': (pages) => {
            pages.push(
                {
                    name: 'AccountSignin',
                    path: '/account/signin',
                    file: '~/features/account/views/signin.vue',
                },
                {
                    name: 'AccountSignup',
                    path: '/account/signup',
                    file: '~/features/account/views/signup.vue',
                },
                {
                    name: 'AccountRecovery',
                    path: '/account/recovery',
                    file: '~/features/account/views/recovery.vue',
                },
            );
        },
    }
});
