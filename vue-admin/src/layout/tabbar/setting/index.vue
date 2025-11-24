<script setup lang="ts">

import {Setting,FullScreen,Refresh} from "@element-plus/icons-vue";
import useLayOutSettingStore from '@/store/modules/setting.ts'
import useUserStore from "@/store/modules/user.ts";
import { useRouter,useRoute } from 'vue-router';
import {ElNotification} from "element-plus";
const  fullScreen = ()=>{
  let full = document.fullscreenElement
  if (!full){
    document.documentElement.requestFullscreen()
  }else {
    document.exitFullscreen()
  }
}
let LayOutSettingStore = useLayOutSettingStore();
const updateRefsh = ()=>{
  LayOutSettingStore.refsh = !LayOutSettingStore.refsh
}

let userStore = useUserStore()
let $router=useRouter()
let $route=useRoute()

const  logout =async ()=>{
   try {
    await userStore.logout()
    $router.push({path:"/login",query:{redirect:$route.path}})
  }catch (error){
    if (error instanceof Error){
      ElNotification({
        type: 'error',
        message: (error as Error).message,
      })
    }
  }

}
</script>

<template>
  <el-button :icon="FullScreen" @click="fullScreen" circle />
  <el-button :icon="Refresh" @click="updateRefsh"  circle />
  <el-button :icon="Setting" circle />
  <img :src="userStore.avatar" style="height: 24px;width: 24px;margin-left: 20px">
  <el-dropdown class="user-dropdown">
        <span class="el-dropdown-link">
          {{userStore.username}}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
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
  margin-left: 5px;
}
</style>