<template>
    <div v-if="content">
        <section class="relative bg-cover bg-[right_32%_top] bg-no-repeat pb-10 pt-[166px] md:bg-left xl:pb-20" :style="{ backgroundImage: `url(${content.bannerImgUrl})` }">
            <div class="absolute top-0 left-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]"></div>
            <div class="container relative z-10 md:px-4 lg:px-[97px] xl:px-4">
                <div>
                    <p class="mb-5 border-l-[3px] border-primary pl-2.5 text-sm leading-3 text-[#FBFBFD] md:text-base md:leading-4">
                        {{ content.bannerSubtitle }}
                    </p>
                    <h1 class="mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px]">{{ content.bannerTitle }}</h1>
                    <p v-html="content.bannerDescription" class="font-normal leading-5 text-[#FBFBFD] md:whitespace-pre xl:leading-6"></p>
                </div>
            </div>
        </section>

        <section class="container mt-24 mb-24 lg:mb-20 lg:px-[97px] xl:px-4">
            <p class="max-w-4xl">{{ content.section1Description }}</p>

            <div class="relative z-[1] mt-20 grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-2 lg:gap-y-[40px]">
                <div v-for="(media, i) in mediaCatalogues" :key="i" class="mb-16 border-[#d5d5d5] lg:px-7" :class="{ 'md:border-r md:pr-7': i % 2 == 0, 'md:pl-7': i % 2 !== 0 }">
                    <div class="h-[242px] w-full lg:h-[277px]">
                        <img loading="lazy" :src="media.attributes.imgUrl" class="h-full w-full object-cover" style="box-shadow: -2px -2px 15px 3px rgba(0, 0, 0, 0.25)" />
                    </div>
                    <div>
                        <div class="w-full lg:w-5/6">
                            <h4 class="line-clamp-1 my-5 text-sm font-semibold text-primary">{{ media.attributes.mediaSource }}</h4>
                            <div>
                                <nuxt-link :to="'/media-mentions/' + media.attributes.singleMediaPageSlug" class="line-clamp-2 mb-5 block text-[24px] font-bold">{{ media.attributes.title }}</nuxt-link>
                            </div>
                            <p class="line-clamp-3 mb-7 text-base text-[#202A36]">{{ media.attributes.paragraph }}</p>
                        </div>

                        <nuxt-link :to="'/media-mentions/' + media.attributes.singleMediaPageSlug" class="mb-10 flex w-[110px] items-center justify-center gap-2 rounded-md bg-primary py-[10px] text-[14px] text-white md:hover:bg-blue-500">
                            Visit News
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.575103 7.13197C0.233774 7.36663 0.147305 7.83357 0.381969 8.1749C0.616632 8.51623 1.08357 8.6027 1.4249 8.36803L0.575103 7.13197ZM9.73746 2.38657C9.81288 1.97928 9.54385 1.58796 9.13657 1.51254L2.49941 0.283436C2.09212 0.208013 1.70081 0.477042 1.62538 0.884331C1.54996 1.29162 1.81899 1.68294 2.22628 1.75836L8.12597 2.8509L7.03344 8.75059C6.95801 9.15788 7.22704 9.54919 7.63433 9.62462C8.04162 9.70004 8.43293 9.43101 8.50836 9.02372L9.73746 2.38657ZM1.4249 8.36803L9.4249 2.86803L8.5751 1.63197L0.575103 7.13197L1.4249 8.36803Z"
                                    fill="white"
                                />
                            </svg>
                        </nuxt-link>

                        <div class="flex items-center justify-between">
                            <a href="javascript:;" class="inline-block text-[14px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]">
                                {{ media.attributes.newsType }} | {{ $helper.formatInsightPublishDate(media.attributes.date) }}
                            </a>
                            <button type="button">
                                <common-share :is-show-save-btn="true" :insights="true" :customLink="`${media.attributes.singleMediaPageSlug}`" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/all-media-mention-page?populate=deep`);
                return {
                    content: context.$helper.parseData(data.data),
                };
            } catch {}
        },

        computed: {
            mediaCatalogues() {
                return this?.content?.mediaCatalogues?.data || [];
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
    };
</script>
