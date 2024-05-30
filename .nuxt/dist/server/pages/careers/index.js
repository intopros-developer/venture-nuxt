exports.ids = [131,11,14,16,29,30,32,33,34,39,41,42,44,46,77,82,84,97,103,104,105,109,114];
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

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-featured-services.vue?vue&type=template&id=331d0ab2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flex flex-col md:flex-row"},[_vm._ssrNode("<div class=\"w-full flex-none md:mx-auto lg:max-w-[332px] xl:max-w-[425px]\">","</div>",[(_vm.services.length)?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<ul class=\"md:space-y-4\">","</ul>",[(_vm.services)?_vm._l((_vm.services),function(service,index){return _vm._ssrNode("<li"+(_vm._ssrClass("py-4 -tracking-[0.04px] transition-all duration-150 hover:text-[#1A9CEA] md:py-2.5 md:text-[19px] lg:hover:border-[#1A9CEA]",[_vm.serviceTitle === service.attributes.title ? 'border-b border-[#BFBFBF]/40 font-bold text-[#1A9CEA] lg:border-[#1A9CEA]' : 'border-b border-[#BFBFBF]/40']))+">","</li>",[_vm._ssrNode("<div class=\"flex cursor-pointer items-center -tracking-[0.04px]\">","</div>",[_vm._ssrNode(_vm._ssrEscape("\n                            "+_vm._s(service.attributes.title)+"\n                            ")),(_vm.serviceTitle === service.attributes.title)?_c('icons-minus',{staticClass:"ml-auto block !h-5 !w-5 lg:hidden"}):_c('icons-plus',{staticClass:"ml-auto block !h-5 !w-5 lg:hidden"})],2),_vm._ssrNode(" "),_c('VueSlideToggle',{staticClass:"block lg:hidden",attrs:{"open":_vm.serviceTitle === service.attributes.title,"tag":"section","duration":500}},[(_vm.serviceDescription)?_c('div',{attrs:{"id":("service-" + index)}},[_c('div',{staticClass:"bg-white p-5 shadow-[0_3px_6px_rgba(0,0,0,0.16)] lg:px-[30px] lg:pb-16 lg:pt-[30px]"},[(!_vm.serviceDescription.attributes.descriptionVideoUrl && _vm.serviceDescription.attributes.descriptionImageUrl)?_c('nuxt-img',{staticClass:"h-[180px] w-full object-cover sm:h-[280px] lg:h-[380px]",attrs:{"format":"webp","src":("" + (_vm.serviceDescription.attributes.descriptionImageUrl)),"alt":service.attributes.title,"loading":"lazy"}}):(_vm.serviceDescription.attributes.descriptionVideoUrl)?_c('div',{ref:"video",refInFor:true,staticClass:"relative h-[180px] w-full bg-cover bg-center bg-no-repeat sm:h-[280px] lg:h-[380px]",style:({ backgroundImage: ("url(" + (_vm.serviceDescription.attributes.descriptionImageUrl) + ")") }),attrs:{"lazyload":""}},[(!_vm.showOverlay)?_c('iframe',{staticClass:"wistia_embed",attrs:{"src":_vm.iframeURL,"title":"meeting-video","allow":"autoplay; fullscreen","allowtransparency":"true","frameborder":"0","scrolling":"no","name":"wistia_embed","msallowfullscreen":"","width":"100%","height":_vm.videoHeight}}):_vm._e(),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showOverlay),expression:"showOverlay"}],staticClass:"absolute inset-x-0 top-1/2 z-10 mx-auto w-[113px] -translate-y-1/2 bg-primary/[0.71] px-11 py-5 group-hover:bg-primary",on:{"click":function($event){return _vm.play()}}},[_c('icons-play')],1)]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"pt-5 md:pt-[29px]"},[(_vm.serviceDescription.attributes.descriptionTitle)?_c('p',{staticClass:"text-xl text-[#2F2F2F] md:text-2xl lg:text-3xl"},[_vm._v(_vm._s(_vm.serviceDescription.attributes.descriptionTitle))]):_vm._e(),_vm._v(" "),_c('common-custom-strapi-display',{attrs:{"classes":"pt-5 text-lg font-normal text-[#4D4D4D]","data":_vm.serviceDescription.attributes.descriptionPara}}),_vm._v(" "),(_vm.$helper.isInternalUrl(_vm.serviceDescription.attributes.descriptionLinkUrl))?_c('nuxt-link',{staticClass:"block pt-6 font-semibold text-[#0DA1F1]",attrs:{"to":_vm.serviceDescription.attributes.descriptionLinkUrl}},[_vm._v("\n                                            "+_vm._s(_vm.serviceDescription.attributes.descriptionLink))]):_c('a',{staticClass:"block pt-6 font-semibold text-[#0DA1F1]",attrs:{"target":"_blank","href":_vm.serviceDescription.attributes.descriptionLinkUrl,"aria-label":"Consulting"}},[_vm._v("\n                                            "+_vm._s(_vm.serviceDescription.attributes.descriptionLink))])],1)],1)]):_vm._e()])],2)}):_vm._e()],2)]):_vm._e()]),_vm._ssrNode(" "),(_vm.serviceDescription && _vm.services.length && !_vm.isMobileView)?_vm._ssrNode("<div class=\"hidden lg:block\">","</div>",[_vm._ssrNode("<div class=\"bg-white p-5 shadow-[0_3px_6px_rgba(0,0,0,0.16)] md:px-8 md:pb-[57px] md:pt-8\">","</div>",[(!_vm.serviceDescription.attributes.descriptionVideoUrl && _vm.serviceDescription.attributes.descriptionImageUrl)?_c('nuxt-img',{staticClass:"h-[180px] w-full object-cover sm:h-[280px] lg:h-[380px]",attrs:{"src":("" + (_vm.serviceDescription.attributes.descriptionImageUrl)),"format":"webp","alt":_vm.serviceDescription.attributes.descriptionTitle,"loading":"lazy"}}):(_vm.serviceDescription.attributes.descriptionVideoUrl)?_c('div',{ref:"video",staticClass:"relative h-[180px] w-full bg-cover bg-center bg-no-repeat sm:h-[280px] lg:h-[380px]",style:({ backgroundImage: ("url(" + (_vm.serviceDescription.attributes.descriptionImageUrl) + ")") }),attrs:{"lazyload":""}},[(!_vm.showOverlay)?_c('iframe',{staticClass:"wistia_embed",attrs:{"src":_vm.iframeURL,"title":"meeting-video","allow":"autoplay; fullscreen","allowtransparency":"true","frameborder":"0","scrolling":"no","name":"wistia_embed","msallowfullscreen":"","width":"100%","height":_vm.videoHeight}}):_vm._e(),_vm._v(" "),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showOverlay),expression:"showOverlay"}],staticClass:"absolute inset-x-0 top-1/2 z-10 mx-auto w-[113px] -translate-y-1/2 bg-primary/[0.71] px-11 py-5 group-hover:bg-primary",on:{"click":function($event){return _vm.play()}}},[_c('icons-play')],1)]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pt-5 md:pt-[29px]\">","</div>",[_vm._ssrNode(((_vm.serviceDescription.attributes.descriptionTitle)?("<p class=\"text-xl -tracking-[-0.06px] text-[#2F2F2F] md:text-2xl lg:text-[32px]\">"+_vm._ssrEscape(_vm._s(_vm.serviceDescription.attributes.descriptionTitle))+"</p>"):"<!---->")+" "),_c('common-custom-strapi-display',{attrs:{"classes":"pt-[15px] text-lg leading-6 -tracking-[-0.03px] text-[#4D4D4D]","data":_vm.serviceDescription.attributes.descriptionPara}}),_vm._ssrNode(" "),(_vm.$helper.isInternalUrl(_vm.serviceDescription.attributes.descriptionLinkUrl))?_c('nuxt-link',{staticClass:"block pt-6 font-semibold text-[#0DA1F1]",attrs:{"to":_vm.serviceDescription.attributes.descriptionLinkUrl}},[_vm._v("\n                    "+_vm._s(_vm.serviceDescription.attributes.descriptionLink))]):_c('a',{staticClass:"block pt-6 font-semibold text-[#0DA1F1]",attrs:{"target":"_blank","href":_vm.serviceDescription.attributes.descriptionLinkUrl,"aria-label":"Consulting"}},[_vm._v(" "+_vm._s(_vm.serviceDescription.attributes.descriptionLink))])],2)],2)]):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-featured-services.vue?vue&type=template&id=331d0ab2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-featured-services.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_featured_servicesvue_type_script_lang_js_ = ({
  props: {
    services: {
      type: Array,
      default: [{
        id: 1,
        attributes: {
          title: 'Management Consulting',
          descriptionTitle: 'Take your business to the next level',
          descriptionPara: 'Our management consultants primarily engage companies as a long term trusted adviser. Our experts consultants assist with collecting information and data in order to make impactful strategic decisions. We partner with corporations and their leaders to discover and resolve some of their most critical business challenges. Our consultants enjoy what they do and really value their work.',
          descriptionLink: null,
          descriptionLinkUrl: null,
          DescriptionMediaType: null,
          descriptionImageUrl: 'background-image: url("//images.ctfassets.net/koyrlvjc3wvc/4JEk9Azdv4ElA58Sh2NXDq/b45db57e747877f1a4721da923e1d986/video-thumbnail.jpg");',
          descriptionVideoUrl: null
        }
      }, {
        id: 2,
        attributes: {
          title: 'Business Strategy',
          descriptionTitle: 'Business Strategy',
          descriptionPara: 'From business plans, to financing strategy, to digital transformations strategies we help companies rebrand their product and services for new demographics. We help you advance quickly amid great uncertainty. With the freedom to adjust as circumstances change, you can build value now as you work toward your future goals. Our strategies have the flexibility to adapt to changes in technology, shifting customer demands, and market conditions. We can assist you with making crucial decisions that will successfully grow your business.',
          descriptionLink: null,
          descriptionLinkUrl: null,
          DescriptionMediaType: null,
          descriptionImageUrl: null,
          descriptionVideoUrl: null
        }
      }, {
        id: 3,
        attributes: {
          title: 'Legal Advisory',
          descriptionTitle: 'Legal Advisory',
          descriptionPara: 'We provide legal counsel to small to large corporations. Our legal advisors focus on Intellectual property including patents, trademarks, copyrights, and trade secrets., Securities law, and technology law.',
          descriptionLink: null,
          descriptionLinkUrl: null,
          DescriptionMediaType: null,
          descriptionImageUrl: null,
          descriptionVideoUrl: null
        }
      }]
    }
  },
  data() {
    return {
      serviceTitle: 'Management Consulting',
      videoHeight: 380,
      playing: false,
      isMobileView: false,
      activeServiceIndex: null
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
    serviceDescription() {
      return this.services.find(service => service.attributes.title === this.serviceTitle);
    },
    showOverlay() {
      return !this.playing;
    },
    iframeURL() {
      if (this.serviceDescription.attributes) {
        return this.serviceDescription.attributes.descriptionVideoUrl;
      } else {
        return '';
      }
    },
    schemaMarkup() {
      return this.generateSchema(this.$props.services);
    }
  },
  watch: {
    serviceTitle: {
      handler() {
        if (this.isMobileView) {
          setTimeout(() => {
            let domRect = document.querySelector(`#service-${this.activeServiceIndex}`);
            if (domRect !== null) {
              domRect = document.querySelector(`#service-${this.activeServiceIndex}`).getBoundingClientRect();
              window.scrollTo({
                top: domRect.top + document.documentElement.scrollTop - 150,
                behavior: 'smooth'
              });
            }
          }, 600);
        }
      },
      deep: true
    }
  },
  mounted() {
    if (window.innerWidth <= 576) {
      this.videoHeight = 180;
      this.serviceTitle = '';
    } else if (window.innerWidth <= 1023) {
      this.videoHeight = 280;
      this.serviceTitle = '';
    } else {
      var _this$services$, _this$services$$attri;
      this.serviceTitle = (_this$services$ = this.services[0]) === null || _this$services$ === void 0 ? void 0 : (_this$services$$attri = _this$services$.attributes) === null || _this$services$$attri === void 0 ? void 0 : _this$services$$attri.title;
      this.videoHeight = 380;
    }
    this.isMobileView = !(window.innerWidth > 1023);
  },
  methods: {
    showDescription(title, index) {
      if (window.innerWidth <= 768) {
        this.serviceTitle = this.serviceTitle === title ? '' : title;
        this.activeServiceIndex = index;
      } else {
        this.serviceTitle = title;
      }
      if (this.playing) {
        this.playing = false;
      }
    },
    play() {
      this.playing = true;
      setTimeout(() => {
        var _this$serviceDescript, _this$serviceDescript2;
        const video = window.Wistia.api(this === null || this === void 0 ? void 0 : (_this$serviceDescript = this.serviceDescription) === null || _this$serviceDescript === void 0 ? void 0 : (_this$serviceDescript2 = _this$serviceDescript.attributes) === null || _this$serviceDescript2 === void 0 ? void 0 : _this$serviceDescript2.descriptionVideoUrl);
        if (video) {
          video.play();
          video.bind('end', () => {
            this.playing = false;
            return video.unbind('end', () => {});
          });
        }
      }, 250);
    },
    generateSchema(data) {
      return data.map(service => {
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: service.attributes.title,
          provider: {
            '@type': 'Organization',
            name: 'Ventureplans™'
          },
          description: service.attributes.descriptionPara,
          url: service.attributes.descriptionLinkUrl,
          image: service.attributes.descriptionImageUrl,
          name: service.attributes.descriptionTitle
        };
      });
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-featured-services.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_featured_servicesvue_type_script_lang_js_ = (common_featured_servicesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-featured-services.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_featured_servicesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1671d8fc"
  
)

/* harmony default export */ var common_featured_services = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsMinus: __webpack_require__(159).default,IconsPlus: __webpack_require__(160).default,IconsPlay: __webpack_require__(141).default,CommonCustomStrapiDisplay: __webpack_require__(150).default})


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(184);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("418a7f8d", content, true, context)
};

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-work-at-the-best-place.vue?vue&type=template&id=e5d6c652&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-10 md:py-16 lg:pt-[128px]"},[_vm._ssrNode("<div id=\"employmentAtVenturePlan\" class=\"container max-w-[990px] px-10 md:px-4 lg:px-[97px] xl:px-4\" data-v-e5d6c652>","</div>",[_vm._ssrNode("<div class=\"grid w-full grid-cols-1 gap-6 bg-white p-5 shadow-[0px_1px_8px_rgba(0,0,0,0.12)] sm:gap-6 md:grid-cols-2 md:px-8 md:py-20 xl:gap-20 xl:pb-[97px] xl:pl-[72px] xl:pr-11 xl:pt-[71px]\" data-v-e5d6c652>","</div>",[_vm._ssrNode("<div data-v-e5d6c652>","</div>",[_vm._ssrNode("<h3 class=\"mb-2.5 text-center text-[22px] font-bold uppercase leading-[30px] text-black md:text-left md:leading-[39px] xl:text-[28px] [&>span>br]:block [&>span>br]:md:hidden [&>span]:text-primary\" data-v-e5d6c652>"+(_vm._s(_vm.title))+"</h3> <p class=\"mb-7 text-xs font-normal leading-5 -tracking-[0.03px] text-[#353535] md:mb-11 lg:max-w-sm lg:text-sm xl:text-base xl:leading-[24px]\" data-v-e5d6c652>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.description)+"\n                ")+"</p> "),(_vm.$helper.isInternalUrl(_vm.buttonUrl))?_c('nuxt-link',{staticClass:"b-btn hidden text-xs md:block lg:max-w-[322px] lg:py-6",attrs:{"to":_vm.buttonUrl}},[_vm._v(_vm._s(_vm.buttonTitle))]):_c('a',{staticClass:"b-btn hidden text-xs md:block lg:max-w-[322px] lg:py-6",attrs:{"href":_vm.buttonUrl,"target":"_blank"}},[_vm._v(_vm._s(_vm.buttonTitle))])],2),_vm._ssrNode(" "),_c('nuxt-img',{staticClass:"clip-none",attrs:{"src":_vm.imgUrl,"loading":"lazy","alt":"Worl at the best place","format":"webp"}}),_vm._ssrNode(" <a"+(_vm._ssrAttr("href",_vm.buttonUrl))+" class=\"b-btn mx-auto text-xs md:hidden lg:max-w-[322px] lg:py-6\" data-v-e5d6c652>"+_vm._ssrEscape(_vm._s(_vm.buttonTitle))+"</a>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-work-at-the-best-place.vue?vue&type=template&id=e5d6c652&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-work-at-the-best-place.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_work_at_the_best_placevue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: 'WORK AT THE <span class="text-primary">BEST PLACE</span>'
    },
    description: {
      type: String,
      default: 'We offer a diverse environment for consultants who want to expand their knowledge and experience working with Some of the best talents and innovative ideas in the world.'
    },
    imgUrl: {
      type: String,
      default: 'https://images.ctfassets.net/koyrlvjc3wvc/4tyXkBS5yBBWxIucd0xDLs/c95a6fb1c7db45141872da1dc2dcd8ce/iStock-1191132586.jpg'
    },
    buttonTitle: {
      type: String,
      default: 'Apply for Interview'
    },
    buttonUrl: {
      type: String,
      default: '/careers'
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-work-at-the-best-place.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_work_at_the_best_placevue_type_script_lang_js_ = (common_work_at_the_best_placevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-work-at-the-best-place.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(183)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_work_at_the_best_placevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e5d6c652",
  "d22445ee"
  
)

/* harmony default export */ var common_work_at_the_best_place = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_work_at_the_best_place_vue_vue_type_style_index_0_id_e5d6c652_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_work_at_the_best_place_vue_vue_type_style_index_0_id_e5d6c652_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_work_at_the_best_place_vue_vue_type_style_index_0_id_e5d6c652_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_work_at_the_best_place_vue_vue_type_style_index_0_id_e5d6c652_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_work_at_the_best_place_vue_vue_type_style_index_0_id_e5d6c652_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".clip-none[data-v-e5d6c652]{-webkit-clip-path:polygon(0 0,100% 0,100% 100%,14% 100%);clip-path:polygon(0 0,100% 0,100% 100%,14% 100%)}@media (max-width:768px){.clip-none[data-v-e5d6c652]{-webkit-clip-path:none!important;clip-path:none!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-banner-tab.vue?vue&type=template&id=3b7fa2c0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"sticky z-20 block border-b-2 border-[#CFCFCF] bg-white",class:_vm.scrollPosition === 'up' ? 'top-[56px] md:top-[58px] xl:top-[114px]' : 'top-[56px] lg:top-[55px] xl:top-[54px]'},[_vm._ssrNode("<div class=\"container relative lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between gap-2\">","</div>",[_vm._ssrNode("<div id=\"banner_header_tab\" class=\"w-[940px] overflow-x-auto overflow-y-hidden lg:overflow-visible\">","</div>",[_vm._ssrNode("<ul class=\"pb-0.5 lg:pb-0\">","</ul>",[_c('scrollactive',{staticClass:"my-nav flex items-center gap-6 text-[11px] font-medium leading-[13px] -tracking-[-0.02px] text-[#353535] xl:gap-8 xl:text-[13px] xl:leading-5 xl:-tracking-[-0.03px]",attrs:{"modify-url":false,"offset":_vm.scrollPosition === 'up' ? 200 : 160,"scroll-offset":_vm.scrollPosition === 'up' ? 200 : 160,"exact":true},on:{"itemchanged":_vm.onItemChanged}},[_c('li',[_c('popper',{ref:"role",attrs:{"trigger":"click","options":{
                                    placement: 'bottom-start',
                                    modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                    preventOverflow: {
                                        padding: 0,
                                    },
                                }},on:{"show":function($event){_vm.isOpenFindRole = true},"hide":function($event){_vm.isOpenFindRole = false}}},[_c('div',{staticClass:"popper absolute !left-0 !top-11 z-[10] max-w-[180px] border border-[#ededed] bg-white !shadow-[0_3px_6px_rgba(0,0,0,0.16)] lg:!left-11 lg:!top-[1px]"},[_c('ul',{staticClass:"text-base -tracking-[0.03px] text-[#030303]"},[_c('li',{staticClass:"border-b border-[#f1f1f1]"},[_c('nuxt-link',{staticClass:"group flex items-center gap-2 px-2.5 py-3.5 text-[11px] text-xs font-light text-[#030303] transition-all duration-300 hover:bg-gray-100 hover:bg-primary hover:text-white",attrs:{"to":_vm.localePath('/careers/contact-form')},on:{"click":function($event){$event.stopPropagation();return _vm.$refs.share.doClose()}}},[_c('p',[_vm._v(_vm._s(_vm.$t('summer_internship')))])])],1),_vm._v(" "),_c('li',{staticClass:"border-b border-[#f1f1f1]"},[_c('nuxt-link',{staticClass:"group flex items-center gap-2 px-2.5 py-3.5 text-[11px] text-xs font-light text-[#030303] transition-all duration-300 hover:bg-gray-100 hover:bg-primary hover:text-white",attrs:{"to":_vm.localePath('/careers/contact-form')},on:{"click":function($event){$event.stopPropagation();return _vm.$refs.share.doClose()}}},[_c('p',[_vm._v(_vm._s(_vm.$t('associate_consultant_internship')))])])],1),_vm._v(" "),_c('li',{staticClass:"border-b border-[#f1f1f1]"},[_c('nuxt-link',{staticClass:"group flex items-center gap-2 px-2.5 py-3.5 text-[11px] text-xs font-light text-[#030303] transition-all duration-300 hover:bg-gray-100 hover:bg-primary hover:text-white",attrs:{"to":_vm.localePath('/careers/contact-form')},on:{"click":function($event){$event.stopPropagation();return _vm.$refs.share.doClose()}}},[_c('p',[_vm._v(_vm._s(_vm.$t('consultant_jd_phd')))])])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{staticClass:"group flex items-center gap-2 px-2.5 py-3.5 text-[11px] text-xs font-light text-[#030303] transition-all duration-300 hover:bg-gray-100 hover:bg-primary hover:text-white",attrs:{"to":_vm.localePath('/careers/contact-form')},on:{"click":function($event){$event.stopPropagation();return _vm.$refs.share.doClose()}}},[_c('p',[_vm._v(_vm._s(_vm.$t('associate_consultant')))])])],1),_vm._v(" "),_c('li',[_c('nuxt-link',{staticClass:"group flex items-center gap-2 px-2.5 py-3.5 text-[11px] text-xs font-light text-[#030303] transition-all duration-300 hover:bg-gray-100 hover:bg-primary hover:text-white",attrs:{"to":_vm.localePath('/careers/contact-form')},on:{"click":function($event){$event.stopPropagation();return _vm.$refs.share.doClose()}}},[_c('p',[_vm._v(_vm._s(_vm.$t('professional_and_functional')))])])],1)])]),_vm._v(" "),_c('button',{staticClass:"flex items-center justify-center whitespace-nowrap py-4 hover:text-primary",class:{ '!text-primary': _vm.isOpenFindRole },attrs:{"slot":"reference","aria-label":_vm.$t('find_roles')},slot:"reference"},[_vm._v("\n                                    "+_vm._s(_vm.$t('find_roles'))+"\n                                    "),_c('icons-downarrow',{staticClass:"ml-1 rotate-0 text-primary",class:{ '!rotate-180': _vm.isOpenFindRole }})],1)])],1),_vm._v(" "),_vm._l((_vm.tabs),function(tab){return _c('li',{key:tab.id},[_c('a',{staticClass:"scrollactive-item inline-block whitespace-nowrap py-4 hover:text-primary",class:{ 'relative text-primary before:absolute before:-bottom-[2px] before:left-0 before:h-[3px] before:w-full before:bg-primary': _vm.activeId === tab.id },attrs:{"id":("tab_" + (tab.id)),"href":("#" + (tab.id))}},[_vm._v("\n                                "+_vm._s(_vm.$t(tab.title))+"\n                            ")])])})],2)],1)]),_vm._ssrNode(" "),_c('common-share',{attrs:{"is-show-save-btn":true}})],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/career/career-banner-tab.vue?vue&type=template&id=3b7fa2c0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-banner-tab.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var career_banner_tabvue_type_script_lang_js_ = ({
  data() {
    return {
      lastScrollTop: 0,
      scrollPosition: null,
      activeId: '',
      isOpenFindRole: false,
      tabs: [{
        id: 'careersAtVenturePlans',
        title: 'careers_at_venture_plans'
      }, {
        id: 'overview',
        title: 'overview'
      }, {
        id: 'professionalFunctionalPositions',
        title: 'professional_nd_functional_positions'
      }, {
        id: 'ourFounder',
        title: 'our_founder'
      }, {
        id: 'readyToTalk',
        title: 'ready_to_talk'
      }, {
        id: 'faqs',
        title: 'faqs'
      }]
    };
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handleScroll(), false);
  },
  mounted() {
    this.lastScrollTop = 0;
    document.addEventListener('scroll', this.handleScroll);
    document.addEventListener('scroll', () => {
      var _this$$refs, _this$$refs$role;
      (_this$$refs = this.$refs) === null || _this$$refs === void 0 ? void 0 : (_this$$refs$role = _this$$refs.role) === null || _this$$refs$role === void 0 ? void 0 : _this$$refs$role.doClose();
    });
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
// CONCATENATED MODULE: ./components/career/career-banner-tab.vue?vue&type=script&lang=js&
 /* harmony default export */ var career_career_banner_tabvue_type_script_lang_js_ = (career_banner_tabvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/career/career-banner-tab.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  career_career_banner_tabvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "df73f4f6"
  
)

/* harmony default export */ var career_banner_tab = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsDownarrow: __webpack_require__(154).default,CommonShare: __webpack_require__(143).default})


/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-questionnaire-content.vue?vue&type=template&id=63c864eb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container"},[_c('div',{directives:[{name:"swiper",rawName:"v-swiper:dynamicSlider",value:(_vm.sliderOptions),expression:"sliderOptions",arg:"dynamicSlider"}],staticClass:"swiper"},[_vm._ssrNode("<div class=\"swiper-wrapper sm:min-h-full\">","</div>",_vm._l((_vm.currentContents),function(consultant,i){return _vm._ssrNode("<div class=\"swiper-slide flex flex-col bg-white px-6 pb-[46px] pt-4 sm:min-h-full sm:justify-between\">","</div>",[_vm._ssrNode("<h5 class=\"min-h-[42px] font-semibold capitalize leading-[18px] tracking-[0.42px] text-[#030303]\">"+_vm._ssrEscape(_vm._s(consultant.title))+"</h5> "),_vm._ssrNode("<div class=\"mt-[9px] h-[151px] overflow-hidden shadow-[0_3px_6px_rgba(180,180,180,0.44)]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover object-top",attrs:{"src":consultant.image,"alt":consultant.title,"loading":"lazy"}})],1),_vm._ssrNode(" <p class=\"pb-5 pt-[26px] text-sm leading-[26px] -tracking-[0.04px] text-[#202a36]\">"+_vm._ssrEscape(_vm._s(consultant.description))+"</p> "),_vm._ssrNode("<div class=\"mt-auto\">","</div>",[_vm._ssrNode("<button aria-label=\"Learn more\" class=\"flex items-center gap-4 text-primary\">","</button>",[_vm._ssrNode("<p class=\"text-sm font-semibold leading-[13px] -tracking-[0.03px]\">Learn more</p> "),_c('icons-downarrow',{staticClass:"-rotate-90"})],2)])],2)}),0),_vm._ssrNode(" <div class=\"mt-[31px] flex w-full justify-center\"><div class=\"swiper-pagination-career-consultant swiper-pagination-bullets !cursor-pointer\"></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-questionnaire-content.vue?vue&type=template&id=63c864eb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-questionnaire-content.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_questionnaire_contentvue_type_script_lang_js_ = ({
  props: {
    currentQuestion: {
      type: String,
      default: 'MBA Candidate'
    }
  },
  data() {
    return {
      questions: [{
        name: 'Bachelor Candidate',
        contents: [{
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional & Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }, {
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }]
      }, {
        name: 'MBA Candidate',
        contents: [{
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }, {
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional a& Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }]
      }, {
        name: 'Masters (Non MBA)',
        contents: [{
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }, {
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional a& Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }]
      }, {
        name: 'MD Candidate',
        contents: [{
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }, {
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional a& Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }]
      }, {
        name: 'JD Candidate',
        contents: [{
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }, {
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional a& Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }]
      }, {
        name: 'Doctoral (PHD)',
        contents: [{
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }, {
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional a& Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }]
      }, {
        name: 'Professional',
        contents: [{
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional & Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }, {
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }]
      }],
      sliderOptions: {
        autoPlay: false,
        loop: true,
        autoHeight: true,
        slidesPerView: 1,
        spaceBetween: 10,
        touchRatio: 1,
        init: false,
        pagination: {
          el: '.swiper-pagination-career-consultant',
          clickable: true,
          renderBullet: (index, className) => {
            return `<p aria-label="Bullet Icon" class="career-slider-bullet-icon ${className}"></p>`;
          }
        },
        breakpoints: {
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4
          }
        }
      },
      currentContents: []
    };
  },
  watch: {
    currentQuestion: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler(val, oldVal) {
        // do your stuff
        this.updateContent();
      }
    }
  },
  mounted() {
    this.updateContent();
    this.dynamicSlider.init();
  },
  methods: {
    updateContent() {
      for (const question of this.questions) {
        if (question.name === this.$props.currentQuestion) {
          this.currentContents = question.contents;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-questionnaire-content.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_questionnaire_contentvue_type_script_lang_js_ = (common_questionnaire_contentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-questionnaire-content.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_questionnaire_contentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4439f8a4"
  
)

/* harmony default export */ var common_questionnaire_content = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsDownarrow: __webpack_require__(154).default})


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-join-event.vue?vue&type=template&id=fc407188&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"overflow-y-hidden bg-cover bg-[top_36%_center] py-10 xl:pb-[75px] xl:pt-20",style:({ backgroundImage: ("url(" + _vm.imageUrl + ")") })},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1\">","</div>",[_vm._ssrNode("<div class=\"relative max-w-[637px] md:pt-[140px]\">","</div>",[_vm._ssrNode("<div class=\"absolute -left-20 top-2.5 h-full w-full\">","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":"/assets/img/bg-blur-subcribe.png","alt":"Subscribe","loading":"lazy"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"relative z-[1]\">","</div>",[_vm._ssrNode("<h5 class=\"text-center text-2xl font-bold uppercase leading-8 text-[#f7f4f4] md:text-left md:leading-10 [&>br]:md:hidden\">"+(_vm._s(_vm.title))+"</h5> "),_vm._ssrNode("<form id=\"career-join-form\" action>","</form>",[_vm._ssrNode("<div class=\"mx-auto mt-[13px] max-w-[498px] items-stretch md:ml-0 xl:max-w-[624px]\"><div class=\"flex\"><div class=\"form-input-group w-full\"><input type=\"email\" name=\"email\" autocomplete=\"on\""+(_vm._ssrAttr("placeholder",_vm.$t(_vm.placeholder)))+(_vm._ssrAttr("value",(_vm.$v.params.email.$model)))+(_vm._ssrClass("form-input rounded-r-none py-[22px]",{ error: _vm.$v.params.email.$error }))+"></div> <button type=\"submit\" class=\"btn flex-none rounded-l-none py-[22px]\">"+_vm._ssrEscape(_vm._s(_vm.$t('subscribe')))+"</button></div></div> "),(_vm.isSubmitted)?_vm._ssrNode("<div class=\"mt-2 flex items-center gap-3\">","</div>",[_c('icons-check-circle',{staticClass:"h-6 w-6 text-green"}),_vm._ssrNode(" <p class=\"text-xl font-extrabold leading-[30px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green\">"+(_vm._s(_vm.$t('span_congratulations_span_your_email_has_been_subscribe')))+"</p>")],2):_vm._e()],2)],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/career/career-join-event.vue?vue&type=template&id=fc407188&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-join-event.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var career_join_eventvue_type_script_lang_js_ = ({
  props: {
    imageUrl: {
      type: String,
      default: 'https://images.ctfassets.net/koyrlvjc3wvc/5PIDqWaQeS4Qw3WtFBBf4W/a16bd4583868b261e530015704581795/Image_32_2x.webp'
    },
    title: {
      type: String,
      default: 'Subscribe Now!'
    }
  },
  data() {
    return {
      isSubmitted: false,
      placeholder: '',
      params: {
        email: ''
      }
    };
  },
  mounted() {
    if (window.innerWidth <= 768) {
      this.placeholder = 'enter_your_email_to_join';
    } else {
      this.placeholder = 'enter_your_email_to_join_events';
    }
  },
  validations() {
    return {
      params: {
        email: {
          required: validators_["required"],
          email: validators_["email"]
        }
      }
    };
  },
  methods: {
    async onSubmit() {
      this.$v.params.$touch();
      if (this.$v.params.$invalid || this.$v.params.$error) {
        return false;
      }
      const data = await this.$hubspot.joinEventForm(this.params);
      if (!data) {
        return false;
      }
      this.isSubmitted = true;
      this.$v.params.$reset();
      this.params = {
        email: ''
      };
    }
  }
});
// CONCATENATED MODULE: ./components/career/career-join-event.vue?vue&type=script&lang=js&
 /* harmony default export */ var career_career_join_eventvue_type_script_lang_js_ = (career_join_eventvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/career/career-join-event.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  career_career_join_eventvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "29410ac8"
  
)

/* harmony default export */ var career_join_event = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsCheckCircle: __webpack_require__(69).default})


/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-professional-functional.vue?vue&type=template&id=0bdc7ede&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-24 md:py-24 xl:py-20"},[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-[52px] flex items-center justify-center gap-5 text-center\"><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div> <h2 id=\"professionalFunctionalPositions\" class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary\">"+(_vm._s(_vm.title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div></div> "),_c('div',{directives:[{name:"swiper",rawName:"v-swiper:careerSlider",value:(_vm.sliderOptions),expression:"sliderOptions",arg:"careerSlider"}],staticClass:"swiper",attrs:{"cleanup-styles-on-destroy":false}},[_vm._ssrNode("<div class=\"swiper-wrapper sm:min-h-full\">","</div>",_vm._l((_vm.professionalsAndPositions),function(position,i){return _vm._ssrNode("<div class=\"swiper-slide flex flex-col bg-white px-4 pb-8 pt-[18px] sm:min-h-full sm:justify-between\">","</div>",[_vm._ssrNode("<div class=\"h-[167px] overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.44)]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover object-top",attrs:{"format":"webp","src":position.attributes.imgUrl,"alt":'swiper-slide_' + i,"loading":"lazy"}})],1),_vm._ssrNode(" <p class=\"min-h-[54px] pt-[18px] text-base font-semibold leading-[18px] tracking-[0.42px] text-primary\">"+_vm._ssrEscape(_vm._s(position.attributes.title))+"</p> <p class=\"pb-5 pt-[10px] text-base leading-[26px] -tracking-[0.04px] text-[#202a36]\">"+_vm._ssrEscape("\n                        "+_vm._s(position.attributes.description)+"\n                    ")+"</p> "),_vm._ssrNode("<div class=\"sm:mt-auto\">","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",position.attributes.linkUrl))+" class=\"flex items-center gap-4 text-primary\">","</a>",[_vm._ssrNode("<p class=\"text-sm font-semibold leading-[13px] -tracking-[0.03px]\">"+_vm._ssrEscape(_vm._s(position.attributes.linkText))+"</p> "),_c('icons-downarrow',{staticClass:"-rotate-90"})],2)])],2)}),0)]),_vm._ssrNode(" <div class=\"mt-[31px] flex w-full justify-center\"><div class=\"swiper-pagination swiper-pagination-bullets\"></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/career/career-professional-functional.vue?vue&type=template&id=0bdc7ede&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-professional-functional.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var career_professional_functionalvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: 'OUR FUNCTIONAL POSITIONS'
    },
    professionalsAndPositions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      sliderOptions: {
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
        breakpoints: {
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3
          }
        }
      }
    };
  },
  mounted() {
    this.careerSlider.init();
  }
});
// CONCATENATED MODULE: ./components/career/career-professional-functional.vue?vue&type=script&lang=js&
 /* harmony default export */ var career_career_professional_functionalvue_type_script_lang_js_ = (career_professional_functionalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/career/career-professional-functional.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  career_career_professional_functionalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "549dbca8"
  
)

/* harmony default export */ var career_professional_functional = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsDownarrow: __webpack_require__(154).default})


/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/careers/index.vue?vue&type=template&id=2169ee4a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',[_vm._ssrNode("<section class=\"relative bg-cover bg-[right_32%_top] bg-no-repeat pb-9 pt-[287px] lg:bg-left-top xl:pb-[95px] xl:pt-[166px]\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (_vm.content.bannerImgUrl) + ")") }, null))+"><div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]\"></div> <div class=\"container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4\"><div><p class=\"mb-5 border-l-[3px] border-primary pl-2.5 text-sm leading-3 text-[#FBFBFD] md:text-base md:leading-[20px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.content.bannerSubtitle)+"\n                ")+"</p> <h1 class=\"mb-4 text-[28px] font-bold leading-8 text-white md:text-[40px] md:leading-[53px]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerTitle))+"</h1> <p class=\"w-full text-sm font-normal leading-5 text-[#FBFBFD] sm:max-w-[377px] md:max-w-[458px] md:text-base md:leading-[26px]\">"+(_vm._s(_vm.content.bannerDescription))+"</p></div></div></section> "),_c('career-banner-tab'),_vm._ssrNode(" "),_c('common-dynamic-questionnaire',{attrs:{"main-container-class":"!max-w-[520px]","data":_vm.questionnaires},on:{"changeQue1":_vm.assignQueAns1}}),_vm._ssrNode(" "),_c('common-questionnaire-content',{attrs:{"current-question":_vm.currentFirstCareerQuestion}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"pt-20 md:pt-28\">","</section>",[_vm._ssrNode("<div id=\"careersAtVenturePlans\" class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-8 flex items-center justify-center gap-[33px] text-center\"><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div> <h2 class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary\">"+(_vm._s(_vm.content.section2Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div></div> "),_c('common-toggle-content',{attrs:{"content":_vm.content.section2Description}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"pb-20 xl:pb-[85px]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-7 flex items-center justify-center gap-[33px] pt-20 text-center lg:mb-[67px] xl:pt-[117px]\"><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div> <h2 id=\"overview\" class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl\">"+(_vm._s(_vm.content.section3Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div></div> "),_c('common-featured-services',{attrs:{"services":_vm.section3Data}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-10 text-center md:mt-16 xl:mt-[110px]\">","</div>",[(_vm.$helper.isInternalUrl(_vm.content.CTA1ButtonLink))?_c('nuxt-link',{staticClass:"b-btn mx-auto text-xs uppercase md:block lg:max-w-[322px] lg:py-6",attrs:{"to":_vm.content.CTA1ButtonLink}},[_vm._v(_vm._s(_vm.content.CTA1ButtonText))]):_c('a',{staticClass:"b-btn mx-auto text-xs uppercase md:block lg:max-w-[322px] lg:py-6",attrs:{"target":"_blank","href":_vm.content.CTA1ButtonLink}},[_vm._v(_vm._s(_vm.content.CTA1ButtonText))])],1)],2)]),_vm._ssrNode(" "),_c('career-join-event',{attrs:{"title":_vm.content.section4Description,"image-url":_vm.content.section4ImgUrl}}),_vm._ssrNode(" "),_c('career-professional-functional',{attrs:{"title":_vm.content.section5Title,"professionals-and-positions":_vm.section5Data}}),_vm._ssrNode(" <section id=\"ourFounder\"><div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\"><div class=\"mb-[41px] flex items-center justify-center gap-[33px] text-center\"><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div> <h2 class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary\">"+(_vm._s(_vm.content.section6Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div></div></div></section> "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video1ThumbnailUrl,"button-title":_vm.content.video1ButtonText,"button-u-r-l":_vm.content.video1ButtonLink,"video-u-r-l":_vm.content.video1Url,"title":_vm.content.video1Title}}),_vm._ssrNode(" "),_c('common-work-at-the-best-place',{staticClass:"py-10 md:py-16 xl:pb-[85px] xl:pt-20",attrs:{"img-url":_vm.content.CTA2ImgUrl,"title":_vm.content.CTA2Title,"description":_vm.content.CTA2Description,"button-title":_vm.content.CTA2ButtonText,"button-url":_vm.content.CTA2ButtonLink}}),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"page":"careers","img-url":_vm.readyToTalkForm.imgUrl,"service-options":_vm.readyToTalkForm.services.data,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle}}),_vm._ssrNode(" "),_c('common-faq',{attrs:{"title":_vm.content.section7Title,"description":_vm.content.section7Description,"faqs":_vm.section7Data}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/careers/index.vue?vue&type=template&id=2169ee4a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/careers/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var careersvue_type_script_lang_js_ = ({
  async asyncData(context) {
    try {
      const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/careers-page?populate=deep`);
      return {
        content: context.$helper.parseData(data.data)
      };
    } catch {}
  },
  data() {
    return {
      isShowReadMore: false,
      question1Ans: '',
      currentFirstCareerQuestion: 'MBA Candidate'
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
    questionnaires() {
      var _this$content12, _this$content12$dynam, _this$content12$dynam2;
      return ((_this$content12 = this.content) === null || _this$content12 === void 0 ? void 0 : (_this$content12$dynam = _this$content12.dynamicQuestionnaries) === null || _this$content12$dynam === void 0 ? void 0 : (_this$content12$dynam2 = _this$content12$dynam.data[0]) === null || _this$content12$dynam2 === void 0 ? void 0 : _this$content12$dynam2.attributes) || [];
    },
    careerQuestions() {
      var _this$content13, _this$content13$quest;
      return ((_this$content13 = this.content) === null || _this$content13 === void 0 ? void 0 : (_this$content13$quest = _this$content13.questionnaires) === null || _this$content13$quest === void 0 ? void 0 : _this$content13$quest.data) || [];
    },
    section1Data() {
      var _this$content14, _this$content14$secti;
      return ((_this$content14 = this.content) === null || _this$content14 === void 0 ? void 0 : (_this$content14$secti = _this$content14.section1Component) === null || _this$content14$secti === void 0 ? void 0 : _this$content14$secti.data) || [];
    },
    section3Data() {
      var _this$content15, _this$content15$secti;
      return ((_this$content15 = this.content) === null || _this$content15 === void 0 ? void 0 : (_this$content15$secti = _this$content15.section3Component) === null || _this$content15$secti === void 0 ? void 0 : _this$content15$secti.data) || [];
    },
    section5Data() {
      var _this$content16, _this$content16$secti;
      return ((_this$content16 = this.content) === null || _this$content16 === void 0 ? void 0 : (_this$content16$secti = _this$content16.section5Component) === null || _this$content16$secti === void 0 ? void 0 : _this$content16$secti.data) || [];
    },
    readyToTalkForm() {
      var _this$content17, _this$content17$ready, _this$content17$ready2;
      return ((_this$content17 = this.content) === null || _this$content17 === void 0 ? void 0 : (_this$content17$ready = _this$content17.readyToTalkForm) === null || _this$content17$ready === void 0 ? void 0 : (_this$content17$ready2 = _this$content17$ready.data) === null || _this$content17$ready2 === void 0 ? void 0 : _this$content17$ready2.attributes) || {
        services: {
          data: []
        }
      };
    },
    section7Data() {
      var _this$content18, _this$content18$secti;
      return ((_this$content18 = this.content) === null || _this$content18 === void 0 ? void 0 : (_this$content18$secti = _this$content18.section7Component) === null || _this$content18$secti === void 0 ? void 0 : _this$content18$secti.data) || [];
    }
  },
  methods: {
    assignQueAns1(ans) {
      this.currentFirstCareerQuestion = ans;
    }
  }
});
// CONCATENATED MODULE: ./pages/careers/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_careersvue_type_script_lang_js_ = (careersvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/careers/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_careersvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4ea2560d"
  
)

/* harmony default export */ var careers = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CareerBannerTab: __webpack_require__(246).default,CommonDynamicQuestionnaire: __webpack_require__(187).default,CommonQuestionnaireContent: __webpack_require__(247).default,CommonToggleContent: __webpack_require__(149).default,CommonFeaturedServices: __webpack_require__(172).default,CareerJoinEvent: __webpack_require__(248).default,CareerProfessionalFunctional: __webpack_require__(249).default,CommonContactUs: __webpack_require__(139).default,CommonWorkAtTheBestPlace: __webpack_require__(182).default,CommonReadytotalk: __webpack_require__(140).default,CommonFaq: __webpack_require__(168).default})


/***/ })

};;
//# sourceMappingURL=index.js.map