import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c584acea = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _9dcc2d28 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _b9223f7e = () => interopDefault(import('..\\pages\\products\\_productId.vue' /* webpackChunkName: "pages/products/_productId" */))
const _8614f760 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _c584acea,
    name: "about"
  }, {
    path: "/products",
    component: _9dcc2d28,
    name: "products"
  }, {
    path: "/products/:productId",
    component: _b9223f7e,
    name: "products-productId"
  }, {
    path: "/",
    component: _8614f760,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
