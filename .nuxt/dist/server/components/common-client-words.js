exports.ids = [25];
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


/***/ })

};;
//# sourceMappingURL=common-client-words.js.map