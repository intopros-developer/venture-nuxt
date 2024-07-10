<template>
    <section class="contact-heroform relative bg-[url(/images/city-banner.webp)] bg-cover bg-[top_8%_center] bg-no-repeat py-[65px] md:pb-[100px] xl:pt-[150px]">
        <div class="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent"></div>
        <div class="container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4">
            <form id="google-ad-los-form" action="" @submit.prevent="onSubmit">
                <div class="flex flex-col gap-7 md:flex-row xl:gap-20">
                    <div class="flex-1">
                        <div class="mb-10 md:mb-32">
                            <p class="mb-3 border-l-[5px] border-primary pl-3 text-[#fbfbfd]">Venture Plans, your dream starts with us</p>
                            <h2 class="mb-[10px] text-[38px] font-bold leading-[42px] text-white xl:text-[45px] xl:leading-[54px]">Are you looking to raise capital In los ángeles?</h2>
                            <p class="max-w-[377px] font-normal text-[#FBFBFD] xl:text-xl xl:leading-7">Get funding with FINRA and Harvard Accredited Industry Expert Consultants</p>
                        </div>
                        <div class="group relative inline-block w-full text-left sm:w-auto">
                            <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right sm:w-56 xl:w-80">
                                <div role="none">
                                    <div
                                        class="inline-flex w-full flex-1 items-center justify-center rounded-md bg-primary px-[14px] py-[14px] text-center text-[11px] font-normal uppercase leading-[13px] text-white focus:outline-none focus:ring-0 focus:ring-offset-0 group-hover:rounded-b-none sm:w-56 xl:w-80 xl:px-4 xl:py-6 xl:text-[15px] xl:font-semibold xl:leading-[18px]"
                                        :class="{ 'bg-[#f9ecea] text-danger': $v.params.service.$error, '!border-primary !bg-primary !text-white': showService }"
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
                                            class="custom-multiselect default-open-multiselect z-0 w-full max-w-[350px] bg-white py-3 text-xs leading-[15px] text-[#586376] focus:outline-none xl:max-w-[406px] xl:py-[15px] xl:text-sm xl:leading-[21px]"
                                            @select="onSelect"
                                            @search-change="searchChange"
                                        >
                                            <template slot="caret">
                                                <button type="submit" class="pointer-events-none absolute right-0 top-0 mr-4 mt-3 xl:mt-3">
                                                    <icons-search class="h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4" />
                                                </button>
                                            </template>
                                            <template slot="clear">
                                                <button v-if="isClearSearch" type="button" class="absolute right-0 top-0 mr-11 mt-5 xl:mt-7" @click.stop="params.service = ''">
                                                    <icons-close-time class="h-3 w-3 fill-current text-black xl:h-4 xl:w-4" />
                                                </button>
                                            </template>
                                        </multiselect>
                                    </Transition>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full max-w-[390px] flex-none space-y-6 md:mt-28 xl:max-w-[605px] xl:space-y-8">
                        <div class="form-input-group">
                            <input v-model="$v.params.fullName.$model" type="text" placeholder="Full Name" class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]" :class="{ error: $v.params.fullName.$error }" />
                            <!-- <div v-if="$v.params.fullName.$error">
                                    <p v-if="!$v.params.fullName.required">{{ $helper.requiredMessage('Full Name') }}</p>
                                    <p v-else-if="!$v.params.fullName.alphaNumericSpace">{{ $helper.alphaNumSpaceMessage('Full Name') }}</p>
                                </div> -->
                        </div>

                        <div class="form-input-group">
                            <input v-model="$v.params.phone.$model" v-mask="$mask.phoneMask" type="text" placeholder="Phone Number" class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]" :class="{ error: $v.params.phone.$error }" />
                            <!-- <div v-if="$v.params.phone.$error">
                                    <p v-if="!$v.params.phone.required">{{ $helper.requiredMessage('Phone Number') }}</p>
                                </div> -->
                        </div>

                        <div class="form-input-group">
                            <input
                                v-model="$v.params.email.$model"
                                type="text"
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
                            <button type="submit" class="btn w-full px-16 py-4 hover:bg-primary-700 xl:px-20 xl:py-6">SUBMIT</button>
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

        data() {
            return {
                isSubmitted: false,
                serviceSuggestionOptions: [
                    'Commercial Real Estate',
                    'Cannabis Application Support',
                    'Consumer Product & Services',
                    'Clean Tech, Fitness',
                    'Financial Services',
                    'Medical Technology, Biotech, Healthcare',
                    'Education & E - Learningj',
                ],
                isClearSearch: false,
                params: {
                    service: '',
                    fullName: '',
                    email: '',
                    phone: '',
                },
                showService: false,
            };
        },

        computed: {
            searchResult() {
                return !this.$helper.isEmpty(this.params.service) ? this.params.service : 'Select a Service';
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

        validations() {
            return {
                params: {
                    fullName: { required, alphaNumericSpace, minLength: minLength(3) },
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

            onSelect() {
                this.showService = false;
            },

            onSubmit() {
                this.$v.params.$touch();
                if (this.$v.params.$invalid || this.$v.params.$error) {
                    return false;
                }

                this.isSubmitted = true;
                this.$v.params.$reset();
                this.params = {
                    service: '',
                    fullName: '',
                    email: '',
                    phone: '',
                };
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
