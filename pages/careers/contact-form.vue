<template>
    <div>
        <section class="pt-8">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div class="grid grid-cols-1">
                    <div class="w-full rounded-full bg-white">
                        <div
                            class="rounded-full bg-primary p-0.5 text-center text-xs font-medium leading-none text-blue-100 text-white transition-all duration-300"
                            :class="{ 'bg-green': completedForm === 100, 'px-0': completedForm === 0 }"
                            :style="{ width: `${completedForm}%` }"
                        >
                            {{ `${completedForm}%` }}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pb-[130px] pt-5 md:pt-[110px]">
            <div class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
                <div v-if="currentStep <= 2" class="justify-between gap-5 md:flex lg:gap-[103px]">
                    <div class="grow">
                        <nuxt-img format="webp" src="/assets/img/img-12.png" class="mx-auto md:ml-0" alt="contact" loading="lazy" />
                    </div>
                    <div class="w-full grow md:max-w-[396px]">
                        <form id="contact-form" action="" @submit.prevent="onSubmit">
                            <h4 class="pb-3 text-2xl font-semibold uppercase -tracking-[0.03px] text-primary">{{ $t('about_you') }}</h4>
                            <div v-if="currentStep === 1" class="space-y-6 md:space-y-[42px]">
                                <div>
                                    <input
                                        v-model="$v.params.full_name.$model"
                                        type="text"
                                        name="full_name"
                                        :placeholder="$t('full_name')"
                                        class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.params.full_name.$error }"
                                        autocomplete="on"
                                    />
                                </div>
                                <div>
                                    <input
                                        v-model="$v.params.email.$model"
                                        type="email"
                                        name="email"
                                        :placeholder="$t('your_email_address')"
                                        class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.params.email.$error }"
                                        @input="$v.params.email.$model = $event.target.value.trim()"
                                        autocomplete="on"
                                    />
                                </div>
                                <div>
                                    <input
                                        v-model="$v.params.phone.$model"
                                        v-mask="$mask.phoneMask"
                                        type="text"
                                        name="phone"
                                        :placeholder="$t('phone_number')"
                                        class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.params.phone.$error }"
                                        autocomplete="on"
                                    />
                                </div>
                                <div>
                                    <div v-click-outside="closePositionDropdown" class="group relative text-left">
                                        <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right">
                                            <div role="none">
                                                <div
                                                    class="form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none"
                                                    :class="{ 'border-[#f9ecea]  text-danger': $v.params.position.$error, 'rounded-b-none': isPositionDropdownOpen }"
                                                    @click="openPositionDropdown"
                                                >
                                                    {{ positionsDropdownTitle }}
                                                    <icons-selection-arrow class="absolute right-[20px]" :class="{ 'rotate-180': isPositionDropdownOpen, 'text-danger': $v.params.position.$error }" />
                                                </div>
                                                <Transition name="slide-fade">
                                                    <multiselect
                                                        v-show="isPositionDropdownOpen"
                                                        ref="multiselect"
                                                        v-model="params.position"
                                                        :max-height="350"
                                                        :option-height="45"
                                                        :options="positionOptions"
                                                        :show-no-results="false"
                                                        :close-on-select="true"
                                                        :show-labels="false"
                                                        :search="false"
                                                        class="custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]"
                                                        @select="closePositionDropdown"
                                                    >
                                                        <template slot="caret">
                                                            <button type="submit" class="pointer-events-none absolute right-0 top-0 mr-4 mt-4 xl:mt-[18px]">
                                                                <icons-search class="h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4" />
                                                            </button>
                                                        </template>
                                                    </multiselect>
                                                </Transition>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!--upload-->
                                <div class="sm:flex">
                                    <div class="md:w-2/3">
                                        <div class="mb-5 flex">
                                            <label class="w-1/2 grow">
                                                <div class="block">
                                                    <span class="text-[13px] text-[#0b0b0b]/70">{{ $t('upload_cover_letter') }}:</span>
                                                    <input ref="cover_letter_file" type="file" accept="image/*,.pdf" class="hidden" @change="onFileChange($event, 'cover_letter')" />
                                                </div>
                                                <button
                                                    type="button"
                                                    class="inline-block rounded-full border border-[#707070] px-3.5 text-[10px] font-medium leading-5 -tracking-[0.02px] text-[#0b0b0b]"
                                                    :class="{ error: $v.params.cover_letter.$error, 'border- !border-green bg-green/[0.15] !text-green': $v.params.cover_letter.$model }"
                                                    @click="$refs.cover_letter_file.click()"
                                                >
                                                    <icons-upload class="mr-[2px]" :class="{ '!text-danger': $v.params.cover_letter.$error }" /> {{ $t('upload_file') }}
                                                </button>
                                            </label>
                                            <label class="w-1/2 grow">
                                                <div class="block">
                                                    <span class="text-[13px] text-[#0b0b0b]/70">{{ $t('upload_diploma') }}:</span>
                                                    <input ref="diploma_file" type="file" accept="image/*,.pdf" class="hidden" @change="onFileChange($event, 'diploma')" />
                                                </div>
                                                <button
                                                    type="button"
                                                    class="inline-block rounded-full border border-[#707070] px-3.5 text-[10px] font-medium leading-5 -tracking-[0.02px] text-[#0b0b0b]"
                                                    :class="{ error: $v.params.diploma.$error, 'border- !border-green bg-green/[0.15] !text-green': $v.params.diploma.$model }"
                                                    @click="$refs.diploma_file.click()"
                                                >
                                                    <icons-upload class="mr-[2px]" /> {{ $t('upload_file') }}
                                                </button>
                                            </label>
                                        </div>
                                        <div class="flex">
                                            <label class="w-1/2 grow">
                                                <div class="block">
                                                    <span class="text-[13px] text-[#0b0b0b]/70">{{ $t('upload_resume') }}:</span>
                                                    <input ref="resume_file" type="file" accept="image/*,.pdf" class="hidden" @change="onFileChange($event, 'resume')" />
                                                </div>
                                                <button
                                                    type="button"
                                                    class="inline-block rounded-full border border-[#707070] px-3.5 text-[10px] font-medium leading-5 -tracking-[0.02px] text-[#0b0b0b]"
                                                    :class="{ error: $v.params.resume.$error, 'border- !border-green bg-green/[0.15] !text-green': $v.params.resume.$model }"
                                                    @click="$refs.resume_file.click()"
                                                >
                                                    <icons-upload class="mr-[2px]" /> {{ $t('upload_file') }}
                                                </button>
                                            </label>
                                            <label class="w-1/2 grow">
                                                <div class="block">
                                                    <span class="text-[13px] text-[#0b0b0b]/70">{{ $t('connect_with_us') }}</span>
                                                </div>
                                                <a href="https://www.linkedin.com/company/31139649/" target="_blank" class="mt-1.5 block w-fit rounded-md bg-[#0288d1] px-[31px] py-[2px] text-white">
                                                    <icons-linkedin class="h-4 w-4" />
                                                </a>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="pt-7 md:w-1/3">
                                        <button class="b-btn w-auto !rounded px-[25px] py-1.5 text-sm" type="submit">{{ $t('next') }}</button>
                                    </div>
                                </div>
                            </div>
                            <div v-else-if="currentStep === 2" class="space-y-5 md:space-y-[42px]">
                                <!-- select-school-->
                                <div v-click-outside="closeSchoolDropdown" class="contact-form-search group relative text-left">
                                    <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right">
                                        <div role="none">
                                            <div
                                                class="form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none"
                                                :class="{ 'border-[#f9ecea]  text-danger': $v.params.school.$error, 'rounded-b-none': isSchoolDropdownOpen }"
                                                @click="openSchoolDropdown"
                                            >
                                                {{ schoolDropdownTitle }}
                                                <icons-selection-arrow class="absolute right-[20px]" :class="{ 'rotate-180': isSchoolDropdownOpen, 'text-danger': $v.params.school.$error }" />
                                            </div>
                                            <Transition name="slide-fade">
                                                <multiselect
                                                    v-show="isSchoolDropdownOpen"
                                                    ref="multiselect"
                                                    v-model="params.school"
                                                    :max-height="350"
                                                    :option-height="45"
                                                    :options="selectSchoolOptions"
                                                    :show-no-results="false"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    :search="false"
                                                    :searchable="false"
                                                    class="custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs capitalize leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]"
                                                    @select="closeSchoolDropdown"
                                                >
                                                </multiselect>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>
                                <!--experience-->
                                <div v-click-outside="closeExperienceDropdown" class="contact-form-search group relative text-left">
                                    <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right">
                                        <div role="none">
                                            <div
                                                class="form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none"
                                                :class="{ 'border-[#f9ecea]  text-danger': $v.params.do_you_have_at_least_years_of_experience.$error, 'rounded-b-none': isExperienceDropdownOpen }"
                                                @click="openExperienceDropdown"
                                            >
                                                {{ experienceDropdownTitle }}
                                                <icons-selection-arrow class="absolute right-[20px]" :class="{ 'rotate-180': isExperienceDropdownOpen, 'text-danger': $v.params.do_you_have_at_least_years_of_experience.$error }" />
                                            </div>

                                            <Transition name="slide-fade">
                                                <multiselect
                                                    v-show="isExperienceDropdownOpen"
                                                    ref="multiselect"
                                                    v-model="params.do_you_have_at_least_years_of_experience"
                                                    :max-height="350"
                                                    :option-height="45"
                                                    :options="yearsOfExperienceOptions"
                                                    :show-no-results="false"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    :search="false"
                                                    :searchable="false"
                                                    class="custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs capitalize leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]"
                                                    @select="closeExperienceDropdown"
                                                >
                                                </multiselect>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>
                                <!--                           flexibility     -->
                                <div v-click-outside="closeFlexibilityDropdown" class="contact-form-search group relative text-left">
                                    <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right">
                                        <div role="none">
                                            <div
                                                class="form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none"
                                                :class="{ 'border-[#f9ecea]  text-danger': $v.params.geographic_flexibility.$error, 'rounded-b-none': isFlexibilityDropdownOpen }"
                                                @click="openFlexibilityDropdown"
                                            >
                                                {{ flexibilityDropdownTitle }}
                                                <icons-selection-arrow class="absolute right-[20px]" :class="{ 'rotate-180': isFlexibilityDropdownOpen, 'text-danger': $v.params.geographic_flexibility.$error }" />
                                            </div>

                                            <Transition name="slide-fade">
                                                <multiselect
                                                    v-show="isFlexibilityDropdownOpen"
                                                    ref="multiselect"
                                                    v-model="params.geographic_flexibility"
                                                    :max-height="350"
                                                    :option-height="45"
                                                    :options="geographicFlexibilityOptions"
                                                    :show-no-results="false"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    :search="false"
                                                    :searchable="false"
                                                    class="custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs capitalize leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]"
                                                    @select="closeFlexibilityDropdown"
                                                >
                                                </multiselect>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>
                                <!--internship-->
                                <div v-click-outside="closeInternShipDropdown" class="contact-form-search group relative text-left">
                                    <div class="shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right">
                                        <div role="none">
                                            <div
                                                class="form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none"
                                                :class="{ 'border-[#f9ecea]  text-danger': $v.params.are_you_interested_in_a_internship_program.$error, 'rounded-b-none': isInternShipDropdownOpen }"
                                                @click="openInternShipDropdown"
                                            >
                                                {{ internDropdownTitle }}
                                                <icons-selection-arrow class="absolute right-[20px]" :class="{ 'rotate-180': isInternShipDropdownOpen, 'text-danger': $v.params.are_you_interested_in_a_internship_program.$error }" />
                                            </div>

                                            <Transition name="slide-fade">
                                                <multiselect
                                                    v-show="isInternShipDropdownOpen"
                                                    ref="multiselect"
                                                    v-model="params.are_you_interested_in_a_internship_program"
                                                    :max-height="350"
                                                    :option-height="45"
                                                    :options="internshipProgramOptions"
                                                    :show-no-results="false"
                                                    :close-on-select="true"
                                                    :show-labels="false"
                                                    :search="false"
                                                    :searchable="false"
                                                    class="custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs capitalize leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]"
                                                    @select="closeInternShipDropdown"
                                                >
                                                </multiselect>
                                            </Transition>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div>
                                    <recaptcha @success="captchaError = false" @error="captchaError = true" />
                                    <div v-if="captchaError" class="captcha-error">Please verify reCaptcha.</div>
                                </div> -->
                                <div>
                                    <button type="submit" class="b-btn custom-btn inline-block !rounded px-9 py-4 text-[12px] font-bold">Book An Interview</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div v-else class="justify-between gap-5 space-y-4 md:flex md:space-y-0 lg:gap-[103px]">
                    <div class="mb-5 w-full grow md:order-2 md:mb-0 md:max-w-[498px]">
                        <nuxt-img src="/assets/img/img-12.png" class="mx-auto md:ml-0" alt="contact 2" loading="lazy" />
                    </div>
                    <div class="w-full grow">
                        <nuxt-img src="/assets/img/congo-icon.svg" alt="icon" loading="lazy" />

                        <h2
                            class="mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[28px] xl:leading-[39px] [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green [&>br]:hidden [&>br]:md:inline-block"
                            v-html="$t('congratulations_you_have_span_successfully_span_booked_your_interview')"
                        ></h2>
                        <p
                            class="[&>a]:leading-0 mb-6 text-sm font-medium -tracking-[0.04px] text-[#3c434e] xl:text-[21px] xl:leading-[27px] [&>a]:cursor-pointer [&>a]:underline"
                            v-html="$t('book_interview_in_career_contact_form_paragraph_1', { link: 'javascript:;', target: '' })"
                        ></p>

                        <nuxt-link class="b-btn bg-[#00a1f1] py-4 text-xs uppercase lg:max-w-[250px]" :to="localePath('/book-consult')">Book A Consultation</nuxt-link>
                    </div>
                </div>
            </div>
        </section>

        <common-brand-logo />
    </div>
</template>

<script>
    import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
    import { alphaNumericSpace } from '~/helper/custom-validations';
    import ClickOutside from 'vue-click-outside';
    export default {
        directives: {
            ClickOutside,
        },
        data() {
            return {
                currentStep: 1,
                captchaError: false,
                completedForm: 0,
                params: {
                    full_name: '',
                    email: '',
                    phone: '',
                    position: '',
                    cover_letter: '',
                    diploma: '',
                    resume: '',
                    school: '',
                    do_you_have_at_least_years_of_experience: '',
                    geographic_flexibility: '',
                    are_you_interested_in_a_internship_program: '',
                },
                positionOptions: ['Business Consultant', 'Social Media Specialist/Content Writer', 'UX/UI Designer', 'Web Developer', 'Administrative Assistant', 'Sales Representative', 'other'],
                selectSchoolOptions: ['Harvard', 'MIT', 'Yale', 'Princeton', 'Berkeley', 'Columbia', 'Stanford', 'Ucla', 'Usc', 'Georgia Tech', 'Johns Hopkins University', 'New York University', 'Other'],
                yearsOfExperienceOptions: ['Yes', 'No'],
                geographicFlexibilityOptions: ['Yes', 'No'],
                internshipProgramOptions: ['Yes', 'No'],
                isSearchable: true,
                isPositionDropdownOpen: false,
                isSchoolDropdownOpen: false,
                isExperienceDropdownOpen: false,
                isFlexibilityDropdownOpen: false,
                isInternShipDropdownOpen: false,
                isOpen: false,
            };
        },

        head() {
            return {
                title: 'Careers - Contact Form | Venture Plans',
                link: [
                    {
                        rel: 'canonical',
                        href: this.content?.metaFields[0]?.canonicalUrl
                            ? (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.content.metaFields[0].canonicalUrl
                            : (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path,
                    },
                ],
                meta: [
                    {
                        name: 'robots',
                        content: 'noindex',
                    },
                ],
            };
        },

        computed: {
            validationsObjects() {
                let validations = {};
                if (this.currentStep >= 1) {
                    validations = Object.assign(validations, {
                        full_name: { required, alphaNumericSpace, minLength: minLength(3) },
                        email: { required, email },
                        phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                        position: { required },
                        cover_letter: {},
                        diploma: {},
                        resume: { required },
                    });
                }
                if (this.currentStep >= 2) {
                    validations = Object.assign(validations, {
                        school: { required },
                        do_you_have_at_least_years_of_experience: { required },
                        geographic_flexibility: { required },
                        are_you_interested_in_a_internship_program: { required },
                    });
                }

                return validations;
            },

            positionsDropdownTitle() {
                return !this.$helper.isEmpty(this.params.position) ? this.params.position : `Search available positions`;
            },
            schoolDropdownTitle() {
                return !this.$helper.isEmpty(this.params.school) ? this.params.school : `Select School`;
            },
            experienceDropdownTitle() {
                return !this.$helper.isEmpty(this.params.do_you_have_at_least_years_of_experience) ? this.params.do_you_have_at_least_years_of_experience : `Do you have at least 5 years of work experience?`;
            },
            flexibilityDropdownTitle() {
                return !this.$helper.isEmpty(this.params.geographic_flexibility) ? this.params.geographic_flexibility : `Geographic Flexibility`;
            },
            internDropdownTitle() {
                return !this.$helper.isEmpty(this.params.are_you_interested_in_a_internship_program) ? this.params.are_you_interested_in_a_internship_program : `Are you interested in internship program?`;
            },
        },

        watch: {
            params: {
                deep: true,
                handler() {
                    this.completedForm = 0;
                    if (!this.$helper.isEmpty(this.params.full_name) && !this.$v.params.full_name.$error) {
                        this.completedForm += 11;
                    }
                    if (!this.$helper.isEmpty(this.params.email) && !this.$v.params.email.$error) {
                        this.completedForm += 11;
                    }
                    if (!this.$helper.isEmpty(this.params.phone) && !this.$v.params.phone.$error) {
                        this.completedForm += 11;
                    }
                    if (!this.$helper.isEmpty(this.params.position) && !this.$v.params.position.$error) {
                        this.completedForm += 11;
                    }
                    if (typeof this.params.cover_letter === 'object' && !this.$v.params.cover_letter.$error) {
                        // this.completedForm += 6.67;
                    }
                    if (typeof this.params.diploma === 'object' && !this.$v.params.diploma.$error) {
                        // this.completedForm += 6.67;
                    }
                    if (typeof this.params.resume === 'object' && !this.$v.params.resume.$error) {
                        this.completedForm += 11;
                    }
                    if (!this.$helper.isEmpty(this.params.school) && !this.$v.params.school.$error) {
                        this.completedForm += 11;
                    }
                    if (!this.$helper.isEmpty(this.params.do_you_have_at_least_years_of_experience) && !this.$v.params.do_you_have_at_least_years_of_experience.$error) {
                        this.completedForm += 11;
                    }
                    if (!this.$helper.isEmpty(this.params.geographic_flexibility) && !this.$v.params.geographic_flexibility.$error) {
                        this.completedForm += 11;
                    }
                    if (!this.$helper.isEmpty(this.params.are_you_interested_in_a_internship_program) && !this.$v.params.are_you_interested_in_a_internship_program.$error) {
                        this.completedForm += 12;
                    }
                },
            },
        },

        validations() {
            return {
                params: {
                    ...this.validationsObjects,
                },
            };
        },

        mounted() {
            // const multiTags = document.querySelector(".multiselect__tags")
            // if(multiTags){
            //     multiTags.style.paddingLeft = '0px'
            // }

            if (parseInt(this.$route.query?.bookConsult) === 1) {
                this.currentStep = 3;
                this.$router.push(this.localePath('/careers/contact-form'));
            }

            if (window.innerWidth <= 768) {
                this.isSearchable = false;
            } else {
                this.isSearchable = true;
            }
        },

        methods: {
            // togglePositionDropdown(){
            //     if(this.isPositionDropdownOpen) this.$refs.multiselect.$refs.search.blur()
            //     else this.$refs.multiselect1.$el.focus()
            // },
            openPositionDropdown() {
                this.isPositionDropdownOpen = !this.isPositionDropdownOpen;
            },
            closePositionDropdown() {
                this.isPositionDropdownOpen = false;
            },

            openSchoolDropdown() {
                this.isSchoolDropdownOpen = !this.isSchoolDropdownOpen;
            },
            closeSchoolDropdown() {
                this.isSchoolDropdownOpen = false;
            },

            openExperienceDropdown() {
                this.isExperienceDropdownOpen = !this.isExperienceDropdownOpen;
            },
            closeExperienceDropdown() {
                this.isExperienceDropdownOpen = false;
            },

            openFlexibilityDropdown() {
                this.isFlexibilityDropdownOpen = !this.isFlexibilityDropdownOpen;
            },
            closeFlexibilityDropdown() {
                this.isFlexibilityDropdownOpen = false;
            },

            openInternShipDropdown() {
                this.isInternShipDropdownOpen = !this.isInternShipDropdownOpen;
            },
            closeInternShipDropdown() {
                this.isInternShipDropdownOpen = false;
            },

            onFileChange(e, fileType) {
                const file = e.target.files[0];
                const filePath = file.name;
                const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
                if (!allowedExtensions.exec(filePath)) {
                    file.value = '';
                    this.$v.params[fileType].$touch();
                    return false;
                }

                if (file) {
                    this.params[fileType] = file;
                    this.$v.params[fileType].$touch();
                } else {
                    this.params[fileType] = '';
                }
            },
            onSuccess() {
                this.captchaError = false;
            },

            OnError() {},

            async onSubmit() {
                this.$v.params.$touch();
                if (this.$v.params.$invalid || this.$v.params.$error) {
                    return false;
                }

                if (this.currentStep === 1) {
                    this.currentStep = 2;
                    scrollTo({
                        top: 20,
                        behavior: 'smooth',
                    });
                    return true;
                }

                if (this.currentStep === 2) {
                    try {
                        const token = await this.$recaptcha.getResponse();
                    } catch (error) {}
                }
                if (!this.captchaError) {
                    this.currentStep = 3;
                    const data = await this.$hubspot.careersSubmitForm(this.params);
                    if (!data) {
                        return false;
                    }
                    return true;
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

    .custom-multiselect .multiselect__content-wrapper {
        margin-top: 10px !important;
    }
    .custom-btn {
        max-width: 100% !important;
        width: 100% !important;
    }
    .career-form-custom {
        max-width: 90% !important;
    }
    .custom-multiselect .multiselect__tags {
        padding: 0 !important;
    }
</style>
