<template>
  <div class="lg">
    <!-- <global-header /> -->
    <recall-header />
    <div class="lg:container lg:mx-auto">
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
  watch: {
    '$route': 'rounterChange'
  },
  routerChange: function(to, from) {
    console.log(to.path)
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