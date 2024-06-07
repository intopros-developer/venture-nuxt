<template>
    <section class="my-10 md:my-16 xl:my-28 xl:mb-[154px]">
        <div class="container">
            <div class="mb-[71px] flex items-center justify-center gap-2.5 text-center">
                <div class="block h-px w-full bg-[#d5d5d5]"></div>
                <h2 class="inline-block shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl" v-html="title"></h2>
                <div class="block h-px w-full bg-[#d5d5d5]"></div>
            </div>
            <div class="mx-auto mb-10 grid max-w-[300px] grid-cols-1 gap-5 space-y-4 md:mb-16 md:max-w-none md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                <div v-for="(value, i) in data" :key="i" class="relative" :class="{ 'md:before:!w-0 ': i === data.length - 1 }">
                    <div class="flex flex-col items-center gap-4 rounded-t-[10px] bg-primary p-4 text-center md:min-h-[152px]">
                        <span class="h-12 w-12 rounded-full bg-white text-center text-lg font-bold leading-[48px] text-primary">{{ i + 1 }}</span>
                        <h3 class="text-xl font-bold text-white xl:text-[26px]">{{ value.attributes.title }}</h3>
                    </div>
                    <div class="bg-white px-5 py-6 shadow-[0_3px_6px_rgba(0,0,0,0.16)] md:min-h-[120px] lg:min-h-[192px] lg:px-[30px] xl:min-h-[144px]">
                        <p class="text-[15px] leading-6 -tracking-[0.03]">{{ value.attributes.description }}</p>
                    </div>
                    <div class="h-48 w-full md:h-32 lg:h-48">
                        <img :src="value.attributes.imgUrl" :alt="value.attributes.title" loading="lazy" class="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            data: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            sectionName: '1',
                            title: 'Rapid Execution',
                            description: 'Choose from 5-day standard and expedited options. Deadlines met.',
                            imgUrl: '/images/rapid-execution.webp',
                        },
                    },
                ],
            },
            title: String,
        },
    };
</script>
