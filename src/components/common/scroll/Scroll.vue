<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      };
    },
    props: {
      // 监听滚动事件
      probeType: {
        type: Number,
        default: 0
      },
      data: {
        type: Array,
        default: () => {
          return [];
        }
      },
      // 上拉加载更多
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    components: {},
    created() {
    },
    mounted() {
      // 创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      // 监听滚动的位置
      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on("scroll", position => {
          this.$emit("scroll", position);
        });
      }
      // 监听上拉加载事件 滚动到底部
      // if (this.pullUpLoad) {

      // }
      this.scroll.on("pullingup", () => {
        console.log('上拉加载');
        this.$emit("pullingup");
      });

      // 设置重新获取高度
      // this.scroll.refresh();
    },
    methods: {
      scrollTo(x, y, time = 500) {
        this.scroll && this.scroll.scrollTo(x, y, time);
      },
      // 上拉加载更多的方法
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
      },
      // 重新获取的封装
      refresh() {
        // console.log("-------")
        this.scroll && this.scroll.refresh();
      },
      // 保存离开时的状态包装
      getSaveY(){
        return this.scroll ? this.scroll.y : 0
      },
      getCurrentY(){
        //条件1 ||条件2
        return this._scroll.y ? this._scroll.y : 0;
      }
    }, watch: {
      data() {
        setTimeout(this.refresh, 20)
      }
    }
  }
</script>

<style scoped>

</style>
