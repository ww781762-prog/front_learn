<script setup lang="ts">
import GEN from '@/components/GEN.vue'
</script>

<template>
  <div>
    <GEN v-slot:abc="params">
      <p>{{params.a}}</p>
    </GEN>
<!--    解构传递过来的参数-->
    <GEN v-slot:ab="{game}">
      <ul>
        <li v-for="g in game" :key="g.id">{{g.name}}</li>
      </ul>
    </GEN>
  </div>
</template>

<style scoped>

</style>