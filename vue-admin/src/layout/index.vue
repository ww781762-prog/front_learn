<script setup lang="ts">
import {useRoute} from 'vue-router'
import Logo from "@/layout/logo/index.vue";
import Menu from "@/layout/menu/index.vue";
import Main from "@/layout/main/index.vue"
import Tabber from "@/layout/tabbar/index.vue"
import userUserStore from '@/store/modules/user'
import useLayOutSettingStore from '@/store/modules/setting.ts'


let $route = useRoute()
let userStore = userUserStore()
let LayOutSettingStore = useLayOutSettingStore();

</script>

<template>

  <div class="layout_container">
    <div class="layout_slider" >
      <Logo></Logo>
      <!--       滚动菜单条-->
      <el-scrollbar class="scrollbar" >
      <!--<p v-for="item in 200" :key="item" class="scrollbar-demo-item">{{ item }}</p>-->
        <el-menu  :collapse="LayOutSettingStore.fold?true:false" :default-active="$route.path" background-color="#001529" text-color="white" >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!--顶部导航-->
    <div class="layout_tabbar" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Tabber></Tabber>
    </div>

    <div class="layout_main" :class="{ fold: LayOutSettingStore.fold ? true : false }">
      <Main></Main>
    </div>
  </div>

</template>

<style scoped lang="scss">
.layout_container{
  width: 100%;
  height: 100vh;
  .layout_slider{
    width: variable.$base-menu-width;
    height: 100vh;
    background-color: variable.$base-menu-background;
    .scrollbar {
      width: 100%;
      height: calc(100vh - variable.$base-menu-logo-height);
      .el-menu{
        border-right: none;
      }
    }
  }
  .layout_tabbar{
    position: absolute;
    width: calc(100% - variable.$base-menu-width);
    height: variable.$base-tabbar-height;
    top: 0px;
    left: variable.$base-menu-width;
    background-color: white;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - variable.$base-menu-min-width );
      left: variable.$base-menu-min-width;
    }
  }
  .layout_main{
    position: absolute;
    width: calc(100% - variable.$base-menu-width);
    height: calc(100vh - variable.$base-tabbar-height);
    left: variable.$base-menu-width;
    top: variable.$base-tabbar-height;
    background-color: aqua;
    padding: 20px;
    overflow: auto;
    box-sizing: border-box;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - variable.$base-menu-min-width );
      left: variable.$base-menu-min-width;
    }
  }
}
</style>