<template>
  <li>编号：{{ id }}</li>
  <li>标题：{{ title }}</li>
  <li>内容：{{ content }}</li>
</template>
<script setup lang="ts">
  defineProps(['id', 'title', 'content'])
  // import {useRoute} from "vue-router"
  // import  {toRefs} from "vue"
  // const router=useRoute()
  // console.log("$#######",router.query)
  // let {query}=toRefs(router)
  // console.log("$#######",query)


</script>

<style scoped>

</style>