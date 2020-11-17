<template>
  <div class="lg">
    <home-header class="fixed z-50 top-0 w-full" v-show="active" />
    <recall-header class="fixed z-50 top-0 w-full" v-show="!active" />
    <div class="w-full h-full" :class="active ? 'mt-48 lg:mt-24': 'mt-16 lg:mt-24'">
      <app-main />
    </div>
    <v-footer v-if="this.$route.name !== 'Home' && this.$route.name !== 'Recall'"></v-footer>
  </div>
</template>

<script>
import { AppMain } from './components';
import HomeHeader from '@/components/header/home/HomeHeader';
import RecallHeader from '@/components/header/recall/RecallHeader';
import GlobalFooter from '@/components/footer/GlobalFooter';

export default {
  name: 'Layout',
  data() {
    return {
      active: false,

    }
  },
  watch: {
    '$route': 'rounterChange'
  },
  created() {
    this.active = this.$route.name === 'Home';
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
    RecallHeader,
    'v-footer': GlobalFooter,
  },
};
</script>

<style lang="less" scoped>
</style>