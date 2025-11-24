<script setup lang="ts">
  import useUserStore from "@/store/modules/user.ts";
  let userStore = useUserStore()

</script>

<template>
  <p>home {{ userStore.username }}</p>
</template>

<style scoped>

</style>