exports.ids = [13,82];
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

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-consultant.vue?vue&type=template&id=5c988085&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_vm._ssrNode("<div class=\"container\">","</div>",[_c('div',{directives:[{name:"swiper",rawName:"v-swiper:careerConsultantSlider",value:(_vm.sliderOptions),expression:"sliderOptions",arg:"careerConsultantSlider"}],staticClass:"swiper",attrs:{"cleanup-styles-on-destroy":false}},[_vm._ssrNode("<div class=\"swiper-wrapper sm:min-h-full\">","</div>",_vm._l((_vm.careersconsultants),function(consultant,i){return _vm._ssrNode("<div class=\"swiper-slide flex flex-col bg-white px-6 pb-[46px] pt-4 sm:min-h-full sm:justify-between\">","</div>",[_vm._ssrNode("<h5 class=\"min-h-[42px] font-semibold capitalize leading-[18px] tracking-[0.42px] text-[#030303]\">"+_vm._ssrEscape(_vm._s(consultant.attributes.title))+"</h5> "),_vm._ssrNode("<div class=\"mt-[9px] h-[151px] overflow-hidden shadow-[0_3px_6px_rgba(180,180,180,0.44)]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover object-top",attrs:{"format":"webp","src":consultant.attributes.imgUrl,"alt":consultant.attributes.title,"loading":"lazy"}})],1),_vm._ssrNode(" <p class=\"pb-5 pt-[26px] text-sm leading-[26px] -tracking-[0.04px] text-[#202a36]\">"+_vm._ssrEscape("\n                        "+_vm._s(consultant.attributes.description)+"\n                    ")+"</p> "),_vm._ssrNode("<div class=\"mt-auto\">","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",consultant.attributes.linkUrl))+" class=\"flex items-center gap-4 text-primary\">","</a>",[_vm._ssrNode("<p class=\"text-sm font-semibold leading-[13px] -tracking-[0.03px]\">"+_vm._ssrEscape(_vm._s(consultant.attributes.linkText))+"</p> "),_c('icons-downarrow',{staticClass:"-rotate-90"})],2)])],2)}),0)]),_vm._ssrNode(" <div class=\"mt-[31px] flex w-full justify-center\"><div class=\"swiper-pagination-career-consultant swiper-pagination-bullets !cursor-pointer\"></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/career/career-consultant.vue?vue&type=template&id=5c988085&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-consultant.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var career_consultantvue_type_script_lang_js_ = ({
  props: {
    careersconsultants: {
      type: Array,
      default: () => []
    },
    question1Ans: {
      type: String,
      default: ''
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
          el: '.swiper-pagination-career-consultant',
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
            slidesPerView: 4,
            slidesPerGroup: 4
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4
          }
        }
      }
    };
  },
  mounted() {
    this.careerConsultantSlider.init();
  }
});
// CONCATENATED MODULE: ./components/career/career-consultant.vue?vue&type=script&lang=js&
 /* harmony default export */ var career_career_consultantvue_type_script_lang_js_ = (career_consultantvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/career/career-consultant.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  career_career_consultantvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2a4bd30c"
  
)

/* harmony default export */ var career_consultant = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsDownarrow: __webpack_require__(154).default})


/***/ })

};;
//# sourceMappingURL=career-consultant.js.map