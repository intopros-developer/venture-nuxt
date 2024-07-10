<template>
    <div v-if="content">
        <contact-us-heroform :title="content.bannerTitle" :sub-title="content.bannerSubTitle" :para="content.bannerDescription" :image="content.bannerImgUrl" :inquiry-reason-options="reasonForInquiries" />

        <section class="relative z-10 -mt-[42px]" :class="{ 'z-[1]': isOpenShare }">
            <div class="container relative px-10 lg:px-[97px] xl:px-4">
                <div class="flex items-center justify-between gap-4 pb-2">
                    <div class="w-full overflow-auto pb-2 lg:pb-0">
                        <ul class="flex items-center gap-4 text-[15px] text-white sm:justify-center md:gap-8 xl:gap-20">
                            <li v-for="link in Links" :key="link.name">
                                <nuxt-link :to="link.link" class="inline-block whitespace-nowrap capitalize hover:text-primary">{{ link.name }}</nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="w-5 pb-1">
                        <common-share :text-white="true" />
                    </div>
                </div>
            </div>
        </section>

        <section class="my-10 md:my-20 xl:mb-[70px] xl:mt-28">
            <div class="container px-10 lg:px-[97px] xl:px-4">
                <div class="mb-5 flex items-center justify-center gap-[5px] text-center md:mb-8 md:gap-8 xl:mb-16">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 class="text-[22px] font-bold uppercase leading-8 text-black sm:shrink-0 md:text-3xl md:leading-[43px]" v-html="content.section1Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <div class="flex flex-col items-start gap-5 md:flex-row xl:gap-52">
                    <div class="flex-1">
                        <p
                            class="overflow-hidden whitespace-pre-line text-sm font-medium leading-6 text-black-700 xl:text-lg xl:-tracking-[0.05px]"
                            :class="[isShowReadMore ? 'h-auto' : 'max-h-[102px] lg:max-h-[106px]']"
                            v-html="content.section1Description"
                        ></p>
                        <div class="!mt-[36px]">
                            <button v-if="!isShowReadMore" :aria-label="$t('read_more')" class="flex items-center justify-center gap-4 font-semibold text-primary md:justify-start xl:text-xl" @click="isShowReadMore = true">
                                <p class="text-base">{{ $t('read_more') }}</p>
                                <icons-downarrow class="w-2 xl:w-[11px]" />
                            </button>
                            <button v-else :aria-label="$t('read_less')" class="flex items-center justify-center gap-4 font-semibold text-primary md:justify-start xl:text-xl" @click="isShowReadMore = false">
                                <p class="text-base">{{ $t('read_less') }}</p>
                                <icons-downarrow class="w-2 rotate-180 xl:w-[11px]" />
                            </button>
                        </div>
                    </div>
                    <div class="mx-auto w-[271px] flex-none rounded-[42px] bg-[#F8F8F8] shadow-[0px_3px_6px_rgba(175,175,175,0.30)] lg:mr-0 xl:w-72">
                        <p class="border-b-2 border-[#ebebeb] pb-[11px] pt-[29px] text-center text-[19px] font-bold text-[#919191]">
                            {{ content.miniCardTitle }}
                        </p>
                        <div class="px-10 pb-[34px] pt-[22px] md:px-11 xl:px-12">
                            <a :href="`tel:${content.miniCardNumber}`" class="mb-3 flex items-center gap-3 text-base font-bold text-primary md:gap-5">
                                <icons-phone class="h-4 w-4" />
                                <p>{{ content.miniCardNumber }}</p>
                            </a>
                            <p class="flex items-center gap-3 text-base font-bold text-primary md:gap-5">
                                <svg xmlns="http://www.w3.org/2000/svg" class="shrink-0" width="19" height="13" viewBox="0 0 19 13">
                                    <g>
                                        <g>
                                            <path
                                                fill="currentColor"
                                                d="M17.704 3.97c.379-.199.375.033.375.211v7.058c0 .406-.548.968-.968.968H1.625c-.42 0-.968-.562-.968-.968v-7.06c0-.177-.004-.408.374-.21.537.28 7.112 3.726 7.44 3.898.33.172.56.192.878.192.318 0 .548-.02.877-.192l7.479-3.898zM1.214 1.837C.74 1.583.293.593 1.161.593h16.375c.87 0 .422.99-.052 1.245l-7.259 3.899c-.244.13-.56.192-.877.192-.318 0-.633-.061-.877-.192l-7.26-3.9z"
                                            />
                                        </g>
                                    </g>
                                </svg>
                                <a :href="`mailto:${content.miniCardEmail}`">{{ content.miniCardEmail }}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-10 md:mb-16 lg:mb-28">
            <div class="container px-10 lg:px-[97px] xl:px-4">
                <div class="mx-auto grid max-w-[300px] grid-cols-1 border border-[#d5d5d5] bg-white sm:max-w-none sm:grid-cols-2 md:grid-cols-3">
                    <div v-for="(data, i) in section2Data" :key="i" class="flex flex-col border-b border-[#d5d5d5] p-4 sm:border-r xl:p-14">
                        <h3 class="mb-5 text-lg font-semibold text-[#202a36] lg:mb-10 lg:text-[23px] lg:leading-9">{{ data.attributes.locationTitle }}</h3>
                        <div class="flex justify-between gap-5">
                            <div class="text-[15px] leading-6 -tracking-[0.03px] text-[#202a36]">
                                <div v-if="data.attributes.locationAddress" class="mb-6 min-h-[72px]" v-html="data.attributes.locationAddress"></div>
                            </div>
                            <a v-if="data.attributes.locationAddress" :href="`http://maps.google.com/maps?q=${data.attributes.locationAddress.replace(/(<|&lt;)br\s*\/*(>|&gt;)/g, '')}`" target="_blank">
                                <icons-location class="h-5 w-4 text-primary" />
                            </a>
                        </div>

                        <p>Phone: {{ data.attributes.locationPhoneNumber }}</p>
                        <a :href="`mailto:${data.attributes.locationEmail}`">
                            Email: <span class="border-b-2 border-primary hover:text-primary">{{ data.attributes.locationEmail }}</span></a
                        >

                        <div class="mb-8"></div>
                        <nuxt-link
                            :aria-label="data.attributes.linkText"
                            :to="`/cities/${data.attributes.cityPageSlug}`"
                            class="nuxt-link-active mt-auto flex items-center gap-4 text-sm font-semibold leading-[14px] text-primary hover:text-primary-700"
                        >
                            {{ data.attributes.linkText }}
                            <icons-selection-arrow class="h-3 w-3 -rotate-90" />
                        </nuxt-link>
                    </div>
                    <div v-for="(data, i) in section3Data" :key="i" class="flex flex-col border-b border-[#d5d5d5] p-4 sm:border-r xl:p-14">
                        <h3 class="mb-5 text-lg font-semibold text-[#202a36] lg:mb-10 lg:text-[23px] lg:leading-9">{{ data.attributes.title }}</h3>
                        <div class="mb-8 flex justify-between gap-5">
                            <div class="text-[15px] leading-6 -tracking-[0.03px] text-[#202a36]">
                                <div class="mb-6 min-h-[145px] md:whitespace-pre-line" v-html="data.attributes.description ? data.attributes.description : ''"></div>
                                <a v-if="data.attributes.email" :href="`mailto:${data.attributes.email}`">
                                    Email: <span class="border-b-2 border-primary hover:text-primary">{{ data.attributes.email }}</span>
                                </a>
                            </div>
                        </div>

                        <nuxt-link
                            v-if="$helper.isInternalUrl(data.attributes.linkUrl)"
                            :to="data.attributes.linkUrl"
                            :aria-label="data.attributes.linkText"
                            class="nuxt-link-active mt-auto flex items-center gap-4 text-sm font-semibold leading-[14px] text-primary hover:text-primary-700"
                        >
                            {{ data.attributes.linkText }}
                            <icons-selection-arrow class="h-3 w-3 -rotate-90" />
                        </nuxt-link>

                        <a
                            v-else
                            target="_blank"
                            :aria-label="data.attributes.linkText"
                            :href="data.attributes.linkUrl"
                            class="nuxt-link-active mt-auto flex items-center gap-4 text-sm font-semibold leading-[14px] text-primary hover:text-primary-700"
                        >
                            {{ data.attributes.linkText }}
                            <icons-selection-arrow class="h-3 w-3 -rotate-90" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <common-contact-us :video-thumbnail-u-r-l="content.video1ThumbnailUrl" :video-u-r-l="content.video1Url" :title="content.video1Title" :button-title="content.video1ButtonText" :button-u-r-l="content.video1ButtonLink" />

        <section class="my-10 md:my-16 lg:mb-[74px] lg:mt-28">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="mb-5 flex items-center justify-center gap-[5px] text-center md:gap-8">
                    <div class="hidden h-px w-full bg-[#d5d5d5] lg:block"></div>
                    <h2 class="text-[22px] font-bold uppercase leading-8 text-black md:text-3xl md:leading-[43px] lg:shrink-0 [&>span]:text-primary" v-html="content.section4Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] lg:block"></div>
                </div>
                <p class="mb-10 text-center text-sm font-medium leading-6 -tracking-[0.04px] text-[#353535] md:mb-[52px] xl:text-[1.2rem]">
                    {{ content.section4Description }}
                </p>

                <common-featured-services class="mb-10 items-center xl:mb-20" :services="section4Data" />

                <nuxt-link v-if="$helper.isInternalUrl(content.CTA1ButtonLink)" :to="content.CTA1ButtonLink" class="b-btn mx-auto block text-xs lg:max-w-[322px] lg:py-6">{{ content.CTA1ButtonText }}</nuxt-link>
                <a v-else target="_blank" :href="content.CTA1ButtonLink" class="b-btn mx-auto block text-xs lg:max-w-[322px] lg:py-6"> {{ content.CTA1ButtonText }}</a>
            </div>
        </section>

        <common-interested-service
            :background-image="content.section5ImgUrl"
            :subtitle="content.section5Subtitle"
            :title="content.section5Title"
            :description="content.section5Description"
            :button-link="content.section5ButtonLink"
            :button-title="content.section5ButtonText"
        />

        <!-- As seen on -->
        <contact-private-placement :title="content.section6Title" :logos="section6Data" />

        <section class="my-10 md:my-16 xl:mb-[87px] xl:mt-[102px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="flex flex-col items-center justify-around gap-4 sm:flex-row">
                    <a
                        :href="`http://maps.google.com/maps?q=${contactUsData.address}`"
                        target="_blank"
                        class="group mb-5 w-44 text-center text-base font-medium -tracking-[0.03px] text-black transition-all duration-300 md:mb-0 md:hover:text-primary xl:w-56 xl:text-xl xl:-tracking-[0.04px]"
                    >
                        <icons-location class="mx-auto mb-5 h-8 w-8 md:group-hover:text-primary xl:mb-[46px]" />
                        <p>{{ contactUsData.address }}</p>
                    </a>
                    <a
                        :href="`mailto:${contactUsData.email}`"
                        class="group mb-5 w-44 text-center text-base font-medium -tracking-[0.03px] text-black transition-all duration-300 md:mb-0 md:hover:text-primary xl:w-56 xl:text-xl xl:-tracking-[0.04px]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-5 h-8 w-8 md:group-hover:text-primary xl:mb-[46px]" viewBox="0 0 32 22">
                            <g>
                                <g>
                                    <path
                                        fill="currentColor"
                                        d="M31.27 6.75c.685-.354.678.061.678.38v12.66c0 .729-.993 1.736-1.755 1.736H2.11c-.761 0-1.755-1.007-1.755-1.736V7.128c0-.319-.007-.733.678-.38.974.503 12.897 6.685 13.494 6.994.597.308 1.015.345 1.59.345.577 0 .995-.036 1.591-.345.597-.31 12.588-6.49 13.562-6.992zM1.363 2.927C.507 2.47-.303.694 1.271.694h29.696c1.575 0 .763 1.776-.095 2.233-.857.454-12.72 6.76-13.164 6.994-.443.234-1.014.345-1.59.345-.576 0-1.149-.11-1.591-.345-.442-.234-12.307-6.54-13.164-6.994z"
                                    />
                                </g>
                            </g>
                        </svg>
                        <p>{{ contactUsData.email }}</p>
                    </a>
                    <a
                        :href="`tel:${contactUsData.phone}`"
                        class="group mb-5 w-44 text-center text-base font-medium -tracking-[0.03px] text-black transition-all duration-300 md:mb-0 md:hover:text-primary xl:w-56 xl:text-xl xl:-tracking-[0.04px]"
                    >
                        <icons-phone class="mx-auto mb-5 h-8 w-8 md:group-hover:text-primary xl:mb-[46px]" />
                        <p>{{ contactUsData.phone }}</p>
                    </a>
                </div>
            </div>
        </section>

        <section class="mb-20">
            <div class="container lg:px-[97px] xl:px-4">
                <div class="grid grid-cols-1 space-y-20 md:grid-cols-2 md:gap-5 md:space-y-0 lg:gap-24 xl:gap-36">
                    <div>
                        <h3 class="text-[28px] font-bold leading-[60px] text-[#030303]" v-html="content.section3Column1Title"></h3>
                        <div class="pt-6 lg:pt-16">
                            <ul class="divide-y divide-[#d5d5d5] border-b border-t border-[#d5d5d5]">
                                <li v-for="socialMedia in section3Column1Data" :key="socialMedia.attributes.url" class="py-4">
                                    <a :href="socialMedia.attributes.url" target="_blank" class="flex items-center justify-between text-lg text-[#202a36] hover:text-primary"
                                        ><span>{{ socialMedia.attributes.socialMediaName }}</span>
                                        <div class="flex w-7 justify-center" v-html="getSocialMediaSVG(socialMedia.attributes.socialMediaName)"></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-[28px] font-bold leading-[60px] text-[#030303]">Subscribe</h3>
                        <div class="pt-6 lg:pt-16">
                            <ul class="divide-y divide-[#d5d5d5] border-b border-t border-[#d5d5d5]">
                                <li class="flex items-center justify-between py-4 text-lg text-[#202a36] hover:text-primary">
                                    <a target="_blank" href="/subscribe">Venture Plans Insights Newsletter</a> <icons-right-menu-arrow class="text-[#00ADFF]" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Ready To Talk -->
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
                isShowReadMore: false,
                isOpenShare: false,
                isShowSaveBtn: false,
                deviceIphone: '',
                Links: [
                    { name: 'consulting', link: '/consulting' },
                    { name: 'technology', link: '/technology' },
                    { name: 'financing', link: '/financing' },
                    { name: 'legal', link: '/legal-advisory' },
                    { name: 'business plans', link: '/consulting/business-plans/grant-business-plans' },
                    { name: 'careers', link: '/careers' },
                    { name: 'Reviews', link: '/reviews' },
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
            section3Column1Data() {
                return this.content?.SocialLinksComponent?.data || [];
            },
            reasonForInquiries() {
                return this.content?.reasonForEnquiries?.data || [];
            },
            section2Data() {
                return this.content?.section2Component?.data || [];
            },
            section3Data() {
                return this.content?.section3Component?.data || [];
            },
            section4Data() {
                return this.content?.section4Component?.data || [];
            },
            section6Data() {
                return this.content?.section6Component?.data || [];
            },
            contactUsData() {
                return this.content?.contactUs?.data?.attributes || {};
            },
            readyToTalkForm() {
                return this.content?.readyToTalkForm?.data?.attributes || { services: { data: [] } };
            },
        },

        mounted() {
            this.deviceIphone = this.$helper.isDeviceIphone();
            document.addEventListener('scroll', () => {
                this.$refs?.share?.doClose();
            });
        },
        methods: {
            getSocialMediaSVG(socialMediaName) {
                if (typeof socialMediaName !== 'string') return;

                if (socialMediaName?.toLowerCase() === 'twitter') {
                    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" class="w-5 text-[#00ADFF]"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';
                } else if (socialMediaName?.toLowerCase() === 'facebook') {
                    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" class="w-3 text-[#0f69b5]"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>';
                } else if (socialMediaName?.toLowerCase() === 'instagram') {
                    return '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><defs><linearGradient id="ugyma" x1="22.05" x2="5.74" y1="6.12" y2="20.04" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cc9518"></stop> <stop offset=".71" stop-color="#a82d54"></stop> <stop offset="1" stop-color="#822da8"></stop></linearGradient></defs> <g><g clip-path="url(#clip-a17265f8-c5ec-488e-a758-e6facbdc1b59)"><path fill="url(#ugyma)" d="M19.236 12.997a6.255 6.255 0 1 1-12.51 0 6.255 6.255 0 0 1 12.51 0zm-6.255 4.06a4.06 4.06 0 1 0 0-8.12 4.06 4.06 0 0 0 0 8.12zm6.502-9.101a1.462 1.462 0 1 1 0-2.924 1.462 1.462 0 0 1 0 2.924zM12.68.816c-3.034 0-3.462.016-4.721.073-1.297.059-2.182.265-2.957.566a5.968 5.968 0 0 0-2.157 1.406A5.96 5.96 0 0 0 1.44 5.018c-.3.774-.506 1.66-.565 2.957C.814 9.273.8 9.689.8 12.997c0 3.308.013 3.723.073 5.023.059 1.296.264 2.181.565 2.956a5.97 5.97 0 0 0 1.406 2.158 5.956 5.956 0 0 0 2.157 1.404c.775.3 1.66.507 2.957.567 1.3.06 1.714.073 5.022.073 3.309 0 3.723-.014 5.022-.073 1.297-.06 2.183-.266 2.958-.567a5.956 5.956 0 0 0 2.157-1.404 5.978 5.978 0 0 0 1.405-2.158c.301-.775.507-1.66.566-2.956.057-1.26.072-1.688.073-4.721v-.604c0-3.033-.016-3.462-.073-4.72-.06-1.297-.265-2.183-.566-2.957a5.968 5.968 0 0 0-1.405-2.157 5.968 5.968 0 0 0-2.157-1.406C20.186 1.154 19.3.948 18.003.89c-1.258-.057-1.687-.073-4.72-.074zm.301 2.194c3.253 0 3.638.013 4.922.072 1.188.054 1.833.252 2.263.419.568.22.974.485 1.4.912.426.425.69.83.912 1.4.166.43.364 1.075.418 2.262.06 1.285.072 1.67.072 4.922s-.013 3.638-.072 4.922c-.054 1.188-.252 1.833-.418 2.262a3.8 3.8 0 0 1-.912 1.4 3.77 3.77 0 0 1-1.4.911c-.43.168-1.075.366-2.263.42-1.284.059-1.669.071-4.922.071-3.253 0-3.638-.012-4.922-.07-1.188-.055-1.833-.253-2.262-.42a3.77 3.77 0 0 1-1.4-.911 3.78 3.78 0 0 1-.912-1.401c-.167-.43-.366-1.074-.42-2.262-.057-1.284-.07-1.67-.07-4.922 0-3.253.013-3.637.07-4.922.054-1.187.253-1.833.42-2.263.221-.568.485-.974.912-1.4.426-.426.832-.69 1.4-.911.429-.167 1.074-.365 2.262-.42 1.284-.058 1.67-.07 4.922-.07"></path></g></g></svg>';
                } else if (socialMediaName?.toLowerCase() === 'tiktok') {
                    return '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 2859 3333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" class="text-[#000]"><path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"></path></svg>';
                } else if (socialMediaName?.toLowerCase() === 'youtube') {
                    return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18"><g><g><path fill="#e33122" d="M10.936 14.893V3.631l8.447 5.631zM22.761.815H5.868C3.081.815.8 2.715.8 5.04v8.446c0 2.323 2.28 4.224 5.068 4.224h16.893c2.788 0 5.068-1.9 5.068-4.224V5.04c0-2.323-2.28-4.224-5.068-4.224z"></path></g></g></svg>';
                } else if (socialMediaName?.toLowerCase() === 'linkedin') {
                    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" class="w-5 text-[#0f69b5]"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>';
                } else return '';
            },
        },
    };
</script>

<style scoped>
    .contact-popper[x-placement^='bottom-start'] {
        top: 20px !important;
    }

    .contact-popper[x-placement^='top-start'] {
        top: -20px !important;
    }

    @media (max-width: 768px) {
        .iphone-device.contact-popper[x-placement^='bottom-start'] {
            top: 0px !important;
        }
    }
</style>
