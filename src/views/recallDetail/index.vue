<template>
  <div class="overflow-y-auto pb-8 font-serif">
    <div class="lg:container lg:mx-auto">
      <div class="flex">
      <div class="px-2 sm:p-4 md:p-4 sm:w-full md:w-full lg:w-3/5 xl:w-3/5">
        <div class="hidden lg:block pt-0 pb-0 lg:pt-8 lg:pb-6">
          首页 > 儿童用品 > 查看详情
        </div>
        <div class="w-full">
          <div class="w-full">
            <div class="text-3xl font-semibold tracking-wider">
              {{data.title || '-'}}
            </div>
            <div class="text-sm text-gray-600 tracking-wider">
              {{data.display_time || '-'}}
            </div>
          </div>
          <div class="w-full">
            <div class="w-full">
              <div class="flex flex-wrap">
                <img class="mt-2 border boder-gray-800 h-56 w-full" src="https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3" alt="" />
                <img class="mt-2 border boder-gray-800 h-56 w-full" src="https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3" alt="" />
              </div>
              <div class="flex flex-wrap">
                <p class="block w-full text-xl">
                  <span class="font-semibold tracking-wider">召回日期: </span>
                  <span class="tracking-normal">{{data.recall_date || '-'}}</span>
                </p>
                <p class="block w-full text-xl">
                  <span class="font-semibold tracking-wider">品牌: </span>
                  <span class="tracking-normal">{{data.brand_name || '-'}}</span>
                </p>
                <p class="block w-full text-xl">
                  <span class="font-semibold tracking-wider">产地: </span>
                  <span class="tracking-normal">{{data.origin_place || '-'}}</span>
                </p>
                <p class="block w-full text-xl mb-2">
                  <span class="font-semibold tracking-wider">危害级别: </span>
                  <span class="tracking-normal">{{data.hazard_level || '-'}}</span>
                </p>
                <p class="block w-full text-xl mt-2">
                  <span class="font-semibold tracking-wider">类别: </span>
                  <span class="tracking-normal">{{data.type || '-'}}</span>
                </p>
                <p class="block w-full text-xl">
                  <span class="font-semibold tracking-wider">产品: </span>
                  <span class="tracking-normal">{{data.production || '-'}}</span>
                </p>
                <p class="block w-full text-xl">
                  <span class="font-semibold tracking-wider">货号: </span>
                  <span class="tracking-normal">{{data.item_num || '-'}}</span>
                </p>
                <p class="block w-full text-xl">
                  <span class="font-semibold tracking-wider">风险: </span>
                  <span class="tracking-normal">{{data.risk || '-'}}</span>
                </p>
              </div>
              <div class="flex flex-wrap">
                <img class="mt-2 border boder-gray-800 h-56 w-full" src="https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3" alt="" />
                <img class="mt-2 border boder-gray-800 h-56 w-full" src="https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3" alt="" />
              </div>
              <div class="flex flex-wrap">
                <p class="block w-full text-xl">
                  <span class="font-semibold tracking-wider">详细描述: </span>
                  <span class="tracking-normal">{{data.content || '-'}}</span>
                </p>
                <p class="block w-full text-xl">
                  <span class="font-semibold tracking-wider">召回原因: </span>
                  <span class="tracking-normal">{{data.recall_reason || '-'}}</span>
                </p>
                <p class="block w-full text-xl">
                  <span class="font-semibold tracking-wider">召回方式: </span>
                  <span class="tracking-normal">{{data.recall_way || '-'}}</span>
                </p>
                <p class="block w-full text-xl">
                  <span class="font-semibold tracking-wider">消费者权益: </span>
                  <span class="tracking-normal">{{data.consumer_rights || '-'}}</span>
                </p>
                <p class="block w-full text-xl">
                  <span class="font-semibold tracking-wider">(致: 零售商): </span>
                  <span class="tracking-normal">{{data.letter || '-'}}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full mt-12">
            <div class="text-2xl border-l-4 border-blue-600">
              <span class="pl-2">相关信息</span>
            </div>
            <div class="flex flex-wrap">
              <p class="w-full text-xl mt-4 cursor-pointer" v-for="(item, index) in data.links" :key="index">
                <span>{{item.link_title || '-'}}</span>
                <span class="text-gray-500 pl-2 hidden lg:inline-block">{{item.link_date || '-'}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/5 pl-4 hidden pt-0 lg:block lg:pt-8">
        <div class="flex flex-wrap">
          <img class="mt-2 border boder-gray-800 h-56 w-full" src="https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3" alt="" />
          <img class="mt-2 border boder-gray-800 h-56 w-full" src="https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3" alt="" />
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import { detail } from "@/api/recall";
export default {
  data() {
    return {
      params: {
        id: '',
        type: 1,
      },
      isLoading: false,
      data: {}
    }
  },
  mounted() {
    this.params.id = this.$route.query.recall_id;
    this.handleSearch();
  },
  methods: {
    // async handleSearch() {
    //   this.isLoading = true;
    //   this.data = await detail(this.params);
    //   this.isLoading = false;
    // }
    handleSearch() {
      detail(this.params).then(response => {
        this.data = response.data;
      })
    }
  }
}
</script>
<style lang="less" scoped>

</style>