exports.ids = [145,19,21,22,25,29,30,33,35,37,41,42,43,44,56,68,77,82,84,86,97,103,104,105,109,111,114];
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

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-contact-us.vue?vue&type=template&id=3efa912b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"group relative h-[400px] overflow-hidden bg-cover bg-center bg-no-repeat lg:h-[571px]"},[_vm._ssrNode(((_vm.showOverlay)?("<video autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\" playsinline class=\"force-video-reload responsive-contact-us-section-video absolute h-full w-full object-cover xl:-mt-[10%] xl:h-auto\""+(_vm._ssrStyle(null,_vm.videoHeight, null))+"><source"+(_vm._ssrAttr("src",_vm.videoThumbnailURL))+" type=\"video/mp4\"></video>"):"<!---->")+" "+((_vm.showOverlay)?("<div class=\"absolute inset-0 z-[8] bg-[#1f3244]/[0.41]\"></div>"):"<!---->")+" "),_vm._ssrNode("<div>","</div>",[(_vm.showOverlay)?_vm._ssrNode("<div"+(_vm._ssrClass("container relative z-[9] px-10 py-10 pb-5 md:pb-10 lg:px-[97px] lg:pt-40 xl:px-4",{ 'xl:pt-[116px]': _vm.lessPaddingTop, 'xl:pt-[250px]': !_vm.lessPaddingTop }))+">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2\">","</div>",[_vm._ssrNode("<div class=\"md:pr-2\">","</div>",[_vm._ssrNode("<p class=\"text-2xl font-bold -tracking-[0.09px] text-white sm:text-4xl lg:text-[40px] lg:leading-[56px]\">"+(_vm._s(_vm.title))+"</p> "),_vm._ssrNode("<div class=\"mt-40 md:mt-[58px]\">","</div>",[(_vm.$helper.isInternalUrl(_vm.buttonURL))?_c('nuxt-link',{staticClass:"outline-btn w-full px-11 py-[14px] text-center text-lg font-semibold leading-[21px] md:w-auto",attrs:{"to":_vm.buttonURL}},[_vm._v("\n                            "+_vm._s(_vm.buttonTitle)+"\n                        ")]):_c('a',{staticClass:"outline-btn w-full px-11 py-[14px] text-center text-lg font-semibold leading-[21px] md:w-auto",attrs:{"href":_vm.buttonURL,"target":"_blank"}},[_vm._v(_vm._s(_vm.buttonTitle)+" ")])],1)],2)])]):_vm._e(),_vm._ssrNode(" <div"+(_vm._ssrClass(null,_vm.showOverlay ? 'hidden' : ''))+"><iframe"+(_vm._ssrAttr("height",_vm.videoHeight))+(_vm._ssrAttr("src",_vm.youtubeSrc))+" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"allowfullscreen\" style=\"width: 100%\"></iframe></div> "),(_vm.showOverlay)?_vm._ssrNode("<button class=\"absolute inset-x-0 top-1/2 z-10 mx-auto w-[113px] -translate-y-1/2 bg-primary/[0.71] px-11 py-5 group-hover:bg-primary\">","</button>",[_c('icons-play')],1):_vm._e()],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-contact-us.vue?vue&type=template&id=3efa912b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-contact-us.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_contact_usvue_type_script_lang_js_ = ({
  props: {
    lessPaddingTop: {
      type: Boolean,
      default: false
    },
    buttonTitle: {
      type: String,
      default: 'Contact Us'
    },
    buttonURL: {
      type: String,
      default: '/contact-us'
    },
    videoURL: {
      type: String,
      default: 'https://fast.wistia.net/embed/iframe/2fj2578efk'
    },
    videoThumbnailURL: {
      type: String,
      default: 'https://videos.ctfassets.net/koyrlvjc3wvc/654wWfXJHIUtKBU5UXfRNF/f8b62c2d5ca30297b5437de136468c94/careers_video_01.mp4'
    },
    title: {
      type: String,
      default: 'Win grants from federal<br/> and state institutions'
    }
  },
  data() {
    return {
      playing: false,
      videoHeight: 571,
      youtubeSrc: 'https://www.youtube.com/embed/xhK2Zr5BXfA?si=TC7OuK5mL5SuIpZN' // Initial video source
    };
  },

  computed: {
    showOverlay() {
      return !this.playing;
    },
    iframeURL() {
      if (this.playing) {
        return this.videoURL;
      } else {
        return '';
      }
    }
  },
  mounted() {
    if (window.innerWidth <= 768) {
      this.videoHeight = 350;
    } else {
      this.videoHeight = 571;
    }
  },
  methods: {
    play() {
      this.playing = true;
      this.$nextTick(() => {
        const youtubePlayer = this.$refs.youtubePlayer;

        // Check if the iframe element exists
        if (youtubePlayer) {
          // Extract the video ID from the initial source
          const videoId = this.youtubeSrc.split('/').pop().split('?')[0];

          // Construct the new source with autoplay enabled
          const autoplaySrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

          // Update the iframe src attribute to trigger autoplay
          youtubePlayer.setAttribute('src', autoplaySrc);
        }
      });

      // Access the iframe element

      /*
      if (typeof this.videoURL === 'string') {
          setTimeout(() => {
              const video = window.Wistia.api(this.videoURL.slice(this.videoURL.indexOf('iframe/') + 1));
              if (video) {
                  video.play();
                  video.bind('end', () => {
                      this.playing = false;
                      return video.unbind('end', () => {});
                  });
              }
          }, 250);
      }
      */
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-contact-us.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_contact_usvue_type_script_lang_js_ = (common_contact_usvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-contact-us.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_contact_usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "15978c9c"
  
)

/* harmony default export */ var common_contact_us = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsPlay: __webpack_require__(141).default})


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

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-play.vue?vue&type=template&id=6f9ce8fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"id":"SVGDoc","width":"25","height":"35","xmlns":"http://www.w3.org/2000/svg","version":"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:avocode":"https://avocode.com/","viewBox":"0 0 25 35"}},[_vm._ssrNode("<defs></defs> <desc>Generated with Avocode.</desc> <g><g><title>Path 7367</title> <path d=\"M0.58612,1.83847v0v31.29441c-0.00087,1.09563 0.96639,1.78119 1.74043,1.23354l22.10668,-15.64726c0.77387,-0.5475 0.77387,-1.9168 0,-2.46431l-22.10668,-15.64716c-0.72205,-0.51104 -1.74043,0.07667 -1.74043,1.23079z\" fill=\"#ffffff\" fill-opacity=\"1\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-play.vue?vue&type=template&id=6f9ce8fe&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-play.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0a83ed49"
  
)

/* harmony default export */ var icons_play = __webpack_exports__["default"] = (component.exports);

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

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-share.vue?vue&type=template&id=c9772c9c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex w-[53px] cursor-pointer items-center justify-between"},[_vm._ssrNode(((_vm.isShowSaveBtn)?("<button aria-label=\"Save Button\""+(_vm._ssrClass("text-[#5f5f60] hover:text-primary",{ 'text-white': _vm.textWhite, 'text-[#5f5f60]': !_vm.textWhite }))+"><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\" class=\"h-6 w-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z\"></path></svg></button>"):"<!---->")+" "+((_vm.isShowSaveBtn && !_vm.insights)?("<div class=\"relative mx-1.5 h-[17px] w-px flex-none bg-[#aeaeaf]/30\"></div>"):"<!---->")+" "),_c('popper',{ref:"share",attrs:{"trigger":"clickToToggle","append-to-body":true,"options":{
            placement: 'bottom-start',
            modifiers: { offset: { offset: '0,16px' }, arrow: { enabled: false }, shift: { enabled: false } },
            preventOverflow: {
                padding: 0,
            },
        }},on:{"show":function($event){_vm.isOpenShare = true},"hide":function($event){_vm.isOpenShare = false}}},[_c('div',{staticClass:"popper absolute right-0 z-[10] w-[167px] border border-[#ededed] bg-white !shadow-[0_3px_6px_rgba(0,0,0,0.16)] lg:!-left-16",class:_vm.popperClass},[_c('ul',{staticClass:"text-base -tracking-[0.03px]",class:{ 'text-white': _vm.textWhite, 'text-[#707070]': !_vm.textWhite }},[_c('li',{staticClass:"border-b border-[#f1f1f1]"},[_c('p',{staticClass:"p-2.5 text-[13px] text-[#030303]"},[_vm._v(_vm._s(_vm.$t('share_on')))])]),_vm._v(" "),_c('li',{staticClass:"border-b border-[#f1f1f1]"},[_c('button',{staticClass:"group flex items-center gap-2 px-2.5 py-3.5 text-xs text-[#030303] transition-all duration-300 hover:bg-primary hover:text-white",attrs:{"aria-label":_vm.$t('facebook')},on:{"click":function($event){_vm.shareLink('facebook'), _vm.$refs.share.doClose()}}},[_c('icons-facebook',{staticClass:"h-4 w-4 text-primary transition-all duration-300 group-hover:text-white"}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('facebook')))])],1)]),_vm._v(" "),_c('li',{staticClass:"border-b border-[#f1f1f1]"},[_c('button',{staticClass:"group flex items-center gap-2 px-2.5 py-3.5 text-xs text-[#030303] transition-all duration-300 hover:bg-primary hover:text-white",attrs:{"aria-label":_vm.$t('linkedin')},on:{"click":function($event){_vm.shareLink('linkedin'), _vm.$refs.share.doClose()}}},[_c('icons-linkedin',{staticClass:"h-4 w-4 text-primary transition-all duration-300 group-hover:text-white"}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('linkedin')))])],1)]),_vm._v(" "),_c('li',[_c('button',{staticClass:"group flex items-center gap-2 px-2.5 py-3.5 text-xs text-[#030303] transition-all duration-300 hover:bg-primary hover:text-white",attrs:{"aria-label":_vm.$t('twitter')},on:{"click":function($event){_vm.shareLink('twitter'), _vm.$refs.share.doClose()}}},[_c('icons-twitter',{staticClass:"h-4 w-4 text-primary transition-all duration-300 group-hover:text-white"}),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.$t('twitter')))])],1)])])]),_vm._v(" "),_c('button',{staticClass:"transition-all duration-300 hover:text-primary",class:{ '!text-primary': _vm.isOpenShare, 'text-white': _vm.textWhite, 'text-[#707070]': !_vm.textWhite },attrs:{"slot":"reference","aria-label":"Share"},slot:"reference"},[_c('svg',{staticClass:"h-6 w-6",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 20 20","fill":"currentColor"}},[_c('path',{attrs:{"d":"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"}})])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-share.vue?vue&type=template&id=c9772c9c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-share.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_sharevue_type_script_lang_js_ = ({
  props: {
    isShowSaveBtn: {
      type: Boolean,
      default: false
    },
    textWhite: {
      type: Boolean,
      default: false
    },
    insights: {
      type: Boolean,
      default: false
    },
    popperClass: {
      type: String,
      default: ''
    },
    customLink: String
  },
  data() {
    return {
      isOpenShare: false
    };
  },
  mounted() {
    document.addEventListener('scroll', () => {
      var _this$$refs, _this$$refs$share;
      (_this$$refs = this.$refs) === null || _this$$refs === void 0 ? void 0 : (_this$$refs$share = _this$$refs.share) === null || _this$$refs$share === void 0 ? void 0 : _this$$refs$share.doClose();
    });
  },
  methods: {
    shareLink(media) {
      const mediaLink = media === 'facebook' ? 'https://www.facebook.com/sharer/sharer.php?u=' : media === 'twitter' ? 'https://twitter.com/intent/tweet?text=' : media === 'instagram' ? 'https://msng.link/o/?' : media === 'linkedin' ? 'https://www.linkedin.com/sharing/share-offsite/?url=' : '';
      const url = this.customLink && typeof this.customLink === 'string' ? this.customLink.includes('/insights/') ? mediaLink + window.location.origin + this.customLink : mediaLink + window.location.href + this.customLink : `${mediaLink + encodeURIComponent(window.location.href)}`;
      window.open(url, '_blank');
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-share.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_sharevue_type_script_lang_js_ = (common_sharevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-share.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_sharevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "05a7a73e"
  
)

/* harmony default export */ var common_share = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsFacebook: __webpack_require__(152).default,IconsLinkedin: __webpack_require__(144).default,IconsTwitter: __webpack_require__(153).default})


/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-linkedin.vue?vue&type=template&id=150328ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"w-5",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","data-fa-i2svg":""}},[_vm._ssrNode("<path fill=\"currentColor\" d=\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-linkedin.vue?vue&type=template&id=150328ae&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-linkedin.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "149df793"
  
)

/* harmony default export */ var icons_linkedin = __webpack_exports__["default"] = (component.exports);

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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-toggle-content.vue?vue&type=template&id=699551c4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"relative\" data-v-699551c4><div style=\"display: none\" data-v-699551c4>"+(_vm._s(_vm.content))+"</div> <p"+(_vm._ssrClass("custom-html-data overflow-hidden",_vm.contentClass))+" data-v-699551c4>"+(_vm._s(_vm.textBoxContent))+"</p> "+((_vm.hasReadMore)?("<div"+(_vm._ssrClass(null,_vm.expanded ? _vm.contentClass : ''))+(_vm._ssrStyle(null,_vm.expanded || !_vm.showBlur ? 'display:none' : 'display:block;height: 28px;overflow:hidden;', null))+" data-v-699551c4>\n             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet asperiores at dolor, ducimus earum eligendi, esse facilis illum impedit iure laborum, nobis possimus quo reprehenderit soluta tempora ut vero! \n        </div>"):"<!---->")+" "+((_vm.hasReadMore && _vm.showBlur)?("<div"+(_vm._ssrClass(null,!_vm.expanded ? 'toggle-gradient' : ''))+" data-v-699551c4></div>"):"<!---->")+"</div> "+((_vm.hasReadMore)?("<button"+(_vm._ssrClass("mt-[25px] flex gap-3.5 text-base font-semibold text-primary",_vm.readMoreClass))+" data-v-699551c4>"+_vm._ssrEscape("\n        read "+_vm._s(_vm.expanded ? 'less' : 'more')+"\n        ")+"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"6\" viewBox=\"0 0 11 6\" class=\"h-1 w-2 xl:h-[6px] xl:w-[11px]\" data-v-699551c4><g data-v-699551c4><g data-v-699551c4><path fill=\"currentColor\" d=\"M.439.546l4.907 4.907L10.254.546z\" data-v-699551c4></path></g></g></svg></button>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-toggle-content.vue?vue&type=template&id=699551c4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-toggle-content.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_toggle_contentvue_type_script_lang_js_ = ({
  props: {
    content: {
      type: String,
      default: ''
    },
    contentClass: {
      type: String,
      default: '!leading-normal text-lg'
    },
    showBlur: {
      type: Boolean,
      default: true
    },
    readMoreClass: {
      type: String,
      default: 'w-full items-center justify-center'
    },
    nl2br: {
      type: Boolean,
      default: true
    },
    only_mobile: {
      type: Boolean,
      default: false
    },
    show_more_label: {
      type: String,
      default: 'read_more'
    },
    blurHeight: {
      type: Number,
      default: 24
    }
  },
  data() {
    return {
      expanded: false,
      firstElementTag: null,
      secondElementTag: null,
      perLineHeight: 0,
      hasReadMore: false,
      textBoxContent: ``,
      textBoxFullContent: ``,
      updateBox: 1
    };
  },
  mounted() {
    this.textBoxContent = this.content;
    this.textBoxFullContent = this.content;
    this.hideCustomContent();
    // this.perLineHeight = parseInt(getComputedStyle(this.$refs.customToggleContainer.$el).lineHeight);
    // console.log(this.$refs.customToggleContainer.$el.firstChild)
  },

  methods: {
    hideCustomContent() {
      const customContainerElement = this.$refs.dummyComp;
      if (customContainerElement.firstChild) {
        if (customContainerElement.children.length > 1) {
          this.hasReadMore = true;
          this.textBoxContent = customContainerElement.firstChild.innerHTML;
        } else {
          this.hasReadMore = false;
          this.textBoxContent = this.content;
        }
      }
      this.updateBox += 1;
    },
    toggleContentShow() {
      this.expanded = !this.expanded;
      if (this.expanded) {
        this.textBoxContent = this.content;
      } else {
        this.hideCustomContent();
      }
      this.updateBox += 1;
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-toggle-content.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_toggle_contentvue_type_script_lang_js_ = (common_toggle_contentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-toggle-content.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(166)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_toggle_contentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "699551c4",
  "d862b59e"
  
)

/* harmony default export */ var common_toggle_content = __webpack_exports__["default"] = (component.exports);

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

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(167);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("0b87e627", content, true, context)
};

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-facebook.vue?vue&type=template&id=3581ffba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"w-3",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","data-fa-i2svg":""}},[_vm._ssrNode("<path fill=\"currentColor\" d=\"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-facebook.vue?vue&type=template&id=3581ffba&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-facebook.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5edfdd5b"
  
)

/* harmony default export */ var icons_facebook = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-twitter.vue?vue&type=template&id=4c656138&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"w-5",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","data-fa-i2svg":""}},[_vm._ssrNode("<path fill=\"currentColor\" d=\"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-twitter.vue?vue&type=template&id=4c656138&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-twitter.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75a2b4ee"
  
)

/* harmony default export */ var icons_twitter = __webpack_exports__["default"] = (component.exports);

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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-banner-tab.vue?vue&type=template&id=231983f3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sticky z-20 block border-b-2 border-[#CFCFCF] bg-white",class:_vm.scrollPosition === 'up' ? 'top-[56px] md:top-[58px] xl:top-[114px]' : 'top-[55px] lg:top-[55px] xl:top-[54px]'},[_vm._ssrNode("<div class=\"container relative lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between gap-2\">","</div>",[_vm._ssrNode("<div id=\"banner_header_tab\" class=\"w-[940px] overflow-x-auto overflow-y-hidden lg:overflow-visible\">","</div>",[_vm._ssrNode("<ul class=\"pb-0.5 lg:pb-0\">","</ul>",[_c('scrollactive',{staticClass:"my-nav flex items-center gap-6 text-[11px] font-medium leading-[13px] -tracking-[-0.02px] text-black-700 xl:gap-8 xl:text-[13px] xl:font-normal xl:leading-5 xl:-tracking-[-0.03px]",attrs:{"modify-url":false,"offset":_vm.scrollPosition === 'up' ? 200 : 160,"scroll-offset":_vm.scrollPosition === 'up' ? 200 : 160,"exact":true},on:{"itemchanged":_vm.onItemChanged}},_vm._l((_vm.tabs),function(tab){return _c('li',{key:tab.id},[_c('a',{staticClass:"scrollactive-item inline-block whitespace-nowrap py-4 hover:text-primary",class:{ 'relative text-primary before:absolute before:-bottom-[2px] before:left-0 before:h-[3px] before:w-full before:bg-primary': _vm.activeId === tab.id },attrs:{"id":("tab_" + (tab.id)),"href":("#" + (tab.id))}},[_vm._v("\n                                "+_vm._s(tab.title)+"\n                            ")])])}),0)],1)]),_vm._ssrNode(" "),_c('common-share',{attrs:{"is-show-save-btn":_vm.isShowSaveBtn}})],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-banner-tab.vue?vue&type=template&id=231983f3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-banner-tab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_banner_tabvue_type_script_lang_js_ = ({
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    isShowSaveBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      lastScrollTop: 0,
      scrollPosition: null,
      activeId: ''
    };
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll(), false);
  },
  mounted() {
    this.lastScrollTop = 0;
    document.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    onItemChanged(event, currentItem, lastActiveItem) {
      if (currentItem) {
        const id = currentItem.getAttribute('id');
        this.activeId = id.replace('tab_', '');
        const parent = document.querySelector('#banner_header_tab');
        const activeSpan = document.querySelector(`#${id}`);
        parent.scrollTo({
          left: activeSpan.offsetLeft - window.innerWidth / 2 + activeSpan.offsetWidth,
          top: 0,
          behavior: 'smooth'
        });
      }
    },
    handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > this.lastScrollTop) {
        this.scrollPosition = 'down';
      } else {
        this.scrollPosition = 'up';
      }
      this.lastScrollTop = st <= 0 ? 0 : st;
      if (this.lastScrollTop <= 20) {
        this.scrollPosition = null;
        this.activeId = '';
      }
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-banner-tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_banner_tabvue_type_script_lang_js_ = (common_banner_tabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-banner-tab.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_banner_tabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "349c03b6"
  
)

/* harmony default export */ var common_banner_tab = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonShare: __webpack_require__(143).default})


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

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_toggle_content_vue_vue_type_style_index_0_id_699551c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_toggle_content_vue_vue_type_style_index_0_id_699551c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_toggle_content_vue_vue_type_style_index_0_id_699551c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_toggle_content_vue_vue_type_style_index_0_id_699551c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_toggle_content_vue_vue_type_style_index_0_id_699551c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".toggle-gradient[data-v-699551c4]{position:absolute;bottom:0;width:100%;background-image:linear-gradient(hsla(0,0%,100%,.5),#fbfbfd);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);height:28px;overflow:hidden}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-our-team.vue?vue&type=template&id=7f71ff0c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"py-10 lg:pt-20 xl:pb-[83px] xl:pt-[106px]\"><div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\"><div id=\"ourTeam\" class=\"mb-[51px] flex items-center justify-center gap-2 text-center sm:gap-[33px]\"><div class=\"h-px w-full bg-[#d5d5d5]\"></div> <h2 class=\"shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl [&>span]:text-primary\">"+(_vm._s(_vm.title))+"</h2> <div class=\"h-px w-full bg-[#d5d5d5]\"></div></div> <div class=\"mx-auto max-w-lg space-y-5 text-center text-sm font-medium leading-6 -tracking-[0.03px] text-[#353535] xl:max-w-[732px] xl:text-base xl:leading-9 xl:-tracking-[0.04px]\"><p>"+_vm._ssrEscape(_vm._s(_vm.description))+"</p></div></div></section> "),_vm._ssrNode("<section>","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 gap-[51px] sm:grid-cols-2 md:mb-[123px] md:grid-cols-3 xl:gap-24\">","</div>",_vm._l((_vm.teams),function(team,i){return _vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"mx-auto mb-[25px] h-[295px] w-[295px] overflow-hidden rounded-full sm:h-[188px] sm:w-[188px] xl:mb-9 xl:h-[276px] xl:w-[276px]\">","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":("" + (team.attributes.imgUrl)),"alt":team.attributes.name,"loading":"lazy"}})],1),_vm._ssrNode(" <div class=\"text-center\"><h5 class=\"text-[20px] font-bold leading-6 -tracking-[0.04px] text-[#586376] xl:-tracking-[0.05px]\">"+_vm._ssrEscape("\n                            "+_vm._s(team.attributes.name)+"\n                        ")+"</h5> <p class=\"mt-2 text-[20px] font-normal leading-5 -tracking-[0.04px] text-[#586376] xl:-tracking-[0.06px]\">"+_vm._ssrEscape("\n                            "+_vm._s(team.attributes.position)+"\n                        ")+"</p></div> <p"+(_vm._ssrClass("mb-3 mt-[25px] h-24 overflow-hidden whitespace-pre-line text-sm leading-6 -tracking-[0.04px] text-[#202A36]",{ '!h-auto': _vm.readMore.includes(i) }))+">"+(_vm._s(team.attributes.description))+"</p> "),_vm._ssrNode("<button"+(_vm._ssrAttr("aria-label",_vm.$t('read_more')))+" class=\"flex items-center justify-center gap-4 text-sm font-semibold text-[#83888e] xl:text-xl\">","</button>",[_vm._ssrNode("<p class=\"text-base\">"+_vm._ssrEscape(_vm._s(_vm.readMore.includes(i) ? _vm.$t('read_less') : _vm.$t('read_more')))+"</p> "),_c('icons-downarrow',{staticClass:"w-2 xl:w-[11px]",class:{ 'rotate-180': _vm.readMore.includes(i) }})],2),_vm._ssrNode(" "),_c('nuxt-img',{staticClass:"mx-auto mt-[23px] h-11",attrs:{"format":"webp","src":("" + (team.attributes.logoUrl || team.attributes.iconUrl)),"alt":team.attributes.name + '_icon',"loading":"lazy"}})],2)}),0)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-our-team.vue?vue&type=template&id=7f71ff0c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-our-team.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_our_teamvue_type_script_lang_js_ = ({
  props: {
    teams: {
      type: Array,
      default: [{
        id: 1,
        attributes: {
          name: 'Arleo Dordar',
          position: 'Founder & President',
          description: 'Arleo Dordar is the founder, CEO, investor, and product architect of Venture plans. Arleo is a visionary with a strong leadership background. He has assisted in scaling, structuring, organizing, and developing sustainability plans for 4500+ businesses across 150 industries globally, resulting over 100 million dollars in investments.\nArleos expertise is in the implementation of revenue growth, execution, financing, and digital transformation. Arleo can engage in high-level discussions with startups, small businesses, and enterprise level organizations to gather and analyze big data, understand trends, and proactively deliver insights, recommendations, and drive improvements based on qualitative and quantitative metrics in to enhance operational efficiency, sales, marketing, and branding to achieve financing goals.\n\nArleo is fluent in English, and Farsi.',
          logoUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/6b00DIWzFd2oslgeBGW9bR/20165768ecd6a767e7dab00abf2f8b0e/FINRA__1_.png',
          iconUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/6b00DIWzFd2oslgeBGW9bR/20165768ecd6a767e7dab00abf2f8b0e/FINRA__1_.png',
          imgUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/7IXTuZckPyenC1Ujais8dI/c25bf738e4b6d830dc5fadce9c130bbc/IMG_5648-modified_3x.webp'
        }
      }]
    },
    title: {
      type: String,
      default: 'OUR TEAM'
    },
    description: {
      type: String,
      default: 'Get to know little bit about-us our team'
    }
  },
  data() {
    return {
      readMore: []
    };
  },
  methods: {
    showReadMore(i) {
      if (this.readMore.includes(i)) {
        const index = this.readMore.indexOf(i);
        if (index > -1) {
          this.readMore.splice(index, 1);
        }
      } else {
        this.readMore.push(i);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-our-team.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_our_teamvue_type_script_lang_js_ = (common_our_teamvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-our-team.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_our_teamvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "138ee22f"
  
)

/* harmony default export */ var common_our_team = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsDownarrow: __webpack_require__(154).default})


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

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-business-challenge.vue?vue&type=template&id=782d6d6d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<section id=\"ourCulture\" class=\"relative bg-cover bg-center bg-no-repeat pb-32 pt-[50px] lg:pb-[175px] lg:pt-[280px]\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + _vm.image + ")") }, null))+"><div class=\"absolute left-0 top-0 -z-0 h-full w-full\" style=\"background-image: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, #2b3746 100%)\"></div> <div class=\"container relative z-10 px-10 lg:px-[97px] xl:px-4\"><h3 class=\"max-w-[800px] text-[28px] font-bold uppercase leading-[42px] text-white lg:text-[41px] lg:leading-[54px]\">"+(_vm._s(_vm.title))+"</h3></div></section> "),_vm._ssrNode("<section class=\"relative -mt-24 pb-10 lg:-mt-[128px] lg:pb-16\">","</section>",[_vm._ssrNode("<div class=\"container px-10 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-[33px] grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mb-[85px] lg:grid-cols-4 lg:gap-5\">"+(_vm._ssrList((_vm.values),function(value,i){return ("<div><div class=\"flex h-auto items-center justify-center bg-primary/80 px-4 py-9 lg:min-h-[120px] lg:px-4 lg:py-[30px] xl:h-auto xl:px-[26px]\"><p class=\"text-sm font-bold capitalize leading-4 text-white lg:text-lg lg:leading-[30px]\">"+_vm._ssrEscape(_vm._s(value.attributes.title))+"</p></div> <div class=\"bg-white px-6 py-5 shadow-[0px_3px_6px_rgba(0,0,0,0.16)] md:min-h-[178px] lg:px-6 lg:py-5\"><p class=\"text-sm font-medium text-black xl:leading-[22px]\">"+_vm._ssrEscape(_vm._s(value.attributes.description))+"</p></div></div>")}))+"</div> "),_vm._ssrNode("<div class=\"text-center\">","</div>",[(_vm.$helper.isInternalUrl(_vm.buttonUrl))?_c('nuxt-link',{staticClass:"b-btn text-xs lg:max-w-[322px] lg:py-6",attrs:{"to":_vm.buttonUrl}},[_vm._v(_vm._s(_vm.buttonText))]):_c('a',{staticClass:"b-btn text-xs lg:max-w-[322px] lg:py-6",attrs:{"target":"_blank","href":_vm.buttonUrl}},[_vm._v(_vm._s(_vm.buttonText))])],1)],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-business-challenge.vue?vue&type=template&id=782d6d6d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-business-challenge.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_business_challengevue_type_script_lang_js_ = ({
  props: {
    buttonText: {
      type: String,
      default: 'Book a Consultation'
    },
    buttonUrl: {
      type: String,
      default: '/book-consult'
    },
    values: {
      type: Array,
      default: () => [{
        id: 1,
        attributes: {
          title: 'Passion & Commitment',
          description: 'We exceed professional expectations through customer engagement and guarantee results with strong work ethic.'
        }
      }, {
        id: 2,
        attributes: {
          title: 'Honesty & Trust',
          description: 'We uphold integrity and trust in our work. We are accountable and consistent in driving results.'
        }
      }, {
        id: 3,
        attributes: {
          title: 'Practical',
          description: 'We use proprietary standard operating procedures that are tested and proven for maximizing operational efficiencies.'
        }
      }, {
        id: 4,
        attributes: {
          title: 'One Team',
          description: 'Our accredited advisors work together to align with your vision and boost your growth.'
        }
      }]
    },
    title: {
      type: String,
      default: 'WITH YOU IN YOUR GREATEST BUSINESS CHALLENGES'
    },
    image: {
      type: String,
      default: '//images.ctfassets.net/koyrlvjc3wvc/1LiWbUsgdNPuIdSwcrtIcn/9d3453171c01163fdf45ab2f118e0043/img-3.jpg'
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-business-challenge.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_business_challengevue_type_script_lang_js_ = (common_business_challengevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-business-challenge.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_business_challengevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1372a547"
  
)

/* harmony default export */ var common_business_challenge = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-star.vue?vue&type=template&id=c35bdaa2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"23","height":"22","viewBox":"0 0 23 22"}},[_vm._ssrNode("<g><g><path fill=\"currentColor\" d=\"M17.303 13.473l4.8-3.956c.678-.562.327-1.662-.563-1.709l-6.18-.374a.97.97 0 0 1-.843-.61l-2.27-5.805a.968.968 0 0 0-1.803 0l-2.27 5.783a.97.97 0 0 1-.844.608l-6.203.375c-.89.047-1.241 1.147-.562 1.709l4.799 3.933c.28.234.421.632.328.983l-1.569 6.016c-.21.843.702 1.522 1.452 1.054l5.22-3.348a.918.918 0 0 1 1.03 0l5.244 3.348c.75.468 1.662-.211 1.451-1.054l-1.568-5.993a.962.962 0 0 1 .351-.96z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-star.vue?vue&type=template&id=c35bdaa2&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-star.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2e12ad32"
  
)

/* harmony default export */ var icons_star = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-google-icon.vue?vue&type=template&id=7136c0f5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 48 48","width":"24px","height":"24px"}},[_vm._ssrNode("<path fill=\"#fbc02d\" d=\"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\ts5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20\ts20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z\"></path> <path fill=\"#e53935\" d=\"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039\tl5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z\"></path> <path fill=\"#4caf50\" d=\"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\tc-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z\"></path> <path fill=\"#1565c0\" d=\"M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\tc0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-google-icon.vue?vue&type=template&id=7136c0f5&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-google-icon.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8a6700f0"
  
)

/* harmony default export */ var icons_google_icon = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/home/home-about-client.vue?vue&type=template&id=6138d81d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"my-16 overflow-hidden md:my-20"},[_vm._ssrNode("<div class=\"container\"><div class=\"mb-10 flex items-center justify-center text-center sm:gap-[33px]\"><div class=\"h-px w-1/5 bg-[#d5d5d5] sm:block sm:w-full\"></div> <h2 class=\"max-w-[90%] text-2xl font-bold uppercase text-black sm:max-w-none sm:shrink-0 xl:text-3xl [&>span]:text-primary\">"+(_vm._s(_vm.title))+"</h2> <div class=\"h-px w-1/5 bg-[#d5d5d5] sm:block sm:w-full\"></div></div></div> "),_c('div',{directives:[{name:"swiper",rawName:"v-swiper:aboutClient",value:(_vm.slider_options),expression:"slider_options",arg:"aboutClient"}],staticClass:"swiper !px-5",class:{ 'h-0': _vm.viewAll },attrs:{"cleanup-styles-on-destroy":false},on:{"mouseenter":_vm.stopAutoPlay,"mouseleave":_vm.startAutoPlay}},[_vm._ssrNode("<div class=\"swiper-wrapper mb-16 flex !h-auto\">","</div>",[(_vm.slider_data && !_vm.viewAll)?_vm._l((_vm.slider_data),function(data,i){return _vm._ssrNode("<div class=\"swiper-slide !h-auto\">","</div>",[_vm._ssrNode("<div class=\"swiper-slides-box flex overflow-hidden\">","</div>",[_vm._ssrNode("<div class=\"px-[22px] pb-3 pt-[28px] text-center\" style=\"background-image: linear-gradient(162deg, #ffffff 0%, #f0f9ff 100%)\">","</div>",[_c('nuxt-img',{staticClass:"mx-auto h-[115px] w-[115px] rounded-full object-cover",attrs:{"src":data.attributes.profileImgUrl,"alt":data.attributes.name,"loading":"lazy","format":"webp"}}),_vm._ssrNode(" <div class=\"max-w-[120px] pt-2.5\">"+((data.attributes.name)?("<p class=\"text-sm font-bold leading-[23px]\">"+_vm._ssrEscape(_vm._s(data.attributes.name))+"</p>"):"<!---->")+" <p class=\"pt-3.5 text-[15px] text-[#6c7d88]\">"+_vm._ssrEscape(_vm._s(data.attributes.companyName))+"</p></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1 pt-[13px]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between border-b border-[#e2e2e2]\">","</div>",[(data && data.attributes && data.attributes.rating && Math.abs(data.attributes.rating))?_vm._ssrNode("<div class=\"swiper-slides-star relative -top-[5px] !mb-0 !gap-1\">","</div>",_vm._l((Math.abs(data.attributes.rating)),function(rt){return _c('icons-star',{key:rt})}),1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-[3px] pr-4\">","</div>",[_vm._ssrNode("<a target=\"_blank\" href=\"https://www.google.com/\" aria-label=\"Google Icon\" class=\"inline-block flex-none\">","</a>",[_c('icons-google-icon',{staticClass:"h-5 w-5 lg:h-[38px] lg:w-[38px]"})],1)])],2),_vm._ssrNode(" <div class=\"hidden pb-2 pr-7 pt-[18px] md:block md:pb-0\"><div class=\"line-clamp-6 text-sm font-light leading-[22px] text-[#333333]\">"+_vm._ssrEscape(_vm._s(data.attributes.description))+"</div></div> <div class=\"block pb-2 pr-7 pt-[18px] md:hidden md:pb-0\">"+((!data.attributes.readMoreOn)?("<div class=\"line-clamp-6 text-sm font-light leading-[22px] text-[#333333]\">"+_vm._ssrEscape(_vm._s(_vm.truncateString(data.attributes.description)))+"</div>"):("<div class=\"line-clamp-6 text-sm font-light leading-[22px] text-[#333333]\">"+_vm._ssrEscape(_vm._s(data.attributes.description))+"</div>"))+" "+((data.attributes.description.length > 100)?("<p class=\"text-md mt-5 line-clamp-6 cursor-pointer font-bold leading-[22px] text-[#333333]\">"+_vm._ssrEscape("\n                                    "+_vm._s(data.attributes.readMoreOn ? 'Read Less' : 'Read More')+"\n                                ")+"</p>"):"<!---->")+"</div>")],2)],2)])}):_vm._e()],2)]),_vm._ssrNode(" "),(_vm.slider_data && _vm.viewAll)?_vm._ssrNode("<div class=\"mb-16 grid grid-cols-1 gap-x-5 gap-y-6 px-4 md:grid-cols-2 lg:grid-cols-3\">","</div>",_vm._l((_vm.slider_data),function(data,i){return _vm._ssrNode("<div class=\"swiper-slide !h-auto\">","</div>",[_vm._ssrNode("<div class=\"swiper-slides-box flex overflow-hidden\">","</div>",[_vm._ssrNode("<div class=\"px-[22px] pb-3 pt-[28px] text-center\" style=\"background-image: linear-gradient(162deg, #ffffff 0%, #f0f9ff 100%)\">","</div>",[_c('nuxt-img',{staticClass:"mx-auto h-[115px] w-[115px] rounded-full object-cover",attrs:{"format":"webp","src":data.attributes.profileImgUrl,"alt":data.attributes.name,"loading":"lazy"}}),_vm._ssrNode(" <div class=\"max-w-[120px] pt-2.5\">"+((data.attributes.name)?("<p class=\"text-sm font-bold leading-[23px]\">"+_vm._ssrEscape(_vm._s(data.attributes.name))+"</p>"):"<!---->")+" <p class=\"pt-3.5 text-[15px] text-[#6c7d88]\">"+_vm._ssrEscape(_vm._s(data.attributes.companyName))+"</p></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1 pt-[13px]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between border-b border-[#e2e2e2]\">","</div>",[(data && data.attributes && data.attributes.rating && Math.abs(data.attributes.rating))?_vm._ssrNode("<div class=\"swiper-slides-star relative -top-[5px] !mb-0 !gap-1\">","</div>",_vm._l((Math.abs(data.attributes.rating)),function(rt){return _c('icons-star',{key:rt})}),1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"py-[3px] pr-4\">","</div>",[_vm._ssrNode("<a target=\"_blank\" href=\"https://www.google.com/\" aria-label=\"Google Icon\" class=\"inline-block flex-none\">","</a>",[_c('icons-google-icon',{staticClass:"h-5 w-5 lg:h-[38px] lg:w-[38px]"})],1)])],2),_vm._ssrNode(" <div class=\"pb-2 pr-7 pt-[18px] md:pb-0\"><div class=\"line-clamp-6 text-sm font-light leading-[22px] text-[#333333]\">"+_vm._ssrEscape("\n                            "+_vm._s(data.attributes.description)+"\n                        ")+"</div></div>")],2)],2)])}),0):_vm._e(),_vm._ssrNode(" <div class=\"px-10 text-center md:px-4 lg:px-[97px] xl:px-4 xl:pt-5\">"+((!_vm.buttonUrl)?("<button type=\"button\" class=\"outline-btn border-[#000]/[0.08] px-14 py-[23px] text-sm uppercase -tracking-[-0.03px] text-[#00ADFF]\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.viewAll ? 'View less Reviews' : _vm.buttonText)+"\n        ")+"</button>"):("<a"+(_vm._ssrAttr("href",_vm.buttonUrl))+" class=\"outline-btn border-[#000]/[0.08] px-14 py-[23px] text-sm uppercase -tracking-[-0.03px] text-[#00ADFF]\">"+_vm._ssrEscape(_vm._s(_vm.buttonText))+"</a>"))+"</div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/home-about-client.vue?vue&type=template&id=6138d81d&

// EXTERNAL MODULE: ./components/common/common-toggle-content.vue + 4 modules
var common_toggle_content = __webpack_require__(149);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/home/home-about-client.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var home_about_clientvue_type_script_lang_js_ = ({
  components: {
    commonToggleContent: common_toggle_content["default"]
  },
  props: {
    title: {
      type: String,
      default: "WHAT OUR CLIENTS SAY <span class='text-primary'>ABOUT US</span>"
    },
    buttonText: {
      type: String,
      default: 'VIEW ALL REVIEWS'
    },
    buttonUrl: {
      type: String,
      default: ''
    },
    testimonials: {
      type: Array,
      default: () => [{
        id: 1,
        attributes: {
          name: 'Ted Van Samsung',
          description: "I'm an executive with global master franchising, and I have collaborated internationally with many entrepreneurs. Arleo ",
          profileImgUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/5H1y3ht65ezlbwrcC9qVLI/9ddba90f7019732147496420476b7b6a/Ted_Van_Samang.png',
          rating: 5,
          googleLink: 'https://google.com',
          yelpLink: null,
          companyLink: null,
          companyName: 'google'
        }
      }]
    }
  },
  data() {
    return {
      isMobile: false,
      ratingTextShowMore: false,
      viewAll: false,
      slider_options: {
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        touchRatio: 1,
        init: false,
        breakpoints: {
          640: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      },
      slider_data: []
    };
  },
  computed: {},
  mounted() {
    [...this.testimonials].forEach(da => {
      this.slider_data.push(da);
    });
    this.aboutClient.init();
  },
  methods: {
    truncateString(text) {
      const words = text.split(' ');
      let truncatedText = '';
      for (let i = 0; i < words.length; i++) {
        if (truncatedText.length + words[i].length <= 100) {
          truncatedText += words[i] + ' ';
        } else {
          break;
        }
      }
      return truncatedText.trim();
    },
    toggleReadMore(data) {
      data.attributes.readMoreOn = !data.attributes.readMoreOn;
    },
    stopAutoPlay() {
      this.aboutClient.autoplay.stop();
    },
    startAutoPlay() {
      this.aboutClient.autoplay.start();
    }
  }
});
// CONCATENATED MODULE: ./components/home/home-about-client.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_home_about_clientvue_type_script_lang_js_ = (home_about_clientvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/home/home-about-client.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_home_about_clientvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "68e09f88"
  
)

/* harmony default export */ var home_about_client = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsStar: __webpack_require__(234).default,IconsGoogleIcon: __webpack_require__(235).default})


/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/reviews.vue?vue&type=template&id=298fe88a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',[_vm._ssrNode("<section class=\"relative bg-cover bg-[right_48%_top] bg-no-repeat pb-9 pt-[164px] md:bg-[center_top_25%] xl:pb-[75px]\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (_vm.content.bannerImgUrl) + ")") }, null))+"><div class=\"absolute left-0 top-0 z-0 h-full w-[90%] bg-gradient-to-r from-[#2b3746] via-transparent\"></div> <div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[246px]\"></div> <div class=\"container relative z-10 lg:px-[97px] xl:px-4\"><div><p class=\"mb-[18px] border-l-[3px] border-primary pl-2.5 leading-5 text-[#FBFBFD]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerSubtitle))+"</p> <h1 class=\"mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px] xl:leading-[53px]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerTitle))+"</h1> <p class=\"max-w-[415px] font-normal leading-5 text-[#FBFBFD]\">"+(_vm._s(_vm.content.bannerDescription))+"</p></div></div></section> "),_c('common-banner-tab',{attrs:{"tabs":_vm.tabs}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"relative z-10 overflow-hidden bg-white py-[92px]\">","</section>",[_vm._ssrNode("<div id=\"featuredClient\" class=\"container relative\">","</div>",[_vm._ssrNode("<div class=\"flex flex-col items-center justify-between gap-10 md:flex-row\">","</div>",[_vm._ssrNode("<div class=\"grid flex-1 grid-cols-1\">","</div>",[_vm._ssrNode("<div><h3 class=\"border- inline-block border-b-[6px] border-primary text-[30px] font-bold uppercase leading-[47px] [&>span]:text-primary\">"+(_vm._s(_vm.content.section1Title))+"</h3></div> "),_vm._ssrNode("<div class=\"mt-8 flex gap-2 md:gap-9\">","</div>",[_vm._ssrNode("<span class=\"flex-none\">","</span>",[_c('nuxt-img',{attrs:{"src":"/assets/img/quote-one.png","alt":"QuoteOne","loading":"lazy","format":"webp"}})],1),_vm._ssrNode(" <p class=\"max-w-[377px] text-lg italic leading-[28px] -tracking-[0.04px] text-[#707070]\">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.content.section1Description)+"\n                        ")+"</p> "),_vm._ssrNode("<span class=\"flex-none self-end\">","</span>",[_c('nuxt-img',{attrs:{"src":"/assets/img/quote-two.png","alt":"QuoteTwo","loading":"lazy","format":"webp"}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-20 lg:mt-[204px]\">","</div>",[_vm._ssrNode("<p class=\"text-[21px] italic leading-[42px] -tracking-[0.04px] text-[#707070]\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Subtitle))+"</p> "),_c('nuxt-img',{staticClass:"mt-6",attrs:{"src":_vm.content.section1DescriptionImgUrl || '/assets/img/review_image.png',"alt":"Review Img","loading":"lazy","format":"webp"}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('nuxt-img',{attrs:{"src":_vm.content.section1ImgUrl,"alt":"Review Featured","loading":"lazy","format":"webp"}})],1)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"aboutUs\" class=\"pb-20 pt-14 md:pb-32\">","</section>",[_vm._ssrNode("<div class=\"container px-10 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-0 flex items-center justify-center gap-[5px] text-center md:mb-4 md:gap-8\"><div class=\"block h-px w-full bg-[#d5d5d5]\"></div> <h2 id=\"aboutUs\" class=\"shrink-0 text-[22px] font-bold uppercase leading-8 text-black md:text-3xl md:leading-[43px]\">"+(_vm._s(_vm.content.section2Title))+"</h2> <div class=\"block h-px w-full bg-[#d5d5d5]\"></div></div> "),_c('common-toggle-content',{attrs:{"content":_vm.content.section2Description}})],2)]),_vm._ssrNode(" "),_c('common-business-challenge',{attrs:{"title":_vm.content.section3Title,"image":_vm.content.section3ImgUrl,"values":_vm.section3Data,"button-text":_vm.content.CTA1ButtonText,"button-url":_vm.content.CTA1ButtonLink}}),_vm._ssrNode(" "),_c('common-contact-us',{attrs:{"id":"videoTestimonials","video-thumbnail-u-r-l":_vm.content.video1ThumbnailUrl,"button-title":_vm.content.video1ButtonText,"button-u-r-l":_vm.content.video1ButtonLink,"video-u-r-l":_vm.content.video1Url,"title":_vm.content.video1Title}}),_vm._ssrNode(" "),_c('home-about-client',{attrs:{"title":_vm.content.section5Title,"testimonials":_vm.section5Data}}),_vm._ssrNode(" "),_c('common-tell-more-about-projects',{attrs:{"featured-companies":_vm.section6LogoUrls,"tell-us-more-data":_vm.section6Data,"tell-us-more-title":_vm.content.section6Title,"tell-use-more-subtitle":_vm.content.section6Subtitle,"image-url":_vm.content.section6ImgUrl}}),_vm._ssrNode(" "),_c('common-client-words',{attrs:{"title":_vm.content.section7Title,"description":_vm.content.section7Description,"testimonials":_vm.section7Data}}),_vm._ssrNode(" "),_c('common-interested-service',{attrs:{"id":"buyService","background-image":_vm.content.section8ImgUrl,"subtitle":_vm.content.section8Subtitle,"title":_vm.content.section8Title,"description":_vm.content.section8Description,"button-link":_vm.content.section8ButtonLink,"button-title":_vm.content.section8ButtonText}}),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('common-our-team',{staticClass:"pb-10 md:!pb-0",attrs:{"title":_vm.content.section9Title,"description":_vm.content.section9Description,"teams":_vm.section9Data}})],1),_vm._ssrNode(" "),_c('common-faq',{attrs:{"title":_vm.content.section10Title,"description":_vm.content.section10Description,"faqs":_vm.section10Data}}),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"img-url":_vm.readyToTalkForm.imgUrl,"service-options":_vm.readyToTalkForm.services.data,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle}}),_vm._ssrNode(" "),_c('common-brand-logo',{attrs:{"logos":_vm.logoSlider}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/reviews.vue?vue&type=template&id=298fe88a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/reviews.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var reviewsvue_type_script_lang_js_ = ({
  async asyncData(context) {
    try {
      const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/reviews-page?populate=deep`);
      return {
        content: context.$helper.parseData(data.data)
      };
    } catch {}
  },
  data() {
    return {
      isLoadingMoreConsultants: false,
      isShowReadMore: false,
      tabs: [{
        id: 'featuredClient',
        title: 'Featured Client'
      }, {
        id: 'aboutUs',
        title: 'About Us'
      }, {
        id: 'videoTestimonials',
        title: 'Video Testimonials'
      }, {
        id: 'ourClientsWords',
        title: 'Client Reviews'
      }, {
        id: 'buyService',
        title: 'Buy a Service'
      }, {
        id: 'faqs',
        title: 'FAQs'
      }, {
        id: 'readyToTalk',
        title: 'Ready to Talk'
      }]
    };
  },
  head() {
    var _this$content, _this$content$metaFie, _this$content2, _this$content2$metaFi, _this$content3, _this$content3$metaFi, _this$content4, _this$content4$metaFi, _this$content5, _this$content5$metaFi, _this$content6, _this$content6$metaFi, _this$content7, _this$content7$metaFi, _this$content8, _this$content8$metaFi, _this$content9, _this$content9$metaFi, _this$content10, _this$content10$metaF, _this$content11, _this$content11$metaF;
    return {
      title: (_this$content = this.content) === null || _this$content === void 0 ? void 0 : (_this$content$metaFie = _this$content.metaFields[0]) === null || _this$content$metaFie === void 0 ? void 0 : _this$content$metaFie.title,
      link: [{
        rel: 'canonical',
        href: (_this$content2 = this.content) !== null && _this$content2 !== void 0 && (_this$content2$metaFi = _this$content2.metaFields[0]) !== null && _this$content2$metaFi !== void 0 && _this$content2$metaFi.canonicalUrl ? (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.content.metaFields[0].canonicalUrl : (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path
      }],
      meta: [{
        name: 'robots',
        content: 'index, all'
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: (_this$content3 = this.content) === null || _this$content3 === void 0 ? void 0 : (_this$content3$metaFi = _this$content3.metaFields[0]) === null || _this$content3$metaFi === void 0 ? void 0 : _this$content3$metaFi.title
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: (_this$content4 = this.content) === null || _this$content4 === void 0 ? void 0 : (_this$content4$metaFi = _this$content4.metaFields[0]) === null || _this$content4$metaFi === void 0 ? void 0 : _this$content4$metaFi.socialImgUrl
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: (_this$content5 = this.content) === null || _this$content5 === void 0 ? void 0 : (_this$content5$metaFi = _this$content5.metaFields[0]) === null || _this$content5$metaFi === void 0 ? void 0 : _this$content5$metaFi.description
      }, {
        hid: 'description',
        property: 'description',
        name: 'description',
        content: (_this$content6 = this.content) === null || _this$content6 === void 0 ? void 0 : (_this$content6$metaFi = _this$content6.metaFields[0]) === null || _this$content6$metaFi === void 0 ? void 0 : _this$content6$metaFi.description
      }, {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: (_this$content7 = this.content) === null || _this$content7 === void 0 ? void 0 : (_this$content7$metaFi = _this$content7.metaFields[0]) === null || _this$content7$metaFi === void 0 ? void 0 : _this$content7$metaFi.socialImgUrl
      }, {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: (_this$content8 = this.content) === null || _this$content8 === void 0 ? void 0 : (_this$content8$metaFi = _this$content8.metaFields[0]) === null || _this$content8$metaFi === void 0 ? void 0 : _this$content8$metaFi.description
      }, {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: (_this$content9 = this.content) === null || _this$content9 === void 0 ? void 0 : (_this$content9$metaFi = _this$content9.metaFields[0]) === null || _this$content9$metaFi === void 0 ? void 0 : _this$content9$metaFi.title
      }, {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: (_this$content10 = this.content) === null || _this$content10 === void 0 ? void 0 : (_this$content10$metaF = _this$content10.metaFields[0]) === null || _this$content10$metaF === void 0 ? void 0 : _this$content10$metaF.socialImgUrl
      }, {
        hid: 'keywords',
        property: 'keywords',
        name: 'keywords',
        content: (_this$content11 = this.content) === null || _this$content11 === void 0 ? void 0 : (_this$content11$metaF = _this$content11.metaFields[0]) === null || _this$content11$metaF === void 0 ? void 0 : _this$content11$metaF.keywords
      }]
    };
  },
  computed: {
    section3Data() {
      var _this$content12, _this$content12$secti;
      return ((_this$content12 = this.content) === null || _this$content12 === void 0 ? void 0 : (_this$content12$secti = _this$content12.section3Component) === null || _this$content12$secti === void 0 ? void 0 : _this$content12$secti.data) || [];
    },
    section4Data() {
      var _this$content13, _this$content13$secti;
      return ((_this$content13 = this.content) === null || _this$content13 === void 0 ? void 0 : (_this$content13$secti = _this$content13.section4Component) === null || _this$content13$secti === void 0 ? void 0 : _this$content13$secti.data) || [];
    },
    section5Data() {
      var _this$content14, _this$content14$secti;
      return ((_this$content14 = this.content) === null || _this$content14 === void 0 ? void 0 : (_this$content14$secti = _this$content14.section5Component) === null || _this$content14$secti === void 0 ? void 0 : _this$content14$secti.data) || [];
    },
    section6Data() {
      var _this$content15, _this$content15$secti;
      return ((_this$content15 = this.content) === null || _this$content15 === void 0 ? void 0 : (_this$content15$secti = _this$content15.section6Component) === null || _this$content15$secti === void 0 ? void 0 : _this$content15$secti.data) || [];
    },
    section6LogoUrls() {
      var _this$content16, _this$content16$secti;
      return ((_this$content16 = this.content) === null || _this$content16 === void 0 ? void 0 : (_this$content16$secti = _this$content16.section6LogoUrls) === null || _this$content16$secti === void 0 ? void 0 : _this$content16$secti.data) || [];
    },
    section7Data() {
      var _this$content17, _this$content17$secti;
      return ((_this$content17 = this.content) === null || _this$content17 === void 0 ? void 0 : (_this$content17$secti = _this$content17.section7Component) === null || _this$content17$secti === void 0 ? void 0 : _this$content17$secti.data) || [];
    },
    section9Data() {
      var _this$content18, _this$content18$secti;
      return ((_this$content18 = this.content) === null || _this$content18 === void 0 ? void 0 : (_this$content18$secti = _this$content18.section9Component) === null || _this$content18$secti === void 0 ? void 0 : _this$content18$secti.data) || [];
    },
    section10Data() {
      var _this$content19, _this$content19$secti;
      return ((_this$content19 = this.content) === null || _this$content19 === void 0 ? void 0 : (_this$content19$secti = _this$content19.section10Component) === null || _this$content19$secti === void 0 ? void 0 : _this$content19$secti.data) || [];
    },
    readyToTalkForm() {
      var _this$content20, _this$content20$ready, _this$content20$ready2;
      return ((_this$content20 = this.content) === null || _this$content20 === void 0 ? void 0 : (_this$content20$ready = _this$content20.readyToTalkForm) === null || _this$content20$ready === void 0 ? void 0 : (_this$content20$ready2 = _this$content20$ready.data) === null || _this$content20$ready2 === void 0 ? void 0 : _this$content20$ready2.attributes) || {
        services: {
          data: []
        }
      };
    },
    logoSlider() {
      var _this$content21, _this$content21$logoS, _this$content21$logoS2, _this$content21$logoS3;
      return ((_this$content21 = this.content) === null || _this$content21 === void 0 ? void 0 : (_this$content21$logoS = _this$content21.logoSlider) === null || _this$content21$logoS === void 0 ? void 0 : (_this$content21$logoS2 = _this$content21$logoS.data) === null || _this$content21$logoS2 === void 0 ? void 0 : (_this$content21$logoS3 = _this$content21$logoS2.attributes) === null || _this$content21$logoS3 === void 0 ? void 0 : _this$content21$logoS3.logoUrls) || [];
    }
  }
});
// CONCATENATED MODULE: ./pages/reviews.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_reviewsvue_type_script_lang_js_ = (reviewsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/reviews.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_reviewsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6e8d9a86"
  
)

/* harmony default export */ var reviews = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonBannerTab: __webpack_require__(161).default,CommonToggleContent: __webpack_require__(149).default,CommonBusinessChallenge: __webpack_require__(186).default,CommonContactUs: __webpack_require__(139).default,HomeAboutClient: __webpack_require__(252).default,CommonTellMoreAboutProjects: __webpack_require__(177).default,CommonClientWords: __webpack_require__(169).default,CommonInterestedService: __webpack_require__(145).default,CommonOurTeam: __webpack_require__(174).default,CommonFaq: __webpack_require__(168).default,CommonReadytotalk: __webpack_require__(140).default,CommonBrandLogo: __webpack_require__(164).default})


/***/ })

};;
//# sourceMappingURL=reviews.js.map