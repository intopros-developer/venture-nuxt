<template>
    <div v-if="content">
        <home-hero-slider :slider="slides" />

        <lazy-common-dynamic-questionnaire :data="questionnaires"></lazy-common-dynamic-questionnaire>

        <!-- <common-questions-form :title="content.questionnaireTitle" :description="content.questionnaireDescription" :questions="questionnaires" />
        <section class="pt-8 pb-10 xl:pt-10 xl:pb-20">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="flex items-center gap-[10px]">
                    <div class="w-[5px] self-stretch bg-primary"></div>
                    <p class="text-sm font-semibold text-[#202A36] md:text-base xl:text-2xl xl:leading-9">Across sectors, we identify new markets , scale revenue, improve operations and provide financing support</p>
                </div>
            </div>
        </section> -->
        <!-- <section class="pt-6 pb-0 md:pb-24 xl:pt-10">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-11 flex items-center justify-center gap-[33px] text-center" >
                    <div class="hidden h-px w-full bg-[#D5D5D5] sm:block"></div>
                    <h2 class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl">OUR <span class="text-primary">CORE VALUES</span></h2>
                    <div class="hidden h-px w-full bg-[#D5D5D5] sm:block"></div>
                </div>
                <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    <div v-for="(core_value, i) in coreValues" :key="i" class="bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.16)]" >
                        <div class="flex items-center justify-between bg-primary/80 px-3 py-10 xl:px-6" >
                            <h3 class="text-xl font-bold leading-[17px] text-white md:text-sm xl:text-xl xl:leading-[30px]">{{ core_value.fields.title }}</h3>
                            <div class="h-8 w-8 flex-none rounded-full bg-white text-center text-xl font-extrabold leading-8 text-[#0CA5F0] xl:h-[39px] xl:w-[39px] xl:text-[25px] xl:leading-[39px]">{{ core_value.fields.id }}</div>
                        </div>
                        <div class="px-6 py-5 xl:p-8" >
                            <p class="text-sm font-medium text-black xl:text-base xl:leading-[30px]">{{ core_value.fields.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <lazy-common-contact-us
            :videoThumbnailURL="content.video1ThumbnailUrl"
            :buttonTitle="content.video1ButtonText"
            :buttonURL="content.video1ButtonLink"
            :videoURL="content.video1Url"
            :title="content.video1Title"
            description="for consulting services"
        />

        <lazy-common-company-overview :value="content.section1Description" :title="content.section1Title" />

        <section class="py-10 md:py-16 lg:pt-[116px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-9 flex items-center justify-center gap-2 text-center sm:gap-[33px] md:mb-[48px]">
                    <div class="h-px w-1/5 bg-[#D5D5D5] sm:w-full"></div>
                    <h2 class="max-w-[90%] text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary" v-html="content.section2Title"></h2>
                    <div class="h-px w-1/5 bg-[#D5D5D5] sm:w-full"></div>
                </div>
                <lazy-common-featured-services :services="section2Data" />
            </div>
        </section>

        <lazy-home-about-client :buttonText="content.section3ButtonText" :buttonUrl="content.section3ButtonLink" :title="content.section3Title" :testimonials="section3Data" />

        <lazy-common-readytotalk
            id="readyToTalk"
            :imgUrl="readyToTalkForm.imgUrl"
            :serviceOptions="readyToTalkForm.services.data"
            :aboutParagraph="readyToTalkForm.aboutParagraph"
            :title="readyToTalkForm.title"
            :talkInTitle="readyToTalkForm.talkInTitle"
        />

        <lazy-home-private-placement
            :buttonLink="content.CTA1ButtonLink"
            :buttonText="content.CTA1ButtonText"
            :title="content.CTA1Title"
            :description="content.CTA1Description"
            :featuredInText="content.section4Title"
            :featuredCompanies="section4Data"
        />

        <lazy-home-sector-excelled :title="content.section5Title" :description="content.section5Description" :data="section5Data" />

        <lazy-common-work-at-the-best-place :imgUrl="content.CTA2ImgUrl" :title="content.CTA2Title" :description="content.CTA2Description" :buttonTitle="content.CTA2ButtonText" :buttonUrl="content.CTA2ButtonLink" />

        <lazy-home-our-latest-insights :insights="section6Data" :title="content.section6Title" />

        <lazy-home-subscribe :imageUrl="content.section7ImgUrl" :title="content.section7Title" :description="content.section7Description" />

        <lazy-home-career :buttonLink="content.section8ButtonLink" :buttonText="content.section8ButtonText" :title="content.section8Title" :subtitle="content.section8Subtitle" :image="content.section8ImgUrl" />

        <lazy-common-brand-logo :logos="logoSlider" />
    </div>
</template>
<script>
    export default {
        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/home-page?populate=deep`);
                return {
                    content: context.$helper.parseData(data.data),
                };
            } catch {}
        },

        head() {
            return {
                title: this.content?.metaFields[0]?.title,
                meta: [
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: this.content?.metaFields[0]?.title,
                    },
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: this.content?.metaFields[0]?.socialImgUrl,
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'description',
                        property: 'description',
                        name: 'description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'og:image:secure_url',
                        property: 'og:image:secure_url',
                        content: this.content?.metaFields[0]?.socialImgUrl,
                    },
                    {
                        hid: 'twitter:description',
                        property: 'twitter:description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'twitter:title',
                        property: 'twitter:title',
                        content: this.content?.metaFields[0]?.title,
                    },
                    {
                        hid: 'twitter:image',
                        property: 'twitter:image',
                        content: this.content?.metaFields[0]?.socialImgUrl,
                    },
                    {
                        hid: 'keywords',
                        property: 'keywords',
                        name: 'keywords',
                        content: this.content?.metaFields[0]?.keywords,
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

        computed: {
            baseURL() {
                return process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us';
            },
            questionnaires() {
                return this.content?.dynamicQuestionnaires?.data?.attributes || [];
            },
            section2Data() {
                return this.content?.section2Component?.data || [];
            },
            section3Data() {
                if (this.content?.section3Component?.data) {
                    this.content?.section3Component?.data.forEach((dat) => {
                        dat.attributes.readMoreOn = false;
                    });
                }
                return this.content?.section3Component?.data || [];
            },
            readyToTalkForm() {
                return this.content?.readyToTalkForm?.data?.attributes || { services: { data: [] } };
            },
            section4Data() {
                return this.content?.section4Component?.data || [];
            },
            section5Data() {
                return this.content?.section5Component?.data || [];
            },
            section6Data() {
                return this.content?.section6Component?.data || [];
            },
            logoSlider() {
                return this.content?.logoSlider?.data?.attributes?.logoUrls || [];
            },
            slides() {
                return this.content?.bannerMediaComponent?.data || [];
            },

            insights() {
                return [];
            },
        },
    };
</script>
