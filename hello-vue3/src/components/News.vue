<script lang="ts">
export default {
  name: 'News',
}
</script>
<script setup lang="ts">
import {RouterView} from 'vue-router'
import {reactive} from "vue";

import {useRouter} from "vue-router";

const newsList = reactive([
  {id: 'asfdtrfay01', title: '很好的抗癌食物', content: '西蓝花'},
  {id: 'asfdtrfay02', title: '如何一夜暴富', content: '学IT'},
  {id: 'asfdtrfay03', title: '震惊，万万没想到', content: '明天是周一'},
  {id: 'asfdtrfay04', title: '好消息！好消息！', content: '快过年了'}
])

interface newsInter{
  id:string
  title:string
  content:string
}


const router=useRouter()

function showNewsDetail(news: newsInter){
  router.push({
    name:"detail",
    query:{id:news.id,title:news.title,content:news.content}
    // params:{id:news.id,title:news.title,content:news.content}
  })
}

</script>

<template>
  <div class="news">
    <ul>
      <li v-for="news  in newsList" :key="news.id">
<!--        <RouterLink :to="`/news/detail?id=${news.id}&title=${news.title}&content=${news.content}`" >{{ news.title }}</RouterLink>-->
        <button @click="showNewsDetail(news)">{{news.title}}</button>
      </li>
    </ul>
    <div class="news_detail">
      <router-view></router-view>
    </div>
  </div>

</template>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: center;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  list-style: none;
  padding-right: 10px;
}

.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news_detail {
  border: 1px dashed #000;
  width: 70%;
  height: 90%;
  margin-top: 20px;
  border-radius: 10px;
}
</style>