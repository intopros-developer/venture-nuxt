<template>
    <div v-if="content">
        <section class="relative bg-white">
            <div class="container">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="pt-7 pb-[46px] md:pt-[136px]">
                        <p class="font-[1.2rem] mb-5 border-l-[3px] border-primary pl-2.5 text-sm font-normal leading-3 text-[#030303] md:text-base md:leading-5">Insights</p>
                        <h4 class="text-[50px] font-bold leading-[44px] text-[#030303]">{{ content.bannerTitle }}</h4>
                        <p class="font-[1.3rem] mt-4 leading-[26px] text-[#030303]">{{ content.bannerSubtitle }}</p>
                    </div>
                    <div class="relative bottom-0 left-[-50vw] top-0 ml-[50%] h-80 w-[100vw] max-w-none md:absolute md:left-[calc(50%+2.5rem)] md:ml-0 md:mt-0 md:h-full md:w-[calc(50vw-2.5rem)]">
                        <img loading="lazy" :src="content.bannerImgUrl" alt="" class="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-white pt-[53px] pb-[90px]">
            <div class="container">
                <div class="grid grid-cols-1 gap-7 md:gap-[59px] lg:grid-cols-5">
                    <div>
                        <div class="flex flex-wrap items-end gap-5 pb-5 lg:block lg:pb-0">
                            <div v-for="(author, i) in section1Column1Data" class="shrink-0 border-[#e8e8e8] lg:border-t" :class="{ 'lg:pt-[29px]': i !== 0 }">
                                <h4 v-if="i === 0" class="pt-8 font-semibold leading-[22px]">{{ content.section1Column1Title }}</h4>
                                <div class="mt-[5px]">
                                    <img loading="lazy" :src="author.attributes.imageUrl" class="h-24 w-24 rounded-[5px] object-cover shadow-[0_3px_6px_rgba(0,0,0,0.44)]" :alt="author.attributes.authorName" />
                                </div>
                                <p class="mt-3 leading-[22px]">{{ author.attributes.authorName }}</p>
                                <p class="mt-[3px] text-sm leading-[13px] text-[#707070]">{{ author.attributes.authorDesignation }}</p>
                                <ul class="mt-1 mb-[5px] flex items-center gap-[6px]">
                                    <li>
                                        <a target="_blank" :href="author.attributes.linkedinUrl" class="flex h-6 w-6 items-center rounded-full bg-[#f4f5f7]"><icons-linkedin class="mx-auto h-[15px] w-[15px] text-primary" /></a>
                                    </li>
                                    <li>
                                        <a target="_blank" :href="author.attributes.instagramUrl" class="flex h-6 w-6 items-center rounded-full bg-[#f4f5f7]"><icons-instagram class="mx-auto h-[15px] w-[15px] text-primary" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="mb-4 border-t border-[#e8e8e8] pt-[29px]">
                            <div class="mt-[5px]">
                                <a :href="content.section1Column1ButtonLink" class="outline-btn rounded-[11px] border-[#d5d5d5] px-8 text-[15px] font-semibold uppercase leading-5 text-primary">{{ content.section1Column1ButtonText }}</a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-3">
                        <div class="pb-[5px]">To listen to the article press play</div>
                        <audio controls class="w-full" v-if="content.audioFileUrl">
                            <source :src="content.audioFileUrl" type="audio/ogg" />
                            <source :src="content.audioFileUrl" type="audio/mpeg" />
                        </audio>
                        <div class="mt-[37px] mb-[17px] block h-[2px] w-full bg-primary"></div>
                        <div>
                            <h4 class="font-semibold">{{ content.section1Column2Title }}</h4>
                        </div>
                        <div class="mt-4 space-y-[29px]" v-if="typeof content.section1Column2Description === 'string'">
                            <div class="flex items-start gap-[15px]" v-for="(section, i) in content.section1Column2Description.split(`\n\n`)" :key="i">
                                <div>
                                    <icons-arrow-up class="inline-block rotate-90 text-primary" />
                                </div>
                                <p class="max-w-[445px] flex-1 text-lg leading-[22px] -tracking-[0.04px] text-black">
                                    {{ section }}
                                </p>
                            </div>
                        </div>
                        <div class="mt-[42px] bg-[#f4f5f7] p-7">
                            <div class="items-center gap-2 md:flex">
                                <p class="text-xl leading-6 -tracking-[0.04px]">{{ content.CTA1Description }}</p>
                                <div class="mt-3 shrink-0 md:mt-0">
                                    <a :href="content.CTA1ButtonLink" class="btn rounded-[3px] px-[34px] py-[18px] text-sm font-semibold uppercase text-[#fdfeff]">{{ content.CTA1ButtonText }}</a>
                                </div>
                            </div>
                        </div>
                        <div :class="content.img1Url ? 'py-[35px]' : 'pt-[35px]'">
                            <common-custom-strapi-display classes="text-base leading-[30px] -tracking-[0.03px] text-black text-lg" :data="content.section2Paragraph"></common-custom-strapi-display>
                        </div>
                        <div v-if="content.img1Url" class="block h-10 w-full bg-[#e8e8e8]"></div>
                        <div v-if="content.img1Url" class="my-[18px] mt-[18px] border-t-2 border-b-2 border-[#e8e8e8] py-[17px]">
                            <div class="px-[23px]">
                                <div class="flex items-center justify-between">
                                    <p class="text-[14px] leading-[22px] -tracking-[0.03px] text-primary">Figure 1</p>
                                    <common-share :is-show-save-btn="true" :insights="true" />
                                </div>
                                <div class="mt-2 text-[20px] font-semibold leading-7">
                                    <p>{{ content.img1Description }}</p>
                                </div>
                            </div>
                            <img loading="lazy" class="my-10 w-full" :src="content.img1Url" />
                        </div>
                        <div class="space-y-9 pt-[18px]">
                            <common-custom-strapi-display classes="text-lg" :data="content.section3Paragraph"></common-custom-strapi-display>
                            <common-custom-strapi-display classes="text-lg" :data="content.section4Paragraph"></common-custom-strapi-display>
                        </div>
                    </div>
                    <div>
                        <div class="space-y-4 border-t border-b border-[#e8e8e8] pb-[45px] pt-4">
                            <p class="font-semibold leading-[22px] -tracking-[0.03px]">{{ content.section1Column3Title }}</p>
                            <p class="leading-[22px] -tracking-[0.03px]">{{ content.section1Column3Description }}</p>
                        </div>
                        <div class="mt-[30px]">
                            <common-share :is-show-save-btn="false" />
                        </div>
                        <div class="mt-[58px]">
                            <p v-if="content.publishedAt" class="font-medium text-[#707070]">{{ content.section1Column3InfoLeft }} | {{ content.section1Column3InfoRight }}</p>
                        </div>
                        <div class="mt-[51px]" v-if="insightPost1">
                            <div class="border border-[#f4f5f7]">
                                <p class="px-[13px] py-[15px] text-lg font-medium leading-7 text-[#202a36]">{{ insightPost1.Insightsource }}</p>
                                <img loading="lazy" :src="insightPost1.imgUrl" :alt="insightPost1.title" />
                                <div class="px-[13px] py-[15px]">
                                    <p class="line-clamp-2 mb-2 text-sm font-semibold text-[#202a36]">{{ insightPost1.title }}</p>
                                    <p class="line-clamp-3 text-sm leading-[21px] -tracking-[0.03px] text-[#767677]">{{ insightPost1.paragraph }}</p>
                                    <div class="mt-2">
                                        <nuxt-link :to="`/insights/${insightPost1.singleInsightPageSlug}`" class="text-sm font-medium leading-3 text-primary hover:text-primary-700">More</nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <common-contact-us :videoThumbnailURL="content.video1ThumbnailUrl" :videoURL="content.video1Url" :buttonTitle="content.video1ButtonText" :buttonURL="content.video1ButtonLink" :title="content.video1Title" />

        <section class="bg-white pt-[66px] pb-[90px]">
            <div class="container">
                <div class="grid grid-cols-1 gap-7 md:gap-[59px] lg:grid-cols-5">
                    <div></div>
                    <div class="lg:col-span-3">
                        <div :class="content.img2Url ? 'pb-[35px]' : 'pb-2'">
                            <common-custom-strapi-display classes="text-base leading-[30px] -tracking-[0.03px] text-black text-lg" :data="content.section5Paragraph"></common-custom-strapi-display>
                        </div>
                        <div v-if="content.img2Url" class="block h-10 w-full bg-[#e8e8e8]"></div>
                        <div v-if="content.img2Url" class="my-[18px] mt-[18px] border-t-2 border-b-2 border-[#e8e8e8] py-[17px]">
                            <div class="px-[23px]">
                                <div class="flex items-center justify-between">
                                    <p class="text-[14px] leading-[22px] -tracking-[0.03px] text-primary">Figure 2</p>
                                    <common-share :is-show-save-btn="true" :insight-page="true" />
                                </div>
                                <div class="mt-2 text-[20px] font-semibold leading-7">
                                    <p>{{ content.img2Description }}</p>
                                </div>
                            </div>
                            <img loading="lazy" class="my-10 w-full" :src="content.img2Url" />
                        </div>
                        <div class="space-y-9 pt-[18px]">
                            <common-custom-strapi-display classes="text-lg" :data="content.section6Paragraph"></common-custom-strapi-display>
                            <common-custom-strapi-display classes="text-lg" :data="content.section7Paragraph"></common-custom-strapi-display>
                        </div>
                    </div>
                    <div>
                        <div class="mt-[51px]" v-if="insightPost2">
                            <div class="border border-[#f4f5f7]">
                                <p class="px-[13px] py-[15px] text-lg font-medium leading-7 text-[#202a36]">{{ insightPost2.Insightsource }}</p>
                                <img loading="lazy" :src="insightPost2.imgUrl" :alt="insightPost2.title" />
                                <div class="px-[13px] py-[15px]">
                                    <p class="line-clamp-2 mb-2 text-sm font-semibold text-[#202a36]">{{ insightPost2.title }}</p>
                                    <p class="line-clamp-3 text-sm leading-[21px] -tracking-[0.03px] text-[#767677]">{{ insightPost2.paragraph }}</p>
                                    <div class="mt-2">
                                        <nuxt-link :to="`/insights/${insightPost2.singleInsightPageSlug}`" class="text-sm font-medium leading-3 text-primary hover:text-primary-700">More</nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-[45px] grid grid-cols-1 gap-7 md:gap-[59px] lg:grid-cols-5">
                    <div></div>
                    <div class="lg:col-span-3">
                        <div v-if="content.img3Url" class="block h-10 w-full bg-[#e8e8e8]"></div>
                        <div v-if="content.img3Url" class="my-[18px] mt-[18px] border-t-2 border-b-2 border-[#e8e8e8] py-[17px]">
                            <div class="px-[23px]">
                                <div class="flex items-center justify-between">
                                    <p class="text-[14px] leading-[22px] -tracking-[0.03px] text-primary">Figure 3</p>
                                    <common-share :is-show-save-btn="true" :insight-page="true" />
                                </div>
                                <div class="mt-2 text-[20px] font-semibold leading-7">
                                    <p>{{ content.img3Description }}</p>
                                </div>
                            </div>
                            <img loading="lazy" class="my-10 w-full" :src="content.img3Url" />
                        </div>
                        <div class="space-y-9">
                            <common-custom-strapi-display classes="text-lg" :data="content.section8Paragraph"></common-custom-strapi-display>
                        </div>
                    </div>
                    <div>
                        <div class="mt-[51px]" v-if="insightPost3">
                            <div class="border border-[#f4f5f7]">
                                <p class="px-[13px] py-[15px] text-lg font-medium leading-7 text-[#202a36]">{{ insightPost3.Insightsource }}</p>
                                <img loading="lazy" :src="insightPost3.imgUrl" :alt="insightPost3.title" />
                                <div class="px-[13px] py-[15px]">
                                    <p class="line-clamp-2 mb-2 text-sm font-semibold text-[#202a36]">{{ insightPost3.title }}</p>
                                    <p class="line-clamp-3 text-sm leading-[21px] -tracking-[0.03px] text-[#767677]">{{ insightPost3.paragraph }}</p>
                                    <div class="mt-2">
                                        <nuxt-link :to="`/insights/${insightPost3.singleInsightPageSlug}`" class="text-sm font-medium leading-3 text-primary hover:text-primary-700">More</nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <common-client-words :title="content.section9Title" :description="content.section9Description" :testimonials="section9Data" />

        <section class="bg-white pt-[83px] pb-[206px]">
            <div class="container">
                <div class="grid grid-cols-1 gap-7 md:gap-[59px] lg:grid-cols-5">
                    <div></div>
                    <div class="lg:col-span-3">
                        <div class="block h-[2px] w-full bg-primary"></div>
                        <common-custom-strapi-display classes="mt-4 text-[28px] font-medium leading-9 text-lg" :data="content.section10Title"></common-custom-strapi-display>
                        <common-custom-strapi-display classes="mt-4 leading-[30px] -tracking-[0.03px] text-lg" :data="content.section10Description"></common-custom-strapi-display>
                        <common-custom-strapi-display classes="mt-[58px] text-[28px] font-medium leading-9 text-lg" :data="content.section11Title"></common-custom-strapi-display>
                        <common-custom-strapi-display classes="mt-4 leading-[30px] -tracking-[0.03px] text-lg" :data="content.section11Description"></common-custom-strapi-display>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>

        <common-interested-service
            :backgroundImage="content.CTA2ImgUrl"
            :subtitle="content.CTA2Subtitle"
            :title="content.CTA2Title"
            :description="content.CTA2Description"
            :buttonLink="content.CTA2ButtonLink"
            :buttonTitle="content.CTA2ButtonText"
        />

        <section class="bg-white pt-[58px] pb-[95px]">
            <div class="container">
                <div class="grid grid-cols-1 items-center gap-7 md:gap-[59px] lg:grid-cols-5">
                    <div></div>
                    <div class="lg:col-span-3">
                        <div class="block h-[2px] w-full bg-primary"></div>
                        <p v-if="content.section12Title" class="mt-4 text-[28px] font-medium leading-9">{{ content.section12Title }}</p>
                        <common-custom-strapi-display v-if="content.section12Description" classes="mt-4 leading-[30px] -tracking-[0.03px] text-lg" :data="content.section12Description"></common-custom-strapi-display>

                        <p v-if="content.section13Title" class="mt-[58px] text-[28px] font-medium leading-9">{{ content.section13Title }}</p>
                        <common-custom-strapi-display v-if="content.section13Description" classes="mt-4 leading-[30px] -tracking-[0.03px] text-lg" :data="content.section13Description"></common-custom-strapi-display>

                        <p v-if="content.section13Title" class="mt-[58px] text-[28px] font-medium leading-9">{{ content.section13Title }}</p>
                        <common-custom-strapi-display v-if="content.section13Description" classes="mt-4 leading-[30px] -tracking-[0.03px] text-lg" :data="content.section13Description"></common-custom-strapi-display>

                        <p v-if="content.Section14Title" class="mt-[58px] text-[28px] font-medium leading-9">{{ content.Section14Title }}</p>
                        <common-custom-strapi-display v-if="content.Section14Description" classes="mt-4 leading-[30px] -tracking-[0.03px] text-lg" :data="content.Section14Description"></common-custom-strapi-display>

                        <p v-if="content.Section15Title" class="mt-[58px] text-[28px] font-medium leading-9">{{ content.Section15Title }}</p>
                        <common-custom-strapi-display v-if="content.section15Description" classes="mt-4 leading-[30px] -tracking-[0.03px] text-lg" :data="content.section15Description"></common-custom-strapi-display>

                        <p v-if="content.section16Title" class="mt-[58px] text-[28px] font-medium leading-9">{{ content.section16Title }}</p>
                        <common-custom-strapi-display v-if="content.Section16Description" classes="mt-4 leading-[30px] -tracking-[0.03px] text-lg" :data="content.Section16Description"></common-custom-strapi-display>
                    </div>
                    <div>
                        <div class="mt-[51px]" v-if="insightPost4">
                            <div class="border border-[#f4f5f7]">
                                <p class="px-[13px] py-[15px] text-lg font-medium leading-7 text-[#202a36]">{{ insightPost4.Insightsource }}</p>
                                <img loading="lazy" :src="insightPost4.imgUrl" :alt="insightPost4.title" />
                                <div class="px-[13px] py-[15px]">
                                    <p class="line-clamp-2 mb-2 text-sm font-semibold text-[#202a36]">{{ insightPost4.title }}</p>
                                    <p class="line-clamp-3 text-sm leading-[21px] -tracking-[0.03px] text-[#767677]">{{ insightPost4.paragraph }}</p>
                                    <div class="mt-2">
                                        <nuxt-link :to="`/insights/${insightPost4.singleInsightPageSlug}`" class="text-sm font-medium leading-3 text-primary hover:text-primary-700">More</nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <common-readytotalk :imgUrl="readyToTalkForm.imgUrl" :serviceOptions="readyToTalkForm.services.data" :aboutParagraph="readyToTalkForm.aboutParagraph" :title="readyToTalkForm.title" :talkInTitle="readyToTalkForm.talkInTitle" />
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
            section1Column1Data() {
                return this.content?.section1Col1Component?.data || [];
            },
            insightPost1() {
                return this.content?.section1Col3Component?.data[0]?.attributes;
            },
            insightPost2() {
                return this.content?.section1Col3Component?.data[1]?.attributes;
            },
            insightPost3() {
                return this.content?.section1Col3Component?.data[2]?.attributes;
            },
            insightPost4() {
                return this.content?.section1Col3Component?.data[3]?.attributes;
            },
            section9Data() {
                return this.content?.section9Component?.data || [];
            },
            readyToTalkForm() {
                return this.content?.readyToTalkForm?.data?.attributes || { services: { data: [] } };
            },
        },
    };
</script>
