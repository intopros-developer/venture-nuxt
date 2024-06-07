<template>
    <section class="overflow-hidden bg-[url(/images/bg-mobile.webp)] bg-cover pb-8 pt-96 md:bg-[url(/images/que-9.webp)] md:py-20">
        <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
                <div class="relative z-[1] flex flex-col justify-center xl:pl-10 xl:pt-5">
                    <span class="absolute -inset-5 -z-[1] m-auto bg-black/30 blur-2xl"></span>
                    <h2 class="mb-3.5 max-w-full text-center text-xl font-bold uppercase text-white md:max-w-[455px] md:text-left md:text-2xl lg:text-3xl">{{ $props.tellUsMoreTitle }}</h2>
                    <ul class="mb-10 grid grid-cols-3 gap-2 text-white md:mb-[65px] md:gap-5">
                        <li class="text-3xl font-bold md:text-5xl md:leading-[55px] xl:text-6xl">
                            {{ $props.firstProofValue }} <span class="block text-base font-normal xl:text-xl">{{ $props.firstProofTitle }}</span>
                        </li>
                        <li class="text-3xl font-bold md:text-5xl xl:text-6xl">
                            {{ $props.secondProofValue }} <span class="block text-base font-normal xl:text-xl">{{ $props.secondProofTitle }}</span>
                        </li>
                        <li class="text-3xl font-bold md:text-5xl xl:text-6xl">
                            {{ $props.thirdProofValue }} <span class="block text-base font-normal xl:text-xl">{{ $props.thirdProofTitle }}</span>
                        </li>
                    </ul>
                    <div class="mt-[55px] pb-6 md:mb-5">
                        <p class="mb-5 text-[15px] leading-[47px] text-[#f7f4f4]">As seen on</p>
                        <div class="flex items-center gap-2">
                            <div
                                v-for="(company, i) in featuredCompanies"
                                :key="i"
                                class="xs:h-[50px] xs:w-[50px] flex h-[46px] w-[46px] flex-row items-center justify-center rounded-full bg-white p-1 px-2 shadow-[0px_1px_8px_rgba(0,0,0,0.2)] sm:h-[57px] sm:w-[57px] md:h-[65px] md:w-[65px] xl:h-[75px] xl:w-[75px]"
                            >
                                <img :src="company.attributes.iconUrl" class="shrink-0" :alt="'Company_' + i" loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative z-[1] mt-12 rounded-xl bg-white bg-opacity-20 p-4 shadow-[0_1px_8px_rgba(0,0,0,0.12)] md:mt-0 md:p-7 md:shadow-none xl:p-14">
                    <form id="google-ad-project-form" action="" class="space-y-4" @submit.prevent="onSubmit">
                        <div class="items-center gap-4 space-y-4 md:flex md:space-y-0">
                            <div class="grow">
                                <input v-model="$v.params.first_name.$model" type="text" :placeholder="$t('first_name')" class="form-input" :class="{ error: $v.params.first_name.$error }" />
                            </div>
                            <div class="grow">
                                <input v-model="$v.params.last_name.$model" type="text" :placeholder="$t('last_name')" class="form-input" :class="{ error: $v.params.last_name.$error }" />
                            </div>
                        </div>
                        <div>
                            <input v-model="$v.params.phone.$model" v-mask="$mask.phoneMask" type="text" :placeholder="$t('phone_number')" class="form-input" :class="{ error: $v.params.phone.$error }" />
                        </div>
                        <div>
                            <input
                                v-model="$v.params.email.$model"
                                type="email"
                                :placeholder="$t('your_email_address')"
                                class="form-input"
                                :class="{ error: $v.params.email.$error }"
                                @input="$v.params.email.$model = $event.target.value.trim()"
                            />
                        </div>
                        <div class="form-input-group">
                            <input v-model="$v.params.country.$model" type="text" placeholder="Country" class="form-input bg-white" :class="{ error: $v.params.country.$error }" />
                        </div>
                        <div>
                            <input v-model="$v.params.company.$model" type="text" :placeholder="$t('company')" class="form-input" :class="{ error: $v.params.company.$error }" />
                        </div>
                        <div class="form-input-group">
                            <select
                                v-model="$v.params.service.$model"
                                class="form-select w-full max-w-full rounded-[10px] bg-white bg-[url(/images/selection-arrow-dark.svg)] p-4 text-sm text-black"
                                :class="{ error: $v.params.service.$error, 'text-[#A5A5A5]': params.service === '' }"
                            >
                                <option value="" disabled class="text-[#A5A5A5]">Select Service</option>
                                <option v-for="(service, index) in serviceOptions" :key="'service_' + index" :value="service" class="text-black">{{ service }}</option>
                            </select>
                        </div>
                        <div>
                            <textarea v-model="$v.params.project_description.$model" type="text" :placeholder="$t('project_description')" class="form-input" rows="3" :class="{ error: $v.params.project_description.$error }"></textarea>
                        </div>
                        <div>
                            <label class="inline-flex items-center">
                                <input
                                    v-model="$v.params.send_nda.$model"
                                    type="checkbox"
                                    class="form-checkbox h-[25px] w-[25px] rounded-md border border-[#807d7d] text-primary !outline-none focus:!ring-0 focus:ring-transparent focus:ring-offset-0"
                                    :class="{ error: $v.params.send_nda.$error }"
                                />
                                <span class="ml-2 text-sm font-bold text-white">{{ $t('send_nda') }}</span>
                            </label>
                        </div>
                        <!-- <div class="flex items-center gap-2 text-sm font-medium text-[#b4b4b4]">
                            <input id="send_nda" type="checkbox" name="send_nda" class="form-checkbox" />
                            <label for="send_nda">Send NDA</label>
                        </div> -->
                        <div v-show="params.send_nda" class="ml-auto text-sm">
                            <button aria-label="Attach file (pdf, office file)" class="flex w-fit items-center gap-1.5 text-white hover:font-bold" :class="{ '!text-primary': params.file }" @click="$refs.file.click()">
                                <icons-attach /> Attach file (pdf, office file)
                            </button>
                            <input ref="file" type="file" style="display: none" accept="application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document" @change="onFileChange" />
                        </div>
                        <!-- <div>
                            <recaptcha :data-tabindex="3" @success="captchaError = false" @error="captchaError = true" />
                            <div v-if="captchaError" class="captcha-error">Please verify reCaptcha.</div>
                        </div> -->

                        <div>
                            <button :disabled="isSubmitting" type="submit" class="b-btn block w-full max-w-none py-5 text-lg normal-case">{{ $t('schedule_a_consultation') }}</button>
                        </div>
                        <div v-if="isSubmitted" class="mt-5 flex justify-center gap-3">
                            <icons-check-circle class="relative top-[2px] !h-6 !w-6 text-green" />
                            <p class="text-xl font-extrabold leading-[30px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green" v-html="$t('span_congratulations_span_your_form_has_been_submitted')"></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
    import { alphaNumericSpace } from '~/helper/custom-validations';
    export default {
        props: {
            tellUsMoreTitle: {
                type: String,
                default: () => {
                    return 'TELL US MORE ABOUT YOUR PROJECT';
                },
            },
            firstProofTitle: {
                type: String,
                default: () => {
                    return 'Years in operation';
                },
            },
            secondProofTitle: {
                type: String,
                default: () => {
                    return 'Projects done';
                },
            },
            thirdProofTitle: {
                type: String,
                default: () => {
                    return 'Offices';
                },
            },
            firstProofValue: {
                type: String,
                default: () => {
                    return '15+';
                },
            },
            secondProofValue: {
                type: String,
                default: () => {
                    return '750+';
                },
            },
            thirdProofValue: {
                type: String,
                default: () => {
                    return '6';
                },
            },
            featuredCompanies: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            iconUrl: '/images/placement-logo-3.webp',
                        },
                    },
                ],
            },
        },
        data() {
            return {
                isSubmitted: false,
                captchaError: false,
                isSubmitting: false,
                serviceOptions: ['Business Consulting', 'Financing', 'Automation and Didital transformation', 'Agile Development', 'Research & Data Analysis', 'Who we are', 'Talk to us'],
                params: {
                    first_name: '',
                    last_name: '',
                    phone: '',
                    email: '',
                    company: '',
                    country: '',
                    project_description: '',
                    send_nda: false,
                    file: null,
                    service: '',
                },
            };
        },

        validations() {
            return {
                params: {
                    first_name: { required, alphaNumericSpace, minLength: minLength(3) },
                    last_name: { required, alphaNumericSpace, minLength: minLength(3) },
                    phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                    email: { required, email },
                    service: { required },
                    country: { required, alphaNumericSpace },
                    company: { required, alphaNumericSpace, minLength: minLength(3) },
                    project_description: { required, minLength: minLength(3) },
                    send_nda: { required: false, default: false },
                },
            };
        },

        methods: {
            onFileChange(event) {
                const file = event.target.files[0];
                const fileType = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                if (!file.type || !fileType.includes(file.type.toLowerCase().trim())) {
                    this.$toast.error('Please upload a valid file.');
                    return false;
                }

                if (file.size > 10485760) {
                    this.$toast.error('File size should be less than 10MB.');
                    return false;
                }
                this.params.file = file;
            },

            onSubmit() {
                this.$v.params.$touch();
                if (this.$v.params.$invalid || this.$v.params.$error) {
                    return false;
                }

                // const data = await this.$hubspot.readyToTalkForm(this.params);
                // if (!data) {
                //     return false;
                // }

                this.isSubmitted = true;
                this.$v.params.$reset();
                this.params = {
                    first_name: '',
                    last_name: '',
                    phone: '',
                    email: '',
                    company: '',
                    country: '',
                    project_description: '',
                    send_nda: false,
                    file: null,
                    service: '',
                };
            },

            async onSubmit() {
                try {
                    this.$v.params.$touch();
                    if (this.$v.params.$invalid || this.$v.params.$error) {
                        return false;
                    }

                    try {
                        // const token = await this.$recaptcha.getResponse();
                        this.isSubmitting = true;
                        const data = await this.$hubspot.tellUsMoreAboutYourProjectForm({ ...this.params });
                        if (!data) {
                            return false;
                        }
                    } catch (error) {}

                    if (!this.captchaError) {
                        this.isSubmitted = true;
                        this.isSubmitting = false;
                        this.$v.params.$reset();
                        // this.$recaptcha.reset();
                        this.params = {
                            first_name: '',
                            last_name: '',
                            phone: '',
                            email: '',
                            company: '',
                            country: '',
                            project_description: '',
                            send_nda: false,
                            file: null,
                            service: '',
                        };
                    }
                } catch (error) {
                    this.isSubmitting = false;
                }
            },
        },
    };
</script>
