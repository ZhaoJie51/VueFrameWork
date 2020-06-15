<template>
  <div class="index">
    <van-nav-bar :title="title">
      <template #right>
        <van-button type="primary" size="mini" plain hairline round @click="onClickLang">{{ $t('lang.text') }}</van-button>
      </template>
    </van-nav-bar>
    <div class="title">基础组件</div>
    <van-cell-group>
      <van-cell title="Layout 布局" is-link to="/basic/layout" />
      <van-cell title="Popup 弹出层" is-link to="/basic/layout" />
    </van-cell-group>
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择年月日"
      :min-date="minDate"
      :max-date="maxDate"
    />
  </div>
</template>

<script>
import {Switch, NumberKeyboard, Locale, DatetimePicker} from 'vant'
import {api1, proxy_list} from '@/utils/api'
export default {
  name: 'index',
  data() {
    return {
      show: true,
      checked: true,
      title: this.$t('home.title'),
       minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    }
  },
  components: {
    [Switch.name]: Switch,
    [NumberKeyboard.name]: NumberKeyboard,
    [DatetimePicker.name]: DatetimePicker
  },
  mounted() {

    // api1({
    //   type: 0,
    //   sort: 1
    // })
    //   .then(res => {
    //     // success
    //     console.log(res)
    //   })
    //   .catch(error => {
    //     // error
    //     console.log(error)
    //   })
    // proxy_list({
    //   type: 'top',
    //   key: '3dc86b09a2ee2477a5baa80ee70fcdf5'
    // })
    //   .then(res => {
    //     // success
    //     console.log(res)
    //   })
    //   .catch(error => {
    //     // error
    //     console.log(error)
    //   })
  },
  methods: {
    onClickLang() {
      let that = this
      let locale = that.$i18n.locale
      locale === 'zh' ? locale = 'en' : locale = 'zh'
      that.$i18n.locale = locale
      console.log(that.$t('home.title'));
      
      that.title = that.$t('home.title')
      that.$Local(locale) //更改vant的语言
      localStorage.setItem('language', locale)
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  background: #f3f3f3;
  .title {
    line-height: 2em;
    padding: 0 15px;
    color: #999;
    font-size: 16px;
  }
}
</style>
