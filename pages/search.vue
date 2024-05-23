<template>
    <div>
        <section class="align-center relative flex h-[477px] justify-center overflow-hidden pb-24 pt-[289px]">
            <video class="force-video-reload absolute inset-0 mt-0 h-full w-full object-cover" autoplay loop muted playsinline>
                <source src="https://videos.ctfassets.net/koyrlvjc3wvc/5Eke5W5guSg2OEDmm5TKtB/86fa202e97192c590b4acdd8e484c24a/global_search.mp4" type="video/mp4" />
            </video>

            <div class="absolute -left-1/3 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746]"></div>
            <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]"></div>
            <div class="container relative z-10 lg:px-[97px] xl:px-4">
                <div>
                    <h1 class="mb-[10px] text-[38px] font-bold leading-[42px] text-white xl:text-[45px] xl:leading-[54px]">Search Results</h1>
                    <p class="w-full text-[13px] font-normal leading-6 text-[#FBFBFD] sm:max-w-[377px] xl:max-w-[570px] xl:text-xl xl:leading-7">Venture Plans - your dream starts with us.</p>
                </div>
            </div>
        </section>
        <section class="pt-11">
            <div class="container">
                <p class="mb-[33px] text-lg -tracking-[0.04px] text-black-700">Search from our extensive database of resources below.</p>
                <div class="relative mb-12 flex items-center justify-between">
                    <div class="relative z-10 text-primary">
                        <icons-search class="w-5" />
                    </div>
                    <input
                        ref="search"
                        v-model="search"
                        type="text"
                        placeholder
                        class="form-input absolute w-full rounded-none border-b-[3px] border-primary bg-transparent px-8 text-lg font-semibold focus:border-b-[3px] focus:border-primary md:text-[26px]"
                    />
                    <button class="relative z-10" @click="search = ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="56" viewBox="0 0 57 56">
                            <g>
                                <g>
                                    <g>
                                        <path fill="none" stroke="#909090" stroke-miterlimit="20" stroke-width="2" d="M20.416 36.038L36.454 20" />
                                    </g>
                                    <g transform="rotate(90 28.5 28)">
                                        <path fill="none" stroke="#909090" stroke-miterlimit="20" stroke-width="2" d="M20.416 36.038L36.454 20" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="relative mb-10 border-[#cfcfcf] xl:border-b xl:border-t">
                <div class="container">
                    <div class="flex flex-col justify-between xl:flex-row xl:flex-nowrap xl:gap-4">
                        <div class="flex flex-col border-b-2 border-[#cfcfcf]/60 xl:flex-row xl:items-center xl:border-b-0">
                            <h5 class="mr-10 hidden flex-initial whitespace-nowrap text-base font-medium text-[#5f5f5f] xl:block">Filter by:</h5>
                            <h5 class="flex flex-1 items-center justify-between py-6 text-base font-medium text-[#5f5f5f] xl:hidden">
                                Filter Insights
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" @click="showMobileFilter = !showMobileFilter">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                    />
                                </svg>
                            </h5>
                            <client-only>
                                <ul class="mb-6 hidden flex-1 flex-col gap-6 pl-5 xl:mb-0 xl:flex xl:flex-row xl:items-center xl:pl-0" :class="{ '!block': showMobileFilter }">
                                    <li class="pb-5 xl:my-6 xl:inline-block xl:pb-0">
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
                                            <div
                                                class="popper !fixed right-0 z-[60] !my-0 h-screen !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto"
                                            >
                                                <div class="relative block p-3 text-center xl:hidden">
                                                    Industry
                                                    <button class="absolute right-2.5 top-4 h-5 w-5 cursor-pointer" @click.stop="$refs.industryPopper.doClose()">
                                                        <icons-close />
                                                    </button>
                                                </div>
                                                <div class="container pb-4">
                                                    <ul class="block max-h-[calc(100vh-120px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6">
                                                        <li class="mb-2 break-inside-avoid pr-2" v-for="filter in filter1Data" :key="filter.id">
                                                            <input-filter-checkbox :id="filter.filterCateogries" v-model="industryFilterOption[filter.filterCateogries]" :label="filter.filterCateogries" />
                                                            <ul class="mt-2 pr-2" v-if="filter.subCategories.length">
                                                                <li class="mb-2 break-inside-avoid pr-2" v-for="subFilter in filter.subCategories" :key="subFilter.id">
                                                                    <input-filter-checkbox :id="subFilter.subCategories" v-model="industryFilterOption[subFilter.subCategories]" :label="subFilter.subCategories" :is-child="true" />
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <button class="filter-btn" @click="applyFilters(), $refs.industryPopper.doClose()">Apply</button>
                                            </div>

                                            <h5
                                                slot="reference"
                                                class="flex cursor-pointer select-none items-center justify-between gap-2 text-base font-semibold leading-5 text-black xl:justify-start"
                                                :class="{ '!text-primary': activePopper === 'industry' }"
                                            >
                                                Industry
                                                <icons-downarrow class="rotate-0 text-primary" :class="{ 'xl:!rotate-180': activePopper === 'industry' }" />
                                            </h5>
                                        </popper>
                                    </li>
                                    <li class="pb-5 xl:my-6 xl:inline-block xl:pb-0">
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
                                                    Services
                                                    <button class="absolute right-2.5 top-4 h-5 w-5 cursor-pointer" @click="$refs.servicesPopper.doClose()">
                                                        <icons-close />
                                                    </button>
                                                </div>
                                                <div class="container pb-4">
                                                    <ul class="mb-4 mt-2 block h-[calc(100vh-128px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6">
                                                        <li class="mb-2 break-inside-avoid pr-2" v-for="filter in filter2Data" :key="filter.id">
                                                            <input-filter-checkbox :id="filter.filterCateogries" v-model="servicesFilterOption[filter.filterCateogries]" :label="filter.filterCateogries" />
                                                            <ul class="mt-2 pr-2" v-if="filter.subCategories.length">
                                                                <li class="mb-2 break-inside-avoid pr-2" v-for="subFilter in filter.subCategories" :key="subFilter.id">
                                                                    <input-filter-checkbox :id="subFilter.subCategories" v-model="servicesFilterOption[subFilter.subCategories]" :label="subFilter.subCategories" :is-child="true" />
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <button class="filter-btn" @click="applyFilters(), $refs.servicesPopper.doClose()">Apply</button>
                                            </div>

                                            <h5
                                                slot="reference"
                                                class="flex cursor-pointer select-none items-center justify-between gap-2 text-base font-semibold leading-5 text-black xl:justify-start"
                                                :class="{ '!text-primary': activePopper === 'services' }"
                                            >
                                                Services
                                                <icons-downarrow class="rotate-0 text-primary" :class="{ 'xl:!rotate-180': activePopper === 'services' }" />
                                            </h5>
                                        </popper>
                                    </li>
                                    <li class="pb-5 xl:my-6 xl:inline-block xl:pb-0">
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
                                                    <ul class="mb-4 mt-2 block max-h-[calc(100vh-128px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6">
                                                        <li class="mb-2 break-inside-avoid pr-2" v-for="filter in filter3Data" :key="filter.id">
                                                            <input-filter-checkbox :id="filter.filterCateogries" v-model="typeFilterOption[filter.filterCateogries]" :label="filter.filterCateogries" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <button class="filter-btn" @click="applyFilters(), $refs.typePopper.doClose()">Apply</button>
                                            </div>
                                            <h5
                                                slot="reference"
                                                class="flex cursor-pointer select-none items-center justify-between gap-2 text-base font-semibold leading-5 text-black xl:justify-start"
                                                :class="{ '!text-primary': activePopper === 'type' }"
                                            >
                                                Type
                                                <icons-downarrow class="rotate-0 text-primary" :class="{ 'xl:!rotate-180': activePopper === 'type' }" />
                                            </h5>
                                        </popper>
                                    </li>
                                    <li class="xl:my-6 xl:inline-block">
                                        <popper
                                            ref="datePopper"
                                            trigger="clickToToggle"
                                            :options="{
                                                placement: 'bottom',
                                                modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                                preventOverflow: {
                                                    padding: 0,
                                                },
                                            }"
                                            @show="openPopper('date')"
                                            @hide="closePopper()"
                                        >
                                            <div class="popper !fixed right-0 z-[60] !my-0 h-full !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto">
                                                <div class="relative block p-3 text-center xl:hidden">
                                                    Date
                                                    <button class="absolute right-2.5 top-4 h-5 w-5 cursor-pointer" @click="$refs.datePopper.doClose()">
                                                        <icons-close />
                                                    </button>
                                                </div>
                                                <div class="container flex max-h-[calc(100vh-128px)] flex-col gap-5 overflow-auto py-5 md:flex-row xl:h-auto xl:gap-10 xl:overflow-visible">
                                                    <div class="min-w-[300px]">
                                                        <label for class="mb-1.5 inline-block">Start date</label>
                                                        <flat-pickr v-model="dateFilterOption.start_date" placeholder="MM/DD/YYYY" :config="startDateConfig" class="form-input !border !border-black/20"></flat-pickr>
                                                    </div>

                                                    <div class="min-w-[300px]">
                                                        <label for class="mb-1.5 inline-block">End date</label>
                                                        <flat-pickr v-model="dateFilterOption.end_date" placeholder="MM/DD/YYYY" :config="endDateConfig" class="form-input !border !border-black/20"></flat-pickr>
                                                    </div>
                                                </div>
                                                <button class="filter-btn" @click="applyFilters(), $refs.datePopper.doClose()">Apply</button>
                                            </div>
                                            <h5
                                                slot="reference"
                                                class="flex cursor-pointer select-none items-center justify-between gap-2 text-base font-semibold leading-5 text-black xl:justify-start"
                                                :class="{ '!text-primary': activePopper === 'date' }"
                                            >
                                                Date
                                                <icons-downarrow class="rotate-0 text-primary" :class="{ 'xl:!rotate-180': activePopper === 'date' }" />
                                            </h5>
                                        </popper>
                                    </li>
                                </ul>
                            </client-only>
                        </div>
                        <div class="float-none flex items-center border-b-2 border-[#cfcfcf]/60 xl:border-b-0">
                            <h5 class="mr-5 flex-initial whitespace-nowrap text-base font-thin text-[#5f5f5f]">Sort by:</h5>
                            <ul class="flex items-center gap-3">
                                <li class="my-6 inline-block">
                                    <div>
                                        <h5
                                            @click="sortBy = 'Most Relevant'"
                                            :class="{ '!text-black': sortBy === 'Most Relevant' }"
                                            class="flex cursor-pointer items-center gap-2 text-base font-semibold leading-5 text-[#5f5f5f] hover:text-primary"
                                        >
                                            Most Relevant
                                        </h5>
                                    </div>
                                </li>
                                <li class="h-[13px] w-[1px] bg-black/30 xl:h-4"></li>
                                <li class="my-6 inline-block">
                                    <div>
                                        <h5 @click="sortBy = 'Date'" :class="{ '!text-black': sortBy === 'Date' }" class="flex cursor-pointer items-center gap-2 text-base font-semibold leading-5 text-[#5f5f5f] hover:text-primary">Date</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div v-if="appliedFilters.length > 0" class="mb-6 text-black">
                    <h6 class="mr-2 inline-block align-middle text-black/70">Selected:</h6>
                    <ul class="gap inline-flex flex-wrap">
                        <li v-for="(option, index) in appliedFilters" :key="`applay_${index}`" class="group mb-1 mr-1 rounded bg-black/10 px-2 py-1">
                            <button class="flex cursor-pointer items-center gap-1.5" @click="removeFilter(option)">
                                {{ option.label || option }}
                                <icons-close class="group-hover:text-danger" />
                            </button>
                        </li>
                        <li class="mb-1 rounded bg-primary/20 px-2 py-1">
                            <button class="cursor-pointer" @click="removeAllFilter()">Clear All</button>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- has-overlay -- add class below in open filter menu -->
            <div class="container pb-[84px] md:pb-4 lg:pb-[97px] xl:pb-4" :class="{ 'has-overlay': activePopper != '' }">
                <div class>
                    <p class="mb-6 text-[15px] leading-7 text-[#646464]/80">Showing {{ results.length }} results</p>
                    <div :key="i" class="mb-14 space-y-4" v-for="(item, i) in results">
                        <div class="flex items-center gap-10 border-b border-[#707070]/50 py-4 xl:gap-32">
                            <p class="hidden flex-none text-[25px] font-semibold leading-8 text-[#202a36] sm:block">
                                {{ i + 1 }}
                            </p>
                            <nuxt-link :to="getLink(item)" class="group inline-block flex-1">
                                <p v-if="isInsight(item.id)" class="mb-3 text-lg font-medium leading-[19px] -tracking-[0.04px] text-primary">
                                    {{ item.insightType }}
                                </p>
                                <h4 class="mb-3 text-xl font-semibold leading-7 text-black transition-all duration-300 group-hover:text-primary md:text-[26px]">{{ getTitle(item) }}</h4>
                                <p class="mb-3 text-base text-[#202a36] md:text-lg">
                                    <common-custom-strapi-display :data="getDescription(item)"></common-custom-strapi-display>
                                </p>
                                <p v-if="isInsight(item.id)" class="text-[15px] font-medium leading-4 -tracking-[0.03px] text-[#646464]">{{ item.Insightsource }} {{ getDate(item.publishedAt) ? ' | ' + getDate(item.publishedAt) : '' }}</p>
                                <p v-else class="text-[15px] font-medium leading-4 -tracking-[0.03px] text-[#646464]">
                                    {{ getDate(item.publishedAt) }}
                                </p>
                            </nuxt-link>
                            <nuxt-link :to="getLink(item)" class="hidden h-[150px] min-w-[200px] max-w-[295px] flex-none overflow-hidden rounded-[3px] md:inline-block">
                                <nuxt-img format="webp" :src="getImageUrl(item)" class="h-full w-full max-w-[200px] object-cover" alt="Results" loading="lazy" />
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>

            <p v-if="results.length === 0" class="my-20 text-center">No any results found!</p>
        </section>
        <common-readytotalk :serviceOptions="serviceOptions" />
        <!-- Brand logo -->
        <common-brand-logo :logos="featuredLogos" />
    </div>
</template>

<script>
    export default {
        async asyncData(context) {
            try {
                const results = await context.$axios.post(`${context.$config.meiliSearchURL}/indexes/search-page/search`, {
                    q: '',
                    limit: 15,
                    attributesToRetrieve: ['title', 'description', 'url', 'image', 'keywords', 'category'],
                });

                const hits = (
                    results.data.hits.map((result) => {
                        return result;
                    }) || []
                )?.flat();
                const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/insight-page?populate=deep`);
                const parsedData = context.$helper.parseData(data.data);

                return {
                    results: hits,
                    filters: {
                        FilterComponent1: parsedData?.FilterComponent1 || [],
                        FilterComponent2: parsedData.FilterComponent2 || [],
                        FilterComponent3: parsedData?.FilterComponent3 || [],
                    },
                };
            } catch (err) {
                console.log(err);
            }
        },
        data() {
            return {
                searchQuery: '',
                filters: {},
                search: '',
                results: [],
                showMobileFilter: false,
                appliedFilters: [],
                activePopper: '',
                sortBy: 'Most Relevant',
                selectedIndustryOptions: [],
                industryFilterOption: {},
                selectedServicesOptions: [],
                servicesFilterOption: {},
                selectedTypeOptions: [],
                typeFilterOption: {},
                dateFilterOption: {
                    start_date: '',
                    end_date: '',
                },
                filterText: '',
                featuredLogos: [
                    {
                        logoUrl: 'https://venturefund.vercel.app/assets/img/logos/stanford.png',
                    },
                    {
                        logoUrl: 'https://venturefund.vercel.app/assets/img/logos/finra.png',
                    },
                    {
                        logoUrl: 'https://venturefund.vercel.app/assets/img/logos/hbs.png',
                    },
                    {
                        logoUrl: 'https://venturefund.vercel.app/assets/img/logos/yale.png',
                    },
                    {
                        logoUrl: 'https://venturefund.vercel.app/assets/img/logos/cbv.png',
                    },
                    {
                        logoUrl: 'https://venturefund.vercel.app/assets/img/logos/cfi.png',
                    },
                ],
                regionFilterOption: {},
                startDateConfig: {
                    wrap: true, // set wrap to true only when using 'input-group'
                    altFormat: 'm/d/Y',
                    altInput: true,
                    dateFormat: 'm-d-Y',
                    static: true,
                    disableMobile: true,
                },
                endDateConfig: {
                    wrap: true, // set wrap to true only when using 'input-group'
                    altFormat: 'm/d/Y',
                    altInput: true,
                    dateFormat: 'm-d-Y',
                    static: true,
                    minDate: '',
                    disableMobile: true,
                },
                serviceOptions: [
                    {
                        id: 1,
                        attributes: {
                            serviceName: 'Management Consulting',
                        },
                    },
                    {
                        id: 2,
                        attributes: {
                            serviceName: 'Restructuring Operations',
                        },
                    },
                    {
                        id: 3,
                        attributes: {
                            serviceName: 'Digital Marketing',
                        },
                    },
                    {
                        id: 4,
                        attributes: {
                            serviceName: 'Revenue Growth',
                        },
                    },
                    {
                        id: 5,
                        attributes: {
                            serviceName: 'Agile Implementation',
                        },
                    },
                    {
                        id: 6,
                        attributes: {
                            serviceName: 'Transformation Modification & Integration',
                        },
                    },
                    {
                        id: 7,
                        attributes: {
                            serviceName: 'Customer Experience',
                        },
                    },
                    {
                        id: 8,
                        attributes: {
                            serviceName: 'Financial Advisory',
                        },
                    },
                    {
                        id: 9,
                        attributes: {
                            serviceName: 'Grant Application Support',
                        },
                    },
                    {
                        id: 10,
                        attributes: {
                            serviceName: 'Strategy',
                        },
                    },
                    {
                        id: 11,
                        attributes: {
                            serviceName: 'Human Resources',
                        },
                    },
                    {
                        id: 12,
                        attributes: {
                            serviceName: 'Cannabis Licensing and Application Support',
                        },
                    },
                    {
                        id: 13,
                        attributes: {
                            serviceName: 'New Start Up Technology',
                        },
                    },
                    {
                        id: 14,
                        attributes: {
                            serviceName: 'Immigration Business Plans',
                        },
                    },
                    {
                        id: 15,
                        attributes: {
                            serviceName: 'SBA Lender Business Plans',
                        },
                    },
                    {
                        id: 16,
                        attributes: {
                            serviceName: 'Marketing Plan',
                        },
                    },
                    {
                        id: 17,
                        attributes: {
                            serviceName: 'Restructuring Business Plan',
                        },
                    },
                    {
                        id: 18,
                        attributes: {
                            serviceName: 'Franchising Plan',
                        },
                    },
                    {
                        id: 19,
                        attributes: {
                            serviceName: 'Cannabis Business Plan',
                        },
                    },
                    {
                        id: 20,
                        attributes: {
                            serviceName: 'Request For Proposal',
                        },
                    },
                    {
                        id: 21,
                        attributes: {
                            serviceName: 'Grant Business Plans',
                        },
                    },
                    {
                        id: 22,
                        attributes: {
                            serviceName: 'Investor Pitch Deck',
                        },
                    },
                    {
                        id: 23,
                        attributes: {
                            serviceName: 'Financial Proforma',
                        },
                    },
                    {
                        id: 24,
                        attributes: {
                            serviceName: 'Prospectus',
                        },
                    },
                    {
                        id: 25,
                        attributes: {
                            serviceName: 'White Paper',
                        },
                    },
                    {
                        id: 26,
                        attributes: {
                            serviceName: 'Data Industry Reports',
                        },
                    },
                    {
                        id: 42,
                        attributes: {
                            serviceName: 'Feasibility Reports',
                        },
                    },
                    {
                        id: 43,
                        attributes: {
                            serviceName: 'ETF & Stock Market Reports',
                        },
                    },
                    {
                        id: 44,
                        attributes: {
                            serviceName: 'COVID-19 Market Reports',
                        },
                    },
                    {
                        id: 45,
                        attributes: {
                            serviceName: 'Private Placements',
                        },
                    },
                    {
                        id: 46,
                        attributes: {
                            serviceName: 'Private Placement Memorandum',
                        },
                    },
                    {
                        id: 50,
                        attributes: {
                            serviceName: 'Private Equity',
                        },
                    },
                    {
                        id: 51,
                        attributes: {
                            serviceName: 'Mergers & Acquisitions',
                        },
                    },
                    {
                        id: 52,
                        attributes: {
                            serviceName: 'Due Deligince Certification',
                        },
                    },
                    {
                        id: 53,
                        attributes: {
                            serviceName: 'Regulation S Offshore Offering',
                        },
                    },
                    {
                        id: 54,
                        attributes: {
                            serviceName: 'Investment Portfolio Managment',
                        },
                    },
                    {
                        id: 55,
                        attributes: {
                            serviceName: 'Forensic Accounting',
                        },
                    },
                    {
                        id: 56,
                        attributes: {
                            serviceName: 'Real Estate Investment Trust Fund',
                        },
                    },
                    {
                        id: 57,
                        attributes: {
                            serviceName: 'Securitization',
                        },
                    },
                    {
                        id: 58,
                        attributes: {
                            serviceName: 'Intellectual Property',
                        },
                    },
                    {
                        id: 59,
                        attributes: {
                            serviceName: 'Trademark',
                        },
                    },
                    {
                        id: 60,
                        attributes: {
                            serviceName: 'Copyright',
                        },
                    },
                    {
                        id: 61,
                        attributes: {
                            serviceName: 'Convertible Note(s)',
                        },
                    },
                    {
                        id: 62,
                        attributes: {
                            serviceName: 'Chapter 11 Bankruptcy',
                        },
                    },
                    {
                        id: 63,
                        attributes: {
                            serviceName: 'Commodity & Futures Contract',
                        },
                    },
                    {
                        id: 64,
                        attributes: {
                            serviceName: 'Initial Public Offering',
                        },
                    },
                    {
                        id: 66,
                        attributes: {
                            serviceName: 'Securities Arbitration',
                        },
                    },
                    {
                        id: 67,
                        attributes: {
                            serviceName: 'Offering Memorandum (Canada)',
                        },
                    },
                    {
                        id: 68,
                        attributes: {
                            serviceName: 'Legal Entity Structuring',
                        },
                    },
                    {
                        id: 69,
                        attributes: {
                            serviceName: 'Agile',
                        },
                    },
                    {
                        id: 70,
                        attributes: {
                            serviceName: 'Custom Design and Build',
                        },
                    },
                    {
                        id: 71,
                        attributes: {
                            serviceName: 'Data Analytics Implementation',
                        },
                    },
                    {
                        id: 72,
                        attributes: {
                            serviceName: 'Investor Business Plans',
                        },
                    },
                    {
                        id: 73,
                        attributes: {
                            serviceName: 'E-2 Business Plans',
                        },
                    },
                    {
                        id: 74,
                        attributes: {
                            serviceName: 'E-B1 Business Plans',
                        },
                    },
                    {
                        id: 75,
                        attributes: {
                            serviceName: 'E-B5 Business Plans',
                        },
                    },
                    {
                        id: 76,
                        attributes: {
                            serviceName: 'L-1A & L-1B Business Plans',
                        },
                    },
                    {
                        id: 77,
                        attributes: {
                            serviceName: 'Regulation D',
                        },
                    },
                    {
                        id: 78,
                        attributes: {
                            serviceName: '506 (B) Relationship Investors',
                        },
                    },
                    {
                        id: 79,
                        attributes: {
                            serviceName: '506 (C) Accredited Investors',
                        },
                    },
                    {
                        id: 80,
                        attributes: {
                            serviceName: 'Leveraged Buyout (LBO)',
                        },
                    },
                    {
                        id: 81,
                        attributes: {
                            serviceName: 'Hedge Fund',
                        },
                    },
                    {
                        id: 82,
                        attributes: {
                            serviceName: 'Venture Capital Fund',
                        },
                    },
                    {
                        id: 83,
                        attributes: {
                            serviceName: 'Growth Capital',
                        },
                    },
                    {
                        id: 84,
                        attributes: {
                            serviceName: 'Real Estate',
                        },
                    },
                    {
                        id: 85,
                        attributes: {
                            serviceName: 'Infrastructure',
                        },
                    },
                    {
                        id: 86,
                        attributes: {
                            serviceName: 'Funds of Funds',
                        },
                    },
                    {
                        id: 87,
                        attributes: {
                            serviceName: 'Mezzaanine Capital',
                        },
                    },
                    {
                        id: 88,
                        attributes: {
                            serviceName: 'Distressed Private Equity',
                        },
                    },
                    {
                        id: 89,
                        attributes: {
                            serviceName: 'Secondary Fund',
                        },
                    },
                    {
                        id: 90,
                        attributes: {
                            serviceName: 'Post Merger Integration',
                        },
                    },
                    {
                        id: 91,
                        attributes: {
                            serviceName: 'Diviestitures',
                        },
                    },
                    {
                        id: 93,
                        attributes: {
                            serviceName: 'Software Budgeting And Financials',
                        },
                    },
                    {
                        id: 94,
                        attributes: {
                            serviceName: 'Prototypes',
                        },
                    },
                    {
                        id: 95,
                        attributes: {
                            serviceName: 'Backlog Feature Implementation',
                        },
                    },
                    {
                        id: 96,
                        attributes: {
                            serviceName: 'Functional Specification',
                        },
                    },
                    {
                        id: 97,
                        attributes: {
                            serviceName: 'Utility Patent',
                        },
                    },
                    {
                        id: 98,
                        attributes: {
                            serviceName: 'Design Patent',
                        },
                    },
                    {
                        id: 99,
                        attributes: {
                            serviceName: 'Plant Patent',
                        },
                    },
                    {
                        id: 100,
                        attributes: {
                            serviceName: 'Provisional And Non Provisional',
                        },
                    },
                    {
                        id: 102,
                        attributes: {
                            serviceName: 'Trading',
                        },
                    },
                    {
                        id: 103,
                        attributes: {
                            serviceName: 'Reg A+',
                        },
                    },
                    {
                        id: 28,
                        attributes: {
                            serviceName: 'Debt Financing',
                        },
                    },
                    {
                        id: 104,
                        attributes: {
                            serviceName: 'Pre IPO',
                        },
                    },
                    {
                        id: 105,
                        attributes: {
                            serviceName: 'Special Purpose Entity',
                        },
                    },
                    {
                        id: 106,
                        attributes: {
                            serviceName: 'Crowd funding',
                        },
                    },
                    {
                        id: 107,
                        attributes: {
                            serviceName: 'Invest',
                        },
                    },
                    {
                        id: 108,
                        attributes: {
                            serviceName: 'Industries',
                        },
                    },
                ],
            };
        },

        head() {
            return {
                title: 'Search Results | Venture Plans',
                meta: [
                    {
                        name: 'robots',
                        content: 'noindex',
                    },
                ],
                link: [
                    {
                        rel: 'canonical',
                        href: this.content?.metaFields[0]?.canonicalUrl
                            ? (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.content.metaFields[0].canonicalUrl
                            : (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path,
                    },
                ],
            };
        },

        computed: {
            filter1Data() {
                return this.filters?.FilterComponent1?.data?.[0]?.attributes?.filterCategories || [];
            },
            filter2Data() {
                return this.filters?.FilterComponent2?.data[0]?.attributes?.filterCategories || [];
            },
            filter3Data() {
                return this.filters?.FilterComponent3?.data[0]?.attributes?.filterCategories || [];
            },
        },

        watch: {
            'dateFilterOption.start_date'(val) {
                this.endDateConfig.minDate = val;
            },
            search: {
                handler() {
                    this.resetSelectedFilters();
                    this.performSearch(false);
                },
            },
            $route: {
                handler() {
                    this.resetSelectedFilters();
                    this.performSearch(true);
                },
            },
        },

        mounted() {
            this.search = this.$route.query.search;
            this.resetSelectedFilters();
            this.generateFiltersAndSearch();
        },

        methods: {
            resetSelectedFilters() {
                const queryParams = this.$route.query;
                this.appliedFilters = [];
                this.selectedIndustryOptions = [];
                this.selectedServicesOptions = [];
                this.selectedTypeOptions = [];
                this.industryFilterOption = {};
                this.servicesFilterOption = {};
                this.typeFilterOption = {};
                if (queryParams && queryParams.industry) {
                    for (const industry of queryParams.industry) {
                        this.industryFilterOption[this.capitalize(industry)] = true;
                    }
                    this.selectedIndustryOptions = [...queryParams.industry];
                    this.appliedFilters = [...this.appliedFilters, ...queryParams.industry];
                }
                if (queryParams && queryParams.service) {
                    for (const service of queryParams.service) {
                        this.servicesFilterOption[this.capitalize(service)] = true;
                    }
                    this.selectedServicesOptions = [...queryParams.service];
                    this.appliedFilters = [...this.appliedFilters, ...queryParams.service];
                }
                if (queryParams && queryParams.type) {
                    for (const type of queryParams.type) {
                        this.typeFilterOption[this.capitalize(type)] = true;
                    }
                    this.selectedTypeOptions = [...queryParams.type];
                    this.appliedFilters = [...this.appliedFilters, ...queryParams.type];
                }
            },
            capitalize(str) {
                const arr = str.split(' ');

                for (let i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                }
                const str2 = arr.join(' ');
                return str2;
            },
            performSearch(changeValue) {
                if (changeValue) {
                    this.search = this.$route.query.search;
                }
                clearTimeout(this.timeoutId); 
                this.timeoutId = setTimeout(() => {
                    const hitSearch = async () => {
                        const results = await this.$axios.post(`${process.env.meiliSearchURL}/indexes/search-page/search`, {
                            q: this.search,
                            limit: 15,
                            attributesToRetrieve: ['title', 'description', 'url', 'image', 'keywords', 'category'],
                            filter: this.filterText,
                        });
                        const hits = (
                            results.data.hits.map((result) => {
                                return result;
                            }) || []
                        )?.flat();
                        this.results = hits;
                    };
                    hitSearch();
                }, 700);
            },
            getLink(item) {
                return item?.url;
            },

            isInsight(_meilisearch_id) {
                if (_meilisearch_id?.includes('insight-page')) return true;
                return false;
            },

            getTitle(item) {
                if (item?.title) return item.title;
            },

            getDate(date) {
                return date?.slice(0, date?.indexOf('T'));
            },

            getDescription(item) {
                if (item?.description) return item.description;
            },

            getImageUrl(item) {
                if (item?.image) return item.image;
            },

            openPopper(filter) {
                setTimeout(() => {
                    this.activePopper = filter;
                }, 100);
            },

            closePopper() {
                this.activePopper = '';
            },

            generateFiltersAndSearch(returnWithoutSearch) {
                this.filterText = '';
                let addIndustryFilter = '';
                for (let filter = 0; filter < this.selectedIndustryOptions.length; filter++) {
                    if (addIndustryFilter !== '') {
                        addIndustryFilter += ' OR ';
                    } else {
                        addIndustryFilter += '(';
                    }
                    addIndustryFilter += "industryFilter.industryFilter = '" + this.selectedIndustryOptions[filter] + "'";
                }
                if (addIndustryFilter) {
                    this.filterText += addIndustryFilter + ')';
                }

                let addServiceFilter = '';
                for (let filter = 0; filter < this.selectedServicesOptions.length; filter++) {
                    if (addServiceFilter !== '') {
                        addServiceFilter += ' OR ';
                    } else {
                        addServiceFilter += '(';
                    }
                    addServiceFilter += "serviceFilter.serviceFilter = '" + this.selectedServicesOptions[filter] + "'";
                }
                if (this.filterText !== '' && addServiceFilter !== '') {
                    this.filterText += ' AND ';
                }
                if (addServiceFilter !== '') {
                    this.filterText += addServiceFilter + ')';
                }

                let addTypeFilter = '';
                for (let filter = 0; filter < this.selectedTypeOptions.length; filter++) {
                    if (addTypeFilter !== '') {
                        addTypeFilter += ' OR ';
                    } else {
                        addTypeFilter += '(';
                    }
                    addTypeFilter += "typeFilter.TypeFilter = '" + this.selectedTypeOptions[filter] + "'";
                }
                if (this.filterText !== '' && addTypeFilter !== '') {
                    this.filterText += ' AND ';
                }
                if (addTypeFilter !== '') {
                    this.filterText += addTypeFilter + ')';
                }

                if (this.dateFilterOption.start_date && this.dateFilterOption.end_date && this.dateFilterOption.start_date !== '' && this.dateFilterOption.end_date !== '') {
                    if (this.filterText !== '') {
                        this.filterText += ' AND ';
                    }
                    this.filterText += '(date >= ' + this.dateFilterOption.start_date + ' AND ' + 'date <= ' + this.dateFilterOption.end_date + ')';
                }
                if (returnWithoutSearch) {
                    return;
                }

                this.performSearch();
            },

            applyFilters() {
                this.selectedIndustryOptions = [];
                this.selectedServicesOptions = [];
                this.selectedTypeOptions = [];

                this.selectedIndustryOptions = Object.keys(this.industryFilterOption)
                    .filter((key) => this.industryFilterOption[key] === true)
                    .reduce((obj, key, index) => {
                        obj.push(key.replaceAll('_', ' ').toLowerCase());
                        return obj;
                    }, []);

                this.selectedServicesOptions = Object.keys(this.servicesFilterOption)
                    .filter((key) => this.servicesFilterOption[key] === true)
                    .reduce((obj, key, index) => {
                        obj.push(key.replaceAll('_', ' ').toLowerCase());
                        return obj;
                    }, []);

                this.selectedTypeOptions = Object.keys(this.typeFilterOption)
                    .filter((key) => this.typeFilterOption[key] === true)
                    .reduce((obj, key, index) => {
                        obj.push(key.replaceAll('_', ' ').toLowerCase());
                        return obj;
                    }, []);

                const regionFilter = Object.keys(this.regionFilterOption)
                    .filter((key) => this.regionFilterOption[key] === true)
                    .reduce((obj, key, index) => {
                        obj.push(key.replaceAll('_', ' '));
                        return obj;
                    }, []);

                let dateFilter = [];
                if (this.dateFilterOption.start_date && this.dateFilterOption.end_date && this.dateFilterOption.start_date !== '' && this.dateFilterOption.end_date !== '') {
                    dateFilter = [{ id: 'date', start_date: this.dateFilterOption.start_date, end_date: this.dateFilterOption.end_date, label: this.dateFilterOption.start_date + ' - ' + this.dateFilterOption.end_date }];
                }
                this.appliedFilters = [...this.selectedIndustryOptions, ...this.selectedServicesOptions, ...this.selectedTypeOptions, ...regionFilter, ...dateFilter];
                this.generateFiltersAndSearch();
            },

            removeFilter(filter) {
                this.appliedFilters = this.appliedFilters.filter((item) => item !== filter.toLowerCase());
                this.selectedIndustryOptions = this.selectedIndustryOptions.filter((item) => item !== filter.toLowerCase());
                this.industryFilterOption[filter] = false;
                this.selectedServicesOptions = this.selectedServicesOptions.filter((item) => item !== filter.toLowerCase());
                this.servicesFilterOption[filter] = false;
                this.selectedTypeOptions = this.selectedTypeOptions.filter((item) => item !== filter.toLowerCase());
                this.typeFilterOption[filter] = false;
                this.regionFilterOption[filter] = false;

                if (filter.id === 'date') {
                    this.dateFilterOption.start_date = '';
                    this.dateFilterOption.end_date = '';
                }
                this.generateFiltersAndSearch();
            },

            removeAllFilter() {
                this.appliedFilters = [];
                this.selectedIndustryOptions = [];
                this.industryFilterOption = {};
                this.selectedServicesOptions = [];
                this.servicesFilterOption = {};
                this.selectedTypeOptions = [];
                this.typeFilterOption = {};
                this.regionFilterOption = {};
                this.dateFilterOption.start_date = '';
                this.dateFilterOption.end_date = '';
                this.generateFiltersAndSearch();
            },
        },
    };
</script>

<style scoped>
    .slide-fade-leave-active,
    .slide-fade-enter-active {
        transition: opacity 0.3s;
    }

    .slide-fade-enter {
        opacity: 0;
    }

    .slide-fade-leave-to {
        opacity: 0;
    }
</style>
