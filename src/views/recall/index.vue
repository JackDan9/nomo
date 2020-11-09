<template>
  <div
    ref="scroll"
    class="pullup-wrapper mouse-wheel-pullup"
    style="height: 88vh; overflow: scroll"
  >
    <div class="lg:container lg:mx-auto">
      <div class="bg-white-400 h-full text-gray-600 flex flex-col">
        <div class="flex">
          <div
            class="sm:py-0 md:py-0 lg:py-10 lg:pr-12 xl:py-10 xl:pr-12 text-xl text-gray-800 hover:text-blue-600 focus:text-blue-800 focus"
            v-for="(item, index) of menuList"
            :key="index"
          >
            <span>{{ item.value }}</span>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div
            class="pullup-content sm:p-4 md:p-4 sm:w-full md:w-full lg:w-3/5 xl:w-3/5"
          >
            <div
              class="bg-transparent pt-4 pb-2 border-b border-gray-400"
              v-for="(item, index) of list"
              :key="index"
            >
              <div>
                <h1 class="text-2xl text-gray-800">{{ item.title }}</h1>
              </div>
              <div class="my-2">
                <span class="text-sm text-gray-400">{{
                  item.display_time
                }}</span>
              </div>
              <p class="text-lg text-gray-800">
                {{ item.content }}
              </p>
              <div class="flex my-2 items-center">
                <span class="text-lg text-gray-400 w-20">{{
                  item.content_short
                }}</span>
                <div class="flex-1">
                  <span
                    class="border border-red-400 rounded bg-red-400 text-sm text-white px-2 py-1"
                    >{{ item.content_label }}</span
                  >
                </div>
                <span class="text-lg text-blue-400 cursor-pointer"> 查看详情 </span>
              </div>
            </div>
          </div>
          <div class="w-2/5 pl-4 hidden sm:hidden md:hidden lg:block xl:block">
            <div class="flex flex-wrap">
              <img
                class="mt-2 border border-gray-800 h-24"
                v-for="(item, index) in imageList"
                :key="index"
                :src="item.image_uri"
                :class="item.size === 1 ? 'w-2/5 mr-6' : 'w-full'"
              />
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
import { fetchList, fetchMenuList, fetchImageList } from "@/api/recall";
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import MouseWheel from "@better-scroll/mouse-wheel";
BScroll.use(Pullup);
BScroll.use(MouseWheel);

export default {
  name: "Recall",
  data() {
    return {
      list: [],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
      },
      menuList: null,
      imageList: null,
      imageListQuery: {
        page: 1,
        limit: 20,
      },
      imageTotal: 0,
      isPullUpload: false,
    };
  },
  created() {
    this.getList();
    this.getMenuList();
    this.getImageList();
  },
  mounted() {
    this.initBscroll();
  },
  methods: {
    getList() {
      fetchList(this.listQuery).then((response) => {
        this.list = response.data.items;
      });
    },
    getScrollList() {
      return new Promise((resolve) => {
        fetchList(this.listQuery).then((response) => {
          setTimeout(() => {
            resolve(response.data.items);
          }, 2000);
        });
      });
    },
    getMenuList() {
      this.listLoading = true;
      fetchMenuList().then((response) => {
        this.menuList = response.data.items;
        this.listLoading = false;
      });
    },
    getImageList() {
      this.listLoading = true;
      fetchImageList(this.imageListQuery).then((response) => {
        this.imageList = response.data.items;
        this.imageTotal = response.data.total;
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
      this.isPullUpload = true;
      await this.requestData();
      this.scroll.finishPullUp();
      this.scroll.refresh();
      this.isPullUpload = false;
    },
    async requestData() {
      try {
        this.listQuery["page"] = this.listQuery["page"] + 1;
        const newList = await this.getScrollList();
        this.list = this.list.concat(newList);
      } catch (err) {
        console.log(err);
      }
    },
  },
  components: {},
};
</script>