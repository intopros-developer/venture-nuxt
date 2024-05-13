<template>
    <section class="contact-heroform relative h-[700px] bg-[url(/assets/img/software_google_ad_banner.webp)] bg-cover bg-[top_8%_center] bg-no-repeat py-[48px] md:h-[730px] md:py-[97px] xl:py-[100px]">
        <div style="background: black; opacity: 35%" class="absolute top-0 left-0 z-0 h-full w-full"></div>

        <div class="container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4">
            <form id="google-ad-form" action="" @submit.prevent="onSubmit">
                <div class="flex flex-col gap-7 md:flex-row md:items-center xl:gap-[140px]">
                    <div class="md:flex-1">
                        <div class="mb-10 md:mb-[122px]">
                            <p class="mb-2 text-[13px] font-normal leading-4 text-[#FBFBFD] xl:mb-0 xl:text-xl xl:leading-10">Venture Plans, your dream starts with us</p>
                            <h2 class="mb-5 text-2xl font-bold uppercase leading-[30px] text-[#F7F4F4] xl:text-[32px] xl:leading-[50px]">{{ getHeading }}</h2>
                            <p class="max-w-[600px] border-l-[3px] border-primary pl-3 text-[13px] font-normal leading-4 text-[#FBFBFD] xl:text-xl xl:leading-10">{{ getSubHeading }}</p>
                        </div>
                        <div v-click-outside="closeSearch" class="group relative inline-block w-full text-left md:w-auto">
                            <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.16] w-full origin-top-right md:w-56 xl:w-80">
                                <div role="none">
                                    <div
                                        class="inline-flex w-full flex-1 items-center rounded-lg border border-white p-[18px] pr-10 text-base font-bold leading-5 text-white duration-200 hover:border-primary hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-offset-0"
                                        :class="{
                                            'bg-[#f9ecea] text-danger': $v.params.service.$error,
                                            'rounded-br-none rounded-bl-none !border-primary !bg-primary !text-white': showService,
                                            'border-none bg-primary': searchResult !== 'Select a Service',
                                        }"
                                        @click="openSearch()"
                                    >
                                        {{ searchResult }}
                                        <icons-selection-arrow class="absolute right-[20px]" :class="{ 'rotate-180': showService, 'text-danger': $v.params.service.$error }" />
                                    </div>

                                    <Transition name="slide-fade">
                                        <multiselect
                                            v-show="showService"
                                            ref="multiselect"
                                            v-model="params.service"
                                            :max-height="358"
                                            :option-height="45"
                                            :options="serviceSuggestionOptions"
                                            :show-no-results="false"
                                            :close-on-select="true"
                                            :show-labels="false"
                                            placeholder="Search"
                                            class="custom-multiselect default-open-multiselect absolute z-30 w-full bg-white py-3 text-xs leading-[15px] text-[#586376] focus:outline-none md:max-w-[350px] xl:max-w-[406px] xl:py-[15px] xl:text-sm xl:leading-[21px]"
                                            @select="onSelect"
                                            @search-change="searchChange"
                                        >
                                            <template slot="caret">
                                                <button type="submit" class="pointer-events-none absolute right-0 top-0 mt-3 mr-4 xl:mt-3">
                                                    <icons-search class="h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4" />
                                                </button>
                                            </template>
                                            <template slot="clear">
                                                <button v-if="isClearSearch" type="button" class="absolute right-0 top-0 mt-3 mr-11 xl:mt-3" @click.stop="params.service = ''">
                                                    <icons-close-time class="h-3 w-3 fill-current text-black xl:h-4 xl:w-4" />
                                                </button>
                                            </template>
                                        </multiselect>
                                    </Transition>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2.5 w-full flex-none space-y-6 md:max-w-[390px] xl:max-w-[605px] xl:space-y-8">
                        <div class="form-input-group">
                            <input
                                v-model="$v.params.fullname.$model"
                                name="full_name"
                                autocomplete="on"
                                type="text"
                                placeholder="Full Name"
                                class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                :class="{ error: $v.params.fullname.$error }"
                            />
                            <!-- <div v-if="$v.params.fullname.$error">
                                    <p v-if="!$v.params.fullname.required">{{ $helper.requiredMessage('Full Name') }}</p>
                                    <p v-else-if="!$v.params.fullname.alphaNumericSpace">{{ $helper.alphaNumSpaceMessage('Full Name') }}</p>
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
                                name="email"
                                autocomplete="on"
                                placeholder="Your Email Address"
                                class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                :class="{ error: $v.params.email.$error }"
                                @input="$v.params.email.$model = $event.target.value.trim()"
                            />
                            <!-- <div v-if="$v.params.email.$error">
                                    <p v-if="!$v.params.email.required">{{ $helper.requiredMessage('Email') }}</p>
                                    <p v-else-if="!$v.params.email.email">{{ $helper.emailMessage() }}</p>
                                </div> -->
                        </div>

                        <div class="">
                            <button type="submit" class="btn w-full py-4 px-16 hover:bg-primary-700 md:py-[16px] xl:px-20">SUBMIT</button>
                        </div>
                        <div v-if="isSubmitted" class="mt-5 flex justify-center gap-3">
                            <icons-check-circle class="relative top-[2px] h-6 w-6 text-green" />
                            <p class="text-xl font-extrabold leading-[25px] text-white"><span class="border-b-[2px] border-green text-green">Congratulations,</span> your form has been submitted.</p>
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
            services: {
                type: Array,
                default: () => {
                    return [];
                },
            },
            mainText: {
                type: String,
                default: () => {
                    return '';
                },
            },
            subText: {
                type: String,
                default: () => {
                    return '';
                },
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
            };
        },

        computed: {
            serviceSuggestionOptions() {
                return this.services.map((dat) => {
                    return dat.serviceName;
                });
            },
            searchResult() {
                return !this.$helper.isEmpty(this.params.service) ? this.params.service : 'Select a Service';
            },
            getHeading() {
                return this.$props.mainText ? this.$props.mainText : 'Build your software with venture plans';
            },
            getSubHeading() {
                return this.$props.subText ? this.$props.subText : 'Get funding with FINRA and Harvard Accredited Industry Experts';
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
        mounted() {
            console.log(this.services);
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
                try {
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

                    try {
                        const token = this.widgetId ? await this.$recaptcha.getResponse(this.widgetId) : await this.$recaptcha.getResponse();
                    } catch (error) {}

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
    .custom-multiselect.multiselect {
        position: absolute !important;
    }
</style>
