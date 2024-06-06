<template>
    <div class="bg-cover bg-[32%_top] bg-no-repeat pb-[72px] pt-[112px] lg:bg-[center_top_25%]" :style="{ backgroundColor: bgColor, backgroundImage: `url${imageUrl}` }">
        <div class="container lg:px-[97px] xl:px-4">
            <div class="items-start justify-between gap-5 lg:flex xl:gap-[107px]">
                <div class="relative">
                    <div class="absolute -inset-5 m-auto h-full w-full bg-black/30 blur-2xl"></div>
                    <div v-if="tellUsMoreData.length" class="relative z-[1]">
                        <h3
                            class="pt-6 text-xl font-bold uppercase leading-[32px] text-[#f7f4f4] sm:text-[36px] sm:leading-[52px] lg:pt-0 [&>span]:border-b-[5px] [&>span]:border-primary [&>br]:hidden md:[&>br]:block"
                            v-html="tellUsMoreTitle"
                        ></h3>
                        <p class="text-white">{{ tellUseMoreSubtitle }}</p>
                        <ul class="mb-6 flex flex-wrap items-start gap-y-3 pt-8 text-white sm:gap-5 md:mb-[55px] lg:grid lg:grid-cols-2 xl:flex">
                            <template v-if="tellUsMoreData.slice(0, -3).length">
                                <li v-for="content in tellUsMoreData.slice(0, -3)" :key="content.attributes.sectionName" class="w-1/2 grow text-3xl font-bold sm:w-auto md:text-[40px] md:leading-[55px]">
                                    {{ content.attributes.sectionDescription }} <span class="block text-base font-normal">{{ content.attributes.sectionName }}</span>
                                </li>
                            </template>
                        </ul>
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                            <div v-if="tellUsMoreData[tellUsMoreData.length - 3]" class="text-white">
                                <h3 class="text-[40px] font-bold leading-[31px]">{{ tellUsMoreData[tellUsMoreData.length - 3].attributes.sectionName }}</h3>
                                <p class="mt-4">{{ tellUsMoreData[tellUsMoreData.length - 3].attributes.sectionDescription }}</p>
                            </div>
                            <div v-if="tellUsMoreData[tellUsMoreData.length - 2]" class="text-white">
                                <h3 class="text-[40px] font-bold leading-[31px]">{{ tellUsMoreData[tellUsMoreData.length - 2].attributes.sectionName }}</h3>
                                <p class="mt-4">{{ tellUsMoreData[tellUsMoreData.length - 2].attributes.sectionDescription }}</p>
                            </div>
                        </div>

                        <div class="mt-[55px] pb-6 md:mb-5">
                            <p v-if="tellUsMoreData[tellUsMoreData.length - 1]" class="mb-5 text-[15px] leading-[47px] text-[#f7f4f4]">{{ tellUsMoreData[tellUsMoreData.length - 1].attributes.sectionName }}</p>
                            <div class="flex items-center gap-2">
                                <div
                                    v-for="(company, i) in featuredCompanies"
                                    :key="i"
                                    class="xs:h-[50px] xs:w-[50px] flex h-[46px] w-[46px] flex-row items-center justify-center rounded-full bg-white p-1 px-2 shadow-[0px_1px_8px_rgba(0,0,0,0.2)] sm:h-[57px] sm:w-[57px] md:h-[65px] md:w-[65px] xl:h-[75px] xl:w-[75px]"
                                >
                                    <nuxt-img format="webp" :src="company.attributes.iconUrl" class="shrink-0" :alt="'Company_' + i" loading="lazy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full bg-white/[0.27] p-7 lg:max-w-[455px] lg:p-10 xl:max-w-[608px] xl:p-[60px]">
                    <form id="tell-us-more-form" action="" class="space-y-4" @submit.prevent="onSubmit">
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
                        <div>
                            <input v-model="$v.params.company.$model" type="text" :placeholder="$t('company')" class="form-input" :class="{ error: $v.params.company.$error }" />
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
                            <button class="flex w-fit items-center gap-1.5 text-white hover:font-bold" :class="{ '!text-primary': params.file }" @click="$refs.file.click()"><icons-attach /> Attach file (pdf, office file)</button>
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
    </div>
</template>

<script>
    import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
    import { alphaNumericSpace } from '~/helper/custom-validations';

    export default {
        props: {
            tellUsMoreTitle: {
                type: String,
                default: 'TELL US MORE ABOUT YOUR PROJECT',
            },
            tellUseMoreSubtitle: {
                type: String,
                default: '',
            },
            tellUsMoreData: {
                type: Array,
                default: [],
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
            imageUrl: {
                type: String,
                default: '/images/bg-banner-long.webp',
            },
        },
        data() {
            return {
                isSubmitted: false,
                captchaError: false,
                params: {
                    first_name: '',
                    last_name: '',
                    phone: '',
                    email: '',
                    company: '',
                    project_description: '',
                    send_nda: '',
                    file: null,
                },
                isSubmitting: false,
                bgColor: '#444',
                backgroundImage: 'none',
            };
        },

        validations() {
            return {
                params: {
                    first_name: { required, alphaNumericSpace, minLength: minLength(3) },
                    last_name: { required, alphaNumericSpace, minLength: minLength(3) },
                    phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                    email: { required, email },
                    company: { required, alphaNumericSpace, minLength: minLength(3) },
                    project_description: { required, minLength: minLength(3) },
                    send_nda: { required, checked: (value) => value === true },
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
                            project_description: '',
                            send_nda: '',
                        };
                    }
                } catch (error) {
                    this.isSubmitting = false;
                }
            },
        },
    };
</script>
