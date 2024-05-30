exports.ids = [39,82];
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

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-questionnaire-content.vue?vue&type=template&id=63c864eb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"container"},[_c('div',{directives:[{name:"swiper",rawName:"v-swiper:dynamicSlider",value:(_vm.sliderOptions),expression:"sliderOptions",arg:"dynamicSlider"}],staticClass:"swiper"},[_vm._ssrNode("<div class=\"swiper-wrapper sm:min-h-full\">","</div>",_vm._l((_vm.currentContents),function(consultant,i){return _vm._ssrNode("<div class=\"swiper-slide flex flex-col bg-white px-6 pb-[46px] pt-4 sm:min-h-full sm:justify-between\">","</div>",[_vm._ssrNode("<h5 class=\"min-h-[42px] font-semibold capitalize leading-[18px] tracking-[0.42px] text-[#030303]\">"+_vm._ssrEscape(_vm._s(consultant.title))+"</h5> "),_vm._ssrNode("<div class=\"mt-[9px] h-[151px] overflow-hidden shadow-[0_3px_6px_rgba(180,180,180,0.44)]\">","</div>",[_c('nuxt-img',{staticClass:"h-full w-full object-cover object-top",attrs:{"src":consultant.image,"alt":consultant.title,"loading":"lazy"}})],1),_vm._ssrNode(" <p class=\"pb-5 pt-[26px] text-sm leading-[26px] -tracking-[0.04px] text-[#202a36]\">"+_vm._ssrEscape(_vm._s(consultant.description))+"</p> "),_vm._ssrNode("<div class=\"mt-auto\">","</div>",[_vm._ssrNode("<button aria-label=\"Learn more\" class=\"flex items-center gap-4 text-primary\">","</button>",[_vm._ssrNode("<p class=\"text-sm font-semibold leading-[13px] -tracking-[0.03px]\">Learn more</p> "),_c('icons-downarrow',{staticClass:"-rotate-90"})],2)])],2)}),0),_vm._ssrNode(" <div class=\"mt-[31px] flex w-full justify-center\"><div class=\"swiper-pagination-career-consultant swiper-pagination-bullets !cursor-pointer\"></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-questionnaire-content.vue?vue&type=template&id=63c864eb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-questionnaire-content.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_questionnaire_contentvue_type_script_lang_js_ = ({
  props: {
    currentQuestion: {
      type: String,
      default: 'MBA Candidate'
    }
  },
  data() {
    return {
      questions: [{
        name: 'Bachelor Candidate',
        contents: [{
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional & Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }, {
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }]
      }, {
        name: 'MBA Candidate',
        contents: [{
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }, {
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional a& Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }]
      }, {
        name: 'Masters (Non MBA)',
        contents: [{
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }, {
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional a& Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }]
      }, {
        name: 'MD Candidate',
        contents: [{
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }, {
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional a& Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }]
      }, {
        name: 'JD Candidate',
        contents: [{
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }, {
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional a& Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }]
      }, {
        name: 'Doctoral (PHD)',
        contents: [{
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }, {
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional a& Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }]
      }, {
        name: 'Professional',
        contents: [{
          title: 'Interview Prep',
          description: 'As you explore different positions, you may be invited to a series of interviews at Venture Plans. To help you prepare for these interviews, we have compiled some valuable recommendations and advice on what to expect during the interview process at Venture Plans.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/1kdJUBftkvRlTCAzYtHvnO/8b9de5f0e9a37924a244367386bf5810/iStock-1191132586__1_.webp'
        }, {
          title: 'Consultant (JD, PHD)',
          description: 'Are you finishing your PhD, JD, or MD and looking for your next professional move? We’d love to hear from you if you have an advanced degree or professional experience.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/5CJ57XUGzLDpDFNTzHozDE/635ca9a41f188a18cf5200c72b643b55/iStock-1226991788.webp'
        }, {
          title: 'Professional & Functional',
          description: 'Beyond consulting, we provide excellent professional opportunities where your knowledge, experience, and skills will be extremely valuable. Explore our diverse functional areas, including technology and innovation, corporate finance, digital marketing, revenue growth, and many more.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/YcU5ArnuN7v0fgsezSbJZ/510259d7549a7ff0ca99b0a1c3207cc1/iStock-985523070.webp'
        }, {
          title: 'Summer Internship',
          description: 'The summer associate program at Venture Plans is an exceptional opportunity designed for students pursuing business school and postgraduate degrees — serving as a catalyst for your entire career. Brace yourself for what could be the most remarkable summer experience of your life.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/lqocvG4j7XG4g8lJTlJ5A/d94d2ef2b274e134c2070bde768fe8e0/iStock-530281617.webp'
        }, {
          title: 'Associate Consultant Internship',
          description: 'The associate consultant intern position ' + 'is one of our undergrad internship ' + 'programs that provides extensive ' + 'knowledge to both business strategy ' + 'and the consulting sector. ' + 'Through a full-time internship at Venture Plans, ' + 'you’ll obtain intensive training and ' + 'continuous, practical learning.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/6DLSFml6h9WMBUTvRQPJu0/779222acf804dacb1f1cb02cc64f14af/iStock-642501604.webp'
        }, {
          title: 'Associate Consultant',
          description: 'The associate consultant position is fantastic for undergrads since it will constantly put your academic and personal skills to the test. You’ll work with the friendliest, smartest, and most encouraging colleagues while you take on the most fascinating tasks.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/77sywdsU8dIZLNEmC9Gq6Z/fab4c89396bb6cb4c167b767dea331b8/iStock-669887592.webp'
        }, {
          title: 'Meet our people',
          description: 'At Venture Plans, we support one another to achieve success. Our team of ivy league-trained industry experts helps motivate, uplift, and ignite your personal and professional growth. Together, we cultivate an environment where we all thrive and contribute to collective excellence.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/2aJSeCUdQurI0SFZIm0l1o/1830911d0d5ff1c433df7237b1f86acc/iStock-1257623847.webp'
        }, {
          title: 'Consultant',
          description: 'The core of what we do is around consultants. Consider joining our team as a consultant if you’re an aspiring business school grad, holder of an ivy league degree, or a seasoned professional who wants to work with the sharpest, most inquisitive minds.',
          image: 'https://images.ctfassets.net/koyrlvjc3wvc/3UBRtaCSFrOcEuTYW7zqAr/d556a484b6d7b88c60035db2b3a12e72/iStock-1233105506.webp'
        }]
      }],
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
      },
      currentContents: []
    };
  },
  watch: {
    currentQuestion: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler(val, oldVal) {
        // do your stuff
        this.updateContent();
      }
    }
  },
  mounted() {
    this.updateContent();
    this.dynamicSlider.init();
  },
  methods: {
    updateContent() {
      for (const question of this.questions) {
        if (question.name === this.$props.currentQuestion) {
          this.currentContents = question.contents;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-questionnaire-content.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_questionnaire_contentvue_type_script_lang_js_ = (common_questionnaire_contentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-questionnaire-content.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_questionnaire_contentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4439f8a4"
  
)

/* harmony default export */ var common_questionnaire_content = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsDownarrow: __webpack_require__(154).default})


/***/ })

};;
//# sourceMappingURL=common-questionnaire-content.js.map