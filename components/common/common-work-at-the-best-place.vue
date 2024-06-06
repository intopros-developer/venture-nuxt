<template>
    <section class="py-10 md:py-16 lg:pt-[128px]">
        <div id="employmentAtVenturePlan" class="container max-w-[990px] px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="grid w-full grid-cols-1 gap-6 bg-white p-5 shadow-[0px_1px_8px_rgba(0,0,0,0.12)] sm:gap-6 md:grid-cols-2 md:px-8 md:py-20 xl:gap-20 xl:pb-[97px] xl:pl-[72px] xl:pr-11 xl:pt-[71px]">
                <div>
                    <h3 class="mb-2.5 text-center text-[22px] font-bold uppercase leading-[30px] text-black md:text-left md:leading-[39px] xl:text-[28px] [&>span]:text-primary [&>span>br]:block [&>span>br]:md:hidden" v-html="title"></h3>
                    <p class="mb-7 text-xs font-normal leading-5 -tracking-[0.03px] text-[#353535] md:mb-11 lg:max-w-sm lg:text-sm xl:text-base xl:leading-[24px]">
                        {{ description }}
                    </p>

                    <nuxt-link v-if="$helper.isInternalUrl(buttonUrl)" :to="buttonUrl" class="b-btn hidden text-xs md:block lg:max-w-[322px] lg:py-6">{{ buttonTitle }}</nuxt-link>

                    <a v-else :href="buttonUrl" class="b-btn hidden text-xs md:block lg:max-w-[322px] lg:py-6" target="_blank">{{ buttonTitle }}</a>
                </div>

                <nuxt-img :src="imgUrl" class="clip-none" loading="lazy" alt="Worl at the best place" format="webp" />

                <a :href="buttonUrl" class="b-btn mx-auto text-xs md:hidden lg:max-w-[322px] lg:py-6">{{ buttonTitle }}</a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'WORK AT THE <span class="text-primary">BEST PLACE</span>',
            },
            description: {
                type: String,
                default: 'We offer a diverse environment for consultants who want to expand their knowledge and experience working with Some of the best talents and innovative ideas in the world.',
            },
            imgUrl: {
                type: String,
                default: '/images/que-8.webp',
            },
            buttonTitle: {
                type: String,
                default: 'Apply for Interview',
            },
            buttonUrl: {
                type: String,
                default: '/careers',
            },
        },
    };
</script>
<style scoped>
    .clip-none {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 14% 100%);
    }

    @media (max-width: 768px) {
        .clip-none {
            clip-path: none !important;
        }
    }
</style>
