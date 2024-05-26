export default {
    server: {
        // host: 0,
    },
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
            { hid: 'og:image', property: 'og:image', content: 'https://venture.vercel.app/assets/img/social.png' },
            { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://venture.vercel.app/assets/img/social.png' },
            { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
            { hid: 'og:image:height', property: 'og:image:height', content: '630' },

            { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { hid: 'twitter:title', name: 'twitter:title', content: 'Venture Plans' },
            {
                hid: 'twitter:description',
                name: 'twitter:description',
                content: 'Venture Plans is a global consulting firm with Ivy League-trained experts in finance, legal advisory, and digital innovation. We deliver value-based solutions to maximize business performance and outcomes.',
            },
            { hid: 'twitter:image', name: 'twitter:image', content: 'https://venture.vercel.app/assets/img/social.png' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'preconnect',
                href: 'https://fonts.googleapis.com',
            },
            {
                rel: 'preconnect',
                href: 'https://fonts.gstatic.com',
                crossorigin: true,
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap',
            },
        ],
        script: [
            {
                type: 'text/javascript',
                src: 'https://www.recaptcha.net/recaptcha/api.js?render=onloadcallback',
                async: true,
                defer: true,
            },
        ],
    },

    env: {
        CTF_SPACE_ID: process.env.CTF_SPACE_ID,
        CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
        CTF_ENVIRONMENT: process.env.CTF_ENVIRONMENT,
        APP_URL: 'http://localhost:3000',
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

    router: {
        middleware: 'route',
    },

    plugins: [
        { src: '~/plugins/axios.js' },
        { src: '~/plugins/vue-awesome-swiper.js' },
        { src: '~/plugins/vue-the-mask' },
        { src: '~/plugins/vue-vuelidate.js' },
        { src: '~/plugins/factory.js' },
        { src: '~/plugins/vue-multiselect.js' },
        { src: '~/plugins/popper.js' },
        { src: '~/plugins/vue-flatpickr.js' },
        { src: '~/plugins/vue-scroll-active.js' },
        { src: '~/plugins/vue-apexcharts.js', mode: 'client' },
        { src: '~/plugins/vue-slide-toggle.js' },
    ],

    components: true,

    buildModules: ['@nuxt/postcss8', '@nuxtjs/composition-api/module', 'nuxt-compress'],

    modules: [
        '@nuxtjs/axios',
        '@nuxt/image',
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
                Disallow: '',
                Sitemap: (req) => `https://${req.headers.host}/sitemap.xml`,
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
        // defaultTimeZone: 'UTC',
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

    image: {
        strapi: {
            baseURL: '/static/assets/img',
        },
        domains: ['fs1.hubspotusercontent-na1.net'],
    },

    generate: {
        routes: async () => {
            const routes = [
                '/cities/maryland',
                '/media',
                '/industries/chemicals',
                '/consulting/business-plans/restructuring-business-plan',
                '/cities/rochester',
                '/insights/top-10-emerging-industries-of-the-future',
                '/cities/dallas',
                '/careers/prepare-for-an-interview/other-interview-formats',
                '/cities/pennsylvania',
                '/consulting/business-plans/sba-lender-business-plans',
                '/subscribe',
                '/cities/cincinnati',
                '/about-us/financing/real-estate-investment-trust-fund',
                '/financing/special-purpose-entity',
                '/industries/big-data-analytics',
                '/cities/san-antonio',
                '/cities/atlanta',
                '/legal-advisory/intellectual-property',
                '/financing/private-equity/leverage-buyout',
                '/financing/invest',
                '/financing/regulation-d/506-c-accredited-investors',
                '/financing/private-equity/mezzanine-capital',
                '/cities/boston',
                '/technology/agile/functional-specification',
                '/privacy-policy',
                '/financing/crowdfunding',
                '/book-consult',
                '/technology',
                '/cities/san-diego',
                '/cities/san-jose',
                '/cities/houston',
                '/cities/texas',
                '/consulting/business-plans/eb1-business-plans',
                '/cities/massachusetts',
                '/financing/private-equity/funds-of-funds',
                '/consulting/business-plans/investor-business-plans',
                '/cities/califonia',
                '/about-us/what-we-do',
                '/careers/meet-us',
                '/consulting/business-plans/financial-performa',
                '/consulting/human-resources',
                '/industries/retail',
                '/consulting/strategy',
                '/about-us/founders-bio',
                '/reviews',
                '/consulting/business-plans/l-1a-and-l-1b-business-plans',
                '/financing/exit-planning',
                '/industries/financial-services',
                '/cities/louisiana',
                '/insights/top-five-tips-for-recruiting-talented-hires-to-your-company',
                '/careers/explore-roles/summer-associate',
                '/cities/miami',
                '/legal-advisory/convertible-notes',
                '/consulting/business-plans/immigration-business-plans',
                '/cities/manhattan',
                '/financing/mergers-and-acquisitions/divestitures',
                '/Business-Plans/financing/real-estate-investment-trust-fund',
                '/careers/explore-roles/advanced-degree-holders',
                '/cities/las-vegas',
                '/technology/financing/real-estate-investment-trust-fund',
                '/cities/seattle',
                '/cities/cleveland',
                '/legal-advisory/securities-arbitration',
                '/cities/cupertino',
                '/consulting/agile-implementation',
                '/market-data-plans',
                '/financing/commercial-banking',
                '/offices',
                '/insights',
                '/financing/financing/real-estate-investment-trust-fund',
                '/contact-us',
                '/cities/austin',
                '/financing/spv-formation',
                '/consulting/market-data-plans/covid-19-market-reports',
                '/consulting/restructuring-operations',
                '/technology/agile/software-budgeting-and-financials',
                '/legal-advisory/Copyright',
                '/industries',
                '/consulting/business-plans/Financial-Pro-Forma',
                '/industries/transportation',
                '/careers/explore-roles/analytics-and-customer-insights',
                '/cities/san-francisco',
                '/our-leadership',
                '/industries/media-and-entertainment',
                '/refund-policy',
                '/cities',
                '/legal-advisory/commodity-and-futures-contract',
                '/consulting/digital-marketing',
                '/financing/private-equity',
                '/careers/meet-us/our-people',
                '/financing/regulation-s-offshore-offering',
                '/financing/private-placements',
                '/Financing/Private-Equity',
                '/cities/indiana',
                '/cities/tampa-bay',
                '/consulting/industries',
                '/legal-advisory/financing/real-estate-investment-trust-fund',
                '/cities/charlotte',
                '/consulting/business-plans/e-b5-business-plans',
                '/financing/mergers-and-acquisitions/post-merger-inegration',
                '/consulting/business-plan/restructuring-business-plan',
                '/Financing/financing/real-estate-investment-trust-fund',
                '/technology/agile/backlog-feature-implementation',
                '/technology/custom-design-and-build',
                '/consulting/business-plans/white-papers',
                '/industries/artificial-intelligence',
                '/cities/new-york',
                '/consulting/financial-advisory',
                '/industries/utilities-and-renewable',
                '/careers/explore-roles',
                '/cities/west-hollywood',
                '/cities/columbus',
                '/industries/automotive-and-mobility',
                '/about-us/our-leadership',
                '/cities/nashville',
                '/technology/agile/prototypes',
                '/technology/data-analytics-implementation',
                '/financing/pre-ipo',
                '/consulting/business-plans/investor-pitch-deck',
                '/consulting/business-plans/Investor-business-plans',
                '/consulting/business-plans',
                '/consulting/business-plans/cannabis-business-plan',
                '/technology/agile',
                '/cities/detroit',
                '/financing/mergers-and-acquisitions/Divestitures',
                '/financing/regulation-d/506-b-relationship-investors',
                '/careers/explore-roles/business-services',
                '/careers/prepare-for-an-interview',
                '/financing/private-equity/growth-capital',
                '/financing/mergers-and-acquisitions',
                '/about-us/our-team',
                '/financing/debt-financing',
                '/cities/tennessee',
                '/consulting/market-data-plans/data-industry-reports',
                '/industries/cybersecurity',
                '/legal-advisory/copyright',
                '/legal-advisory/initial-public-offering',
                '/financing/private-equity/venture-capital-fund',
                '/consulting/business-plans/grant-business-plans',
                '/financing/due-diligence-certification',
                '/industries/aviation',
                '/legal-advisory/legal-entity-structuring',
                '/insights/Investors-as-Engines-for-A-Strong-Economy',
                '/careers',
                '/consulting/business-plans/request-for-proposal',
                '/cities/tacoma',
                '/financing/sba-financing',
                '/cities/berkely',
                '/industries/social-and-public-sectors',
                '/cities/michigan',
                '/cities/beverly-hills',
                '/cities/denver',
                '/financing/initial-public-offering',
                '/industries/infrastructure-construction-and-building-products',
                '/consulting/customer-experience',
                '/cities/philadelphia',
                '/legal-advisory/private-place-memorandum',
                '/careers/explore-roles/associate-consultant-intern',
                '/Business-Plans/Request-for-Proposals-Government-Bids',
                '/cities/florida',
                '/industries/technology',
                '/legal-advisory/chapter-11-bankruptcy',
                '/legal-advisory/mergers-and-acquisitions',
                '/cities/new-orleans',
                '/consulting/cannabis-licensing-and-application-support',
                '/technology/agile-implementation',
                '/cities/baltimore',
                '/financing/real-estate-investment-trust-fund',
                '/cities/oregon',
                '/cities/financing/real-estate-investment-trust-fund',
                '/financing/securitization',
                '/about-us',
                '/industries/healthtech-and-healthcare',
                '/financing/private-equity/hedge-fund',
                '/cities/vancouver',
                '/insights/benefits-of-hiring-a-business-consulting-service',
                '/consulting/business-plans/prospectus',
                '/technology/automation',
                '/consulting',
                '/cities/portland',
                '/industries/healthcare',
                '/cities/arizona',
                '/consulting/market-data-plans/feasibility-reports',
                '/industries/telecommunications',
                '/legal-advisory/intellectual-property/plant-patent',
                '/benefits-of-hiring-a-business-consulting-service',
                '/cities/los-angeles',
                '/cities/washington',
                '/cities/phoenix',
                '/industries/trade',
                '/cities/buffalo',
                '/careers/explore-roles/consultant',
                '/cities/indianapolis',
                '/cities/colorado',
                '/cities/ohio',
                '/industries/consumer-products',
                '/industries/machinery-and-equipment',
                '/legal-advisory/trademark',
                '/cities/illinois',
                '/financing/private-equity/infrastructure',
                '/search',
                '/',
                '/financing/investment-portfolio-management',
                '/industries/cloud-computing',
                '/careers/contact-form',
                '/top-five-tips-for-recruiting-talented-hires-to-your-company',
                '/consulting/business-plans/e-b1-business-plans',
                '/financing/regulation-d/reg-a%2B',
                '/legal-advisory/offering-memorandum-canada',
                '/legal-advisory/intellectual-property/utility-patent',
                '/consulting/business-plans/franchising-plan',
                '/consulting/business-plans/sba-business-plan',
                '/financing',
                '/careers/prepare-for-an-interview/case-interview',
                '/financing/private-equity/real-estate',
                '/consulting/market-data-plans',
                '/consulting/revenue-growth',
                '/cities/chicago',
                '/consulting/business-plans/e-2-business-plans',
                '/industries/financing/real-estate-investment-trust-fund',
                '/industries/advanced-manufacturing-and-services',
                '/consulting/transformation-modification-and-integration',
                '/consulting/market-data-plans/etf-and-stock-market-reports',
                '/financing/private-placement-memorandum',
                '/cities/north-carolina',
                '/financing/syndicate-administration',
                '/financing/private-equity/seconday-fund',
                '/arleo',
                '/financing/regulation-d',
                '/insights/the-importance-of-cybersecurity-and-data-encryption-to-us-consumers',
                '/careers/explore-roles/working-professionals',
                '/legal',
                '/careers/explore-roles/associate-consultant',
                '/financing/business-sale',
                '/consulting/business-plans/marketing-plan',
                '/careers/financing/real-estate-investment-trust-fund',
                '/careers/prepare-for-an-interview/experience-interview',
                '/consulting/new-start-up-technology',
                '/industries/agribusiness',
                '/legal-advisory/intellectual-property/provisional-and-non-provisional',
                '/industries/real-estate',
                '/technology/digital-innovation',
                '/legal-advisory/intellectual-property/design-patent',
                '/consulting/financing/real-estate-investment-trust-fund',
                '/consulting/management-consulting',
                '/financing/forensic-accounting',
                '/cities/raleigh',
                '/industries/oil-and-gas',
                '/about',
                '/careers/meet-us/at-an-event',
                '/financing/private-equity/distressed-private-equity',
                '/legal-advisory',
                '/cities/georgia',
                '/cities/nevada',
                '/insights/financing/real-estate-investment-trust-fund',
            ];
            const apiUrl = process.env.STRAPI_URL;
            const authToken = process.env.STRAPI_TOKEN;
            const collectionEndpoint = `${apiUrl}/api/base-urls?pagination[pageSize]=100`;
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
    },

    sitemap: {
        hostname: 'https://ventureplans.us',
        gzip: true,
        routes: async () => {
            const routes = [
                '/cities/maryland',
                '/media',
                '/industries/chemicals',
                '/consulting/business-plans/restructuring-business-plan',
                '/cities/rochester',
                '/insights/top-10-emerging-industries-of-the-future',
                '/cities/dallas',
                '/careers/prepare-for-an-interview/other-interview-formats',
                '/cities/pennsylvania',
                '/consulting/business-plans/sba-lender-business-plans',
                '/subscribe',
                '/cities/cincinnati',
                '/about-us/financing/real-estate-investment-trust-fund',
                '/financing/special-purpose-entity',
                '/industries/big-data-analytics',
                '/cities/san-antonio',
                '/cities/atlanta',
                '/legal-advisory/intellectual-property',
                '/financing/private-equity/leverage-buyout',
                '/financing/invest',
                '/financing/regulation-d/506-c-accredited-investors',
                '/financing/private-equity/mezzanine-capital',
                '/cities/boston',
                '/technology/agile/functional-specification',
                '/privacy-policy',
                '/financing/crowdfunding',
                '/book-consult',
                '/technology',
                '/cities/san-diego',
                '/cities/san-jose',
                '/cities/houston',
                '/cities/texas',
                '/consulting/business-plans/eb1-business-plans',
                '/cities/massachusetts',
                '/financing/private-equity/funds-of-funds',
                '/consulting/business-plans/investor-business-plans',
                '/cities/califonia',
                '/about-us/what-we-do',
                '/careers/meet-us',
                '/consulting/business-plans/financial-performa',
                '/consulting/human-resources',
                '/industries/retail',
                '/consulting/strategy',
                '/about-us/founders-bio',
                '/reviews',
                '/consulting/business-plans/l-1a-and-l-1b-business-plans',
                '/financing/exit-planning',
                '/industries/financial-services',
                '/cities/louisiana',
                '/insights/top-five-tips-for-recruiting-talented-hires-to-your-company',
                '/careers/explore-roles/summer-associate',
                '/cities/miami',
                '/legal-advisory/convertible-notes',
                '/consulting/business-plans/immigration-business-plans',
                '/cities/manhattan',
                '/financing/mergers-and-acquisitions/divestitures',
                '/Business-Plans/financing/real-estate-investment-trust-fund',
                '/careers/explore-roles/advanced-degree-holders',
                '/cities/las-vegas',
                '/technology/financing/real-estate-investment-trust-fund',
                '/cities/seattle',
                '/cities/cleveland',
                '/legal-advisory/securities-arbitration',
                '/cities/cupertino',
                '/consulting/agile-implementation',
                '/market-data-plans',
                '/financing/commercial-banking',
                '/offices',
                '/insights',
                '/financing/financing/real-estate-investment-trust-fund',
                '/contact-us',
                '/cities/austin',
                '/financing/spv-formation',
                '/consulting/market-data-plans/covid-19-market-reports',
                '/consulting/restructuring-operations',
                '/technology/agile/software-budgeting-and-financials',
                '/legal-advisory/Copyright',
                '/industries',
                '/consulting/business-plans/Financial-Pro-Forma',
                '/industries/transportation',
                '/careers/explore-roles/analytics-and-customer-insights',
                '/cities/san-francisco',
                '/our-leadership',
                '/industries/media-and-entertainment',
                '/refund-policy',
                '/cities',
                '/legal-advisory/commodity-and-futures-contract',
                '/consulting/digital-marketing',
                '/financing/private-equity',
                '/careers/meet-us/our-people',
                '/financing/regulation-s-offshore-offering',
                '/financing/private-placements',
                '/Financing/Private-Equity',
                '/cities/indiana',
                '/cities/tampa-bay',
                '/consulting/industries',
                '/legal-advisory/financing/real-estate-investment-trust-fund',
                '/cities/charlotte',
                '/consulting/business-plans/e-b5-business-plans',
                '/financing/mergers-and-acquisitions/post-merger-inegration',
                '/consulting/business-plan/restructuring-business-plan',
                '/Financing/financing/real-estate-investment-trust-fund',
                '/technology/agile/backlog-feature-implementation',
                '/technology/custom-design-and-build',
                '/consulting/business-plans/white-papers',
                '/industries/artificial-intelligence',
                '/cities/new-york',
                '/consulting/financial-advisory',
                '/industries/utilities-and-renewable',
                '/careers/explore-roles',
                '/cities/west-hollywood',
                '/cities/columbus',
                '/industries/automotive-and-mobility',
                '/about-us/our-leadership',
                '/cities/nashville',
                '/technology/agile/prototypes',
                '/technology/data-analytics-implementation',
                '/financing/pre-ipo',
                '/consulting/business-plans/investor-pitch-deck',
                '/consulting/business-plans/Investor-business-plans',
                '/consulting/business-plans',
                '/consulting/business-plans/cannabis-business-plan',
                '/technology/agile',
                '/cities/detroit',
                '/financing/mergers-and-acquisitions/Divestitures',
                '/financing/regulation-d/506-b-relationship-investors',
                '/careers/explore-roles/business-services',
                '/careers/prepare-for-an-interview',
                '/financing/private-equity/growth-capital',
                '/financing/mergers-and-acquisitions',
                '/about-us/our-team',
                '/financing/debt-financing',
                '/cities/tennessee',
                '/consulting/market-data-plans/data-industry-reports',
                '/industries/cybersecurity',
                '/legal-advisory/copyright',
                '/legal-advisory/initial-public-offering',
                '/financing/private-equity/venture-capital-fund',
                '/consulting/business-plans/grant-business-plans',
                '/financing/due-diligence-certification',
                '/industries/aviation',
                '/legal-advisory/legal-entity-structuring',
                '/insights/Investors-as-Engines-for-A-Strong-Economy',
                '/careers',
                '/consulting/business-plans/request-for-proposal',
                '/cities/tacoma',
                '/financing/sba-financing',
                '/cities/berkely',
                '/industries/social-and-public-sectors',
                '/cities/michigan',
                '/cities/beverly-hills',
                '/cities/denver',
                '/financing/initial-public-offering',
                '/industries/infrastructure-construction-and-building-products',
                '/consulting/customer-experience',
                '/cities/philadelphia',
                '/legal-advisory/private-place-memorandum',
                '/careers/explore-roles/associate-consultant-intern',
                '/Business-Plans/Request-for-Proposals-Government-Bids',
                '/cities/florida',
                '/industries/technology',
                '/legal-advisory/chapter-11-bankruptcy',
                '/legal-advisory/mergers-and-acquisitions',
                '/cities/new-orleans',
                '/consulting/cannabis-licensing-and-application-support',
                '/technology/agile-implementation',
                '/cities/baltimore',
                '/financing/real-estate-investment-trust-fund',
                '/cities/oregon',
                '/cities/financing/real-estate-investment-trust-fund',
                '/financing/securitization',
                '/about-us',
                '/industries/healthtech-and-healthcare',
                '/financing/private-equity/hedge-fund',
                '/cities/vancouver',
                '/insights/benefits-of-hiring-a-business-consulting-service',
                '/consulting/business-plans/prospectus',
                '/technology/automation',
                '/consulting',
                '/cities/portland',
                '/industries/healthcare',
                '/cities/arizona',
                '/consulting/market-data-plans/feasibility-reports',
                '/industries/telecommunications',
                '/legal-advisory/intellectual-property/plant-patent',
                '/benefits-of-hiring-a-business-consulting-service',
                '/cities/los-angeles',
                '/cities/washington',
                '/cities/phoenix',
                '/industries/trade',
                '/cities/buffalo',
                '/careers/explore-roles/consultant',
                '/cities/indianapolis',
                '/cities/colorado',
                '/cities/ohio',
                '/industries/consumer-products',
                '/industries/machinery-and-equipment',
                '/legal-advisory/trademark',
                '/cities/illinois',
                '/financing/private-equity/infrastructure',
                '/search',
                '/',
                '/financing/investment-portfolio-management',
                '/industries/cloud-computing',
                '/careers/contact-form',
                '/top-five-tips-for-recruiting-talented-hires-to-your-company',
                '/consulting/business-plans/e-b1-business-plans',
                '/financing/regulation-d/reg-a%2B',
                '/legal-advisory/offering-memorandum-canada',
                '/legal-advisory/intellectual-property/utility-patent',
                '/consulting/business-plans/franchising-plan',
                '/consulting/business-plans/sba-business-plan',
                '/financing',
                '/careers/prepare-for-an-interview/case-interview',
                '/financing/private-equity/real-estate',
                '/consulting/market-data-plans',
                '/consulting/revenue-growth',
                '/cities/chicago',
                '/consulting/business-plans/e-2-business-plans',
                '/industries/financing/real-estate-investment-trust-fund',
                '/industries/advanced-manufacturing-and-services',
                '/consulting/transformation-modification-and-integration',
                '/consulting/market-data-plans/etf-and-stock-market-reports',
                '/financing/private-placement-memorandum',
                '/cities/north-carolina',
                '/financing/syndicate-administration',
                '/financing/private-equity/seconday-fund',
                '/arleo',
                '/financing/regulation-d',
                '/insights/the-importance-of-cybersecurity-and-data-encryption-to-us-consumers',
                '/careers/explore-roles/working-professionals',
                '/legal',
                '/careers/explore-roles/associate-consultant',
                '/financing/business-sale',
                '/consulting/business-plans/marketing-plan',
                '/careers/financing/real-estate-investment-trust-fund',
                '/careers/prepare-for-an-interview/experience-interview',
                '/consulting/new-start-up-technology',
                '/industries/agribusiness',
                '/legal-advisory/intellectual-property/provisional-and-non-provisional',
                '/industries/real-estate',
                '/technology/digital-innovation',
                '/legal-advisory/intellectual-property/design-patent',
                '/consulting/financing/real-estate-investment-trust-fund',
                '/consulting/management-consulting',
                '/financing/forensic-accounting',
                '/cities/raleigh',
                '/industries/oil-and-gas',
                '/about',
                '/careers/meet-us/at-an-event',
                '/financing/private-equity/distressed-private-equity',
                '/legal-advisory',
                '/cities/georgia',
                '/cities/nevada',
                '/insights/financing/real-estate-investment-trust-fund',
            ];
            const apiUrl = process.env.STRAPI_URL;
            const authToken = process.env.STRAPI_TOKEN;
            const collectionEndpoint = `${apiUrl}/api/base-urls?pagination[pageSize]=100`;
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
            // Filter out the i18n routes from the sitemap
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
        extend(config) {
            config.resolve.alias['node-fetch-native'] = require.resolve('node-fetch');
        },
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
};
