exports.ids = [46];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=common-work-at-the-best-place.js.map