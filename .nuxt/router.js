import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1752bff5 = () => interopDefault(import('..\\pages\\book-consult.vue' /* webpackChunkName: "pages/book-consult" */))
const _74c5fa2a = () => interopDefault(import('..\\pages\\careers\\index.vue' /* webpackChunkName: "pages/careers/index" */))
const _32762368 = () => interopDefault(import('..\\pages\\cities\\index.vue' /* webpackChunkName: "pages/cities/index" */))
const _473e1096 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _3898bd52 = () => interopDefault(import('..\\pages\\founder.vue' /* webpackChunkName: "pages/founder" */))
const _254f79e7 = () => interopDefault(import('..\\pages\\grant-service.vue' /* webpackChunkName: "pages/grant-service" */))
const _5155bb39 = () => interopDefault(import('..\\pages\\industries\\index.vue' /* webpackChunkName: "pages/industries/index" */))
const _8d9c488c = () => interopDefault(import('..\\pages\\insights\\index.vue' /* webpackChunkName: "pages/insights/index" */))
const _e7d13472 = () => interopDefault(import('..\\pages\\media.vue' /* webpackChunkName: "pages/media" */))
const _a29bf93a = () => interopDefault(import('..\\pages\\media-mentions\\index.vue' /* webpackChunkName: "pages/media-mentions/index" */))
const _1c64f24c = () => interopDefault(import('..\\pages\\offices.vue' /* webpackChunkName: "pages/offices" */))
const _1eaebd78 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _24c57a8a = () => interopDefault(import('..\\pages\\refund-policy.vue' /* webpackChunkName: "pages/refund-policy" */))
const _ee066084 = () => interopDefault(import('..\\pages\\reviews.vue' /* webpackChunkName: "pages/reviews" */))
const _5b7cd855 = () => interopDefault(import('..\\pages\\search.vue' /* webpackChunkName: "pages/search" */))
const _af12a950 = () => interopDefault(import('..\\pages\\sitemap.vue' /* webpackChunkName: "pages/sitemap" */))
const _6e082b01 = () => interopDefault(import('..\\pages\\startup-form.vue' /* webpackChunkName: "pages/startup-form" */))
const _b335daa6 = () => interopDefault(import('..\\pages\\subscribe.vue' /* webpackChunkName: "pages/subscribe" */))
const _347f1561 = () => interopDefault(import('..\\pages\\terms-and-conditions.vue' /* webpackChunkName: "pages/terms-and-conditions" */))
const _0082b1a7 = () => interopDefault(import('..\\pages\\thank-you-for-booking.vue' /* webpackChunkName: "pages/thank-you-for-booking" */))
const _080ab0a9 = () => interopDefault(import('..\\pages\\careers\\contact-form.vue' /* webpackChunkName: "pages/careers/contact-form" */))
const _9097596c = () => interopDefault(import('..\\pages\\technology\\software-google-ad.vue' /* webpackChunkName: "pages/technology/software-google-ad" */))
const _40e7d5d0 = () => interopDefault(import('..\\pages\\insights\\_slug\\index.vue' /* webpackChunkName: "pages/insights/_slug/index" */))
const _063723f2 = () => interopDefault(import('..\\pages\\media-mentions\\_slug\\index.vue' /* webpackChunkName: "pages/media-mentions/_slug/index" */))
const _d7494d16 = () => interopDefault(import('..\\pages\\_slug\\index.vue' /* webpackChunkName: "pages/_slug/index" */))
const _5bf04eae = () => interopDefault(import('..\\pages\\_slug\\_slug1\\index.vue' /* webpackChunkName: "pages/_slug/_slug1/index" */))
const _4ea2bf74 = () => interopDefault(import('..\\pages\\_slug\\_slug1\\_slug2\\index.vue' /* webpackChunkName: "pages/_slug/_slug1/_slug2/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/book-consult",
    component: _1752bff5,
    name: "book-consult___en___default"
  }, {
    path: "/careers",
    component: _74c5fa2a,
    name: "careers___en___default"
  }, {
    path: "/cities",
    component: _32762368,
    name: "cities___en___default"
  }, {
    path: "/en",
    component: _473e1096,
    name: "index___en"
  }, {
    path: "/founder",
    component: _3898bd52,
    name: "founder___en___default"
  }, {
    path: "/grant-service",
    component: _254f79e7,
    name: "grant-service___en___default"
  }, {
    path: "/industries",
    component: _5155bb39,
    name: "industries___en___default"
  }, {
    path: "/insights",
    component: _8d9c488c,
    name: "insights___en___default"
  }, {
    path: "/media",
    component: _e7d13472,
    name: "media___en___default"
  }, {
    path: "/media-mentions",
    component: _a29bf93a,
    name: "media-mentions___en___default"
  }, {
    path: "/offices",
    component: _1c64f24c,
    name: "offices___en___default"
  }, {
    path: "/privacy-policy",
    component: _1eaebd78,
    name: "privacy-policy___en___default"
  }, {
    path: "/refund-policy",
    component: _24c57a8a,
    name: "refund-policy___en___default"
  }, {
    path: "/reviews",
    component: _ee066084,
    name: "reviews___en___default"
  }, {
    path: "/search",
    component: _5b7cd855,
    name: "search___en___default"
  }, {
    path: "/sitemap",
    component: _af12a950,
    name: "sitemap___en___default"
  }, {
    path: "/startup-form",
    component: _6e082b01,
    name: "startup-form___en___default"
  }, {
    path: "/subscribe",
    component: _b335daa6,
    name: "subscribe___en___default"
  }, {
    path: "/terms-and-conditions",
    component: _347f1561,
    name: "terms-and-conditions___en___default"
  }, {
    path: "/thank-you-for-booking",
    component: _0082b1a7,
    name: "thank-you-for-booking___en___default"
  }, {
    path: "/careers/contact-form",
    component: _080ab0a9,
    name: "careers-contact-form___en___default"
  }, {
    path: "/en/book-consult",
    component: _1752bff5,
    name: "book-consult___en"
  }, {
    path: "/en/careers",
    component: _74c5fa2a,
    name: "careers___en"
  }, {
    path: "/en/cities",
    component: _32762368,
    name: "cities___en"
  }, {
    path: "/en/founder",
    component: _3898bd52,
    name: "founder___en"
  }, {
    path: "/en/grant-service",
    component: _254f79e7,
    name: "grant-service___en"
  }, {
    path: "/en/industries",
    component: _5155bb39,
    name: "industries___en"
  }, {
    path: "/en/insights",
    component: _8d9c488c,
    name: "insights___en"
  }, {
    path: "/en/media",
    component: _e7d13472,
    name: "media___en"
  }, {
    path: "/en/media-mentions",
    component: _a29bf93a,
    name: "media-mentions___en"
  }, {
    path: "/en/offices",
    component: _1c64f24c,
    name: "offices___en"
  }, {
    path: "/en/privacy-policy",
    component: _1eaebd78,
    name: "privacy-policy___en"
  }, {
    path: "/en/refund-policy",
    component: _24c57a8a,
    name: "refund-policy___en"
  }, {
    path: "/en/reviews",
    component: _ee066084,
    name: "reviews___en"
  }, {
    path: "/en/search",
    component: _5b7cd855,
    name: "search___en"
  }, {
    path: "/en/sitemap",
    component: _af12a950,
    name: "sitemap___en"
  }, {
    path: "/en/startup-form",
    component: _6e082b01,
    name: "startup-form___en"
  }, {
    path: "/en/subscribe",
    component: _b335daa6,
    name: "subscribe___en"
  }, {
    path: "/en/terms-and-conditions",
    component: _347f1561,
    name: "terms-and-conditions___en"
  }, {
    path: "/en/thank-you-for-booking",
    component: _0082b1a7,
    name: "thank-you-for-booking___en"
  }, {
    path: "/technology/software-google-ad",
    component: _9097596c,
    name: "technology-software-google-ad___en___default"
  }, {
    path: "/en/careers/contact-form",
    component: _080ab0a9,
    name: "careers-contact-form___en"
  }, {
    path: "/en/technology/software-google-ad",
    component: _9097596c,
    name: "technology-software-google-ad___en"
  }, {
    path: "/en/insights/:slug",
    component: _40e7d5d0,
    name: "insights-slug___en"
  }, {
    path: "/en/media-mentions/:slug",
    component: _063723f2,
    name: "media-mentions-slug___en"
  }, {
    path: "/en/:slug",
    component: _d7494d16,
    name: "slug___en"
  }, {
    path: "/insights/:slug",
    component: _40e7d5d0,
    name: "insights-slug___en___default"
  }, {
    path: "/media-mentions/:slug",
    component: _063723f2,
    name: "media-mentions-slug___en___default"
  }, {
    path: "/en/:slug/:slug1",
    component: _5bf04eae,
    name: "slug-slug1___en"
  }, {
    path: "/en/:slug/:slug1/:slug2",
    component: _4ea2bf74,
    name: "slug-slug1-slug2___en"
  }, {
    path: "/",
    component: _473e1096,
    name: "index___en___default"
  }, {
    path: "/:slug",
    component: _d7494d16,
    name: "slug___en___default"
  }, {
    path: "/:slug/:slug1",
    component: _5bf04eae,
    name: "slug-slug1___en___default"
  }, {
    path: "/:slug/:slug1/:slug2",
    component: _4ea2bf74,
    name: "slug-slug1-slug2___en___default"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
