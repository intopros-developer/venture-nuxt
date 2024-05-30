exports.ids = [147];
exports.modules = {

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/sitemap.vue?vue&type=template&id=e1be706c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container mx-auto py-16"},[_vm._ssrNode("<div><h1 class=\"text-[2.5rem] font-bold leading-10\">Sitemap</h1> <h3 class=\"mt-4 text-xl text-primary\">About Venture Plans</h3></div> "),_vm._ssrNode("<div class=\"mt-12 grid grid-cols-12 gap-5\">","</div>",_vm._l((_vm.splitArray),function(arr,i){return _vm._ssrNode("<div class=\"col-span-12 flex flex-col gap-4 md:col-span-6 lg:col-span-4\">","</div>",_vm._l((arr),function(mainNav,mainInd){return _vm._ssrNode("<div>","</div>",[_c('nuxt-link',{staticClass:"text-lg font-medium text-black transition hover:text-primary",attrs:{"to":mainNav.url}},[_vm._v(_vm._s(mainNav.name))]),_vm._ssrNode(" "),(mainNav.navChildItems && Array.isArray(mainNav.navChildItems))?_vm._ssrNode("<ul class=\"pl-3\">","</ul>",_vm._l((mainNav.navChildItems),function(subNav,subInd){return _vm._ssrNode("<li class=\"py-1\">","</li>",[_c('nuxt-link',{staticClass:"text-base font-medium text-grey-500 transition hover:text-primary",attrs:{"to":subNav.url}},[_vm._v(_vm._s(subNav.name))]),_vm._ssrNode(" "),(subNav.navChildItems && Array.isArray(subNav.navChildItems))?_vm._ssrNode("<ul class=\"ml-5\">","</ul>",_vm._l((subNav.navChildItems),function(childNav,childInd){return _vm._ssrNode("<li class=\"py-1\">","</li>",[_c('nuxt-link',{staticClass:"text-base font-medium text-grey-500 transition hover:text-primary",attrs:{"to":childNav.url}},[_vm._v(_vm._s(childNav.name))])],1)}),0):_vm._e()],2)}),0):_vm._e()],2)}),0)}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/sitemap.vue?vue&type=template&id=e1be706c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./pages/sitemap.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var sitemapvue_type_script_lang_js_ = ({
  data() {
    return {
      splitArray: []
    };
  },
  head() {
    return {
      title: 'Sitemap | Venture Plans',
      meta: [{
        name: 'robots',
        content: 'index, all'
      }, {
        hid: 'keywords',
        property: 'keywords',
        content: 'Venture Plans, venture plans, sitemap, venture plans sitemap'
      }]
    };
  },
  mounted() {
    const subarrays = [];
    const arr = this.$store.state.nav.mobileNavbar;
    const subarraySize = Math.floor(arr.length / 3);
    for (let i = 0; i < arr.length; i += subarraySize) {
      const subarray = arr.slice(i, i + subarraySize);
      subarrays.push(subarray);
    }
    this.splitArray = subarrays;
  }
});
// CONCATENATED MODULE: ./pages/sitemap.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_sitemapvue_type_script_lang_js_ = (sitemapvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./pages/sitemap.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_sitemapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2f99e352"
  
)

/* harmony default export */ var sitemap = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sitemap.js.map