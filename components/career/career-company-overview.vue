<template>
    <section class="py-10 md:pb-20 md:pt-36 xl:pb-[85px] xl:pt-12">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="mb-8 flex items-center justify-center gap-[33px] text-center">
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                <h2 class="text-2xl font-bold text-black sm:shrink-0 xl:text-3xl">Careers with Venture Plans</h2>
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
            </div>
            <div class="space-y-9 text-sm font-medium leading-6 text-black-700 xl:text-xl xl:leading-9">
                <div class="relative h-20 overflow-hidden" :class="{ '!h-full': isShowReadMore }">
                    <p class="whitespace-pre-line">
                        An applicant's average writing time to a comprehensive business plan is 70-100 hours, including an attorney's time to review. We cut that time to 3 Days by sharing our systems and strategies to writing an immigration
                        compliant business plan with you. It's important to note that on average USCIS looks for business plans that are 25-35 pages. Here we focus on your investment, the source of capital and your personal capacity to grow
                        and direct the company efficiently. It is recommended that a detailed business plan with financial forecasts for a five-year period be obtained when the decision on the form of business to buy or develop has been
                        created. The Business Plan is an important document as it is your chance to justify and clarify your business enterprise and qualify for your investment. The intended growth and economic effect that your business
                        would have in the United States should be discussed.
                    </p>
                    <div class="absolute inset-x-0 bottom-0 h-9 bg-[#FBFBFD]/50 backdrop-blur-sm" :class="{ hidden: isShowReadMore }"></div>
                </div>
                <div class="text-center">
                    <button v-if="!isShowReadMore" :aria-label="$t('read_more')" class="flex items-center justify-center gap-4 text-sm font-semibold text-primary xl:text-xl" @click="isShowReadMore = true">
                        <p class="text-base">{{ $t('read_more') }}</p>
                        <icons-downarrow class="w-2 xl:w-[11px]" />
                    </button>
                    <button v-else :aria-label="$t('read_less')" class="flex items-center justify-center gap-4 text-sm font-semibold text-primary xl:text-xl" @click="isShowReadMore = false">
                        <p class="text-base">{{ $t('read_less') }}</p>
                        <icons-downarrow class="w-2 rotate-180 xl:w-[11px]" />
                    </button>
                </div>
            </div>
            <div class="mb-7 flex items-center justify-center gap-[33px] pt-10 text-center lg:mb-[67px] xl:pt-[117px]">
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
                <h2 class="text-2xl font-bold text-black sm:shrink-0 xl:text-3xl">Overview</h2>
                <div class="hidden h-px w-full bg-[#d5d5d5] sm:block"></div>
            </div>
            <div class="flex flex-col lg:flex-row">
                <div class="mx-auto w-full flex-none lg:max-w-[332px] xl:max-w-[425px]">
                    <div>
                        <ul class="md:space-y-3">
                            <li
                                v-for="(service, index) in serviceOptions"
                                :key="index"
                                class="cursor-pointer py-4 leading-[45px] -tracking-[0.04px] md:py-2.5 lg:text-[21px]"
                                :class="[params.service === service ? 'border-b border-[#1a9cea] font-bold text-[#1a9cea]' : 'border-b border-[#bfbfbf]']"
                                @click="params.service = service"
                            >
                                {{ service }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div v-if="params.service === 'Harvard Graduate Applications' || params.service === 'Qualifications'" class="bg-white p-5 shadow-[0_3px_6px_rgba(0,0,0,0.16)] md:px-8 md:pb-16 md:pt-8">
                        <nuxt-img format="webp" src="/images/video-thumbnail.webp" class="h-full w-full object-cover" alt="Take your business to the next level" loading="lazy" />

                        <div class="pt-5 md:pt-8">
                            <h4 class="text-xl -tracking-[-0.06px] text-[#2F2F2F] md:text-2xl lg:text-[32px]">Take your business to the next level</h4>
                            <p class="pt-[21px] text-sm -tracking-[0.04px] text-[#4d4d4d]">
                                See where you're strong, where you lag, and what the savings potential can be when you improve specific elements of your performance and capability. Our benchmarking database of 250+ plants across a wide
                                variety of industries captures today's most relevant KPIs, allowing you to visualize your current state, spot areas of opportunity and prioritize the actions that will vault you ahead of your competitors.
                            </p>
                            <button aria-label="Explore Further" class="inline-block pt-6 font-semibold leading-[23px] text-[#0da1f1]">Explore Further</button>
                        </div>
                    </div>

                    <div v-else-if="params.service === 'Available Intern Positions' || params.service === 'About The Workplace'" class="bg-white p-5 shadow-[0_3px_6px_rgba(0,0,0,0.16)] md:px-8 md:pb-16 md:pt-8">
                        <nuxt-img format="webp" src="/images/video-thumbnail.webp" class="h-full w-full object-cover" alt="Take your business to the next level" loading="lazy" />

                        <div class="pt-5 md:pt-8">
                            <h4 class="text-xl -tracking-[-0.06px] text-[#2F2F2F] md:text-2xl lg:text-[32px]">Take your business to the next level</h4>
                            <p class="pt-[21px] text-sm -tracking-[0.04px] text-[#4d4d4d]">
                                See where you're strong, where you lag, and what the savings potential can be when you improve specific elements of your performance and capability. Our benchmarking database of 250+ plants across a wide
                                variety of industries captures today's most relevant KPIs, allowing you to visualize your current state, spot areas of opportunity and prioritize the actions that will vault you ahead of your competitors.
                            </p>
                            <button aria-label="Explore Further" class="inline-block pt-6 font-semibold leading-[23px] text-[#0da1f1]">Explore Further</button>
                        </div>
                    </div>

                    <div
                        v-else-if="params.service === 'Elite Level Environment Overview' || params.service === 'Establish A New Franchising Company' || params.service === 'Investor Relations Software (Ai)'"
                        class="bg-white p-5 shadow-[0_3px_6px_rgba(0,0,0,0.16)] md:px-8 md:pb-16 md:pt-8"
                    >
                        <nuxt-img format="webp" src="/images/que-1.webp" class="h-full w-full object-cover" alt="Take your business to the next level" loading="lazy" />

                        <div class="pt-5 md:pt-8">
                            <h4 class="text-xl -tracking-[-0.06px] text-[#2F2F2F] md:text-2xl lg:text-[32px]">Take your business to the next level</h4>
                            <p class="pt-[21px] text-sm -tracking-[0.04px] text-[#4d4d4d]">
                                See where you're strong, where you lag, and what the savings potential can be when you improve specific elements of your performance and capability. Our benchmarking database of 250+ plants across a wide
                                variety of industries captures today's most relevant KPIs, allowing you to visualize your current state, spot areas of opportunity and prioritize the actions that will vault you ahead of your competitors.
                            </p>
                            <button aria-label="Explore Further" class="inline-block pt-6 font-semibold leading-[23px] text-[#0da1f1]">Explore Further</button>
                        </div>
                    </div>

                    <div v-else class="bg-white p-5 shadow-[0_3px_6px_rgba(0,0,0,0.16)] md:px-8 md:pb-16 md:pt-8">
                        <nuxt-img format="webp" src="/images/que-2.webp" class="h-full w-full object-cover" alt="Take your business to the next level" loading="lazy" />

                        <div class="pt-5 md:pt-8">
                            <h4 class="text-xl -tracking-[-0.06px] text-[#2F2F2F] md:text-2xl lg:text-[32px]">Take your business to the next level</h4>
                            <p class="pt-[21px] text-sm -tracking-[0.04px] text-[#4d4d4d]">
                                See where you're strong, where you lag, and what the savings potential can be when you improve specific elements of your performance and capability. Our benchmarking database of 250+ plants across a wide
                                variety of industries captures today's most relevant KPIs, allowing you to visualize your current state, spot areas of opportunity and prioritize the actions that will vault you ahead of your competitors.
                            </p>
                            <button aria-label="Explore Further" class="inline-block pt-6 font-semibold leading-[23px] text-[#0da1f1]">Explore Further</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-10 text-center md:mt-16 xl:mt-[110px]">
                <nuxt-link to="book-consult" class="b-btn px-4 py-[31px] text-sm uppercase -tracking-[0.03px]">BOOK YOUR INTERVIEW</nuxt-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: '',
            },
        },

        data() {
            return {
                isShowReadMore: false,
                isShowOptions: false,
                serviceOptions: [
                    "What we're looking for at Venture Plans",
                    'Available Intern Positions',
                    'Harvard Graduate Applications',
                    'Elite Level Environment Overview',
                    'Establish A New Franchising Company',
                    'About The Workplace',
                    'Qualifications',
                ],
                params: {
                    service: "What we're looking for at Venture Plans",
                },
            };
        },
    };
</script>

<style></style>
