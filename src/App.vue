<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Card from "./components/Card.vue";
import Menu from "./components/Menu/Menu.vue";
</script>

<template>
  <div class="app">
     <!-- <Menu /> -->
    <HelloWorld />
    <!-- <Card class="content" /> -->
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column; /* 设置垂直排列 */
  height: 100vh;
  width: 100wh;
}
.content {
  flex: 1; /* 让内容区域占据剩余空间 */
  padding: 10px;
  overflow: auto;
}
</style>
