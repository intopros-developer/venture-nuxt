<template>
    <div v-if="content">
        <contact-us-heroform :title="content.bannerTitle" :sub-title="content.bannerSubTitle" :para="content.bannerDescription" :image="content.bannerImgUrl" :inquiryReasonOptions="reasonForInquiries" />

        <section class="relative -mt-[42px]" :class="{ 'z-[1]': isOpenShare }">
            <div class="container relative px-10 lg:px-[97px] xl:px-4">
                <div class="flex items-center justify-between gap-4 pb-2">
                    <div class="w-full overflow-auto pb-2 lg:pb-0">
                        <ul class="flex items-center gap-4 text-[15px] text-white sm:justify-center md:gap-8 xl:gap-20">
                            <li>
                                <nuxt-link to="/about" class="inline-block whitespace-nowrap hover:text-primary">{{ $t('about') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/consulting" class="inline-block whitespace-nowrap hover:text-primary">{{ $t('consulting') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/technology" class="inline-block whitespace-nowrap hover:text-primary">{{ $t('technology') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/legal" class="inline-block whitespace-nowrap hover:text-primary">{{ $t('legal') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/careers" class="inline-block whitespace-nowrap hover:text-primary">{{ $t('careers') }}</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/reviews" class="inline-block whitespace-nowrap hover:text-primary">{{ $t('reviews') }}</nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="w-5 pb-1">
                        <common-share :textWhite="true" />
                    </div>
                </div>
            </div>
        </section>

        <section class="py-10 md:py-20 xl:pt-28 xl:pb-[70px]">
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
                            <a v-if="!isShowReadMore" href="javascript:;" class="flex items-center justify-center gap-4 font-semibold text-primary md:justify-start xl:text-xl" @click="isShowReadMore = true">
                                <p class="text-base">{{ $t('read_more') }}</p>
                                <icons-downarrow class="w-2 xl:w-[11px]" />
                            </a>
                            <a v-else href="javascript:;" class="flex items-center justify-center gap-4 font-semibold text-primary md:justify-start xl:text-xl" @click="isShowReadMore = false">
                                <p class="text-base">{{ $t('read_less') }}</p>
                                <icons-downarrow class="w-2 rotate-180 xl:w-[11px]" />
                            </a>
                        </div>
                    </div>
                    <div class="mx-auto w-[271px] flex-none rounded-[42px] bg-[#F8F8F8] shadow-[0px_3px_6px_rgba(175,175,175,0.30)] lg:mr-0 xl:w-72">
                        <p class="border-b-2 border-[#ebebeb] pt-[29px] pb-[11px] text-center text-[19px] font-bold text-[#919191]">
                            {{ content.miniCardTitle }}
                        </p>
                        <div class="px-10 pt-[22px] pb-[34px] md:px-11 xl:px-12">
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

        <section class="pb-10 md:pb-16 lg:pb-[240px]">
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
                        <nuxt-link :to="`/cities/${data.attributes.cityPageSlug}`" class="nuxt-link-active mt-auto flex items-center gap-4 text-sm font-semibold leading-[14px] text-primary hover:text-primary-700"
                            >{{ data.attributes.linkText }}<icons-selection-arrow class="h-3 w-3 -rotate-90"
                        /></nuxt-link>
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
                            class="nuxt-link-active mt-auto flex items-center gap-4 text-sm font-semibold leading-[14px] text-primary hover:text-primary-700"
                            >{{ data.attributes.linkText }}<icons-selection-arrow class="h-3 w-3 -rotate-90"
                        /></nuxt-link>

                        <a v-else target="_blank" :href="data.attributes.linkUrl" class="nuxt-link-active mt-auto flex items-center gap-4 text-sm font-semibold leading-[14px] text-primary hover:text-primary-700"
                            >{{ data.attributes.linkText }}<icons-selection-arrow class="h-3 w-3 -rotate-90"
                        /></a>
                    </div>
                </div>
            </div>
        </section>

        <common-contact-us :videoThumbnailURL="content.video1ThumbnailUrl" :videoURL="content.video1Url" :title="content.video1Title" :buttonTitle="content.video1ButtonText" :buttonURL="content.video1ButtonLink" />

        <section class="py-10 md:py-16 lg:pb-[74px] lg:pt-[222px]">
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

        <!-- Service Help -->
        <!-- <contact-us-service-help
            :service-para="content.selectServicePara"
            :services-list="content.servicesList"
            :services-detail="content.serviceDetails"
        /> -->

        <!-- Interested Service -->
        <common-interested-service
            :backgroundImage="content.section5ImgUrl"
            :subtitle="content.section5Subtitle"
            :title="content.section5Title"
            :description="content.section5Description"
            :buttonLink="content.section5ButtonLink"
            :buttonTitle="content.section5ButtonText"
        />

        <!-- As seen on -->
        <contact-private-placement :title="content.section6Title" :logos="section6Data" />

        <section class="py-10 md:py-16 xl:pb-[87px] xl:pt-[102px]">
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

        <!-- Ready To Talk -->
        <common-readytotalk :imgUrl="readyToTalkForm.imgUrl" :serviceOptions="readyToTalkForm.services.data" :aboutParagraph="readyToTalkForm.aboutParagraph" :title="readyToTalkForm.title" :talkInTitle="readyToTalkForm.talkInTitle" />
    </div>
</template>

<script>
    import nuxtConfig from '~/nuxt.config';

    export default {
        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/city-page?populate=deep`);
                return {
                    content: context.$helper.parseData(data.data),
                };
            } catch {}
        },
        data() {
            return {
                isShowReadMore: false,
                isOpenShare: false,
                isShowSaveBtn: false,
                deviceIphone: '',
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
                        content: this.content?.metaFields[0]?.keywords,
                    },
                ],
            };
        },

        computed: {
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
        components: { nuxtConfig },
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
