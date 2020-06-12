import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const router = [
  {
    path: '/',
    name: 'index',
    component: resolve => require(['@/views/index'], resolve),
    meta: {
      title: '首页',
      keepAlive: false
    }
  },
  {
    path: '/index',
    name: 'index',
    component: resolve => require(['@/views/index'], resolve),
    meta: {
      title: '首页',
      keepAlive: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: resolve => require(['@/views/about'], resolve),
    meta: {
      title: '关于我们',
      keepAlive: false
    }
  },
  {
    path: '*',
    name: '404',
    component: resolve => require(['@/views/notFound'], resolve),
    meta: {
      title: '404',
      keepAlive: true
    }
  }
]
const createRouter = () =>
  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({y: 0}),
    routes: router
  })

export default createRouter()
