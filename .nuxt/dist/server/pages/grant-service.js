exports.ids = [134,19,21,24,25,27,29,30,33,34,35,36,37,40,41,42,43,44,45,60,65,68,77,82,84,97,103,104,105,109,114];
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

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(192);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("c7319448", content, true, context)
};

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/home/home-private-placement.vue?vue&type=template&id=21a5b90a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-10 md:py-16 lg:pt-[168px]"},[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"text-center\">","</div>",[_vm._ssrNode("<p class=\"mb-3 text-[22px] font-medium leading-[27px] text-[#202A36] xl:text-[31px] xl:leading-[32px]\">"+(_vm._s(_vm.title))+"</p> <p class=\"mx-auto mb-[26px] w-3/5 text-[15px] font-medium leading-[18px] -tracking-[0.03px] text-[#586376] sm:max-w-none xl:text-[22px] xl:leading-[21px] xl:-tracking-[0.04px]\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.description)+"\n            ")+"</p> "),(_vm.$helper.isInternalUrl(_vm.buttonLink))?_c('nuxt-link',{staticClass:"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6",attrs:{"to":_vm.buttonLink}},[_vm._v(_vm._s(_vm.buttonText))]):_c('a',{staticClass:"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6",attrs:{"target":"_blank","href":_vm.buttonLink}},[_vm._v(_vm._s(_vm.buttonText))]),_vm._ssrNode(" <h3 class=\"py-9 text-2xl font-medium text-[#0B3A02] md:text-[31px] lg:pb-[43px] lg:pt-[169px]\">"+(_vm._s(_vm.featuredInText))+"</h3> "),_vm._ssrNode("<div class=\"flex flex-wrap items-center justify-center gap-4 lg:gap-[50px]\">","</div>",_vm._l((_vm.featuredCompanies),function(company,i){return _vm._ssrNode("<div"+(_vm._ssrAttr("index",i))+" class=\"flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white p-5 px-[17px] shadow-[0px_1px_8px_rgba(0,0,0,0.2)] xl:h-[126px] xl:w-[126px]\">","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":company.attributes.iconUrl,"alt":'Featured in' + i,"loading":"lazy"}})],1)}),0)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/home-private-placement.vue?vue&type=template&id=21a5b90a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/home/home-private-placement.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var home_private_placementvue_type_script_lang_js_ = ({
  props: {
    buttonLink: {
      type: String,
      default: '/book-consult'
    },
    buttonText: {
      type: String,
      default: 'BOOK A CONSULATION'
    },
    title: {
      type: String,
      default: 'Let Venture Plans be your trusted partner'
    },
    description: {
      type: String,
      default: "We've raised more than $650M for our clients"
    },
    featuredInText: {
      type: String,
      default: 'AS FEATURED IN'
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
  }
});
// CONCATENATED MODULE: ./components/home/home-private-placement.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_home_private_placementvue_type_script_lang_js_ = (home_private_placementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/home/home-private-placement.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_home_private_placementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cc1d428c"
  
)

/* harmony default export */ var home_private_placement = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-category-slider.vue?vue&type=template&id=800e5d90&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"group relative mt-4 flex-1 md:mt-0 md:w-96"},[_c('div',{directives:[{name:"swiper",rawName:"v-swiper:previewCategoryData",value:(_vm.slider_options),expression:"slider_options",arg:"previewCategoryData"}]},[_vm._ssrNode("<div class=\"swiper-wrapper\" data-v-800e5d90>","</div>",_vm._l((_vm.activeCategorySampleData),function(item,i){return _vm._ssrNode("<div class=\"swiper-slide\" data-v-800e5d90>","</div>",[_vm._ssrNode("<div class=\"flex cursor-pointer flex-col justify-between rounded-2xl border border-[#dfdfdf] px-10 pb-[9px] pt-[18px] text-center duration-200 hover:shadow-[0px_1px_8px_rgba(0,0,0,0.12)]\" data-v-800e5d90>","</div>",[_c('nuxt-img',{staticClass:"mx-auto h-40 max-h-40 min-h-40 object-contain",attrs:{"format":"webp","src":item.attributes.thumbnailImgUrl || '/assets/img/indus_market_report_02.png',"alt":"Preview","loading":"lazy"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"pt-[5px]\" data-v-800e5d90>","</div>",[_vm._ssrNode("<button type=\"button\" class=\"text-[15px] font-semibold leading-[22px] text-primary\" data-v-800e5d90>","</button>",[_vm._ssrNode("\n                                Preview\n                                "),_c('icons-arrow-right-thin',{staticClass:"relative -mt-[3px] inline-block"})],2)])],2)])}),0)]),_vm._ssrNode(" <div class=\"aboslute bottom-0 flex w-full justify-center\" data-v-800e5d90><div class=\"business-pagination swiper-pagination swiper-pagination-bullets\" data-v-800e5d90></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-category-slider.vue?vue&type=template&id=800e5d90&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-category-slider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_category_slidervue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: 'CATEGORIES'
    },
    activeCategorySampleData: {
      type: Array,
      default: () => [{
        id: 1,
        attributes: {
          thumbnailImgUrl: 'https://presentations-slides-prod.s3.amazonaws.com/22527844/46499273/2022/11/09/f29da73ff4ac251b2b1560bd264f63f3.thumb.jpg',
          description: 'Real state',
          client: '',
          industry: ''
        }
      }]
    }
  },
  data() {
    return {
      isShowReadMore: false,
      slider_options: {
        autoPlay: false,
        loop: false,
        autoHeight: true,
        breakpoints: {
          620: {
            slidesPerView: 2
          },
          1280: {
            slidesPerView: 3
          }
        },
        spaceBetween: 10,
        touchRatio: 1,
        init: false,
        pagination: {
          el: '.business-pagination',
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
  mounted() {
    this.previewCategoryData.init();
  },
  created() {},
  methods: {
    previewLatestWork(data) {
      this.$emit('preview', data);
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-category-slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_category_slidervue_type_script_lang_js_ = (common_category_slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-category-slider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(191)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_category_slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "800e5d90",
  "100e56af"
  
)

/* harmony default export */ var common_category_slider = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsArrowRightThin: __webpack_require__(190).default})


/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-modal.vue?vue&type=template&id=6149a1eb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fadeslide"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.opened || _vm.openOnServerSide),expression:"opened || openOnServerSide"}],ref:"modal",staticClass:"fixed inset-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden bg-[#294366]/[0.49]"},[_c('div',{staticClass:"modal-popup-container absolute inset-0 h-full w-full text-center before:inline-block before:h-full before:align-middle",class:[_vm.full ? 'px-0 sm:px-3' : 'px-3']},[_c('div',{staticClass:"inline-block w-full text-left align-middle"},[_c('div',{staticClass:"relative mx-auto max-w-full overflow-hidden rounded p-8 text-sm text-blue-500 shadow-lg",class:[_vm.full ? 'my-0 sm:my-8' : 'my-8', _vm.contentClass, _vm.background ? _vm.background : 'bg-white'],style:({ width: _vm.width + 'px' }),on:{"click":function($event){return $event.stopPropagation()}}},[(_vm.closeBtn)?_c('button',{staticClass:"absolute z-10 flex h-10 w-10 items-center justify-center text-base text-black !no-underline opacity-100 hover:opacity-70",class:[_vm.closeBtnClass],staticStyle:{"top":"10px","right":"10px"},on:{"click":_vm.close}},[_vm._v("\n                        ✕\n                    ")]):_vm._e(),_vm._v(" "),_vm._t("default")],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-modal.vue?vue&type=template&id=6149a1eb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_modalvue_type_script_lang_js_ = ({
  props: {
    full: {
      type: Boolean,
      default: false
    },
    closeBtn: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '550'
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    openOnServerSide: {
      type: Boolean,
      default: false
    },
    contentClass: {
      type: String,
      default: ''
    },
    closeBtnClass: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      opened: false
    };
  },
  mounted() {
    if (this.isOpen) {
      this.open();
    }
  },
  methods: {
    scrollbarWidth() {
      const scrollDiv = document.createElement('div');
      scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
      document.body.appendChild(scrollDiv);
      const result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return result;
    },
    open() {
      document.querySelector('html').classList.add('overflow-hidden');
      document.querySelector('html').style.marginRight = this.scrollbarWidth() + 'px';
      this.opened = true;
      this.$emit('onopen');
    },
    closeByBackdrop() {
      if (!this.modal) {
        this.close();
      }
    },
    close() {
      document.querySelector('html').style.marginRight = '';
      document.querySelector('html').classList.remove('overflow-hidden');
      this.opened = false;
      this.$emit('onclose');
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_modalvue_type_script_lang_js_ = (common_modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-modal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "356f89e8"
  
)

/* harmony default export */ var common_modal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-arrow-right-thin.vue?vue&type=template&id=56be2831&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"6","height":"9","viewBox":"0 0 6 9"}},[_vm._ssrNode("<g><g><path fill=\"#00a1f1\" d=\"M5.688 4.792a.741.741 0 0 0-.213-.513L1.919.723A.742.742 0 0 0 .868 1.769l3.033 3.033L.868 7.834a.741.741 0 1 0 1.051 1.047l3.556-3.556a.741.741 0 0 0 .213-.533z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-arrow-right-thin.vue?vue&type=template&id=56be2831&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-arrow-right-thin.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3c020983"
  
)

/* harmony default export */ var icons_arrow_right_thin = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_category_slider_vue_vue_type_style_index_0_id_800e5d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_category_slider_vue_vue_type_style_index_0_id_800e5d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_category_slider_vue_vue_type_style_index_0_id_800e5d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_category_slider_vue_vue_type_style_index_0_id_800e5d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_category_slider_vue_vue_type_style_index_0_id_800e5d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 192:
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
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-container.swiper-container-initialized.swiper-container-horizontal.swiper-container-autoheight[data-v-800e5d90]{padding-bottom:25px!important}.swiper-button-prev.swiper-button-prev1[data-v-800e5d90]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")!important;background:no-repeat;background-position:50%;background-color:#00adff;height:42px;width:42px;border-radius:50%;left:-1%}.swiper-button-prev1[data-v-800e5d90]:after{content:\"\"}.swiper-button-next.swiper-button-next1[data-v-800e5d90]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")!important;background:no-repeat;background-position:50%;background-color:#00adff;height:42px;width:42px;border-radius:50%;right:-1%}.swiper-button-next1[data-v-800e5d90]:after{content:\"\"}.swiper-container[data-v-800e5d90]{padding:0 16px 16px;margin:0 30px}@media (max-width:620px){.swiper-container[data-v-800e5d90]{margin:0;padding:0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-company-overview.vue?vue&type=template&id=06a14cd5&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"my-10 md:my-16 md:pb-0"},[_vm._ssrNode("<div class=\"lg:px-[my-10 md:pb-097px] container px-10 md:my-16 md:px-4 xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-9 flex items-center justify-center gap-2 text-center sm:gap-[30px] md:mb-[50px]\"><div class=\"block h-px w-1/5 bg-[#d5d5d5] sm:w-full\"></div> <h2 class=\"max-w-[90%] text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary\">"+(_vm._s(_vm.title))+"</h2> <div class=\"block h-px w-1/5 bg-[#d5d5d5] sm:w-full\"></div></div> "),_c('common-toggle-content',{attrs:{"content":_vm.overviewValue}})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-company-overview.vue?vue&type=template&id=06a14cd5&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-company-overview.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_company_overviewvue_type_script_lang_js_ = ({
  props: {
    value: {
      type: String,
      default: `We have assisted many nonprofits and for profit enterprises receive millions of dollars in competitive funding support, formula funding, continuation funding, and pass through funding in state and federal level applications.
Venture Plans focuses on offering comprehensive federal government proposal and application management support, top-tier industry specific proposal experts, and and has a track record for producing consistent, cost-effective, and efficient outcomes. A well-prepared, designed, and packaged grant application is the key to success. Learn more below.`
    },
    title: {
      type: String,
      default: 'OVERVIEW'
    }
  },
  data() {
    return {
      isShowReadMore: false
    };
  },
  computed: {
    overviewValue() {
      if (this.$helper.isEmpty(this.value)) {
        return this.$t('common_company_overview_paragraph');
      } else {
        return this.value;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-company-overview.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_company_overviewvue_type_script_lang_js_ = (common_company_overviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-company-overview.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_company_overviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5544c83a"
  
)

/* harmony default export */ var common_company_overview = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonToggleContent: __webpack_require__(149).default})


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-venture-plans.vue?vue&type=template&id=3cccd0fb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"my-10 md:my-16 xl:my-28 xl:mb-[154px]"},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mb-[71px] flex items-center justify-center gap-2.5 text-center\"><div class=\"block h-px w-full bg-[#d5d5d5]\"></div> <h2 class=\"inline-block shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl\">"+(_vm._s(_vm.title))+"</h2> <div class=\"block h-px w-full bg-[#d5d5d5]\"></div></div> "),_vm._ssrNode("<div class=\"mx-auto mb-10 grid max-w-[300px] grid-cols-1 gap-5 space-y-4 md:mb-16 md:max-w-none md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4\">","</div>",_vm._l((_vm.data),function(value,i){return _vm._ssrNode("<div"+(_vm._ssrClass("relative",{ 'md:before:!w-0 ': i === _vm.data.length - 1 }))+">","</div>",[_vm._ssrNode("<div class=\"flex flex-col items-center gap-4 rounded-t-[10px] bg-primary p-4 text-center md:min-h-[152px]\"><span class=\"h-12 w-12 rounded-full bg-white text-center text-lg font-bold leading-[48px] text-primary\">"+_vm._ssrEscape(_vm._s(i + 1))+"</span> <h3 class=\"text-xl font-bold text-white xl:text-[26px]\">"+_vm._ssrEscape(_vm._s(value.attributes.title))+"</h3></div> <div class=\"bg-white px-5 py-6 shadow-[0_3px_6px_rgba(0,0,0,0.16)] md:min-h-[120px] lg:min-h-[192px] lg:px-[30px] xl:min-h-[144px]\"><p class=\"text-[15px] leading-6 -tracking-[0.03]\">"+_vm._ssrEscape(_vm._s(value.attributes.description))+"</p></div> "),_vm._ssrNode("<div class=\"h-48 w-full md:h-32 lg:h-48\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":value.attributes.imgUrl,"alt":value.attributes.title,"loading":"lazy"}})],1)],2)}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-venture-plans.vue?vue&type=template&id=3cccd0fb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-venture-plans.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_venture_plansvue_type_script_lang_js_ = ({
  props: {
    data: {
      type: Array,
      default: () => [{
        id: 1,
        attributes: {
          sectionName: '1',
          title: 'Rapid Execution',
          description: 'Choose from 5-day standard and expedited options. Deadlines met.',
          imgUrl: 'https://images.ctfassets.net/koyrlvjc3wvc/36a92TGHdSkErGnPlM7V1y/4d07d453d834a871ea453530c84cb037/rapid.png'
        }
      }]
    },
    title: String
  }
});
// CONCATENATED MODULE: ./components/common/common-venture-plans.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_venture_plansvue_type_script_lang_js_ = (common_venture_plansvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-venture-plans.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_venture_plansvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "10beb6e2"
  
)

/* harmony default export */ var common_venture_plans = __webpack_exports__["default"] = (component.exports);

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

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/grant-service.vue?vue&type=template&id=aaacf3ea&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',[_vm._ssrNode("<section class=\"relative bg-cover bg-[right_32%_top] bg-no-repeat pb-10 pt-[166px] md:bg-left xl:pb-20\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (_vm.content.bannerImageUrl) + ")") }, null))+"><div class=\"absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent\"></div> <div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]\"></div> <div class=\"container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4\"><div><p class=\"mb-[19px] font-normal leading-4 text-[#FBFBFD] xl:leading-6\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerSubtitle))+"</p> <h1 class=\"mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerTitle))+"</h1> <div class=\"flex items-center gap-[10px]\"><div class=\"h-12 w-[5px] flex-none bg-primary sm:h-8 xl:h-10\"></div> <p class=\"font-normal leading-4 text-[#FBFBFD] md:whitespace-pre xl:leading-6\">"+(_vm._s(_vm.content.bannerDescription))+"</p></div></div></div></section> "),_c('common-banner-tab',{attrs:{"tabs":_vm.tabs,"is-show-save-btn":true}}),_vm._ssrNode(" "),_c('common-questions-form',{attrs:{"title":_vm.content.questionnaireTitle,"description":_vm.content.questionnaireDescription,"questions":_vm.grantServiceQuestions}}),_vm._ssrNode(" "),_c('common-company-overview',{attrs:{"id":"overview","value":_vm.content.section1Paragraph,"title":_vm.content.section1Title}}),_vm._ssrNode(" "),(_vm.content.CTA1ButtonText)?_vm._ssrNode("<div class=\"pt-10 text-center lg:pt-[102px]\">","</div>",[(_vm.$helper.isInternalUrl(_vm.content.CTA1ButtonLink))?_c('nuxt-link',{staticClass:"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6",attrs:{"to":_vm.content.CTA1ButtonLink}},[_vm._v("\n            "+_vm._s(_vm.content.CTA1ButtonText)+"\n        ")]):_c('a',{staticClass:"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6",attrs:{"target":"_blank","href":_vm.content.CTA1ButtonLink}},[_vm._v(_vm._s(_vm.content.CTA1ButtonText))])],1):_vm._e(),_vm._ssrNode(" <section id=\"diverseEnvironment\" class=\"py-10 lg:pt-24 xl:pt-[185px]\"><div class=\"container lg:px-[97px] xl:px-4\"><div class=\"text-center md:mb-[50px]\"><div class=\"mb-6 flex items-center justify-center gap-[5px] text-center md:mb-9 md:gap-8\"><div class=\"block h-px w-full bg-[#d5d5d5]\"></div> <h2 class=\"shrink-0 text-2xl font-bold uppercase text-black lg:text-3xl lg:leading-[43px]\">"+(_vm._s(_vm.content.section2Title))+"</h2> <div class=\"block h-px w-full bg-[#d5d5d5]\"></div></div> <p class=\"mx-auto max-w-[925px] text-sm font-medium leading-6 -tracking-[0.03px] text-black-700 md:text-base md:leading-6\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.content.section2Description)+"\n                ")+"</p></div></div></section> "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video1ThumbnailUrl,"button-title":_vm.content.video1ButtonText,"button-u-r-l":_vm.content.video1ButtonLink,"video-u-r-l":_vm.content.video1Url,"title":_vm.content.video1Title}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white py-16 md:pb-[101px] md:pt-20 xl:pt-[92px]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1\"><div id=\"ourPortfolio\"><h5 class=\"mb-4 text-[23px] uppercase text-[#030303]\">"+_vm._ssrEscape(_vm._s(_vm.content.section3Subtitle))+"</h5> <h5 class=\"text-[26px] font-bold uppercase leading-[36px] text-[#030303]\">"+_vm._ssrEscape(_vm._s(_vm.content.section3Title))+"</h5> <p class=\"pt-[27px] text-xs font-bold uppercase leading-9 tracking-[1.2px] text-[#030303]\">"+_vm._ssrEscape(_vm._s(_vm.content.section3Description))+"</p></div></div> "),_vm._ssrNode("<div class=\"items-start gap-6 pt-[27px] md:flex\">","</div>",[_vm._ssrNode("<div class=\"max-w-[275px] flex-1\"><ul>"+(_vm._ssrList((_vm.section3Data),function(category,i){return ("<li"+(_vm._ssrClass("rounded-md text-[#707070] hover:!border-primary hover:bg-[#eaf7ff] hover:text-primary",{ 'font-bold !text-primary': _vm.activeCategoryData.id == category.id }))+"><p class=\"block rounded-md border border-transparent px-[11px] py-1 text-lg hover:border-primary\">"+_vm._ssrEscape(_vm._s(category.attributes.title))+"</p></li>")}))+"</ul></div> "),_c('common-category-slider',{attrs:{"active-category-sample-data":_vm.activeCategorySampleData},on:{"preview":_vm.previewLatestWork}})],2)],2)]),_vm._ssrNode(" "),_c('common-venture-plans',{attrs:{"id":"whyVenturePlans","title":_vm.content.section4Title,"data":_vm.section4Data}}),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"featuredServices\" class=\"bg-[#fbfbfd]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 py-10 md:px-4 md:py-16 lg:px-[97px] lg:pt-0 xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-9 flex items-center justify-center gap-[33px] text-center md:mb-[67px]\"><div class=\"hidden h-px w-full bg-[#D5D5D5] sm:block\"></div> <h2 class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary\">"+(_vm._s(_vm.content.section5Title))+"</h2> <div class=\"hidden h-px w-full bg-[#D5D5D5] sm:block\"></div></div> "),_c('common-featured-services',{attrs:{"services":_vm.section5Data}})],2)]),_vm._ssrNode(" "),_c('home-private-placement',{attrs:{"featured-companies":_vm.section6Data,"featured-title":_vm.content.section6Title,"featured-in-text":_vm.content.section6Title,"description":_vm.content.CTA2Description,"title":_vm.content.CTA2Title,"button-text":_vm.content.CTA2ButtonText,"button-link":_vm.content.CTA2ButtonLink}}),_vm._ssrNode(" "),_c('common-tell-more-about-projects',{attrs:{"featured-companies":_vm.section6Data,"tell-us-more-data":_vm.section7Data,"tell-us-more-title":_vm.content.section7Title,"tell-use-more-subtitle":_vm.content.section7Subtitle,"image-url":_vm.content.section7Img}}),_vm._ssrNode(" "),_c('common-client-words',{attrs:{"id":"ourClientsWords","title":_vm.content.section8Title,"description":_vm.content.section8Description,"testimonials":_vm.section8Data}}),_vm._ssrNode(" "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video2ThumbnailUrl,"button-title":_vm.content.video2ButtonText,"button-u-r-l":_vm.content.video2ButtonLink,"video-u-r-l":_vm.content.video2Url,"title":_vm.content.video2Title}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"py-10 lg:pb-[198px] lg:pt-[93px]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div id=\"grantApplicationProcess\" class=\"mb-4 flex items-center justify-center gap-[33px] text-center\"><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div> <h2 class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl\">"+(_vm._s(_vm.content.section9Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div></div> <div class=\"mx-auto max-w-lg space-y-5 text-center text-sm font-medium leading-6 -tracking-[0.03px] text-black xl:max-w-[732px] xl:text-base xl:leading-9 xl:-tracking-[0.04px]\"><p>"+_vm._ssrEscape(_vm._s(_vm.content.section9Description))+"</p></div> "),_vm._ssrNode("<div class=\"mt-10 space-y-8 md:mt-[70px] md:space-y-14 xl:space-y-28\">","</div>",_vm._l((_vm.section9Data),function(process,i){return _vm._ssrNode("<div class=\"grid grid-cols-1 items-start justify-between gap-10 md:grid-cols-2 xl:gap-20\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("order-2 mb-10 md:mb-0",{ 'md:!order-1': i % 2 !== 0 }))+">","</div>",[_c('nuxt-img',{staticClass:"mx-auto",class:{ ' h-[201px]': i === 0, ' h-[253px]': i === 1, ' h-[199px]': i === 2 },attrs:{"format":"webp","src":process.attributes.imgUrl,"alt":process.attributes.title,"loading":"lazy"}})],1),_vm._ssrNode(" <div"+(_vm._ssrClass(null,{ 'md:!order-2': i % 2 !== 0 }))+"><div class=\"mb-3 flex gap-5 xl:gap-7\"><span class=\"h-12 w-12 flex-none rounded-full bg-primary text-center text-2xl font-bold leading-[48px] text-white xl:h-[54px] xl:w-[54px] xl:leading-[54px]\">"+_vm._ssrEscape(_vm._s(i + 1))+"</span> <div class=\"max-w-[510px] flex-1\"><h3 class=\"mb-3 mt-3 text-xl font-bold leading-7 text-[#202a36] xl:mb-6 xl:text-[21px]\">"+_vm._ssrEscape("\n                                    "+_vm._s(process.attributes.title)+"\n                                ")+"</h3> "+((process.attributes.description && !_vm.activeProcessReadMore.includes(i))?("<p class=\"overflow-hidden text-sm font-medium text-[#353535] xl:text-lg xl:leading-9\">"+_vm._ssrEscape("\n                                    "+_vm._s(process.attributes.description.slice(0, process.attributes.description.indexOf('\n')))+"\n                                ")+"</p>"):"<!---->")+" "+((_vm.activeProcessReadMore.includes(i))?("<p class=\"overflow-hidden text-sm font-medium text-[#353535] xl:text-lg xl:leading-9\">"+_vm._ssrEscape("\n                                    "+_vm._s(process.attributes.description)+"\n                                ")+"</p>"):"<!---->")+" <button"+(_vm._ssrAttr("aria-label",_vm.$t('read_more')))+" class=\"mt-3 flex items-center justify-start gap-4 text-sm font-semibold text-primary xl:text-xl\"><p class=\"text-base\">"+_vm._ssrEscape(_vm._s(_vm.activeProcessReadMore.includes(i) ? _vm.$t('read_less') : _vm.$t('read_more')))+"</p> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"6\" viewBox=\"0 0 11 6\""+(_vm._ssrClass("h-1 w-2 xl:h-[6px] xl:w-[11px]",{ 'rotate-180': _vm.activeProcessReadMore.includes(i) }))+"><g><g><path fill=\"currentColor\" d=\"M.439.546l4.907 4.907L10.254.546z\"></path></g></g></svg></button></div></div></div>")],2)}),0)],2)]),_vm._ssrNode(" "),_c('common-interested-service',{attrs:{"id":"buyGrantServices","background-image":_vm.content.video3Url,"subtitle":_vm.content.Video3MiniTitle,"title":_vm.content.video3Title,"description":_vm.content.video3Description,"button-link":_vm.content.video3ButtonLink,"button-title":_vm.content.video3ButtonText}}),_vm._ssrNode(" "),_c('common-our-team',{staticClass:"pb-10 md:!pb-0",attrs:{"id":"ourTeam","title":_vm.content.section10Title,"description":_vm.content.section10Description,"teams":_vm.section10Data}}),_vm._ssrNode(" <section class=\"py-10 lg:pb-[219px]\"><div class=\"container\"><div class=\"grid grid-cols-1\"><div class=\"text-center\"><a"+(_vm._ssrAttr("href",_vm.content.CTA3ButtonLink))+" class=\"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6\">"+_vm._ssrEscape(_vm._s(_vm.content.CTA3ButtonText))+"</a></div></div></div></section> "),_c('common-faq',{attrs:{"title":_vm.content.section11Title,"description":_vm.content.section11Description,"faqs":_vm.section11Data}}),_vm._ssrNode(" "),_c('common-brand-logo',{attrs:{"logos":_vm.logoSliders}}),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"id":"readyToTalk","img-url":_vm.readyToTalkForm.imgUrl,"service-options":_vm.readyToTalkForm.services.data,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle}}),_vm._ssrNode(" "),_c('common-modal',{ref:"previewModal",attrs:{"width":"1440","background":"bg-[#fafafa]"}},[_c('div',[_c('button',{staticClass:"absolute right-4 top-4 md:right-8 md:top-8",attrs:{"type":"button"},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"17","height":"17","viewBox":"0 0 17 17"}},[_c('g',[_c('g',[_c('g',[_c('path',{attrs:{"d":"M.75 17a.729.729 0 0 1-.513-1.242L14.802 1.193a.728.728 0 1 1 1.03 1.03L1.269 16.79a.728.728 0 0 1-.517.21z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"d":"M15.343 17a.73.73 0 0 1-.515-.216L.214 2.171a.73.73 0 1 1 1.034-1.033L15.862 15.75a.731.731 0 0 1-.52 1.25z"}})])])])])]),_vm._v(" "),_c('div',[_c('ul',{staticClass:"mb-8 flex flex-col gap-4 text-base text-[#6c6c6c] md:flex-row md:gap-16"},[_c('li',[(_vm.activeProductData.isBusinessPlan)?_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Client")]):_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Type")]),_vm._v("\n\n                        "+_vm._s(_vm.activeProductData.client)+"\n                    ")]),_vm._v(" "),_c('li',[_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Industry")]),_vm._v(_vm._s(_vm.activeProductData.industry))]),_vm._v(" "),(_vm.activeProductData.isBusinessPlan)?_c('li',[_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Total Raised")]),_vm._v(_vm._s(_vm.activeProductData.totalRaised))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"mb-5 flex flex-col items-center justify-between gap-4 md:flex-row"},[_c('p',{staticClass:"text-base text-[#6c6c6c] md:max-w-[350px] lg:max-w-[527px]"},[_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Description")]),_vm._v(_vm._s(_vm.activeProductData.description))]),_vm._v(" "),(_vm.$helper.isInternalUrl(_vm.activeProductData.buttonUrl))?_c('nuxt-link',{staticClass:"b-btn w-auto rounded px-9 py-4 text-base",attrs:{"to":_vm.activeProductData.buttonUrl},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_vm._v(_vm._s(_vm.activeProductData.buttonTitle))]):_c('a',{staticClass:"b-btn w-auto rounded px-9 py-4 text-base",attrs:{"target":"_blank","href":_vm.activeProductData.buttonUrl},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_vm._v(_vm._s(_vm.activeProductData.buttonTitle))])],1),_vm._v(" "),(_vm.activeProductData.descriptionMediaType === 'images')?_c('div',{directives:[{name:"swiper",rawName:"v-swiper:brandLogo",value:(_vm.slider_options),expression:"slider_options",arg:"brandLogo"}],staticClass:"swiper relative bg-transparent",attrs:{"cleanup-styles-on-destroy":false}},[_c('div',{staticClass:"swiper-wrapper items-center !px-10"},[(_vm.activeProductData.images)?_vm._l((_vm.activeProductData.images),function(image,index){return _c('div',{key:image.imgUrl,staticClass:"swiper-slide bg-white p-4"},[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":image.imgUrl,"alt":'Description Image - ' + index,"loading":"lazy"}})],1)}):_vm._e()],2),_vm._v(" "),_c('div',{staticClass:"swiper-button-next -mr-3"}),_vm._v(" "),_c('div',{staticClass:"swiper-button-prev -ml-3"})]):_c('iframe',{staticClass:"h-screen w-full",attrs:{"src":_vm.activeProductData.pdfUrlField,"frameborder":"0"}})])])])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/grant-service.vue?vue&type=template&id=aaacf3ea&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/grant-service.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var grant_servicevue_type_script_lang_js_ = ({
  async asyncData(context) {
    try {
      const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/grant-service-page?populate=deep`);
      return {
        content: context.$helper.parseData(data.data)
      };
    } catch {}
  },
  data() {
    return {
      activeProcessReadMore: [],
      tabs: [{
        id: 'overview',
        title: 'Overview'
      }, {
        id: 'ourPortfolio',
        title: 'Our Portfolio'
      }, {
        id: 'whyVenturePlans',
        title: 'Why Venture Plans'
      }, {
        id: 'featuredServices',
        title: 'Grant Services'
      }, {
        id: 'ourClientsWords',
        title: 'Our Client’s Words'
      }, {
        id: 'grantApplicationProcess',
        title: 'Grant Application Process'
      }, {
        id: 'buyGrantServices',
        title: 'Buy Grant Services'
      }, {
        id: 'ourTeam',
        title: 'Our Team'
      }, {
        id: 'faqs',
        title: 'FAQ'
      }, {
        id: 'readyToTalk',
        title: 'Ready To Talk'
      }],
      activeCategoryData: {},
      activeProductData: {},
      slider_options: {
        observer: true,
        observeParents: true,
        parallax: true,
        loop: true,
        slidesPerView: 1,
        touchRatio: 1,
        init: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
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
    grantServiceQuestions() {
      var _this$content12, _this$content12$quest;
      return ((_this$content12 = this.content) === null || _this$content12 === void 0 ? void 0 : (_this$content12$quest = _this$content12.questionnaire) === null || _this$content12$quest === void 0 ? void 0 : _this$content12$quest.data) || [];
    },
    section3Data() {
      var _this$content13, _this$content13$secti;
      return ((_this$content13 = this.content) === null || _this$content13 === void 0 ? void 0 : (_this$content13$secti = _this$content13.section3Component) === null || _this$content13$secti === void 0 ? void 0 : _this$content13$secti.data) || [];
    },
    section4Data() {
      var _this$content14, _this$content14$secti;
      return ((_this$content14 = this.content) === null || _this$content14 === void 0 ? void 0 : (_this$content14$secti = _this$content14.section4Component) === null || _this$content14$secti === void 0 ? void 0 : _this$content14$secti.data) || [];
    },
    section5Data() {
      var _this$content15, _this$content15$secti;
      return ((_this$content15 = this.content) === null || _this$content15 === void 0 ? void 0 : (_this$content15$secti = _this$content15.section5Component) === null || _this$content15$secti === void 0 ? void 0 : _this$content15$secti.data) || [];
    },
    section6Data() {
      var _this$content16, _this$content16$secti;
      return ((_this$content16 = this.content) === null || _this$content16 === void 0 ? void 0 : (_this$content16$secti = _this$content16.section6Component) === null || _this$content16$secti === void 0 ? void 0 : _this$content16$secti.data) || [];
    },
    section7Data() {
      var _this$content17, _this$content17$secti;
      return ((_this$content17 = this.content) === null || _this$content17 === void 0 ? void 0 : (_this$content17$secti = _this$content17.section7Component) === null || _this$content17$secti === void 0 ? void 0 : _this$content17$secti.data) || [];
    },
    section8Data() {
      var _this$content18, _this$content18$secti;
      return ((_this$content18 = this.content) === null || _this$content18 === void 0 ? void 0 : (_this$content18$secti = _this$content18.section8Component) === null || _this$content18$secti === void 0 ? void 0 : _this$content18$secti.data) || [];
    },
    section9Data() {
      var _this$content19, _this$content19$secti;
      return ((_this$content19 = this.content) === null || _this$content19 === void 0 ? void 0 : (_this$content19$secti = _this$content19.section9Component) === null || _this$content19$secti === void 0 ? void 0 : _this$content19$secti.data) || [];
    },
    section10Data() {
      var _this$content20, _this$content20$secti;
      return ((_this$content20 = this.content) === null || _this$content20 === void 0 ? void 0 : (_this$content20$secti = _this$content20.section10Component) === null || _this$content20$secti === void 0 ? void 0 : _this$content20$secti.data) || [];
    },
    section11Data() {
      var _this$content21, _this$content21$secti;
      return ((_this$content21 = this.content) === null || _this$content21 === void 0 ? void 0 : (_this$content21$secti = _this$content21.section11Component) === null || _this$content21$secti === void 0 ? void 0 : _this$content21$secti.data) || {};
    },
    logoSliders() {
      var _this$content22, _this$content22$logoS, _this$content22$logoS2, _this$content22$logoS3;
      return ((_this$content22 = this.content) === null || _this$content22 === void 0 ? void 0 : (_this$content22$logoS = _this$content22.logoSlider) === null || _this$content22$logoS === void 0 ? void 0 : (_this$content22$logoS2 = _this$content22$logoS.data) === null || _this$content22$logoS2 === void 0 ? void 0 : (_this$content22$logoS3 = _this$content22$logoS2.attributes) === null || _this$content22$logoS3 === void 0 ? void 0 : _this$content22$logoS3.logoUrls) || [];
    },
    readyToTalkForm() {
      var _this$content23, _this$content23$ready, _this$content23$ready2;
      return ((_this$content23 = this.content) === null || _this$content23 === void 0 ? void 0 : (_this$content23$ready = _this$content23.readyToTalkForm) === null || _this$content23$ready === void 0 ? void 0 : (_this$content23$ready2 = _this$content23$ready.data) === null || _this$content23$ready2 === void 0 ? void 0 : _this$content23$ready2.attributes) || {
        services: {
          data: []
        }
      };
    },
    activeCategorySampleData() {
      var _this$activeCategoryD, _this$activeCategoryD2, _this$activeCategoryD3, _this$content24, _this$content24$secti, _this$content24$secti2, _this$content24$secti3, _this$content24$secti4;
      return ((_this$activeCategoryD = this.activeCategoryData) === null || _this$activeCategoryD === void 0 ? void 0 : (_this$activeCategoryD2 = _this$activeCategoryD.attributes) === null || _this$activeCategoryD2 === void 0 ? void 0 : (_this$activeCategoryD3 = _this$activeCategoryD2.sampleWorks) === null || _this$activeCategoryD3 === void 0 ? void 0 : _this$activeCategoryD3.data) || ((_this$content24 = this.content) === null || _this$content24 === void 0 ? void 0 : (_this$content24$secti = _this$content24.section3Component) === null || _this$content24$secti === void 0 ? void 0 : (_this$content24$secti2 = _this$content24$secti.data[0]) === null || _this$content24$secti2 === void 0 ? void 0 : (_this$content24$secti3 = _this$content24$secti2.attributes) === null || _this$content24$secti3 === void 0 ? void 0 : (_this$content24$secti4 = _this$content24$secti3.sampleWorks) === null || _this$content24$secti4 === void 0 ? void 0 : _this$content24$secti4.data) || [];
    }
  },
  mounted() {
    var _this$content25, _this$content25$secti, _this$content25$secti2, _this$content25$secti3, _this$content25$secti4;
    this.activeCategoryData = ((_this$content25 = this.content) === null || _this$content25 === void 0 ? void 0 : (_this$content25$secti = _this$content25.section3Component) === null || _this$content25$secti === void 0 ? void 0 : (_this$content25$secti2 = _this$content25$secti.data[0]) === null || _this$content25$secti2 === void 0 ? void 0 : (_this$content25$secti3 = _this$content25$secti2.attributes) === null || _this$content25$secti3 === void 0 ? void 0 : (_this$content25$secti4 = _this$content25$secti3.sampleWorks) === null || _this$content25$secti4 === void 0 ? void 0 : _this$content25$secti4.data[0]) || {};
  },
  methods: {
    toggleProcess(id) {
      if (this.activeProcessReadMore.includes(id)) {
        this.activeProcessReadMore = this.activeProcessReadMore.filter(d => d !== id);
      } else {
        this.activeProcessReadMore.push(id);
      }
    },
    previewLatestWork(data) {
      this.$refs.previewModal.open();
      this.activeProductData = data;
      this.isMarketPlanOpened = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/grant-service.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_grant_servicevue_type_script_lang_js_ = (grant_servicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/grant-service.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_grant_servicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7c0f61a6"
  
)

/* harmony default export */ var grant_service = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonBannerTab: __webpack_require__(161).default,CommonQuestionsForm: __webpack_require__(251).default,CommonCompanyOverview: __webpack_require__(199).default,CommonContactUs: __webpack_require__(139).default,CommonCategorySlider: __webpack_require__(188).default,CommonVenturePlans: __webpack_require__(200).default,CommonFeaturedServices: __webpack_require__(172).default,HomePrivatePlacement: __webpack_require__(180).default,CommonTellMoreAboutProjects: __webpack_require__(177).default,CommonClientWords: __webpack_require__(169).default,CommonInterestedService: __webpack_require__(145).default,CommonOurTeam: __webpack_require__(174).default,CommonFaq: __webpack_require__(168).default,CommonBrandLogo: __webpack_require__(164).default,CommonReadytotalk: __webpack_require__(140).default,CommonModal: __webpack_require__(189).default})


/***/ })

};;
//# sourceMappingURL=grant-service.js.map