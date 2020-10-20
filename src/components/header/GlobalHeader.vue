<template>
  <div class="h-48 sm:h-12 md:h-48 lg:h-20 xl:h-24 bg-blue-600">
    <div class="lg:container lg:mx-auto 
                flex flex-wrap 
                items-center justify-between h-full">
      <div class="hidden sm:hidden md:hidden lg:flex xl:flex h-16 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
        <img src="../../assets/logo.png" alt="nomo" class="h-full w-full object-cover" />
      </div>

      <div class="h-12 sm:h-12 md:h-12 lg:h-16 xl:h-16 flex 
                  w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/5 
                  bg-white border rounded mx-4">
        <div class="flex flex-col w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4 justify-center items-start">
          <span class="hidden sm:hidden md:hidden lg:inline-block text-sm text-gray-400 px-1 py-1">出发地</span>
          <div class="text-lg text-gray-800 px-1">北京(BJS)</div>
        </div>
        <div class="h-full inline-flex justify-center items-center text-gray-400">
          <svg class="fill-current w-6 h-6 mr-2 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        </div>
        <div class="flex flex-col w-1/2 sm:w-auto md:w-full lg:w-32 xl:w-3/4 justify-center items-end sm:justify-center sm:items-end md:justify-center md:items-end lg:justify-center lg:items-start xl:justify-center xl:items-start">
          <span class="hidden sm:hidden md:hidden lg:inline-block text-sm text-gray-400 px-1 py-1">目的地</span>
          <div class="text-lg text-gray-800 px-1">郑州(ZHZ)</div>
        </div>
      </div>

      <div class="flex sm:flex-row md:flex-row lg:flex-col xl:flex-col
                  w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/5 
                  h-12 sm:h-12 md:h-12 lg:h-16 xl:h-16 items-center 
                  mx-4 bg-white border rounded">
        <span class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-full xl:w-full 
                     text-lg sm:text-base md:text-base lg:text-sm xl:text-sm 
                     text-gray-400 px-1 py-1">出发日期</span>
        <div class="w-1/2 sm:w-1/2 md:w-1/2 lg:w-full xl:w-full 
                    text-lg 
                    text-right sm:text-right md:text-right lg:text-left xl:text-left 
                    text-gray-800 px-1">2020-10-05</div>
      </div>

      <div class="flex 
                  w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/5 xl:py-3 
                  h-12 sm:h-12 md:h-12 lg:h-16 xl:h-16 items-center
                  items-center justify-center bg-yellow-600 rounded-full sm:rounded-full md:rounded-full lg:rounded xl:rounded mx-4">
        <div class="px-2">
          <img src="" alt="" class="h-8 rounded-full border" />
        </div>
        <div class="text-white text-base">搜索航班</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalHeader",
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
};
</script>

<style lang="less" scoped>
</style>