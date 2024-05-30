exports.ids = [63];
exports.modules = {

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/home/home-subscribe.vue?vue&type=template&id=1c29a480&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"rounded-2xl bg-[#e7f5ff] py-10 md:py-20 xl:py-24"},[_vm._ssrNode("<div class=\"container px-10 md:px-4 lg:px-[97px] xl:px-4\">","</div>",[_vm._ssrNode("<div class=\"flex flex-col items-center justify-between gap-5 md:flex-row\">","</div>",[_vm._ssrNode("<div class=\"flex-1\">","</div>",[_vm._ssrNode("<p class=\"mb-7 max-w-[404px] text-[26px] leading-[30px] -tracking-[0.05px] text-[#202A36] xl:max-w-[463px]\">"+(_vm._s(_vm.title))+"</p> <p class=\"mb-5 max-w-[490px] text-[18px] leading-[30px] -tracking-[0.05px] text-[#202A36]\">"+(_vm._s(_vm.description))+"</p> "),_vm._ssrNode("<form id=\"subscribe-form\" action>","</form>",[_vm._ssrNode("<div class=\"hidden max-w-[498px] items-stretch sm:block xl:mt-[106px] xl:max-w-[624px]\">","</div>",[_vm._ssrNode("<div class=\"flex\"><div class=\"form-input-group w-full\"><input type=\"email\" placeholder=\"Enter your email to download\""+(_vm._ssrAttr("value",(_vm.$v.params.email.$model)))+(_vm._ssrClass("form-input rounded-r-none py-[22px]",{ error: _vm.$v.params.email.$error }))+"></div> <button type=\"submit\" class=\"btn flex-none rounded-l-none py-[22px]\">Get It Free</button></div> "),(_vm.isSubmitted)?_vm._ssrNode("<div class=\"mt-5 flex items-start gap-3\">","</div>",[_c('icons-check-circle',{staticClass:"h-6 w-6 text-green"}),_vm._ssrNode(" <p class=\"font-extrabold text-[#707070]/70\"><span class=\"border-b-[2px] border-green text-green\">Congratulations,</span> please check your email for download instructions.</p>")],2):_vm._e()],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"max-w-[400px] flex-none xl:max-w-[529px]\">","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":_vm.imageUrl,"alt":_vm.title,"loading":"lazy"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<form id=\"subscribe-form-another\" action class=\"block sm:hidden\">","</form>",[_vm._ssrNode("<div class=\"max-w-[498px] items-stretch xl:mt-[106px] xl:max-w-[624px]\">","</div>",[_vm._ssrNode("<div class=\"flex\"><div class=\"form-input-group w-full\"><input type=\"email\""+(_vm._ssrAttr("placeholder",_vm.emailPlaceholderText))+(_vm._ssrAttr("value",(_vm.$v.params.email.$model)))+(_vm._ssrClass("form-input rounded-r-none",{ error: _vm.$v.params.email.$error }))+"></div> <button type=\"submit\" class=\"btn flex-none rounded-l-none\">"+_vm._ssrEscape(_vm._s(_vm.buttonTitle))+"</button></div> "),(_vm.isSubmitted)?_vm._ssrNode("<div class=\"mt-5 flex items-start gap-3\">","</div>",[_c('icons-check-circle',{staticClass:"h-6 w-6 text-green"}),_vm._ssrNode(" <p class=\"font-extrabold text-[#707070]/70\"><span class=\"border-b-[2px] border-green text-green\">Congratulations,</span> please check your email for download instructions.</p>")],2):_vm._e()],2)])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/home/home-subscribe.vue?vue&type=template&id=1c29a480&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/home/home-subscribe.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var home_subscribevue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      default: 'Subscribe to get the white paper on the next chapter for Fintech in China.'
    },
    description: {
      type: String,
      default: 'Large state-owned Chinese banks still continue to dominate the traditional banking sector.'
    },
    buttonTitle: {
      type: String,
      default: 'Get It Free'
    },
    emailPlaceholderText: {
      type: String,
      default: 'Enter your email to download'
    },
    imageUrl: {
      type: String,
      default: '/assets/img/crossroads_china.png'
    }
  },
  data() {
    return {
      isSubmitted: false,
      params: {
        email: ''
      }
    };
  },
  validations() {
    return {
      params: {
        email: {
          required: validators_["required"],
          email: validators_["email"]
        }
      }
    };
  },
  methods: {
    async onSubmit() {
      this.$v.params.$touch();
      if (this.$v.params.$invalid || this.$v.params.$error) {
        return false;
      }
      const data = await this.$hubspot.eBookSubscribeForm(this.params);
      if (!data) {
        return false;
      }
      this.isSubmitted = true;
      this.$v.params.$reset();
      this.params = {
        email: ''
      };
    }
  }
});
// CONCATENATED MODULE: ./components/home/home-subscribe.vue?vue&type=script&lang=js&
 /* harmony default export */ var home_home_subscribevue_type_script_lang_js_ = (home_subscribevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/home/home-subscribe.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  home_home_subscribevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1bcbb069"
  
)

/* harmony default export */ var home_subscribe = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsCheckCircle: __webpack_require__(69).default})


/***/ })

};;
//# sourceMappingURL=home-subscribe.js.map