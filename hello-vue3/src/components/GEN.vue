<script setup lang="ts">
import { reactive } from 'vue'
let games = reactive([
  {id:'asgdytsa01',name:'英雄联盟'},
  {id:'asgdytsa02',name:'王者荣耀'},
  {id:'asgdytsa03',name:'红色警戒'},
  {id:'asgdytsa04',name:'斗罗大陆'}
])
</script>

<template>
  <slot name="abc" a="哈哈"></slot>
  <slot name="ab" :game="games"></slot>
</template>

<style scoped>

</style>