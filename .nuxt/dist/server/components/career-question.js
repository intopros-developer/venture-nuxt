exports.ids = [17];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alphaNumericSpace; });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);

const alphaNumericSpace = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["helpers"].regex('alpha', /^[0-9a-zA-Z\s]*$/);


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-question.vue?vue&type=template&id=6812bcf4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-10 md:py-16 xl:pb-14 xl:pt-[114px]"},[_vm._ssrNode("<div id=\"question-box\" class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"flex flex-col items-center justify-between gap-5 md:flex-row md:gap-10 lg:gap-20 xl:gap-[98px]\">","</div>",[_vm._ssrNode("<div class=\"order-2 flex-1 md:order-1 lg:mx-auto lg:max-w-[490px]\""+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion < 8) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<p class=\"mb-4 text-base font-bold text-[#707070] lg:max-w-[470px] lg:text-[22px] lg:leading-[31px]\">"+_vm._ssrEscape(_vm._s(_vm.$t('your_trusted_partner_in_navigating_through_uncertain_times_let_s_accelerate_your_growth')))+"</p> "+((_vm.currentQuestion === 1)?("<p class=\"mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t('answer_five_questions_so_we_can_better_help_you_with_your_business_objectives'))+"\n                ")+"</p>"):(_vm.currentQuestion === 6)?("<p class=\"mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t('fill_out_our_contact_form_so_one_of_our_human_resource_representatives_can_get_in_touch_with_you_for_an_interview'))+"\n                ")+"</p>"):("<p class=\"mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]\">"+_vm._ssrEscape(_vm._s(_vm.$t('answer_our_questions_so_we_can_better_help_you_with_your_job_search')))+"</p>"))+" <div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 1) ? '' : 'none' }))+"><div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]\"><p class=\"text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('what_is_your_current_position')))+"</p> <p class=\"whitespace-pre text-[13px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('question'))+" 1 / 7")+"</p></div> <div class=\"grid grid-cols-2 gap-[3px] sm:grid-cols-3 md:gap-2\">"+(_vm._ssrList((_vm.question1Ans),function(ans,index){return ("<button class=\"home-question\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t(ans)))+"</p></button>")}))+"</div></div> <div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 2) ? '' : 'none' }))+"><div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]\"><p class=\"text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations')))+"</p> <p class=\"whitespace-pre text-[13px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('question'))+" 2 / 7")+"</p></div> <div class=\"flex flex-wrap gap-[3px] md:gap-2\"><button class=\"home-question w-auto min-w-[128px] px-14\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t('yes')))+"</p></button> <button class=\"home-question w-auto min-w-[128px] px-14\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t('no')))+"</p></button></div></div> <div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 3) ? '' : 'none' }))+"><div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]\"><p class=\"text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('have_you_worked_on_multiple_projects_or_single_projects_at_a_time')))+"</p> <p class=\"whitespace-pre text-[13px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('question'))+" 3 / 7")+"</p></div> <div class=\"flex flex-wrap gap-[3px] md:gap-2\">"+(_vm._ssrList((_vm.question3Ans),function(ans,index){return ("<button class=\"home-question w-auto min-w-[128px] px-4\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t(ans)))+"</p></button>")}))+"</div></div> <div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 4) ? '' : 'none' }))+"><div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]\"><p class=\"text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('have_you_lead_a_team_before')))+"</p> <p class=\"whitespace-pre text-[13px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('question'))+" 4 / 7")+"</p></div> <div class=\"flex flex-wrap gap-[3px] md:gap-2\"><button class=\"home-question w-auto min-w-[128px] px-14\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t('yes')))+"</p></button> <button class=\"home-question w-auto min-w-[128px] px-14\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t('no')))+"</p></button></div></div> <div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 5) ? '' : 'none' }))+"><div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[26px]\"><p class=\"text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('what_position_are_you_interested_in')))+"</p> <p class=\"whitespace-pre text-[13px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('question'))+" 5 / 7")+"</p></div> <div class=\"mb-3 flex w-full\"><button class=\"float-right ml-auto flex items-end border-b border-[#586376] text-base font-medium leading-4 text-[#586376]\""+(_vm._ssrStyle(null,null, { display: (_vm.ans5DisplayCount === 6) ? '' : 'none' }))+">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.$t('see_all'))+"\n                        ")+"</button></div> <div class=\"grid grid-cols-2 gap-[3px] sm:grid-cols-3 md:gap-2\">"+(_vm._ssrList((_vm.question5Ans),function(ans,index){return ("<button class=\"home-question\""+(_vm._ssrStyle(null,null, { display: (_vm.ans5DisplayCount === 6 ? index < _vm.ans5DisplayCount : index != '-1') ? '' : 'none' }))+"><p>"+_vm._ssrEscape(_vm._s(_vm.$t(ans)))+"</p></button>")}))+"</div></div> "),_vm._ssrNode("<div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 6) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]\"><p class=\"text-[18px] font-semibold leading-[22px] -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('what_is_your_full_name_email_and_phone_number')))+"</p> <p class=\"whitespace-pre text-[13px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('contact_information')))+"</p></div> "),_vm._ssrNode("<div class=\"grid w-full gap-[15px] sm:max-w-[485px] md:gap-[30px]\">","</div>",[_vm._ssrNode("<div class=\"form-input-group\"><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('full_name')))+(_vm._ssrAttr("value",(_vm.$v.contactInfo.full_name.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.contactInfo.full_name.$error }))+"></div> "),_vm._ssrNode("<div class=\"form-input-group\">","</div>",[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.$v.contactInfo.phone.$model),expression:"$v.contactInfo.phone.$model"},{name:"mask",rawName:"v-mask",value:(_vm.$mask.phoneMask),expression:"$mask.phoneMask"}],staticClass:"form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",class:{ error: _vm.$v.contactInfo.phone.$error },attrs:{"type":"text","placeholder":_vm.$t('phone_number')},domProps:{"value":(_vm.$v.contactInfo.phone.$model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$v.contactInfo.phone, "$model", $event.target.value)}}},[])]),_vm._ssrNode(" <div class=\"form-input-group\"><input type=\"email\""+(_vm._ssrAttr("placeholder",_vm.$t('your_email_address')))+(_vm._ssrAttr("value",(_vm.$v.contactInfo.email.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.contactInfo.email.$error }))+"></div> <button class=\"b-btn w-full max-w-full py-[0.9rem] text-sm md:py-5\">"+_vm._ssrEscape(_vm._s(_vm.$t('book_a_consultation')))+"</button>")],2)],2),_vm._ssrNode(" <div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 7) ? '' : 'none' }))+"><div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]\"><p class=\"text-[18px] font-semibold -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('do_you_want_to_book_your_initial_interview_now')))+"</p> <p class=\"whitespace-pre text-[16px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('question'))+" 7 / 7")+"</p></div> <div class=\"grid grid-cols-2 gap-[3px] md:gap-2\"><button class=\"home-question\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t('not_right_now')))+"</p></button> <button class=\"home-question\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t('book_interview')))+"</p></button></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"order-2 flex-1 md:order-1\""+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 8) ? '' : 'none' }))+">","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":"/assets/img/congo-icon.svg","alt":"Congo Icon","loading":"lazy"}}),_vm._ssrNode(" <h2 class=\"mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[24px] xl:leading-[32px] [&>br]:hidden [&>br]:md:inline-block [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green\">"+(_vm._s(_vm.$t('congratulations_you_have_br_span_successfully_span_booked_your_consultation')))+"</h2> <p class=\"mb-6 text-sm font-medium -tracking-[0.04px] text-[#586376] lg:text-base xl:leading-[27px]\">"+(_vm._s(_vm.$t('one_of_our_human_resources_representatives_will_be_in_touch_with_you_soon_thank_you')))+"</p> <button class=\"b-btn w-full max-w-none py-4 text-xs uppercase sm:max-w-xs sm:py-5\">"+_vm._ssrEscape(_vm._s(_vm.$t('back_to_home')))+"</button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"order-1 h-[236px] w-full flex-none overflow-hidden rounded-2xl bg-black/50 md:order-2 md:w-[323px] xl:h-[364px] xl:w-[497px]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":("/assets/img/career-que-" + _vm.currentQuestion + ".jpg"),"alt":"Career QUestion Icon","loading":"lazy"}})],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/career/career-question.vue?vue&type=template&id=6812bcf4&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// EXTERNAL MODULE: ./helper/custom-validations.js
var custom_validations = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-question.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var career_questionvue_type_script_lang_js_ = ({
  name: 'CommonQuestion',
  data() {
    return {
      currentQuestion: 1,
      captchaError: false,
      ans5DisplayCount: 6,
      question1Ans: ['bachelor_candidate', 'mba_candidate', 'masters_non_mba', 'md_candidate', 'jd_candidate', 'doctoral_phd', 'professional'],
      question3Ans: ['one_project', 'two_three_projects', 'five_or_more'],
      question5Ans: ['consulting', 'financial_advisory', 'legal', 'product_developer', 'registered_rep', 'product_designer', 'supply_chain_advisor', 'ai_consultant', 'business_analyst', 'marketing_nd_sales', 'tech_implementation', 'public_relations', 'product_engineer', 'ux_ui_designer', 'content_manager', 'recruiter', 'internship', 'research_analyst', 'data_engineer', 'robotics_engineer', 'managing_director'],
      params: {
        what_is_your_current_position: '',
        do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations: '',
        have_you_worked_on_multiple_projects_or_single_projects_at_a_time: '',
        have_you_lead_a_team_before: '',
        what_position_are_you_interested_in: '',
        do_you_want_to_book_your_initial_interview_now: ''
      },
      contactInfo: {
        full_name: '',
        email: '',
        phone: ''
      },
      widgetId: null
    };
  },
  computed: {
    questionSelectedAns1() {
      const data = this.params.filter(param => param.question === 'What phase is your business in?');
      return data.length > 0 ? data[0].answer : '';
    }
  },
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
    var _this$$route$query;
    const calendlyScript = document.createElement('script');
    calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    document.head.appendChild(calendlyScript);
    if (parseInt((_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.bookConsult) === 1) {
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
        window.scrollTo({
          top: domRect.top + document.documentElement.scrollTop - (window.innerWidth < 768 ? 30 : 140),
          behavior: 'smooth'
        });
      }
    },
    selectAnswer1(ans) {
      this.params.what_is_your_current_position = this.$t(ans, {
        locale: 'en'
      });
      this.$emit('changeQue1', this.params.what_is_your_current_position);
      this.nextQuestion();
    },
    selectAnswer2(ans) {
      this.params.do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations = this.$t(ans, {
        locale: 'en'
      });
      this.nextQuestion();
    },
    selectAnswer3(ans) {
      this.params.have_you_worked_on_multiple_projects_or_single_projects_at_a_time = this.$t(ans, {
        locale: 'en'
      });
      this.nextQuestion();
    },
    selectAnswer4(ans) {
      this.params.have_you_lead_a_team_before = this.$t(ans, {
        locale: 'en'
      });
      this.nextQuestion();
    },
    async selectAnswer5(ans) {
      this.params.what_position_are_you_interested_in = this.$t(ans, {
        locale: 'en'
      });
      this.nextQuestion();

      // await this.$recaptcha.reset();
      setTimeout(async () => {
        try {
          const id = await this.$recaptcha.render('careerQue', {
            sitekey: '6LckFPUaAAAAABvoKl9AOVILIzozGu2HjHV5U6mK'
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
      const data = await this.$hubspot.careerQuestionsForm({
        ...this.contactInfo,
        ...this.params
      });
      if (!data) {
        return false;
      }
      this.$v.contactInfo.$reset();
      this.contactInfo = {
        full_name: '',
        email: '',
        phone: ''
      };
      this.params = {
        what_is_your_current_position: '',
        do_you_have_experience_in_evaluating_and_fixing_challenges_that_arise_in_organizations: '',
        have_you_worked_on_multiple_projects_or_single_projects_at_a_time: '',
        have_you_lead_a_team_before: '',
        what_position_are_you_interested_in: '',
        do_you_want_to_book_your_initial_interview_now: ''
      };
      this.currentQuestion = 8;
    },
    backToHome() {
      this.currentQuestion = 1;
      this.params = [];
    }
  }
});
// CONCATENATED MODULE: ./components/career/career-question.vue?vue&type=script&lang=js&
 /* harmony default export */ var career_career_questionvue_type_script_lang_js_ = (career_questionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/career/career-question.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  career_career_questionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e270537"
  
)

/* harmony default export */ var career_question = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=career-question.js.map