<!--
 * @Author: your name
 * @Date: 2021-01-09 13:05:33
 * @LastEditTime: 2021-03-31 00:07:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3_demo\src\views\Home.vue
-->
<template>
  <div class="home">
    <index type="primary" plain round @click="nodeClick" debounce></index>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import index from "@/components/Button/index.vue";
type Func = (e: Event) => void;
export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    index
  },
  setup(props, context) {
    const nodeClick: Func = e => {
      console.log("e: ", e);
    };
    return {
      nodeClick
    };
  }
});
</script>
