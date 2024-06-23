<template>
    <section class="hero-slider relative -mt-36 md:-mt-32">
        <div v-swiper:heroSlider="slider_options" class="swiper relative h-screen !min-h-[42rem]" :cleanup-styles-on-destroy="false">
            <div class="swiper-wrapper flex !min-h-[42rem] xl:!h-[100vh]">
                <div v-for="(slide, i) in slider" :key="i" class="swiper-slide !h-full overflow-hidden bg-black-700">
                    <div class="absolute top-0 z-0 h-full w-full bg-black opacity-20 sm:opacity-30"></div>
                    <div
                        class="absolute top-0 z-0 h-full w-full"
                        :class="{
                            'bg-gradient-to-r from-[#2B3746]/70 md:-left-[20%] md:w-[55%]': i === 5,
                            'w-full bg-gradient-to-l from-[#313c4a]/0 via-[#0b0d11]/[0.14] to-[#0a0c0f] opacity-25': i === 4,
                            'bg-gradient-to-r from-[#2B3746]/70 md:-left-[10%] md:w-[55%]': i === 3,
                            '-left-[40%] bg-gradient-to-r from-[#2b3746] md:w-[65%]': i === 2,
                            '-left-[30%] bg-gradient-to-r from-[#2b3746] md:w-[90%]': i === 1,
                            'bg-gradient-to-r from-[#2B3746]/70 md:-left-[40%] md:w-[65%]': i === 0,
                        }"
                    ></div>
                    <div class="absolute bottom-0 left-0 z-0 h-[89px] w-full bg-gradient-to-t from-[#202A36] opacity-80"></div>
                    <div v-if="slide.attributes.slideVideoUrl">
                        <video class="force-video-reload responsive-slide-video absolute inset-0 bottom-0 left-0 right-0 top-0 -z-10 h-full w-full object-cover" :style="videoHeight" autoplay loop muted playsinline>
                            <source :src="slide.attributes.slideVideoUrl" type="video/mp4" :loading="i < 4 ? 'eager' : 'lazy'" />
                        </video>
                    </div>
                    <img v-else class="slider-img absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full object-cover" :alt="slide.attributes.title" :src="slide.attributes.slideImageUrl" :preload="i < 3 ? true : false" />

                    <div class="container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4" :class="{ '': i === 0 }">
                        <div
                            class="full-slide-animation-after full-slide-animation-before group flex min-h-[38rem] place-content-center items-center justify-start pb-4 pt-36 md:min-h-[40rem] lg:max-w-[950px] xl:min-h-screen"
                            :class="{ 'full-slide-animation-after full-slide-animation-before': i === 0 }"
                        >
                            <div class="flex-1">
                                <h2
                                    class="slide-text-animation-before slide-text-animation-after max-w-[295px] !whitespace-normal text-[26px] font-extrabold uppercase leading-[42px] text-white sm:max-w-[430px] sm:text-[38px] md:whitespace-nowrap xl:max-w-[626px] xl:text-[50px] xl:leading-[53px]"
                                    v-html="slide.attributes.title"
                                ></h2>
                                <nuxt-link
                                    v-if="slide.attributes.buttonText && $helper.isInternalUrl(slide.attributes.linkUrl)"
                                    :to="slide.attributes.linkUrl"
                                    class="slide-learn-more-animation-before slide-learn-more-animation-after flex items-center gap-2 pb-5 pt-5 text-sm text-white"
                                >
                                    {{ slide.attributes.linkTitle }}
                                    <img
                                        src="/images/icons/arrow-right.webp"
                                        class="relative left-0 object-contain transition-all duration-300 group-hover:left-2"
                                        :alt="slide.attributes.linkTitle + '-1'"
                                        loading="lazy"
                                        width="24"
                                        height="13"
                                    />
                                </nuxt-link>
                                <a
                                    v-else-if="slide.attributes.buttonText"
                                    target="_blank"
                                    :href="slide.attributes.linkUrl"
                                    class="slide-learn-more-animation-before slide-learn-more-animation-after flex items-center gap-2 pb-5 pt-5 text-sm text-white"
                                >
                                    {{ slide.attributes.linkTitle }}
                                    <img
                                        src="/images/icons/arrow-right.webp"
                                        class="relative left-0 object-contain transition-all duration-300 group-hover:left-2"
                                        :alt="slide.attributes.linkTitle + '-1'"
                                        loading="lazy"
                                        width="24"
                                        height="13"
                                    />
                                </a>

                                <p class="slide-text-animation-before slide-text-animation-after max-w-[377px] pt-4 text-[1.1rem] leading-[22px] text-[#FBFBFD] xl:max-w-[590px]" :class="{ 'mb-[46px] !pt-0': slide.attributes.buttonText }">
                                    {{ slide.attributes.description }}
                                </p>

                                <nuxt-link
                                    v-if="slide.attributes.buttonUrl && $helper.isInternalUrl(slide.attributes.buttonUrl)"
                                    :to="slide.attributes.buttonUrl"
                                    class="outline-btn slide-text-animation-before slide-text-animation-after px-10 py-3 text-[13px] font-semibold uppercase leading-4 xl:px-16 xl:py-[22px]"
                                    >{{ slide.attributes.buttonText }}</nuxt-link
                                >

                                <nuxt-link
                                    v-else-if="slide.attributes.buttonText"
                                    target="_blank"
                                    :href="slide.attributes.buttonUrl"
                                    class="outline-btn slide-text-animation-before slide-text-animation-after px-10 py-3 text-[13px] font-semibold uppercase leading-4 xl:px-16 xl:py-[22px]"
                                >
                                    {{ slide.attributes.buttonText }}
                                </nuxt-link>
                                <nuxt-link
                                    v-if="!slide.attributes.buttonText && $helper.isInternalUrl(slide.attributes.linkUrl)"
                                    :to="slide.attributes.linkUrl"
                                    class="slide-learn-more-animation-before slide-learn-more-animation-after flex items-center gap-2 pb-5 pt-5 text-sm text-white"
                                >
                                    {{ slide.attributes.linkTitle }}
                                    <img
                                        src="/images/icons/arrow-right.webp"
                                        class="relative left-0 object-contain transition-all duration-300 group-hover:left-2"
                                        :alt="slide.attributes.linkTitle + '-1'"
                                        loading="lazy"
                                        width="24"
                                        height="13"
                                    />
                                </nuxt-link>

                                <nuxt-link
                                    v-else-if="!slide.attributes.buttonText"
                                    target="_blank"
                                    :href="slide.attributes.linkUrl"
                                    class="slide-learn-more-animation-before slide-learn-more-animation-after flex items-center gap-2 pb-5 pt-5 text-sm text-white"
                                >
                                    {{ slide.attributes.linkTitle }}
                                    <img
                                        src="/images/icons/arrow-right.webp"
                                        class="object-fit relative left-0 transition-all duration-300 group-hover:left-2"
                                        :alt="slide.attributes.linkTitle + '-1'"
                                        loading="lazy"
                                        width="24"
                                        height="13"
                                    />
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="xl:container-fluid container relative -top-[100px] z-10 !pr-0 pl-10 md:pl-4 md:pr-0 lg:-top-[60px] lg:pl-[97px] xl:px-0">
                <div id="slider-bottom-navigation" class="flex justify-start gap-6 overflow-auto text-white md:justify-center md:gap-8">
                    <div v-for="(slide, ind) in slider" :key="slide.attributes.paginationTitle" :data-ind="ind" class="self-slide shrink-0 pb-4 font-bold">
                        {{ slide.attributes.paginationTitle }}<span class="hero__slide-nav-progress"></span>
                    </div>
                </div>
                <div style="justify-content: left" class="swiper-pagination swiper-pagination-bullets !hidden !pr-10 md:!pr-4 lg:!pr-[97px] xl:!justify-center xl:!pr-0 xl:pl-4"></div>
                <div class="-ml-10 text-center text-white lg:hidden">
                    <span @click="scrollToNextSection()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mx-auto h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
        <div class="absolute bottom-10 right-20 z-20 hidden animate-bounce text-white lg:block">
            <p class="mb-2 pl-1 text-sm text-white">Scroll</p>
            <button class="rounded-full border border-white p-2" aria-label="Scroll Next Section" @click="scrollToNextSection()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="fill-whi mx-auto h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            slider: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            title: 'DEEP EXPERTISE <br /> IN CAPITAL RAISING',
                            description: 'Global consulting firm with a speciality in innovation, Technology, Digital Transformation, Financing and Revenue Growth.',
                            buttonText: 'LET’S WORK TOGETHER',
                            buttonUrl: '/book-consult',
                            linkTitle: 'FIND OUT HOW',
                            linkUrl: '/careers',
                            paginationTitle: 'Let’s Work Together',
                            slideVideoUrl: '/videos/slider-video.mp4',
                            slideImageUrl: '',
                        },
                    },
                ],
            },
        },

        data() {
            return {
                timer: null,
                progressSpeed: 5,
                percentage: 0,
                current_index: 0,
                videoHeight: '',
                currentSlide: 0,
                anotherTimer: null,
                slider_options: {
                    noSwipingSelector: '#slider-bottom-navigation',
                    effect: 'fade',
                    speed: 100,
                    autoplay: {
                        delay: 5000,
                    },
                    autoHeight: true,
                    loop: true,
                    initialSlide: 0,
                    slidesPerView: 1,
                    spaceBetween: 30,
                    touchRatio: 1,
                    init: false,

                    breakpoints: {
                        350: {
                            touchRatio: 1,
                        },
                        1024: {
                            touchRatio: 0,
                        },
                    },
                },
            };
        },

        head() {
            const preloadLinks = this.generatePreloadLinks();

            return {
                link: [...preloadLinks],
            };
        },

        mounted() {
            this.init_slider();
        },

        beforeDestroy() {
            clearInterval(this.timer);
        },

        methods: {
            generatePreloadLinks() {
                const preloadLinks = [];
                this.$props.slider.forEach((slide) => {
                    if (slide.attributes.slideImageUrl) {
                        preloadLinks.push({
                            rel: 'preload',
                            href: slide.attributes.slideImageUrl,
                            as: 'image',
                            fetchpriority: 'high',
                        });
                    }
                    if (slide.attributes.slideVideoUrl) {
                        preloadLinks.push({
                            rel: 'preload',
                            href: slide.attributes.slideVideoUrl,
                            as: 'video',
                            fetchpriority: 'high',
                        });
                    }
                });
                return preloadLinks;
            },

            resetAndSelectSlider() {
                const findAllSlides = document.querySelectorAll('#slider-bottom-navigation .self-slide');
                for (let sl = 0; sl < findAllSlides.length; sl++) {
                    findAllSlides[sl].classList.remove('active');
                    findAllSlides[sl].querySelector('span').classList.remove('play-transition');
                    if (parseInt(findAllSlides[sl].dataset.ind) === this.currentSlide) {
                        findAllSlides[sl].classList.add('active');
                        const vm = this;
                        setTimeout(function () {
                            findAllSlides[sl].querySelector('span').classList.add('play-transition');
                            vm.heroSlider.autoplay.start();
                        }, 100);
                        const parent = document.querySelector('#slider-bottom-navigation');
                        const activeSpan = document.querySelector('#slider-bottom-navigation .self-slide.active');
                        parent.scrollTo({ left: activeSpan.offsetLeft - 50, top: 0, behavior: 'smooth' });
                    }
                }
            },
            init_slider() {
                this.heroSlider.on('activeIndexChange', (swiper) => {
                    if (this.heroSlider.activeIndex === this.slider.length + 1) {
                        this.currentSlide = 0;
                    } else {
                        this.currentSlide = this.heroSlider.activeIndex - 1;
                    }
                    this.resetAndSelectSlider();
                });

                this.heroSlider.init();

                document.querySelectorAll('#slider-bottom-navigation .self-slide').forEach((el) => {
                    el.addEventListener('click', (el) => {
                        if (this.timer) clearTimeout(this.timer);
                        const indexSlide = parseInt(el.currentTarget.dataset.ind) + 1;
                        this.heroSlider.slideTo(indexSlide);
                        this.heroSlider.autoplay.start();
                    });
                });
            },

            scrollToNextSection() {
                const element = document.getElementById('question-box');
                window.scrollTo({
                    top: element.getBoundingClientRect().top + window.pageYOffset - 50,
                    behavior: 'smooth',
                });
            },
        },
    };
</script>

<style scoped>
    .hero-slider .swiper-pagination::-webkit-scrollbar {
        width: 0px;
    }
    #slider-bottom-navigation::-webkit-scrollbar {
        width: 0px;
    }

    .hero-slider .swiper-pagination::-webkit-scrollbar-track {
        box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);
    }

    #slider-bottom-navigation::-webkit-scrollbar-track {
        width: 0px;
    }

    .hero-slider .swiper-pagination::-webkit-scrollbar-thumb {
        background-color: transparent;
        outline: 1px solid transparent;
    }

    #slider-bottom-navigation::-webkit-scrollbar-thumb {
        background-color: transparent;
        outline: 1px solid transparent;
    }

    .hero-slider .swiper-pagination {
        position: relative !important;
        display: flex;
        bottom: 0px !important;
        height: 60px;
        overflow-x: scroll !important;
        white-space: nowrap;
        width: 100%;
    }

    .hero-slider .swiper-pagination .swiper-pagination-bullet {
        width: auto;
        height: 2px;
        border-radius: 0;
        background: transparent;
        opacity: 1;
        position: relative;
        font-size: 15px;
    }

    .hero-slider .swiper-pagination .swiper-pagination-bullet:hover {
        color: #fff;
    }

    .hero-slider .swiper-pagination .swiper-pagination-bullet span {
        display: none;
        position: absolute;
        width: 0;
        height: 100%;
        background: #fff;
        top: 18px;
        left: 0;
    }
    #slider-bottom-navigation .self-slide span {
        display: none;
        position: absolute;
        width: 0;
        height: 100%;
        background: #fff;
        top: 12px;
        left: 0;
    }
    .hero-slider .swiper-pagination .swiper-pagination-bullet-active span {
        display: block;
        width: 0;
        transition: width 5s;
        transition-timing-function: linear !important;
    }
    #slider-bottom-navigation .self-slide.active span {
        display: block;
        width: 0;
        transition: width 5s !important;
        transition-timing-function: linear !important;
    }
    #slider-bottom-navigation .self-slide {
        cursor: pointer;
    }
    #slider-bottom-navigation .self-slide.active {
        color: #fff !important;
    }

    .hero-slider .swiper-pagination .swiper-pagination-bullet-active span.play-transition {
        width: 100%;
    }
    #slider-bottom-navigation .self-slide.active span.play-transition {
        width: 100%;
        transition: width 5s !important;
        transition-timing-function: linear !important;
    }

    .full-slide-animation-after {
        opacity: 0;
        transition: opacity 1s ease-in;
        visibility: hidden;
    }

    .swiper-slide-active .full-slide-animation-before {
        opacity: 1;
        visibility: visible;
    }

    .slide-text-animation-after {
        top: 1.25rem;
        transition: top 0.8s, opacity 0.8s;
        position: relative;
        opacity: 0;
    }

    .swiper-slide-active .slide-text-animation-before {
        opacity: 1 !important;
        top: 0 !important;
    }

    .slide-learn-more-animation-before {
        transition: left 0.5s, opacity 0.5s;
        transition-delay: 0.6s;
        left: -10%;
        opacity: 0;
        position: relative;
    }

    .swiper-slide-active .slide-learn-more-animation-after {
        transition: left 0.5s, opacity 0.5s;
        transition-delay: 0.6s;
        left: 0 !important;
        opacity: 1 !important;
    }
</style>
