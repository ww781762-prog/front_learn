<script setup lang="ts">
import {
  Edit,
} from '@element-plus/icons-vue'
import SvgIcon  from '@/components/SvgIcon/index.vue'
</script>

<template>
<div>
  <el-button type="primary" round>Primary</el-button>
  <el-button type="success" :icon="Edit" round>Primary</el-button>
   <svg-icon prefix="#icon-phone"></svg-icon>
</div>
</template>

<style scoped>

</style>
