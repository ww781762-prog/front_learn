<script setup lang="ts">
import setting from '@/setting.ts';
</script>
<script lang="ts">
export default{
  name: "Logo"
}
</script>
<template>
<div class="logo" v-if="setting.logoHidden">
  <img :src="setting.logo">

  <p>{{setting.title}}</p>
</div>
</template>

<style scoped lang="scss">
.logo{
  width: 100%;
  height: variable.$base-menu-logo-height;
  color: white;
  display: flex;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  img{
    width: 40px;
    height: 40px;
  }
  p{
    font-size: variable.$base-logo-title-fontSize;
    margin-left: 10px;
  }
}
</style>