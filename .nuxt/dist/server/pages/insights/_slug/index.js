exports.ids = [137,25,26,29,30,35,41,42,66,77,84,95,97,104,109,114];
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

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-instagram.vue?vue&type=template&id=059df4ec&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"w-5",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","data-fa-i2svg":""}},[_vm._ssrNode("<path fill=\"currentColor\" d=\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-instagram.vue?vue&type=template&id=059df4ec&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-instagram.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "08ee8ded"
  
)

/* harmony default export */ var icons_instagram = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-arrow-up.vue?vue&type=template&id=cfad1e4c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"12","height":"7","viewBox":"0 0 12 7"}},[_vm._ssrNode("<g><g transform=\"rotate(-180 6 3.5)\"><path fill=\"currentColor\" d=\"M.38.674l5.455 6.211L11.29.674z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-arrow-up.vue?vue&type=template&id=cfad1e4c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-arrow-up.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "233268f4"
  
)

/* harmony default export */ var icons_arrow_up = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-comments.vue?vue&type=template&id=0aff4b5d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container bg-white py-8 antialiased lg:py-16 dark:bg-gray-900"},[_vm._ssrNode("<div class=\"mx-auto max-w-2xl\">","</div>",[_vm._ssrNode("<div class=\"mb-6 flex items-center justify-between\"><h2 class=\"text-lg font-bold text-gray-900 lg:text-2xl dark:text-white\">Discussion (20)</h2></div> <form class=\"mb-6\"><div class=\"mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800\"><label for=\"comment\" class=\"sr-only\">Your comment</label> <textarea id=\"comment\" rows=\"6\" placeholder=\"Write a comment...\" required=\"required\" class=\"w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400\"></textarea></div> <button type=\"submit\" class=\"focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 inline-flex items-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-xs font-medium text-white focus:ring-4\">\n                Post comment\n            </button></form> "),_vm._ssrNode("<article class=\"rounded-lg bg-white p-6 text-base dark:bg-gray-900\">","</article>",[_vm._ssrNode("<footer class=\"mb-2 flex items-center justify-between\">","</footer>",[_vm._ssrNode("<div class=\"flex items-center\">","</div>",[_vm._ssrNode("<p class=\"mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white\">","</p>",[_c('nuxt-img',{staticClass:"mr-2 h-6 w-6 rounded-full",attrs:{"format":"webp","src":"https://flowbite.com/docs/images/people/profile-picture-2.jpg","alt":"Michael Gough","loading":"lazy"}}),_vm._ssrNode(" Michael Gough\n                    ")],2),_vm._ssrNode(" <p class=\"text-sm text-gray-600 dark:text-gray-400\"><time pubdate datetime=\"2022-02-08\" title=\"February 8th, 2022\">Feb. 8, 2022</time></p>")],2),_vm._ssrNode(" <button id=\"dropdownComment1Button\" data-dropdown-toggle=\"dropdownComment1\" type=\"button\" class=\"inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600\"><svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 16 3\" class=\"h-4 w-4\"><path d=\"M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z\"></path></svg> <span class=\"sr-only\">Comment settings</span></button> <div id=\"dropdownComment1\" class=\"z-10 hidden w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700\"><ul aria-labelledby=\"dropdownMenuIconHorizontalButton\" class=\"py-1 text-sm text-gray-700 dark:text-gray-200\"><li><button aria-label=\"Edit\" class=\"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Edit</button></li> <li><button aria-label=\"Remove\" class=\"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Remove</button></li> <li><button aria-label=\"Report\" class=\"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Report</button></li></ul></div>")],2),_vm._ssrNode(" <p class=\"text-gray-500 dark:text-gray-400\">\n                Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers. The knowledge of the design tools are as important as the creation of the design strategy.\n            </p> <div class=\"mt-4 flex items-center space-x-4\"><button type=\"button\" class=\"flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400\"><svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 20 18\" class=\"mr-1.5 h-3.5 w-3.5\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z\"></path></svg>\n                    Reply\n                </button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<article class=\"mb-3 ml-6 rounded-lg bg-white p-6 text-base lg:ml-12 dark:bg-gray-900\">","</article>",[_vm._ssrNode("<footer class=\"mb-2 flex items-center justify-between\">","</footer>",[_vm._ssrNode("<div class=\"flex items-center\">","</div>",[_vm._ssrNode("<p class=\"mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white\">","</p>",[_c('nuxt-img',{staticClass:"mr-2 h-6 w-6 rounded-full",attrs:{"format":"webp","src":"https://flowbite.com/docs/images/people/profile-picture-5.jpg","alt":"Jese Leos","loading":"lazy"}}),_vm._ssrNode(" Jese Leos\n                    ")],2),_vm._ssrNode(" <p class=\"text-sm text-gray-600 dark:text-gray-400\"><time pubdate datetime=\"2022-02-12\" title=\"February 12th, 2022\">Feb. 12, 2022</time></p>")],2),_vm._ssrNode(" <button id=\"dropdownComment2Button\" data-dropdown-toggle=\"dropdownComment2\" type=\"button\" class=\"dark:text-gray-40 inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600\"><svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 16 3\" class=\"h-4 w-4\"><path d=\"M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z\"></path></svg> <span class=\"sr-only\">Comment settings</span></button> <div id=\"dropdownComment2\" class=\"z-10 hidden w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700\"><ul aria-labelledby=\"dropdownMenuIconHorizontalButton\" class=\"py-1 text-sm text-gray-700 dark:text-gray-200\"><li><button aria-label=\"Edit\" class=\"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Edit</button></li> <li><button aria-label=\"Remove\" class=\"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Remove</button></li> <li><button aria-label=\"Report\" class=\"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Report</button></li></ul></div>")],2),_vm._ssrNode(" <p class=\"text-gray-500 dark:text-gray-400\">Much appreciated! Glad you liked it ☺️</p> <div class=\"mt-4 flex items-center space-x-4\"><button type=\"button\" class=\"flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400\"><svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 20 18\" class=\"mr-1.5 h-3.5 w-3.5\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z\"></path></svg>\n                    Reply\n                </button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<article class=\"mb-3 border-t border-gray-200 bg-white p-6 text-base dark:border-gray-700 dark:bg-gray-900\">","</article>",[_vm._ssrNode("<footer class=\"mb-2 flex items-center justify-between\">","</footer>",[_vm._ssrNode("<div class=\"flex items-center\">","</div>",[_vm._ssrNode("<p class=\"mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white\">","</p>",[_c('nuxt-img',{staticClass:"mr-2 h-6 w-6 rounded-full",attrs:{"format":"webp","src":"https://flowbite.com/docs/images/people/profile-picture-3.jpg","alt":"Bonnie Green","loading":"lazy"}}),_vm._ssrNode(" Bonnie Green\n                    ")],2),_vm._ssrNode(" <p class=\"text-sm text-gray-600 dark:text-gray-400\"><time pubdate datetime=\"2022-03-12\" title=\"March 12th, 2022\">Mar. 12, 2022</time></p>")],2),_vm._ssrNode(" <button id=\"dropdownComment3Button\" data-dropdown-toggle=\"dropdownComment3\" type=\"button\" class=\"dark:text-gray-40 inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600\"><svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 16 3\" class=\"h-4 w-4\"><path d=\"M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z\"></path></svg> <span class=\"sr-only\">Comment settings</span></button> <div id=\"dropdownComment3\" class=\"z-10 hidden w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700\"><ul aria-labelledby=\"dropdownMenuIconHorizontalButton\" class=\"py-1 text-sm text-gray-700 dark:text-gray-200\"><li><button aria-label=\"Edit\" class=\"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Edit</button></li> <li><button aria-label=\"Remove\" class=\"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Remove</button></li> <li><button aria-label=\"Report\" class=\"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Report</button></li></ul></div>")],2),_vm._ssrNode(" <p class=\"text-gray-500 dark:text-gray-400\">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p> <div class=\"mt-4 flex items-center space-x-4\"><button type=\"button\" class=\"flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400\"><svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 20 18\" class=\"mr-1.5 h-3.5 w-3.5\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z\"></path></svg>\n                    Reply\n                </button></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<article class=\"border-t border-gray-200 bg-white p-6 text-base dark:border-gray-700 dark:bg-gray-900\">","</article>",[_vm._ssrNode("<footer class=\"mb-2 flex items-center justify-between\">","</footer>",[_vm._ssrNode("<div class=\"flex items-center\">","</div>",[_vm._ssrNode("<p class=\"mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white\">","</p>",[_c('nuxt-img',{staticClass:"mr-2 h-6 w-6 rounded-full",attrs:{"format":"webp","src":"https://flowbite.com/docs/images/people/profile-picture-4.jpg","alt":"Helene Engels","loading":"lazy"}}),_vm._ssrNode(" Helene Engels\n                    ")],2),_vm._ssrNode(" <p class=\"text-sm text-gray-600 dark:text-gray-400\"><time pubdate datetime=\"2022-06-23\" title=\"June 23rd, 2022\">Jun. 23, 2022</time></p>")],2),_vm._ssrNode(" <button id=\"dropdownComment4Button\" data-dropdown-toggle=\"dropdownComment4\" type=\"button\" class=\"dark:text-gray-40 inline-flex items-center rounded-lg bg-white p-2 text-center text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600\"><svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" viewBox=\"0 0 16 3\" class=\"h-4 w-4\"><path d=\"M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z\"></path></svg></button> <div id=\"dropdownComment4\" class=\"z-10 hidden w-36 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700\"><ul aria-labelledby=\"dropdownMenuIconHorizontalButton\" class=\"py-1 text-sm text-gray-700 dark:text-gray-200\"><li><button aria-label=\"Edit\" class=\"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Edit</button></li> <li><button aria-label=\"Remove\" class=\"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Remove</button></li> <li><button aria-label=\"Report\" class=\"block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white\">Report</button></li></ul></div>")],2),_vm._ssrNode(" <p class=\"text-gray-500 dark:text-gray-400\">Thanks for sharing this. I do came from the Backend development and explored some of the tools to design my Side Projects.</p> <div class=\"mt-4 flex items-center space-x-4\"><button type=\"button\" class=\"flex items-center text-sm font-medium text-gray-500 hover:underline dark:text-gray-400\"><svg aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 20 18\" class=\"mr-1.5 h-3.5 w-3.5\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z\"></path></svg>\n                    Reply\n                </button></div>")],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-comments.vue?vue&type=template&id=0aff4b5d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-comments.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_commentsvue_type_script_lang_js_ = ({
  data() {
    return {
      comment: ''
    };
  },
  methods: {
    createComments() {},
    getAllComments() {}
  }
});
// CONCATENATED MODULE: ./components/common/common-comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_commentsvue_type_script_lang_js_ = (common_commentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-comments.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_commentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6c3290e5"
  
)

/* harmony default export */ var common_comments = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/insights/_slug/index.vue?vue&type=template&id=4558665e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',[_vm._ssrNode("<section class=\"relative bg-white\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2\">","</div>",[_vm._ssrNode("<div class=\"pb-[46px] pt-7 md:pt-[136px]\"><p class=\"mb-5 border-l-[3px] border-primary pl-2.5 text-sm font-normal leading-3 text-[#030303] md:text-base md:leading-5\">Insights</p> <h1 class=\"text-[40px] font-bold leading-[44px] text-[#030303]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerTitle))+"</h1> <p class=\"mt-4 leading-[26px] text-[#030303]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerSubtitle))+"</p></div> "),_vm._ssrNode("<div class=\"relative bottom-0 left-[-50vw] top-0 ml-[50%] h-80 w-[100vw] max-w-none md:absolute md:left-[calc(50%+2.5rem)] md:ml-0 md:mt-0 md:h-full md:w-[calc(50vw-2.5rem)]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":_vm.content.bannerImgUrl,"alt":_vm.content.bannerTitle,"loading":"lazy"}})],1)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white pb-[90px] pt-[53px]\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 gap-7 md:gap-[59px] lg:grid-cols-5\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"flex flex-wrap items-end gap-5 pb-5 lg:block lg:pb-0\">","</div>",_vm._l((_vm.section1Column1Data),function(author,i){return _vm._ssrNode("<div"+(_vm._ssrClass("shrink-0 border-[#e8e8e8] lg:border-t",{ 'lg:pt-[29px]': i !== 0 }))+">","</div>",[_vm._ssrNode(((i === 0)?("<p class=\"pt-8 font-semibold leading-[22px]\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column1Title))+"</p>"):"<!---->")+" "),_vm._ssrNode("<div class=\"mt-[5px]\">","</div>",[_c('nuxt-img',{staticClass:"h-24 w-24 rounded-[5px] object-cover shadow-[0_3px_6px_rgba(0,0,0,0.44)]",attrs:{"format":"webp","src":author.attributes.imageUrl,"alt":author.attributes.authorName,"loading":"lazy"}})],1),_vm._ssrNode(" <p class=\"mt-3 leading-[22px]\">"+_vm._ssrEscape(_vm._s(author.attributes.authorName))+"</p> <p class=\"mt-[3px] text-sm leading-[13px] text-[#707070]\">"+_vm._ssrEscape(_vm._s(author.attributes.authorDesignation))+"</p> "),_vm._ssrNode("<ul class=\"mb-[5px] mt-1 flex items-center gap-[6px]\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a target=\"_blank\""+(_vm._ssrAttr("href",author.attributes.linkedinUrl))+" class=\"flex h-6 w-6 items-center rounded-full bg-[#f4f5f7]\">","</a>",[_c('icons-linkedin',{staticClass:"mx-auto h-[15px] w-[15px] text-primary"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a target=\"_blank\""+(_vm._ssrAttr("href",author.attributes.instagramUrl))+" class=\"flex h-6 w-6 items-center rounded-full bg-[#f4f5f7]\">","</a>",[_c('icons-instagram',{staticClass:"mx-auto h-[15px] w-[15px] text-primary"})],1)])],2)],2)}),0),_vm._ssrNode(" <div class=\"mb-4 border-t border-[#e8e8e8] pt-[29px]\"><div class=\"mt-[5px]\"><a"+(_vm._ssrAttr("href",_vm.content.section1Column1ButtonLink))+" class=\"outline-btn rounded-[11px] border-[#d5d5d5] px-8 text-[15px] font-semibold uppercase leading-5 text-primary\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column1ButtonText))+"</a></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"lg:col-span-3\">","</div>",[_vm._ssrNode(((_vm.content.audioFileUrl)?("<audio controls=\"controls\" class=\"w-full\"><source"+(_vm._ssrAttr("src",_vm.content.audioFileUrl))+" type=\"audio/ogg\"> <source"+(_vm._ssrAttr("src",_vm.content.audioFileUrl))+" type=\"audio/mpeg\"></audio>"):"<!---->")+" <div class=\"mb-[17px] mt-[37px] block h-[2px] w-full bg-primary\"></div> <div><p class=\"font-semibold\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column2Title))+"</p></div> "),(typeof _vm.content.section1Column2Description === 'string')?_vm._ssrNode("<div class=\"mt-4 space-y-[29px]\">","</div>",_vm._l((_vm.content.section1Column2Description.split("\n\n")),function(section,i){return _vm._ssrNode("<div class=\"flex items-start gap-[15px]\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('icons-arrow-up',{staticClass:"inline-block rotate-90 text-primary"})],1),_vm._ssrNode(" <p class=\"max-w-[445px] flex-1 text-lg leading-[22px] -tracking-[0.04px] text-black\">"+_vm._ssrEscape("\n                                "+_vm._s(section)+"\n                            ")+"</p>")],2)}),0):_vm._e(),_vm._ssrNode(" <div class=\"mt-[42px] bg-[#f4f5f7] p-7\"><div class=\"items-center gap-2 md:flex\"><p class=\"text-xl leading-6 -tracking-[0.04px]\">"+_vm._ssrEscape(_vm._s(_vm.content.CTA1Description))+"</p> <div class=\"mt-3 shrink-0 md:mt-0\"><a"+(_vm._ssrAttr("href",_vm.content.CTA1ButtonLink))+" class=\"btn rounded-[3px] px-[34px] py-[18px] text-sm font-semibold uppercase text-[#fdfeff]\">"+_vm._ssrEscape(_vm._s(_vm.content.CTA1ButtonText))+"</a></div></div></div> "),_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.content.img1Url ? 'py-[35px]' : 'pt-[35px]'))+">","</div>",[_c('common-custom-strapi-display',{attrs:{"classes":"text-base leading-[30px] -tracking-[0.03px] text-black","data":_vm.content.section2Paragraph}})],1),_vm._ssrNode(" "+((_vm.content.img1Url)?("<div class=\"block h-10 w-full bg-[#e8e8e8]\"></div>"):"<!---->")+" "),(_vm.content.img1Url)?_vm._ssrNode("<div class=\"my-[18px] mt-[18px] border-b-2 border-t-2 border-[#e8e8e8] py-[17px]\">","</div>",[_vm._ssrNode("<div class=\"px-[23px]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between\">","</div>",[_vm._ssrNode("<p class=\"text-[14px] leading-[22px] -tracking-[0.03px] text-primary\">Figure 1</p> "),_c('common-share',{attrs:{"is-show-save-btn":true,"insights":true}})],2),_vm._ssrNode(" <div class=\"mt-2 text-[20px] font-semibold leading-7\"><p>"+_vm._ssrEscape(_vm._s(_vm.content.img1Description))+"</p></div>")],2),_vm._ssrNode(" "),_c('nuxt-img',{staticClass:"my-10 w-full",attrs:{"format":"webp","src":_vm.content.img1Url,"alt":"Figure 1","loading":"lazy"}})],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-y-9 pt-[18px]\">","</div>",[_c('common-custom-strapi-display',{attrs:{"data":_vm.content.section3Paragraph}}),_vm._ssrNode(" "),_c('common-custom-strapi-display',{attrs:{"data":_vm.content.section4Paragraph}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"space-y-4 border-b border-t border-[#e8e8e8] pb-[45px] pt-4\"><p class=\"font-semibold leading-[22px] -tracking-[0.03px]\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column3Title))+"</p> <p class=\"leading-[22px] -tracking-[0.03px]\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column3Description))+"</p></div> "),_vm._ssrNode("<div class=\"mt-[30px]\">","</div>",[_c('common-share',{attrs:{"is-show-save-btn":false}})],1),_vm._ssrNode(" <div class=\"mt-[58px]\">"+((_vm.content.publishedAt)?("<p class=\"font-medium text-[#707070]\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column3InfoLeft)+" | "+_vm._s(_vm.content.section1Column3InfoRight))+"</p>"):"<!---->")+"</div> "),(_vm.insightPost1)?_vm._ssrNode("<div class=\"mt-[51px]\">","</div>",[_vm._ssrNode("<div class=\"border border-[#f4f5f7]\">","</div>",[_vm._ssrNode("<p class=\"px-[13px] py-[15px] text-lg font-medium leading-7 text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost1.Insightsource))+"</p> "),_c('nuxt-img',{attrs:{"format":"webp","src":_vm.insightPost1.imgUrl,"alt":_vm.insightPost1.title,"loading":"lazy"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-[13px] py-[15px]\">","</div>",[_vm._ssrNode("<p class=\"line-clamp-2 mb-2 text-sm font-semibold text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost1.title))+"</p> <p class=\"line-clamp-3 text-sm leading-[21px] -tracking-[0.03px] text-[#767677]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost1.paragraph))+"</p> "),_vm._ssrNode("<div class=\"mt-2\">","</div>",[_c('nuxt-link',{staticClass:"text-sm font-medium leading-3 text-primary hover:text-primary-700",attrs:{"to":("/insights/" + (_vm.insightPost1.singleInsightPageSlug))}},[_vm._v("More")])],1)],2)],2)]):_vm._e()],2)],2)])]),_vm._ssrNode(" "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video1ThumbnailUrl,"video-u-r-l":_vm.content.video1Url,"button-title":_vm.content.video1ButtonText,"button-u-r-l":_vm.content.video1ButtonLink,"title":_vm.content.video1Title}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white pb-[90px] pt-[66px]\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 gap-7 md:gap-[59px] lg:grid-cols-5\">","</div>",[_vm._ssrNode("<div></div> "),_vm._ssrNode("<div class=\"lg:col-span-3\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.content.img2Url ? 'pb-[35px]' : 'pb-2'))+">","</div>",[_c('common-custom-strapi-display',{attrs:{"classes":"text-base leading-[30px] -tracking-[0.03px] text-black","data":_vm.content.section5Paragraph}})],1),_vm._ssrNode(" "+((_vm.content.img2Url)?("<div class=\"block h-10 w-full bg-[#e8e8e8]\"></div>"):"<!---->")+" "),(_vm.content.img2Url)?_vm._ssrNode("<div class=\"my-[18px] mt-[18px] border-b-2 border-t-2 border-[#e8e8e8] py-[17px]\">","</div>",[_vm._ssrNode("<div class=\"px-[23px]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between\">","</div>",[_vm._ssrNode("<p class=\"text-[14px] leading-[22px] -tracking-[0.03px] text-primary\">Figure 2</p> "),_c('common-share',{attrs:{"is-show-save-btn":true,"insight-page":true}})],2),_vm._ssrNode(" <div class=\"mt-2 text-[20px] font-semibold leading-7\"><p>"+_vm._ssrEscape(_vm._s(_vm.content.img2Description))+"</p></div>")],2),_vm._ssrNode(" "),_c('nuxt-img',{staticClass:"my-10 w-full",attrs:{"format":"webp","src":_vm.content.img2Url,"alt":"Figure 2","loading":"lazy"}})],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-y-9 pt-[18px]\">","</div>",[_c('common-custom-strapi-display',{attrs:{"data":_vm.content.section6Paragraph}}),_vm._ssrNode(" "),_c('common-custom-strapi-display',{attrs:{"data":_vm.content.section7Paragraph}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[(_vm.insightPost2)?_vm._ssrNode("<div class=\"mt-[51px]\">","</div>",[_vm._ssrNode("<div class=\"border border-[#f4f5f7]\">","</div>",[_vm._ssrNode("<p class=\"px-[13px] py-[15px] text-lg font-medium leading-7 text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost2.Insightsource))+"</p> "),_c('nuxt-img',{attrs:{"format":"webp","src":_vm.insightPost2.imgUrl,"alt":_vm.insightPost2.title,"loading":"lazy"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-[13px] py-[15px]\">","</div>",[_vm._ssrNode("<p class=\"line-clamp-2 mb-2 text-sm font-semibold text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost2.title))+"</p> <p class=\"line-clamp-3 text-sm leading-[21px] -tracking-[0.03px] text-[#767677]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost2.paragraph))+"</p> "),_vm._ssrNode("<div class=\"mt-2\">","</div>",[_c('nuxt-link',{staticClass:"text-sm font-medium leading-3 text-primary hover:text-primary-700",attrs:{"to":("/insights/" + (_vm.insightPost2.singleInsightPageSlug))}},[_vm._v("More")])],1)],2)],2)]):_vm._e()])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-[45px] grid grid-cols-1 gap-7 md:gap-[59px] lg:grid-cols-5\">","</div>",[_vm._ssrNode("<div></div> "),_vm._ssrNode("<div class=\"lg:col-span-3\">","</div>",[_vm._ssrNode(((_vm.content.img3Url)?("<div class=\"block h-10 w-full bg-[#e8e8e8]\"></div>"):"<!---->")+" "),(_vm.content.img3Url)?_vm._ssrNode("<div class=\"my-[18px] mt-[18px] border-b-2 border-t-2 border-[#e8e8e8] py-[17px]\">","</div>",[_vm._ssrNode("<div class=\"px-[23px]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between\">","</div>",[_vm._ssrNode("<p class=\"text-[14px] leading-[22px] -tracking-[0.03px] text-primary\">Figure 3</p> "),_c('common-share',{attrs:{"is-show-save-btn":true,"insight-page":true}})],2),_vm._ssrNode(" <div class=\"mt-2 text-[20px] font-semibold leading-7\"><p>"+_vm._ssrEscape(_vm._s(_vm.content.img3Description))+"</p></div>")],2),_vm._ssrNode(" "),_c('nuxt-img',{staticClass:"my-10 w-full",attrs:{"format":"webp","src":_vm.content.img3Url,"alt":"Figure 3","loading":"lazy"}})],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-y-9\">","</div>",[_c('common-custom-strapi-display',{attrs:{"data":_vm.content.section8Paragraph}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[(_vm.insightPost3)?_vm._ssrNode("<div class=\"mt-[51px]\">","</div>",[_vm._ssrNode("<div class=\"border border-[#f4f5f7]\">","</div>",[_vm._ssrNode("<p class=\"px-[13px] py-[15px] text-lg font-medium leading-7 text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost3.Insightsource))+"</p> "),_c('nuxt-img',{attrs:{"format":"webp","src":_vm.insightPost3.imgUrl,"alt":_vm.insightPost3.title,"loading":"lazy"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-[13px] py-[15px]\">","</div>",[_vm._ssrNode("<p class=\"line-clamp-2 mb-2 text-sm font-semibold text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost3.title))+"</p> <p class=\"line-clamp-3 text-sm leading-[21px] -tracking-[0.03px] text-[#767677]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost3.paragraph))+"</p> "),_vm._ssrNode("<div class=\"mt-2\">","</div>",[_c('nuxt-link',{staticClass:"text-sm font-medium leading-3 text-primary hover:text-primary-700",attrs:{"to":("/insights/" + (_vm.insightPost3.singleInsightPageSlug))}},[_vm._v("More")])],1)],2)],2)]):_vm._e()])],2)],2)]),_vm._ssrNode(" "),_c('common-client-words',{attrs:{"title":_vm.content.section9Title,"description":_vm.content.section9Description,"testimonials":_vm.section9Data}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white pb-[206px] pt-[83px]\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 gap-7 md:gap-[59px] lg:grid-cols-5\">","</div>",[_vm._ssrNode("<div></div> "),_vm._ssrNode("<div class=\"lg:col-span-3\">","</div>",[_vm._ssrNode("<div class=\"block h-[2px] w-full bg-primary\"></div> "),_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 text-[28px] font-medium leading-9","data":_vm.content.section10Title}}),_vm._ssrNode(" "),_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px]","data":_vm.content.section10Description}}),_vm._ssrNode(" "),_c('common-custom-strapi-display',{attrs:{"classes":"mt-[58px] text-[28px] font-medium leading-9","data":_vm.content.section11Title}}),_vm._ssrNode(" "),_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px]","data":_vm.content.section11Description}})],2),_vm._ssrNode(" <div></div>")],2)])]),_vm._ssrNode(" "),_c('common-interested-service',{attrs:{"background-image":_vm.content.CTA2ImgUrl,"subtitle":_vm.content.CTA2Subtitle,"title":_vm.content.CTA2Title,"description":_vm.content.CTA2Description,"button-link":_vm.content.CTA2ButtonLink,"button-title":_vm.content.CTA2ButtonText}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white pb-10 pt-[58px]\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 items-center gap-7 md:gap-[59px] lg:grid-cols-5\">","</div>",[_vm._ssrNode("<div></div> "),_vm._ssrNode("<div class=\"lg:col-span-3\">","</div>",[_vm._ssrNode("<div class=\"block h-[2px] w-full bg-primary\"></div> "+((_vm.content.section12Title)?("<p class=\"mt-4 text-[28px] font-medium leading-9\">"+_vm._ssrEscape(_vm._s(_vm.content.section12Title))+"</p>"):"<!---->")+" "),(_vm.content.section12Description)?_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px]","data":_vm.content.section12Description}}):_vm._e(),_vm._ssrNode(" "+((_vm.content.section13Title)?("<p class=\"mt-[58px] text-[28px] font-medium leading-9\">"+_vm._ssrEscape(_vm._s(_vm.content.section13Title))+"</p>"):"<!---->")+" "),(_vm.content.section13Description)?_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px]","data":_vm.content.section13Description}}):_vm._e(),_vm._ssrNode(" "+((_vm.content.section13Title)?("<p class=\"mt-[58px] text-[28px] font-medium leading-9\">"+_vm._ssrEscape(_vm._s(_vm.content.section13Title))+"</p>"):"<!---->")+" "),(_vm.content.section13Description)?_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px]","data":_vm.content.section13Description}}):_vm._e(),_vm._ssrNode(" "+((_vm.content.Section14Title)?("<p class=\"mt-[58px] text-[28px] font-medium leading-9\">"+_vm._ssrEscape(_vm._s(_vm.content.Section14Title))+"</p>"):"<!---->")+" "),(_vm.content.Section14Description)?_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px]","data":_vm.content.Section14Description}}):_vm._e(),_vm._ssrNode(" "+((_vm.content.Section15Title)?("<p class=\"mt-[58px] text-[28px] font-medium leading-9\">"+_vm._ssrEscape(_vm._s(_vm.content.Section15Title))+"</p>"):"<!---->")+" "),(_vm.content.section15Description)?_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px]","data":_vm.content.section15Description}}):_vm._e(),_vm._ssrNode(" "+((_vm.content.section16Title)?("<p class=\"mt-[58px] text-[28px] font-medium leading-9\">"+_vm._ssrEscape(_vm._s(_vm.content.section16Title))+"</p>"):"<!---->")+" "),(_vm.content.Section16Description)?_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px]","data":_vm.content.Section16Description}}):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[(_vm.insightPost4)?_vm._ssrNode("<div class=\"mt-[51px]\">","</div>",[_vm._ssrNode("<div class=\"border border-[#f4f5f7]\">","</div>",[_vm._ssrNode("<p class=\"px-[13px] py-[15px] text-lg font-medium leading-7 text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost4.Insightsource))+"</p> "),_c('nuxt-img',{attrs:{"format":"webp","src":_vm.insightPost4.imgUrl,"alt":_vm.insightPost4.title,"loading":"lazy"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-[13px] py-[15px]\">","</div>",[_vm._ssrNode("<p class=\"line-clamp-2 mb-2 text-sm font-semibold text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost4.title))+"</p> <p class=\"line-clamp-3 text-sm leading-[21px] -tracking-[0.03px] text-[#767677]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost4.paragraph))+"</p> "),_vm._ssrNode("<div class=\"mt-2\">","</div>",[_c('nuxt-link',{staticClass:"text-sm font-medium leading-3 text-primary hover:text-primary-700",attrs:{"to":("/insights/" + (_vm.insightPost4.singleInsightPageSlug))}},[_vm._v("More")])],1)],2)],2)]):_vm._e()])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white\">","</section>",[_c('common-comments')],1),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"img-url":_vm.readyToTalkForm.imgUrl,"service-options":_vm.readyToTalkForm.services.data,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/insights/_slug/index.vue?vue&type=template&id=4558665e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/insights/_slug/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  async asyncData({
    $strapiInstance,
    $helper,
    route,
    $config,
    error
  }) {
    try {
      const data = await $strapiInstance.get(`${$config.strapi.url}/api/insight-single-insight-pages?filters[slug][$eq]=${route.params.slug}&populate=deep`);
      const content = $helper.parseData(data.data.data[0]);
      if (!content.bannerTitle) throw '404';
      return {
        content
      };
    } catch (err) {
      if (err === '404') error({
        statusCode: 404,
        message: 'Insight not found'
      });
    }
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
    section1Column1Data() {
      var _this$content12, _this$content12$secti;
      return ((_this$content12 = this.content) === null || _this$content12 === void 0 ? void 0 : (_this$content12$secti = _this$content12.section1Col1Component) === null || _this$content12$secti === void 0 ? void 0 : _this$content12$secti.data) || [];
    },
    insightPost1() {
      var _this$content13, _this$content13$secti, _this$content13$secti2;
      return (_this$content13 = this.content) === null || _this$content13 === void 0 ? void 0 : (_this$content13$secti = _this$content13.section1Col3Component) === null || _this$content13$secti === void 0 ? void 0 : (_this$content13$secti2 = _this$content13$secti.data[0]) === null || _this$content13$secti2 === void 0 ? void 0 : _this$content13$secti2.attributes;
    },
    insightPost2() {
      var _this$content14, _this$content14$secti, _this$content14$secti2;
      return (_this$content14 = this.content) === null || _this$content14 === void 0 ? void 0 : (_this$content14$secti = _this$content14.section1Col3Component) === null || _this$content14$secti === void 0 ? void 0 : (_this$content14$secti2 = _this$content14$secti.data[1]) === null || _this$content14$secti2 === void 0 ? void 0 : _this$content14$secti2.attributes;
    },
    insightPost3() {
      var _this$content15, _this$content15$secti, _this$content15$secti2;
      return (_this$content15 = this.content) === null || _this$content15 === void 0 ? void 0 : (_this$content15$secti = _this$content15.section1Col3Component) === null || _this$content15$secti === void 0 ? void 0 : (_this$content15$secti2 = _this$content15$secti.data[2]) === null || _this$content15$secti2 === void 0 ? void 0 : _this$content15$secti2.attributes;
    },
    insightPost4() {
      var _this$content16, _this$content16$secti, _this$content16$secti2;
      return (_this$content16 = this.content) === null || _this$content16 === void 0 ? void 0 : (_this$content16$secti = _this$content16.section1Col3Component) === null || _this$content16$secti === void 0 ? void 0 : (_this$content16$secti2 = _this$content16$secti.data[3]) === null || _this$content16$secti2 === void 0 ? void 0 : _this$content16$secti2.attributes;
    },
    section9Data() {
      var _this$content17, _this$content17$secti;
      return ((_this$content17 = this.content) === null || _this$content17 === void 0 ? void 0 : (_this$content17$secti = _this$content17.section9Component) === null || _this$content17$secti === void 0 ? void 0 : _this$content17$secti.data) || [];
    },
    readyToTalkForm() {
      var _this$content18, _this$content18$ready, _this$content18$ready2;
      return ((_this$content18 = this.content) === null || _this$content18 === void 0 ? void 0 : (_this$content18$ready = _this$content18.readyToTalkForm) === null || _this$content18$ready === void 0 ? void 0 : (_this$content18$ready2 = _this$content18$ready.data) === null || _this$content18$ready2 === void 0 ? void 0 : _this$content18$ready2.attributes) || {
        services: {
          data: []
        }
      };
    }
  },
  methods: {
    content() {
      // comment to redeploy
      return this.content;
    }
  }
});
// CONCATENATED MODULE: ./pages/insights/_slug/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var insights_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/insights/_slug/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  insights_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "662bb566"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsLinkedin: __webpack_require__(144).default,IconsInstagram: __webpack_require__(203).default,IconsArrowUp: __webpack_require__(204).default,CommonCustomStrapiDisplay: __webpack_require__(150).default,CommonShare: __webpack_require__(143).default,CommonContactUs: __webpack_require__(139).default,CommonClientWords: __webpack_require__(169).default,CommonInterestedService: __webpack_require__(145).default,CommonComments: __webpack_require__(258).default,CommonReadytotalk: __webpack_require__(140).default})


/***/ })

};;
//# sourceMappingURL=index.js.map