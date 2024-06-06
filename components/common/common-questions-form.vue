<template>
    <section class="py-10 md:py-16 xl:py-[114px]">
        <div id="question-box" class="container px-10 md:px-4 lg:px-[97px] xl:px-4">
            <div class="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-10 lg:gap-20 xl:gap-[98px]">
                <div v-if="currentQuestion !== Infinity" class="order-2 flex-1 md:order-1 lg:mx-auto lg:max-w-[490px]">
                    <p class="mb-4 text-base font-bold text-[#707070] lg:max-w-[470px] lg:text-[22px] lg:leading-[31px]">
                        {{ title }}
                    </p>
                    <p v-if="!questions[currentQuestion - 1] && currentQuestion !== 100" class="mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]">
                        {{ formSubtitle }}
                    </p>
                    <p v-else class="mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]">
                        {{ description }}
                    </p>
                    <div>
                        <div v-if="questions[currentQuestion - 1]" class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]">
                            <p class="text-[18px] font-semibold leading-[18px] -tracking-[0.04px] text-[#586376]">{{ questions[currentQuestion - 1].attributes.question }}</p>
                            <p class="whitespace-pre text-[16px] text-[#586376]">Question {{ currentQuestion }} / {{ questions.length + 2 }}</p>
                        </div>

                        <div
                            v-if="questions[currentQuestion - 1]"
                            v-show="questions[currentQuestion - 1].attributes.options.data.length"
                            class="flex flex-row flex-wrap gap-[3px] md:gap-2"
                            :class="{ 'grid grid-cols-2 gap-[3px] sm:grid-cols-3 md:gap-2': currentQuestion == 1 }"
                        >
                            <button
                                v-for="(ans, index) in questions[currentQuestion - 1].attributes.options.data"
                                v-show="showAllOf.includes(currentQuestion) || index <= 5"
                                :key="index"
                                class="home-question w-auto px-4"
                                :class="{ 'px-12': typeof ans.attributes.title === 'string' && ans.attributes.title.length < 5 }"
                                @click="selectAnswer(questions[currentQuestion - 1].attributes.question, ans.attributes.title, ans.attributes.questionnaire_options)"
                            >
                                <p>{{ ans.attributes.title }}</p>
                            </button>
                        </div>
                        <button
                            v-show="!showAllOf.includes(currentQuestion) && questions[currentQuestion - 1] && questions[currentQuestion - 1].attributes.options.data.length > 6"
                            class="float-right ml-auto mt-3 flex items-end border-b border-[#586376] text-base font-medium leading-4 text-[#586376]"
                            @click="showAllOf.push(currentQuestion)"
                        >
                            {{ $t('see_all') }}
                        </button>

                        <div v-show="!questions[currentQuestion - 1] && currentQuestion !== 100">
                            <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]">
                                <p class="text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]">{{ formTitle }}</p>
                                <p class="text-[16px] leading-[28px] text-[#586376] sm:whitespace-nowrap">Contact Information</p>
                            </div>
                            <div class="grid w-full gap-[15px] sm:max-w-[485px] md:gap-[30px]">
                                <div v-if="showGrantLinkInputField" class="form-input-group">
                                    <input
                                        v-model="$v.contactInfo.grant_link.$model"
                                        type="text"
                                        :placeholder="$t('insert_grant_link_here')"
                                        autocomplete="on"
                                        name="grant_link"
                                        class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.contactInfo.grant_link.$error }"
                                    />
                                </div>

                                <div class="form-input-group">
                                    <input
                                        v-model="$v.contactInfo.full_name.$model"
                                        type="text"
                                        :placeholder="$t('full_name')"
                                        autocomplete="on"
                                        name="full_name"
                                        class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.contactInfo.full_name.$error }"
                                    />
                                </div>

                                <div class="form-input-group">
                                    <input
                                        v-model="$v.contactInfo.phone.$model"
                                        v-mask="$mask.phoneMask"
                                        type="text"
                                        :placeholder="$t('phone_number')"
                                        autocomplete="on"
                                        name="phone"
                                        class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.contactInfo.phone.$error }"
                                    />
                                </div>

                                <div class="form-input-group">
                                    <input
                                        v-model="$v.contactInfo.email.$model"
                                        type="email"
                                        :placeholder="$t('your_email_address')"
                                        autocomplete="on"
                                        name="email"
                                        class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                                        :class="{ error: $v.contactInfo.email.$error }"
                                        @input="$v.contactInfo.email.$model = $event.target.value.trim()"
                                    />
                                </div>
                                <button class="b-btn w-full max-w-full py-[0.9rem] text-xs md:py-5" @click="goToNext()">{{ $t('next') }}</button>
                            </div>
                        </div>

                        <div v-show="currentQuestion === 100">
                            <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]">
                                <p class="text-[18px] font-semibold -tracking-[0.04px] text-[#586376]">{{ $t('do_you_want_to_buy_this_service_now') }}</p>
                                <p class="whitespace-pre text-[16px] text-[#586376]">{{ $t('question') }} {{ questions.length + 1 }}</p>
                            </div>
                            <div class="grid grid-cols-2 gap-[3px] md:gap-2">
                                <button v-if="!isCareerPage" :disabled="isSubmitting" class="home-question" @click="selectFinalQuestion('Book a Consultation')">
                                    <p>{{ $t('go_to_checkout') }}</p>
                                </button>
                                <button class="home-question" @click="selectFinalQuestion('Book a Consultation')">
                                    <p>{{ $t('book_a_consultation_small') }}</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="submitSuccess" class="flex-1">
                    <nuxt-img src="/images/congo-icon.svg" alt="Icon Congo" loading="lazy" />
                    <div v-if="!isNoCapital">
                        <h2
                            class="mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[24px] xl:leading-[32px] [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green [&>br]:hidden [&>br]:md:inline-block"
                            v-html="$t('congratulations_you_have_span_successfully_span_br_answered_all_the_questions')"
                        ></h2>
                        <p
                            class="mb-6 text-sm font-medium -tracking-[0.04px] text-[#586376] lg:text-base xl:leading-[27px]"
                            v-html="
                                $t(
                                    'it_is_a_long_established_fact_that_a_reader_will_be_distracted_by_the_readable_content_of_a_page_when_looking_at_its_layout_the_point_of_using_lorem_ipsum_is_that_it_has_a_more_or_less_normal_distribution_of_letters'
                                )
                            "
                        ></p>
                    </div>
                    <div v-else>
                        <h2
                            class="mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[24px] xl:leading-[32px] [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green [&>br]:hidden [&>br]:md:inline-block"
                        >
                            We are sorry all of our clients require <br /><span>working capital</span> in order to qualify
                        </h2>
                        <p class="mb-6 text-sm font-medium -tracking-[0.04px] text-[#586376] lg:text-base xl:leading-[27px]">
                            Starting your business is hard, and it requires long term commitment from founders. We recommend reaching out to grants, friends and family, or the SBA administration for start up capital and come back to us when
                            your ready. We wish you all the best in your journey!
                        </p>
                    </div>

                    <button class="b-btn w-full max-w-none py-4 text-xs uppercase sm:max-w-xs sm:py-5" @click="backToHome()">{{ $t('back_to_home') }}</button>
                </div>
                <div class="order-1 h-[236px] w-full flex-none overflow-hidden rounded-2xl bg-transparent md:order-2 md:w-[323px] xl:h-[364px] xl:w-[497px]">
                    <nuxt-img v-if="isNoCapital" format="webp" src="/images/que-9.webp" alt="Question - 9" loading="lazy" class="h-full w-full object-cover" />

                    <nuxt-img v-else-if="questions[currentQuestion - 1]" format="webp" :src="questions[currentQuestion - 1].attributes.imgUrl || '/images/grant-que-2.webp'" alt="Grant Que 2" class="h-full w-full object-cover" />

                    <nuxt-img v-else format="webp" src="/images/grant-que-2.webp" alt="Grant Que 2" loading="lazy" class="h-full w-full object-cover" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { required, email, minLength, maxLength, requiredIf } from 'vuelidate/lib/validators';
    import { alphaNumericSpace } from '~/helper/custom-validations';

    export default {
        name: 'CommonQuestion',

        props: {
            isCareerPage: {
                type: Boolean,
                default: false,
            },
            questions: {
                type: Array,
                default: () => [
                    {
                        id: 1,
                        attributes: {
                            question: 'What phase is your business in?',
                            imageUrl: '/images/long-banner-1.webp',
                            options: {
                                data: [
                                    {
                                        id: 1,
                                        attributes: {
                                            title: 'Start-up',
                                        },
                                    },
                                    {
                                        id: 2,
                                        attributes: {
                                            title: 'Seeking Exit',
                                        },
                                    },
                                    {
                                        id: 3,
                                        attributes: {
                                            title: 'In-Revenue',
                                        },
                                    },
                                    {
                                        id: 5,
                                        attributes: {
                                            title: 'IPO & CPO',
                                        },
                                    },
                                    {
                                        id: 32,
                                        attributes: {
                                            title: 'M&A',
                                        },
                                    },
                                    {
                                        id: 33,
                                        attributes: {
                                            title: 'Accquisition',
                                        },
                                    },
                                ],
                            },
                        },
                    },
                ],
            },
            title: {
                type: String,
                default: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.",
            },
            description: {
                type: String,
                default: 'Answer these questions so we can better help you with your Business objectives.',
            },
        },

        asyncData({ from, $cookies }) {
            if (from) {
                $cookies.set('from_route', from?.path);
            }
        },

        data() {
            return {
                currentQuestion: 1,
                showAllOf: [],
                captchaError: false,
                submitSuccess: false,
                ansNoCapital: '',
                answers: {},
                formSubtitle: '',
                formTitle: '',
                showGrantLinkInputField: false,
                doYouWantToBuyServiceAnswer: '',
                contactInfo: {
                    grant_link: '',
                    full_name: '',
                    email: '',
                    phone: '',
                },
                widgetId: null,
                isSubmitting: false,
                selectedAnswers: [],
                isNoCapital: false,
            };
        },

        computed: {},

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
                    grant_link: {
                        required: requiredIf(() => {
                            return this.answers[7] === 'Yes';
                        }),
                    },
                    full_name: { required, alphaNumericSpace, minLength: minLength(3) },
                    email: { required, email },
                    phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                },
            };
        },

        mounted() {
            this.initCalendly();
            if (window.location.href.includes('/careers')) {
                this.formSubtitle = `Fill out our contact form so one of our human resource representatives can get in touch with you for an interview.`;
                this.formTitle = `What is your full name, email, and phone number?`;
            } else if (window.location.href.includes('/grant-service')) {
                this.formSubtitle = `Fill out our contact form so one of our accredited advisors can get in touch with you`;
                this.formTitle = `Please provide the following information, including the link to your grant and your contact details.`;
            } else {
                this.formSubtitle = `Fill out our contact form so one of our accredited advisors can get in touch with you for your free consultation`;
                this.formTitle = `What is your full name, email, and phone number?`;
            }
        },

        methods: {
            initCalendly() {
                const calendlyScript = document.createElement('script');
                calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
                document.head.appendChild(calendlyScript);

                if (parseInt(this.$route.query?.bookConsult) === 1) {
                    this.currentQuestion = 1;
                    if (this.$cookies.get('from_route')) {
                        this.$router.push(this.$cookies.get('from_route'));
                        this.$cookies.remove('from_route');
                    } else {
                        this.$router.push('/');
                    }
                    setTimeout(() => {
                        this.scrollToQuestion();
                    }, 50);
                }
            },
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

            selectAnswer(question, ans, additionalQuestions) {
                this.selectedAnswers.push(ans.toLowerCase());
                this.answers[question] = ans;
                if (this.selectedAnswers.length > 1 && this.selectedAnswers[0] === 'start-up' && this.selectedAnswers[1] === 'no capital') {
                    this.currentQuestion = Infinity;
                    this.submitSuccess = true;
                    this.isNoCapital = true;
                    return;
                }
                if (Array.isArray(additionalQuestions?.data) && additionalQuestions.data[0]) {
                    this.questions = [...this.questions.slice(0, this.currentQuestion), ...additionalQuestions.data, ...this.questions.slice(this.currentQuestion)];
                }
                this.currentQuestion++;

                if (this.answers['In addition to a proposal do you need assistance with grant research and grant application submissions?']?.toLowerCase() === 'no just a proposal') {
                    this.currentQuestion = 100;
                }

                if (this.answers[`Have you found the grant you're applying to?`]?.toLowerCase() === 'yes') {
                    this.showGrantLinkInputField = true;
                } else if (this.answers[`Have you found the grant you're applying to?`]?.toLowerCase() === 'no') {
                    this.formTitle = this.formTitle.replace('including the link to your grant', '');
                }
            },

            async goToNext() {
                try {
                    this.$v.contactInfo.$touch();
                    if (this.$v.contactInfo.$invalid || this.$v.contactInfo.$error) {
                        return false;
                    }
                    // const token = await this.$recaptcha.getResponse(this.widgetId);
                    if (!this.captchaError) {
                        this.nextQuestion();
                        this.currentQuestion = 100;
                        this.$recaptcha.reset(this.widgetId);
                    }
                } catch (error) {}
            },

            async selectFinalQuestion(ans) {
                this.doYouWantToBuyServiceAnswer = ans;
                if (ans === 'Go to checkout') {
                    if (this.contactInfo.email) {
                        await this.onSubmit();
                    }
                } else {
                    if (this.contactInfo.email) {
                        await this.onSubmit();
                    }
                    this.$router.push(this.localePath(`/book-consult`));
                }
            },

            async onSubmit() {
                try {
                    this.isSubmitting = true;
                    const data = await this.$hubspot.submitQuestionnaire({
                        ...this.contactInfo,
                        qAndA: Object.keys(this.answers)
                            .map((key) => key + ' -> ' + this.answers[key])
                            .join('\n\n'),
                    });
                    if (!data) {
                        return false;
                    }

                    this.$v.contactInfo.$reset();
                    this.isSubmitting = false;
                    this.contactInfo = {
                        grant_link: '',
                        full_name: '',
                        email: '',
                        phone: '',
                    };
                    this.answers = [];
                    this.doYouWantToBuyServiceAnswer = '';
                    this.currentQuestion = Infinity;
                    this.submitSuccess = true;
                } catch (error) {
                    // this.submitSuccess = true
                    // this.currentQuestion = Infinity;
                }
            },

            backToHome() {
                this.currentQuestion = 1;
                this.submitSuccess = false;
                this.params = [];
            },
        },
    };
</script>
