<template>
    <div>
        <div v-if="content">
            <base-about-page v-if="currentPage === 'about-page'" :content="content"></base-about-page>
            <base-contact-us v-else-if="currentPage === 'contact-us'" :content="content"></base-contact-us>
            <base-divisions v-else-if="currentPage === 'divisions'" :content="content"></base-divisions>
            <base-google-ad v-else-if="currentPage === 'google-ad'" :content="content"></base-google-ad>
            <base-google-ad v-else-if="currentPage === 'our-team'" :content="content"></base-google-ad>
            <base-service-pages v-else-if="currentPage === 'service-pages'" :content="content"></base-service-pages>
            <base-single-insights v-else-if="currentPage === 'single-insights'" :content="content"></base-single-insights>
        </div>
    </div>
</template>
<script>
    import baseGoogleAd from '~/components/base/base-google-ad.vue';
    export default {
        components: { baseGoogleAd },
        props: {
            name: {
                type: String,
                default: () => {
                    return 'about-page';
                },
            },
        },
        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/about-us-page?populate=deep`);
                return {
                    content: context.$helper.parseData(data.data),
                };
            } catch {}
        },
        data() {
            return {
                baseTemplates: ['about-page', 'contact-us', 'divisions', 'founders-bio', 'google-ad', 'our-team', 'service-pages', 'single-insights'],
                currentPage: 'about-page',
            };
        },
        head() {
            return {
                meta: [
                    {
                        name: 'robots',
                        content: 'noindex',
                    },
                ],
            };
        },
    };
</script>
