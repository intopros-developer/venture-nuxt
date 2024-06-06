<template>
    <section class="contact-heroform hero-ultra-wide-height relative h-[770px] bg-cover bg-[center_top_25%] bg-no-repeat md:h-[730px] xl:h-[835px]" :style="{ backgroundImage: `url(${image})` }">
        <div class="absolute left-0 top-0 z-0 h-full w-[70%] bg-gradient-to-r from-[#2b3746] via-transparent"></div>
        <div class="absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[307px]"></div>
        <div class="container relative content-center px-10 lg:px-[97px] xl:px-4">
            <form id="contact-us-hero-form" action="" @submit.prevent="onSubmit">
                <div class="flex flex-col gap-7 md:flex-row xl:gap-40">
                    <div class="mt-11 flex-1">
                        <p class="mb-[17px] border-l-[5px] border-primary pl-1.5 text-sm font-normal text-[#FBFBFD] md:text-xl md:leading-[17px]">
                            {{ subTitle }}
                        </p>
                        <h1 class="mb-3 max-w-[388px] text-[28px] font-bold uppercase leading-8 text-white md:leading-9 lg:text-4xl">
                            {{ title }}
                        </h1>
                        <p class="w-full text-sm font-normal leading-5 text-[#FBFBFD] sm:max-w-[377px] md:max-w-[420px] md:text-xl md:leading-[26px]">
                            {{ para }}
                        </p>
                    </div>
                    <div class="w-full flex-none space-y-4 md:max-w-[330px] md:space-y-6 xl:max-w-[535px] xl:space-y-9">
                        <div class="form-input-group">
                            <input
                                v-model="$v.params.full_name.$model"
                                type="text"
                                placeholder="Full Name"
                                name="full_name"
                                autocomplete="on"
                                class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                :class="{ error: $v.params.full_name.$error }"
                            />
                            <!-- <div v-if="$v.params.full_name.$error">
                                    <p v-if="!$v.params.full_name.required">{{ $helper.requiredMessage('Full Name') }}</p>
                                    <p v-else-if="!$v.params.full_name.alphaNumericSpace">{{ $helper.alphaNumSpaceMessage('Full Name') }}</p>
                                </div> -->
                        </div>

                        <div class="form-input-group">
                            <input
                                v-model="$v.params.phone.$model"
                                v-mask="$mask.phoneMask"
                                type="text"
                                name="phone"
                                autocomplete="on"
                                placeholder="Phone Number"
                                class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                :class="{ error: $v.params.phone.$error }"
                            />
                            <!-- <div v-if="$v.params.phone.$error">
                                    <p v-if="!$v.params.phone.required">{{ $helper.requiredMessage('Phone Number') }}</p>
                                </div> -->
                        </div>

                        <div class="form-input-group">
                            <input
                                v-model="$v.params.email.$model"
                                type="text"
                                placeholder="Your Email Address"
                                name="email"
                                autocomplete="on"
                                class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                :class="{ error: $v.params.email.$error }"
                                @input="$v.params.email.$model = $event.target.value.trim()"
                            />
                            <!-- <div v-if="$v.params.email.$error">
                                    <p v-if="!$v.params.email.required">{{ $helper.requiredMessage('Email') }}</p>
                                    <p v-else-if="!$v.params.email.email">{{ $helper.emailMessage() }}</p>
                                </div> -->
                        </div>

                        <div v-click-outside="closeSearch" class="group relative text-left">
                            <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right">
                                <div role="none">
                                    <div
                                        class="inline-flex w-full flex-1 items-center rounded-lg border border-white p-[18px] pr-10 text-base font-bold leading-5 text-white duration-200 hover:border-primary hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
                                        :class="{
                                            'border-[#f9ecea] text-danger hover:text-white': $v.params.inquiry_reason.$error,
                                            'rounded-b-none !border-primary bg-primary ': showService,
                                            'border-none bg-primary': searchResult !== 'Reason for inquiry',
                                        }"
                                        @click="openSearch()"
                                    >
                                        {{ searchResult }}
                                        <icons-selection-arrow class="absolute right-[20px]" :class="{ 'rotate-180': showService, 'text-danger': $v.params.inquiry_reason.$error }" />
                                    </div>

                                    <Transition name="slide-fade">
                                        <multiselect
                                            v-show="showService"
                                            ref="multiselect"
                                            v-model="params.inquiry_reason"
                                            :max-height="350"
                                            :option-height="45"
                                            :options="inquiryReasonOptions.map((item) => item.attributes.inquiryReason)"
                                            :show-no-results="false"
                                            :close-on-select="true"
                                            :show-labels="false"
                                            placeholder="Search"
                                            class="custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs leading-[15px] text-[#586376] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]"
                                            @search-change="searchChange"
                                            @select="onSelect"
                                        >
                                            <template slot="caret">
                                                <button type="submit" class="pointer-events-none absolute right-0 top-0 mr-4 mt-4 xl:mt-[18px]">
                                                    <icons-search class="h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4" />
                                                </button>
                                            </template>
                                            <template slot="clear">
                                                <button v-if="isClearSearch" type="button" class="absolute right-0 top-0 mr-11 mt-4 xl:mt-[18px]" @click.stop="params.inquiry_reason = ''">
                                                    <icons-close-time class="h-3 w-3 fill-current text-black xl:h-4 xl:w-4" />
                                                </button>
                                            </template>
                                        </multiselect>
                                    </Transition>
                                </div>
                            </div>
                        </div>
                        <div>
                            <recaptcha id="recaptcha1" ref="recaptcha1" @success="captchaError = false" @error="captchaError = true" />
                            <div v-if="captchaError" class="captcha-error">Please verify reCaptcha.</div>
                        </div>
                        <div class="">
                            <button type="submit" class="btn ml-auto mr-0 !w-auto !max-w-max px-16 py-4 uppercase hover:bg-primary-700 xl:px-20 xl:py-5">{{ $t('submit') }}</button>
                        </div>
                        <div v-if="isSubmitted" class="mt-5 flex justify-center gap-3">
                            <icons-check-circle class="relative top-[2px] h-6 w-6 text-green" />
                            <p class="text-xl font-extrabold leading-[25px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green">
                                <span>{{ $t('congratulations') }}</span> {{ $t('your_form_has_been_submitted') }}
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
    import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
    import ClickOutside from 'vue-click-outside';
    import { alphaNumericSpace } from '~/helper/custom-validations';

    export default {
        directives: {
            ClickOutside,
        },

        props: {
            inquiryReasonOptions: {
                type: Array,
                default: () => [{ attributes: { inquiryReason: "Business Inquiry: I'm looking to buy Venture Plans business services" } }, { attributes: { inquiryReason: 'Other' } }],
            },
            title: {
                type: String,
                default: `Are you looking to raise capital?`,
            },

            subTitle: {
                type: String,
                default: 'Venture Plans, your dream starts with us',
            },
            para: {
                type: String,
                default: 'Get funding with FINRA and Harvard Accredited\nIndustry Expert Consultants',
            },

            image: {
                type: String,
                default: '/images/contact-banner-bg.webp',
            },
        },

        data() {
            return {
                isSubmitted: false,
                captchaError: false,
                isClearSearch: false,
                params: {
                    inquiry_reason: '',
                    full_name: '',
                    email: '',
                    phone: '',
                },
                showService: false,
            };
        },

        head() {
            return {
                link: [
                    {
                        rel: 'preload',
                        href: this.$props.image,
                        as: 'image',
                        fetchpriority: 'high',
                    },
                ],
            };
        },

        computed: {
            searchResult() {
                return !this.$helper.isEmpty(this.params.inquiry_reason) ? this.params.inquiry_reason : 'Reason for inquiry';
            },
        },

        watch: {
            'params.inquiry_reason': {
                handler() {
                    if (this.$helper.isEmpty(this.params.inquiry_reason)) {
                        // this.$refs.multiselect.activate();
                        // this.$refs.multiselect.$el.focus();
                    }
                },
                deep: true,
            },
        },

        validations() {
            return {
                params: {
                    full_name: { required, alphaNumericSpace, minLength: minLength(3) },
                    email: { required, email },
                    phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                    inquiry_reason: { required },
                },
            };
        },

        methods: {
            openSearch() {
                this.showService = !this.showService;

                if (this.showService) {
                    // this.$refs.multiselect.activate();
                    // this.$refs.multiselect.$el.focus();
                }
            },

            closeSearch() {
                this.showService = false;
            },

            searchChange(searchQuery, id) {
                if (!this.$helper.isEmpty(searchQuery)) {
                    this.isClearSearch = true;
                } else {
                    this.isClearSearch = false;
                }
            },

            onSelect() {
                this.showService = false;
            },

            async onSubmit() {
                this.captchaError = false;
                try {
                    const token = this.widgetId ? await this.$recaptcha.getResponse(this.widgetId) : await this.$recaptcha.getResponse();
                    if (!token) {
                        this.captchaError = true;
                    }
                } catch (error) {
                    this.captchaError = true;
                }
                this.$v.params.$touch();
                if (this.$v.params.$invalid || this.$v.params.$error) {
                    return false;
                }
                if (!this.captchaError) {
                    const data = await this.$hubspot.contactUsBannerForm({ ...this.params });
                    if (!data) {
                        return false;
                    }
                    this.isSubmitted = true;
                    this.$v.params.$reset();
                    // this.$recaptcha.reset();
                    this.params = {
                        inquiry_reason: '',
                        full_name: '',
                        email: '',
                        phone: '',
                    };
                }
            },
        },
    };
</script>

<style scoped>
    @media (min-width: 2300px) {
        .hero-ultra-wide-height {
            height: min(100vh, 1200px) !important;
        }
    }

    .content-center {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

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
