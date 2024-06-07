<template>
    <section class="bg-[#FBFBFD] py-10 md:py-16 lg:pb-[90px] lg:pt-[114px]">
        <div id="question-box" class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="flex flex-col items-start justify-between gap-5 md:flex-row">
                <div v-show="currentQuestion < 7" class="order-2 flex-1 md:order-1 lg:mx-auto lg:max-w-[500px]">
                    <h2 class="mb-[30px] text-base font-bold text-[#586376] md:text-[#707070] lg:max-w-[470px] lg:text-[22px] lg:leading-[31px]">
                        {{ $t('your_trusted_partner_in_navigating_through_uncertain_times_let_s_accelerate_your_growth') }}
                    </h2>
                    <p v-if="currentQuestion !== 5" class="mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]">
                        {{ $t('answer_five_questions_so_we_can_better_help_you_with_your_business_objectives') }}
                    </p>
                    <p v-else class="mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376]">
                        {{ $t('fill_out_our_contact_form_so_one_of_our_accredited_advisors_can_get_in_touch_with_you_for_your_free_consultation') }}
                    </p>

                    <div v-show="currentQuestion === 1">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]">
                            <p class="text-[18px] font-semibold leading-[18px] -tracking-[0.04px] text-[#586376]">{{ $t('what_phase_is_your_business_in') }}</p>
                            <p class="whitespace-pre text-[16px] text-[#586376]">{{ $t('question') }} 1 / 5</p>
                        </div>
                        <div class="grid grid-cols-2 gap-[3px] sm:grid-cols-3 md:gap-2">
                            <button v-for="(ans, index) in question1Ans" :key="'ans_1_' + index" class="home-question" @click="selectAnswer1(ans)">
                                <p>{{ $t(ans) }}</p>
                            </button>
                        </div>
                    </div>

                    <div v-show="currentQuestion === 2">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]">
                            <p v-if="questionSelectedAns1 !== 'Start-up'" class="text-[18px] font-semibold -tracking-[0.04px] text-[#586376]">{{ $t('what_was_your_company_gross_revenue_last_year') }}</p>
                            <p v-else class="text-[18px] font-semibold text-[#586376]">{{ $t('how_much_working_capital_do_you_personally_have_to_invest_in_your_business') }}</p>
                            <p class="whitespace-pre text-[16px] text-[#586376]">{{ $t('question') }} 2 / 5</p>
                        </div>
                        <div v-if="questionSelectedAns1 !== 'Start-up'" class="flex flex-wrap gap-[3px] md:gap-2">
                            <button v-for="(ans, index) in question2Ans" :key="'ans_2_' + index" class="home-question w-auto px-[6px] sm:px-4" @click="selectAnswer2(ans)">
                                <p>{{ $t(ans) }}</p>
                            </button>
                        </div>
                        <div v-else class="flex flex-wrap gap-[3px] md:gap-2">
                            <button v-for="(ans, index) in question2AnsStartUp" :key="'ans_2_' + index" class="home-question w-auto px-[6px] sm:px-4" @click="selectAnswer2(ans)">
                                <p>{{ $t(ans) }}</p>
                            </button>
                        </div>
                    </div>

                    <div v-show="currentQuestion === 3">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]">
                            <p class="text-[18px] font-semibold -tracking-[0.04px] text-[#586376]">{{ $t('what_is_your_industry') }}</p>
                            <p class="whitespace-pre text-[16px] text-[#586376]">{{ $t('question') }} 3 / 5</p>
                        </div>
                        <div class="flex flex-wrap gap-[3px] md:gap-2">
                            <button v-for="(ans, index) in question3Ans" v-show="ans3DisplayCount === 6 ? index < ans3DisplayCount : index != '-1'" :key="'ans_3_' + index" class="home-question w-auto px-4" @click="selectAnswer3(ans)">
                                <p>{{ $t(ans) }}</p>
                            </button>
                            <button v-show="ans3DisplayCount === 6" class="float-right ml-auto flex items-end border-b border-[#586376] text-base font-medium leading-4 text-[#586376]" @click="ans3DisplayCount = 0">
                                {{ $t('see_all') }}
                            </button>
                        </div>
                    </div>

                    <div v-show="currentQuestion === 4">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]">
                            <p class="text-[18px] font-semibold -tracking-[0.04px] text-[#586376]">{{ $t('what_service_best_suits_your_needs') }}</p>
                            <p class="whitespace-pre text-[16px] text-[#586376]">{{ $t('question') }} 4 / 5</p>
                        </div>
                        <div class="flex flex-wrap gap-[3px] md:gap-2">
                            <button v-for="(ans, index) in question4Ans" v-show="ans4DisplayCount === 6 ? index < ans4DisplayCount : index != '-1'" :key="'ans_4_' + index" class="home-question w-auto px-4" @click="selectAnswer4(ans)">
                                <p>{{ $t(ans) }}</p>
                            </button>
                            <button v-show="ans4DisplayCount === 6" class="float-right ml-auto flex items-end border-b border-[#586376] text-base font-medium leading-4 text-[#586376]" @click="ans4DisplayCount = 0">
                                {{ $t('see_all') }}
                            </button>
                        </div>
                    </div>

                    <div v-show="currentQuestion === 5">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:items-end md:justify-between lg:mb-[27px]">
                            <p class="text-[18px] font-semibold leading-[28px] -tracking-[0.04px] text-[#586376] lg:whitespace-nowrap">{{ $t('what_is_your_full_name_email_and_phone_number') }}</p>
                            <p class="text-[16px] leading-[28px] text-[#586376] sm:whitespace-nowrap">{{ $t('contact_information') }}</p>
                        </div>
                        <div class="grid w-full gap-[15px] sm:max-w-[485px] md:gap-[30px]">
                            <div class="form-input-group">
                                <input v-model="$v.contactInfo.fullName.$model" type="text" :placeholder="$t('full_name')" class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]" :class="{ error: $v.contactInfo.fullName.$error }" />
                                <!-- <div v-if="$v.contactInfo.fullName.$error">
                                    <p v-if="!$v.contactInfo.fullName.required">{{ $helper.requiredMessage(`${$t('full_name')}`) }}</p>
                                    <p v-else-if="!$v.contactInfo.fullName.alphaNumericSpace">{{ $helper.alphaNumSpaceMessage(`${$t('full_name')}`) }}</p>
                                </div> -->
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
                                <!-- <div v-if="$v.contactInfo.phone.$error">
                                    <p v-if="!$v.contactInfo.phone.required">{{ $helper.requiredMessage(`${$t('phone_number')}`) }}</p>
                                </div> -->
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
                                <!-- <div v-if="$v.contactInfo.email.$error">
                                    <p v-if="!$v.contactInfo.email.required">{{ $helper.requiredMessage(`${$t('email')}`) }}</p>
                                    <p v-else-if="!$v.contactInfo.email.email">{{ $helper.emailMessage() }}</p>
                                </div> -->
                            </div>
                            <!-- <div v-if="currentQuestion === 5">
                                <recaptcha id="businessQue" ref="businessQue" @success="captchaError = false" @error="captchaError = true" />
                                <div v-if="captchaError" class="captcha-error">Please verify reCaptcha.</div>
                            </div> -->

                            <button class="b-btn w-full max-w-full py-[0.9rem] text-xs md:py-5" @click="selectAnswer5()">{{ $t('next') }}</button>
                        </div>
                    </div>

                    <div v-show="currentQuestion === 6">
                        <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]">
                            <p class="text-[18px] font-semibold -tracking-[0.04px] text-[#586376]">{{ $t('are_you_ready_to_buy_this_service') }}</p>
                            <p class="whitespace-pre text-[16px] text-[#586376]">{{ $t('question') }} 5 / 5</p>
                        </div>
                        <div class="grid grid-cols-2 gap-[3px] md:gap-2">
                            <button class="home-question" @click="selectAnswer6('Yes Go to Checkout')">
                                <p>{{ $t('yes_go_to_checkout') }}</p>
                            </button>
                            <button class="home-question" @click="selectAnswer6('No, Book Consultation First')">
                                <p>{{ $t('no_book_consultation_first') }}</p>
                            </button>
                        </div>
                    </div>
                </div>

                <div v-show="currentQuestion === 8" class="order-2 flex-1 md:order-1">
                    <img src="/images/congo-icon.svg" alt="Icon Congo" loading="lazy" />

                    <h2
                        class="mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[28px] xl:leading-[39px] [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green [&>br]:hidden [&>br]:md:inline-block"
                        v-html="$t('congratulations_you_have_br_span_successfully_span_booked_your_consultation')"
                    ></h2>
                    <p class="mb-6 text-sm font-medium -tracking-[0.04px] text-[#586376] lg:text-base xl:leading-[27px]">
                        {{ $t('home_question_success_paragraph_1') }}
                    </p>

                    <button class="b-btn w-full max-w-none bg-[#00a1f1] py-4 text-xs uppercase sm:max-w-xs sm:py-5 lg:max-w-[333px]" @click="backToHome()">{{ $t('back_to_home') }}</button>
                </div>

                <div v-show="currentQuestion === 9" class="order-2 flex-1 md:order-1">
                    <img src="/images/congo-icon.svg" alt="Icon Congo" loading="lazy" />
                    <h2
                        class="mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[28px] xl:leading-[39px] [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green [&>br]:hidden [&>br]:md:inline-block"
                        v-html="$t('we_are_sorry_all_of_our_clients_require_br_span_working_capital_span_in_order_to_qualify')"
                    ></h2>
                    <p class="mb-6 text-sm font-medium -tracking-[0.04px] text-[#586376] lg:text-base xl:leading-[27px]">
                        {{ $t('home_question_success_paragraph_2') }}
                    </p>

                    <button class="b-btn w-full max-w-none bg-[#00a1f1] py-4 text-xs uppercase sm:max-w-xs sm:py-5 lg:max-w-[333px]" @click="backToHome()">{{ $t('back_to_home') }}</button>
                </div>

                <div class="order-1 h-[236px] w-full flex-none overflow-hidden rounded-2xl bg-black/50 md:order-2 md:w-[323px] xl:h-[364px] xl:w-[497px]">
                    <img :src="`/images/que-${currentQuestion}.webp`" class="h-full w-full object-cover" alt="Question Image" loading="lazy" />
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
                ans3DisplayCount: 6,
                ans4DisplayCount: 6,
                question1Ans: ['start_up', 'seeking_exit', 'in_revenue', 'acquisition', 'm_nd_a', 'ipo_nd_ico'],
                question2AnsStartUp: ['dollar__5000_50000', 'dollar__500000_150000', 'dollar__150000_350000', 'dollar__350000_1000000', 'dollar__1000000_10000000', 'dollar__10000000_100000000', 'no_capital'],
                question2Ans: ['dollar__500000_150000', 'dollar__150000_350000', 'dollar__350000_1000000', 'dollar__1000000_10000000', 'dollar__10000000_100000000'],
                question3Ans: [],
                question4Ans: [],
                params: {
                    what_phase_is_your_business_in: '',
                    what_was_company_gross_revenue_last_year: '',
                    how_much_working_capital_do_you_personally_have_to_invest_in_your_business: '',
                    what_is_your_industry: '',
                    what_service_best_suits_your_needs: '',
                    what_is_your_full_name: '',
                    what_is_your_phone_number: '',
                    what_is_your_email: '',
                    are_you_ready_to_buy_this_service: '',
                },
                contactInfo: {
                    fullName: '',
                    email: '',
                    phone: '',
                },
                widgetId: null,
            };
        },

        validations() {
            return {
                contactInfo: {
                    fullName: { required, alphaNumericSpace, minLength: minLength(3) },
                    email: { required, email },
                    phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                },
            };
        },

        computed: {
            questionSelectedAns1() {
                return this.params.what_phase_is_your_business_in;
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

        mounted() {
            // const calendlyScript = document.createElement('script');
            // calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
            // document.head.appendChild(calendlyScript);
            if (window.innerWidth <= 390) {
                this.question3Ans = [
                    'technology',
                    'health_care',
                    'consumer_goods_nd_manufacturing',
                    'real_estate',
                    'education_nd_e_learning',
                    'fintech',
                    'artificial_intelligence',
                    'automobile_manufacturing',
                    'finance',
                    'cannabis',
                    'robotics',
                    'clean_tech',
                    'quantum_information_science',
                    'advanced_consumer_goods_nd_manufacturing',
                    'automation',
                    'biotechnology',
                    '_5g_advanced_wireless_technology',
                    'non_profit_organization',
                    'oil_nd_gas',
                    'virtual_reality',
                    'pharmaceutical',
                    'electric_automobile_manufacturing',
                    'gaming',
                    'biometrics',
                    'cultivation',
                    '_3d_printing',
                    'cybersecurity',
                    'law_financial_consulting_nd_accounting',
                    'consumer_product_nd_services',
                    'aerospace_nd_defense',
                    'block_chain',
                    'software_apps_nd_telecommunications',
                    'medical_technology_health_nd_fitness',
                    'other',
                ];
            } else if (window.innerWidth <= 425) {
                this.question3Ans = [
                    'technology',
                    'fintech',
                    'real_estate',
                    'consumer_goods_nd_manufacturing',
                    'health_care',
                    'education_nd_e_learning',
                    'artificial_intelligence',
                    'cannabis',
                    'robotics',
                    'automobile_manufacturing',
                    'clean_tech',
                    'quantum_information_science',
                    'advanced_consumer_goods_nd_manufacturing',
                    'automation',
                    'biotechnology',
                    '_5g_advanced_wireless_technology',
                    'pharmaceutical',
                    'non_profit_organization',
                    'virtual_reality',
                    'finance',
                    'oil_nd_gas',
                    'electric_automobile_manufacturing',
                    'gaming',
                    'cybersecurity',
                    '_3d_printing',
                    'biometrics',
                    'law_financial_consulting_nd_accounting',
                    'cultivation',
                    'consumer_product_nd_services',
                    'aerospace_nd_defense',
                    'block_chain',
                    'software_apps_nd_telecommunications',
                    'medical_technology_health_nd_fitness',
                    'other',
                ];
            } else if (window.innerWidth <= 768) {
                this.question3Ans = [
                    'technology',
                    'fintech',
                    'consumer_goods_nd_manufacturing',
                    'real_estate',
                    'health_care',
                    'education_nd_e_learning',
                    'artificial_intelligence',
                    'cannabis',
                    'robotics',
                    'clean_tech',
                    'automobile_manufacturing',
                    'quantum_information_science',
                    'advanced_consumer_goods_nd_manufacturing',
                    'automation',
                    'biotechnology',
                    '_5g_advanced_wireless_technology',
                    'pharmaceutical',
                    'non_profit_organization',
                    'virtual_reality',
                    'finance',
                    'oil_nd_gas',
                    'electric_automobile_manufacturing',
                    'cybersecurity',
                    '_3d_printing',
                    'gaming',
                    'biometrics',
                    'law_financial_consulting_nd_accounting',
                    'cultivation',
                    'consumer_product_nd_services',
                    'aerospace_nd_defense',
                    'block_chain',
                    'software_apps_nd_telecommunications',
                    'medical_technology_health_nd_fitness',
                    'other',
                ];
            } else if (window.innerWidth < 1024) {
                this.question3Ans = [
                    'technology',
                    'consumer_goods_nd_manufacturing',
                    'fintech',
                    'real_estate',
                    'artificial_intelligence',
                    'education_nd_e_learning',
                    'aerospace_nd_defense',
                    'pharmaceutical',
                    'robotics',
                    'health_care',
                    'biotechnology',
                    'automobile_manufacturing',
                    'clean_tech',
                    'quantum_information_science',
                    'advanced_consumer_goods_nd_manufacturing',
                    'cannabis',
                    '_5g_advanced_wireless_technology',
                    'oil_nd_gas',
                    'non_profit_organization',
                    'consumer_product_nd_services',
                    'automation',
                    'finance',
                    'electric_automobile_manufacturing',
                    'virtual_reality',
                    'cybersecurity',
                    '_3d_printing',
                    'biometrics',
                    'block_chain',
                    'cultivation',

                    'gaming',
                    'software_apps_nd_telecommunications',
                    'law_financial_consulting_nd_accounting',
                    'medical_technology_health_nd_fitness',
                    'other',
                ];
            } else if (window.innerWidth <= 1230) {
                this.question3Ans = [
                    'technology',
                    'fintech',
                    'consumer_goods_nd_manufacturing',
                    'real_estate',
                    'health_care',
                    'quantum_information_science',
                    'education_nd_e_learning',
                    'artificial_intelligence',
                    'cannabis',
                    'automobile_manufacturing',
                    'robotics',
                    'biotechnology',
                    'clean_tech',
                    'advanced_consumer_goods_nd_manufacturing',
                    'oil_nd_gas',
                    '_5g_advanced_wireless_technology',
                    'finance',
                    'virtual_reality',
                    'pharmaceutical',
                    'non_profit_organization',
                    'electric_automobile_manufacturing',
                    'automation',
                    'gaming',
                    'cybersecurity',
                    'law_financial_consulting_nd_accounting',
                    '_3d_printing',
                    'biometrics',
                    'consumer_product_nd_services',
                    'cultivation',
                    'software_apps_nd_telecommunications',
                    'block_chain',
                    'medical_technology_health_nd_fitness',
                    'aerospace_nd_defense',
                    'other',
                ];
            } else {
                this.question3Ans = [
                    'technology',
                    'fintech',
                    'consumer_goods_nd_manufacturing',
                    'real_estate',
                    'health_care',
                    'education_nd_e_learning',
                    'artificial_intelligence',
                    'cannabis',
                    'robotics',
                    'clean_tech',
                    'automobile_manufacturing',
                    'quantum_information_science',
                    'advanced_consumer_goods_nd_manufacturing',
                    'automation',
                    'biotechnology',
                    '_5g_advanced_wireless_technology',
                    'pharmaceutical',
                    'non_profit_organization',
                    'virtual_reality',
                    'finance',
                    'oil_nd_gas',
                    'electric_automobile_manufacturing',
                    'cybersecurity',
                    '_3d_printing',
                    'gaming',
                    'biometrics',
                    'cultivation',
                    'law_financial_consulting_nd_accounting',
                    'consumer_product_nd_services',
                    'aerospace_nd_defense',
                    'block_chain',
                    'software_apps_nd_telecommunications',
                    'medical_technology_health_nd_fitness',
                    'other',
                ];
            }

            if (window.innerWidth <= 425) {
                this.question4Ans = [
                    'investor_business_plan',
                    'feasibility_study',
                    'pro_forma',
                    'grant_proposal',
                    'pitch_deck',
                    'private_placement_memorandum',
                    'software_and_apps',
                    'e_2_visa_business_plan',
                    'market_research',
                    'request_for_proposal',
                    'historic_financials',
                    'market_data_reports',
                    'marketing_plan',
                    'crowd_funding_reg_a',
                    'investor_relations',
                    'e_b5_business_plan',
                    'real_estate_business_plan',
                    'other',
                ];
            } else if (window.innerWidth <= 768) {
                this.question4Ans = [
                    'investor_business_plan',
                    'feasibility_study',
                    'private_placement_memorandum',
                    'pro_forma',
                    'software_and_apps',
                    'e_2_visa_business_plan',
                    'marketing_plan',
                    'request_for_proposal',
                    'historic_financials',
                    'market_data_reports',
                    'pitch_deck',
                    'real_estate_business_plan',
                    'grant_proposal',
                    'market_research',
                    'investor_relations',
                    'crowd_funding_reg_a',
                    'e_b5_business_plan',
                    'other',
                ];
            } else if (window.innerWidth <= 1230) {
                this.question4Ans = [
                    'investor_business_plan',
                    'feasibility_study',
                    'pro_forma',
                    'market_research',
                    'private_placement_memorandum',
                    'pitch_deck',
                    'grant_proposal',
                    'software_and_apps',
                    'e_2_visa_business_plan',
                    'request_for_proposal',
                    'historic_financials',
                    'market_data_reports',
                    'marketing_plan',
                    'investor_relations',
                    'real_estate_business_plan',
                    'crowd_funding_reg_a',
                    'e_b5_business_plan',
                    'other',
                ];
            } else {
                this.question4Ans = [
                    'investor_business_plan',
                    'feasibility_study',
                    'market_research',
                    'pro_forma',
                    'private_placement_memorandum',
                    'pitch_deck',
                    'grant_proposal',
                    'software_and_apps',
                    'request_for_proposal',
                    'historic_financials',
                    'market_data_reports',
                    'marketing_plan',
                    'e_2_visa_business_plan',
                    'investor_relations',
                    'real_estate_business_plan',
                    'crowd_funding_reg_a',
                    'e_b5_business_plan',
                    'other',
                ];
            }

            if (parseInt(this.$route.query?.bookConsult) === 1) {
                this.currentQuestion = 8;
                this.$router.push(this.localePath('/'));
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
                    window.scrollTo({ top: domRect.top + document.documentElement.scrollTop - (window.innerWidth < 768 ? 0 : 110), behavior: 'smooth' });
                }
            },

            selectAnswer1(ans) {
                this.params.what_phase_is_your_business_in = this.$t(ans, { locale: 'en' });
                this.nextQuestion();
            },
            selectAnswer2(ans) {
                if (this.questionSelectedAns1 !== 'Start-up') {
                    this.params.what_was_company_gross_revenue_last_year = this.$t(ans, { locale: 'en' });
                    this.nextQuestion();
                } else if (ans === 'no_capital') {
                    this.currentQuestion = 9;
                } else {
                    this.params.how_much_working_capital_do_you_personally_have_to_invest_in_your_business = this.$t(ans, { locale: 'en' });
                    this.nextQuestion();
                }
            },
            selectAnswer3(ans) {
                this.params.what_is_your_industry = this.$t(ans, { locale: 'en' });
                this.nextQuestion();
            },
            async selectAnswer4(ans) {
                this.params.what_service_best_suits_your_needs = this.$t(ans, { locale: 'en' });
                this.nextQuestion();

                await this.$recaptcha.reset();
                setTimeout(async () => {
                    try {
                        const id = await this.$recaptcha.render('businessQue', {
                            sitekey: '6LckFPUaAAAAABvoKl9AOVILIzozGu2HjHV5U6mK',
                        });
                        this.widgetId = id;
                    } catch (e) {}
                });
            },
            async selectAnswer5() {
                try {
                    this.$v.contactInfo.$touch();
                    if (this.$v.contactInfo.$invalid || this.$v.contactInfo.$error) {
                        return false;
                    }
                    const token = await this.$recaptcha.getResponse(this.widgetId);
                    if (!this.captchaError) {
                        this.params.what_is_your_full_name = this.contactInfo.fullName;
                        this.params.what_is_your_phone_number = this.contactInfo.phone;
                        this.params.what_is_your_email = this.contactInfo.email;
                        this.nextQuestion();
                        this.$recaptcha.reset(this.widgetId);
                    }
                } catch (error) {}
            },
            async selectAnswer6(ans) {
                this.params.are_you_ready_to_buy_this_service = ans;
                if (ans === 'Yes Go to Checkout') {
                    await this.onSubmit(9);
                } else {
                    // this.currentQuestion = 7;
                    await this.onSubmit(1);
                    this.$router.push(this.localePath('/book-consult?from=home-question'));
                }
            },
            backToHome() {
                this.currentQuestion = 1;
                this.params = [];
            },
            async onSubmit(step) {
                const data = await this.$hubspot.questionForm({ ...this.contactInfo, ...this.params });
                if (!data) {
                    return false;
                }
                this.$v.contactInfo.$reset();
                this.contactInfo = {
                    fullName: '',
                    email: '',
                    phone: '',
                };
                this.params = {
                    what_phase_is_your_business_in: '',
                    what_was_company_gross_revenue_last_year: '',
                    how_much_working_capital_do_you_personally_have_to_invest_in_your_business: '',
                    what_is_your_industry: '',
                    what_service_best_suits_your_needs: '',
                    what_is_your_full_name: '',
                    what_is_your_phone_number: '',
                    what_is_your_email: '',
                    are_you_ready_to_buy_this_service: '',
                };
                this.currentQuestion = step;
            },
        },
    };
</script>
