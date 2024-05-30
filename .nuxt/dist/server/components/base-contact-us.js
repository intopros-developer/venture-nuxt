exports.ids = [3,29,30,34,35,41,42,49,50,77,78,82,84,97,98,103,104,105,109,114];
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

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(194);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("09a58bc7", content, true, context)
};

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_us_heroform_vue_vue_type_style_index_0_id_36d20b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_us_heroform_vue_vue_type_style_index_0_id_36d20b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_us_heroform_vue_vue_type_style_index_0_id_36d20b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_us_heroform_vue_vue_type_style_index_0_id_36d20b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_us_heroform_vue_vue_type_style_index_0_id_36d20b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@media (min-width:2300px){.hero-ultra-wide-height[data-v-36d20b8a]{height:min(100vh,1200px)!important}}.content-center[data-v-36d20b8a]{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center}.slide-fade-enter-active[data-v-36d20b8a],.slide-fade-leave-active[data-v-36d20b8a]{transition:opacity .3s}.slide-fade-enter[data-v-36d20b8a],.slide-fade-leave-to[data-v-36d20b8a]{opacity:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(221);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("16fc45f3", content, true, context)
};

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/contact-us/contact-us-heroform.vue?vue&type=template&id=36d20b8a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"contact-heroform hero-ultra-wide-height relative h-[770px] bg-cover bg-[center_top_25%] bg-no-repeat md:h-[730px] xl:h-[835px]",style:({ backgroundImage: ("url(" + _vm.image + ")") })},[_vm._ssrNode("<div class=\"absolute left-0 top-0 z-0 h-full w-[70%] bg-gradient-to-r from-[#2b3746] via-transparent\" data-v-36d20b8a></div> <div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[307px]\" data-v-36d20b8a></div> "),_vm._ssrNode("<div class=\"container relative content-center px-10 lg:px-[97px] xl:px-4\" data-v-36d20b8a>","</div>",[_vm._ssrNode("<form id=\"contact-us-hero-form\" action data-v-36d20b8a>","</form>",[_vm._ssrNode("<div class=\"flex flex-col gap-7 md:flex-row xl:gap-40\" data-v-36d20b8a>","</div>",[_vm._ssrNode("<div class=\"mt-11 flex-1\" data-v-36d20b8a><p class=\"mb-[17px] border-l-[5px] border-primary pl-1.5 text-sm font-normal text-[#FBFBFD] md:text-xl md:leading-[17px]\" data-v-36d20b8a>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.subTitle)+"\n                    ")+"</p> <h1 class=\"mb-3 max-w-[388px] text-[28px] font-bold uppercase leading-8 text-white md:leading-9 lg:text-4xl\" data-v-36d20b8a>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.title)+"\n                    ")+"</h1> <p class=\"w-full text-sm font-normal leading-5 text-[#FBFBFD] sm:max-w-[377px] md:max-w-[420px] md:text-xl md:leading-[26px]\" data-v-36d20b8a>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.para)+"\n                    ")+"</p></div> "),_vm._ssrNode("<div class=\"w-full flex-none space-y-4 md:max-w-[330px] md:space-y-6 xl:max-w-[535px] xl:space-y-9\" data-v-36d20b8a>","</div>",[_vm._ssrNode("<div class=\"form-input-group\" data-v-36d20b8a><input type=\"text\" placeholder=\"Full Name\" name=\"full_name\" autocomplete=\"on\""+(_vm._ssrAttr("value",(_vm.$v.params.full_name.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.params.full_name.$error }))+" data-v-36d20b8a></div> "),_vm._ssrNode("<div class=\"form-input-group\" data-v-36d20b8a>","</div>",[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.$v.params.phone.$model),expression:"$v.params.phone.$model"},{name:"mask",rawName:"v-mask",value:(_vm.$mask.phoneMask),expression:"$mask.phoneMask"}],staticClass:"form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",class:{ error: _vm.$v.params.phone.$error },attrs:{"type":"text","name":"phone","autocomplete":"on","placeholder":"Phone Number"},domProps:{"value":(_vm.$v.params.phone.$model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$v.params.phone, "$model", $event.target.value)}}},[])]),_vm._ssrNode(" <div class=\"form-input-group\" data-v-36d20b8a><input type=\"text\" placeholder=\"Your Email Address\" name=\"email\" autocomplete=\"on\""+(_vm._ssrAttr("value",(_vm.$v.params.email.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.params.email.$error }))+" data-v-36d20b8a></div> "),_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closeSearch),expression:"closeSearch"}],staticClass:"group relative text-left"},[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right\" data-v-36d20b8a>","</div>",[_vm._ssrNode("<div role=\"none\" data-v-36d20b8a>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("inline-flex w-full flex-1 items-center rounded-lg border border-white p-[18px] pr-10 text-base font-bold leading-5 text-white duration-200 hover:border-primary hover:bg-primary focus:bg-primary focus:outline-none focus:ring-0 focus:ring-offset-0",{
                                        'border-[#f9ecea] text-danger hover:text-white': _vm.$v.params.inquiry_reason.$error,
                                        'rounded-b-none !border-primary bg-primary ': _vm.showService,
                                        'border-none bg-primary': _vm.searchResult !== 'Reason for inquiry',
                                    }))+" data-v-36d20b8a>","</div>",[_vm._ssrNode(_vm._ssrEscape("\n                                    "+_vm._s(_vm.searchResult)+"\n                                    ")),_c('icons-selection-arrow',{staticClass:"absolute right-[20px]",class:{ 'rotate-180': _vm.showService, 'text-danger': _vm.$v.params.inquiry_reason.$error }})],2),_vm._ssrNode(" "),_c('Transition',{attrs:{"name":"slide-fade"}},[_c('multiselect',{directives:[{name:"show",rawName:"v-show",value:(_vm.showService),expression:"showService"}],ref:"multiselect",staticClass:"custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs leading-[15px] text-[#586376] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]",attrs:{"max-height":350,"option-height":45,"options":_vm.inquiryReasonOptions.map(function (item) { return item.attributes.inquiryReason; }),"show-no-results":false,"close-on-select":true,"show-labels":false,"placeholder":"Search"},on:{"search-change":_vm.searchChange,"select":_vm.onSelect},model:{value:(_vm.params.inquiry_reason),callback:function ($$v) {_vm.$set(_vm.params, "inquiry_reason", $$v)},expression:"params.inquiry_reason"}},[_c('template',{slot:"caret"},[_c('button',{staticClass:"pointer-events-none absolute right-0 top-0 mr-4 mt-4 xl:mt-[18px]",attrs:{"type":"submit"}},[_c('icons-search',{staticClass:"h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4"})],1)]),_vm._v(" "),_c('template',{slot:"clear"},[(_vm.isClearSearch)?_c('button',{staticClass:"absolute right-0 top-0 mr-11 mt-4 xl:mt-[18px]",attrs:{"type":"button"},on:{"click":function($event){$event.stopPropagation();_vm.params.inquiry_reason = ''}}},[_c('icons-close-time',{staticClass:"h-3 w-3 fill-current text-black xl:h-4 xl:w-4"})],1):_vm._e()])],2)],1)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-36d20b8a>","</div>",[_c('recaptcha',{ref:"recaptcha1",attrs:{"id":"recaptcha1"},on:{"success":function($event){_vm.captchaError = false},"error":function($event){_vm.captchaError = true}}}),_vm._ssrNode(" "+((_vm.captchaError)?("<div class=\"captcha-error\" data-v-36d20b8a>Please verify reCaptcha.</div>"):"<!---->"))],2),_vm._ssrNode(" <div data-v-36d20b8a><button type=\"submit\" class=\"btn ml-auto mr-0 !w-auto !max-w-max px-16 py-4 uppercase hover:bg-primary-700 xl:px-20 xl:py-5\" data-v-36d20b8a>"+_vm._ssrEscape(_vm._s(_vm.$t('submit')))+"</button></div> "),(_vm.isSubmitted)?_vm._ssrNode("<div class=\"mt-5 flex justify-center gap-3\" data-v-36d20b8a>","</div>",[_c('icons-check-circle',{staticClass:"relative top-[2px] h-6 w-6 text-green"}),_vm._ssrNode(" <p class=\"text-xl font-extrabold leading-[25px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green\" data-v-36d20b8a><span data-v-36d20b8a>"+_vm._ssrEscape(_vm._s(_vm.$t('congratulations')))+"</span>"+_vm._ssrEscape(" "+_vm._s(_vm.$t('your_form_has_been_submitted'))+"\n                        ")+"</p>")],2):_vm._e()],2)],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/contact-us/contact-us-heroform.vue?vue&type=template&id=36d20b8a&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// EXTERNAL MODULE: external "vue-click-outside"
var external_vue_click_outside_ = __webpack_require__(129);
var external_vue_click_outside_default = /*#__PURE__*/__webpack_require__.n(external_vue_click_outside_);

// EXTERNAL MODULE: ./helper/custom-validations.js
var custom_validations = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/contact-us/contact-us-heroform.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var contact_us_heroformvue_type_script_lang_js_ = ({
  directives: {
    ClickOutside: external_vue_click_outside_default.a
  },
  props: {
    inquiryReasonOptions: {
      type: Array,
      default: () => [{
        attributes: {
          inquiryReason: "Business Inquiry: I'm looking to buy Venture Plans business services"
        }
      }, {
        attributes: {
          inquiryReason: 'Other'
        }
      }]
    },
    title: {
      type: String,
      default: `Are you looking to raise capital?`
    },
    subTitle: {
      type: String,
      default: 'Venture Plans, your dream starts with us'
    },
    para: {
      type: String,
      default: 'Get funding with FINRA and Harvard Accredited\nIndustry Expert Consultants'
    },
    image: {
      type: String,
      default: '//images.ctfassets.net/koyrlvjc3wvc/33TOOuzmhW8Pi4br5ZSlye/260a28f8b525a9102d3c7803306638f5/contact_banner.jpg'
    }
  },
  data() {
    return {
      isSubmitted: false,
      captchaError: false,
      isClearSearch: false,
      params: {
        inquiry_reason: '',
        full_name: '',
        email: '',
        phone: ''
      },
      showService: false
    };
  },
  computed: {
    searchResult() {
      return !this.$helper.isEmpty(this.params.inquiry_reason) ? this.params.inquiry_reason : 'Reason for inquiry';
    }
  },
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
        return false;
      }
      if (!this.captchaError) {
        const data = await this.$hubspot.contactUsBannerForm({
          ...this.params
        });
        if (!data) {
          return false;
        }
        this.isSubmitted = true;
        this.$v.params.$reset();
        // this.$recaptcha.reset();
        this.params = {
          inquiry_reason: '',
          full_name: '',
          email: '',
          phone: ''
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./components/contact-us/contact-us-heroform.vue?vue&type=script&lang=js&
 /* harmony default export */ var contact_us_contact_us_heroformvue_type_script_lang_js_ = (contact_us_heroformvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/contact-us/contact-us-heroform.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(193)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contact_us_contact_us_heroformvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "36d20b8a",
  "39fef62f"
  
)

/* harmony default export */ var contact_us_heroform = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsSelectionArrow: __webpack_require__(138).default,IconsSearch: __webpack_require__(70).default,IconsCloseTime: __webpack_require__(181).default,IconsCheckCircle: __webpack_require__(69).default})


/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/contact-us/contact-private-placement.vue?vue&type=template&id=a4b74588&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"bg-[#f4f4f8] py-10 md:py-16 lg:py-20"},[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"text-center\">","</div>",[_vm._ssrNode("<h3 class=\"pb-9 text-xl font-medium uppercase lg:pb-[43px]\">"+(_vm._s(_vm.title))+"</h3> "),_vm._ssrNode("<div class=\"flex flex-wrap items-center justify-center gap-4 lg:gap-[50px]\">","</div>",_vm._l((_vm.logos),function(logo,idx){return _vm._ssrNode("<div class=\"flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white p-5 px-[17px] shadow-[0px_1px_8px_rgba(0,0,0,0.2)] xl:h-[126px] xl:w-[126px]\">","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":logo.attributes.iconUrl,"alt":'Logo-' + idx,"loading":"lazy"}})],1)}),0)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/contact-us/contact-private-placement.vue?vue&type=template&id=a4b74588&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/contact-us/contact-private-placement.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var contact_private_placementvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: 'AS SEEN ON'
    },
    logos: {
      type: Array,
      default: () => [{
        id: 1,
        attributes: {
          title: null,
          description: null,
          iconUrl: 'https://venturefund.vercel.app/assets/img/logo-9.png'
        }
      }, {
        id: 1,
        attributes: {
          title: null,
          description: null,
          iconUrl: '/assets/img/placement-logo-5.png'
        }
      }, {
        id: 1,
        attributes: {
          title: null,
          description: null,
          iconUrl: '/assets/img/placement-logo-3.png'
        }
      }]
    }
  }
});
// CONCATENATED MODULE: ./components/contact-us/contact-private-placement.vue?vue&type=script&lang=js&
 /* harmony default export */ var contact_us_contact_private_placementvue_type_script_lang_js_ = (contact_private_placementvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/contact-us/contact-private-placement.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  contact_us_contact_private_placementvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8a15e686"
  
)

/* harmony default export */ var contact_private_placement = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-location.vue?vue&type=template&id=1fc2a011&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"36","viewBox":"0 0 24 36"}},[_vm._ssrNode("<g><g><path fill=\"currentColor\" d=\"M11.94 6.869c3.035 0 5.496 2.34 5.496 5.226 0 2.887-2.46 5.227-5.495 5.227s-5.495-2.34-5.495-5.227c0-2.886 2.46-5.226 5.495-5.226zm0-6.098C5.367.771.037 6.036.037 12.531c0 2.34 1.054 5.546 2.203 7.404l9.702 15.679 9.701-15.68c1.15-1.855 2.204-5.062 2.204-7.403 0-6.495-5.33-11.76-11.905-11.76z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-location.vue?vue&type=template&id=1fc2a011&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-location.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7113d2ca"
  
)

/* harmony default export */ var icons_location = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_contact_us_vue_vue_type_style_index_0_id_772790c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_contact_us_vue_vue_type_style_index_0_id_772790c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_contact_us_vue_vue_type_style_index_0_id_772790c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_contact_us_vue_vue_type_style_index_0_id_772790c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_contact_us_vue_vue_type_style_index_0_id_772790c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contact-popper[x-placement^=bottom-start][data-v-772790c9]{top:20px!important}.contact-popper[x-placement^=top-start][data-v-772790c9]{top:-20px!important}@media (max-width:768px){.iphone-device.contact-popper[x-placement^=bottom-start][data-v-772790c9]{top:0!important}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-contact-us.vue?vue&type=template&id=772790c9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',[_c('contact-us-heroform',{attrs:{"title":_vm.content.bannerTitle,"sub-title":_vm.content.bannerSubTitle,"para":_vm.content.bannerDescription,"image":_vm.content.bannerImgUrl,"inquiry-reason-options":_vm.reasonForInquiries}}),_vm._ssrNode(" "),_vm._ssrNode("<section"+(_vm._ssrClass("relative z-10 -mt-[42px]",{ 'z-[1]': _vm.isOpenShare }))+" data-v-772790c9>","</section>",[_vm._ssrNode("<div class=\"container relative px-10 lg:px-[97px] xl:px-4\" data-v-772790c9>","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between gap-4 pb-2\" data-v-772790c9>","</div>",[_vm._ssrNode("<div class=\"w-full overflow-auto pb-2 lg:pb-0\" data-v-772790c9>","</div>",[_vm._ssrNode("<ul class=\"flex items-center gap-4 text-[15px] text-white sm:justify-center md:gap-8 xl:gap-20\" data-v-772790c9>","</ul>",_vm._l((_vm.Links),function(link){return _vm._ssrNode("<li data-v-772790c9>","</li>",[_c('nuxt-link',{staticClass:"inline-block whitespace-nowrap capitalize hover:text-primary",attrs:{"to":link.link}},[_vm._v(_vm._s(link.name))])],1)}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-5 pb-1\" data-v-772790c9>","</div>",[_c('common-share',{attrs:{"text-white":true}})],1)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"py-10 md:py-20 xl:pb-[70px] xl:pt-28\" data-v-772790c9>","</section>",[_vm._ssrNode("<div class=\"container px-10 lg:px-[97px] xl:px-4\" data-v-772790c9>","</div>",[_vm._ssrNode("<div class=\"mb-5 flex items-center justify-center gap-[5px] text-center md:mb-8 md:gap-8 xl:mb-16\" data-v-772790c9><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\" data-v-772790c9></div> <h2 class=\"text-[22px] font-bold uppercase leading-8 text-black sm:shrink-0 md:text-3xl md:leading-[43px]\" data-v-772790c9>"+(_vm._s(_vm.content.section1Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\" data-v-772790c9></div></div> "),_vm._ssrNode("<div class=\"flex flex-col items-start gap-5 md:flex-row xl:gap-52\" data-v-772790c9>","</div>",[_vm._ssrNode("<div class=\"flex-1\" data-v-772790c9>","</div>",[_vm._ssrNode("<p"+(_vm._ssrClass("overflow-hidden whitespace-pre-line text-sm font-medium leading-6 text-black-700 xl:text-lg xl:-tracking-[0.05px]",[_vm.isShowReadMore ? 'h-auto' : 'max-h-[102px] lg:max-h-[106px]']))+" data-v-772790c9>"+(_vm._s(_vm.content.section1Description))+"</p> "),_vm._ssrNode("<div class=\"!mt-[36px]\" data-v-772790c9>","</div>",[(!_vm.isShowReadMore)?_vm._ssrNode("<button"+(_vm._ssrAttr("aria-label",_vm.$t('read_more')))+" class=\"flex items-center justify-center gap-4 font-semibold text-primary md:justify-start xl:text-xl\" data-v-772790c9>","</button>",[_vm._ssrNode("<p class=\"text-base\" data-v-772790c9>"+_vm._ssrEscape(_vm._s(_vm.$t('read_more')))+"</p> "),_c('icons-downarrow',{staticClass:"w-2 xl:w-[11px]"})],2):_vm._ssrNode("<button"+(_vm._ssrAttr("aria-label",_vm.$t('read_less')))+" class=\"flex items-center justify-center gap-4 font-semibold text-primary md:justify-start xl:text-xl\" data-v-772790c9>","</button>",[_vm._ssrNode("<p class=\"text-base\" data-v-772790c9>"+_vm._ssrEscape(_vm._s(_vm.$t('read_less')))+"</p> "),_c('icons-downarrow',{staticClass:"w-2 rotate-180 xl:w-[11px]"})],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mx-auto w-[271px] flex-none rounded-[42px] bg-[#F8F8F8] shadow-[0px_3px_6px_rgba(175,175,175,0.30)] lg:mr-0 xl:w-72\" data-v-772790c9>","</div>",[_vm._ssrNode("<p class=\"border-b-2 border-[#ebebeb] pb-[11px] pt-[29px] text-center text-[19px] font-bold text-[#919191]\" data-v-772790c9>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.content.miniCardTitle)+"\n                    ")+"</p> "),_vm._ssrNode("<div class=\"px-10 pb-[34px] pt-[22px] md:px-11 xl:px-12\" data-v-772790c9>","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",("tel:" + (_vm.content.miniCardNumber))))+" class=\"mb-3 flex items-center gap-3 text-base font-bold text-primary md:gap-5\" data-v-772790c9>","</a>",[_c('icons-phone',{staticClass:"h-4 w-4"}),_vm._ssrNode(" <p data-v-772790c9>"+_vm._ssrEscape(_vm._s(_vm.content.miniCardNumber))+"</p>")],2),_vm._ssrNode(" <p class=\"flex items-center gap-3 text-base font-bold text-primary md:gap-5\" data-v-772790c9><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"13\" viewBox=\"0 0 19 13\" class=\"shrink-0\" data-v-772790c9><g data-v-772790c9><g data-v-772790c9><path fill=\"currentColor\" d=\"M17.704 3.97c.379-.199.375.033.375.211v7.058c0 .406-.548.968-.968.968H1.625c-.42 0-.968-.562-.968-.968v-7.06c0-.177-.004-.408.374-.21.537.28 7.112 3.726 7.44 3.898.33.172.56.192.878.192.318 0 .548-.02.877-.192l7.479-3.898zM1.214 1.837C.74 1.583.293.593 1.161.593h16.375c.87 0 .422.99-.052 1.245l-7.259 3.899c-.244.13-.56.192-.877.192-.318 0-.633-.061-.877-.192l-7.26-3.9z\" data-v-772790c9></path></g></g></svg> <a"+(_vm._ssrAttr("href",("mailto:" + (_vm.content.miniCardEmail))))+" data-v-772790c9>"+_vm._ssrEscape(_vm._s(_vm.content.miniCardEmail))+"</a></p>")],2)],2)],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"pb-10 md:pb-16 lg:pb-[240px]\" data-v-772790c9>","</section>",[_vm._ssrNode("<div class=\"container px-10 lg:px-[97px] xl:px-4\" data-v-772790c9>","</div>",[_vm._ssrNode("<div class=\"mx-auto grid max-w-[300px] grid-cols-1 border border-[#d5d5d5] bg-white sm:max-w-none sm:grid-cols-2 md:grid-cols-3\" data-v-772790c9>","</div>",[_vm._l((_vm.section2Data),function(data,i){return _vm._ssrNode("<div class=\"flex flex-col border-b border-[#d5d5d5] p-4 sm:border-r xl:p-14\" data-v-772790c9>","</div>",[_vm._ssrNode("<h3 class=\"mb-5 text-lg font-semibold text-[#202a36] lg:mb-10 lg:text-[23px] lg:leading-9\" data-v-772790c9>"+_vm._ssrEscape(_vm._s(data.attributes.locationTitle))+"</h3> "),_vm._ssrNode("<div class=\"flex justify-between gap-5\" data-v-772790c9>","</div>",[_vm._ssrNode("<div class=\"text-[15px] leading-6 -tracking-[0.03px] text-[#202a36]\" data-v-772790c9>"+((data.attributes.locationAddress)?("<div class=\"mb-6 min-h-[72px]\" data-v-772790c9>"+(_vm._s(data.attributes.locationAddress))+"</div>"):"<!---->")+"</div> "),(data.attributes.locationAddress)?_vm._ssrNode("<a"+(_vm._ssrAttr("href",("http://maps.google.com/maps?q=" + (data.attributes.locationAddress.replace(/(<|<)br\s*\/*(>|>)/g, '')))))+" target=\"_blank\" data-v-772790c9>","</a>",[_c('icons-location',{staticClass:"h-5 w-4 text-primary"})],1):_vm._e()],2),_vm._ssrNode(" <p data-v-772790c9>"+_vm._ssrEscape("Phone: "+_vm._s(data.attributes.locationPhoneNumber))+"</p> <a"+(_vm._ssrAttr("href",("mailto:" + (data.attributes.locationEmail))))+" data-v-772790c9>\n                        Email: <span class=\"border-b-2 border-primary hover:text-primary\" data-v-772790c9>"+_vm._ssrEscape(_vm._s(data.attributes.locationEmail))+"</span></a> <div class=\"mb-8\" data-v-772790c9></div> "),_c('nuxt-link',{staticClass:"nuxt-link-active mt-auto flex items-center gap-4 text-sm font-semibold leading-[14px] text-primary hover:text-primary-700",attrs:{"aria-label":data.attributes.linkText,"to":("/cities/" + (data.attributes.cityPageSlug))}},[_vm._v("\n                        "+_vm._s(data.attributes.linkText)+"\n                        "),_c('icons-selection-arrow',{staticClass:"h-3 w-3 -rotate-90"})],1)],2)}),_vm._ssrNode(" "),_vm._l((_vm.section3Data),function(data,i){return _vm._ssrNode("<div class=\"flex flex-col border-b border-[#d5d5d5] p-4 sm:border-r xl:p-14\" data-v-772790c9>","</div>",[_vm._ssrNode("<h3 class=\"mb-5 text-lg font-semibold text-[#202a36] lg:mb-10 lg:text-[23px] lg:leading-9\" data-v-772790c9>"+_vm._ssrEscape(_vm._s(data.attributes.title))+"</h3> <div class=\"mb-8 flex justify-between gap-5\" data-v-772790c9><div class=\"text-[15px] leading-6 -tracking-[0.03px] text-[#202a36]\" data-v-772790c9><div class=\"mb-6 min-h-[145px] md:whitespace-pre-line\" data-v-772790c9>"+(_vm._s(data.attributes.description ? data.attributes.description : ''))+"</div> "+((data.attributes.email)?("<a"+(_vm._ssrAttr("href",("mailto:" + (data.attributes.email))))+" data-v-772790c9>\n                                Email: <span class=\"border-b-2 border-primary hover:text-primary\" data-v-772790c9>"+_vm._ssrEscape(_vm._s(data.attributes.email))+"</span></a>"):"<!---->")+"</div></div> "),(_vm.$helper.isInternalUrl(data.attributes.linkUrl))?_c('nuxt-link',{staticClass:"nuxt-link-active mt-auto flex items-center gap-4 text-sm font-semibold leading-[14px] text-primary hover:text-primary-700",attrs:{"to":data.attributes.linkUrl,"aria-label":data.attributes.linkText}},[_vm._v("\n                        "+_vm._s(data.attributes.linkText)+"\n                        "),_c('icons-selection-arrow',{staticClass:"h-3 w-3 -rotate-90"})],1):_c('a',{staticClass:"nuxt-link-active mt-auto flex items-center gap-4 text-sm font-semibold leading-[14px] text-primary hover:text-primary-700",attrs:{"target":"_blank","aria-label":data.attributes.linkText,"href":data.attributes.linkUrl}},[_vm._v("\n                        "+_vm._s(data.attributes.linkText)+"\n                        "),_c('icons-selection-arrow',{staticClass:"h-3 w-3 -rotate-90"})],1)],2)})],2)])]),_vm._ssrNode(" "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video1ThumbnailUrl,"video-u-r-l":_vm.content.video1Url,"title":_vm.content.video1Title,"button-title":_vm.content.video1ButtonText,"button-u-r-l":_vm.content.video1ButtonLink}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"py-10 md:py-16 lg:pb-[74px] lg:pt-[222px]\" data-v-772790c9>","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\" data-v-772790c9>","</div>",[_vm._ssrNode("<div class=\"mb-5 flex items-center justify-center gap-[5px] text-center md:gap-8\" data-v-772790c9><div class=\"hidden h-px w-full bg-[#d5d5d5] lg:block\" data-v-772790c9></div> <h2 class=\"text-[22px] font-bold uppercase leading-8 text-black md:text-3xl md:leading-[43px] lg:shrink-0 [&>span]:text-primary\" data-v-772790c9>"+(_vm._s(_vm.content.section4Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] lg:block\" data-v-772790c9></div></div> <p class=\"mb-10 text-center text-sm font-medium leading-6 -tracking-[0.04px] text-[#353535] md:mb-[52px] xl:text-[1.2rem]\" data-v-772790c9>"+_vm._ssrEscape("\n                "+_vm._s(_vm.content.section4Description)+"\n            ")+"</p> "),_c('common-featured-services',{staticClass:"mb-10 items-center xl:mb-20",attrs:{"services":_vm.section4Data}}),_vm._ssrNode(" "),(_vm.$helper.isInternalUrl(_vm.content.CTA1ButtonLink))?_c('nuxt-link',{staticClass:"b-btn mx-auto block text-xs lg:max-w-[322px] lg:py-6",attrs:{"to":_vm.content.CTA1ButtonLink}},[_vm._v(_vm._s(_vm.content.CTA1ButtonText))]):_c('a',{staticClass:"b-btn mx-auto block text-xs lg:max-w-[322px] lg:py-6",attrs:{"target":"_blank","href":_vm.content.CTA1ButtonLink}},[_vm._v(" "+_vm._s(_vm.content.CTA1ButtonText))])],2)]),_vm._ssrNode(" "),_c('common-interested-service',{attrs:{"background-image":_vm.content.section5ImgUrl,"subtitle":_vm.content.section5Subtitle,"title":_vm.content.section5Title,"description":_vm.content.section5Description,"button-link":_vm.content.section5ButtonLink,"button-title":_vm.content.section5ButtonText}}),_vm._ssrNode(" "),_c('contact-private-placement',{attrs:{"title":_vm.content.section6Title,"logos":_vm.section6Data}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"py-10 md:py-16 xl:pb-[87px] xl:pt-[102px]\" data-v-772790c9>","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\" data-v-772790c9>","</div>",[_vm._ssrNode("<div class=\"flex flex-col items-center justify-around gap-4 sm:flex-row\" data-v-772790c9>","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",("http://maps.google.com/maps?q=" + (_vm.contactUsData.address))))+" target=\"_blank\" class=\"group mb-5 w-44 text-center text-base font-medium -tracking-[0.03px] text-black transition-all duration-300 md:mb-0 md:hover:text-primary xl:w-56 xl:text-xl xl:-tracking-[0.04px]\" data-v-772790c9>","</a>",[_c('icons-location',{staticClass:"mx-auto mb-5 h-8 w-8 md:group-hover:text-primary xl:mb-[46px]"}),_vm._ssrNode(" <p data-v-772790c9>"+_vm._ssrEscape(_vm._s(_vm.contactUsData.address))+"</p>")],2),_vm._ssrNode(" <a"+(_vm._ssrAttr("href",("mailto:" + (_vm.contactUsData.email))))+" class=\"group mb-5 w-44 text-center text-base font-medium -tracking-[0.03px] text-black transition-all duration-300 md:mb-0 md:hover:text-primary xl:w-56 xl:text-xl xl:-tracking-[0.04px]\" data-v-772790c9><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 22\" class=\"mx-auto mb-5 h-8 w-8 md:group-hover:text-primary xl:mb-[46px]\" data-v-772790c9><g data-v-772790c9><g data-v-772790c9><path fill=\"currentColor\" d=\"M31.27 6.75c.685-.354.678.061.678.38v12.66c0 .729-.993 1.736-1.755 1.736H2.11c-.761 0-1.755-1.007-1.755-1.736V7.128c0-.319-.007-.733.678-.38.974.503 12.897 6.685 13.494 6.994.597.308 1.015.345 1.59.345.577 0 .995-.036 1.591-.345.597-.31 12.588-6.49 13.562-6.992zM1.363 2.927C.507 2.47-.303.694 1.271.694h29.696c1.575 0 .763 1.776-.095 2.233-.857.454-12.72 6.76-13.164 6.994-.443.234-1.014.345-1.59.345-.576 0-1.149-.11-1.591-.345-.442-.234-12.307-6.54-13.164-6.994z\" data-v-772790c9></path></g></g></svg> <p data-v-772790c9>"+_vm._ssrEscape(_vm._s(_vm.contactUsData.email))+"</p></a> "),_vm._ssrNode("<a"+(_vm._ssrAttr("href",("tel:" + (_vm.contactUsData.phone))))+" class=\"group mb-5 w-44 text-center text-base font-medium -tracking-[0.03px] text-black transition-all duration-300 md:mb-0 md:hover:text-primary xl:w-56 xl:text-xl xl:-tracking-[0.04px]\" data-v-772790c9>","</a>",[_c('icons-phone',{staticClass:"mx-auto mb-5 h-8 w-8 md:group-hover:text-primary xl:mb-[46px]"}),_vm._ssrNode(" <p data-v-772790c9>"+_vm._ssrEscape(_vm._s(_vm.contactUsData.phone))+"</p>")],2)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"pb-20\" data-v-772790c9>","</section>",[_vm._ssrNode("<div class=\"container lg:px-[97px] xl:px-4\" data-v-772790c9>","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 space-y-20 md:grid-cols-2 md:gap-5 md:space-y-0 lg:gap-24 xl:gap-36\" data-v-772790c9>","</div>",[_vm._ssrNode("<div data-v-772790c9><h3 class=\"text-[28px] font-bold leading-[60px] text-[#030303]\" data-v-772790c9>"+(_vm._s(_vm.content.section3Column1Title))+"</h3> <div class=\"pt-6 lg:pt-16\" data-v-772790c9><ul class=\"divide-y divide-[#d5d5d5] border-b border-t border-[#d5d5d5]\" data-v-772790c9>"+(_vm._ssrList((_vm.section3Column1Data),function(socialMedia){return ("<li class=\"py-4\" data-v-772790c9><a"+(_vm._ssrAttr("href",socialMedia.attributes.url))+" target=\"_blank\" class=\"flex items-center justify-between text-lg text-[#202a36] hover:text-primary\" data-v-772790c9><span data-v-772790c9>"+_vm._ssrEscape(_vm._s(socialMedia.attributes.socialMediaName))+"</span> <div class=\"flex w-7 justify-center\" data-v-772790c9>"+(_vm._s(_vm.getSocialMediaSVG(socialMedia.attributes.socialMediaName)))+"</div></a></li>")}))+"</ul></div></div> "),_vm._ssrNode("<div data-v-772790c9>","</div>",[_vm._ssrNode("<h3 class=\"text-[28px] font-bold leading-[60px] text-[#030303]\" data-v-772790c9>Subscribe</h3> "),_vm._ssrNode("<div class=\"pt-6 lg:pt-16\" data-v-772790c9>","</div>",[_vm._ssrNode("<ul class=\"divide-y divide-[#d5d5d5] border-b border-t border-[#d5d5d5]\" data-v-772790c9>","</ul>",[_vm._ssrNode("<li class=\"flex items-center justify-between py-4 text-lg text-[#202a36] hover:text-primary\" data-v-772790c9>","</li>",[_vm._ssrNode("<a target=\"_blank\" href=\"/subscribe\" data-v-772790c9>Venture Plans Insights Newsletter</a> "),_c('icons-right-menu-arrow',{staticClass:"text-[#00ADFF]"})],2)])])],2)],2)])]),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"img-url":_vm.readyToTalkForm.imgUrl,"service-options":_vm.readyToTalkForm.services.data,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/base-contact-us.vue?vue&type=template&id=772790c9&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-contact-us.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var base_contact_usvue_type_script_lang_js_ = ({
  props: {
    content: {
      type: Object,
      default: () => {
        return null;
      }
    }
  },
  data() {
    return {
      isShowReadMore: false,
      isOpenShare: false,
      isShowSaveBtn: false,
      deviceIphone: '',
      Links: [{
        name: 'consulting',
        link: '/consulting'
      }, {
        name: 'technology',
        link: '/technology'
      }, {
        name: 'financing',
        link: '/financing'
      }, {
        name: 'legal',
        link: '/legal-advisory'
      }, {
        name: 'business plans',
        link: '/consulting/business-plans/grant-business-plans'
      }, {
        name: 'careers',
        link: '/careers'
      }, {
        name: 'Reviews',
        link: '/reviews'
      }]
    };
  },
  head() {
    var _this$content, _this$content$metaFie, _this$content2, _this$content2$metaFi, _this$content3, _this$content3$metaFi, _this$content4, _this$content4$metaFi, _this$content5, _this$content5$metaFi, _this$content6, _this$content6$metaFi, _this$content7, _this$content7$metaFi, _this$content8, _this$content8$metaFi, _this$content9, _this$content9$metaFi, _this$content10, _this$content10$metaF, _this$content11, _this$content11$metaF;
    return {
      title: (_this$content = this.content) === null || _this$content === void 0 ? void 0 : (_this$content$metaFie = _this$content.metaFields[0]) === null || _this$content$metaFie === void 0 ? void 0 : _this$content$metaFie.title,
      link: [{
        rel: 'canonical',
        href: (_this$content2 = this.content) !== null && _this$content2 !== void 0 && (_this$content2$metaFi = _this$content2.metaFields[0]) !== null && _this$content2$metaFi !== void 0 && _this$content2$metaFi.canonicalUrl ? (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://seveti.vercel.app') + this.content.metaFields[0].canonicalUrl : (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://seveti.vercel.app') + this.$route.path
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
    section3Column1Data() {
      var _this$content12, _this$content12$Socia;
      return ((_this$content12 = this.content) === null || _this$content12 === void 0 ? void 0 : (_this$content12$Socia = _this$content12.SocialLinksComponent) === null || _this$content12$Socia === void 0 ? void 0 : _this$content12$Socia.data) || [];
    },
    reasonForInquiries() {
      var _this$content13, _this$content13$reaso;
      return ((_this$content13 = this.content) === null || _this$content13 === void 0 ? void 0 : (_this$content13$reaso = _this$content13.reasonForEnquiries) === null || _this$content13$reaso === void 0 ? void 0 : _this$content13$reaso.data) || [];
    },
    section2Data() {
      var _this$content14, _this$content14$secti;
      return ((_this$content14 = this.content) === null || _this$content14 === void 0 ? void 0 : (_this$content14$secti = _this$content14.section2Component) === null || _this$content14$secti === void 0 ? void 0 : _this$content14$secti.data) || [];
    },
    section3Data() {
      var _this$content15, _this$content15$secti;
      return ((_this$content15 = this.content) === null || _this$content15 === void 0 ? void 0 : (_this$content15$secti = _this$content15.section3Component) === null || _this$content15$secti === void 0 ? void 0 : _this$content15$secti.data) || [];
    },
    section4Data() {
      var _this$content16, _this$content16$secti;
      return ((_this$content16 = this.content) === null || _this$content16 === void 0 ? void 0 : (_this$content16$secti = _this$content16.section4Component) === null || _this$content16$secti === void 0 ? void 0 : _this$content16$secti.data) || [];
    },
    section6Data() {
      var _this$content17, _this$content17$secti;
      return ((_this$content17 = this.content) === null || _this$content17 === void 0 ? void 0 : (_this$content17$secti = _this$content17.section6Component) === null || _this$content17$secti === void 0 ? void 0 : _this$content17$secti.data) || [];
    },
    contactUsData() {
      var _this$content18, _this$content18$conta, _this$content18$conta2;
      return ((_this$content18 = this.content) === null || _this$content18 === void 0 ? void 0 : (_this$content18$conta = _this$content18.contactUs) === null || _this$content18$conta === void 0 ? void 0 : (_this$content18$conta2 = _this$content18$conta.data) === null || _this$content18$conta2 === void 0 ? void 0 : _this$content18$conta2.attributes) || {};
    },
    readyToTalkForm() {
      var _this$content19, _this$content19$ready, _this$content19$ready2;
      return ((_this$content19 = this.content) === null || _this$content19 === void 0 ? void 0 : (_this$content19$ready = _this$content19.readyToTalkForm) === null || _this$content19$ready === void 0 ? void 0 : (_this$content19$ready2 = _this$content19$ready.data) === null || _this$content19$ready2 === void 0 ? void 0 : _this$content19$ready2.attributes) || {
        services: {
          data: []
        }
      };
    }
  },
  mounted() {
    this.deviceIphone = this.$helper.isDeviceIphone();
    document.addEventListener('scroll', () => {
      var _this$$refs, _this$$refs$share;
      (_this$$refs = this.$refs) === null || _this$$refs === void 0 ? void 0 : (_this$$refs$share = _this$$refs.share) === null || _this$$refs$share === void 0 ? void 0 : _this$$refs$share.doClose();
    });
  },
  methods: {
    getSocialMediaSVG(socialMediaName) {
      if (typeof socialMediaName !== 'string') return;
      if ((socialMediaName === null || socialMediaName === void 0 ? void 0 : socialMediaName.toLowerCase()) === 'twitter') {
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" class="w-5 text-[#00ADFF]"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';
      } else if ((socialMediaName === null || socialMediaName === void 0 ? void 0 : socialMediaName.toLowerCase()) === 'facebook') {
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" class="w-3 text-[#0f69b5]"><path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>';
      } else if ((socialMediaName === null || socialMediaName === void 0 ? void 0 : socialMediaName.toLowerCase()) === 'instagram') {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><defs><linearGradient id="ugyma" x1="22.05" x2="5.74" y1="6.12" y2="20.04" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#cc9518"></stop> <stop offset=".71" stop-color="#a82d54"></stop> <stop offset="1" stop-color="#822da8"></stop></linearGradient></defs> <g><g clip-path="url(#clip-a17265f8-c5ec-488e-a758-e6facbdc1b59)"><path fill="url(#ugyma)" d="M19.236 12.997a6.255 6.255 0 1 1-12.51 0 6.255 6.255 0 0 1 12.51 0zm-6.255 4.06a4.06 4.06 0 1 0 0-8.12 4.06 4.06 0 0 0 0 8.12zm6.502-9.101a1.462 1.462 0 1 1 0-2.924 1.462 1.462 0 0 1 0 2.924zM12.68.816c-3.034 0-3.462.016-4.721.073-1.297.059-2.182.265-2.957.566a5.968 5.968 0 0 0-2.157 1.406A5.96 5.96 0 0 0 1.44 5.018c-.3.774-.506 1.66-.565 2.957C.814 9.273.8 9.689.8 12.997c0 3.308.013 3.723.073 5.023.059 1.296.264 2.181.565 2.956a5.97 5.97 0 0 0 1.406 2.158 5.956 5.956 0 0 0 2.157 1.404c.775.3 1.66.507 2.957.567 1.3.06 1.714.073 5.022.073 3.309 0 3.723-.014 5.022-.073 1.297-.06 2.183-.266 2.958-.567a5.956 5.956 0 0 0 2.157-1.404 5.978 5.978 0 0 0 1.405-2.158c.301-.775.507-1.66.566-2.956.057-1.26.072-1.688.073-4.721v-.604c0-3.033-.016-3.462-.073-4.72-.06-1.297-.265-2.183-.566-2.957a5.968 5.968 0 0 0-1.405-2.157 5.968 5.968 0 0 0-2.157-1.406C20.186 1.154 19.3.948 18.003.89c-1.258-.057-1.687-.073-4.72-.074zm.301 2.194c3.253 0 3.638.013 4.922.072 1.188.054 1.833.252 2.263.419.568.22.974.485 1.4.912.426.425.69.83.912 1.4.166.43.364 1.075.418 2.262.06 1.285.072 1.67.072 4.922s-.013 3.638-.072 4.922c-.054 1.188-.252 1.833-.418 2.262a3.8 3.8 0 0 1-.912 1.4 3.77 3.77 0 0 1-1.4.911c-.43.168-1.075.366-2.263.42-1.284.059-1.669.071-4.922.071-3.253 0-3.638-.012-4.922-.07-1.188-.055-1.833-.253-2.262-.42a3.77 3.77 0 0 1-1.4-.911 3.78 3.78 0 0 1-.912-1.401c-.167-.43-.366-1.074-.42-2.262-.057-1.284-.07-1.67-.07-4.922 0-3.253.013-3.637.07-4.922.054-1.187.253-1.833.42-2.263.221-.568.485-.974.912-1.4.426-.426.832-.69 1.4-.911.429-.167 1.074-.365 2.262-.42 1.284-.058 1.67-.07 4.922-.07"></path></g></g></svg>';
      } else if ((socialMediaName === null || socialMediaName === void 0 ? void 0 : socialMediaName.toLowerCase()) === 'tiktok') {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 2859 3333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" class="text-[#000]"><path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"></path></svg>';
      } else if ((socialMediaName === null || socialMediaName === void 0 ? void 0 : socialMediaName.toLowerCase()) === 'youtube') {
        return '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="18" viewBox="0 0 28 18"><g><g><path fill="#e33122" d="M10.936 14.893V3.631l8.447 5.631zM22.761.815H5.868C3.081.815.8 2.715.8 5.04v8.446c0 2.323 2.28 4.224 5.068 4.224h16.893c2.788 0 5.068-1.9 5.068-4.224V5.04c0-2.323-2.28-4.224-5.068-4.224z"></path></g></g></svg>';
      } else if ((socialMediaName === null || socialMediaName === void 0 ? void 0 : socialMediaName.toLowerCase()) === 'linkedin') {
        return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" class="w-5 text-[#0f69b5]"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>';
      } else return '';
    }
  }
});
// CONCATENATED MODULE: ./components/base/base-contact-us.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_base_contact_usvue_type_script_lang_js_ = (base_contact_usvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/base/base-contact-us.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(220)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_base_contact_usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "772790c9",
  "25bfb09c"
  
)

/* harmony default export */ var base_contact_us = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ContactUsHeroform: __webpack_require__(197).default,CommonShare: __webpack_require__(143).default,IconsDownarrow: __webpack_require__(154).default,IconsPhone: __webpack_require__(71).default,IconsLocation: __webpack_require__(202).default,IconsSelectionArrow: __webpack_require__(138).default,CommonContactUs: __webpack_require__(139).default,CommonFeaturedServices: __webpack_require__(172).default,CommonInterestedService: __webpack_require__(145).default,ContactPrivatePlacement: __webpack_require__(198).default,IconsRightMenuArrow: __webpack_require__(24).default,CommonReadytotalk: __webpack_require__(140).default})


/***/ })

};;
//# sourceMappingURL=base-contact-us.js.map