<template>
    <div class="bg-[url(/assets/img/our_client_bg.png)] bg-cover bg-[right_20%_top] bg-no-repeat py-14 pb-24 md:py-16 lg:bg-center xl:pb-20 xl:pt-[162px]">
        <section class="relative">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="pb-[50px]">
                    <div id="ourClientsWords" class="mb-5 flex items-center justify-center gap-2.5 text-center">
                        <slot v-if="hasCustomHeaderSlot" name="customHeader">
                            <h2 class="inline-block border-b-[7px] border-primary pb-2 text-xl font-bold md:text-2xl lg:text-3xl" v-html="title"></h2>
                        </slot>
                        <template v-else>
                            <div class="block h-px w-full bg-[#d5d5d5]"></div>
                            <h2 class="inline-block shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl" v-html="title"></h2>
                            <div class="block h-px w-full bg-[#d5d5d5]"></div>
                        </template>
                    </div>
                    <div class="mx-auto max-w-lg space-y-5 text-center text-sm font-medium leading-6 -tracking-[0.03px] text-[#586376] xl:max-w-[732px] xl:text-[17px] xl:leading-[23px] xl:-tracking-[0.04px]">
                        <p class="[&>br]:block [&>br]:sm:hidden" v-html="description"></p>
                    </div>
                </div>
            </div>
            <div v-swiper:aboutClient="slider_options" class="swiper client-words group relative mx-auto max-w-[1440px]" :cleanup-styles-on-destroy="false">
                <div class="swiper-wrapper mb-16 flex">
                    <template v-if="testimonials">
                        <div v-for="(data, i) in testimonials" :key="i" class="swiper-slide !h-auto">
                            <div class="container lg:px-[97px] xl:px-4">
                                <div class="mb-10 flex flex-col items-center gap-10 md:flex-row md:items-start lg:mb-[106px]">
                                    <div class="flex-1">
                                        <div class="mb-4">
                                            <nuxt-img src="/assets/img/icon_quote.png" alt="Quote" loading="lazy" />
                                        </div>
                                        <div class="space-y-5 font-bold -tracking-[0.04px] text-[#707070] lg:text-lg">
                                            <p class="max-w-[633px]">
                                                {{ data.attributes.description }}
                                            </p>
                                        </div>
                                    </div>
                                    <!-- shadow-[0_3px_6px_rgba(0,0,0,0.48)]  -->
                                    <div class="h-[200px] w-[200px] flex-none overflow-hidden rounded-full xl:h-[340px] xl:w-[340px]">
                                        <nuxt-img format="webp" :src="data.attributes.profileImgUrl" alt="Profile Image" class="h-full w-full rounded-full object-cover" loading="lazy" />
                                    </div>
                                </div>
                                <div class="text-center md:text-left">
                                    <p class="inline-block border-b-[5px] border-r-[5px] border-primary border-r-transparent pb-2 text-xl italic text-black md:inline-block xl:border-b-[9px] xl:text-[21px] xl:leading-[60px]">
                                        {{ data.attributes.name }}
                                        <span v-if="data.attributes.companyName">
                                            {{ `- ${data.attributes.companyName}` }}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="max-w-[1440px]">
                    <div class="swiper-button-next swiper-button-next1 -mr-3 !hidden group-hover:md:!inline-block"></div>
                    <div class="swiper-button-prev swiper-button-prev1 -ml-3 !hidden group-hover:md:!inline-block"></div>
                </div>
            </div>
        </section>

        <div class="flex w-full justify-center lg:mt-[31px]">
            <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'OUR CLIENT WORDS',
            },
            description: {
                type: String,
                default: 'See how we’ve helped our clients achieve their business goals.',
            },
            testimonials: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            name: 'Gurvinder H',
                            description: 'They are experienced in cognitive computing, automation, ICO, big data, and artificial intelligence.',
                            profileImgUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/1QhlKfFBmyMf7qsZbPooEY/2afda1f2a33ee4828212b84ab9ae41ce/gurvinder.png',
                        },
                    },
                    {
                        id: 2,
                        attributes: {
                            name: 'Jason F. - SVP & Founder Digital Niche Agency',
                            description:
                                'Arleo and his team are a pleasure to work with. He is smart talented leader who leverages his professionalism and problem-solving abilities in all conversations. Arleo hand picks the best projects to invest his time into and we were lucky to be involved.',
                            profileImgUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/7A2MGgPAdroU37d5aTw8IZ/8052483e50c83ff31283bafcdc3f5c27/testimonial_01.png',
                        },
                    },
                ],
            },
        },
        data() {
            return {
                isShowReadMore: false,
                slider_options: {
                    autoPlay: false,
                    loop: true,
                    autoHeight: true,
                    slidesPerView: 1,
                    spaceBetween: 10,
                    touchRatio: 1,
                    init: false,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,

                        renderBullet: (index, className) => {
                            return `<p aria-label="Bullet Icon" class="career-slider-bullet-icon ${className}"></p>`;
                        },
                    },
                    navigation: {
                        nextEl: '.swiper-button-next1',
                        prevEl: '.swiper-button-prev1',
                    },
                },
                slider_data: [],
            };
        },
        computed: {
            hasCustomHeaderSlot() {
                return !!this.$slots.customHeader;
            },
        },

        mounted() {
            this.aboutClient.init();
        },

        created() {},
    };
</script>

<style scoped>
    .client-words .swiper-button-prev.swiper-button-prev1 {
        background-image: url('static/assets/img/prev-arrow.png') !important;
        background: no-repeat;
        background-position: center;
        background-color: #00adff;
        height: 54px;
        margin-top: -44px;
        position: absolute;
        width: 54px;
        border-radius: 50%;
        left: 2%;
    }

    .swiper-button-prev1::after {
        content: '';
    }

    .client-words .swiper-button-next.swiper-button-next1 {
        background-image: url('static/assets/img/next-arrow.png') !important;
        background: no-repeat;
        background-position: center;
        background-color: #00adff;
        height: 54px;
        margin-top: -44px;
        position: absolute;
        width: 54px;
        border-radius: 50%;
        right: 2%;
    }

    .swiper-button-next1::after {
        content: '';
    }
</style>
