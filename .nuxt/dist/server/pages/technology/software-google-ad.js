exports.ids = [150,21,25,30,33,35,41,52,53,55,68,77,78,81,103,105,109,123,124];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alphaNumericSpace; });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);

const alphaNumericSpace = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["helpers"].regex('alpha', /^[0-9a-zA-Z\s]*$/);


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("7fa83994", content, true, context)
};

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-selection-arrow.vue?vue&type=template&id=63fd8426&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"15","height":"8","viewBox":"0 0 15 8"}},[_vm._ssrNode("<g><g><path fill=\"currentColor\" d=\"M.54.312l7.062 7.06 7.06-7.06z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-selection-arrow.vue?vue&type=template&id=63fd8426&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-selection-arrow.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "fc8af4fa"
  
)

/* harmony default export */ var icons_selection_arrow = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-readytotalk.vue?vue&type=template&id=14a7341d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"bg-cover py-10 md:py-16 xl:py-32",style:({ backgroundImage: ("url(" + _vm.imgUrl + ")") }),attrs:{"id":"readyToTalk"}},[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<form id=\"ready-to-talk-form\" action>","</form>",[_vm._ssrNode("<div class=\"grid grid-cols-1 gap-5 lg:grid-cols-2\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<p class=\"mb-[47px] text-[40px] font-bold leading-[50px] -tracking-[0.05px] text-white lg:text-[30px] lg:leading-[38px] xl:-tracking-[0.07px]\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.title)+"\n                    ")+"</p> <p class=\"mb-2 text-center text-[19px] font-light leading-[38px] -tracking-[0.04px] text-white/[0.64] md:text-left\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.talkInTitle)+"\n                    ")+"</p> "),_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closeSearch),expression:"closeSearch"}],staticClass:"relative w-full sm:max-w-[342px]",attrs:{"id":"dropdown"}},[_vm._ssrNode("<div"+(_vm._ssrClass("group relative flex w-full cursor-pointer items-center justify-between rounded-[4px] border-2 border-white bg-transparent px-9 py-[18px] text-[17px] font-semibold text-white transition-all duration-150 hover:!border-primary hover:!bg-primary hover:!text-white lg:py-[25px]",{ 'bg-[#f9ecea] text-danger': _vm.$v.params.service.$error, 'rounded-b-none !border-primary !bg-primary !text-white': _vm.showService }))+">","</div>",[_vm._ssrNode(_vm._ssrEscape("\n                            "+_vm._s(_vm.searchResult)+"\n                            ")),_c('icons-selection-arrow',{staticClass:"absolute right-[20px] group-hover:!text-white",class:{ 'rotate-180': _vm.showService, 'text-danger': _vm.$v.params.service.$error }})],2),_vm._ssrNode(" "),_c('Transition',{attrs:{"name":"slide-fade"}},[_c('multiselect',{directives:[{name:"show",rawName:"v-show",value:(_vm.showService),expression:"showService"}],ref:"multiselect",staticClass:"custom-multiselect default-open-multiselect !absolute w-full bg-white py-5 text-[13px] leading-[15px] text-[#586376] focus:outline-none sm:max-w-[342px]",attrs:{"max-height":348,"option-height":58,"options":_vm.serviceOptions ? _vm.serviceOptions.map(function (item) { return item.attributes.serviceName; }) : [],"show-no-results":false,"close-on-select":true,"show-labels":false,"open-direction":"","placeholder":_vm.$t('search')},on:{"select":_vm.onSelect,"search-change":_vm.searchChange},model:{value:(_vm.params.service),callback:function ($$v) {_vm.$set(_vm.params, "service", $$v)},expression:"params.service"}},[_c('template',{slot:"caret"},[_c('button',{staticClass:"pointer-events-none absolute right-0 top-1/2 mr-4 -translate-y-1/2",attrs:{"type":"submit"}},[_c('icons-search',{staticClass:"h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4"})],1)]),_vm._v(" "),_c('template',{slot:"clear"},[(_vm.isClearSearch)?_c('button',{staticClass:"absolute right-0 top-1/2 mr-10 -translate-y-1/2",attrs:{"type":"button"},on:{"click":function($event){$event.stopPropagation();_vm.params.service = ''}}},[_c('icons-close-search',{staticClass:"h-3 w-3 fill-current text-black xl:h-4 xl:w-4"})],1):_vm._e()])],2)],1)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"ml-auto xl:mr-[60px] xl:max-w-[410px]\">","</div>",[_vm._ssrNode("<p class=\"mb-10 text-center text-base font-light italic leading-[25px] -tracking-[0.03px] text-white/[0.64] md:text-left xl:text-[21px] xl:leading-[34px] xl:-tracking-[0.05px]\">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.aboutParagraph)+"\n                        ")+"</p> "),_vm._ssrNode("<div class=\"space-y-[15px]\">","</div>",[_vm._ssrNode("<div class=\"form-input-group\"><input name=\"full_name\" autocomplete=\"on\" type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('full_name')))+(_vm._ssrAttr("value",(_vm.$v.params.fullname.$model)))+(_vm._ssrClass("form-input h-[50px] shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.params.fullname.$error }))+"></div> "),_vm._ssrNode("<div class=\"form-input-group\">","</div>",[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.$v.params.phone.$model),expression:"$v.params.phone.$model"},{name:"mask",rawName:"v-mask",value:(_vm.$mask.phoneMask),expression:"$mask.phoneMask"}],staticClass:"form-input h-[50px] shadow-[0_3px_6px_rgba(0,0,0,0.16)]",class:{ error: _vm.$v.params.phone.$error },attrs:{"name":"phone","autocomplete":"on","type":"text","placeholder":_vm.$t('phone_number')},domProps:{"value":(_vm.$v.params.phone.$model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$v.params.phone, "$model", $event.target.value)}}},[])]),_vm._ssrNode(" <div class=\"form-input-group\"><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('your_email_address')))+" name=\"email\" autocomplete=\"on\""+(_vm._ssrAttr("value",(_vm.$v.params.email.$model)))+(_vm._ssrClass("form-input h-[50px] shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.params.email.$error }))+"></div> "),_vm._ssrNode("<div>","</div>",[_c('recaptcha',{ref:"recaptcha1",attrs:{"id":"recaptcha1"},on:{"success":function($event){_vm.captchaError = false},"error":function($event){_vm.captchaError = true}}}),_vm._ssrNode(" "+((_vm.captchaError)?("<div class=\"captcha-error\">Please verify reCaptcha.</div>"):"<!---->"))],2),_vm._ssrNode(" <button"+(_vm._ssrAttr("disabled",_vm.isSubmitting))+" type=\"submit\" class=\"outline-btn w-full border border-white/60 py-3 text-center text-[17px] font-semibold -tracking-[0.03px] xl:py-[7px]\">"+_vm._ssrEscape(_vm._s(_vm.$t('submit')))+"</button> "),(_vm.isSubmitted)?_vm._ssrNode("<div class=\"mt-5 flex justify-center gap-3\">","</div>",[_c('icons-check-circle',{staticClass:"relative top-[2px] !h-6 !w-6 text-green"}),_vm._ssrNode(" <p class=\"text-xl font-extrabold leading-[30px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green\">"+(_vm._s(_vm.$t('span_congratulations_span_your_form_has_been_submitted')))+"</p>")],2):_vm._e()],2)],2)])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-readytotalk.vue?vue&type=template&id=14a7341d&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// EXTERNAL MODULE: external "vue-click-outside"
var external_vue_click_outside_ = __webpack_require__(129);
var external_vue_click_outside_default = /*#__PURE__*/__webpack_require__.n(external_vue_click_outside_);

// EXTERNAL MODULE: ./helper/custom-validations.js
var custom_validations = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-readytotalk.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var common_readytotalkvue_type_script_lang_js_ = ({
  directives: {
    ClickOutside: external_vue_click_outside_default.a
  },
  props: {
    title: {
      type: String,
      default: 'Ready To Talk?'
    },
    talkInTitle: {
      type: String,
      default: 'I want to talk to your experts in:'
    },
    aboutParagraph: {
      type: String,
      default: 'Experienced in capital markets, a client-first culture, and potent track-record'
    },
    imgUrl: {
      type: String,
      default: '/assets/img/group-1.png'
    },
    serviceOptions: {
      type: Array,
      default: () => [{
        id: 1,
        attributes: {
          serviceName: 'Managment Consultant'
        }
      }, {
        id: 2,
        attributes: {
          serviceName: 'Restructing Operations'
        }
      }]
    }
  },
  data() {
    return {
      isSubmitted: false,
      isClearSearch: false,
      params: {
        service: '',
        fullname: '',
        email: '',
        phone: ''
      },
      showService: false,
      captchaError: false,
      widgetId: null,
      isSubmitting: false
    };
  },
  computed: {
    searchResult() {
      return !this.$helper.isEmpty(this.params.service) ? this.params.service : this.$route.path.includes('careers') ? 'Select a Division' : 'Select a Service';
    }
  },
  watch: {
    'params.service': {
      handler() {
        if (this.$helper.isEmpty(this.params.service)) {
          this.$refs.multiselect.activate();
          this.$refs.multiselect.$el.focus();
        }
      },
      deep: true
    }
  },
  async mounted() {
    try {
      var _this$$recaptcha;
      await this.$recaptcha.reset();
      const id = await ((_this$$recaptcha = this.$recaptcha) === null || _this$$recaptcha === void 0 ? void 0 : _this$$recaptcha.render('recaptcha1', {
        sitekey: '6LckFPUaAAAAABvoKl9AOVILIzozGu2HjHV5U6mK'
      }));
      this.widgetId = id;
    } catch (e) {}
  },
  validations() {
    return {
      params: {
        fullname: {
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
        service: {
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
    searchChange(searchQuery, id) {
      if (!this.$helper.isEmpty(searchQuery)) {
        this.isClearSearch = true;
      } else {
        this.isClearSearch = false;
      }
    },
    closeSearch() {
      this.showService = false;
    },
    onSelect() {
      this.showService = false;
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
        this.$v.params.$touch();
        if (this.$v.params.$invalid || this.$v.params.$error) {
          if (window.innerWidth < 768) {
            setTimeout(() => {
              this.$nextTick(() => {
                // window.scrollTo({ top: 0, behavior: 'smooth' })
                let domRect = document.querySelector('.error');
                if (domRect !== null) {
                  domRect = document.querySelector('.error').getBoundingClientRect();
                  window.scrollTo({
                    top: domRect.top + document.documentElement.scrollTop - 140,
                    behavior: 'smooth'
                  });
                }
              });
            }, 500);
          }
          return false;
        }
        if (!this.captchaError) {
          this.isSubmitting = true;
          const data = await this.$hubspot.readyToTalkForm(this.params);
          if (!data) {
            return false;
          }
          this.isSubmitted = true;
          this.isSubmitting = false;
          this.$v.params.$reset();
          this.params = {
            service: '',
            fullname: '',
            email: '',
            phone: ''
          };
          this.widgetId ? await this.$recaptcha.reset(this.widgetId) : await this.$recaptcha.reset();
        }
      } catch (error) {
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-readytotalk.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_readytotalkvue_type_script_lang_js_ = (common_readytotalkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-readytotalk.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(157)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_readytotalkvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "648499a9"
  
)

/* harmony default export */ var common_readytotalk = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsSelectionArrow: __webpack_require__(138).default,IconsSearch: __webpack_require__(70).default,IconsCloseSearch: __webpack_require__(156).default,IconsCheckCircle: __webpack_require__(69).default})


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("34b9b7c5", content, true, context)
};

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-interested-service.vue?vue&type=template&id=317cfebc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"relative bg-cover bg-no-repeat",staticStyle:{"background-position":"90% 0"},style:({ backgroundImage: ("url(" + (_vm.backgroundImage ? _vm.backgroundImage : '/assets/img/buy-xl.webp') + ")") })},[_vm._ssrNode("<div class=\"z-1 absolute top-0 h-full w-full bg-black opacity-30\" data-v-317cfebc></div> "),_vm._ssrNode("<div class=\"container relative z-10 px-10 py-[80px] md:px-4 lg:px-[97px] xl:px-4\" data-v-317cfebc>","</div>",[_vm._ssrNode("<div class=\"flex flex-col items-center justify-between gap-5 md:flex-row\" data-v-317cfebc>","</div>",[_vm._ssrNode("<div class=\"text-white\" data-v-317cfebc><p class=\"mb-4 text-[14px] font-bold uppercase leading-[9px] tracking-normal xl:text-[11px] xl:leading-3\" data-v-317cfebc>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.subtitle)+"\n                ")+"</p> <p class=\"mb-3 text-[19px] font-bold leading-[23px] xl:mb-[19px] xl:text-[26px] xl:leading-[30px]\" data-v-317cfebc>"+_vm._ssrEscape(_vm._s(_vm.title))+"</p> <p class=\"max-w-[486px] text-base font-medium -tracking-[0.03px] md:leading-4\" data-v-317cfebc>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.description)+"\n                ")+"</p></div> "),_vm._ssrNode("<div class=\"lg:w-1/3\" data-v-317cfebc>","</div>",[_vm._ssrNode("<div class=\"text-center lg:mt-3\" data-v-317cfebc>","</div>",[(_vm.$helper.isInternalUrl(_vm.buttonLink))?_c('nuxt-link',{staticClass:"b-btn border-white bg-white px-14 py-[19px] text-xs uppercase text-[#14c8f6] hover:border-primary hover:bg-primary hover:text-white lg:max-w-[322px] lg:py-6 xl:px-[67px]",attrs:{"to":_vm.buttonLink}},[_vm._v("\n                        "+_vm._s(_vm.buttonTitle)+"\n                    ")]):_c('a',{staticClass:"b-btn border-white bg-white px-14 py-[19px] text-xs uppercase text-[#14c8f6] hover:border-primary hover:bg-primary hover:text-white lg:max-w-[322px] lg:py-6 xl:px-[67px]",attrs:{"target":"_blank","href":_vm.buttonLink}},[_vm._v("\n                        "+_vm._s(_vm.buttonTitle)+"\n                    ")])],1)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-interested-service.vue?vue&type=template&id=317cfebc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-interested-service.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_interested_servicevue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: 'Are you interested in this service?'
    },
    subtitle: {
      type: String,
      default: 'LIKE WHAT YOU SEE?'
    },
    backgroundImage: {
      type: String,
      default: '/assets/img/buy-xl.webp'
    },
    description: {
      type: String,
      default: 'Click the buy a service button to proceed to check out and select the service you would like to purchase'
    },
    buttonTitle: {
      type: String,
      default: 'Buy Service'
    },
    buttonLink: {
      type: String,
      default: '/book-consult'
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-interested-service.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_interested_servicevue_type_script_lang_js_ = (common_interested_servicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-interested-service.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_interested_servicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "317cfebc",
  "316bd362"
  
)

/* harmony default export */ var common_interested_service = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATBAMAAABW2/GaAAAAAXNSR0IB2cksfwAAABtQTFRFAAAA////////////////////////////////600+wgAAAAl0Uk5TAGAw/+8QIKDwPkI6AAAAACdJREFUeJxjYAACRgUQySDsCuYYC4A5hkRxks0ZkHhQOWK5rRCuAgBfAQWFQqntwAAAAABJRU5ErkJggg=="

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUBAMAAABL3sEiAAAAAXNSR0IB2cksfwAAABJQTFRFAAAA////////////////////PlKtOgAAAAZ0Uk5TABCgz9D/deRy+QAAAClJREFUeJxjYBBgAAEmQzAlEgzmMrqSzmU0dQRRwiECxHMYmMAcBogjAC3XCAcGfqCxAAAAAElFTkSuQmCC"

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-custom-strapi-display.vue?vue&type=template&id=4eb313d8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.data)?_c('p',{staticClass:"custom-html-data",class:_vm.classes,domProps:{"innerHTML":_vm._s(_vm.data)}},[]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-custom-strapi-display.vue?vue&type=template&id=4eb313d8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-custom-strapi-display.vue?vue&type=script&lang=js&
//
//
//

/* harmony default export */ var common_custom_strapi_displayvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: String,
      default: ``
    },
    classes: {
      type: String,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-custom-strapi-display.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_custom_strapi_displayvue_type_script_lang_js_ = (common_custom_strapi_displayvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-custom-strapi-display.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_custom_strapi_displayvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "271b2a0e"
  
)

/* harmony default export */ var common_custom_strapi_display = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("0aa0ce78", content, true, context)
};

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-close-search.vue?vue&type=template&id=f44f9410&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"id":"SVGDoc","width":"15","height":"15","xmlns":"http://www.w3.org/2000/svg","version":"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:avocode":"https://avocode.com/","viewBox":"0 0 15 15"}},[_vm._ssrNode("<g><g><g><path d=\"M0.41434,7.46973c0,-3.86599 3.13401,-7 7,-7c3.86599,0 7,3.13401 7,7c0,3.86599 -3.13401,7 -7,7c-3.86599,0 -7,-3.13401 -7,-7z\" fill=\"#000000\" fill-opacity=\"1\"></path></g> <g><g transform=\"rotate(-45.00000000000001 7.4150000000000205 7.470000000000027)\"><path d=\"M6.34748,2.87975v0l1.59462,0.09462v0l0.53912,9.08528v0l-1.59462,-0.09462v0z\" fill=\"#ffffff\" fill-opacity=\"1\"></path></g> <g transform=\"rotate(45.00000000000001 7.4150000000000205 7.470000000000027)\"><path d=\"M6.88656,2.97456v0l1.59462,-0.09462v0l-0.53912,9.08528v0l-1.59462,0.09462v0z\" fill=\"#ffffff\" fill-opacity=\"1\"></path></g></g></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-close-search.vue?vue&type=template&id=f44f9410&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-close-search.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a92b789c"
  
)

/* harmony default export */ var icons_close_search = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_readytotalk_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_readytotalk_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_readytotalk_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_readytotalk_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_readytotalk_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slide-fade-enter-active,.slide-fade-leave-active{transition:opacity .3s}.slide-fade-leave-to{opacity:0}.custom-multiselect .multiselect__option{white-space:normal}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-minus.vue?vue&type=template&id=5549a490&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-7 w-7",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 28 28","stroke":"currentColor","stroke-width":"2"}},[_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M20 12H4\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-minus.vue?vue&type=template&id=5549a490&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-minus.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "03dbadaa"
  
)

/* harmony default export */ var icons_minus = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-plus.vue?vue&type=template&id=39e757c9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-7 w-7",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 28 28","stroke":"currentColor","stroke-width":"2"}},[_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M12 4v16m8-8H4\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-plus.vue?vue&type=template&id=39e757c9&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-plus.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2c504caf"
  
)

/* harmony default export */ var icons_plus = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_interested_service_vue_vue_type_style_index_0_id_317cfebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_interested_service_vue_vue_type_style_index_0_id_317cfebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_interested_service_vue_vue_type_style_index_0_id_317cfebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_interested_service_vue_vue_type_style_index_0_id_317cfebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_interested_service_vue_vue_type_style_index_0_id_317cfebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media only screen and (min-width:1230px) and (max-width:1440px){.buy-service-btn[data-v-317cfebc]{margin-right:99px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-brand-logo.vue?vue&type=template&id=4e5ed5f1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"brand-logo bg-white py-10 lg:py-[44px]"},[_vm._ssrNode("<div class=\"lg:px-[97px] xl:px-4\" data-v-4e5ed5f1>","</div>",[_c('div',{directives:[{name:"swiper",rawName:"v-swiper:brandLogo",value:(_vm.slider_options),expression:"slider_options",arg:"brandLogo"}],staticClass:"swiper relative bg-transparent",attrs:{"cleanup-styles-on-destroy":false}},[_vm._ssrNode("<div class=\"swiper-wrapper items-center\" data-v-4e5ed5f1>","</div>",_vm._l((_vm.logos),function(logo,i){return _vm._ssrNode("<div class=\"swiper-slide flex justify-center lg:!min-w-[294px]\" data-v-4e5ed5f1>","</div>",[_c('nuxt-img',{attrs:{"src":logo.logoUrl,"alt":'LOGO-' + i,"loading":"lazy"}})],1)}),0)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-brand-logo.vue?vue&type=template&id=4e5ed5f1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-brand-logo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_brand_logovue_type_script_lang_js_ = ({
  props: {
    logos: Array,
    default: () => [{
      logoUrl: 'https://22527844.fs1.hubspotusercontent-na1.net/hubfs/22527844/images/logos/STANBUSINESS.png'
    }, {
      logoUrl: 'https://22527844.fs1.hubspotusercontent-na1.net/hubfs/22527844/images/logos/FINRA.png'
    }, {
      logoUrl: 'https://22527844.fs1.hubspotusercontent-na1.net/hubfs/22527844/images/logos/HBS.png'
    }, {
      logoUrl: 'https://venturefund.vercel.app/assets/img/logos/yale.png'
    }, {
      logoUrl: 'https://22527844.fs1.hubspotusercontent-na1.net/hubfs/22527844/images/logos/cbv.png'
    }, {
      logoUrl: 'https://venturefund.vercel.app/assets/img/logos/cfi.png'
    }]
  },
  data() {
    return {
      slider_options: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        slidesPerView: 2,
        infinite: false,
        spaceBetween: 0,
        touchRatio: 1,
        centeredSlides: true,
        init: false,
        breakpoints: {
          640: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 60
          }
        }
      }
    };
  },
  mounted() {
    this.brandLogo.init();
  }
});
// CONCATENATED MODULE: ./components/common/common-brand-logo.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_brand_logovue_type_script_lang_js_ = (common_brand_logovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-brand-logo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(170)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_brand_logovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4e5ed5f1",
  "0083d262"
  
)

/* harmony default export */ var common_brand_logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("3607f6af", content, true, context)
};

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-faq.vue?vue&type=template&id=da8ed408&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"bg-[#F3F3F3] py-10 md:py-16 xl:py-20"},[_vm._ssrNode("<div class=\"container relative px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-10 text-center md:mb-20\"><div class=\"mb-4 flex items-center justify-center gap-[33px] text-center\"><div class=\"block h-px w-full bg-[#d5d5d5]\"></div> <h2 id=\"faqs\" class=\"inline-block shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl\">"+(_vm._s(_vm.title))+"</h2> <div class=\"block h-px w-full bg-[#d5d5d5]\"></div></div> <p class=\"text-lg leading-6 -tracking-[-0.04px] text-[#566378]\">"+_vm._ssrEscape(_vm._s(_vm.description))+"</p></div> "),_vm._ssrNode("<div class=\"lg:w-[95%]\">","</div>",_vm._l((_vm.faqs),function(faq,i){return _vm._ssrNode("<div"+(_vm._ssrAttr("id",("faq-" + (faq.id))))+" class=\"mb-5\">","</div>",[_vm._ssrNode("<div class=\"space-y-3 border-b border-[#E6E6E6]\">","</div>",[_vm._ssrNode("<div class=\"group flex cursor-pointer items-start justify-between gap-5 md:gap-14\">","</div>",[_vm._ssrNode("<p"+(_vm._ssrClass("flex-1 pb-3 text-lg font-light leading-[25px] -tracking-[-0.04px] text-black md:pb-6 lg:pr-2",{ '!font-bold text-primary': _vm.openFaq === faq.id }))+">"+_vm._ssrEscape("\n                            "+_vm._s(faq.attributes.question)+"\n                        ")+"</p> "),_vm._ssrNode("<div class=\"lg:absolute lg:right-2.5\">","</div>",[(_vm.openFaq === faq.id)?_c('icons-minus',{staticClass:"w-4 flex-none text-primary md:w-auto"}):_c('icons-plus',{staticClass:"w-4 flex-none text-black-700 group-hover:text-primary md:w-auto"})],1)],2),_vm._ssrNode(" "),(_vm.openFaq === faq.id)?_c('common-custom-strapi-display',{attrs:{"classes":"pb-3 leading-[23px] lg:max-w-[1114px]","data":faq.attributes.answer}}):_vm._e()],2)])}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-faq.vue?vue&type=template&id=da8ed408&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-faq.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// FAQ open close
/* harmony default export */ var common_faqvue_type_script_lang_js_ = ({
  props: {
    faqs: {
      type: Array,
      default: () => [{
        id: 1,
        attributes: {
          question: 'Can I get free consultation with Ventureplans?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, in labore accusamus officiis error veritatis, magni recusandae quo itaque explicabo necessitatibus quibusdam suscipit, commodi cumque nostrum vero laborum magnam? Ratione omnis voluptate vitae illo, sit illum hic quam rem atque voluptatibus mollitia quae distinctio neque laboriosam sequi corrupti deleniti aperiam. Molestiae voluptate culpa eius delectus distinctio explicabo ullam neque, ab officiis cumque aspernatur quod aperiam, cum deleniti, autem labore minima est qui repudiandae veniam perferendis amet repellendus. Dolor, omnis tenetur.'
        }
      }, {
        id: 2,
        attributes: {
          question: 'How to choose a software development services company?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, in labore accusamus officiis error veritatis, magni recusandae quo itaque explicabo necessitatibus quibusdam suscipit, commodi cumque nostrum vero laborum magnam? Ratione omnis voluptate vitae illo, sit illum hic quam rem atque voluptatibus mollitia quae distinctio neque laboriosam sequi corrupti deleniti aperiam. Molestiae voluptate culpa eius delectus distinctio explicabo ullam neque, ab officiis cumque aspernatur quod aperiam, cum deleniti, autem labore minima est qui repudiandae veniam perferendis amet repellendus. Dolor, omnis tenetur.'
        }
      }, {
        id: 3,
        attributes: {
          question: 'What are the biggest benefits of outsourcing a software development services firm?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, in labore accusamus officiis error veritatis, magni recusandae quo itaque explicabo necessitatibus quibusdam suscipit, commodi cumque nostrum vero laborum magnam? Ratione omnis voluptate vitae illo, sit illum hic quam rem atque voluptatibus mollitia quae distinctio neque laboriosam sequi corrupti deleniti aperiam. Molestiae voluptate culpa eius delectus distinctio explicabo ullam neque, ab officiis cumque aspernatur quod aperiam, cum deleniti, autem labore minima est qui repudiandae veniam perferendis amet repellendus. Dolor, omnis tenetur.'
        }
      }, {
        id: 4,
        attributes: {
          question: 'How to reduce software development services costs?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, in labore accusamus officiis error veritatis, magni recusandae quo itaque explicabo necessitatibus quibusdam suscipit, commodi cumque nostrum vero laborum magnam? Ratione omnis voluptate vitae illo, sit illum hic quam rem atque voluptatibus mollitia quae distinctio neque laboriosam sequi corrupti deleniti aperiam. Molestiae voluptate culpa eius delectus distinctio explicabo ullam neque, ab officiis cumque aspernatur quod aperiam, cum deleniti, autem labore minima est qui repudiandae veniam perferendis amet repellendus. Dolor, omnis tenetur.'
        }
      }, {
        id: 5,
        attributes: {
          question: 'What are the most popular types of software development services?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, in labore accusamus officiis error veritatis, magni recusandae quo itaque explicabo necessitatibus quibusdam suscipit, commodi cumque nostrum vero laborum magnam? Ratione omnis voluptate vitae illo, sit illum hic quam rem atque voluptatibus mollitia quae distinctio neque laboriosam sequi corrupti deleniti aperiam. Molestiae voluptate culpa eius delectus distinctio explicabo ullam neque, ab officiis cumque aspernatur quod aperiam, cum deleniti, autem labore minima est qui repudiandae veniam perferendis amet repellendus. Dolor, omnis tenetur.'
        }
      }, {
        id: 6,
        attributes: {
          question: 'Can I get free consultation with Ventureplans?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, in labore accusamus officiis error veritatis, magni recusandae quo itaque explicabo necessitatibus quibusdam suscipit, commodi cumque nostrum vero laborum magnam? Ratione omnis voluptate vitae illo, sit illum hic quam rem atque voluptatibus mollitia quae distinctio neque laboriosam sequi corrupti deleniti aperiam. Molestiae voluptate culpa eius delectus distinctio explicabo ullam neque, ab officiis cumque aspernatur quod aperiam, cum deleniti, autem labore minima est qui repudiandae veniam perferendis amet repellendus. Dolor, omnis tenetur.'
        }
      }]
    },
    title: {
      type: String,
      default: 'FAQS'
    },
    description: {
      type: String,
      default: 'Do you have any questions?'
    }
  },
  data() {
    return {
      openFaq: null
    };
  },
  head() {
    return {
      script: [{
        type: 'application/ld+json',
        json: this.schemaMarkup
      }]
    };
  },
  computed: {
    schemaMarkup() {
      return this.generateSchema(this.$props.faqs);
    }
  },
  watch: {
    openFaq: {
      handler() {
        setTimeout(() => {
          let domRect = document.querySelector(`#faq-${this.openFaq}`);
          if (domRect !== null) {
            domRect = document.querySelector(`#faq-${this.openFaq}`).getBoundingClientRect();
            window.scrollTo({
              top: domRect.top + document.documentElement.scrollTop - 130,
              behavior: 'smooth'
            });
          }
        }, 100);
      },
      deep: true
    }
  },
  methods: {
    generateSchema(data) {
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.map(faq => ({
          '@type': 'Question',
          name: faq.attributes.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.attributes.answer
          }
        }))
      };
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-faq.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_faqvue_type_script_lang_js_ = (common_faqvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-faq.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_faqvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1f91d4b5"
  
)

/* harmony default export */ var common_faq = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsMinus: __webpack_require__(159).default,IconsPlus: __webpack_require__(160).default,CommonCustomStrapiDisplay: __webpack_require__(150).default})


/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-client-words.vue?vue&type=template&id=6c4da888&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-[url(/assets/img/our_client_bg.png)] bg-cover bg-[right_20%_top] bg-no-repeat py-14 pb-24 md:py-16 lg:bg-center xl:pb-20 xl:pt-[162px]"},[_vm._ssrNode("<section class=\"relative\" data-v-6c4da888>","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\" data-v-6c4da888>","</div>",[_vm._ssrNode("<div class=\"pb-[50px]\" data-v-6c4da888>","</div>",[_vm._ssrNode("<div id=\"ourClientsWords\" class=\"mb-5 flex items-center justify-center gap-2.5 text-center\" data-v-6c4da888>","</div>",[(_vm.hasCustomHeaderSlot)?_vm._t("customHeader",function(){return [_c('h2',{staticClass:"inline-block border-b-[7px] border-primary pb-2 text-xl font-bold md:text-2xl lg:text-3xl",domProps:{"innerHTML":_vm._s(_vm.title)}})]}):[_c('div',{staticClass:"block h-px w-full bg-[#d5d5d5]"}),_vm._v(" "),_c('h2',{staticClass:"inline-block shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl",domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),_c('div',{staticClass:"block h-px w-full bg-[#d5d5d5]"})]],2),_vm._ssrNode(" <div class=\"mx-auto max-w-lg space-y-5 text-center text-sm font-medium leading-6 -tracking-[0.03px] text-[#586376] xl:max-w-[732px] xl:text-[17px] xl:leading-[23px] xl:-tracking-[0.04px]\" data-v-6c4da888><p class=\"[&>br]:block [&>br]:sm:hidden\" data-v-6c4da888>"+(_vm._s(_vm.description))+"</p></div>")],2)]),_vm._ssrNode(" "),_c('div',{directives:[{name:"swiper",rawName:"v-swiper:aboutClient",value:(_vm.slider_options),expression:"slider_options",arg:"aboutClient"}],staticClass:"swiper client-words group relative mx-auto max-w-[1440px]",attrs:{"cleanup-styles-on-destroy":false}},[_vm._ssrNode("<div class=\"swiper-wrapper mb-16 flex\" data-v-6c4da888>","</div>",[(_vm.testimonials)?_vm._l((_vm.testimonials),function(data,i){return _vm._ssrNode("<div class=\"swiper-slide !h-auto\" data-v-6c4da888>","</div>",[_vm._ssrNode("<div class=\"container lg:px-[97px] xl:px-4\" data-v-6c4da888>","</div>",[_vm._ssrNode("<div class=\"mb-10 flex flex-col items-center gap-10 md:flex-row md:items-start lg:mb-[106px]\" data-v-6c4da888>","</div>",[_vm._ssrNode("<div class=\"flex-1\" data-v-6c4da888>","</div>",[_vm._ssrNode("<div class=\"mb-4\" data-v-6c4da888>","</div>",[_c('nuxt-img',{attrs:{"src":"/assets/img/icon_quote.png","alt":"Quote","loading":"lazy"}})],1),_vm._ssrNode(" <div class=\"space-y-5 font-bold -tracking-[0.04px] text-[#707070] lg:text-lg\" data-v-6c4da888><p class=\"max-w-[633px]\" data-v-6c4da888>"+_vm._ssrEscape("\n                                            "+_vm._s(data.attributes.description)+"\n                                        ")+"</p></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"h-[200px] w-[200px] flex-none overflow-hidden rounded-full xl:h-[340px] xl:w-[340px]\" data-v-6c4da888>","</div>",[_c('nuxt-img',{staticClass:"h-full w-full rounded-full object-cover",attrs:{"format":"webp","src":data.attributes.profileImgUrl,"alt":"Profile Image","loading":"lazy"}})],1)],2),_vm._ssrNode(" <div class=\"text-center md:text-left\" data-v-6c4da888><p class=\"inline-block border-b-[5px] border-r-[5px] border-primary border-r-transparent pb-2 text-xl italic text-black md:inline-block xl:border-b-[9px] xl:text-[21px] xl:leading-[60px]\" data-v-6c4da888>"+_vm._ssrEscape("\n                                    "+_vm._s(data.attributes.name)+"\n                                    ")+((data.attributes.companyName)?("<span data-v-6c4da888>"+_vm._ssrEscape("\n                                        "+_vm._s(("- " + (data.attributes.companyName)))+"\n                                    ")+"</span>"):"<!---->")+"</p></div>")],2)])}):_vm._e()],2),_vm._ssrNode(" <div class=\"max-w-[1440px]\" data-v-6c4da888><div class=\"swiper-button-next swiper-button-next1 -mr-3 !hidden group-hover:md:!inline-block\" data-v-6c4da888></div> <div class=\"swiper-button-prev swiper-button-prev1 -ml-3 !hidden group-hover:md:!inline-block\" data-v-6c4da888></div></div>")],2)],2),_vm._ssrNode(" <div class=\"flex w-full justify-center lg:mt-[31px]\" data-v-6c4da888><div class=\"swiper-pagination swiper-pagination-bullets\" data-v-6c4da888></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-client-words.vue?vue&type=template&id=6c4da888&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-client-words.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_client_wordsvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: 'OUR CLIENT WORDS'
    },
    description: {
      type: String,
      default: 'See how we’ve helped our clients achieve their business goals.'
    },
    testimonials: {
      type: Array,
      default: () => [{
        id: 1,
        attributes: {
          name: 'Gurvinder H',
          description: 'They are experienced in cognitive computing, automation, ICO, big data, and artificial intelligence.',
          profileImgUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/1QhlKfFBmyMf7qsZbPooEY/2afda1f2a33ee4828212b84ab9ae41ce/gurvinder.png'
        }
      }, {
        id: 2,
        attributes: {
          name: 'Jason F. - SVP & Founder Digital Niche Agency',
          description: 'Arleo and his team are a pleasure to work with. He is smart talented leader who leverages his professionalism and problem-solving abilities in all conversations. Arleo hand picks the best projects to invest his time into and we were lucky to be involved.',
          profileImgUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/7A2MGgPAdroU37d5aTw8IZ/8052483e50c83ff31283bafcdc3f5c27/testimonial_01.png'
        }
      }]
    }
  },
  data() {
    return {
      isShowReadMore: false,
      slider_options: {
        autoPlay: false,
        loop: true,
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 10,
        touchRatio: 1,
        init: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return `<p aria-label="Bullet Icon" class="career-slider-bullet-icon ${className}"></p>`;
          }
        },
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1'
        }
      },
      slider_data: []
    };
  },
  computed: {
    hasCustomHeaderSlot() {
      return !!this.$slots.customHeader;
    }
  },
  mounted() {
    this.aboutClient.init();
  },
  created() {}
});
// CONCATENATED MODULE: ./components/common/common-client-words.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_client_wordsvue_type_script_lang_js_ = (common_client_wordsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-client-words.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(175)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_client_wordsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6c4da888",
  "90c129d0"
  
)

/* harmony default export */ var common_client_words = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_brand_logo_vue_vue_type_style_index_0_id_4e5ed5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_brand_logo_vue_vue_type_style_index_0_id_4e5ed5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_brand_logo_vue_vue_type_style_index_0_id_4e5ed5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_brand_logo_vue_vue_type_style_index_0_id_4e5ed5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_brand_logo_vue_vue_type_style_index_0_id_4e5ed5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(146);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(147);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(148);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".brand-logo .swiper-button-prev.swiper-button-prev1[data-v-4e5ed5f1]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")!important;background:no-repeat;background-position:50%;background-color:#fbfbfd;height:80px;margin-top:-44px}.swiper-button-prev1[data-v-4e5ed5f1]:after{content:\"\"}.brand-logo .swiper-button-next.swiper-button-next1[data-v-4e5ed5f1]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")!important;background:no-repeat;background-position:50%;background-color:#fbfbfd;height:80px;margin-top:-44px}.swiper-button-next1[data-v-4e5ed5f1]:after{content:\"\"}.brand-logo .swiper-slide>img[data-v-4e5ed5f1]{height:150px!important}@media (max-width:1025px){.brand-logo .swiper-slide>img[data-v-4e5ed5f1]{height:120px!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_client_words_vue_vue_type_style_index_0_id_6c4da888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_client_words_vue_vue_type_style_index_0_id_6c4da888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_client_words_vue_vue_type_style_index_0_id_6c4da888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_client_words_vue_vue_type_style_index_0_id_6c4da888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_client_words_vue_vue_type_style_index_0_id_6c4da888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(146);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(147);
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(148);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".client-words .swiper-button-prev.swiper-button-prev1[data-v-6c4da888]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")!important;background:no-repeat;background-position:50%;background-color:#00adff;height:54px;margin-top:-44px;position:absolute;width:54px;border-radius:50%;left:2%}.swiper-button-prev1[data-v-6c4da888]:after{content:\"\"}.client-words .swiper-button-next.swiper-button-next1[data-v-6c4da888]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")!important;background:no-repeat;background-position:50%;background-color:#00adff;height:54px;margin-top:-44px;position:absolute;width:54px;border-radius:50%;right:2%}.swiper-button-next1[data-v-6c4da888]:after{content:\"\"}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-close-time.vue?vue&type=template&id=baee35ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"10","height":"10","viewBox":"0 0 10 10"}},[_vm._ssrNode("<g><g><g><g><path d=\"M.494 4.816a4.306 4.306 0 1 1 8.612 0 4.306 4.306 0 0 1-8.612 0z\"></path></g> <g><g transform=\"rotate(-45 5 4.5)\"><path fill=\"#fff\" d=\"M4.231 1.746l.99.059.334 5.638-.99-.06z\"></path></g> <g transform=\"rotate(45 5 4.5)\"><path fill=\"#fff\" d=\"M4.566 1.805l.99-.059-.335 5.638-.99.059z\"></path></g></g></g></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-close-time.vue?vue&type=template&id=baee35ee&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-close-time.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "27036a52"
  
)

/* harmony default export */ var icons_close_time = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(240);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("30be819e", content, true, context)
};

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-down-border.vue?vue&type=template&id=6ccd99c6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-6 w-6",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke":"currentColor","stroke-width":"2"}},[_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19 9l-7 7-7-7\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-down-border.vue?vue&type=template&id=6ccd99c6&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-down-border.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4ab2029c"
  
)

/* harmony default export */ var icons_down_border = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_google_ad_heroform_vue_vue_type_style_index_0_id_33881290_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(233);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_google_ad_heroform_vue_vue_type_style_index_0_id_33881290_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_google_ad_heroform_vue_vue_type_style_index_0_id_33881290_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_google_ad_heroform_vue_vue_type_style_index_0_id_33881290_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_google_ad_heroform_vue_vue_type_style_index_0_id_33881290_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slide-fade-enter-active[data-v-33881290],.slide-fade-leave-active[data-v-33881290]{transition:opacity .3s}.slide-fade-enter[data-v-33881290],.slide-fade-leave-to[data-v-33881290]{opacity:0}.custom-multiselect.multiselect[data-v-33881290]{position:absolute!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/software-google-ad/why-venture-plans.vue?vue&type=template&id=0af999cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<ul class=\"grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5\">"+(_vm._ssrList((_vm.ventureFeatures),function(feature,i){return ("<li class=\"group [perspective:1000px]\"><div class=\"relative h-full w-full bg-primary px-7 pb-[63px] pt-[42px] text-xl font-semibold text-white transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]\"><div class=\"inset-0 flex flex-col items-center justify-center gap-4\"><div class=\"h-20\">"+(_vm._s(feature.img))+"</div>"+_vm._ssrEscape("\n                    "+_vm._s(feature.title)+"\n                ")+"</div> <div class=\"absolute inset-0 h-full w-full bg-primary px-2 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)]\"><div class=\"flex min-h-full flex-col items-center justify-center\"><p class=\"mb-4 text-base text-white\">"+_vm._ssrEscape("\n                            "+_vm._s(feature.description)+"\n                        ")+"</p></div></div></div></li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/software-google-ad/why-venture-plans.vue?vue&type=template&id=0af999cc&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/software-google-ad/why-venture-plans.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var why_venture_plansvue_type_script_lang_js_ = ({
  props: {
    ventureFeatures: {
      type: Array
    }
  },
  data() {
    return {};
  }
});
// CONCATENATED MODULE: ./components/software-google-ad/why-venture-plans.vue?vue&type=script&lang=js&
 /* harmony default export */ var software_google_ad_why_venture_plansvue_type_script_lang_js_ = (why_venture_plansvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/software-google-ad/why-venture-plans.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  software_google_ad_why_venture_plansvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4e7949a0"
  
)

/* harmony default export */ var why_venture_plans = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/google-ad/google-ad-heroform.vue?vue&type=template&id=33881290&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"contact-heroform relative h-[700px] bg-[url(/assets/img/software_google_ad_banner.webp)] bg-cover bg-[top_8%_center] bg-no-repeat py-[48px] md:h-[730px] md:py-[97px] xl:py-[100px]"},[_vm._ssrNode("<div class=\"absolute left-0 top-0 z-0 h-full w-full\" style=\"background: black; opacity: 35%\" data-v-33881290></div> "),_vm._ssrNode("<div class=\"container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4\" data-v-33881290>","</div>",[_vm._ssrNode("<form id=\"google-ad-form\" action data-v-33881290>","</form>",[_vm._ssrNode("<div class=\"flex flex-col gap-7 md:flex-row md:items-center xl:gap-[140px]\" data-v-33881290>","</div>",[_vm._ssrNode("<div class=\"md:flex-1\" data-v-33881290>","</div>",[_vm._ssrNode("<div class=\"mb-10 md:mb-[122px]\" data-v-33881290><p class=\"mb-2 text-[13px] font-normal leading-4 text-[#FBFBFD] xl:mb-0 xl:text-xl xl:leading-10\" data-v-33881290>Venture Plans, your dream starts with us</p> <h2 class=\"mb-5 text-2xl font-bold uppercase leading-[30px] text-[#F7F4F4] xl:text-[32px] xl:leading-[50px]\" data-v-33881290>"+_vm._ssrEscape(_vm._s(_vm.getHeading))+"</h2> <p class=\"max-w-[600px] border-l-[3px] border-primary pl-3 text-[13px] font-normal leading-4 text-[#FBFBFD] xl:text-xl xl:leading-10\" data-v-33881290>"+_vm._ssrEscape(_vm._s(_vm.getSubHeading))+"</p></div> "),_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closeSearch),expression:"closeSearch"}],staticClass:"group relative inline-block w-full text-left md:w-auto"},[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.16] w-full origin-top-right md:w-56 xl:w-80\" data-v-33881290>","</div>",[_vm._ssrNode("<div role=\"none\" data-v-33881290>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("inline-flex w-full flex-1 items-center rounded-lg border border-white p-[18px] pr-10 text-base font-bold leading-5 text-white duration-200 hover:border-primary hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-offset-0",{
                                        'bg-[#f9ecea] text-danger': _vm.$v.params.service.$error,
                                        'rounded-bl-none rounded-br-none !border-primary !bg-primary !text-white': _vm.showService,
                                        'border-none bg-primary': _vm.searchResult !== 'Select a Service',
                                    }))+" data-v-33881290>","</div>",[_vm._ssrNode(_vm._ssrEscape("\n                                    "+_vm._s(_vm.searchResult)+"\n                                    ")),_c('icons-selection-arrow',{staticClass:"absolute right-[20px]",class:{ 'rotate-180': _vm.showService, 'text-danger': _vm.$v.params.service.$error }})],2),_vm._ssrNode(" "),_c('Transition',{attrs:{"name":"slide-fade"}},[_c('multiselect',{directives:[{name:"show",rawName:"v-show",value:(_vm.showService),expression:"showService"}],ref:"multiselect",staticClass:"custom-multiselect default-open-multiselect absolute z-30 w-full bg-white py-3 text-xs leading-[15px] text-[#586376] focus:outline-none md:max-w-[350px] xl:max-w-[406px] xl:py-[15px] xl:text-sm xl:leading-[21px]",attrs:{"max-height":358,"option-height":45,"options":_vm.serviceSuggestionOptions,"show-no-results":false,"close-on-select":true,"show-labels":false,"placeholder":"Search"},on:{"select":_vm.onSelect,"search-change":_vm.searchChange},model:{value:(_vm.params.service),callback:function ($$v) {_vm.$set(_vm.params, "service", $$v)},expression:"params.service"}},[_c('template',{slot:"caret"},[_c('button',{staticClass:"pointer-events-none absolute right-0 top-0 mr-4 mt-3 xl:mt-3",attrs:{"type":"submit"}},[_c('icons-search',{staticClass:"h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4"})],1)]),_vm._v(" "),_c('template',{slot:"clear"},[(_vm.isClearSearch)?_c('button',{staticClass:"absolute right-0 top-0 mr-11 mt-3 xl:mt-3",attrs:{"type":"button"},on:{"click":function($event){$event.stopPropagation();_vm.params.service = ''}}},[_c('icons-close-time',{staticClass:"h-3 w-3 fill-current text-black xl:h-4 xl:w-4"})],1):_vm._e()])],2)],1)],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-2.5 w-full flex-none space-y-6 md:max-w-[390px] xl:max-w-[605px] xl:space-y-8\" data-v-33881290>","</div>",[_vm._ssrNode("<div class=\"form-input-group\" data-v-33881290><input name=\"full_name\" autocomplete=\"on\" type=\"text\" placeholder=\"Full Name\""+(_vm._ssrAttr("value",(_vm.$v.params.fullname.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.params.fullname.$error }))+" data-v-33881290></div> "),_vm._ssrNode("<div class=\"form-input-group\" data-v-33881290>","</div>",[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.$v.params.phone.$model),expression:"$v.params.phone.$model"},{name:"mask",rawName:"v-mask",value:(_vm.$mask.phoneMask),expression:"$mask.phoneMask"}],staticClass:"form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",class:{ error: _vm.$v.params.phone.$error },attrs:{"type":"text","name":"phone","autocomplete":"on","placeholder":"Phone Number"},domProps:{"value":(_vm.$v.params.phone.$model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$v.params.phone, "$model", $event.target.value)}}},[])]),_vm._ssrNode(" <div class=\"form-input-group\" data-v-33881290><input type=\"text\" name=\"email\" autocomplete=\"on\" placeholder=\"Your Email Address\""+(_vm._ssrAttr("value",(_vm.$v.params.email.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.params.email.$error }))+" data-v-33881290></div> <div data-v-33881290><button type=\"submit\" class=\"btn w-full px-16 py-4 hover:bg-primary-700 md:py-[16px] xl:px-20\" data-v-33881290>SUBMIT</button></div> "),(_vm.isSubmitted)?_vm._ssrNode("<div class=\"mt-5 flex justify-center gap-3\" data-v-33881290>","</div>",[_c('icons-check-circle',{staticClass:"relative top-[2px] h-6 w-6 text-green"}),_vm._ssrNode(" <p class=\"text-xl font-extrabold leading-[25px] text-white\" data-v-33881290><span class=\"border-b-[2px] border-green text-green\" data-v-33881290>Congratulations,</span> your form has been submitted.</p>")],2):_vm._e()],2)],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/google-ad/google-ad-heroform.vue?vue&type=template&id=33881290&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// EXTERNAL MODULE: external "vue-click-outside"
var external_vue_click_outside_ = __webpack_require__(129);
var external_vue_click_outside_default = /*#__PURE__*/__webpack_require__.n(external_vue_click_outside_);

// EXTERNAL MODULE: ./helper/custom-validations.js
var custom_validations = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/google-ad/google-ad-heroform.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var google_ad_heroformvue_type_script_lang_js_ = ({
  directives: {
    ClickOutside: external_vue_click_outside_default.a
  },
  props: {
    services: {
      type: Array,
      default: () => {
        return [];
      }
    },
    mainText: {
      type: String,
      default: () => {
        return '';
      }
    },
    subText: {
      type: String,
      default: () => {
        return '';
      }
    }
  },
  data() {
    return {
      isSubmitted: false,
      isClearSearch: false,
      params: {
        service: '',
        fullname: '',
        email: '',
        phone: ''
      },
      showService: false
    };
  },
  computed: {
    serviceSuggestionOptions() {
      return this.services.map(dat => {
        return dat.serviceName;
      });
    },
    searchResult() {
      return !this.$helper.isEmpty(this.params.service) ? this.params.service : 'Select a Service';
    },
    getHeading() {
      return this.$props.mainText ? this.$props.mainText : 'Build your software with venture plans';
    },
    getSubHeading() {
      return this.$props.subText ? this.$props.subText : 'Get funding with FINRA and Harvard Accredited Industry Experts';
    }
  },
  watch: {
    'params.service': {
      handler() {
        if (this.$helper.isEmpty(this.params.service)) {
          this.$refs.multiselect.activate();
          this.$refs.multiselect.$el.focus();
        }
      },
      deep: true
    }
  },
  mounted() {
    console.log(this.services);
  },
  validations() {
    return {
      params: {
        fullname: {
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
        service: {
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
      try {
        this.$v.params.$touch();
        if (this.$v.params.$invalid || this.$v.params.$error) {
          if (window.innerWidth < 768) {
            setTimeout(() => {
              this.$nextTick(() => {
                // window.scrollTo({ top: 0, behavior: 'smooth' })
                let domRect = document.querySelector('.error');
                if (domRect !== null) {
                  domRect = document.querySelector('.error').getBoundingClientRect();
                  window.scrollTo({
                    top: domRect.top + document.documentElement.scrollTop - 140,
                    behavior: 'smooth'
                  });
                }
              });
            }, 500);
          }
          return false;
        }
        try {
          const token = this.widgetId ? await this.$recaptcha.getResponse(this.widgetId) : await this.$recaptcha.getResponse();
        } catch (error) {}
        if (!this.captchaError) {
          this.isSubmitting = true;
          const data = await this.$hubspot.readyToTalkForm(this.params);
          if (!data) {
            return false;
          }
          this.isSubmitted = true;
          this.isSubmitting = false;
          this.$v.params.$reset();
          this.params = {
            service: '',
            fullname: '',
            email: '',
            phone: ''
          };
          this.widgetId ? await this.$recaptcha.reset(this.widgetId) : await this.$recaptcha.reset();
        }
      } catch (error) {
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/google-ad/google-ad-heroform.vue?vue&type=script&lang=js&
 /* harmony default export */ var google_ad_google_ad_heroformvue_type_script_lang_js_ = (google_ad_heroformvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/google-ad/google-ad-heroform.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(239)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  google_ad_google_ad_heroformvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "33881290",
  "2d330999"
  
)

/* harmony default export */ var google_ad_heroform = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsSelectionArrow: __webpack_require__(138).default,IconsSearch: __webpack_require__(70).default,IconsCloseTime: __webpack_require__(181).default,IconsCheckCircle: __webpack_require__(69).default})


/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/software-google-ad/software-development-services.vue?vue&type=template&id=340aa526&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"grid grid-cols-1 divide-y divide-[#e6e6e6] border border-[#e6e6e6] bg-white text-center sm:grid-cols-2 sm:divide-x md:grid-cols-3"},_vm._l((_vm.services),function(service,i){return _vm._ssrNode("<li class=\"group relative overflow-hidden px-8 pb-[43px] pt-[50px] hover:bg-primary\">","</li>",[_vm._ssrNode("<div class=\"duration-700 group-hover:scale-75 group-hover:opacity-0\">","</div>",[_vm._ssrNode("<div class=\"mb-4 h-28\">","</div>",[_c('nuxt-img',{staticClass:"mx-auto",attrs:{"format":"webp","src":service.svgLink,"alt":service.title,"loading":"lazy"}})],1),_vm._ssrNode(" <h3 class=\"text-xl font-semibold leading-[50px] group-hover:text-white lg:text-2xl\">"+_vm._ssrEscape(_vm._s(service.title))+"</h3>")],2),_vm._ssrNode(" <div class=\"absolute bottom-0 left-0 right-0 top-0 text-start\"><div class=\"translate-y-[200%] transform px-4 pt-8 text-white opacity-0 transition-transform delay-200 duration-500 group-hover:translate-y-0 group-hover:opacity-100\"><p class=\"text-xl font-bold\">"+_vm._ssrEscape(_vm._s(service.title))+"</p>"+_vm._ssrEscape("\n                "+_vm._s(service.Description)+"\n            ")+"</div></div>")],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/software-google-ad/software-development-services.vue?vue&type=template&id=340aa526&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/software-google-ad/software-development-services.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var software_development_servicesvue_type_script_lang_js_ = ({
  props: {
    services: {
      type: Array,
      default: () => {
        return [{
          title: 'Mobile Development',
          svgLink: '/assets/img/mobile_icon.png',
          Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt hic aliquid debitis tenetur maxime atque reiciendis voluptatum. Iure, officiis?'
        }, {
          title: 'UX / UI Design',
          svgLink: '/assets/img/ux_ui_icon.png',
          Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt hic aliquid debitis tenetur maxime atque reiciendis voluptatum. Iure, officiis?'
        }, {
          title: 'QA Testing',
          svgLink: '/assets/img/qa_icon.png',
          Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt hic aliquid debitis tenetur maxime atque reiciendis voluptatum. Iure, officiis?'
        }, {
          title: 'Development Team',
          svgLink: '/assets/img/team_icon.png',
          Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt hic aliquid debitis tenetur maxime atque reiciendis voluptatum. Iure, officiis?'
        }, {
          title: 'IT Consulting',
          svgLink: '/assets/img/it_icon.png',
          Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt hic aliquid debitis tenetur maxime atque reiciendis voluptatum. Iure, officiis?'
        }, {
          title: 'Product Engineering',
          svgLink: '/assets/img/engineering_icon.png',
          Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt hic aliquid debitis tenetur maxime atque reiciendis voluptatum. Iure, officiis?'
        }];
      }
    }
  }
});
// CONCATENATED MODULE: ./components/software-google-ad/software-development-services.vue?vue&type=script&lang=js&
 /* harmony default export */ var software_google_ad_software_development_servicesvue_type_script_lang_js_ = (software_development_servicesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/software-google-ad/software-development-services.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  software_google_ad_software_development_servicesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "58c39b6a"
  
)

/* harmony default export */ var software_development_services = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/google-ad/google-ad-custom-software-development.vue?vue&type=template&id=892dadf2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-10 md:pb-0 md:pt-16 xl:pb-10 xl:pt-[86px]"},[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-start gap-[33px] text-start\"><h2 class=\"inline-block border-b-[7px] border-primary pb-2 text-xl font-bold md:text-2xl lg:text-3xl\">"+_vm._ssrEscape(_vm._s(_vm.heading))+"</h2></div> "),_vm._ssrNode("<div class=\"grid grid-cols-1 sm:gap-14 lg:grid-cols-2 lg:gap-4\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<p class=\"my-10 text-lg font-light leading-8\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.$props.subParagraph)+"\n                ")+"</p> "),_vm._ssrNode("<div class=\"mb-[53px] divide-y divide-[#e6e6e6] border-b border-t border-[#e6e6e6]\">","</div>",_vm._l((_vm.customServices),function(service){return _vm._ssrNode("<div class=\"py-2.5\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("flex cursor-pointer items-center gap-4 text-lg font-light leading-[47px] -tracking-[0.04px]",{ 'text-primary': _vm.openTab === service.title }))+">","</div>",[_vm._ssrNode("<span"+(_vm._ssrClass("w-12 text-[#a2a2a2]",_vm.openTab === service.title ? '!text-primary' : ''))+">"+(_vm._s(service.icon))+"</span>"+_vm._ssrEscape("\n                            "+_vm._s(service.title)+"\n                            ")),_vm._ssrNode("<span class=\"ml-auto\">","</span>",[_c('icons-down-border',{staticClass:"text-[#989898]",class:{ 'rotate-180 !text-primary': _vm.openTab === service.title }})],1)],2),_vm._ssrNode(" <div class=\"mt-3 pl-16 text-base -tracking-[0.03px] text-primary\""+(_vm._ssrStyle(null,null, { display: (_vm.openTab === service.title) ? '' : 'none' }))+"><p>"+_vm._ssrEscape(_vm._s(service.description))+"</p></div>")],2)}),0),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('nuxt-img',{staticClass:"mx-auto",attrs:{"format":"webp","src":_vm.bottomLogo,"alt":"Bottom Logo","loading":"lazy"}})],1)],2),_vm._ssrNode(" <div class=\"h-[400px] sm:h-auto lg:mt-40\"><ul class=\"relative top-28 mx-auto h-[295px] max-w-[295px] rounded-full border-[5px] border-primary/10 sm:top-24 sm:h-[365px] sm:max-w-[365px] lg:top-0 lg:mr-0 xl:h-[438px] xl:max-w-[438px]\"><li class=\"group relative -left-3 -top-4 float-left flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:left-3 sm:top-0 xl:left-5\"><div"+(_vm._ssrClass("transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]",{ 'mb-[10px] mt-[-10px]': _vm.openTab === _vm.customServices[0].title }))+">"+_vm._ssrEscape(_vm._s(_vm.customServices[0].title))+"</div> <span class=\"relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white\"><div"+(_vm._ssrClass("absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150",{ 'scale-150': _vm.openTab === _vm.customServices[0].title }))+"></div> <span class=\"w-10\">"+(_vm._s(_vm.customServices[0].icon))+"</span></span></li> <li class=\"group relative -top-20 left-10 float-left flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:left-20 xl:left-28\"><div"+(_vm._ssrClass("transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]",{ 'mb-[10px] mt-[-10px]': _vm.openTab === _vm.customServices[1].title }))+">"+_vm._ssrEscape(_vm._s(_vm.customServices[1].title))+"</div> <span class=\"relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white\"><div"+(_vm._ssrClass("absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150",{ 'scale-150': _vm.openTab === _vm.customServices[1].title }))+"></div> <span class=\"w-10\">"+(_vm._s(_vm.customServices[1].icon))+"</span></span></li> <li class=\"group relative -top-5 right-0 float-right flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:top-0 xl:right-6\"><div"+(_vm._ssrClass("transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]",{ 'mb-[10px] mt-[-10px]': _vm.openTab === _vm.customServices[2].title }))+">"+_vm._ssrEscape(_vm._s(_vm.customServices[2].title))+"</div> <span class=\"relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white\"><div"+(_vm._ssrClass("absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150",{ 'scale-150': _vm.openTab === _vm.customServices[2].title }))+"></div> <span class=\"w-10\">"+(_vm._s(_vm.customServices[2].icon))+"</span></span></li> <li class=\"group relative -right-6 top-5 float-right clear-both flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:-right-8 sm:top-16\"><div"+(_vm._ssrClass("transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]",{ 'mb-[10px] mt-[-10px]': _vm.openTab === _vm.customServices[3].title }))+">"+_vm._ssrEscape(_vm._s(_vm.customServices[3].title))+"</div> <span class=\"relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white\"><div"+(_vm._ssrClass("absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150",{ 'scale-150': _vm.openTab === _vm.customServices[3].title }))+"></div> <span class=\"w-10\">"+(_vm._s(_vm.customServices[3].icon))+"</span></span></li> <li class=\"group relative right-16 top-0 float-right clear-both flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:top-16 xl:top-32\"><div"+(_vm._ssrClass("transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]",{ 'mb-[10px] mt-[-10px]': _vm.openTab === _vm.customServices[4].title }))+">"+_vm._ssrEscape(_vm._s(_vm.customServices[4].title))+"</div> <span class=\"relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white\"><div"+(_vm._ssrClass("absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150",{ 'scale-150': _vm.openTab === _vm.customServices[4].title }))+"></div> <span class=\"w-10\">"+(_vm._s(_vm.customServices[4].icon))+"</span></span></li> <li class=\"group relative -top-24 left-10 float-left clear-both flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:-top-7 sm:left-16 xl:top-5\"><div"+(_vm._ssrClass("transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]",{ 'mb-[10px] mt-[-10px]': _vm.openTab === _vm.customServices[5].title }))+">"+_vm._ssrEscape(_vm._s(_vm.customServices[5].title))+"</div> <span class=\"relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white\"><div"+(_vm._ssrClass("absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150",{ 'scale-150': _vm.openTab === _vm.customServices[5].title }))+"></div> <span class=\"w-10\">"+(_vm._s(_vm.customServices[5].icon))+"</span></span></li> <li class=\"group relative -left-8 bottom-72 float-left clear-both flex cursor-pointer flex-col gap-3 text-lg font-semibold -tracking-[0.04px] text-primary transition-all ease-linear sm:-left-8 sm:bottom-56\"><div"+(_vm._ssrClass("transition-all ease-linear group-hover:mb-[10px] group-hover:mt-[-10px]",{ 'mb-[10px] mt-[-10px]': _vm.openTab === _vm.customServices[6].title }))+">"+_vm._ssrEscape(_vm._s(_vm.customServices[6].title))+"</div> <span class=\"relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white\"><div"+(_vm._ssrClass("absolute h-full w-full rounded-full bg-primary opacity-20 transition-all ease-linear group-hover:scale-150",{ 'scale-150': _vm.openTab === _vm.customServices[6].title }))+"></div> <span class=\"w-10\">"+(_vm._s(_vm.customServices[6].icon))+"</span></span></li></ul></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/google-ad/google-ad-custom-software-development.vue?vue&type=template&id=892dadf2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/google-ad/google-ad-custom-software-development.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var google_ad_custom_software_developmentvue_type_script_lang_js_ = ({
  props: {
    bottomLogo: {
      type: String,
      default: () => {
        return '/assets/img/software_icon_img.png';
      }
    },
    heading: {
      type: String,
      default: () => {
        return 'CUSTOM SOFTWARE DEVELOPMENT';
      }
    },
    subParagraph: {
      type: String,
      default: () => {
        return 'From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development of scalable solutions, Intellectsoft delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs.';
      }
    },
    customServices: {
      type: Array,
      default: () => {
        return [{
          title: 'Designing',
          description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39"><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`
        }, {
          title: 'Designing',
          description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39"><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`
        }, {
          title: 'Designing',
          description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39" ><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`
        }, {
          title: 'Designing',
          description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39" ><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`
        }, {
          title: 'Designing',
          description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39" ><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`
        }, {
          title: 'Designing',
          description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39" ><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`
        }, {
          title: 'Designing',
          description: 'We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 39" ><g><g><g><g><g><path fill="currentColor" d="M42.815 25.629H4.005V3.297h38.81zm-19.409 3.574a1.334 1.334 0 0 1-1.331-1.34 1.334 1.334 0 1 1 2.67 0 1.34 1.34 0 0 1-1.339 1.34zM43.963.235H2.858A1.914 1.914 0 0 0 .944 2.15v26.71c0 1.055.857 1.913 1.914 1.913h41.105a1.914 1.914 0 0 0 1.913-1.914V2.148A1.914 1.914 0 0 0 43.963.236z"></path></g></g> <g><g><path fill="currentColor" d="M31.044 35.15v3.037a.384.384 0 0 1-.382.383H16.159a.379.379 0 0 1-.383-.383V35.15c0-.214.168-.383.383-.383h2.755v-3.23h8.985v3.23h2.763c.206 0 .382.169.382.383z"></path></g></g> <g><g><path fill="currentColor" d="M19.358 17.57l-2.45 2.556a.386.386 0 0 1-.543.008.386.386 0 0 1-.007-.544l2.196-2.288-2.196-2.296a.386.386 0 0 1 .007-.543.386.386 0 0 1 .544.015l2.449 2.556a.383.383 0 0 1 0 .536zm-3.513-3.873l-1.998 7.4a.385.385 0 0 1-.466.276.389.389 0 0 1-.276-.474l1.998-7.4a.38.38 0 0 1 .466-.269c.207.054.33.26.276.467zm-2.97 5.893a.386.386 0 0 1-.015.544.386.386 0 0 1-.543-.008l-2.45-2.556a.399.399 0 0 1 0-.536l2.45-2.556a.386.386 0 0 1 .543-.015c.153.153.16.39.016.543l-2.197 2.296zm9.529-8.847H6.822a.379.379 0 0 0-.383.383v12.352c0 .207.169.383.383.383h15.582a.384.384 0 0 0 .382-.383V11.126a.379.379 0 0 0-.382-.383z"></path></g> <g><path fill="currentColor" d="M40.373 23.478a.384.384 0 0 1-.382.383H27.562a.389.389 0 0 1-.383-.383c0-.214.176-.383.383-.383h12.429c.214 0 .382.169.382.383z"></path></g> <g><path fill="currentColor" d="M39.99 21.106c.215 0 .383.176.383.382a.379.379 0 0 1-.382.383H27.562a.384.384 0 0 1-.383-.383c0-.206.176-.382.383-.382z"></path></g> <g><path fill="currentColor" d="M39.761 15.128h-13.99a.384.384 0 0 1-.382-.382v-3.62c0-.215.168-.383.382-.383h13.99c.207 0 .383.168.383.383v3.62a.389.389 0 0 1-.383.382z"></path></g></g> <g><g><path fill="currentColor" d="M34.542 17.524c0-.214.168-.383.382-.383h5.067a.384.384 0 0 1 0 .765h-5.067a.384.384 0 0 1-.382-.382z"></path></g> <g><path fill="currentColor" d="M40.373 19.506a.379.379 0 0 1-.382.383h-5.067a.379.379 0 0 1-.382-.383c0-.214.168-.383.382-.383h5.067c.214 0 .382.169.382.383z"></path></g></g> <g><path fill="currentColor" d="M37.442 7.177H25.947a.379.379 0 0 1-.382-.383c0-.207.168-.383.382-.383h11.495c.215 0 .383.176.383.383a.379.379 0 0 1-.383.383zm-22.454.107h-1.21v-1.21h1.21zm-2.526 0h-1.209v-1.21h1.21zm-2.533 0H8.72v-1.21h1.21zM40 4.735H6.821a.384.384 0 0 0-.383.383v3.115c0 .214.169.383.383.383h33.176a.384.384 0 0 0 .383-.383V5.118a.389.389 0 0 0-.383-.383z"></path></g></g></g></g></svg>`
        }];
      }
    }
  },
  data() {
    return {
      openTab: ''
    };
  }
});
// CONCATENATED MODULE: ./components/google-ad/google-ad-custom-software-development.vue?vue&type=script&lang=js&
 /* harmony default export */ var google_ad_google_ad_custom_software_developmentvue_type_script_lang_js_ = (google_ad_custom_software_developmentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/google-ad/google-ad-custom-software-development.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  google_ad_google_ad_custom_software_developmentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dfea7c34"
  
)

/* harmony default export */ var google_ad_custom_software_development = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsDownBorder: __webpack_require__(236).default})


/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/google-ad/google-ad-project-info-submit.vue?vue&type=template&id=72aab264&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"overflow-hidden bg-[url(/assets/img/mobile_image_16.jpg)] bg-cover pb-8 pt-96 md:bg-[url(/assets/img/image_16.jpg)] md:py-20"},[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 items-start gap-5 md:grid-cols-2\">","</div>",[_vm._ssrNode("<div class=\"relative z-[1] flex flex-col justify-center xl:pl-10 xl:pt-5\">","</div>",[_vm._ssrNode("<span class=\"absolute -inset-5 -z-[1] m-auto bg-black/30 blur-2xl\"></span> <h2 class=\"mb-3.5 max-w-full text-center text-xl font-bold uppercase text-white md:max-w-[455px] md:text-left md:text-2xl lg:text-3xl\">"+_vm._ssrEscape(_vm._s(_vm.$props.tellUsMoreTitle))+"</h2> <ul class=\"mb-10 grid grid-cols-3 gap-2 text-white md:mb-[65px] md:gap-5\"><li class=\"text-3xl font-bold md:text-5xl md:leading-[55px] xl:text-6xl\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$props.firstProofValue)+" ")+"<span class=\"block text-base font-normal xl:text-xl\">"+_vm._ssrEscape(_vm._s(_vm.$props.firstProofTitle))+"</span></li> <li class=\"text-3xl font-bold md:text-5xl xl:text-6xl\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$props.secondProofValue)+" ")+"<span class=\"block text-base font-normal xl:text-xl\">"+_vm._ssrEscape(_vm._s(_vm.$props.secondProofTitle))+"</span></li> <li class=\"text-3xl font-bold md:text-5xl xl:text-6xl\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.$props.thirdProofValue)+" ")+"<span class=\"block text-base font-normal xl:text-xl\">"+_vm._ssrEscape(_vm._s(_vm.$props.thirdProofTitle))+"</span></li></ul> "),_vm._ssrNode("<div class=\"mt-[55px] pb-6 md:mb-5\">","</div>",[_vm._ssrNode("<p class=\"mb-5 text-[15px] leading-[47px] text-[#f7f4f4]\">As seen on</p> "),_vm._ssrNode("<div class=\"flex items-center gap-2\">","</div>",_vm._l((_vm.featuredCompanies),function(company,i){return _vm._ssrNode("<div class=\"xs:h-[50px] xs:w-[50px] flex h-[46px] w-[46px] flex-row items-center justify-center rounded-full bg-white p-1 px-2 shadow-[0px_1px_8px_rgba(0,0,0,0.2)] sm:h-[57px] sm:w-[57px] md:h-[65px] md:w-[65px] xl:h-[75px] xl:w-[75px]\">","</div>",[_c('nuxt-img',{staticClass:"shrink-0",attrs:{"format":"webp","src":company.attributes.iconUrl,"alt":'Company_' + i,"loading":"lazy"}})],1)}),0)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"relative z-[1] mt-12 rounded-xl bg-white bg-opacity-20 p-4 shadow-[0_1px_8px_rgba(0,0,0,0.12)] md:mt-0 md:p-7 md:shadow-none xl:p-14\">","</div>",[_vm._ssrNode("<form id=\"google-ad-project-form\" action class=\"space-y-4\">","</form>",[_vm._ssrNode("<div class=\"items-center gap-4 space-y-4 md:flex md:space-y-0\"><div class=\"grow\"><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('first_name')))+(_vm._ssrAttr("value",(_vm.$v.params.first_name.$model)))+(_vm._ssrClass("form-input",{ error: _vm.$v.params.first_name.$error }))+"></div> <div class=\"grow\"><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('last_name')))+(_vm._ssrAttr("value",(_vm.$v.params.last_name.$model)))+(_vm._ssrClass("form-input",{ error: _vm.$v.params.last_name.$error }))+"></div></div> "),_vm._ssrNode("<div>","</div>",[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.$v.params.phone.$model),expression:"$v.params.phone.$model"},{name:"mask",rawName:"v-mask",value:(_vm.$mask.phoneMask),expression:"$mask.phoneMask"}],staticClass:"form-input",class:{ error: _vm.$v.params.phone.$error },attrs:{"type":"text","placeholder":_vm.$t('phone_number')},domProps:{"value":(_vm.$v.params.phone.$model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$v.params.phone, "$model", $event.target.value)}}},[])]),_vm._ssrNode(" <div><input type=\"email\""+(_vm._ssrAttr("placeholder",_vm.$t('your_email_address')))+(_vm._ssrAttr("value",(_vm.$v.params.email.$model)))+(_vm._ssrClass("form-input",{ error: _vm.$v.params.email.$error }))+"></div> <div class=\"form-input-group\"><input type=\"text\" placeholder=\"Country\""+(_vm._ssrAttr("value",(_vm.$v.params.country.$model)))+(_vm._ssrClass("form-input bg-white",{ error: _vm.$v.params.country.$error }))+"></div> <div><input type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('company')))+(_vm._ssrAttr("value",(_vm.$v.params.company.$model)))+(_vm._ssrClass("form-input",{ error: _vm.$v.params.company.$error }))+"></div> "),_vm._ssrNode("<div class=\"form-input-group\">","</div>",[_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.$v.params.service.$model),expression:"$v.params.service.$model"}],staticClass:"form-select w-full max-w-full rounded-[10px] bg-white bg-[url(/assets/img/selection-arrow-dark.svg)] p-4 text-sm text-black",class:{ error: _vm.$v.params.service.$error, 'text-[#A5A5A5]': _vm.params.service === '' },on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.$v.params.service, "$model", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},[_c('option',{staticClass:"text-[#A5A5A5]",attrs:{"value":"","disabled":""}},[_vm._v("Select Service")]),_vm._v(" "),_vm._l((_vm.serviceOptions),function(service,index){return _c('option',{key:'service_' + index,staticClass:"text-black",domProps:{"value":service}},[_vm._v(_vm._s(service))])})],2)]),_vm._ssrNode(" <div><textarea type=\"text\""+(_vm._ssrAttr("placeholder",_vm.$t('project_description')))+" rows=\"3\""+(_vm._ssrClass("form-input",{ error: _vm.$v.params.project_description.$error }))+">"+_vm._ssrEscape(_vm._s(_vm.$v.params.project_description.$model))+"</textarea></div> <div><label class=\"inline-flex items-center\"><input type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.$v.params.send_nda.$model)?_vm._i(_vm.$v.params.send_nda.$model,null)>-1:(_vm.$v.params.send_nda.$model)))+(_vm._ssrClass("form-checkbox h-[25px] w-[25px] rounded-md border border-[#807d7d] text-primary !outline-none focus:!ring-0 focus:ring-transparent focus:ring-offset-0",{ error: _vm.$v.params.send_nda.$error }))+"> <span class=\"ml-2 text-sm font-bold text-white\">"+_vm._ssrEscape(_vm._s(_vm.$t('send_nda')))+"</span></label></div> "),_vm._ssrNode("<div class=\"ml-auto text-sm\""+(_vm._ssrStyle(null,null, { display: (_vm.params.send_nda) ? '' : 'none' }))+">","</div>",[_vm._ssrNode("<button aria-label=\"Attach file (pdf, office file)\""+(_vm._ssrClass("flex w-fit items-center gap-1.5 text-white hover:font-bold",{ '!text-primary': _vm.params.file }))+">","</button>",[_c('icons-attach'),_vm._ssrNode(" Attach file (pdf, office file)\n                        ")],2),_vm._ssrNode(" <input type=\"file\" accept=\"application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document\" style=\"display: none\">")],2),_vm._ssrNode(" <div><button"+(_vm._ssrAttr("disabled",_vm.isSubmitting))+" type=\"submit\" class=\"b-btn block w-full max-w-none py-5 text-lg normal-case\">"+_vm._ssrEscape(_vm._s(_vm.$t('schedule_a_consultation')))+"</button></div> "),(_vm.isSubmitted)?_vm._ssrNode("<div class=\"mt-5 flex justify-center gap-3\">","</div>",[_c('icons-check-circle',{staticClass:"relative top-[2px] !h-6 !w-6 text-green"}),_vm._ssrNode(" <p class=\"text-xl font-extrabold leading-[30px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green\">"+(_vm._s(_vm.$t('span_congratulations_span_your_form_has_been_submitted')))+"</p>")],2):_vm._e()],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/google-ad/google-ad-project-info-submit.vue?vue&type=template&id=72aab264&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// EXTERNAL MODULE: ./helper/custom-validations.js
var custom_validations = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/google-ad/google-ad-project-info-submit.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var google_ad_project_info_submitvue_type_script_lang_js_ = ({
  props: {
    tellUsMoreTitle: {
      type: String,
      default: () => {
        return 'TELL US MORE ABOUT YOUR PROJECT';
      }
    },
    firstProofTitle: {
      type: String,
      default: () => {
        return 'Years in operation';
      }
    },
    secondProofTitle: {
      type: String,
      default: () => {
        return 'Projects done';
      }
    },
    thirdProofTitle: {
      type: String,
      default: () => {
        return 'Offices';
      }
    },
    firstProofValue: {
      type: String,
      default: () => {
        return '15+';
      }
    },
    secondProofValue: {
      type: String,
      default: () => {
        return '750+';
      }
    },
    thirdProofValue: {
      type: String,
      default: () => {
        return '6';
      }
    },
    featuredCompanies: {
      type: Array,
      default: () => [{
        id: 1,
        attributes: {
          iconUrl: 'https://venturefund.vercel.app/assets/img/placement-logo-3.png'
        }
      }]
    }
  },
  data() {
    return {
      isSubmitted: false,
      captchaError: false,
      isSubmitting: false,
      serviceOptions: ['Business Consulting', 'Financing', 'Automation and Didital transformation', 'Agile Development', 'Research & Data Analysis', 'Who we are', 'Talk to us'],
      params: {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        company: '',
        country: '',
        project_description: '',
        send_nda: false,
        file: null,
        service: ''
      }
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
        service: {
          required: validators_["required"]
        },
        country: {
          required: validators_["required"],
          alphaNumericSpace: custom_validations["a" /* alphaNumericSpace */]
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
          required: false,
          default: false
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
            country: '',
            project_description: '',
            send_nda: false,
            file: null,
            service: ''
          };
        }
      } catch (error) {
        this.isSubmitting = false;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/google-ad/google-ad-project-info-submit.vue?vue&type=script&lang=js&
 /* harmony default export */ var google_ad_google_ad_project_info_submitvue_type_script_lang_js_ = (google_ad_project_info_submitvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/google-ad/google-ad-project-info-submit.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  google_ad_google_ad_project_info_submitvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4c32ff50"
  
)

/* harmony default export */ var google_ad_project_info_submit = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsAttach: __webpack_require__(178).default,IconsCheckCircle: __webpack_require__(69).default})


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/technology/software-google-ad.vue?vue&type=template&id=33ed91a2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('google-ad-heroform',{attrs:{"main-text":_vm.content.bannerTitle,"sub-text":_vm.content.bannerPara,"services":_vm.bannerServices}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"py-10 md:py-16 xl:pb-[115px] xl:pt-[100px]\">","</section>",[_vm._ssrNode("<h3 class=\"underlined-heading mb-5 inline-block w-full text-center text-xl font-bold md:text-2xl lg:text-3xl\">"+_vm._ssrEscape(_vm._s(_vm.content.coreCustomSoftwareDev))+"</h3> "),_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-8 text-center lg:mb-16\"><p class=\"mx-auto max-w-[950px] lg:text-lg lg:leading-7\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.content.coreCustomSoftwareServicesPara)+"\n                ")+"</p></div> "),_c('software-development-services',{attrs:{"services":_vm.coreCustomSoftwareServices}})],2)],2),_vm._ssrNode(" "),_c('google-ad-custom-software-development',{attrs:{"bottom-logo":_vm.content.toolsAndTechnologyBottomImage,"custom-services":_vm.customSoftwareDevelopments,"sub-paragraph":_vm.content.customSoftwareDevelopmentPara,"heading":_vm.content.customSoftwareDevHeading}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"py-10 lg:pb-[120px]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-10 flex items-center justify-center gap-[33px] text-center\"><h2 class=\"inline-block border-b-[7px] border-primary pb-2 text-xl font-bold uppercase md:text-2xl lg:text-3xl\">"+_vm._ssrEscape(_vm._s(_vm.content.whyChooseHeading))+"</h2></div> <div class=\"mx-auto mb-10 max-w-[950px] text-center\"><p class=\"text-lg font-light leading-8 -tracking-[0.04px]\">"+_vm._ssrEscape(_vm._s(_vm.content.whyChooseVenturePlansPara))+"</p></div> "),_c('why-venture-plans',{attrs:{"venture-features":_vm.whyVenturePlans}})],2)]),_vm._ssrNode(" "),_c('common-interested-service',{attrs:{"background-image":_vm.content.talkToUsImage,"title":_vm.content.talkUsPara,"description":_vm.content.talkToUsSubtext,"button-title":"Talk To Us"}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"py-10 md:py-16 xl:pb-[120px] xl:pt-[158px]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-[30px] flex items-center justify-center gap-[33px] text-center\"><h2 class=\"inline-block border-b-[7px] border-primary pb-2 text-xl font-bold uppercase md:text-2xl lg:text-3xl\">"+_vm._ssrEscape(_vm._s(_vm.content.toolsHeading))+"</h2></div> <div class=\"mx-auto mb-[73px] max-w-[950px] text-center\"><p class=\"text-lg font-light leading-8 -tracking-[0.03px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.content.toolsTechnologiesPara)+"\n                ")+"</p></div> "),_vm._ssrNode("<div class=\"grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4\">","</div>",_vm._l((_vm.toolsAndTechnology),function(tools,k){return _vm._ssrNode("<div class=\"rounded-lg bg-white p-4 shadow-[0_1px_8px_rgba(0,161,241,0.08)] md:p-7 xl:col-span-2\">","</div>",[_vm._ssrNode("<div class=\"mb-[15px] flex items-center gap-4 text-xl font-semibold\">","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":tools.svgIcon,"alt":tools.title,"loading":"lazy"}}),_vm._ssrNode(_vm._ssrEscape(" "+_vm._s(tools.title)))],2),_vm._ssrNode(" <div><ul class=\"flex flex-wrap gap-2 text-base\">"+(_vm._ssrList((tools.technologies.split(',')),function(row){return ("<li class=\"cursor-pointer rounded-full border-2 border-primary px-4 py-2 text-primary hover:bg-primary hover:text-white\">"+_vm._ssrEscape(_vm._s(row))+"</li>")}))+"</ul></div>")],2)}),0)],2)]),_vm._ssrNode(" "),_c('common-client-words',{attrs:{"testimonials":_vm.testinominals},scopedSlots:_vm._u([{key:"customHeader",fn:function(){return [_c('h2',{staticClass:"inline-block border-b-[7px] border-primary pb-2 text-xl font-bold uppercase md:text-2xl lg:text-3xl"},[_vm._v("Our Client Words")])]},proxy:true}])}),_vm._ssrNode(" "),_c('common-brand-logo'),_vm._ssrNode(" "),_c('google-ad-project-info-submit',{attrs:{"tell-us-more-title":_vm.content.tellAboutProjectTitle,"first-proof-title":_vm.content.yearsInOperation,"second-proof-title":_vm.content.projectsDone,"third-proof-title":_vm.content.offices,"first-proof-value":_vm.content.yearsInOperationValue,"second-proof-value":_vm.content.projectDoneValue,"third-proof-value":_vm.content.officesValue,"featured-companies":_vm.section6Data}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-[#F3F3F3] py-10 md:py-16 xl:pb-[101px] xl:pt-[99px]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-10 text-center md:mb-20\"><div class=\"mb-5 flex items-center justify-center gap-[33px] text-center\"><h2 class=\"inline-block border-b-[7px] border-primary pb-2 text-xl font-bold uppercase md:text-2xl lg:text-3xl\">COMPLETE Services catalogue</h2></div> <div class=\"mx-auto mb-10 max-w-[950px] text-center\"><p class=\"text-lg leading-8 -tracking-[0.04px] text-[#566378]\">"+_vm._ssrEscape("\n                        "+_vm._s(_vm.content.servicesCatalogPara)+"\n                    ")+"</p></div></div> "),_vm._ssrNode("<div class=\"space-y-5 divide-y divide-[#E6E6E6]\">","</div>",_vm._l((_vm.completeServiceCatalog),function(faq){return _vm._ssrNode("<div class=\"pt-5\">","</div>",[_vm._ssrNode("<div class=\"flex cursor-pointer items-center justify-between gap-5 md:gap-14\">","</div>",[_vm._ssrNode("<div class=\"flex-1\"><p"+(_vm._ssrClass("mb-4 text-lg text-black",{ '!text-primary': _vm.activeFaq === faq.title }))+">"+_vm._ssrEscape(_vm._s(faq.title))+"</p> <p"+(_vm._ssrClass("text-base leading-6 -tracking-[0.03px] text-[#566378]",{ '!text-primary': _vm.activeFaq === faq.title }))+">"+_vm._ssrEscape("\n                                "+_vm._s(faq.description)+"\n                            ")+"</p></div> "),(_vm.activeFaq === faq.title)?_c('icons-minus',{staticClass:"w-4 flex-none text-black/30 md:w-auto"}):_c('icons-plus',{staticClass:"w-4 flex-none text-black/30 md:w-auto"})],2),_vm._ssrNode(" "+((_vm.activeFaq === faq.title)?("<div class=\"mt-4\"><ul class=\"flex flex-wrap gap-3 text-base\">"+(_vm._ssrList((faq.services.split(',')),function(feature){return ("<li class=\"cursor-pointer rounded-full border-2 border-primary px-4 py-1 text-primary hover:bg-primary hover:text-white\">"+_vm._ssrEscape(_vm._s(feature))+"</li>")}))+"</ul></div>"):"<!---->"))],2)}),0)],2)]),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"img-url":_vm.readyToTalkForm.imgUrl,"service-options":_vm.readyToTalkForm.services.data,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle}}),_vm._ssrNode(" "),_c('common-faq',{attrs:{"faqs":_vm.faqSection}}),_vm._ssrNode(" "),_c('common-brand-logo',{attrs:{"logos":_vm.logoSliders}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/technology/software-google-ad.vue?vue&type=template&id=33ed91a2&

// EXTERNAL MODULE: ./components/software-google-ad/why-venture-plans.vue + 4 modules
var why_venture_plans = __webpack_require__(253);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/technology/software-google-ad.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// FAQ open close


/* harmony default export */ var software_google_advue_type_script_lang_js_ = ({
  components: {
    WhyVenturePlans: why_venture_plans["default"]
  },
  async asyncData(context) {
    try {
      const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/software-google-ad-page?populate=deep`);
      return {
        content: context.$helper.parseData(data.data)
      };
    } catch {}
  },
  data() {
    return {
      activeFaq: '',
      ventureFeatures: [{
        title: '360 Approach',
        description: ''
      }]
    };
  },
  head() {
    var _this$content, _this$content$metaFie;
    return {
      title: 'Software Google Ad | Venture Plans',
      meta: [{
        name: 'robots',
        content: 'noindex'
      }, {
        hid: 'keywords',
        property: 'keywords',
        content: 'Venture Plans Technology, venture plans technology'
      }],
      link: [{
        rel: 'canonical',
        href: (_this$content = this.content) !== null && _this$content !== void 0 && (_this$content$metaFie = _this$content.metaFields[0]) !== null && _this$content$metaFie !== void 0 && _this$content$metaFie.canonicalUrl ? (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.content.metaFields[0].canonicalUrl : (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path
      }]
    };
  },
  computed: {
    logoSliders() {
      var _this$content2, _this$content2$bottom, _this$content2$bottom2, _this$content2$bottom3;
      return ((_this$content2 = this.content) === null || _this$content2 === void 0 ? void 0 : (_this$content2$bottom = _this$content2.bottomLogoSlider) === null || _this$content2$bottom === void 0 ? void 0 : (_this$content2$bottom2 = _this$content2$bottom.data) === null || _this$content2$bottom2 === void 0 ? void 0 : (_this$content2$bottom3 = _this$content2$bottom2.attributes) === null || _this$content2$bottom3 === void 0 ? void 0 : _this$content2$bottom3.logoUrls) || [];
    },
    section6Data() {
      var _this$content3, _this$content3$asSeen;
      return ((_this$content3 = this.content) === null || _this$content3 === void 0 ? void 0 : (_this$content3$asSeen = _this$content3.asSeenOnLogos) === null || _this$content3$asSeen === void 0 ? void 0 : _this$content3$asSeen.data) || [];
    },
    faqSection() {
      var _this$content4, _this$content4$faqSec;
      return ((_this$content4 = this.content) === null || _this$content4 === void 0 ? void 0 : (_this$content4$faqSec = _this$content4.faqSection) === null || _this$content4$faqSec === void 0 ? void 0 : _this$content4$faqSec.data) || [];
    },
    readyToTalkForm() {
      var _this$content5, _this$content5$readyT, _this$content5$readyT2;
      return ((_this$content5 = this.content) === null || _this$content5 === void 0 ? void 0 : (_this$content5$readyT = _this$content5.readyToTalk) === null || _this$content5$readyT === void 0 ? void 0 : (_this$content5$readyT2 = _this$content5$readyT.data) === null || _this$content5$readyT2 === void 0 ? void 0 : _this$content5$readyT2.attributes) || {
        services: {
          data: []
        }
      };
    },
    testinominals() {
      var _this$content6, _this$content6$testim;
      return ((_this$content6 = this.content) === null || _this$content6 === void 0 ? void 0 : (_this$content6$testim = _this$content6.testimonialOptions) === null || _this$content6$testim === void 0 ? void 0 : _this$content6$testim.data) || [];
    },
    coreCustomSoftwareServices() {
      return this.content.customSoftwareServices.data.map(i => {
        return i.attributes;
      }) || [];
    },
    toolsAndTechnology() {
      return this.content.toolsAndTechnologies.data.map(i => {
        return i.attributes;
      }) || [];
    },
    bannerServices() {
      return this.content.bannerServiceOptions.data.map(i => {
        return i.attributes;
      }) || [];
    },
    customSoftwareDevelopments() {
      return this.content.customSoftwareDevelopments.data.map(i => {
        return i.attributes;
      }) || [];
    },
    whyVenturePlans() {
      return this.content.whyVenturePlans.data.map(i => {
        return i.attributes;
      }) || [];
    },
    completeServiceCatalog() {
      return this.content.completeServiceCatalog.data.map(i => {
        return i.attributes;
      }) || [];
    }
  },
  methods: {
    openFaq(ref) {
      this.activeFaq = this.activeFaq === ref ? '' : ref;
    }
  }
});
// CONCATENATED MODULE: ./pages/technology/software-google-ad.vue?vue&type=script&lang=js&
 /* harmony default export */ var technology_software_google_advue_type_script_lang_js_ = (software_google_advue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/technology/software-google-ad.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  technology_software_google_advue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "66773083"
  
)

/* harmony default export */ var software_google_ad = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {GoogleAdHeroform: __webpack_require__(254).default,SoftwareDevelopmentServices: __webpack_require__(255).default,GoogleAdCustomSoftwareDevelopment: __webpack_require__(256).default,CommonInterestedService: __webpack_require__(145).default,CommonClientWords: __webpack_require__(169).default,CommonBrandLogo: __webpack_require__(164).default,GoogleAdProjectInfoSubmit: __webpack_require__(257).default,IconsMinus: __webpack_require__(159).default,IconsPlus: __webpack_require__(160).default,CommonReadytotalk: __webpack_require__(140).default,CommonFaq: __webpack_require__(168).default})


/***/ })

};;
//# sourceMappingURL=software-google-ad.js.map