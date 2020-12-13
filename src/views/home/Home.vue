<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from './childComps/HomeSwiper.vue';
  import RecommendView from './childComps/RecommendView';
  import FeatureView from './childComps/FeatureView'
  import {getHomeMultidata} from "network/home";

  export default {
    name: "home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
        banners:[],
        recommends:[]
      }
    },

    created() {
      //1.请求首页轮播图的多个数据
      getHomeMultidata().then(res=>{
        console.log(res);
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }
</style>
