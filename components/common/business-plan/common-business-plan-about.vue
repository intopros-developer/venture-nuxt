<template>
    <section class="py-10 md:py-20">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="mb-8 flex items-center justify-center gap-2.5 text-center">
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                <h2 id="aboutUs" class="text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl">
                    {{ $t('about') }} <span class="text-primary">{{ $t('us') }}</span>
                </h2>
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
            </div>
            <div class="space-y-5 font-medium leading-6 text-black-700 md:-tracking-[0.04px]">
                <div class="relative max-h-[72px] overflow-hidden whitespace-pre-line" :class="{ '!h-full !max-h-full': isShowReadMore }">
                    <p v-html="value"></p>
                    <div class="absolute inset-x-0 bottom-0 h-[24px] bg-[#FBFBFD]/80 backdrop-blur-sm" :class="{ hidden: isShowReadMore }"></div>
                </div>
                <div class="text-center">
                    <button :aria-label="$t('read_more')" class="flex items-center justify-center gap-4 text-sm font-semibold text-primary xl:text-xl" @click="isShowReadMore = !isShowReadMore">
                        <p class="text-base">{{ isShowReadMore ? $t('read_less') : $t('read_more') }}</p>
                        <icons-downarrow class="w-2 xl:w-[11px]" :class="{ 'rotate-180': isShowReadMore }" />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: `Venture Plans is a  sophisticated team of diverse industry-specific consultants with a deep focus in finance, legal advisory and digital innovation. Our executive-level consultants are ivy league trained with institutional-caliber capabilities. We enable the best possible outcomes through value-based methodologies that succinctly capture the maximum value of your principals, intellectual property, business performance, markets, and outlook.

Venture Plans Supports high-tech firms with an emphasis on growth, marketing, and go-to-market strategy focused through financial institutions and private equity. Through deep customer analysis and marketing best practices, we shape companies’ business strategies and digitally transform operation models to accelerate top-line growth. We provide data-backed insights to help companies win in the long term and recommend sustainable outcomes.

At venture Plans, we tailor your strategy with precision to meet your individual needs. We accelerate growth by encouraging our clients to avoid Cookie-cutter strategic planning as it delivers inferior results. With wider industry experience, Venture Plans has helped a wide array of clients thrive in hospitality, real estate, SaaS & technology, professional services, health care, cannabis, and many more. Our firm has access to industry-leading tools, databases, and analysis software that can provide market research data that is accurate and up-to-date. Our mission is to help companies build capabilities that will compete to win in the long term. Our mission is to help companies across all sectors transform and grow by developing new markets, optimizing sales, operations, technology, and financing.
`,
            },
        },

        data() {
            return {
                isShowReadMore: false,
            };
        },
    };
</script>

<style></style>
