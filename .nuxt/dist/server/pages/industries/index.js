exports.ids = [136,19,21,29,35,37,41,42,76,77,82,84,97,104,109,114,120];
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

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/industries/index.vue?vue&type=template&id=6f0c2c68&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"relative bg-cover bg-[right_32%_top] bg-no-repeat pb-9 pt-[287px] md:bg-left md:pt-[202px] xl:pb-20\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (_vm.content.bannerImgUrl) + ")") }, null))+"><div class=\"absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent\"></div> <div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]\"></div> <div class=\"container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4\"><div><h1 class=\"mb-4 text-[28px] font-bold leading-8 text-white md:text-[40px] md:leading-[53px]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerTitle))+"</h1> <p class=\"mb-5 border-l-[3px] border-primary pl-2.5 text-sm text-[#FBFBFD] md:text-base\">"+(_vm._s(_vm.content.bannerDescription))+"</p></div></div></section> "),_c('common-banner-tab',{attrs:{"tabs":_vm.tabs,"is-show-save-btn":true}}),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<section class=\"pb-[42px] pt-24\"><div id=\"OurLatestInsights\" class=\"container\"><div class=\"justify-between gap-5 space-y-4 md:flex md:space-y-0\"><div><h2 class=\"inline-block text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl\">"+(_vm._s(_vm.content.section1Title))+"</h2></div> <div class=\"max-w-[780px]\"><p class=\"text-[#353535] md:text-xl md:leading-9\">"+_vm._ssrEscape("\n                            "+_vm._s(_vm.content.section1Paragraph)+"\n                        ")+"</p></div></div></div></section> <div class=\"mb-10 h-px w-full bg-[#707070]/50\"></div> "),_c('client-only',[_c('section',{staticClass:"relative"},[_c('div',{staticClass:"container lg:px-[97px] xl:px-4"},[_c('div',{staticClass:"flex flex-col items-center gap-4 xl:flex-row xl:flex-nowrap xl:gap-4"},[_c('p',{staticClass:"mr-5 hidden flex-initial whitespace-nowrap text-base font-medium text-[#5f5f5f] xl:block"},[_vm._v("Filter by:")]),_vm._v(" "),_c('p',{staticClass:"flex w-full flex-1 items-center justify-between border border-[#d5d5d5] px-6 py-3.5 text-base font-medium text-[#00ADFF] xl:hidden"},[_vm._v("\n                            Filter Insights\n                            "),_c('svg',{staticClass:"h-6 w-6",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke":"currentColor","stroke-width":"2"},on:{"click":function($event){_vm.showMobileFilter = !_vm.showMobileFilter}}},[_c('path',{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","d":"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"}})])]),_vm._v(" "),_c('ul',{staticClass:"mb-6 hidden w-full flex-col justify-center gap-4 xl:mb-0 xl:flex xl:w-auto xl:flex-row xl:items-center xl:gap-[15px] xl:pl-0",class:{ '!flex': _vm.showMobileFilter }},[_c('li',[_c('popper',{ref:"industryPopper",attrs:{"trigger":"clickToToggle","options":{
                                        placement: 'bottom',
                                        modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                        preventOverflow: {
                                            padding: 0,
                                        },
                                    }},on:{"show":function($event){return _vm.openPopper('industry')},"hide":function($event){return _vm.closePopper()}}},[_c('div',{staticClass:"popper !fixed right-0 z-[60] !my-0 h-full !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto"},[_c('div',{staticClass:"relative block p-3 text-center xl:hidden"},[_vm._v("\n                                            Industry\n                                            "),_c('button',{staticClass:"absolute right-2.5 top-4 h-5 w-5 cursor-pointer",on:{"click":function($event){return _vm.$refs.industryPopper.doClose()}}},[_c('icons-close')],1)]),_vm._v(" "),_c('div',{staticClass:"container pb-4"},[_c('ul',{staticClass:"block max-h-[calc(100vh-120px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6"},_vm._l((_vm.filter1Data),function(filter){return _c('li',{key:filter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":filter.filterCateogries,"label":filter.filterCateogries},model:{value:(_vm.industryFilterOption[filter.filterCateogries]),callback:function ($$v) {_vm.$set(_vm.industryFilterOption, filter.filterCateogries, $$v)},expression:"industryFilterOption[filter.filterCateogries]"}}),_vm._v(" "),(filter.subCategories.length)?_c('ul',{staticClass:"mt-2 pr-2"},_vm._l((filter.subCategories),function(subFilter){return _c('li',{key:subFilter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":subFilter.subCategories,"label":subFilter.subCategories,"is-child":true},model:{value:(_vm.industryFilterOption[subFilter.subCategories]),callback:function ($$v) {_vm.$set(_vm.industryFilterOption, subFilter.subCategories, $$v)},expression:"industryFilterOption[subFilter.subCategories]"}})],1)}),0):_vm._e()],1)}),0)]),_vm._v(" "),_c('button',{staticClass:"filter-btn",on:{"click":function($event){_vm.applyFilters(), _vm.$refs.industryPopper.doClose()}}},[_vm._v("Apply")])]),_vm._v(" "),_c('p',{staticClass:"flex cursor-pointer select-none items-center justify-between gap-4 border border-transparent bg-white/90 px-5 py-3 text-base font-semibold leading-5 text-black shadow-[0_3px_6px_rgba(239,239,239)] duration-150 hover:border-[#1eb1fc] hover:!text-primary xl:justify-start",class:{ 'border-[#1eb1fc] !text-primary': _vm.activePopper === 'industry' },attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                                        Industry\n                                        "),_c('icons-downarrow',{staticClass:"text-primary xl:rotate-0",class:{ 'xl:!rotate-180': _vm.activePopper === 'industry' }})],1)])],1),_vm._v(" "),_c('li',[_c('popper',{ref:"servicesPopper",attrs:{"trigger":"clickToToggle","options":{
                                        placement: 'bottom',
                                        modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                        preventOverflow: {
                                            padding: 0,
                                        },
                                    }},on:{"show":function($event){return _vm.openPopper('services')},"hide":function($event){return _vm.closePopper()}}},[_c('div',{staticClass:"popper !fixed right-0 z-[60] !my-0 h-full !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto"},[_c('div',{staticClass:"relative block p-3 text-center xl:hidden"},[_vm._v("\n                                            services\n                                            "),_c('button',{staticClass:"absolute right-2.5 top-4 h-5 w-5 cursor-pointer",on:{"click":function($event){return _vm.$refs.servicesPopper.doClose()}}},[_c('icons-close')],1)]),_vm._v(" "),_c('div',{staticClass:"container pb-4"},[_c('ul',{staticClass:"block max-h-[calc(100vh-120px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6"},_vm._l((_vm.filter2Data),function(filter){return _c('li',{key:filter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":filter.filterCateogries,"label":filter.filterCateogries},model:{value:(_vm.servicesFilterOption[filter.filterCateogries]),callback:function ($$v) {_vm.$set(_vm.servicesFilterOption, filter.filterCateogries, $$v)},expression:"servicesFilterOption[filter.filterCateogries]"}}),_vm._v(" "),(filter.subCategories.length)?_c('ul',{staticClass:"mt-2 pr-2"},_vm._l((filter.subCategories),function(subFilter){return _c('li',{key:subFilter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":subFilter.subCategories,"label":subFilter.subCategories,"is-child":true},model:{value:(_vm.servicesFilterOption[subFilter.subCategories]),callback:function ($$v) {_vm.$set(_vm.servicesFilterOption, subFilter.subCategories, $$v)},expression:"servicesFilterOption[subFilter.subCategories]"}})],1)}),0):_vm._e()],1)}),0)]),_vm._v(" "),_c('button',{staticClass:"filter-btn",on:{"click":function($event){_vm.applyFilters(), _vm.$refs.servicesPopper.doClose()}}},[_vm._v("Apply")])]),_vm._v(" "),_c('p',{staticClass:"reference flex cursor-pointer select-none items-center justify-between gap-4 border border-transparent bg-white/90 px-5 py-3 text-base font-semibold leading-5 text-black shadow-[0_3px_6px_rgba(239,239,239)] duration-150 hover:border-[#1eb1fc] hover:!text-primary xl:justify-start",class:{ 'border-[#1eb1fc] !text-primary': _vm.activePopper === 'services' },attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                                        Services\n                                        "),_c('icons-downarrow',{staticClass:"text-primary xl:rotate-0",class:{ 'xl:!rotate-180': _vm.activePopper === 'services' }})],1)])],1),_vm._v(" "),_c('li',[_c('popper',{ref:"typePopper",attrs:{"trigger":"clickToToggle","options":{
                                        placement: 'bottom',
                                        modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                        preventOverflow: {
                                            padding: 0,
                                        },
                                    }},on:{"show":function($event){return _vm.openPopper('type')},"hide":function($event){return _vm.closePopper()}}},[_c('div',{staticClass:"popper !fixed right-0 z-[60] !my-0 h-full !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto"},[_c('div',{staticClass:"relative block p-3 text-center xl:hidden"},[_vm._v("\n                                            Type\n                                            "),_c('button',{staticClass:"absolute right-2.5 top-4 h-5 w-5 cursor-pointer",on:{"click":function($event){return _vm.$refs.typePopper.doClose()}}},[_c('icons-close')],1)]),_vm._v(" "),_c('div',{staticClass:"container pb-4"},[_c('ul',{staticClass:"block max-h-[calc(100vh-120px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6"},_vm._l((_vm.filter3Data),function(filter){return _c('li',{key:filter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":filter.filterCateogries,"label":filter.filterCateogries},model:{value:(_vm.typeFilterOption[filter.filterCateogries]),callback:function ($$v) {_vm.$set(_vm.typeFilterOption, filter.filterCateogries, $$v)},expression:"typeFilterOption[filter.filterCateogries]"}}),_vm._v(" "),(filter.subCategories.length)?_c('ul',{staticClass:"mt-2 pr-2"},_vm._l((filter.subCategories),function(subFilter){return _c('li',{key:subFilter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":subFilter.subCategories,"label":subFilter.subCategories,"is-child":true},model:{value:(_vm.typeFilterOption[subFilter.subCategories]),callback:function ($$v) {_vm.$set(_vm.typeFilterOption, subFilter.subCategories, $$v)},expression:"typeFilterOption[subFilter.subCategories]"}})],1)}),0):_vm._e()],1)}),0)]),_vm._v(" "),_c('button',{staticClass:"filter-btn",on:{"click":function($event){_vm.applyFilters(), _vm.$refs.typePopper.doClose()}}},[_vm._v("Apply")])]),_vm._v(" "),_c('p',{staticClass:"flex cursor-pointer select-none items-center justify-between gap-4 border border-transparent bg-white/90 px-5 py-3 text-base font-semibold leading-5 text-black shadow-[0_3px_6px_rgba(239,239,239)] duration-150 hover:border-[#1eb1fc] hover:!text-primary xl:justify-start",class:{ 'border-[#1eb1fc] !text-primary': _vm.activePopper === 'type' },attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                                        Type\n                                        "),_c('icons-downarrow',{staticClass:"text-primary xl:rotate-0",class:{ 'xl:!rotate-180': _vm.activePopper === 'type' }})],1)])],1),_vm._v(" "),_c('li',[_c('popper',{ref:"mediaPopper",attrs:{"trigger":"clickToToggle","options":{
                                        placement: 'bottom',
                                        modifiers: { offset: { offset: '0,0' }, arrow: { enabled: false }, shift: { enabled: false } },
                                        preventOverflow: {
                                            padding: 0,
                                        },
                                    }},on:{"show":function($event){return _vm.openPopper('media')},"hide":function($event){return _vm.closePopper()}}},[_c('div',{staticClass:"popper !fixed right-0 z-[60] !my-0 h-full !transform-none border-b border-t border-black/10 bg-white !text-left !text-base !shadow-none xl:!absolute xl:!top-[68px] xl:z-30 xl:h-auto"},[_c('div',{staticClass:"relative block p-3 text-center xl:hidden"},[_vm._v("\n                                            Media Type\n                                            "),_c('button',{staticClass:"absolute right-2.5 top-4 h-5 w-5 cursor-pointer",on:{"click":function($event){return _vm.$refs.mediaPopper.doClose()}}},[_c('icons-close')],1)]),_vm._v(" "),_c('div',{staticClass:"container pb-4"},[_c('ul',{staticClass:"block max-h-[calc(100vh-120px)] overflow-auto xl:h-auto xl:flex-grow xl:columns-3 xl:pt-6"},_vm._l((_vm.filter4Data),function(filter){return _c('li',{key:filter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":filter.filterCateogries,"label":filter.filterCateogries},model:{value:(_vm.mediaFilterOption[filter.filterCateogries]),callback:function ($$v) {_vm.$set(_vm.mediaFilterOption, filter.filterCateogries, $$v)},expression:"mediaFilterOption[filter.filterCateogries]"}}),_vm._v(" "),(filter.subCategories.length)?_c('ul',{staticClass:"mt-2 pr-2"},_vm._l((filter.subCategories),function(subFilter){return _c('li',{key:subFilter.id,staticClass:"mb-2 break-inside-avoid pr-2"},[_c('input-filter-checkbox',{attrs:{"id":subFilter.subCategories,"label":subFilter.subCategories,"is-child":true},model:{value:(_vm.mediaFilterOption[subFilter.subCategories]),callback:function ($$v) {_vm.$set(_vm.mediaFilterOption, subFilter.subCategories, $$v)},expression:"mediaFilterOption[subFilter.subCategories]"}})],1)}),0):_vm._e()],1)}),0)]),_vm._v(" "),_c('button',{staticClass:"filter-btn",on:{"click":function($event){_vm.applyFilters(), _vm.$refs.mediaPopper.doClose()}}},[_vm._v("Apply")])]),_vm._v(" "),_c('p',{staticClass:"flex cursor-pointer select-none items-center justify-between gap-4 border border-transparent bg-white/90 px-5 py-3 text-base font-semibold leading-5 text-black shadow-[0_3px_6px_rgba(239,239,239)] duration-150 hover:border-[#1eb1fc] hover:!text-primary xl:justify-start",class:{ 'border-[#1eb1fc] !text-primary': _vm.activePopper === 'media' },attrs:{"slot":"reference"},slot:"reference"},[_vm._v("\n                                        Media Type\n                                        "),_c('icons-downarrow',{staticClass:"text-primary xl:rotate-0",class:{ 'xl:!rotate-180': _vm.activePopper === 'media' }})],1)])],1)])])]),_vm._v(" "),_c('div',{staticClass:"container mt-5"},[(_vm.appliedFilters.length > 0)?_c('div',{staticClass:"mb-6 text-black"},[_c('h6',{staticClass:"mr-2 inline-block align-middle text-black/70"},[_vm._v("Selected:")]),_vm._v(" "),_c('ul',{staticClass:"gap inline-flex flex-wrap"},[_vm._l((_vm.appliedFilters),function(option,index){return _c('li',{key:("applay_" + index),staticClass:"group mb-1 mr-1 rounded bg-black/10 px-2 py-1"},[_c('button',{staticClass:"flex cursor-pointer items-center gap-1.5",on:{"click":function($event){return _vm.removeFilter(option)}}},[_vm._v(_vm._s(option.label || option)),_c('icons-close',{staticClass:"group-hover:text-danger"})],1)])}),_vm._v(" "),_c('li',{staticClass:"mb-1 rounded bg-primary/20 px-2 py-1"},[_c('button',{staticClass:"cursor-pointer",on:{"click":function($event){return _vm.removeAllFilter()}}},[_vm._v("Clear All")])])],2)]):_vm._e()])])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"pt-[59px] md:pb-[134px]\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"lg:-mx-7 lg:flex\">","</div>",[_vm._l((_vm.insightCatalogue1),function(insight){return _vm._ssrNode("<div class=\"mb-8 w-full lg:max-w-[670px] lg:px-7\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('nuxt-link',{attrs:{"to":("/insights/" + (insight.attributes.singleInsightPageSlug)),"title":insight.attributes.title}},[_c('nuxt-img',{staticClass:"h-72 w-full object-cover",attrs:{"format":"webp","src":insight.attributes.imgUrl,"alt":insight.attributes.title,"loading":"lazy"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex h-[calc(100%-125px)] flex-col justify-between py-3 xl:h-[calc(100%-340px)] xl:py-4\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<p class=\"mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]\">"+_vm._ssrEscape("\n                                    "+_vm._s(insight.attributes.Insightsource)+"\n                                ")+"</p> "),_c('nuxt-link',{staticClass:"mb-3 line-clamp-1 block text-[21px] font-semibold leading-7 text-[#202A36]",attrs:{"to":("/insights/" + (insight.attributes.singleInsightPageSlug))}},[_vm._v(_vm._s(insight.attributes.title))]),_vm._ssrNode(" <p class=\"mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base\">"+_vm._ssrEscape("\n                                    "+_vm._s(insight.attributes.paragraph)+"\n                                ")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"relative flex items-center justify-between\">","</div>",[_vm._ssrNode("<p class=\"inline-block text-[15px] font-medium leading-6 -tracking-[0.03px] text-[#646464] transition-all duration-300\">"+_vm._ssrEscape("\n                                    "+_vm._s(insight.attributes.insightType)+" | "+_vm._s(_vm.$helper.formatInsightPublishDate(insight.attributes.date))+"\n                                ")+"</p> "),_vm._ssrNode("<span>","</span>",[_c('common-share',{attrs:{"is-show-save-btn":true,"custom-link":("/" + (insight.attributes.singleInsightPageSlug))}})],1)],2)],2)],2)}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex-1 border-[#d5d5d5] lg:border-l lg:px-7\">","</div>",[_vm._ssrNode("<div class=\"block h-[2px] w-full bg-primary\"></div> <h4 class=\"mt-7 text-[21px] font-bold leading-7 text-primary\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column2Title))+"</h4> "),_vm._ssrNode("<div class=\"mt-5 space-y-[19px] divide-y divide-[#707070]/50 lg:mt-[58px]\">","</div>",_vm._l((_vm.section1Column2Data),function(data,i){return _vm._ssrNode("<div"+(_vm._ssrClass("items-center gap-10 space-y-3 md:flex md:space-y-0 xl:gap-[83px]",{ 'space-y-3 pt-[19px]': i > 0 }))+">","</div>",[_vm._ssrNode("<div><p class=\"text-[25px] font-semibold text-[#202a36]\">"+_vm._ssrEscape(_vm._s(i + 1))+"</p></div> "),_vm._ssrNode("<div class=\"flex-1\">","</div>",[_vm._ssrNode("<p class=\"mb-2 text-[15px] font-semibold leading-[19px] -tracking-[0.03px] text-primary\">"+_vm._ssrEscape("\n                                        "+_vm._s(data.attributes.insightIndustry)+"\n                                    ")+"</p> "),_c('nuxt-link',{staticClass:"mb-1.5 block text-[22px] font-semibold leading-7 duration-150 hover:text-primary",attrs:{"to":("/insights/" + (data.attributes.slug))}},[_vm._v(" "+_vm._s(data.attributes.insightTitle)+" ")]),_vm._ssrNode(" <p class=\"text-[15px] font-medium leading-6 -tracking-[0.03px] text-[#646464]\">"+_vm._ssrEscape(_vm._s(data.attributes.InsightType)+" | "+_vm._s(_vm.$helper.formatInsightPublishDate(data.attributes.date)))+"</p>")],2)],2)}),0)],2)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"flex flex-col gap-24\">","</section>",_vm._l(([1]),function(_,insightIndex){return _vm._ssrNode("<div class=\"flex flex-col\">","</div>",[(_vm.insightCatalogue2.length > 0)?_vm._ssrNode("<div class=\"py-10 md:py-16 lg:pb-[44px] lg:pt-[50px]\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]\">","</div>",_vm._l((_vm.insightCatalogue2.slice(0, 3)),function(item,i){return _vm._ssrNode("<div"+(_vm._ssrClass("relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r",{ '!border-0 lg:col-span-2': i === 2, '!border-0': i === 6, 'md:border-l lg:border-0': i % 2 !== 0 }))+">","</div>",[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.6)]\">","</div>",[_c('nuxt-link',{attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug)),"title":item.attributes.title}},[_c('nuxt-img',{staticClass:"h-[229px] w-full object-cover",class:{ '!h-72': i === 2 },attrs:{"format":"webp","src":item.attributes.imgUrl,"alt":item.attributes.title,"loading":"lazy"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col justify-between py-3 xl:py-[34px]\">","</div>",[_vm._ssrNode("<div class=\"mb-5\">","</div>",[_vm._ssrNode("<h4 class=\"mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.Insightsource)+"\n                                        ")+"</h4> "),_vm._ssrNode("<div class=\"md:min-h-[56px]\">","</div>",[_c('nuxt-link',{staticClass:"mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36]",attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_vm._v(_vm._s(item.attributes.title))])],1),_vm._ssrNode(" <p class=\"mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.paragraph)+"\n                                        ")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]\">","</div>",[_vm._ssrNode("<p class=\"inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.insightType)+" | "+_vm._s(_vm.$helper.formatInsightPublishDate(item.attributes.date))+"\n                                        ")+"</p> "),_vm._ssrNode("<span>","</span>",[_c('common-share',{attrs:{"is-show-save-btn":true,"custom-link":("/" + (item.attributes.singleInsightPageSlug))}})],1)],2)],2)],2)}),0)])]):_vm._e(),_vm._ssrNode(" "),(_vm.insightCatalogue2.slice(3).length > 0)?_vm._ssrNode("<div class=\"py-10 md:py-16 lg:pb-[113px] lg:pt-0\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]\">","</div>",_vm._l((_vm.insightCatalogue2.slice(3)),function(item,i){return _vm._ssrNode("<div"+(_vm._ssrClass("relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r",{ '!border-0': i !== 0 && i % 3 == 0, 'md:border-r': i % 2 == 0 }))+">","</div>",[_vm._ssrNode("<div class=\"relative\">","</div>",[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.6)]\">","</div>",[_c('nuxt-link',{attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_c('nuxt-img',{staticClass:"h-[170px] w-full object-cover",attrs:{"format":"webp","src":item.attributes.imgUrl,"alt":item.attributes.title,"loading":"lazy"}})],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col justify-between py-3 xl:py-[34px]\">","</div>",[_vm._ssrNode("<div class=\"mb-5\">","</div>",[_vm._ssrNode("<h4 class=\"mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.Insightsource)+"\n                                        ")+"</h4> "),_vm._ssrNode("<div class=\"md:min-h-[56px]\">","</div>",[_c('nuxt-link',{staticClass:"mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36]",attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_vm._v(_vm._s(item.attributes.title))])],1),_vm._ssrNode(" <p class=\"mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.paragraph)+"\n                                        ")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]\">","</div>",[_vm._ssrNode("<p class=\"inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.insightType)+" | "+_vm._s(_vm.$helper.formatInsightPublishDate(item.attributes.date))+"\n                                        ")+"</p> "),_vm._ssrNode("<span>","</span>",[_c('common-share',{attrs:{"is-show-save-btn":true,"custom-link":("/" + (item.attributes.singleInsightPageSlug))}})],1)],2)],2)],2)}),0)])]):_vm._e(),_vm._ssrNode(" "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video1ThumbnailUrl,"button-title":_vm.content.video1ButtonText,"button-u-r-l":_vm.content.video1ButtonLink,"video-u-r-l":_vm.content.video1Url,"title":_vm.content.video1Title}}),_vm._ssrNode(" "),(_vm.insightCatalogue3.length > 0)?_vm._ssrNode("<div class=\"py-10 md:py-16 lg:pb-[87px] lg:pt-[92px]\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]\">","</div>",_vm._l((_vm.insightCatalogue3.slice(0, 4)),function(item,i){return _vm._ssrNode("<div"+(_vm._ssrClass("relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r",{ '!border-0': i === 3, 'md:border-r': i % 2 == 0 }))+">","</div>",[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.6)]\">","</div>",[_c('nuxt-link',{attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_c('nuxt-img',{staticClass:"h-[170px] w-full object-cover",attrs:{"format":"webp","src":item.attributes.imgUrl,"alt":item.attributes.title,"loading":"lazy"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col justify-between py-3 xl:py-[34px]\">","</div>",[_vm._ssrNode("<div class=\"mb-5\">","</div>",[_vm._ssrNode("<h4 class=\"mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.Insightsource)+"\n                                        ")+"</h4> "),_vm._ssrNode("<div class=\"md:min-h-[56px]\">","</div>",[_c('nuxt-link',{staticClass:"mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36]",attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_vm._v(_vm._s(item.attributes.title))])],1),_vm._ssrNode(" <p class=\"mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.paragraph)+"\n                                        ")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]\">","</div>",[_vm._ssrNode("<p class=\"inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.insightType)+" | "+_vm._s(_vm.$helper.formatInsightPublishDate(item.attributes.date))+"\n                                        ")+"</p> "),_vm._ssrNode("<span>","</span>",[_c('common-share',{attrs:{"is-show-save-btn":true,"custom-link":("/" + (item.attributes.singleInsightPageSlug))}})],1)],2)],2)],2)}),0)])]):_vm._e(),_vm._ssrNode(" "),(_vm.insightCatalogue3.slice(4).length > 0)?_vm._ssrNode("<div class=\"py-10 md:py-16 lg:py-0\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:gap-y-[76px]\">","</div>",_vm._l((_vm.insightCatalogue3.slice(4)),function(item,i){return _vm._ssrNode("<div class=\"relative mb-8 border-[#d5d5d5] md:px-7 md:first:border-r\">","</div>",[_vm._ssrNode("<div class=\"relative\">","</div>",[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.6)]\">","</div>",[_c('nuxt-link',{attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_c('nuxt-img',{staticClass:"h-72 w-full object-cover",attrs:{"format":"webp","src":item.attributes.imgUrl,"alt":item.attributes.title,"loading":"lazy"}})],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col justify-between py-3 xl:py-[34px]\">","</div>",[_vm._ssrNode("<div class=\"mb-5\">","</div>",[_vm._ssrNode("<h4 class=\"mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.Insightsource)+"\n                                        ")+"</h4> "),_vm._ssrNode("<div class=\"md:min-h-[56px]\">","</div>",[_c('nuxt-link',{staticClass:"mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36]",attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_vm._v(_vm._s(item.attributes.title))])],1),_vm._ssrNode(" <p class=\"mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.paragraph)+"\n                                        ")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]\">","</div>",[_vm._ssrNode("<p class=\"inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.insightType)+" | "+_vm._s(_vm.$helper.formatInsightPublishDate(item.attributes.date))+"\n                                        ")+"</p> "),_vm._ssrNode("<span>","</span>",[_c('common-share',{attrs:{"is-show-save-btn":true,"custom-link":("/" + (item.attributes.singleInsightPageSlug))}})],1)],2)],2)],2)}),0)])]):_vm._e(),_vm._ssrNode(" "),(_vm.insightCatalogue3.length > 0)?_vm._ssrNode("<div class=\"pb-10 lg:pb-[54px] lg:pt-[87px]\">","</div>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 items-center justify-between border border-[#d5d5d5] lg:grid-cols-2\">","</div>",[_vm._ssrNode("<div class=\"order-2 px-2.5 py-9 md:py-14 md:pl-9 lg:order-1 lg:max-w-[500px]\">","</div>",[_vm._ssrNode("<h4 class=\"text-2xl font-bold uppercase leading-9\">"+(_vm._s(_vm.content.CTA1Title))+"</h4> <p class=\"pb-8 pt-2.5\">"+_vm._ssrEscape(_vm._s(_vm.content.CTA1Description))+"</p> "),(_vm.$helper.isInternalUrl(_vm.content.CTA1ButtonLink))?_c('nuxt-link',{staticClass:"btn",attrs:{"to":_vm.content.CTA1ButtonLink}},[_vm._v(_vm._s(_vm.content.CTA1ButtonText))]):_c('a',{staticClass:"btn",attrs:{"target":"_blank","href":_vm.content.CTA1ButtonLink}},[_vm._v(_vm._s(_vm.content.CTA1ButtonText))])],2),_vm._ssrNode(" <div class=\"relative order-1 h-80 bg-cover bg-center lg:order-2 lg:h-full\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (_vm.content.CTA1ImgUrl) + ")") }, null))+"></div>")],2)])]):_vm._e(),_vm._ssrNode(" "),(_vm.insightCatalogue4.length > 0)?_vm._ssrNode("<div class=\"py-10 md:py-16 lg:py-[50px]\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]\">","</div>",_vm._l((_vm.insightCatalogue4.slice(0, 4)),function(item,i){return _vm._ssrNode("<div"+(_vm._ssrClass("relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r",{ '!border-0': i === 3, 'md:border-r': i % 2 == 0 }))+">","</div>",[_vm._ssrNode("<div class=\"relative\">","</div>",[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.6)]\">","</div>",[_c('nuxt-link',{attrs:{"to":("/" + (item.attributes.singleInsightPageSlug))}},[_c('nuxt-img',{staticClass:"h-[170px] w-full object-cover",attrs:{"format":"webp","src":item.attributes.imgUrl,"alt":item.attributes.title,"loading":"lazy"}})],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col justify-between py-3 xl:py-[34px]\">","</div>",[_vm._ssrNode("<div class=\"mb-5\">","</div>",[_vm._ssrNode("<h4 class=\"mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.Insightsource)+"\n                                        ")+"</h4> "),_vm._ssrNode("<div class=\"md:min-h-[56px]\">","</div>",[_c('nuxt-link',{staticClass:"mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36]",attrs:{"to":("/" + (item.attributes.singleInsightPageSlug))}},[_vm._v(_vm._s(item.attributes.title))])],1),_vm._ssrNode(" <p class=\"mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.paragraph)+"\n                                        ")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]\">","</div>",[_vm._ssrNode("<p class=\"inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.insightType)+" | "+_vm._s(_vm.$helper.formatInsightPublishDate(item.attributes.date))+"\n                                        ")+"</p> "),_vm._ssrNode("<span>","</span>",[_c('common-share',{attrs:{"is-show-save-btn":true,"custom-link":("/" + (item.attributes.singleInsightPageSlug))}})],1)],2)],2)],2)}),0)])]):_vm._e(),_vm._ssrNode(" "),(_vm.insightCatalogue4.slice(4).length > 0)?_vm._ssrNode("<div class=\"py-10 md:py-16 lg:pb-[54px] lg:pt-0\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]\">","</div>",_vm._l((_vm.insightCatalogue4.slice(4)),function(item,i){return _vm._ssrNode("<div"+(_vm._ssrClass("relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r",{ '!border-0 lg:col-span-2': i === 2, 'md:border-r': i % 2 == 0 }))+">","</div>",[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.6)]\">","</div>",[_c('nuxt-link',{attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_c('nuxt-img',{staticClass:"h-[229px] w-full object-cover",class:{ '!h-72': i === 2 },attrs:{"format":"webp","src":item.attributes.imgUrl,"alt":item.attributes.title,"loading":"lazy"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col justify-between py-3 xl:py-[34px]\">","</div>",[_vm._ssrNode("<div class=\"mb-5\">","</div>",[_vm._ssrNode("<h4 class=\"mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.Insightsource)+"\n                                        ")+"</h4> "),_vm._ssrNode("<div class=\"md:min-h-[56px]\">","</div>",[_c('nuxt-link',{staticClass:"mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36] md:min-h-[56px]",attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_vm._v(_vm._s(item.attributes.title))])],1),_vm._ssrNode(" <p class=\"mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.paragraph)+"\n                                        ")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]\">","</div>",[_vm._ssrNode("<p class=\"inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.insightType)+" | "+_vm._s(_vm.$helper.formatInsightPublishDate(item.attributes.date))+"\n                                        ")+"</p> "),_vm._ssrNode("<span>","</span>",[_c('common-share',{attrs:{"is-show-save-btn":true,"custom-link":("/insights/" + (item.attributes.singleInsightPageSlug))}})],1)],2)],2)],2)}),0)])]):_vm._e(),_vm._ssrNode(" "),_c('common-interested-service',{attrs:{"background-image":_vm.content.section2ImgUrl,"subtitle":_vm.content.section2Subtitle,"title":_vm.content.section2Title,"description":_vm.content.section2Description,"button-link":_vm.content.section2ButtonLink,"button-title":_vm.content.section2ButtonText}}),_vm._ssrNode(" "),(_vm.insightCatalogue5.length > 0)?_vm._ssrNode("<div class=\"mt-32 py-10 md:py-16 lg:pb-[54px] lg:pt-0\">","</div>",[(_vm.insightCatalogue5.slice(0, 3).length > 0)?_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]\">","</div>",_vm._l((_vm.insightCatalogue5.slice(0, 3)),function(item,i){return _vm._ssrNode("<div"+(_vm._ssrClass("relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r",{ '!border-0 lg:col-span-2': i === 2, 'md:border-r': i % 2 == 0 }))+">","</div>",[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.6)]\">","</div>",[_c('nuxt-link',{attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_c('nuxt-img',{staticClass:"h-[229px] w-full object-cover",class:{ '!h-72': i === 2 },attrs:{"format":"webp","src":item.attributes.imgUrl,"alt":item.attributes.title,"loading":"lazy"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col justify-between py-3 xl:py-[34px]\">","</div>",[_vm._ssrNode("<div class=\"mb-5\">","</div>",[_vm._ssrNode("<h4 class=\"mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.Insightsource)+"\n                                        ")+"</h4> "),_vm._ssrNode("<div class=\"md:min-h-[56px]\">","</div>",[_c('nuxt-link',{staticClass:"mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36] md:min-h-[56px]",attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_vm._v(_vm._s(item.attributes.title))])],1),_vm._ssrNode(" <p class=\"mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.paragraph)+"\n                                        ")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]\">","</div>",[_vm._ssrNode("<p class=\"inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.insightType)+" | "+_vm._s(_vm.$helper.formatInsightPublishDate(item.attributes.date))+"\n                                        ")+"</p> "),_vm._ssrNode("<span>","</span>",[_c('common-share',{attrs:{"is-show-save-btn":true,"custom-link":("/" + (item.attributes.singleInsightPageSlug))}})],1)],2)],2)],2)}),0)]):_vm._e(),_vm._ssrNode(" "),(_vm.insightCatalogue5.slice(3).length > 0)?_vm._ssrNode("<div class=\"container mt-16\">","</div>",[_vm._ssrNode("<div class=\"relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:-mx-7 lg:grid-cols-4 lg:gap-y-[76px]\">","</div>",_vm._l((_vm.insightCatalogue5.slice(3)),function(item,i){return _vm._ssrNode("<div"+(_vm._ssrClass("relative mb-8 border-[#d5d5d5] md:px-7 lg:border-r",{ '!border-0': i === 3, 'md:border-r': i % 2 == 0 }))+">","</div>",[_vm._ssrNode("<div class=\"relative\">","</div>",[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.6)]\">","</div>",[_c('nuxt-link',{attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_c('nuxt-img',{staticClass:"h-[170px] w-full object-cover",attrs:{"format":"webp","src":item.attributes.imgUrl,"alt":item.attributes.title,"loading":"lazy"}})],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex flex-col justify-between py-3 xl:py-[34px]\">","</div>",[_vm._ssrNode("<div class=\"mb-5\">","</div>",[_vm._ssrNode("<h4 class=\"mb-3 line-clamp-1 text-sm font-semibold tracking-[0.31px] text-primary xl:mb-4 xl:-tracking-[0.03px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.Insightsource)+"\n                                        ")+"</h4> "),_vm._ssrNode("<div class=\"md:min-h-[56px]\">","</div>",[_c('nuxt-link',{staticClass:"mb-3 line-clamp-2 block text-[21px] font-semibold leading-7 text-[#202A36]",attrs:{"to":("/insights/" + (item.attributes.singleInsightPageSlug))}},[_vm._v(_vm._s(item.attributes.title))])],1),_vm._ssrNode(" <p class=\"mb-5 text-sm font-medium leading-6 -tracking-[0.03px] text-[#202A36] lg:mb-[54px] lg:text-base\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.paragraph)+"\n                                        ")+"</p>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"absolute bottom-5 flex w-full items-center justify-between md:w-[calc(100%-56px)]\">","</div>",[_vm._ssrNode("<p class=\"inline-block text-[13px] font-medium leading-[14px] -tracking-[0.03px] text-[#646464] transition-all duration-300 xl:leading-[23px]\">"+_vm._ssrEscape("\n                                            "+_vm._s(item.attributes.insightType)+" | "+_vm._s(_vm.$helper.formatInsightPublishDate(item.attributes.date))+"\n                                        ")+"</p> "),_vm._ssrNode("<span>","</span>",[_c('common-share',{attrs:{"is-show-save-btn":true,"custom-link":("/insights/" + (item.attributes.singleInsightPageSlug))}})],1)],2)],2)],2)}),0)]):_vm._e()],2):_vm._e()],2)}),0)],2),_vm._ssrNode(" "),_c('common-our-team',{staticClass:"!pb-10 !pt-0 md:!pb-0",attrs:{"title":_vm.content.section3Title,"description":_vm.content.section3Description,"teams":_vm.section3Data}}),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"img-url":_vm.readyToTalkForm.imgUrl,"service-options":_vm.readyToTalkForm.services.data,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle}}),_vm._ssrNode(" "),_c('common-brand-logo',{attrs:{"logos":_vm.logoSliders}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/industries/index.vue?vue&type=template&id=6f0c2c68&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/industries/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var industriesvue_type_script_lang_js_ = ({
  async asyncData(context) {
    try {
      const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/insight-page?populate=deep`);
      return {
        content: context.$helper.parseData(data.data)
      };
    } catch (err) {}
  },
  data() {
    return {
      showMobileFilter: false,
      appliedFilters: [],
      activePopper: '',
      industryFilterOption: {},
      servicesFilterOption: {},
      typeFilterOption: {},
      mediaFilterOption: {},
      dateFilterOption: {
        start_date: '',
        end_date: ''
      },
      regionFilterOption: {},
      dateConfig: {
        wrap: true,
        // set wrap to true only when using 'input-group'
        altFormat: 'm/d/Y',
        altInput: true,
        dateFormat: 'm-d-Y',
        static: true
      },
      tabs: [{
        id: 'OurLatestInsights',
        title: 'Our Latest Insights'
      }, {
        id: 'readyToTalk',
        title: 'Ready to Talk'
      }],
      insights: []
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
    filter1Data() {
      var _this$content12, _this$content12$Filte, _this$content12$Filte2, _this$content12$Filte3;
      return ((_this$content12 = this.content) === null || _this$content12 === void 0 ? void 0 : (_this$content12$Filte = _this$content12.FilterComponent1) === null || _this$content12$Filte === void 0 ? void 0 : (_this$content12$Filte2 = _this$content12$Filte.data[0]) === null || _this$content12$Filte2 === void 0 ? void 0 : (_this$content12$Filte3 = _this$content12$Filte2.attributes) === null || _this$content12$Filte3 === void 0 ? void 0 : _this$content12$Filte3.filterCategories) || [];
    },
    filter2Data() {
      var _this$content13, _this$content13$Filte, _this$content13$Filte2, _this$content13$Filte3;
      return ((_this$content13 = this.content) === null || _this$content13 === void 0 ? void 0 : (_this$content13$Filte = _this$content13.FilterComponent2) === null || _this$content13$Filte === void 0 ? void 0 : (_this$content13$Filte2 = _this$content13$Filte.data[0]) === null || _this$content13$Filte2 === void 0 ? void 0 : (_this$content13$Filte3 = _this$content13$Filte2.attributes) === null || _this$content13$Filte3 === void 0 ? void 0 : _this$content13$Filte3.filterCategories) || [];
    },
    filter3Data() {
      var _this$content14, _this$content14$Filte, _this$content14$Filte2, _this$content14$Filte3;
      return ((_this$content14 = this.content) === null || _this$content14 === void 0 ? void 0 : (_this$content14$Filte = _this$content14.FilterComponent3) === null || _this$content14$Filte === void 0 ? void 0 : (_this$content14$Filte2 = _this$content14$Filte.data[0]) === null || _this$content14$Filte2 === void 0 ? void 0 : (_this$content14$Filte3 = _this$content14$Filte2.attributes) === null || _this$content14$Filte3 === void 0 ? void 0 : _this$content14$Filte3.filterCategories) || [];
    },
    filter4Data() {
      var _this$content15, _this$content15$Filte, _this$content15$Filte2, _this$content15$Filte3;
      return ((_this$content15 = this.content) === null || _this$content15 === void 0 ? void 0 : (_this$content15$Filte = _this$content15.FilterComponent4) === null || _this$content15$Filte === void 0 ? void 0 : (_this$content15$Filte2 = _this$content15$Filte.data[0]) === null || _this$content15$Filte2 === void 0 ? void 0 : (_this$content15$Filte3 = _this$content15$Filte2.attributes) === null || _this$content15$Filte3 === void 0 ? void 0 : _this$content15$Filte3.filterCategories) || [];
    },
    section3Data() {
      var _this$content16, _this$content16$secti;
      return ((_this$content16 = this.content) === null || _this$content16 === void 0 ? void 0 : (_this$content16$secti = _this$content16.section3Component) === null || _this$content16$secti === void 0 ? void 0 : _this$content16$secti.data) || [];
    },
    readyToTalkForm() {
      var _this$content17, _this$content17$ready, _this$content17$ready2;
      return ((_this$content17 = this.content) === null || _this$content17 === void 0 ? void 0 : (_this$content17$ready = _this$content17.readyToTalkForm) === null || _this$content17$ready === void 0 ? void 0 : (_this$content17$ready2 = _this$content17$ready.data) === null || _this$content17$ready2 === void 0 ? void 0 : _this$content17$ready2.attributes) || {
        services: {
          data: []
        }
      };
    },
    logoSliders() {
      var _this$content18, _this$content18$logoS, _this$content18$logoS2, _this$content18$logoS3;
      return ((_this$content18 = this.content) === null || _this$content18 === void 0 ? void 0 : (_this$content18$logoS = _this$content18.logoSlider) === null || _this$content18$logoS === void 0 ? void 0 : (_this$content18$logoS2 = _this$content18$logoS.data) === null || _this$content18$logoS2 === void 0 ? void 0 : (_this$content18$logoS3 = _this$content18$logoS2.attributes) === null || _this$content18$logoS3 === void 0 ? void 0 : _this$content18$logoS3.logoUrls) || [];
    },
    insightCatalogue1() {
      var _this$content19, _this$content19$insig;
      return ((_this$content19 = this.content) === null || _this$content19 === void 0 ? void 0 : (_this$content19$insig = _this$content19.insightCatalogue1) === null || _this$content19$insig === void 0 ? void 0 : _this$content19$insig.data) || [];
    },
    insightCatalogue2() {
      var _this$content20, _this$content20$insig;
      return ((_this$content20 = this.content) === null || _this$content20 === void 0 ? void 0 : (_this$content20$insig = _this$content20.insightCatalogue2) === null || _this$content20$insig === void 0 ? void 0 : _this$content20$insig.data) || [];
    },
    insightCatalogue3() {
      var _this$content21, _this$content21$insig;
      return ((_this$content21 = this.content) === null || _this$content21 === void 0 ? void 0 : (_this$content21$insig = _this$content21.insightCatalogue3) === null || _this$content21$insig === void 0 ? void 0 : _this$content21$insig.data) || [];
    },
    insightCatalogue4() {
      var _this$content22, _this$content22$insig;
      return ((_this$content22 = this.content) === null || _this$content22 === void 0 ? void 0 : (_this$content22$insig = _this$content22.insightCatalogue3) === null || _this$content22$insig === void 0 ? void 0 : _this$content22$insig.data) || [];
    },
    insightCatalogue5() {
      var _this$content23, _this$content23$insig;
      return ((_this$content23 = this.content) === null || _this$content23 === void 0 ? void 0 : (_this$content23$insig = _this$content23.insightCatalogue3) === null || _this$content23$insig === void 0 ? void 0 : _this$content23$insig.data) || [];
    },
    section1Column2Data() {
      var _this$content24, _this$content24$secti;
      return ((_this$content24 = this.content) === null || _this$content24 === void 0 ? void 0 : (_this$content24$secti = _this$content24.section1Column2Component) === null || _this$content24$secti === void 0 ? void 0 : _this$content24$secti.data) || [];
    }
  },
  methods: {
    openPopper(filter) {
      setTimeout(() => {
        this.activePopper = filter;
      }, 100);
    },
    closePopper() {
      this.activePopper = '';
    },
    applyFilters() {
      const industryFilter = Object.keys(this.industryFilterOption).filter(key => this.industryFilterOption[key] === true).reduce((obj, key) => {
        obj.push(key.toLowerCase());
        return obj;
      }, []);
      const servicesFilter = Object.keys(this.servicesFilterOption).filter(key => this.servicesFilterOption[key] === true).reduce((obj, key) => {
        obj.push(key.toLowerCase());
        return obj;
      }, []);
      const typeFilter = Object.keys(this.typeFilterOption).filter(key => this.typeFilterOption[key] === true).reduce((obj, key) => {
        obj.push(key.toLowerCase());
        return obj;
      }, []);
      const regionFilter = Object.keys(this.regionFilterOption).filter(key => this.regionFilterOption[key] === true).reduce((obj, key) => {
        obj.push(key.toLowerCase());
        return obj;
      }, []);
      this.appliedFilters = [];
      this.$router.push({
        path: '/search',
        query: {
          industry: [...industryFilter],
          service: [...servicesFilter],
          type: [...typeFilter]
        }
      });
      this.appliedFilters = [...industryFilter, ...servicesFilter, ...typeFilter, ...regionFilter];
    },
    removeFilter(filter) {
      this.appliedFilters = this.appliedFilters.filter(item => item.id !== filter.id);
      this.industryFilterOption[filter.id] = false;
      this.servicesFilterOption[filter.id] = false;
      this.typeFilterOption[filter.id] = false;
      this.regionFilterOption[filter.id] = false;
      if (filter.id === 'date') {
        this.dateFilterOption.start_date = '';
        this.dateFilterOption.end_date = '';
      }
    },
    removeAllFilter() {
      this.appliedFilters = [];
      this.industryFilterOption = {};
      this.servicesFilterOption = {};
      this.typeFilterOption = {};
      this.regionFilterOption = {};
      this.dateFilterOption.start_date = '';
      this.dateFilterOption.end_date = '';
    }
  }
});
// CONCATENATED MODULE: ./pages/industries/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_industriesvue_type_script_lang_js_ = (industriesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/industries/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_industriesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "bdcf4980"
  
)

/* harmony default export */ var industries = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonBannerTab: __webpack_require__(161).default,IconsClose: __webpack_require__(219).default,InputFilterCheckbox: __webpack_require__(224).default,IconsDownarrow: __webpack_require__(154).default,CommonShare: __webpack_require__(143).default,CommonContactUs: __webpack_require__(139).default,CommonInterestedService: __webpack_require__(145).default,CommonOurTeam: __webpack_require__(174).default,CommonReadytotalk: __webpack_require__(140).default,CommonBrandLogo: __webpack_require__(164).default})


/***/ })

};;
//# sourceMappingURL=index.js.map