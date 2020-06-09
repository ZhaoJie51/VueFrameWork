<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <van-switch v-model="checked" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Switch } from "vant";

export default {
  name: "Home",
  data() {
    return {
      checked: true
    };
  },
  components: {
    [Switch.name]: Switch,
    HelloWorld
  }
};
</script>
