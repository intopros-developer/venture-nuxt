<template>
    <div v-if="content">
        <section v-if="content.bannerVideoUrl" class="contact-heroform group relative overflow-hidden bg-cover bg-center bg-no-repeat">
            <video class="responsive-contact-us-section-video absolute h-auto w-full object-cover" style="min-height: 571px; height: 20vw" autoplay loop muted playsinline>
                <source :src="content.bannerVideoUrl" type="video/mp4" />
            </video>
            <div class="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]"></div>
            <div class="container relative z-10 px-10 pb-9 pt-[287px] md:bg-left md:px-4 lg:px-[97px] xl:px-4 xl:pb-20 xl:pt-[164px]">
                <div>
                    <p class="mb-5 border-l-[3px] border-primary pl-2.5 text-sm leading-3 text-[#FBFBFD] md:text-base md:leading-4">
                        {{ content.bannerSubtitle }}
                    </p>
                    <h1 class="mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px] xl:leading-[53px]">{{ content.bannerTitle }}</h1>
                    <p class="mb-[18px] border-l-[3px] border-primary pl-2.5 leading-5 text-[#FBFBFD]" v-html="content.bannerDescription"></p>
                    <a href="/book-consult" class="b-btn max-w-[250px] py-4 text-sm uppercase" style="/* display: none; */ max-width: 250px">Book a Consultation </a>
                </div>
            </div>
        </section>
        <section v-else class="relative bg-cover bg-center bg-no-repeat pb-9 pt-[164px] xl:pb-[75px]" :style="{ backgroundImage: `url(${content.bannerImgUrl})` }">
            <div class="absolute left-0 top-0 z-0 h-full w-[90%] bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-0"></div>
            <!-- <div class="absolute top-0 z-0 h-full w-full bg-black/30"></div> -->
            <div class="absolute top-0 z-0 h-full w-full bg-gradient-to-r from-[#2B3746]/70 md:-left-[40%] md:w-[90%]"></div>

            <div class="container relative z-10 lg:px-[97px] xl:px-4">
                <div>
                    <p class="mb-5 border-l-[3px] border-primary pl-2.5 text-sm leading-3 text-[#FBFBFD] md:text-base md:leading-4">
                        {{ content.bannerSubtitle }}
                    </p>
                    <h1 class="mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px] xl:leading-[53px]">
                        {{ content.bannerTitle }}
                    </h1>
                    <p class="mb-[18px] border-l-[3px] border-primary pl-2.5 leading-5 text-[#FBFBFD]" v-html="content.bannerDescription"></p>
                    <a href="/book-consult" class="b-btn max-w-[250px] py-4 text-sm uppercase" style="/* display: none; */ max-width: 250px">Book a Consultation </a>
                </div>
            </div>
        </section>

        <common-banner-tab :tabs="tabs" />

        <section v-if="content.section1Title && content.section1Description" id="consultingOverview" class="bg-[#ffffff] pb-20 pt-14 md:pb-32">
            <div class="container px-10 lg:px-[97px] xl:px-4">
                <div class="mb-9 flex items-center justify-center gap-2 text-center sm:gap-[30px] md:mb-[50px]">
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                    <h2 class="shrink-0 text-[22px] font-bold uppercase leading-8 text-black md:text-3xl md:leading-[43px]" v-html="content.section1Title"></h2>
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                </div>
                <common-toggle-content :content="content.section1Description" />
            </div>
        </section>
        <section id="ourServices" class="py-10 md:pb-20 md:pt-20 lg:py-[80px]">
            <div v-if="content.section2Title" class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-9 flex items-center justify-center gap-2 text-center sm:gap-[33px] md:mb-[67px]">
                    <div class="block h-px w-[15%] bg-[#d5d5d5] sm:w-full"></div>
                    <h2 class="max-w-[90%] text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary" v-html="content.section2Title"></h2>
                    <div class="block h-px w-[15%] bg-[#d5d5d5] sm:w-full"></div>
                </div>
                <common-featured-services :services="section2Data || []" />
            </div>
        </section>

        <section class="bg-[#ffffff]">
            <home-private-placement
                v-if="section3LogoUrls && Array.isArray(section3LogoUrls) && section3LogoUrls.length > 0"
                :featured-companies="section3LogoUrls"
                :featured-in-text="content.section3Title || ''"
                :description="content.CTA1Description || ''"
                :title="content.CTA1Title || ''"
                :button-text="content.CTA1ButtonText || ''"
                :button-link="content.CTA1ButtonLink || ''"
            />
        </section>

        <common-client-words id="ourClientsWords" :title="content.section8Title" :description="content.section8Description" :testimonials="section8Data" />

        <common-contact-us
            v-if="content.coverVideoThumbnailUrl && content.coverVideoTitle"
            :video-thumbnail-u-r-l="content.coverVideoThumbnailUrl || ''"
            :button-title="content.coverVideoButtonText || ''"
            :button-u-r-l="content.coverVideoButtonLink || ''"
            :video-u-r-l="content.coverVideoUrl || ''"
            :title="content.coverVideoTitle || ''"
        />

        <section id="consultationProcess" class="bg-[#ffffff] py-10 lg:pb-[120px] lg:pt-[93px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div id="grantApplicationProcess" class="mb-4 flex items-center justify-center gap-2 text-center sm:gap-[33px]">
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                    <h2 class="shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl" v-html="content.section4Title || ''"></h2>
                    <div class="block h-px w-full bg-[#d5d5d5]"></div>
                </div>
                <div v-if="content.section4Description" class="mx-auto max-w-lg space-y-5 text-center text-sm font-medium leading-6 -tracking-[0.03px] text-black xl:max-w-[732px] xl:text-base xl:leading-9 xl:-tracking-[0.04px]">
                    <p>{{ content.section4Description }}</p>
                </div>
                <div v-if="section4Data && Array.isArray(section4Data)" class="mt-10 space-y-8 md:mt-[70px] md:space-y-14 xl:space-y-28">
                    <div v-for="(process, i) in section4Data" :key="i" class="grid grid-cols-1 items-start justify-between gap-10 md:grid-cols-2 xl:gap-20">
                        <div class="order-2 mb-10 md:mb-0" :class="{ 'md:!order-1': i % 2 !== 0 }">
                            <nuxt-img
                                v-if="process.attributes.imgUrl && process.attributes.title"
                                format="webp"
                                :src="process.attributes.imgUrl"
                                :alt="process.attributes.title"
                                class="mx-auto"
                                :class="{ ' h-[201px]': i === 0, ' h-[253px]': i === 1, ' h-[199px]': i === 2 }"
                                loading="lazy"
                            />
                        </div>
                        <div :class="{ 'md:!order-2': i % 2 !== 0 }">
                            <div class="mb-3 flex gap-5 xl:gap-7">
                                <span class="h-12 w-12 flex-none rounded-full bg-primary text-center text-2xl font-bold leading-[48px] text-white xl:h-[54px] xl:w-[54px] xl:leading-[54px]">{{ i + 1 }}</span>
                                <div class="max-w-[510px] flex-1">
                                    <h3 class="mb-3 mt-3 text-xl font-bold leading-7 text-[#202a36] xl:mb-6 xl:text-[21px]">
                                        {{ process.attributes.title }}
                                    </h3>
                                    <common-toggle-content
                                        v-if="process.attributes.description"
                                        :content="process.attributes.description"
                                        content-class="text-sm font-medium text-[#353535] xl:text-lg xl:leading-9"
                                        :show-blur="false"
                                        read-more-class="items-center justify-start"
                                    ></common-toggle-content>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div v-if="content.section4ButtonText" class="bg-[#ffffff] pb-10 text-center lg:pb-[120px]">
            <nuxt-link v-if="$helper.isInternalUrl(content.section4ButtonLink)" :to="content.section4ButtonLink" class="b-btn text-xs lg:max-w-[322px] lg:py-6">{{ content.section4ButtonText }}</nuxt-link>
            <a v-else target="_blank" :href="content.section4ButtonLink" class="b-btn text-xs lg:max-w-[322px] lg:py-6">{{ content.section4ButtonText }}</a>
        </div>

        <common-interested-service
            v-if="content.serviceBannerImgUrl && content.ServiceBannerTitle"
            :background-image="content.serviceBannerImgUrl"
            :subtitle="content.serviceBannerSubtitle"
            :title="content.ServiceBannerTitle"
            :description="content.serviceBannerDescription"
            :button-link="content.serviceBannerButtonLink"
            :button-title="content.serviceBannerButtonText"
        />

        <common-faq id="faq" :title="content.section5Title" :description="content.section5Description" :faqs="section5Data" />

        <common-brand-logo :logos="logoSlider" />

        <common-readytotalk :img-url="readyToTalkForm.imgUrl" :service-options="readyToTalkForm.services.data" :about-paragraph="readyToTalkForm.aboutParagraph" :title="readyToTalkForm.title" :talk-in-title="readyToTalkForm.talkInTitle" />
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
                activeProcessReadMore: [],
                isLoadingMoreConsultants: false,
                isShowReadMore: false,
                tabs: [
                    {
                        id: 'consultingOverview',
                        title: 'Overview',
                    },
                    {
                        id: 'ourServices',
                        title: 'Our Services',
                    },
                    {
                        id: 'consultationProcess',
                        title: 'Our Process',
                    },
                    {
                        id: 'faq',
                        title: 'FAQ',
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
            section2Data() {
                return this.content?.section2Component?.data || [];
            },
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
            section3LogoUrls() {
                return this.content?.section3Component?.data || [];
            },
            section7Data() {
                return this.content?.section7Component?.data || [];
            },
            section8Data() {
                return this.content?.section8Component?.data || [];
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
        mounted() {
            if (this.content?.tabs && typeof this.content?.tabs === 'object') {
                let count = 0;
                delete this.content?.tabs.id;
                for (const value in this.content?.tabs) {
                    this.tabs[count].title = this.content?.tabs[value];
                    count += 1;
                }
            }
        },

        methods: {
            toggleProcess(id) {
                if (this.activeProcessReadMore.includes(id)) {
                    this.activeProcessReadMore = this.activeProcessReadMore.filter((d) => d !== id);
                } else {
                    this.activeProcessReadMore.push(id);
                }
            },
        },
    };
</script>
