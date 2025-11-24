<script setup lang="ts">
  import useLayOutSettingStore from '@/store/modules/setting.ts'
  import { useRoute } from 'vue-router';
  let LayOutSettingStore = useLayOutSettingStore();
  const changeIcon = ()=>{
    LayOutSettingStore.fold = !LayOutSettingStore.fold
  }
  let $route = useRoute()
</script>

<template>
  <el-icon style="margin-right: 20px" @click="changeIcon">
    <component :is="LayOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped>

</style>