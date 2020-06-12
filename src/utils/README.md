

## 按需引入vant组件
```
<template>
  <div class="home">
    <van-switch v-model="checked" />
  </div>
</template>

<script>
import { Switch } from "vant";

export default {
  name: "home",
  data() {
    return {
      checked: true
    };
  },
  components: {
    [Switch.name]: Switch
  }
};
</script>
```

