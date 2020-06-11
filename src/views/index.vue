<template>
  <div class="home"></div>
</template>

<script>
import {Switch, NumberKeyboard} from 'vant'
import {newsList} from '@/api/newsList'
import {baseUrl} from '@/config'
export default {
  name: 'Home',
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
    console.log(baseUrl)
    newsList()
      .then(res => {
        // 获取数据成功后的其他操作
      })
      .catch(error => {
        // error
        console.log(error)
      })
    // var that = this //用that去保存vue的实例
    // that.$axios.get('/api/newsList').then(function(res) {
    //   that.message = res.data.list
    //   console.log(res)
    // })
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
