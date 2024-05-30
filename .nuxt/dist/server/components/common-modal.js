exports.ids = [36];
exports.modules = {

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-modal.vue?vue&type=template&id=6149a1eb&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"fadeslide"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.opened || _vm.openOnServerSide),expression:"opened || openOnServerSide"}],ref:"modal",staticClass:"fixed inset-0 z-50 h-full w-full overflow-y-auto overflow-x-hidden bg-[#294366]/[0.49]"},[_c('div',{staticClass:"modal-popup-container absolute inset-0 h-full w-full text-center before:inline-block before:h-full before:align-middle",class:[_vm.full ? 'px-0 sm:px-3' : 'px-3']},[_c('div',{staticClass:"inline-block w-full text-left align-middle"},[_c('div',{staticClass:"relative mx-auto max-w-full overflow-hidden rounded p-8 text-sm text-blue-500 shadow-lg",class:[_vm.full ? 'my-0 sm:my-8' : 'my-8', _vm.contentClass, _vm.background ? _vm.background : 'bg-white'],style:({ width: _vm.width + 'px' }),on:{"click":function($event){return $event.stopPropagation()}}},[(_vm.closeBtn)?_c('button',{staticClass:"absolute z-10 flex h-10 w-10 items-center justify-center text-base text-black !no-underline opacity-100 hover:opacity-70",class:[_vm.closeBtnClass],staticStyle:{"top":"10px","right":"10px"},on:{"click":_vm.close}},[_vm._v("\n                        ✕\n                    ")]):_vm._e(),_vm._v(" "),_vm._t("default")],2)])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/common/common-modal.vue?vue&type=template&id=6149a1eb&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/common/common-modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var common_modalvue_type_script_lang_js_ = ({
  props: {
    full: {
      type: Boolean,
      default: false
    },
    closeBtn: {
      type: Boolean,
      default: false
    },
    modal: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '550'
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    openOnServerSide: {
      type: Boolean,
      default: false
    },
    contentClass: {
      type: String,
      default: ''
    },
    closeBtnClass: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      opened: false
    };
  },
  mounted() {
    if (this.isOpen) {
      this.open();
    }
  },
  methods: {
    scrollbarWidth() {
      const scrollDiv = document.createElement('div');
      scrollDiv.style.cssText = 'width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px';
      document.body.appendChild(scrollDiv);
      const result = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return result;
    },
    open() {
      document.querySelector('html').classList.add('overflow-hidden');
      document.querySelector('html').style.marginRight = this.scrollbarWidth() + 'px';
      this.opened = true;
      this.$emit('onopen');
    },
    closeByBackdrop() {
      if (!this.modal) {
        this.close();
      }
    },
    close() {
      document.querySelector('html').style.marginRight = '';
      document.querySelector('html').classList.remove('overflow-hidden');
      this.opened = false;
      this.$emit('onclose');
    }
  }
});
// CONCATENATED MODULE: ./components/common/common-modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var common_common_modalvue_type_script_lang_js_ = (common_modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/common/common-modal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_common_modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "356f89e8"
  
)

/* harmony default export */ var common_modal = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=common-modal.js.map