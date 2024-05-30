exports.ids = [43,68];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alphaNumericSpace; });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);

const alphaNumericSpace = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["helpers"].regex('alpha', /^[0-9a-zA-Z\s]*$/);


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-tell-more-about-projects.vue?vue&type=template&id=202a2978&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-cover bg-[32%_top] bg-no-repeat pb-[72px] pt-[112px] lg:bg-[center_top_25%]",style:({ backgroundImage: ("url(" + (_vm.imageUrl || '/assets/img/image-17.webp') + ")") })},[_vm._ssrNode("<div class=\"container lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"items-start justify-between gap-5 lg:flex xl:gap-[107px]\">","</div>",[_vm._ssrNode("<div class=\"relative\">","</div>",[_vm._ssrNode("<div class=\"absolute -inset-5 m-auto h-full w-full bg-black/30 blur-2xl\"></div> "),(_vm.tellUsMoreData.length)?_vm._ssrNode("<div class=\"relative z-[1]\">","</div>",[_vm._ssrNode("<h3 class=\"pt-6 text-xl font-bold uppercase leading-[32px] text-[#f7f4f4] sm:text-[36px] sm:leading-[52px] lg:pt-0 [&>br]:hidden md:[&>br]:block [&>span]:border-b-[5px] [&>span]:border-primary\">"+(_vm._s(_vm.tellUsMoreTitle))+"</h3> <p class=\"text-white\">"+_vm._ssrEscape(_vm._s(_vm.tellUseMoreSubtitle))+"</p> <ul class=\"mb-6 flex flex-wrap items-start gap-y-3 pt-8 text-white sm:gap-5 md:mb-[55px] lg:grid lg:grid-cols-2 xl:flex\">"+((_vm.tellUsMoreData.slice(0, -3).length)?((_vm._ssrList((_vm.tellUsMoreData.slice(0, -3)),function(content){return ("<li class=\"w-1/2 grow text-3xl font-bold sm:w-auto md:text-[40px] md:leading-[55px]\">"+_vm._ssrEscape("\n                                "+_vm._s(content.attributes.sectionDescription)+" ")+"<span class=\"block text-base font-normal\">"+_vm._ssrEscape(_vm._s(content.attributes.sectionName))+"</span></li>")}))):"<!---->")+"</ul> <div class=\"grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2\">"+((_vm.tellUsMoreData[_vm.tellUsMoreData.length - 3])?("<div class=\"text-white\"><h3 class=\"text-[40px] font-bold leading-[31px]\">"+_vm._ssrEscape(_vm._s(_vm.tellUsMoreData[_vm.tellUsMoreData.length - 3].attributes.sectionName))+"</h3> <p class=\"mt-4\">"+_vm._ssrEscape(_vm._s(_vm.tellUsMoreData[_vm.tellUsMoreData.length - 3].attributes.sectionDescription))+"</p></div>"):"<!---->")+" "+((_vm.tellUsMoreData[_vm.tellUsMoreData.length - 2])?("<div class=\"text-white\"><h3 class=\"text-[40px] font-bold leading-[31px]\">"+_vm._ssrEscape(_vm._s(_vm.tellUsMoreData[_vm.tellUsMoreData.length - 2].attributes.sectionName))+"</h3> <p class=\"mt-4\">"+_vm._ssrEscape(_vm._s(_vm.tellUsMoreData[_vm.tellUsMoreData.length - 2].attributes.sectionDescription))+"</p></div>"):"<!---->")+"</div> "),_vm._ssrNode("<div class=\"mt-[55px] pb-6 md:mb-5\">","</div>",[_vm._ssrNode(((_vm.tellUsMoreData[_vm.tellUsMoreData.length - 1])?("<p class=\"mb-5 text-[15px] leading-[47px] text-[#f7f4f4]\">"+_vm._ssrEscape(_vm._s(_vm.tellUsMoreData[_vm.tellUsMoreData.length - 1].attributes.sectionName))+"</p>"):"<!---->")+" "),_vm._ssrNode("<div class=\"flex items-center gap-2\">","</div>",_vm._l((_vm.featuredCompanies),function(company,i){return _vm._ssrNode("<div class=\"xs:h-[50px] xs:w-[50px] flex h-[46px] w-[46px] flex-row items-center justify-center rounded-full bg-white p-1 px-2 shadow-[0px_1px_8px_rgba(0,0,0,0.2)] sm:h-[57px] sm:w-[57px] md:h-[65px] md:w-[65px] xl:h-[75px] xl:w-[75px]\">","</div>",[_c('nuxt-img',{staticClass:"shrink-0",attrs:{"format":"webp","src":company.attributes.iconUrl,"alt":'Company_' + i,"loading":"lazy"}})],1)}),0)],2)],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-full bg-white/[0.27] p-7 lg:max-w-[455px] lg:p-10 xl:max-w-[608px] xl:p-[60px]\">","</div>",[_vm._ssrNode("<form id=\"tell-us-more-form\" action class=\"space-y-4\">","</form>",[_vm._ssrNode("<div class=\"items-center gap-4 space-y-4 md:flex md:space-y-0\"><div class=\"grow\"><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('first_name')))+(_vm._ssrAttr("value",(_vm.$v.params.first_name.$model)))+(_vm._ssrClass("form-input",{ error: _vm.$v.params.first_name.$error }))+"></div> <div class=\"grow\"><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('last_name')))+(_vm._ssrAttr("value",(_vm.$v.params.last_name.$model)))+(_vm._ssrClass("form-input",{ error: _vm.$v.params.last_name.$error }))+"></div></div> "),_vm._ssrNode("<div>","</div>",[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.$v.params.phone.$model),expression:"$v.params.phone.$model"},{name:"mask",rawName:"v-mask",value:(_vm.$mask.phoneMask),expression:"$mask.phoneMask"}],staticClass:"form-input",class:{ error: _vm.$v.params.phone.$error },attrs:{"type":"text","placeholder":_vm.$t('phone_number')},domProps:{"value":(_vm.$v.params.phone.$model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$v.params.phone, "$model", $event.target.value)}}},[])]),_vm._ssrNode(" <div><input type=\"email\""+(_vm._ssrAttr("placeholder",_vm.$t('your_email_address')))+(_vm._ssrAttr("value",(_vm.$v.params.email.$model)))+(_vm._ssrClass("form-input",{ error: _vm.$v.params.email.$error }))+"></div> <div><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('company')))+(_vm._ssrAttr("value",(_vm.$v.params.company.$model)))+(_vm._ssrClass("form-input",{ error: _vm.$v.params.company.$error }))+"></div> <div><textarea type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('project_description')))+" rows=\"3\""+(_vm._ssrClass("form-input",{ error: _vm.$v.params.project_description.$error }))+">"+_vm._ssrEscape(_vm._s(_vm.$v.params.project_description.$model))+"</textarea></div> <div><label class=\"inline-flex items-center\"><input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.$v.params.send_nda.$model)?_vm._i(_vm.$v.params.send_nda.$model,null)>-1:(_vm.$v.params.send_nda.$model)))+(_vm._ssrClass("form-checkbox h-[25px] w-[25px] rounded-md border border-[#807d7d] text-primary !outline-none focus:!ring-0 focus:ring-transparent focus:ring-offset-0",{ error: _vm.$v.params.send_nda.$error }))+"> <span class=\"ml-2 text-sm font-bold text-white\">"+_vm._ssrEscape(_vm._s(_vm.$t('send_nda')))+"</span></label></div> "),_vm._ssrNode("<div class=\"ml-auto text-sm\""+(_vm._ssrStyle(null,null, { display: (_vm.params.send_nda) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<button"+(_vm._ssrClass("flex w-fit items-center gap-1.5 text-white hover:font-bold",{ '!text-primary': _vm.params.file }))+">","</button>",[_c('icons-attach'),_vm._ssrNode(" Attach file (pdf, office file)")],2),_vm._ssrNode(" <input type=\"file\" accept=\"application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document\" style=\"display: none\">")],2),_vm._ssrNode(" <div><button"+(_vm._ssrAttr("disabled",_vm.isSubmitting))+" type=\"submit\" class=\"b-btn block w-full max-w-none py-5 text-lg normal-case\">"+_vm._ssrEscape(_vm._s(_vm.$t('schedule_a_consultation')))+"</button></div> "),(_vm.isSubmitted)?_vm._ssrNode("<div class=\"mt-5 flex justify-center gap-3\">","</div>",[_c('icons-check-circle',{staticClass:"relative top-[2px] !h-6 !w-6 text-green"}),_vm._ssrNode(" <p class=\"text-xl font-extrabold leading-[30px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green\">"+(_vm._s(_vm.$t('span_congratulations_span_your_form_has_been_submitted')))+"</p>")],2):_vm._e()],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-tell-more-about-projects.vue?vue&type=template&id=202a2978&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// EXTERNAL MODULE: ./helper/custom-validations.js
var custom_validations = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-tell-more-about-projects.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var common_tell_more_about_projectsvue_type_script_lang_js_ = ({
  props: {
    tellUsMoreTitle: {
      type: String,
      default: 'TELL US MORE ABOUT YOUR PROJECT'
    },
    tellUseMoreSubtitle: {
      type: String,
      default: ''
    },
    tellUsMoreData: {
      type: Array,
      default: []
    },
    featuredCompanies: {
      type: Array,
      default: () => [{
        id: 1,
        attributes: {
          iconUrl: 'https://venturefund.vercel.app/assets/img/placement-logo-3.png'
        }
      }]
    },
    imageUrl: {
      type: String,
      default: '/assets/img/image-17.webp'
    }
  },
  data() {
    return {
      isSubmitted: false,
      captchaError: false,
      params: {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        company: '',
        project_description: '',
        send_nda: '',
        file: null
      },
      isSubmitting: false
    };
  },
  validations() {
    return {
      params: {
        first_name: {
          required: validators_["required"],
          alphaNumericSpace: custom_validations["a" /* alphaNumericSpace */],
          minLength: Object(validators_["minLength"])(3)
        },
        last_name: {
          required: validators_["required"],
          alphaNumericSpace: custom_validations["a" /* alphaNumericSpace */],
          minLength: Object(validators_["minLength"])(3)
        },
        phone: {
          required: validators_["required"],
          minLength: Object(validators_["minLength"])(14),
          maxLength: Object(validators_["maxLength"])(14)
        },
        email: {
          required: validators_["required"],
          email: validators_["email"]
        },
        company: {
          required: validators_["required"],
          alphaNumericSpace: custom_validations["a" /* alphaNumericSpace */],
          minLength: Object(validators_["minLength"])(3)
        },
        project_description: {
          required: validators_["required"],
          minLength: Object(validators_["minLength"])(3)
        },
        send_nda: {
          required: validators_["required"],
          checked: value => value === true
        }
      }
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      const fileType = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!file.type || !fileType.includes(file.type.toLowerCase().trim())) {
        this.$toast.error('Please upload a valid file.');
        return false;
      }
      if (file.size > 10485760) {
        this.$toast.error('File size should be less than 10MB.');
        return false;
      }
      this.params.file = file;
    },
    async onSubmit() {
      try {
        this.$v.params.$touch();
        if (this.$v.params.$invalid || this.$v.params.$error) {
          return false;
        }
        try {
          // const token = await this.$recaptcha.getResponse();
          this.isSubmitting = true;
          const data = await this.$hubspot.tellUsMoreAboutYourProjectForm({
            ...this.params
          });
          if (!data) {
            return false;
          }
        } catch (error) {}
        if (!this.captchaError) {
          this.isSubmitted = true;
          this.isSubmitting = false;
          this.$v.params.$reset();
          // this.$recaptcha.reset();
          this.params = {
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            company: '',
            project_description: '',
            send_nda: ''
          };
        }
      } catch (error) {
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-tell-more-about-projects.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_tell_more_about_projectsvue_type_script_lang_js_ = (common_tell_more_about_projectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-tell-more-about-projects.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_tell_more_about_projectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "626bd7f2"
  
)

/* harmony default export */ var common_tell_more_about_projects = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsAttach: __webpack_require__(178).default,IconsCheckCircle: __webpack_require__(69).default})


/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-attach.vue?vue&type=template&id=17215f2e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-4 w-4",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke":"currentColor","stroke-width":"2"}},[_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-attach.vue?vue&type=template&id=17215f2e&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-attach.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "368016cc"
  
)

/* harmony default export */ var icons_attach = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-tell-more-about-projects.js.map