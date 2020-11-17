<template>
  <div class="h-24 lg:h-32 bg-gray-400">
    <div class="flex flex-wrap items-center h-full lg:container xl:mx-auto">
      <div class="w-full lg:w-1/2 text-xs flex justify-center -mb-6 lg:mb-0 lg:text-base">
        {{company}}
      </div>
      <div class="w-full lg:w-1/2 flex justify-center -mt-6 lg:mt-0 lg:justify-end text-xs lg:text-base">
        <p>{{address}}</p>
        <p class="ml-4 cursor-pointer">{{linkUs}}</p>
        <p class="ml-4 cursor-pointer">{{addUs}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data() {
    return {
      company: "© 2020，NoCode Tech. NOMO科技有限公司",
      address: "豫 ICP备 17009899",
      linkUs: "联系我们",
      addUs: "加入我们",
    }
  },
  created() {

  },
  mounted() {

  },

}
</script>

<style lang="less" scoped>
 
</style>