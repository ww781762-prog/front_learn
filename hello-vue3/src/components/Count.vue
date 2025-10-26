<template>
  <div>
    <h2>当前求和为:{{ sum }}</h2>
    <h2>学校: {{school}}</h2>
    <select v-model.number="n">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <button @click="add">加</button>
    <button @click="sub">减</button>
  </div>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue'
import { useCountStore } from '@/store/count.ts'
import {storeToRefs}  from 'pinia'
const countStore = useCountStore()

let n = ref(1)
// 结构的响应式对象的时候需要加上ref，要不然结构后的对象不是响应式的
let {sum,school} = storeToRefs(countStore)
// let {sum} = countStore
//  Vue 在 reactive() 内部做了“ref 自动解包”
//    let obj  = reactive({
//     a:1,
//     b:2,
//     c:ref(3)
//   })
//   let x = ref(9)
//   console.log(obj.a)
//   console.log(obj.b)
//   console.log(obj.c)

function add() {
  //第一种修改
  // countStore.sum+=n.value
  //第二种修改
  // countStore.$patch({sum: countStore.sum+n.value})
  // 第三种方式
  countStore.AddCount(n.value)
}


function sub() {
  sum.value-=n.value
}
</script>
<script lang="ts">
export default {
  name: 'Count',
}
</script>

<style scoped></style>