<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="index"
          :class="{active:currentIndex==index}"
          class="title-item"
          @click="titleClick(index)"
        >{{item}}
        </div>
      </div>
    </nav-bar>
  </div>

</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';

  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    data() {
      return {
        titles: ["商品", "参数", "评论", "推荐"],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        console.log(index);
        this.currentIndex=index;
      },
      //返回
      backClick() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang='scss' scoped>
  .title {
    display: flex;
  }

  .title-item {
    flex: 1;
  }

  .active {
    /*color: var(--color-high-text);*/
    color: orangered;
  }

  .back img {
    margin-top: 10px;
    margin-left: 15px;
  }
</style>
