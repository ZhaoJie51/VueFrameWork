import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/vant'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'amfe-flexible/index.js'
import '@vant/touch-emulator'
// 国际化
import {i18n, vantLocales} from './lang'

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

Vue.prototype.$Local = vantLocales;
vantLocales(i18n.locale)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
