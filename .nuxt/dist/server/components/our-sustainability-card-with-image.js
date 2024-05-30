exports.ids = [121];
exports.modules = {

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/our-sustainability/our-sustainability-card-with-image.vue?vue&type=template&id=5da60761&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-10 md:py-16 lg:pt-[128px]"},[_vm._ssrNode("<div class=\"container max-w-[1236px] px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"grid w-full grid-cols-1 gap-6 bg-white p-5 shadow-[0px_1px_8px_rgba(0,0,0,0.12)] sm:gap-6 md:grid-cols-2 md:px-8 md:py-20 xl:gap-20 xl:pb-[97px] xl:pl-[72px] xl:pr-11 xl:pt-[71px]\">","</div>",[_vm._ssrNode("<div><h3 class=\"mt-3 text-center text-[22px] font-bold uppercase leading-[39px] text-black md:text-left lg:mb-[34px] lg:mt-7 xl:text-[28px]\">"+((_vm.title === 'sustainabilityCard')?("<span>\n                        ARE YOU READY TO GO\n                        <span class=\"text-primary\"><br class=\"block md:hidden\">\n                            FURTHER?</span></span>"):(_vm.title === 'sustainableDevelopmentCard')?("<span>\n                        VENTURE’s suport for the un\n                        <span class=\"text-primary\"><br class=\"block md:hidden\">\n                            UN SUSTAINABLE dEVELOPMENT GOALS</span></span>"):"<!---->")+"</h3> <p class=\"mb-7 text-xs font-normal leading-5 -tracking-[0.03px] text-[#353535] sm:text-sm lg:text-xl lg:leading-[35px]\">"+_vm._ssrEscape("\n                    "+_vm._s(_vm.value.description)+"\n                ")+"</p> <p class=\"b-btn hidden py-[30px] text-[14px] font-bold -tracking-[0.03px] md:block\">"+_vm._ssrEscape(_vm._s(_vm.value.buttonTitle))+"</p></div> "),_c('nuxt-img',{attrs:{"format":"webp","src":_vm.imgSrc,"alt":"card-image","loading":"lazy"}}),_vm._ssrNode(" <p class=\"b-btn mx-auto md:hidden\">"+_vm._ssrEscape(_vm._s(_vm.value.buttonTitle))+"</p>")],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/our-sustainability/our-sustainability-card-with-image.vue?vue&type=template&id=5da60761&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/our-sustainability/our-sustainability-card-with-image.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var our_sustainability_card_with_imagevue_type_script_lang_js_ = ({
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          image: {
            fields: {
              file: {
                url: '//images.ctfassets.net/koyrlvjc3wvc/4tyXkBS5yBBWxIucd0xDLs/65b43390e806db86d3c1364026abe33e/img-5.png'
              }
            }
          },
          description: 'We offer a diverse environment for consultants who want to expand their knowledge and experience working with Some of the best talents and innovative ideas in the world.',
          buttonTitle: 'Apply for an interview'
        };
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    imgSrc() {
      return this.value ? `https:${this.value.image.fields.file.url}` : '/assets/img/img-5.png';
    }
  }
});
// CONCATENATED MODULE: ./components/our-sustainability/our-sustainability-card-with-image.vue?vue&type=script&lang=js&
 /* harmony default export */ var our_sustainability_our_sustainability_card_with_imagevue_type_script_lang_js_ = (our_sustainability_card_with_imagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/our-sustainability/our-sustainability-card-with-image.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  our_sustainability_our_sustainability_card_with_imagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ac535d20"
  
)

/* harmony default export */ var our_sustainability_card_with_image = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=our-sustainability-card-with-image.js.map