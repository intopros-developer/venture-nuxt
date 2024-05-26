<template>
    <div v-if="content">
        <section class="relative bg-cover bg-[right_32%_top] bg-no-repeat pb-12 pt-[100px] md:bg-[center_top_8%] lg:pt-[166px] xl:bg-[center_top_12%] xl:pb-[67px]" :style="{ backgroundImage: `url(${content.bannerImgUrl})` }">
            <div class="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]"></div>
            <div class="container relative z-10 lg:px-[97px] xl:px-4">
                <div>
                    <p class="mb-5 text-[#fbfbfd]">{{ content.bannerSubtitle }}</p>
                    <h1 class="mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px] xl:leading-[53px]">{{ content.bannerTitle }}</h1>
                    <div class="mb-[10px] flex gap-[10px]">
                        <div class="w-[3px] flex-none bg-primary"></div>
                        <p class="font-normal text-[#FBFBFD] sm:whitespace-pre" v-html="content.bannerDescription"></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- tabs-options -->
        <common-banner-tab :tabs="tabs" :is-show-save-btn="true" />

        <!-- leadership overview -->
        <section class="py-10 lg:pb-[90px] lg:pt-20 xl:pt-[100px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div id="aboutOurLeadership" class="mb-4 flex items-center gap-[33px]">
                    <h2 class="[&>span] shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl" v-html="content.section1Title"></h2>
                </div>
                <div class="space-y-5 font-medium leading-6 text-black-700">
                    <p>
                        {{ content.section1Description }}
                    </p>
                </div>
            </div>
        </section>

        <common-contact-us
            :video-thumbnail-u-r-l="content.video1ThumbnailUrl"
            :button-title="content.video1ButtonText"
            :button-u-r-l="content.video1ButtonLink"
            :video-u-r-l="content.video1Url"
            :title="content.video1Title"
            :less-padding-top="true"
        />

        <!-- our-team -->
        <div>
            <common-our-team class="!pb-0" :title="content.section2Title" :description="content.section2Description" :teams="section2Data" />

            <div v-if="!moreConsultantsLoaded && section2AllData.length > 6" class="mb-24 mt-10 text-center">
                <button class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6" @click="moreConsultantsLoaded = true" v-html="content.section2ButtonText"></button>
            </div>
        </div>

        <!-- featured in -->
        <section class="bg-white py-[60px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="grid grid-cols-1">
                    <h3 class="pb-[43px] text-center text-2xl font-medium text-[#0B3A02] md:text-[31px]" v-html="content.section3Title"></h3>
                    <div class="flex flex-wrap items-center justify-center gap-4 lg:gap-[50px]">
                        <div v-for="(logo, i) in section3Data" :key="i" class="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white p-5 px-[17px] shadow-[0px_1px_8px_rgba(0,0,0,0.2)] xl:h-[126px] xl:w-[126px]">
                            <nuxt-img format="webp" :src="logo.attributes.iconUrl" :alt="'icon_' + i" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pb-[108px] pt-[94px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="text-center">
                    <h2 class="mb-3 text-[22px] font-medium leading-[27px] text-[#202A36] xl:text-[31px] xl:leading-[32px]" v-html="content.CTA1Title"></h2>
                    <p
                        class="mx-auto mb-[26px] max-w-[171px] text-[15px] font-medium leading-[18px] -tracking-[0.03px] text-[#586376] sm:max-w-none xl:text-[22px] xl:leading-[21px] xl:-tracking-[0.04px]"
                        v-html="content.CTA1Description"
                    ></p>
                    <nuxt-link v-if="$helper.isInternalUrl(content.CTA1ButtonLink)" :to="content.CTA1ButtonLink" class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6">{{ content.CTA1ButtonText }}</nuxt-link>
                    <a v-else target="_blank" :href="buttonLink" class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6">{{ content.CTA1ButtonText }}</a>
                </div>
            </div>
        </section>

        <section id="employmentOpportunities">
            <common-tell-more-about-projects
                :featured-companies="section3Data"
                :tell-us-more-data="section4Data"
                :tell-us-more-title="content.section4Title"
                :tell-use-more-subtitle="content.section4Subtitle"
                :image-url="content.section4ImgUrl"
            />
        </section>

        <!-- work at best place -->
        <section>
            <common-work-at-the-best-place :img-url="content.CTA2ImgUrl" :title="content.CTA2Title" :description="content.CTA2Description" :button-title="content.CTA2ButtonText" :button-url="content.CTA2ButtonLink" />
        </section>

        <common-interested-service
            :background-image="content.section5ImgUrl"
            :subtitle="content.section5Subtitle"
            :title="content.section5Title"
            :description="content.section5Description"
            :button-link="content.section5ButtonLink"
            :button-title="content.section5ButtonText"
        />

        <common-faq :title="content.section6Title" :description="content.section6Description" :faqs="section6Data" />

        <!-- Brand logo -->
        <common-brand-logo :logos="logoSliders" />

        <common-readytotalk
            id="readyToTalk"
            :img-url="readyToTalkForm.imgUrl"
            :service-options="readyToTalkForm.services.data"
            :about-paragraph="readyToTalkForm.aboutParagraph"
            :title="readyToTalkForm.title"
            :talk-in-title="readyToTalkForm.talkInTitle"
        />
    </div>
</template>

<script>
    export default {
        props: {
            content: {
                type: Object,
                default: () => {
                    return null;
                },
            },
        },
        data() {
            return {
                moreConsultantsLoaded: false,
                tabs: [
                    {
                        id: 'aboutOurLeadership',
                        title: 'About Our Leadership',
                    },
                    {
                        id: 'ourTeam',
                        title: 'Our Team',
                    },
                    {
                        id: 'employmentOpportunities',
                        title: 'Employment Opportunities',
                    },
                    {
                        id: 'faqs',
                        title: 'FAQs',
                    },
                    {
                        id: 'readyToTalk',
                        title: 'Ready to Talk',
                    },
                ],
            };
        },

        head() {
            return {
                title: this.content?.metaFields?.[0]?.title,
                link: [
                    {
                        rel: 'canonical',
                        href: this.content?.metaFields[0]?.canonicalUrl
                            ? (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.content.metaFields[0].canonicalUrl
                            : (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path,
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
            section2AllData() {
                return this?.content?.section2Component?.data || [];
            },
            section2Data() {
                if (this.moreConsultantsLoaded) {
                    return this?.content?.section2Component?.data || [];
                } else {
                    return this?.content?.section2Component?.data?.slice(0, 6) || [];
                }
            },
            section3Data() {
                return this?.content?.section3Component?.data || [];
            },
            section4Data() {
                return this?.content?.section4Component?.data || [];
            },
            section5Data() {
                return this?.content?.section4Component?.data || [];
            },
            section6Data() {
                return this?.content?.section6Component?.data || [];
            },
            logoSliders() {
                return this.content?.logoSlider?.data?.attributes?.logoUrls || [];
            },
            readyToTalkForm() {
                return this.content?.readyToTalkForm?.data?.attributes || { services: { data: [] } };
            },
        },
    };
</script>
