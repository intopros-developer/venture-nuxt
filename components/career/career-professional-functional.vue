<template>
    <section class="py-24 md:py-24 xl:py-20">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="mb-[52px] flex items-center justify-center gap-5 text-center">
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                <h2 id="professionalFunctionalPositions" class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary" v-html="title"></h2>
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
            </div>

            <div v-swiper:careerSlider="sliderOptions" class="swiper" :cleanup-styles-on-destroy="false">
                <div class="swiper-wrapper sm:min-h-full">
                    <div v-for="(position, i) in professionalsAndPositions" :key="i" class="swiper-slide flex flex-col bg-white px-4 pb-8 pt-[18px] sm:min-h-full sm:justify-between">
                        <div class="h-[167px] overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.44)]">
                            <nuxt-img format="webp" :src="position.attributes.imgUrl" class="h-full w-full object-cover object-top" :alt="'swiper-slide_' + i" loading="lazy" />
                        </div>
                        <p class="min-h-[54px] pt-[18px] text-base font-semibold leading-[18px] tracking-[0.42px] text-primary">{{ position.attributes.title }}</p>
                        <p class="pb-5 pt-[10px] text-base leading-[26px] -tracking-[0.04px] text-[#202a36]">
                            {{ position.attributes.description }}
                        </p>
                        <div class="sm:mt-auto">
                            <a :href="position.attributes.linkUrl" class="flex items-center gap-4 text-primary">
                                <p class="text-sm font-semibold leading-[13px] -tracking-[0.03px]">{{ position.attributes.linkText }}</p>
                                <icons-downarrow class="-rotate-90" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-[31px] flex w-full justify-center">
                <div class="swiper-pagination swiper-pagination-bullets"></div>
            </div>

            <!-- <div class="grid grid-cols-1 gap-2.5 md:grid-cols-3"></div> -->
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'OUR FUNCTIONAL POSITIONS',
            },
            professionalsAndPositions: {
                type: Array,
                default: () => [],
            },
        },

        data() {
            return {
                sliderOptions: {
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
                    breakpoints: {
                        640: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        1200: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                    },
                },
            };
        },

        mounted() {
            this.careerSlider.init();
        },
    };
</script>
