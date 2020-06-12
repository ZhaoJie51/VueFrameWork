import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/vant'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'amfe-flexible/index.js'
import '@vant/touch-emulator'
let {MOCK} = require('@/config')
Vue.config.productionTip = false

// 开发环境开启mock
if (MOCK) {
  require('./mock')
}
window.addEventListener(
  'popstate',
  function(e) {
    router.isBack = true
  },
  false
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
