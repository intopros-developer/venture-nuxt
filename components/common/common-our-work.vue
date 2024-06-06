<template>
    <section class="my-10 md:my-20">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="mb-5 text-center md:mb-20">
                <div class="mb-4 flex items-center justify-center gap-[33px] text-center">
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                    <h2 class="inline-block text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl">
                        {{ $t('samples_of') }} <span class="text-primary">{{ $t('our_work') }}</span>
                    </h2>
                    <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                </div>
                <p class="mx-auto max-w-[820px] text-base font-medium -tracking-[-0.04px] text-[#707070] md:text-xl">
                    {{ sampleWorksPara }}
                </p>
            </div>
            <div class="grid grid-cols-1 gap-3 md:grid-cols-4 xl:gap-5">
                <div v-for="(work, i) in works" :key="i" class="text-center font-medium">
                    <div class="mb-5 flex h-[250px] items-center justify-center overflow-hidden">
                        <nuxt-img format="webp" :src="work.fields.image.fields.file.url" :alt="work.fields.title" class="mx-auto" loading="lazy" />
                    </div>
                    <h3 class="mb-1 text-xl text-[#586376] md:text-[13px] md:leading-4">{{ work.fields.title }}</h3>
                    <a href="" class="text-[17px] uppercase text-primary hover:text-black md:text-xs">{{ $t('download_pdf') }}</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            works: {
                type: Array,
                default: () => [
                    {
                        fields: {
                            id: 1,
                            title: 'Tech Investor Business Plan',
                            image: {
                                fields: {
                                    file: {
                                        url: '/images/work-1.webp',
                                    },
                                },
                            },
                        },
                    },

                    {
                        fields: {
                            id: 2,
                            title: 'Bank Plan (SBA)',
                            image: {
                                fields: {
                                    file: {
                                        url: '/images/work-2.webp',
                                    },
                                },
                            },
                        },
                    },

                    {
                        fields: {
                            id: 3,
                            title: 'Cannabis Business Plan',
                            image: {
                                fields: {
                                    file: {
                                        url: '/images/work-3.webp',
                                    },
                                },
                            },
                        },
                    },

                    {
                        fields: {
                            id: 4,
                            title: 'Real Estate Business Plan',
                            image: {
                                fields: {
                                    file: {
                                        url: '/images/work-4.webp',
                                    },
                                },
                            },
                        },
                    },
                ],
            },

            sampleWorksPara: {
                type: String,
                default: `We avoid cookie-cutter and boilerplate plans. Here are some of our custom grant business plans written
                        by our Elite MBA Consultants `,
            },
        },
    };
</script>
