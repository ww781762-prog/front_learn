<script setup lang="ts">

defineProps({
  prefix:{
    type: String,
    default:"#icon-phone"
  }
})
</script>

<template>
  <svg>
    <use :xlink:href="prefix"></use>
  </svg>
</template>

<style scoped>

</style>