import fetch from 'node-fetch';

export default {
    target: 'static',
    head: {
        title: 'Venture Plans',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            { hid: 'language', name: 'language', content: 'English' },
            { hid: 'og:title', property: 'og:title', content: 'Venture Plans' },
            {
                hid: 'description',
                property: 'description',
                content: 'Venture Plans is a global consulting firm with Ivy League-trained experts in finance, legal advisory, and digital innovation. We deliver value-based solutions to maximize business performance and outcomes.',
            },
            {
                hid: 'keywords',
                property: 'keywords',
                content: 'Venture Plans, ventureplans',
            },
            {
                hid: 'og:description',
                property: 'og:description',
                content: 'Venture Plans is a global consulting firm with Ivy League-trained experts in finance, legal advisory, and digital innovation. We deliver value-based solutions to maximize business performance and outcomes.',
            },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0' },

            { hid: 'og:type', property: 'og:type', content: 'website' },
            { hid: 'og:site_name', property: 'og:site_name', content: 'Venture Plans' },
            { hid: 'og:url', property: 'og:url', content: process.env.FE_BASE_URL || 'https://www.ventureplans.us' },
            { hid: 'og:image', property: 'og:image', content: `${process.env.FE_BASE_URL}/images/og-social.png` },
            { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: `${process.env.FE_BASE_URL}/images/og-social.png` },
            { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
            { hid: 'og:image:height', property: 'og:image:height', content: '630' },

            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Venture Plans' },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'Venture Plans is a global consulting firm with Ivy League-trained experts in finance, legal advisory, and digital innovation. We deliver value-based solutions to maximize business performance and outcomes.',
            },
            { hid: 'twitter:image', name: 'twitter:image', content: `${process.env.FE_BASE_URL}/images/og-social.png` },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        script: [
            {
                type: 'text/javascript',
                src: 'https://www.recaptcha.net/recaptcha/api.js?render=onloadcallback',
                async: true,
                defer: true,
            },
        ],
    },

    error: {
        statusCode: 404,
    },

    env: {
        CTF_SPACE_ID: process.env.CTF_SPACE_ID,
        CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
        CTF_ENVIRONMENT: process.env.CTF_ENVIRONMENT,
        APP_URL: process.env.APP_URL,
        strapiReadOnlyToken: process.env.STRAPI_TOKEN,
        strapiURL: process.env.STRAPI_URL,
        meiliSearchURL: process.env.MEILISEARCH_URL,
        baseUrl: process.env.FE_BASE_URL,
    },
    privateRuntimeConfig: {},
    publicRuntimeConfig: {
        baseUrl: process.env.FE_BASE_URL,
        meiliSearchURL: process.env.MEILISEARCH_URL,
        hubspotApiURL: 'https://api.hsforms.com/submissions/v3/integration/submit', // process.env.HUBSPOT_API_URL,
        hubspotPortalId: 22527844, // process.env.HUBSPOT_PORTAL_ID,
        hubspotSubscribeFormId: 'edadd1d4-65e8-4612-93dc-2f2d480c7f4b', // process.env.HUBSPOT_SUBSCRIBE_FORM_ID,
        hubspotEBookSubscribeFormId: 'e56dfa21-b517-44e0-8640-c22c3d41b5d9', // process.env.HUBSPOT_E_BOOK_SUBSCRIBE_FORM_ID,
        hubspotReadyToTalkFormId: '343cf3f8-1c3e-406b-bf4b-790634c8f3c0', // process.env.HUBSPOT_READY_TO_TALK_FORM_ID,
        hubspotJoinEventFormId: 'efd9f509-1260-4981-b1ea-ee42cb942c46', // process.env.HUBSPOT_JOIN_EVENT_FORM_ID,
        hubspotQuestionFormId: '4365a200-4954-4b8b-94bc-ba73649681ce', // process.env.HUBSPOT_QUESTION_FORM_ID,
        hubspotCareerQuestionsFormId: 'cbd13f18-1bd5-4a58-8a34-f4dbdbc8b0e8', // process.env.HUBSPOT_CAREER_QUESTION_FORM_ID,
        contactUsBannerFormId: 'bd6a8f0c-07be-4d39-9081-601784e3f0c2', // process.env.CONTACT_US_BANNER_FORM_ID,
        tellUsMoreAboutYourProjectFormId: '80d99732-69dc-4a6f-9a83-86060b94df62',
        hubspotSubscribePageFormId: '9bfca9ab-6add-4400-b6a7-e66e1f3a840a',
        grantServiceQuestionsFormId: '2e2fb619-4033-475f-828a-21019751ff55', // process.env.HUBSPOT_GRANT_SERVICE_QUESTION_FORM_ID,
        carrersQuestionsFormId: '9adbfa40-4d5a-4e09-9758-19d0d749e557',
        careersSubmitFormId: '82709fac-10a6-4266-9b15-7a3c33a12faf',
        homepageQuestionsFormId: '965b7757-33e7-41b8-ad2e-c1506272caaa',
        googleAdQuestionsFormId: '527856e8-0931-4efe-837b-871ff25bf537',
        isDevMode: process.env.API_URL === 'http://localhost:3000',
        strapiReadOnlyToken: process.env.STRAPI_TOKEN,
        strapiURL: process.env.STRAPI_URL,
    },

    css: ['~/assets/css/tailwind.css'],

    plugins: [
        { src: '~/plugins/axios.js' },
        { src: '~/plugins/lazyload-bg.js', mode: 'client' },
        { src: '~/plugins/lazyload-img.js', mode: 'client' },
        { src: '~/plugins/vue-awesome-swiper.js' },
        { src: '~/plugins/vue-the-mask' },
        { src: '~/plugins/vue-vuelidate.js' },
        { src: '~/plugins/factory.js' },
        { src: '~/plugins/vue-multiselect.js' },
        { src: '~/plugins/popper.js' },
        { src: '~/plugins/vue-scroll-active.js' },
        { src: '~/plugins/fast.wistia-script.js', mode: 'client' },
        { src: '~/plugins/google-tag-manager.js', mode: 'client' },
        { src: '~/plugins/script-loader.js', mode: 'client' },
    ],

    components: true,

    buildModules: ['@nuxt/postcss8', '@nuxtjs/composition-api/module', 'nuxt-compress'],

    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        '@nuxtjs/toast',
        '@nuxtjs/i18n',
        '@nuxtjs/dayjs',
        '@nuxtjs/strapi',
        'cookie-universal-nuxt',
        '@nuxtjs/recaptcha',
        '@nuxtjs/sitemap',
        'nuxt-compress',
        [
            '@nuxtjs/robots',
            {
                UserAgent: '*',
                Disallow: ['/_ipx/', '/search*/'],
                Sitemap: (req) => `${process.env.FE_BASE_URL}/sitemap.xml`,
            },
        ],
    ],

    recaptcha: {
        // siteKey: '6LeHRAIkAAAAAFlMcNTurod0E0Wo7-vL0ZBgPEUY',
        siteKey: '6LeOh1EpAAAAAHvF8Sa9kwfPok7Q-k_L6biNhhxG',
        version: 2,
    },

    strapi: {
        url: process.env.STRAPI_URL,
        meiliSearchURL: process.env.MEILISEARCH_URL,
    },

    // Optional
    dayjs: {
        defaultLocale: 'en',
        locales: ['en'],
        plugins: ['utc', 'timezone'],
    },

    i18n: {
        locales: [
            {
                code: 'en',
                file: 'en.js',
                name: 'English',
                iso: 'en',
                domain: process.env.APP_URL,
            },
        ],
        strategy: 'prefix_and_default', // prefix_and_default
        // lazy: true,
        parsePages: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        fallbackLocale: {
            default: 'en',
        },
    },

    generate: {
        routes: async () => {
            const routes = [];
            const apiUrl = process.env.STRAPI_URL;
            const authToken = process.env.STRAPI_TOKEN;
            const collectionEndpoint = `${apiUrl}/api/base-urls`;
            const response = await fetch(collectionEndpoint, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                return routes;
            }
            const data = await response.json();
            if (data && data.data && Array.isArray(data.data)) {
                for (const dat of data.data) {
                    if (!routes.includes(dat.attributes.url)) {
                        routes.push(dat.attributes.url);
                    }
                }
            }
            if (data.meta.pagination.pageCount > 1) {
                for (let page = 2; page <= data.meta.pagination.pageCount; page++) {
                    const apiUrl = process.env.STRAPI_URL;
                    const authToken = process.env.STRAPI_TOKEN;
                    const collectionEndpoint = `${apiUrl}/api/base-urls?pagination[pageSize]=100&pagination[page]=` + page;
                    const response = await fetch(collectionEndpoint, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                            'Content-Type': 'application/json',
                        },
                    });
                    if (!response.ok) {
                        console.log('Network response was not ok');
                        return routes;
                    }
                    const data = await response.json();
                    if (data && data.data && Array.isArray(data.data)) {
                        for (const dat of data.data) {
                            if (!routes.includes(dat.attributes.url)) {
                                routes.push(dat.attributes.url);
                            }
                        }
                    }
                }
            }
            return routes;
        },
        cacheTime: 7200000,
    },

    sitemap: {
        hostname: 'https://ventureplans.us',
        gzip: true,
        routes: async () => {
            const routes = [
                '/about-us',
                '/about-us/what-we-do',
                '/about-us/our-team',
                '/about-us/our-leadership',
                '/about-us/founders-bio',
                '/consulting',
                '/consulting/management-consulting',
                '/consulting/restructuring-operations',
                '/consulting/digital-marketing',
                '/consulting/revenue-growth',
                '/consulting/agile-implementation',
                '/consulting/transformation-modification-and-integration',
                '/consulting/customer-experience',
                '/consulting/financial-advisory',
                '/consulting/strategy',
                '/consulting/human-resources',
                '/consulting/industries',
                '/consulting/cannabis-licensing-and-application-support',
                '/consulting/new-start-up-technology',
                '/consulting/business-plans',
                '/consulting/business-plans/investor-business-plans',
                '/consulting/business-plans/immigration-business-plans',
                '/consulting/business-plans/e-2-business-plans',
                '/consulting/business-plans/e-b1-business-plans',
                '/consulting/business-plans/e-b5-business-plans',
                '/consulting/business-plans/l-1a-and-l-1b-business-plans',
                '/consulting/business-plans/sba-lender-business-plans',
                '/consulting/business-plans/marketing-plan',
                '/consulting/business-plans/restructuring-business-plan',
                '/consulting/business-plans/franchising-plan',
                '/consulting/business-plans/cannabis-business-plan',
                '/consulting/business-plans/request-for-proposal',
                '/consulting/business-plans/grant-business-plans',
                '/consulting/business-plans/investor-pitch-deck',
                '/consulting/business-plans/financial-performa',
                '/consulting/business-plans/prospectus',
                '/consulting/business-plans/white-papers',
                '/financing',
                '/financing/private-placements',
                '/financing/due-diligence-certification',
                '/financing/debt-financing',
                '/financing/initial-public-offering',
                '/financing/pre-ipo',
                '/financing/special-purpose-entity',
                '/financing/crowdfunding',
                '/financing/invest',
                '/financing/regulation-d',
                '/financing/regulation-d/reg-a%2B',
                '/financing/regulation-d/506-b-relationship-investors',
                '/financing/regulation-d/506-c-accredited-investors',
                '/financing/private-placement-memorandum',
                '/financing/private-equity',
                '/financing/private-equity/leverage-buyout',
                '/financing/private-equity/hedge-fund',
                '/financing/private-equity/venture-capital-fund',
                '/financing/private-equity/growth-capital',
                '/financing/private-equity/real-estate',
                '/financing/private-equity/infrastructure',
                '/financing/private-equity/funds-of-funds',
                '/financing/private-equity/mezzanine-capital',
                '/financing/private-equity/distressed-private-equity',
                '/financing/private-equity/seconday-fund',
                '/financing/mergers-and-acquisitions',
                '/financing/mergers-and-acquisitions/post-merger-inegration',
                '/financing/mergers-and-acquisitions/Divestitures',
                '/financing/due-diligence-certification',
                '/financing/regulation-s-offshore-offering',
                '/financing/investment-portfolio-management',
                '/financing/forensic-accounting',
                '/financing/real-estate-investment-trust-fund',
                '/financing/securitization',
                '/legal-advisory',
                '/legal-advisory/intellectual-property',
                '/legal-advisory/intellectual-property/utility-patent',
                '/legal-advisory/intellectual-property/design-patent',
                '/legal-advisory/intellectual-property/plant-patent',
                '/legal-advisory/intellectual-property/provisional-and-non-provisional',
                '/legal-advisory/trademark',
                '/legal-advisory/copyright',
                '/legal-advisory/convertible-notes',
                '/legal-advisory/chapter-11-bankruptcy',
                '/legal-advisory/commodity-and-futures-contract',
                '/legal-advisory/initial-public-offering',
                '/legal-advisory/private-place-memorandum',
                '/legal-advisory/mergers-and-acquisitions',
                '/legal-advisory/securities-arbitration',
                '/legal-advisory/offering-memorandum-canada',
                '/legal-advisory/legal-entity-structuring',
                '/technology',
                '/technology/agile',
                '/technology/agile/software-budgeting-and-financials',
                '/technology/agile/prototypes',
                '/technology/agile/backlog-feature-implementation',
                '/technology/agile/functional-specification',
                '/technology/custom-design-and-build',
                '/technology/agile-implementation',
                '/technology/data-analytics-implementation',
                '/insights',
                '/careers',
                '/careers/explore-roles',
                '/careers/explore-roles/associate-consultant-intern',
                '/careers/explore-roles/associate-consultant',
                '/careers/explore-roles/summer-associate',
                '/careers/explore-roles/consultant',
                '/careers/explore-roles/advanced-degree-holders',
                '/careers/explore-roles/working-professionals',
                '/careers/explore-roles/analytics-and-customer-insights',
                '/careers/explore-roles/digital-and-innovation',
                '/careers/explore-roles/business-services',
                '/careers/meet-us',
                '/careers/meet-us/at-an-event',
                '/careers/meet-us/our-people',
                '/careers/prepare-for-an-interview',
                '/careers/prepare-for-an-interview/case-interview',
                '/careers/prepare-for-an-interview/experience-interview',
                '/careers/prepare-for-an-interview/other-interview-formats',
                '/consulting/market-data-plans',
                '/consulting/market-data-plans/data-industry-reports',
                '/consulting/market-data-plans/feasibility-reports',
                '/consulting/market-data-plans/etf-and-stock-market-reports',
                '/consulting/market-data-plans/covid-19-market-reports',
            ];
            const apiUrl = process.env.STRAPI_URL;
            const authToken = process.env.STRAPI_TOKEN;
            const collectionEndpoint = `${apiUrl}/api/base-urls`;
            const response = await fetch(collectionEndpoint, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                console.log('Network response was not ok');
                return routes;
            }
            const data = await response.json();
            if (data && data.data && Array.isArray(data.data)) {
                for (const dat of data.data) {
                    if (!routes.includes(dat.attributes.url)) {
                        routes.push(dat.attributes.url);
                    }
                }
            }
            if (data.meta.pagination.pageCount > 1) {
                for (let page = 2; page <= data.meta.pagination.pageCount; page++) {
                    const apiUrl = process.env.STRAPI_URL;
                    const authToken = process.env.STRAPI_TOKEN;
                    const collectionEndpoint = `${apiUrl}/api/base-urls?pagination[pageSize]=100&pagination[page]=` + page;
                    const response = await fetch(collectionEndpoint, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${authToken}`,
                            'Content-Type': 'application/json',
                        },
                    });
                    if (!response.ok) {
                        console.log('Network response was not ok');
                        return routes;
                    }
                    const data = await response.json();
                    if (data && data.data && Array.isArray(data.data)) {
                        for (const dat of data.data) {
                            if (!routes.includes(dat.attributes.url)) {
                                routes.push(dat.attributes.url);
                            }
                        }
                    }
                }
            }
            return routes;
        },
        cacheTime: 7200000,
        filter({ routes }) {
            const locales = ['en', 'pt-br', 'es', 'es-ar', 'es-co', 'es-cl', 'fr', 'de-ch', 'it', 'es', 'ru', 'zh', 'ko', 'ja', 'zh-tw', 'zh-hk'];
            return routes.filter((route) => {
                for (const locale of locales) {
                    if (route.path && (route.path.includes('/' + locale + '/') || route.path.endsWith('/' + locale))) {
                        return false;
                    } else if (route.url && (route.url.includes('/' + locale + '/') || route.url.endsWith('/' + locale))) {
                        return false;
                    }
                }

                return true;
            });
        },
    },

    axios: {
        baseURL: process.env.STRAPI_URL,
    },

    auth: {
        localStorage: false,

        cookie: {
            prefix: process.env.COOKIE_PREFIX,
            options: {
                maxAge: 31536000, // 1 year
                secure: process.env.COOKIE_SECURE,
            },
        },

        redirect: {
            login: '/login',
            logout: '/login',
            home: '/',
        },

        strategies: {
            local: {
                token: {
                    property: 'token',
                    maxAge: 31536000, // 1 year
                },

                user: {
                    property: 'data',
                },

                endpoints: {
                    login: { url: '/auth/login', method: 'post' },
                    logout: { url: '/auth/logout', method: 'post' },
                    user: { url: '/auth/user', method: 'get' },
                },
            },
        },
    },

    toast: {
        position: 'top-center',
        duration: 5000,
        singleton: true,
    },

    build: {
        cache: true,
        minifyCSS: true,
        minifyJS: true,
        minimize: true,
        optimizeCSS: true,
        extend(config, { isDev, isClient }) {
            config.performance.hints = false;
            config.resolve.alias['node-fetch-native'] = require.resolve('node-fetch');
            if (isClient) {
                config.devtool = 'source-map';
            }
            if (!isDev && isClient) {
                config.optimization.splitChunks = {
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                            chunks: 'all',
                        },
                    },
                };
            }
        },
        splitChunks: {
            layouts: true,
            pages: true,
            commons: true,
        },
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
};
