exports.ids = [21];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=common-brand-logo.js.map