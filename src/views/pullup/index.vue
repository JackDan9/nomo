<template>
  <div class="mouse-wheel-pullup">
    <div ref="scroll" class="pullup-wrapper" style="height: 100vh;">
      <div class="pullup-content">
        <ul class="pullup-list">
          <li v-for="(i, index) of data" :key="index" class="pullup-list-item">
            {{i % 5 === 0 ? "use your mousewheel please 👆🏻" : `I am item ${i} `}}
          </li>
        </ul>
        <div class="pullup-tips">
          <div v-if="!isPullUpLoad" class="before-trigger">
            <span class="pullup-txt"
              >mousewheel trigger pullingup and load more</span
            >
          </div>
          <div v-else class="after-trigger">
            <span class="pullup-txt">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import MouseWheel from "@better-scroll/mouse-wheel";
BScroll.use(Pullup);
BScroll.use(MouseWheel);

export default {
  data() {
    return {
      isPullUpLoad: false,
      data: 30,
    };
  },
  mounted() {
    this.initBscroll();
  },
  methods: {
    initBscroll() {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: 3,
        pullUpLoad: true,
        mouseWheel: true,
      });
      this.scroll.on("pullingUp", this.pullingUpHandler);
    },
    async pullingUpHandler() {
      this.isPullUpLoad = true;
      await this.requestData();
      this.scroll.finishPullUp();
      this.scroll.refresh();
      this.isPullUpLoad = false;
    },
    async requestData() {
      try {
        const newData = await this.ajaxGet(/* url */);
        this.data += newData;
      } catch (err) {
        // handle err
        console.log(err);
      }
    },
    ajaxGet(/* url */) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(20);
        }, 1000);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.pullup {
  height: 100%;
}
.pullup-wrapper {
  height: 100%;
  padding: 0 10px;
  border: 1px solid #ccc;
  overflow: hidden;
}
.pullup-list {
  padding: 0;
}
.pullup-list-item {
  padding: 10px 0;
  list-style: none;
  border-bottom: 1px solid #ccc;
}
.pullup-tips {
  padding: 20px;
  text-align: center;
  color: #999;
}
</style>
