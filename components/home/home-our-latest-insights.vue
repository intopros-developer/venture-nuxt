<template>
    <section class="pb-20 pt-10 xl:pt-12">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="mb-[57px] flex items-center justify-center gap-2 text-center sm:gap-[33px] xl:mb-[68px]">
                <div class="h-px w-1/4 bg-[#D5D5D5] sm:block sm:w-full"></div>
                <h2 class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary" v-html="title"></h2>
                <div class="h-px w-1/4 bg-[#D5D5D5] sm:block sm:w-full"></div>
            </div>
            <div v-if="insightsData" class="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-2">
                <div v-for="(insight, i) in insightsData" :key="i" class="relative mb-8 md:px-7" :class="{ 'border-[#d5d5d5] md:border-r': i % 2 === 0 }">
                    <div class="h-48 w-full shadow-[0px_3px_6px_rgba(0,0,0,0.6)] xl:h-[276px]">
                        <nuxt-img format="webp" :src="insight.attributes.imgUrl" class="h-full w-full object-cover" :alt="insight.attributes.title" loading="lazy" />
                    </div>
                    <div class="flex h-[calc(100%-192px)] flex-col justify-between px-0 py-[34px] xl:h-[calc(100%-276px)]">
                        <div>
                            <p class="mb-3 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]">
                                {{ insight.attributes.Insightsource }}
                            </p>

                            <nuxt-link :to="`/insights/${insight.attributes.singleInsightPageSlug}`" class="text-[21px] font-semibold leading-7 text-[#202A36]">{{ insight.attributes.title }}</nuxt-link>
                            <p class="mb-5 mt-3 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base">{{ insight.attributes.paragraph }}</p>
                        </div>

                        <div class="relative flex items-center justify-between">
                            <button aria-label="insight.attributes.insightType" class="inline-block text-xs font-medium -tracking-[0.02px] text-[#646464] transition-all duration-300">
                                {{ insight.attributes.insightType }} | {{ $helper.formatInsightPublishDate(insight.attributes.date) }}
                            </button>
                            <div class="flex w-[50px] items-center divide-x divide-[#d5d5d5]">
                                <button aria-label="Save"><icons-save class="mr-2 h-6 w-6 text-[#707070] hover:text-primary" /></button>
                                <common-share class="pl-1" popper-class="!top-0 !-right-1" :custom-link="`/insights/${insight.attributes.singleInsightPageSlug}`" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!isShowMore" class="mt-5 text-center md:mt-[52px]">
                <nuxt-link to="/insights" class="outline-btn rounded-[10px] border-[#000]/[0.08] px-[61px] py-[22px] text-sm font-medium uppercase leading-[22px] -tracking-[0.03px] text-[#00ADFF]">{{ $t('see_all_insights') }}</nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "OUR LATEST <span class='primary'>INSIGHTS</span>",
            },
            insights: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            title: 'new Insight',
                            paragraph: "New tools and strategies boost year-on-year growth and reenergize the company's sales pipeline",
                            Insightsource: 'How wealthy individuals can contribute to the overall economic growth Cycle.',
                            imgUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/54ZDQZoRfyqhu4DD56Bg86/92091c33e63115387cb9fb5ccb93d59c/image_1.jpg',
                            insightType: 'infographic',
                            date: '2023-04-04',
                            singleInsightPageSlug: 'new-insight',
                        },
                    },
                ],
            },
        },

        data() {
            return {
                isShowMore: false,
            };
        },

        computed: {
            insightsData() {
                if (!this.isShowMore) {
                    return this.insights.filter((item, index) => index < 4);
                } else {
                    return this.insights;
                }
            },
        },
    };
</script>
