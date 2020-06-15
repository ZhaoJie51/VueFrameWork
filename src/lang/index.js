import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en'
import zhCN from './zh'
import {Locale} from 'vant'
import zhLocale from 'vant/lib/locale/lang/zh-CN'
import enLocale from 'vant/lib/locale/lang/en-US'

Vue.use(VueI18n)

const messages = {
  en: {
    ...en,
    ...enLocale
  },
  zh: {
    ...zhCN,
    ...zhLocale
  }
}
function vantLocales(lang) {
  switch (lang) {
    case 'zh':
      Locale.use('zhCN', zhLocale)
      break
    case 'en':
      Locale.use('en', enLocale)
      break
  }
}
const i18n = new VueI18n({
  locale: localStorage.getItem('language') || 'zh', // set locale
  messages // set locale messages
})
export {i18n, vantLocales}
