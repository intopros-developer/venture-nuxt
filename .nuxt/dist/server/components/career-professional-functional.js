exports.ids = [16,82];
exports.modules = {

/***/ 154:
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

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-professional-functional.vue?vue&type=template&id=0bdc7ede&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-24 md:py-24 xl:py-20"},[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-[52px] flex items-center justify-center gap-5 text-center\"><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div> <h2 id=\"professionalFunctionalPositions\" class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl [&>span]:text-primary\">"+(_vm._s(_vm.title))+"</h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div></div> "),_c('div',{directives:[{name:"swiper",rawName:"v-swiper:careerSlider",value:(_vm.sliderOptions),expression:"sliderOptions",arg:"careerSlider"}],staticClass:"swiper",attrs:{"cleanup-styles-on-destroy":false}},[_vm._ssrNode("<div class=\"swiper-wrapper sm:min-h-full\">","</div>",_vm._l((_vm.professionalsAndPositions),function(position,i){return _vm._ssrNode("<div class=\"swiper-slide flex flex-col bg-white px-4 pb-8 pt-[18px] sm:min-h-full sm:justify-between\">","</div>",[_vm._ssrNode("<div class=\"h-[167px] overflow-hidden shadow-[0_3px_6px_rgba(0,0,0,0.44)]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover object-top",attrs:{"format":"webp","src":position.attributes.imgUrl,"alt":'swiper-slide_' + i,"loading":"lazy"}})],1),_vm._ssrNode(" <p class=\"min-h-[54px] pt-[18px] text-base font-semibold leading-[18px] tracking-[0.42px] text-primary\">"+_vm._ssrEscape(_vm._s(position.attributes.title))+"</p> <p class=\"pb-5 pt-[10px] text-base leading-[26px] -tracking-[0.04px] text-[#202a36]\">"+_vm._ssrEscape("\n                        "+_vm._s(position.attributes.description)+"\n                    ")+"</p> "),_vm._ssrNode("<div class=\"sm:mt-auto\">","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",position.attributes.linkUrl))+" class=\"flex items-center gap-4 text-primary\">","</a>",[_vm._ssrNode("<p class=\"text-sm font-semibold leading-[13px] -tracking-[0.03px]\">"+_vm._ssrEscape(_vm._s(position.attributes.linkText))+"</p> "),_c('icons-downarrow',{staticClass:"-rotate-90"})],2)])],2)}),0)]),_vm._ssrNode(" <div class=\"mt-[31px] flex w-full justify-center\"><div class=\"swiper-pagination swiper-pagination-bullets\"></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/career/career-professional-functional.vue?vue&type=template&id=0bdc7ede&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-professional-functional.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var career_professional_functionalvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: 'OUR FUNCTIONAL POSITIONS'
    },
    professionalsAndPositions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      sliderOptions: {
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
        breakpoints: {
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3
          }
        }
      }
    };
  },
  mounted() {
    this.careerSlider.init();
  }
});
// CONCATENATED MODULE: ./components/career/career-professional-functional.vue?vue&type=script&lang=js&
 /* harmony default export */ var career_career_professional_functionalvue_type_script_lang_js_ = (career_professional_functionalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/career/career-professional-functional.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  career_career_professional_functionalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "549dbca8"
  
)

/* harmony default export */ var career_professional_functional = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsDownarrow: __webpack_require__(154).default})


/***/ })

};;
//# sourceMappingURL=career-professional-functional.js.map