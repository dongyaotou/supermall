<template>
  <!--这里就没有必要再搞一个根元素了-->
  <!--<div class='detail-swiper'>-->
  <swiper class="swiper">
    <swiper-item  v-for="item in topImages" :key="item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
  <!--</div>-->
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper"

  export default {
    name: "DetailSwiper",
    data() {
      return {}
    },
    //定义属性，接收传递过来的数据
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>
  .swiper{
    height: 300px;
    overflow: hidden;
  }
</style>
