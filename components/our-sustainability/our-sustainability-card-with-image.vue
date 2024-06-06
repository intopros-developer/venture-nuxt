<template>
    <section class="py-10 md:py-16 lg:pt-[128px]">
        <div class="container max-w-[1236px] px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="grid w-full grid-cols-1 gap-6 bg-white p-5 shadow-[0px_1px_8px_rgba(0,0,0,0.12)] sm:gap-6 md:grid-cols-2 md:px-8 md:py-20 xl:gap-20 xl:pb-[97px] xl:pl-[72px] xl:pr-11 xl:pt-[71px]">
                <div>
                    <h3 class="mt-3 text-center text-[22px] font-bold uppercase leading-[39px] text-black md:text-left lg:mb-[34px] lg:mt-7 xl:text-[28px]">
                        <span v-if="title === 'sustainabilityCard'">
                            ARE YOU READY TO GO
                            <span class="text-primary">
                                <br class="block md:hidden" />
                                FURTHER?</span
                            >
                        </span>
                        <span v-else-if="title === 'sustainableDevelopmentCard'">
                            VENTURE’s suport for the un
                            <span class="text-primary">
                                <br class="block md:hidden" />
                                UN SUSTAINABLE dEVELOPMENT GOALS</span
                            >
                        </span>
                    </h3>
                    <p class="mb-7 text-xs font-normal leading-5 -tracking-[0.03px] text-[#353535] sm:text-sm lg:text-xl lg:leading-[35px]">
                        {{ value.description }}
                    </p>
                    <p class="b-btn hidden py-[30px] text-[14px] font-bold -tracking-[0.03px] md:block">{{ value.buttonTitle }}</p>
                </div>

                <nuxt-img format="webp" :src="imgSrc" alt="card-image" loading="lazy" />
                <p class="b-btn mx-auto md:hidden">{{ value.buttonTitle }}</p>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props: {
            value: {
                type: Object,
                default: () => {
                    return {
                        image: {
                            fields: {
                                file: {
                                    url: '/images/subscribe-img.webp',
                                },
                            },
                        },
                        description: 'We offer a diverse environment for consultants who want to expand their knowledge and experience working with Some of the best talents and innovative ideas in the world.',
                        buttonTitle: 'Apply for an interview',
                    };
                },
            },

            title: {
                type: String,
                default: '',
            },
        },

        computed: {
            imgSrc() {
                return this.value ? `https:${this.value.image.fields.file.url}` : '/images/subscribe-img.webp';
            },
        },
    };
</script>
