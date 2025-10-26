<script setup lang="ts">
import { reactive } from 'vue'
import axios from 'axios'
import { nanoid } from 'nanoid'

let talkList = reactive([
  { id: 'ftrfasdf01', title: '今天你有点怪，哪里怪？怪好看的！' },
  { id: 'ftrfasdf02', title: '草莓、蓝莓、蔓越莓，今天想我了没？' },
  { id: 'ftrfasdf03', title: '心里给你留了一块地，我的死心塌地' },
])

async function getTalkList() {
  // {
  //   "id": 6212,
  //   "uuid": "e4c6a54a-be51-4cdd-88ab-3df273dbaa87",
  //   "hitokoto": "在不同的遭遇里我发现你的瞬间，有种不可言说的温柔直觉。",
  //   "type": "j",
  //   "from": "保留",
  //   "from_who": "郭顶",
  //   "creator": "陨星、若芜芫",
  //   "creator_uid": 6317,
  //   "reviewer": 1044,
  //   "commit_from": "web",
  //   "created_at": "1590718236",
  //   "length": 27
  // }
  // 连续解包 返回数据结构如上，title 把解析后的数据命名成title
  let {
    data: { hitokoto: title },
  } = await axios.get('https://v1.hitokoto.cn/')
  let obj = { id: nanoid(), title }
  talkList.unshift(obj)
}
</script>
<script lang="ts">
export default {
  name: 'LoveTalk',
}
</script>

<template>
  <div class="talk">
    <button @click="getTalkList">获取新数据</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
