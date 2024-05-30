exports.ids = [14];
exports.modules = {

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-join-event.vue?vue&type=template&id=fc407188&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"overflow-y-hidden bg-cover bg-[top_36%_center] py-10 xl:pb-[75px] xl:pt-20",style:({ backgroundImage: ("url(" + _vm.imageUrl + ")") })},[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"grid grid-cols-1\">","</div>",[_vm._ssrNode("<div class=\"relative max-w-[637px] md:pt-[140px]\">","</div>",[_vm._ssrNode("<div class=\"absolute -left-20 top-2.5 h-full w-full\">","</div>",[_c('nuxt-img',{attrs:{"format":"webp","src":"/assets/img/bg-blur-subcribe.png","alt":"Subscribe","loading":"lazy"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"relative z-[1]\">","</div>",[_vm._ssrNode("<h5 class=\"text-center text-2xl font-bold uppercase leading-8 text-[#f7f4f4] md:text-left md:leading-10 [&>br]:md:hidden\">"+(_vm._s(_vm.title))+"</h5> "),_vm._ssrNode("<form id=\"career-join-form\" action>","</form>",[_vm._ssrNode("<div class=\"mx-auto mt-[13px] max-w-[498px] items-stretch md:ml-0 xl:max-w-[624px]\"><div class=\"flex\"><div class=\"form-input-group w-full\"><input type=\"email\" name=\"email\" autocomplete=\"on\""+(_vm._ssrAttr("placeholder",_vm.$t(_vm.placeholder)))+(_vm._ssrAttr("value",(_vm.$v.params.email.$model)))+(_vm._ssrClass("form-input rounded-r-none py-[22px]",{ error: _vm.$v.params.email.$error }))+"></div> <button type=\"submit\" class=\"btn flex-none rounded-l-none py-[22px]\">"+_vm._ssrEscape(_vm._s(_vm.$t('subscribe')))+"</button></div></div> "),(_vm.isSubmitted)?_vm._ssrNode("<div class=\"mt-2 flex items-center gap-3\">","</div>",[_c('icons-check-circle',{staticClass:"h-6 w-6 text-green"}),_vm._ssrNode(" <p class=\"text-xl font-extrabold leading-[30px] text-white [&>span]:border-b-[2px] [&>span]:border-green [&>span]:text-green\">"+(_vm._s(_vm.$t('span_congratulations_span_your_email_has_been_subscribe')))+"</p>")],2):_vm._e()],2)],2)],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/career/career-join-event.vue?vue&type=template&id=fc407188&

// EXTERNAL MODULE: external "vuelidate/lib/validators"
var validators_ = __webpack_require__(23);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--3-0!./node_modules/@nuxt/components/dist/loader.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--13-0!./components/career/career-join-event.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var career_join_eventvue_type_script_lang_js_ = ({
  props: {
    imageUrl: {
      type: String,
      default: 'https://images.ctfassets.net/koyrlvjc3wvc/5PIDqWaQeS4Qw3WtFBBf4W/a16bd4583868b261e530015704581795/Image_32_2x.webp'
    },
    title: {
      type: String,
      default: 'Subscribe Now!'
    }
  },
  data() {
    return {
      isSubmitted: false,
      placeholder: '',
      params: {
        email: ''
      }
    };
  },
  mounted() {
    if (window.innerWidth <= 768) {
      this.placeholder = 'enter_your_email_to_join';
    } else {
      this.placeholder = 'enter_your_email_to_join_events';
    }
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
      const data = await this.$hubspot.joinEventForm(this.params);
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
// CONCATENATED MODULE: ./components/career/career-join-event.vue?vue&type=script&lang=js&
 /* harmony default export */ var career_career_join_eventvue_type_script_lang_js_ = (career_join_eventvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/career/career-join-event.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  career_career_join_eventvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "29410ac8"
  
)

/* harmony default export */ var career_join_event = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {IconsCheckCircle: __webpack_require__(69).default})


/***/ })

};;
//# sourceMappingURL=career-join-event.js.map