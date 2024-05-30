exports.ids = [40];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alphaNumericSpace; });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);

const alphaNumericSpace = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["helpers"].regex('alpha', /^[0-9a-zA-Z\s]*$/);


/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-questions-form.vue?vue&type=template&id=b05dcdea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-10 md:py-16 xl:py-[114px]"},[_vm._ssrNode("<div id=\"question-box\" class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"flex flex-col items-center justify-between gap-5 md:flex-row md:gap-10 lg:gap-20 xl:gap-[98px]\">","</div>",[(_vm.currentQuestion !== Infinity)?_vm._ssrNode("<div class=\"order-2 flex-1 md:order-1 lg:mx-auto lg:max-w-[490px]\">","</div>",[_vm._ssrNode("<p class=\"mb-4 text-base font-bold text-[#707070] lg:max-w-[470px] lg:text-[22px] lg:leading-[31px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.title)+"\n                ")+"</p> "+((!_vm.questions[_vm.currentQuestion - 1] && _vm.currentQuestion !== 100)?("<p class=\"mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.formSubtitle)+"\n                ")+"</p>"):("<p class=\"mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.description)+"\n                ")+"</p>"))+" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode(((_vm.questions[_vm.currentQuestion - 1])?("<div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]\"><p class=\"text-[18px] font-semibold leading-[18px] -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.questions[_vm.currentQuestion - 1].attributes.question))+"</p> <p class=\"whitespace-pre text-[16px] text-[#586376]\">"+_vm._ssrEscape("Question "+_vm._s(_vm.currentQuestion)+" / "+_vm._s(_vm.questions.length + 2))+"</p></div>"):"<!---->")+" "+((_vm.questions[_vm.currentQuestion - 1])?("<div"+(_vm._ssrClass("flex flex-row flex-wrap gap-[3px] md:gap-2",{ 'grid grid-cols-2 gap-[3px] sm:grid-cols-3 md:gap-2': _vm.currentQuestion == 1 }))+(_vm._ssrStyle(null,null, { display: (_vm.questions[_vm.currentQuestion - 1].attributes.options.data.length) ? '' : 'none' }))+">"+(_vm._ssrList((_vm.questions[_vm.currentQuestion - 1].attributes.options.data),function(ans,index){return ("<button"+(_vm._ssrClass("home-question w-auto px-4",{ 'px-12': typeof ans.attributes.title === 'string' && ans.attributes.title.length < 5 }))+(_vm._ssrStyle(null,null, { display: (_vm.showAllOf.includes(_vm.currentQuestion) || index <= 5) ? '' : 'none' }))+"><p>"+_vm._ssrEscape(_vm._s(ans.attributes.title))+"</p></button>")}))+"</div>"):"<!---->")+" <button class=\"float-right ml-auto mt-3 flex items-end border-b border-[#586376] text-base font-medium leading-4 text-[#586376]\""+(_vm._ssrStyle(null,null, { display: (!_vm.showAllOf.includes(_vm.currentQuestion) && _vm.questions[_vm.currentQuestion - 1] && _vm.questions[_vm.currentQuestion - 1].attributes.options.data.length > 6) ? '' : 'none' }))+">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$t('see_all'))+"\n                    ")+"</button> "),_vm._ssrNode("<div"+(_vm._ssrStyle(null,null, { display: (!_vm.questions[_vm.currentQuestion - 1] && _vm.currentQuestion !== 100) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]\"><p class=\"text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.formTitle))+"</p> <p class=\"text-[16px] leading-[28px] text-[#586376] sm:whitespace-nowrap\">Contact Information</p></div> "),_vm._ssrNode("<div class=\"grid w-full gap-[15px] sm:max-w-[485px] md:gap-[30px]\">","</div>",[_vm._ssrNode(((_vm.showGrantLinkInputField)?("<div class=\"form-input-group\"><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('insert_grant_link_here')))+" autocomplete=\"on\" name=\"grant_link\""+(_vm._ssrAttr("value",(_vm.$v.contactInfo.grant_link.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.contactInfo.grant_link.$error }))+"></div>"):"<!---->")+" <div class=\"form-input-group\"><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('full_name')))+" autocomplete=\"on\" name=\"full_name\""+(_vm._ssrAttr("value",(_vm.$v.contactInfo.full_name.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.contactInfo.full_name.$error }))+"></div> "),_vm._ssrNode("<div class=\"form-input-group\">","</div>",[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.$v.contactInfo.phone.$model),expression:"$v.contactInfo.phone.$model"},{name:"mask",rawName:"v-mask",value:(_vm.$mask.phoneMask),expression:"$mask.phoneMask"}],staticClass:"form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",class:{ error: _vm.$v.contactInfo.phone.$error },attrs:{"type":"text","placeholder":_vm.$t('phone_number'),"autocomplete":"on","name":"phone"},domProps:{"value":(_vm.$v.contactInfo.phone.$model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$v.contactInfo.phone, "$model", $event.target.value)}}},[])]),_vm._ssrNode(" <div class=\"form-input-group\"><input type=\"email\""+(_vm._ssrAttr("placeholder",_vm.$t('your_email_address')))+" autocomplete=\"on\" name=\"email\""+(_vm._ssrAttr("value",(_vm.$v.contactInfo.email.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.contactInfo.email.$error }))+"></div> <button class=\"b-btn w-full max-w-full py-[0.9rem] text-xs md:py-5\">"+_vm._ssrEscape(_vm._s(_vm.$t('next')))+"</button>")],2)],2),_vm._ssrNode(" <div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 100) ? '' : 'none' }))+"><div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]\"><p class=\"text-[18px] font-semibold -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('do_you_want_to_buy_this_service_now')))+"</p> <p class=\"whitespace-pre text-[16px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('question'))+" "+_vm._s(_vm.questions.length + 1))+"</p></div> <div class=\"grid grid-cols-2 gap-[3px] md:gap-2\">"+((!_vm.isCareerPage)?("<button"+(_vm._ssrAttr("disabled",_vm.isSubmitting))+" class=\"home-question\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t('go_to_checkout')))+"</p></button>"):"<!---->")+" <button class=\"home-question\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t('book_a_consultation_small')))+"</p></button></div></div>")],2)],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1\""+(_vm._ssrStyle(null,null, { display: (_vm.submitSuccess) ? '' : 'none' }))+">","</div>",[_c('nuxt-img',{attrs:{"src":"/assets/img/congo-icon.svg","alt":"Icon Congo","loading":"lazy"}}),_vm._ssrNode(" "+((!_vm.isNoCapital)?("<div><h2 class=\"mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[24px] xl:leading-[32px] [&>br]:hidden [&>br]:md:inline-block [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green\">"+(_vm._s(_vm.$t('congratulations_you_have_span_successfully_span_br_answered_all_the_questions')))+"</h2> <p class=\"mb-6 text-sm font-medium -tracking-[0.04px] text-[#586376] lg:text-base xl:leading-[27px]\">"+(_vm._s(
                            _vm.$t(
                                'it_is_a_long_established_fact_that_a_reader_will_be_distracted_by_the_readable_content_of_a_page_when_looking_at_its_layout_the_point_of_using_lorem_ipsum_is_that_it_has_a_more_or_less_normal_distribution_of_letters'
                            )
                        ))+"</p></div>"):("<div><h2 class=\"mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[24px] xl:leading-[32px] [&>br]:hidden [&>br]:md:inline-block [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green\">\n                        We are sorry all of our clients require <br><span>working capital</span> in order to qualify\n                    </h2> <p class=\"mb-6 text-sm font-medium -tracking-[0.04px] text-[#586376] lg:text-base xl:leading-[27px]\">\n                        Starting your business is hard, and it requires long term commitment from founders. We recommend reaching out to grants, friends and family, or the SBA administration for start up capital and come back to us when\n                        your ready. We wish you all the best in your journey!\n                    </p></div>"))+" <button class=\"b-btn w-full max-w-none py-4 text-xs uppercase sm:max-w-xs sm:py-5\">"+_vm._ssrEscape(_vm._s(_vm.$t('back_to_home')))+"</button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"order-1 h-[236px] w-full flex-none overflow-hidden rounded-2xl bg-transparent md:order-2 md:w-[323px] xl:h-[364px] xl:w-[497px]\">","</div>",[(_vm.isNoCapital)?_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":"/assets/img/que-9.jpg","alt":"Question - 9","loading":"lazy"}}):(_vm.questions[_vm.currentQuestion - 1])?_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":_vm.questions[_vm.currentQuestion - 1].attributes.imgUrl || '/assets/img/grant-que-2.png',"alt":"Grant Que 2"}}):_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":"/assets/img/grant-que-2.png","alt":"Grant Que 2","loading":"lazy"}})],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-questions-form.vue?vue&type=template&id=b05dcdea&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// EXTERNAL MODULE: ./helper/custom-validations.js
var custom_validations = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-questions-form.vue?vue&type=script&lang=js&
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



/* harmony default export */ var common_questions_formvue_type_script_lang_js_ = ({
  name: 'CommonQuestion',
  props: {
    isCareerPage: {
      type: Boolean,
      default: false
    },
    questions: {
      type: Array,
      default: () => [{
        id: 1,
        attributes: {
          question: 'What phase is your business in?',
          imageUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/3AoO3pwlO8gdIbqx9EGwAI/460b932f11086a9a2212af4f1e306917/grant_application.jpg',
          options: {
            data: [{
              id: 1,
              attributes: {
                title: 'Start-up'
              }
            }, {
              id: 2,
              attributes: {
                title: 'Seeking Exit'
              }
            }, {
              id: 3,
              attributes: {
                title: 'In-Revenue'
              }
            }, {
              id: 5,
              attributes: {
                title: 'IPO & CPO'
              }
            }, {
              id: 32,
              attributes: {
                title: 'M&A'
              }
            }, {
              id: 33,
              attributes: {
                title: 'Accquisition'
              }
            }]
          }
        }
      }]
    },
    title: {
      type: String,
      default: "Your trusted partner in navigating through uncertain times. Let's accelerate your growth."
    },
    description: {
      type: String,
      default: 'Answer these questions so we can better help you with your Business objectives.'
    }
  },
  asyncData({
    from,
    $cookies
  }) {
    if (from) {
      $cookies.set('from_route', from === null || from === void 0 ? void 0 : from.path);
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
        phone: ''
      },
      widgetId: null,
      isSubmitting: false,
      selectedAnswers: [],
      isNoCapital: false
    };
  },
  computed: {},
  watch: {
    currentQuestion: {
      handler() {
        this.scrollToQuestion();
      },
      deep: true
    }
  },
  validations() {
    return {
      contactInfo: {
        grant_link: {
          required: Object(validators_["requiredIf"])(() => {
            return this.answers[7] === 'Yes';
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
        window.scrollTo({
          top: domRect.top + document.documentElement.scrollTop - (window.innerWidth < 768 ? 30 : 140),
          behavior: 'smooth'
        });
      }
    },
    selectAnswer(question, ans, additionalQuestions) {
      var _this$answers$InAddi, _this$answers, _this$answers2;
      this.selectedAnswers.push(ans.toLowerCase());
      this.answers[question] = ans;
      if (this.selectedAnswers.length > 1 && this.selectedAnswers[0] === 'start-up' && this.selectedAnswers[1] === 'no capital') {
        this.currentQuestion = Infinity;
        this.submitSuccess = true;
        this.isNoCapital = true;
        return;
      }
      if (Array.isArray(additionalQuestions === null || additionalQuestions === void 0 ? void 0 : additionalQuestions.data) && additionalQuestions.data[0]) {
        this.questions = [...this.questions.slice(0, this.currentQuestion), ...additionalQuestions.data, ...this.questions.slice(this.currentQuestion)];
      }
      this.currentQuestion++;
      if (((_this$answers$InAddi = this.answers['In addition to a proposal do you need assistance with grant research and grant application submissions?']) === null || _this$answers$InAddi === void 0 ? void 0 : _this$answers$InAddi.toLowerCase()) === 'no just a proposal') {
        this.currentQuestion = 100;
      }
      if (((_this$answers = this.answers[`Have you found the grant you're applying to?`]) === null || _this$answers === void 0 ? void 0 : _this$answers.toLowerCase()) === 'yes') {
        this.showGrantLinkInputField = true;
      } else if (((_this$answers2 = this.answers[`Have you found the grant you're applying to?`]) === null || _this$answers2 === void 0 ? void 0 : _this$answers2.toLowerCase()) === 'no') {
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
          qAndA: Object.keys(this.answers).map(key => key + ' -> ' + this.answers[key]).join('\n\n')
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
      } catch (error) {
        // this.submitSuccess = true
        // this.currentQuestion = Infinity;
      }
    },
    backToHome() {
      this.currentQuestion = 1;
      this.submitSuccess = false;
      this.params = [];
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-questions-form.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_questions_formvue_type_script_lang_js_ = (common_questions_formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-questions-form.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_questions_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5cb85975"
  
)

/* harmony default export */ var common_questions_form = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-questions-form.js.map