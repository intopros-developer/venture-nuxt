<template>
    <section class="pb-10 md:pb-28">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="text-left">
                <h2 class="mb-8 inline-block border-b-[5px] border-primary pb-2 text-[22px] font-bold leading-[27px] text-black xl:border-b-8 xl:text-[31px] xl:leading-[60px]">
                    {{ $t('thanks_for_your_interest') }} <span class="text-primary">{{ $t('select_the_service_you_need_help_with') }}</span>
                </h2>
            </div>
            <div class="mb-10 space-y-5 text-sm font-medium leading-6 -tracking-[0.03px] text-black-700 md:mb-[100px] xl:text-xl xl:leading-9 xl:-tracking-[0.04px]">
                <p>
                    {{ servicesPara }}
                </p>
            </div>
            <div class="flex flex-col gap-5 md:flex-row lg:gap-16 xl:gap-[100px]">
                <div class="mx-auto w-full max-w-[332px] flex-none xl:max-w-[462px]">
                    <div class="mb-10 shadow-[0px_1px_8px_rgba(0,0,0,0.1)] md:mb-[63px]">
                        <multiselect
                            ref="serviceMultiSelect"
                            v-model="params.search"
                            :max-height="412"
                            :option-height="58"
                            :options="servicesList"
                            :show-no-results="false"
                            :close-on-select="true"
                            :show-labels="false"
                            placeholder="Search"
                            class="custom-multiselect option-position-reletive w-full bg-white text-xs leading-[15px] text-[#586376] focus:outline-none xl:text-[17px] xl:leading-[21px]"
                            @search-change="searchChange"
                        >
                            <template slot="caret">
                                <button type="submit" class="pointer-events-none absolute right-0 top-0 mt-5 mr-4 xl:mt-7">
                                    <icons-search class="h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4" />
                                </button>
                            </template>
                            <template slot="clear">
                                <button v-if="isClearSearch" type="button" class="absolute right-0 top-0 mt-5 mr-11 xl:mt-7" @click.stop="params.search = servicesList[0]">
                                    <icons-close-time class="h-3 w-3 fill-current text-black xl:h-4 xl:w-4" />
                                </button>
                            </template>
                        </multiselect>
                    </div>

                    <nuxt-link to="book-consult" class="b-btn">{{ $t('book_a_consultation') }}</nuxt-link>
                </div>
                <div v-if="serviceDescription" class="float-1">
                    <div class="mb-[34px] w-full bg-black/10 shadow-[0_3px_6px_rgba(0,0,0,0.75)] xl:h-[474px]">
                        <nuxt-img
                            v-if="serviceDescription.fields.descriptionMediaType === 'image'"
                            format="webp"
                            :src="`${serviceDescription.fields.descriptionMedia.fields.file.url}`"
                            :alt="serviceDescription.fields.descriptionPara"
                            loading="lazy"
                            class="h-full w-full object-cover"
                        />

                        <div v-else v-html="serviceDescription.fields.videoScript"></div>
                    </div>
                    <p class="text-sm font-light leading-6 text-black xl:text-[23px] xl:leading-[48px]">
                        {{ serviceDescription.fields.descriptionPara }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            servicesList: {
                type: Array,
                default: () => [],
            },

            servicesDetail: {
                type: Array,
                default: () => [],
            },

            servicesPara: {
                type: String,
                default:
                    'We bring a fresh perspective and infectious energy to every client relationship. Our emphasis on teamwork, trust and tolerance for diverging opinions helps clients focus on their opportunities, build their capabilities and win the future. Together, we achieve results that bridge what is with what can be.',
            },
        },

        data() {
            return {
                params: {
                    search: this.servicesList[0],
                },
                isClearSearch: false,
            };
        },

        computed: {
            serviceDescription() {
                return this.servicesDetail.find((service) => service.fields.title === this.params.search);
            },
        },

        methods: {
            searchChange(searchQuery, id) {
                if (!this.$helper.isEmpty(searchQuery)) {
                    this.isClearSearch = true;
                } else {
                    this.isClearSearch = false;
                }
            },
        },
    };
</script>
