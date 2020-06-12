<template>
  <div class="index"></div>
</template>

<script>
import {Switch, NumberKeyboard} from 'vant'
import {api1,proxy_list} from '@/utils/api'
export default {
  name: 'index',
  data() {
    return {
      show: true,
      checked: true
    }
  },
  components: {
    [Switch.name]: Switch,
    [NumberKeyboard.name]: NumberKeyboard
  },
  mounted() {
    api1({
      type: 0,
      sort: 1
    })
      .then(res => {
        // success
        console.log(res)
      })
      .catch(error => {
        // error
        console.log(error)
      })
    proxy_list({
      type: 'top',
      key: '3dc86b09a2ee2477a5baa80ee70fcdf5'
    })
      .then(res => {
        // success
        console.log(res)
      })
      .catch(error => {
        // error
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped>
.block {
  font-size: 12px;
  width: 100px;
  height: 100px;
  background: #f3f3f3;
}
</style>
