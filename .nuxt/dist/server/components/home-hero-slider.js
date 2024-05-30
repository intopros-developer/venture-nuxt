exports.ids = [58];
exports.modules = {

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(238);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("60d2a27e", content, true, context)
};

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_home_hero_slider_vue_vue_type_style_index_0_id_2a7dbd4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(232);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_home_hero_slider_vue_vue_type_style_index_0_id_2a7dbd4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_home_hero_slider_vue_vue_type_style_index_0_id_2a7dbd4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_home_hero_slider_vue_vue_type_style_index_0_id_2a7dbd4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_4_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_4_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_4_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_13_0_home_hero_slider_vue_vue_type_style_index_0_id_2a7dbd4c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#slider-bottom-navigation[data-v-2a7dbd4c]::-webkit-scrollbar,.hero-slider .swiper-pagination[data-v-2a7dbd4c]::-webkit-scrollbar{width:0}.hero-slider .swiper-pagination[data-v-2a7dbd4c]::-webkit-scrollbar-track{box-shadow:inset 0 0 0 rgba(0,0,0,.3)}#slider-bottom-navigation[data-v-2a7dbd4c]::-webkit-scrollbar-track{width:0}#slider-bottom-navigation[data-v-2a7dbd4c]::-webkit-scrollbar-thumb,.hero-slider .swiper-pagination[data-v-2a7dbd4c]::-webkit-scrollbar-thumb{background-color:transparent;outline:1px solid transparent}.hero-slider .swiper-pagination[data-v-2a7dbd4c]{position:relative!important;display:flex;bottom:0!important;height:60px;overflow-x:scroll!important;white-space:nowrap;width:100%}.hero-slider .swiper-pagination .swiper-pagination-bullet[data-v-2a7dbd4c]{width:auto;height:2px;border-radius:0;background:transparent;opacity:1;position:relative;font-size:15px}.hero-slider .swiper-pagination .swiper-pagination-bullet[data-v-2a7dbd4c]:hover{color:#fff}.hero-slider .swiper-pagination .swiper-pagination-bullet span[data-v-2a7dbd4c]{display:none;position:absolute;width:0;height:100%;background:#fff;top:18px;left:0}#slider-bottom-navigation .self-slide span[data-v-2a7dbd4c]{display:none;position:absolute;width:0;height:100%;background:#fff;top:12px;left:0}.hero-slider .swiper-pagination .swiper-pagination-bullet-active span[data-v-2a7dbd4c]{display:block;width:0;transition:width 5s;transition-timing-function:linear!important}#slider-bottom-navigation .self-slide.active span[data-v-2a7dbd4c]{display:block;width:0;transition:width 5s!important;transition-timing-function:linear!important}#slider-bottom-navigation .self-slide[data-v-2a7dbd4c]{cursor:pointer}#slider-bottom-navigation .self-slide.active[data-v-2a7dbd4c]{color:#fff!important}.hero-slider .swiper-pagination .swiper-pagination-bullet-active span.play-transition[data-v-2a7dbd4c]{width:100%}#slider-bottom-navigation .self-slide.active span.play-transition[data-v-2a7dbd4c]{width:100%;transition:width 5s!important;transition-timing-function:linear!important}.full-slide-animation-after[data-v-2a7dbd4c]{opacity:0;transition:opacity 1s ease-in;visibility:hidden}.swiper-slide-active .full-slide-animation-before[data-v-2a7dbd4c]{opacity:1;visibility:visible}.slide-text-animation-after[data-v-2a7dbd4c]{top:1.25rem;transition:top .8s,opacity .8s;position:relative;opacity:0}.swiper-slide-active .slide-text-animation-before[data-v-2a7dbd4c]{opacity:1!important;top:0!important}.slide-learn-more-animation-before[data-v-2a7dbd4c]{transition:left .5s,opacity .5s;transition-delay:.6s;left:-10%;opacity:0;position:relative}.swiper-slide-active .slide-learn-more-animation-after[data-v-2a7dbd4c]{transition:left .5s,opacity .5s;transition-delay:.6s;left:0!important;opacity:1!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/home/home-hero-slider.vue?vue&type=template&id=2a7dbd4c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"hero-slider relative -mt-36 md:-mt-32"},[_c('div',{directives:[{name:"swiper",rawName:"v-swiper:heroSlider",value:(_vm.slider_options),expression:"slider_options",arg:"heroSlider"}],staticClass:"swiper relative !min-h-[42rem]",staticStyle:{"height":"100vh !important"},attrs:{"cleanup-styles-on-destroy":false}},[_vm._ssrNode("<div class=\"swiper-wrapper flex !min-h-[42rem] xl:!h-[100vh]\" data-v-2a7dbd4c>","</div>",_vm._l((_vm.slider),function(slide,i){return _vm._ssrNode("<div class=\"swiper-slide !h-full bg-black-700\" data-v-2a7dbd4c>","</div>",[_vm._ssrNode("<div class=\"absolute top-0 z-0 h-full w-full bg-black opacity-20 sm:opacity-30\" data-v-2a7dbd4c></div> <div"+(_vm._ssrClass("absolute top-0 z-0 h-full w-full",{
                        'bg-gradient-to-r from-[#2B3746]/70 md:-left-[20%] md:w-[55%]': i === 5,
                        'w-full bg-gradient-to-l from-[#313c4a]/0 via-[#0b0d11]/[0.14] to-[#0a0c0f] opacity-25': i === 4,
                        'bg-gradient-to-r from-[#2B3746]/70 md:-left-[10%] md:w-[55%]': i === 3,
                        '-left-[40%] bg-gradient-to-r from-[#2b3746] md:w-[65%]': i === 2,
                        '-left-[30%] bg-gradient-to-r from-[#2b3746] md:w-[90%]': i === 1,
                        'bg-gradient-to-r from-[#2B3746]/70 md:-left-[40%] md:w-[65%]': i === 0,
                    }))+" data-v-2a7dbd4c></div> <div class=\"absolute bottom-0 left-0 z-0 h-[89px] w-full bg-gradient-to-t from-[#202A36] opacity-80\" data-v-2a7dbd4c></div> "+((slide.attributes.slideVideoUrl)?("<div data-v-2a7dbd4c><video autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\" playsinline class=\"force-video-reload responsive-slide-video absolute inset-0 -z-10 h-full w-full object-cover\""+(_vm._ssrStyle(null,_vm.videoHeight, null))+" data-v-2a7dbd4c><source"+(_vm._ssrAttr("src",slide.attributes.slideVideoUrl))+" type=\"video/mp4\" data-v-2a7dbd4c></video></div>"):("<img loading=\"lazy\""+(_vm._ssrAttr("alt",slide.attributes.title))+" lazyload"+(_vm._ssrClass("slider-img absolute -z-10 h-full w-full bg-cover object-cover md:bg-top",{
                        'img-slider-six-responsive bg-[position:-410px_-10px] md:bg-[position:center_70px] lg:bg-center': i === 5,
                        'bg-[position:center]': i === 3 || i === 2,
                        'bg-[position:-500px_0px]': i === 1,
                    }))+(_vm._ssrStyle(null,{ backgroundImage: ("url(" + (slide.attributes.slideImageUrl) + ")") }, null))+" data-v-2a7dbd4c>"))+" "),_vm._ssrNode("<div"+(_vm._ssrClass("container relative z-10 px-10 md:px-4 lg:px-[97px] xl:px-4",{ '': i === 0 }))+" data-v-2a7dbd4c>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("full-slide-animation-after full-slide-animation-before group flex min-h-[38rem] place-content-center items-center justify-start pb-4 pt-36 md:min-h-[40rem] lg:max-w-[950px] xl:min-h-screen",{ 'full-slide-animation-after full-slide-animation-before': i === 0 }))+" data-v-2a7dbd4c>","</div>",[_vm._ssrNode("<div class=\"flex-1\" data-v-2a7dbd4c>","</div>",[_vm._ssrNode("<h2 class=\"slide-text-animation-before slide-text-animation-after max-w-[295px] !whitespace-normal text-[26px] font-extrabold uppercase leading-[42px] text-white sm:max-w-[430px] sm:text-[38px] md:whitespace-nowrap xl:max-w-[626px] xl:text-[50px] xl:leading-[53px]\" data-v-2a7dbd4c>"+(_vm._s(slide.attributes.title))+"</h2> "),(slide.attributes.buttonText && _vm.$helper.isInternalUrl(slide.attributes.linkUrl))?_c('nuxt-link',{staticClass:"slide-learn-more-animation-before slide-learn-more-animation-after flex items-center gap-2 pb-5 pt-5 text-sm text-white",attrs:{"to":slide.attributes.linkUrl}},[_vm._v("\n                                "+_vm._s(slide.attributes.linkTitle)+"\n                                "),_c('nuxt-img',{staticClass:"relative left-0 transition-all duration-300 group-hover:left-2",attrs:{"src":"/assets/img/Union-3@2x.png","alt":slide.attributes.linkTitle + '-1',"loading":"lazy","format":"webp","width":"24","height":"13"}})],1):(slide.attributes.buttonText)?_c('a',{staticClass:"slide-learn-more-animation-before slide-learn-more-animation-after flex items-center gap-2 pb-5 pt-5 text-sm text-white",attrs:{"target":"_blank","href":slide.attributes.linkUrl}},[_vm._v("\n                                "+_vm._s(slide.attributes.linkTitle)+"\n                                "),_c('nuxt-img',{staticClass:"relative left-0 transition-all duration-300 group-hover:left-2",attrs:{"src":"/assets/img/Union-3@2x.png","alt":slide.attributes.linkTitle + '-1',"loading":"lazy","format":"webp","width":"24","height":"13"}})],1):_vm._e(),_vm._ssrNode(" <p"+(_vm._ssrClass("slide-text-animation-before slide-text-animation-after max-w-[377px] pt-4 text-[1.1rem] leading-[22px] text-[#FBFBFD] xl:max-w-[590px]",{ 'mb-[46px] !pt-0': slide.attributes.buttonText }))+" data-v-2a7dbd4c>"+_vm._ssrEscape("\n                                "+_vm._s(slide.attributes.description)+"\n                            ")+"</p> "),(slide.attributes.buttonUrl && _vm.$helper.isInternalUrl(slide.attributes.buttonUrl))?_c('nuxt-link',{staticClass:"outline-btn slide-text-animation-before slide-text-animation-after px-10 py-3 text-[13px] font-semibold uppercase leading-4 xl:px-16 xl:py-[22px]",attrs:{"to":slide.attributes.buttonUrl}},[_vm._v(_vm._s(slide.attributes.buttonText))]):(slide.attributes.buttonText)?_c('a',{staticClass:"outline-btn slide-text-animation-before slide-text-animation-after px-10 py-3 text-[13px] font-semibold uppercase leading-4 xl:px-16 xl:py-[22px]",attrs:{"target":"_blank","href":slide.attributes.buttonUrl}},[_vm._v(_vm._s(slide.attributes.buttonText))]):_vm._e(),_vm._ssrNode(" "),(!slide.attributes.buttonText && _vm.$helper.isInternalUrl(slide.attributes.linkUrl))?_c('nuxt-link',{staticClass:"slide-learn-more-animation-before slide-learn-more-animation-after flex items-center gap-2 pb-5 pt-5 text-sm text-white",attrs:{"to":slide.attributes.linkUrl}},[_vm._v("\n                                "+_vm._s(slide.attributes.linkTitle)+"\n                                "),_c('nuxt-img',{staticClass:"relative left-0 transition-all duration-300 group-hover:left-2",attrs:{"src":"/assets/img/Union-3@2x.png","alt":slide.attributes.linkTitle + '-1',"loading":"lazy","format":"webp","width":"24","height":"13"}})],1):(!slide.attributes.buttonText)?_c('a',{staticClass:"slide-learn-more-animation-before slide-learn-more-animation-after flex items-center gap-2 pb-5 pt-5 text-sm text-white",attrs:{"target":"_blank","href":slide.attributes.linkUrl}},[_vm._v("\n                                "+_vm._s(slide.attributes.linkTitle)+"\n                                "),_c('nuxt-img',{staticClass:"relative left-0 transition-all duration-300 group-hover:left-2",attrs:{"src":"/assets/img/Union-3@2x.png","alt":slide.attributes.linkTitle + '-1',"loading":"lazy","format":"webp","width":"24","height":"13"}})],1):_vm._e()],2)])])],2)}),0),_vm._ssrNode(" <div class=\"xl:container-fluid container relative -top-[100px] z-10 !pr-0 pl-10 md:pl-4 md:pr-0 lg:-top-[60px] lg:pl-[97px] xl:px-0\" data-v-2a7dbd4c><div id=\"slider-bottom-navigation\" class=\"flex justify-start gap-6 overflow-auto text-white md:justify-center md:gap-8\" data-v-2a7dbd4c>"+(_vm._ssrList((_vm.slider),function(slide,ind){return ("<div"+(_vm._ssrAttr("data-ind",ind))+" class=\"self-slide shrink-0 pb-4 font-bold\" data-v-2a7dbd4c>"+_vm._ssrEscape("\n                    "+_vm._s(slide.attributes.paginationTitle))+"<span class=\"hero__slide-nav-progress\" data-v-2a7dbd4c></span></div>")}))+"</div> <div class=\"swiper-pagination swiper-pagination-bullets !hidden !pr-10 md:!pr-4 lg:!pr-[97px] xl:!justify-center xl:!pr-0 xl:pl-4\" style=\"justify-content: left\" data-v-2a7dbd4c></div> <div class=\"-ml-10 text-center text-white lg:hidden\" data-v-2a7dbd4c><span data-v-2a7dbd4c><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"mx-auto h-6 w-6\" data-v-2a7dbd4c><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 8.25l-7.5 7.5-7.5-7.5\" data-v-2a7dbd4c></path></svg></span></div></div>")],2),_vm._ssrNode(" <div class=\"absolute bottom-10 right-20 z-20 hidden animate-bounce text-white lg:block\" data-v-2a7dbd4c><p class=\"mb-2 pl-1 text-sm text-white\" data-v-2a7dbd4c>Scroll</p> <button aria-label=\"Scroll Next Section\" class=\"rounded-full border border-white p-2\" data-v-2a7dbd4c><svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"fill-whi mx-auto h-6 w-6\" data-v-2a7dbd4c><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 8.25l-7.5 7.5-7.5-7.5\" data-v-2a7dbd4c></path></svg></button></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/home-hero-slider.vue?vue&type=template&id=2a7dbd4c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/home/home-hero-slider.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var home_hero_slidervue_type_script_lang_js_ = ({
  props: {
    slider: {
      type: Array,
      default: () => [{
        id: 1,
        attributes: {
          title: 'DEEP EXPERTISE <br /> IN CAPITAL RAISING',
          description: 'Global consulting firm with a speciality in innovation, Technology, Digital Transformation, Financing and Revenue Growth.',
          buttonText: 'LET’S WORK TOGETHER',
          buttonUrl: '/book-consult',
          linkTitle: 'FIND OUT HOW',
          linkUrl: '/careers',
          paginationTitle: 'Let’s Work Together',
          slideVideoUrl: 'https://videos.ctfassets.net/koyrlvjc3wvc/7tIrCBja0bvQbiMFHOEj9a/b6279398d5b237796590373eb8df5a78/home-slider-video.mp4',
          slideImageUrl: ''
        }
      }]
    }
  },
  data() {
    return {
      timer: null,
      progressSpeed: 5,
      percentage: 0,
      current_index: 0,
      videoHeight: '',
      currentSlide: 0,
      anotherTimer: null,
      slider_options: {
        noSwipingSelector: '#slider-bottom-navigation',
        effect: 'fade',
        speed: 100,
        autoplay: {
          delay: 5000
        },
        autoHeight: true,
        loop: true,
        initialSlide: 0,
        slidesPerView: 1,
        spaceBetween: 30,
        touchRatio: 1,
        init: false,
        breakpoints: {
          350: {
            touchRatio: 1
          },
          1024: {
            touchRatio: 0
          }
        }
      }
    };
  },
  mounted() {
    this.init_slider();
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    resetAndSelectSlider() {
      const findAllSlides = document.querySelectorAll('#slider-bottom-navigation .self-slide');
      for (let sl = 0; sl < findAllSlides.length; sl++) {
        findAllSlides[sl].classList.remove('active');
        findAllSlides[sl].querySelector('span').classList.remove('play-transition');
        if (parseInt(findAllSlides[sl].dataset.ind) === this.currentSlide) {
          findAllSlides[sl].classList.add('active');
          const vm = this;
          setTimeout(function () {
            findAllSlides[sl].querySelector('span').classList.add('play-transition');
            vm.heroSlider.autoplay.start();
          }, 100);
          const parent = document.querySelector('#slider-bottom-navigation');
          const activeSpan = document.querySelector('#slider-bottom-navigation .self-slide.active');
          parent.scrollTo({
            left: activeSpan.offsetLeft - 50,
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    },
    init_slider() {
      this.heroSlider.on('activeIndexChange', swiper => {
        if (this.heroSlider.activeIndex === this.slider.length + 1) {
          this.currentSlide = 0;
        } else {
          this.currentSlide = this.heroSlider.activeIndex - 1;
        }
        this.resetAndSelectSlider();
      });
      this.heroSlider.init();
      document.querySelectorAll('#slider-bottom-navigation .self-slide').forEach(el => {
        el.addEventListener('click', el => {
          if (this.timer) clearTimeout(this.timer);
          const indexSlide = parseInt(el.currentTarget.dataset.ind) + 1;
          this.heroSlider.slideTo(indexSlide);
          this.heroSlider.autoplay.start();
        });
      });
    },
    scrollToNextSection() {
      const element = document.getElementById('question-box');
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - 50,
        behavior: 'smooth'
      });
    }
  }
});
// CONCATENATED MODULE: ./components/home/home-hero-slider.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_home_hero_slidervue_type_script_lang_js_ = (home_hero_slidervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/home/home-hero-slider.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(237)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_home_hero_slidervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2a7dbd4c",
  "6f5e1e73"
  
)

/* harmony default export */ var home_hero_slider = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-hero-slider.js.map