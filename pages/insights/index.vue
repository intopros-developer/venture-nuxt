<template>
    <div>
        <section class="relative bg-gray-700 bg-cover bg-[right_32%_top] bg-no-repeat pb-9 pt-[287px] md:bg-left md:pt-[202px] xl:pb-20" v-lazyload-bg="content.bannerImgUrl">
            <div class="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]"></div>
            <div class="container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div>
                    <h1 class="mb-4 text-[28px] font-bold leading-8 text-white md:text-[40px] md:leading-[53px]">{{ content.bannerTitle }}</h1>
                    <p class="mb-5 border-l-[3px] border-primary pl-2.5 text-sm text-[#FBFBFD] md:text-base" v-html="content.bannerDescription"></p>
                </div>
            </div>
        </section>

        <common-banner-tab :tabs="tabs" :is-show-save-btn="true" />
        <div>
            <section class="pb-[42px] pt-24">
                <div id="OurLatestInsights" class="container">
                    <div class="justify-between gap-5 space-y-4 md:flex md:space-y-0">
                        <div>
                            <h2 class="inline-block text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl" v-html="content.section1Title"></h2>
                        </div>
                        <div class="max-w-[780px]">
                            <p class="text-[#353535] md:text-xl md:leading-9">
                                {{ content.section1Paragraph }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="mb-10 h-px w-full bg-[#707070]/50"></div>
            <client-only>
                <section class="relative">
                    <div class="container lg:px-[97px] xl:px-4">
                        <div class="flex flex-col items-center gap-4 xl:flex-row xl:flex-nowrap xl:gap-4">
                            <p class="mr-5 hidden flex-initial whitespace-nowrap text-base font-medium text-[#5f5f5f] xl:block">Filter by:</p>
                            <p class="flex w-full flex-1 items-center justify-between border border-[#d5d5d5] px-6 py-3.5 text-base font-medium text-[#00ADFF] xl:hidden">
                                Filter Insights
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" @click="showMobileFilter = !showMobileFilter">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                    />
                                </svg>
                            </p>
                            <ul class="mb-6 hidden w-full flex-col justify-center gap-4 xl:mb-0 xl:flex xl:w-auto xl:flex-row xl:items-center xl:gap-[15px] xl:pl-0" :class="{ '!flex': showMobileFilter }">
                                <li>
                                    <popper
                                        ref="industryPopper"
                                        trigger="clickToToggle"
                                        :options="{
                                            placement: 'bottom',
                                            modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                            preventOverflow: {
                                                padding: 0,
                                            },
                                        }"
                                        @show="openPopper('industry')"
                                        @hide="closePopper()"
                                    >
                                        <div class="popper !fixed right-0 z-[60] !my-0 h-full !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto">
                                            <div class="relative block p-3 text-center xl:hidden">
                                                Industry
                                                <button class="absolute right-2.5 top-4 h-5 w-5 cursor-pointer" @click="$refs.industryPopper.doClose()">
                                                    <icons-close />
                                                </button>
                                            </div>
                                            <div class="container pb-4">
                                                <ul class="block max-h-[calc(100vh-120px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6">
                                                    <li v-for="filter in filter1Data" :key="filter.id" class="mb-2 break-inside-avoid pr-2">
                                                        <input-filter-checkbox :id="filter.filterCateogries" v-model="industryFilterOption[filter.filterCateogries]" :label="filter.filterCateogries" />
                                                        <ul v-if="filter.subCategories.length" class="mt-2 pr-2">
                                                            <li v-for="subFilter in filter.subCategories" :key="subFilter.id" class="mb-2 break-inside-avoid pr-2">
                                                                <input-filter-checkbox :id="subFilter.subCategories" v-model="industryFilterOption[subFilter.subCategories]" :label="subFilter.subCategories" :is-child="true" />
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <button class="filter-btn" @click="applyFilters(), $refs.industryPopper.doClose()">Apply</button>
                                        </div>

                                        <p
                                            slot="reference"
                                            class="flex cursor-pointer select-none items-center justify-between gap-4 border border-transparent bg-white/90 px-5 py-3 text-base font-semibold leading-5 text-black shadow-[0_3px_6px_rgba(239,239,239)] duration-150 hover:border-[#1eb1fc] hover:!text-primary xl:justify-start"
                                            :class="{ 'border-[#1eb1fc] !text-primary': activePopper === 'industry' }"
                                        >
                                            Industry
                                            <icons-downarrow class="text-primary xl:rotate-0" :class="{ 'xl:!rotate-180': activePopper === 'industry' }" />
                                        </p>
                                    </popper>
                                </li>
                                <li>
                                    <popper
                                        ref="servicesPopper"
                                        trigger="clickToToggle"
                                        :options="{
                                            placement: 'bottom',
                                            modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                            preventOverflow: {
                                                padding: 0,
                                            },
                                        }"
                                        @show="openPopper('services')"
                                        @hide="closePopper()"
                                    >
                                        <div class="popper !fixed right-0 z-[60] !my-0 h-full !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto">
                                            <div class="relative block p-3 text-center xl:hidden">
                                                services
                                                <button class="absolute right-2.5 top-4 h-5 w-5 cursor-pointer" @click="$refs.servicesPopper.doClose()">
                                                    <icons-close />
                                                </button>
                                            </div>
                                            <div class="container pb-4">
                                                <ul class="block max-h-[calc(100vh-120px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6">
                                                    <li v-for="filter in filter2Data" :key="filter.id" class="mb-2 break-inside-avoid pr-2">
                                                        <input-filter-checkbox :id="filter.filterCateogries" v-model="servicesFilterOption[filter.filterCateogries]" :label="filter.filterCateogries" />
                                                        <ul v-if="filter.subCategories.length" class="mt-2 pr-2">
                                                            <li v-for="subFilter in filter.subCategories" :key="subFilter.id" class="mb-2 break-inside-avoid pr-2">
                                                                <input-filter-checkbox :id="subFilter.subCategories" v-model="servicesFilterOption[subFilter.subCategories]" :label="subFilter.subCategories" :is-child="true" />
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <button class="filter-btn" @click="applyFilters(), $refs.servicesPopper.doClose()">Apply</button>
                                        </div>

                                        <p
                                            slot="reference"
                                            class="reference flex cursor-pointer select-none items-center justify-between gap-4 border border-transparent bg-white/90 px-5 py-3 text-base font-semibold leading-5 text-black shadow-[0_3px_6px_rgba(239,239,239)] duration-150 hover:border-[#1eb1fc] hover:!text-primary xl:justify-start"
                                            :class="{ 'border-[#1eb1fc] !text-primary': activePopper === 'services' }"
                                        >
                                            Services
                                            <icons-downarrow class="text-primary xl:rotate-0" :class="{ 'xl:!rotate-180': activePopper === 'services' }" />
                                        </p>
                                    </popper>
                                </li>
                                <li>
                                    <popper
                                        ref="typePopper"
                                        trigger="clickToToggle"
                                        :options="{
                                            placement: 'bottom',
                                            modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                            preventOverflow: {
                                                padding: 0,
                                            },
                                        }"
                                        @show="openPopper('type')"
                                        @hide="closePopper()"
                                    >
                                        <div class="popper !fixed right-0 z-[60] !my-0 h-full !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto">
                                            <div class="relative block p-3 text-center xl:hidden">
                                                Type
                                                <button class="absolute right-2.5 top-4 h-5 w-5 cursor-pointer" @click="$refs.typePopper.doClose()">
                                                    <icons-close />
                                                </button>
                                            </div>
                                            <div class="container pb-4">
                                                <ul class="block max-h-[calc(100vh-120px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6">
                                                    <li v-for="filter in filter3Data" :key="filter.id" class="mb-2 break-inside-avoid pr-2">
                                                        <input-filter-checkbox :id="filter.filterCateogries" v-model="typeFilterOption[filter.filterCateogries]" :label="filter.filterCateogries" />
                                                        <ul v-if="filter.subCategories.length" class="mt-2 pr-2">
                                                            <li v-for="subFilter in filter.subCategories" :key="subFilter.id" class="mb-2 break-inside-avoid pr-2">
                                                                <input-filter-checkbox :id="subFilter.subCategories" v-model="typeFilterOption[subFilter.subCategories]" :label="subFilter.subCategories" :is-child="true" />
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <button class="filter-btn" @click="applyFilters(), $refs.typePopper.doClose()">Apply</button>
                                        </div>
                                        <p
                                            slot="reference"
                                            class="flex cursor-pointer select-none items-center justify-between gap-4 border border-transparent bg-white/90 px-5 py-3 text-base font-semibold leading-5 text-black shadow-[0_3px_6px_rgba(239,239,239)] duration-150 hover:border-[#1eb1fc] hover:!text-primary xl:justify-start"
                                            :class="{ 'border-[#1eb1fc] !text-primary': activePopper === 'type' }"
                                        >
                                            Type
                                            <icons-downarrow class="text-primary xl:rotate-0" :class="{ 'xl:!rotate-180': activePopper === 'type' }" />
                                        </p>
                                    </popper>
                                </li>
                                <li>
                                    <popper
                                        ref="mediaPopper"
                                        trigger="clickToToggle"
                                        :options="{
                                            placement: 'bottom',
                                            modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                            preventOverflow: {
                                                padding: 0,
                                            },
                                        }"
                                        @show="openPopper('media')"
                                        @hide="closePopper()"
                                    >
                                        <div class="popper !fixed right-0 z-[60] !my-0 h-full !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto">
                                            <div class="relative block p-3 text-center xl:hidden">
                                                Media Type
                                                <button class="absolute right-2.5 top-4 h-5 w-5 cursor-pointer" @click="$refs.mediaPopper.doClose()">
                                                    <icons-close />
                                                </button>
                                            </div>
                                            <div class="container pb-4">
                                                <ul class="block max-h-[calc(100vh-120px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6">
                                                    <li v-for="filter in filter4Data" :key="filter.id" class="mb-2 break-inside-avoid pr-2">
                                                        <input-filter-checkbox :id="filter.filterCateogries" v-model="mediaFilterOption[filter.filterCateogries]" :label="filter.filterCateogries" />
                                                        <ul v-if="filter.subCategories.length" class="mt-2 pr-2">
                                                            <li v-for="subFilter in filter.subCategories" :key="subFilter.id" class="mb-2 break-inside-avoid pr-2">
                                                                <input-filter-checkbox :id="subFilter.subCategories" v-model="mediaFilterOption[subFilter.subCategories]" :label="subFilter.subCategories" :is-child="true" />
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                            <button class="filter-btn" @click="applyFilters(), $refs.mediaPopper.doClose()">Apply</button>
                                        </div>
                                        <p
                                            slot="reference"
                                            class="flex cursor-pointer select-none items-center justify-between gap-4 border border-transparent bg-white/90 px-5 py-3 text-base font-semibold leading-5 text-black shadow-[0_3px_6px_rgba(239,239,239)] duration-150 hover:border-[#1eb1fc] hover:!text-primary xl:justify-start"
                                            :class="{ 'border-[#1eb1fc] !text-primary': activePopper === 'media' }"
                                        >
                                            Media Type
                                            <icons-downarrow class="text-primary xl:rotate-0" :class="{ 'xl:!rotate-180': activePopper === 'media' }" />
                                        </p>
                                    </popper>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="container mt-5">
                        <div v-if="appliedFilters.length > 0" class="mb-6 text-black">
                            <h6 class="mr-2 inline-block align-middle text-black/70">Selected:</h6>
                            <ul class="gap inline-flex flex-wrap">
                                <li v-for="(option, index) in appliedFilters" :key="`applay_${index}`" class="group mb-1 mr-1 rounded bg-black/10 px-2 py-1">
                                    <button class="flex cursor-pointer items-center gap-1.5" @click="removeFilter(option)">{{ option.label || option }}<icons-close class="group-hover:text-danger" /></button>
                                </li>
                                <li class="mb-1 rounded bg-primary/20 px-2 py-1"><button class="cursor-pointer" @click="removeAllFilter()">Clear All</button></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </client-only>

            <section class="pt-[59px] md:pb-[134px]">
                <div class="container">
                    <div class="lg:-mx-7 lg:flex">
                        <div v-for="insight in insightCatalogue1" :key="insight.id" class="mb-8 w-full lg:max-w-[670px] lg:px-7">
                            <div>
                                <nuxt-link :to="`/insights/${insight.attributes.singleInsightPageSlug}`" :title="insight.attributes.title">
                                    <img :src="insight.attributes.imgUrl" :alt="insight.attributes.title" loading="lazy" class="h-72 w-full object-cover" />
                                </nuxt-link>
                            </div>
                            <div class="flex h-[calc(100%-125px)] flex-col justify-between py-3 xl:h-[calc(100%-340px)] xl:py-4">
                                <div>
                                    <p class="mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]">
                                        {{ insight.attributes.Insightsource }}
                                    </p>
                                    <nuxt-link :to="`/insights/${insight.attributes.singleInsightPageSlug}`" class="mb-3 line-clamp-1 block text-[21px] font-semibold leading-7 text-[#202A36]">{{ insight.attributes.title }}</nuxt-link>
                                    <p class="mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base">
                                        {{ insight.attributes.paragraph }}
                                    </p>
                                </div>
                                <div class="relative flex items-center justify-between">
                                    <p class="inline-block text-[15px] font-medium leading-6 -tracking-[0.03px] text-[#646464] transition-all duration-300">
                                        {{ insight.attributes.insightType }} | {{ $helper.formatInsightPublishDate(insight.attributes.date) }}
                                    </p>
                                    <span>
                                        <common-share :is-show-save-btn="true" :custom-link="`/${insight.attributes.singleInsightPageSlug}`" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1 border-[#d5d5d5] lg:border-l lg:px-7">
                            <div class="block h-[2px] w-full bg-primary"></div>
                            <p class="mt-7 text-[21px] font-bold leading-7 text-primary">{{ content.section1Column2Title }}</p>
                            <div class="mt-5 space-y-[19px] divide-y divide-[#707070]/50 lg:mt-[58px]">
                                <div v-for="(data, i) in section1Column2Data" :key="data.id" class="items-center gap-10 space-y-3 md:flex md:space-y-0 xl:gap-[83px]" :class="{ 'space-y-3 pt-[19px]': i > 0 }">
                                    <div>
                                        <p class="text-[25px] font-semibold text-[#202a36]">{{ i + 1 }}</p>
                                    </div>
                                    <div class="flex-1">
                                        <p class="mb-2 text-[15px] font-semibold leading-[19px] -tracking-[0.03px] text-primary">
                                            {{ data.attributes.insightIndustry }}
                                        </p>
                                        <nuxt-link :to="`/insights/${data.attributes.slug}`" class="mb-1.5 block text-[22px] font-semibold leading-7 duration-150 hover:text-primary"> {{ data.attributes.insightTitle }} </nuxt-link>
                                        <p class="text-[15px] font-medium leading-6 -tracking-[0.03px] text-[#646464]">{{ data.attributes.InsightType }} | {{ $helper.formatInsightPublishDate(data.attributes.date) }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="flex flex-col gap-24">
                <div v-for="(_, insightIndex) in [1]" :key="insightIndex" class="flex flex-col">
                    <!-- first row -->
                    <div v-if="insightCatalogue2.length > 0" class="py-10 md:py-16 lg:pb-[44px] lg:pt-[50px]">
                        <div class="container">
                            <div class="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]">
                                <div
                                    v-for="(item, i) in insightCatalogue2.slice(0, 3)"
                                    :key="i"
                                    class="relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r"
                                    :class="{ '!border-0 lg:col-span-2': i === 2, '!border-0': i === 6, 'md:border-l lg:border-0': i % 2 !== 0 }"
                                >
                                    <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.6)]">
                                        <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`" :title="item.attributes.title">
                                            <img :src="item.attributes.imgUrl" :alt="item.attributes.title" loading="lazy" class="h-[229px] w-full object-cover" :class="{ '!h-72': i === 2 }" />
                                        </nuxt-link>
                                    </div>
                                    <div class="flex flex-col justify-between py-3 xl:py-[34px]">
                                        <div class="mb-5">
                                            <p class="mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]">
                                                {{ item.attributes.Insightsource }}
                                            </p>
                                            <div class="md:min-h-[56px]">
                                                <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`" class="mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36]">{{ item.attributes.title }}</nuxt-link>
                                            </div>
                                            <p class="mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base">
                                                {{ item.attributes.paragraph }}
                                            </p>
                                        </div>
                                        <div class="absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]">
                                            <p class="inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]">
                                                {{ item.attributes.insightType }} | {{ $helper.formatInsightPublishDate(item.attributes.date) }}
                                            </p>
                                            <span>
                                                <common-share :is-show-save-btn="true" :custom-link="`/${item.attributes.singleInsightPageSlug}`" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- second row -->
                    <div v-if="insightCatalogue2.slice(3).length > 0" class="py-10 md:py-16 lg:pb-[113px] lg:pt-0">
                        <div class="container">
                            <div class="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]">
                                <div v-for="(item, i) in insightCatalogue2.slice(3)" :key="i" class="relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r" :class="{ '!border-0': i !== 0 && i % 3 == 0, 'md:border-r': i % 2 == 0 }">
                                    <div class="relative">
                                        <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.6)]">
                                            <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`">
                                                <img :src="item.attributes.imgUrl" :alt="item.attributes.title" loading="lazy" class="h-[170px] w-full object-cover" />
                                            </nuxt-link>
                                        </div>
                                    </div>
                                    <div class="flex flex-col justify-between py-3 xl:py-[34px]">
                                        <div class="mb-5">
                                            <h4 class="mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]">
                                                {{ item.attributes.Insightsource }}
                                            </h4>
                                            <div class="md:min-h-[56px]">
                                                <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`" class="mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36]">{{ item.attributes.title }}</nuxt-link>
                                            </div>
                                            <p class="mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base">
                                                {{ item.attributes.paragraph }}
                                            </p>
                                        </div>
                                        <div class="absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]">
                                            <p class="inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]">
                                                {{ item.attributes.insightType }} | {{ $helper.formatInsightPublishDate(item.attributes.date) }}
                                            </p>
                                            <span>
                                                <common-share :is-show-save-btn="true" :custom-link="`/${item.attributes.singleInsightPageSlug}`" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- section 1 -->
                    <common-contact-us :video-thumbnail-u-r-l="content.video1ThumbnailUrl" :button-title="content.video1ButtonText" :button-u-r-l="content.video1ButtonLink" :video-u-r-l="content.video1Url" :title="content.video1Title" />

                    <!-- third row -->
                    <!-- <section class="pt-[92px] pb-[119px]"> -->
                    <div v-if="insightCatalogue3.length > 0" class="py-10 md:py-16 lg:pb-[87px] lg:pt-[92px]">
                        <div class="container">
                            <div class="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]">
                                <div v-for="(item, i) in insightCatalogue3.slice(0, 4)" :key="i" class="relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r" :class="{ '!border-0': i === 3, 'md:border-r': i % 2 == 0 }">
                                    <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.6)]">
                                        <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`">
                                            <img :src="item.attributes.imgUrl" :alt="item.attributes.title" loading="lazy" class="h-[170px] w-full object-cover" />
                                        </nuxt-link>
                                    </div>
                                    <div class="flex flex-col justify-between py-3 xl:py-[34px]">
                                        <div class="mb-5">
                                            <h4 class="mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]">
                                                {{ item.attributes.Insightsource }}
                                            </h4>
                                            <div class="md:min-h-[56px]">
                                                <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`" class="mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36]">{{ item.attributes.title }}</nuxt-link>
                                            </div>
                                            <p class="mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base">
                                                {{ item.attributes.paragraph }}
                                            </p>
                                        </div>
                                        <div class="absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]">
                                            <p class="inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]">
                                                {{ item.attributes.insightType }} | {{ $helper.formatInsightPublishDate(item.attributes.date) }}
                                            </p>
                                            <span>
                                                <common-share :is-show-save-btn="true" :custom-link="`/${item.attributes.singleInsightPageSlug}`" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- </section> -->

                    <!-- forth row -->
                    <!-- <section class="pb-10 lg:pb-[54px]"> -->
                    <div v-if="insightCatalogue3.slice(4).length > 0" class="py-10 md:py-16 lg:py-0">
                        <div class="container">
                            <div class="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:gap-y-[76px]">
                                <div v-for="(item, i) in insightCatalogue3.slice(4)" :key="i" class="relative mb-8 border-[#d5d5d5] md:px-7 md:first:border-r">
                                    <div class="relative">
                                        <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.6)]">
                                            <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`">
                                                <img :src="item.attributes.imgUrl" :alt="item.attributes.title" loading="lazy" class="h-72 w-full object-cover" />
                                            </nuxt-link>
                                        </div>
                                    </div>
                                    <div class="flex flex-col justify-between py-3 xl:py-[34px]">
                                        <div class="mb-5">
                                            <h4 class="mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]">
                                                {{ item.attributes.Insightsource }}
                                            </h4>
                                            <div class="md:min-h-[56px]">
                                                <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`" class="mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36]">{{ item.attributes.title }}</nuxt-link>
                                            </div>
                                            <p class="mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base">
                                                {{ item.attributes.paragraph }}
                                            </p>
                                        </div>
                                        <div class="absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]">
                                            <p class="inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]">
                                                {{ item.attributes.insightType }} | {{ $helper.formatInsightPublishDate(item.attributes.date) }}
                                            </p>
                                            <span>
                                                <common-share :is-show-save-btn="true" :custom-link="`/${item.attributes.singleInsightPageSlug}`" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- </section> -->

                    <!--section-2 -->
                    <div v-if="insightCatalogue3.length > 0" class="pb-10 lg:pb-[54px] lg:pt-[87px]">
                        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                            <div class="grid grid-cols-1 items-center justify-between border border-[#d5d5d5] lg:grid-cols-2">
                                <div class="order-2 px-2.5 py-9 md:py-14 md:pl-9 lg:order-1 lg:max-w-[500px]">
                                    <h4 class="text-2xl font-bold uppercase leading-9" v-html="content.CTA1Title"></h4>
                                    <p class="pb-8 pt-2.5">{{ content.CTA1Description }}</p>

                                    <nuxt-link v-if="$helper.isInternalUrl(content.CTA1ButtonLink)" class="btn" :to="content.CTA1ButtonLink">{{ content.CTA1ButtonText }}</nuxt-link>
                                    <a v-else target="_blank" :href="content.CTA1ButtonLink" class="btn">{{ content.CTA1ButtonText }}</a>
                                </div>
                                <img :src="content.CTA1ImgUrl" alt="CTA" class="relative order-1 h-80 w-full bg-cover bg-center object-cover lg:order-2 lg:h-full" loading="lazy" />
                            </div>
                        </div>
                    </div>

                    <!-- fifth row  -->
                    <!-- <section class="pt-[50px] pb-[119px]"> -->
                    <div v-if="insightCatalogue4.length > 0" class="py-10 md:py-16 lg:py-[50px]">
                        <div class="container">
                            <div class="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]">
                                <div v-for="(item, i) in insightCatalogue4.slice(0, 4)" :key="i" class="relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r" :class="{ '!border-0': i === 3, 'md:border-r': i % 2 == 0 }">
                                    <div class="relative">
                                        <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.6)]">
                                            <nuxt-link :to="`/${item.attributes.singleInsightPageSlug}`">
                                                <img :src="item.attributes.imgUrl" :alt="item.attributes.title" loading="lazy" class="h-[170px] w-full object-cover" />
                                            </nuxt-link>
                                        </div>
                                    </div>
                                    <div class="flex flex-col justify-between py-3 xl:py-[34px]">
                                        <div class="mb-5">
                                            <h4 class="mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]">
                                                {{ item.attributes.Insightsource }}
                                            </h4>
                                            <div class="md:min-h-[56px]">
                                                <nuxt-link :to="`/${item.attributes.singleInsightPageSlug}`" class="mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36]">{{ item.attributes.title }}</nuxt-link>
                                            </div>
                                            <p class="mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base">
                                                {{ item.attributes.paragraph }}
                                            </p>
                                        </div>
                                        <div class="absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]">
                                            <p class="inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]">
                                                {{ item.attributes.insightType }} | {{ $helper.formatInsightPublishDate(item.attributes.date) }}
                                            </p>
                                            <span>
                                                <common-share :is-show-save-btn="true" :custom-link="`/${item.attributes.singleInsightPageSlug}`" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- </section> -->

                    <!-- sixth row -->
                    <!-- <section class="pt-[87px] pb-[74px]"> -->
                    <div v-if="insightCatalogue4.slice(4).length > 0" class="py-10 md:py-16 lg:pb-[54px] lg:pt-0">
                        <div class="container">
                            <div class="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]">
                                <div v-for="(item, i) in insightCatalogue4.slice(4)" :key="i" class="relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r" :class="{ '!border-0 lg:col-span-2': i === 2, 'md:border-r': i % 2 == 0 }">
                                    <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.6)]">
                                        <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`">
                                            <img :src="item.attributes.imgUrl" :alt="item.attributes.title" loading="lazy" class="h-[229px] w-full object-cover" :class="{ '!h-72': i === 2 }" />
                                        </nuxt-link>
                                    </div>
                                    <div class="flex flex-col justify-between py-3 xl:py-[34px]">
                                        <div class="mb-5">
                                            <h4 class="mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]">
                                                {{ item.attributes.Insightsource }}
                                            </h4>
                                            <div class="md:min-h-[56px]">
                                                <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`" class="mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36] md:min-h-[56px]">{{
                                                    item.attributes.title
                                                }}</nuxt-link>
                                            </div>
                                            <p class="mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base">
                                                {{ item.attributes.paragraph }}
                                            </p>
                                        </div>
                                        <div class="absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]">
                                            <p class="inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]">
                                                {{ item.attributes.insightType }} | {{ $helper.formatInsightPublishDate(item.attributes.date) }}
                                            </p>
                                            <span>
                                                <common-share :is-show-save-btn="true" :custom-link="`/insights/${item.attributes.singleInsightPageSlug}`" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- </section> -->

                    <!-- section 3 -->
                    <common-interested-service
                        :background-image="content.section2ImgUrl"
                        :subtitle="content.section2Subtitle"
                        :title="content.section2Title"
                        :description="content.section2Description"
                        :button-link="content.section2ButtonLink"
                        :button-title="content.section2ButtonText"
                    />

                    <div v-if="insightCatalogue5.length > 0" class="mt-32 py-10 md:py-16 lg:pb-[54px] lg:pt-0">
                        <div v-if="insightCatalogue5.slice(0, 3).length > 0" class="container">
                            <div class="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]">
                                <div v-for="(item, i) in insightCatalogue5.slice(0, 3)" :key="i" class="relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r" :class="{ '!border-0 lg:col-span-2': i === 2, 'md:border-r': i % 2 == 0 }">
                                    <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.6)]">
                                        <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`">
                                            <img :src="item.attributes.imgUrl" :alt="item.attributes.title" loading="lazy" class="h-[229px] w-full object-cover" :class="{ '!h-72': i === 2 }" />
                                        </nuxt-link>
                                    </div>
                                    <div class="flex flex-col justify-between py-3 xl:py-[34px]">
                                        <div class="mb-5">
                                            <h4 class="mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]">
                                                {{ item.attributes.Insightsource }}
                                            </h4>
                                            <div class="md:min-h-[56px]">
                                                <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`" class="mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36] md:min-h-[56px]">{{
                                                    item.attributes.title
                                                }}</nuxt-link>
                                            </div>
                                            <p class="mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base">
                                                {{ item.attributes.paragraph }}
                                            </p>
                                        </div>
                                        <div class="absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]">
                                            <p class="inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]">
                                                {{ item.attributes.insightType }} | {{ $helper.formatInsightPublishDate(item.attributes.date) }}
                                            </p>
                                            <span>
                                                <common-share :is-show-save-btn="true" :custom-link="`/${item.attributes.singleInsightPageSlug}`" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="insightCatalogue5.slice(3).length > 0" class="container mt-16">
                            <div class="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]">
                                <div v-for="(item, i) in insightCatalogue5.slice(3)" :key="i" class="relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r" :class="{ '!border-0': i === 3, 'md:border-r': i % 2 == 0 }">
                                    <div class="relative">
                                        <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.6)]">
                                            <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`">
                                                <img :src="item.attributes.imgUrl" :alt="item.attributes.title" loading="lazy" class="h-[170px] w-full object-cover" />
                                            </nuxt-link>
                                        </div>
                                    </div>
                                    <div class="flex flex-col justify-between py-3 xl:py-[34px]">
                                        <div class="mb-5">
                                            <h4 class="mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]">
                                                {{ item.attributes.Insightsource }}
                                            </h4>
                                            <div class="md:min-h-[56px]">
                                                <nuxt-link :to="`/insights/${item.attributes.singleInsightPageSlug}`" class="mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36]">{{ item.attributes.title }}</nuxt-link>
                                            </div>
                                            <p class="mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base">
                                                {{ item.attributes.paragraph }}
                                            </p>
                                        </div>
                                        <div class="absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]">
                                            <p class="inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]">
                                                {{ item.attributes.insightType }} | {{ $helper.formatInsightPublishDate(item.attributes.date) }}
                                            </p>
                                            <span>
                                                <common-share :is-show-save-btn="true" :custom-link="`/insights/${item.attributes.singleInsightPageSlug}`" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- Our Team -->
        <common-our-team class="!pb-10 !pt-0 md:!pb-0" :title="content.section3Title" :description="content.section3Description" :teams="section3Data" />

        <!-- Ready To Talk -->
        <common-readytotalk :img-url="readyToTalkForm.imgUrl" :service-options="readyToTalkForm.services.data" :about-paragraph="readyToTalkForm.aboutParagraph" :title="readyToTalkForm.title" :talk-in-title="readyToTalkForm.talkInTitle" />

        <common-brand-logo :logos="logoSliders" />
    </div>
</template>

<script>
    export default {
        async asyncData(context) {
            try {
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/insight-page?populate=deep`);
                return {
                    content: context.$helper.parseData(data.data),
                };
            } catch (err) {}
        },

        data() {
            return {
                showMobileFilter: false,
                appliedFilters: [],
                activePopper: '',
                industryFilterOption: {},
                servicesFilterOption: {},
                typeFilterOption: {},
                mediaFilterOption: {},
                dateFilterOption: {
                    start_date: '',
                    end_date: '',
                },
                regionFilterOption: {},
                dateConfig: {
                    wrap: true, // set wrap to true only when using 'input-group'
                    altFormat: 'm/d/Y',
                    altInput: true,
                    dateFormat: 'm-d-Y',
                    static: true,
                },
                tabs: [
                    {
                        id: 'OurLatestInsights',
                        title: 'Our Latest Insights',
                    },
                    {
                        id: 'readyToTalk',
                        title: 'Ready to Talk',
                    },
                ],
                insights: [],
            };
        },

        head() {
            return {
                title: this.content?.metaFields[0]?.title,
                link: [
                    {
                        rel: 'canonical',
                        href: this.content?.metaFields[0]?.canonicalUrl
                            ? (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.content.metaFields[0].canonicalUrl
                            : (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path,
                    },
                    {
                        rel: 'preload',
                        href: this.content.bannerImgUrl,
                        as: 'image',
                    },
                ],
                meta: [
                    {
                        name: 'robots',
                        content: 'index, all',
                    },
                    {
                        hid: 'og:title',
                        property: 'og:title',
                        content: this.content?.metaFields[0]?.title,
                    },
                    {
                        hid: 'og:image',
                        property: 'og:image',
                        content: this.content?.metaFields[0]?.socialImgUrl,
                    },
                    {
                        hid: 'og:description',
                        property: 'og:description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'description',
                        property: 'description',
                        name: 'description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'og:image:secure_url',
                        property: 'og:image:secure_url',
                        content: this.content?.metaFields[0]?.socialImgUrl,
                    },
                    {
                        hid: 'twitter:description',
                        property: 'twitter:description',
                        content: this.content?.metaFields[0]?.description,
                    },
                    {
                        hid: 'twitter:title',
                        property: 'twitter:title',
                        content: this.content?.metaFields[0]?.title,
                    },
                    {
                        hid: 'twitter:image',
                        property: 'twitter:image',
                        content: this.content?.metaFields[0]?.socialImgUrl,
                    },
                    {
                        hid: 'keywords',
                        property: 'keywords',
                        name: 'keywords',
                        content: this.content?.metaFields[0]?.keywords,
                    },
                ],
            };
        },

        computed: {
            filter1Data() {
                return this.content?.FilterComponent1?.data[0]?.attributes?.filterCategories || [];
            },
            filter2Data() {
                return this.content?.FilterComponent2?.data[0]?.attributes?.filterCategories || [];
            },
            filter3Data() {
                return this.content?.FilterComponent3?.data[0]?.attributes?.filterCategories || [];
            },
            filter4Data() {
                return this.content?.FilterComponent4?.data[0]?.attributes?.filterCategories || [];
            },
            section3Data() {
                return this.content?.section3Component?.data || [];
            },
            readyToTalkForm() {
                return this.content?.readyToTalkForm?.data?.attributes || { services: { data: [] } };
            },
            logoSliders() {
                return this.content?.logoSlider?.data?.attributes?.logoUrls || [];
            },
            insightCatalogue1() {
                return this.content?.insightCatalogue1?.data || [];
            },
            insightCatalogue2() {
                return this.content?.insightCatalogue2?.data || [];
            },
            insightCatalogue3() {
                return this.content?.insightCatalogue3?.data || [];
            },
            insightCatalogue4() {
                return this.content?.insightCatalogue3?.data || [];
            },
            insightCatalogue5() {
                return this.content?.insightCatalogue3?.data || [];
            },
            section1Column2Data() {
                return this.content?.section1Column2Component?.data || [];
            },
        },

        methods: {
            openPopper(filter) {
                setTimeout(() => {
                    this.activePopper = filter;
                }, 100);
            },

            closePopper() {
                this.activePopper = '';
            },

            applyFilters() {
                const industryFilter = Object.keys(this.industryFilterOption)
                    .filter((key) => this.industryFilterOption[key] === true)
                    .reduce((obj, key) => {
                        obj.push(key.toLowerCase());
                        return obj;
                    }, []);
                const servicesFilter = Object.keys(this.servicesFilterOption)
                    .filter((key) => this.servicesFilterOption[key] === true)
                    .reduce((obj, key) => {
                        obj.push(key.toLowerCase());
                        return obj;
                    }, []);
                const typeFilter = Object.keys(this.typeFilterOption)
                    .filter((key) => this.typeFilterOption[key] === true)
                    .reduce((obj, key) => {
                        obj.push(key.toLowerCase());
                        return obj;
                    }, []);
                const regionFilter = Object.keys(this.regionFilterOption)
                    .filter((key) => this.regionFilterOption[key] === true)
                    .reduce((obj, key) => {
                        obj.push(key.toLowerCase());
                        return obj;
                    }, []);

                this.appliedFilters = [];
                this.$router.push({ path: '/search', query: { industry: [...industryFilter], service: [...servicesFilter], type: [...typeFilter] } });
                this.appliedFilters = [...industryFilter, ...servicesFilter, ...typeFilter, ...regionFilter];
            },

            removeFilter(filter) {
                this.appliedFilters = this.appliedFilters.filter((item) => item.id !== filter.id);
                this.industryFilterOption[filter.id] = false;
                this.servicesFilterOption[filter.id] = false;
                this.typeFilterOption[filter.id] = false;
                this.regionFilterOption[filter.id] = false;
                if (filter.id === 'date') {
                    this.dateFilterOption.start_date = '';
                    this.dateFilterOption.end_date = '';
                }
            },

            removeAllFilter() {
                this.appliedFilters = [];
                this.industryFilterOption = {};
                this.servicesFilterOption = {};
                this.typeFilterOption = {};
                this.regionFilterOption = {};
                this.dateFilterOption.start_date = '';
                this.dateFilterOption.end_date = '';
            },
        },
    };
</script>
