<template>
    <div>
        <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            <li v-for="(feature, i) in ventureFeatures" :key="i" class="group [perspective:1000px]">
                <div class="relative h-full w-full bg-primary px-7 pt-[42px] pb-[63px] text-xl font-semibold text-white transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div class="inset-0 flex flex-col items-center justify-center gap-4">
                        <div v-html="feature.img" class="h-20" />
                        {{ feature.title }}
                    </div>
                    <div class="absolute inset-0 h-full w-full bg-primary px-2 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <div class="flex min-h-full flex-col items-center justify-center">
                            <p class="mb-4 text-base text-white">
                                {{ feature.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </li>

            <!--            <li class="flex flex-col items-center justify-center gap-4 bg-primary p-7 pt-[42px] pb-[63px] text-xl font-semibold text-white">-->
            <!--                <icons-aproach class="h-20" />-->
            <!--                360 Approach4-->
            <!--            </li>-->
            <!--            <li class="flex flex-col items-center justify-center gap-4 bg-primary p-7 pt-[42px] pb-[63px] text-xl font-semibold text-white"><icons-centricity class="h-20" />Client - Centricity</li>-->
            <!--            <li class="flex flex-col items-center justify-center gap-4 bg-primary p-7 pt-[42px] pb-[63px] text-xl font-semibold text-white"><icons-domain class="h-20" />Domain Expertise</li>-->
            <!--            <li class="flex flex-col items-center justify-center gap-4 bg-primary p-7 pt-[42px] pb-[63px] text-xl font-semibold text-white"><icons-market class="h-20" />Time-To-Market</li>-->
            <!--            <li class="flex flex-col items-center justify-center gap-4 bg-primary p-7 pt-[42px] pb-[63px] text-xl font-semibold text-white"><icons-team class="h-20" />A-Class Team</li>-->
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            ventureFeatures: {
                type: Array,
            },
        },
        data() {
            return {};
        },
    };
</script>
