<template>
  <div class="bg-white-400 h-full text-gray-600 flex flex-col">
    <div class="flex">
      <div class="sm:py-0 md:py-0 lg:py-10 lg:pr-12 xl:py-10 xl:pr-12 text-xl text-gray-800 hover:text-blue-600 focus:text-blue-800 focus" v-for="(item, index) of menuList" :key="index">
        <span>{{item.value}}</span>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="sm:p-4 md:p-4 sm:w-full md:w-full lg:w-3/5 xl:w-3/5">
        <div class="bg-transparent pt-4 pb-2 border-b border-gray-400" v-for="(item, index) of list" :key="index">
          <div>
            <h1 class="text-2xl text-gray-800">{{item.title}}</h1>
          </div>
          <div class="my-2">
            <span class="text-sm text-gray-400">{{item.display_time}}</span>
          </div>
          <p class="text-lg text-gray-800">
            {{item.content}}
          </p>
          <div class="flex my-2 items-center">
            <span class="text-lg text-gray-400 w-20">{{item.content_short}}</span>
            <div class="flex-1">
              <span class="border border-red-400 rounded bg-red-400 text-sm text-white px-2 py-1">{{item.content_label}}</span>
            </div>
            <span class="text-lg text-blue-400">
              查看详情
            </span>
          </div>
        </div>
      </div>
      <div class="w-2/5 pl-4 hidden sm:hidden md:hidden lg:block xl:block">
        <div class="flex flex-wrap">
          <img class="mt-2 border border-gray-800 h-24" v-for="(item, index) in imageList" :key="index" :src="item.image_uri" :class="item.size === 1 ? 'w-2/5 mr-6' : 'w-full'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchList, fetchMenuList, fetchImageList } from '@/api/recall';

export default {
  name: "Recall",
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      },
      menuList: null,
      imageList: null,
      imageListQuery: {
        page: 1,
        limit: 20
      },
      imageTotal: 0
    }
  },
  created() {
    this.getList()
    this.getMenuList()
    this.getImageList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    getMenuList() {
      this.listLoading = true
      fetchMenuList().then(response => {
        this.menuList = response.data.items
        this.listLoading = false
      })
    },
    getImageList() {
      this.listLoading = true
      fetchImageList(this.imageListQuery).then(response => {
        this.imageList = response.data.items
        this.imageTotal = response.data.total
        this.listLoading = false
      })
    }
  }
}
</script>