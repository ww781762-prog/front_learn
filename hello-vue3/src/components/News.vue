<script  lang="ts">
export default {
  name: 'News',
}
</script>
<script setup lang="ts">

</script>

<template>
  <div class="news">
    <ul>
      <li><a href="#">新闻</a></li>
      <li><a href="#">新闻</a></li>
      <li><a href="#">新闻</a></li>
      <li><a href="#">新闻</a></li>
      <li><a href="#">新闻</a></li>
    </ul>
  </div>
</template>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: center;
  height: 100%;
}
.news ul{
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}
.news li>a{
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}
</style>