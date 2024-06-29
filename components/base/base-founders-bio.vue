<template>
    <div>
        <section class="relative h-[80vh] bg-gray-700 bg-cover bg-center bg-no-repeat object-center pb-12" v-lazyload-bg="content.bannerImgUrl">
            <div class="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[500px]"></div>
            <div class="container relative z-10 flex h-full items-center lg:px-[97px] xl:pl-20">
                <div>
                    <div class="mb-[10px] flex gap-[10px]">
                        <div class="w-[3px] flex-none bg-primary"></div>
                        <p class="font-normal text-[#FBFBFD] sm:whitespace-pre" v-html="content.bannerSubtitle"></p>
                    </div>
                    <h1 class="mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[60px] xl:leading-[53px]">{{ content.bannerTitle }}</h1>
                    <p class="mb-5 text-[#fbfbfd]" v-html="content.bannerDescription"></p>
                </div>
            </div>
        </section>
        <!-- About -->
        <div class="pb-20">
            <section class="pt-20 md:pt-28">
                <div id="about" class="px-10 md:px-4 lg:px-[97px] xl:px-4">
                    <div class="mb-8 flex items-center justify-center gap-[33px] text-center">
                        <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                        <h2 class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary" v-html="content.section1Title"></h2>
                        <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    </div>
                    <div class="container">
                        <common-toggle-content :content="content.section1Description" />
                    </div>
                </div>
            </section>
        </div>

        <common-contact-us
            :video-thumbnail-u-r-l="content.video1ThumbnailUrl"
            :button-title="content.video1ButtonText"
            :button-u-r-l="content.video1ButtonLink"
            :video-u-r-l="content.video1Url"
            :title="content.video1Title"
            :less-padding-top="true"
        />

        <!-- featured in -->
        <section class="bg-white py-[60px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="grid grid-cols-1">
                    <h3 class="pb-[43px] text-center text-2xl font-medium text-[#0B3A02] md:text-[31px]" v-html="content.section2Title"></h3>
                    <div class="flex flex-wrap items-center justify-center gap-4 lg:gap-[50px]">
                        <div v-for="(logo, i) in section2Icons" :key="i" class="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white p-5 px-[17px] shadow-[0px_1px_8px_rgba(0,0,0,0.2)] xl:h-[126px] xl:w-[126px]">
                            <img :src="logo.attributes.iconUrl" :alt="'icon' + i" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- <common-venture-plans/> -->

        <section class="my-10 md:my-10">
            <div class="">
                <div class="mb-[71px] flex items-center justify-center gap-2.5 text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <!-- v-html="title" -->

                    <h2 class="inline-block text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section3Title"></h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <div class="container">
                    <div class="mx-auto mb-10 grid max-w-[300px] grid-cols-1 gap-5 space-y-4 md:mb-16 md:max-w-none md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                        <div v-for="(value, i) in section3Data" :key="i" class="relative" :class="{ 'md:before:!w-0 ': i === section3Data.length - 1 }">
                            <div class="flex flex-col items-center gap-4 rounded-t-[10px] bg-primary p-4 text-center md:min-h-[152px]">
                                <span class="h-12 w-12 rounded-full bg-white text-center text-lg font-bold leading-[48px] text-primary">{{ value.attributes.sectionName }}</span>
                                <h3 class="text-xl font-bold text-white xl:text-[26px]">{{ value.attributes.title }}</h3>
                            </div>
                            <div class="bg-white px-5 py-6 shadow-[0_3px_6px_rgba(0,0,0,0.16)] md:min-h-[120px] lg:min-h-[192px] lg:px-[30px] xl:min-h-[144px]">
                                <p class="text-[15px] leading-6 -tracking-[0.03]">{{ value.attributes.description }}</p>
                            </div>
                            <div class="h-48 w-full md:h-32 lg:h-48">
                                <img :src="value.attributes.imgURL" :alt="value.attributes.title" class="h-full w-full object-cover" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container py-24">
            <div class="justify-content-center grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
                <div v-for="(icon, ic) in icons" :key="ic" class="justify-self-center">
                    <a :href="icon.attributes.url" class="flex flex-col items-center justify-center">
                        <img class="h-10 w-10" :src="icon.attributes.icon" :alt="icon.attributes.name" loading="lazy" />
                        <p>{{ icon.attributes.name }}</p>
                    </a>
                </div>
            </div>
        </section>
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

        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/our-leadership-page?populate=deep`);
                return {
                    content: context.$helper.parseData(data.data),
                };
            } catch {}
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
            icons() {
                return this?.content?.socialIcons?.data || [];
            },
            section3Data() {
                return this?.content?.section3Component?.data || [];
            },
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
            section2Icons() {
                return this?.content?.section2Icons?.data || [];
            },
        },
    };
</script>
