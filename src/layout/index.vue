<template>
  <div class="lg">
    <home-header v-if="this.$route.name === 'Home'" />
    <recall-header v-if="this.$route.name === 'Recall'" />
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
  data() {
    return {

    }
  },
  watch: {
    '$route': 'rounterChange'
  },
  created() {
    console.log(this.$route.name)
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