exports.ids = [28];
exports.modules = {

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-consultation.vue?vue&type=template&id=7648d2ec&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"pb-10 md:pb-16 xl:pb-[115px]"},[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"mb-4\">","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":("" + _vm.imgSrc),"alt":"Img-11","loading":"lazy"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid grid-cols-1 gap-4 sm:grid-cols-3 lg:gap-[70px]\">","</div>",_vm._l((_vm.values),function(value,i){return _vm._ssrNode("<div class=\"bg-white shadow-[0_3px_6px_0_rgba(0,0,0,0.16)]\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-center bg-primary/80 px-3 py-[15px] text-white xl:px-6\">","</div>",[_c('nuxt-img',{staticClass:"h-[50px] w-[50px]",attrs:{"format":"webp","src":("" + (value.fields.icon.fields.file.url)),"alt":value.fields.title,"loading":"lazy"}})],1),_vm._ssrNode(" <div class=\"px-6 py-5 text-center xl:p-8\"><p class=\"mb-[14px] text-[23px] font-extrabold leading-6 text-black\">"+_vm._ssrEscape(_vm._s(value.fields.title))+"</p> <p class=\"text-sm font-medium leading-5 text-black xl:text-base xl:leading-[30px]\">"+_vm._ssrEscape(_vm._s(value.fields.description))+"</p></div>")],2)}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-consultation.vue?vue&type=template&id=7648d2ec&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-consultation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_consultationvue_type_script_lang_js_ = ({
  props: {
    values: {
      type: Array,
      default: () => [{
        fields: {
          id: 1,
          icon: {
            fields: {
              title: 'as-seen-icon-1',
              description: '',
              file: {
                url: '//images.ctfassets.net/koyrlvjc3wvc/6U9LIz97aXNGqSfzH8Gygd/9687ce41d33e4f1d8005a7b7731e5a49/as-seen-icon-1.svg'
              }
            }
          },
          title: '10500 +',
          description: 'Institutional Level Investor Business Plans, PPMS, RFPS, Grant Proposal Drafted '
        }
      }, {
        fields: {
          id: 2,
          icon: {
            fields: {
              title: 'as-seen-icon-2',
              description: '',
              file: {
                url: '//images.ctfassets.net/koyrlvjc3wvc/p80CqppkNaPT18ErKMWop/db835a677276be47df72bc0a34675132/as-seen-icon-2.svg'
              }
            }
          },
          title: '$650 MM',
          description: 'Amount of Investments We Helped Our Clients Raise  '
        }
      }, {
        fields: {
          id: 3,
          icon: {
            fields: {
              title: 'as-seen-icon-3',
              description: '',
              file: {
                url: '//images.ctfassets.net/koyrlvjc3wvc/4BIrTBU2rcFEgXIjF4XNiL/a1998915bd03f9a6abf5be7ba0134144/as-seen-icon-3.svg'
              }
            }
          },
          title: 'Accredited Experts',
          description: 'Ivy League Trained \nIndustry Specific \nExecutive-Level Grant Experts'
        }
      }, {
        fields: {
          id: 4,
          icon: {
            fields: {
              title: 'as-seen-icon-4',
              description: '',
              file: {
                url: '//images.ctfassets.net/koyrlvjc3wvc/1ZcGvj6gIbPHbB4LSCRlZu/cb3e5206f560bf36c74b690ad2cd2d26/as-seen-icon-4.svg'
              }
            }
          },
          title: 'Comprehensive  Compact Pitch',
          description: 'Accurate Financial Projections & Current Market Research '
        }
      }, {
        fields: {
          id: 5,
          icon: {
            fields: {
              title: 'as-seen-icon-5',
              description: '',
              file: {
                url: '//images.ctfassets.net/koyrlvjc3wvc/5BYGJQUZb6JrXN9SeypNg7/77f62da00e2e0c691727dfdf31a6594d/as-seen-icon-5.svg'
              }
            }
          },
          title: 'Expedited  Services ',
          description: 'Custom Business Plans, Delivered As Fast As  3 Days. We Guarantee On Time Delivery'
        }
      }, {
        fields: {
          id: 6,
          icon: {
            fields: {
              title: 'as-seen-icon-6',
              description: '',
              file: {
                url: '//images.ctfassets.net/koyrlvjc3wvc/3HufBlBaMzIK8ItjqLPpN6/0611e1cad52e3d9f88673ab7513a80db/as-seen-icon-6.svg'
              }
            }
          },
          title: '20 Consultants',
          description: 'In Finance, Artificial Intelligence, Cannabis, Robotics, Real Estate, Fashion, Healthcare and More'
        }
      }]
    },
    asSeenImage: {
      type: String,
      default: ''
    }
  },
  computed: {
    imgSrc() {
      return this.asSeenImage ? this.asSeenImage : '/assets/img/img-11.jpg';
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-consultation.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_consultationvue_type_script_lang_js_ = (common_consultationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-consultation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_consultationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "08b05e7a"
  
)

/* harmony default export */ var common_consultation = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-consultation.js.map