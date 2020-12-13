<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="index" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    //用于接收父组件传递过来的值 定义变量来进行接收
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .item {
    flex: 1;
  }
  img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
