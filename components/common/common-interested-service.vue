<template>
    <section class="relative bg-cover bg-no-repeat" style="background-position: 90% 0" :style="{ backgroundImage: `url(${backgroundImage ? backgroundImage : '/assets/img/buy-xl.webp'})` }">
        <div class="z-1 absolute top-0 h-full w-full bg-black opacity-30"></div>
        <div class="container relative z-10 px-10 py-[80px] md:px-4 lg:px-[97px] xl:px-4">
            <div class="flex flex-col items-center justify-between gap-5 md:flex-row">
                <div class="text-white">
                    <p class="mb-4 text-[14px] font-bold uppercase leading-[9px] tracking-normal xl:text-[11px] xl:leading-3">
                        {{ subtitle }}
                    </p>
                    <p class="mb-3 text-[19px] font-bold leading-[23px] xl:mb-[19px] xl:text-[26px] xl:leading-[30px]">{{ title }}</p>
                    <p class="max-w-[486px] text-base font-medium -tracking-[0.03px] md:leading-4">
                        {{ description }}
                    </p>
                </div>
                <div class="lg:w-1/3">
                    <div class="text-center lg:mt-3">
                        <nuxt-link
                            v-if="$helper.isInternalUrl(buttonLink)"
                            :to="buttonLink"
                            class="b-btn border-white bg-white px-14 py-[19px] text-xs uppercase text-[#14c8f6] hover:border-primary hover:bg-primary hover:text-white lg:max-w-[322px] lg:py-6 xl:px-[67px]"
                            >{{ buttonTitle }}</nuxt-link
                        >
                        <a
                            target="_blank"
                            :href="buttonLink"
                            v-else
                            class="b-btn border-white bg-white px-14 py-[19px] text-xs uppercase text-[#14c8f6] hover:border-primary hover:bg-primary hover:text-white lg:max-w-[322px] lg:py-6 xl:px-[67px]"
                            >{{ buttonTitle }}</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'Are you interested in this service?',
            },
            subtitle: {
                type: String,
                default: 'LIKE WHAT YOU SEE?',
            },
            backgroundImage: {
                type: String,
                default: '/assets/img/buy-xl.webp',
            },
            description: {
                type: String,
                default: 'Click the buy a service button to proceed to check out and select the service you would like to purchase',
            },
            buttonTitle: {
                type: String,
                default: 'Buy Service',
            },
            buttonLink: {
                type: String,
                default: '/book-consult',
            },
        },
    };
</script>

<style scoped>
    @media only screen and (min-width: 1230px) and (max-width: 1440px) {
        .buy-service-btn {
            margin-right: 99px;
        }
    }
</style>
