<template>
    <div v-if="content">
        <section class="relative bg-gray-700 bg-cover bg-[right_48%_top] bg-no-repeat pb-9 pt-[164px] md:bg-[center_top_25%] xl:pb-[75px]" v-lazyload-bg="content.bannerImgUrl">
            <div class="absolute left-0 top-0 z-0 h-full w-[90%] bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[246px]"></div>
            <div class="container relative z-10 lg:px-[97px] xl:px-4">
                <div>
                    <p class="mb-[18px] border-l-[3px] border-primary pl-2.5 leading-5 text-[#FBFBFD]">{{ content.bannerSubtitle }}</p>
                    <h1 class="mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px] xl:leading-[53px]">{{ content.bannerTitle }}</h1>
                    <p class="max-w-[415px] font-normal leading-5 text-[#FBFBFD]" v-html="content.bannerDescription"></p>
                </div>
            </div>
        </section>

        <common-banner-tab :tabs="tabs" />

        <section class="relative z-10 overflow-hidden bg-white py-[92px]">
            <div id="featuredClient" class="container relative">
                <div class="flex flex-col items-center justify-between gap-10 md:flex-row">
                    <div class="grid flex-1 grid-cols-1">
                        <div>
                            <p class="border- inline-block border-b-[6px] border-primary text-[30px] font-bold uppercase leading-[47px] [&>span]:text-primary" v-html="content.section1Title"></p>
                        </div>
                        <div class="mt-8 flex gap-2 md:gap-9">
                            <span class="flex-none">
                                <img src="/images/icons/quote-one.webp" alt="QuoteOne" loading="lazy" class="object-contain" />
                            </span>
                            <p class="max-w-[377px] text-lg italic leading-[28px] -tracking-[0.04px] text-[#707070]">
                                {{ content.section1Description }}
                            </p>
                            <span class="flex-none self-end">
                                <img src="/images/icons/quote-two.webp" alt="QuoteTwo" loading="lazy" class="object-contain" />
                            </span>
                        </div>
                        <div class="mt-20 lg:mt-[204px]">
                            <p class="text-[21px] italic leading-[42px] -tracking-[0.04px] text-[#707070]">{{ content.section1Subtitle }}</p>

                            <img :src="content.section1DescriptionImgUrl || '/images/review-img.webp'" alt="Review Img" class="mt-6" loading="lazy" />
                        </div>
                    </div>
                    <div>
                        <img :src="content.section1ImgUrl" alt="Review Featured" loading="lazy" />
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

        <common-business-challenge :title="content.section3Title" :image="content.section3ImgUrl" :values="section3Data" :button-text="content.CTA1ButtonText" :button-url="content.CTA1ButtonLink" />

        <common-contact-us
            id="videoTestimonials"
            :video-thumbnail-u-r-l="content.video1ThumbnailUrl"
            :button-title="content.video1ButtonText"
            :button-u-r-l="content.video1ButtonLink"
            :video-u-r-l="content.video1Url"
            :title="content.video1Title"
        />

        <home-about-client :title="content.section5Title" :testimonials="section5Data" />

        <common-tell-more-about-projects
            :featured-companies="section6LogoUrls"
            :tell-us-more-data="section6Data"
            :tell-us-more-title="content.section6Title"
            :tell-use-more-subtitle="content.section6Subtitle"
            :image-url="content.section6ImgUrl"
        />

        <common-client-words :title="content.section7Title" :description="content.section7Description" :testimonials="section7Data" />

        <common-interested-service
            id="buyService"
            :background-image="content.section8ImgUrl"
            :subtitle="content.section8Subtitle"
            :title="content.section8Title"
            :description="content.section8Description"
            :button-link="content.section8ButtonLink"
            :button-title="content.section8ButtonText"
        />

        <!-- our-team -->
        <div>
            <common-our-team class="pb-10 md:!pb-0" :title="content.section9Title" :description="content.section9Description" :teams="section9Data" />
        </div>

        <common-faq :title="content.section10Title" :description="content.section10Description" :faqs="section10Data" />

        <common-readytotalk :img-url="readyToTalkForm.imgUrl" :service-options="readyToTalkForm.services.data" :about-paragraph="readyToTalkForm.aboutParagraph" :title="readyToTalkForm.title" :talk-in-title="readyToTalkForm.talkInTitle" />

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
                    {
                        rel: 'preload',
                        href: this.content?.bannerImgUrl,
                        as: 'image',
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
    };
</script>
