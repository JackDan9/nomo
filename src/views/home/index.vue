<template>
  <div
    ref="scroll"
    class="pullup-wrapper mouse-wheel-pullup"
    style="height: 88vh"
  >
    <div class="lg:container lg:mx-auto">
      <div class="bg-white-400 h-full text-gray-600 flex flex-col">
        <div
          class="flex overflow-x-auto sm:overflow-x-auto sm:w-full lg:overflow-hidden xl:overflow-hidden h-16"
        >
          <div
            class="pt-4 pl-4 pr-4"
            v-for="(item, index) of priceList"
            :key="index"
          >
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded"
            >
              {{ item.value }}
            </button>
          </div>
          <div class="hidden sm:hidden md:hidden lg:block xl:block pt-4">
            <a href="" class="inline-flex text-blue-800 px-4 py-2 items-center"
              >查看更多</a
            >
          </div>
        </div>
        <div class="pullup-content flex flex-wrap">
          <div
            class="px-4 pt-4 pb-6 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
            v-for="(item, index) of data"
            :key="index"
          >
            <div
              class="bg-white p-4 shadow h-36 md:h-36 w-full border border-gray-400 rounded hover:border-blue-600"
            >
              <div class="flex justify-center">
                <div class="w-16 text-center">
                  <h2 class="text-xl text-gray-800 font-bold">
                    {{ item.fly_start_time }}
                  </h2>
                  <p class="text-gray-800 text-xs">
                    <span>{{ item.departure }}</span>
                    <!-- <span>T1</span> -->
                  </p>
                </div>
                <div class="flex-1">
                  <div class="text-gray-600 text-xs text-center">
                    {{ item.fly_speed_time }}
                  </div>
                  <div class="line py-1"></div>
                </div>
                <div class="w-16 text-center">
                  <h2 class="text-xl text-gray-800 font-bold">
                    {{ item.fly_end_time }}
                  </h2>
                  <p class="text-gray-800 text-xs">
                    <span>{{ item.destination }}</span>
                    <!-- <span>T3</span> -->
                  </p>
                </div>
              </div>
              <div class="flex justify-center h-12 mt-10">
                <div class="w-3/4">
                  <div class="flex items-center">
                    <p>
                      <span
                        class="text-red-600 text-xs inline-flex items-end justify-end"
                        >￥</span
                      >
                      <span class="text-red-600 text-xl font-bold -ml-1">{{
                        item.price
                      }}</span>
                    </p>
                    <span class="text-gray-400 text-sm ml-3">{{
                      item.class
                    }}</span>
                  </div>
                  <div class="-mt-2">
                    <span class="text-gray-800 text-sm">{{
                      item.airline
                    }}</span>
                    <span class="text-gray-400 text-sm ml-2">{{
                      item.airport
                    }}</span>
                  </div>
                </div>
                <div class="flex-1 h-10 mt-1">
                  <button
                    class="w-full h-full bg-white-500 text-blue-500 font-bold rounded border border-blue-500"
                  >
                    订票
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full text-center text-gray-600">
          <div v-if="isPullUpload" class="text-center w-full">
            <span class="w-full text-center text-gray-600">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchList, fetchPriceList } from "@/api/home";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import MouseWheel from "@better-scroll/mouse-wheel";
BScroll.use(Pullup);
BScroll.use(MouseWheel);

export default {
  name: "Home",
  data() {
    return {
      data: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 12,
      },
      priceList: null,
      isPullUpload: false,
    };
  },
  mounted() {
    this.initBscroll();
  },
  created() {
    this.getList();
    this.getPriceList();
  },
  methods: {
    getList() {
      fetchList(this.listQuery).then((response) => {
        this.data = response.data.items;
      });
    },
    getData() {
      return new Promise((resolve) => {
        fetchList(this.listQuery).then((response) => {
          setTimeout(() => {
            resolve(response.data.items);
          }, 2000);
        });
      });
    },
    getPriceList() {
      this.listLoading = true;
      fetchPriceList().then((response) => {
        this.priceList = response.data.items;
        this.listLoading = false;
      });
    },
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
        this.listQuery["page"] = this.listQuery["page"] + 1;
        const newData = await this.getData();
        this.data = this.data.concat(newData);
      } catch (err) {
        console.log(err);
      }
    },
  },
  components: {
    // "pull-refresh": PullRefresh,
  },
};
</script>

<style lang="less" scoped>
.line {
  border-bottom: 1px solid #dfdfdf;
}

.line::after {
  content: " ";
  border-bottom: 1px solid #dfdfdf;
  width: 7px;
  float: right;
  margin-top: 1px;
  display: inline-block;
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
</style>