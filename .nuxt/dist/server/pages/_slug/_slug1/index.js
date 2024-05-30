exports.ids = [127,2,3,4,5,6,7,8,9,19,21,22,24,25,27,29,30,32,33,34,35,36,37,41,42,43,44,45,46,49,50,60,61,62,65,66,68,70,71,72,73,75,77,78,79,82,83,84,85,87,95,97,98,99,103,104,105,107,109,114,117];
exports.modules = Array(136).concat([
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alphaNumericSpace; });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);

const alphaNumericSpace = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["helpers"].regex('alpha', /^[0-9a-zA-Z\s]*$/);


/***/ }),
/* 137 */
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
/* 138 */
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
/* 139 */
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
/* 140 */
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
/* 141 */
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
/* 142 */
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
/* 143 */
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
/* 144 */
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
/* 145 */
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
/* 146 */
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
/* 147 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAATBAMAAABW2/GaAAAAAXNSR0IB2cksfwAAABtQTFRFAAAA////////////////////////////////600+wgAAAAl0Uk5TAGAw/+8QIKDwPkI6AAAAACdJREFUeJxjYAACRgUQySDsCuYYC4A5hkRxks0ZkHhQOWK5rRCuAgBfAQWFQqntwAAAAABJRU5ErkJggg=="

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUBAMAAABL3sEiAAAAAXNSR0IB2cksfwAAABJQTFRFAAAA////////////////////PlKtOgAAAAZ0Uk5TABCgz9D/deRy+QAAAClJREFUeJxjYBBgAAEmQzAlEgzmMrqSzmU0dQRRwiECxHMYmMAcBogjAC3XCAcGfqCxAAAAAElFTkSuQmCC"

/***/ }),
/* 149 */
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
/* 150 */
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
/* 151 */
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
/* 152 */
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
/* 153 */
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
/* 154 */
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
/* 155 */
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
/* 156 */
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
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_readytotalk_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_readytotalk_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_readytotalk_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_readytotalk_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_readytotalk_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 158 */
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
/* 159 */
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
/* 160 */
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
/* 161 */
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
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_interested_service_vue_vue_type_style_index_0_id_317cfebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_interested_service_vue_vue_type_style_index_0_id_317cfebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_interested_service_vue_vue_type_style_index_0_id_317cfebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_interested_service_vue_vue_type_style_index_0_id_317cfebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_interested_service_vue_vue_type_style_index_0_id_317cfebc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 163 */
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
/* 164 */
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
/* 165 */
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
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_toggle_content_vue_vue_type_style_index_0_id_699551c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_toggle_content_vue_vue_type_style_index_0_id_699551c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_toggle_content_vue_vue_type_style_index_0_id_699551c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_toggle_content_vue_vue_type_style_index_0_id_699551c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_toggle_content_vue_vue_type_style_index_0_id_699551c4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 167 */
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
/* 168 */
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
/* 169 */
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
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_brand_logo_vue_vue_type_style_index_0_id_4e5ed5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_brand_logo_vue_vue_type_style_index_0_id_4e5ed5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_brand_logo_vue_vue_type_style_index_0_id_4e5ed5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_brand_logo_vue_vue_type_style_index_0_id_4e5ed5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_brand_logo_vue_vue_type_style_index_0_id_4e5ed5f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 171 */
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
/* 172 */
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
/* 173 */
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
/* 174 */
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
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_client_words_vue_vue_type_style_index_0_id_6c4da888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_client_words_vue_vue_type_style_index_0_id_6c4da888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_client_words_vue_vue_type_style_index_0_id_6c4da888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_client_words_vue_vue_type_style_index_0_id_6c4da888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_client_words_vue_vue_type_style_index_0_id_6c4da888_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 176 */
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
/* 177 */
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
/* 178 */
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
/* 179 */
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
/* 180 */
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
/* 181 */
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
/* 182 */
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
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_work_at_the_best_place_vue_vue_type_style_index_0_id_e5d6c652_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_work_at_the_best_place_vue_vue_type_style_index_0_id_e5d6c652_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_work_at_the_best_place_vue_vue_type_style_index_0_id_e5d6c652_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_work_at_the_best_place_vue_vue_type_style_index_0_id_e5d6c652_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_work_at_the_best_place_vue_vue_type_style_index_0_id_e5d6c652_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 184 */
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
/* 185 */
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
/* 186 */
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
/* 187 */
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
/* 188 */
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
/* 189 */
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
/* 190 */
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
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_category_slider_vue_vue_type_style_index_0_id_800e5d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_category_slider_vue_vue_type_style_index_0_id_800e5d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_category_slider_vue_vue_type_style_index_0_id_800e5d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_category_slider_vue_vue_type_style_index_0_id_800e5d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_common_category_slider_vue_vue_type_style_index_0_id_800e5d90_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 192 */
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
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_us_heroform_vue_vue_type_style_index_0_id_36d20b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_us_heroform_vue_vue_type_style_index_0_id_36d20b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_us_heroform_vue_vue_type_style_index_0_id_36d20b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_us_heroform_vue_vue_type_style_index_0_id_36d20b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_us_heroform_vue_vue_type_style_index_0_id_36d20b8a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 194 */
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
/* 195 */
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
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(223);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("37e38f5c", content, true, context)
};

/***/ }),
/* 197 */
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
/* 198 */
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
/* 199 */
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
/* 200 */
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
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/home/home-sector-chart.vue?vue&type=template&id=34ade250&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid flex-none grid-cols-2 gap-3 sm:gap-[22px] md:w-full md:max-w-sm lg:max-w-[422px] xl:max-w-[660px] xl:gap-[34px]"},[_vm._ssrNode("<div class=\"rounded-xl bg-white shadow-[0px_1px_8px_rgba(0,161,241,0.12)]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center gap-2 border-b border-[#707070]/20 px-7 py-3\"><p class=\"text-sm font-semibold leading-8 text-[#5CAFCE] sm:text-[28px] xl:text-[46px] xl:leading-[56px]\">"+_vm._ssrEscape(_vm._s(_vm.chart1.avgCount))+"</p> <p class=\"text-left text-[10px] font-extrabold leading-[14px] -tracking-[0.03px] text-[#707070] sm:text-sm xl:text-[15px] xl:leading-[22px]\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.$t('industry_consultants'))+"\n            ")+"</p></div> "),_vm._ssrNode("<div class=\"px-2 py-3 text-center\">","</div>",[_c('client-only',[_c('apexchart',{attrs:{"type":"radialBar","options":_vm.chartRadialBar.options,"series":_vm.chart1.series}})],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"rounded-xl bg-white shadow-[0px_1px_8px_rgba(0,161,241,0.12)]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center gap-2 border-b border-[#707070]/20 px-7 py-3\"><p class=\"text-sm font-semibold leading-8 text-[#5CAFCE] sm:text-[28px] xl:text-[46px] xl:leading-[56px]\">"+_vm._ssrEscape(_vm._s(_vm.chart2.avgCount))+"</p> <p class=\"text-left text-[10px] font-extrabold leading-[14px] -tracking-[0.03px] text-[#707070] sm:text-sm xl:text-[15px] xl:leading-[22px]\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.$t('raised'))+"\n            ")+"</p></div> "),_vm._ssrNode("<div class=\"px-2 py-3 text-center\">","</div>",[_c('client-only',[_c('apexchart',{attrs:{"type":"area","options":_vm.chartArea.options,"series":_vm.chart2.series}})],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"rounded-xl bg-white shadow-[0px_1px_8px_rgba(0,161,241,0.12)]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center gap-2 border-b border-[#707070]/20 px-7 py-3\"><p class=\"text-sm font-semibold leading-8 text-[#5CAFCE] sm:text-[28px] xl:text-[46px] xl:leading-[56px]\">"+_vm._ssrEscape(_vm._s(_vm.chart3.avgCount))+"</p> <p class=\"text-left text-[10px] font-extrabold leading-[14px] -tracking-[0.03px] text-[#707070] sm:text-sm xl:text-[15px] xl:leading-[22px]\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.$t('business_plans_written'))+"\n            ")+"</p></div> "),_vm._ssrNode("<div class=\"px-2 py-3 text-center\">","</div>",[_c('client-only',[_c('apexchart',{attrs:{"type":"radialBar","options":_vm.chartRadialBar.options,"series":_vm.chart3.series}})],1)],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"rounded-xl bg-white shadow-[0px_1px_8px_rgba(0,161,241,0.12)]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center gap-2 border-b border-[#707070]/20 px-7 py-3\"><p class=\"text-sm font-semibold leading-8 text-[#5CAFCE] sm:text-[28px] xl:text-[46px] xl:leading-[56px]\">"+_vm._ssrEscape(_vm._s(_vm.chart4.avgCount))+"</p> <p class=\"text-left text-[10px] font-extrabold leading-[14px] -tracking-[0.03px] text-[#707070] sm:text-sm xl:text-[15px] xl:leading-[22px]\">"+_vm._ssrEscape("\n                "+_vm._s(_vm.$t('years_of_experience'))+"\n            ")+"</p></div> "),_vm._ssrNode("<div class=\"px-2 py-3 text-center\">","</div>",[_c('client-only',[_c('apexchart',{attrs:{"type":"area","options":_vm.chartArea.options,"series":_vm.chart4.series}})],1)],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/home-sector-chart.vue?vue&type=template&id=34ade250&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/home/home-sector-chart.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var home_sector_chartvue_type_script_lang_js_ = ({
  name: 'HomeSectorExcelled',
  data() {
    return {
      raisedToChart: {
        32: [15, 90, 10, 45, 30, 50, 35, 70, 49],
        36: [10, 45, 35, 80, 49, 35, 60, 45, 49],
        34: [15, 90, 10, 45, 30, 50, 35, 70, 49],
        26: [10, 20, 35, 51, 49, 50, 35, 99, 49],
        31: [15, 90, 10, 45, 30, 50, 35, 70, 49],
        33: [10, 20, 35, 51, 49, 50, 35, 99, 49],
        38: [10, 45, 35, 80, 49, 35, 60, 45, 49],
        25: [10, 45, 35, 80, 49, 35, 60, 45, 49],
        332: [10, 85, 40, 51, 90, 40, 35, 20, 49],
        30: [15, 90, 10, 45, 30, 50, 35, 70, 49],
        334: [10, 20, 35, 51, 49, 50, 35, 99, 49]
      },
      chartRadialBar: {
        options: {
          chart: {
            height: 300,
            type: 'radialBar',
            width: '100%',
            zoom: {
              enabled: false
            }
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  show: false,
                  fontSize: '0px'
                },
                value: {
                  fontSize: '36px',
                  fontWeight: 700,
                  color: '#051057',
                  offsetY: 58
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter(w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return parseInt(w.config.series.reduce((a, b) => a + b, 0) / w.config.series.length);
                  }
                },
                track: {
                  show: true,
                  width: '50',
                  opacity: 1,
                  margin: 5,
                  dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5
                  }
                }
              },
              hollow: {
                size: '60%'
              }
            }
          },
          stroke: {
            lineCap: 'round'
          },
          fill: {
            type: 'solid',
            colors: ['#00ADFF', '#9DDEFF']
          },
          tooltip: {
            enabled: false
          },
          states: {
            hover: {
              filter: {
                type: 'none',
                value: 0
              }
            }
          }
        }
      },
      chartArea: {
        options: {
          chart: {
            height: 300,
            type: 'area',
            width: '100%',
            zoom: {
              enabled: false
            },
            toolbar: {
              show: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight',
            colors: ['#00ADFF'],
            width: 1
          },
          markers: {
            size: 3,
            colors: ['#00ADFF']
          },
          colors: ['#00ADFF'],
          grid: {
            borderColor: '#E8E8E8',
            backgroundColor: '#E8E8E8',
            xaxis: {
              lines: {
                show: true
              },
              labels: {
                show: false
              }
            },
            yaxis: {
              lines: {
                show: true
              }
            }
          },
          plotOptions: {
            area: {
              fillTo: 'end'
            }
          },
          xaxis: {
            labels: {
              show: false,
              offsetX: 0,
              offsetY: 0,
              maxHeight: 0
            },
            axisBorder: {
              show: false,
              height: 0
            },
            tooltip: {
              enabled: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            labels: {
              show: false,
              offsetX: 0,
              offsetY: 0,
              maxHeight: 0
            },
            axisBorder: {
              show: false,
              height: 0
            }
          },
          tooltip: {
            enabled: true,
            custom({
              series,
              seriesIndex,
              dataPointIndex,
              w
            }) {
              return '<div class="apexchart-tooltip">' + '<span>' + series[seriesIndex][dataPointIndex] + 'MM</span>' + '</div>';
            }
          }
        }
      },
      chart1: {
        series: [60, 96]
        // avgCount: parseInt(this.chart1.series.reduce((a, b) => a + b, 0) / this.chart1.series.length),
      },

      chart2: {
        series: [{
          data: [10, 20, 35, 51, 49, 50, 35, 99, 49]
        }],
        avgCount: '35MM'
      },
      chart3: {
        series: [500, 800]
        // avgCount: parseInt(this.chart3.series.reduce((a, b) => a + b, 0) / this.chart3.series.length),
      },

      chart4: {
        series: [{
          data: [10, 20, 35, 51, 49, 50, 35, 99, 49]
        }],
        avgCount: 10
      }
    };
  },
  mounted() {
    if (window.innerWidth <= 576) {
      this.chartRadialBar.options.plotOptions.radialBar.hollow.size = '40%';
      this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.fontSize = '16px';
      this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.offsetY = 6;
    } else if (window.innerWidth <= 768) {
      this.chartRadialBar.options.plotOptions.radialBar.hollow.size = '40%';
      this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.fontSize = '20px';
      this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.offsetY = 8;
    } else if (window.innerWidth <= 1240) {
      this.chartRadialBar.options.plotOptions.radialBar.hollow.size = '60%';
      this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.fontSize = '28px';
      this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.offsetY = 12;
    } else {
      this.chartRadialBar.options.plotOptions.radialBar.hollow.size = '60%';
      this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.fontSize = '40px';
      this.chartRadialBar.options.plotOptions.radialBar.dataLabels.value.offsetY = 16;
    }
  },
  methods: {
    updateChart(service) {
      const chart1Md = parseInt(service.attributes.industryConsultant);
      const chart1p1 = parseInt(service.attributes.industryConsultant) / 2;
      const chart1p2 = chart1Md * 2 - chart1p1;
      this.chart1.series = [chart1p1, chart1p2];
      this.chart1.avgCount = parseInt(service.attributes.industryConsultant);
      /*
      this.chart2 = {
      series: [
          {
              data: [15, 90, 10, 45, 30, 50, 35, 70, parseInt(service.attributes.raised)],
          },
      ],
      avgCount: service.attributes.raised,
      };
      */
      const chart2Md = parseInt(service.attributes.businessPlansWritten);
      const chart2p1 = parseInt(service.attributes.businessPlansWritten) / 2;
      const chart2p2 = chart2Md * 2 - chart2p1;
      this.chart3.series = [chart2p1, chart2p2];
      this.chart3.avgCount = parseInt(service.attributes.businessPlansWritten);

      /*
      this.chart4 = {
      series: [
          {
              data: [10, 15, 60, 50, 85, 35, 40, 65, parseInt(service.attributes.yearsOfExperience)],
          },
      ],
      avgCount: service.attributes.yearsOfExperience,
      };
      */

      if (service.attributes.sectorName === 'Commercial Real Estate') {
        this.chart2 = {
          series: [{
            data: [10, 20, 35, 51, 49, 50, 35, 99, 49]
          }],
          avgCount: '34MM'
        };
        this.chart4 = {
          series: [{
            data: [10, 20, 35, 51, 49, 50, 35, 99, 49]
          }],
          avgCount: 12
        };
      } else if (service.attributes.sectorName === 'Education & E-Learning') {
        this.chart2 = {
          series: [{
            data: [10, 45, 35, 80, 49, 35, 60, 45, 49]
          }],
          avgCount: '38MM'
        };
        this.chart4 = {
          series: [{
            data: [10, 85, 40, 51, 90, 40, 35, 20, 49]
          }],
          avgCount: 15
        };
      } else if (service.attributes.sectorName === 'Software/Apps & Telecommunications') {
        this.chart2 = {
          series: [{
            data: [15, 90, 10, 45, 30, 50, 35, 70, 49]
          }],
          avgCount: '32MM'
        };
        this.chart4 = {
          series: [{
            data: [10, 15, 60, 50, 85, 35, 40, 65, 49]
          }],
          avgCount: 10
        };
      } else if (service.attributes.sectorName === 'Cannabis') {
        this.chart2 = {
          series: [{
            data: [10, 45, 35, 80, 49, 35, 60, 45, 49]
          }],
          avgCount: '36MM'
        };
        this.chart4 = {
          series: [{
            data: [10, 85, 40, 51, 90, 40, 35, 20, 49]
          }],
          avgCount: 8
        };
      } else if (service.attributes.sectorName === 'Financial Services') {
        this.chart2 = {
          series: [{
            data: [15, 90, 10, 45, 30, 50, 35, 70, 49]
          }],
          avgCount: '34MM'
        };
        this.chart4 = {
          series: [{
            data: [10, 15, 60, 50, 85, 35, 40, 65, 49]
          }],
          avgCount: 9
        };
      } else if (service.attributes.sectorName === 'Law, Consulting & Accounting Brokerage, Insurance') {
        this.chart2 = {
          series: [{
            data: [10, 20, 35, 51, 49, 50, 35, 99, 49]
          }],
          avgCount: '26MM'
        };
        this.chart4 = {
          series: [{
            data: [10, 20, 35, 51, 49, 50, 35, 99, 49]
          }],
          avgCount: 5
        };
      } else if (service.attributes.sectorName === 'Clean Tech') {
        this.chart2 = {
          series: [{
            data: [15, 90, 10, 45, 30, 50, 35, 70, 49]
          }],
          avgCount: '31MM'
        };
        this.chart4 = {
          series: [{
            data: [10, 15, 60, 50, 85, 35, 40, 65, 49]
          }],
          avgCount: 9
        };
      } else if (service.attributes.sectorName === 'Medical Technology, Biotech, Healthcare & Fitness') {
        this.chart2 = {
          series: [{
            data: [10, 20, 35, 51, 49, 50, 35, 99, 49]
          }],
          avgCount: '33MM'
        };
        this.chart4 = {
          series: [{
            data: [10, 20, 35, 51, 49, 50, 35, 99, 49]
          }],
          avgCount: 9
        };
      } else if (service.attributes.sectorName === 'Automation, Artificial Intelligence') {
        this.chart2 = {
          series: [{
            data: [10, 45, 35, 80, 49, 35, 60, 45, 49]
          }],
          avgCount: '38MM'
        };
        this.chart4 = {
          series: [{
            data: [10, 85, 40, 51, 90, 40, 35, 20, 49]
          }],
          avgCount: 12
        };
      } else if (service.attributes.sectorName === 'Consumer Products & Services') {
        this.chart2 = {
          series: [{
            data: [10, 45, 35, 80, 49, 35, 60, 45, 49]
          }],
          avgCount: '25MM'
        };
        this.chart4 = {
          series: [{
            data: [15, 90, 10, 45, 30, 50, 35, 70, 49]
          }],
          avgCount: 6
        };
      } else if (service.attributes.sectorName === 'Manufacturing, Aerospace & Defense') {
        this.chart2 = {
          series: [{
            data: [10, 85, 40, 51, 90, 40, 35, 20, 49]
          }],
          avgCount: '32MM'
        };
        this.chart4 = {
          series: [{
            data: [10, 45, 35, 80, 49, 35, 60, 45, 49]
          }],
          avgCount: 9
        };
      } else if (service.attributes.sectorName === 'Blockchain & Digital Transformation') {
        this.chart2 = {
          series: [{
            data: [15, 90, 10, 45, 30, 50, 35, 70, 49]
          }],
          avgCount: '30MM'
        };
        this.chart4 = {
          series: [{
            data: [10, 15, 60, 50, 85, 35, 40, 65, 49]
          }],
          avgCount: 8
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./components/home/home-sector-chart.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_home_sector_chartvue_type_script_lang_js_ = (home_sector_chartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/home/home-sector-chart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_home_sector_chartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "391a86e8"
  
)

/* harmony default export */ var home_sector_chart = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 202 */
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
/* 203 */
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
/* 204 */
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
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-building.vue?vue&type=template&id=3fdfdf4a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-4 w-3",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 25 20"}},[_vm._ssrNode("<g><g><path fill=\"#fff\" d=\"M1.359 2.397L7.316.32l6.118 2.118-6.27 2.315z\"></path></g> <g><path fill=\"#fff\" d=\"M5.525 7.266l-1.136-.503.045-.945 1.09.476zm0 2.161l-1.136-.503.045-.945 1.09.476zm0 2l-1.136-.503.045-.945 1.09.476zm0 2.3l-1.136-.504.045-.945 1.09.476zm0 2.298l-1.136-.502.045-.946 1.09.476zM3.22 6.265l-1.135-.503.044-.945 1.091.476zm0 2.161l-1.135-.503.044-.945 1.091.476zm0 2l-1.135-.503.044-.945 1.091.476zm0 2.3l-1.135-.504.044-.945 1.091.476zm0 2.298l-1.135-.502.044-.946 1.091.476zM.821 3.376V15.41l6.035 2.411.02-11.96z\"></path></g> <g><path fill=\"#fff\" d=\"M12.468 3.718l5.869-2.137L24.16 3.83l-5.63 2.288z\"></path></g> <g><path fill=\"#fff\" d=\"M16.717 8.496l-1.135-.502.044-.946 1.091.475zm0 2.162l-1.135-.504.044-.944 1.091.476zm0 2l-1.135-.504.044-.944 1.091.476zm0 2.298l-1.135-.502.044-.945 1.091.475zm0 2.3l-1.135-.504.044-.945 1.091.477zm-2.304-9.76l-1.136-.503.044-.945 1.092.475zm0 2.161l-1.136-.504.044-.945 1.092.477zm0 2l-1.136-.504.044-.945 1.092.477zm0 2.299l-1.136-.503.044-.945 1.092.475zm0 2.298l-1.136-.502.044-.945 1.092.476zm-2.4-11.649v12.036l6.035 2.41.021-11.96z\"></path></g> <g><path fill=\"#fff\" d=\"M22.452 7.318v-.972l1.092-.476.043.945zm0 2.162v-.973l1.092-.476.043.946zm0 2v-.973l1.092-.476.043.946zm0 2.298v-.972l1.092-.476.043.945zm0 3.622v-2.327l1.09-.532.026 2.424zM20.147 8.32v-.972l1.09-.476.045.945zm0 2.161v-.972l1.09-.476.045.946zm0 2v-.972l1.09-.476.045.945zm0 2.3v-.973l1.09-.476.045.945zm0 2.298v-.972l1.09-.476.045.945zM18.794 6.914l.022 11.96 6.034-2.411V4.428z\"></path></g> <g><path fill=\"#fff\" d=\"M8.97 7.065v-.972l1.09-.476.045.946zm0 2.162v-.972l1.09-.476.045.945zm0 2v-.972l1.09-.476.045.945zm0 2.299v-.972l1.09-.476.045.945zm0 2.299v-.972l1.09-.476.045.945zM7.68 5.615v12.394l3.477-1.033V4.426z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-building.vue?vue&type=template&id=3fdfdf4a&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-building.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "39feae49"
  
)

/* harmony default export */ var icons_building = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-eduction.vue?vue&type=template&id=6fd0c9b3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-5 w-4",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 34 20"}},[_vm._ssrNode("<g><g><path fill=\"#fff\" d=\"M6.834 17.413l.395.185c.425.2.876.383 1.327.552.452.17.9.323 1.318.457 1.131.364 2.303.66 3.49.86 1.106.188 2.225.293 3.328.293 1.148 0 2.297-.122 3.43-.345a21.235 21.235 0 0 0 3.497-1.011c.438-.168.925-.369 1.426-.6a15.1 15.1 0 0 0 1.196-.61l.348-.201-.002-.4-.033-4.875-.006-.974-.917.328-8.934 3.207-8.97-3.21-.928-.333.005.987.028 5.252zm23.023-3.356l.347-.346.346-.346V7.923l.93-.342 1.687-.616-1.665-.675L16.952.405 16.693.3l-.259.105L1.886 6.29l-1.664.675 1.686.616 14.545 5.328.24.087.237-.087 12.235-4.48v4.936l.345.346z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-eduction.vue?vue&type=template&id=6fd0c9b3&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-eduction.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2b177116"
  
)

/* harmony default export */ var icons_eduction = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-wifi.vue?vue&type=template&id=41c4a031&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-6 w-6",attrs:{"xmlns":"http://www.w3.org/2000/svg","fill":"none","viewBox":"0 0 24 24","stroke":"currentColor","stroke-width":"2"}},[_vm._ssrNode("<path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-wifi.vue?vue&type=template&id=41c4a031&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-wifi.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4aa038aa"
  
)

/* harmony default export */ var icons_wifi = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-cannabis.vue?vue&type=template&id=96aa089e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-4 w-4",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 22 22"}},[_vm._ssrNode("<g><g><path fill=\"#fefefe\" d=\"M11.115.257S8.736 2.59 8.78 8.577v.345C5.892 5.144 2.198 4.079 2.198 4.079s.125 3.936 2.827 7.96c-2.79-.717-4.525.067-4.525.067s1.15 2.843 4.843 4.074c-1.018.593-1.615 1.23-1.659 1.273l-1.061 1.062c.723.232 1.17.424 3.821.424.722 0 1.248-.082 1.884-.252 1.019-.272 1.81-.602 2.389-.982.14 2.11.875 3.556.875 3.556a.425.425 0 1 0 .743-.398s-.618-1.237-.756-3.118c.572.362 1.342.682 2.322.942.637.17 1.163.252 1.884.252 2.652 0 3.098-.192 3.822-.424l-1.062-1.062c-.043-.043-.64-.68-1.658-1.273 3.693-1.231 4.843-4.074 4.843-4.074s-1.735-.784-4.525-.066c2.702-4.025 2.826-7.961 2.826-7.961s-3.693 1.065-6.581 4.843v-.345c.043-5.988-2.335-8.32-2.335-8.32z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-cannabis.vue?vue&type=template&id=96aa089e&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-cannabis.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4807ac84"
  
)

/* harmony default export */ var icons_cannabis = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-finacial.vue?vue&type=template&id=d7995dcc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-4 w-4",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 22 23"}},[_vm._ssrNode("<g><g clip-path=\"url(#clip-666f690b-1782-497c-8706-3af543648c68)\"><path fill=\"#9ddefd\" d=\"M17.112 8.866c.087-.012.173-.022.26-.032a3.796 3.796 0 0 1-.013-.105s-.252.103-.247.137z\"></path></g> <g clip-path=\"url(#clip-666f690b-1782-497c-8706-3af543648c68)\"><path fill=\"#9ddefd\" d=\"M17.099 8.765l.26-.036.013.105c-.087.01-.173.02-.26.032l-.013-.1\"></path></g> <g><g><path fill=\"#fff\" d=\"M20.908 20.558h-.444v-.503c0-.4-.323-.725-.72-.725H2.586a.722.722 0 0 0-.719.725v.503h-.6a.771.771 0 0 0-.767.775v.494a.77.77 0 0 0 .768.774h19.64a.77.77 0 0 0 .767-.774v-.494a.77.77 0 0 0-.767-.775\"></path></g> <g><path fill=\"#fff\" d=\"M5.376 9.64H4.312a.427.427 0 0 0-.426.427v7.76c0 .237.191.429.426.429h1.064a.427.427 0 0 0 .425-.429v-7.76a.427.427 0 0 0-.425-.428\"></path></g> <g><path fill=\"#fff\" d=\"M9.63 9.64H8.568a.427.427 0 0 0-.425.427v7.76c0 .237.19.429.425.429H9.63a.427.427 0 0 0 .425-.429v-7.76a.427.427 0 0 0-.425-.428\"></path></g> <g><path fill=\"#fff\" d=\"M13.815 9.64H12.75a.427.427 0 0 0-.424.427v7.76c0 .237.19.429.424.429h1.065a.426.426 0 0 0 .424-.429v-7.76a.427.427 0 0 0-.424-.428\"></path></g> <g><path fill=\"#fff\" d=\"M18.039 9.64h-1.064a.427.427 0 0 0-.425.427v7.76c0 .237.19.429.425.429h1.064a.427.427 0 0 0 .425-.429v-7.76a.427.427 0 0 0-.425-.428\"></path></g> <g><path fill=\"#fff\" d=\"M19.541 5.293V3.458h-3.42L11.326.884 6.592 3.458h-3.73v2.028L.576 6.73V8.78h21.192V6.487zm-8.37 2.16c-1.17 0-2.119-.958-2.119-2.139 0-1.18.949-2.137 2.12-2.137 1.17 0 2.12.957 2.12 2.137a2.13 2.13 0 0 1-2.12 2.138\"></path></g></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-finacial.vue?vue&type=template&id=d7995dcc&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-finacial.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "46c19bdc"
  
)

/* harmony default export */ var icons_finacial = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-brokerage.vue?vue&type=template&id=07f48037&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 58 58"}},[_vm._ssrNode("<g><g clip-path=\"url(#clip-09189227-f042-408e-bdc9-773b0bc4e302)\"><path fill=\"#fff\" d=\"M48.327 41.47c-2.673-5.208-7.38-9.197-13.081-10.902a9.98 9.98 0 0 0 3.788-7.832c0-5.525-4.481-10.006-10.008-10.006-5.525 0-10.006 4.481-10.006 10.006a9.986 9.986 0 0 0 3.788 7.832c-5.701 1.705-10.41 5.692-13.081 10.9a22.988 22.988 0 0 1-3.822-12.729c0-12.77 10.35-23.123 23.12-23.123 12.771 0 23.124 10.353 23.124 23.123 0 4.705-1.41 9.079-3.822 12.73M29.026.356C13.352.355.644 13.063.644 28.74c0 15.674 12.708 28.385 28.382 28.385 15.676 0 28.384-12.71 28.384-28.385C57.41 13.063 44.702.355 29.026.355\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-brokerage.vue?vue&type=template&id=07f48037&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-brokerage.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "063942c1"
  
)

/* harmony default export */ var icons_brokerage = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-clean-tech.vue?vue&type=template&id=847c2aaa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"47","height":"70","viewBox":"0 0 47 70"}},[_vm._ssrNode("<g><g clip-path=\"url(#clip-48bb1a21-4b67-4abe-9905-417c25d9fea2)\"><path fill=\"#fbfcfe\" d=\"M37.133 27.122c.2-.027.396-.05.595-.074a8.696 8.696 0 0 1-.03-.239s-.576.235-.565.313z\"></path></g> <g clip-path=\"url(#clip-48bb1a21-4b67-4abe-9905-417c25d9fea2)\"><path fill=\"#3e93ed\" d=\"M37.102 26.892l.597-.083c.009.08.018.159.029.24-.199.024-.396.046-.595.073l-.03-.23\"></path></g> <g><g><path fill=\"#f0efef\" d=\"M21.86 43.083H6.071a2.246 2.246 0 1 1 0-4.49H21.86c1.247 0 2.257 1 2.257 2.245a2.246 2.246 0 0 1-2.256 2.245z\"></path></g> <g><path fill=\"#f0efef\" d=\"M.507 18.657a2.52 2.52 0 0 1 1.824-3.06l22.806-5.778a2.52 2.52 0 0 1 1.236 4.883L3.568 20.479a2.522 2.522 0 0 1-3.06-1.822\"></path></g> <g><path fill=\"#f0efef\" d=\"M1.131 27.5l5.257 5.485h-.316a2.245 2.245 0 0 0-2.255 2.244 2.246 2.246 0 0 0 2.255 2.244H21.86a2.247 2.247 0 0 0 2.257-2.244 2.246 2.246 0 0 0-2.257-2.244h-.271l2.163-1.994a2.518 2.518 0 1 0-3.41-3.707l-3.44 3.169a2.508 2.508 0 0 0-.71 2.532h-4.104a2.505 2.505 0 0 0-.673-2.032L7.76 27.14l18.616-4.72a2.518 2.518 0 1 0-1.24-4.882l-22.803 5.78c-.87.22-1.556.885-1.804 1.745\"></path></g> <g><path fill=\"#f0efef\" d=\"M1.137 10.825a2.517 2.517 0 0 1 1.828-3.056l7.26-1.826-1.148-.334A2.518 2.518 0 1 1 10.48.773l10.083 2.923a2.515 2.515 0 0 1 1.816 2.464 2.517 2.517 0 0 1-1.902 2.397L4.192 12.654a2.522 2.522 0 0 1-3.055-1.83\"></path></g> <g><path fill=\"#f0efef\" d=\"M44.265 33.008c-.377 3.53-6.689 4.142-9.444 5.586-10.987 5.755-18.859 18.45-19.079 20.36l-.06-8.062h.001c2.177-.292 3.68-2.18 3.68-4.466v-2.221H8.142v2.22c0 2.322 1.917 4.234 4.194 4.483l-.006 18.284h3.663s-.599-10.417 4.797-13.953c1.575-1.032 11.008 2.077 18.077-2.252 6.897-4.222 9.605-15.087 5.398-19.979z\"></path></g></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-clean-tech.vue?vue&type=template&id=847c2aaa&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-clean-tech.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4ce1be22"
  
)

/* harmony default export */ var icons_clean_tech = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-heart-care.vue?vue&type=template&id=18f4dd59&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"56","height":"49","viewBox":"0 0 56 49"}},[_vm._ssrNode("<g><g clip-path=\"url(#clip-0476d95a-6a4e-4dbb-b6ab-64da9de7203c)\"><path fill=\"#fff\" d=\"M40.624 25.087c-5.46 0-9.887-4.426-9.887-9.888 0-5.46 4.427-9.885 9.887-9.885 5.458 0 9.885 4.425 9.885 9.885 0 5.462-4.427 9.888-9.885 9.888m8.895-22.024c-6.89-4.923-16.467-3.33-21.388 3.56A15.333 15.333 0 0 0 15.885.208C7.417.082.448 6.843.323 15.311a14.95 14.95 0 0 0 4.26 10.46l21.096 21.384c1.616 1.332 3.214 1.415 4.783.118L51.28 26.16a14.97 14.97 0 0 0 4.656-10.85 15.334 15.334 0 0 0-6.417-12.247\"></path></g> <g clip-path=\"url(#clip-0476d95a-6a4e-4dbb-b6ab-64da9de7203c)\"><path fill=\"#fff\" d=\"M44.51 13.581h-2.17v-2.168a1.808 1.808 0 0 0-3.614 0v2.168h-2.17c-.996 0-1.805.81-1.805 1.808 0 1 .809 1.808 1.805 1.808h2.17v2.168a1.808 1.808 0 1 0 3.614 0v-2.168h2.17a1.809 1.809 0 0 0 0-3.616\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-heart-care.vue?vue&type=template&id=18f4dd59&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-heart-care.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c95b52e6"
  
)

/* harmony default export */ var icons_heart_care = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-residential.vue?vue&type=template&id=dac74de4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-4 w-4",attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 22 25"}},[_vm._ssrNode("<g><g><path fill=\"#fff\" d=\"M17.327 13.377h-1.002v3.23a.717.717 0 0 1-.717.718h-1.082a.717.717 0 0 1-.717-.717V14.48h-1.916v2.128c0 .396-.32.717-.716.717h-1.083a.717.717 0 0 1-.717-.717v-3.231H8.375v-.995h.072l4.404-4.27 4.405 4.27h.07zM9.493 2.562h6.867v2.642H9.493zM20.64.802H1.162a.738.738 0 0 0-.738.737V23.657c0 .432.35.782.782.782h.198c.431 0 .781-.35.781-.782V2.562H8.04v2.642H5.584a.781.781 0 0 0-.782.781v13.8c0 .43.35.781.782.781H20.01c.432 0 .782-.35.782-.782V5.985c0-.431-.35-.78-.782-.78h-2.197V2.561h2.827c.408 0 .738-.33.738-.737v-.286a.737.737 0 0 0-.738-.738\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-residential.vue?vue&type=template&id=dac74de4&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-residential.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "284c777f"
  
)

/* harmony default export */ var icons_residential = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-consumer.vue?vue&type=template&id=8e0bdc2c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"35","height":"69","viewBox":"0 0 35 69"}},[_vm._ssrNode("<g><g clip-path=\"url(#clip-06188741-6efc-42b0-84db-9a4f35028c8b)\"><path fill=\"#fff\" d=\"M20.118 14.091A6.664 6.664 0 1 0 20.116.762a6.664 6.664 0 0 0 .002 13.329\"></path></g> <g clip-path=\"url(#clip-06188741-6efc-42b0-84db-9a4f35028c8b)\"><path fill=\"#fff\" d=\"M10.817 54.11h-1.17v-5.465h1.17zm-2.484 0H7.162v-5.465h1.17zm-2.752 0H4.412v-5.465h1.169zm4.518-7.356H4.702c.228-1.99 1.35-3.501 2.699-3.501 1.35 0 2.47 1.512 2.698 3.5m16.756-31.005H13.359a15.1 15.1 0 0 0-7.236 7.896c-.156.25-.259.531-.306.832l-.029.083h.016a2.479 2.479 0 0 0-.016.258v16.125c0 .542.192 1.037.513 1.425-1.52.596-2.627 2.33-2.656 4.387H.004l2.66 9.107h10.363l1.681-9.107h-3.434c-.022-1.68-.765-3.142-1.867-3.947a2.235 2.235 0 0 0 1.004-1.865V24.817a1.99 1.99 0 0 0-.018-.258h1.737v20.583h4.688l-2.529 11.91-2.159.025v7.856a3.608 3.608 0 0 0 7.217 0V39.214h1.132v25.719a3.61 3.61 0 0 0 7.219 0V24.559h2.29a2.479 2.479 0 0 0-.015.258v16.125a2.24 2.24 0 0 0 2.24 2.24h.139a2.24 2.24 0 0 0 2.241-2.24V24.817c-2.31-5.207-4.596-7.49-7.738-9.07\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-consumer.vue?vue&type=template&id=8e0bdc2c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-consumer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "426eae8b"
  
)

/* harmony default export */ var icons_consumer = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-manufacturing.vue?vue&type=template&id=9240c354&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"h-4 w-4",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"29","height":"22","viewBox":"0 0 29 22"}},[_vm._ssrNode("<g><g clip-path=\"url(#clip-ea89d3f9-1644-4153-ada0-920febeac331)\"><path fill=\"#f6fafd\" d=\"M.886 10.965v-.606l.346-.29c.646-.155 1.165-.282 1.683-.407C4.657 9.43 6.428 9.33 8.28 8.638c.588 0 1.375.097 2.124-.03.608-.105 1.205-.116 1.821-.141.377-.273.63-.621.698-1.111.065-.469.344-.868.495-1.316.36-1.064.841-2.084 1.253-3.13.204-.519.364-1.053.593-1.725.29-.228.696-.545 1.003-.784.523-.102.934-.244 1.346-.244.411-.001.824.14 1.208.214l.562.668c.126 1.068.199 2.388.534 3.679.105.403.019.859.02 1.29v1.737c.195.33.413.424.774.255.371-.174.782-.26 1.318-.432 1.04-1.064 2.445-1.887 3.846-2.715.128-.077.276-.128.391-.22.676-.544 1.432-.754 2.353-.561.015.28.03.578.04.827l-2.225 4.218v3.924c.745 1.476 1.48 2.926 2.203 4.382.05.097.007.24.007.427-.554.095-1.102.025-1.657.047-1.76-1.076-3.56-2.107-5.06-3.671-.644.114-1.174-.664-1.99-.322v.426a8.673 8.673 0 0 1-.33 2.594c-.197.684-.168 1.438-.209 2.163-.027.524-.005 1.049-.005 1.677-.327.257-.7.551-1.05.83h-1.756c-.109-.088-.235-.263-.393-.301-.951-.227-1.213-.981-1.432-1.786a2.738 2.738 0 0 0-.26-.662c-.19-.321-.184-.715-.337-1.01-.17-.33-.35-.616-.334-1.003.004-.105-.095-.216-.147-.324-.358-.748-.61-1.537-.852-2.327-.111-.359-.222-.692-.572-.892-.826-.107-1.664-.146-2.48-.378-.315-.09-.676.002-1.013-.029-.387-.036-.789-.06-1.15-.186-1.255-.437-2.53-.725-3.864-.75-.347-.006-.69-.174-1.033-.266-.43-.114-.862-.226-1.366-.219l-.468-.496\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-manufacturing.vue?vue&type=template&id=9240c354&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-manufacturing.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "01b53bf9"
  
)

/* harmony default export */ var icons_manufacturing = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-bitcoin.vue?vue&type=template&id=5b2647ce&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"49","height":"48","viewBox":"0 0 49 48"}},[_vm._ssrNode("<g><g><path fill=\"#fefefe\" d=\"M21.43 25.09v5.683h3.729c2.413 0 3.717-1.014 3.717-2.885 0-1.83-1.347-2.798-3.815-2.798zm0-7.92v5.09h3.146c2.262 0 3.495-.928 3.495-2.537 0-1.595-1.15-2.552-3.147-2.552zm.813-7.207h4.002v4.018c3.723.086 5.945 1.954 5.945 4.976 0 2.121-1.566 3.968-3.619 4.272v.25c2.65.194 4.577 2.193 4.577 4.773 0 3.502-2.642 5.716-6.903 5.722v4.006h-4.002v-4.002H17.24V13.966h5.003zM24.244-.043C10.982-.043.23 10.71.23 23.972s10.753 24.014 24.015 24.014S48.26 37.234 48.26 23.972c0-13.262-10.753-24.015-24.015-24.015z\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-bitcoin.vue?vue&type=template&id=5b2647ce&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-bitcoin.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "18a29a19"
  
)

/* harmony default export */ var icons_bitcoin = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-about-page.vue?vue&type=template&id=3ac22ffd&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',[_vm._ssrNode("<section class=\"relative bg-cover bg-no-repeat pb-8 pt-[250px] md:pb-[69px] md:pt-[166px]\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (_vm.content.bannerImgUrl) + ")") }, null))+"><div class=\"absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent\"></div> <div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-90 xl:h-[307px]\"></div> <div class=\"container relative z-10 px-10 lg:px-[97px] xl:px-4\"><div><p class=\"mb-5 border-l-[3px] border-primary pl-2.5 text-sm font-normal leading-3 text-[#FBFBFD] md:text-base md:leading-5\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.content.bannerSubTitle)+"\n                ")+"</p> <h1 class=\"mb-4 text-[28px] font-bold leading-8 text-white md:text-[40px] md:leading-[53px]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerTitle))+"</h1> <p class=\"w-full text-sm font-normal leading-5 text-[#FBFBFD] sm:max-w-[377px] md:max-w-[458px] md:text-base md:leading-[26px]\">"+(_vm._s(_vm.content.bannerDescription))+"</p></div></div></section> "),_c('common-banner-tab',{attrs:{"is-show-save-btn":true,"tabs":_vm.tabs}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"pb-20 pt-14 md:pb-32\">","</section>",[_vm._ssrNode("<div class=\"container px-10 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-0 flex items-center justify-center gap-[5px] text-center md:mb-4 md:gap-8\"><div class=\"block h-px w-full bg-[#d5d5d5]\"></div> <p id=\"aboutUs\" class=\"shrink-0 text-[22px] font-bold uppercase leading-8 text-black md:text-3xl md:leading-[43px]\">"+(_vm._s(_vm.content.section1Title))+"</p> <div class=\"block h-px w-full bg-[#d5d5d5]\"></div></div> "),_c('common-toggle-content',{attrs:{"content":_vm.content.section1Paragraph}})],2)]),_vm._ssrNode(" "),_c('common-business-challenge',{attrs:{"title":_vm.content.section2Title,"image":_vm.content.section2imgUrl,"values":_vm.section2Data,"button-text":_vm.content.CTA1ButtonText,"button-url":_vm.content.CTA1ButtonLink}}),_vm._ssrNode(" <section class=\"py-10\"><div class=\"container lg:px-[97px] xl:px-4\"><div class=\"text-center md:mb-[50px]\"><div class=\"mb-6 flex items-center justify-center gap-[5px] text-center md:mb-9 md:gap-8\"><div class=\"block h-px w-full bg-[#d5d5d5]\"></div> <h2 id=\"diverseEnvironment\" class=\"shrink-0 text-2xl font-bold uppercase text-black lg:text-3xl lg:leading-[43px]\">"+(_vm._s(_vm.content.section3Title))+"</h2> <div class=\"block h-px w-full bg-[#d5d5d5]\"></div></div> <p class=\"mx-auto max-w-[925px] text-sm font-medium leading-6 -tracking-[0.03px] text-black-700 md:text-base md:leading-6\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.content.section3Description)+"\n                ")+"</p></div></div></section> "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video1ThumbnailUrl,"button-title":_vm.content.video1ButtonText,"button-u-r-l":_vm.content.video1ButtonLink,"video-u-r-l":_vm.content.video1Url,"title":_vm.content.video1Title}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"py-10 xl:py-32\">","</section>",[_vm._ssrNode("<div class=\"container px-10 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-6 flex items-center justify-center gap-[5px] text-center md:mb-8 md:gap-8\"><div class=\"block h-px w-full bg-[#d5d5d5]\"></div> <h2 id=\"driveForResults\" class=\"shrink-0 text-2xl font-bold uppercase text-black lg:text-3xl lg:leading-[43px]\">"+(_vm._s(_vm.content.section4Title))+"</h2> <div class=\"block h-px w-full bg-[#d5d5d5]\"></div></div> <div class=\"mb-10 md:mb-[75px]\">"+(_vm._ssrList((_vm.section4Data),function(result,i){return ("<div><h4 class=\"mb-1 text-sm font-bold text-black-700 md:mb-0 md:text-base\">"+_vm._ssrEscape(_vm._s(result.attributes.title))+"</h4> <p class=\"mb-8 text-sm font-medium text-black-700 md:text-base\">"+_vm._ssrEscape("\n                        "+_vm._s(result.attributes.description)+"\n                    ")+"</p></div>")}))+"</div> "),_vm._ssrNode("<div class=\"text-center\">","</div>",[(_vm.$helper.isInternalUrl(_vm.content.CTA2ButtonLink))?_c('nuxt-link',{staticClass:"b-btn text-xs lg:max-w-[322px] lg:py-6",attrs:{"to":_vm.content.CTA2ButtonLink}},[_vm._v(_vm._s(_vm.content.CTA2ButtonText))]):_c('a',{staticClass:"b-btn text-xs lg:max-w-[322px] lg:py-6",attrs:{"target":"_blank","href":_vm.content.CTA2ButtonLink}},[_vm._v(_vm._s(_vm.content.CTA2ButtonText))])],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section>","</section>",[_vm._ssrNode("<div class=\"container px-10 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-6 flex items-center justify-center gap-[5px] text-center md:mb-[72px] md:gap-8\"><div class=\"block h-px w-full bg-[#d5d5d5]\"></div> <h2 id=\"whyUs\" class=\"shrink-0 text-2xl font-bold uppercase text-black lg:text-3xl lg:leading-[43px]\">"+(_vm._s(_vm.content.section5Title))+"</h2> <div class=\"block h-px w-full bg-[#d5d5d5]\"></div></div> "),_vm._ssrNode("<div class=\"mb-14 grid grid-cols-1 md:grid-cols-3 lg:mb-[102px]\">","</div>",_vm._l((_vm.section5Data),function(data,i){return _vm._ssrNode("<div"+(_vm._ssrClass("mb-10 flex flex-1 justify-around md:mb-0",{ '!flex-auto': i === 0, 'md:mt-24': i >= 3 }))+">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("mx-5 hidden h-[1px] w-full bg-[#DFDFDF] shadow-[0px_3px_6px_rgba(0,0,0,0.16)] md:block md:h-full md:min-h-[325px] md:w-[1px] xl:min-h-[420px]",{ 'opacity-0': i === 0 }))+"></div> "),_vm._ssrNode("<div class=\"flex flex-col gap-4\">","</div>",[_vm._ssrNode("<div class=\"flex flex-auto flex-col justify-between gap-7 pb-4 md:pb-0\"><div><div class=\"mb-2 flex items-center gap-3 md:mb-9 xl:mb-6\"><div class=\"flex h-[45px] w-[45px] items-center justify-center rounded-full bg-primary text-[17px] font-bold leading-[15px] -tracking-[0.03px] text-white xl:leading-[27px] xl:-tracking-[0.04px]\">"+_vm._ssrEscape("\n                                        "+_vm._s(i + 1)+"\n                                    ")+"</div> <h3 class=\"text-base font-bold leading-[21px] -tracking-[0.03px] text-primary lg:text-2xl lg:leading-8 xl:-tracking-[0.05px]\">"+_vm._ssrEscape(_vm._s(data.attributes.title))+"</h3></div> <p class=\"font-medium -tracking-[0.03px] text-black md:max-w-[275px]\">"+_vm._ssrEscape(_vm._s(data.attributes.description))+"</p></div></div> "),_vm._ssrNode("<div class=\"mx-auto h-[180px] w-full max-w-[320px] overflow-hidden rounded-[100px] shadow-[0px_3px_6px_rgba(0,0,0,0.36)] md:h-[228px]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":data.attributes.imgUrl,"alt":data.attributes.title,"loading":"lazy"}})],1)],2)],2)}),0)],2)]),_vm._ssrNode(" "),_c('common-interested-service',{attrs:{"title":_vm.content.section6Title,"subtitle":_vm.content.section6Subtitle,"background-image":_vm.content.section6ImgUrl,"description":_vm.content.section6Description,"button-title":_vm.content.section6ButtonText,"button-link":_vm.content.section6ButtonLink}}),_vm._ssrNode(" "),_vm._ssrNode("<section>","</section>",[_c('common-work-at-the-best-place',{attrs:{"img-url":_vm.content.CTA3ImgUrl,"title":_vm.content.CTA3Title,"description":_vm.content.CTA3Description,"button-title":_vm.content.CTA3ButtonText,"button-url":_vm.content.CTA3ButtonLink}})],1),_vm._ssrNode(" "),_vm._ssrNode("<section>","</section>",[_c('common-readytotalk',{attrs:{"img-url":_vm.readyToTalkForm.imgUrl,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"service-options":_vm.readyToTalkForm.services.data}})],1)],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/base-about-page.vue?vue&type=template&id=3ac22ffd&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-about-page.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var base_about_pagevue_type_script_lang_js_ = ({
  nuxtI18n: {
    paths: {
      fr: '/about-us',
      en: '/about-us'
    }
  },
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
      tabs: [{
        id: 'aboutUs',
        title: 'About Us'
      }, {
        id: 'ourCulture',
        title: 'Our Culture'
      }, {
        id: 'diverseEnvironment',
        title: 'Diverse Environment'
      }, {
        id: 'driveForResults',
        title: 'Drive for Results'
      }, {
        id: 'whyUs',
        title: 'Why Us'
      }, {
        id: 'employmentAtVenturePlan',
        title: 'Employment At Venture Plans'
      }, {
        id: 'readyToTalk',
        title: 'Ready To Talk'
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
        name: 'title',
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
    section2Data() {
      var _this$content12, _this$content12$secti;
      return ((_this$content12 = this.content) === null || _this$content12 === void 0 ? void 0 : (_this$content12$secti = _this$content12.section2Component) === null || _this$content12$secti === void 0 ? void 0 : _this$content12$secti.data) || [];
    },
    section4Data() {
      var _this$content13, _this$content13$secti;
      return ((_this$content13 = this.content) === null || _this$content13 === void 0 ? void 0 : (_this$content13$secti = _this$content13.section4Component) === null || _this$content13$secti === void 0 ? void 0 : _this$content13$secti.data) || [];
    },
    section5Data() {
      var _this$content14, _this$content14$secti;
      return ((_this$content14 = this.content) === null || _this$content14 === void 0 ? void 0 : (_this$content14$secti = _this$content14.section5Component) === null || _this$content14$secti === void 0 ? void 0 : _this$content14$secti.data) || [];
    },
    readyToTalkForm() {
      var _this$content15, _this$content15$ready, _this$content15$ready2;
      return ((_this$content15 = this.content) === null || _this$content15 === void 0 ? void 0 : (_this$content15$ready = _this$content15.readyToTalkForm) === null || _this$content15$ready === void 0 ? void 0 : (_this$content15$ready2 = _this$content15$ready.data) === null || _this$content15$ready2 === void 0 ? void 0 : _this$content15$ready2.attributes) || {
        services: {
          data: []
        }
      };
    }
  }
});
// CONCATENATED MODULE: ./components/base/base-about-page.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_base_about_pagevue_type_script_lang_js_ = (base_about_pagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/base/base-about-page.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_base_about_pagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "78e56000"
  
)

/* harmony default export */ var base_about_page = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonBannerTab: __webpack_require__(161).default,CommonToggleContent: __webpack_require__(149).default,CommonBusinessChallenge: __webpack_require__(186).default,CommonContactUs: __webpack_require__(139).default,CommonInterestedService: __webpack_require__(145).default,CommonWorkAtTheBestPlace: __webpack_require__(182).default,CommonReadytotalk: __webpack_require__(140).default})


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/home/home-sector-excelled.vue?vue&type=template&id=392c65af&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-[50px] lg:pt-[78px]"},[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\" data-v-392c65af><div class=\"text-center\" data-v-392c65af><div class=\"mb-9 flex items-center justify-center gap-2 text-center sm:gap-[33px]\" data-v-392c65af><div class=\"h-px w-1/5 bg-[#D5D5D5]\" data-v-392c65af></div> <h2 class=\"max-w-[90%] text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>br]:inline-block sm:[&>br]:hidden [&>span]:text-primary\" data-v-392c65af>"+(_vm._s(_vm.title))+"</h2> <div class=\"h-px w-1/5 bg-[#D5D5D5]\" data-v-392c65af></div></div> <p class=\"text-[15px] font-medium leading-[18px] -tracking-[0.04px] text-[#707070] xl:text-[20px] xl:leading-[23px]\" data-v-392c65af>"+_vm._ssrEscape("\n                "+_vm._s(_vm.description)+"\n            ")+"</p></div></div> "),_vm._ssrNode("<div class=\"container px-10 pt-8 md:px-4 lg:px-[97px] lg:pt-[104px] xl:px-4\" data-v-392c65af>","</div>",[_vm._ssrNode("<div class=\"flex flex-col gap-11 md:flex-row md:items-center md:justify-between md:gap-5 lg:gap-10\" data-v-392c65af>","</div>",[_vm._ssrNode("<section class=\"sectors-slider relative overflow-hidden\" data-v-392c65af>","</section>",[_c('nuxt-img',{staticClass:"absolute -top-16 z-10",attrs:{"format":"webp","src":"/assets/img/top-overlay.png","alt":"Sectors we excelled in","loading":"lazy"}}),_vm._ssrNode(" "),_c('div',{directives:[{name:"swiper",rawName:"v-swiper:sectorsSlider",value:(_vm.sliderOptions),expression:"sliderOptions",arg:"sectorsSlider"}],staticClass:"swiper",attrs:{"cleanup-styles-on-destroy":false}},[_vm._ssrNode("<div class=\"swiper-wrapper !max-h-[470px] lg:!max-h-[610px]\" data-v-392c65af>","</div>",_vm._l((_vm.data),function(service,index){return _vm._ssrNode("<div class=\"swiper-slide !h-auto py-[18px]\" data-v-392c65af>","</div>",[_vm._ssrNode("<button"+(_vm._ssrAttr("aria-label",service.attributes.sectorName))+" class=\"ml-[150px] flex items-center gap-1 opacity-20 transition-all duration-300 hover:opacity-100\" data-v-392c65af>","</button>",[_vm._ssrNode("<div class=\"flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white lg:h-12 lg:w-12\" data-v-392c65af>","</div>",[(index === 0)?_c('icons-building',{staticClass:"h-4 w-3 lg:h-5 lg:w-[25px]"}):(index === 1)?_c('icons-eduction',{staticClass:"h-5 w-4 lg:h-[20px] lg:w-[34px]"}):(index === 2)?_c('icons-wifi',{staticClass:"h-5 w-4 lg:h-[25px] lg:w-[34px]"}):(index === 3)?_c('icons-cannabis',{staticClass:"h-4 w-4 lg:h-[22px] lg:w-[22px]"}):(index === 4)?_c('icons-finacial',{staticClass:"ld:w-[22px] h-4 w-4 lg:h-[23px]"}):(index === 5)?_c('icons-brokerage',{staticClass:"h-4 w-4 lg:h-[25px] lg:w-[25px]"}):(index === 6)?_c('icons-clean-tech',{staticClass:"h-5 w-4 lg:h-[25px] lg:w-[34px]"}):(index === 7)?_c('icons-heart-care',{staticClass:"h-4 w-4 lg:h-[25px] lg:w-[25px]"}):(index === 8)?_c('icons-residential',{staticClass:"h-4 w-4 lg:h-[25px] lg:w-[22px]"}):(index === 9)?_c('icons-consumer',{staticClass:"h-4 w-4 lg:h-[25px] lg:w-[22px]"}):(index === 10)?_c('icons-manufacturing',{staticClass:"h-4 w-4 lg:h-[22px] lg:w-[29px]"}):(index === 11)?_c('icons-bitcoin',{staticClass:"h-4 w-4 lg:h-[25px] lg:w-[22px]"}):_vm._e()],1),_vm._ssrNode(" <p class=\"max-w-[152px] text-left text-[9px] font-semibold leading-[11px] -tracking-[-0.02px] text-[#202A36]\" data-v-392c65af>"+_vm._ssrEscape("\n                                    "+_vm._s(service.attributes.sectorName)+"\n                                ")+"</p>")],2)])}),0)]),_vm._ssrNode(" "),_c('nuxt-img',{staticClass:"absolute -bottom-12 z-10 lg:-bottom-16",attrs:{"format":"webp","src":"/assets/img/bottom-overlay.png","alt":"Sectors we excelled in","loading":"lazy"}})],2),_vm._ssrNode(" "),_c('home-sector-chart',{ref:"sectorChart"})],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/home-sector-excelled.vue?vue&type=template&id=392c65af&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/home/home-sector-excelled.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var home_sector_excelledvue_type_script_lang_js_ = ({
  name: 'HomeSectorExcelled',
  props: {
    title: {
      type: String,
      default: "SECTORS WE EXCELLED <span class='text-primary'>IN</span>"
    },
    description: {
      type: String,
      default: 'Client expertise in 150+ Industries, find out how we can help you adapt to a changing economy'
    },
    data: {
      type: Array,
      default: [{
        id: 1,
        attributes: {
          sectorName: 'Aerospace & Defense',
          industryConsultant: '30',
          raised: '30',
          businessPlansWritten: '59',
          yearsOfExperience: '13',
          createdAt: '2023-04-12T05:48:15.492Z',
          updatedAt: '2023-04-12T05:48:19.913Z',
          publishedAt: '2023-04-12T05:48:19.909Z'
        }
      }, {
        id: 2,
        attributes: {
          sectorName: 'Software/Apps & Telecommunications',
          industryConsultant: '16',
          raised: '32MM',
          businessPlansWritten: '58',
          yearsOfExperience: '10',
          createdAt: '2023-04-12T05:47:36.713Z',
          updatedAt: '2023-04-12T05:47:41.317Z',
          publishedAt: '2023-04-12T05:47:41.312Z'
        }
      }]
    }
  },
  data() {
    return {
      sliderOptions: {
        autoplay: false,
        direction: 'vertical',
        initialSlide: 2,
        slidesPerView: 7,
        centeredSlides: true,
        slideToClickedSlide: true,
        speed: 300,
        loop: true,
        spaceBetween: 0,
        touchRatio: 1,
        init: false,
        // noSwipingSelector:'div',
        allowTouchMove: false
      },
      slideInsideClasses: [[{
        index: 1,
        class: 'inside-1'
      }, {
        index: 11,
        class: 'inside-1'
      }, {
        index: 2,
        class: 'inside-2'
      }, {
        index: 10,
        class: 'inside-2'
      }, {
        index: 3,
        class: 'inside-3'
      }, {
        index: 9,
        class: 'inside-3'
      }], [{
        index: 2,
        class: 'inside-1'
      }, {
        index: 0,
        class: 'inside-1'
      }, {
        index: 3,
        class: 'inside-2'
      }, {
        index: 11,
        class: 'inside-2'
      }, {
        index: 4,
        class: 'inside-3'
      }, {
        index: 10,
        class: 'inside-3'
      }], [{
        index: 3,
        class: 'inside-1'
      }, {
        index: 1,
        class: 'inside-1'
      }, {
        index: 4,
        class: 'inside-2'
      }, {
        index: 0,
        class: 'inside-2'
      }, {
        index: 5,
        class: 'inside-3'
      }, {
        index: 11,
        class: 'inside-3'
      }], [{
        index: 4,
        class: 'inside-1'
      }, {
        index: 2,
        class: 'inside-1'
      }, {
        index: 5,
        class: 'inside-2'
      }, {
        index: 1,
        class: 'inside-2'
      }, {
        index: 6,
        class: 'inside-3'
      }, {
        index: 0,
        class: 'inside-3'
      }], [{
        index: 5,
        class: 'inside-1'
      }, {
        index: 3,
        class: 'inside-1'
      }, {
        index: 6,
        class: 'inside-2'
      }, {
        index: 2,
        class: 'inside-2'
      }, {
        index: 7,
        class: 'inside-3'
      }, {
        index: 1,
        class: 'inside-3'
      }], [{
        index: 6,
        class: 'inside-1'
      }, {
        index: 4,
        class: 'inside-1'
      }, {
        index: 7,
        class: 'inside-2'
      }, {
        index: 3,
        class: 'inside-2'
      }, {
        index: 8,
        class: 'inside-3'
      }, {
        index: 2,
        class: 'inside-3'
      }], [{
        index: 7,
        class: 'inside-1'
      }, {
        index: 5,
        class: 'inside-1'
      }, {
        index: 8,
        class: 'inside-2'
      }, {
        index: 4,
        class: 'inside-2'
      }, {
        index: 9,
        class: 'inside-3'
      }, {
        index: 3,
        class: 'inside-3'
      }], [{
        index: 8,
        class: 'inside-1'
      }, {
        index: 6,
        class: 'inside-1'
      }, {
        index: 9,
        class: 'inside-2'
      }, {
        index: 5,
        class: 'inside-2'
      }, {
        index: 10,
        class: 'inside-3'
      }, {
        index: 4,
        class: 'inside-3'
      }], [{
        index: 9,
        class: 'inside-1'
      }, {
        index: 7,
        class: 'inside-1'
      }, {
        index: 10,
        class: 'inside-2'
      }, {
        index: 6,
        class: 'inside-2'
      }, {
        index: 11,
        class: 'inside-3'
      }, {
        index: 5,
        class: 'inside-3'
      }], [{
        index: 10,
        class: 'inside-1'
      }, {
        index: 8,
        class: 'inside-1'
      }, {
        index: 11,
        class: 'inside-2'
      }, {
        index: 7,
        class: 'inside-2'
      }, {
        index: 0,
        class: 'inside-3'
      }, {
        index: 6,
        class: 'inside-3'
      }], [{
        index: 11,
        class: 'inside-1'
      }, {
        index: 9,
        class: 'inside-1'
      }, {
        index: 0,
        class: 'inside-2'
      }, {
        index: 8,
        class: 'inside-2'
      }, {
        index: 1,
        class: 'inside-3'
      }, {
        index: 7,
        class: 'inside-3'
      }], [{
        index: 0,
        class: 'inside-1'
      }, {
        index: 10,
        class: 'inside-1'
      }, {
        index: 1,
        class: 'inside-2'
      }, {
        index: 9,
        class: 'inside-2'
      }, {
        index: 2,
        class: 'inside-3'
      }, {
        index: 8,
        class: 'inside-3'
      }]]
    };
  },
  mounted() {
    this.sectorsSlider.init();
    this.changeSlide();
    this.sectorsSlider.on('slideChangeTransitionStart', swiper => {
      this.changeSlide();
    });
  },
  methods: {
    clickedSelector() {
      // console.log('Clicked');
    },
    changeSlide() {
      document.querySelectorAll('.sectors-slider .swiper .swiper-slide a').forEach(el => {
        el.classList.remove('inside-1');
      });
      document.querySelectorAll('.sectors-slider .swiper .swiper-slide a').forEach(el => {
        el.classList.remove('inside-2');
      });
      document.querySelectorAll('.sectors-slider .swiper .swiper-slide a').forEach(el => {
        el.classList.remove('inside-3');
      });
      document.querySelectorAll('.sectors-slider .swiper .swiper-slide a').forEach(el => {
        el.classList.remove('!ml-0');
      });
      const activeSlide = document.querySelector('.sectors-slider .swiper .swiper-slide.swiper-slide-active');
      if (activeSlide) {
        const activeSlideIndex = parseInt(activeSlide.getAttribute('data-swiper-slide-index'));
        this.slideInsideClasses[activeSlideIndex].forEach(data => {
          document.querySelectorAll(`.sectors-slider .swiper [data-swiper-slide-index="${data.index}"] > a`).forEach(el => {
            el.classList.add(data.class);
          });
        });
        document.querySelectorAll(`.sectors-slider .swiper [data-swiper-slide-index="${activeSlideIndex}"] > a`).forEach(el => {
          el.classList.add('!ml-0');
        });
        this.$refs.sectorChart.updateChart(this.data[activeSlideIndex]);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/home/home-sector-excelled.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_home_sector_excelledvue_type_script_lang_js_ = (home_sector_excelledvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/home/home-sector-excelled.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_home_sector_excelledvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "392c65af",
  "6770afda"
  
)

/* harmony default export */ var home_sector_excelled = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsBuilding: __webpack_require__(205).default,IconsEduction: __webpack_require__(206).default,IconsWifi: __webpack_require__(207).default,IconsCannabis: __webpack_require__(208).default,IconsFinacial: __webpack_require__(209).default,IconsBrokerage: __webpack_require__(210).default,IconsCleanTech: __webpack_require__(211).default,IconsHeartCare: __webpack_require__(212).default,IconsResidential: __webpack_require__(213).default,IconsConsumer: __webpack_require__(214).default,IconsManufacturing: __webpack_require__(215).default,IconsBitcoin: __webpack_require__(216).default,HomeSectorChart: __webpack_require__(201).default})


/***/ }),
/* 219 */,
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_contact_us_vue_vue_type_style_index_0_id_772790c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_contact_us_vue_vue_type_style_index_0_id_772790c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_contact_us_vue_vue_type_style_index_0_id_772790c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_contact_us_vue_vue_type_style_index_0_id_772790c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_contact_us_vue_vue_type_style_index_0_id_772790c9_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 221 */
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
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_google_ad_vue_vue_type_style_index_0_id_08c02bce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_google_ad_vue_vue_type_style_index_0_id_08c02bce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_google_ad_vue_vue_type_style_index_0_id_08c02bce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_google_ad_vue_vue_type_style_index_0_id_08c02bce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_base_google_ad_vue_vue_type_style_index_0_id_08c02bce_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".swiper-button-next[data-v-08c02bce]:after,.swiper-button-prev[data-v-08c02bce]:after{color:#00adff!important}.swiper-button-next[data-v-08c02bce]{right:36px}.swiper-button-prev[data-v-08c02bce]{left:36px}iframe[data-v-08c02bce]{width:100%!important;height:67vh!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 224 */,
/* 225 */
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


/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-divisions.vue?vue&type=template&id=fa690232&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',[_vm._ssrNode(((_vm.content.bannerVideoUrl)?("<section class=\"contact-heroform group relative overflow-hidden bg-cover bg-center bg-no-repeat\"><video autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\" playsinline class=\"responsive-contact-us-section-video absolute h-auto w-full object-cover\" style=\"min-height: 571px; height: 20vw\"><source"+(_vm._ssrAttr("src",_vm.content.bannerVideoUrl))+" type=\"video/mp4\"></video> <div class=\"absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent\"></div> <div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]\"></div> <div class=\"container relative z-10 px-10 pb-9 pt-[287px] md:bg-left md:px-4 lg:px-[97px] xl:px-4 xl:pb-20 xl:pt-[164px]\"><div><p class=\"mb-5 border-l-[3px] border-primary pl-2.5 text-sm leading-3 text-[#FBFBFD] md:text-base md:leading-4\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.content.bannerSubtitle)+"\n                ")+"</p> <h1 class=\"mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px] xl:leading-[53px]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerTitle))+"</h1> <p class=\"mb-[18px] border-l-[3px] border-primary pl-2.5 leading-5 text-[#FBFBFD]\">"+(_vm._s(_vm.content.bannerDescription))+"</p> <a href=\"/book-consult\" class=\"b-btn max-w-[250px] py-4 text-sm uppercase\" style=\"/* display: none; */ max-width: 250px\">Book a Consultation </a></div></div></section>"):("<section class=\"relative bg-cover bg-center bg-no-repeat pb-9 pt-[164px] xl:pb-[75px]\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (_vm.content.bannerImgUrl) + ")") }, null))+"><div class=\"absolute left-0 top-0 z-0 h-full w-[90%] bg-gradient-to-r from-[#2b3746] via-transparent\"></div> <div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-0\"></div> <div class=\"absolute top-0 z-0 h-full w-full bg-gradient-to-r from-[#2B3746]/70 md:-left-[40%] md:w-[90%]\"></div> <div class=\"container relative z-10 lg:px-[97px] xl:px-4\"><div><p class=\"mb-5 border-l-[3px] border-primary pl-2.5 text-sm leading-3 text-[#FBFBFD] md:text-base md:leading-4\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.content.bannerSubtitle)+"\n                ")+"</p> <h1 class=\"mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px] xl:leading-[53px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.content.bannerTitle)+"\n                ")+"</h1> <p class=\"mb-[18px] border-l-[3px] border-primary pl-2.5 leading-5 text-[#FBFBFD]\">"+(_vm._s(_vm.content.bannerDescription))+"</p> <a href=\"/book-consult\" class=\"b-btn max-w-[250px] py-4 text-sm uppercase\" style=\"/* display: none; */ max-width: 250px\">Book a Consultation </a></div></div></section>"))+" "),_c('common-banner-tab',{attrs:{"tabs":_vm.tabs}}),_vm._ssrNode(" "),(_vm.content.section1Title && _vm.content.section1Description)?_vm._ssrNode("<section id=\"consultingOverview\" class=\"bg-[#ffffff] pb-20 pt-14 md:pb-32\">","</section>",[_vm._ssrNode("<div class=\"container px-10 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-9 flex items-center justify-center gap-2 text-center sm:gap-[30px] md:mb-[50px]\"><div class=\"block h-px w-full bg-[#d5d5d5]\"></div> <h2 class=\"shrink-0 text-[22px] font-bold uppercase leading-8 text-black md:text-3xl md:leading-[43px]\">"+(_vm._s(_vm.content.section1Title))+"</h2> <div class=\"block h-px w-full bg-[#d5d5d5]\"></div></div> "),_c('common-toggle-content',{attrs:{"content":_vm.content.section1Description}})],2)]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"ourServices\" class=\"py-10 md:pb-20 md:pt-20 lg:py-[80px]\">","</section>",[(_vm.content.section2Title)?_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-9 flex items-center justify-center gap-2 text-center sm:gap-[33px] md:mb-[67px]\"><div class=\"block h-px w-[15%] bg-[#d5d5d5] sm:w-full\"></div> <h2 class=\"max-w-[90%] text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary\">"+(_vm._s(_vm.content.section2Title))+"</h2> <div class=\"block h-px w-[15%] bg-[#d5d5d5] sm:w-full\"></div></div> "),_c('common-featured-services',{attrs:{"services":_vm.section2Data || []}})],2):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-[#ffffff]\">","</section>",[(_vm.section3LogoUrls && Array.isArray(_vm.section3LogoUrls) && _vm.section3LogoUrls.length > 0)?_c('home-private-placement',{attrs:{"featured-companies":_vm.section3LogoUrls,"featured-in-text":_vm.content.section3Title || '',"description":_vm.content.CTA1Description || '',"title":_vm.content.CTA1Title || '',"button-text":_vm.content.CTA1ButtonText || '',"button-link":_vm.content.CTA1ButtonLink || ''}}):_vm._e()],1),_vm._ssrNode(" "),_c('common-client-words',{attrs:{"id":"ourClientsWords","title":_vm.content.section8Title,"description":_vm.content.section8Description,"testimonials":_vm.section8Data}}),_vm._ssrNode(" "),(_vm.content.coverVideoThumbnailUrl && _vm.content.coverVideoTitle)?_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.coverVideoThumbnailUrl || '',"button-title":_vm.content.coverVideoButtonText || '',"button-u-r-l":_vm.content.coverVideoButtonLink || '',"video-u-r-l":_vm.content.coverVideoUrl || '',"title":_vm.content.coverVideoTitle || ''}}):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"consultationProcess\" class=\"bg-[#ffffff] py-10 lg:pb-[120px] lg:pt-[93px]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div id=\"grantApplicationProcess\" class=\"mb-4 flex items-center justify-center gap-2 text-center sm:gap-[33px]\"><div class=\"block h-px w-full bg-[#d5d5d5]\"></div> <h2 class=\"shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl\">"+(_vm._s(_vm.content.section4Title || ''))+"</h2> <div class=\"block h-px w-full bg-[#d5d5d5]\"></div></div> "+((_vm.content.section4Description)?("<div class=\"mx-auto max-w-lg space-y-5 text-center text-sm font-medium leading-6 -tracking-[0.03px] text-black xl:max-w-[732px] xl:text-base xl:leading-9 xl:-tracking-[0.04px]\"><p>"+_vm._ssrEscape(_vm._s(_vm.content.section4Description))+"</p></div>"):"<!---->")+" "),(_vm.section4Data && Array.isArray(_vm.section4Data))?_vm._ssrNode("<div class=\"mt-10 space-y-8 md:mt-[70px] md:space-y-14 xl:space-y-28\">","</div>",_vm._l((_vm.section4Data),function(process,i){return _vm._ssrNode("<div class=\"grid grid-cols-1 items-start justify-between gap-10 md:grid-cols-2 xl:gap-20\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("order-2 mb-10 md:mb-0",{ 'md:!order-1': i % 2 !== 0 }))+">","</div>",[(process.attributes.imgUrl && process.attributes.title)?_c('nuxt-img',{staticClass:"mx-auto",class:{ ' h-[201px]': i === 0, ' h-[253px]': i === 1, ' h-[199px]': i === 2 },attrs:{"format":"webp","src":process.attributes.imgUrl,"alt":process.attributes.title,"loading":"lazy"}}):_vm._e()],1),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,{ 'md:!order-2': i % 2 !== 0 }))+">","</div>",[_vm._ssrNode("<div class=\"mb-3 flex gap-5 xl:gap-7\">","</div>",[_vm._ssrNode("<span class=\"h-12 w-12 flex-none rounded-full bg-primary text-center text-2xl font-bold leading-[48px] text-white xl:h-[54px] xl:w-[54px] xl:leading-[54px]\">"+_vm._ssrEscape(_vm._s(i + 1))+"</span> "),_vm._ssrNode("<div class=\"max-w-[510px] flex-1\">","</div>",[_vm._ssrNode("<h3 class=\"mb-3 mt-3 text-xl font-bold leading-7 text-[#202a36] xl:mb-6 xl:text-[21px]\">"+_vm._ssrEscape("\n                                    "+_vm._s(process.attributes.title)+"\n                                ")+"</h3> "),(process.attributes.description)?_c('common-toggle-content',{attrs:{"content":process.attributes.description,"content-class":"text-sm font-medium text-[#353535] xl:text-lg xl:leading-9","show-blur":false,"read-more-class":"items-center justify-start"}}):_vm._e()],2)],2)])],2)}),0):_vm._e()],2)]),_vm._ssrNode(" "),(_vm.content.section4ButtonText)?_vm._ssrNode("<div class=\"bg-[#ffffff] pb-10 text-center lg:pb-[120px]\">","</div>",[(_vm.$helper.isInternalUrl(_vm.content.section4ButtonLink))?_c('nuxt-link',{staticClass:"b-btn text-xs lg:max-w-[322px] lg:py-6",attrs:{"to":_vm.content.section4ButtonLink}},[_vm._v(_vm._s(_vm.content.section4ButtonText))]):_c('a',{staticClass:"b-btn text-xs lg:max-w-[322px] lg:py-6",attrs:{"target":"_blank","href":_vm.content.section4ButtonLink}},[_vm._v(_vm._s(_vm.content.section4ButtonText))])],1):_vm._e(),_vm._ssrNode(" "),(_vm.content.serviceBannerImgUrl && _vm.content.ServiceBannerTitle)?_c('common-interested-service',{attrs:{"background-image":_vm.content.serviceBannerImgUrl,"subtitle":_vm.content.serviceBannerSubtitle,"title":_vm.content.ServiceBannerTitle,"description":_vm.content.serviceBannerDescription,"button-link":_vm.content.serviceBannerButtonLink,"button-title":_vm.content.serviceBannerButtonText}}):_vm._e(),_vm._ssrNode(" "),_c('common-faq',{attrs:{"id":"faq","title":_vm.content.section5Title,"description":_vm.content.section5Description,"faqs":_vm.section5Data}}),_vm._ssrNode(" "),_c('common-brand-logo',{attrs:{"logos":_vm.logoSlider}}),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"img-url":_vm.readyToTalkForm.imgUrl,"service-options":_vm.readyToTalkForm.services.data,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/base-divisions.vue?vue&type=template&id=fa690232&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-divisions.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var base_divisionsvue_type_script_lang_js_ = ({
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
      activeProcessReadMore: [],
      isLoadingMoreConsultants: false,
      isShowReadMore: false,
      tabs: [{
        id: 'consultingOverview',
        title: 'Overview'
      }, {
        id: 'ourServices',
        title: 'Our Services'
      }, {
        id: 'consultationProcess',
        title: 'Our Process'
      }, {
        id: 'faq',
        title: 'FAQ'
      }]
    };
  },
  head() {
    var _this$content, _this$content$metaFie, _this$content$metaFie2, _this$content2, _this$content2$metaFi, _this$content3, _this$content3$metaFi, _this$content4, _this$content4$metaFi, _this$content5, _this$content5$metaFi, _this$content6, _this$content6$metaFi, _this$content7, _this$content7$metaFi, _this$content8, _this$content8$metaFi, _this$content9, _this$content9$metaFi, _this$content10, _this$content10$metaF, _this$content11, _this$content11$metaF;
    return {
      title: (_this$content = this.content) === null || _this$content === void 0 ? void 0 : (_this$content$metaFie = _this$content.metaFields) === null || _this$content$metaFie === void 0 ? void 0 : (_this$content$metaFie2 = _this$content$metaFie[0]) === null || _this$content$metaFie2 === void 0 ? void 0 : _this$content$metaFie2.title,
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
    section2Data() {
      var _this$content12, _this$content12$secti;
      return ((_this$content12 = this.content) === null || _this$content12 === void 0 ? void 0 : (_this$content12$secti = _this$content12.section2Component) === null || _this$content12$secti === void 0 ? void 0 : _this$content12$secti.data) || [];
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
    section3LogoUrls() {
      var _this$content17, _this$content17$secti;
      return ((_this$content17 = this.content) === null || _this$content17 === void 0 ? void 0 : (_this$content17$secti = _this$content17.section3Component) === null || _this$content17$secti === void 0 ? void 0 : _this$content17$secti.data) || [];
    },
    section7Data() {
      var _this$content18, _this$content18$secti;
      return ((_this$content18 = this.content) === null || _this$content18 === void 0 ? void 0 : (_this$content18$secti = _this$content18.section7Component) === null || _this$content18$secti === void 0 ? void 0 : _this$content18$secti.data) || [];
    },
    section8Data() {
      var _this$content19, _this$content19$secti;
      return ((_this$content19 = this.content) === null || _this$content19 === void 0 ? void 0 : (_this$content19$secti = _this$content19.section8Component) === null || _this$content19$secti === void 0 ? void 0 : _this$content19$secti.data) || [];
    },
    section9Data() {
      var _this$content20, _this$content20$secti;
      return ((_this$content20 = this.content) === null || _this$content20 === void 0 ? void 0 : (_this$content20$secti = _this$content20.section9Component) === null || _this$content20$secti === void 0 ? void 0 : _this$content20$secti.data) || [];
    },
    section10Data() {
      var _this$content21, _this$content21$secti;
      return ((_this$content21 = this.content) === null || _this$content21 === void 0 ? void 0 : (_this$content21$secti = _this$content21.section10Component) === null || _this$content21$secti === void 0 ? void 0 : _this$content21$secti.data) || [];
    },
    readyToTalkForm() {
      var _this$content22, _this$content22$ready, _this$content22$ready2;
      return ((_this$content22 = this.content) === null || _this$content22 === void 0 ? void 0 : (_this$content22$ready = _this$content22.readyToTalkForm) === null || _this$content22$ready === void 0 ? void 0 : (_this$content22$ready2 = _this$content22$ready.data) === null || _this$content22$ready2 === void 0 ? void 0 : _this$content22$ready2.attributes) || {
        services: {
          data: []
        }
      };
    },
    logoSlider() {
      var _this$content23, _this$content23$logoS, _this$content23$logoS2, _this$content23$logoS3;
      return ((_this$content23 = this.content) === null || _this$content23 === void 0 ? void 0 : (_this$content23$logoS = _this$content23.logoSlider) === null || _this$content23$logoS === void 0 ? void 0 : (_this$content23$logoS2 = _this$content23$logoS.data) === null || _this$content23$logoS2 === void 0 ? void 0 : (_this$content23$logoS3 = _this$content23$logoS2.attributes) === null || _this$content23$logoS3 === void 0 ? void 0 : _this$content23$logoS3.logoUrls) || [];
    }
  },
  mounted() {
    var _this$content24, _this$content25;
    if ((_this$content24 = this.content) !== null && _this$content24 !== void 0 && _this$content24.tabs && typeof ((_this$content25 = this.content) === null || _this$content25 === void 0 ? void 0 : _this$content25.tabs) === 'object') {
      var _this$content26;
      let count = 0;
      (_this$content26 = this.content) === null || _this$content26 === void 0 ? true : delete _this$content26.tabs.id;
      for (const value in (_this$content27 = this.content) === null || _this$content27 === void 0 ? void 0 : _this$content27.tabs) {
        var _this$content27, _this$content28;
        this.tabs[count].title = (_this$content28 = this.content) === null || _this$content28 === void 0 ? void 0 : _this$content28.tabs[value];
        count += 1;
      }
    }
  },
  methods: {
    toggleProcess(id) {
      if (this.activeProcessReadMore.includes(id)) {
        this.activeProcessReadMore = this.activeProcessReadMore.filter(d => d !== id);
      } else {
        this.activeProcessReadMore.push(id);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/base/base-divisions.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_base_divisionsvue_type_script_lang_js_ = (base_divisionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/base/base-divisions.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_base_divisionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "449d01c5"
  
)

/* harmony default export */ var base_divisions = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonBannerTab: __webpack_require__(161).default,CommonToggleContent: __webpack_require__(149).default,CommonFeaturedServices: __webpack_require__(172).default,HomePrivatePlacement: __webpack_require__(180).default,CommonClientWords: __webpack_require__(169).default,CommonContactUs: __webpack_require__(139).default,CommonInterestedService: __webpack_require__(145).default,CommonFaq: __webpack_require__(168).default,CommonBrandLogo: __webpack_require__(164).default,CommonReadytotalk: __webpack_require__(140).default})


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-google-ad.vue?vue&type=template&id=08c02bce&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',[_vm._ssrNode("<section class=\"contact-heroform group relative overflow-hidden bg-cover bg-center bg-no-repeat\" data-v-08c02bce>","</section>",[_vm._ssrNode("<video autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\" playsinline class=\"responsive-contact-us-section-video absolute h-full w-full object-cover\""+(_vm._ssrStyle(null,_vm.videoHeight, null))+" data-v-08c02bce><source"+(_vm._ssrAttr("src",_vm.content.bannerVideoUrl))+" type=\"video/mp4\" data-v-08c02bce></video> "),_vm._ssrNode("<div data-v-08c02bce>","</div>",[_vm._ssrNode("<div class=\"absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-r from-[#2b3746]\" data-v-08c02bce></div> "),_vm._ssrNode("<div class=\"container relative z-10 px-10 pb-[146px] pt-[65px] md:px-4 lg:px-[97px] xl:px-4 xl:pb-[211px] xl:pt-[232px]\" data-v-08c02bce>","</div>",[_vm._ssrNode("<div data-v-08c02bce>","</div>",[_vm._ssrNode("<div class=\"items-center justify-between gap-4 space-y-4 lg:flex lg:space-y-0\" data-v-08c02bce>","</div>",[_vm._ssrNode("<div class=\"flex-1\" data-v-08c02bce><p class=\"mb-[17px] border-l-[5px] border-primary pl-1.5 text-xl font-normal leading-[21px] text-[#FBFBFD]\" data-v-08c02bce>"+_vm._ssrEscape("\n                                "+_vm._s(_vm.content.bannerSubtitle)+"\n                            ")+"</p> <p class=\"text-2xl font-bold uppercase leading-[30px] text-[#F7F4F4] xl:text-[36px] xl:leading-9\" data-v-08c02bce>"+_vm._ssrEscape("\n                                "+_vm._s(_vm.content.bannerTitle)+"\n                            ")+"</p> <p class=\"mt-[22px] w-full text-sm leading-5 text-[#FBFBFD] sm:max-w-[420px] md:text-xl md:leading-[26px]\" data-v-08c02bce>"+_vm._ssrEscape("\n                                "+_vm._s(_vm.content.bannerDescription)+"\n                            ")+"</p> <ul class=\"mb-7 flex flex-wrap items-start gap-y-3 pt-8 text-white sm:gap-4 md:max-w-[491px] lg:grid lg:grid-cols-2 xl:flex\" data-v-08c02bce>"+(_vm._ssrList((_vm.bannerData),function(data,index){return ("<li class=\"w-1/2 grow text-center text-3xl font-bold sm:w-auto md:text-[45px] md:leading-[50px]\" data-v-08c02bce>"+_vm._ssrEscape("\n                                    "+_vm._s(data.attributes.sectionDescription)+" ")+"<span class=\"block text-[15px] font-normal\" data-v-08c02bce>"+_vm._ssrEscape(_vm._s(data.attributes.sectionName))+"</span></li>")}))+"</ul> <div data-v-08c02bce><a"+(_vm._ssrAttr("href",_vm.content.bannerButtonUrl))+" class=\"outline-btn w-full px-11 py-[14px] text-center text-lg font-semibold leading-[21px] md:w-auto\" data-v-08c02bce>"+_vm._ssrEscape("\n                                    "+_vm._s(_vm.content.bannerButtonText)+"\n                                ")+"</a></div></div> "),_vm._ssrNode("<div class=\"lg:max-w-sm xl:max-w-[490px]\" data-v-08c02bce>","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":_vm.content.bannerImageUrl,"alt":_vm.content.bannerTitle,"loading":"lazy"}})],1)],2)])])],2)],2),_vm._ssrNode(" "),_c('common-banner-tab',{attrs:{"tabs":_vm.tabs}}),_vm._ssrNode(" "),_c('common-dynamic-questionnaire',{attrs:{"data":_vm.questionnaires}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"pb-20 pt-14 md:pb-32\" data-v-08c02bce>","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\" data-v-08c02bce>","</div>",[_vm._ssrNode("<div class=\"mb-8 flex items-center justify-center gap-2.5 text-center\" data-v-08c02bce><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\" data-v-08c02bce></div> <h2 id=\"aboutUs\" class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl\" data-v-08c02bce>"+(_vm._s(_vm.content.section2Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\" data-v-08c02bce></div></div> "),_c('common-toggle-content',{attrs:{"content":_vm.content.section2Description}})],2)]),_vm._ssrNode(" "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video1ThumbnailUrl,"button-title":_vm.content.video1ButtonText,"button-u-r-l":_vm.content.video1ButtonLink,"video-u-r-l":_vm.content.video1Url,"title":_vm.content.video1Title}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white py-16 md:pb-[101px] md:pt-20 xl:pt-[92px]\" data-v-08c02bce>","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\" data-v-08c02bce>","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1\" data-v-08c02bce><div id=\"ourPortfolio\" data-v-08c02bce><h5 class=\"mb-4 text-[23px] uppercase text-[#030303]\" data-v-08c02bce>"+_vm._ssrEscape(_vm._s(_vm.content.section3Subtitle))+"</h5> <h5 class=\"text-[26px] font-bold uppercase leading-[36px] text-[#030303]\" data-v-08c02bce>"+_vm._ssrEscape(_vm._s(_vm.content.section3Title))+"</h5> <p class=\"pt-[27px] text-xs font-bold uppercase leading-9 tracking-[1.2px] text-[#030303]\" data-v-08c02bce>"+_vm._ssrEscape(_vm._s(_vm.content.section3Description))+"</p></div></div> "),_vm._ssrNode("<div class=\"items-start gap-6 pt-[27px] md:flex\" data-v-08c02bce>","</div>",[_vm._ssrNode("<div class=\"max-w-[275px] flex-1\" data-v-08c02bce><ul data-v-08c02bce>"+(_vm._ssrList((_vm.section3Data),function(category,i){return ("<li"+(_vm._ssrClass("rounded-md text-[#707070] hover:!border-primary hover:bg-[#eaf7ff] hover:text-primary",{ 'font-bold !text-primary': _vm.activeCategoryData.id == category.id }))+" data-v-08c02bce><p class=\"block rounded-md border border-transparent px-[11px] py-1 text-lg hover:border-primary\" data-v-08c02bce>"+_vm._ssrEscape(_vm._s(category.attributes.title))+"</p></li>")}))+"</ul></div> "),_c('common-category-slider',{attrs:{"active-category-sample-data":_vm.activeCategorySampleData},on:{"preview":_vm.previewLatestWork}})],2)],2)]),_vm._ssrNode(" "),_c('home-private-placement',{attrs:{"featured-companies":_vm.section4Data,"featured-in-text":_vm.content.section4Title,"description":_vm.content.CTA1Description,"title":_vm.content.CTA1Title,"button-text":_vm.content.CTA1ButtonText,"button-link":_vm.content.CTA1ButtonLink}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container mb-16 mt-16 px-10 md:mt-[110px] md:px-4 lg:px-[97px] xl:px-4\" data-v-08c02bce>","</div>",[_vm._ssrNode("<div class=\"mb-10 flex items-center justify-center gap-[33px] text-center\" data-v-08c02bce><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\" data-v-08c02bce></div> <h2 id=\"learnAboutOurPlans\" class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl\" data-v-08c02bce>"+(_vm._s(_vm.content.section5Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\" data-v-08c02bce></div></div> "),_c('common-featured-services',{attrs:{"services":_vm.section5Data}})],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white py-16 md:py-20 xl:pb-[100px] xl:pt-[76px]\" data-v-08c02bce>","</section>",[_vm._ssrNode("<div class=\"container\" data-v-08c02bce>","</div>",[_vm._ssrNode("<div id=\"viewMarketReports\" class=\"mb-4 flex items-center justify-center gap-[33px] text-center\" data-v-08c02bce><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\" data-v-08c02bce></div> <h2 class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl\" data-v-08c02bce>"+(_vm._s(_vm.content.section6Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\" data-v-08c02bce></div></div> <div class=\"mx-auto space-y-5 text-center text-[17px] leading-6 -tracking-[0.03px] text-[#202a36] xl:max-w-[766px] xl:-tracking-[0.04px]\" data-v-08c02bce><p data-v-08c02bce>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.content.section6Description)+"\n                ")+"</p></div> "),_vm._ssrNode("<div class=\"grid grid-cols-1 gap-7 space-y-4 pt-8 md:grid-cols-2 md:space-y-0 md:pt-[78px]\" data-v-08c02bce>","</div>",_vm._l((_vm.section6Data),function(item,index){return _vm._ssrNode("<div class=\"flex flex-col justify-between\" data-v-08c02bce>","</div>",[_c('nuxt-img',{staticClass:"mx-auto max-w-full md:max-w-[360px]",attrs:{"format":"webp","src":item.attributes.imgUrl,"alt":item.attributes.title,"loading":"lazy"}}),_vm._ssrNode(" <div class=\"mt-4 text-center\" data-v-08c02bce><button type=\"button\" class=\"text-[15px] font-semibold text-primary\" data-v-08c02bce>"+_vm._ssrEscape("\n                            "+_vm._s(item.attributes.title)+"\n                            ")+"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"6\" height=\"9\" viewBox=\"0 0 6 9\" class=\"inline-block\" data-v-08c02bce><g data-v-08c02bce><g data-v-08c02bce><path fill=\"#00a1f1\" d=\"M5.688 4.792a.741.741 0 0 0-.213-.513L1.919.723A.742.742 0 0 0 .868 1.769l3.033 3.033L.868 7.834a.741.741 0 1 0 1.051 1.047l3.556-3.556a.741.741 0 0 0 .213-.533z\" data-v-08c02bce></path></g></g></svg></button></div>")],2)}),0)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white py-16 md:pb-[110px] md:pt-10\" data-v-08c02bce>","</section>",[_vm._ssrNode("<div class=\"container\" data-v-08c02bce>","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1\" data-v-08c02bce>","</div>",[_vm._ssrNode("<div data-v-08c02bce>"+(_vm._s(_vm.content.section7Title))+"</div> "),_vm._ssrNode("<div class=\"py-10\" data-v-08c02bce>","</div>",[_c('nuxt-img',{staticClass:"mx-auto",attrs:{"format":"webp","src":_vm.content.section7ImgUrl,"alt":_vm.content.section7Subtitle,"loading":"lazy"}})],1),_vm._ssrNode(" <div class=\"text-center\" data-v-08c02bce><h4 class=\"text-2xl font-medium uppercase text-[#202a36]\" data-v-08c02bce>"+_vm._ssrEscape(_vm._s(_vm.content.section7Subtitle))+"</h4> <p class=\"mt-5 text-[17px] text-[#202a36]\" data-v-08c02bce>"+_vm._ssrEscape(_vm._s(_vm.content.section7Description))+"</p></div> "),_vm._ssrNode("<div class=\"pt-[76px] text-center\" data-v-08c02bce>","</div>",[(_vm.$helper.isInternalUrl(_vm.content.section7ButtonLink))?_c('nuxt-link',{staticClass:"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6",attrs:{"to":_vm.content.section7ButtonLink}},[_vm._v(_vm._s(_vm.content.section7ButtonText))]):_c('a',{staticClass:"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6",attrs:{"target":"_blank","href":_vm.content.section7ButtonLink,"to":_vm.content.section7ButtonLink}},[_vm._v(_vm._s(_vm.content.section7ButtonText))])],1)],2)])]),_vm._ssrNode(" "),_c('common-business-challenge',{attrs:{"title":_vm.content.section8Title,"image":_vm.content.section8ImgUrl,"values":_vm.section8Data,"button-text":_vm.content.section8ButtonText,"button-url":_vm.content.section8ButtonLink}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"py-10 lg:pb-[198px] lg:pt-[93px]\" data-v-08c02bce>","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\" data-v-08c02bce>","</div>",[_vm._ssrNode("<div class=\"mb-4 flex items-center justify-center gap-[33px] text-center\" data-v-08c02bce><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\" data-v-08c02bce></div> <h2 id=\"ourProcess\" class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl\" data-v-08c02bce>"+(_vm._s(_vm.content.section9Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\" data-v-08c02bce></div></div> <div class=\"mx-auto max-w-lg space-y-5 text-center text-sm font-medium leading-6 -tracking-[0.03px] text-[#586376] xl:max-w-[732px] xl:text-xl xl:leading-9 xl:-tracking-[0.04px]\" data-v-08c02bce><p data-v-08c02bce>"+_vm._ssrEscape(_vm._s(_vm.content.section9Description))+"</p></div> "),_vm._ssrNode("<div class=\"mt-10 space-y-8 md:mt-[70px] md:space-y-14 xl:space-y-28\" data-v-08c02bce>","</div>",_vm._l((_vm.section9Data),function(process,i){return _vm._ssrNode("<div class=\"grid grid-cols-1 items-start justify-between gap-10 md:grid-cols-2 xl:gap-20\" data-v-08c02bce>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("order-2 mb-10 md:mb-0",{ 'md:!order-1': i % 2 !== 0 }))+" data-v-08c02bce>","</div>",[_c('nuxt-img',{staticClass:"mx-auto",class:{ ' h-[201px]': i === 0, ' h-[253px]': i === 1, ' h-[199px]': i === 2 },attrs:{"format":"webp","src":process.attributes.imgUrl,"alt":process.attributes.title,"loading":"lazy"}})],1),_vm._ssrNode(" <div"+(_vm._ssrClass(null,{ 'md:!order-2': i % 2 !== 0 }))+" data-v-08c02bce><div class=\"mb-3 flex gap-5 xl:gap-7\" data-v-08c02bce><span class=\"h-12 w-12 flex-none rounded-full bg-primary text-center text-2xl font-bold leading-[48px] text-white xl:h-[54px] xl:w-[54px] xl:leading-[54px]\" data-v-08c02bce>"+_vm._ssrEscape(_vm._s(i + 1))+"</span> <div class=\"max-w-[510px] flex-1\" data-v-08c02bce><h3 class=\"mb-3 mt-3 text-xl font-bold leading-7 text-[#202a36] xl:mb-6 xl:text-[21px]\" data-v-08c02bce>"+_vm._ssrEscape("\n                                    "+_vm._s(process.attributes.title)+"\n                                ")+"</h3> "+((process.attributes.description && !_vm.activeProcessReadMore.includes(i))?("<p class=\"overflow-hidden text-sm font-medium text-[#353535] xl:text-lg xl:leading-9\" data-v-08c02bce>"+_vm._ssrEscape("\n                                    "+_vm._s(process.attributes.description.slice(0, process.attributes.description.indexOf('\n')))+"\n                                ")+"</p>"):"<!---->")+" "+((_vm.activeProcessReadMore.includes(i))?("<p class=\"overflow-hidden text-sm font-medium text-[#353535] xl:text-lg xl:leading-9\" data-v-08c02bce>"+_vm._ssrEscape("\n                                    "+_vm._s(process.attributes.description)+"\n                                ")+"</p>"):"<!---->")+" <button"+(_vm._ssrAttr("aria-label",_vm.$t('read_more')))+" class=\"mt-3 flex items-center justify-start gap-4 text-sm font-semibold text-primary xl:text-xl\" data-v-08c02bce><p class=\"text-base\" data-v-08c02bce>"+_vm._ssrEscape(_vm._s(_vm.activeProcessReadMore.includes(i) ? _vm.$t('read_less') : _vm.$t('read_more')))+"</p> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"6\" viewBox=\"0 0 11 6\""+(_vm._ssrClass("h-1 w-2 xl:h-[6px] xl:w-[11px]",{ 'rotate-180': _vm.activeProcessReadMore.includes(i) }))+" data-v-08c02bce><g data-v-08c02bce><g data-v-08c02bce><path fill=\"currentColor\" d=\"M.439.546l4.907 4.907L10.254.546z\" data-v-08c02bce></path></g></g></svg></button></div></div></div>")],2)}),0)],2)]),_vm._ssrNode(" "),_c('common-interested-service',{attrs:{"background-image":_vm.content.section10ImgUrl,"subtitle":_vm.content.section10Subtitle,"title":_vm.content.section10Title,"description":_vm.content.section10Description,"button-link":_vm.content.section10ButtonLink,"button-title":_vm.content.section10ButtonText}}),_vm._ssrNode(" "),_vm._ssrNode("<section data-v-08c02bce>","</section>",[_c('common-client-words',{attrs:{"title":_vm.content.section11Title,"description":_vm.content.section11Description,"testimonials":_vm.section11Data}})],1),_vm._ssrNode(" "),_c('home-sector-excelled',{attrs:{"title":_vm.content.section12Title,"description":_vm.content.section12Description,"data":_vm.section12Data}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"py-10\" data-v-08c02bce>","</section>",[_c('common-tell-more-about-projects',{attrs:{"featured-companies":_vm.section4Data,"tell-us-more-data":_vm.section13Data,"tell-us-more-title":_vm.content.section13Title,"tell-use-more-subtitle":_vm.content.section13Subtitle,"image-url":_vm.content.section13ImgUrl}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-08c02bce>","</div>",[_c('common-our-team',{staticClass:"pb-10 md:!pb-0",attrs:{"title":_vm.content.section14Title,"description":_vm.content.section14Description,"teams":_vm.section14Data}})],1),_vm._ssrNode(" "),_c('common-faq',{attrs:{"title":_vm.content.section15Title,"description":_vm.content.section15Description,"faqs":_vm.section15Data}}),_vm._ssrNode(" "),_c('common-brand-logo',{attrs:{"logos":_vm.logoSliders}}),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"img-url":_vm.readyToTalkForm.imgUrl,"service-options":_vm.readyToTalkForm.services.data,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle}}),_vm._ssrNode(" "),_c('common-modal',{ref:"previewModal",attrs:{"width":"1440","background":"bg-[#fafafa]"}},[_c('div',[_c('button',{staticClass:"absolute right-4 top-4 md:right-8 md:top-8",attrs:{"type":"button"},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"17","height":"17","viewBox":"0 0 17 17"}},[_c('g',[_c('g',[_c('g',[_c('path',{attrs:{"d":"M.75 17a.729.729 0 0 1-.513-1.242L14.802 1.193a.728.728 0 1 1 1.03 1.03L1.269 16.79a.728.728 0 0 1-.517.21z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"d":"M15.343 17a.73.73 0 0 1-.515-.216L.214 2.171a.73.73 0 1 1 1.034-1.033L15.862 15.75a.731.731 0 0 1-.52 1.25z"}})])])])])]),_vm._v(" "),_c('div',[_c('ul',{staticClass:"mb-8 flex flex-col gap-4 text-base text-[#6c6c6c] md:flex-row md:gap-16"},[_c('li',[(_vm.activeProductData.isBusinessPlan)?_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v(" Client ")]):_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v(" Type ")]),_vm._v("\n                        "+_vm._s(_vm.activeProductData.client)+"\n                    ")]),_vm._v(" "),_c('li',[_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Industry")]),_vm._v(_vm._s(_vm.activeProductData.industry))]),_vm._v(" "),(_vm.activeProductData.isBusinessPlan)?_c('li',[_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Total Raised")]),_vm._v("\n                        "+_vm._s(_vm.activeProductData.totalRaised)+"\n                    ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"mb-5 flex flex-col items-start justify-between gap-4 md:flex-row"},[_c('p',{staticClass:"text-base text-[#6c6c6c] md:max-w-[350px] lg:max-w-[527px]"},[_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Description")]),_vm._v(_vm._s(_vm.activeProductData.description))]),_vm._v(" "),_c('div',{staticClass:"flex flex-wrap gap-2"},[(_vm.$helper.isInternalUrl(_vm.activeProductData.buttonUrl))?_c('nuxt-link',{staticClass:"b-btn w-full rounded px-9 py-4 text-base md:w-auto",attrs:{"to":_vm.activeProductData.buttonUrl},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_vm._v(_vm._s(_vm.activeProductData.buttonTitle))]):_c('a',{staticClass:"b-btn w-full rounded px-9 py-4 text-base md:w-auto",attrs:{"target":"_blank","href":_vm.activeProductData.buttonUrl},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_vm._v(_vm._s(_vm.activeProductData.buttonTitle))]),_vm._v(" "),(_vm.$helper.isInternalUrl(_vm.activeProductData.pdfUrlField))?_c('nuxt-link',{staticClass:"b-btn w-full rounded px-9 py-4 text-base md:w-auto",attrs:{"to":_vm.activeProductData.pdfUrlField},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_vm._v("\n                            View Document\n                        ")]):_c('a',{staticClass:"b-btn w-full rounded px-9 py-4 text-base md:w-auto",attrs:{"target":"_blank","href":_vm.activeProductData.pdfUrlField},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_vm._v("View Document")])],1)]),_vm._v(" "),(_vm.activeProductData.descriptionMediaType === 'images')?_c('div',{directives:[{name:"swiper",rawName:"v-swiper:brandLogo",value:(_vm.slider_options),expression:"slider_options",arg:"brandLogo"}],staticClass:"swiper relative bg-transparent",attrs:{"cleanup-styles-on-destroy":false}},[_c('div',{staticClass:"swiper-wrapper items-center !px-10"},_vm._l((_vm.activeProductData.images),function(image,i){return (_vm.activeProductData.images)?_c('div',{staticClass:"swiper-slide bg-white p-4"},[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":image.imgUrl,"alt":'swiper-slide' + i,"loading":"lazy"}})],1):_vm._e()}),0),_vm._v(" "),_c('div',{staticClass:"swiper-button-next -mr-3"}),_vm._v(" "),_c('div',{staticClass:"swiper-button-prev -ml-3"})]):_c('iframe',{staticClass:"h-screen w-full",attrs:{"src":_vm.activeProductData.pdfUrlField,"frameborder":"0"}})])])])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/base-google-ad.vue?vue&type=template&id=08c02bce&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// EXTERNAL MODULE: external "vue-click-outside"
var external_vue_click_outside_ = __webpack_require__(129);
var external_vue_click_outside_default = /*#__PURE__*/__webpack_require__.n(external_vue_click_outside_);

// EXTERNAL MODULE: ./helper/custom-validations.js
var custom_validations = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-google-ad.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var base_google_advue_type_script_lang_js_ = ({
  directives: {
    ClickOutside: external_vue_click_outside_default.a
  },
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
      videoHeight: 571,
      activeProcessReadMore: [],
      params: {
        service: '',
        fullName: '',
        email: '',
        phone: ''
      },
      activeCategoryData: {},
      activeProductData: {},
      isShowOptions: false,
      serviceOptions: ['Management Consulting', 'Business Strategy', 'Legal Advisory', 'Financing', 'Technology', 'Careers', 'Internship & Externship', 'Invest in Private Equity', 'Investor Relations Software (Ai)', 'Industry Market Reports'],
      isSubmitted: false,
      isClearSearch: false,
      showService: false,
      tabs: [{
        id: 'aboutUs',
        title: 'About Us'
      }, {
        id: 'ourPortfolio',
        title: 'Our Portfolio'
      }, {
        id: 'learnAboutOurPlans',
        title: 'Learn About Our Business Plans'
      }, {
        id: 'viewMarketReports',
        title: 'View Market Reports'
      }, {
        id: 'ourProcess',
        title: 'Our Process'
      }, {
        id: 'readyToTalk',
        title: 'Ready to Talk'
      }, {
        id: 'faqs',
        title: 'FAQ'
      }],
      businessPlanProcess: [{
        fields: {
          id: 1,
          title: 'Interview ',
          description: 'Our business plan process begins with a personalized interview, and if needed a secondary interview with the company’s founder and management. We engage in top-level discussions about your business vision, objectives and strategies. ',
          image: {
            fields: {
              file: {
                url: '//images.ctfassets.net/koyrlvjc3wvc/gpM1blYYmvdubjTfHR6wC/140e72b4bcdb9ee3d32318c7cecf4d70/bp-1-1.5x.webp'
              }
            }
          }
        }
      }, {
        fields: {
          id: 2,
          title: 'Strategy & Insights ',
          description: 'Having attained a deep understanding of our client’s vision and needs, our experienced consultants provide turnkey solutions to resolve obstacles in a timely and efficient manner. Timing, Market, Competitors, Business Objectives, Barriers to entry, Capital, Team Personnel, competitive advantages, problem and solutions. ',
          image: {
            fields: {
              title: 'grant_application_process_2',
              description: '',
              file: {
                url: '//images.ctfassets.net/koyrlvjc3wvc/CmbuVIEDRQLSI9SItHRrA/5614de5185a3f18ec5d0f7dcb52ac0dc/bp-2-1.5x.webp'
              }
            }
          }
        }
      }, {
        fields: {
          id: 3,
          title: 'Market Research: ',
          description: 'Market research is a systematic investigation to obtain knowledge on target markets and customers, beginning with customer identities. It is an essential component of corporate strategy and a critical aspect in retaining competitiveness.',
          image: {
            fields: {
              title: 'grant_application_process_3',
              description: '',
              file: {
                url: '//images.ctfassets.net/koyrlvjc3wvc/7bcAOGjTxQdzfwhSciU4tx/9452b4c1181aef30765f9d6ce149afd8/bp-3-1.5x.webp'
              }
            }
          }
        }
      }, {
        fields: {
          id: 4,
          title: 'Financials ',
          description: 'First impressions are indispensable to raising capital! Business ventures require data driven projected financial forecasts. To name a few (Income Statement, Balance Sheet, Cashflow, Assumptions, Pre, Post, and Exit Money Valuations, & Company EBITDA. ',
          image: {
            fields: {
              title: 'grant_application_process_3',
              description: '',
              file: {
                url: '//images.ctfassets.net/koyrlvjc3wvc/4iZoP4SdK3Q4wLbveb8K3/d34b917b8d7a7b221037e474c867d331/bp-4-1.5x.webp'
              }
            }
          }
        }
      }],
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
    var _this$content, _this$content$metaFie, _this$content2, _this$content2$metaFi, _this$content3, _this$content3$metaFi, _this$content4, _this$content4$metaFi, _this$content5, _this$content6, _this$content6$metaFi, _this$content7, _this$content7$metaFi, _this$content8, _this$content8$metaFi, _this$content9, _this$content9$metaFi, _this$content10, _this$content10$metaF;
    return {
      title: (_this$content = this.content) === null || _this$content === void 0 ? void 0 : (_this$content$metaFie = _this$content.metaFields[0]) === null || _this$content$metaFie === void 0 ? void 0 : _this$content$metaFie.title,
      meta: [{
        name: 'robots',
        content: 'index, all'
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: (_this$content2 = this.content) === null || _this$content2 === void 0 ? void 0 : (_this$content2$metaFi = _this$content2.metaFields[0]) === null || _this$content2$metaFi === void 0 ? void 0 : _this$content2$metaFi.title
      }, {
        hid: 'description',
        name: 'description',
        content: (_this$content3 = this.content) === null || _this$content3 === void 0 ? void 0 : (_this$content3$metaFi = _this$content3.metaFields[0]) === null || _this$content3$metaFi === void 0 ? void 0 : _this$content3$metaFi.description
      }, {
        hid: 'og:image',
        name: 'og:image',
        content: (_this$content4 = this.content) === null || _this$content4 === void 0 ? void 0 : (_this$content4$metaFi = _this$content4.metaFields[0]) === null || _this$content4$metaFi === void 0 ? void 0 : _this$content4$metaFi.socialImgUrl
      }, {
        hid: 'og:image:secure_url',
        name: 'og:image:secure_url',
        content: (_this$content5 = this.content) === null || _this$content5 === void 0 ? void 0 : _this$content5.metaFields[0].socialImgUrl
      }, {
        hid: 'og:description',
        name: 'og:description',
        content: (_this$content6 = this.content) === null || _this$content6 === void 0 ? void 0 : (_this$content6$metaFi = _this$content6.metaFields[0]) === null || _this$content6$metaFi === void 0 ? void 0 : _this$content6$metaFi.description
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: (_this$content7 = this.content) === null || _this$content7 === void 0 ? void 0 : (_this$content7$metaFi = _this$content7.metaFields[0]) === null || _this$content7$metaFi === void 0 ? void 0 : _this$content7$metaFi.description
      }, {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: (_this$content8 = this.content) === null || _this$content8 === void 0 ? void 0 : (_this$content8$metaFi = _this$content8.metaFields[0]) === null || _this$content8$metaFi === void 0 ? void 0 : _this$content8$metaFi.title
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: (_this$content9 = this.content) === null || _this$content9 === void 0 ? void 0 : (_this$content9$metaFi = _this$content9.metaFields[0]) === null || _this$content9$metaFi === void 0 ? void 0 : _this$content9$metaFi.socialImgUrl
      }, {
        hid: 'keywords',
        property: 'keywords',
        name: 'keywords',
        content: (_this$content10 = this.content) === null || _this$content10 === void 0 ? void 0 : (_this$content10$metaF = _this$content10.metaFields[0]) === null || _this$content10$metaF === void 0 ? void 0 : _this$content10$metaF.keywords
      }]
    };
  },
  computed: {
    questionnaires() {
      var _this$content11, _this$content11$dynam, _this$content11$dynam2;
      return ((_this$content11 = this.content) === null || _this$content11 === void 0 ? void 0 : (_this$content11$dynam = _this$content11.dynamicQuestionnaires) === null || _this$content11$dynam === void 0 ? void 0 : (_this$content11$dynam2 = _this$content11$dynam.data) === null || _this$content11$dynam2 === void 0 ? void 0 : _this$content11$dynam2.attributes) || [];
    },
    bannerData() {
      var _this$content12, _this$content12$banne;
      return ((_this$content12 = this.content) === null || _this$content12 === void 0 ? void 0 : (_this$content12$banne = _this$content12.bannerComponent) === null || _this$content12$banne === void 0 ? void 0 : _this$content12$banne.data) || [];
    },
    section1Data() {
      var _this$content13, _this$content13$secti;
      return ((_this$content13 = this.content) === null || _this$content13 === void 0 ? void 0 : (_this$content13$secti = _this$content13.section1Component) === null || _this$content13$secti === void 0 ? void 0 : _this$content13$secti.data) || [];
    },
    section3Data() {
      var _this$content14, _this$content14$secti;
      return ((_this$content14 = this.content) === null || _this$content14 === void 0 ? void 0 : (_this$content14$secti = _this$content14.section3Component) === null || _this$content14$secti === void 0 ? void 0 : _this$content14$secti.data) || [];
    },
    section4Data() {
      var _this$content15, _this$content15$secti;
      return ((_this$content15 = this.content) === null || _this$content15 === void 0 ? void 0 : (_this$content15$secti = _this$content15.section4Component) === null || _this$content15$secti === void 0 ? void 0 : _this$content15$secti.data) || [];
    },
    section5Data() {
      var _this$content16, _this$content16$secti;
      return ((_this$content16 = this.content) === null || _this$content16 === void 0 ? void 0 : (_this$content16$secti = _this$content16.section5Component) === null || _this$content16$secti === void 0 ? void 0 : _this$content16$secti.data) || [];
    },
    section6Data() {
      var _this$content17, _this$content17$secti;
      return ((_this$content17 = this.content) === null || _this$content17 === void 0 ? void 0 : (_this$content17$secti = _this$content17.section6Component) === null || _this$content17$secti === void 0 ? void 0 : _this$content17$secti.data) || [];
    },
    section8Data() {
      var _this$content18, _this$content18$secti;
      return ((_this$content18 = this.content) === null || _this$content18 === void 0 ? void 0 : (_this$content18$secti = _this$content18.section8Component) === null || _this$content18$secti === void 0 ? void 0 : _this$content18$secti.data) || [];
    },
    section9Data() {
      var _this$content19, _this$content19$secti;
      return ((_this$content19 = this.content) === null || _this$content19 === void 0 ? void 0 : (_this$content19$secti = _this$content19.section9Component) === null || _this$content19$secti === void 0 ? void 0 : _this$content19$secti.data) || [];
    },
    section11Data() {
      var _this$content20, _this$content20$secti;
      return ((_this$content20 = this.content) === null || _this$content20 === void 0 ? void 0 : (_this$content20$secti = _this$content20.section11Component) === null || _this$content20$secti === void 0 ? void 0 : _this$content20$secti.data) || [];
    },
    section12Data() {
      var _this$content21, _this$content21$secti;
      return ((_this$content21 = this.content) === null || _this$content21 === void 0 ? void 0 : (_this$content21$secti = _this$content21.section12Component) === null || _this$content21$secti === void 0 ? void 0 : _this$content21$secti.data) || [];
    },
    section13Data() {
      var _this$content22, _this$content22$secti;
      return ((_this$content22 = this.content) === null || _this$content22 === void 0 ? void 0 : (_this$content22$secti = _this$content22.section13Component) === null || _this$content22$secti === void 0 ? void 0 : _this$content22$secti.data) || [];
    },
    section14Data() {
      var _this$content23, _this$content23$secti;
      return ((_this$content23 = this.content) === null || _this$content23 === void 0 ? void 0 : (_this$content23$secti = _this$content23.section14Component) === null || _this$content23$secti === void 0 ? void 0 : _this$content23$secti.data) || [];
    },
    section15Data() {
      var _this$content24, _this$content24$secti;
      return ((_this$content24 = this.content) === null || _this$content24 === void 0 ? void 0 : (_this$content24$secti = _this$content24.section15Component) === null || _this$content24$secti === void 0 ? void 0 : _this$content24$secti.data) || [];
    },
    logoSliders() {
      var _this$content25, _this$content25$logoS, _this$content25$logoS2, _this$content25$logoS3;
      return ((_this$content25 = this.content) === null || _this$content25 === void 0 ? void 0 : (_this$content25$logoS = _this$content25.logoSlider) === null || _this$content25$logoS === void 0 ? void 0 : (_this$content25$logoS2 = _this$content25$logoS.data) === null || _this$content25$logoS2 === void 0 ? void 0 : (_this$content25$logoS3 = _this$content25$logoS2.attributes) === null || _this$content25$logoS3 === void 0 ? void 0 : _this$content25$logoS3.logoUrls) || [];
    },
    readyToTalkForm() {
      var _this$content26, _this$content26$ready, _this$content26$ready2;
      return ((_this$content26 = this.content) === null || _this$content26 === void 0 ? void 0 : (_this$content26$ready = _this$content26.readyToTalkForm) === null || _this$content26$ready === void 0 ? void 0 : (_this$content26$ready2 = _this$content26$ready.data) === null || _this$content26$ready2 === void 0 ? void 0 : _this$content26$ready2.attributes) || {
        services: {
          data: []
        }
      };
    },
    searchResult() {
      return !this.$helper.isEmpty(this.params.service) ? this.params.service : "LET'S WORK TOGETHER";
    },
    activeCategorySampleData() {
      var _this$activeCategoryD, _this$activeCategoryD2, _this$activeCategoryD3, _this$content27, _this$content27$secti, _this$content27$secti2, _this$content27$secti3, _this$content27$secti4;
      return ((_this$activeCategoryD = this.activeCategoryData) === null || _this$activeCategoryD === void 0 ? void 0 : (_this$activeCategoryD2 = _this$activeCategoryD.attributes) === null || _this$activeCategoryD2 === void 0 ? void 0 : (_this$activeCategoryD3 = _this$activeCategoryD2.sampleWorks) === null || _this$activeCategoryD3 === void 0 ? void 0 : _this$activeCategoryD3.data) || ((_this$content27 = this.content) === null || _this$content27 === void 0 ? void 0 : (_this$content27$secti = _this$content27.section3Component) === null || _this$content27$secti === void 0 ? void 0 : (_this$content27$secti2 = _this$content27$secti.data[0]) === null || _this$content27$secti2 === void 0 ? void 0 : (_this$content27$secti3 = _this$content27$secti2.attributes) === null || _this$content27$secti3 === void 0 ? void 0 : (_this$content27$secti4 = _this$content27$secti3.sampleWorks) === null || _this$content27$secti4 === void 0 ? void 0 : _this$content27$secti4.data) || [];
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
    var _this$content28, _this$content28$secti, _this$content28$secti2, _this$content28$secti3, _this$content28$secti4;
    this.activeCategoryData = ((_this$content28 = this.content) === null || _this$content28 === void 0 ? void 0 : (_this$content28$secti = _this$content28.section3Component) === null || _this$content28$secti === void 0 ? void 0 : (_this$content28$secti2 = _this$content28$secti.data[0]) === null || _this$content28$secti2 === void 0 ? void 0 : (_this$content28$secti3 = _this$content28$secti2.attributes) === null || _this$content28$secti3 === void 0 ? void 0 : (_this$content28$secti4 = _this$content28$secti3.sampleWorks) === null || _this$content28$secti4 === void 0 ? void 0 : _this$content28$secti4.data[0]) || {};
    if (window.innerWidth <= 768) {
      this.videoHeight = 350;
    } else {
      this.videoHeight = 571;
    }
  },
  validations() {
    return {
      params: {
        fullName: {
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
    previewSelectedMarketReport(marketReport) {
      var _marketReport$data, _marketReport$data$;
      if (marketReport !== null && marketReport !== void 0 && (_marketReport$data = marketReport.data) !== null && _marketReport$data !== void 0 && (_marketReport$data$ = _marketReport$data[0]) !== null && _marketReport$data$ !== void 0 && _marketReport$data$.attributes) {
        this.activeProductData = marketReport.data[0].attributes;
      }
    },
    handleScroll(anchorId) {
      const anchor = document.querySelector(`#${anchorId}`);
      if (anchor) {
        window.scrollTo({
          top: anchor.getBoundingClientRect().top + window.pageYOffset - (window.innerWidth < 768 ? 185 : 150)
        });
      }
    },
    openSearch() {
      this.showService = !this.showService;
      if (this.showService) {
        // this.$refs.multiselect.activate();
        // this.$refs.multiselect.$el.focus();
      }
    },
    toggleProcess(id) {
      if (this.activeProcessReadMore.includes(id)) {
        this.activeProcessReadMore = this.activeProcessReadMore.filter(d => d !== id);
      } else {
        this.activeProcessReadMore.push(id);
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
    onSubmit() {
      this.$v.params.$touch();
      if (this.$v.params.$invalid || this.$v.params.$error) {
        return false;
      }
      this.isSubmitted = true;
      this.$v.params.$reset();
      this.params = {
        service: '',
        fullName: '',
        email: '',
        phone: ''
      };
    },
    previewLatestWork(data) {
      this.$refs.previewModal.open();
      this.activeProductData = data;
      this.isMarketPlanOpened = false;
    }
  }
});
// CONCATENATED MODULE: ./components/base/base-google-ad.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_base_google_advue_type_script_lang_js_ = (base_google_advue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/base/base-google-ad.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(222)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_base_google_advue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "08c02bce",
  "488a67d4"
  
)

/* harmony default export */ var base_google_ad = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonBannerTab: __webpack_require__(161).default,CommonDynamicQuestionnaire: __webpack_require__(187).default,CommonToggleContent: __webpack_require__(149).default,CommonContactUs: __webpack_require__(139).default,CommonCategorySlider: __webpack_require__(188).default,HomePrivatePlacement: __webpack_require__(180).default,CommonFeaturedServices: __webpack_require__(172).default,CommonBusinessChallenge: __webpack_require__(186).default,CommonInterestedService: __webpack_require__(145).default,CommonClientWords: __webpack_require__(169).default,HomeSectorExcelled: __webpack_require__(218).default,CommonTellMoreAboutProjects: __webpack_require__(177).default,CommonOurTeam: __webpack_require__(174).default,CommonFaq: __webpack_require__(168).default,CommonBrandLogo: __webpack_require__(164).default,CommonReadytotalk: __webpack_require__(140).default,CommonModal: __webpack_require__(189).default})


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-founders-bio.vue?vue&type=template&id=079fbf2e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"relative h-[80vh] bg-cover bg-center bg-no-repeat object-center pb-12\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (_vm.content.bannerImgUrl) + ")") }, null))+"><div class=\"absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent\"></div> <div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[500px]\"></div> <div class=\"container relative z-10 flex h-full items-center lg:px-[97px] xl:pl-20\"><div><div class=\"mb-[10px] flex gap-[10px]\"><div class=\"w-[3px] flex-none bg-primary\"></div> <p class=\"font-normal text-[#FBFBFD] sm:whitespace-pre\">"+(_vm._s(_vm.content.bannerSubtitle))+"</p></div> <h1 class=\"mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[60px] xl:leading-[53px]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerTitle))+"</h1> <p class=\"mb-5 text-[#fbfbfd]\">"+(_vm._s(_vm.content.bannerDescription))+"</p></div></div></section> "),_vm._ssrNode("<div class=\"pb-20\">","</div>",[_vm._ssrNode("<section class=\"pt-20 md:pt-28\">","</section>",[_vm._ssrNode("<div id=\"about\" class=\"px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-8 flex items-center justify-center gap-[33px] text-center\"><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div> <h2 class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary\">"+(_vm._s(_vm.content.section1Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_c('common-toggle-content',{attrs:{"content":_vm.content.section1Description}})],1)],2)])]),_vm._ssrNode(" "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video1ThumbnailUrl,"button-title":_vm.content.video1ButtonText,"button-u-r-l":_vm.content.video1ButtonLink,"video-u-r-l":_vm.content.video1Url,"title":_vm.content.video1Title,"less-padding-top":true}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white py-[60px]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1\">","</div>",[_vm._ssrNode("<h3 class=\"pb-[43px] text-center text-2xl font-medium text-[#0B3A02] md:text-[31px]\">"+(_vm._s(_vm.content.section2Title))+"</h3> "),_vm._ssrNode("<div class=\"flex flex-wrap items-center justify-center gap-4 lg:gap-[50px]\">","</div>",_vm._l((_vm.section2Icons),function(logo,i){return _vm._ssrNode("<div class=\"flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white p-5 px-[17px] shadow-[0px_1px_8px_rgba(0,0,0,0.2)] xl:h-[126px] xl:w-[126px]\">","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":logo.attributes.iconUrl,"alt":'icon' + i,"loading":"lazy"}})],1)}),0)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"my-10 md:my-10\">","</section>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"mb-[71px] flex items-center justify-center gap-2.5 text-center\"><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div> <h2 class=\"inline-block text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl\">"+(_vm._s(_vm.content.section3Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"mx-auto mb-10 grid max-w-[300px] grid-cols-1 gap-5 space-y-4 md:mb-16 md:max-w-none md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4\">","</div>",_vm._l((_vm.section3Data),function(value,i){return _vm._ssrNode("<div"+(_vm._ssrClass("relative",{ 'md:before:!w-0 ': i === _vm.section3Data.length - 1 }))+">","</div>",[_vm._ssrNode("<div class=\"flex flex-col items-center gap-4 rounded-t-[10px] bg-primary p-4 text-center md:min-h-[152px]\"><span class=\"h-12 w-12 rounded-full bg-white text-center text-lg font-bold leading-[48px] text-primary\">"+_vm._ssrEscape(_vm._s(value.attributes.sectionName))+"</span> <h3 class=\"text-xl font-bold text-white xl:text-[26px]\">"+_vm._ssrEscape(_vm._s(value.attributes.title))+"</h3></div> <div class=\"bg-white px-5 py-6 shadow-[0_3px_6px_rgba(0,0,0,0.16)] md:min-h-[120px] lg:min-h-[192px] lg:px-[30px] xl:min-h-[144px]\"><p class=\"text-[15px] leading-6 -tracking-[0.03]\">"+_vm._ssrEscape(_vm._s(value.attributes.description))+"</p></div> "),_vm._ssrNode("<div class=\"h-48 w-full md:h-32 lg:h-48\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":value.attributes.imgURL,"alt":value.attributes.title,"loading":"lazy"}})],1)],2)}),0)])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"container py-24\">","</section>",[_vm._ssrNode("<div class=\"justify-content-center grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3\">","</div>",_vm._l((_vm.icons),function(icon,ic){return _vm._ssrNode("<div class=\"justify-self-center\">","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",icon.attributes.url))+" class=\"flex flex-col items-center justify-center\">","</a>",[_c('nuxt-img',{staticClass:"h-10 w-10",attrs:{"format":"webp","src":icon.attributes.icon,"alt":icon.attributes.name,"loading":"lazy"}}),_vm._ssrNode(" <p>"+_vm._ssrEscape(_vm._s(icon.attributes.name))+"</p>")],2)])}),0)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/base-founders-bio.vue?vue&type=template&id=079fbf2e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-founders-bio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var base_founders_biovue_type_script_lang_js_ = ({
  props: {
    content: {
      type: Object,
      default: () => {
        return null;
      }
    }
  },
  async asyncData(context) {
    try {
      const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/our-leadership-page?populate=deep`);
      return {
        content: context.$helper.parseData(data.data)
      };
    } catch {}
  },
  head() {
    var _this$content, _this$content$metaFie, _this$content$metaFie2, _this$content2, _this$content2$metaFi, _this$content3, _this$content3$metaFi, _this$content4, _this$content4$metaFi, _this$content5, _this$content5$metaFi, _this$content6, _this$content6$metaFi, _this$content7, _this$content7$metaFi, _this$content8, _this$content8$metaFi, _this$content9, _this$content9$metaFi, _this$content10, _this$content10$metaF, _this$content11, _this$content11$metaF;
    return {
      title: (_this$content = this.content) === null || _this$content === void 0 ? void 0 : (_this$content$metaFie = _this$content.metaFields) === null || _this$content$metaFie === void 0 ? void 0 : (_this$content$metaFie2 = _this$content$metaFie[0]) === null || _this$content$metaFie2 === void 0 ? void 0 : _this$content$metaFie2.title,
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
    icons() {
      var _this$content12, _this$content12$socia;
      return (this === null || this === void 0 ? void 0 : (_this$content12 = this.content) === null || _this$content12 === void 0 ? void 0 : (_this$content12$socia = _this$content12.socialIcons) === null || _this$content12$socia === void 0 ? void 0 : _this$content12$socia.data) || [];
    },
    section3Data() {
      var _this$content13, _this$content13$secti;
      return (this === null || this === void 0 ? void 0 : (_this$content13 = this.content) === null || _this$content13 === void 0 ? void 0 : (_this$content13$secti = _this$content13.section3Component) === null || _this$content13$secti === void 0 ? void 0 : _this$content13$secti.data) || [];
    },
    section2AllData() {
      var _this$content14, _this$content14$secti;
      return (this === null || this === void 0 ? void 0 : (_this$content14 = this.content) === null || _this$content14 === void 0 ? void 0 : (_this$content14$secti = _this$content14.section2Component) === null || _this$content14$secti === void 0 ? void 0 : _this$content14$secti.data) || [];
    },
    section2Data() {
      if (this.moreConsultantsLoaded) {
        var _this$content15, _this$content15$secti;
        return (this === null || this === void 0 ? void 0 : (_this$content15 = this.content) === null || _this$content15 === void 0 ? void 0 : (_this$content15$secti = _this$content15.section2Component) === null || _this$content15$secti === void 0 ? void 0 : _this$content15$secti.data) || [];
      } else {
        var _this$content16, _this$content16$secti, _this$content16$secti2;
        return (this === null || this === void 0 ? void 0 : (_this$content16 = this.content) === null || _this$content16 === void 0 ? void 0 : (_this$content16$secti = _this$content16.section2Component) === null || _this$content16$secti === void 0 ? void 0 : (_this$content16$secti2 = _this$content16$secti.data) === null || _this$content16$secti2 === void 0 ? void 0 : _this$content16$secti2.slice(0, 6)) || [];
      }
    },
    section2Icons() {
      var _this$content17, _this$content17$secti;
      return (this === null || this === void 0 ? void 0 : (_this$content17 = this.content) === null || _this$content17 === void 0 ? void 0 : (_this$content17$secti = _this$content17.section2Icons) === null || _this$content17$secti === void 0 ? void 0 : _this$content17$secti.data) || [];
    }
  }
});
// CONCATENATED MODULE: ./components/base/base-founders-bio.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_base_founders_biovue_type_script_lang_js_ = (base_founders_biovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/base/base-founders-bio.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_base_founders_biovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7bd87f50"
  
)

/* harmony default export */ var base_founders_bio = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonToggleContent: __webpack_require__(149).default,CommonContactUs: __webpack_require__(139).default})


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-our-team.vue?vue&type=template&id=89f8c500&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',[_vm._ssrNode("<section class=\"relative bg-cover bg-[right_32%_top] bg-no-repeat pb-12 pt-[100px] md:bg-[center_top_8%] lg:pt-[166px] xl:bg-[center_top_12%] xl:pb-[67px]\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (_vm.content.bannerImgUrl) + ")") }, null))+"><div class=\"absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent\"></div> <div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]\"></div> <div class=\"container relative z-10 lg:px-[97px] xl:px-4\"><div><p class=\"mb-5 text-[#fbfbfd]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerSubtitle))+"</p> <h1 class=\"mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px] xl:leading-[53px]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerTitle))+"</h1> <div class=\"mb-[10px] flex gap-[10px]\"><div class=\"w-[3px] flex-none bg-primary\"></div> <p class=\"font-normal text-[#FBFBFD] sm:whitespace-pre\">"+(_vm._s(_vm.content.bannerDescription))+"</p></div></div></div></section> "),_c('common-banner-tab',{attrs:{"tabs":_vm.tabs,"is-show-save-btn":true}}),_vm._ssrNode(" <section class=\"py-10 lg:pb-[90px] lg:pt-20 xl:pt-[100px]\"><div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\"><div id=\"aboutOurLeadership\" class=\"mb-4 flex items-center gap-[33px]\"><h2 class=\"[&>span] shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl\">"+(_vm._s(_vm.content.section1Title))+"</h2></div> <div class=\"space-y-5 font-medium leading-6 text-black-700\"><p>"+_vm._ssrEscape("\n                    "+_vm._s(_vm.content.section1Description)+"\n                ")+"</p></div></div></section> "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video1ThumbnailUrl,"button-title":_vm.content.video1ButtonText,"button-u-r-l":_vm.content.video1ButtonLink,"video-u-r-l":_vm.content.video1Url,"title":_vm.content.video1Title,"less-padding-top":true}}),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_c('common-our-team',{staticClass:"!pb-0",attrs:{"title":_vm.content.section2Title,"description":_vm.content.section2Description,"teams":_vm.section2Data}}),_vm._ssrNode(" "+((!_vm.moreConsultantsLoaded && _vm.section2AllData.length > 6)?("<div class=\"mb-24 mt-10 text-center\"><button class=\"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6\">"+(_vm._s(_vm.content.section2ButtonText))+"</button></div>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white py-[60px]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1\">","</div>",[_vm._ssrNode("<h3 class=\"pb-[43px] text-center text-2xl font-medium text-[#0B3A02] md:text-[31px]\">"+(_vm._s(_vm.content.section3Title))+"</h3> "),_vm._ssrNode("<div class=\"flex flex-wrap items-center justify-center gap-4 lg:gap-[50px]\">","</div>",_vm._l((_vm.section3Data),function(logo,i){return _vm._ssrNode("<div class=\"flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white p-5 px-[17px] shadow-[0px_1px_8px_rgba(0,0,0,0.2)] xl:h-[126px] xl:w-[126px]\">","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":logo.attributes.iconUrl,"alt":'icon_' + i,"loading":"lazy"}})],1)}),0)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"pb-[108px] pt-[94px]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"text-center\">","</div>",[_vm._ssrNode("<h2 class=\"mb-3 text-[22px] font-medium leading-[27px] text-[#202A36] xl:text-[31px] xl:leading-[32px]\">"+(_vm._s(_vm.content.CTA1Title))+"</h2> <p class=\"mx-auto mb-[26px] max-w-[171px] text-[15px] font-medium leading-[18px] -tracking-[0.03px] text-[#586376] sm:max-w-none xl:text-[22px] xl:leading-[21px] xl:-tracking-[0.04px]\">"+(_vm._s(_vm.content.CTA1Description))+"</p> "),(_vm.$helper.isInternalUrl(_vm.content.CTA1ButtonLink))?_c('nuxt-link',{staticClass:"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6",attrs:{"to":_vm.content.CTA1ButtonLink}},[_vm._v(_vm._s(_vm.content.CTA1ButtonText))]):_c('a',{staticClass:"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6",attrs:{"target":"_blank","href":_vm.buttonLink}},[_vm._v(_vm._s(_vm.content.CTA1ButtonText))])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"employmentOpportunities\">","</section>",[_c('common-tell-more-about-projects',{attrs:{"featured-companies":_vm.section3Data,"tell-us-more-data":_vm.section4Data,"tell-us-more-title":_vm.content.section4Title,"tell-use-more-subtitle":_vm.content.section4Subtitle,"image-url":_vm.content.section4ImgUrl}})],1),_vm._ssrNode(" "),_vm._ssrNode("<section>","</section>",[_c('common-work-at-the-best-place',{attrs:{"img-url":_vm.content.CTA2ImgUrl,"title":_vm.content.CTA2Title,"description":_vm.content.CTA2Description,"button-title":_vm.content.CTA2ButtonText,"button-url":_vm.content.CTA2ButtonLink}})],1),_vm._ssrNode(" "),_c('common-interested-service',{attrs:{"background-image":_vm.content.section5ImgUrl,"subtitle":_vm.content.section5Subtitle,"title":_vm.content.section5Title,"description":_vm.content.section5Description,"button-link":_vm.content.section5ButtonLink,"button-title":_vm.content.section5ButtonText}}),_vm._ssrNode(" "),_c('common-faq',{attrs:{"title":_vm.content.section6Title,"description":_vm.content.section6Description,"faqs":_vm.section6Data}}),_vm._ssrNode(" "),_c('common-brand-logo',{attrs:{"logos":_vm.logoSliders}}),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"id":"readyToTalk","img-url":_vm.readyToTalkForm.imgUrl,"service-options":_vm.readyToTalkForm.services.data,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/base-our-team.vue?vue&type=template&id=89f8c500&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-our-team.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var base_our_teamvue_type_script_lang_js_ = ({
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
      moreConsultantsLoaded: false,
      tabs: [{
        id: 'aboutOurLeadership',
        title: 'About Our Leadership'
      }, {
        id: 'ourTeam',
        title: 'Our Team'
      }, {
        id: 'employmentOpportunities',
        title: 'Employment Opportunities'
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
    var _this$content, _this$content$metaFie, _this$content$metaFie2, _this$content2, _this$content2$metaFi, _this$content3, _this$content3$metaFi, _this$content4, _this$content4$metaFi, _this$content5, _this$content5$metaFi, _this$content6, _this$content6$metaFi, _this$content7, _this$content7$metaFi, _this$content8, _this$content8$metaFi, _this$content9, _this$content9$metaFi, _this$content10, _this$content10$metaF, _this$content11, _this$content11$metaF;
    return {
      title: (_this$content = this.content) === null || _this$content === void 0 ? void 0 : (_this$content$metaFie = _this$content.metaFields) === null || _this$content$metaFie === void 0 ? void 0 : (_this$content$metaFie2 = _this$content$metaFie[0]) === null || _this$content$metaFie2 === void 0 ? void 0 : _this$content$metaFie2.title,
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
    section2AllData() {
      var _this$content12, _this$content12$secti;
      return (this === null || this === void 0 ? void 0 : (_this$content12 = this.content) === null || _this$content12 === void 0 ? void 0 : (_this$content12$secti = _this$content12.section2Component) === null || _this$content12$secti === void 0 ? void 0 : _this$content12$secti.data) || [];
    },
    section2Data() {
      if (this.moreConsultantsLoaded) {
        var _this$content13, _this$content13$secti;
        return (this === null || this === void 0 ? void 0 : (_this$content13 = this.content) === null || _this$content13 === void 0 ? void 0 : (_this$content13$secti = _this$content13.section2Component) === null || _this$content13$secti === void 0 ? void 0 : _this$content13$secti.data) || [];
      } else {
        var _this$content14, _this$content14$secti, _this$content14$secti2;
        return (this === null || this === void 0 ? void 0 : (_this$content14 = this.content) === null || _this$content14 === void 0 ? void 0 : (_this$content14$secti = _this$content14.section2Component) === null || _this$content14$secti === void 0 ? void 0 : (_this$content14$secti2 = _this$content14$secti.data) === null || _this$content14$secti2 === void 0 ? void 0 : _this$content14$secti2.slice(0, 6)) || [];
      }
    },
    section3Data() {
      var _this$content15, _this$content15$secti;
      return (this === null || this === void 0 ? void 0 : (_this$content15 = this.content) === null || _this$content15 === void 0 ? void 0 : (_this$content15$secti = _this$content15.section3Component) === null || _this$content15$secti === void 0 ? void 0 : _this$content15$secti.data) || [];
    },
    section4Data() {
      var _this$content16, _this$content16$secti;
      return (this === null || this === void 0 ? void 0 : (_this$content16 = this.content) === null || _this$content16 === void 0 ? void 0 : (_this$content16$secti = _this$content16.section4Component) === null || _this$content16$secti === void 0 ? void 0 : _this$content16$secti.data) || [];
    },
    section5Data() {
      var _this$content17, _this$content17$secti;
      return (this === null || this === void 0 ? void 0 : (_this$content17 = this.content) === null || _this$content17 === void 0 ? void 0 : (_this$content17$secti = _this$content17.section4Component) === null || _this$content17$secti === void 0 ? void 0 : _this$content17$secti.data) || [];
    },
    section6Data() {
      var _this$content18, _this$content18$secti;
      return (this === null || this === void 0 ? void 0 : (_this$content18 = this.content) === null || _this$content18 === void 0 ? void 0 : (_this$content18$secti = _this$content18.section6Component) === null || _this$content18$secti === void 0 ? void 0 : _this$content18$secti.data) || [];
    },
    logoSliders() {
      var _this$content19, _this$content19$logoS, _this$content19$logoS2, _this$content19$logoS3;
      return ((_this$content19 = this.content) === null || _this$content19 === void 0 ? void 0 : (_this$content19$logoS = _this$content19.logoSlider) === null || _this$content19$logoS === void 0 ? void 0 : (_this$content19$logoS2 = _this$content19$logoS.data) === null || _this$content19$logoS2 === void 0 ? void 0 : (_this$content19$logoS3 = _this$content19$logoS2.attributes) === null || _this$content19$logoS3 === void 0 ? void 0 : _this$content19$logoS3.logoUrls) || [];
    },
    readyToTalkForm() {
      var _this$content20, _this$content20$ready, _this$content20$ready2;
      return ((_this$content20 = this.content) === null || _this$content20 === void 0 ? void 0 : (_this$content20$ready = _this$content20.readyToTalkForm) === null || _this$content20$ready === void 0 ? void 0 : (_this$content20$ready2 = _this$content20$ready.data) === null || _this$content20$ready2 === void 0 ? void 0 : _this$content20$ready2.attributes) || {
        services: {
          data: []
        }
      };
    }
  }
});
// CONCATENATED MODULE: ./components/base/base-our-team.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_base_our_teamvue_type_script_lang_js_ = (base_our_teamvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/base/base-our-team.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_base_our_teamvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d11ff3a2"
  
)

/* harmony default export */ var base_our_team = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonBannerTab: __webpack_require__(161).default,CommonContactUs: __webpack_require__(139).default,CommonOurTeam: __webpack_require__(174).default,CommonTellMoreAboutProjects: __webpack_require__(177).default,CommonWorkAtTheBestPlace: __webpack_require__(182).default,CommonInterestedService: __webpack_require__(145).default,CommonFaq: __webpack_require__(168).default,CommonBrandLogo: __webpack_require__(164).default,CommonReadytotalk: __webpack_require__(140).default})


/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-service-pages.vue?vue&type=template&id=9131312a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',[_vm._ssrNode(((_vm.content.bannerVideoUrl)?("<section class=\"contact-heroform group relative overflow-hidden bg-cover bg-center bg-no-repeat\"><video autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\" playsinline class=\"responsive-contact-us-section-video absolute h-auto w-full object-cover\" style=\"min-height: 571px; height: 20vw\"><source"+(_vm._ssrAttr("src",_vm.content.bannerVideoUrl))+" type=\"video/mp4\"></video> <div class=\"absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent\"></div> <div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]\"></div> <div class=\"container relative z-10 px-10 pb-9 pt-[287px] md:bg-left md:px-4 lg:px-[97px] xl:px-4 xl:pb-20 xl:pt-[164px]\"><div><p class=\"mb-[19px] font-normal leading-4 text-[#FBFBFD] xl:leading-6\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerSubtitle))+"</p> <h1 class=\"mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerTitle))+"</h1> <div class=\"flex items-center gap-[10px]\"><div class=\"absolute -left-4 h-[95%] w-[5px] bg-primary\"></div> <p class=\"font-normal leading-4 text-[#FBFBFD] xl:leading-6\">"+(_vm._s(_vm.content.bannerDescription))+"</p></div></div></div></section>"):("<section class=\"relative bg-cover bg-center bg-no-repeat pb-10 pt-[166px] md:bg-left xl:pb-20\""+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (_vm.content.bannerImageUrl) + ")") }, null))+"><div class=\"absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-r from-[#2b3746] via-transparent\"></div> <div class=\"absolute bottom-0 left-0 h-[161px] w-full bg-gradient-to-t from-[#202a36] via-transparent opacity-80 xl:h-[214px]\"></div> <div class=\"absolute top-0 z-0 h-full w-full bg-gradient-to-r from-[#2B3746]/70 md:-left-[40%] md:w-[90%]\"></div> <div class=\"container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4\"><div><p class=\"mb-[19px] font-normal leading-4 text-[#FBFBFD] xl:leading-6\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerSubtitle))+"</p> <h1 class=\"mb-4 text-[38px] font-bold leading-[42px] text-white xl:text-[40px]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerTitle))+"</h1> <div class=\"relative flex items-center gap-[10px]\"><div class=\"absolute -left-4 h-[95%] w-[5px] bg-primary\"></div> <p class=\"font-normal leading-5 text-[#FBFBFD] xl:leading-6\">"+(_vm._s(_vm.content.bannerDescription))+"</p></div></div></div></section>"))+" "),_c('common-banner-tab',{attrs:{"tabs":_vm.tabs,"is-show-save-btn":true}}),_vm._ssrNode(" "),_c('common-dynamic-questionnaire',{attrs:{"data":_vm.questionnaires}}),_vm._ssrNode(" "),_c('common-company-overview',{attrs:{"id":"overview","value":_vm.content.section1Paragraph,"title":_vm.content.section1Title}}),_vm._ssrNode(" "),(_vm.content.CTA1ButtonText)?_vm._ssrNode("<div class=\"pt-10 text-center lg:pt-[102px]\">","</div>",[(_vm.$helper.isInternalUrl(_vm.content.CTA1ButtonLink))?_c('nuxt-link',{staticClass:"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6",attrs:{"to":_vm.content.CTA1ButtonLink}},[_vm._v("\n            "+_vm._s(_vm.content.CTA1ButtonText)+"\n        ")]):_c('a',{staticClass:"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6",attrs:{"target":"_blank","href":_vm.content.CTA1ButtonLink}},[_vm._v(_vm._s(_vm.content.CTA1ButtonText))])],1):_vm._e(),_vm._ssrNode(" <section id=\"diverseEnvironment\" class=\"py-10 lg:pt-24 xl:pt-[185px]\"><div class=\"container lg:px-[97px] xl:px-4\"><div class=\"text-center md:mb-[50px]\"><div class=\"mb-6 flex items-center justify-center gap-[5px] text-center md:mb-9 md:gap-8\"><div class=\"block h-px w-full bg-[#d5d5d5]\"></div> <h2 class=\"shrink-0 text-2xl font-bold uppercase text-black lg:text-3xl lg:leading-[43px]\">"+(_vm._s(_vm.content.section2Title))+"</h2> <div class=\"block h-px w-full bg-[#d5d5d5]\"></div></div> <p class=\"mx-auto max-w-[925px] text-base font-medium leading-6 -tracking-[0.03px] text-[#586376] md:text-[22px] md:leading-8\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.content.section2Description)+"\n                ")+"</p></div></div></section> "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video1ThumbnailUrl,"button-title":_vm.content.video1ButtonText,"button-u-r-l":_vm.content.video1ButtonLink,"video-u-r-l":_vm.content.video1Url,"title":_vm.content.video1Title}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white py-16 md:pb-[101px] md:pt-20 xl:pt-[92px]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1\"><div id=\"ourPortfolio\"><h5 class=\"mb-4 text-[23px] uppercase text-[#030303]\">"+_vm._ssrEscape(_vm._s(_vm.content.section3Subtitle))+"</h5> <h5 class=\"text-[26px] font-bold uppercase leading-[36px] text-[#030303]\">"+_vm._ssrEscape(_vm._s(_vm.content.section3Title))+"</h5> <p class=\"pt-[27px] text-xs font-bold uppercase leading-9 tracking-[1.2px] text-[#030303]\">"+_vm._ssrEscape(_vm._s(_vm.content.section3Description))+"</p></div></div> "),_vm._ssrNode("<div class=\"items-start gap-6 pt-[27px] md:flex\">","</div>",[_vm._ssrNode("<div class=\"max-w-[275px] flex-1\"><ul>"+(_vm._ssrList((_vm.section3Data),function(category,i){return ("<li"+(_vm._ssrClass("rounded-md text-[#707070] hover:!border-primary hover:bg-[#eaf7ff] hover:text-primary",{ 'font-bold !text-primary': _vm.activeCategoryData.id == category.id }))+"><p class=\"block rounded-md border border-transparent px-[11px] py-1 text-lg hover:border-primary\">"+_vm._ssrEscape(_vm._s(category.attributes.title))+"</p></li>")}))+"</ul></div> "),_c('common-category-slider',{attrs:{"active-category-sample-data":_vm.activeCategorySampleData},on:{"preview":_vm.previewLatestWork}})],2)],2)]),_vm._ssrNode(" "),_c('common-venture-plans',{attrs:{"id":"whyVenturePlans","title":_vm.content.section4Title,"data":_vm.section4Data}}),_vm._ssrNode(" "),_vm._ssrNode("<section id=\"featuredServices\" class=\"bg-[#fbfbfd]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 py-10 md:px-4 md:py-16 lg:px-[97px] lg:pt-0 xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-9 flex items-center justify-center gap-2 text-center sm:gap-[33px] md:mb-[67px]\"><div class=\"block h-px w-full bg-[#D5D5D5]\"></div> <h2 class=\"shrink-0 text-2xl font-bold uppercase text-black xl:text-3xl [&>span]:text-primary\">"+(_vm._s(_vm.content.section5Title))+"</h2> <div class=\"block h-px w-full bg-[#D5D5D5]\"></div></div> "),_c('common-featured-services',{attrs:{"services":_vm.section5Data}})],2)]),_vm._ssrNode(" "),_c('home-private-placement',{attrs:{"featured-companies":_vm.section6Data,"featured-title":_vm.content.section6Title,"featured-in-text":_vm.content.section6Title,"description":_vm.content.CTA2Description,"title":_vm.content.CTA2Title,"button-text":_vm.content.CTA2ButtonText,"button-link":_vm.content.CTA2ButtonLink}}),_vm._ssrNode(" "),_c('common-tell-more-about-projects',{attrs:{"featured-companies":_vm.section6Data,"tell-us-more-data":_vm.section7Data,"tell-us-more-title":_vm.content.section7Title,"tell-use-more-subtitle":_vm.content.section7Subtitle,"image-url":_vm.content.section7Img}}),_vm._ssrNode(" "),_c('common-client-words',{attrs:{"id":"ourClientsWords","title":_vm.content.section8Title,"description":_vm.content.section8Description,"testimonials":_vm.section8Data}}),_vm._ssrNode(" "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video2ThumbnailUrl,"button-title":_vm.content.video2ButtonText,"button-u-r-l":_vm.content.video2ButtonLink,"video-u-r-l":_vm.content.video2Url,"title":_vm.content.video2Title}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"py-10 lg:pb-[198px] lg:pt-[93px]\">","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div id=\"grantApplicationProcess\" class=\"mb-4 flex items-center justify-center gap-[33px] text-center\"><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div> <h2 class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl\">"+(_vm._s(_vm.content.section9Title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div></div> <div class=\"mx-auto max-w-lg space-y-5 text-center text-sm font-medium leading-6 -tracking-[0.03px] text-black xl:max-w-[732px] xl:text-base xl:leading-9 xl:-tracking-[0.04px]\"><p>"+_vm._ssrEscape(_vm._s(_vm.content.section9Description))+"</p></div> "),_vm._ssrNode("<div class=\"mt-10 space-y-8 md:mt-[70px] md:space-y-14 xl:space-y-28\">","</div>",_vm._l((_vm.section9Data),function(process,i){return _vm._ssrNode("<div class=\"grid grid-cols-1 items-start justify-between gap-10 md:grid-cols-2 xl:gap-20\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("order-2 mb-10 md:mb-0",{ 'md:!order-1': i % 2 !== 0 }))+">","</div>",[_c('nuxt-img',{staticClass:"mx-auto",class:{ ' h-[201px]': i === 0, ' h-[253px]': i === 1, ' h-[199px]': i === 2 },attrs:{"format":"webp","src":process.attributes.imgUrl,"alt":process.attributes.title,"loading":"lazy"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass(null,{ 'md:!order-2': i % 2 !== 0 }))+">","</div>",[_vm._ssrNode("<div class=\"mb-3 flex gap-5 xl:gap-7\">","</div>",[_vm._ssrNode("<span class=\"h-12 w-12 flex-none rounded-full bg-primary text-center text-2xl font-bold leading-[48px] text-white xl:h-[54px] xl:w-[54px] xl:leading-[54px]\">"+_vm._ssrEscape(_vm._s(i + 1))+"</span> "),_vm._ssrNode("<div class=\"max-w-[510px] flex-1\">","</div>",[_vm._ssrNode("<h3 class=\"mb-3 mt-3 text-xl font-bold leading-7 text-[#202a36] xl:mb-6 xl:text-[21px]\">"+_vm._ssrEscape("\n                                    "+_vm._s(process.attributes.title)+"\n                                ")+"</h3> "),(process.attributes.description)?_c('common-toggle-content',{attrs:{"content":process.attributes.description,"content-class":"text-sm font-medium text-[#353535] xl:text-lg xl:leading-9","show-blur":false,"read-more-class":"items-center justify-start"}}):_vm._e()],2)],2)])],2)}),0)],2)]),_vm._ssrNode(" "),_c('common-interested-service',{attrs:{"id":"buyGrantServices","background-image":_vm.content.video3Url,"subtitle":_vm.content.Video3MiniTitle,"title":_vm.content.video3Title,"description":_vm.content.video3Description,"button-link":_vm.content.video3ButtonLink,"button-title":_vm.content.video3ButtonText}}),_vm._ssrNode(" "),_c('common-our-team',{staticClass:"pb-10 md:!pb-0",attrs:{"id":"ourTeam","title":_vm.content.section10Title,"description":_vm.content.section10Description,"teams":_vm.section10Data}}),_vm._ssrNode(" <section class=\"py-10 lg:pb-[219px]\"><div class=\"container\"><div class=\"grid grid-cols-1\"><div class=\"text-center\"><a"+(_vm._ssrAttr("href",_vm.content.CTA3ButtonLink))+" class=\"b-btn text-xs uppercase lg:max-w-[322px] lg:py-6\">"+_vm._ssrEscape(_vm._s(_vm.content.CTA3ButtonText))+"</a></div></div></div></section> "),_c('common-faq',{attrs:{"title":_vm.content.section11Title,"description":_vm.content.section11Description,"faqs":_vm.section11Data}}),_vm._ssrNode(" "),_c('common-brand-logo',{attrs:{"logos":_vm.logoSliders}}),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"id":"readyToTalk","img-url":_vm.readyToTalkForm.imgUrl,"service-options":_vm.readyToTalkForm.services.data,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle}}),_vm._ssrNode(" "),_c('common-modal',{ref:"previewModal",attrs:{"width":"1440","background":"bg-[#fafafa]"}},[_c('div',[_c('button',{staticClass:"absolute right-4 top-4 md:right-8 md:top-8",attrs:{"type":"button"},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"17","height":"17","viewBox":"0 0 17 17"}},[_c('g',[_c('g',[_c('g',[_c('path',{attrs:{"d":"M.75 17a.729.729 0 0 1-.513-1.242L14.802 1.193a.728.728 0 1 1 1.03 1.03L1.269 16.79a.728.728 0 0 1-.517.21z"}})]),_vm._v(" "),_c('g',[_c('path',{attrs:{"d":"M15.343 17a.73.73 0 0 1-.515-.216L.214 2.171a.73.73 0 1 1 1.034-1.033L15.862 15.75a.731.731 0 0 1-.52 1.25z"}})])])])])]),_vm._v(" "),_c('div',[_c('ul',{staticClass:"mb-8 flex flex-col gap-4 text-base text-[#6c6c6c] md:flex-row md:gap-16"},[_c('li',[(_vm.activeProductData.isBusinessPlan)?_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Client")]):_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Type")]),_vm._v("\n                        "+_vm._s(_vm.activeProductData.client)+"\n                    ")]),_vm._v(" "),_c('li',[_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Industry")]),_vm._v(_vm._s(_vm.activeProductData.industry))]),_vm._v(" "),(_vm.activeProductData.isBusinessPlan)?_c('li',[_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Total Raised")]),_vm._v(_vm._s(_vm.activeProductData.totalRaised))]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"mb-5 flex flex-col items-start justify-between gap-4 md:flex-row"},[_c('p',{staticClass:"text-base text-[#6c6c6c] md:max-w-[350px] lg:max-w-[527px]"},[_c('span',{staticClass:"block text-xs font-bold text-black"},[_vm._v("Description")]),_vm._v(_vm._s(_vm.activeProductData.description))]),_vm._v(" "),_c('div',{staticClass:"flex flex-wrap gap-2"},[(_vm.$helper.isInternalUrl(_vm.activeProductData.buttonUrl))?_c('nuxt-link',{staticClass:"b-btn w-full rounded px-9 py-4 text-base md:w-auto",attrs:{"to":_vm.activeProductData.buttonUrl},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_vm._v(_vm._s(_vm.activeProductData.buttonTitle))]):_c('a',{staticClass:"b-btn w-full rounded px-9 py-4 text-base md:w-auto",attrs:{"target":"_blank","href":_vm.activeProductData.buttonUrl},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_vm._v(_vm._s(_vm.activeProductData.buttonTitle))]),_vm._v(" "),(_vm.$helper.isInternalUrl(_vm.activeProductData.pdfUrlField))?_c('nuxt-link',{staticClass:"b-btn w-full rounded px-9 py-4 text-base md:w-auto",attrs:{"to":_vm.activeProductData.pdfUrlField},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_vm._v("View Document")]):_c('a',{staticClass:"b-btn w-full rounded px-9 py-4 text-base md:w-auto",attrs:{"target":"_blank","href":_vm.activeProductData.pdfUrlField},on:{"click":function($event){return _vm.$refs.previewModal.close()}}},[_vm._v("View Document")])],1)]),_vm._v(" "),(_vm.activeProductData.descriptionMediaType === 'images')?_c('div',{directives:[{name:"swiper",rawName:"v-swiper:brandLogo",value:(_vm.slider_options),expression:"slider_options",arg:"brandLogo"}],staticClass:"swiper relative bg-transparent",attrs:{"cleanup-styles-on-destroy":false}},[(_vm.activeProductData.images)?_c('div',{staticClass:"swiper-wrapper items-center !px-10"},_vm._l((_vm.activeProductData.images),function(image,i){return _c('div',{key:image.imgUrl,staticClass:"swiper-slide bg-white p-4"},[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":image.imgUrl,"alt":'swiper-slide_' + i,"loading":"lazy"}})],1)}),0):_vm._e(),_vm._v(" "),_c('div',{staticClass:"swiper-button-next -mr-3"}),_vm._v(" "),_c('div',{staticClass:"swiper-button-prev -ml-3"})]):_c('iframe',{staticClass:"h-screen w-full",attrs:{"src":_vm.activeProductData.pdfUrlField,"frameborder":"0"}})])])])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/base-service-pages.vue?vue&type=template&id=9131312a&

// EXTERNAL MODULE: ./components/common/common-toggle-content.vue + 4 modules
var common_toggle_content = __webpack_require__(149);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-service-pages.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var base_service_pagesvue_type_script_lang_js_ = ({
  components: {
    commonToggleContent: common_toggle_content["default"]
  },
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
    questionnaires() {
      var _this$content12, _this$content12$dynam, _this$content12$dynam2;
      return ((_this$content12 = this.content) === null || _this$content12 === void 0 ? void 0 : (_this$content12$dynam = _this$content12.dynamicQuestionnaries) === null || _this$content12$dynam === void 0 ? void 0 : (_this$content12$dynam2 = _this$content12$dynam.data) === null || _this$content12$dynam2 === void 0 ? void 0 : _this$content12$dynam2.attributes) || [];
    },
    grantServiceQuestions() {
      var _this$content13, _this$content13$quest;
      return ((_this$content13 = this.content) === null || _this$content13 === void 0 ? void 0 : (_this$content13$quest = _this$content13.questionnaire) === null || _this$content13$quest === void 0 ? void 0 : _this$content13$quest.data) || [];
    },
    section3Data() {
      var _this$content14, _this$content14$secti;
      return ((_this$content14 = this.content) === null || _this$content14 === void 0 ? void 0 : (_this$content14$secti = _this$content14.section3Component) === null || _this$content14$secti === void 0 ? void 0 : _this$content14$secti.data) || [];
    },
    section4Data() {
      var _this$content15, _this$content15$secti;
      return ((_this$content15 = this.content) === null || _this$content15 === void 0 ? void 0 : (_this$content15$secti = _this$content15.section4Component) === null || _this$content15$secti === void 0 ? void 0 : _this$content15$secti.data) || [];
    },
    section5Data() {
      var _this$content16, _this$content16$secti;
      return ((_this$content16 = this.content) === null || _this$content16 === void 0 ? void 0 : (_this$content16$secti = _this$content16.section5Component) === null || _this$content16$secti === void 0 ? void 0 : _this$content16$secti.data) || [];
    },
    section6Data() {
      var _this$content17, _this$content17$secti;
      return ((_this$content17 = this.content) === null || _this$content17 === void 0 ? void 0 : (_this$content17$secti = _this$content17.section6Component) === null || _this$content17$secti === void 0 ? void 0 : _this$content17$secti.data) || [];
    },
    section7Data() {
      var _this$content18, _this$content18$secti;
      return ((_this$content18 = this.content) === null || _this$content18 === void 0 ? void 0 : (_this$content18$secti = _this$content18.section7Component) === null || _this$content18$secti === void 0 ? void 0 : _this$content18$secti.data) || [];
    },
    section8Data() {
      var _this$content19, _this$content19$secti;
      return ((_this$content19 = this.content) === null || _this$content19 === void 0 ? void 0 : (_this$content19$secti = _this$content19.section8Component) === null || _this$content19$secti === void 0 ? void 0 : _this$content19$secti.data) || [];
    },
    section9Data() {
      var _this$content20, _this$content20$secti;
      return ((_this$content20 = this.content) === null || _this$content20 === void 0 ? void 0 : (_this$content20$secti = _this$content20.section9Component) === null || _this$content20$secti === void 0 ? void 0 : _this$content20$secti.data) || [];
    },
    section10Data() {
      var _this$content21, _this$content21$secti;
      return ((_this$content21 = this.content) === null || _this$content21 === void 0 ? void 0 : (_this$content21$secti = _this$content21.section10Component) === null || _this$content21$secti === void 0 ? void 0 : _this$content21$secti.data) || [];
    },
    section11Data() {
      var _this$content22, _this$content22$secti;
      return ((_this$content22 = this.content) === null || _this$content22 === void 0 ? void 0 : (_this$content22$secti = _this$content22.section11Component) === null || _this$content22$secti === void 0 ? void 0 : _this$content22$secti.data) || {};
    },
    logoSliders() {
      var _this$content23, _this$content23$logoS, _this$content23$logoS2, _this$content23$logoS3;
      return ((_this$content23 = this.content) === null || _this$content23 === void 0 ? void 0 : (_this$content23$logoS = _this$content23.logoSlider) === null || _this$content23$logoS === void 0 ? void 0 : (_this$content23$logoS2 = _this$content23$logoS.data) === null || _this$content23$logoS2 === void 0 ? void 0 : (_this$content23$logoS3 = _this$content23$logoS2.attributes) === null || _this$content23$logoS3 === void 0 ? void 0 : _this$content23$logoS3.logoUrls) || [];
    },
    readyToTalkForm() {
      var _this$content24, _this$content24$ready, _this$content24$ready2;
      return ((_this$content24 = this.content) === null || _this$content24 === void 0 ? void 0 : (_this$content24$ready = _this$content24.readyToTalkForm) === null || _this$content24$ready === void 0 ? void 0 : (_this$content24$ready2 = _this$content24$ready.data) === null || _this$content24$ready2 === void 0 ? void 0 : _this$content24$ready2.attributes) || {
        services: {
          data: []
        }
      };
    },
    activeCategorySampleData() {
      var _this$activeCategoryD, _this$activeCategoryD2, _this$activeCategoryD3, _this$content25, _this$content25$secti, _this$content25$secti2, _this$content25$secti3, _this$content25$secti4;
      return ((_this$activeCategoryD = this.activeCategoryData) === null || _this$activeCategoryD === void 0 ? void 0 : (_this$activeCategoryD2 = _this$activeCategoryD.attributes) === null || _this$activeCategoryD2 === void 0 ? void 0 : (_this$activeCategoryD3 = _this$activeCategoryD2.sampleWorks) === null || _this$activeCategoryD3 === void 0 ? void 0 : _this$activeCategoryD3.data) || ((_this$content25 = this.content) === null || _this$content25 === void 0 ? void 0 : (_this$content25$secti = _this$content25.section3Component) === null || _this$content25$secti === void 0 ? void 0 : (_this$content25$secti2 = _this$content25$secti.data[0]) === null || _this$content25$secti2 === void 0 ? void 0 : (_this$content25$secti3 = _this$content25$secti2.attributes) === null || _this$content25$secti3 === void 0 ? void 0 : (_this$content25$secti4 = _this$content25$secti3.sampleWorks) === null || _this$content25$secti4 === void 0 ? void 0 : _this$content25$secti4.data) || [];
    }
  },
  mounted() {
    var _this$content26, _this$content26$secti, _this$content26$secti2, _this$content26$secti3, _this$content26$secti4, _this$content27, _this$content28;
    this.activeCategoryData = ((_this$content26 = this.content) === null || _this$content26 === void 0 ? void 0 : (_this$content26$secti = _this$content26.section3Component) === null || _this$content26$secti === void 0 ? void 0 : (_this$content26$secti2 = _this$content26$secti.data[0]) === null || _this$content26$secti2 === void 0 ? void 0 : (_this$content26$secti3 = _this$content26$secti2.attributes) === null || _this$content26$secti3 === void 0 ? void 0 : (_this$content26$secti4 = _this$content26$secti3.sampleWorks) === null || _this$content26$secti4 === void 0 ? void 0 : _this$content26$secti4.data[0]) || {};
    if ((_this$content27 = this.content) !== null && _this$content27 !== void 0 && _this$content27.tabs && typeof ((_this$content28 = this.content) === null || _this$content28 === void 0 ? void 0 : _this$content28.tabs) === 'object') {
      var _this$content29;
      let count = 0;
      (_this$content29 = this.content) === null || _this$content29 === void 0 ? true : delete _this$content29.tabs.id;
      for (const value in (_this$content30 = this.content) === null || _this$content30 === void 0 ? void 0 : _this$content30.tabs) {
        var _this$content30, _this$content31;
        this.tabs[count].title = (_this$content31 = this.content) === null || _this$content31 === void 0 ? void 0 : _this$content31.tabs[value];
        count += 1;
      }
    }
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
// CONCATENATED MODULE: ./components/base/base-service-pages.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_base_service_pagesvue_type_script_lang_js_ = (base_service_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/base/base-service-pages.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_base_service_pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "75d17c8b"
  
)

/* harmony default export */ var base_service_pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommonBannerTab: __webpack_require__(161).default,CommonDynamicQuestionnaire: __webpack_require__(187).default,CommonCompanyOverview: __webpack_require__(199).default,CommonContactUs: __webpack_require__(139).default,CommonCategorySlider: __webpack_require__(188).default,CommonVenturePlans: __webpack_require__(200).default,CommonFeaturedServices: __webpack_require__(172).default,HomePrivatePlacement: __webpack_require__(180).default,CommonTellMoreAboutProjects: __webpack_require__(177).default,CommonClientWords: __webpack_require__(169).default,CommonToggleContent: __webpack_require__(149).default,CommonInterestedService: __webpack_require__(145).default,CommonOurTeam: __webpack_require__(174).default,CommonFaq: __webpack_require__(168).default,CommonBrandLogo: __webpack_require__(164).default,CommonReadytotalk: __webpack_require__(140).default,CommonModal: __webpack_require__(189).default})


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-single-insights.vue?vue&type=template&id=1391cf89&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.content)?_c('div',[_vm._ssrNode("<section class=\"relative bg-white\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2\">","</div>",[_vm._ssrNode("<div class=\"pb-[46px] pt-7 md:pt-[136px]\"><p class=\"mb-5 border-l-[3px] border-primary pl-2.5 text-sm font-[1.2rem] font-normal leading-3 text-[#030303] md:text-base md:leading-5\">Insights</p> <h4 class=\"text-[50px] font-bold leading-[44px] text-[#030303]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerTitle))+"</h4> <p class=\"mt-4 font-[1.3rem] leading-[26px] text-[#030303]\">"+_vm._ssrEscape(_vm._s(_vm.content.bannerSubtitle))+"</p></div> "),_vm._ssrNode("<div class=\"relative bottom-0 left-[-50vw] top-0 ml-[50%] h-80 w-[100vw] max-w-none md:absolute md:left-[calc(50%+2.5rem)] md:ml-0 md:mt-0 md:h-full md:w-[calc(50vw-2.5rem)]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover",attrs:{"format":"webp","src":_vm.content.bannerImgUrl,"alt":_vm.content.bannerTitle,"loading":"lazy"}})],1)],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white pb-[90px] pt-[53px]\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 gap-7 md:gap-[59px] lg:grid-cols-5\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"flex flex-wrap items-end gap-5 pb-5 lg:block lg:pb-0\">","</div>",_vm._l((_vm.section1Column1Data),function(author,i){return _vm._ssrNode("<div"+(_vm._ssrClass("shrink-0 border-[#e8e8e8] lg:border-t",{ 'lg:pt-[29px]': i !== 0 }))+">","</div>",[_vm._ssrNode(((i === 0)?("<h4 class=\"pt-8 font-semibold leading-[22px]\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column1Title))+"</h4>"):"<!---->")+" "),_vm._ssrNode("<div class=\"mt-[5px]\">","</div>",[_c('nuxt-img',{staticClass:"h-24 w-24 rounded-[5px] object-cover shadow-[0_3px_6px_rgba(0,0,0,0.44)]",attrs:{"format":"webp","src":author.attributes.imageUrl,"alt":author.attributes.authorName,"loading":"lazy"}})],1),_vm._ssrNode(" <p class=\"mt-3 leading-[22px]\">"+_vm._ssrEscape(_vm._s(author.attributes.authorName))+"</p> <p class=\"mt-[3px] text-sm leading-[13px] text-[#707070]\">"+_vm._ssrEscape(_vm._s(author.attributes.authorDesignation))+"</p> "),_vm._ssrNode("<ul class=\"mb-[5px] mt-1 flex items-center gap-[6px]\">","</ul>",[_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a target=\"_blank\""+(_vm._ssrAttr("href",author.attributes.linkedinUrl))+" class=\"flex h-6 w-6 items-center rounded-full bg-[#f4f5f7]\">","</a>",[_c('icons-linkedin',{staticClass:"mx-auto h-[15px] w-[15px] text-primary"})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li>","</li>",[_vm._ssrNode("<a target=\"_blank\""+(_vm._ssrAttr("href",author.attributes.instagramUrl))+" class=\"flex h-6 w-6 items-center rounded-full bg-[#f4f5f7]\">","</a>",[_c('icons-instagram',{staticClass:"mx-auto h-[15px] w-[15px] text-primary"})],1)])],2)],2)}),0),_vm._ssrNode(" <div class=\"mb-4 border-t border-[#e8e8e8] pt-[29px]\"><div class=\"mt-[5px]\"><a"+(_vm._ssrAttr("href",_vm.content.section1Column1ButtonLink))+" class=\"outline-btn rounded-[11px] border-[#d5d5d5] px-8 text-[15px] font-semibold uppercase leading-5 text-primary\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column1ButtonText))+"</a></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"lg:col-span-3\">","</div>",[_vm._ssrNode("<div class=\"pb-[5px]\">To listen to the article press play</div> "+((_vm.content.audioFileUrl)?("<audio controls=\"controls\" class=\"w-full\"><source"+(_vm._ssrAttr("src",_vm.content.audioFileUrl))+" type=\"audio/ogg\"> <source"+(_vm._ssrAttr("src",_vm.content.audioFileUrl))+" type=\"audio/mpeg\"></audio>"):"<!---->")+" <div class=\"mb-[17px] mt-[37px] block h-[2px] w-full bg-primary\"></div> <div><h4 class=\"font-semibold\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column2Title))+"</h4></div> "),(typeof _vm.content.section1Column2Description === 'string')?_vm._ssrNode("<div class=\"mt-4 space-y-[29px]\">","</div>",_vm._l((_vm.content.section1Column2Description.split("\n\n")),function(section,i){return _vm._ssrNode("<div class=\"flex items-start gap-[15px]\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('icons-arrow-up',{staticClass:"inline-block rotate-90 text-primary"})],1),_vm._ssrNode(" <p class=\"max-w-[445px] flex-1 text-lg leading-[22px] -tracking-[0.04px] text-black\">"+_vm._ssrEscape("\n                                "+_vm._s(section)+"\n                            ")+"</p>")],2)}),0):_vm._e(),_vm._ssrNode(" <div class=\"mt-[42px] bg-[#f4f5f7] p-7\"><div class=\"items-center gap-2 md:flex\"><p class=\"text-xl leading-6 -tracking-[0.04px]\">"+_vm._ssrEscape(_vm._s(_vm.content.CTA1Description))+"</p> <div class=\"mt-3 shrink-0 md:mt-0\"><a"+(_vm._ssrAttr("href",_vm.content.CTA1ButtonLink))+" class=\"btn rounded-[3px] px-[34px] py-[18px] text-sm font-semibold uppercase text-[#fdfeff]\">"+_vm._ssrEscape(_vm._s(_vm.content.CTA1ButtonText))+"</a></div></div></div> "),_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.content.img1Url ? 'py-[35px]' : 'pt-[35px]'))+">","</div>",[_c('common-custom-strapi-display',{attrs:{"classes":"text-base leading-[30px] -tracking-[0.03px] text-black text-lg","data":_vm.content.section2Paragraph}})],1),_vm._ssrNode(" "+((_vm.content.img1Url)?("<div class=\"block h-10 w-full bg-[#e8e8e8]\"></div>"):"<!---->")+" "),(_vm.content.img1Url)?_vm._ssrNode("<div class=\"my-[18px] mt-[18px] border-b-2 border-t-2 border-[#e8e8e8] py-[17px]\">","</div>",[_vm._ssrNode("<div class=\"px-[23px]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between\">","</div>",[_vm._ssrNode("<p class=\"text-[14px] leading-[22px] -tracking-[0.03px] text-primary\">Figure 1</p> "),_c('common-share',{attrs:{"is-show-save-btn":true,"insights":true}})],2),_vm._ssrNode(" <div class=\"mt-2 text-[20px] font-semibold leading-7\"><p>"+_vm._ssrEscape(_vm._s(_vm.content.img1Description))+"</p></div>")],2),_vm._ssrNode(" "),_c('nuxt-img',{staticClass:"my-10 w-full",attrs:{"format":"webp","src":_vm.content.img1Url,"alt":"Figure 1","loading":"lazy"}})],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-y-9 pt-[18px]\">","</div>",[_c('common-custom-strapi-display',{attrs:{"classes":"text-lg","data":_vm.content.section3Paragraph}}),_vm._ssrNode(" "),_c('common-custom-strapi-display',{attrs:{"classes":"text-lg","data":_vm.content.section4Paragraph}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"space-y-4 border-b border-t border-[#e8e8e8] pb-[45px] pt-4\"><p class=\"font-semibold leading-[22px] -tracking-[0.03px]\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column3Title))+"</p> <p class=\"leading-[22px] -tracking-[0.03px]\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column3Description))+"</p></div> "),_vm._ssrNode("<div class=\"mt-[30px]\">","</div>",[_c('common-share',{attrs:{"is-show-save-btn":false}})],1),_vm._ssrNode(" <div class=\"mt-[58px]\">"+((_vm.content.publishedAt)?("<p class=\"font-medium text-[#707070]\">"+_vm._ssrEscape(_vm._s(_vm.content.section1Column3InfoLeft)+" | "+_vm._s(_vm.content.section1Column3InfoRight))+"</p>"):"<!---->")+"</div> "),(_vm.insightPost1)?_vm._ssrNode("<div class=\"mt-[51px]\">","</div>",[_vm._ssrNode("<div class=\"border border-[#f4f5f7]\">","</div>",[_vm._ssrNode("<p class=\"px-[13px] py-[15px] text-lg font-medium leading-7 text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost1.Insightsource))+"</p> "),_c('nuxt-img',{attrs:{"format":"webp","src":_vm.insightPost1.imgUrl,"alt":_vm.insightPost1.title,"loading":"lazy"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-[13px] py-[15px]\">","</div>",[_vm._ssrNode("<p class=\"mb-2 line-clamp-2 text-sm font-semibold text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost1.title))+"</p> <p class=\"line-clamp-3 text-sm leading-[21px] -tracking-[0.03px] text-[#767677]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost1.paragraph))+"</p> "),_vm._ssrNode("<div class=\"mt-2\">","</div>",[_c('nuxt-link',{staticClass:"text-sm font-medium leading-3 text-primary hover:text-primary-700",attrs:{"to":("/insights/" + (_vm.insightPost1.singleInsightPageSlug))}},[_vm._v("More")])],1)],2)],2)]):_vm._e()],2)],2)])]),_vm._ssrNode(" "),_c('common-contact-us',{attrs:{"video-thumbnail-u-r-l":_vm.content.video1ThumbnailUrl,"video-u-r-l":_vm.content.video1Url,"button-title":_vm.content.video1ButtonText,"button-u-r-l":_vm.content.video1ButtonLink,"title":_vm.content.video1Title}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white pb-[90px] pt-[66px]\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 gap-7 md:gap-[59px] lg:grid-cols-5\">","</div>",[_vm._ssrNode("<div></div> "),_vm._ssrNode("<div class=\"lg:col-span-3\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.content.img2Url ? 'pb-[35px]' : 'pb-2'))+">","</div>",[_c('common-custom-strapi-display',{attrs:{"classes":"text-base leading-[30px] -tracking-[0.03px] text-black text-lg","data":_vm.content.section5Paragraph}})],1),_vm._ssrNode(" "+((_vm.content.img2Url)?("<div class=\"block h-10 w-full bg-[#e8e8e8]\"></div>"):"<!---->")+" "),(_vm.content.img2Url)?_vm._ssrNode("<div class=\"my-[18px] mt-[18px] border-b-2 border-t-2 border-[#e8e8e8] py-[17px]\">","</div>",[_vm._ssrNode("<div class=\"px-[23px]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between\">","</div>",[_vm._ssrNode("<p class=\"text-[14px] leading-[22px] -tracking-[0.03px] text-primary\">Figure 2</p> "),_c('common-share',{attrs:{"is-show-save-btn":true,"insight-page":true}})],2),_vm._ssrNode(" <div class=\"mt-2 text-[20px] font-semibold leading-7\"><p>"+_vm._ssrEscape(_vm._s(_vm.content.img2Description))+"</p></div>")],2),_vm._ssrNode(" "),_c('nuxt-img',{staticClass:"my-10 w-full",attrs:{"format":"webp","src":_vm.content.img2Url,"alt":"Figure 2","loading":"lazy"}})],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-y-9 pt-[18px]\">","</div>",[_c('common-custom-strapi-display',{attrs:{"classes":"text-lg","data":_vm.content.section6Paragraph}}),_vm._ssrNode(" "),_c('common-custom-strapi-display',{attrs:{"classes":"text-lg","data":_vm.content.section7Paragraph}})],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[(_vm.insightPost2)?_vm._ssrNode("<div class=\"mt-[51px]\">","</div>",[_vm._ssrNode("<div class=\"border border-[#f4f5f7]\">","</div>",[_vm._ssrNode("<p class=\"px-[13px] py-[15px] text-lg font-medium leading-7 text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost2.Insightsource))+"</p> "),_c('nuxt-img',{attrs:{"format":"webp","src":_vm.insightPost2.imgUrl,"alt":_vm.insightPost2.title,"loading":"lazy"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-[13px] py-[15px]\">","</div>",[_vm._ssrNode("<p class=\"mb-2 line-clamp-2 text-sm font-semibold text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost2.title))+"</p> <p class=\"line-clamp-3 text-sm leading-[21px] -tracking-[0.03px] text-[#767677]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost2.paragraph))+"</p> "),_vm._ssrNode("<div class=\"mt-2\">","</div>",[_c('nuxt-link',{staticClass:"text-sm font-medium leading-3 text-primary hover:text-primary-700",attrs:{"to":("/insights/" + (_vm.insightPost2.singleInsightPageSlug))}},[_vm._v("More")])],1)],2)],2)]):_vm._e()])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-[45px] grid grid-cols-1 gap-7 md:gap-[59px] lg:grid-cols-5\">","</div>",[_vm._ssrNode("<div></div> "),_vm._ssrNode("<div class=\"lg:col-span-3\">","</div>",[_vm._ssrNode(((_vm.content.img3Url)?("<div class=\"block h-10 w-full bg-[#e8e8e8]\"></div>"):"<!---->")+" "),(_vm.content.img3Url)?_vm._ssrNode("<div class=\"my-[18px] mt-[18px] border-b-2 border-t-2 border-[#e8e8e8] py-[17px]\">","</div>",[_vm._ssrNode("<div class=\"px-[23px]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between\">","</div>",[_vm._ssrNode("<p class=\"text-[14px] leading-[22px] -tracking-[0.03px] text-primary\">Figure 3</p> "),_c('common-share',{attrs:{"is-show-save-btn":true,"insight-page":true}})],2),_vm._ssrNode(" <div class=\"mt-2 text-[20px] font-semibold leading-7\"><p>"+_vm._ssrEscape(_vm._s(_vm.content.img3Description))+"</p></div>")],2),_vm._ssrNode(" "),_c('nuxt-img',{staticClass:"my-10 w-full",attrs:{"format":"webp","src":_vm.content.img3Url,"alt":"Figure 3","loading":"lazy"}})],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"space-y-9\">","</div>",[_c('common-custom-strapi-display',{attrs:{"classes":"text-lg","data":_vm.content.section8Paragraph}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[(_vm.insightPost3)?_vm._ssrNode("<div class=\"mt-[51px]\">","</div>",[_vm._ssrNode("<div class=\"border border-[#f4f5f7]\">","</div>",[_vm._ssrNode("<p class=\"px-[13px] py-[15px] text-lg font-medium leading-7 text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost3.Insightsource))+"</p> "),_c('nuxt-img',{attrs:{"format":"webp","src":_vm.insightPost3.imgUrl,"alt":_vm.insightPost3.title,"loading":"lazy"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-[13px] py-[15px]\">","</div>",[_vm._ssrNode("<p class=\"mb-2 line-clamp-2 text-sm font-semibold text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost3.title))+"</p> <p class=\"line-clamp-3 text-sm leading-[21px] -tracking-[0.03px] text-[#767677]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost3.paragraph))+"</p> "),_vm._ssrNode("<div class=\"mt-2\">","</div>",[_c('nuxt-link',{staticClass:"text-sm font-medium leading-3 text-primary hover:text-primary-700",attrs:{"to":("/insights/" + (_vm.insightPost3.singleInsightPageSlug))}},[_vm._v("More")])],1)],2)],2)]):_vm._e()])],2)],2)]),_vm._ssrNode(" "),_c('common-client-words',{attrs:{"title":_vm.content.section9Title,"description":_vm.content.section9Description,"testimonials":_vm.section9Data}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white pb-[206px] pt-[83px]\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 gap-7 md:gap-[59px] lg:grid-cols-5\">","</div>",[_vm._ssrNode("<div></div> "),_vm._ssrNode("<div class=\"lg:col-span-3\">","</div>",[_vm._ssrNode("<div class=\"block h-[2px] w-full bg-primary\"></div> "),_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 text-[28px] font-medium leading-9 text-lg","data":_vm.content.section10Title}}),_vm._ssrNode(" "),_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px] text-lg","data":_vm.content.section10Description}}),_vm._ssrNode(" "),_c('common-custom-strapi-display',{attrs:{"classes":"mt-[58px] text-[28px] font-medium leading-9 text-lg","data":_vm.content.section11Title}}),_vm._ssrNode(" "),_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px] text-lg","data":_vm.content.section11Description}})],2),_vm._ssrNode(" <div></div>")],2)])]),_vm._ssrNode(" "),_c('common-interested-service',{attrs:{"background-image":_vm.content.CTA2ImgUrl,"subtitle":_vm.content.CTA2Subtitle,"title":_vm.content.CTA2Title,"description":_vm.content.CTA2Description,"button-link":_vm.content.CTA2ButtonLink,"button-title":_vm.content.CTA2ButtonText}}),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"bg-white pb-[95px] pt-[58px]\">","</section>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 items-center gap-7 md:gap-[59px] lg:grid-cols-5\">","</div>",[_vm._ssrNode("<div></div> "),_vm._ssrNode("<div class=\"lg:col-span-3\">","</div>",[_vm._ssrNode("<div class=\"block h-[2px] w-full bg-primary\"></div> "+((_vm.content.section12Title)?("<p class=\"mt-4 text-[28px] font-medium leading-9\">"+_vm._ssrEscape(_vm._s(_vm.content.section12Title))+"</p>"):"<!---->")+" "),(_vm.content.section12Description)?_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px] text-lg","data":_vm.content.section12Description}}):_vm._e(),_vm._ssrNode(" "+((_vm.content.section13Title)?("<p class=\"mt-[58px] text-[28px] font-medium leading-9\">"+_vm._ssrEscape(_vm._s(_vm.content.section13Title))+"</p>"):"<!---->")+" "),(_vm.content.section13Description)?_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px] text-lg","data":_vm.content.section13Description}}):_vm._e(),_vm._ssrNode(" "+((_vm.content.section13Title)?("<p class=\"mt-[58px] text-[28px] font-medium leading-9\">"+_vm._ssrEscape(_vm._s(_vm.content.section13Title))+"</p>"):"<!---->")+" "),(_vm.content.section13Description)?_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px] text-lg","data":_vm.content.section13Description}}):_vm._e(),_vm._ssrNode(" "+((_vm.content.Section14Title)?("<p class=\"mt-[58px] text-[28px] font-medium leading-9\">"+_vm._ssrEscape(_vm._s(_vm.content.Section14Title))+"</p>"):"<!---->")+" "),(_vm.content.Section14Description)?_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px] text-lg","data":_vm.content.Section14Description}}):_vm._e(),_vm._ssrNode(" "+((_vm.content.Section15Title)?("<p class=\"mt-[58px] text-[28px] font-medium leading-9\">"+_vm._ssrEscape(_vm._s(_vm.content.Section15Title))+"</p>"):"<!---->")+" "),(_vm.content.section15Description)?_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px] text-lg","data":_vm.content.section15Description}}):_vm._e(),_vm._ssrNode(" "+((_vm.content.section16Title)?("<p class=\"mt-[58px] text-[28px] font-medium leading-9\">"+_vm._ssrEscape(_vm._s(_vm.content.section16Title))+"</p>"):"<!---->")+" "),(_vm.content.Section16Description)?_c('common-custom-strapi-display',{attrs:{"classes":"mt-4 leading-[30px] -tracking-[0.03px] text-lg","data":_vm.content.Section16Description}}):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div>","</div>",[(_vm.insightPost4)?_vm._ssrNode("<div class=\"mt-[51px]\">","</div>",[_vm._ssrNode("<div class=\"border border-[#f4f5f7]\">","</div>",[_vm._ssrNode("<p class=\"px-[13px] py-[15px] text-lg font-medium leading-7 text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost4.Insightsource))+"</p> "),_c('nuxt-img',{attrs:{"format":"webp","src":_vm.insightPost4.imgUrl,"alt":_vm.insightPost4.title,"loading":"lazy"}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"px-[13px] py-[15px]\">","</div>",[_vm._ssrNode("<p class=\"mb-2 line-clamp-2 text-sm font-semibold text-[#202a36]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost4.title))+"</p> <p class=\"line-clamp-3 text-sm leading-[21px] -tracking-[0.03px] text-[#767677]\">"+_vm._ssrEscape(_vm._s(_vm.insightPost4.paragraph))+"</p> "),_vm._ssrNode("<div class=\"mt-2\">","</div>",[_c('nuxt-link',{staticClass:"text-sm font-medium leading-3 text-primary hover:text-primary-700",attrs:{"to":("/insights/" + (_vm.insightPost4.singleInsightPageSlug))}},[_vm._v("More")])],1)],2)],2)]):_vm._e()])],2)])]),_vm._ssrNode(" "),_c('common-readytotalk',{attrs:{"img-url":_vm.readyToTalkForm.imgUrl,"service-options":_vm.readyToTalkForm.services.data,"about-paragraph":_vm.readyToTalkForm.aboutParagraph,"title":_vm.readyToTalkForm.title,"talk-in-title":_vm.readyToTalkForm.talkInTitle}})],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/base/base-single-insights.vue?vue&type=template&id=1391cf89&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/base/base-single-insights.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var base_single_insightsvue_type_script_lang_js_ = ({
  props: {
    content: {
      type: Object,
      default: () => {
        return null;
      }
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
  }
});
// CONCATENATED MODULE: ./components/base/base-single-insights.vue?vue&type=script&lang=js&
 /* harmony default export */ var base_base_single_insightsvue_type_script_lang_js_ = (base_single_insightsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/base/base-single-insights.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  base_base_single_insightsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7eaff5df"
  
)

/* harmony default export */ var base_single_insights = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsLinkedin: __webpack_require__(144).default,IconsInstagram: __webpack_require__(203).default,IconsArrowUp: __webpack_require__(204).default,CommonCustomStrapiDisplay: __webpack_require__(150).default,CommonShare: __webpack_require__(143).default,CommonContactUs: __webpack_require__(139).default,CommonClientWords: __webpack_require__(169).default,CommonInterestedService: __webpack_require__(145).default,CommonReadytotalk: __webpack_require__(140).default})


/***/ }),
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/_slug/_slug1/index.vue?vue&type=template&id=dc530e44&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.content)?_vm._ssrNode("<div>","</div>",[(_vm.currentPage === 'about-page')?_c('base-about-page',{attrs:{"content":_vm.content}}):(_vm.currentPage === 'contact-us')?_c('base-contact-us',{attrs:{"content":_vm.content}}):(_vm.currentPage === 'divisions')?_c('base-divisions',{attrs:{"content":_vm.content}}):(_vm.currentPage === 'google-ad')?_c('base-google-ad',{attrs:{"content":_vm.content}}):(_vm.currentPage === 'founders-bio')?_c('base-founders-bio',{attrs:{"content":_vm.content}}):(_vm.currentPage === 'our-team')?_c('base-our-team',{attrs:{"content":_vm.content}}):(_vm.currentPage === 'service-pages')?_c('base-service-pages',{attrs:{"content":_vm.content}}):(_vm.currentPage === 'single-insights')?_c('base-single-insights',{attrs:{"content":_vm.content}}):_vm._e()],1):_vm._ssrNode("<div class=\"nuxt-error\">","</div>",[_vm._ssrNode("<section class=\"item-center flex min-h-[calc(100vh-530px)] flex-col justify-center\">","</section>",[_vm._ssrNode("<div class=\"container py-20 text-center\">","</div>",[_vm._ssrNode("<h1 class=\"my-5 text-4xl font-bold text-black/70\">An error occurred</h1> "),_c('nuxt-link',{staticClass:"text-primary hover:underline",attrs:{"to":_vm.localePath('/')}},[_vm._v("Home page")])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_slug/_slug1/index.vue?vue&type=template&id=dc530e44&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/_slug/_slug1/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var _slug1vue_type_script_lang_js_ = ({
  props: {
    name: {
      type: String,
      default: () => {
        return 'about-page';
      }
    }
  },
  async asyncData(context) {
    try {
      const baseURL = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/base-urls?populate=deep&filters[url][$eq]=${encodeURIComponent(context.route.path)}`);
      if (baseURL && baseURL.data && baseURL.data.data && Array.isArray(baseURL.data.data) && baseURL.data.data.length > 0 && baseURL.data.data[0].attributes && baseURL.data.data[0].attributes.slug && baseURL.data.data[0].attributes.template && baseURL.data.data[0].attributes.template.data && baseURL.data.data[0].attributes.template.data.attributes && baseURL.data.data[0].attributes.template.data.attributes.identifier) {
        const currentPage = baseURL.data.data[0].attributes.template.data.attributes.identifier;
        let apiID = '';
        if (currentPage === 'divisions') {
          apiID = 'divisions-templates';
        } else if (currentPage === 'about-page') {
          apiID = 'about-page-templates';
        } else if (currentPage === 'contact-us') {
          apiID = 'contact-us-templates';
        } else if (currentPage === 'founders-bio') {
          apiID = 'founder-page-templates';
        } else if (currentPage === 'google-ad') {
          apiID = 'google-ad-templates';
        } else if (currentPage === 'our-team') {
          apiID = 'our-team-page-templates';
        } else if (currentPage === 'service-pages') {
          apiID = 'service-page-templates';
        } else if (currentPage === 'single-insights') {
          apiID = 'insight-single-insight-pages';
        }
        const data = await context.$strapiInstance.get(`${context.$config.strapi.url}/api/${apiID}?filters[slug][$eq]=${baseURL.data.data[0].attributes.slug}&populate=deep`);
        return {
          content: context.$helper.parseData(data.data.data[0]),
          currentPage,
          baseURL: baseURL.data.data[0].attributes
        };
      } else {
        return {
          content: null,
          currentPage: ''
        };
      }
    } catch (e) {
      console.error('Error', e);
    }
  },
  data() {
    return {
      baseTemplates: ['about-page', 'contact-us', 'divisions', 'founders-bio', 'google-ad', 'our-team', 'service-pages', 'single-insights']
    };
  },
  head() {
    return {
      title: this.content ? 'Venture Plans' : 'Page not found',
      meta: this.content ? [] : [{
        hid: 'robots',
        name: 'robots',
        content: 'noindex'
      }]
    };
  }
});
// CONCATENATED MODULE: ./pages/_slug/_slug1/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var _slug_slug1vue_type_script_lang_js_ = (_slug1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/_slug/_slug1/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _slug_slug1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5cde80fd"
  
)

/* harmony default export */ var _slug1 = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {BaseAboutPage: __webpack_require__(217).default,BaseContactUs: __webpack_require__(225).default,BaseDivisions: __webpack_require__(226).default,BaseGoogleAd: __webpack_require__(227).default,BaseFoundersBio: __webpack_require__(228).default,BaseOurTeam: __webpack_require__(229).default,BaseServicePages: __webpack_require__(230).default,BaseSingleInsights: __webpack_require__(231).default})


/***/ })
]);;
//# sourceMappingURL=index.js.map