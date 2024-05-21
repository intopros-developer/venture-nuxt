<template>
    <div>
        <div v-if="content">
            <base-about-page v-if="currentPage === 'about-page'" :content="content"></base-about-page>
            <base-contact-us v-else-if="currentPage === 'contact-us'" :content="content"></base-contact-us>
            <base-divisions v-else-if="currentPage === 'divisions'" :content="content"></base-divisions>
            <base-google-ad v-else-if="currentPage === 'google-ad'" :content="content"></base-google-ad>
            <base-founders-bio v-else-if="currentPage === 'founders-bio'" :content="content"></base-founders-bio>
            <base-our-team v-else-if="currentPage === 'our-team'" :content="content"></base-our-team>
            <base-service-pages v-else-if="currentPage === 'service-pages'" :content="content"></base-service-pages>
            <base-single-insights v-else-if="currentPage === 'single-insights'" :content="content"></base-single-insights>
        </div>
        <div v-else>Page Not Found</div>
    </div>
</template>
<script>
    export default {
        async asyncData(context) {
            try {
                const baseURL = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/base-urls?populate=deep&filters[url][$eq]=${encodeURIComponent(context.route.path)}`);
                if (
                    baseURL &&
                    baseURL.data &&
                    baseURL.data.data &&
                    Array.isArray(baseURL.data.data) &&
                    baseURL.data.data.length > 0 &&
                    baseURL.data.data[0].attributes &&
                    baseURL.data.data[0].attributes.slug &&
                    baseURL.data.data[0].attributes.template &&
                    baseURL.data.data[0].attributes.template.data &&
                    baseURL.data.data[0].attributes.template.data.attributes &&
                    baseURL.data.data[0].attributes.template.data.attributes.identifier
                ) {
                    let currentPage = baseURL.data.data[0].attributes.template.data.attributes.identifier;
                    let apiID = '';
                    if (currentPage === 'divisions') {
                        apiID = 'divisions-templates';
                    } else if (currentPage === 'about-page') {
                        apiID = 'about-page-templates';
                    } else if (currentPage === 'contact-us') {
                        apiID = 'contact-us-templates';
                    } else if (currentPage === 'founders-bio') {
                        apiID = 'founder-page-templates';
                    } else if (currentPage === 'google-ad') {
                        apiID = 'google-ad-templates';
                    } else if (currentPage === 'our-team') {
                        apiID = 'our-team-page-templates';
                    } else if (currentPage === 'service-pages') {
                        apiID = 'service-page-templates';
                    } else if (currentPage === 'single-insights') {
                        apiID = 'insight-single-insight-pages';
                    }
                    const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/${apiID}?filters[slug][$eq]=${baseURL.data.data[0].attributes.slug}&populate=deep`);
                    return {
                        content: context.$helper.parseData(data.data.data[0]),
                        currentPage: currentPage,
                        baseURL: baseURL.data.data[0].attributes,
                    };
                } else {
                    return {
                        content: null,
                        currentPage: '',
                    };
                }
            } catch (e) {
                console.log(e);
            }
        },
        props: {
            name: {
                type: String,
                default: () => {
                    return 'about-page';
                },
            },
        },
        data() {
            return {
                baseTemplates: ['about-page', 'contact-us', 'divisions', 'founders-bio', 'google-ad', 'our-team', 'service-pages', 'single-insights'],
            };
        },
    };
</script>
