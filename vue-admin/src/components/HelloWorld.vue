<script setup lang="ts">
import {
  Edit,
} from '@element-plus/icons-vue'
</script>

<template>
<div>
  <el-button type="primary" round>Primary</el-button>
  <el-button type="success" :icon="Edit" round>Primary</el-button>
  <p>hell word</p>
</div>
</template>

<style scoped lang="scss">
p{
  color: variable.$global-color;
}
</style>
