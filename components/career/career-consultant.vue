<template>
    <section>
        <div class="container">
            <div v-swiper:careerConsultantSlider="sliderOptions" class="swiper" :cleanup-styles-on-destroy="false">
                <div class="swiper-wrapper sm:min-h-full">
                    <div v-for="(consultant, i) in careersconsultants" :key="i" class="swiper-slide flex flex-col bg-white px-6 pb-[46px] pt-4 sm:min-h-full sm:justify-between">
                        <p class="min-h-[42px] font-semibold capitalize leading-[18px] tracking-[0.42px] text-[#030303]">{{ consultant.attributes.title }}</p>
                        <div class="mt-[9px] h-[151px] overflow-hidden shadow-[0_3px_6px_rgba(180,180,180,0.44)]">
                            <img :src="consultant.attributes.imgUrl" class="h-full w-full object-cover object-top" :alt="consultant.attributes.title" loading="lazy" />
                        </div>
                        <p class="pb-5 pt-[26px] text-sm leading-[26px] -tracking-[0.04px] text-[#202a36]">
                            {{ consultant.attributes.description }}
                        </p>
                        <div class="mt-auto">
                            <a :href="consultant.attributes.linkUrl" class="flex items-center gap-4 text-primary">
                                <p class="text-sm font-semibold leading-[13px] -tracking-[0.03px]">{{ consultant.attributes.linkText }}</p>
                                <icons-downarrow class="-rotate-90" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-[31px] flex w-full justify-center">
                <div class="swiper-pagination-career-consultant swiper-pagination-bullets !cursor-pointer"></div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            careersconsultants: {
                type: Array,
                default: () => [],
            },
            question1Ans: {
                type: String,
                default: '',
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
                        el: '.swiper-pagination-career-consultant',
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
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                        },
                        1200: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                        },
                    },
                },
            };
        },

        mounted() {
            this.careerConsultantSlider.init();
        },
    };
</script>
