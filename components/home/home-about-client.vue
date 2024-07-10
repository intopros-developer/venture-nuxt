<template>
    <section class="my-16 overflow-hidden md:my-20">
        <div class="container">
            <div class="mb-10 flex items-center justify-center text-center sm:gap-[33px]">
                <div class="h-px w-1/5 bg-[#d5d5d5] sm:block sm:w-full"></div>
                <h2 class="max-w-[90%] text-2xl font-bold uppercase text-black sm:max-w-none sm:shrink-0 xl:text-3xl [&>span]:text-primary" v-html="title"></h2>
                <div class="h-px w-1/5 bg-[#d5d5d5] sm:block sm:w-full"></div>
            </div>
        </div>
        <div v-swiper:aboutClient="slider_options" class="swiper !px-5" :cleanup-styles-on-destroy="false" :class="{ 'h-0': viewAll }" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
            <div class="swiper-wrapper mb-16 flex !h-auto">
                <template v-if="slider_data && !viewAll">
                    <div v-for="(data, i) in slider_data" :key="i" class="swiper-slide !h-auto">
                        <div class="swiper-slides-box flex overflow-hidden">
                            <div style="background-image: linear-gradient(162deg, #ffffff 0%, #f0f9ff 100%)" class="px-[22px] pb-3 pt-[28px] text-center">
                                <img :src="data.attributes.profileImgUrl" class="mx-auto h-[115px] w-[115px] rounded-full object-cover" :alt="data.attributes.name" loading="lazy" />
                                <div class="max-w-[120px] pt-2.5">
                                    <p v-if="data.attributes.name" class="text-sm font-bold leading-[23px]">{{ data.attributes.name }}</p>
                                    <p class="pt-3.5 text-[15px] text-[#6c7d88]">{{ data.attributes.companyName }}</p>
                                </div>
                            </div>
                            <div class="flex-1 pt-[13px]">
                                <div class="flex items-center justify-between border-b border-[#e2e2e2]">
                                    <div v-if="data && data.attributes && data.attributes.rating && Math.abs(data.attributes.rating)" class="swiper-slides-star relative -top-[5px] !mb-0 !gap-1">
                                        <icons-star v-for="rt in Math.abs(data.attributes.rating)" :key="rt" />
                                    </div>
                                    <div class="py-[3px] pr-4">
                                        <a target="_blank" href="https://www.google.com/" class="inline-block flex-none" aria-label="Google Icon">
                                            <icons-google-icon class="h-5 w-5 lg:h-[38px] lg:w-[38px]" />
                                        </a>
                                    </div>
                                </div>
                                <div class="hidden pb-2 pr-7 pt-[18px] md:block md:pb-0">
                                    <div class="line-clamp-6 text-sm font-light leading-[22px] text-[#333333]">{{ data.attributes.description }}</div>
                                </div>
                                <div class="block pb-2 pr-7 pt-[18px] md:hidden md:pb-0">
                                    <div v-if="!data.attributes.readMoreOn" class="line-clamp-6 text-sm font-light leading-[22px] text-[#333333]">{{ truncateString(data.attributes.description) }}</div>
                                    <div v-else class="line-clamp-6 text-sm font-light leading-[22px] text-[#333333]">{{ data.attributes.description }}</div>
                                    <p v-if="data.attributes.description.length > 100" class="text-md line-clamp-6 mt-5 cursor-pointer font-bold leading-[22px] text-[#333333]" @click="toggleReadMore(data)">
                                        {{ data.attributes.readMoreOn ? 'Read Less' : 'Read More' }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>

        <div v-if="slider_data && viewAll" class="mb-16 grid grid-cols-1 gap-x-5 gap-y-6 px-4 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="(data, i) in slider_data" :key="i" class="swiper-slide !h-auto">
                <div class="swiper-slides-box flex overflow-hidden">
                    <div style="background-image: linear-gradient(162deg, #ffffff 0%, #f0f9ff 100%)" class="px-[22px] pb-3 pt-[28px] text-center">
                        <img :src="data.attributes.profileImgUrl" class="mx-auto h-[115px] w-[115px] rounded-full object-cover" :alt="data.attributes.name" loading="lazy" />
                        <div class="max-w-[120px] pt-2.5">
                            <p v-if="data.attributes.name" class="text-sm font-bold leading-[23px]">{{ data.attributes.name }}</p>
                            <p class="pt-3.5 text-[15px] text-[#6c7d88]">{{ data.attributes.companyName }}</p>
                        </div>
                    </div>
                    <div class="flex-1 pt-[13px]">
                        <div class="flex items-center justify-between border-b border-[#e2e2e2]">
                            <div v-if="data && data.attributes && data.attributes.rating && Math.abs(data.attributes.rating)" class="swiper-slides-star relative -top-[5px] !mb-0 !gap-1">
                                <icons-star v-for="rt in Math.abs(data.attributes.rating)" :key="rt" />
                            </div>
                            <div class="py-[3px] pr-4">
                                <a target="_blank" href="https://www.google.com/" class="inline-block flex-none" aria-label="Google Icon">
                                    <icons-google-icon class="h-5 w-5 lg:h-[38px] lg:w-[38px]" />
                                </a>
                            </div>
                        </div>
                        <div class="pb-2 pr-7 pt-[18px] md:pb-0">
                            <div class="line-clamp-6 text-sm font-light leading-[22px] text-[#333333]">
                                {{ data.attributes.description }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-10 text-center md:px-4 lg:px-[97px] xl:px-4 xl:pt-5">
            <button v-if="!buttonUrl" type="button" class="outline-btn border-[#000]/[0.08] px-14 py-[23px] text-sm uppercase -tracking-[-0.03px] text-[#00ADFF]" @click="viewAll = !viewAll">
                {{ viewAll ? 'View less Reviews' : buttonText }}
            </button>
            <a v-else :href="buttonUrl" class="outline-btn border-[#000]/[0.08] px-14 py-[23px] text-sm uppercase -tracking-[-0.03px] text-[#00ADFF]">{{ buttonText }}</a>
        </div>
    </section>
</template>

<script>
    import commonToggleContent from '../common/common-toggle-content.vue';
    export default {
        components: { commonToggleContent },
        props: {
            title: {
                type: String,
                default: "WHAT OUR CLIENTS SAY <span class='text-primary'>ABOUT US</span>",
            },
            buttonText: {
                type: String,
                default: 'VIEW ALL REVIEWS',
            },
            buttonUrl: {
                type: String,
                default: '',
            },
            testimonials: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            name: 'Ted Van Samsung',
                            description: "I'm an executive with global master franchising, and I have collaborated internationally with many entrepreneurs. Arleo ",
                            profileImgUrl: '/images/clients/Ted_Van_Samang.webp',
                            rating: 5,
                            googleLink: 'https://google.com',
                            yelpLink: null,
                            companyLink: null,
                            companyName: 'google',
                        },
                    },
                ],
            },
        },

        data() {
            return {
                isMobile: false,
                ratingTextShowMore: false,
                viewAll: false,
                slider_options: {
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 20,
                    touchRatio: 1,
                    init: false,
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    },
                },
                slider_data: [],
            };
        },
        computed: {},

        mounted() {
            [...this.testimonials].forEach((da) => {
                this.slider_data.push(da);
            });
            this.aboutClient.init();
        },

        methods: {
            truncateString(text) {
                const words = text.split(' ');
                let truncatedText = '';
                for (let i = 0; i < words.length; i++) {
                    if (truncatedText.length + words[i].length <= 100) {
                        truncatedText += words[i] + ' ';
                    } else {
                        break;
                    }
                }
                return truncatedText.trim();
            },
            toggleReadMore(data) {
                data.attributes.readMoreOn = !data.attributes.readMoreOn;
            },
            stopAutoPlay() {
                this.aboutClient.autoplay.stop();
            },

            startAutoPlay() {
                this.aboutClient.autoplay.start();
            },
        },
    };
</script>
