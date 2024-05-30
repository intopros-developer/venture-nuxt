exports.ids = [125];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alphaNumericSpace; });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);

const alphaNumericSpace = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["helpers"].regex('alpha', /^[0-9a-zA-Z\s]*$/);


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/technology/technology-questions-form.vue?vue&type=template&id=06f9fa62&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-10 md:py-16 xl:pb-14 xl:pt-[114px]"},[_vm._ssrNode("<div id=\"question-box\" class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"flex flex-col items-center justify-between gap-5 md:flex-row md:gap-10 lg:gap-20 xl:gap-[98px]\">","</div>",[_vm._ssrNode("<div class=\"w-full flex-none space-y-4 md:max-w-[330px] md:space-y-6 xl:max-w-[535px] xl:space-y-9\">","</div>",[_vm._ssrNode("<h5 class=\"text-2xl font-bold\">Your trusted partner in navigating through uncertain times. Let's accelerate your growth.</h5> <p>Fill out our contact form so one of our human resource representatives can get in touch with you for an interview.</p> <p>What is your full name, email, and phone number?</p> <div class=\"form-input-group\"><input type=\"text\" placeholder=\"Full Name\""+(_vm._ssrAttr("value",(_vm.$v.params.full_name.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.params.full_name.$error }))+"></div> "),_vm._ssrNode("<div class=\"form-input-group\">","</div>",[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.$v.params.phone.$model),expression:"$v.params.phone.$model"},{name:"mask",rawName:"v-mask",value:(_vm.$mask.phoneMask),expression:"$mask.phoneMask"}],staticClass:"form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",class:{ error: _vm.$v.params.phone.$error },attrs:{"type":"text","placeholder":"Phone Number"},domProps:{"value":(_vm.$v.params.phone.$model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$v.params.phone, "$model", $event.target.value)}}},[])]),_vm._ssrNode(" <div class=\"form-input-group\"><input type=\"text\" placeholder=\"Your Email Address\""+(_vm._ssrAttr("value",(_vm.$v.params.email.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.params.email.$error }))+"></div> "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"h-16 !overflow-hidden lg:h-auto\">","</div>",[_c('recaptcha',{on:{"success":function($event){_vm.captchaError = false},"error":function($event){_vm.captchaError = true}}})],1),_vm._ssrNode(" "+((_vm.captchaError)?("<div class=\"captcha-error\">Please verify reCaptcha.</div>"):"<!---->"))],2),_vm._ssrNode(" <div><button type=\"submit\" class=\"btn ml-auto mr-0 !w-auto !max-w-max px-16 py-4 uppercase hover:bg-primary-700 xl:px-20 xl:py-5\">"+_vm._ssrEscape(_vm._s(_vm.$t('book_a_consultation')))+"</button></div> "),(_vm.isSubmitted)?_vm._ssrNode("<div class=\"mt-5 flex justify-center gap-3\">","</div>",[_c('icons-check-circle',{staticClass:"relative top-[2px] h-6 w-6 text-green"}),_vm._ssrNode(" <p class=\"text-xl font-extrabold leading-[25px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green\"><span>"+_vm._ssrEscape(_vm._s(_vm.$t('congratulations')))+"</span>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('your_form_has_been_submitted'))+"\n                    ")+"</p>")],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"order-1 h-[236px] w-full flex-none overflow-hidden rounded-2xl bg-transparent md:order-2 md:w-[323px] xl:h-[364px] xl:w-[497px]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":_vm.image,"alt":"Form Question","loading":"lazy"}})],1)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/technology/technology-questions-form.vue?vue&type=template&id=06f9fa62&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// EXTERNAL MODULE: external "vue-click-outside"
var external_vue_click_outside_ = __webpack_require__(129);
var external_vue_click_outside_default = /*#__PURE__*/__webpack_require__.n(external_vue_click_outside_);

// EXTERNAL MODULE: ./helper/custom-validations.js
var custom_validations = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/technology/technology-questions-form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var technology_questions_formvue_type_script_lang_js_ = ({
  directives: {
    ClickOutside: external_vue_click_outside_default.a
  },
  props: {
    image: String
  },
  data() {
    return {};
  },
  computed: {},
  watch: {
    'params.inquiry_reason': {
      handler() {
        if (this.$helper.isEmpty(this.params.inquiry_reason)) {
          // this.$refs.multiselect.activate();
          // this.$refs.multiselect.$el.focus();
        }
      },
      deep: true
    }
  },
  validations() {
    return {
      params: {
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
        },
        inquiry_reason: {
          required: validators_["required"]
        }
      }
    };
  },
  methods: {
    openSearch() {
      this.showService = !this.showService;
      if (this.showService) {
        // this.$refs.multiselect.activate();
        // this.$refs.multiselect.$el.focus();
      }
    },
    closeSearch() {
      this.showService = false;
    },
    searchChange(searchQuery, id) {
      if (!this.$helper.isEmpty(searchQuery)) {
        this.isClearSearch = true;
      } else {
        this.isClearSearch = false;
      }
    },
    onSelect() {
      this.showService = false;
    },
    async onSubmit() {
      this.$v.params.$touch();
      if (this.$v.params.$invalid || this.$v.params.$error) {
        return false;
      }
      // try {
      //     const token = await this.$recaptcha.getResponse();
      // } catch (error) {}

      const data = await this.$hubspot.contactUsBannerForm({
        ...this.params
      });
      if (!data) {
        return false;
      }
      if (!this.captchaError) {
        this.isSubmitted = true;
        this.$v.params.$reset();
        // this.$recaptcha.reset();
        this.params = {
          inquiry_reason: '',
          full_name: '',
          email: '',
          phone: ''
        };
        this.isSubmitted = true;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/technology/technology-questions-form.vue?vue&type=script&lang=js&
 /* harmony default export */ var technology_technology_questions_formvue_type_script_lang_js_ = (technology_questions_formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/technology/technology-questions-form.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  technology_technology_questions_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3dbcc495"
  
)

/* harmony default export */ var technology_questions_form = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsCheckCircle: __webpack_require__(69).default})


/***/ })

};;
//# sourceMappingURL=technology-questions-form.js.map