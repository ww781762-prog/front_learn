<script setup lang="ts">
import {ref, watch,nextTick} from 'vue'
import useLayOutSettingStore from '@/store/modules/setting.ts'
let LayOutSettingStore = useLayOutSettingStore();
let flag = ref(true)
watch(()=>LayOutSettingStore.refsh,()=>{
  flag.value=false
  nextTick(()=>{
    flag.value = true;
  })
})
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag" />
    </transition>
  </router-view>
</template>

<style scoped>
.fade-enter-from{
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active{
  transition: all 1s;

}

.fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
</style>