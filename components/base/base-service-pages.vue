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
                    <p class="mb-[19px] font-normal leading-4 text-[#FBFBFD] xl:leading-6">{{ content.bannerSubtitle }}</p>
                    <h1 class="mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px]">{{ content.bannerTitle }}</h1>
                    <div class="flex items-center gap-[10px]">
                        <div class="absolute -left-4 h-[95%] w-[5px] bg-primary"></div>
                        <p class="font-normal leading-4 text-[#FBFBFD] xl:leading-6" v-html="content.bannerDescription"></p>
                    </div>
                </div>
            </div>
        </section>
        <section v-else class="relative bg-cover bg-center bg-no-repeat pb-10 pt-[166px] md:bg-left xl:pb-20" :style="{ backgroundImage: `url(${content.bannerImageUrl})` }">
            <div class="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]"></div>
            <div class="absolute top-0 z-0 h-full w-full bg-gradient-to-r from-[#2B3746]/70 md:-left-[40%] md:w-[90%]"></div>
            <div class="container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div>
                    <p class="mb-[19px] font-normal leading-4 text-[#FBFBFD] xl:leading-6">{{ content.bannerSubtitle }}</p>
                    <h1 class="mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px]">{{ content.bannerTitle }}</h1>
                    <div class="relative flex items-center gap-[10px]">
                        <div class="absolute -left-4 h-[95%] w-[5px] bg-primary"></div>
                        <p class="font-normal leading-5 text-[#FBFBFD] xl:leading-6" v-html="content.bannerDescription"></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- tabs-options -->
        <common-banner-tab :tabs="tabs" :is-show-save-btn="true" />

        <common-dynamic-questionnaire :data="questionnaires"></common-dynamic-questionnaire>

        <!-- Company overview -->
        <common-company-overview id="overview" :value="content.section1Paragraph" :title="content.section1Title" />

        <div v-if="content.CTA1ButtonText" class="pt-10 text-center lg:pt-[102px]">
            <nuxt-link v-if="$helper.isInternalUrl(content.CTA1ButtonLink)" :to="content.CTA1ButtonLink" class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6">
                {{ content.CTA1ButtonText }}
            </nuxt-link>

            <a v-else target="_blank" :href="content.CTA1ButtonLink" class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6">{{ content.CTA1ButtonText }}</a>
        </div>

        <!-- diverseEnvironment -->
        <section id="diverseEnvironment" class="py-10 lg:pt-24 xl:pt-[185px]">
            <div class="container lg:px-[97px] xl:px-4">
                <div class="text-center md:mb-[50px]">
                    <div class="mb-6 flex items-center justify-center gap-[5px] text-center md:mb-9 md:gap-8">
                        <div class="block h-px w-full bg-[#d5d5d5]"></div>
                        <h2 class="shrink-0 text-2xl font-bold uppercase text-black lg:text-3xl lg:leading-[43px]" v-html="content.section2Title"></h2>
                        <div class="block h-px w-full bg-[#d5d5d5]"></div>
                    </div>
                    <p class="mx-auto max-w-[925px] text-base font-medium leading-6 -tracking-[0.03px] text-[#586376] md:text-[22px] md:leading-8">
                        {{ content.section2Description }}
                    </p>
                </div>
            </div>
        </section>

        <common-contact-us :video-thumbnail-u-r-l="content.video1ThumbnailUrl" :button-title="content.video1ButtonText" :button-u-r-l="content.video1ButtonLink" :video-u-r-l="content.video1Url" :title="content.video1Title" />

        <!-- Start portfolio -->
        <section class="bg-white py-16 md:pb-[101px] md:pt-20 xl:pt-[92px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="grid grid-cols-1">
                    <div id="ourPortfolio">
                        <h5 class="mb-4 text-[23px] uppercase text-[#030303]">{{ content.section3Subtitle }}</h5>
                        <h5 class="text-[26px] font-bold uppercase leading-[36px] text-[#030303]">{{ content.section3Title }}</h5>
                        <p class="pt-[27px] text-xs font-bold uppercase leading-9 tracking-[1.2px] text-[#030303]">{{ content.section3Description }}</p>
                    </div>
                </div>
                <div class="items-start gap-6 pt-[27px] md:flex">
                    <div class="max-w-[275px] flex-1">
                        <ul>
                            <li
                                v-for="(category, i) in section3Data"
                                :key="i"
                                class="rounded-md text-[#707070] hover:!border-primary hover:bg-[#eaf7ff] hover:text-primary"
                                :class="{ 'font-bold !text-primary': activeCategoryData.id == category.id }"
                                @click="activeCategoryData = category"
                            >
                                <p class="block rounded-md border border-transparent px-[11px] py-1 text-lg hover:border-primary">{{ category.attributes.title }}</p>
                            </li>
                        </ul>
                    </div>

                    <common-category-slider :active-category-sample-data="activeCategorySampleData" @preview="previewLatestWork" />
                </div>
            </div>
        </section>

        <!-- Distinct Qualities -->
        <common-venture-plans id="whyVenturePlans" :title="content.section4Title" :data="section4Data" />

        <section id="featuredServices" class="bg-[#fbfbfd]">
            <div class="container px-10 py-10 md:px-4 md:py-16 lg:px-[97px] lg:pt-0 xl:px-4">
                <div class="mb-9 flex items-center justify-center gap-2 text-center sm:gap-[33px] md:mb-[67px]">
                    <div class="block h-px w-full bg-[#D5D5D5]"></div>
                    <h2 class="shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl [&>span]:text-primary" v-html="content.section5Title"></h2>
                    <div class="block h-px w-full bg-[#D5D5D5]"></div>
                </div>
                <common-featured-services :services="section5Data" />
            </div>
        </section>

        <home-private-placement
            :featured-companies="section6Data"
            :featured-title="content.section6Title"
            :featured-in-text="content.section6Title"
            :description="content.CTA2Description"
            :title="content.CTA2Title"
            :button-text="content.CTA2ButtonText"
            :button-link="content.CTA2ButtonLink"
        />

        <common-tell-more-about-projects :featured-companies="section6Data" :tell-us-more-data="section7Data" :tell-us-more-title="content.section7Title" :tell-use-more-subtitle="content.section7Subtitle" :image-url="content.section7Img" />

        <!-- Our Client -->
        <common-client-words id="ourClientsWords" :title="content.section8Title" :description="content.section8Description" :testimonials="section8Data" />

        <common-contact-us :video-thumbnail-u-r-l="content.video2ThumbnailUrl" :button-title="content.video2ButtonText" :button-u-r-l="content.video2ButtonLink" :video-u-r-l="content.video2Url" :title="content.video2Title" />

        <section class="py-10 lg:pb-[198px] lg:pt-[93px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div id="grantApplicationProcess" class="mb-4 flex items-center justify-center gap-[33px] text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section9Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <div class="mx-auto max-w-lg space-y-5 text-center text-sm font-medium leading-6 -tracking-[0.03px] text-black xl:max-w-[732px] xl:text-base xl:leading-9 xl:-tracking-[0.04px]">
                    <p>{{ content.section9Description }}</p>
                </div>
                <div class="mt-10 space-y-8 md:mt-[70px] md:space-y-14 xl:space-y-28">
                    <div v-for="(process, i) in section9Data" :key="i" class="grid grid-cols-1 items-start justify-between gap-10 md:grid-cols-2 xl:gap-20">
                        <div class="order-2 mb-10 md:mb-0" :class="{ 'md:!order-1': i % 2 !== 0 }">
                            <img :src="process.attributes.imgUrl" :alt="process.attributes.title" class="mx-auto" :class="{ ' h-[201px]': i === 0, ' h-[253px]': i === 1, ' h-[199px]': i === 2 }" loading="lazy" />
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

        <common-interested-service
            id="buyGrantServices"
            :background-image="content.video3Url"
            :subtitle="content.Video3MiniTitle"
            :title="content.video3Title"
            :description="content.video3Description"
            :button-link="content.video3ButtonLink"
            :button-title="content.video3ButtonText"
        />

        <!-- Our Team -->
        <common-our-team id="ourTeam" class="pb-10 md:!pb-0" :title="content.section10Title" :description="content.section10Description" :teams="section10Data" />

        <section class="py-10 lg:pb-[219px]">
            <div class="container">
                <div class="grid grid-cols-1">
                    <div class="text-center">
                        <a :href="content.CTA3ButtonLink" class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6">{{ content.CTA3ButtonText }}</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ -->
        <common-faq :title="content.section11Title" :description="content.section11Description" :faqs="section11Data" />

        <!-- Brand logo -->
        <common-brand-logo :logos="logoSliders" />

        <!-- Ready To Talk -->
        <common-readytotalk
            id="readyToTalk"
            :img-url="readyToTalkForm.imgUrl"
            :service-options="readyToTalkForm.services.data"
            :about-paragraph="readyToTalkForm.aboutParagraph"
            :title="readyToTalkForm.title"
            :talk-in-title="readyToTalkForm.talkInTitle"
        />

        <common-modal ref="previewModal" class="" width="1440" background="bg-[#fafafa]">
            <div>
                <button type="button" class="absolute right-4 top-4 md:right-8 md:top-8" @click="$refs.previewModal.close()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                        <g>
                            <g>
                                <g>
                                    <path d="M.75 17a.729.729 0 0 1-.513-1.242L14.802 1.193a.728.728 0 1 1 1.03 1.03L1.269 16.79a.728.728 0 0 1-.517.21z" />
                                </g>
                                <g>
                                    <path d="M15.343 17a.73.73 0 0 1-.515-.216L.214 2.171a.73.73 0 1 1 1.034-1.033L15.862 15.75a.731.731 0 0 1-.52 1.25z" />
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
                <div>
                    <ul class="mb-8 flex flex-col gap-4 text-base text-[#6c6c6c] md:flex-row md:gap-16">
                        <li>
                            <span v-if="activeProductData.isBusinessPlan" class="block text-xs font-bold text-black">Client</span>
                            <span v-else class="block text-xs font-bold text-black">Type</span>
                            {{ activeProductData.client }}
                        </li>
                        <li><span class="block text-xs font-bold text-black">Industry</span>{{ activeProductData.industry }}</li>
                        <li v-if="activeProductData.isBusinessPlan"><span class="block text-xs font-bold text-black">Total Raised</span>{{ activeProductData.totalRaised }}</li>
                    </ul>
                    <div class="mb-5 flex flex-col items-start justify-between gap-4 md:flex-row">
                        <p class="text-base text-[#6c6c6c] md:max-w-[350px] lg:max-w-[527px]"><span class="block text-xs font-bold text-black">Description</span>{{ activeProductData.description }}</p>
                        <div class="flex flex-wrap gap-2">
                            <nuxt-link v-if="$helper.isInternalUrl(activeProductData.buttonUrl)" :to="activeProductData.buttonUrl" class="b-btn w-full rounded px-9 py-4 text-base md:w-auto" @click="$refs.previewModal.close()">{{
                                activeProductData.buttonTitle
                            }}</nuxt-link>
                            <a v-else target="_blank" :href="activeProductData.buttonUrl" class="b-btn w-full rounded px-9 py-4 text-base md:w-auto" @click="$refs.previewModal.close()">{{ activeProductData.buttonTitle }}</a>
                            <nuxt-link v-if="$helper.isInternalUrl(activeProductData.pdfUrlField)" :to="activeProductData.pdfUrlField" class="b-btn w-full rounded px-9 py-4 text-base md:w-auto" @click="$refs.previewModal.close()"
                                >View Document</nuxt-link
                            >
                            <a v-else target="_blank" :href="activeProductData.pdfUrlField" class="b-btn w-full rounded px-9 py-4 text-base md:w-auto" @click="$refs.previewModal.close()">View Document</a>
                        </div>
                    </div>

                    <div v-if="activeProductData.descriptionMediaType === 'images'" v-swiper:brandLogo="slider_options" class="swiper relative bg-transparent" :cleanup-styles-on-destroy="false">
                        <div v-if="activeProductData.images" class="swiper-wrapper items-center !px-10">
                            <div v-for="(image, i) in activeProductData.images" :key="image.imgUrl" class="swiper-slide bg-white p-4">
                                <img :src="image.imgUrl" class="h-full w-full object-cover" :alt="'swiper-slide_' + i" loading="lazy" />
                            </div>
                        </div>
                        <div class="swiper-button-next -mr-3"></div>
                        <div class="swiper-button-prev -ml-3"></div>
                    </div>

                    <iframe v-else class="h-screen w-full" :src="activeProductData.pdfUrlField" loading="lazy" frameborder="0"></iframe>
                </div>
            </div>
        </common-modal>
    </div>
</template>

<script>
    import commonToggleContent from '../common/common-toggle-content.vue';
    export default {
        components: { commonToggleContent },
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
                tabs: [
                    {
                        id: 'overview',
                        title: 'Overview',
                    },
                    {
                        id: 'ourPortfolio',
                        title: 'Our Portfolio',
                    },
                    {
                        id: 'whyVenturePlans',
                        title: 'Why Venture Plans',
                    },
                    {
                        id: 'featuredServices',
                        title: 'Grant Services',
                    },
                    {
                        id: 'ourClientsWords',
                        title: 'Our Client’s Words',
                    },
                    {
                        id: 'grantApplicationProcess',
                        title: 'Grant Application Process',
                    },
                    {
                        id: 'buyGrantServices',
                        title: 'Buy Grant Services',
                    },
                    {
                        id: 'ourTeam',
                        title: 'Our Team',
                    },
                    {
                        id: 'faqs',
                        title: 'FAQ',
                    },
                    {
                        id: 'readyToTalk',
                        title: 'Ready To Talk',
                    },
                ],
                activeCategoryData: {},
                activeProductData: {},
                slider_options: {
                    observer: true,
                    observeParents: true,
                    parallax: true,
                    loop: true,
                    slidesPerView: 1,
                    touchRatio: 1,
                    init: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
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
                        href: this.content?.bannerVideoUrl,
                        as: 'video',
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
                return this.content?.dynamicQuestionnaries?.data?.attributes || [];
            },
            grantServiceQuestions() {
                return this.content?.questionnaire?.data || [];
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
            section11Data() {
                return this.content?.section11Component?.data || {};
            },
            logoSliders() {
                return this.content?.logoSlider?.data?.attributes?.logoUrls || [];
            },
            readyToTalkForm() {
                return this.content?.readyToTalkForm?.data?.attributes || { services: { data: [] } };
            },
            activeCategorySampleData() {
                return this.activeCategoryData?.attributes?.sampleWorks?.data || this.content?.section3Component?.data[0]?.attributes?.sampleWorks?.data || [];
            },
        },

        mounted() {
            this.activeCategoryData = this.content?.section3Component?.data[0]?.attributes?.sampleWorks?.data[0] || {};
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
            previewLatestWork(data) {
                this.$refs.previewModal.open();
                this.activeProductData = data;
                this.isMarketPlanOpened = false;
            },
        },
    };
</script>
