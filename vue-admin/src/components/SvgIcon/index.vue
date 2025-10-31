<script setup lang="ts">

defineProps({
  prefix:{
    type: String,
    default:"#icon-phone"
  },
  name:String,
  color:{
    type:String,
    default:""
  },
  width:{
    type:String,
    default:"16px"
  },
  height:{
    type:String,
    default:"16px"
  }

})
</script>

<template>
  <svg :style="{width:width,height:height}">
    <use :xlink:href="prefix" :fill="color"></use>
  </svg>
</template>

<style scoped>

</style>