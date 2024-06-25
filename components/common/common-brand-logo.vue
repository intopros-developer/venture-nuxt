<template>
    <section class="brand-logo bg-white py-10 lg:py-[44px]">
        <div class="lg:px-[97px] xl:px-4">
            <div v-swiper:brandLogo="slider_options" class="swiper relative bg-transparent" :cleanup-styles-on-destroy="false">
                <div class="swiper-wrapper items-center">
                    <div v-for="(logo, i) in logos" :key="i" class="swiper-slide flex justify-center">
                        <img :src="logo.logoUrl" :alt="'LOGO-' + i" loading="lazy" class="mx-auto object-contain" width="197" height="150" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            logos: Array,
            default: () => [
                {
                    logoUrl: '/images/logos/stanford.webp',
                },
                {
                    logoUrl: '/images/logos/finra.webp',
                },
                {
                    logoUrl: '/images/logos/hbs.webp',
                },
                {
                    logoUrl: '/images/logos/cbv.webp',
                },
                {
                    logoUrl: '/images/logos/harvard.webp',
                },
                {
                    logoUrl: '/images/logos/nacva.webp',
                },
                {
                    logoUrl: '/images/logos/peking.webp',
                },
            ],
        },
        data() {
            return {
                slider_options: {
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    loop: true,
                    slidesPerView: 2,
                    infinite: false,
                    spaceBetween: 0,
                    touchRatio: 1,
                    centeredSlides: true,
                    init: false,
                    lazy: true,
                    preloadImages: false,
                    breakpoints: {
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 60,
                        },
                    },
                },
            };
        },

        mounted() {
            this.brandLogo.init();
        },
    };
</script>

<style scoped>
    .brand-logo .swiper-button-prev.swiper-button-prev1 {
        background-image: url('/images/icons/prev-arrow.png') !important;
        background: no-repeat;
        background-position: center;
        background-color: #fbfbfd;
        height: 80px;
        margin-top: -44px;
    }
    .swiper-button-prev1::after {
        content: '';
    }
    .brand-logo .swiper-button-next.swiper-button-next1 {
        background-image: url('/images/icons/next-arrow.png') !important;
        background: no-repeat;
        background-position: center;
        background-color: #fbfbfd;
        height: 80px;
        margin-top: -44px;
    }
    .swiper-button-next1::after {
        content: '';
    }

    .brand-logo .swiper-slide > img {
        height: 150px !important;
    }

    @media (max-width: 1025px) {
        .brand-logo .swiper-slide > img {
            height: 120px !important;
        }
    }
</style>
