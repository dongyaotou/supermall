<template>
  <div class='detail'>
    <detail-nav-bar></detail-nav-bar>
    <scroll class="contnet" ref="scroll">
      <div>
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info  :detail-info='detailInfo' @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info :param-info="paramInfo"></detail-param-info>
      </div>
    </scroll>

  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar';
  import DetailSwiper from './childComps/DetailSwiper';
  import DetailBaseInfo from "./childComps/DetailBaseInfo"
  import DetailShopInfo from "./childComps/DetailShopInfo"
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParamInfo from "./childComps/DetailParamInfo";
  import {getDetail, shop, Goods, GoodsParam} from "network/detail";
  import Scroll from "../../components/common/scroll/Scroll";

  export default {
    name: 'detail',
    data() {
      return {
        iid: null,
        topImages: [],
        // 三种数据
        goods: {},
        // 商家信息
        shop: {},
        // 商品详细信息
        detailInfo: {},
        // 参数信息
        paramInfo: {},
      }
    },
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo
    },
    created() {
      //获取iid
      this.iid = this.$route.params.iid;//获取动态路由传递过来的数据
      //根据iid请求详情数据
      getDetail(this.iid).then(res => {
        //1.获取顶部的图片轮播数据
        console.log(res);
        this.topImages = res.result.itemInfo.topImages;
        // 2. 获取商品信息
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
        console.log("goods columns=====" + this.goods.columns);
        // 3. 获取商家店铺信息
        this.shop = new shop(res.result.shopInfo);
        // 4. 保存商品详情数据
        this.detailInfo = res.result.detailInfo;
        console.log("detailInfo========"+this.detailInfo);
        console.log(this.detailInfo);
        // 5. 获取参数数据
        this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule);
      })

    },

    mounted() {
    },
    methods: {
      imageLoad(){
        this.$refs.scroll.refresh();
      }
    }
  }
</script>
<style  lang='scss'  scoped>
  .detail {
    position: relative;
    z-index: 13;
    background-color: #fff;
    height: 100vh;
  }

  .contnet {
    // height: calc(100%-44px);
    // position: absolute;

    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

  }

  .detail-nav {
    position: relative;
    z-index: 13;
    background-color: #fff;
  }
</style>
