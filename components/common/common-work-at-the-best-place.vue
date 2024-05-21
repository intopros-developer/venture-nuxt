<template>
    <section class="lg:pt-[128px] py-10 md:py-16">
        <div id="employmentAtVenturePlan" class="max-w-[990px] lg:px-[97px] container px-10 md:px-4 xl:px-4">
            <div class="shadow-[0px_1px_8px_rgba(0,0,0,0.12)] xl:pt-[71px] xl:pb-[97px] xl:pl-[72px] grid w-full grid-cols-1 gap-6 bg-white p-5 sm:gap-6 md:grid-cols-2 md:px-8 md:py-20 xl:gap-20 xl:pr-11">
                <div>
                    <h3 class="text-[22px] leading-[30px] md:leading-[39px] xl:text-[28px] mb-2.5 text-center font-bold uppercase text-black md:text-left [&>span>br]:block [&>span>br]:md:hidden [&>span]:text-primary" v-html="title"></h3>
                    <p class="text-[#353535] xl:leading-[24px] mb-7 text-xs font-normal leading-5 -tracking-[0.03px] md:mb-11 lg:max-w-sm lg:text-sm xl:text-base">
                        {{ description }}
                    </p>

                    <nuxt-link :to="buttonUrl" v-if="$helper.isInternalUrl(buttonUrl)" class="b-btn lg:max-w-[322px] hidden text-xs md:block lg:py-6">{{ buttonTitle }}</nuxt-link>

                    <a :href="buttonUrl" v-else class="b-btn lg:max-w-[322px] hidden text-xs md:block lg:py-6" target="_blank">{{ buttonTitle }}</a>
                </div>

                <nuxt-img :src="imgUrl" class="clip-none" loading="lazy" alt="Worl at the best place" format="webp" />

                <a :href="buttonUrl" class="b-btn lg:max-w-[322px] mx-auto text-xs md:hidden lg:py-6">{{ buttonTitle }}</a>
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
                default: 'https://images.ctfassets.net/koyrlvjc3wvc/4tyXkBS5yBBWxIucd0xDLs/c95a6fb1c7db45141872da1dc2dcd8ce/iStock-1191132586.jpg',
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
