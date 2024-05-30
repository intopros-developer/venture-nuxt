exports.ids = [29,104];
exports.modules = {

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-contact-us.vue?vue&type=template&id=3efa912b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"group relative h-[400px] overflow-hidden bg-cover bg-center bg-no-repeat lg:h-[571px]"},[_vm._ssrNode(((_vm.showOverlay)?("<video autoplay=\"autoplay\" loop=\"loop\" muted=\"muted\" playsinline class=\"force-video-reload responsive-contact-us-section-video absolute h-full w-full object-cover xl:-mt-[10%] xl:h-auto\""+(_vm._ssrStyle(null,_vm.videoHeight, null))+"><source"+(_vm._ssrAttr("src",_vm.videoThumbnailURL))+" type=\"video/mp4\"></video>"):"<!---->")+" "+((_vm.showOverlay)?("<div class=\"absolute inset-0 z-[8] bg-[#1f3244]/[0.41]\"></div>"):"<!---->")+" "),_vm._ssrNode("<div>","</div>",[(_vm.showOverlay)?_vm._ssrNode("<div"+(_vm._ssrClass("container relative z-[9] px-10 py-10 pb-5 md:pb-10 lg:px-[97px] lg:pt-40 xl:px-4",{ 'xl:pt-[116px]': _vm.lessPaddingTop, 'xl:pt-[250px]': !_vm.lessPaddingTop }))+">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1 md:grid-cols-2\">","</div>",[_vm._ssrNode("<div class=\"md:pr-2\">","</div>",[_vm._ssrNode("<p class=\"text-2xl font-bold -tracking-[0.09px] text-white sm:text-4xl lg:text-[40px] lg:leading-[56px]\">"+(_vm._s(_vm.title))+"</p> "),_vm._ssrNode("<div class=\"mt-40 md:mt-[58px]\">","</div>",[(_vm.$helper.isInternalUrl(_vm.buttonURL))?_c('nuxt-link',{staticClass:"outline-btn w-full px-11 py-[14px] text-center text-lg font-semibold leading-[21px] md:w-auto",attrs:{"to":_vm.buttonURL}},[_vm._v("\n                            "+_vm._s(_vm.buttonTitle)+"\n                        ")]):_c('a',{staticClass:"outline-btn w-full px-11 py-[14px] text-center text-lg font-semibold leading-[21px] md:w-auto",attrs:{"href":_vm.buttonURL,"target":"_blank"}},[_vm._v(_vm._s(_vm.buttonTitle)+" ")])],1)],2)])]):_vm._e(),_vm._ssrNode(" <div"+(_vm._ssrClass(null,_vm.showOverlay ? 'hidden' : ''))+"><iframe"+(_vm._ssrAttr("height",_vm.videoHeight))+(_vm._ssrAttr("src",_vm.youtubeSrc))+" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen=\"allowfullscreen\" style=\"width: 100%\"></iframe></div> "),(_vm.showOverlay)?_vm._ssrNode("<button class=\"absolute inset-x-0 top-1/2 z-10 mx-auto w-[113px] -translate-y-1/2 bg-primary/[0.71] px-11 py-5 group-hover:bg-primary\">","</button>",[_c('icons-play')],1):_vm._e()],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-contact-us.vue?vue&type=template&id=3efa912b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-contact-us.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_contact_usvue_type_script_lang_js_ = ({
  props: {
    lessPaddingTop: {
      type: Boolean,
      default: false
    },
    buttonTitle: {
      type: String,
      default: 'Contact Us'
    },
    buttonURL: {
      type: String,
      default: '/contact-us'
    },
    videoURL: {
      type: String,
      default: 'https://fast.wistia.net/embed/iframe/2fj2578efk'
    },
    videoThumbnailURL: {
      type: String,
      default: 'https://videos.ctfassets.net/koyrlvjc3wvc/654wWfXJHIUtKBU5UXfRNF/f8b62c2d5ca30297b5437de136468c94/careers_video_01.mp4'
    },
    title: {
      type: String,
      default: 'Win grants from federal<br/> and state institutions'
    }
  },
  data() {
    return {
      playing: false,
      videoHeight: 571,
      youtubeSrc: 'https://www.youtube.com/embed/xhK2Zr5BXfA?si=TC7OuK5mL5SuIpZN' // Initial video source
    };
  },

  computed: {
    showOverlay() {
      return !this.playing;
    },
    iframeURL() {
      if (this.playing) {
        return this.videoURL;
      } else {
        return '';
      }
    }
  },
  mounted() {
    if (window.innerWidth <= 768) {
      this.videoHeight = 350;
    } else {
      this.videoHeight = 571;
    }
  },
  methods: {
    play() {
      this.playing = true;
      this.$nextTick(() => {
        const youtubePlayer = this.$refs.youtubePlayer;

        // Check if the iframe element exists
        if (youtubePlayer) {
          // Extract the video ID from the initial source
          const videoId = this.youtubeSrc.split('/').pop().split('?')[0];

          // Construct the new source with autoplay enabled
          const autoplaySrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

          // Update the iframe src attribute to trigger autoplay
          youtubePlayer.setAttribute('src', autoplaySrc);
        }
      });

      // Access the iframe element

      /*
      if (typeof this.videoURL === 'string') {
          setTimeout(() => {
              const video = window.Wistia.api(this.videoURL.slice(this.videoURL.indexOf('iframe/') + 1));
              if (video) {
                  video.play();
                  video.bind('end', () => {
                      this.playing = false;
                      return video.unbind('end', () => {});
                  });
              }
          }, 250);
      }
      */
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-contact-us.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_contact_usvue_type_script_lang_js_ = (common_contact_usvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-contact-us.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_contact_usvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "15978c9c"
  
)

/* harmony default export */ var common_contact_us = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsPlay: __webpack_require__(141).default})


/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/icons/icons-play.vue?vue&type=template&id=6f9ce8fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"id":"SVGDoc","width":"25","height":"35","xmlns":"http://www.w3.org/2000/svg","version":"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:avocode":"https://avocode.com/","viewBox":"0 0 25 35"}},[_vm._ssrNode("<defs></defs> <desc>Generated with Avocode.</desc> <g><g><title>Path 7367</title> <path d=\"M0.58612,1.83847v0v31.29441c-0.00087,1.09563 0.96639,1.78119 1.74043,1.23354l22.10668,-15.64726c0.77387,-0.5475 0.77387,-1.9168 0,-2.46431l-22.10668,-15.64716c-0.72205,-0.51104 -1.74043,0.07667 -1.74043,1.23079z\" fill=\"#ffffff\" fill-opacity=\"1\"></path></g></g>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/icons/icons-play.vue?vue&type=template&id=6f9ce8fe&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/icons/icons-play.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0a83ed49"
  
)

/* harmony default export */ var icons_play = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-contact-us.js.map