<template>
    <div class="group relative mt-4 flex-1 md:mt-0 md:w-96">
        <div v-swiper:previewCategoryData="slider_options">
            <div class="swiper-wrapper">
                <div v-for="(item, i) in activeCategorySampleData" :key="i" class="swiper-slide" @click="previewLatestWork(item.attributes)">
                    <div class="flex cursor-pointer flex-col justify-between rounded-2xl border border-[#dfdfdf] px-10 pt-[18px] pb-[9px] text-center duration-200 hover:shadow-[0px_1px_8px_rgba(0,0,0,0.12)]">
                        <nuxt-img format="webp" :src="item.attributes.thumbnailImgUrl || '/assets/img/indus_market_report_02.png'" alt="Preview" class="min-h-40 mx-auto h-40 max-h-40 object-contain" loading="lazy" />

                        <div class="pt-[5px]">
                            <button type="button" class="text-[15px] font-semibold leading-[22px] text-primary">
                                Preview
                                <icons-arrow-right-thin class="relative -mt-[3px] inline-block" />
                            </button>
                        </div>
                    </div>
                    <!--

<img loading="lazy" :src="item.attributes.thumbnailImgUrl || '/assets/img/indus_market_report_02.png'" class="mx-auto" alt="" />
                    <div class="pt-[5px]">
                        <button type="button" class="text-[15px] font-semibold leading-[22px] text-primary">
                            Preview
                            <icons-arrow-right-thin class="relative -mt-[3px] inline-block" />
                        </button>
                    </div>
                    -->
                </div>
            </div>
        </div>
        <div class="aboslute bottom-0 flex w-full justify-center">
            <div class="business-pagination swiper-pagination swiper-pagination-bullets"></div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'CATEGORIES',
            },
            activeCategorySampleData: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            thumbnailImgUrl: 'https://presentations-slides-prod.s3.amazonaws.com/22527844/46499273/2022/11/09/f29da73ff4ac251b2b1560bd264f63f3.thumb.jpg',
                            description: 'Real state',
                            client: '',
                            industry: '',
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
                    loop: false,
                    autoHeight: true,
                    breakpoints: {
                        620: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                    },
                    spaceBetween: 10,
                    touchRatio: 1,
                    init: false,
                    pagination: {
                        el: '.business-pagination',
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
        mounted() {
            this.previewCategoryData.init();
        },

        created() {},
        methods: {
            previewLatestWork(data) {
                this.$emit('preview', data);
            },
        },
    };
</script>

<style scoped>
    .swiper-container.swiper-container-initialized.swiper-container-horizontal.swiper-container-autoheight {
        padding-bottom: 25px !important;
    }
    .swiper-button-prev.swiper-button-prev1 {
        background-image: url('static/assets/img/prev-arrow.png') !important;
        background: no-repeat;
        background-position: center;
        background-color: #00adff;
        height: 42px;
        width: 42px;
        border-radius: 50%;
        left: -1%;
    }

    .swiper-button-prev1::after {
        content: '';
    }

    .swiper-button-next.swiper-button-next1 {
        background-image: url('static/assets/img/next-arrow.png') !important;
        background: no-repeat;
        background-position: center;
        background-color: #00adff;
        height: 42px;
        width: 42px;
        border-radius: 50%;
        right: -1%;
    }

    .swiper-button-next1::after {
        content: '';
    }
    .swiper-container {
        margin: 0 30px 0 30px;
        padding: 16px;
        padding-top: 0;
        margin-top: 0;
    }
    @media (max-width: 620px) {
        .swiper-container {
            margin: 0;
            padding: 0;
        }
    }
</style>
