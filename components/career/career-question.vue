<template>
    <section class="py-10 md:py-16 xl:pb-14 xl:pt-[114px]">
        <div id="question-box" class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-10 lg:gap-20 xl:gap-[98px]">
                <div v-show="currentQuestion < 8" class="order-2 flex-1 md:order-1 lg:mx-auto lg:max-w-[490px]">
                    <p class="mb-4 text-base font-bold text-[#707070] lg:max-w-[470px] lg:text-[22px] lg:leading-[31px]">{{ $t('your_trusted_partner_in_navigating_through_uncertain_times_let_s_accelerate_your_growth') }}</p>
                    <p v-if="currentQuestion === 1" class="mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]">
                        {{ $t('answer_five_questions_so_we_can_better_help_you_with_your_business_objectives') }}
                    </p>
                    <p v-else-if="currentQuestion === 6" class="mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]">
                        {{ $t('fill_out_our_contact_form_so_one_of_our_human_resource_representatives_can_get_in_touch_with_you_for_an_interview') }}
                    </p>
                    <p v-else class="mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]">{{ $t('answer_our_questions_so_we_can_better_help_you_with_your_job_search') }}</p>

                    <div v-show="currentQuestion === 1">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]">
                            <p class="text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]">{{ $t('what_is_your_current_position') }}</p>
                            <p class="whitespace-pre text-[13px] text-[#586376]">{{ $t('question') }} 1 / 7</p>
                        </div>
                        <div class="grid grid-cols-2 gap-[3px] sm:grid-cols-3 md:gap-2">
                            <button v-for="(ans, index) in question1Ans" :key="'ans_1_' + index" class="home-question" @click="selectAnswer1(ans)">
                                <p>{{ $t(ans) }}</p>
                            </button>
                        </div>
                    </div>

                    <div v-show="currentQuestion === 2">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]">
                            <p class="text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]">{{ $t('do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations') }}</p>
                            <p class="whitespace-pre text-[13px] text-[#586376]">{{ $t('question') }} 2 / 7</p>
                        </div>
                        <div class="flex flex-wrap gap-[3px] md:gap-2">
                            <button class="home-question w-auto min-w-[128px] px-14" @click="selectAnswer2($t('yes'))">
                                <p>{{ $t('yes') }}</p>
                            </button>
                            <button class="home-question w-auto min-w-[128px] px-14" @click="selectAnswer2($t('no'))">
                                <p>{{ $t('no') }}</p>
                            </button>
                        </div>
                    </div>

                    <div v-show="currentQuestion === 3">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]">
                            <p class="text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]">{{ $t('have_you_worked_on_multiple_projects_or_single_projects_at_a_time') }}</p>
                            <p class="whitespace-pre text-[13px] text-[#586376]">{{ $t('question') }} 3 / 7</p>
                        </div>
                        <div class="flex flex-wrap gap-[3px] md:gap-2">
                            <button v-for="(ans, index) in question3Ans" :key="'ans_3_' + index" class="home-question w-auto min-w-[128px] px-4" @click="selectAnswer3(ans)">
                                <p>{{ $t(ans) }}</p>
                            </button>
                        </div>
                    </div>

                    <div v-show="currentQuestion === 4">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]">
                            <p class="text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]">{{ $t('have_you_lead_a_team_before') }}</p>
                            <p class="whitespace-pre text-[13px] text-[#586376]">{{ $t('question') }} 4 / 7</p>
                        </div>
                        <div class="flex flex-wrap gap-[3px] md:gap-2">
                            <button class="home-question w-auto min-w-[128px] px-14" @click="selectAnswer4($t('yes'))">
                                <p>{{ $t('yes') }}</p>
                            </button>
                            <button class="home-question w-auto min-w-[128px] px-14" @click="selectAnswer4($t('no'))">
                                <p>{{ $t('no') }}</p>
                            </button>
                        </div>
                    </div>

                    <div v-show="currentQuestion === 5">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]">
                            <p class="text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]">{{ $t('what_position_are_you_interested_in') }}</p>
                            <p class="whitespace-pre text-[13px] text-[#586376]">{{ $t('question') }} 5 / 7</p>
                        </div>
                        <div class="mb-3 flex w-full">
                            <button v-show="ans5DisplayCount === 6" class="float-right ml-auto flex items-end border-b border-[#586376] text-base font-medium leading-4 text-[#586376]" @click="ans5DisplayCount = 0">
                                {{ $t('see_all') }}
                            </button>
                        </div>
                        <div class="grid grid-cols-2 gap-[3px] sm:grid-cols-3 md:gap-2">
                            <button v-for="(ans, index) in question5Ans" v-show="ans5DisplayCount === 6 ? index < ans5DisplayCount : index != '-1'" :key="'ans_5_' + index" class="home-question" @click="selectAnswer5(ans)">
                                <p>{{ $t(ans) }}</p>
                            </button>
                        </div>
                    </div>

                    <div v-show="currentQuestion === 6">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]">
                            <p class="text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]">{{ $t('what_is_your_full_name_email_and_phone_number') }}</p>
                            <p class="whitespace-pre text-[13px] text-[#586376]">{{ $t('contact_information') }}</p>
                        </div>
                        <div class="grid w-full gap-[15px] sm:max-w-[485px] md:gap-[30px]">
                            <div class="form-input-group">
                                <input v-model="$v.contactInfo.full_name.$model" type="text" :placeholder="$t('full_name')" class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]" :class="{ error: $v.contactInfo.full_name.$error }" />
                            </div>

                            <div class="form-input-group">
                                <input
                                    v-model="$v.contactInfo.phone.$model"
                                    v-mask="$mask.phoneMask"
                                    type="text"
                                    :placeholder="$t('phone_number')"
                                    class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                    :class="{ error: $v.contactInfo.phone.$error }"
                                />
                            </div>

                            <div class="form-input-group">
                                <input
                                    v-model="$v.contactInfo.email.$model"
                                    type="email"
                                    :placeholder="$t('your_email_address')"
                                    class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                    :class="{ error: $v.contactInfo.email.$error }"
                                    @input="$v.contactInfo.email.$model = $event.target.value.trim()"
                                />
                            </div>
                            <button class="b-btn w-full max-w-full py-[0.9rem] text-sm md:py-5" @click="selectAnswer6()">{{ $t('book_a_consultation') }}</button>
                        </div>
                    </div>

                    <div v-show="currentQuestion === 7">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]">
                            <p class="text-[18px] font-semibold -tracking-[0.04px] text-[#586376]">{{ $t('do_you_want_to_book_your_initial_interview_now') }}</p>
                            <p class="whitespace-pre text-[16px] text-[#586376]">{{ $t('question') }} 7 / 7</p>
                        </div>
                        <div class="grid grid-cols-2 gap-[3px] md:gap-2">
                            <button class="home-question" @click="selectAnswer7('Not right now')">
                                <p>{{ $t('not_right_now') }}</p>
                            </button>
                            <button class="home-question" @click="selectAnswer7('Book Interview')">
                                <p>{{ $t('book_interview') }}</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div v-show="currentQuestion === 8" class="order-2 flex-1 md:order-1">
                    <nuxt-img format="webp" src="/assets/img/congo-icon.svg" alt="Congo Icon" loading="lazy" />
                    <h2
                        class="mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[24px] xl:leading-[32px] [&>br]:hidden [&>br]:md:inline-block [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green"
                        v-html="$t('congratulations_you_have_br_span_successfully_span_booked_your_consultation')"
                    ></h2>
                    <p class="mb-6 text-sm font-medium -tracking-[0.04px] text-[#586376] lg:text-base xl:leading-[27px]" v-html="$t('one_of_our_human_resources_representatives_will_be_in_touch_with_you_soon_thank_you')"></p>

                    <button class="b-btn w-full max-w-none py-4 text-xs uppercase sm:max-w-xs sm:py-5" @click="backToHome()">{{ $t('back_to_home') }}</button>
                </div>

                <div class="order-1 h-[236px] w-full flex-none overflow-hidden rounded-2xl bg-black/50 md:order-2 md:w-[323px] xl:h-[364px] xl:w-[497px]">
                    <nuxt-img format="webp" :src="`/assets/img/career-que-${currentQuestion}.jpg`" alt="Career QUestion Icon" loading="lazy" class="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { required, email, minLength, maxLength } from 'vuelidate/lib/validators';
    import { alphaNumericSpace } from '~/helper/custom-validations';

    export default {
        name: 'CommonQuestion',

        data() {
            return {
                currentQuestion: 1,
                captchaError: false,
                ans5DisplayCount: 6,
                question1Ans: ['bachelor_candidate', 'mba_candidate', 'masters_non_mba', 'md_candidate', 'jd_candidate', 'doctoral_phd', 'professional'],
                question3Ans: ['one_project', 'two_three_projects', 'five_or_more'],
                question5Ans: [
                    'consulting',
                    'financial_advisory',
                    'legal',
                    'product_developer',
                    'registered_rep',
                    'product_designer',
                    'supply_chain_advisor',
                    'ai_consultant',
                    'business_analyst',
                    'marketing_nd_sales',
                    'tech_implementation',
                    'public_relations',
                    'product_engineer',
                    'ux_ui_designer',
                    'content_manager',
                    'recruiter',
                    'internship',
                    'research_analyst',
                    'data_engineer',
                    'robotics_engineer',
                    'managing_director',
                ],
                params: {
                    what_is_your_current_position: '',
                    do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations: '',
                    have_you_worked_on_multiple_projects_or_single_projects_at_a_time: '',
                    have_you_lead_a_team_before: '',
                    what_position_are_you_interested_in: '',
                    do_you_want_to_book_your_initial_interview_now: '',
                },
                contactInfo: {
                    full_name: '',
                    email: '',
                    phone: '',
                },
                widgetId: null,
            };
        },

        computed: {
            questionSelectedAns1() {
                const data = this.params.filter((param) => param.question === 'What phase is your business in?');
                return data.length > 0 ? data[0].answer : '';
            },
        },

        watch: {
            currentQuestion: {
                handler() {
                    this.scrollToQuestion();
                },
                deep: true,
            },
        },

        validations() {
            return {
                contactInfo: {
                    full_name: { required, alphaNumericSpace, minLength: minLength(3) },
                    email: { required, email },
                    phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                },
            };
        },

        mounted() {
            const calendlyScript = document.createElement('script');
            calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
            document.head.appendChild(calendlyScript);

            if (parseInt(this.$route.query?.bookConsult) === 1) {
                this.currentQuestion = 8;
                this.$router.push(this.localePath('/careers'));
                setTimeout(() => {
                    this.scrollToQuestion();
                }, 50);
            }
        },

        methods: {
            nextQuestion() {
                this.currentQuestion++;
            },
            prevQuestion() {
                this.currentQuestion--;
            },
            scrollToQuestion() {
                let domRect = document.querySelector('#question-box');
                if (domRect !== null) {
                    domRect = document.querySelector('#question-box').getBoundingClientRect();
                    window.scrollTo({ top: domRect.top + document.documentElement.scrollTop - (window.innerWidth < 768 ? 30 : 140), behavior: 'smooth' });
                }
            },
            selectAnswer1(ans) {
                this.params.what_is_your_current_position = this.$t(ans, { locale: 'en' });
                this.$emit('changeQue1', this.params.what_is_your_current_position);
                this.nextQuestion();
            },
            selectAnswer2(ans) {
                this.params.do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations = this.$t(ans, { locale: 'en' });
                this.nextQuestion();
            },
            selectAnswer3(ans) {
                this.params.have_you_worked_on_multiple_projects_or_single_projects_at_a_time = this.$t(ans, { locale: 'en' });
                this.nextQuestion();
            },
            selectAnswer4(ans) {
                this.params.have_you_lead_a_team_before = this.$t(ans, { locale: 'en' });
                this.nextQuestion();
            },
            async selectAnswer5(ans) {
                this.params.what_position_are_you_interested_in = this.$t(ans, { locale: 'en' });
                this.nextQuestion();

                // await this.$recaptcha.reset();
                setTimeout(async () => {
                    try {
                        const id = await this.$recaptcha.render('careerQue', {
                            sitekey: '6LckFPUaAAAAABvoKl9AOVILIzozGu2HjHV5U6mK',
                        });
                        this.widgetId = id;
                    } catch (e) {}
                });
            },
            async selectAnswer6() {
                try {
                    this.$v.contactInfo.$touch();
                    if (this.$v.contactInfo.$invalid || this.$v.contactInfo.$error) {
                        return false;
                    }
                    // const token = await this.$recaptcha.getResponse(this.widgetId);
                    if (!this.captchaError) {
                        this.nextQuestion();
                        this.$recaptcha.reset(this.widgetId);
                    }
                } catch (error) {}
            },

            async selectAnswer7(ans) {
                this.params.do_you_want_to_book_your_initial_interview_now = ans;
                if (ans === 'Not right now') {
                    await this.onSubmit();
                } else {
                    // this.currentQuestion = 7;
                    await this.onSubmit();
                    this.$router.push(this.localePath('/book-consult?from=careers-question'));
                }
            },

            async onSubmit() {
                const data = await this.$hubspot.careerQuestionsForm({ ...this.contactInfo, ...this.params });
                if (!data) {
                    return false;
                }

                this.$v.contactInfo.$reset();
                this.contactInfo = {
                    full_name: '',
                    email: '',
                    phone: '',
                };
                this.params = {
                    what_is_your_current_position: '',
                    do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations: '',
                    have_you_worked_on_multiple_projects_or_single_projects_at_a_time: '',
                    have_you_lead_a_team_before: '',
                    what_position_are_you_interested_in: '',
                    do_you_want_to_book_your_initial_interview_now: '',
                };
                this.currentQuestion = 8;
            },

            backToHome() {
                this.currentQuestion = 1;
                this.params = [];
            },
        },
    };
</script>
