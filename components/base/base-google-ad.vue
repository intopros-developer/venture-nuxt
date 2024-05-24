<template>
    <div v-if="content">
        <!-- Hero form -->
        <section class="contact-heroform group relative overflow-hidden bg-cover bg-center bg-no-repeat">
            <video class="responsive-contact-us-section-video absolute h-full w-full object-cover" :style="videoHeight" autoplay loop muted playsinline>
                <source :src="content.bannerVideoUrl" type="video/mp4" />
            </video>
            <div>
                <div class="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-r from-[#2b3746]"></div>
                <div class="container relative z-10 px-10 pb-[146px] pt-[65px] md:px-4 lg:px-[97px] xl:px-4 xl:pb-[211px] xl:pt-[232px]">
                    <div>
                        <div class="items-center justify-between gap-4 space-y-4 lg:flex lg:space-y-0">
                            <div class="flex-1">
                                <p class="mb-[17px] border-l-[5px] border-primary pl-1.5 text-xl font-normal leading-[21px] text-[#FBFBFD]">
                                    {{ content.bannerSubtitle }}
                                </p>
                                <p class="text-2xl font-bold uppercase leading-[30px] text-[#F7F4F4] xl:text-[36px] xl:leading-9">
                                    {{ content.bannerTitle }}
                                </p>
                                <p class="mt-[22px] w-full text-sm leading-5 text-[#FBFBFD] sm:max-w-[420px] md:text-xl md:leading-[26px]">
                                    {{ content.bannerDescription }}
                                </p>
                                <ul class="mb-7 flex flex-wrap items-start gap-y-3 pt-8 text-white sm:gap-4 md:max-w-[491px] lg:grid lg:grid-cols-2 xl:flex">
                                    <li v-for="data in bannerData" class="w-1/2 grow text-center text-3xl font-bold sm:w-auto md:text-[45px] md:leading-[50px]">
                                        {{ data.attributes.sectionDescription }} <span class="block text-[15px] font-normal">{{ data.attributes.sectionName }}</span>
                                    </li>
                                </ul>
                                <div>
                                    <a :href="content.bannerButtonUrl" class="outline-btn w-full px-11 py-[14px] text-center text-lg font-semibold leading-[21px] md:w-auto">
                                        {{ content.bannerButtonText }}
                                    </a>
                                </div>
                            </div>
                            <div class="lg:max-w-sm xl:max-w-[490px]">
                                <nuxt-img format="webp" :src="content.bannerImageUrl" :alt="content.bannerTitle" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- tabs-options -->
        <common-banner-tab :tabs="tabs" />

        <common-dynamic-questionnaire :data="questionnaires"></common-dynamic-questionnaire>

        <!-- About -->
        <section class="pb-20 pt-14 md:pb-32">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-8 flex items-center justify-center gap-2.5 text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 id="aboutUs" class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section2Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <common-toggle-content :content="content.section2Description" />
            </div>
        </section>

        <common-contact-us :videoThumbnailURL="content.video1ThumbnailUrl" :buttonTitle="content.video1ButtonText" :buttonURL="content.video1ButtonLink" :videoURL="content.video1Url" :title="content.video1Title" />

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

                    <!--                    <div class="mt-4 flex-1 md:mt-0">-->
                    <!--                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-[10px] lg:grid-cols-3">-->
                    <!--                            <div v-for="(item) in activeCategorySampleData"-->
                    <!--                                 class="flex cursor-pointer flex-col justify-between rounded-2xl border border-[#dfdfdf] px-10 pt-[18px] pb-[9px] text-center duration-200 hover:shadow-[0px_1px_8px_rgba(0,0,0,0.12)]"-->
                    <!--                                 @click="$refs.previewModal.open(), activeProductData = item.attributes">-->
                    <!--                                <img loading="lazy" :src="item.attributes.thumbnailImgUrl || '/assets/img/indus_market_report_02.png'"-->
                    <!--                                     class="mx-auto" alt="" />-->
                    <!--                                <div class="pt-[5px]">-->
                    <!--                                    <button type="button" class="text-[15px] font-semibold leading-[22px] text-primary">-->
                    <!--                                        Preview-->
                    <!--                                        <icons-arrow-right-thin class="relative -mt-[3px] inline-block" />-->
                    <!--                                    </button>-->
                    <!--                                </div>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->

                    <common-category-slider :active-category-sample-data="activeCategorySampleData" @preview="previewLatestWork" />
                </div>
            </div>
        </section>

        <!-- Buy your business plan today -->
        <home-private-placement
            :featuredCompanies="section4Data"
            :featuredInText="content.section4Title"
            :description="content.CTA1Description"
            :title="content.CTA1Title"
            :buttonText="content.CTA1ButtonText"
            :buttonLink="content.CTA1ButtonLink"
        />

        <!-- Featured Services -->
        <div class="container mb-16 mt-16 px-10 md:mt-[110px] md:px-4 lg:px-[97px] xl:px-4">
            <div class="mb-10 flex items-center justify-center gap-[33px] text-center">
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                <h2 id="learnAboutOurPlans" class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section5Title"></h2>
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
            </div>
            <common-featured-services :services="section5Data" />
        </div>

        <section class="bg-white py-16 md:py-20 xl:pb-[100px] xl:pt-[76px]">
            <div class="container">
                <div id="viewMarketReports" class="mb-4 flex items-center justify-center gap-[33px] text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section6Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <div class="mx-auto space-y-5 text-center text-[17px] leading-6 -tracking-[0.03px] text-[#202a36] xl:max-w-[766px] xl:-tracking-[0.04px]">
                    <p>
                        {{ content.section6Description }}
                    </p>
                </div>
                <div class="grid grid-cols-1 gap-7 space-y-4 pt-8 md:grid-cols-2 md:space-y-0 md:pt-[78px]">
                    <div class="flex flex-col justify-between" v-for="item in section6Data">
                        <nuxt-img format="webp" :src="item.attributes.imgUrl" class="mx-auto max-w-full md:max-w-[360px]" :alt="item.attributes.title" loading="lazy" />
                        <div class="mt-4 text-center">
                            <button type="button" class="text-[15px] font-semibold text-primary" @click="$refs.previewModal.open(), previewSelectedMarketReport(item.attributes.marketReports)">
                                {{ item.attributes.title }}
                                <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="6" height="9" viewBox="0 0 6 9">
                                    <g>
                                        <g>
                                            <path fill="#00a1f1" d="M5.688 4.792a.741.741 0 0 0-.213-.513L1.919.723A.742.742 0 0 0 .868 1.769l3.033 3.033L.868 7.834a.741.741 0 1 0 1.051 1.047l3.556-3.556a.741.741 0 0 0 .213-.533z" />
                                        </g>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white py-16 md:pb-[110px] md:pt-10">
            <div class="container">
                <div class="grid grid-cols-1">
                    <div v-html="content.section7Title"></div>
                    <div class="py-10">
                        <nuxt-img format="webp" :src="content.section7ImgUrl" :alt="content.section7Subtitle" class="mx-auto" loading="lazy" />
                    </div>
                    <div class="text-center">
                        <h4 class="text-2xl font-medium uppercase text-[#202a36]">{{ content.section7Subtitle }}</h4>
                        <p class="mt-5 text-[17px] text-[#202a36]">{{ content.section7Description }}</p>
                    </div>
                    <div class="pt-[76px] text-center">
                        <nuxt-link v-if="$helper.isInternalUrl(content.section7ButtonLink)" :to="content.section7ButtonLink" class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6">{{ content.section7ButtonText }}</nuxt-link>
                        <a target="_blank" :href="content.section7ButtonLink" v-else :to="content.section7ButtonLink" class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6">{{ content.section7ButtonText }}</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- common-business-challenge -->
        <common-business-challenge :title="content.section8Title" :image="content.section8ImgUrl" :values="section8Data" :buttonText="content.section8ButtonText" :buttonUrl="content.section8ButtonLink" />

        <section class="py-10 lg:pb-[198px] lg:pt-[93px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-4 flex items-center justify-center gap-[33px] text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 id="ourProcess" class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section9Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <div class="mx-auto max-w-lg space-y-5 text-center text-sm font-medium leading-6 -tracking-[0.03px] text-[#586376] xl:max-w-[732px] xl:text-xl xl:leading-9 xl:-tracking-[0.04px]">
                    <p>{{ content.section9Description }}</p>
                </div>
                <div class="mt-10 space-y-8 md:mt-[70px] md:space-y-14 xl:space-y-28">
                    <div v-for="(process, i) in section9Data" :key="i" class="grid grid-cols-1 items-start justify-between gap-10 md:grid-cols-2 xl:gap-20">
                        <div class="order-2 mb-10 md:mb-0" :class="{ 'md:!order-1': i % 2 !== 0 }">
                            <nuxt-img format="webp" :src="process.attributes.imgUrl" :alt="process.attributes.title" class="mx-auto" :class="{ ' h-[201px]': i === 0, ' h-[253px]': i === 1, ' h-[199px]': i === 2 }" loading="lazy" />
                        </div>
                        <div :class="{ 'md:!order-2': i % 2 !== 0 }">
                            <div class="mb-3 flex gap-5 xl:gap-7">
                                <span class="h-12 w-12 flex-none rounded-full bg-primary text-center text-2xl font-bold leading-[48px] text-white xl:h-[54px] xl:w-[54px] xl:leading-[54px]">{{ i + 1 }}</span>
                                <div class="max-w-[510px] flex-1">
                                    <h3 class="mb-3 mt-3 text-xl font-bold leading-7 text-[#202a36] xl:mb-6 xl:text-[21px]">
                                        {{ process.attributes.title }}
                                    </h3>
                                    <p v-if="process.attributes.description && !activeProcessReadMore.includes(i)" class="overflow-hidden text-sm font-medium text-[#353535] xl:text-lg xl:leading-9">
                                        {{ process.attributes.description.slice(0, process.attributes.description.indexOf('\n')) }}
                                    </p>
                                    <p v-if="activeProcessReadMore.includes(i)" class="overflow-hidden text-sm font-medium text-[#353535] xl:text-lg xl:leading-9">
                                        {{ process.attributes.description }}
                                    </p>
                                    <button :aria-label="$t('read_more')" class="mt-3 flex items-center justify-start gap-4 text-sm font-semibold text-primary xl:text-xl" @click="toggleProcess(i)">
                                        <p class="text-base">{{ activeProcessReadMore.includes(i) ? $t('read_less') : $t('read_more') }}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6" class="h-1 w-2 xl:h-[6px] xl:w-[11px]" :class="{ 'rotate-180': activeProcessReadMore.includes(i) }">
                                            <g>
                                                <g>
                                                    <path fill="currentColor" d="M.439.546l4.907 4.907L10.254.546z"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Interested Service -->
        <!-- <common-interested-service :value="content.buyService.fields" /> -->
        <common-interested-service
            :backgroundImage="content.section10ImgUrl"
            :subtitle="content.section10Subtitle"
            :title="content.section10Title"
            :description="content.section10Description"
            :buttonLink="content.section10ButtonLink"
            :buttonTitle="content.section10ButtonText"
        />

        <!-- Our Client -->
        <section>
            <common-client-words :title="content.section11Title" :description="content.section11Description" :testimonials="section11Data" />
        </section>

        <home-sector-excelled :title="content.section12Title" :description="content.section12Description" :data="section12Data" />

        <section class="py-10">
            <common-tell-more-about-projects :featuredCompanies="section4Data" :tellUsMoreData="section13Data" :tellUsMoreTitle="content.section13Title" :tellUseMoreSubtitle="content.section13Subtitle" :imageUrl="content.section13ImgUrl" />
        </section>

        <!-- our-team -->
        <div>
            <common-our-team class="pb-10 md:!pb-0" :title="content.section14Title" :description="content.section14Description" :teams="section14Data" />
        </div>
        <!-- FAQ -->
        <common-faq :title="content.section15Title" :description="content.section15Description" :faqs="section15Data" />

        <!-- Brand logo -->
        <common-brand-logo :logos="logoSliders" />

        <!-- Ready To Talk -->
        <common-readytotalk :imgUrl="readyToTalkForm.imgUrl" :serviceOptions="readyToTalkForm.services.data" :aboutParagraph="readyToTalkForm.aboutParagraph" :title="readyToTalkForm.title" :talkInTitle="readyToTalkForm.talkInTitle" />

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
                            <span v-if="activeProductData.isBusinessPlan" class="block text-xs font-bold text-black"> Client </span>
                            <span v-else class="block text-xs font-bold text-black"> Type </span>
                            {{ activeProductData.client }}
                        </li>
                        <li><span class="block text-xs font-bold text-black">Industry</span>{{ activeProductData.industry }}</li>
                        <li v-if="activeProductData.isBusinessPlan">
                            <span class="block text-xs font-bold text-black">Total Raised</span>
                            {{ activeProductData.totalRaised }}
                        </li>
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
                        <div class="swiper-wrapper items-center !px-10">
                            <div v-if="activeProductData.images" class="swiper-slide bg-white p-4" v-for="(image, i) in activeProductData.images">
                                <nuxt-img format="webp" :src="image.imgUrl" class="h-full w-full object-cover" :alt="'swiper-slide' + i" loading="lazy" />
                            </div>
                        </div>
                        <div class="swiper-button-next -mr-3"></div>
                        <div class="swiper-button-prev -ml-3"></div>
                    </div>

                    <iframe v-else class="h-screen w-full" :src="activeProductData.pdfUrlField" frameborder="0"></iframe>
                </div>
            </div>
        </common-modal>
    </div>
</template>

<script>
    import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
    import ClickOutside from 'vue-click-outside';
    import { alphaNumericSpace } from '~/helper/custom-validations';

    export default {
        props: {
            content: {
                type: Object,
                default: () => {
                    return null;
                },
            },
        },
        directives: {
            ClickOutside,
        },
        data() {
            return {
                videoHeight: 571,
                activeProcessReadMore: [],
                params: {
                    service: '',
                    fullName: '',
                    email: '',
                    phone: '',
                },
                activeCategoryData: {},
                activeProductData: {},
                isShowOptions: false,
                serviceOptions: [
                    'Management Consulting',
                    'Business Strategy',
                    'Legal Advisory',
                    'Financing',
                    'Technology',
                    'Careers',
                    'Internship & Externship',
                    'Invest in Private Equity',
                    'Investor Relations Software (Ai)',
                    'Industry Market Reports',
                ],
                isSubmitted: false,
                isClearSearch: false,
                showService: false,
                tabs: [
                    {
                        id: 'aboutUs',
                        title: 'About Us',
                    },
                    {
                        id: 'ourPortfolio',
                        title: 'Our Portfolio',
                    },
                    {
                        id: 'learnAboutOurPlans',
                        title: 'Learn About Our Business Plans',
                    },
                    {
                        id: 'viewMarketReports',
                        title: 'View Market Reports',
                    },
                    {
                        id: 'ourProcess',
                        title: 'Our Process',
                    },
                    {
                        id: 'readyToTalk',
                        title: 'Ready to Talk',
                    },
                    {
                        id: 'faqs',
                        title: 'FAQ',
                    },
                ],

                businessPlanProcess: [
                    {
                        fields: {
                            id: 1,
                            title: 'Interview ',
                            description:
                                'Our business plan process begins with a personalized interview, and if needed a secondary interview with the company’s founder and management. We engage in top-level discussions about your business vision, objectives and strategies. ',
                            image: {
                                fields: {
                                    file: {
                                        url: '//images.ctfassets.net/koyrlvjc3wvc/gpM1blYYmvdubjTfHR6wC/140e72b4bcdb9ee3d32318c7cecf4d70/bp-1-1.5x.webp',
                                    },
                                },
                            },
                        },
                    },
                    {
                        fields: {
                            id: 2,
                            title: 'Strategy & Insights ',
                            description:
                                'Having attained a deep understanding of our client’s vision and needs, our experienced consultants provide turnkey solutions to resolve obstacles in a timely and efficient manner. Timing, Market, Competitors, Business Objectives, Barriers to entry, Capital, Team Personnel, competitive advantages, problem and solutions. ',
                            image: {
                                fields: {
                                    title: 'grant_application_process_2',
                                    description: '',
                                    file: {
                                        url: '//images.ctfassets.net/koyrlvjc3wvc/CmbuVIEDRQLSI9SItHRrA/5614de5185a3f18ec5d0f7dcb52ac0dc/bp-2-1.5x.webp',
                                    },
                                },
                            },
                        },
                    },
                    {
                        fields: {
                            id: 3,
                            title: 'Market Research: ',
                            description:
                                'Market research is a systematic investigation to obtain knowledge on target markets and customers, beginning with customer identities. It is an essential component of corporate strategy and a critical aspect in retaining competitiveness.',
                            image: {
                                fields: {
                                    title: 'grant_application_process_3',
                                    description: '',
                                    file: {
                                        url: '//images.ctfassets.net/koyrlvjc3wvc/7bcAOGjTxQdzfwhSciU4tx/9452b4c1181aef30765f9d6ce149afd8/bp-3-1.5x.webp',
                                    },
                                },
                            },
                        },
                    },
                    {
                        fields: {
                            id: 4,
                            title: 'Financials ',
                            description:
                                'First impressions are indispensable to raising capital! Business ventures require data driven projected financial forecasts. To name a few (Income Statement, Balance Sheet, Cashflow, Assumptions, Pre, Post, and Exit Money Valuations, & Company EBITDA. ',
                            image: {
                                fields: {
                                    title: 'grant_application_process_3',
                                    description: '',
                                    file: {
                                        url: '//images.ctfassets.net/koyrlvjc3wvc/4iZoP4SdK3Q4wLbveb8K3/d34b917b8d7a7b221037e474c867d331/bp-4-1.5x.webp',
                                    },
                                },
                            },
                        },
                    },
                ],

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
                        hid: 'description',
                        name: 'description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'og:image',
                        name: 'og:image',
                        content: this.content?.metaFields[0]?.socialImgUrl,
                    },
                    {
                        hid: 'og:image:secure_url',
                        name: 'og:image:secure_url',
                        content: this.content?.metaFields[0].socialImgUrl,
                    },
                    {
                        hid: 'og:description',
                        name: 'og:description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'twitter:description',
                        name: 'twitter:description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'twitter:title',
                        property: 'twitter:title',
                        content: this.content?.metaFields[0]?.title,
                    },
                    {
                        hid: 'twitter:image',
                        name: 'twitter:image',
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
                return this.content?.dynamicQuestionnaires?.data?.attributes || [];
            },
            bannerData() {
                return this.content?.bannerComponent?.data || [];
            },
            section1Data() {
                return this.content?.section1Component?.data || [];
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
            section8Data() {
                return this.content?.section8Component?.data || [];
            },
            section9Data() {
                return this.content?.section9Component?.data || [];
            },
            section11Data() {
                return this.content?.section11Component?.data || [];
            },
            section12Data() {
                return this.content?.section12Component?.data || [];
            },
            section13Data() {
                return this.content?.section13Component?.data || [];
            },
            section14Data() {
                return this.content?.section14Component?.data || [];
            },
            section15Data() {
                return this.content?.section15Component?.data || [];
            },
            logoSliders() {
                return this.content?.logoSlider?.data?.attributes?.logoUrls || [];
            },
            readyToTalkForm() {
                return this.content?.readyToTalkForm?.data?.attributes || { services: { data: [] } };
            },
            searchResult() {
                return !this.$helper.isEmpty(this.params.service) ? this.params.service : "LET'S WORK TOGETHER";
            },
            activeCategorySampleData() {
                return this.activeCategoryData?.attributes?.sampleWorks?.data || this.content?.section3Component?.data[0]?.attributes?.sampleWorks?.data || [];
            },
        },

        watch: {
            'params.service': {
                handler() {
                    if (this.$helper.isEmpty(this.params.service)) {
                        this.$refs.multiselect.activate();
                        this.$refs.multiselect.$el.focus();
                    }
                },
                deep: true,
            },
        },

        mounted() {
            this.activeCategoryData = this.content?.section3Component?.data[0]?.attributes?.sampleWorks?.data[0] || {};
            if (window.innerWidth <= 768) {
                this.videoHeight = 350;
            } else {
                this.videoHeight = 571;
            }
        },

        validations() {
            return {
                params: {
                    fullName: { required, alphaNumericSpace, minLength: minLength(3) },
                    email: { required, email },
                    phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                    service: { required },
                },
            };
        },

        methods: {
            previewSelectedMarketReport(marketReport) {
                if (marketReport?.data?.[0]?.attributes) {
                    this.activeProductData = marketReport.data[0].attributes;
                }
            },
            handleScroll(anchorId) {
                const anchor = document.querySelector(`#${anchorId}`);
                if (anchor) {
                    window.scrollTo({
                        top: anchor.getBoundingClientRect().top + window.pageYOffset - (window.innerWidth < 768 ? 185 : 150),
                    });
                }
            },

            openSearch() {
                this.showService = !this.showService;
                if (this.showService) {
                    // this.$refs.multiselect.activate();
                    // this.$refs.multiselect.$el.focus();
                }
            },

            toggleProcess(id) {
                if (this.activeProcessReadMore.includes(id)) {
                    this.activeProcessReadMore = this.activeProcessReadMore.filter((d) => d !== id);
                } else {
                    this.activeProcessReadMore.push(id);
                }
            },

            closeSearch() {
                this.showService = false;
            },

            searchChange(searchQuery, id) {
                if (!this.$helper.isEmpty(searchQuery)) {
                    this.isClearSearch = true;
                } else {
                    this.isClearSearch = false;
                }
            },

            onSelect() {
                this.showService = false;
            },

            onSubmit() {
                this.$v.params.$touch();
                if (this.$v.params.$invalid || this.$v.params.$error) {
                    return false;
                }

                this.isSubmitted = true;
                this.$v.params.$reset();
                this.params = {
                    service: '',
                    fullName: '',
                    email: '',
                    phone: '',
                };
            },
            previewLatestWork(data) {
                this.$refs.previewModal.open();
                this.activeProductData = data;
                this.isMarketPlanOpened = false;
            },
        },
    };
</script>
<style scoped>
    .swiper-button-prev::after,
    .swiper-button-next::after {
        color: #00adff !important;
    }

    .swiper-button-next {
        right: 36px;
    }

    .swiper-button-prev {
        left: 36px;
    }

    iframe {
        width: 100% !important;
        height: 67vh !important;
    }
</style>
