<template>
  <div
    ref="scroll"
    class="pullup-wrapper mouse-wheel-pullup"
    style="height: 88vh; overflow: scroll"
  >
    <div class="lg:container lg:mx-auto">
      <div class="bg-white-400 h-full text-gray-600 flex flex-col">
        <div class="hidden lg:flex">
          <div
            class="sm:py-0 md:py-0 lg:py-10 lg:pr-12 xl:py-10 xl:pr-12 text-xl text-gray-800 hover:text-blue-600 focus:text-blue-800 focus cursor-pointer"
            v-for="(item, index) of menuList"
            :key="index"
          >
            <span>{{ item.value }}</span>
          </div>
        </div>

        <div class="fixed inset-0 h-full bg-white z-49 w-4/5 border-b pt-16" v-show="sidebar.opened">
          <div class="h-full overflow-hidden bg-white border-r border-gray-300">
            <nav class="overflow-hidden text-base">
              <div class="flex">
                <span class="w-full text-xl py-2 border-b border-gray-300 pl-6">全部分类</span>
              </div>
              <div class="flex flex-wrap items-center py-2 px-6 hover:text-gray-900 text-gray-900">
                <a href="/" class="w-full" v-for="(item, index) of menuList" :key="index">
                  <span class="inline-block text-base w-1/2 font-sans">{{ item.value }}</span>
                  <span class="inline-block text-right text-2xl w-1/2 font-mono">></span>
                </a>
              </div>
            </nav>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div
            class="pullup-content sm:p-4 md:p-4 sm:w-full md:w-full lg:w-3/5 xl:w-3/5"
          >
            <div
              class="bg-transparent pt-2 px-2 lg:px-0 lg:px-0 lg:pt-4 pb-4 lg:pb-2 border-b border-gray-400"
              v-for="(item, index) of list"
              :key="index">
              <div>
                <h1 class="text-xl lg:text-2xl text-gray-800 font-bold">{{ item.title }}</h1>
              </div>
              <div class="my-2">
                <span class="text-xs lg:text-sm text-gray-400">{{
                  item.display_time
                }}</span>
              </div>
              <p class="text-base lg:text-lg text-gray-800">
                {{ item.content }}
              </p>
              <div class="flex my-2 items-center">
                <span class="text-base lg:text-lg text-gray-400 w-20">{{
                  item.content_short
                }}</span>
                <div class="flex-1">
                  <span
                    class="border border-red-400 rounded bg-red-400 text-xs lg:text-sm text-white px-2 py-1"
                    >{{ item.content_label }}</span
                  >
                </div>
                <span class="text-base lg:text-lg text-blue-400 cursor-pointer" @click="handleRecallDetails(item.id)"> 查看详情 </span>
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
import { mapGetters } from 'vuex';
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
  computed: {
    ...mapGetters([
      'sidebar',
    ])
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
    handleRecallDetails(id) {
      console.log("`id`", `/recallDetail?recall_id=${id}`);
      let url = '';
      if(process.env.NODE_ENV === "development") {
        url = "http://localhost:9527/recallDetail?";
      } else {
        // 线上地址
        url = ""
      }
      
      window.open(url + `recall_id=${id}`);
    },
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