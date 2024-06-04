<template>
    <section class="brand-logo bg-white py-10 lg:py-[44px]">
        <div class="lg:px-[97px] xl:px-4">
            <div v-swiper:brandLogo="slider_options" class="swiper relative bg-transparent" :cleanup-styles-on-destroy="false">
                <div class="swiper-wrapper items-center">
                    <div v-for="(logo, i) in logos" :key="i" class="swiper-slide flex justify-center">
                        <nuxt-img format="webp" :src="logo.logoUrl" :alt="'LOGO-' + i" loading="lazy" class="object-contain" />
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
                    logoUrl: 'https://22527844.fs1.hubspotusercontent-na1.net/hubfs/22527844/images/logos/STANBUSINESS.png',
                },
                {
                    logoUrl: 'https://22527844.fs1.hubspotusercontent-na1.net/hubfs/22527844/images/logos/FINRA.png',
                },
                {
                    logoUrl: 'https://22527844.fs1.hubspotusercontent-na1.net/hubfs/22527844/images/logos/HBS.png',
                },
                {
                    logoUrl: 'https://venturefund.vercel.app/assets/img/logos/yale.png',
                },
                {
                    logoUrl: 'https://22527844.fs1.hubspotusercontent-na1.net/hubfs/22527844/images/logos/cbv.png',
                },
                {
                    logoUrl: 'https://venturefund.vercel.app/assets/img/logos/cfi.png',
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
        background-image: url('static/assets/img/prev-arrow.png') !important;
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
        background-image: url('static/assets/img/next-arrow.png') !important;
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
        /* width: 100%;
        object-fit: cover; */
    }

    @media (max-width: 1025px) {
        .brand-logo .swiper-slide > img {
            height: 120px !important;
        }
    }
</style>
