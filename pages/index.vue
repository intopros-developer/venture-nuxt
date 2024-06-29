<template>
    <div v-if="content">
        <home-hero-slider :slider="slides" />

        <lazy-common-dynamic-questionnaire :data="questionnaires"></lazy-common-dynamic-questionnaire>

        <lazy-common-contact-us
            :video-thumbnail-u-r-l="content.video1ThumbnailUrl"
            :button-title="content.video1ButtonText"
            :button-u-r-l="content.video1ButtonLink"
            :video-u-r-l="content.video1Url"
            :title="content.video1Title"
            description="for consulting services"
        />

        <lazy-common-company-overview :value="content.section1Description" :title="content.section1Title" />

        <section class="my-10 md:my-16 md:pb-0">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-9 flex items-center justify-center gap-2 text-center sm:gap-[33px] md:mb-[48px]">
                    <div class="h-px w-1/5 bg-[#D5D5D5] sm:w-full"></div>
                    <h2 class="max-w-[90%] text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary" v-html="content.section2Title"></h2>
                    <div class="h-px w-1/5 bg-[#D5D5D5] sm:w-full"></div>
                </div>
                <lazy-common-featured-services :services="section2Data" />
            </div>
        </section>

        <lazy-home-about-client :button-text="content.section3ButtonText" :button-url="content.section3ButtonLink" :title="content.section3Title" :testimonials="section3Data" />

        <lazy-common-readytotalk
            id="readyToTalk"
            :img-url="readyToTalkForm.imgUrl"
            :service-options="readyToTalkForm.services.data"
            :about-paragraph="readyToTalkForm.aboutParagraph"
            :title="readyToTalkForm.title"
            :talk-in-title="readyToTalkForm.talkInTitle"
        />

        <lazy-home-private-placement
            :button-link="content.CTA1ButtonLink"
            :button-text="content.CTA1ButtonText"
            :title="content.CTA1Title"
            :description="content.CTA1Description"
            :featured-in-text="content.section4Title"
            :featured-companies="section4Data"
        />

        <lazy-home-sector-excelled :title="content.section5Title" :description="content.section5Description" :data="section5Data" />

        <lazy-common-work-at-the-best-place :img-url="content.CTA2ImgUrl" :title="content.CTA2Title" :description="content.CTA2Description" :button-title="content.CTA2ButtonText" :button-url="content.CTA2ButtonLink" />

        <lazy-home-our-latest-insights :insights="section6Data" :title="content.section6Title" />

        <lazy-home-subscribe :image-url="content.section7ImgUrl" :title="content.section7Title" :description="content.section7Description" />

        <lazy-home-career :button-link="content.section8ButtonLink" :button-text="content.section8ButtonText" :title="content.section8Title" :subtitle="content.section8Subtitle" :image="content.section8ImgUrl" />

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
                        name: 'robots',
                        content: 'index, all',
                    },
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
                        href: (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path,
                    },
                ],
            };
        },
        computed: {
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
