<template>
    <section id="readyToTalk" class="bg-primary-700 bg-cover py-10 md:py-16 xl:py-32" v-lazyload-bg="imgUrl">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <form id="ready-to-talk-form" action="" @submit.prevent="onSubmit">
                <div class="grid grid-cols-1 gap-5 lg:grid-cols-2">
                    <div>
                        <p class="mb-[47px] text-[40px] font-bold leading-[50px] -tracking-[0.05px] text-white lg:text-[30px] lg:leading-[38px] xl:-tracking-[0.07px]">
                            {{ title }}
                        </p>
                        <p class="mb-2 text-center text-[19px] font-light leading-[38px] -tracking-[0.04px] text-white/[0.64] md:text-left">
                            {{ talkInTitle }}
                        </p>

                        <div id="dropdown" v-click-outside="closeSearch" class="relative w-full sm:max-w-[342px]">
                            <div
                                class="group relative flex w-full cursor-pointer items-center justify-between rounded-[4px] border-2 border-white bg-transparent px-9 py-[18px] text-[17px] font-semibold text-white transition-all duration-150 hover:!border-primary hover:!bg-primary hover:!text-white lg:py-[25px]"
                                :class="{ 'bg-[#f9ecea] text-danger': $v.params.service.$error, 'rounded-b-none !border-primary !bg-primary !text-white': showService }"
                                @click="openSearch()"
                            >
                                {{ searchResult }}
                                <icons-selection-arrow class="absolute right-[20px] group-hover:!text-white" :class="{ 'rotate-180': showService, 'text-danger': $v.params.service.$error }" />
                            </div>

                            <Transition name="slide-fade">
                                <multiselect
                                    v-show="showService"
                                    ref="multiselect"
                                    v-model="params.service"
                                    :max-height="348"
                                    :option-height="58"
                                    :options="serviceOptions ? serviceOptions.map((item) => item.attributes.serviceName) : []"
                                    :show-no-results="false"
                                    :close-on-select="true"
                                    :show-labels="false"
                                    open-direction=""
                                    :placeholder="$t('search')"
                                    class="custom-multiselect default-open-multiselect !absolute w-full bg-white py-5 text-[13px] leading-[15px] text-[#586376] focus:outline-none sm:max-w-[342px]"
                                    @select="onSelect"
                                    @search-change="searchChange"
                                >
                                    <template slot="caret">
                                        <button type="submit" class="pointer-events-none absolute right-0 top-1/2 mr-4 -translate-y-1/2">
                                            <icons-search class="h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4" />
                                        </button>
                                    </template>
                                    <template slot="clear">
                                        <button v-if="isClearSearch" type="button" class="absolute right-0 top-1/2 mr-10 -translate-y-1/2" @click.stop="params.service = ''">
                                            <icons-close-search class="h-3 w-3 fill-current text-black xl:h-4 xl:w-4" />
                                        </button>
                                    </template>
                                </multiselect>
                            </Transition>
                        </div>
                    </div>
                    <div>
                        <div class="ml-auto xl:mr-[60px] xl:max-w-[410px]">
                            <p class="mb-10 text-center text-base font-light italic leading-[25px] -tracking-[0.03px] text-white/[0.64] md:text-left xl:text-[21px] xl:leading-[34px] xl:-tracking-[0.05px]">
                                {{ aboutParagraph }}
                            </p>
                            <div class="space-y-[15px]">
                                <div class="form-input-group">
                                    <input
                                        v-model="$v.params.fullname.$model"
                                        name="full_name"
                                        autocomplete="on"
                                        type="text"
                                        :placeholder="$t('full_name')"
                                        class="form-input h-[50px] shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.params.fullname.$error }"
                                    />
                                </div>

                                <div class="form-input-group">
                                    <input
                                        v-model="$v.params.phone.$model"
                                        v-mask="$mask.phoneMask"
                                        name="phone"
                                        autocomplete="on"
                                        type="text"
                                        :placeholder="$t('phone_number')"
                                        class="form-input h-[50px] shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.params.phone.$error }"
                                    />
                                </div>

                                <div class="form-input-group">
                                    <input
                                        v-model="$v.params.email.$model"
                                        type="text"
                                        :placeholder="$t('your_email_address')"
                                        name="email"
                                        autocomplete="on"
                                        class="form-input h-[50px] shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.params.email.$error }"
                                        @input="$v.params.email.$model = $event.target.value.trim()"
                                    />
                                </div>
                                <div>
                                    <recaptcha id="recaptcha1" ref="recaptcha1" @success="captchaError = false" @error="captchaError = true" />
                                    <div v-if="captchaError" class="captcha-error">Please verify reCaptcha.</div>
                                </div>
                                <button :disabled="isSubmitting" type="submit" class="outline-btn w-full border border-white/60 py-3 text-center text-[17px] font-semibold -tracking-[0.03px] xl:py-[7px]">{{ $t('submit') }}</button>
                                <div v-if="isSubmitted" class="mt-5 flex justify-center gap-3">
                                    <icons-check-circle class="relative top-[2px] !h-6 !w-6 text-green" />
                                    <p class="text-xl font-extrabold leading-[30px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green" v-html="$t('span_congratulations_span_your_form_has_been_submitted')"></p>
                                </div>
                            </div>
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
            title: {
                type: String,
                default: 'Ready To Talk?',
            },
            talkInTitle: {
                type: String,
                default: 'I want to talk to your experts in:',
            },
            aboutParagraph: {
                type: String,
                default: 'Experienced in capital markets, a client-first culture, and potent track-record',
            },
            imgUrl: {
                type: String,
                default: '/images/bg-banner.webp',
            },
            serviceOptions: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            serviceName: 'Managment Consultant',
                        },
                    },
                    {
                        id: 2,
                        attributes: {
                            serviceName: 'Restructing Operations',
                        },
                    },
                ],
            },
        },

        data() {
            return {
                isSubmitted: false,
                isClearSearch: false,
                params: {
                    service: '',
                    fullname: '',
                    email: '',
                    phone: '',
                },
                showService: false,
                captchaError: false,
                widgetId: null,
                isSubmitting: false,
                bgColor: '#444',
            };
        },

        computed: {
            searchResult() {
                return !this.$helper.isEmpty(this.params.service) ? this.params.service : this.$route.path.includes('careers') ? 'Select a Division' : 'Select a Service';
            },
        },

        watch: {
            'params.service': {
                handler() {
                    if (this.$helper.isEmpty(this.params.service)) {
                        this.$refs.multiselect.activate();
                        this.$refs.multiselect.$el.focus();
                    }
                },
                deep: true,
            },
        },

        async mounted() {
            try {
                await this.$recaptcha.reset();
                const id = await this.$recaptcha?.render('recaptcha1', {
                    sitekey: '6LckFPUaAAAAABvoKl9AOVILIzozGu2HjHV5U6mK',
                });
                this.widgetId = id;
            } catch (e) {}
        },

        validations() {
            return {
                params: {
                    fullname: { required, alphaNumericSpace, minLength: minLength(3) },
                    email: { required, email },
                    phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                    service: { required },
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

            searchChange(searchQuery, id) {
                if (!this.$helper.isEmpty(searchQuery)) {
                    this.isClearSearch = true;
                } else {
                    this.isClearSearch = false;
                }
            },

            closeSearch() {
                this.showService = false;
            },

            onSelect() {
                this.showService = false;
            },

            async onSubmit() {
                try {
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
                        if (window.innerWidth < 768) {
                            setTimeout(() => {
                                this.$nextTick(() => {
                                    // window.scrollTo({ top: 0, behavior: 'smooth' })
                                    let domRect = document.querySelector('.error');
                                    if (domRect !== null) {
                                        domRect = document.querySelector('.error').getBoundingClientRect();
                                        window.scrollTo({ top: domRect.top + document.documentElement.scrollTop - 140, behavior: 'smooth' });
                                    }
                                });
                            }, 500);
                        }
                        return false;
                    }

                    if (!this.captchaError) {
                        this.isSubmitting = true;
                        const data = await this.$hubspot.readyToTalkForm(this.params);
                        if (!data) {
                            return false;
                        }
                        this.isSubmitted = true;
                        this.isSubmitting = false;
                        this.$v.params.$reset();
                        this.params = {
                            service: '',
                            fullname: '',
                            email: '',
                            phone: '',
                        };
                        this.widgetId ? await this.$recaptcha.reset(this.widgetId) : await this.$recaptcha.reset();
                    }
                } catch (error) {
                    this.isSubmitting = false;
                }
            },
        },
    };
</script>

<style>
    .slide-fade-leave-active,
    .slide-fade-enter-active {
        transition: opacity 0.3s;
    }

    .slide-fade-leave-to {
        opacity: 0;
    }

    .custom-multiselect .multiselect__option {
        white-space: normal;
    }
</style>
