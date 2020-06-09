<template>
  <div class="home">
    <div class="block">测试</div>
    <van-switch v-model="checked" size="14" />
  </div>
</template>

<script>
import {Switch} from 'vant'

export default {
  name: 'Home',
  data() {
    return {
      checked: true
    }
  },
  components: {
    [Switch.name]: Switch
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
