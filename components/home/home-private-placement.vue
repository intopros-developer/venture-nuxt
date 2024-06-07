<template>
    <section class="py-10 md:py-16 lg:pt-[168px]">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="text-center">
                <p class="mb-3 text-[22px] font-medium leading-[27px] text-[#202A36] xl:text-[31px] xl:leading-[32px]" v-html="title"></p>
                <p class="mx-auto mb-[26px] w-3/5 text-[15px] font-medium leading-[18px] -tracking-[0.03px] text-[#586376] sm:max-w-none xl:text-[22px] xl:leading-[21px] xl:-tracking-[0.04px]">
                    {{ description }}
                </p>

                <nuxt-link v-if="$helper.isInternalUrl(buttonLink)" :to="buttonLink" class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6">{{ buttonText }}</nuxt-link>

                <a v-else target="_blank" :href="buttonLink" class="b-btn text-xs uppercase lg:max-w-[322px] lg:py-6">{{ buttonText }}</a>

                <h3 class="py-9 text-2xl font-medium text-[#0B3A02] md:text-[31px] lg:pb-[43px] lg:pt-[169px]" v-html="featuredInText"></h3>

                <div class="flex flex-wrap items-center justify-center gap-4 lg:gap-[50px]">
                    <div
                        v-for="(company, i) in featuredCompanies"
                        :key="i"
                        :index="i"
                        class="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white p-5 px-[17px] shadow-[0px_1px_8px_rgba(0,0,0,0.2)] xl:h-[126px] xl:w-[126px]"
                    >
                        <img :src="company.attributes.iconUrl" :alt="'Featured in' + i" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            buttonLink: {
                type: String,
                default: '/book-consult',
            },
            buttonText: {
                type: String,
                default: 'BOOK A CONSULATION',
            },
            title: {
                type: String,
                default: 'Let Venture Plans be your trusted partner',
            },
            description: {
                type: String,
                default: "We've raised more than $650M for our clients",
            },
            featuredInText: {
                type: String,
                default: 'AS FEATURED IN',
            },
            featuredCompanies: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            iconUrl: '/images/placement-logo-3.webp',
                        },
                    },
                ],
            },
        },
    };
</script>
