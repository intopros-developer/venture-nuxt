<template>
    <div>
        <div v-if="content" class="container bg-[#FBFBFD] px-10 py-10 md:px-4 md:py-16 lg:px-[97px] lg:pb-[90px] lg:pt-[114px] xl:px-4">
            Base About Page
            <base-about-page :content="content"></base-about-page>
        </div>
    </div>
</template>
<script>
    export default {
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
            };
        },
    };
</script>
