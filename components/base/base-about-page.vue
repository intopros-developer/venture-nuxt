<template>
    <div v-if="content">
        <section ref="bannerSection" class="relative bg-gray-700 bg-cover bg-no-repeat pb-8 pt-[250px] md:pb-[69px] md:pt-[166px]" v-lazyload-bg="content.bannerImgUrl">
            <div class="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-90 xl:h-[307px]"></div>
            <div class="container relative z-10 px-10 lg:px-[97px] xl:px-4">
                <div>
                    <p class="mb-5 border-l-[3px] border-primary pl-2.5 text-sm font-normal leading-3 text-[#FBFBFD] md:text-base md:leading-5">
                        {{ content.bannerSubTitle }}
                    </p>
                    <h1 class="mb-4 text-[28px] font-bold leading-8 text-white md:text-[40px] md:leading-[53px]">{{ content.bannerTitle }}</h1>
                    <p class="w-full text-sm font-normal leading-5 text-[#FBFBFD] sm:max-w-[377px] md:max-w-[458px] md:text-base md:leading-[26px]" v-html="content.bannerDescription"></p>
                </div>
            </div>
        </section>

        <!-- tabs-options -->
        <common-banner-tab :is-show-save-btn="true" :tabs="tabs" />

        <!-- about-us us -->
        <section class="pb-20 pt-14 md:pb-32">
            <div class="container px-10 lg:px-[97px] xl:px-4">
                <div class="mb-0 flex items-center justify-center gap-[5px] text-center md:mb-4 md:gap-8">
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                    <p id="aboutUs" class="shrink-0 text-[22px] font-bold uppercase leading-8 text-black md:text-3xl md:leading-[43px]" v-html="content.section1Title"></p>
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                </div>
                <common-toggle-content :content="content.section1Paragraph" />
            </div>
        </section>

        <!-- common-business-challenge -->
        <common-business-challenge :title="content.section2Title" :image="content.section2imgUrl" :values="section2Data" :button-text="content.CTA1ButtonText" :button-url="content.CTA1ButtonLink" />

        <!-- diverseEnvironment -->
        <section class="py-10">
            <div class="container lg:px-[97px] xl:px-4">
                <div class="text-center md:mb-[50px]">
                    <div class="mb-6 flex items-center justify-center gap-[5px] text-center md:mb-9 md:gap-8">
                        <div class="block h-px w-full bg-[#d5d5d5]"></div>
                        <h2 id="diverseEnvironment" class="shrink-0 text-2xl font-bold uppercase text-black lg:text-3xl lg:leading-[43px]" v-html="content.section3Title"></h2>
                        <div class="block h-px w-full bg-[#d5d5d5]"></div>
                    </div>
                    <p class="mx-auto max-w-[925px] text-sm font-medium leading-6 -tracking-[0.03px] text-black-700 md:text-base md:leading-6">
                        {{ content.section3Description }}
                    </p>
                </div>
            </div>
        </section>

        <common-contact-us :video-thumbnail-u-r-l="content.video1ThumbnailUrl" :button-title="content.video1ButtonText" :button-u-r-l="content.video1ButtonLink" :video-u-r-l="content.video1Url" :title="content.video1Title" />

        <!-- driveForResults -->
        <section class="py-10 xl:py-32">
            <div class="container px-10 lg:px-[97px] xl:px-4">
                <div class="mb-6 flex items-center justify-center gap-[5px] text-center md:mb-8 md:gap-8">
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                    <h2 id="driveForResults" class="shrink-0 text-2xl font-bold uppercase text-black lg:text-3xl lg:leading-[43px]" v-html="content.section4Title"></h2>
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                </div>
                <div class="mb-10 md:mb-[75px]">
                    <div v-for="(result, i) in section4Data" :key="i">
                        <p class="mb-1 text-sm font-bold text-black-700 md:mb-0 md:text-base">{{ result.attributes.title }}</p>
                        <p class="mb-8 text-sm font-medium text-black-700 md:text-base">
                            {{ result.attributes.description }}
                        </p>
                    </div>
                </div>
                <div class="text-center">
                    <nuxt-link v-if="$helper.isInternalUrl(content.CTA2ButtonLink)" :to="content.CTA2ButtonLink" class="b-btn text-xs lg:max-w-[322px] lg:py-6">{{ content.CTA2ButtonText }}</nuxt-link>
                    <a v-else target="_blank" :href="content.CTA2ButtonLink" class="b-btn text-xs lg:max-w-[322px] lg:py-6">{{ content.CTA2ButtonText }}</a>
                </div>
            </div>
        </section>

        <!-- whyUs -->
        <section class="">
            <div class="container px-10 lg:px-[97px] xl:px-4">
                <div class="mb-6 flex items-center justify-center gap-[5px] text-center md:mb-[72px] md:gap-8">
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                    <h2 id="whyUs" class="shrink-0 text-2xl font-bold uppercase text-black lg:text-3xl lg:leading-[43px]" v-html="content.section5Title"></h2>
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                </div>
                <div class="mb-14 grid grid-cols-1 md:grid-cols-3 lg:mb-[102px]">
                    <div v-for="(data, i) in section5Data" :key="i" class="mb-10 flex flex-1 justify-around md:mb-0" :class="{ '!flex-auto': i === 0, 'md:mt-24': i >= 3 }">
                        <div class="mx-5 hidden h-[1px] w-full bg-[#DFDFDF] shadow-[0px_3px_6px_rgba(0,0,0,0.16)] md:block md:h-full md:min-h-[325px] md:w-[1px] xl:min-h-[420px]" :class="{ 'opacity-0': i === 0 }"></div>
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-auto flex-col justify-between gap-7 pb-4 md:pb-0">
                                <div>
                                    <div class="mb-2 flex items-center gap-3 md:mb-9 xl:mb-6">
                                        <div class="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-primary text-[17px] font-bold leading-[15px] -tracking-[0.03px] text-white xl:leading-[27px] xl:-tracking-[0.04px]">
                                            {{ i + 1 }}
                                        </div>
                                        <h3 class="text-base font-bold leading-[21px] -tracking-[0.03px] text-primary lg:text-2xl lg:leading-8 xl:-tracking-[0.05px]">{{ data.attributes.title }}</h3>
                                    </div>
                                    <p class="font-medium -tracking-[0.03px] text-black md:max-w-[275px]">{{ data.attributes.description }}</p>
                                </div>
                            </div>
                            <div class="mx-auto h-[180px] w-full max-w-[320px] overflow-hidden rounded-[100px] shadow-[0px_3px_6px_rgba(0,0,0,0.36)] md:h-[228px]">
                                <img :src="data.attributes.imgUrl" class="h-full w-full object-cover" :alt="data.attributes.title" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <common-interested-service
            :title="content.section6Title"
            :subtitle="content.section6Subtitle"
            :background-image="content.section6ImgUrl"
            :description="content.section6Description"
            :button-title="content.section6ButtonText"
            :button-link="content.section6ButtonLink"
        />

        <!-- work at best place -->
        <section>
            <common-work-at-the-best-place :img-url="content.CTA3ImgUrl" :title="content.CTA3Title" :description="content.CTA3Description" :button-title="content.CTA3ButtonText" :button-url="content.CTA3ButtonLink" />
        </section>

        <section>
            <common-readytotalk
                :img-url="readyToTalkForm.imgUrl"
                :title="readyToTalkForm.title"
                :talk-in-title="readyToTalkForm.talkInTitle"
                :about-paragraph="readyToTalkForm.aboutParagraph"
                :service-options="readyToTalkForm.services.data"
            />
        </section>
    </div>
</template>

<script>
    export default {
        nuxtI18n: {
            paths: {
                fr: '/about-us',
                en: '/about-us',
            },
        },

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
                isShowReadMore: false,
                tabs: [
                    {
                        id: 'aboutUs',
                        title: 'About Us',
                    },
                    {
                        id: 'ourCulture',
                        title: 'Our Culture',
                    },
                    {
                        id: 'diverseEnvironment',
                        title: 'Diverse Environment',
                    },
                    {
                        id: 'driveForResults',
                        title: 'Drive for Results',
                    },
                    {
                        id: 'whyUs',
                        title: 'Why Us',
                    },
                    {
                        id: 'employmentAtVenturePlan',
                        title: 'Employment At Venture Plans',
                    },
                    {
                        id: 'readyToTalk',
                        title: 'Ready To Talk',
                    },
                ],
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
                        href: this.content?.bannerImgUrl,
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
                        name: 'title',
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
            section2Data() {
                return this.content?.section2Component?.data || [];
            },
            section4Data() {
                return this.content?.section4Component?.data || [];
            },
            section5Data() {
                return this.content?.section5Component?.data || [];
            },
            readyToTalkForm() {
                return this.content?.readyToTalkForm?.data?.attributes || { services: { data: [] } };
            },
        },
    };
</script>
