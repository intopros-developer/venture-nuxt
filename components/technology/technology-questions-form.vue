<template>
    <section class="py-10 md:py-16 xl:pb-14 xl:pt-[114px]">
        <div id="question-box" class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-10 lg:gap-20 xl:gap-[98px]">
                <div class="w-full flex-none space-y-4 md:max-w-[330px] md:space-y-6 xl:max-w-[535px] xl:space-y-9">
                    <h5 class="text-2xl font-bold">Your trusted partner in navigating through uncertain times. Let's accelerate your growth.</h5>
                    <p>Fill out our contact form so one of our human resource representatives can get in touch with you for an interview.</p>
                    <p>What is your full name, email, and phone number?</p>
                    <div class="form-input-group">
                        <input v-model="$v.params.full_name.$model" type="text" placeholder="Full Name" class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]" :class="{ error: $v.params.full_name.$error }" />
                        <!-- <div v-if="$v.params.full_name.$error">
                                    <p v-if="!$v.params.full_name.required">{{ $helper.requiredMessage('Full Name') }}</p>
                                    <p v-else-if="!$v.params.full_name.alphaNumericSpace">{{ $helper.alphaNumSpaceMessage('Full Name') }}</p>
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
                    <div>
                        <div class="h-16 !overflow-hidden lg:h-auto">
                            <recaptcha @success="captchaError = false" @error="captchaError = true" />
                        </div>
                        <div v-if="captchaError" class="captcha-error">Please verify reCaptcha.</div>
                    </div>
                    <div class="">
                        <button type="submit" class="btn ml-auto mr-0 !w-auto !max-w-max px-16 py-4 uppercase hover:bg-primary-700 xl:px-20 xl:py-5">{{ $t('book_a_consultation') }}</button>
                    </div>
                    <div v-if="isSubmitted" class="mt-5 flex justify-center gap-3">
                        <icons-check-circle class="relative top-[2px] h-6 w-6 text-green" />
                        <p class="text-xl font-extrabold leading-[25px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green">
                            <span>{{ $t('congratulations') }}</span> {{ $t('your_form_has_been_submitted') }}
                        </p>
                    </div>
                </div>

                <div class="order-1 h-[236px] w-full flex-none overflow-hidden rounded-2xl bg-transparent md:order-2 md:w-[323px] xl:h-[364px] xl:w-[497px]">
                    <img :src="image" class="h-full w-full object-cover" alt="Form Question" loading="lazy" />
                </div>
            </div>
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
            image: String,
        },

        data() {
            return {};
        },

        computed: {},

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
                this.$v.params.$touch();
                if (this.$v.params.$invalid || this.$v.params.$error) {
                    return false;
                }
                // try {
                //     const token = await this.$recaptcha.getResponse();
                // } catch (error) {}

                const data = await this.$hubspot.contactUsBannerForm({ ...this.params });
                if (!data) {
                    return false;
                }

                if (!this.captchaError) {
                    this.isSubmitted = true;
                    this.$v.params.$reset();
                    // this.$recaptcha.reset();
                    this.params = {
                        inquiry_reason: '',
                        full_name: '',
                        email: '',
                        phone: '',
                    };

                    this.isSubmitted = true;
                }
            },
        },
    };
</script>
