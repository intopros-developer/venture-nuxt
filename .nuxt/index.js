import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_04af32b6 from 'nuxt_plugin_plugin_04af32b6' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_plugin_7d83df11 from 'nuxt_plugin_plugin_7d83df11' // Source: .\\composition-api\\plugin.mjs (mode: 'all')
import nuxt_plugin_recaptcha_7d6781c8 from 'nuxt_plugin_recaptcha_7d6781c8' // Source: .\\recaptcha.js (mode: 'all')
import nuxt_plugin_cookieuniversalnuxt_12cd5581 from 'nuxt_plugin_cookieuniversalnuxt_12cd5581' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_httpserver_c59e93f4 from 'nuxt_plugin_httpserver_c59e93f4' // Source: .\\http.server.js (mode: 'server')
import nuxt_plugin_http_698cab57 from 'nuxt_plugin_http_698cab57' // Source: .\\http.js (mode: 'all')
import nuxt_plugin_strapi_183b73f6 from 'nuxt_plugin_strapi_183b73f6' // Source: .\\strapi.js (mode: 'all')
import nuxt_plugin_dayjsplugin_6bc17ae4 from 'nuxt_plugin_dayjsplugin_6bc17ae4' // Source: .\\dayjs-plugin.js (mode: 'all')
import nuxt_plugin_pluginutils_11e51896 from 'nuxt_plugin_pluginutils_11e51896' // Source: .\\nuxt-i18n\\plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_1f7fe7c0 from 'nuxt_plugin_pluginrouting_1f7fe7c0' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_38181baf from 'nuxt_plugin_pluginmain_38181baf' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_toast_7df4d488 from 'nuxt_plugin_toast_7df4d488' // Source: .\\toast.js (mode: 'client')
import nuxt_plugin_image_c668f658 from 'nuxt_plugin_image_c668f658' // Source: .\\image.js (mode: 'all')
import nuxt_plugin_axios_9c76f04e from 'nuxt_plugin_axios_9c76f04e' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_axios_5659d192 from 'nuxt_plugin_axios_5659d192' // Source: ..\\plugins\\axios.js (mode: 'all')
import nuxt_plugin_vueawesomeswiper_5ce03f58 from 'nuxt_plugin_vueawesomeswiper_5ce03f58' // Source: ..\\plugins\\vue-awesome-swiper.js (mode: 'all')
import nuxt_plugin_vuethemask_ab289cb6 from 'nuxt_plugin_vuethemask_ab289cb6' // Source: ..\\plugins\\vue-the-mask (mode: 'all')
import nuxt_plugin_vuevuelidate_413c4103 from 'nuxt_plugin_vuevuelidate_413c4103' // Source: ..\\plugins\\vue-vuelidate.js (mode: 'all')
import nuxt_plugin_factory_144796ba from 'nuxt_plugin_factory_144796ba' // Source: ..\\plugins\\factory.js (mode: 'all')
import nuxt_plugin_vuemultiselect_7aa8df7f from 'nuxt_plugin_vuemultiselect_7aa8df7f' // Source: ..\\plugins\\vue-multiselect.js (mode: 'all')
import nuxt_plugin_popper_4200f295 from 'nuxt_plugin_popper_4200f295' // Source: ..\\plugins\\popper.js (mode: 'all')
import nuxt_plugin_vueflatpickr_3dad7ebc from 'nuxt_plugin_vueflatpickr_3dad7ebc' // Source: ..\\plugins\\vue-flatpickr.js (mode: 'all')
import nuxt_plugin_vuescrollactive_2dceffe4 from 'nuxt_plugin_vuescrollactive_2dceffe4' // Source: ..\\plugins\\vue-scroll-active.js (mode: 'all')
import nuxt_plugin_vueapexcharts_7410a43a from 'nuxt_plugin_vueapexcharts_7410a43a' // Source: ..\\plugins\\vue-apexcharts.js (mode: 'client')
import nuxt_plugin_vueslidetoggle_1324d0ec from 'nuxt_plugin_vueslidetoggle_1324d0ec' // Source: ..\\plugins\\vue-slide-toggle.js (mode: 'all')
import nuxt_plugin_auth_0e1b7b92 from 'nuxt_plugin_auth_0e1b7b92' // Source: .\\auth.js (mode: 'all')
import nuxt_plugin_meta_1b6b6b3a from 'nuxt_plugin_meta_1b6b6b3a' // Source: .\\composition-api\\meta.mjs (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Venture Plans","htmlAttrs":{"lang":"en"},"meta":[{"charset":"utf-8"},{"hid":"language","name":"language","content":"English"},{"hid":"og:title","property":"og:title","content":"Venture Plans"},{"hid":"description","property":"description","content":"Venture Plans is a global management consulting firm with a sophisticated team of diverse industry-specific consultants with deep expertise in finance, legal advisory and digital innovation. Our executive-level consultants are ivy league trained with institutional-caliber capabilities. We enable the best possible outcomes through value-based methodologies that succinctly capture the maximum value of your principals, intellectual property, business performance, markets, and outlook."},{"hid":"keywords","property":"keywords","content":"Venturefund"},{"hid":"og:description","property":"og:description","content":"Venture Plans is a global consulting firm with Ivy League-trained experts in finance, legal advisory, and digital innovation. We deliver value-based solutions to maximize business performance and outcomes."},{"name":"format-detection","content":"telephone=no"},{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:site_name","property":"og:site_name","content":"Venture Plans"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Fseveti.vercel.app"},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Fventure.vercel.app\u002Fassets\u002Fimg\u002Fsocial.png"},{"hid":"og:image:secure_url","property":"og:image:secure_url","content":"https:\u002F\u002Fventure.vercel.app\u002Fassets\u002Fimg\u002Fsocial.png"},{"hid":"og:image:width","property":"og:image:width","content":"1200"},{"hid":"og:image:height","property":"og:image:height","content":"630"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:title","name":"twitter:title","content":"Venture Plans"},{"hid":"twitter:description","name":"twitter:description","content":"Venture Plans is a global consulting firm with Ivy League-trained experts in finance, legal advisory, and digital innovation. We deliver value-based solutions to maximize business performance and outcomes."},{"hid":"twitter:image","name":"twitter:image","content":"https:\u002F\u002Fventure.vercel.app\u002Fassets\u002Fimg\u002Fsocial.png"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.googleapis.com"},{"rel":"preconnect","href":"https:\u002F\u002Ffonts.gstatic.com","crossorigin":true},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Poppins:wght@400;500;600&display=swap"}],"script":[{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fwww.recaptcha.net\u002Frecaptcha\u002Fapi.js?render=onloadcallback","async":true,"defer":true}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_04af32b6 === 'function') {
    await nuxt_plugin_plugin_04af32b6(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_7d83df11 === 'function') {
    await nuxt_plugin_plugin_7d83df11(app.context, inject)
  }

  if (typeof nuxt_plugin_recaptcha_7d6781c8 === 'function') {
    await nuxt_plugin_recaptcha_7d6781c8(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_12cd5581 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_12cd5581(app.context, inject)
  }

  if (process.server && typeof nuxt_plugin_httpserver_c59e93f4 === 'function') {
    await nuxt_plugin_httpserver_c59e93f4(app.context, inject)
  }

  if (typeof nuxt_plugin_http_698cab57 === 'function') {
    await nuxt_plugin_http_698cab57(app.context, inject)
  }

  if (typeof nuxt_plugin_strapi_183b73f6 === 'function') {
    await nuxt_plugin_strapi_183b73f6(app.context, inject)
  }

  if (typeof nuxt_plugin_dayjsplugin_6bc17ae4 === 'function') {
    await nuxt_plugin_dayjsplugin_6bc17ae4(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_11e51896 === 'function') {
    await nuxt_plugin_pluginutils_11e51896(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_1f7fe7c0 === 'function') {
    await nuxt_plugin_pluginrouting_1f7fe7c0(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_38181baf === 'function') {
    await nuxt_plugin_pluginmain_38181baf(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_7df4d488 === 'function') {
    await nuxt_plugin_toast_7df4d488(app.context, inject)
  }

  if (typeof nuxt_plugin_image_c668f658 === 'function') {
    await nuxt_plugin_image_c668f658(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_9c76f04e === 'function') {
    await nuxt_plugin_axios_9c76f04e(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_5659d192 === 'function') {
    await nuxt_plugin_axios_5659d192(app.context, inject)
  }

  if (typeof nuxt_plugin_vueawesomeswiper_5ce03f58 === 'function') {
    await nuxt_plugin_vueawesomeswiper_5ce03f58(app.context, inject)
  }

  if (typeof nuxt_plugin_vuethemask_ab289cb6 === 'function') {
    await nuxt_plugin_vuethemask_ab289cb6(app.context, inject)
  }

  if (typeof nuxt_plugin_vuevuelidate_413c4103 === 'function') {
    await nuxt_plugin_vuevuelidate_413c4103(app.context, inject)
  }

  if (typeof nuxt_plugin_factory_144796ba === 'function') {
    await nuxt_plugin_factory_144796ba(app.context, inject)
  }

  if (typeof nuxt_plugin_vuemultiselect_7aa8df7f === 'function') {
    await nuxt_plugin_vuemultiselect_7aa8df7f(app.context, inject)
  }

  if (typeof nuxt_plugin_popper_4200f295 === 'function') {
    await nuxt_plugin_popper_4200f295(app.context, inject)
  }

  if (typeof nuxt_plugin_vueflatpickr_3dad7ebc === 'function') {
    await nuxt_plugin_vueflatpickr_3dad7ebc(app.context, inject)
  }

  if (typeof nuxt_plugin_vuescrollactive_2dceffe4 === 'function') {
    await nuxt_plugin_vuescrollactive_2dceffe4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vueapexcharts_7410a43a === 'function') {
    await nuxt_plugin_vueapexcharts_7410a43a(app.context, inject)
  }

  if (typeof nuxt_plugin_vueslidetoggle_1324d0ec === 'function') {
    await nuxt_plugin_vueslidetoggle_1324d0ec(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_0e1b7b92 === 'function') {
    await nuxt_plugin_auth_0e1b7b92(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_1b6b6b3a === 'function') {
    await nuxt_plugin_meta_1b6b6b3a(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
