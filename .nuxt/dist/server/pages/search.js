exports.ids = [146,21,30,41,76,77,82,109,120];
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-downarrow.vue?vue&type=template&id=0715fdf0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"11","height":"6","viewBox":"0 0 11 6"}},[_vm._ssrNode("<g><g><path fill=\"currentColor\" d=\"M.439.546l4.907 4.907L10.254.546z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-downarrow.vue?vue&type=template&id=0715fdf0&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-downarrow.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ddee2f3c"
  
)

/* harmony default export */ var icons_downarrow = __webpack_exports__["default"] = (component.exports);

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

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-close.vue?vue&type=template&id=142088ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-4 w-4",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke":"currentColor","stroke-width":"2"}},[_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-close.vue?vue&type=template&id=142088ee&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-close.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c87eca9a"
  
)

/* harmony default export */ var icons_close = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/input/input-filter-checkbox.vue?vue&type=template&id=44d3b909&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"group relative flex cursor-pointer gap-2 text-primary xl:gap-4",class:{ 'ml-6': _vm.isChild },attrs:{"for":_vm.id}},[_vm._ssrNode("<input"+(_vm._ssrAttr("id",_vm.id))+" type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.checkboxValue)?_vm._i(_vm.checkboxValue,null)>-1:(_vm.checkboxValue)))+" class=\"form-checkbox cursor-pointer focus:!shadow-none focus:ring-transparent\" style=\"position: inherit\"> <span class=\"absolute hidden h-5 w-5 rounded-[1px] border border-primary bg-transparent group-hover:inline-block\"></span> <span class=\"cursor-pointer text-base text-black-700 group-hover:text-primary\">"+_vm._ssrEscape(_vm._s(_vm.label))+"</span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/input/input-filter-checkbox.vue?vue&type=template&id=44d3b909&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/input/input-filter-checkbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var input_filter_checkboxvue_type_script_lang_js_ = ({
  props: {
    id: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    isChild: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkboxValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/input/input-filter-checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_input_filter_checkboxvue_type_script_lang_js_ = (input_filter_checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/input/input-filter-checkbox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_input_filter_checkboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5640065a"
  
)

/* harmony default export */ var input_filter_checkbox = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(264);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("69176eb2", content, true, context)
};

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_search_vue_vue_type_style_index_0_id_77fba2eb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(242);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_search_vue_vue_type_style_index_0_id_77fba2eb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_search_vue_vue_type_style_index_0_id_77fba2eb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_search_vue_vue_type_style_index_0_id_77fba2eb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_search_vue_vue_type_style_index_0_id_77fba2eb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slide-fade-enter-active[data-v-77fba2eb],.slide-fade-leave-active[data-v-77fba2eb]{transition:opacity .3s}.slide-fade-enter[data-v-77fba2eb],.slide-fade-leave-to[data-v-77fba2eb]{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/search.vue?vue&type=template&id=77fba2eb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"align-center relative flex h-[477px] justify-center overflow-hidden pb-24 pt-[289px]\" data-v-77fba2eb><video autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\" playsinline class=\"force-video-reload absolute inset-0 mt-0 h-full w-full object-cover\" data-v-77fba2eb><source src=\"https://videos.ctfassets.net/koyrlvjc3wvc/5Eke5W5guSg2OEDmm5TKtB/86fa202e97192c590b4acdd8e484c24a/global_search.mp4\" type=\"video/mp4\" data-v-77fba2eb></video> <div class=\"absolute -left-1/3 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746]\" data-v-77fba2eb></div> <div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]\" data-v-77fba2eb></div> <div class=\"container relative z-10 lg:px-[97px] xl:px-4\" data-v-77fba2eb><div data-v-77fba2eb><h1 class=\"mb-[10px] text-[38px] font-bold leading-[42px] text-white xl:text-[45px] xl:leading-[54px]\" data-v-77fba2eb>Search Results</h1> <p class=\"w-full text-[13px] font-normal leading-6 text-[#FBFBFD] sm:max-w-[377px] xl:max-w-[570px] xl:text-xl xl:leading-7\" data-v-77fba2eb>Venture Plans - your dream starts with us.</p></div></div></section> "),_vm._ssrNode("<section class=\"pt-11\" data-v-77fba2eb>","</section>",[_vm._ssrNode("<div class=\"container\" data-v-77fba2eb>","</div>",[_vm._ssrNode("<p class=\"mb-[33px] text-lg -tracking-[0.04px] text-black-700\" data-v-77fba2eb>Search from our extensive database of resources below.</p> "),_vm._ssrNode("<div class=\"relative mb-12 flex items-center justify-between\" data-v-77fba2eb>","</div>",[_vm._ssrNode("<div class=\"relative z-10 text-primary\" data-v-77fba2eb>","</div>",[_c('icons-search',{staticClass:"w-5"})],1),_vm._ssrNode(" <input type=\"text\" placeholder"+(_vm._ssrAttr("value",(_vm.search)))+" class=\"form-input absolute w-full rounded-none border-b-[3px] border-primary bg-transparent px-8 text-lg font-semibold focus:border-b-[3px] focus:border-primary md:text-[26px]\" data-v-77fba2eb> <button class=\"relative z-10\" data-v-77fba2eb><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"57\" height=\"56\" viewBox=\"0 0 57 56\" data-v-77fba2eb><g data-v-77fba2eb><g data-v-77fba2eb><g data-v-77fba2eb><path fill=\"none\" stroke=\"#909090\" stroke-miterlimit=\"20\" stroke-width=\"2\" d=\"M20.416 36.038L36.454 20\" data-v-77fba2eb></path></g> <g transform=\"rotate(90 28.5 28)\" data-v-77fba2eb><path fill=\"none\" stroke=\"#909090\" stroke-miterlimit=\"20\" stroke-width=\"2\" d=\"M20.416 36.038L36.454 20\" data-v-77fba2eb></path></g></g></g></svg></button>")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"relative mb-10 border-[#cfcfcf] xl:border-b xl:border-t\" data-v-77fba2eb>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-77fba2eb>","</div>",[_vm._ssrNode("<div class=\"flex flex-col justify-between xl:flex-row xl:flex-nowrap xl:gap-4\" data-v-77fba2eb>","</div>",[_vm._ssrNode("<div class=\"flex flex-col border-b-2 border-[#cfcfcf]/60 xl:flex-row xl:items-center xl:border-b-0\" data-v-77fba2eb>","</div>",[_vm._ssrNode("<h5 class=\"mr-10 hidden flex-initial whitespace-nowrap text-base font-medium text-[#5f5f5f] xl:block\" data-v-77fba2eb>Filter by:</h5> <h5 class=\"flex flex-1 items-center justify-between py-6 text-base font-medium text-[#5f5f5f] xl:hidden\" data-v-77fba2eb>\n                            Filter Insights\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"2\" class=\"h-6 w-6\" data-v-77fba2eb><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z\" data-v-77fba2eb></path></svg></h5> "),_c('client-only',[_c('ul',{staticClass:"mb-6 hidden flex-1 flex-col gap-6 pl-5 xl:mb-0 xl:flex xl:flex-row xl:items-center xl:pl-0",class:{ '!block': _vm.showMobileFilter }},[_c('li',{staticClass:"pb-5 xl:my-6 xl:inline-block xl:pb-0"},[_c('popper',{ref:"industryPopper",attrs:{"trigger":"clickToToggle","options":{
                                            placement: 'bottom',
                                            modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                            preventOverflow: {
                                                padding: 0,
                                            },
                                        }},on:{"show":function($event){return _vm.openPopper('industry')},"hide":function($event){return _vm.closePopper()}}},[_c('div',{staticClass:"popper !fixed right-0 z-[60] !my-0 h-screen !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto"},[_c('div',{staticClass:"relative block p-3 text-center xl:hidden"},[_vm._v("\n                                                Industry\n                                                "),_c('button',{staticClass:"absolute right-2.5 top-4 h-5 w-5 cursor-pointer",on:{"click":function($event){$event.stopPropagation();return _vm.$refs.industryPopper.doClose()}}},[_c('icons-close')],1)]),_vm._v(" "),_c('div',{staticClass:"container pb-4"},[_c('ul',{staticClass:"block max-h-[calc(100vh-120px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6"},_vm._l((_vm.filter1Data),function(filter){return _c('li',{key:filter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":filter.filterCateogries,"label":filter.filterCateogries},model:{value:(_vm.industryFilterOption[filter.filterCateogries]),callback:function ($$v) {_vm.$set(_vm.industryFilterOption, filter.filterCateogries, $$v)},expression:"industryFilterOption[filter.filterCateogries]"}}),_vm._v(" "),(filter.subCategories.length)?_c('ul',{staticClass:"mt-2 pr-2"},_vm._l((filter.subCategories),function(subFilter){return _c('li',{key:subFilter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":subFilter.subCategories,"label":subFilter.subCategories,"is-child":true},model:{value:(_vm.industryFilterOption[subFilter.subCategories]),callback:function ($$v) {_vm.$set(_vm.industryFilterOption, subFilter.subCategories, $$v)},expression:"industryFilterOption[subFilter.subCategories]"}})],1)}),0):_vm._e()],1)}),0)]),_vm._v(" "),_c('button',{staticClass:"filter-btn",on:{"click":function($event){_vm.applyFilters(), _vm.$refs.industryPopper.doClose()}}},[_vm._v("Apply")])]),_vm._v(" "),_c('h5',{staticClass:"flex cursor-pointer select-none items-center justify-between gap-2 text-base font-semibold leading-5 text-black xl:justify-start",class:{ '!text-primary': _vm.activePopper === 'industry' },attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                                            Industry\n                                            "),_c('icons-downarrow',{staticClass:"rotate-0 text-primary",class:{ 'xl:!rotate-180': _vm.activePopper === 'industry' }})],1)])],1),_vm._v(" "),_c('li',{staticClass:"pb-5 xl:my-6 xl:inline-block xl:pb-0"},[_c('popper',{ref:"servicesPopper",attrs:{"trigger":"clickToToggle","options":{
                                            placement: 'bottom',
                                            modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                            preventOverflow: {
                                                padding: 0,
                                            },
                                        }},on:{"show":function($event){return _vm.openPopper('services')},"hide":function($event){return _vm.closePopper()}}},[_c('div',{staticClass:"popper !fixed right-0 z-[60] !my-0 h-full !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto"},[_c('div',{staticClass:"relative block p-3 text-center xl:hidden"},[_vm._v("\n                                                Services\n                                                "),_c('button',{staticClass:"absolute right-2.5 top-4 h-5 w-5 cursor-pointer",on:{"click":function($event){return _vm.$refs.servicesPopper.doClose()}}},[_c('icons-close')],1)]),_vm._v(" "),_c('div',{staticClass:"container pb-4"},[_c('ul',{staticClass:"mb-4 mt-2 block h-[calc(100vh-128px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6"},_vm._l((_vm.filter2Data),function(filter){return _c('li',{key:filter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":filter.filterCateogries,"label":filter.filterCateogries},model:{value:(_vm.servicesFilterOption[filter.filterCateogries]),callback:function ($$v) {_vm.$set(_vm.servicesFilterOption, filter.filterCateogries, $$v)},expression:"servicesFilterOption[filter.filterCateogries]"}}),_vm._v(" "),(filter.subCategories.length)?_c('ul',{staticClass:"mt-2 pr-2"},_vm._l((filter.subCategories),function(subFilter){return _c('li',{key:subFilter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":subFilter.subCategories,"label":subFilter.subCategories,"is-child":true},model:{value:(_vm.servicesFilterOption[subFilter.subCategories]),callback:function ($$v) {_vm.$set(_vm.servicesFilterOption, subFilter.subCategories, $$v)},expression:"servicesFilterOption[subFilter.subCategories]"}})],1)}),0):_vm._e()],1)}),0)]),_vm._v(" "),_c('button',{staticClass:"filter-btn",on:{"click":function($event){_vm.applyFilters(), _vm.$refs.servicesPopper.doClose()}}},[_vm._v("Apply")])]),_vm._v(" "),_c('h5',{staticClass:"flex cursor-pointer select-none items-center justify-between gap-2 text-base font-semibold leading-5 text-black xl:justify-start",class:{ '!text-primary': _vm.activePopper === 'services' },attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                                            Services\n                                            "),_c('icons-downarrow',{staticClass:"rotate-0 text-primary",class:{ 'xl:!rotate-180': _vm.activePopper === 'services' }})],1)])],1),_vm._v(" "),_c('li',{staticClass:"pb-5 xl:my-6 xl:inline-block xl:pb-0"},[_c('popper',{ref:"typePopper",attrs:{"trigger":"clickToToggle","options":{
                                            placement: 'bottom',
                                            modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                            preventOverflow: {
                                                padding: 0,
                                            },
                                        }},on:{"show":function($event){return _vm.openPopper('type')},"hide":function($event){return _vm.closePopper()}}},[_c('div',{staticClass:"popper !fixed right-0 z-[60] !my-0 h-full !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto"},[_c('div',{staticClass:"relative block p-3 text-center xl:hidden"},[_vm._v("\n                                                Type\n                                                "),_c('button',{staticClass:"absolute right-2.5 top-4 h-5 w-5 cursor-pointer",on:{"click":function($event){return _vm.$refs.typePopper.doClose()}}},[_c('icons-close')],1)]),_vm._v(" "),_c('div',{staticClass:"container pb-4"},[_c('ul',{staticClass:"mb-4 mt-2 block max-h-[calc(100vh-128px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6"},_vm._l((_vm.filter3Data),function(filter){return _c('li',{key:filter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":filter.filterCateogries,"label":filter.filterCateogries},model:{value:(_vm.typeFilterOption[filter.filterCateogries]),callback:function ($$v) {_vm.$set(_vm.typeFilterOption, filter.filterCateogries, $$v)},expression:"typeFilterOption[filter.filterCateogries]"}})],1)}),0)]),_vm._v(" "),_c('button',{staticClass:"filter-btn",on:{"click":function($event){_vm.applyFilters(), _vm.$refs.typePopper.doClose()}}},[_vm._v("Apply")])]),_vm._v(" "),_c('h5',{staticClass:"flex cursor-pointer select-none items-center justify-between gap-2 text-base font-semibold leading-5 text-black xl:justify-start",class:{ '!text-primary': _vm.activePopper === 'type' },attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                                            Type\n                                            "),_c('icons-downarrow',{staticClass:"rotate-0 text-primary",class:{ 'xl:!rotate-180': _vm.activePopper === 'type' }})],1)])],1),_vm._v(" "),_c('li',{staticClass:"xl:my-6 xl:inline-block"},[_c('popper',{ref:"datePopper",attrs:{"trigger":"clickToToggle","options":{
                                            placement: 'bottom',
                                            modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                            preventOverflow: {
                                                padding: 0,
                                            },
                                        }},on:{"show":function($event){return _vm.openPopper('date')},"hide":function($event){return _vm.closePopper()}}},[_c('div',{staticClass:"popper !fixed right-0 z-[60] !my-0 h-full !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto"},[_c('div',{staticClass:"relative block p-3 text-center xl:hidden"},[_vm._v("\n                                                Date\n                                                "),_c('button',{staticClass:"absolute right-2.5 top-4 h-5 w-5 cursor-pointer",on:{"click":function($event){return _vm.$refs.datePopper.doClose()}}},[_c('icons-close')],1)]),_vm._v(" "),_c('div',{staticClass:"container flex max-h-[calc(100vh-128px)] flex-col gap-5 overflow-auto py-5 md:flex-row xl:h-auto xl:gap-10 xl:overflow-visible"},[_c('div',{staticClass:"min-w-[300px]"},[_c('label',{staticClass:"mb-1.5 inline-block",attrs:{"for":""}},[_vm._v("Start date")]),_vm._v(" "),_c('flat-pickr',{staticClass:"form-input !border !border-black/20",attrs:{"placeholder":"MM/DD/YYYY","config":_vm.startDateConfig},model:{value:(_vm.dateFilterOption.start_date),callback:function ($$v) {_vm.$set(_vm.dateFilterOption, "start_date", $$v)},expression:"dateFilterOption.start_date"}})],1),_vm._v(" "),_c('div',{staticClass:"min-w-[300px]"},[_c('label',{staticClass:"mb-1.5 inline-block",attrs:{"for":""}},[_vm._v("End date")]),_vm._v(" "),_c('flat-pickr',{staticClass:"form-input !border !border-black/20",attrs:{"placeholder":"MM/DD/YYYY","config":_vm.endDateConfig},model:{value:(_vm.dateFilterOption.end_date),callback:function ($$v) {_vm.$set(_vm.dateFilterOption, "end_date", $$v)},expression:"dateFilterOption.end_date"}})],1)]),_vm._v(" "),_c('button',{staticClass:"filter-btn",on:{"click":function($event){_vm.applyFilters(), _vm.$refs.datePopper.doClose()}}},[_vm._v("Apply")])]),_vm._v(" "),_c('h5',{staticClass:"flex cursor-pointer select-none items-center justify-between gap-2 text-base font-semibold leading-5 text-black xl:justify-start",class:{ '!text-primary': _vm.activePopper === 'date' },attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                                            Date\n                                            "),_c('icons-downarrow',{staticClass:"rotate-0 text-primary",class:{ 'xl:!rotate-180': _vm.activePopper === 'date' }})],1)])],1)])])],2),_vm._ssrNode(" <div class=\"float-none flex items-center border-b-2 border-[#cfcfcf]/60 xl:border-b-0\" data-v-77fba2eb><h5 class=\"mr-5 flex-initial whitespace-nowrap text-base font-thin text-[#5f5f5f]\" data-v-77fba2eb>Sort by:</h5> <ul class=\"flex items-center gap-3\" data-v-77fba2eb><li class=\"my-6 inline-block\" data-v-77fba2eb><div data-v-77fba2eb><h5"+(_vm._ssrClass("flex cursor-pointer items-center gap-2 text-base font-semibold leading-5 text-[#5f5f5f] hover:text-primary",{ '!text-black': _vm.sortBy === 'Most Relevant' }))+" data-v-77fba2eb>\n                                        Most Relevant\n                                    </h5></div></li> <li class=\"h-[13px] w-[1px] bg-black/30 xl:h-4\" data-v-77fba2eb></li> <li class=\"my-6 inline-block\" data-v-77fba2eb><div data-v-77fba2eb><h5"+(_vm._ssrClass("flex cursor-pointer items-center gap-2 text-base font-semibold leading-5 text-[#5f5f5f] hover:text-primary",{ '!text-black': _vm.sortBy === 'Date' }))+" data-v-77fba2eb>Date</h5></div></li></ul></div>")],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\" data-v-77fba2eb>","</div>",[(_vm.appliedFilters.length > 0)?_vm._ssrNode("<div class=\"mb-6 text-black\" data-v-77fba2eb>","</div>",[_vm._ssrNode("<h6 class=\"mr-2 inline-block align-middle text-black/70\" data-v-77fba2eb>Selected:</h6> "),_vm._ssrNode("<ul class=\"gap inline-flex flex-wrap\" data-v-77fba2eb>","</ul>",[_vm._l((_vm.appliedFilters),function(option,index){return _vm._ssrNode("<li class=\"group mb-1 mr-1 rounded bg-black/10 px-2 py-1\" data-v-77fba2eb>","</li>",[_vm._ssrNode("<button class=\"flex cursor-pointer items-center gap-1.5\" data-v-77fba2eb>","</button>",[_vm._ssrNode(_vm._ssrEscape("\n                            "+_vm._s(option.label || option)+"\n                            ")),_c('icons-close',{staticClass:"group-hover:text-danger"})],2)])}),_vm._ssrNode(" <li class=\"mb-1 rounded bg-primary/20 px-2 py-1\" data-v-77fba2eb><button class=\"cursor-pointer\" data-v-77fba2eb>Clear All</button></li>")],2)],2):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("container pb-[84px] md:pb-4 lg:pb-[97px] xl:pb-4",{ 'has-overlay': _vm.activePopper != '' }))+" data-v-77fba2eb>","</div>",[_vm._ssrNode("<div data-v-77fba2eb>","</div>",[_vm._ssrNode("<p class=\"mb-6 text-[15px] leading-7 text-[#646464]/80\" data-v-77fba2eb>"+_vm._ssrEscape("Showing "+_vm._s(_vm.results.length)+" results")+"</p> "),_vm._l((_vm.results),function(item,i){return _vm._ssrNode("<div class=\"mb-14 space-y-4\" data-v-77fba2eb>","</div>",[_vm._ssrNode("<div class=\"flex items-center gap-10 border-b border-[#707070]/50 py-4 xl:gap-32\" data-v-77fba2eb>","</div>",[_vm._ssrNode("<p class=\"hidden flex-none text-[25px] font-semibold leading-8 text-[#202a36] sm:block\" data-v-77fba2eb>"+_vm._ssrEscape("\n                            "+_vm._s(i + 1)+"\n                        ")+"</p> "),_c('nuxt-link',{staticClass:"group inline-block flex-1",attrs:{"to":_vm.getLink(item)}},[(_vm.isInsight(item.id))?_c('p',{staticClass:"mb-3 text-lg font-medium leading-[19px] -tracking-[0.04px] text-primary"},[_vm._v("\n                                "+_vm._s(item.insightType)+"\n                            ")]):_vm._e(),_vm._v(" "),_c('h4',{staticClass:"mb-3 text-xl font-semibold leading-7 text-black transition-all duration-300 group-hover:text-primary md:text-[26px]"},[_vm._v(_vm._s(_vm.getTitle(item)))]),_vm._v(" "),_c('p',{staticClass:"mb-3 text-base text-[#202a36] md:text-lg"},[_c('common-custom-strapi-display',{attrs:{"data":_vm.getDescription(item)}})],1),_vm._v(" "),(_vm.isInsight(item.id))?_c('p',{staticClass:"text-[15px] font-medium leading-4 -tracking-[0.03px] text-[#646464]"},[_vm._v(_vm._s(item.Insightsource)+" "+_vm._s(_vm.getDate(item.publishedAt) ? ' | ' + _vm.getDate(item.publishedAt) : ''))]):_c('p',{staticClass:"text-[15px] font-medium leading-4 -tracking-[0.03px] text-[#646464]"},[_vm._v("\n                                "+_vm._s(_vm.getDate(item.publishedAt))+"\n                            ")])]),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"hidden h-[150px] min-w-[200px] max-w-[295px] flex-none overflow-hidden rounded-[3px] md:inline-block",attrs:{"to":_vm.getLink(item)}},[_c('nuxt-img',{staticClass:"h-full w-full max-w-[200px] object-cover",attrs:{"format":"webp","src":_vm.getImageUrl(item),"alt":"Results","loading":"lazy"}})],1)],2)])})],2)]),_vm._ssrNode(" "+((_vm.results.length === 0)?("<p class=\"my-20 text-center\" data-v-77fba2eb>No any results found!</p>"):"<!---->"))],2),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"service-options":_vm.serviceOptions}}),_vm._ssrNode(" "),_c('common-brand-logo',{attrs:{"logos":_vm.featuredLogos}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/search.vue?vue&type=template&id=77fba2eb&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  async asyncData(context) {
    try {
      var _ref;
      const results = await context.$axios.post(`${context.$config.meiliSearchURL}/indexes/search-page/search`, {
        q: '',
        limit: 15,
        attributesToRetrieve: ['title', 'description', 'url', 'image', 'keywords', 'category']
      });
      const hits = (_ref = results.data.hits.map(result => {
        return result;
      }) || []) === null || _ref === void 0 ? void 0 : _ref.flat();
      const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/insight-page?populate=deep`);
      const parsedData = context.$helper.parseData(data.data);
      return {
        results: hits,
        filters: {
          FilterComponent1: (parsedData === null || parsedData === void 0 ? void 0 : parsedData.FilterComponent1) || [],
          FilterComponent2: parsedData.FilterComponent2 || [],
          FilterComponent3: (parsedData === null || parsedData === void 0 ? void 0 : parsedData.FilterComponent3) || []
        }
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      searchQuery: '',
      filters: {},
      search: '',
      results: [],
      showMobileFilter: false,
      appliedFilters: [],
      activePopper: '',
      sortBy: 'Most Relevant',
      selectedIndustryOptions: [],
      industryFilterOption: {},
      selectedServicesOptions: [],
      servicesFilterOption: {},
      selectedTypeOptions: [],
      typeFilterOption: {},
      dateFilterOption: {
        start_date: '',
        end_date: ''
      },
      filterText: '',
      featuredLogos: [{
        logoUrl: 'https://venturefund.vercel.app/assets/img/logos/stanford.png'
      }, {
        logoUrl: 'https://venturefund.vercel.app/assets/img/logos/finra.png'
      }, {
        logoUrl: 'https://venturefund.vercel.app/assets/img/logos/hbs.png'
      }, {
        logoUrl: 'https://venturefund.vercel.app/assets/img/logos/yale.png'
      }, {
        logoUrl: 'https://venturefund.vercel.app/assets/img/logos/cbv.png'
      }, {
        logoUrl: 'https://venturefund.vercel.app/assets/img/logos/cfi.png'
      }],
      regionFilterOption: {},
      startDateConfig: {
        wrap: true,
        // set wrap to true only when using 'input-group'
        altFormat: 'm/d/Y',
        altInput: true,
        dateFormat: 'm-d-Y',
        static: true,
        disableMobile: true
      },
      endDateConfig: {
        wrap: true,
        // set wrap to true only when using 'input-group'
        altFormat: 'm/d/Y',
        altInput: true,
        dateFormat: 'm-d-Y',
        static: true,
        minDate: '',
        disableMobile: true
      },
      serviceOptions: [{
        id: 1,
        attributes: {
          serviceName: 'Management Consulting'
        }
      }, {
        id: 2,
        attributes: {
          serviceName: 'Restructuring Operations'
        }
      }, {
        id: 3,
        attributes: {
          serviceName: 'Digital Marketing'
        }
      }, {
        id: 4,
        attributes: {
          serviceName: 'Revenue Growth'
        }
      }, {
        id: 5,
        attributes: {
          serviceName: 'Agile Implementation'
        }
      }, {
        id: 6,
        attributes: {
          serviceName: 'Transformation Modification & Integration'
        }
      }, {
        id: 7,
        attributes: {
          serviceName: 'Customer Experience'
        }
      }, {
        id: 8,
        attributes: {
          serviceName: 'Financial Advisory'
        }
      }, {
        id: 9,
        attributes: {
          serviceName: 'Grant Application Support'
        }
      }, {
        id: 10,
        attributes: {
          serviceName: 'Strategy'
        }
      }, {
        id: 11,
        attributes: {
          serviceName: 'Human Resources'
        }
      }, {
        id: 12,
        attributes: {
          serviceName: 'Cannabis Licensing and Application Support'
        }
      }, {
        id: 13,
        attributes: {
          serviceName: 'New Start Up Technology'
        }
      }, {
        id: 14,
        attributes: {
          serviceName: 'Immigration Business Plans'
        }
      }, {
        id: 15,
        attributes: {
          serviceName: 'SBA Lender Business Plans'
        }
      }, {
        id: 16,
        attributes: {
          serviceName: 'Marketing Plan'
        }
      }, {
        id: 17,
        attributes: {
          serviceName: 'Restructuring Business Plan'
        }
      }, {
        id: 18,
        attributes: {
          serviceName: 'Franchising Plan'
        }
      }, {
        id: 19,
        attributes: {
          serviceName: 'Cannabis Business Plan'
        }
      }, {
        id: 20,
        attributes: {
          serviceName: 'Request For Proposal'
        }
      }, {
        id: 21,
        attributes: {
          serviceName: 'Grant Business Plans'
        }
      }, {
        id: 22,
        attributes: {
          serviceName: 'Investor Pitch Deck'
        }
      }, {
        id: 23,
        attributes: {
          serviceName: 'Financial Proforma'
        }
      }, {
        id: 24,
        attributes: {
          serviceName: 'Prospectus'
        }
      }, {
        id: 25,
        attributes: {
          serviceName: 'White Paper'
        }
      }, {
        id: 26,
        attributes: {
          serviceName: 'Data Industry Reports'
        }
      }, {
        id: 42,
        attributes: {
          serviceName: 'Feasibility Reports'
        }
      }, {
        id: 43,
        attributes: {
          serviceName: 'ETF & Stock Market Reports'
        }
      }, {
        id: 44,
        attributes: {
          serviceName: 'COVID-19 Market Reports'
        }
      }, {
        id: 45,
        attributes: {
          serviceName: 'Private Placements'
        }
      }, {
        id: 46,
        attributes: {
          serviceName: 'Private Placement Memorandum'
        }
      }, {
        id: 50,
        attributes: {
          serviceName: 'Private Equity'
        }
      }, {
        id: 51,
        attributes: {
          serviceName: 'Mergers & Acquisitions'
        }
      }, {
        id: 52,
        attributes: {
          serviceName: 'Due Deligince Certification'
        }
      }, {
        id: 53,
        attributes: {
          serviceName: 'Regulation S Offshore Offering'
        }
      }, {
        id: 54,
        attributes: {
          serviceName: 'Investment Portfolio Managment'
        }
      }, {
        id: 55,
        attributes: {
          serviceName: 'Forensic Accounting'
        }
      }, {
        id: 56,
        attributes: {
          serviceName: 'Real Estate Investment Trust Fund'
        }
      }, {
        id: 57,
        attributes: {
          serviceName: 'Securitization'
        }
      }, {
        id: 58,
        attributes: {
          serviceName: 'Intellectual Property'
        }
      }, {
        id: 59,
        attributes: {
          serviceName: 'Trademark'
        }
      }, {
        id: 60,
        attributes: {
          serviceName: 'Copyright'
        }
      }, {
        id: 61,
        attributes: {
          serviceName: 'Convertible Note(s)'
        }
      }, {
        id: 62,
        attributes: {
          serviceName: 'Chapter 11 Bankruptcy'
        }
      }, {
        id: 63,
        attributes: {
          serviceName: 'Commodity & Futures Contract'
        }
      }, {
        id: 64,
        attributes: {
          serviceName: 'Initial Public Offering'
        }
      }, {
        id: 66,
        attributes: {
          serviceName: 'Securities Arbitration'
        }
      }, {
        id: 67,
        attributes: {
          serviceName: 'Offering Memorandum (Canada)'
        }
      }, {
        id: 68,
        attributes: {
          serviceName: 'Legal Entity Structuring'
        }
      }, {
        id: 69,
        attributes: {
          serviceName: 'Agile'
        }
      }, {
        id: 70,
        attributes: {
          serviceName: 'Custom Design and Build'
        }
      }, {
        id: 71,
        attributes: {
          serviceName: 'Data Analytics Implementation'
        }
      }, {
        id: 72,
        attributes: {
          serviceName: 'Investor Business Plans'
        }
      }, {
        id: 73,
        attributes: {
          serviceName: 'E-2 Business Plans'
        }
      }, {
        id: 74,
        attributes: {
          serviceName: 'E-B1 Business Plans'
        }
      }, {
        id: 75,
        attributes: {
          serviceName: 'E-B5 Business Plans'
        }
      }, {
        id: 76,
        attributes: {
          serviceName: 'L-1A & L-1B Business Plans'
        }
      }, {
        id: 77,
        attributes: {
          serviceName: 'Regulation D'
        }
      }, {
        id: 78,
        attributes: {
          serviceName: '506 (B) Relationship Investors'
        }
      }, {
        id: 79,
        attributes: {
          serviceName: '506 (C) Accredited Investors'
        }
      }, {
        id: 80,
        attributes: {
          serviceName: 'Leveraged Buyout (LBO)'
        }
      }, {
        id: 81,
        attributes: {
          serviceName: 'Hedge Fund'
        }
      }, {
        id: 82,
        attributes: {
          serviceName: 'Venture Capital Fund'
        }
      }, {
        id: 83,
        attributes: {
          serviceName: 'Growth Capital'
        }
      }, {
        id: 84,
        attributes: {
          serviceName: 'Real Estate'
        }
      }, {
        id: 85,
        attributes: {
          serviceName: 'Infrastructure'
        }
      }, {
        id: 86,
        attributes: {
          serviceName: 'Funds of Funds'
        }
      }, {
        id: 87,
        attributes: {
          serviceName: 'Mezzaanine Capital'
        }
      }, {
        id: 88,
        attributes: {
          serviceName: 'Distressed Private Equity'
        }
      }, {
        id: 89,
        attributes: {
          serviceName: 'Secondary Fund'
        }
      }, {
        id: 90,
        attributes: {
          serviceName: 'Post Merger Integration'
        }
      }, {
        id: 91,
        attributes: {
          serviceName: 'Diviestitures'
        }
      }, {
        id: 93,
        attributes: {
          serviceName: 'Software Budgeting And Financials'
        }
      }, {
        id: 94,
        attributes: {
          serviceName: 'Prototypes'
        }
      }, {
        id: 95,
        attributes: {
          serviceName: 'Backlog Feature Implementation'
        }
      }, {
        id: 96,
        attributes: {
          serviceName: 'Functional Specification'
        }
      }, {
        id: 97,
        attributes: {
          serviceName: 'Utility Patent'
        }
      }, {
        id: 98,
        attributes: {
          serviceName: 'Design Patent'
        }
      }, {
        id: 99,
        attributes: {
          serviceName: 'Plant Patent'
        }
      }, {
        id: 100,
        attributes: {
          serviceName: 'Provisional And Non Provisional'
        }
      }, {
        id: 102,
        attributes: {
          serviceName: 'Trading'
        }
      }, {
        id: 103,
        attributes: {
          serviceName: 'Reg A+'
        }
      }, {
        id: 28,
        attributes: {
          serviceName: 'Debt Financing'
        }
      }, {
        id: 104,
        attributes: {
          serviceName: 'Pre IPO'
        }
      }, {
        id: 105,
        attributes: {
          serviceName: 'Special Purpose Entity'
        }
      }, {
        id: 106,
        attributes: {
          serviceName: 'Crowd funding'
        }
      }, {
        id: 107,
        attributes: {
          serviceName: 'Invest'
        }
      }, {
        id: 108,
        attributes: {
          serviceName: 'Industries'
        }
      }]
    };
  },
  head() {
    var _this$content, _this$content$metaFie;
    return {
      title: 'Search Results | Venture Plans',
      meta: [{
        name: 'robots',
        content: 'noindex'
      }],
      link: [{
        rel: 'canonical',
        href: (_this$content = this.content) !== null && _this$content !== void 0 && (_this$content$metaFie = _this$content.metaFields[0]) !== null && _this$content$metaFie !== void 0 && _this$content$metaFie.canonicalUrl ? (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.content.metaFields[0].canonicalUrl : (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path
      }]
    };
  },
  computed: {
    filter1Data() {
      var _this$filters, _this$filters$FilterC, _this$filters$FilterC2, _this$filters$FilterC3, _this$filters$FilterC4;
      return ((_this$filters = this.filters) === null || _this$filters === void 0 ? void 0 : (_this$filters$FilterC = _this$filters.FilterComponent1) === null || _this$filters$FilterC === void 0 ? void 0 : (_this$filters$FilterC2 = _this$filters$FilterC.data) === null || _this$filters$FilterC2 === void 0 ? void 0 : (_this$filters$FilterC3 = _this$filters$FilterC2[0]) === null || _this$filters$FilterC3 === void 0 ? void 0 : (_this$filters$FilterC4 = _this$filters$FilterC3.attributes) === null || _this$filters$FilterC4 === void 0 ? void 0 : _this$filters$FilterC4.filterCategories) || [];
    },
    filter2Data() {
      var _this$filters2, _this$filters2$Filter, _this$filters2$Filter2, _this$filters2$Filter3;
      return ((_this$filters2 = this.filters) === null || _this$filters2 === void 0 ? void 0 : (_this$filters2$Filter = _this$filters2.FilterComponent2) === null || _this$filters2$Filter === void 0 ? void 0 : (_this$filters2$Filter2 = _this$filters2$Filter.data[0]) === null || _this$filters2$Filter2 === void 0 ? void 0 : (_this$filters2$Filter3 = _this$filters2$Filter2.attributes) === null || _this$filters2$Filter3 === void 0 ? void 0 : _this$filters2$Filter3.filterCategories) || [];
    },
    filter3Data() {
      var _this$filters3, _this$filters3$Filter, _this$filters3$Filter2, _this$filters3$Filter3;
      return ((_this$filters3 = this.filters) === null || _this$filters3 === void 0 ? void 0 : (_this$filters3$Filter = _this$filters3.FilterComponent3) === null || _this$filters3$Filter === void 0 ? void 0 : (_this$filters3$Filter2 = _this$filters3$Filter.data[0]) === null || _this$filters3$Filter2 === void 0 ? void 0 : (_this$filters3$Filter3 = _this$filters3$Filter2.attributes) === null || _this$filters3$Filter3 === void 0 ? void 0 : _this$filters3$Filter3.filterCategories) || [];
    }
  },
  watch: {
    'dateFilterOption.start_date'(val) {
      this.endDateConfig.minDate = val;
    },
    search: {
      handler() {
        this.resetSelectedFilters();
        this.performSearch(false);
      }
    },
    $route: {
      handler() {
        this.resetSelectedFilters();
        this.performSearch(true);
      }
    }
  },
  mounted() {
    this.search = this.$route.query.search;
    this.resetSelectedFilters();
    this.generateFiltersAndSearch();
  },
  methods: {
    resetSelectedFilters() {
      const queryParams = this.$route.query;
      this.appliedFilters = [];
      this.selectedIndustryOptions = [];
      this.selectedServicesOptions = [];
      this.selectedTypeOptions = [];
      this.industryFilterOption = {};
      this.servicesFilterOption = {};
      this.typeFilterOption = {};
      if (queryParams && queryParams.industry) {
        for (const industry of queryParams.industry) {
          this.industryFilterOption[this.capitalize(industry)] = true;
        }
        this.selectedIndustryOptions = [...queryParams.industry];
        this.appliedFilters = [...this.appliedFilters, ...queryParams.industry];
      }
      if (queryParams && queryParams.service) {
        for (const service of queryParams.service) {
          this.servicesFilterOption[this.capitalize(service)] = true;
        }
        this.selectedServicesOptions = [...queryParams.service];
        this.appliedFilters = [...this.appliedFilters, ...queryParams.service];
      }
      if (queryParams && queryParams.type) {
        for (const type of queryParams.type) {
          this.typeFilterOption[this.capitalize(type)] = true;
        }
        this.selectedTypeOptions = [...queryParams.type];
        this.appliedFilters = [...this.appliedFilters, ...queryParams.type];
      }
    },
    capitalize(str) {
      const arr = str.split(' ');
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      const str2 = arr.join(' ');
      return str2;
    },
    performSearch(changeValue) {
      if (changeValue) {
        this.search = this.$route.query.search;
      }
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(() => {
        const hitSearch = async () => {
          var _ref2;
          const results = await this.$axios.post(`${"https://search.ventureplans.us"}/indexes/search-page/search`, {
            q: this.search,
            limit: 15,
            attributesToRetrieve: ['title', 'description', 'url', 'image', 'keywords', 'category'],
            filter: this.filterText
          });
          const hits = (_ref2 = results.data.hits.map(result => {
            return result;
          }) || []) === null || _ref2 === void 0 ? void 0 : _ref2.flat();
          this.results = hits;
        };
        hitSearch();
      }, 700);
    },
    getLink(item) {
      return item === null || item === void 0 ? void 0 : item.url;
    },
    isInsight(_meilisearch_id) {
      if (_meilisearch_id !== null && _meilisearch_id !== void 0 && _meilisearch_id.includes('insight-page')) return true;
      return false;
    },
    getTitle(item) {
      if (item !== null && item !== void 0 && item.title) return item.title;
    },
    getDate(date) {
      return date === null || date === void 0 ? void 0 : date.slice(0, date === null || date === void 0 ? void 0 : date.indexOf('T'));
    },
    getDescription(item) {
      if (item !== null && item !== void 0 && item.description) return item.description;
    },
    getImageUrl(item) {
      if (item !== null && item !== void 0 && item.image) return item.image;
    },
    openPopper(filter) {
      setTimeout(() => {
        this.activePopper = filter;
      }, 100);
    },
    closePopper() {
      this.activePopper = '';
    },
    generateFiltersAndSearch(returnWithoutSearch) {
      this.filterText = '';
      let addIndustryFilter = '';
      for (let filter = 0; filter < this.selectedIndustryOptions.length; filter++) {
        if (addIndustryFilter !== '') {
          addIndustryFilter += ' OR ';
        } else {
          addIndustryFilter += '(';
        }
        addIndustryFilter += "industryFilter.industryFilter = '" + this.selectedIndustryOptions[filter] + "'";
      }
      if (addIndustryFilter) {
        this.filterText += addIndustryFilter + ')';
      }
      let addServiceFilter = '';
      for (let filter = 0; filter < this.selectedServicesOptions.length; filter++) {
        if (addServiceFilter !== '') {
          addServiceFilter += ' OR ';
        } else {
          addServiceFilter += '(';
        }
        addServiceFilter += "serviceFilter.serviceFilter = '" + this.selectedServicesOptions[filter] + "'";
      }
      if (this.filterText !== '' && addServiceFilter !== '') {
        this.filterText += ' AND ';
      }
      if (addServiceFilter !== '') {
        this.filterText += addServiceFilter + ')';
      }
      let addTypeFilter = '';
      for (let filter = 0; filter < this.selectedTypeOptions.length; filter++) {
        if (addTypeFilter !== '') {
          addTypeFilter += ' OR ';
        } else {
          addTypeFilter += '(';
        }
        addTypeFilter += "typeFilter.TypeFilter = '" + this.selectedTypeOptions[filter] + "'";
      }
      if (this.filterText !== '' && addTypeFilter !== '') {
        this.filterText += ' AND ';
      }
      if (addTypeFilter !== '') {
        this.filterText += addTypeFilter + ')';
      }
      if (this.dateFilterOption.start_date && this.dateFilterOption.end_date && this.dateFilterOption.start_date !== '' && this.dateFilterOption.end_date !== '') {
        if (this.filterText !== '') {
          this.filterText += ' AND ';
        }
        this.filterText += '(date >= ' + this.dateFilterOption.start_date + ' AND ' + 'date <= ' + this.dateFilterOption.end_date + ')';
      }
      if (returnWithoutSearch) {
        return;
      }
      this.performSearch();
    },
    applyFilters() {
      this.selectedIndustryOptions = [];
      this.selectedServicesOptions = [];
      this.selectedTypeOptions = [];
      this.selectedIndustryOptions = Object.keys(this.industryFilterOption).filter(key => this.industryFilterOption[key] === true).reduce((obj, key, index) => {
        obj.push(key.replaceAll('_', ' ').toLowerCase());
        return obj;
      }, []);
      this.selectedServicesOptions = Object.keys(this.servicesFilterOption).filter(key => this.servicesFilterOption[key] === true).reduce((obj, key, index) => {
        obj.push(key.replaceAll('_', ' ').toLowerCase());
        return obj;
      }, []);
      this.selectedTypeOptions = Object.keys(this.typeFilterOption).filter(key => this.typeFilterOption[key] === true).reduce((obj, key, index) => {
        obj.push(key.replaceAll('_', ' ').toLowerCase());
        return obj;
      }, []);
      const regionFilter = Object.keys(this.regionFilterOption).filter(key => this.regionFilterOption[key] === true).reduce((obj, key, index) => {
        obj.push(key.replaceAll('_', ' '));
        return obj;
      }, []);
      let dateFilter = [];
      if (this.dateFilterOption.start_date && this.dateFilterOption.end_date && this.dateFilterOption.start_date !== '' && this.dateFilterOption.end_date !== '') {
        dateFilter = [{
          id: 'date',
          start_date: this.dateFilterOption.start_date,
          end_date: this.dateFilterOption.end_date,
          label: this.dateFilterOption.start_date + ' - ' + this.dateFilterOption.end_date
        }];
      }
      this.appliedFilters = [...this.selectedIndustryOptions, ...this.selectedServicesOptions, ...this.selectedTypeOptions, ...regionFilter, ...dateFilter];
      this.generateFiltersAndSearch();
    },
    removeFilter(filter) {
      this.appliedFilters = this.appliedFilters.filter(item => item !== filter.toLowerCase());
      this.selectedIndustryOptions = this.selectedIndustryOptions.filter(item => item !== filter.toLowerCase());
      this.industryFilterOption[filter] = false;
      this.selectedServicesOptions = this.selectedServicesOptions.filter(item => item !== filter.toLowerCase());
      this.servicesFilterOption[filter] = false;
      this.selectedTypeOptions = this.selectedTypeOptions.filter(item => item !== filter.toLowerCase());
      this.typeFilterOption[filter] = false;
      this.regionFilterOption[filter] = false;
      if (filter.id === 'date') {
        this.dateFilterOption.start_date = '';
        this.dateFilterOption.end_date = '';
      }
      this.generateFiltersAndSearch();
    },
    removeAllFilter() {
      this.appliedFilters = [];
      this.selectedIndustryOptions = [];
      this.industryFilterOption = {};
      this.selectedServicesOptions = [];
      this.servicesFilterOption = {};
      this.selectedTypeOptions = [];
      this.typeFilterOption = {};
      this.regionFilterOption = {};
      this.dateFilterOption.start_date = '';
      this.dateFilterOption.end_date = '';
      this.generateFiltersAndSearch();
    }
  }
});
// CONCATENATED MODULE: ./pages/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/search.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(263)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "77fba2eb",
  "13389976"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsSearch: __webpack_require__(70).default,IconsClose: __webpack_require__(219).default,InputFilterCheckbox: __webpack_require__(224).default,IconsDownarrow: __webpack_require__(154).default,CommonCustomStrapiDisplay: __webpack_require__(150).default,CommonReadytotalk: __webpack_require__(140).default,CommonBrandLogo: __webpack_require__(164).default})


/***/ })

};;
//# sourceMappingURL=search.js.map