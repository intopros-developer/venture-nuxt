exports.ids = [24,65];
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


/***/ })

};;
//# sourceMappingURL=common-category-slider.js.map