<template>
  <div class="lg">
    <home-header class="fixed z-50 top-0 w-full" v-if="this.$route.name === 'Home'" />
    <recall-header class="fixed z-50 top-0 w-full" v-else />
    <div class="w-full h-full mt-48 sm:mt-48 md:mt-48 lg:mt-20 xl:mt-24">
      <app-main />
    </div>
  </div>
</template>

<script>
import { AppMain } from './components';
import HomeHeader from '@/components/header/home/HomeHeader';
import RecallHeader from '@/components/header/recall/RecallHeader';

export default {
  name: 'Layout',
  data() {
    return {

    }
  },
  watch: {
    '$route': 'rounterChange'
  },
  created() {
  },
  methods: {
    routerChange: function(to, from) {
      console.log(to.path)
      console.log(from.path)
    },
  },
  components: {
    AppMain,
    HomeHeader,
    RecallHeader
  },
};
</script>

<style lang="less" scoped>
</style>