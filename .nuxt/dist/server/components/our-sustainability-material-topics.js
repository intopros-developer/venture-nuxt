exports.ids = [122];
exports.modules = {

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/our-sustainability/our-sustainability-material-topics.vue?vue&type=template&id=8d4cfee8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-10 md:py-16 xl:py-20"},[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\"><div id=\"materialityAssesment\" class=\"mb-10 flex items-center justify-center gap-[33px] text-center\"><div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div> <h2 class=\"text-2xl font-bold uppercase text-black sm:shrink-0 xl:text-3xl\">MATERIAL <span class=\"text-primary\">TOPICS</span></h2> <div class=\"hidden h-px w-full bg-[#d5d5d5] sm:block\"></div></div> <div class=\"shadow-[0_1px_8px_rgba(0,0,0,0.1)]\"><div class=\"overflow-x-auto border-b-2 border-[#cfcfcf] px-4 md:px-8\"><ul id=\"topic_header_tab\" class=\"flex items-center gap-6 overflow-y-hidden text-[13px] font-medium -tracking-[-0.02px] text-black-700 xl:gap-8 xl:text-base xl:font-normal xl:leading-5 xl:-tracking-[-0.03px]\">"+(_vm._ssrList((_vm.topicList),function(topic,i){return ("<li><button"+(_vm._ssrAttr("id",("topic_" + (_vm.$helper.toSnakeCase(topic)))))+(_vm._ssrAttr("aria-label",topic))+(_vm._ssrClass("inline-block whitespace-nowrap py-4",{ 'relative before:absolute before:-bottom-[2px] before:left-0 before:h-[3px] before:w-full before:bg-primary': _vm.activeTab === topic }))+">"+_vm._ssrEscape("\n                            "+_vm._s(topic)+"\n                        ")+"</button></li>")}))+"</ul></div> <div class=\"p-4 font-light text-[#353535] md:p-8 md:text-lg xl:text-xl xl:leading-9\"><div class=\"space-y-6\">"+((_vm.topicDescription)?("<p class=\"whitespace-pre-line\">"+_vm._ssrEscape(_vm._s(_vm.topicDescription.fields.description))+"</p>"):"<!---->")+"</div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/our-sustainability/our-sustainability-material-topics.vue?vue&type=template&id=8d4cfee8&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/our-sustainability/our-sustainability-material-topics.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var our_sustainability_material_topicsvue_type_script_lang_js_ = ({
  props: {
    values: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeTab: '',
      topicList: []
    };
  },
  computed: {
    topicDescription() {
      return this.values.find(value => value.fields.title === this.activeTab);
    }
  },
  mounted() {
    this.topicList = this.values.map(value => value.fields.title);
    this.activeTab = this.topicList[0];
  },
  methods: {
    changeTab(topic) {
      this.activeTab = topic;
      const parent = document.querySelector('#topic_header_tab');
      const activeSpan = document.querySelector(`#topic_${this.$helper.toSnakeCase(topic)}`);
      parent.scrollTo({
        left: activeSpan.offsetLeft - window.innerWidth / 2 + activeSpan.offsetWidth,
        top: 0,
        behavior: 'smooth'
      });
    }
  }
});
// CONCATENATED MODULE: ./components/our-sustainability/our-sustainability-material-topics.vue?vue&type=script&lang=js&
 /* harmony default export */ var our_sustainability_our_sustainability_material_topicsvue_type_script_lang_js_ = (our_sustainability_material_topicsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/our-sustainability/our-sustainability-material-topics.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  our_sustainability_our_sustainability_material_topicsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "23cc0909"
  
)

/* harmony default export */ var our_sustainability_material_topics = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=our-sustainability-material-topics.js.map