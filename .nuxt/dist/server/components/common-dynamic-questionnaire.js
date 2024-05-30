exports.ids = [32];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alphaNumericSpace; });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);

const alphaNumericSpace = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["helpers"].regex('alpha', /^[0-9a-zA-Z\s]*$/);


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-dynamic-questionnaire.vue?vue&type=template&id=1f27684a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container bg-[#FBFBFD] px-10 py-10 md:px-4 md:py-16 lg:px-[97px] lg:pb-[90px] lg:pt-[114px] xl:px-4",attrs:{"id":"dynamic-question-box"}},[(_vm.finalStepActivated)?_vm._ssrNode("<div class=\"flex flex-col items-center justify-between gap-5 md:flex-row md:gap-10 lg:gap-20 xl:gap-[98px]\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div>","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":"/assets/img/congo-icon.svg","alt":"Congo Icon Svg","loading":"lazy"}}),_vm._ssrNode(" <h2 class=\"mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[28px] xl:leading-[39px] [&>br]:hidden [&>br]:md:inline-block [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green\">"+(_vm._s(_vm.finalExitDetails.title))+"</h2> <p class=\"mb-6 text-sm font-medium -tracking-[0.04px] text-[#586376] lg:text-base xl:leading-[27px]\">"+(_vm._s(_vm.finalExitDetails.subTitle))+"</p>")],2),_vm._ssrNode(" <div class=\"flex gap-2\"><button class=\"b-btn w-full max-w-none py-4 text-xs uppercase sm:max-w-xs sm:py-5\">Go To Home</button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"order-1 h-[236px] w-full flex-none overflow-hidden rounded-2xl bg-transparent md:order-2 md:w-[323px] xl:h-[364px] xl:w-[497px]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":_vm.finalExitDetails.image,"alt":"Exit Details Img","loading":"lazy"}})],1)],2):_vm._ssrNode("<div id=\"question-box\" class=\"flex flex-col items-start justify-between gap-5 md:flex-row md:gap-10 lg:gap-20 xl:gap-[98px]\">","</div>",[_vm._ssrNode(((!_vm.isformCompleted && !_vm.questionnaireComplete)?("<div"+(_vm._ssrClass("order-2 flex-1 md:order-1 lg:mx-auto lg:max-w-[490px]",_vm.mainContainerClass))+"><p class=\"mb-4 text-base font-bold text-[#707070] lg:max-w-[470px] lg:text-[22px] lg:leading-[31px]\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.questionnaireHeader ? _vm.data.questionnaireHeader : "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.")+"\n            ")+"</p> <p class=\"mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.data.questionnaireSubHeader ? _vm.data.questionnaireSubHeader : 'Answer these questions so we can better help you with your Business objectives')+"\n            ")+"</p> <div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]\"><p class=\"text-[18px] font-semibold text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.currentQuestion.questionText))+"</p> <p class=\"whitespace-pre text-base text-lightgrey\">"+_vm._ssrEscape("Question "+_vm._s(_vm.linearCurrentStep)+" / "+_vm._s(_vm.totalSteps - _vm.offsetTotalStep + 1))+"</p></div> <div"+(_vm._ssrClass(null,_vm.currentStep === 1 ? 'grid grid-cols-2 gap-[3px] sm:grid-cols-3 md:gap-2' : 'flex flex-wrap gap-[3px] md:gap-2'))+">"+(_vm._ssrList((_vm.currentQuestion.answers.data),function(ans,index){return (((_vm.currentQuestion.showAllOption || index < 6)?("<button class=\"home-question w-auto min-w-[100px] px-[12px] sm:px-4\"><p>"+_vm._ssrEscape(_vm._s(ans.attributes.label))+"</p></button>"):"<!---->"))}))+" "+((!_vm.currentQuestion.showAllOption && _vm.currentQuestion.answers.data.length > 6)?("<button Search results"+(_vm._ssrClass("float-right ml-auto flex items-end border-b border-[#586376] text-base font-medium leading-4 text-[#586376]",{ 'overflow-hidden': _vm.activePopper }))+">\n                    See All\n                </button>"):"<!---->")+"</div></div>"):"<!---->")+" "),(_vm.isformCompleted && !_vm.questionnaireComplete)?_vm._ssrNode("<div class=\"order-2 flex-1 md:order-1 lg:mx-auto lg:max-w-[490px]\">","</div>",[_vm._ssrNode("<p class=\"mb-4 text-base font-bold text-[#707070] lg:max-w-[470px] lg:text-[22px] lg:leading-[31px]\">"+_vm._ssrEscape(_vm._s(_vm.data.formHeading))+"</p> <p class=\"mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]\">"+_vm._ssrEscape(_vm._s(_vm.data.formSubTitle))+"</p> <div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]\"><p class=\"text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.data.formQuestion))+"</p> <p class=\"text-[16px] leading-[28px] text-[#586376] sm:whitespace-nowrap\">Contact Information</p></div> "),_vm._ssrNode("<div id=\"questionaire-form\" class=\"grid w-full gap-[15px] sm:max-w-[485px] md:gap-[30px]\">","</div>",[_vm._ssrNode(((_vm.selectedAnswers.includes('yes-show-grant-link'))?("<div class=\"form-input-group\"><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('insert_grant_link_here')))+" name=\"grant_link\" autocomplete=\"on\""+(_vm._ssrAttr("value",(_vm.$v.contactInfo.grant_link.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.contactInfo.grant_link.$error }))+"></div>"):"<!---->")+" "+((_vm.selectedAnswers.includes('Yes-rfp'))?("<div class=\"form-input-group\"><input type=\"text\" placeholder=\"Enter Request For Proposal Link\" name=\"grant_link\" autocomplete=\"on\""+(_vm._ssrAttr("value",(_vm.$v.contactInfo.grant_link.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.contactInfo.grant_link.$error }))+"></div>"):"<!---->")+" <div class=\"form-input-group\"><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('full_name')))+" name=\"full_name\" autocomplete=\"on\""+(_vm._ssrAttr("value",(_vm.$v.contactInfo.full_name.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.contactInfo.full_name.$error }))+"></div> "),_vm._ssrNode("<div class=\"form-input-group\">","</div>",[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.$v.contactInfo.phone.$model),expression:"$v.contactInfo.phone.$model"},{name:"mask",rawName:"v-mask",value:(_vm.$mask.phoneMask),expression:"$mask.phoneMask"}],staticClass:"form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",class:{ error: _vm.$v.contactInfo.phone.$error },attrs:{"type":"text","placeholder":_vm.$t('phone_number'),"name":"phone","autocomplete":"on"},domProps:{"value":(_vm.$v.contactInfo.phone.$model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$v.contactInfo.phone, "$model", $event.target.value)}}},[])]),_vm._ssrNode(" <div class=\"form-input-group\"><input type=\"email\""+(_vm._ssrAttr("placeholder",_vm.$t('your_email_address')))+" name=\"email\" autocomplete=\"on\""+(_vm._ssrAttr("value",(_vm.$v.contactInfo.email.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.contactInfo.email.$error }))+"></div> "),_vm._ssrNode("<div>","</div>",[_c('recaptcha',{ref:"recaptcha1",attrs:{"id":"recaptcha1"},on:{"success":function($event){_vm.captchaError = false},"error":function($event){_vm.captchaError = true}}}),_vm._ssrNode(" "+((_vm.captchaError)?("<div class=\"captcha-error\">Please verify reCaptcha.</div>"):"<!---->"))],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.isSubmitting))+" class=\"b-btn w-full max-w-full py-[0.9rem] text-xs md:py-5\">"+_vm._ssrEscape(_vm._s(_vm.$t('next')))+"</button>")],2)],2):_vm._e(),_vm._ssrNode(" "+((_vm.questionnaireComplete && !_vm.isformCompleted)?("<div class=\"order-2 flex-1 md:order-1 lg:mx-auto lg:max-w-[490px]\"><p class=\"mb-4 text-base font-bold text-[#707070] lg:max-w-[470px] lg:text-[22px] lg:leading-[31px]\">"+_vm._ssrEscape(_vm._s(_vm.data.finalHeading ? _vm.data.finalHeading : _vm.finalHeading))+"</p> <p class=\"mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]\">"+_vm._ssrEscape(_vm._s(_vm.data.finalSubTitle ? _vm.data.finalSubTitle : _vm.finalSubTitle))+"</p> <div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]\"><p class=\"text-lg font-semibold leading-4 -tracking-[0.04px] text-lightgrey\">"+_vm._ssrEscape(_vm._s(_vm.data.finalQuestion ? _vm.data.finalQuestion : _vm.finalQuestion))+"</p> <p class=\"whitespace-pre text-base text-lightgrey\">"+_vm._ssrEscape("Question "+_vm._s(_vm.linearCurrentStep)+" / "+_vm._s(_vm.linearCurrentStep))+"</p></div> <div class=\"grid grid-cols-2 gap-[3px] md:gap-2\">"+(_vm._ssrList((_vm.data.navigation_buttons.data ? _vm.data.navigation_buttons.data : _vm.finalCTAs),function(cta,index){return ("<button class=\"home-question\"><p>"+_vm._ssrEscape(_vm._s(cta.attributes.label))+"</p></button>")}))+"</div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"order-1 h-[236px] w-full flex-none overflow-hidden rounded-2xl bg-transparent md:order-2 md:w-[323px] xl:h-[364px] xl:w-[497px]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":_vm.currentQuestion.image,"alt":"Current Question","loading":"lazy"}})],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-dynamic-questionnaire.vue?vue&type=template&id=1f27684a&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// EXTERNAL MODULE: ./helper/custom-validations.js
var custom_validations = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-dynamic-questionnaire.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var common_dynamic_questionnairevue_type_script_lang_js_ = ({
  props: {
    mainContainerClass: {
      type: String,
      default: 'max-w-[490px]'
    },
    data: {
      type: Object,
      default: () => ({
        name: 'Career Questionable',
        hubspotFormId: '965b7757-33e7-41b8-ad2e-c1506272caaa',
        formHeading: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.",
        formQuestion: 'What is your full name, email, and phone number?',
        formSubTitle: 'Fill out our contact form so one of our human resource representatives can get in touch with you for an interview.',
        formImage: 'https://venturefund.vercel.app/assets/img/career-que-1.jpg',
        finalHeading: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.\n",
        finalSubTitle: 'Answer our questions so we can better help you with your job search',
        finalQuestion: 'Do you want to buy this service now?',
        finalImage: 'https://venturefund.vercel.app/assets/img/career-que-1.jpg',
        finalCTAs: [{
          label: 'Book a Consultation',
          url: '/book-consult'
        }, {
          label: 'Checkout',
          url: '/checkout'
        }],
        questionnaries: [{
          stepsNo: 1,
          image: 'https://venturefund.vercel.app/assets/img/career-que-1.jpg',
          stepName: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.",
          title: 'Answer five questions so we can better help you with your Business objectives',
          questionText: 'What phase is your business in?',
          referencedBy: [],
          showAllOption: true,
          selected: '',
          key: '',
          answers: [{
            label: 'Start-up',
            value: 'Start-up'
          }, {
            label: 'Seeking Exit',
            value: 'Seeking Exit'
          }, {
            label: 'In-Revenue',
            value: 'In-Revenue'
          }]
        }]
      })
    }
  },
  data() {
    return {
      finalHeading: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.\n",
      finalSubTitle: 'Answer our questions so we can better help you with your job search',
      finalQuestion: 'Do you want to buy this service now?',
      finalImage: 'https://venturefund.vercel.app/assets/img/career-que-1.jpg',
      finalCTAs: [{
        label: 'Book a Consultation',
        url: '/book-consult'
      }, {
        label: 'Checkout',
        url: '/checkout'
      }],
      contactInfo: {
        grant_link: '',
        full_name: '',
        email: '',
        phone: ''
      },
      formAnswers: '',
      finalExitDetails: {
        title: 'We are sorry all of our clients require',
        subTitle: 'Starting your business is hard, and it requires long term commitment from founders. We recommend reaching out to grants, friends and family, or the SBA administration for start up capital and come back to us when your ready. We wish you all the best in your journey!',
        image: '',
        ctaButtons: [{
          label: 'Back To Home',
          url: '/'
        }]
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
        image: 'https://venturefund.vercel.app/assets/img/career-que-1.jpg',
        stepName: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth.",
        title: 'Answer five questions so we can better help you with your Business objectives',
        questionText: 'What phase is your business in?',
        referencedBy: [],
        showAllOption: true,
        selected: '',
        key: '',
        answers: [{
          label: 'Start-up',
          value: 'Start-up'
        }, {
          label: 'Seeking Exit',
          value: 'Seeking Exit'
        }, {
          label: 'In-Revenue',
          value: 'In-Revenue'
        }]
      }
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
        phone: ''
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
        window.scrollTo({
          top: domRect.top + document.documentElement.scrollTop - (window.innerWidth < 768 ? 0 : 140),
          behavior: 'smooth'
        });
      } else if (domRect !== null) {
        setTimeout(function () {
          domRect.scrollIntoView({
            behavior: 'smooth',
            block: 'end'
          });
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
      const findStepsWithReference = this.data.questionnaries.data.filter(i => {
        return parseInt(i.attributes.stepsNo) === this.currentStep && i.attributes.referencedBy.data.length > 0;
      });
      const findStepsWithoutReferenceIndex = this.data.questionnaries.data.findIndex(i => {
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
          const findIndex = this.selectedAnswers.findIndex(i => {
            return i === reference.attributes.value;
          });
          if (findIndex > -1) {
            this.currentQuestion = {
              ...step.attributes
            };
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
      const hasNextSteps = this.data.questionnaries.data.filter(i => {
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
          this.$router.push({
            path: url
          });
        });
      } else {
        this.$router.push({
          path: url
        });
      }
    },
    changeTotalSteps() {
      const distinctValues = this.data.questionnaries.data.map(item => parseInt(item.attributes.stepsNo)).filter((name, index, currentVal) => currentVal.indexOf(name) === index);
      this.totalSteps = distinctValues.length;
    },
    initCalendly() {
      var _this$$route$query;
      const calendlyScript = document.createElement('script');
      calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
      document.head.appendChild(calendlyScript);
      if (parseInt((_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.bookConsult) === 1) {
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
            qAndA: this.formAnswers
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
            phone: ''
          };
          this.answers = [];
          this.doYouWantToBuyServiceAnswer = '';
          this.currentQuestion = Infinity;
          this.submitSuccess = true;
          this.$router.push({
            path: '/thank-you-for-booking'
          });
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
    }
  },

  validations() {
    return {
      contactInfo: {
        grant_link: {
          required: Object(validators_["requiredIf"])(() => {
            return this.showGrantLinkInputField;
          })
        },
        full_name: {
          required: validators_["required"],
          alphaNumericSpace: custom_validations["a" /* alphaNumericSpace */],
          minLength: Object(validators_["minLength"])(3)
        },
        email: {
          required: validators_["required"],
          email: validators_["email"]
        },
        phone: {
          required: validators_["required"],
          minLength: Object(validators_["minLength"])(14),
          maxLength: Object(validators_["maxLength"])(14)
        }
      }
    };
  }
});
// CONCATENATED MODULE: ./components/common/common-dynamic-questionnaire.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_dynamic_questionnairevue_type_script_lang_js_ = (common_dynamic_questionnairevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-dynamic-questionnaire.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_dynamic_questionnairevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "560ba2f4"
  
)

/* harmony default export */ var common_dynamic_questionnaire = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-dynamic-questionnaire.js.map