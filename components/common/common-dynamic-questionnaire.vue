<template>
    <section id="dynamic-question-box" class="container bg-[#FBFBFD] px-10 py-10 md:px-4 md:py-16 lg:px-[97px] lg:pb-[90px] lg:pt-[114px] xl:px-4">
        <div v-if="finalStepActivated" class="flex flex-col items-center justify-between gap-5 md:flex-row md:gap-10 lg:gap-20 xl:gap-[98px]">
            <div>
                <div>
                    <img src="/images/congo-icon.svg" alt="Congo Icon Svg" loading="lazy" />

                    <h2
                        class="mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[28px] xl:leading-[39px] [&>br]:hidden [&>br]:md:inline-block [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green"
                        v-html="finalExitDetails.title"
                    ></h2>
                    <p class="mb-6 text-sm font-medium -tracking-[0.04px] text-[#586376] lg:text-base xl:leading-[27px]" v-html="finalExitDetails.subTitle"></p>
                </div>
                <div class="flex gap-2">
                    <button class="b-btn w-full max-w-none py-4 text-xs uppercase sm:max-w-xs sm:py-5" @click="resetGoToHome">Go To Home</button>
                </div>
            </div>
            <div class="order-1 h-[236px] w-full flex-none overflow-hidden rounded-2xl bg-transparent md:order-2 md:w-[323px] xl:h-[364px] xl:w-[497px]">
                <img :src="finalExitDetails.image" alt="Exit Details Img" loading="lazy" class="h-full w-full object-cover" />
            </div>
        </div>
        <div v-else id="question-box" class="flex flex-col items-start justify-between gap-5 md:flex-row md:gap-10 lg:gap-20 xl:gap-[98px]">
            <div v-if="!isformCompleted && !questionnaireComplete" class="order-2 flex-1 md:order-1 lg:mx-auto lg:max-w-[490px]" :class="mainContainerClass">
                <p class="mb-4 text-base font-bold text-[#707070] lg:max-w-[470px] lg:text-[22px] lg:leading-[31px]">
                    {{ data.questionnaireHeader ? data.questionnaireHeader : "Your trusted partner in navigating through uncertain times. Let's accelerate your growth." }}
                </p>
                <p class="mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]">
                    {{ data.questionnaireSubHeader ? data.questionnaireSubHeader : 'Answer these questions so we can better help you with your Business objectives' }}
                </p>
                <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]">
                    <p class="text-[18px] font-semibold text-[#586376]">{{ currentQuestion.questionText }}</p>
                    <p class="whitespace-pre text-base text-lightgrey">Question {{ linearCurrentStep }} / {{ totalSteps - offsetTotalStep + 1 }}</p>
                </div>
                <div :class="currentStep === 1 ? 'grid grid-cols-2 gap-[3px] sm:grid-cols-3 md:gap-2' : 'flex flex-wrap gap-[3px] md:gap-2'">
                    <template v-for="(ans, index) in currentQuestion.answers.data">
                        <button v-if="currentQuestion.showAllOption || index < 6" :key="ans.attributes.label + index" class="home-question w-auto min-w-[100px] px-[12px] sm:px-4" @pointerup="goToNextWithDelay(ans.attributes, currentStep)">
                            <p>{{ ans.attributes.label }}</p>
                        </button>
                    </template>

                    <button
                        v-if="!currentQuestion.showAllOption && currentQuestion.answers.data.length > 6"
                        :class="{ 'overflow-hidden': activePopper }"
                        Search
                        results
                        class="float-right ml-auto flex items-end border-b border-[#586376] text-base font-medium leading-4 text-[#586376]"
                        @click="currentQuestion.showAllOption = true"
                    >
                        See All
                    </button>
                </div>
            </div>
            <div v-if="isformCompleted && !questionnaireComplete" class="order-2 flex-1 md:order-1 lg:mx-auto lg:max-w-[490px]">
                <p class="mb-4 text-base font-bold text-[#707070] lg:max-w-[470px] lg:text-[22px] lg:leading-[31px]">{{ data.formHeading }}</p>
                <p class="mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]">{{ data.formSubTitle }}</p>
                <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]">
                    <p class="text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]">{{ data.formQuestion }}</p>
                    <p class="text-[16px] leading-[28px] text-[#586376] sm:whitespace-nowrap">Contact Information</p>
                </div>
                <div id="questionaire-form" class="grid w-full gap-[15px] sm:max-w-[485px] md:gap-[30px]">
                    <div v-if="selectedAnswers.includes('yes-show-grant-link')" class="form-input-group">
                        <input
                            v-model="$v.contactInfo.grant_link.$model"
                            type="text"
                            :placeholder="$t('insert_grant_link_here')"
                            name="grant_link"
                            autocomplete="on"
                            class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                            :class="{ error: $v.contactInfo.grant_link.$error }"
                        />
                    </div>

                    <div v-if="selectedAnswers.includes('Yes-rfp')" class="form-input-group">
                        <input
                            v-model="$v.contactInfo.grant_link.$model"
                            type="text"
                            placeholder="Enter Request For Proposal Link"
                            name="grant_link"
                            autocomplete="on"
                            class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                            :class="{ error: $v.contactInfo.grant_link.$error }"
                        />
                    </div>

                    <div class="form-input-group">
                        <input
                            v-model="$v.contactInfo.full_name.$model"
                            type="text"
                            :placeholder="$t('full_name')"
                            name="full_name"
                            autocomplete="on"
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
                            name="phone"
                            autocomplete="on"
                            class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                            :class="{ error: $v.contactInfo.phone.$error }"
                        />
                    </div>

                    <div class="form-input-group">
                        <input
                            v-model="$v.contactInfo.email.$model"
                            type="email"
                            :placeholder="$t('your_email_address')"
                            name="email"
                            autocomplete="on"
                            class="form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]"
                            :class="{ error: $v.contactInfo.email.$error }"
                            @input="$v.contactInfo.email.$model = $event.target.value.trim()"
                        />
                    </div>
                    <div>
                        <recaptcha id="recaptcha1" ref="recaptcha1" @success="captchaError = false" @error="captchaError = true" />
                        <div v-if="captchaError" class="captcha-error">Please verify reCaptcha.</div>
                    </div>
                    <button :disabled="isSubmitting" class="b-btn w-full max-w-full py-[0.9rem] text-xs md:py-5" @click="onSubmit">{{ $t('next') }}</button>
                </div>
            </div>

            <div v-if="questionnaireComplete && !isformCompleted" class="order-2 flex-1 md:order-1 lg:mx-auto lg:max-w-[490px]">
                <p class="mb-4 text-base font-bold text-[#707070] lg:max-w-[470px] lg:text-[22px] lg:leading-[31px]">{{ data.finalHeading ? data.finalHeading : finalHeading }}</p>
                <p class="mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]">{{ data.finalSubTitle ? data.finalSubTitle : finalSubTitle }}</p>
                <div class="mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]">
                    <p class="text-lg font-semibold leading-4 -tracking-[0.04px] text-lightgrey">{{ data.finalQuestion ? data.finalQuestion : finalQuestion }}</p>
                    <p class="whitespace-pre text-base text-lightgrey">Question {{ linearCurrentStep }} / {{ linearCurrentStep }}</p>
                </div>
                <div class="grid grid-cols-2 gap-[3px] md:gap-2">
                    <button v-for="(cta, index) in data.navigation_buttons.data ? data.navigation_buttons.data : finalCTAs" :key="index" class="home-question" @click="openFinalPage(cta.attributes.url)">
                        <p>{{ cta.attributes.label }}</p>
                    </button>
                </div>
            </div>
            <div class="order-1 h-[236px] w-full flex-none overflow-hidden rounded-2xl bg-transparent md:order-2 md:w-[323px] xl:h-[364px] xl:w-[497px]">
                <img :src="currentQuestion.image" alt="Current Question" class="h-full w-full object-cover" loading="lazy" />
            </div>
        </div>
    </section>
</template>
<script>
    import { required, email, minLength, maxLength, requiredIf } from 'vuelidate/lib/validators';
    import { alphaNumericSpace } from '~/helper/custom-validations';
    export default {
        props: {
            mainContainerClass: {
                type: String,
                default: 'max-w-[490px]',
            },
            data: {
                type: Object,
                default: () => ({
                    name: 'Career Questionable',
                    hubspotFormId: '965b7757-33e7-41b8-ad2e-c1506272caaa',
                    formHeading: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.",
                    formQuestion: 'What is your full name, email, and phone number?',
                    formSubTitle: 'Fill out our contact form so one of our human resource representatives can get in touch with you for an interview.',
                    formImage: '/images/career-que-1.webp',
                    finalHeading: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.\n",
                    finalSubTitle: 'Answer our questions so we can better help you with your job search',
                    finalQuestion: 'Do you want to buy this service now?',
                    finalImage: '/images/career-que-1.webp',
                    finalCTAs: [
                        {
                            label: 'Book a Consultation',
                            url: '/book-consult',
                        },
                        {
                            label: 'Checkout',
                            url: '/checkout',
                        },
                    ],
                    questionnaries: [
                        {
                            stepsNo: 1,
                            image: '/images/career-que-1.webp',
                            stepName: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.",
                            title: 'Answer five questions so we can better help you with your Business objectives',
                            questionText: 'What phase is your business in?',
                            referencedBy: [],
                            showAllOption: true,
                            selected: '',
                            key: '',
                            answers: [
                                {
                                    label: 'Start-up',
                                    value: 'Start-up',
                                },
                                {
                                    label: 'Seeking Exit',
                                    value: 'Seeking Exit',
                                },
                                {
                                    label: 'In-Revenue',
                                    value: 'In-Revenue',
                                },
                            ],
                        },
                    ],
                }),
            },
        },
        data() {
            return {
                finalHeading: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.\n",
                finalSubTitle: 'Answer our questions so we can better help you with your job search',
                finalQuestion: 'Do you want to buy this service now?',
                finalImage: '/images/career-que-1.webp',
                finalCTAs: [
                    {
                        label: 'Book a Consultation',
                        url: '/book-consult',
                    },
                    {
                        label: 'Checkout',
                        url: '/checkout',
                    },
                ],
                contactInfo: {
                    grant_link: '',
                    full_name: '',
                    email: '',
                    phone: '',
                },
                formAnswers: '',
                finalExitDetails: {
                    title: 'We are sorry all of our clients require',
                    subTitle:
                        'Starting your business is hard, and it requires long term commitment from founders. We recommend reaching out to grants, friends and family, or the SBA administration for start up capital and come back to us when your ready. We wish you all the best in your journey!',
                    image: '',
                    ctaButtons: [
                        {
                            label: 'Back To Home',
                            url: '/',
                        },
                    ],
                },
                captchaError: false,
                widgetId: null,
                isSubmitting: false,
                showGrantLinkInputField: false,
                isformCompleted: false,
                questionnaireComplete: false,
                finalStepActivated: false,
                currentStep: 1,
                linearCurrentStep: 1,
                offsetTotalStep: 0,
                totalSteps: 1,
                selectedAnswers: [],
                currentQuestion: {
                    stepsNo: 1,
                    image: '/images/career-que-1.webp',
                    stepName: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.",
                    title: 'Answer five questions so we can better help you with your Business objectives',
                    questionText: 'What phase is your business in?',
                    referencedBy: [],
                    showAllOption: true,
                    selected: '',
                    key: '',
                    answers: [
                        {
                            label: 'Start-up',
                            value: 'Start-up',
                        },
                        {
                            label: 'Seeking Exit',
                            value: 'Seeking Exit',
                        },
                        {
                            label: 'In-Revenue',
                            value: 'In-Revenue',
                        },
                    ],
                },
            };
        },
        mounted() {
            this.initCalendly();
            this.changeTotalSteps();
            if (this.data && this.data.questionnaries && this.data.questionnaries.data && this.data.questionnaries.data.length > 0) {
                this.currentQuestion = this.data.questionnaries.data[0].attributes;
            }
        },
        methods: {
            resetGoToHome() {
                // force push
                this.$router.push('/');
                this.contactInfo = {
                    grant_link: '',
                    full_name: '',
                    email: '',
                    phone: '',
                };
                this.formAnswers = '';
                this.showGrantLinkInputField = false;
                this.isformCompleted = false;
                this.questionnaireComplete = false;
                this.finalStepActivated = false;
                this.selectedAnswers = [];
                this.currentStep = 1;
                this.linearCurrentStep = 1;
                this.offsetTotalStep = 0;
                this.changeTotalSteps();
                if (this.data && this.data.questionnaries && this.data.questionnaries.data && this.data.questionnaries.data.length > 0) {
                    this.currentQuestion = this.data.questionnaries.data[0].attributes;
                }
            },
            goToNext() {
                try {
                    this.$v.contactInfo.$touch();
                    if (this.$v.contactInfo.$invalid || this.$v.contactInfo.$error) {
                        return false;
                    }
                    // const token = await this.$recaptcha.getResponse(this.widgetId);
                    if (!this.captchaError) {
                        this.isformCompleted = false;
                        this.currentQuestion.image = this.data.finalImage;
                        this.questionnaireComplete = true;
                        this.$recaptcha.reset(this.widgetId);
                    }
                } catch (error) {}
            },
            mouseGoneUp() {
                console.log('UO');
            },
            scrollToQuestion() {
                let domRect = document.querySelector('#dynamic-question-box');
                if (domRect !== null && window.innerWidth >= 800) {
                    domRect = document.querySelector('#dynamic-question-box').getBoundingClientRect();
                    window.scrollTo({ top: domRect.top + document.documentElement.scrollTop - (window.innerWidth < 768 ? 0 : 140), behavior: 'smooth' });
                } else if (domRect !== null) {
                    setTimeout(function () {
                        domRect.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    }, 130);
                }
            },
            goToNextWithDelay(selectedAnswer, step) {
                const here = this;
                setTimeout(function () {
                    here.saveAndGoToNextStep(selectedAnswer, step);
                }, 200);
            },
            saveAndGoToNextStep(selectedAnswer, step) {
                this.scrollToQuestion();
                if (step === 1) {
                    this.$emit('changeQue1', selectedAnswer.label);
                }
                this.formAnswers += this.currentQuestion.questionText + ' -> ' + selectedAnswer.label + '\n\n';
                if (selectedAnswer.exitCondition && selectedAnswer.exitCondition.data && typeof selectedAnswer.exitCondition.data === 'object' && selectedAnswer.exitCondition.data.attributes) {
                    if (selectedAnswer.exitCondition.data.attributes.slug === 'skip-to-checkout') {
                        this.isformCompleted = false;
                        this.currentQuestion.image = selectedAnswer.exitCondition.data.attributes.image;
                        this.questionnaireComplete = true;
                        return;
                    }
                    this.finalExitDetails = selectedAnswer.exitCondition.data.attributes;
                    this.finalStepActivated = true;
                    this.linearCurrentStep += 1;
                    return;
                }
                this.selectedAnswers.push(selectedAnswer.value);
                this.currentStep += 1;
                const findStepsWithReference = this.data.questionnaries.data.filter((i) => {
                    return parseInt(i.attributes.stepsNo) === this.currentStep && i.attributes.referencedBy.data.length > 0;
                });
                const findStepsWithoutReferenceIndex = this.data.questionnaries.data.findIndex((i) => {
                    return parseInt(i.attributes.stepsNo) === this.currentStep && i.attributes.referencedBy.data.length === 0;
                });
                if (findStepsWithReference.length === 0 && findStepsWithoutReferenceIndex < 0) {
                    // go to final Step
                    this.currentQuestion.image = this.data.formImage;
                    this.isformCompleted = true;
                    this.linearCurrentStep += 1;
                    return;
                }
                for (const step of findStepsWithReference) {
                    for (const reference of step.attributes.referencedBy.data) {
                        const findIndex = this.selectedAnswers.findIndex((i) => {
                            return i === reference.attributes.value;
                        });
                        if (findIndex > -1) {
                            this.currentQuestion = { ...step.attributes };
                            this.linearCurrentStep += 1;
                            return;
                        }
                    }
                }
                if (findStepsWithoutReferenceIndex > -1) {
                    this.currentQuestion = this.data.questionnaries.data[findStepsWithoutReferenceIndex].attributes;
                    this.linearCurrentStep += 1;
                    return;
                }
                const hasNextSteps = this.data.questionnaries.data.filter((i) => {
                    return parseInt(i.attributes.stepsNo) === this.currentStep + 1;
                });
                if (hasNextSteps && hasNextSteps.length > 0) {
                    this.offsetTotalStep += 1;
                    this.saveAndGoToNextStep(selectedAnswer);
                    return;
                }
                this.isformCompleted = true;
            },
            openFinalPage(url) {
                if (this.contactInfo.email !== '') {
                    this.onSubmit().then(() => {
                        this.$router.push({ path: url });
                    });
                } else {
                    this.$router.push({ path: url });
                }
            },
            changeTotalSteps() {
                const distinctValues = this.data.questionnaries.data.map((item) => parseInt(item.attributes.stepsNo)).filter((name, index, currentVal) => currentVal.indexOf(name) === index);
                this.totalSteps = distinctValues.length;
            },
            initCalendly() {
                const loadCalendlyScript = () => {
                    const calendlyScript = document.createElement('script');
                    calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
                    document.head.appendChild(calendlyScript);
                };

                let loadTimeout;
                const delayTime = 1000;

                const resetLoadTimeout = () => {
                    if (loadTimeout) {
                        clearTimeout(loadTimeout);
                    }
                    loadTimeout = setTimeout(loadCalendlyScript, delayTime);
                };

                document.addEventListener('mousemove', resetLoadTimeout);

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
                    this.$v.contactInfo.$touch();
                    if (this.$v.contactInfo.$invalid || this.$v.contactInfo.$error) {
                        return false;
                    }
                    if (!this.captchaError) {
                        this.isSubmitting = true;
                        const data = await this.$hubspot.submitQuestionnaire({
                            ...this.contactInfo,
                            formId: this.data.hubspotFormId,
                            qAndA: this.formAnswers,
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
                        this.$router.push({ path: '/thank-you-for-booking' });
                        this.widgetId ? await this.$recaptcha.reset(this.widgetId) : await this.$recaptcha.reset();
                    } else {
                        console.log('Not Capturing');
                    }
                } catch (error) {
                    console.log(error);
                    this.isSubmitting = false;
                    // this.submitSuccess = true
                    // this.currentQuestion = Infinity;
                }
            },
        },

        validations() {
            return {
                contactInfo: {
                    grant_link: {
                        required: requiredIf(() => {
                            return this.showGrantLinkInputField;
                        }),
                    },
                    full_name: { required, alphaNumericSpace, minLength: minLength(3) },
                    email: { required, email },
                    phone: { required, minLength: minLength(14), maxLength: maxLength(14) },
                },
            };
        },
    };
</script>
