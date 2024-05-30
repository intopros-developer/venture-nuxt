exports.ids = [10];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alphaNumericSpace; });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);

const alphaNumericSpace = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["helpers"].regex('alpha', /^[0-9a-zA-Z\s]*$/);


/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/business-plan-google-ad/business-plan-google-ad-question-form.vue?vue&type=template&id=5939720c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"bg-[#FBFBFD] py-10 md:py-16 lg:pb-[90px] lg:pt-[114px]"},[_vm._ssrNode("<div id=\"question-box\" class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"flex flex-col items-start justify-between gap-5 md:flex-row\">","</div>",[_vm._ssrNode("<div class=\"order-2 flex-1 md:order-1 lg:mx-auto lg:max-w-[500px]\""+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion < 7) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<h2 class=\"mb-[30px] text-base font-bold text-[#586376] md:text-[#707070] lg:max-w-[470px] lg:text-[22px] lg:leading-[31px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t('your_trusted_partner_in_navigating_through_uncertain_times_let_s_accelerate_your_growth'))+"\n                ")+"</h2> "+((_vm.currentQuestion !== 5)?("<p class=\"mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376] lg:max-w-[450px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t('answer_five_questions_so_we_can_better_help_you_with_your_business_objectives'))+"\n                ")+"</p>"):("<p class=\"mb-[31px] text-[17px] font-medium leading-5 -tracking-[0.03px] text-[#586376]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t('fill_out_our_contact_form_so_one_of_our_accredited_advisors_can_get_in_touch_with_you_for_your_free_consultation'))+"\n                ")+"</p>"))+" <div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 1) ? '' : 'none' }))+"><div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]\"><p class=\"text-[18px] font-semibold leading-[18px] -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('what_phase_is_your_business_in')))+"</p> <p class=\"whitespace-pre text-[16px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('question'))+" 1 / 5")+"</p></div> <div class=\"grid grid-cols-2 gap-[3px] sm:grid-cols-3 md:gap-2\">"+(_vm._ssrList((_vm.question1Ans),function(ans,index){return ("<button class=\"home-question\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t(ans)))+"</p></button>")}))+"</div></div> <div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 2) ? '' : 'none' }))+"><div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]\">"+((_vm.questionSelectedAns1 !== 'Start-up')?("<p class=\"text-[18px] font-semibold -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('what_was_your_company_gross_revenue_last_year')))+"</p>"):("<p class=\"text-[18px] font-semibold text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('how_much_working_capital_do_you_personally_have_to_invest_in_your_business')))+"</p>"))+" <p class=\"whitespace-pre text-[16px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('question'))+" 2 / 5")+"</p></div> "+((_vm.questionSelectedAns1 !== 'Start-up')?("<div class=\"flex flex-wrap gap-[3px] md:gap-2\">"+(_vm._ssrList((_vm.question2Ans),function(ans,index){return ("<button class=\"home-question w-auto px-[6px] sm:px-4\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t(ans)))+"</p></button>")}))+"</div>"):("<div class=\"flex flex-wrap gap-[3px] md:gap-2\">"+(_vm._ssrList((_vm.question2AnsStartUp),function(ans,index){return ("<button class=\"home-question w-auto px-[6px] sm:px-4\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t(ans)))+"</p></button>")}))+"</div>"))+"</div> <div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 3) ? '' : 'none' }))+"><div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]\"><p class=\"text-[18px] font-semibold -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('what_is_your_industry')))+"</p> <p class=\"whitespace-pre text-[16px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('question'))+" 3 / 5")+"</p></div> <div class=\"flex flex-wrap gap-[3px] md:gap-2\">"+(_vm._ssrList((_vm.question3Ans),function(ans,index){return ("<button class=\"home-question w-auto px-4\""+(_vm._ssrStyle(null,null, { display: (_vm.ans3DisplayCount === 6 ? index < _vm.ans3DisplayCount : index != '-1') ? '' : 'none' }))+"><p>"+_vm._ssrEscape(_vm._s(_vm.$t(ans)))+"</p></button>")}))+" <button class=\"float-right ml-auto flex items-end border-b border-[#586376] text-base font-medium leading-4 text-[#586376]\""+(_vm._ssrStyle(null,null, { display: (_vm.ans3DisplayCount === 6) ? '' : 'none' }))+">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.$t('see_all'))+"\n                        ")+"</button></div></div> <div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 4) ? '' : 'none' }))+"><div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]\"><p class=\"text-[18px] font-semibold -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('what_service_best_suits_your_needs')))+"</p> <p class=\"whitespace-pre text-[16px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('question'))+" 4 / 5")+"</p></div> <div class=\"flex flex-wrap gap-[3px] md:gap-2\">"+(_vm._ssrList((_vm.question4Ans),function(ans,index){return ("<button class=\"home-question w-auto px-4\""+(_vm._ssrStyle(null,null, { display: (_vm.ans4DisplayCount === 6 ? index < _vm.ans4DisplayCount : index != '-1') ? '' : 'none' }))+"><p>"+_vm._ssrEscape(_vm._s(_vm.$t(ans)))+"</p></button>")}))+" <button class=\"float-right ml-auto flex items-end border-b border-[#586376] text-base font-medium leading-4 text-[#586376]\""+(_vm._ssrStyle(null,null, { display: (_vm.ans4DisplayCount === 6) ? '' : 'none' }))+">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.$t('see_all'))+"\n                        ")+"</button></div></div> "),_vm._ssrNode("<div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 5) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:items-end md:justify-between lg:mb-[27px]\"><p class=\"text-[18px] font-semibold leading-[28px] -tracking-[0.04px] text-[#586376] lg:whitespace-nowrap\">"+_vm._ssrEscape(_vm._s(_vm.$t('what_is_your_full_name_email_and_phone_number')))+"</p> <p class=\"text-[16px] leading-[28px] text-[#586376] sm:whitespace-nowrap\">"+_vm._ssrEscape(_vm._s(_vm.$t('contact_information')))+"</p></div> "),_vm._ssrNode("<div class=\"grid w-full gap-[15px] sm:max-w-[485px] md:gap-[30px]\">","</div>",[_vm._ssrNode("<div class=\"form-input-group\"><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('full_name')))+(_vm._ssrAttr("value",(_vm.$v.contactInfo.fullName.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.contactInfo.fullName.$error }))+"></div> "),_vm._ssrNode("<div class=\"form-input-group\">","</div>",[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.$v.contactInfo.phone.$model),expression:"$v.contactInfo.phone.$model"},{name:"mask",rawName:"v-mask",value:(_vm.$mask.phoneMask),expression:"$mask.phoneMask"}],staticClass:"form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",class:{ error: _vm.$v.contactInfo.phone.$error },attrs:{"type":"text","placeholder":_vm.$t('phone_number')},domProps:{"value":(_vm.$v.contactInfo.phone.$model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$v.contactInfo.phone, "$model", $event.target.value)}}},[])]),_vm._ssrNode(" <div class=\"form-input-group\"><input type=\"email\""+(_vm._ssrAttr("placeholder",_vm.$t('your_email_address')))+(_vm._ssrAttr("value",(_vm.$v.contactInfo.email.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.contactInfo.email.$error }))+"></div> <button class=\"b-btn w-full max-w-full py-[0.9rem] text-xs md:py-5\">"+_vm._ssrEscape(_vm._s(_vm.$t('next')))+"</button>")],2)],2),_vm._ssrNode(" <div"+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 6) ? '' : 'none' }))+"><div class=\"mb-5 flex flex-col gap-4 leading-[19px] sm:flex-row md:justify-between lg:mb-[27px]\"><p class=\"text-[18px] font-semibold -tracking-[0.04px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('are_you_ready_to_buy_this_service')))+"</p> <p class=\"whitespace-pre text-[16px] text-[#586376]\">"+_vm._ssrEscape(_vm._s(_vm.$t('question'))+" 5 / 5")+"</p></div> <div class=\"grid grid-cols-2 gap-[3px] md:gap-2\"><button class=\"home-question\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t('yes_go_to_checkout')))+"</p></button> <button class=\"home-question\"><p>"+_vm._ssrEscape(_vm._s(_vm.$t('no_book_consultation_first')))+"</p></button></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"order-2 flex-1 md:order-1\""+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 8) ? '' : 'none' }))+">","</div>",[_c('nuxt-img',{attrs:{"src":"/assets/img/congo-icon.svg","alt":"Icon Congo","loading":"lazy"}}),_vm._ssrNode(" <h2 class=\"mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[28px] xl:leading-[39px] [&>br]:hidden [&>br]:md:inline-block [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green\">"+(_vm._s(_vm.$t('congratulations_you_have_br_span_successfully_span_booked_your_consultation')))+"</h2> <p class=\"mb-6 text-sm font-medium -tracking-[0.04px] text-[#586376] lg:text-base xl:leading-[27px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t('home_question_success_paragraph_1'))+"\n                ")+"</p> <button class=\"b-btn w-full max-w-none bg-[#00a1f1] py-4 text-xs uppercase sm:max-w-xs sm:py-5 lg:max-w-[333px]\">"+_vm._ssrEscape(_vm._s(_vm.$t('back_to_home')))+"</button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"order-2 flex-1 md:order-1\""+(_vm._ssrStyle(null,null, { display: (_vm.currentQuestion === 9) ? '' : 'none' }))+">","</div>",[_c('nuxt-img',{attrs:{"src":"/assets/img/congo-icon.svg","alt":"Icon Congo","loading":"lazy"}}),_vm._ssrNode(" <h2 class=\"mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[28px] xl:leading-[39px] [&>br]:hidden [&>br]:md:inline-block [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green\">"+(_vm._s(_vm.$t('we_are_sorry_all_of_our_clients_require_br_span_working_capital_span_in_order_to_qualify')))+"</h2> <p class=\"mb-6 text-sm font-medium -tracking-[0.04px] text-[#586376] lg:text-base xl:leading-[27px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$t('home_question_success_paragraph_2'))+"\n                ")+"</p> <button class=\"b-btn w-full max-w-none bg-[#00a1f1] py-4 text-xs uppercase sm:max-w-xs sm:py-5 lg:max-w-[333px]\">"+_vm._ssrEscape(_vm._s(_vm.$t('back_to_home')))+"</button>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"order-1 h-[236px] w-full flex-none overflow-hidden rounded-2xl bg-black/50 md:order-2 md:w-[323px] xl:h-[364px] xl:w-[497px]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":("/assets/img/que-" + _vm.currentQuestion + ".jpg"),"alt":"Question Image","loading":"lazy"}})],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/business-plan-google-ad/business-plan-google-ad-question-form.vue?vue&type=template&id=5939720c&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// EXTERNAL MODULE: ./helper/custom-validations.js
var custom_validations = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/business-plan-google-ad/business-plan-google-ad-question-form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var business_plan_google_ad_question_formvue_type_script_lang_js_ = ({
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
        are_you_ready_to_buy_this_service: ''
      },
      contactInfo: {
        fullName: '',
        email: '',
        phone: ''
      },
      widgetId: null
    };
  },
  validations() {
    return {
      contactInfo: {
        fullName: {
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
  computed: {
    questionSelectedAns1() {
      return this.params.what_phase_is_your_business_in;
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
  mounted() {
    var _this$$route$query;
    // const calendlyScript = document.createElement('script');
    // calendlyScript.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    // document.head.appendChild(calendlyScript);
    if (window.innerWidth <= 390) {
      this.question3Ans = ['technology', 'health_care', 'consumer_goods_nd_manufacturing', 'real_estate', 'education_nd_e_learning', 'fintech', 'artificial_intelligence', 'automobile_manufacturing', 'finance', 'cannabis', 'robotics', 'clean_tech', 'quantum_information_science', 'advanced_consumer_goods_nd_manufacturing', 'automation', 'biotechnology', '_5g_advanced_wireless_technology', 'non_profit_organization', 'oil_nd_gas', 'virtual_reality', 'pharmaceutical', 'electric_automobile_manufacturing', 'gaming', 'biometrics', 'cultivation', '_3d_printing', 'cybersecurity', 'law_financial_consulting_nd_accounting', 'consumer_product_nd_services', 'aerospace_nd_defense', 'block_chain', 'software_apps_nd_telecommunications', 'medical_technology_health_nd_fitness', 'other'];
    } else if (window.innerWidth <= 425) {
      this.question3Ans = ['technology', 'fintech', 'real_estate', 'consumer_goods_nd_manufacturing', 'health_care', 'education_nd_e_learning', 'artificial_intelligence', 'cannabis', 'robotics', 'automobile_manufacturing', 'clean_tech', 'quantum_information_science', 'advanced_consumer_goods_nd_manufacturing', 'automation', 'biotechnology', '_5g_advanced_wireless_technology', 'pharmaceutical', 'non_profit_organization', 'virtual_reality', 'finance', 'oil_nd_gas', 'electric_automobile_manufacturing', 'gaming', 'cybersecurity', '_3d_printing', 'biometrics', 'law_financial_consulting_nd_accounting', 'cultivation', 'consumer_product_nd_services', 'aerospace_nd_defense', 'block_chain', 'software_apps_nd_telecommunications', 'medical_technology_health_nd_fitness', 'other'];
    } else if (window.innerWidth <= 768) {
      this.question3Ans = ['technology', 'fintech', 'consumer_goods_nd_manufacturing', 'real_estate', 'health_care', 'education_nd_e_learning', 'artificial_intelligence', 'cannabis', 'robotics', 'clean_tech', 'automobile_manufacturing', 'quantum_information_science', 'advanced_consumer_goods_nd_manufacturing', 'automation', 'biotechnology', '_5g_advanced_wireless_technology', 'pharmaceutical', 'non_profit_organization', 'virtual_reality', 'finance', 'oil_nd_gas', 'electric_automobile_manufacturing', 'cybersecurity', '_3d_printing', 'gaming', 'biometrics', 'law_financial_consulting_nd_accounting', 'cultivation', 'consumer_product_nd_services', 'aerospace_nd_defense', 'block_chain', 'software_apps_nd_telecommunications', 'medical_technology_health_nd_fitness', 'other'];
    } else if (window.innerWidth < 1024) {
      this.question3Ans = ['technology', 'consumer_goods_nd_manufacturing', 'fintech', 'real_estate', 'artificial_intelligence', 'education_nd_e_learning', 'aerospace_nd_defense', 'pharmaceutical', 'robotics', 'health_care', 'biotechnology', 'automobile_manufacturing', 'clean_tech', 'quantum_information_science', 'advanced_consumer_goods_nd_manufacturing', 'cannabis', '_5g_advanced_wireless_technology', 'oil_nd_gas', 'non_profit_organization', 'consumer_product_nd_services', 'automation', 'finance', 'electric_automobile_manufacturing', 'virtual_reality', 'cybersecurity', '_3d_printing', 'biometrics', 'block_chain', 'cultivation', 'gaming', 'software_apps_nd_telecommunications', 'law_financial_consulting_nd_accounting', 'medical_technology_health_nd_fitness', 'other'];
    } else if (window.innerWidth <= 1230) {
      this.question3Ans = ['technology', 'fintech', 'consumer_goods_nd_manufacturing', 'real_estate', 'health_care', 'quantum_information_science', 'education_nd_e_learning', 'artificial_intelligence', 'cannabis', 'automobile_manufacturing', 'robotics', 'biotechnology', 'clean_tech', 'advanced_consumer_goods_nd_manufacturing', 'oil_nd_gas', '_5g_advanced_wireless_technology', 'finance', 'virtual_reality', 'pharmaceutical', 'non_profit_organization', 'electric_automobile_manufacturing', 'automation', 'gaming', 'cybersecurity', 'law_financial_consulting_nd_accounting', '_3d_printing', 'biometrics', 'consumer_product_nd_services', 'cultivation', 'software_apps_nd_telecommunications', 'block_chain', 'medical_technology_health_nd_fitness', 'aerospace_nd_defense', 'other'];
    } else {
      this.question3Ans = ['technology', 'fintech', 'consumer_goods_nd_manufacturing', 'real_estate', 'health_care', 'education_nd_e_learning', 'artificial_intelligence', 'cannabis', 'robotics', 'clean_tech', 'automobile_manufacturing', 'quantum_information_science', 'advanced_consumer_goods_nd_manufacturing', 'automation', 'biotechnology', '_5g_advanced_wireless_technology', 'pharmaceutical', 'non_profit_organization', 'virtual_reality', 'finance', 'oil_nd_gas', 'electric_automobile_manufacturing', 'cybersecurity', '_3d_printing', 'gaming', 'biometrics', 'cultivation', 'law_financial_consulting_nd_accounting', 'consumer_product_nd_services', 'aerospace_nd_defense', 'block_chain', 'software_apps_nd_telecommunications', 'medical_technology_health_nd_fitness', 'other'];
    }
    if (window.innerWidth <= 425) {
      this.question4Ans = ['investor_business_plan', 'feasibility_study', 'pro_forma', 'grant_proposal', 'pitch_deck', 'private_placement_memorandum', 'software_and_apps', 'e_2_visa_business_plan', 'market_research', 'request_for_proposal', 'historic_financials', 'market_data_reports', 'marketing_plan', 'crowd_funding_reg_a', 'investor_relations', 'e_b5_business_plan', 'real_estate_business_plan', 'other'];
    } else if (window.innerWidth <= 768) {
      this.question4Ans = ['investor_business_plan', 'feasibility_study', 'private_placement_memorandum', 'pro_forma', 'software_and_apps', 'e_2_visa_business_plan', 'marketing_plan', 'request_for_proposal', 'historic_financials', 'market_data_reports', 'pitch_deck', 'real_estate_business_plan', 'grant_proposal', 'market_research', 'investor_relations', 'crowd_funding_reg_a', 'e_b5_business_plan', 'other'];
    } else if (window.innerWidth <= 1230) {
      this.question4Ans = ['investor_business_plan', 'feasibility_study', 'pro_forma', 'market_research', 'private_placement_memorandum', 'pitch_deck', 'grant_proposal', 'software_and_apps', 'e_2_visa_business_plan', 'request_for_proposal', 'historic_financials', 'market_data_reports', 'marketing_plan', 'investor_relations', 'real_estate_business_plan', 'crowd_funding_reg_a', 'e_b5_business_plan', 'other'];
    } else {
      this.question4Ans = ['investor_business_plan', 'feasibility_study', 'market_research', 'pro_forma', 'private_placement_memorandum', 'pitch_deck', 'grant_proposal', 'software_and_apps', 'request_for_proposal', 'historic_financials', 'market_data_reports', 'marketing_plan', 'e_2_visa_business_plan', 'investor_relations', 'real_estate_business_plan', 'crowd_funding_reg_a', 'e_b5_business_plan', 'other'];
    }
    if (parseInt((_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.bookConsult) === 1) {
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
        window.scrollTo({
          top: domRect.top + document.documentElement.scrollTop - (window.innerWidth < 768 ? 0 : 110),
          behavior: 'smooth'
        });
      }
    },
    selectAnswer1(ans) {
      this.params.what_phase_is_your_business_in = this.$t(ans, {
        locale: 'en'
      });
      this.nextQuestion();
    },
    selectAnswer2(ans) {
      if (this.questionSelectedAns1 !== 'Start-up') {
        this.params.what_was_company_gross_revenue_last_year = this.$t(ans, {
          locale: 'en'
        });
        this.nextQuestion();
      } else if (ans === 'no_capital') {
        this.currentQuestion = 9;
      } else {
        this.params.how_much_working_capital_do_you_personally_have_to_invest_in_your_business = this.$t(ans, {
          locale: 'en'
        });
        this.nextQuestion();
      }
    },
    selectAnswer3(ans) {
      this.params.what_is_your_industry = this.$t(ans, {
        locale: 'en'
      });
      this.nextQuestion();
    },
    async selectAnswer4(ans) {
      this.params.what_service_best_suits_your_needs = this.$t(ans, {
        locale: 'en'
      });
      this.nextQuestion();
      await this.$recaptcha.reset();
      setTimeout(async () => {
        try {
          const id = await this.$recaptcha.render('businessQue', {
            sitekey: '6LckFPUaAAAAABvoKl9AOVILIzozGu2HjHV5U6mK'
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
      const data = await this.$hubspot.questionForm({
        ...this.contactInfo,
        ...this.params
      });
      if (!data) {
        return false;
      }
      this.$v.contactInfo.$reset();
      this.contactInfo = {
        fullName: '',
        email: '',
        phone: ''
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
        are_you_ready_to_buy_this_service: ''
      };
      this.currentQuestion = step;
    }
  }
});
// CONCATENATED MODULE: ./components/business-plan-google-ad/business-plan-google-ad-question-form.vue?vue&type=script&lang=js&
 /* harmony default export */ var business_plan_google_ad_business_plan_google_ad_question_formvue_type_script_lang_js_ = (business_plan_google_ad_question_formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/business-plan-google-ad/business-plan-google-ad-question-form.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  business_plan_google_ad_business_plan_google_ad_question_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "43c29f5c"
  
)

/* harmony default export */ var business_plan_google_ad_question_form = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=business-plan-google-ad-question-form.js.map