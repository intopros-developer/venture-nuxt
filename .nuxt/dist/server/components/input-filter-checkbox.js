exports.ids = [120];
exports.modules = {

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/input/input-filter-checkbox.vue?vue&type=template&id=44d3b909&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"group relative flex cursor-pointer gap-2 text-primary xl:gap-4",class:{ 'ml-6': _vm.isChild },attrs:{"for":_vm.id}},[_vm._ssrNode("<input"+(_vm._ssrAttr("id",_vm.id))+" type=\"checkbox\""+(_vm._ssrAttr("checked",Array.isArray(_vm.checkboxValue)?_vm._i(_vm.checkboxValue,null)>-1:(_vm.checkboxValue)))+" class=\"form-checkbox cursor-pointer focus:!shadow-none focus:ring-transparent\" style=\"position: inherit\"> <span class=\"absolute hidden h-5 w-5 rounded-[1px] border border-primary bg-transparent group-hover:inline-block\"></span> <span class=\"cursor-pointer text-base text-black-700 group-hover:text-primary\">"+_vm._ssrEscape(_vm._s(_vm.label))+"</span>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/input/input-filter-checkbox.vue?vue&type=template&id=44d3b909&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/input/input-filter-checkbox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var input_filter_checkboxvue_type_script_lang_js_ = ({
  props: {
    id: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    isChild: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkboxValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/input/input-filter-checkbox.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_input_filter_checkboxvue_type_script_lang_js_ = (input_filter_checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/input/input-filter-checkbox.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  input_input_filter_checkboxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "5640065a"
  
)

/* harmony default export */ var input_filter_checkbox = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=input-filter-checkbox.js.map