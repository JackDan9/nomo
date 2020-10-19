<template>
  <div class="bg-gray-300 h-full text-gray-600 flex flex-col">
    <div class="p-4 flex flex-wrap">
      <div class="p-2" v-for="(item, index) of priceList" :key="index">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
          {{item.value}}
        </button>
      </div>
      <div class="p-2">
        <a href="" class="inline-flex text-blue-800 px-4 py-2 items-center">查看更多</a>
      </div>
    </div>

    <div class="p-4 flex flex-wrap">
      <div class="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div class="bg-white p-2 shadow h-64 md:h-48 w-full">
          <div class="flex justify-center">
            <div class="w-1/4">
              <h2 class="text-xl text-gray-800 font-bold">06:45</h2>
              <p class="airport">
                <span class="text-gray-800 text-xs">大兴国际</span>
                <span class="text-gray-800 text-xs">T1</span>
              </p>
            </div>
            <div class="w-2/4">
              <div class="text-gray-600 text-xs">2小时35分钟</div>
              <div class="line"></div>
            </div>
            <div class="w-1/4">
              <h2 class="text-xl text-gray-800 font-bold">08:45</h2>
              <p class="airport text-no-wrap">
                <span class="text-gray-800 text-xs">浦东机场</span>
                <span class="text-gray-800 text-xs">T3</span>
              </p>
            </div>
          </div>

          <div class="">

          </div>
          <!-- <img
            src="https://tailwindcss.com/img/card-left.jpg"
            alt=""
            class="h-full w-full object-cover"
          /> -->

        </div>
      </div>
      <div class="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div class="bg-white p-2 shadow h-64 md:h-48 w-full">
          <img
            src="https://tailwindcss.com/img/card-left.jpg"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div class="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div class="bg-white p-2 shadow h-64 md:h-48 w-full">
          <img
            src="https://tailwindcss.com/img/card-left.jpg"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div class="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div class="bg-white p-2 shadow h-64 md:h-48 w-full">
          <img
            src="https://tailwindcss.com/img/card-left.jpg"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div class="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div class="bg-white p-2 shadow h-64 md:h-48 w-full">
          <img
            src="https://tailwindcss.com/img/card-left.jpg"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div class="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div class="bg-white p-2 shadow h-64 md:h-48 w-full">
          <img
            src="https://tailwindcss.com/img/card-left.jpg"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div class="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div class="bg-white p-2 shadow h-64 md:h-48 w-full">
          <img
            src="https://tailwindcss.com/img/card-left.jpg"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div class="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div class="bg-white p-2 shadow h-64 md:h-48 w-full">
          <img
            src="https://tailwindcss.com/img/card-left.jpg"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div class="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div class="bg-white p-2 shadow h-64 md:h-48 w-full">
          <img
            src="https://tailwindcss.com/img/card-left.jpg"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
      <div class="p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <div class="bg-white p-2 shadow h-64 md:h-48 w-full">
          <img
            src="https://tailwindcss.com/img/card-left.jpg"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchList, fetchPriceList } from '@/api/home';

export default {
  name: "Home",
  data() {
    return {
      list: [
        {
          id: 0,
          fly_start_time: '06:45',
          fly_end_time: '08:45',
          departure: '大兴国际',
          destination: '浦东机场T1',
          price: '200',
          class: '经济舱',
          airline: '上海航空9C8542 波音787'
        },
        {
          id: 1,
          fly_start_time: '06:45',
          fly_end_time: '08:45',
          departure: '大兴国际',
          destination: '浦东机场T1',
          price: '200',
          class: '经济舱',
          airline: '上海航空9C8542 波音787'
        }
      ],
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      priceList: [
        {'value': 100},
        {'value': 200},
        {'value': 300},
        {'value': 400},
        {'value': 500},
        {'value': 600},
        {'value': 700},
        {'value': 800},
        {'value': 900},
        {'value': 1000},
        {'value': 1100},
        {'value': 1200},
      ],
    }
  },
  created() {
    this.getList();
    // this.getPriceList();
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
    getPriceList() {
      this.listLoading = true
      fetchPriceList().then(response => {
        this.priceList = response.data.priceList
        this.listLoading = false
      })
    }
  }
};
</script>

<style lang="less" scoped>
</style>