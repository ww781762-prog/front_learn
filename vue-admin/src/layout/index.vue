<script setup lang="ts">

import Logo from "@/layout/logo/index.vue";
</script>

<template>

  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>
    </div>
    <div class="layout_tabbar">456</div>
    <div class="layout_main">789
      <p style="height: 100000px;background-color: red"></p>
    </div>
  </div>

</template>

<style scoped lang="scss">
.layout_container{
  width: 100%;
  height: 100vh;
  background-color: red;
  .layout_slider{
    width: variable.$base-menu-width;
    height: 100vh;
    background-color: variable.$base-menu-background;
  }
  .layout_tabbar{
    position: fixed;
    width: calc(100% - variable.$base-menu-width);
    height: variable.$base-tabbar-height;
    top: 0px;
    left: variable.$base-menu-width;
    background-color: white;
  }
  .layout_main{
    position: absolute;
    width: calc(100% - variable.$base-menu-width);
    height: calc(100vh - variable.$base-tabbar-height);
    left: variable.$base-menu-width;
    top: variable.$base-tabbar-height;
    background-color: aqua;
    overflow: auto;
  }
}
</style>