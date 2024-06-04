<template>
    <div>
        <div>
            <section id="ourCulture" class="relative bg-cover bg-center bg-no-repeat pb-32 pt-[50px] lg:pb-[175px] lg:pt-[280px]" :style="{ backgroundImage: `url(${image})` }">
                <div class="absolute left-0 top-0 -z-0 h-full w-full" style="background-image: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #2b3746 100%)"></div>
                <div class="container relative z-10 px-10 lg:px-[97px] xl:px-4">
                    <p class="max-w-[800px] text-[28px] font-bold uppercase leading-[42px] text-white lg:text-[41px] lg:leading-[54px]" v-html="title"></p>
                </div>
            </section>
            <section class="relative -mt-24 pb-10 lg:-mt-[128px] lg:pb-16">
                <div class="container px-10 lg:px-[97px] xl:px-4">
                    <div class="mb-[33px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mb-[85px] lg:grid-cols-4 lg:gap-5">
                        <div v-for="(value, i) in values" :key="i">
                            <div class="flex h-auto items-center justify-center bg-primary/80 px-4 py-9 lg:min-h-[120px] lg:px-4 lg:py-[30px] xl:h-auto xl:px-[26px]">
                                <p class="text-sm font-bold capitalize leading-4 text-white lg:text-lg lg:leading-[30px]">{{ value.attributes.title }}</p>
                            </div>
                            <div class="bg-white px-6 py-5 shadow-[0px_3px_6px_rgba(0,0,0,0.16)] md:min-h-[178px] lg:px-6 lg:py-5">
                                <p class="text-sm font-medium text-black xl:leading-[22px]">{{ value.attributes.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <nuxt-link v-if="$helper.isInternalUrl(buttonUrl)" :to="buttonUrl" class="b-btn text-xs lg:max-w-[322px] lg:py-6">{{ buttonText }}</nuxt-link>
                        <a v-else target="_blank" :href="buttonUrl" class="b-btn text-xs lg:max-w-[322px] lg:py-6">{{ buttonText }}</a>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            buttonText: {
                type: String,
                default: 'Book a Consultation',
            },
            buttonUrl: {
                type: String,
                default: '/book-consult',
            },
            values: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            title: 'Passion & Commitment',
                            description: 'We exceed professional expectations through customer engagement and guarantee results with strong work ethic.',
                        },
                    },
                    {
                        id: 2,
                        attributes: {
                            title: 'Honesty & Trust',
                            description: 'We uphold integrity and trust in our work. We are accountable and consistent in driving results.',
                        },
                    },
                    {
                        id: 3,
                        attributes: {
                            title: 'Practical',
                            description: 'We use proprietary standard operating procedures that are tested and proven for maximizing operational efficiencies.',
                        },
                    },
                    {
                        id: 4,
                        attributes: {
                            title: 'One Team',
                            description: 'Our accredited advisors work together to align with your vision and boost your growth.',
                        },
                    },
                ],
            },

            title: {
                type: String,
                default: 'WITH YOU IN YOUR GREATEST BUSINESS CHALLENGES',
            },
            image: {
                type: String,
                default: '//images.ctfassets.net/koyrlvjc3wvc/1LiWbUsgdNPuIdSwcrtIcn/9d3453171c01163fdf45ab2f118e0043/img-3.jpg',
            },
        },
    };
</script>
