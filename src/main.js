import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'amfe-flexible/index.js'
import '@vant/touch-emulator'
import Mock from '@/mock'
// import axios from 'axios'
Vue.config.productionTip = false
// Vue.prototype.$axios = axios
if (process.env.MOCK) {
  Mock.startMock()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
