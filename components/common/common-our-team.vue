<template>
    <div>
        <section class="py-10 lg:pt-20 xl:pb-[83px] xl:pt-[106px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div id="ourTeam" class="mb-[51px] flex items-center justify-center gap-2 text-center sm:gap-[33px]">
                    <div class="h-px w-full bg-[#d5d5d5]"></div>
                    <h2 class="shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl [&>span]:text-primary" v-html="title"></h2>
                    <div class="h-px w-full bg-[#d5d5d5]"></div>
                </div>
                <div class="mx-auto max-w-lg space-y-5 text-center text-sm font-medium leading-6 -tracking-[0.03px] text-[#353535] xl:max-w-[732px] xl:text-base xl:leading-9 xl:-tracking-[0.04px]">
                    <p>{{ description }}</p>
                </div>
            </div>
        </section>
        <section>
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="grid grid-cols-1 gap-[51px] sm:grid-cols-2 md:mb-[123px] md:grid-cols-3 xl:gap-24">
                    <div v-for="(team, i) in teams" :key="i">
                        <div class="mx-auto mb-[25px] h-[295px] w-[295px] overflow-hidden rounded-full sm:h-[188px] sm:w-[188px] xl:mb-9 xl:h-[276px] xl:w-[276px]">
                            <nuxt-img format="webp" :src="`${team.attributes.imgUrl}`" :alt="team.attributes.name" loading="lazy" />
                        </div>
                        <div class="text-center">
                            <h5 class="text-[20px] font-bold leading-6 -tracking-[0.04px] text-[#586376] xl:-tracking-[0.05px]">
                                {{ team.attributes.name }}
                            </h5>
                            <p class="mt-2 text-[20px] font-normal leading-5 -tracking-[0.04px] text-[#586376] xl:-tracking-[0.06px]">
                                {{ team.attributes.position }}
                            </p>
                        </div>
                        <p class="mb-3 mt-[25px] h-24 overflow-hidden whitespace-pre-line text-sm leading-6 -tracking-[0.04px] text-[#202A36]" :class="{ '!h-auto': readMore.includes(i) }" v-html="team.attributes.description"></p>
                        <button :aria-label="$t('read_more')" class="flex items-center justify-center gap-4 text-sm font-semibold text-[#83888e] xl:text-xl" @click="showReadMore(i)">
                            <p class="text-base">{{ readMore.includes(i) ? $t('read_less') : $t('read_more') }}</p>
                            <icons-downarrow class="w-2 xl:w-[11px]" :class="{ 'rotate-180': readMore.includes(i) }" />
                        </button>

                        <nuxt-img format="webp" :src="`${team.attributes.logoUrl || team.attributes.iconUrl}`" :alt="team.attributes.name + '_icon'" class="mx-auto mt-[23px] h-11" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        props: {
            teams: {
                type: Array,
                default: [
                    {
                        id: 1,
                        attributes: {
                            name: 'Arleo Dordar',
                            position: 'Founder & President',
                            description:
                                'Arleo Dordar is the founder, CEO, investor, and product architect of Venture plans. Arleo is a visionary with a strong leadership background. He has assisted in scaling, structuring, organizing, and developing sustainability plans for 4500+ businesses across 150 industries globally, resulting over 100 million dollars in investments.\nArleos expertise is in the implementation of revenue growth, execution, financing, and digital transformation. Arleo can engage in high-level discussions with startups, small businesses, and enterprise level organizations to gather and analyze big data, understand trends, and proactively deliver insights, recommendations, and drive improvements based on qualitative and quantitative metrics in to enhance operational efficiency, sales, marketing, and branding to achieve financing goals.\n\nArleo is fluent in English, and Farsi.',
                            logoUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/6b00DIWzFd2oslgeBGW9bR/20165768ecd6a767e7dab00abf2f8b0e/FINRA__1_.png',
                            iconUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/6b00DIWzFd2oslgeBGW9bR/20165768ecd6a767e7dab00abf2f8b0e/FINRA__1_.png',
                            imgUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/7IXTuZckPyenC1Ujais8dI/c25bf738e4b6d830dc5fadce9c130bbc/IMG_5648-modified_3x.webp',
                        },
                    },
                ],
            },
            title: {
                type: String,
                default: 'OUR TEAM',
            },
            description: {
                type: String,
                default: 'Get to know little bit about-us our team',
            },
        },

        data() {
            return {
                readMore: [],
            };
        },

        methods: {
            showReadMore(i) {
                if (this.readMore.includes(i)) {
                    const index = this.readMore.indexOf(i);
                    if (index > -1) {
                        this.readMore.splice(index, 1);
                    }
                } else {
                    this.readMore.push(i);
                }
            },
        },
    };
</script>
