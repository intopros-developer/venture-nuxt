<template>
    <div v-if="content">
        <section class="relative bg-cover bg-[right_48%_top] bg-no-repeat pb-9 pt-[164px] md:bg-[center_top_25%] xl:pb-[75px]" :style="{ backgroundImage: `url(${content.bannerImgUrl})` }">
            <div class="absolute left-0 top-0 z-0 h-full w-[90%] bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[246px]"></div>
            <div class="container relative z-10 lg:px-[97px] xl:px-4">
                <div>
                    <p class="mb-[18px] border-l-[3px] border-primary pl-2.5 leading-5 text-[#FBFBFD]">{{ content.bannerSubtitle }}</p>
                    <h1 class="mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px] xl:leading-[53px]">{{ content.bannerTitle }}</h1>
                    <p v-html="content.bannerDescription" class="max-w-[415px] font-normal leading-5 text-[#FBFBFD]"></p>
                </div>
            </div>
        </section>

        <common-banner-tab :tabs="tabs" />

        <section class="relative z-10 overflow-hidden bg-white py-[92px]">
            <div id="featuredClient" class="container relative">
                <div class="flex flex-col items-center justify-between gap-10 md:flex-row">
                    <div class="grid flex-1 grid-cols-1">
                        <div>
                            <h3 class="border- inline-block border-b-[6px] border-primary text-[30px] font-bold uppercase leading-[47px] [&>span]:text-primary" v-html="content.section1Title"></h3>
                        </div>
                        <div class="mt-8 flex gap-2 md:gap-9">
                            <span class="flex-none">
                                <nuxt-img src="/assets/img/quote-one.png" alt="QuoteOne" loading="lazy" format="webp" />
                            </span>
                            <p class="max-w-[377px] text-lg italic leading-[28px] -tracking-[0.04px] text-[#707070]">
                                {{ content.section1Description }}
                            </p>
                            <span class="flex-none self-end">
                                <nuxt-img src="/assets/img/quote-two.png" alt="QuoteTwo" loading="lazy" format="webp" />
                            </span>
                        </div>
                        <div class="mt-20 lg:mt-[204px]">
                            <p class="text-[21px] italic leading-[42px] -tracking-[0.04px] text-[#707070]">{{ content.section1Subtitle }}</p>

                            <nuxt-img :src="content.section1DescriptionImgUrl || '/assets/img/review_image.png'" alt="Review Img" class="mt-6" loading="lazy" format="webp" />
                        </div>
                    </div>
                    <div>
                        <nuxt-img :src="content.section1ImgUrl" alt="Review Featured" loading="lazy" format="webp" />
                    </div>
                </div>
            </div>
        </section>

        <section id="aboutUs" class="pb-20 pt-14 md:pb-32">
            <div class="container px-10 lg:px-[97px] xl:px-4">
                <div class="mb-0 flex items-center justify-center gap-[5px] text-center md:mb-4 md:gap-8">
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                    <h2 id="aboutUs" class="shrink-0 text-[22px] font-bold uppercase leading-8 text-black md:text-3xl md:leading-[43px]" v-html="content.section2Title"></h2>
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                </div>
                <common-toggle-content :content="content.section2Description" />
            </div>
        </section>

        <common-business-challenge :title="content.section3Title" :image="content.section3ImgUrl" :values="section3Data" :buttonText="content.CTA1ButtonText" :buttonUrl="content.CTA1ButtonLink" />

        <common-contact-us id="videoTestimonials" :videoThumbnailURL="content.video1ThumbnailUrl" :buttonTitle="content.video1ButtonText" :buttonURL="content.video1ButtonLink" :videoURL="content.video1Url" :title="content.video1Title" />

        <!-- hidden for now -->
        <!-- <section class="py-10 md:pb-0 md:pt-16 lg:pt-[116px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-9 flex items-center justify-center gap-[33px] text-center md:mb-[67px]">
                    <div class="hidden h-px w-full bg-[#D5D5D5] sm:block"></div>
                    <h2 class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary"
                        v-html="content.section4Title"></h2>
                    <div class="hidden h-px w-full bg-[#D5D5D5] sm:block"></div>
                </div>
                <common-featured-services :services="section4Data" />
            </div>
        </section>

        -->

        <home-about-client :title="content.section5Title" :testimonials="section5Data" />

        <common-tell-more-about-projects :featuredCompanies="section6LogoUrls" :tellUsMoreData="section6Data" :tellUsMoreTitle="content.section6Title" :tellUseMoreSubtitle="content.section6Subtitle" :imageUrl="content.section6ImgUrl" />

        <common-client-words :title="content.section7Title" :description="content.section7Description" :testimonials="section7Data" />

        <common-interested-service
            id="buyService"
            :backgroundImage="content.section8ImgUrl"
            :subtitle="content.section8Subtitle"
            :title="content.section8Title"
            :description="content.section8Description"
            :buttonLink="content.section8ButtonLink"
            :buttonTitle="content.section8ButtonText"
        />

        <!-- our-team -->
        <div>
            <common-our-team class="pb-10 md:!pb-0" :title="content.section9Title" :description="content.section9Description" :teams="section9Data" />
        </div>

        <common-faq :title="content.section10Title" :description="content.section10Description" :faqs="section10Data" />

        <common-readytotalk :imgUrl="readyToTalkForm.imgUrl" :serviceOptions="readyToTalkForm.services.data" :aboutParagraph="readyToTalkForm.aboutParagraph" :title="readyToTalkForm.title" :talkInTitle="readyToTalkForm.talkInTitle" />

        <common-brand-logo :logos="logoSlider" />
    </div>
</template>

<script>
    export default {
        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/reviews-page?populate=deep`);
                return {
                    content: context.$helper.parseData(data.data),
                };
            } catch {}
        },

        data() {
            return {
                isLoadingMoreConsultants: false,
                isShowReadMore: false,
                tabs: [
                    {
                        id: 'featuredClient',
                        title: 'Featured Client',
                    },
                    {
                        id: 'aboutUs',
                        title: 'About Us',
                    },
                    {
                        id: 'videoTestimonials',
                        title: 'Video Testimonials',
                    },
                    {
                        id: 'ourClientsWords',
                        title: 'Client Reviews',
                    },
                    {
                        id: 'buyService',
                        title: 'Buy a Service',
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

        computed: {
            section3Data() {
                return this.content?.section3Component?.data || [];
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
            section6LogoUrls() {
                return this.content?.section6LogoUrls?.data || [];
            },
            section7Data() {
                return this.content?.section7Component?.data || [];
            },
            section9Data() {
                return this.content?.section9Component?.data || [];
            },
            section10Data() {
                return this.content?.section10Component?.data || [];
            },
            readyToTalkForm() {
                return this.content?.readyToTalkForm?.data?.attributes || { services: { data: [] } };
            },
            logoSlider() {
                return this.content?.logoSlider?.data?.attributes?.logoUrls || [];
            },
        },

        head() {
            return {
                title: this.content?.metaFields[0]?.title,
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
    };
</script>
