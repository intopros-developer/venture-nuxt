<template>
    <div v-if="content">
        <section class="relative bg-gray-700 bg-cover bg-[right_32%_top] bg-no-repeat pb-9 pt-[287px] lg:bg-left-top xl:pb-[95px] xl:pt-[166px]" v-lazyload-bg="content.bannerImgUrl">
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]"></div>
            <div class="container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div>
                    <p class="mb-5 border-l-[3px] border-primary pl-2.5 text-sm leading-3 text-[#FBFBFD] md:text-base md:leading-[20px]">
                        {{ content.bannerSubtitle }}
                    </p>
                    <h1 class="mb-4 text-[28px] font-bold leading-8 text-white md:text-[40px] md:leading-[53px]">{{ content.bannerTitle }}</h1>
                    <p class="w-full text-sm font-normal leading-5 text-[#FBFBFD] sm:max-w-[377px] md:max-w-[458px] md:text-base md:leading-[26px]" v-html="content.bannerDescription"></p>
                </div>
            </div>
        </section>

        <career-banner-tab />

        <common-dynamic-questionnaire main-container-class="!max-w-[520px]" :data="questionnaires" @changeQue1="assignQueAns1"></common-dynamic-questionnaire>

        <common-questionnaire-content :current-question="currentFirstCareerQuestion" />

        <section class="pt-20 md:pt-28">
            <div id="careersAtVenturePlans" class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-8 flex items-center justify-center gap-[33px] text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary" v-html="content.section2Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <common-toggle-content :content="content.section2Description" />
            </div>
        </section>

        <section class="pb-20 xl:pb-[85px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-7 flex items-center justify-center gap-[33px] pt-20 text-center lg:mb-[67px] xl:pt-[117px]">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 id="overview" class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section3Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>

                <common-featured-services :services="section3Data" />

                <div class="mt-10 text-center md:mt-16 xl:mt-[110px]">
                    <nuxt-link v-if="$helper.isInternalUrl(content.CTA1ButtonLink)" :to="content.CTA1ButtonLink" class="b-btn mx-auto text-xs uppercase md:block lg:max-w-[322px] lg:py-6">{{ content.CTA1ButtonText }}</nuxt-link>
                    <a v-else target="_blank" :href="content.CTA1ButtonLink" class="b-btn mx-auto text-xs uppercase md:block lg:max-w-[322px] lg:py-6">{{ content.CTA1ButtonText }}</a>
                </div>
            </div>
        </section>

        <career-join-event :title="content.section4Description" :image-url="content.section4ImgUrl" />

        <career-professional-functional :title="content.section5Title" :professionals-and-positions="section5Data" />

        <section id="ourFounder">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-[41px] flex items-center justify-center gap-[33px] text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary" v-html="content.section6Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
            </div>
        </section>

        <common-contact-us :video-thumbnail-u-r-l="content.video1ThumbnailUrl" :button-title="content.video1ButtonText" :button-u-r-l="content.video1ButtonLink" :video-u-r-l="content.video1Url" :title="content.video1Title" />

        <common-work-at-the-best-place
            class="py-10 md:py-16 xl:pb-[85px] xl:pt-20"
            :img-url="content.CTA2ImgUrl"
            :title="content.CTA2Title"
            :description="content.CTA2Description"
            :button-title="content.CTA2ButtonText"
            :button-url="content.CTA2ButtonLink"
        />

        <common-readytotalk
            page="careers"
            :img-url="readyToTalkForm.imgUrl"
            :service-options="readyToTalkForm.services.data"
            :about-paragraph="readyToTalkForm.aboutParagraph"
            :title="readyToTalkForm.title"
            :talk-in-title="readyToTalkForm.talkInTitle"
        />

        <common-faq :title="content.section7Title" :description="content.section7Description" :faqs="section7Data" />
    </div>
</template>

<script>
    export default {
        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/careers-page?populate=deep`);
                return {
                    content: context.$helper.parseData(data.data),
                };
            } catch {}
        },

        data() {
            return {
                isShowReadMore: false,
                question1Ans: '',
                currentFirstCareerQuestion: 'MBA Candidate',
            };
        },

        head() {
            return {
                title: this.content?.metaFields[0]?.title,
                link: [
                    {
                        rel: 'canonical',
                        href: (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path,
                    },
                    {
                        rel: 'preload',
                        href: this.content.bannerImgUrl,
                        as: 'image',
                        fetchpriority: 'high',
                    },
                ],
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
            };
        },

        computed: {
            questionnaires() {
                return this.content?.dynamicQuestionnaries?.data[0]?.attributes || [];
            },
            careerQuestions() {
                return this.content?.questionnaires?.data || [];
            },
            section1Data() {
                return this.content?.section1Component?.data || [];
            },
            section3Data() {
                return this.content?.section3Component?.data || [];
            },
            section5Data() {
                return this.content?.section5Component?.data || [];
            },
            readyToTalkForm() {
                return this.content?.readyToTalkForm?.data?.attributes || { services: { data: [] } };
            },
            section7Data() {
                return this.content?.section7Component?.data || [];
            },
        },

        methods: {
            assignQueAns1(ans) {
                this.currentFirstCareerQuestion = ans;
            },
        },
    };
</script>
