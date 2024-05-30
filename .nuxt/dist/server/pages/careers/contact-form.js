exports.ids = [130,21,97,109,115];
exports.modules = {

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alphaNumericSpace; });
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);

const alphaNumericSpace = vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["helpers"].regex('alpha', /^[0-9a-zA-Z\s]*$/);


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

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(268);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("3557c460", content, true, context)
};

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-upload.vue?vue&type=template&id=19d95f24&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"inline-block",attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"10","height":"8","fill":"currentColor","stroke-width":"0.1","stroke":"currentColor","viewBox":"0 0 10 8"}},[_vm._ssrNode("<g><g><g><path d=\"M4.815 4.825l1.46 1.587h-.84a.219.219 0 0 0-.22.22v.834h-.8V6.63a.219.219 0 0 0-.219-.219h-.841zm-.017-.54a.219.219 0 0 0-.143.072L2.698 6.48a.219.219 0 0 0 .16.37h1.12v.834c0 .12.097.219.218.219h1.238c.121 0 .22-.098.22-.22V6.85h1.118a.219.219 0 0 0 .16-.37L4.977 4.358a.219.219 0 0 0-.178-.072zM6.283.46c-.706 0-1.31.376-1.676.93a1.886 1.886 0 0 0-.886-.236c-.997 0-1.81.76-1.943 1.738C.788 2.893 0 3.75 0 4.794c0 1.044.786 1.912 1.778 1.912a.219.219 0 1 0 0-.437c-.736 0-1.34-.648-1.34-1.475 0-.826.602-1.463 1.34-1.463h.192a.219.219 0 0 0 .219-.212c.026-.854.7-1.526 1.532-1.526.312 0 .591.092.834.257a.219.219 0 0 0 .318-.08C5.146 1.25 5.67.9 6.283.9c.886 0 1.614.738 1.614 1.655 0 .174-.028.337-.079.5A.219.219 0 0 0 8 3.337c.665.08 1.193.687 1.193 1.457 0 .827-.604 1.475-1.34 1.475a.219.219 0 1 0 0 .437c.992 0 1.778-.868 1.778-1.912 0-.89-.572-1.64-1.358-1.843.027-.13.062-.256.062-.397 0-1.15-.922-2.093-2.052-2.093z\"></path></g></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-upload.vue?vue&type=template&id=19d95f24&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-upload.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4b56d656"
  
)

/* harmony default export */ var icons_upload = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_form_vue_vue_type_style_index_0_id_8b5eb2a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(244);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_form_vue_vue_type_style_index_0_id_8b5eb2a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_form_vue_vue_type_style_index_0_id_8b5eb2a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_form_vue_vue_type_style_index_0_id_8b5eb2a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_contact_form_vue_vue_type_style_index_0_id_8b5eb2a6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slide-fade-enter-active[data-v-8b5eb2a6],.slide-fade-leave-active[data-v-8b5eb2a6]{transition:opacity .3s}.slide-fade-enter[data-v-8b5eb2a6],.slide-fade-leave-to[data-v-8b5eb2a6]{opacity:0}.custom-multiselect .multiselect__content-wrapper[data-v-8b5eb2a6]{margin-top:10px!important}.custom-btn[data-v-8b5eb2a6]{max-width:100%!important;width:100%!important}.career-form-custom[data-v-8b5eb2a6]{max-width:90%!important}.custom-multiselect .multiselect__tags[data-v-8b5eb2a6]{padding:0!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/careers/contact-form.vue?vue&type=template&id=8b5eb2a6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"pt-8\" data-v-8b5eb2a6><div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\" data-v-8b5eb2a6><div class=\"grid grid-cols-1\" data-v-8b5eb2a6><div class=\"w-full rounded-full bg-white\" data-v-8b5eb2a6><div"+(_vm._ssrClass("rounded-full bg-primary p-0.5 text-center text-xs font-medium leading-none text-blue-100 text-white transition-all duration-300",{ 'bg-green': _vm.completedForm === 100, 'px-0': _vm.completedForm === 0 }))+(_vm._ssrStyle(null,{ width: (_vm.completedForm + "%") }, null))+" data-v-8b5eb2a6>"+_vm._ssrEscape("\n                        "+_vm._s((_vm.completedForm + "%"))+"\n                    ")+"</div></div></div></div></section> "),_vm._ssrNode("<section class=\"pb-[130px] pt-5 md:pt-[110px]\" data-v-8b5eb2a6>","</section>",[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\" data-v-8b5eb2a6>","</div>",[(_vm.currentStep <= 2)?_vm._ssrNode("<div class=\"justify-between gap-5 md:flex lg:gap-[103px]\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div class=\"grow\" data-v-8b5eb2a6>","</div>",[_c('nuxt-img',{staticClass:"mx-auto md:ml-0",attrs:{"format":"webp","src":"/assets/img/img-12.png","alt":"contact","loading":"lazy"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-full grow md:max-w-[396px]\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<form id=\"contact-form\" action data-v-8b5eb2a6>","</form>",[_vm._ssrNode("<h4 class=\"pb-3 text-2xl font-semibold uppercase -tracking-[0.03px] text-primary\" data-v-8b5eb2a6>"+_vm._ssrEscape(_vm._s(_vm.$t('about_you')))+"</h4> "),(_vm.currentStep === 1)?_vm._ssrNode("<div class=\"space-y-6 md:space-y-[42px]\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div data-v-8b5eb2a6><input type=\"text\" name=\"full_name\""+(_vm._ssrAttr("placeholder",_vm.$t('full_name')))+" autocomplete=\"on\""+(_vm._ssrAttr("value",(_vm.$v.params.full_name.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.params.full_name.$error }))+" data-v-8b5eb2a6></div> <div data-v-8b5eb2a6><input type=\"email\" name=\"email\""+(_vm._ssrAttr("placeholder",_vm.$t('your_email_address')))+" autocomplete=\"on\""+(_vm._ssrAttr("value",(_vm.$v.params.email.$model)))+(_vm._ssrClass("form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",{ error: _vm.$v.params.email.$error }))+" data-v-8b5eb2a6></div> "),_vm._ssrNode("<div data-v-8b5eb2a6>","</div>",[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.$v.params.phone.$model),expression:"$v.params.phone.$model"},{name:"mask",rawName:"v-mask",value:(_vm.$mask.phoneMask),expression:"$mask.phoneMask"}],staticClass:"form-input shadow-[0_3px_6px_rgba(0,0,0,0.16)]",class:{ error: _vm.$v.params.phone.$error },attrs:{"type":"text","name":"phone","placeholder":_vm.$t('phone_number'),"autocomplete":"on"},domProps:{"value":(_vm.$v.params.phone.$model)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.$v.params.phone, "$model", $event.target.value)}}},[])]),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-8b5eb2a6>","</div>",[_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closePositionDropdown),expression:"closePositionDropdown"}],staticClass:"group relative text-left"},[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div role=\"none\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none",{ 'border-[#f9ecea]  text-danger': _vm.$v.params.position.$error, 'rounded-b-none': _vm.isPositionDropdownOpen }))+" data-v-8b5eb2a6>","</div>",[_vm._ssrNode(_vm._ssrEscape("\n                                                "+_vm._s(_vm.positionsDropdownTitle)+"\n                                                ")),_c('icons-selection-arrow',{staticClass:"absolute right-[20px]",class:{ 'rotate-180': _vm.isPositionDropdownOpen, 'text-danger': _vm.$v.params.position.$error }})],2),_vm._ssrNode(" "),_c('Transition',{attrs:{"name":"slide-fade"}},[_c('multiselect',{directives:[{name:"show",rawName:"v-show",value:(_vm.isPositionDropdownOpen),expression:"isPositionDropdownOpen"}],ref:"multiselect",staticClass:"custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]",attrs:{"max-height":350,"option-height":45,"options":_vm.positionOptions,"show-no-results":false,"close-on-select":true,"show-labels":false,"search":false},on:{"select":_vm.closePositionDropdown},model:{value:(_vm.params.position),callback:function ($$v) {_vm.$set(_vm.params, "position", $$v)},expression:"params.position"}},[_c('template',{slot:"caret"},[_c('button',{staticClass:"pointer-events-none absolute right-0 top-0 mr-4 mt-4 xl:mt-[18px]",attrs:{"type":"submit"}},[_c('icons-search',{staticClass:"h-3 w-3 fill-current text-[#586376] xl:h-4 xl:w-4"})],1)])],2)],1)],2)])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"sm:flex\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div class=\"md:w-2/3\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div class=\"mb-5 flex\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<label class=\"w-1/2 grow\" data-v-8b5eb2a6>","</label>",[_vm._ssrNode("<div class=\"block\" data-v-8b5eb2a6><span class=\"text-[13px] text-[#0b0b0b]/70\" data-v-8b5eb2a6>"+_vm._ssrEscape(_vm._s(_vm.$t('upload_cover_letter'))+":")+"</span> <input type=\"file\" accept=\"image/*,.pdf\" class=\"hidden\" data-v-8b5eb2a6></div> "),_vm._ssrNode("<button type=\"button\""+(_vm._ssrClass("inline-block rounded-full border border-[#707070] px-3.5 text-[10px] font-medium leading-5 -tracking-[0.02px] text-[#0b0b0b]",{ error: _vm.$v.params.cover_letter.$error, 'border- !border-green bg-green/[0.15] !text-green': _vm.$v.params.cover_letter.$model }))+" data-v-8b5eb2a6>","</button>",[_c('icons-upload',{staticClass:"mr-[2px]",class:{ '!text-danger': _vm.$v.params.cover_letter.$error }}),_vm._ssrNode(_vm._ssrEscape(" "+_vm._s(_vm.$t('upload_file'))+"\n                                            "))],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"w-1/2 grow\" data-v-8b5eb2a6>","</label>",[_vm._ssrNode("<div class=\"block\" data-v-8b5eb2a6><span class=\"text-[13px] text-[#0b0b0b]/70\" data-v-8b5eb2a6>"+_vm._ssrEscape(_vm._s(_vm.$t('upload_diploma'))+":")+"</span> <input type=\"file\" accept=\"image/*,.pdf\" class=\"hidden\" data-v-8b5eb2a6></div> "),_vm._ssrNode("<button type=\"button\""+(_vm._ssrClass("inline-block rounded-full border border-[#707070] px-3.5 text-[10px] font-medium leading-5 -tracking-[0.02px] text-[#0b0b0b]",{ error: _vm.$v.params.diploma.$error, 'border- !border-green bg-green/[0.15] !text-green': _vm.$v.params.diploma.$model }))+" data-v-8b5eb2a6>","</button>",[_c('icons-upload',{staticClass:"mr-[2px]"}),_vm._ssrNode(_vm._ssrEscape(" "+_vm._s(_vm.$t('upload_file'))+"\n                                            "))],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<label class=\"w-1/2 grow\" data-v-8b5eb2a6>","</label>",[_vm._ssrNode("<div class=\"block\" data-v-8b5eb2a6><span class=\"text-[13px] text-[#0b0b0b]/70\" data-v-8b5eb2a6>"+_vm._ssrEscape(_vm._s(_vm.$t('upload_resume'))+":")+"</span> <input type=\"file\" accept=\"image/*,.pdf\" class=\"hidden\" data-v-8b5eb2a6></div> "),_vm._ssrNode("<button type=\"button\""+(_vm._ssrClass("inline-block rounded-full border border-[#707070] px-3.5 text-[10px] font-medium leading-5 -tracking-[0.02px] text-[#0b0b0b]",{ error: _vm.$v.params.resume.$error, 'border- !border-green bg-green/[0.15] !text-green': _vm.$v.params.resume.$model }))+" data-v-8b5eb2a6>","</button>",[_c('icons-upload',{staticClass:"mr-[2px]"}),_vm._ssrNode(_vm._ssrEscape(" "+_vm._s(_vm.$t('upload_file'))+"\n                                            "))],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<label class=\"w-1/2 grow\" data-v-8b5eb2a6>","</label>",[_vm._ssrNode("<div class=\"block\" data-v-8b5eb2a6><span class=\"text-[13px] text-[#0b0b0b]/70\" data-v-8b5eb2a6>"+_vm._ssrEscape(_vm._s(_vm.$t('connect_with_us')))+"</span></div> "),_vm._ssrNode("<a href=\"https://www.linkedin.com/company/31139649/\" target=\"_blank\" class=\"mt-1.5 block w-fit rounded-md bg-[#0288d1] px-[31px] py-[2px] text-white\" data-v-8b5eb2a6>","</a>",[_c('icons-linkedin',{staticClass:"h-4 w-4"})],1)],2)],2)],2),_vm._ssrNode(" <div class=\"pt-7 md:w-1/3\" data-v-8b5eb2a6><button type=\"submit\" class=\"b-btn w-auto !rounded px-[25px] py-1.5 text-sm\" data-v-8b5eb2a6>"+_vm._ssrEscape(_vm._s(_vm.$t('next')))+"</button></div>")],2)],2):(_vm.currentStep === 2)?_vm._ssrNode("<div class=\"space-y-5 md:space-y-[42px]\" data-v-8b5eb2a6>","</div>",[_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closeSchoolDropdown),expression:"closeSchoolDropdown"}],staticClass:"contact-form-search group relative text-left"},[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div role=\"none\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none",{ 'border-[#f9ecea]  text-danger': _vm.$v.params.school.$error, 'rounded-b-none': _vm.isSchoolDropdownOpen }))+" data-v-8b5eb2a6>","</div>",[_vm._ssrNode(_vm._ssrEscape("\n                                            "+_vm._s(_vm.schoolDropdownTitle)+"\n                                            ")),_c('icons-selection-arrow',{staticClass:"absolute right-[20px]",class:{ 'rotate-180': _vm.isSchoolDropdownOpen, 'text-danger': _vm.$v.params.school.$error }})],2),_vm._ssrNode(" "),_c('Transition',{attrs:{"name":"slide-fade"}},[_c('multiselect',{directives:[{name:"show",rawName:"v-show",value:(_vm.isSchoolDropdownOpen),expression:"isSchoolDropdownOpen"}],ref:"multiselect",staticClass:"custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs capitalize leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]",attrs:{"max-height":350,"option-height":45,"options":_vm.selectSchoolOptions,"show-no-results":false,"close-on-select":true,"show-labels":false,"search":false,"searchable":false},on:{"select":_vm.closeSchoolDropdown},model:{value:(_vm.params.school),callback:function ($$v) {_vm.$set(_vm.params, "school", $$v)},expression:"params.school"}})],1)],2)])]),_vm._ssrNode(" "),_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closeExperienceDropdown),expression:"closeExperienceDropdown"}],staticClass:"contact-form-search group relative text-left"},[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div role=\"none\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none",{ 'border-[#f9ecea]  text-danger': _vm.$v.params.do_you_have_at_least_years_of_experience.$error, 'rounded-b-none': _vm.isExperienceDropdownOpen }))+" data-v-8b5eb2a6>","</div>",[_vm._ssrNode(_vm._ssrEscape("\n                                            "+_vm._s(_vm.experienceDropdownTitle)+"\n                                            ")),_c('icons-selection-arrow',{staticClass:"absolute right-[20px]",class:{ 'rotate-180': _vm.isExperienceDropdownOpen, 'text-danger': _vm.$v.params.do_you_have_at_least_years_of_experience.$error }})],2),_vm._ssrNode(" "),_c('Transition',{attrs:{"name":"slide-fade"}},[_c('multiselect',{directives:[{name:"show",rawName:"v-show",value:(_vm.isExperienceDropdownOpen),expression:"isExperienceDropdownOpen"}],ref:"multiselect",staticClass:"custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs capitalize leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]",attrs:{"max-height":350,"option-height":45,"options":_vm.yearsOfExperienceOptions,"show-no-results":false,"close-on-select":true,"show-labels":false,"search":false,"searchable":false},on:{"select":_vm.closeExperienceDropdown},model:{value:(_vm.params.do_you_have_at_least_years_of_experience),callback:function ($$v) {_vm.$set(_vm.params, "do_you_have_at_least_years_of_experience", $$v)},expression:"params.do_you_have_at_least_years_of_experience"}})],1)],2)])]),_vm._ssrNode(" "),_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closeFlexibilityDropdown),expression:"closeFlexibilityDropdown"}],staticClass:"contact-form-search group relative text-left"},[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div role=\"none\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none",{ 'border-[#f9ecea]  text-danger': _vm.$v.params.geographic_flexibility.$error, 'rounded-b-none': _vm.isFlexibilityDropdownOpen }))+" data-v-8b5eb2a6>","</div>",[_vm._ssrNode(_vm._ssrEscape("\n                                            "+_vm._s(_vm.flexibilityDropdownTitle)+"\n                                            ")),_c('icons-selection-arrow',{staticClass:"absolute right-[20px]",class:{ 'rotate-180': _vm.isFlexibilityDropdownOpen, 'text-danger': _vm.$v.params.geographic_flexibility.$error }})],2),_vm._ssrNode(" "),_c('Transition',{attrs:{"name":"slide-fade"}},[_c('multiselect',{directives:[{name:"show",rawName:"v-show",value:(_vm.isFlexibilityDropdownOpen),expression:"isFlexibilityDropdownOpen"}],ref:"multiselect",staticClass:"custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs capitalize leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]",attrs:{"max-height":350,"option-height":45,"options":_vm.geographicFlexibilityOptions,"show-no-results":false,"close-on-select":true,"show-labels":false,"search":false,"searchable":false},on:{"select":_vm.closeFlexibilityDropdown},model:{value:(_vm.params.geographic_flexibility),callback:function ($$v) {_vm.$set(_vm.params, "geographic_flexibility", $$v)},expression:"params.geographic_flexibility"}})],1)],2)])]),_vm._ssrNode(" "),_c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.closeInternShipDropdown),expression:"closeInternShipDropdown"}],staticClass:"contact-form-search group relative text-left"},[_vm._ssrNode("<div class=\"shadow-[0px_3px_6px_rgba(0,0,0,0.16] origin-top-right\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div role=\"none\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("form-input inline-flex w-full flex-1 items-center rounded-md border border-white p-[18px] pr-10 leading-[13px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] hover:bg-primary hover:text-white hover:shadow-none",{ 'border-[#f9ecea]  text-danger': _vm.$v.params.are_you_interested_in_a_internship_program.$error, 'rounded-b-none': _vm.isInternShipDropdownOpen }))+" data-v-8b5eb2a6>","</div>",[_vm._ssrNode(_vm._ssrEscape("\n                                            "+_vm._s(_vm.internDropdownTitle)+"\n                                            ")),_c('icons-selection-arrow',{staticClass:"absolute right-[20px]",class:{ 'rotate-180': _vm.isInternShipDropdownOpen, 'text-danger': _vm.$v.params.are_you_interested_in_a_internship_program.$error }})],2),_vm._ssrNode(" "),_c('Transition',{attrs:{"name":"slide-fade"}},[_c('multiselect',{directives:[{name:"show",rawName:"v-show",value:(_vm.isInternShipDropdownOpen),expression:"isInternShipDropdownOpen"}],ref:"multiselect",staticClass:"custom-multiselect default-open-multiselect !absolute z-50 w-full whitespace-normal rounded rounded-t-none bg-white py-3 text-xs capitalize leading-[15px] text-[#586376] shadow-[0_3px_6px_rgba(0,0,0,0.16)] focus:outline-none xl:py-[15px] xl:text-sm xl:leading-[21px]",attrs:{"max-height":350,"option-height":45,"options":_vm.internshipProgramOptions,"show-no-results":false,"close-on-select":true,"show-labels":false,"search":false,"searchable":false},on:{"select":_vm.closeInternShipDropdown},model:{value:(_vm.params.are_you_interested_in_a_internship_program),callback:function ($$v) {_vm.$set(_vm.params, "are_you_interested_in_a_internship_program", $$v)},expression:"params.are_you_interested_in_a_internship_program"}})],1)],2)])]),_vm._ssrNode(" <div data-v-8b5eb2a6><button type=\"submit\" class=\"b-btn custom-btn inline-block !rounded px-9 py-4 text-[12px] font-bold\" data-v-8b5eb2a6>Book An Interview</button></div>")],2):_vm._e()],2)])],2):_vm._ssrNode("<div class=\"justify-between gap-5 space-y-4 md:flex md:space-y-0 lg:gap-[103px]\" data-v-8b5eb2a6>","</div>",[_vm._ssrNode("<div class=\"mb-5 w-full grow md:order-2 md:mb-0 md:max-w-[498px]\" data-v-8b5eb2a6>","</div>",[_c('nuxt-img',{staticClass:"mx-auto md:ml-0",attrs:{"src":"/assets/img/img-12.png","alt":"contact 2","loading":"lazy"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"w-full grow\" data-v-8b5eb2a6>","</div>",[_c('nuxt-img',{attrs:{"src":"/assets/img/congo-icon.svg","alt":"icon","loading":"lazy"}}),_vm._ssrNode(" <h2 class=\"mb-4 mt-3.5 text-base font-extrabold leading-[25px] text-[#707070] xl:mb-[30px] xl:text-[28px] xl:leading-[39px] [&>br]:hidden [&>br]:md:inline-block [&>span]:border-b-[5px] [&>span]:border-green [&>span]:text-green\" data-v-8b5eb2a6>"+(_vm._s(_vm.$t('congratulations_you_have_span_successfully_span_booked_your_interview')))+"</h2> <p class=\"[&>a]:leading-0 mb-6 text-sm font-medium -tracking-[0.04px] text-[#3c434e] xl:text-[21px] xl:leading-[27px] [&>a]:cursor-pointer [&>a]:underline\" data-v-8b5eb2a6>"+(_vm._s(_vm.$t('book_interview_in_career_contact_form_paragraph_1', { link: 'javascript:;', target: '' })))+"</p> "),_c('nuxt-link',{staticClass:"b-btn bg-[#00a1f1] py-4 text-xs uppercase lg:max-w-[250px]",attrs:{"to":_vm.localePath('/book-consult')}},[_vm._v("Book A Consultation")])],2)],2)])]),_vm._ssrNode(" "),_c('common-brand-logo')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/careers/contact-form.vue?vue&type=template&id=8b5eb2a6&scoped=true&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// EXTERNAL MODULE: external "vue-click-outside"
var external_vue_click_outside_ = __webpack_require__(129);
var external_vue_click_outside_default = /*#__PURE__*/__webpack_require__.n(external_vue_click_outside_);

// EXTERNAL MODULE: ./helper/custom-validations.js
var custom_validations = __webpack_require__(136);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/careers/contact-form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var contact_formvue_type_script_lang_js_ = ({
  directives: {
    ClickOutside: external_vue_click_outside_default.a
  },
  data() {
    return {
      currentStep: 1,
      captchaError: false,
      completedForm: 0,
      params: {
        full_name: '',
        email: '',
        phone: '',
        position: '',
        cover_letter: '',
        diploma: '',
        resume: '',
        school: '',
        do_you_have_at_least_years_of_experience: '',
        geographic_flexibility: '',
        are_you_interested_in_a_internship_program: ''
      },
      positionOptions: ['Business Consultant', 'Social Media Specialist/Content Writer', 'UX/UI Designer', 'Web Developer', 'Administrative Assistant', 'Sales Representative', 'other'],
      selectSchoolOptions: ['Harvard', 'MIT', 'Yale', 'Princeton', 'Berkeley', 'Columbia', 'Stanford', 'Ucla', 'Usc', 'Georgia Tech', 'Johns Hopkins University', 'New York University', 'Other'],
      yearsOfExperienceOptions: ['Yes', 'No'],
      geographicFlexibilityOptions: ['Yes', 'No'],
      internshipProgramOptions: ['Yes', 'No'],
      isSearchable: true,
      isPositionDropdownOpen: false,
      isSchoolDropdownOpen: false,
      isExperienceDropdownOpen: false,
      isFlexibilityDropdownOpen: false,
      isInternShipDropdownOpen: false,
      isOpen: false
    };
  },
  head() {
    var _this$content, _this$content$metaFie;
    return {
      title: 'Careers - Contact Form | Venture Plans',
      link: [{
        rel: 'canonical',
        href: (_this$content = this.content) !== null && _this$content !== void 0 && (_this$content$metaFie = _this$content.metaFields[0]) !== null && _this$content$metaFie !== void 0 && _this$content$metaFie.canonicalUrl ? (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.content.metaFields[0].canonicalUrl : (process.env.FE_BASE_URL ? process.env.FE_BASE_URL : 'https://www.ventureplans.us') + this.$route.path
      }],
      meta: [{
        name: 'robots',
        content: 'noindex'
      }]
    };
  },
  computed: {
    validationsObjects() {
      let validations = {};
      if (this.currentStep >= 1) {
        validations = Object.assign(validations, {
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
          position: {
            required: validators_["required"]
          },
          cover_letter: {},
          diploma: {},
          resume: {
            required: validators_["required"]
          }
        });
      }
      if (this.currentStep >= 2) {
        validations = Object.assign(validations, {
          school: {
            required: validators_["required"]
          },
          do_you_have_at_least_years_of_experience: {
            required: validators_["required"]
          },
          geographic_flexibility: {
            required: validators_["required"]
          },
          are_you_interested_in_a_internship_program: {
            required: validators_["required"]
          }
        });
      }
      return validations;
    },
    positionsDropdownTitle() {
      return !this.$helper.isEmpty(this.params.position) ? this.params.position : `Search available positions`;
    },
    schoolDropdownTitle() {
      return !this.$helper.isEmpty(this.params.school) ? this.params.school : `Select School`;
    },
    experienceDropdownTitle() {
      return !this.$helper.isEmpty(this.params.do_you_have_at_least_years_of_experience) ? this.params.do_you_have_at_least_years_of_experience : `Do you have at least 5 years of work experience?`;
    },
    flexibilityDropdownTitle() {
      return !this.$helper.isEmpty(this.params.geographic_flexibility) ? this.params.geographic_flexibility : `Geographic Flexibility`;
    },
    internDropdownTitle() {
      return !this.$helper.isEmpty(this.params.are_you_interested_in_a_internship_program) ? this.params.are_you_interested_in_a_internship_program : `Are you interested in internship program?`;
    }
  },
  watch: {
    params: {
      deep: true,
      handler() {
        this.completedForm = 0;
        if (!this.$helper.isEmpty(this.params.full_name) && !this.$v.params.full_name.$error) {
          this.completedForm += 11;
        }
        if (!this.$helper.isEmpty(this.params.email) && !this.$v.params.email.$error) {
          this.completedForm += 11;
        }
        if (!this.$helper.isEmpty(this.params.phone) && !this.$v.params.phone.$error) {
          this.completedForm += 11;
        }
        if (!this.$helper.isEmpty(this.params.position) && !this.$v.params.position.$error) {
          this.completedForm += 11;
        }
        if (typeof this.params.cover_letter === 'object' && !this.$v.params.cover_letter.$error) {
          // this.completedForm += 6.67;
        }
        if (typeof this.params.diploma === 'object' && !this.$v.params.diploma.$error) {
          // this.completedForm += 6.67;
        }
        if (typeof this.params.resume === 'object' && !this.$v.params.resume.$error) {
          this.completedForm += 11;
        }
        if (!this.$helper.isEmpty(this.params.school) && !this.$v.params.school.$error) {
          this.completedForm += 11;
        }
        if (!this.$helper.isEmpty(this.params.do_you_have_at_least_years_of_experience) && !this.$v.params.do_you_have_at_least_years_of_experience.$error) {
          this.completedForm += 11;
        }
        if (!this.$helper.isEmpty(this.params.geographic_flexibility) && !this.$v.params.geographic_flexibility.$error) {
          this.completedForm += 11;
        }
        if (!this.$helper.isEmpty(this.params.are_you_interested_in_a_internship_program) && !this.$v.params.are_you_interested_in_a_internship_program.$error) {
          this.completedForm += 12;
        }
      }
    }
  },
  validations() {
    return {
      params: {
        ...this.validationsObjects
      }
    };
  },
  mounted() {
    var _this$$route$query;
    // const multiTags = document.querySelector(".multiselect__tags")
    // if(multiTags){
    //     multiTags.style.paddingLeft = '0px'
    // }

    if (parseInt((_this$$route$query = this.$route.query) === null || _this$$route$query === void 0 ? void 0 : _this$$route$query.bookConsult) === 1) {
      this.currentStep = 3;
      this.$router.push(this.localePath('/careers/contact-form'));
    }
    if (window.innerWidth <= 768) {
      this.isSearchable = false;
    } else {
      this.isSearchable = true;
    }
  },
  methods: {
    // togglePositionDropdown(){
    //     if(this.isPositionDropdownOpen) this.$refs.multiselect.$refs.search.blur()
    //     else this.$refs.multiselect1.$el.focus()
    // },
    openPositionDropdown() {
      this.isPositionDropdownOpen = !this.isPositionDropdownOpen;
    },
    closePositionDropdown() {
      this.isPositionDropdownOpen = false;
    },
    openSchoolDropdown() {
      this.isSchoolDropdownOpen = !this.isSchoolDropdownOpen;
    },
    closeSchoolDropdown() {
      this.isSchoolDropdownOpen = false;
    },
    openExperienceDropdown() {
      this.isExperienceDropdownOpen = !this.isExperienceDropdownOpen;
    },
    closeExperienceDropdown() {
      this.isExperienceDropdownOpen = false;
    },
    openFlexibilityDropdown() {
      this.isFlexibilityDropdownOpen = !this.isFlexibilityDropdownOpen;
    },
    closeFlexibilityDropdown() {
      this.isFlexibilityDropdownOpen = false;
    },
    openInternShipDropdown() {
      this.isInternShipDropdownOpen = !this.isInternShipDropdownOpen;
    },
    closeInternShipDropdown() {
      this.isInternShipDropdownOpen = false;
    },
    onFileChange(e, fileType) {
      const file = e.target.files[0];
      const filePath = file.name;
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.pdf)$/i;
      if (!allowedExtensions.exec(filePath)) {
        file.value = '';
        this.$v.params[fileType].$touch();
        return false;
      }
      if (file) {
        this.params[fileType] = file;
        this.$v.params[fileType].$touch();
      } else {
        this.params[fileType] = '';
      }
    },
    onSuccess() {
      this.captchaError = false;
    },
    OnError() {},
    async onSubmit() {
      this.$v.params.$touch();
      if (this.$v.params.$invalid || this.$v.params.$error) {
        return false;
      }
      if (this.currentStep === 1) {
        this.currentStep = 2;
        scrollTo({
          top: 20,
          behavior: 'smooth'
        });
        return true;
      }
      if (this.currentStep === 2) {
        try {
          const token = await this.$recaptcha.getResponse();
        } catch (error) {}
      }
      if (!this.captchaError) {
        this.currentStep = 3;
        const data = await this.$hubspot.careersSubmitForm(this.params);
        if (!data) {
          return false;
        }
        return true;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/careers/contact-form.vue?vue&type=script&lang=js&
 /* harmony default export */ var careers_contact_formvue_type_script_lang_js_ = (contact_formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/careers/contact-form.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(267)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  careers_contact_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8b5eb2a6",
  "73668134"
  
)

/* harmony default export */ var contact_form = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsSelectionArrow: __webpack_require__(138).default,IconsSearch: __webpack_require__(70).default,IconsUpload: __webpack_require__(259).default,IconsLinkedin: __webpack_require__(144).default,CommonBrandLogo: __webpack_require__(164).default})


/***/ })

};;
//# sourceMappingURL=contact-form.js.map