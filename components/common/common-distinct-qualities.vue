<template>
    <section class="my-10 md:my-16 xl:my-28 xl:mb-[154px]">
        <div class="container">
            <div class="mb-14 flex items-center justify-center gap-2.5 text-center">
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                <h2 class="inline-block text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl">
                    <!-- {{ $t('distinct') }} <span class="text-primary">{{ $t('qualities') }}</span> -->
                    Why <span class="text-primary">Venture Plans?</span>
                </h2>
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
            </div>
            <div class="mx-auto mb-10 grid max-w-[300px] grid-cols-1 gap-5 space-y-4 md:mb-16 md:max-w-none md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                <div v-for="(value, i) in values" :key="i" class="relative" :class="{ 'md:before:!w-0 ': i === values.length - 1 }">
                    <div class="flex flex-col items-center justify-center gap-4 rounded-t-[10px] bg-primary p-4 text-center md:min-h-[170px]">
                        <span class="h-12 w-12 rounded-full bg-white text-center text-2xl font-bold leading-[48px] text-primary xl:h-[65px] xl:w-[65px] xl:leading-[65px]">{{ value.fields.id }}</span>
                        <h3 class="text-xl font-bold text-white xl:text-[30px]">{{ value.fields.title }}</h3>
                    </div>
                    <div class="bg-white px-5 py-8 shadow-[0_3px_6px_rgba(0,0,0,0.16)] xl:min-h-[220px] xl:px-[30px] xl:py-16">
                        <p class="text-sm xl:text-xl">{{ value.fields.description }}</p>
                    </div>
                    <div class="h-48 w-full md:h-32 lg:h-48">
                        <nuxt-img format="webp" :src="value.fields.image.fields.file.url" :alt="value.fields.title" loading="lazy" class="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            values: {
                type: Array,
                default: () => [
                    {
                        fields: {
                            id: 1,
                            title: 'Rapid Execution',
                            image: {
                                fields: {
                                    file: {
                                        url: '/images/bg-slide-1.webp',
                                    },
                                },
                            },
                            description: 'Choose from 5-day standard and \nexpedited options. Deadlines met. ',
                        },
                    },

                    {
                        fields: {
                            id: 2,
                            title: 'Ivy League Trained',
                            image: {
                                fields: {
                                    file: {
                                        url: '/images/bg-slide-2.webp',
                                    },
                                },
                            },
                            description: 'Put the best & brightest to work on Your businesses future.',
                        },
                    },

                    {
                        fields: {
                            id: 3,
                            title: 'Custom Narrative & Forecasts ',
                            image: {
                                fields: {
                                    file: {
                                        url: '/images/grant-que-2.webp',
                                    },
                                },
                            },
                            description: 'Put the best & brightest to work on \nYour businesses future.',
                        },
                    },
                ],
            },
        },
    };
</script>
