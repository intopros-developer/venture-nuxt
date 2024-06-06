<template>
    <section class="py-[50px] lg:pt-[78px]">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="text-center">
                <div class="mb-9 flex items-center justify-center gap-2 text-center sm:gap-[33px]">
                    <div class="h-px w-1/5 bg-[#D5D5D5]"></div>
                    <h2 class="max-w-[90%] text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary [&>br]:inline-block sm:[&>br]:hidden" v-html="title"></h2>
                    <div class="h-px w-1/5 bg-[#D5D5D5]"></div>
                </div>
                <p class="text-[15px] font-medium leading-[18px] -tracking-[0.04px] text-[#707070] xl:text-[20px] xl:leading-[23px]">
                    {{ description }}
                </p>
            </div>
        </div>
        <div class="container px-10 pt-8 md:px-4 lg:px-[97px] lg:pt-[104px] xl:px-4">
            <div class="flex flex-col gap-11 md:flex-row md:items-center md:justify-between md:gap-5 lg:gap-10">
                <section class="sectors-slider relative overflow-hidden">
                    <nuxt-img format="webp" src="/images/top-overlay.webp" class="absolute -top-16 z-10" alt="Sectors we excelled in" loading="lazy" />
                    <div v-swiper:sectorsSlider="sliderOptions" class="swiper" :cleanup-styles-on-destroy="false">
                        <div class="swiper-wrapper !max-h-[470px] lg:!max-h-[610px]">
                            <div v-for="(service, index) in data" :key="`service_${index}`" class="swiper-slide !h-auto py-[18px]">
                                <button :aria-label="service.attributes.sectorName" class="d-inline ml-[150px] flex w-auto items-center gap-1 opacity-20 transition-all duration-300 hover:opacity-100" @click="clickedSelector">
                                    <div class="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white lg:h-12 lg:w-12">
                                        <icons-building v-if="index === 0" class="h-4 w-3 lg:h-5 lg:w-[25px]" />
                                        <icons-eduction v-else-if="index === 1" class="h-5 w-4 lg:h-[20px] lg:w-[34px]" />
                                        <icons-wifi v-else-if="index === 2" class="h-5 w-4 lg:h-[25px] lg:w-[34px]" />
                                        <icons-cannabis v-else-if="index === 3" class="h-4 w-4 lg:h-[22px] lg:w-[22px]" />
                                        <icons-finacial v-else-if="index === 4" class="ld:w-[22px] h-4 w-4 lg:h-[23px]" />
                                        <icons-brokerage v-else-if="index === 5" class="h-4 w-4 lg:h-[25px] lg:w-[25px]" />
                                        <icons-clean-tech v-else-if="index === 6" class="h-5 w-4 lg:h-[25px] lg:w-[34px]" />
                                        <icons-heart-care v-else-if="index === 7" class="h-4 w-4 lg:h-[25px] lg:w-[25px]" />
                                        <icons-residential v-else-if="index === 8" class="h-4 w-4 lg:h-[25px] lg:w-[22px]" />
                                        <icons-consumer v-else-if="index === 9" class="h-4 w-4 lg:h-[25px] lg:w-[22px]" />
                                        <icons-manufacturing v-else-if="index === 10" class="h-4 w-4 lg:h-[22px] lg:w-[29px]" />
                                        <icons-bitcoin v-else-if="index === 11" class="h-4 w-4 lg:h-[25px] lg:w-[22px]" />
                                    </div>
                                    <p class="max-w-[152px] text-left text-[9px] font-semibold leading-[11px] -tracking-[-0.02px] text-[#202A36]">
                                        {{ service.attributes.sectorName }}
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <nuxt-img format="webp" src="/images/bottom-overlay.webp" class="absolute -bottom-12 z-10 lg:-bottom-16" alt="Sectors we excelled in" loading="lazy" />
                </section>
                <home-sector-chart ref="sectorChart" />
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'HomeSectorExcelled',
        props: {
            title: {
                type: String,
                default: "SECTORS WE EXCELLED <span class='text-primary'>IN</span>",
            },
            description: {
                type: String,
                default: 'Client expertise in 150+ Industries, find out how we can help you adapt to a changing economy',
            },
            data: {
                type: Array,
                default: [
                    {
                        id: 1,
                        attributes: {
                            sectorName: 'Aerospace & Defense',
                            industryConsultant: '30',
                            raised: '30',
                            businessPlansWritten: '59',
                            yearsOfExperience: '13',
                            createdAt: '2023-04-12T05:48:15.492Z',
                            updatedAt: '2023-04-12T05:48:19.913Z',
                            publishedAt: '2023-04-12T05:48:19.909Z',
                        },
                    },
                    {
                        id: 2,
                        attributes: {
                            sectorName: 'Software/Apps & Telecommunications',
                            industryConsultant: '16',
                            raised: '32MM',
                            businessPlansWritten: '58',
                            yearsOfExperience: '10',
                            createdAt: '2023-04-12T05:47:36.713Z',
                            updatedAt: '2023-04-12T05:47:41.317Z',
                            publishedAt: '2023-04-12T05:47:41.312Z',
                        },
                    },
                ],
            },
        },
        data() {
            return {
                sliderOptions: {
                    autoplay: false,
                    direction: 'vertical',
                    initialSlide: 2,
                    slidesPerView: 7,
                    centeredSlides: true,
                    slideToClickedSlide: true,
                    speed: 300,
                    loop: true,
                    spaceBetween: 0,
                    touchRatio: 1,
                    init: false,
                    // noSwipingSelector:'div',
                    allowTouchMove: false,
                },
                slideInsideClasses: [
                    [
                        {
                            index: 1,
                            class: 'inside-1',
                        },
                        {
                            index: 11,
                            class: 'inside-1',
                        },
                        {
                            index: 2,
                            class: 'inside-2',
                        },
                        {
                            index: 10,
                            class: 'inside-2',
                        },
                        {
                            index: 3,
                            class: 'inside-3',
                        },
                        {
                            index: 9,
                            class: 'inside-3',
                        },
                    ],
                    [
                        {
                            index: 2,
                            class: 'inside-1',
                        },
                        {
                            index: 0,
                            class: 'inside-1',
                        },
                        {
                            index: 3,
                            class: 'inside-2',
                        },
                        {
                            index: 11,
                            class: 'inside-2',
                        },
                        {
                            index: 4,
                            class: 'inside-3',
                        },
                        {
                            index: 10,
                            class: 'inside-3',
                        },
                    ],
                    [
                        {
                            index: 3,
                            class: 'inside-1',
                        },
                        {
                            index: 1,
                            class: 'inside-1',
                        },
                        {
                            index: 4,
                            class: 'inside-2',
                        },
                        {
                            index: 0,
                            class: 'inside-2',
                        },
                        {
                            index: 5,
                            class: 'inside-3',
                        },
                        {
                            index: 11,
                            class: 'inside-3',
                        },
                    ],
                    [
                        {
                            index: 4,
                            class: 'inside-1',
                        },
                        {
                            index: 2,
                            class: 'inside-1',
                        },
                        {
                            index: 5,
                            class: 'inside-2',
                        },
                        {
                            index: 1,
                            class: 'inside-2',
                        },
                        {
                            index: 6,
                            class: 'inside-3',
                        },
                        {
                            index: 0,
                            class: 'inside-3',
                        },
                    ],
                    [
                        {
                            index: 5,
                            class: 'inside-1',
                        },
                        {
                            index: 3,
                            class: 'inside-1',
                        },
                        {
                            index: 6,
                            class: 'inside-2',
                        },
                        {
                            index: 2,
                            class: 'inside-2',
                        },
                        {
                            index: 7,
                            class: 'inside-3',
                        },
                        {
                            index: 1,
                            class: 'inside-3',
                        },
                    ],
                    [
                        {
                            index: 6,
                            class: 'inside-1',
                        },
                        {
                            index: 4,
                            class: 'inside-1',
                        },
                        {
                            index: 7,
                            class: 'inside-2',
                        },
                        {
                            index: 3,
                            class: 'inside-2',
                        },
                        {
                            index: 8,
                            class: 'inside-3',
                        },
                        {
                            index: 2,
                            class: 'inside-3',
                        },
                    ],
                    [
                        {
                            index: 7,
                            class: 'inside-1',
                        },
                        {
                            index: 5,
                            class: 'inside-1',
                        },
                        {
                            index: 8,
                            class: 'inside-2',
                        },
                        {
                            index: 4,
                            class: 'inside-2',
                        },
                        {
                            index: 9,
                            class: 'inside-3',
                        },
                        {
                            index: 3,
                            class: 'inside-3',
                        },
                    ],
                    [
                        {
                            index: 8,
                            class: 'inside-1',
                        },
                        {
                            index: 6,
                            class: 'inside-1',
                        },
                        {
                            index: 9,
                            class: 'inside-2',
                        },
                        {
                            index: 5,
                            class: 'inside-2',
                        },
                        {
                            index: 10,
                            class: 'inside-3',
                        },
                        {
                            index: 4,
                            class: 'inside-3',
                        },
                    ],
                    [
                        {
                            index: 9,
                            class: 'inside-1',
                        },
                        {
                            index: 7,
                            class: 'inside-1',
                        },
                        {
                            index: 10,
                            class: 'inside-2',
                        },
                        {
                            index: 6,
                            class: 'inside-2',
                        },
                        {
                            index: 11,
                            class: 'inside-3',
                        },
                        {
                            index: 5,
                            class: 'inside-3',
                        },
                    ],
                    [
                        {
                            index: 10,
                            class: 'inside-1',
                        },
                        {
                            index: 8,
                            class: 'inside-1',
                        },
                        {
                            index: 11,
                            class: 'inside-2',
                        },
                        {
                            index: 7,
                            class: 'inside-2',
                        },
                        {
                            index: 0,
                            class: 'inside-3',
                        },
                        {
                            index: 6,
                            class: 'inside-3',
                        },
                    ],
                    [
                        {
                            index: 11,
                            class: 'inside-1',
                        },
                        {
                            index: 9,
                            class: 'inside-1',
                        },
                        {
                            index: 0,
                            class: 'inside-2',
                        },
                        {
                            index: 8,
                            class: 'inside-2',
                        },
                        {
                            index: 1,
                            class: 'inside-3',
                        },
                        {
                            index: 7,
                            class: 'inside-3',
                        },
                    ],
                    [
                        {
                            index: 0,
                            class: 'inside-1',
                        },
                        {
                            index: 10,
                            class: 'inside-1',
                        },
                        {
                            index: 1,
                            class: 'inside-2',
                        },
                        {
                            index: 9,
                            class: 'inside-2',
                        },
                        {
                            index: 2,
                            class: 'inside-3',
                        },
                        {
                            index: 8,
                            class: 'inside-3',
                        },
                    ],
                ],
            };
        },

        mounted() {
            this.sectorsSlider.init();
            this.changeSlide();
            this.sectorsSlider.on('slideChangeTransitionStart', (swiper) => {
                this.changeSlide();
            });
        },

        methods: {
            clickedSelector() {
                // console.log('Clicked');
            },
            changeSlide() {
                document.querySelectorAll('.sectors-slider .swiper .swiper-slide button').forEach((el) => {
                    el.classList.remove('inside-1');
                });
                document.querySelectorAll('.sectors-slider .swiper .swiper-slide button').forEach((el) => {
                    el.classList.remove('inside-2');
                });
                document.querySelectorAll('.sectors-slider .swiper .swiper-slide button').forEach((el) => {
                    el.classList.remove('inside-3');
                });
                document.querySelectorAll('.sectors-slider .swiper .swiper-slide button').forEach((el) => {
                    el.classList.remove('!ml-0');
                });

                const activeSlide = document.querySelector('.sectors-slider .swiper .swiper-slide.swiper-slide-active');
                if (activeSlide) {
                    const activeSlideIndex = parseInt(activeSlide.getAttribute('data-swiper-slide-index'));

                    this.slideInsideClasses[activeSlideIndex].forEach((data) => {
                        document.querySelectorAll(`.sectors-slider .swiper [data-swiper-slide-index="${data.index}"] > button`).forEach((el) => {
                            el.classList.add(data.class);
                        });
                    });

                    document.querySelectorAll(`.sectors-slider .swiper [data-swiper-slide-index="${activeSlideIndex}"] > button`).forEach((el) => {
                        el.classList.add('!ml-0');
                    });
                    this.$refs.sectorChart.updateChart(this.data[activeSlideIndex]);
                }
            },
        },
    };
</script>

<style scoped></style>
