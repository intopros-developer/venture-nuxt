<template>
    <section class="bg-[#f4f4f8] py-10 md:py-16 lg:py-20">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="text-center">
                <h3 class="pb-9 text-xl font-medium uppercase lg:pb-[43px]" v-html="title"></h3>
                <div class="flex flex-wrap items-center justify-center gap-4 lg:gap-[50px]">
                    <div :key="logo.attributes.iconUrl" v-for="logo in logos" class="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white p-5 px-[17px] shadow-[0px_1px_8px_rgba(0,0,0,0.2)] xl:h-[126px] xl:w-[126px]">
                        <img loading="lazy" :src="logo.attributes.iconUrl" />
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
                default: 'AS SEEN ON',
            },
            logos: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            title: null,
                            description: null,
                            iconUrl: 'https://venturefund.vercel.app/assets/img/logo-9.png',
                        },
                    },
                    {
                        id: 1,
                        attributes: {
                            title: null,
                            description: null,
                            iconUrl: '/assets/img/placement-logo-5.png',
                        },
                    },
                    {
                        id: 1,
                        attributes: {
                            title: null,
                            description: null,
                            iconUrl: '/assets/img/placement-logo-3.png',
                        },
                    },
                ],
            },
        },
    };
</script>
