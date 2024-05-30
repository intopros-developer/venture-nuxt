exports.ids = [56,44,86,111];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=home-about-client.js.map