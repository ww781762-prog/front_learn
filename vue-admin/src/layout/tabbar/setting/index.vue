<script setup lang="ts">

import {Setting,FullScreen,Refresh} from "@element-plus/icons-vue";
</script>

<template>
  <el-button :icon="FullScreen" circle />
  <el-button :icon="Refresh" circle />
  <el-button :icon="Setting" circle />

  <el-dropdown class="user-dropdown">
        <span class="el-dropdown-link">
          admin<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item >退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

</template>

<style scoped>
/* 鼠标移上去有小手 */
.user-dropdown :deep(.el-dropdown-link) {
  cursor: pointer;
}

/* 关键：去掉获得焦点时的蓝色 outline 边框 */
.user-dropdown :deep(.el-tooltip__trigger:focus),
.user-dropdown :deep(.el-tooltip__trigger:focus-visible) {
  outline: none;
}
.user-dropdown{
  margin-left: 10px;
}
</style>