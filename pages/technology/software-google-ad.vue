<template>
    <div>
        <!-- Hero form -->
        <google-ad-heroform :main-text="content.bannerTitle" :sub-text="content.bannerPara" :services="bannerServices" />
        <section class="py-10 md:py-16 xl:pt-[100px] xl:pb-[115px]">
            <h3 class="underlined-heading mb-5 inline-block w-full text-center text-xl md:text-2xl lg:text-3xl font-bold">{{ content.coreCustomSoftwareDev }}</h3>
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-8 text-center lg:mb-16">
                    <p class="mx-auto max-w-[950px] lg:text-lg lg:leading-7">
                        {{ content.coreCustomSoftwareServicesPara }}
                    </p>
                </div>
                <software-development-services :services="coreCustomSoftwareServices" />
            </div>
        </section>

        <google-ad-custom-software-development
            :bottomLogo="content.toolsAndTechnologyBottomImage"
            :customServices="customSoftwareDevelopments"
            :subParagraph="content.customSoftwareDevelopmentPara"
            :heading="content.customSoftwareDevHeading"
        />

        <section class="py-10 lg:pb-[120px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-10 flex items-center justify-center gap-[33px] text-center">
                    <h2 class="inline-block border-b-[7px] border-primary pb-2 text-xl md:text-2xl lg:text-3xl font-bold uppercase">{{ content.whyChooseHeading }}</h2>
                </div>
                <div class="mx-auto mb-10 max-w-[950px] text-center">
                    <p class="text-lg font-light leading-8 -tracking-[0.04px]">{{ content.whyChooseVenturePlansPara }}</p>
                </div>
                <why-venture-plans :ventureFeatures="whyVenturePlans" />
            </div>
        </section>
        <common-interested-service :backgroundImage="content.talkToUsImage" :title="content.talkUsPara" :description="content.talkToUsSubtext" buttonTitle="Talk To Us" />
        <section class="py-10 md:py-16 xl:pt-[158px] xl:pb-[120px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-[30px] flex items-center justify-center gap-[33px] text-center">
                    <h2 class="inline-block border-b-[7px] border-primary pb-2 text-xl md:text-2xl lg:text-3xl font-bold uppercase">{{ content.toolsHeading }}</h2>
                </div>
                <div class="mx-auto mb-[73px] max-w-[950px] text-center">
                    <p class="text-lg font-light leading-8 -tracking-[0.03px]">
                        {{ content.toolsTechnologiesPara }}
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <div :key="k" v-for="(tools, k) in toolsAndTechnology" class="rounded-lg bg-white p-4 shadow-[0_1px_8px_rgba(0,161,241,0.08)] md:p-7 xl:col-span-2">
                        <div class="mb-[15px] flex items-center gap-4 text-xl font-semibold"><img loading="lazy" :src="tools.svgIcon" alt="" /> {{ tools.title }}</div>
                        <div>
                            <ul class="flex flex-wrap gap-2 text-base">
                                <li :key="row" v-for="row in tools.technologies.split(',')" class="cursor-pointer rounded-full border-2 border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white">{{ row }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <common-client-words :testimonials="testinominals">
            <template v-slot:customHeader>
                <h2 class="inline-block border-b-[7px] border-primary pb-2 text-xl md:text-2xl lg:text-3xl font-bold uppercase">Our Client Words</h2>
            </template>
        </common-client-words>

        <!-- Brand logo -->
        <common-brand-logo />

        <google-ad-project-info-submit
            :tell-us-more-title="content.tellAboutProjectTitle"
            :first-proof-title="content.yearsInOperation"
            :second-proof-title="content.projectsDone"
            :third-proof-title="content.offices"
            :first-proof-value="content.yearsInOperationValue"
            :second-proof-value="content.projectDoneValue"
            :third-proof-value="content.officesValue"
            :featuredCompanies="section6Data"
        />

        <section class="bg-[#F3F3F3] py-10 md:py-16 xl:pt-[99px] xl:pb-[101px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-10 text-center md:mb-20">
                    <div class="mb-5 flex items-center justify-center gap-[33px] text-center">
                        <h2 class="inline-block border-b-[7px] border-primary pb-2 text-xl md:text-2xl lg:text-3xl font-bold uppercase">COMPLETE Services catalogue</h2>
                    </div>
                    <div class="mx-auto mb-10 max-w-[950px] text-center">
                        <p class="text-lg leading-8 -tracking-[0.04px] text-[#566378]">
                            {{ content.servicesCatalogPara }}
                        </p>
                    </div>
                </div>
                <div class="space-y-5 divide-y divide-[#E6E6E6]">
                    <div :key="faq.title" v-for="faq in completeServiceCatalog" class="pt-5">
                        <div class="flex cursor-pointer items-center justify-between gap-5 md:gap-14" @click="openFaq(faq.title)">
                            <div class="flex-1">
                                <p class="mb-4 text-lg text-black" :class="{ '!text-primary': activeFaq === faq.title }">{{ faq.title }}</p>
                                <p class="text-base leading-6 -tracking-[0.03px] text-[#566378]" :class="{ '!text-primary': activeFaq === faq.title }">
                                    {{ faq.description }}
                                </p>
                            </div>
                            <icons-minus v-if="activeFaq === faq.title" class="w-4 flex-none text-black/30 md:w-auto" />
                            <icons-plus v-else class="w-4 flex-none text-black/30 md:w-auto" />
                        </div>
                        <div v-if="activeFaq === faq.title" class="mt-4">
                            <ul class="flex flex-wrap gap-3 text-base">
                                <li :key="feature" v-for="feature in faq.services.split(',')" class="cursor-pointer rounded-full border-2 border-primary px-4 py-1 text-primary hover:bg-primary hover:text-white">{{ feature }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Ready To Talk -->
        <common-readytotalk :imgUrl="readyToTalkForm.imgUrl" :serviceOptions="readyToTalkForm.services.data" :aboutParagraph="readyToTalkForm.aboutParagraph" :title="readyToTalkForm.title" :talkInTitle="readyToTalkForm.talkInTitle" />
        <common-faq :faqs="faqSection" />
        <common-brand-logo :logos="logoSliders" />
    </div>
</template>

<script>
    // FAQ open close

    import WhyVenturePlans from '~/components/software-google-ad/why-venture-plans.vue';

    export default {
        components: { WhyVenturePlans },
        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/software-google-ad-page?populate=deep`);
                return {
                    content: context.$helper.parseData(data.data),
                };
            } catch {}
        },

        data() {
            return {
                activeFaq: '',
                ventureFeatures: [{ title: '360 Approach', description: '' }],
            };
        },

        computed: {
            logoSliders() {
                return this.content?.bottomLogoSlider?.data?.attributes?.logoUrls || [];
            },
            section6Data() {
                return this.content?.asSeenOnLogos?.data || [];
            },
            faqSection() {
                return this.content?.faqSection?.data || [];
            },
            readyToTalkForm() {
                return this.content?.readyToTalk?.data?.attributes || { services: { data: [] } };
            },
            testinominals() {
                return this.content?.testimonialOptions?.data || [];
            },
            coreCustomSoftwareServices() {
                return (
                    this.content.customSoftwareServices.data.map((i) => {
                        return i.attributes;
                    }) || []
                );
            },
            toolsAndTechnology() {
                return (
                    this.content.toolsAndTechnologies.data.map((i) => {
                        return i.attributes;
                    }) || []
                );
            },
            bannerServices() {
                return (
                    this.content.bannerServiceOptions.data.map((i) => {
                        return i.attributes;
                    }) || []
                );
            },
            customSoftwareDevelopments() {
                return (
                    this.content.customSoftwareDevelopments.data.map((i) => {
                        return i.attributes;
                    }) || []
                );
            },
            whyVenturePlans() {
                return (
                    this.content.whyVenturePlans.data.map((i) => {
                        return i.attributes;
                    }) || []
                );
            },
            completeServiceCatalog() {
                return (
                    this.content.completeServiceCatalog.data.map((i) => {
                        return i.attributes;
                    }) || []
                );
            },
        },

        head() {
            return {
                title: 'Software Google Ad | Venture Plans',
                meta: [
                    {
                        name: 'robots',
                        content: 'noindex',
                    },
                    {
                        hid: 'keywords',
                        property: 'keywords',
                        content: 'Venture Plans Technology, venture plans technology',
                    },
                ],
                link: [
                    {
                        rel: 'canonical',
                        href: this.content?.metaFields[0]?.canonicalUrl
                            ? (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.content.metaFields[0].canonicalUrl
                            : (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path,
                    },
                ],
            };
        },

        methods: {
            openFaq(ref) {
                this.activeFaq = this.activeFaq === ref ? '' : ref;
            },
        },
    };
</script>
